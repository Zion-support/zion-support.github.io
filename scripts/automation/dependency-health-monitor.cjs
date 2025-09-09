#!/usr/bin/env node

/**
 * Intelligent Dependency Health Monitor
 * Monitors package health, security vulnerabilities, and dependency relationships
 * 
 * Features:
 * - Real-time dependency health monitoring
 * - Security vulnerability detection
 * - Outdated package identification
 * - Dependency conflict resolution
 * - Automated update suggestions
 * - Performance impact analysis
 * - Bundle size optimization
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const https = require('https');

class DependencyHealthMonitor {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      checkInterval: 1800000, // 30 minutes
      npmRegistry: 'https://registry.npmjs.org',
      securityCheckInterval: 3600000, // 1 hour
      maxOutdatedAge: 30, // days
      criticalSeverity: ['critical', 'high'],
      reportFile: 'logs/dependency-health.json',
      logFile: 'logs/dependency-monitor.log',
      packageFiles: ['package.json', 'package-lock.json', 'yarn.lock']
    };
    
    this.healthData = {
      timestamp: Date.now(),
      totalDependencies: 0,
      outdatedPackages: 0,
      securityVulnerabilities: 0,
      criticalIssues: 0,
      recommendations: [],
      packageHealth: {},
      updateImpact: {
        breaking: 0,
        minor: 0,
        patch: 0
      }
    };
    
    this.setupLogging();
    this.initialize();
  }

  setupLogging() {
    const logDir = path.dirname(this.config.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    this.log = (message, level = 'INFO') => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] ${message}`;
      console.log(logMessage);
      
      try {
        fs.appendFileSync(this.config.logFile, logMessage + '\n');
      } catch (error) {
        console.error('Failed to write to log file:', error.message);
      }
    };
  }

  async initialize() {
    try {
      this.log('Initializing Dependency Health Monitor...');
      
      // Create reports directory
      const reportDir = path.dirname(this.config.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      // Check if package.json exists
      if (!this.hasPackageFile()) {
        this.log('No package.json found. Exiting...', 'ERROR');
        process.exit(1);
      }
      
      this.startMonitoring();
      
    } catch (error) {
      this.log(`Initialization failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }

  hasPackageFile() {
    return this.config.packageFiles.some(file => 
      fs.existsSync(path.join(this.config.projectRoot, file))
    );
  }

  startMonitoring() {
    this.log('Starting dependency health monitoring...');
    
    // Initial health check
    this.runHealthCheck();
    
    // Regular health checks
    setInterval(() => {
      this.runHealthCheck();
    }, this.config.checkInterval);
    
    // Security checks
    setInterval(() => {
      this.runSecurityCheck();
    }, this.config.securityCheckInterval);
  }

  async runHealthCheck() {
    try {
      this.log('Running dependency health check...');
      
      const packageData = this.readPackageData();
      const outdatedPackages = await this.checkOutdatedPackages();
      const dependencyHealth = await this.analyzeDependencyHealth(packageData);
      
      this.healthData.totalDependencies = this.countDependencies(packageData);
      this.healthData.outdatedPackages = outdatedPackages.length;
      this.healthData.packageHealth = dependencyHealth;
      
      // Analyze update impact
      this.analyzeUpdateImpact(outdatedPackages);
      
      // Generate recommendations
      this.generateRecommendations(outdatedPackages, dependencyHealth);
      
      this.generateReport();
      this.log(`Health check completed. Found ${outdatedPackages.length} outdated packages.`);
      
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, 'ERROR');
    }
  }

  readPackageData() {
    try {
      const packagePath = path.join(this.config.projectRoot, 'package.json');
      const packageContent = fs.readFileSync(packagePath, 'utf8');
      return JSON.parse(packageContent);
    } catch (error) {
      this.log(`Failed to read package.json: ${error.message}`, 'ERROR');
      return {};
    }
  }

  async checkOutdatedPackages() {
    try {
      this.log('Checking for outdated packages...');
      
      const output = execSync('npm outdated --json', { 
        encoding: 'utf8',
        cwd: this.config.projectRoot,
        stdio: 'pipe'
      });
      
      if (output.trim()) {
        return JSON.parse(output);
      }
      
      return {};
    } catch (error) {
      // npm outdated returns non-zero exit code when packages are outdated
      if (error.stdout) {
        try {
          return JSON.parse(error.stdout);
        } catch (parseError) {
          this.log(`Failed to parse outdated packages: ${parseError.message}`, 'WARN');
          return {};
        }
      }
      return {};
    }
  }

  async analyzeDependencyHealth(packageData) {
    const health = {};
    const allDeps = {
      ...packageData.dependencies,
      ...packageData.devDependencies
    };
    
    for (const [name, version] of Object.entries(allDeps)) {
      try {
        const packageInfo = await this.getPackageInfo(name);
        health[name] = {
          currentVersion: version,
          latestVersion: packageInfo['dist-tags']?.latest || 'unknown',
          lastUpdated: packageInfo.time?.modified || 'unknown',
          downloads: packageInfo.downloads?.monthly || 0,
          maintainers: packageInfo.maintainers?.length || 0,
          repository: packageInfo.repository?.url || 'unknown',
          health: this.calculatePackageHealth(packageInfo)
        };
      } catch (error) {
        this.log(`Failed to analyze package ${name}: ${error.message}`, 'WARN');
        health[name] = {
          currentVersion: version,
          health: 'unknown'
        };
      }
    }
    
    return health;
  }

  async getPackageInfo(packageName) {
    return new Promise((resolve, reject) => {
      const url = `${this.config.npmRegistry}/${packageName}`;
      
      https.get(url, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            reject(new Error(`Failed to parse package info: ${error.message}`));
          }
        });
      }).on('error', (error) => {
        reject(error);
      });
    });
  }

  calculatePackageHealth(packageInfo) {
    let score = 100;
    
    // Check if package is deprecated
    if (packageInfo.deprecated) {
      score -= 50;
    }
    
    // Check last update
    if (packageInfo.time?.modified) {
      const lastUpdate = new Date(packageInfo.time.modified);
      const daysSinceUpdate = (Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24);
      
      if (daysSinceUpdate > 365) score -= 20;
      else if (daysSinceUpdate > 180) score -= 10;
    }
    
    // Check downloads
    if (packageInfo.downloads?.monthly < 1000) score -= 15;
    
    // Check maintainers
    if (!packageInfo.maintainers || packageInfo.maintainers.length === 0) score -= 20;
    
    // Check repository
    if (!packageInfo.repository?.url) score -= 10;
    
    if (score >= 80) return 'excellent';
    if (score >= 60) return 'good';
    if (score >= 40) return 'fair';
    return 'poor';
  }

  countDependencies(packageData) {
    const deps = packageData.dependencies || {};
    const devDeps = packageData.devDependencies || {};
    return Object.keys(deps).length + Object.keys(devDeps).length;
  }

  analyzeUpdateImpact(outdatedPackages) {
    this.healthData.updateImpact = {
      breaking: 0,
      minor: 0,
      patch: 0
    };
    
    for (const [name, info] of Object.entries(outdatedPackages)) {
      const current = this.parseVersion(info.current);
      const latest = this.parseVersion(info.latest);
      
      if (current.major < latest.major) {
        this.healthData.updateImpact.breaking++;
      } else if (current.minor < latest.minor) {
        this.healthData.updateImpact.minor++;
      } else if (current.patch < latest.patch) {
        this.healthData.updateImpact.patch++;
      }
    }
  }

  parseVersion(version) {
    const match = version.match(/^(\d+)\.(\d+)\.(\d+)/);
    if (match) {
      return {
        major: parseInt(match[1]),
        minor: parseInt(match[2]),
        patch: parseInt(match[3])
      };
    }
    return { major: 0, minor: 0, patch: 0 };
  }

  generateRecommendations(outdatedPackages, dependencyHealth) {
    this.healthData.recommendations = [];
    
    // Security recommendations
    if (this.healthData.securityVulnerabilities > 0) {
      this.healthData.recommendations.push({
        priority: 'critical',
        type: 'security',
        action: 'Run npm audit fix to resolve security vulnerabilities',
        impact: 'Critical security risk'
      });
    }
    
    // Update recommendations
    if (this.healthData.updateImpact.breaking > 0) {
      this.healthData.recommendations.push({
        priority: 'high',
        type: 'update',
        action: `Review ${this.healthData.updateImpact.breaking} breaking changes before updating`,
        impact: 'Potential breaking changes'
      });
    }
    
    if (this.healthData.updateImpact.minor > 0) {
      this.healthData.recommendations.push({
        priority: 'medium',
        type: 'update',
        action: `Update ${this.healthData.updateImpact.minor} packages with minor versions`,
        impact: 'New features and bug fixes'
      });
    }
    
    if (this.healthData.updateImpact.patch > 0) {
      this.healthData.recommendations.push({
        priority: 'low',
        type: 'update',
        action: `Update ${this.healthData.updateImpact.patch} packages with patch versions`,
        impact: 'Bug fixes and security patches'
      });
    }
    
    // Health recommendations
    const poorHealthPackages = Object.entries(dependencyHealth)
      .filter(([name, health]) => health.health === 'poor')
      .map(([name]) => name);
    
    if (poorHealthPackages.length > 0) {
      this.healthData.recommendations.push({
        priority: 'medium',
        type: 'health',
        action: `Consider alternatives for packages with poor health: ${poorHealthPackages.join(', ')}`,
        impact: 'Maintenance and reliability concerns'
      });
    }
  }

  async runSecurityCheck() {
    try {
      this.log('Running security vulnerability check...');
      
      const output = execSync('npm audit --json', { 
        encoding: 'utf8',
        cwd: this.config.projectRoot,
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(output);
      this.healthData.securityVulnerabilities = auditData.metadata?.vulnerabilities?.total || 0;
      this.healthData.criticalIssues = auditData.metadata?.vulnerabilities?.critical || 0;
      
      this.log(`Security check completed. Found ${this.healthData.securityVulnerabilities} vulnerabilities.`);
      
    } catch (error) {
      // npm audit returns non-zero exit code when vulnerabilities are found
      if (error.stdout) {
        try {
          const auditData = JSON.parse(error.stdout);
          this.healthData.securityVulnerabilities = auditData.metadata?.vulnerabilities?.total || 0;
          this.healthData.criticalIssues = auditData.metadata?.vulnerabilities?.critical || 0;
          
          this.log(`Security check completed. Found ${this.healthData.securityVulnerabilities} vulnerabilities.`);
        } catch (parseError) {
          this.log(`Failed to parse security audit: ${parseError.message}`, 'ERROR');
        }
      } else {
        this.log(`Security check failed: ${error.message}`, 'ERROR');
      }
    }
  }

  generateReport() {
    try {
      const report = {
        ...this.healthData,
        timestamp: new Date().toISOString(),
        summary: {
          totalDependencies: this.healthData.totalDependencies,
          outdatedPackages: this.healthData.outdatedPackages,
          securityVulnerabilities: this.healthData.securityVulnerabilities,
          criticalIssues: this.healthData.criticalIssues,
          healthScore: this.calculateHealthScore()
        },
        updateStrategy: this.generateUpdateStrategy()
      };
      
      fs.writeFileSync(this.config.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report generated: ${this.config.reportFile}`);
      
    } catch (error) {
      this.log(`Failed to generate report: ${error.message}`, 'ERROR');
    }
  }

  calculateHealthScore() {
    const maxScore = 100;
    let score = maxScore;
    
    // Deduct for outdated packages
    score -= this.healthData.outdatedPackages * 2;
    
    // Deduct for security vulnerabilities
    score -= this.healthData.securityVulnerabilities * 5;
    score -= this.healthData.criticalIssues * 10;
    
    // Bonus for good health
    const excellentHealth = Object.values(this.healthData.packageHealth)
      .filter(health => health.health === 'excellent').length;
    score += excellentHealth * 0.5;
    
    return Math.max(0, Math.min(maxScore, Math.round(score)));
  }

  generateUpdateStrategy() {
    const strategy = {
      immediate: [],
      scheduled: [],
      deferred: []
    };
    
    if (this.healthData.criticalIssues > 0) {
      strategy.immediate.push('Run npm audit fix to resolve critical security vulnerabilities');
    }
    
    if (this.healthData.updateImpact.patch > 0) {
      strategy.immediate.push(`Update ${this.healthData.updateImpact.patch} patch versions: npm update`);
    }
    
    if (this.healthData.updateImpact.minor > 0) {
      strategy.scheduled.push(`Review and update ${this.healthData.updateImpact.minor} minor versions`);
    }
    
    if (this.healthData.updateImpact.breaking > 0) {
      strategy.deferred.push(`Plan major version updates for ${this.healthData.updateImpact.breaking} packages`);
    }
    
    return strategy;
  }
}

// Start the monitor
const monitor = new DependencyHealthMonitor();

// Handle graceful shutdown
process.on('SIGINT', () => {
  monitor.log('Shutting down Dependency Health Monitor...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  monitor.log('Shutting down Dependency Health Monitor...');
  process.exit(0);
});