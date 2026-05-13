#!/usr/bin/env node

/**
 * AI Bundle Optimizer - Autonomous bundle size optimization
 * 
 * Features:
 * - Analyzes bundle sizes
 * - Identifies large dependencies
 * - Suggests code splitting opportunities
 * - Removes unused code
 * - Optimizes imports
 * - Generates optimization reports
 * 
 * @author AI Automation System
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

const CONFIG = {
  rootDir: process.cwd(),
  logsDir: path.join(process.cwd(), 'automation', 'logs'),
  reportsDir: path.join(process.cwd(), 'automation', 'reports'),
  autoCommit: process.env.AUTO_COMMIT !== 'false',
  autoPush: process.env.AUTO_PUSH !== 'false',
};

class BundleOptimizer {
  constructor() {
    this.logFile = path.join(CONFIG.logsDir, 'bundle-optimizer.log');
  }

  async log(message, data = null) {
    const timestamp = new Date().toISOString();
    const logLine = `[${timestamp}] ${message}${data ? ' ' + JSON.stringify(data) : ''}\n`;
    console.log(logLine.trim());
    try {
      await fs.appendFile(this.logFile, logLine);
    } catch (err) {
      console.error('Log error:', err.message);
    }
  }

  async execCommand(command, silent = true) {
    try {
      const result = execSync(command, {
        cwd: CONFIG.rootDir,
        encoding: 'utf8',
        stdio: silent ? 'pipe' : 'inherit',
        maxBuffer: 10 * 1024 * 1024,
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async analyzeBundle() {
    await this.log('📦 Analyzing bundle sizes...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      buildStats: null,
      largeFiles: [],
      optimizationOpportunities: [],
    };

    // Try to get build stats
    try {
      const buildResult = await this.execCommand('npm run build 2>&1 | tail -50', true);
      if (buildResult.success) {
        analysis.buildStats = {
          success: true,
          output: buildResult.output,
        };
      }
    } catch (e) {
      await this.log('⚠️  Build analysis skipped', { error: e.message });
    }

    // Analyze node_modules size
    try {
      const nodeModulesSize = await this.execCommand('du -sh node_modules 2>/dev/null | cut -f1', true);
      if (nodeModulesSize.success) {
        analysis.nodeModulesSize = nodeModulesSize.output.trim();
      }
    } catch (e) {
      // Skip if fails
    }

    // Check for large files in .next
    try {
      const nextDir = path.join(CONFIG.rootDir, '.next');
      const files = await fs.readdir(nextDir, { recursive: true }).catch(() => []);
      
      for (const file of files.slice(0, 20)) {
        try {
          const filePath = path.join(nextDir, file);
          const stats = await fs.stat(filePath);
          if (stats.isFile() && stats.size > 100000) { // > 100KB
            analysis.largeFiles.push({
              file,
              size: stats.size,
              sizeKB: (stats.size / 1024).toFixed(2),
            });
          }
        } catch (e) {
          // Skip individual file errors
        }
      }
    } catch (e) {
      // .next might not exist
    }

    // Check for barrel exports (index.ts files that re-export everything)
    try {
      const barrelFiles = await this.execCommand('find src -name "index.ts" -o -name "index.tsx" | head -20', true);
      if (barrelFiles.success) {
        const files = barrelFiles.output.trim().split('\n').filter(Boolean);
        analysis.barrelExports = files.length;
        if (files.length > 0) {
          analysis.optimizationOpportunities.push({
            type: 'barrel-exports',
            severity: 'medium',
            message: `Found ${files.length} barrel export files - consider direct imports`,
            files: files.slice(0, 5),
          });
        }
      }
    } catch (e) {
      // Skip if fails
    }

    // Check for duplicate dependencies
    try {
      const duplicates = await this.execCommand('npm ls --depth=0 2>&1 | grep -E "UNMET|npm ERR" | wc -l', true);
      if (duplicates.success) {
        const count = parseInt(duplicates.output.trim(), 10);
        if (count > 0) {
          analysis.optimizationOpportunities.push({
            type: 'dependency-issues',
            severity: 'high',
            message: `Found ${count} dependency issues`,
          });
        }
      }
    } catch (e) {
      // Skip if fails
    }

    return analysis;
  }

  async optimize() {
    await this.log('⚡ Starting bundle optimization...');
    
    const optimizations = [];

    // Remove unused dependencies (safely)
    try {
      const depcheck = await this.execCommand('npx depcheck --json 2>&1', true);
      if (depcheck.success) {
        try {
          const result = JSON.parse(depcheck.output);
          if (result.dependencies && result.dependencies.length > 0) {
            optimizations.push({
              type: 'unused-dependencies',
              count: result.dependencies.length,
              dependencies: result.dependencies.slice(0, 10),
            });
          }
        } catch (e) {
          // Not JSON output
        }
      }
    } catch (e) {
      // Skip if depcheck not available
    }

    // Optimize imports - remove unused imports
    try {
      const unusedImports = await this.execCommand('npx eslint --ext .ts,.tsx --fix --quiet src/ 2>&1 | grep -E "unused|unused-imports" | wc -l', true);
      if (unusedImports.success) {
        const count = parseInt(unusedImports.output.trim(), 10);
        if (count > 0) {
          optimizations.push({
            type: 'unused-imports',
            count,
            action: 'auto-fixed',
          });
        }
      }
    } catch (e) {
      // Skip if fails
    }

    return optimizations;
  }

  async commitChanges(message, changes = []) {
    if (!CONFIG.autoCommit) {
      await this.log('ℹ️  Auto-commit disabled');
      return { success: false, message: 'Auto-commit disabled' };
    }

    try {
      const hasChanges = await this.execCommand('git status --porcelain', true);
      if (!hasChanges.success || !hasChanges.output.trim()) {
        await this.log('ℹ️  No changes to commit');
        return { success: true, message: 'No changes' };
      }

      await this.execCommand('git add .');
      const commitMsg = `⚡ Bundle Optimization: ${message}\n\n${changes.map(c => `- ${c}`).join('\n')}\n\nAutomated by AI Bundle Optimizer`;
      await this.execCommand(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`);

      if (CONFIG.autoPush) {
        const pushResult = await this.execCommand('git push origin main');
        if (pushResult.success) {
          await this.log('✅ Changes pushed');
          return { success: true, message: 'Committed and pushed' };
        }
      }

      return { success: true, message: 'Committed' };
    } catch (error) {
      await this.log('❌ Commit failed', { error: error.message });
      return { success: false, error: error.message };
    }
  }

  async generateReport(analysis, optimizations) {
    const report = {
      metadata: {
        timestamp: new Date().toISOString(),
        version: '1.0.0',
      },
      analysis,
      optimizations,
      recommendations: this.generateRecommendations(analysis, optimizations),
    };

    const reportPath = path.join(CONFIG.reportsDir, `bundle-optimizer-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    const latestPath = path.join(CONFIG.reportsDir, 'bundle-optimizer-latest.json');
    await fs.writeFile(latestPath, JSON.stringify(report, null, 2));

    await this.log(`📊 Report saved: ${reportPath}`);
    return report;
  }

  generateRecommendations(analysis, optimizations) {
    const recommendations = [];

    if (analysis.largeFiles && analysis.largeFiles.length > 0) {
      recommendations.push({
        priority: 'high',
        action: 'code-splitting',
        message: `Consider code splitting for ${analysis.largeFiles.length} large files`,
      });
    }

    if (optimizations.some(o => o.type === 'unused-dependencies')) {
      recommendations.push({
        priority: 'medium',
        action: 'remove-unused-deps',
        message: 'Remove unused dependencies to reduce bundle size',
      });
    }

    if (analysis.barrelExports > 10) {
      recommendations.push({
        priority: 'low',
        action: 'direct-imports',
        message: 'Use direct imports instead of barrel exports',
      });
    }

    return recommendations;
  }

  async run() {
    await this.log('🚀 Bundle Optimizer starting...');
    
    try {
      const analysis = await this.analyzeBundle();
      const optimizations = await this.optimize();
      const report = await this.generateReport(analysis, optimizations);

      if (optimizations.length > 0) {
        const changes = optimizations.map(o => `${o.type}: ${o.count || 'N/A'}`);
        await this.commitChanges(`Optimized bundle: ${optimizations.length} improvements`, changes);
      }

      await this.log('✅ Bundle optimization complete');
      return report;
    } catch (error) {
      await this.log('❌ Error', { error: error.message, stack: error.stack });
      throw error;
    }
  }

  async runContinuously() {
    await this.log('🔄 Starting continuous bundle optimization...');
    const intervalMinutes = parseInt(process.env.INTERVAL_MINUTES || '30', 10);
    
    while (true) {
      try {
        await this.run();
        await this.log(`⏰ Next run in ${intervalMinutes} minutes`);
        await new Promise(resolve => setTimeout(resolve, intervalMinutes * 60 * 1000));
      } catch (error) {
        await this.log('❌ Error in continuous loop', { error: error.message });
        await new Promise(resolve => setTimeout(resolve, 60000)); // Wait 1 minute on error
      }
    }
  }
}

async function main() {
  await fs.mkdir(CONFIG.logsDir, { recursive: true }).catch(() => {});
  await fs.mkdir(CONFIG.reportsDir, { recursive: true }).catch(() => {});

  const optimizer = new BundleOptimizer();
  const command = process.argv[2] || 'run';

  switch (command) {
    case 'run':
      await optimizer.run();
      break;
    case 'continuous':
      await optimizer.runContinuously();
      break;
    default:
      console.log('Usage: node ai-bundle-optimizer.cjs [run|continuous]');
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { BundleOptimizer };


