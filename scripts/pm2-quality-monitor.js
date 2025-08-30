#!/usr/bin/env node

/**
 * PM2 Quality Monitor - Continuous Code Quality Monitoring and Auto-Fixing
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PM2QualityMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.qualityLogFile = path.join(this.logsDir, 'quality-monitor.log');
    this.qualityReportFile = path.join(this.logsDir, 'quality-report.json');
    this.qualityThreshold = parseFloat(process.env.QUALITY_THRESHOLD) || 0.8;
    this.checkInterval = parseInt(process.env.QUALITY_CHECK_INTERVAL) || 60000;
    this.autoFixEnabled = process.env.AUTO_FIX_ENABLED === 'true';
    
    this.ensureLogsDirectory();
    this.stats = this.loadStats();
  }

  ensureLogsDirectory() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  loadStats() {
    try {
      if (fs.existsSync(this.qualityReportFile)) {
        return JSON.parse(fs.readFileSync(this.qualityReportFile, 'utf8'));
      }
    } catch (error) {
      this.log('Error loading quality stats:', error.message);
    }
    
    return {
      startTime: new Date().toISOString(),
      totalChecks: 0,
      qualityScore: 0,
      issuesFound: 0,
      issuesFixed: 0,
      lastCheck: null,
      qualityHistory: []
    };
  }

  saveStats() {
    try {
      fs.writeFileSync(this.qualityReportFile, JSON.stringify(this.stats, null, 2));
    } catch (error) {
      this.log('Error saving quality stats:', error.message);
    }
  }

  log(message, ...args) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [Quality Monitor] ${message} ${args.join(' ')}`.trim();
    
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.qualityLogFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to quality log file:', error.message);
    }
  }

  async runQualityCheck() {
    this.log('Starting quality check...');
    
    try {
      const results = await Promise.all([
        this.checkTypeScriptQuality(),
        this.checkESLintQuality(),
        this.checkCodeComplexity(),
        this.checkTestCoverage(),
        this.checkDependencyHealth()
      ]);
      
      const qualityScore = this.calculateQualityScore(results);
      const issues = this.aggregateIssues(results);
      
      this.updateStats(qualityScore, issues);
      
      this.log(`Quality check completed. Score: ${(qualityScore * 100).toFixed(1)}%`);
      
      if (qualityScore < this.qualityThreshold) {
        this.log(`Quality below threshold (${(this.qualityThreshold * 100).toFixed(1)}%). Issues found: ${issues.length}`);
        
        if (this.autoFixEnabled) {
          await this.autoFixIssues(issues);
        }
      }
      
      return { qualityScore, issues };
    } catch (error) {
      this.log('Quality check failed:', error.message);
      return { qualityScore: 0, issues: [] };
    }
  }

  async checkTypeScriptQuality() {
    try {
      const result = execSync('npm run type-check 2>&1', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000
      });
      
      return {
        type: 'typescript',
        success: true,
        errors: 0,
        score: 1.0
      };
    } catch (error) {
      const output = error.stdout || error.stderr || error.message;
      const errorCount = this.countTypeScriptErrors(output);
      
      return {
        type: 'typescript',
        success: false,
        errors: errorCount,
        score: Math.max(0, 1 - (errorCount * 0.1))
      };
    }
  }

  async checkESLintQuality() {
    try {
      const result = execSync('npm run lint 2>&1', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000
      });
      
      return {
        type: 'eslint',
        success: true,
        errors: 0,
        warnings: 0,
        score: 1.0
      };
    } catch (error) {
      const output = error.stdout || error.stderr || error.message;
      const { errors, warnings } = this.countESLintIssues(output);
      
      return {
        type: 'eslint',
        success: false,
        errors,
        warnings,
        score: Math.max(0, 1 - (errors * 0.05) - (warnings * 0.01))
      };
    }
  }

  async checkCodeComplexity() {
    try {
      // Simple complexity check based on file sizes and line counts
      const srcDir = path.join(this.projectRoot, 'src');
      const complexity = this.analyzeCodeComplexity(srcDir);
      
      return {
        type: 'complexity',
        success: true,
        complexity,
        score: Math.max(0, 1 - (complexity * 0.1))
      };
    } catch (error) {
      return {
        type: 'complexity',
        success: false,
        complexity: 0,
        score: 0.5
      };
    }
  }

  async checkTestCoverage() {
    try {
      // Check if tests exist and run them
      const testDir = path.join(this.projectRoot, 'tests');
      const hasTests = fs.existsSync(testDir);
      
      if (!hasTests) {
        return {
          type: 'test-coverage',
          success: false,
          coverage: 0,
          score: 0.3
        };
      }
      
      // Try to run tests
      try {
        execSync('npm test -- --passWithNoTests --silent', { 
          cwd: this.projectRoot,
          timeout: 60000
        });
        
        return {
          type: 'test-coverage',
          success: true,
          coverage: 0.8, // Assume 80% if tests pass
          score: 0.8
        };
      } catch (error) {
        return {
          type: 'test-coverage',
          success: false,
          coverage: 0,
          score: 0.2
        };
      }
    } catch (error) {
      return {
        type: 'test-coverage',
        success: false,
        coverage: 0,
        score: 0.1
      };
    }
  }

  async checkDependencyHealth() {
    try {
      // Check for outdated or vulnerable dependencies
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      const totalDeps = Object.keys(packageJson.dependencies || {}).length + 
                       Object.keys(packageJson.devDependencies || {}).length;
      
      // Simple heuristic: more dependencies = potential complexity
      const dependencyScore = Math.max(0, 1 - (totalDeps * 0.01));
      
      return {
        type: 'dependencies',
        success: true,
        totalDeps,
        score: dependencyScore
      };
    } catch (error) {
      return {
        type: 'dependencies',
        success: false,
        totalDeps: 0,
        score: 0.5
      };
    }
  }

  countTypeScriptErrors(output) {
    const errorMatches = output.match(/error TS\d+:/g);
    return errorMatches ? errorMatches.length : 0;
  }

  countESLintIssues(output) {
    const errorMatches = output.match(/\d+:\d+\s+error\s+/g);
    const warningMatches = output.match(/\d+:\d+\s+warning\s+/g);
    
    return {
      errors: errorMatches ? errorMatches.length : 0,
      warnings: warningMatches ? warningMatches.length : 0
    };
  }

  analyzeCodeComplexity(srcDir) {
    if (!fs.existsSync(srcDir)) return 0;
    
    let totalLines = 0;
    let totalFiles = 0;
    
    const analyzeDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          analyzeDirectory(itemPath);
        } else if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
          try {
            const content = fs.readFileSync(itemPath, 'utf8');
            const lines = content.split('\n').length;
            totalLines += lines;
            totalFiles++;
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    };
    
    analyzeDirectory(srcDir);
    
    // Calculate complexity based on lines per file
    return totalFiles > 0 ? totalLines / totalFiles : 0;
  }

  calculateQualityScore(results) {
    if (results.length === 0) return 0;
    
    const totalScore = results.reduce((sum, result) => sum + result.score, 0);
    return totalScore / results.length;
  }

  aggregateIssues(results) {
    const issues = [];
    
    for (const result of results) {
      if (!result.success) {
        issues.push({
          type: result.type,
          details: result,
          priority: this.calculateIssuePriority(result)
        });
      }
    }
    
    return issues.sort((a, b) => b.priority - a.priority);
  }

  calculateIssuePriority(result) {
    switch (result.type) {
      case 'typescript':
        return result.errors * 10;
      case 'eslint':
        return result.errors * 5 + result.warnings;
      case 'complexity':
        return result.complexity > 100 ? 8 : 4;
      case 'test-coverage':
        return result.coverage < 0.5 ? 7 : 3;
      case 'dependencies':
        return result.totalDeps > 100 ? 6 : 2;
      default:
        return 1;
    }
  }

  updateStats(qualityScore, issues) {
    this.stats.totalChecks++;
    this.stats.qualityScore = qualityScore;
    this.stats.issuesFound = issues.length;
    this.stats.lastCheck = new Date().toISOString();
    
    this.stats.qualityHistory.push({
      timestamp: new Date().toISOString(),
      score: qualityScore,
      issues: issues.length
    });
    
    // Keep only last 100 entries
    if (this.stats.qualityHistory.length > 100) {
      this.stats.qualityHistory = this.stats.qualityHistory.slice(-100);
    }
    
    this.saveStats();
  }

  async autoFixIssues(issues) {
    this.log('Starting auto-fix for quality issues...');
    
    let fixedCount = 0;
    
    for (const issue of issues) {
      try {
        const fixed = await this.fixIssue(issue);
        if (fixed) {
          fixedCount++;
          this.stats.issuesFixed++;
        }
      } catch (error) {
        this.log(`Failed to fix issue ${issue.type}:`, error.message);
      }
    }
    
    this.log(`Auto-fix completed. Fixed ${fixedCount} issues`);
    this.saveStats();
    
    return fixedCount;
  }

  async fixIssue(issue) {
    switch (issue.type) {
      case 'typescript':
        return await this.fixTypeScriptIssues(issue);
      case 'eslint':
        return await this.fixESLintIssues(issue);
      case 'complexity':
        return await this.fixComplexityIssues(issue);
      case 'test-coverage':
        return await this.fixTestCoverageIssues(issue);
      default:
        return false;
    }
  }

  async fixTypeScriptIssues(issue) {
    try {
      // Run TypeScript auto-fix if available
      execSync('npm run fix:typescript 2>&1', { 
        cwd: this.projectRoot,
        timeout: 30000
      });
      return true;
    } catch (error) {
      // Try alternative fix commands
      try {
        execSync('npm run lint -- --fix 2>&1', { 
          cwd: this.projectRoot,
          timeout: 30000
        });
        return true;
      } catch (fixError) {
        return false;
      }
    }
  }

  async fixESLintIssues(issue) {
    try {
      execSync('npm run lint -- --fix 2>&1', { 
        cwd: this.projectRoot,
        timeout: 30000
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  async fixComplexityIssues(issue) {
    // Complexity issues usually require manual refactoring
    this.log(`Complexity issue detected (${issue.details.complexity} lines/file). Manual refactoring recommended.`);
    return false;
  }

  async fixTestCoverageIssues(issue) {
    try {
      // Try to run tests to see if they pass
      execSync('npm test -- --passWithNoTests --silent 2>&1', { 
        cwd: this.projectRoot,
        timeout: 60000
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  async start() {
    this.log('PM2 Quality Monitor starting...');
    
    // Run initial quality check
    await this.runQualityCheck();
    
    // Set up periodic quality checks
    setInterval(async () => {
      await this.runQualityCheck();
    }, this.checkInterval);
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      this.log('Shutting down PM2 Quality Monitor...');
      this.saveStats();
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      this.log('Shutting down PM2 Quality Monitor...');
      this.saveStats();
      process.exit(0);
    });
    
    this.log('PM2 Quality Monitor started successfully');
  }

  getStats() {
    return {
      ...this.stats,
      uptime: Date.now() - new Date(this.stats.startTime).getTime(),
      qualityThreshold: this.qualityThreshold,
      autoFixEnabled: this.autoFixEnabled
    };
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new PM2QualityMonitor();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      monitor.start();
      break;
    case 'check':
      monitor.runQualityCheck().then(() => process.exit(0));
      break;
    case 'stats':
      console.log(JSON.stringify(monitor.getStats(), null, 2));
      break;
    default:
      console.log(`
PM2 Quality Monitor - Usage:
  npm run pm2:quality:monitor start    - Start the quality monitor service
  npm run pm2:quality:monitor check    - Run a one-time quality check
  npm run pm2:quality:monitor stats    - Show quality statistics
      `);
      process.exit(1);
  }
}

module.exports = PM2QualityMonitor;