#!/usr/bin/env node

/**
 * Project Health Monitor - PM2 Automation
 * Coordinates all error fixing automations and monitors project health
 * Runs every 5 minutes to maintain optimal project state
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ProjectHealthMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'project-health-monitor.log');
    this.healthReport = path.join(this.projectRoot, 'logs', 'project-health-report.json');
    this.ensureLogsDirectory();
    
    // Health thresholds
    this.thresholds = {
      maxTypeScriptErrors: 100,
      maxLintErrors: 50,
      maxBuildWarnings: 20,
      maxUnusedImports: 30,
      maxDuplicateIdentifiers: 10
    };
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async runHealthCheck() {
    this.log('🏥 Starting project health monitoring...');
    
    const healthMetrics = {};
    const recommendations = [];
    const criticalIssues = [];

    try {
      // 1. Check TypeScript compilation
      this.log('🔍 Checking TypeScript compilation...');
      const tsHealth = await this.checkTypeScriptHealth();
      healthMetrics.typescript = tsHealth;

      // 2. Check ESLint status
      this.log('🔍 Checking ESLint status...');
      const lintHealth = await this.checkLintHealth();
      healthMetrics.linting = lintHealth;

      // 3. Check build status
      this.log('🔍 Checking build status...');
      const buildHealth = await this.checkBuildHealth();
      healthMetrics.build = buildHealth;

      // 4. Check dependency health
      this.log('🔍 Checking dependency health...');
      const depHealth = await this.checkDependencyHealth();
      healthMetrics.dependencies = depHealth;

      // 5. Check file structure health
      this.log('🔍 Checking file structure health...');
      const fileHealth = await this.checkFileStructureHealth();
      healthMetrics.files = fileHealth;

      // 6. Generate health score
      const overallHealth = this.calculateHealthScore(healthMetrics);
      healthMetrics.overall = overallHealth;

      // 7. Generate recommendations
      recommendations.push(...this.generateRecommendations(healthMetrics));

      // 8. Check for critical issues
      criticalIssues.push(...this.identifyCriticalIssues(healthMetrics));

      // 9. Generate comprehensive health report
      await this.generateHealthReport(healthMetrics, recommendations, criticalIssues);

      // 10. Trigger automated fixes if needed
      if (criticalIssues.length > 0 || overallHealth.score < 70) {
        await this.triggerAutomatedFixes(healthMetrics);
      }

    } catch (error) {
      this.log(`Health monitoring failed: ${error.message}`, 'ERROR');
    }

    return { healthMetrics, recommendations, criticalIssues };
  }

  async checkTypeScriptHealth() {
    try {
      const result = execSync('npm run type-check', { stdio: 'pipe' });
      return {
        status: 'healthy',
        errors: 0,
        warnings: 0,
        score: 100
      };
    } catch (error) {
      const output = error.message;
      const errors = (output.match(/error TS\d+:/g) || []).length;
      const warnings = (output.match(/warning TS\d+:/g) || []).length;
      
      let score = 100;
      if (errors > 0) score -= Math.min(80, errors * 2);
      if (warnings > 0) score -= Math.min(20, warnings);

      return {
        status: errors > this.thresholds.maxTypeScriptErrors ? 'critical' : 'warning',
        errors: errors,
        warnings: warnings,
        score: Math.max(0, score),
        output: output
      };
    }
  }

  async checkLintHealth() {
    try {
      const result = execSync('npm run lint', { stdio: 'pipe' });
      return {
        status: 'healthy',
        errors: 0,
        warnings: 0,
        score: 100
      };
    } catch (error) {
      const output = error.message;
      const errors = (output.match(/error/g) || []).length;
      const warnings = (output.match(/warning/g) || []).length;
      
      let score = 100;
      if (errors > 0) score -= Math.min(80, errors * 2);
      if (warnings > 0) score -= Math.min(20, warnings);

      return {
        status: errors > this.thresholds.maxLintErrors ? 'critical' : 'warning',
        errors: errors,
        warnings: warnings,
        score: Math.max(0, score),
        output: output
      };
    }
  }

  async checkBuildHealth() {
    try {
      const result = execSync('npm run build', { stdio: 'pipe' });
      return {
        status: 'healthy',
        success: true,
        warnings: 0,
        score: 100
      };
    } catch (error) {
      return {
        status: 'critical',
        success: false,
        warnings: 0,
        score: 0,
        error: error.message
      };
    }
  }

  async checkDependencyHealth() {
    try {
      const result = execSync('npm audit --json', { stdio: 'pipe' });
      const audit = JSON.parse(result.toString());
      
      const vulnerabilities = audit.metadata?.vulnerabilities || {};
      const totalVulnerabilities = Object.values(vulnerabilities).reduce((sum, count) => sum + count, 0);
      
      let score = 100;
      if (totalVulnerabilities > 0) {
        score -= Math.min(80, totalVulnerabilities * 10);
      }

      return {
        status: totalVulnerabilities > 5 ? 'critical' : totalVulnerabilities > 0 ? 'warning' : 'healthy',
        vulnerabilities: totalVulnerabilities,
        score: Math.max(0, score),
        details: vulnerabilities
      };
    } catch (error) {
      return {
        status: 'unknown',
        vulnerabilities: 0,
        score: 50,
        error: error.message
      };
    }
  }

  async checkFileStructureHealth() {
    const issues = [];
    let score = 100;
    
    try {
      // Check for common file structure issues
      const srcPath = path.join(this.projectRoot, 'src');
      if (!fs.existsSync(srcPath)) {
        issues.push('Missing src directory');
        score -= 30;
      }

      // Check for orphaned files
      const orphanedFiles = await this.findOrphanedFiles();
      if (orphanedFiles.length > 0) {
        issues.push(`Found ${orphanedFiles.length} orphaned files`);
        score -= Math.min(20, orphanedFiles.length * 2);
      }

      // Check for broken imports
      const brokenImports = await this.findBrokenImports();
      if (brokenImports.length > 0) {
        issues.push(`Found ${brokenImports.length} broken imports`);
        score -= Math.min(30, brokenImports.length * 3);
      }

      return {
        status: score < 70 ? 'critical' : score < 90 ? 'warning' : 'healthy',
        issues: issues,
        orphanedFiles: orphanedFiles.length,
        brokenImports: brokenImports.length,
        score: Math.max(0, score)
      };
    } catch (error) {
      return {
        status: 'unknown',
        issues: ['Error checking file structure'],
        score: 50,
        error: error.message
      };
    }
  }

  async findOrphanedFiles() {
    const orphaned = [];
    const srcPath = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcPath)) return orphaned;

    try {
      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            
            // Check if file is imported anywhere
            if (!this.isFileImported(file, srcPath)) {
              orphaned.push(file);
            }
          } catch (error) {
            // File can't be read, consider it orphaned
            orphaned.push(file);
          }
        }
      }
    } catch (error) {
      this.log(`Error finding orphaned files: ${error.message}`, 'WARN');
    }

    return orphaned;
  }

  async findBrokenImports() {
    const broken = [];
    const srcPath = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcPath)) return broken;

    try {
      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const imports = this.extractImports(content);
            
            for (const imp of imports) {
              if (!this.isImportValid(imp, file)) {
                broken.push({
                  file: file,
                  import: imp
                });
              }
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      this.log(`Error finding broken imports: ${error.message}`, 'WARN');
    }

    return broken;
  }

  isFileImported(filePath, srcPath) {
    const fileName = path.basename(filePath, path.extname(filePath));
    const relativePath = path.relative(srcPath, filePath);
    
    try {
      const files = this.getAllFilesSync(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            
            // Check for various import patterns
            const importPatterns = [
              new RegExp(`import.*from\\s+['"][^'"]*${fileName}['"]`, 'g'),
              new RegExp(`import.*from\\s+['"][^'"]*${relativePath.replace(/\\/g, '/')}['"]`, 'g'),
              new RegExp(`import.*from\\s+['"][^'"]*${relativePath.replace(/\\/g, '/').replace(/\\.tsx?$/, '')}['"]`, 'g')
            ];
            
            for (const pattern of importPatterns) {
              if (pattern.test(content)) {
                return true;
              }
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      this.log(`Error checking if file is imported: ${error.message}`, 'WARN');
    }
    
    return false;
  }

  extractImports(content) {
    const imports = [];
    const lines = content.split('\n');
    
    for (const line of lines) {
      if (line.trim().startsWith('import ')) {
        const match = line.match(/import\s+.*from\s+['"]([^'"]+)['"]/);
        if (match) {
          imports.push(match[1]);
        }
      }
    }
    
    return imports;
  }

  isImportValid(importPath, currentFile) {
    // Check if import path resolves to a valid file
    if (importPath.startsWith('.')) {
      const resolvedPath = path.resolve(path.dirname(currentFile), importPath);
      const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];
      
      for (const ext of extensions) {
        if (fs.existsSync(resolvedPath + ext)) {
          return true;
        }
      }
      
      // Check if it's a directory with index file
      if (fs.existsSync(resolvedPath)) {
        for (const ext of extensions) {
          if (fs.existsSync(path.join(resolvedPath, 'index' + ext))) {
            return true;
          }
        }
      }
      
      return false;
    }
    
    // External packages are assumed to be valid
    return true;
  }

  getAllFilesSync(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = this.getAllFilesSync(fullPath, arrayOfFiles);
      } else {
        arrayOfFiles.push(fullPath);
      }
    }

    return arrayOfFiles;
  }

  calculateHealthScore(metrics) {
    let totalScore = 0;
    let totalWeight = 0;
    
    const weights = {
      typescript: 0.3,
      linting: 0.2,
      build: 0.25,
      dependencies: 0.15,
      files: 0.1
    };
    
    for (const [key, metric] of Object.entries(metrics)) {
      if (key !== 'overall' && metric.score !== undefined) {
        totalScore += metric.score * weights[key];
        totalWeight += weights[key];
      }
    }
    
    const finalScore = totalWeight > 0 ? Math.round(totalScore / totalWeight) : 0;
    
    let status = 'healthy';
    if (finalScore < 50) status = 'critical';
    else if (finalScore < 70) status = 'warning';
    else if (finalScore < 90) status = 'good';
    
    return {
      score: finalScore,
      status: status,
      grade: this.getGrade(finalScore)
    };
  }

  getGrade(score) {
    if (score >= 95) return 'A+';
    if (score >= 90) return 'A';
    if (score >= 85) return 'A-';
    if (score >= 80) return 'B+';
    if (score >= 75) return 'B';
    if (score >= 70) return 'B-';
    if (score >= 65) return 'C+';
    if (score >= 60) return 'C';
    if (score >= 55) return 'C-';
    if (score >= 50) return 'D+';
    if (score >= 45) return 'D';
    if (score >= 40) return 'D-';
    return 'F';
  }

  generateRecommendations(metrics) {
    const recommendations = [];
    
    if (metrics.typescript.score < 80) {
      recommendations.push({
        priority: 'high',
        category: 'typescript',
        message: 'Run comprehensive TypeScript error fixer to resolve compilation issues',
        action: 'trigger_typescript_fixer'
      });
    }
    
    if (metrics.linting.score < 80) {
      recommendations.push({
        priority: 'high',
        category: 'linting',
        message: 'Fix ESLint configuration and resolve linting errors',
        action: 'fix_eslint_config'
      });
    }
    
    if (metrics.dependencies.score < 80) {
      recommendations.push({
        priority: 'medium',
        category: 'dependencies',
        message: 'Update dependencies to resolve security vulnerabilities',
        action: 'update_dependencies'
      });
    }
    
    if (metrics.files.score < 80) {
      recommendations.push({
        priority: 'medium',
        category: 'files',
        message: 'Clean up orphaned files and fix broken imports',
        action: 'cleanup_files'
      });
    }
    
    return recommendations;
  }

  identifyCriticalIssues(metrics) {
    const critical = [];
    
    if (metrics.typescript.status === 'critical') {
      critical.push({
        type: 'typescript_compilation',
        severity: 'critical',
        message: 'TypeScript compilation has too many errors',
        count: metrics.typescript.errors
      });
    }
    
    if (metrics.build.status === 'critical') {
      critical.push({
        type: 'build_failure',
        severity: 'critical',
        message: 'Project build is failing',
        error: metrics.build.error
      });
    }
    
    if (metrics.dependencies.status === 'critical') {
      critical.push({
        type: 'security_vulnerabilities',
        severity: 'critical',
        message: 'Too many security vulnerabilities detected',
        count: metrics.dependencies.vulnerabilities
      });
    }
    
    return critical;
  }

  async generateHealthReport(metrics, recommendations, criticalIssues) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        overallHealth: metrics.overall,
        totalIssues: criticalIssues.length,
        totalRecommendations: recommendations.length
      },
      metrics: metrics,
      recommendations: recommendations,
      criticalIssues: criticalIssues,
      nextActions: this.generateNextActions(recommendations, criticalIssues)
    };

    fs.writeFileSync(this.healthReport, JSON.stringify(report, null, 2));
    this.log(`📊 Health report generated: ${this.healthReport}`);
    
    // Log summary to console
    console.log(`\n🏥 Project Health Summary:`);
    console.log(`Overall Grade: ${metrics.overall.grade} (${metrics.overall.score}/100)`);
    console.log(`Status: ${metrics.overall.status}`);
    console.log(`Critical Issues: ${criticalIssues.length}`);
    console.log(`Recommendations: ${recommendations.length}`);
  }

  generateNextActions(recommendations, criticalIssues) {
    const actions = [];
    
    // High priority actions first
    const highPriority = recommendations.filter(r => r.priority === 'high');
    actions.push(...highPriority.map(r => ({
      priority: 'high',
      action: r.action,
      message: r.message
    })));
    
    // Critical issues
    actions.push(...criticalIssues.map(issue => ({
      priority: 'critical',
      action: 'immediate_fix',
      message: issue.message
    })));
    
    // Medium priority actions
    const mediumPriority = recommendations.filter(r => r.priority === 'medium');
    actions.push(...mediumPriority.map(r => ({
      priority: 'medium',
      action: r.action,
      message: r.message
    })));
    
    return actions;
  }

  async triggerAutomatedFixes(metrics) {
    this.log('🤖 Triggering automated fixes...');
    
    try {
      if (metrics.typescript.score < 80) {
        this.log('🔧 Triggering TypeScript error fixer...');
        execSync('node scripts/automation/comprehensive-error-fixer.cjs', { stdio: 'pipe' });
      }
      
      if (metrics.files.score < 80) {
        this.log('🎨 Triggering icon fixer...');
        execSync('node scripts/automation/lucide-react-fixer.cjs', { stdio: 'pipe' });
      }
      
      this.log('✅ Automated fixes triggered successfully');
    } catch (error) {
      this.log(`Error triggering automated fixes: ${error.message}`, 'ERROR');
    }
  }
}

// Main execution
async function main() {
  const monitor = new ProjectHealthMonitor();
  
  // Run health check
  const result = await monitor.runHealthCheck();
  
  console.log(`\n🏥 Project Health Monitor Summary:`);
  console.log(`Overall Health: ${result.healthMetrics.overall.grade} (${result.healthMetrics.overall.score}/100)`);
  console.log(`Critical Issues: ${result.criticalIssues.length}`);
  console.log(`Recommendations: ${result.recommendations.length}`);
  
  if (result.criticalIssues.length > 0) {
    console.log(`\n🚨 Critical Issues:`);
    result.criticalIssues.forEach(issue => {
      console.log(`  - ${issue.message}`);
    });
  }
  
  process.exit(0);
}

// Handle PM2 execution
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Project Health Monitor failed:', error);
    process.exit(1);
  });
}

module.exports = ProjectHealthMonitor;
