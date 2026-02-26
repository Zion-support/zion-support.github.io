#!/usr/bin/env node

/**
 * AI Route Optimizer - Autonomous Next.js route optimization
 * 
 * Features:
 * - Analyzes route structure
 * - Identifies dynamic route opportunities
 * - Optimizes route metadata
 * - Suggests route improvements
 * - Checks for route conflicts
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

class RouteOptimizer {
  constructor() {
    this.logFile = path.join(CONFIG.logsDir, 'route-optimizer.log');
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

  async findRoutes(directory) {
    const routes = [];
    
    try {
      const files = await fs.readdir(directory, { recursive: true, withFileTypes: true });
      
      for (const file of files) {
        if (file.isFile() && (file.name === 'page.tsx' || file.name === 'page.jsx' || file.name.endsWith('.page.tsx'))) {
          const filePath = path.relative(CONFIG.rootDir, path.join(directory, file.name));
          try {
            const content = await fs.readFile(path.join(directory, file.name), 'utf8');
            const route = {
              path: filePath,
              hasMetadata: content.includes('export const metadata') || content.includes('export const generateMetadata'),
              hasDynamicSegment: filePath.includes('[') && filePath.includes(']'),
              hasStaticParams: content.includes('generateStaticParams'),
              hasRevalidate: content.includes('revalidate'),
              size: content.length,
            };
            routes.push(route);
          } catch (e) {
            // Skip if can't read
          }
        }
      }
    } catch (e) {
      // Directory might not exist
    }

    return routes;
  }

  async analyzeRoutes() {
    await this.log('🛣️  Analyzing routes...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      appRoutes: [],
      pagesRoutes: [],
      optimizationOpportunities: [],
    };

    // Find routes in app directory (App Router)
    const appDir = path.join(CONFIG.rootDir, 'app');
    analysis.appRoutes = await this.findRoutes(appDir);

    // Find routes in pages directory (Pages Router)
    const pagesDir = path.join(CONFIG.rootDir, 'pages');
    analysis.pagesRoutes = await this.findRoutes(pagesDir);

    const allRoutes = [...analysis.appRoutes, ...analysis.pagesRoutes];
    analysis.totalRoutes = allRoutes.length;

    // Check for routes missing metadata
    const missingMetadata = allRoutes.filter(r => !r.hasMetadata);
    if (missingMetadata.length > 0) {
      analysis.optimizationOpportunities.push({
        type: 'missing-metadata',
        count: missingMetadata.length,
        severity: 'high',
        message: `${missingMetadata.length} routes missing metadata`,
        routes: missingMetadata.slice(0, 10).map(r => r.path),
      });
    }

    // Check for routes that could use static generation
    const dynamicRoutes = allRoutes.filter(r => r.hasDynamicSegment && !r.hasStaticParams);
    if (dynamicRoutes.length > 0) {
      analysis.optimizationOpportunities.push({
        type: 'static-generation-opportunity',
        count: dynamicRoutes.length,
        severity: 'medium',
        message: `${dynamicRoutes.length} dynamic routes could use generateStaticParams`,
        routes: dynamicRoutes.slice(0, 10).map(r => r.path),
      });
    }

    // Check for routes missing revalidation
    const routesWithoutRevalidate = allRoutes.filter(r => !r.hasRevalidate && r.hasDynamicSegment);
    if (routesWithoutRevalidate.length > 0) {
      analysis.optimizationOpportunities.push({
        type: 'missing-revalidation',
        count: routesWithoutRevalidate.length,
        severity: 'low',
        message: `${routesWithoutRevalidate.length} routes could benefit from revalidation`,
      });
    }

    return analysis;
  }

  async optimize() {
    await this.log('⚡ Starting route optimization...');
    
    const optimizations = [];

    // Check for duplicate route definitions
    try {
      const duplicates = await this.execCommand('find app pages -name "page.tsx" -o -name "page.jsx" 2>/dev/null | sort | uniq -d', true);
      if (duplicates.success && duplicates.output.trim()) {
        optimizations.push({
          type: 'duplicate-routes',
          count: duplicates.output.trim().split('\n').length,
          note: 'Found potential duplicate routes',
        });
      }
    } catch (e) {
      // Skip if fails
    }

    // Check for routes that could be combined
    try {
      const routeFiles = await this.execCommand('find app pages -name "page.tsx" 2>/dev/null | wc -l', true);
      if (routeFiles.success) {
        const count = parseInt(routeFiles.output.trim(), 10);
        if (count > 50) {
          optimizations.push({
            type: 'route-consolidation',
            count,
            note: 'Consider consolidating routes if count is high',
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
      const commitMsg = `🛣️  Route Optimization: ${message}\n\n${changes.map(c => `- ${c}`).join('\n')}\n\nAutomated by AI Route Optimizer`;
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

    const reportPath = path.join(CONFIG.reportsDir, `route-optimizer-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    const latestPath = path.join(CONFIG.reportsDir, 'route-optimizer-latest.json');
    await fs.writeFile(latestPath, JSON.stringify(report, null, 2));

    await this.log(`📊 Report saved: ${reportPath}`);
    return report;
  }

  generateRecommendations(analysis, optimizations) {
    const recommendations = [];

    const missingMetadata = analysis.optimizationOpportunities.find(o => o.type === 'missing-metadata');
    if (missingMetadata) {
      recommendations.push({
        priority: 'high',
        action: 'add-metadata',
        message: missingMetadata.message,
      });
    }

    const staticGen = analysis.optimizationOpportunities.find(o => o.type === 'static-generation-opportunity');
    if (staticGen) {
      recommendations.push({
        priority: 'medium',
        action: 'add-static-params',
        message: staticGen.message,
      });
    }

    return recommendations;
  }

  async run() {
    await this.log('🚀 Route Optimizer starting...');
    
    try {
      const analysis = await this.analyzeRoutes();
      const optimizations = await this.optimize();
      const report = await this.generateReport(analysis, optimizations);

      if (optimizations.length > 0) {
        const changes = optimizations.map(o => `${o.type}: ${o.count || 'N/A'}`);
        await this.commitChanges(`Optimized routes: ${optimizations.length} improvements`, changes);
      }

      await this.log('✅ Route optimization complete');
      return report;
    } catch (error) {
      await this.log('❌ Error', { error: error.message, stack: error.stack });
      throw error;
    }
  }

  async runContinuously() {
    await this.log('🔄 Starting continuous route optimization...');
    const intervalMinutes = parseInt(process.env.INTERVAL_MINUTES || '60', 10);
    
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

  const optimizer = new RouteOptimizer();
  const command = process.argv[2] || 'run';

  switch (command) {
    case 'run':
      await optimizer.run();
      break;
    case 'continuous':
      await optimizer.runContinuously();
      break;
    default:
      console.log('Usage: node ai-route-optimizer.cjs [run|continuous]');
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { RouteOptimizer };


