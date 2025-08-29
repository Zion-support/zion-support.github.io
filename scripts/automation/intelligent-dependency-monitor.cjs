#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentDependencyMonitor {
  constructor() {
    this.monitorLog = path.join(__dirname, '../logs', 'dependency-monitor.log');
    this.ensureLogDirectory();
    this.packageFiles = ['package.json', 'package-lock.json'];
    this.dependencyHealth = new Map();
    this.vulnerabilityThresholds = {
      critical: 0,
      high: 2,
      medium: 5,
      low: 10
    };
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.monitorLog);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] Dependency Monitor: ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.monitorLog, logMessage);
  }

  async monitorDependencies() {
    try {
      this.log('🔍 Starting intelligent dependency monitoring...');
      
      // Analyze current dependency state
      const currentState = await this.analyzeCurrentState();
      
      // Check for vulnerabilities
      const vulnerabilities = await this.checkVulnerabilities();
      
      // Check for outdated packages
      const outdatedPackages = await this.checkOutdatedPackages();
      
      // Analyze dependency health scores
      const healthScores = await this.calculateHealthScores(currentState, vulnerabilities, outdatedPackages);
      
      // Generate recommendations
      const recommendations = this.generateRecommendations(healthScores, vulnerabilities, outdatedPackages);
      
      // Apply automatic fixes where safe
      await this.applyAutomaticFixes(recommendations);
      
      // Generate comprehensive report
      this.generateReport(currentState, vulnerabilities, outdatedPackages, healthScores, recommendations);
      
      this.log('✅ Dependency monitoring completed successfully');
      
    } catch (error) {
      this.log(`❌ Dependency monitoring failed: ${error.message}`);
    }
  }

  async analyzeCurrentState() {
    const state = {
      totalDependencies: 0,
      directDependencies: 0,
      devDependencies: 0,
      peerDependencies: 0,
      optionalDependencies: 0,
      packageSize: 0,
      lastUpdated: null
    };

    try {
      // Read package.json
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      state.directDependencies = Object.keys(packageJson.dependencies || {}).length;
      state.devDependencies = Object.keys(packageJson.devDependencies || {}).length;
      state.peerDependencies = Object.keys(packageJson.peerDependencies || {}).length;
      state.optionalDependencies = Object.keys(packageJson.optionalDependencies || {}).length;
      state.totalDependencies = state.directDependencies + state.devDependencies + state.peerDependencies + state.optionalDependencies;
      
      // Check package-lock.json size
      if (fs.existsSync('package-lock.json')) {
        const stats = fs.statSync('package-lock.json');
        state.packageSize = stats.size;
        state.lastUpdated = stats.mtime;
      }
      
      this.log(`📦 Analyzed ${state.totalDependencies} total dependencies`);
      
    } catch (error) {
      this.log(`Error analyzing package state: ${error.message}`);
    }
    
    return state;
  }

  async checkVulnerabilities() {
    const vulnerabilities = {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
      details: []
    };

    try {
      this.log('🔒 Checking for security vulnerabilities...');
      
      // Run npm audit
      const auditResult = execSync('npm audit --json', { encoding: 'utf8' });
      const auditData = JSON.parse(auditResult);
      
      if (auditData.vulnerabilities) {
        Object.values(auditData.vulnerabilities).forEach(vuln => {
          const severity = vuln.severity.toLowerCase();
          if (vulnerabilities.hasOwnProperty(severity)) {
            vulnerabilities[severity]++;
          }
          
          vulnerabilities.details.push({
            package: vuln.name,
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation
          });
        });
      }
      
      this.log(`🔒 Found ${vulnerabilities.critical + vulnerabilities.high + vulnerabilities.medium + vulnerabilities.low} vulnerabilities`);
      
    } catch (error) {
      this.log(`Warning: Could not check vulnerabilities: ${error.message}`);
    }
    
    return vulnerabilities;
  }

  async checkOutdatedPackages() {
    const outdatedPackages = {
      major: [],
      minor: [],
      patch: [],
      total: 0
    };

    try {
      this.log('📅 Checking for outdated packages...');
      
      // Run npm outdated
      const outdatedResult = execSync('npm outdated --json', { encoding: 'utf8' });
      const outdatedData = JSON.parse(outdatedResult);
      
      Object.entries(outdatedData).forEach(([packageName, packageInfo]) => {
        const current = packageInfo.current;
        const latest = packageInfo.latest;
        
        if (this.isMajorUpdate(current, latest)) {
          outdatedPackages.major.push({ name: packageName, current, latest, type: 'major' });
        } else if (this.isMinorUpdate(current, latest)) {
          outdatedPackages.minor.push({ name: packageName, current, latest, type: 'minor' });
        } else {
          outdatedPackages.patch.push({ name: packageName, current, latest, type: 'patch' });
        }
      });
      
      outdatedPackages.total = outdatedPackages.major.length + outdatedPackages.minor.length + outdatedPackages.patch.length;
      
      this.log(`📅 Found ${outdatedPackages.total} outdated packages`);
      
    } catch (error) {
      this.log(`Warning: Could not check outdated packages: ${error.message}`);
    }
    
    return outdatedPackages;
  }

  isMajorUpdate(current, latest) {
    const currentMajor = parseInt(current.split('.')[0]);
    const latestMajor = parseInt(latest.split('.')[0]);
    return latestMajor > currentMajor;
  }

  isMinorUpdate(current, latest) {
    const currentMinor = parseInt(current.split('.')[1]);
    const latestMinor = parseInt(latest.split('.')[1]);
    return latestMinor > currentMinor;
  }

  async calculateHealthScores(currentState, vulnerabilities, outdatedPackages) {
    const scores = {
      security: 100,
      freshness: 100,
      stability: 100,
      overall: 100
    };
    
    // Security score based on vulnerabilities
    const totalVulns = vulnerabilities.critical + vulnerabilities.high + vulnerabilities.medium + vulnerabilities.low;
    if (totalVulns > 0) {
      scores.security = Math.max(0, 100 - (vulnerabilities.critical * 20) - (vulnerabilities.high * 10) - (vulnerabilities.medium * 5) - (vulnerabilities.low * 2));
    }
    
    // Freshness score based on outdated packages
    if (outdatedPackages.total > 0) {
      const outdatedRatio = outdatedPackages.total / currentState.totalDependencies;
      scores.freshness = Math.max(0, 100 - (outdatedRatio * 100));
    }
    
    // Stability score based on package age and size
    if (currentState.lastUpdated) {
      const daysSinceUpdate = (Date.now() - currentState.lastUpdated.getTime()) / (1000 * 60 * 60 * 24);
      if (daysSinceUpdate > 30) {
        scores.stability = Math.max(0, 100 - (daysSinceUpdate - 30) * 2);
      }
    }
    
    // Overall score (weighted average)
    scores.overall = Math.round((scores.security * 0.4) + (scores.freshness * 0.3) + (scores.stability * 0.3));
    
    return scores;
  }

  generateRecommendations(healthScores, vulnerabilities, outdatedPackages) {
    const recommendations = [];
    
    // Security recommendations
    if (vulnerabilities.critical > 0) {
      recommendations.push({
        priority: 'critical',
        type: 'security',
        action: 'Update packages with critical vulnerabilities immediately',
        packages: vulnerabilities.details.filter(v => v.severity === 'critical').map(v => v.package)
      });
    }
    
    if (vulnerabilities.high > 0) {
      recommendations.push({
        priority: 'high',
        type: 'security',
        action: 'Update packages with high severity vulnerabilities',
        packages: vulnerabilities.details.filter(v => v.severity === 'high').map(v => v.package)
      });
    }
    
    // Update recommendations
    if (outdatedPackages.major.length > 0) {
      recommendations.push({
        priority: 'medium',
        type: 'update',
        action: 'Review and update major version updates',
        packages: outdatedPackages.major.map(p => p.name),
        note: 'Major updates may include breaking changes'
      });
    }
    
    if (outdatedPackages.minor.length > 0) {
      recommendations.push({
        priority: 'low',
        type: 'update',
        action: 'Update minor version updates',
        packages: outdatedPackages.minor.map(p => p.name),
        note: 'Minor updates are generally safe'
      });
    }
    
    if (outdatedPackages.patch.length > 0) {
      recommendations.push({
        priority: 'low',
        type: 'update',
        action: 'Update patch versions automatically',
        packages: outdatedPackages.patch.map(p => p.name),
        note: 'Patch updates are safe and recommended'
      });
    }
    
    // Health improvement recommendations
    if (healthScores.overall < 70) {
      recommendations.push({
        priority: 'medium',
        type: 'health',
        action: 'Overall dependency health is poor. Consider dependency cleanup and updates.',
        note: `Current health score: ${healthScores.overall}/100`
      });
    }
    
    return recommendations;
  }

  async applyAutomaticFixes(recommendations) {
    this.log('🔧 Applying automatic dependency fixes...');
    
    let fixedCount = 0;
    
    for (const recommendation of recommendations) {
      if (recommendation.type === 'update' && recommendation.priority === 'low' && recommendation.packages) {
        try {
          // Apply patch updates automatically
          if (recommendation.note.includes('Patch updates')) {
            await this.updatePackages(recommendation.packages, 'patch');
            fixedCount += recommendation.packages.length;
          }
        } catch (error) {
          this.log(`Failed to apply automatic fix: ${error.message}`);
        }
      }
    }
    
    this.log(`✅ Applied ${fixedCount} automatic dependency updates`);
  }

  async updatePackages(packages, updateType) {
    try {
      const packageList = packages.join(' ');
      let command = '';
      
      switch (updateType) {
        case 'patch':
          command = `npm update ${packageList}`;
          break;
        case 'minor':
          command = `npm update ${packageList}`;
          break;
        case 'major':
          command = `npm install ${packageList}@latest`;
          break;
      }
      
      execSync(command, { stdio: 'pipe' });
      this.log(`Updated packages: ${packageList}`);
      
    } catch (error) {
      throw new Error(`Failed to update packages: ${error.message}`);
    }
  }

  generateReport(currentState, vulnerabilities, outdatedPackages, healthScores, recommendations) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalDependencies: currentState.totalDependencies,
        vulnerabilities: vulnerabilities.critical + vulnerabilities.high + vulnerabilities.medium + vulnerabilities.low,
        outdatedPackages: outdatedPackages.total,
        healthScore: healthScores.overall
      },
      healthScores,
      vulnerabilities,
      outdatedPackages,
      recommendations,
      currentState
    };
    
    const reportPath = path.join(__dirname, '../reports', 'dependency-health-report.json');
    const reportDir = path.dirname(reportPath);
    
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Generated dependency health report: ${reportPath}`);
  }
}

// Main execution
const monitor = new IntelligentDependencyMonitor();
monitor.monitorDependencies().catch(console.error);