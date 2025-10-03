#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class DependencyMonitor {
  constructor() {
    this.dependencyStatus = new Map();
    this.vulnerabilities = new Map();
    this.outdatedPackages = new Map();
    this.healthScores = new Map();
    this.logFile = path.join(__dirname, 'logs', 'dependency-monitor.log');
    this.ensureLogDirectory();
    this.packageFiles = ['package.json', 'server/package.json'];
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async checkDependencies() {
    this.log('🔍 Checking dependencies across all package files...');
    
    for (const packageFile of this.packageFiles) {
      if (fs.existsSync(packageFile)) {
        await this.analyzePackageFile(packageFile);
      }
    }

    await this.checkVulnerabilities();
    await this.checkOutdatedPackages();
    await this.calculateHealthScores();
    await this.generateReport();
    
    this.log('✅ Dependency health check completed');
  }

  async analyzePackageFile(packagePath) {
    try {
      this.log(`📦 Analyzing package file: ${packagePath}`);
      
      const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      const packageDir = path.dirname(packagePath);
      
      const analysis = {
        name: packageContent.name || 'unknown',
        version: packageContent.version || '0.0.0',
        dependencies: packageContent.dependencies || {},
        devDependencies: packageContent.devDependencies || {},
        peerDependencies: packageContent.peerDependencies || {},
        optionalDependencies: packageContent.optionalDependencies || {},
        totalDependencies: 0,
        lastChecked: new Date().toISOString(),
        healthScore: 100
      };

      // Count total dependencies
      analysis.totalDependencies = Object.keys(analysis.dependencies).length +
                                  Object.keys(analysis.devDependencies).length +
                                  Object.keys(analysis.peerDependencies).length +
                                  Object.keys(analysis.optionalDependencies).length;

      // Check for lock file
      const lockFile = path.join(packageDir, 'package-lock.json');
      const yarnLockFile = path.join(packageDir, 'yarn.lock');
      
      if (fs.existsSync(lockFile)) {
        analysis.lockFile = 'npm';
        analysis.lockFileSize = fs.statSync(lockFile).size;
      } else if (fs.existsSync(yarnLockFile)) {
        analysis.lockFile = 'yarn';
        analysis.lockFileSize = fs.statSync(yarnLockFile).size;
      } else {
        analysis.lockFile = 'none';
        analysis.healthScore -= 20; // Penalty for no lock file
      }

      // Check for scripts
      if (packageContent.scripts) {
        analysis.scripts = Object.keys(packageContent.scripts);
        analysis.hasBuildScript = !!packageContent.scripts.build;
        analysis.hasTestScript = !!packageContent.scripts.test;
        analysis.hasLintScript = !!packageContent.scripts.lint;
        
        if (!analysis.hasBuildScript) analysis.healthScore -= 10;
        if (!analysis.hasTestScript) analysis.healthScore -= 10;
        if (!analysis.hasLintScript) analysis.healthScore -= 5;
      }

      // Check for engines specification
      if (packageContent.engines) {
        analysis.engines = packageContent.engines;
        analysis.hasNodeVersion = !!packageContent.engines.node;
        analysis.hasNpmVersion = !!packageContent.engines.npm;
        
        if (!analysis.hasNodeVersion) analysis.healthScore -= 5;
        if (!analysis.hasNpmVersion) analysis.healthScore -= 5;
      }

      // Check for repository information
      if (packageContent.repository) {
        analysis.repository = packageContent.repository;
        analysis.hasRepository = true;
      } else {
        analysis.hasRepository = false;
        analysis.healthScore -= 5;
      }

      // Check for license
      if (packageContent.license) {
        analysis.license = packageContent.license;
        analysis.hasLicense = true;
      } else {
        analysis.hasLicense = false;
        analysis.healthScore -= 5;
      }

      // Check for keywords and description
      if (packageContent.keywords && packageContent.keywords.length > 0) {
        analysis.keywords = packageContent.keywords;
        analysis.hasKeywords = true;
      } else {
        analysis.hasKeywords = false;
        analysis.healthScore -= 2;
      }

      if (packageContent.description) {
        analysis.description = packageContent.description;
        analysis.hasDescription = true;
      } else {
        analysis.hasDescription = false;
        analysis.healthScore -= 2;
      }

      // Ensure health score doesn't go below 0
      analysis.healthScore = Math.max(0, analysis.healthScore);

      this.dependencyStatus.set(packagePath, analysis);
      this.log(`✅ Package analysis completed for ${packagePath}`);
      
    } catch (error) {
      this.log(`❌ Error analyzing ${packagePath}: ${error.message}`);
    }
  }

  async checkVulnerabilities() {
    this.log('🔒 Checking for security vulnerabilities...');
    
    for (const [packagePath, analysis] of this.dependencyStatus) {
      try {
        const packageDir = path.dirname(packagePath);
        const cwd = packageDir === '.' ? process.cwd() : path.resolve(packageDir);
        
        // Check if npm audit is available
        try {
          const auditResult = execSync('npm audit --json', { 
            cwd, 
            encoding: 'utf8',
            stdio: 'pipe'
          });
          
          const auditData = JSON.parse(auditResult);
          
          if (auditData.vulnerabilities) {
            const vulns = Object.values(auditData.vulnerabilities);
            const criticalVulns = vulns.filter(v => v.severity === 'critical');
            const highVulns = vulns.filter(v => v.severity === 'high');
            const moderateVulns = vulns.filter(v => v.severity === 'moderate');
            const lowVulns = vulns.filter(v => v.severity === 'low');
            
            this.vulnerabilities.set(packagePath, {
              total: vulns.length,
              critical: criticalVulns.length,
              high: highVulns.length,
              moderate: moderateVulns.length,
              low: lowVulns.length,
              details: vulns,
              lastChecked: new Date().toISOString()
            });
            
            // Reduce health score based on vulnerabilities
            const analysis = this.dependencyStatus.get(packagePath);
            if (analysis) {
              analysis.healthScore -= criticalVulns.length * 20;
              analysis.healthScore -= highVulns.length * 10;
              analysis.healthScore -= moderateVulns.length * 5;
              analysis.healthScore -= lowVulns.length * 2;
              analysis.healthScore = Math.max(0, analysis.healthScore);
            }
            
            this.log(`⚠️ Found ${vulns.length} vulnerabilities in ${packagePath}`);
          } else {
            this.vulnerabilities.set(packagePath, {
              total: 0,
              critical: 0,
              high: 0,
              moderate: 0,
              low: 0,
              details: [],
              lastChecked: new Date().toISOString()
            });
            this.log(`✅ No vulnerabilities found in ${packagePath}`);
          }
          
        } catch (auditError) {
          this.log(`⚠️ npm audit not available for ${packagePath}: ${auditError.message}`);
          this.vulnerabilities.set(packagePath, {
            total: 0,
            critical: 0,
            high: 0,
            moderate: 0,
            low: 0,
            details: [],
            lastChecked: new Date().toISOStringString(),
            error: 'npm audit not available'
          });
        }
        
      } catch (error) {
        this.log(`❌ Error checking vulnerabilities for ${packagePath}: ${error.message}`);
      }
    }
  }

  async checkOutdatedPackages() {
    this.log('📅 Checking for outdated packages...');
    
    for (const [packagePath, analysis] of this.dependencyStatus) {
      try {
        const packageDir = path.dirname(packagePath);
        const cwd = packageDir === '.' ? process.cwd() : path.resolve(packageDir);
        
        // Check for outdated packages
        try {
          const outdatedResult = execSync('npm outdated --json', { 
            cwd, 
            encoding: 'utf8',
            stdio: 'pipe'
          });
          
          const outdatedData = JSON.parse(outdatedResult);
          const outdatedPackages = Object.keys(outdatedData);
          
          if (outdatedPackages.length > 0) {
            this.outdatedPackages.set(packagePath, {
              total: outdatedPackages.length,
              packages: outdatedPackages.map(name => ({
                name,
                current: outdatedData[name].current,
                wanted: outdatedData[name].wanted,
                latest: outdatedData[name].latest,
                location: outdatedData[name].location
              })),
              lastChecked: new Date().toISOString()
            });
            
            // Reduce health score based on outdated packages
            analysis.healthScore -= Math.min(20, outdatedPackages.length * 2);
            analysis.healthScore = Math.max(0, analysis.healthScore);
            
            this.log(`⚠️ Found ${outdatedPackages.length} outdated packages in ${packagePath}`);
          } else {
            this.outdatedPackages.set(packagePath, {
              total: 0,
              packages: [],
              lastChecked: new Date().toISOString()
            });
            this.log(`✅ All packages are up to date in ${packagePath}`);
          }
          
        } catch (outdatedError) {
          if (outdatedError.status === 1) {
            // npm outdated returns 1 when there are no outdated packages
            this.outdatedPackages.set(packagePath, {
              total: 0,
              packages: [],
              lastChecked: new Date().toISOString()
            });
            this.log(`✅ All packages are up to date in ${packagePath}`);
          } else {
            this.log(`⚠️ Error checking outdated packages for ${packagePath}: ${outdatedError.message}`);
            this.outdatedPackages.set(packagePath, {
              total: 0,
              packages: [],
              lastChecked: new Date().toISOString(),
              error: outdatedError.message
            });
          }
        }
        
      } catch (error) {
        this.log(`❌ Error checking outdated packages for ${packagePath}: ${error.message}`);
      }
    }
  }

  async calculateHealthScores() {
    this.log('🏥 Calculating dependency health scores...');
    
    for (const [packagePath, analysis] of this.dependencyStatus) {
      const vulns = this.vulnerabilities.get(packagePath);
      const outdated = this.outdatedPackages.get(packagePath);
      
      let finalScore = analysis.healthScore;
      
      // Additional penalties based on vulnerabilities and outdated packages
      if (vulns && vulns.total > 0) {
        finalScore -= vulns.critical * 15;
        finalScore -= vulns.high * 8;
        finalScore -= vulns.moderate * 4;
        finalScore -= vulns.low * 2;
      }
      
      if (outdated && outdated.total > 0) {
        finalScore -= Math.min(15, outdated.total * 1.5);
      }
      
      // Bonus for good practices
      if (analysis.hasBuildScript && analysis.hasTestScript && analysis.hasLintScript) {
        finalScore += 10;
      }
      
      if (analysis.hasRepository && analysis.hasLicense) {
        finalScore += 5;
      }
      
      finalScore = Math.max(0, Math.min(100, finalScore));
      
      this.healthScores.set(packagePath, {
        score: finalScore,
        grade: this.getGrade(finalScore),
        lastCalculated: new Date().toISOString(),
        recommendations: this.generateRecommendations(packagePath, finalScore)
      });
      
      analysis.finalHealthScore = finalScore;
      analysis.healthGrade = this.getGrade(finalScore);
    }
  }

  getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }

  generateRecommendations(packagePath, score) {
    const recommendations = [];
    
    if (score < 80) {
      recommendations.push('Consider updating outdated packages');
      recommendations.push('Address security vulnerabilities promptly');
    }
    
    if (score < 70) {
      recommendations.push('Review and update package.json structure');
      recommendations.push('Implement missing scripts (build, test, lint)');
    }
    
    if (score < 60) {
      recommendations.push('Critical: Address security issues immediately');
      recommendations.push('Review dependency management strategy');
    }
    
    return recommendations;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalPackages: this.dependencyStatus.size,
        averageHealthScore: 0,
        totalVulnerabilities: 0,
        totalOutdatedPackages: 0,
        criticalIssues: 0
      },
      packages: Array.from(this.dependencyStatus.entries()).map(([path, analysis]) => ({
        path,
        ...analysis,
        vulnerabilities: this.vulnerabilities.get(path) || {},
        outdated: this.outdatedPackages.get(path) || {},
        health: this.healthScores.get(path) || {}
      }))
    };

    // Calculate summary statistics
    let totalScore = 0;
    let totalVulns = 0;
    let totalOutdated = 0;
    let criticalIssues = 0;

    report.packages.forEach(pkg => {
      totalScore += pkg.finalHealthScore || 0;
      totalVulns += (pkg.vulnerabilities.total || 0);
      totalOutdated += (pkg.outdated.total || 0);
      criticalIssues += (pkg.vulnerabilities.critical || 0);
    });

    report.summary.averageHealthScore = Math.round(totalScore / report.packages.length);
    report.summary.totalVulnerabilities = totalVulns;
    report.summary.totalOutdatedPackages = totalOutdated;
    report.summary.criticalIssues = criticalIssues;

    const reportPath = path.join(__dirname, 'logs', 'dependency-health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Dependency health report saved: ${reportPath}`);
    
    // Log summary
    this.log(`📈 Overall Health Score: ${report.summary.averageHealthScore}/100`);
    this.log(`🔒 Total Vulnerabilities: ${report.summary.totalVulnerabilities}`);
    this.log(`📅 Total Outdated Packages: ${report.summary.totalOutdatedPackages}`);
    this.log(`🚨 Critical Issues: ${report.summary.criticalIssues}`);
  }

  async startMonitoring() {
    this.log('🚀 Starting dependency health monitoring...');
    
    // Initial check
    await this.checkDependencies();
    
    // Schedule periodic checks
    setInterval(async () => {
      this.log('🔄 Running periodic dependency health check...');
      await this.checkDependencies();
    }, 3600000); // Every hour
    
    // Schedule vulnerability checks more frequently
    setInterval(async () => {
      this.log('🔒 Running security vulnerability check...');
      await this.checkVulnerabilities();
      await this.calculateHealthScores();
      await this.generateReport();
    }, 1800000); // Every 30 minutes
    
    this.log('✅ Dependency health monitoring started');
  }

  getStatus() {
    return {
      running: true,
      packagesMonitored: this.dependencyStatus.size,
      lastCheck: new Date().toISOString(),
      totalVulnerabilities: Array.from(this.vulnerabilities.values())
        .reduce((sum, vulns) => sum + vulns.total, 0),
      totalOutdated: Array.from(this.outdatedPackages.values())
        .reduce((sum, outdated) => sum + outdated.total, 0)
    };
  }
}

// CLI handling
const monitor = new DependencyMonitor();
const command = process.argv[2];

switch (command) {
  case 'start':
    monitor.startMonitoring();
    break;
  case 'check':
    monitor.checkDependencies();
    break;
  case 'status':
    console.log(JSON.stringify(monitor.getStatus(), null, 2));
    break;
  default:
    monitor.startMonitoring();
}

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Dependency Monitor...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down Dependency Monitor...');
  process.exit(0);
});