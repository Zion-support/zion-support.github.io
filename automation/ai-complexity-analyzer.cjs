#!/usr/bin/env node

/**
 * AI Complexity Analyzer - Autonomous code complexity analysis
 * 
 * Features:
 * - Analyzes cyclomatic complexity
 * - Identifies complex functions
 * - Suggests refactoring opportunities
 * - Tracks complexity trends
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

class ComplexityAnalyzer {
  constructor() {
    this.logFile = path.join(CONFIG.logsDir, 'complexity-analyzer.log');
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

  async analyzeComplexity() {
    await this.log('🔍 Analyzing code complexity...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      complexFiles: [],
      complexFunctions: [],
      statistics: {
        totalFiles: 0,
        averageComplexity: 0,
        maxComplexity: 0,
      },
      optimizationOpportunities: [],
    };

    // Find TypeScript/JavaScript files
    try {
      const files = await this.execCommand('find src -type f \\( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \\) ! -path "*/node_modules/*" ! -path "*/.next/*" | head -100', true);
      if (files.success) {
        const fileList = files.output.trim().split('\n').filter(Boolean);
        analysis.statistics.totalFiles = fileList.length;

        for (const filePath of fileList.slice(0, 50)) {
          try {
            const content = await fs.readFile(filePath, 'utf8');
            const complexity = this.calculateComplexity(content);
            
            if (complexity.complexity > 20) {
              analysis.complexFiles.push({
                file: filePath,
                complexity: complexity.complexity,
                lines: complexity.lines,
                functions: complexity.functions,
              });
            }

            if (complexity.maxFunctionComplexity > 15) {
              analysis.complexFunctions.push({
                file: filePath,
                complexity: complexity.maxFunctionComplexity,
                function: complexity.mostComplexFunction,
              });
            }
          } catch (e) {
            // Skip if can't read
          }
        }
      }
    } catch (e) {
      await this.log('⚠️  File analysis error', { error: e.message });
    }

    // Calculate statistics
    if (analysis.complexFiles.length > 0) {
      const complexities = analysis.complexFiles.map(f => f.complexity);
      analysis.statistics.averageComplexity = (complexities.reduce((a, b) => a + b, 0) / complexities.length).toFixed(2);
      analysis.statistics.maxComplexity = Math.max(...complexities);
    }

    // Identify optimization opportunities
    if (analysis.complexFiles.length > 0) {
      analysis.optimizationOpportunities.push({
        type: 'complex-files',
        count: analysis.complexFiles.length,
        severity: 'high',
        message: `${analysis.complexFiles.length} files with high complexity (>20)`,
      });
    }

    if (analysis.complexFunctions.length > 0) {
      analysis.optimizationOpportunities.push({
        type: 'complex-functions',
        count: analysis.complexFunctions.length,
        severity: 'medium',
        message: `${analysis.complexFunctions.length} functions with high complexity (>15)`,
      });
    }

    return analysis;
  }

  calculateComplexity(content) {
    // Simple complexity calculation based on control flow statements
    const lines = content.split('\n').length;
    const complexity = {
      complexity: 0,
      lines,
      functions: 0,
      maxFunctionComplexity: 0,
      mostComplexFunction: null,
    };

    // Count control flow statements
    const controlFlowKeywords = ['if', 'else', 'for', 'while', 'switch', 'case', 'catch', '&&', '||', '?', ':'];
    for (const keyword of controlFlowKeywords) {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      const matches = content.match(regex);
      if (matches) {
        complexity.complexity += matches.length;
      }
    }

    // Count functions
    const functionMatches = content.match(/(function|const\s+\w+\s*=\s*\(|=>)/g);
    if (functionMatches) {
      complexity.functions = functionMatches.length;
    }

    // Simple heuristic: complexity per function
    if (complexity.functions > 0) {
      complexity.maxFunctionComplexity = Math.ceil(complexity.complexity / complexity.functions);
    }

    return complexity;
  }

  async optimize() {
    await this.log('⚡ Starting complexity optimization...');
    
    const optimizations = [];

    // Check for long files (>500 lines)
    try {
      const longFiles = await this.execCommand('find src -type f \\( -name "*.ts" -o -name "*.tsx" \\) -exec wc -l {} + | sort -rn | head -10 | awk \'$1 > 500 {print $2}\'', true);
      if (longFiles.success && longFiles.output.trim()) {
        const files = longFiles.output.trim().split('\n').filter(Boolean);
        optimizations.push({
          type: 'long-files',
          count: files.length,
          files: files.slice(0, 5),
          note: 'Consider splitting large files',
        });
      }
    } catch (e) {
      // Skip if fails
    }

    // Check for deeply nested code
    try {
      const nestedCode = await this.execCommand('grep -r "}}}}" src --include="*.tsx" --include="*.ts" | wc -l', true);
      if (nestedCode.success) {
        const count = parseInt(nestedCode.output.trim(), 10);
        if (count > 0) {
          optimizations.push({
            type: 'deeply-nested',
            count,
            note: 'Found deeply nested code - consider refactoring',
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
      const commitMsg = `🔍 Complexity Optimization: ${message}\n\n${changes.map(c => `- ${c}`).join('\n')}\n\nAutomated by AI Complexity Analyzer`;
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

    const reportPath = path.join(CONFIG.reportsDir, `complexity-analyzer-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    const latestPath = path.join(CONFIG.reportsDir, 'complexity-analyzer-latest.json');
    await fs.writeFile(latestPath, JSON.stringify(report, null, 2));

    await this.log(`📊 Report saved: ${reportPath}`);
    return report;
  }

  generateRecommendations(analysis, optimizations) {
    const recommendations = [];

    if (analysis.complexFiles.length > 0) {
      recommendations.push({
        priority: 'high',
        action: 'refactor-complex-files',
        message: `Refactor ${analysis.complexFiles.length} complex files`,
      });
    }

    if (analysis.complexFunctions.length > 0) {
      recommendations.push({
        priority: 'medium',
        action: 'extract-complex-functions',
        message: `Extract logic from ${analysis.complexFunctions.length} complex functions`,
      });
    }

    const longFiles = optimizations.find(o => o.type === 'long-files');
    if (longFiles) {
      recommendations.push({
        priority: 'low',
        action: 'split-large-files',
        message: `Split ${longFiles.count} large files into smaller modules`,
      });
    }

    return recommendations;
  }

  async run() {
    await this.log('🚀 Complexity Analyzer starting...');
    
    try {
      const analysis = await this.analyzeComplexity();
      const optimizations = await this.optimize();
      const report = await this.generateReport(analysis, optimizations);

      if (optimizations.length > 0) {
        const changes = optimizations.map(o => `${o.type}: ${o.count || 'N/A'}`);
        await this.commitChanges(`Complexity analysis: ${optimizations.length} improvements`, changes);
      }

      await this.log('✅ Complexity analysis complete');
      return report;
    } catch (error) {
      await this.log('❌ Error', { error: error.message, stack: error.stack });
      throw error;
    }
  }

  async runContinuously() {
    await this.log('🔄 Starting continuous complexity analysis...');
    const intervalMinutes = parseInt(process.env.INTERVAL_MINUTES || '120', 10);
    
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

  const analyzer = new ComplexityAnalyzer();
  const command = process.argv[2] || 'run';

  switch (command) {
    case 'run':
      await analyzer.run();
      break;
    case 'continuous':
      await analyzer.runContinuously();
      break;
    default:
      console.log('Usage: node ai-complexity-analyzer.cjs [run|continuous]');
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { ComplexityAnalyzer };


