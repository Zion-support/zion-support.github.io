#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');

console.log('🔍 Starting Smart Dependency Health Monitor...');

// Get automation interval from environment variable (default: 6 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 21600000; // 6 hours

class SmartDependencyMonitor {
  constructor() {
    this.monitoringResults = {
      vulnerabilities: [],
      outdatedPackages: [],
      deprecatedPackages: [],
      securityIssues: [],
      performanceMetrics: {},
      recommendations: [],
      timestamp: new Date().toISOString()
    };
    this.reportDir = path.join(process.cwd(), 'dependency-monitor-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async runDependencyHealthCheck() {
    try {
      console.log(`🔍 Running dependency health check at ${new Date().toISOString()}`);
      
      // Check for vulnerabilities
      await this.checkVulnerabilities();
      
      // Check for outdated packages
      await this.checkOutdatedPackages();
      
      // Check for deprecated packages
      await this.checkDeprecatedPackages();
      
      // Analyze dependency tree
      await this.analyzeDependencyTree();
      
      // Check package ecosystem health
      await this.checkPackageEcosystemHealth();
      
      // Generate smart recommendations
      await this.generateSmartRecommendations();
      
      // Save comprehensive report
      await this.saveMonitoringReport();
      
      console.log('✅ Dependency health check completed successfully');
      
    } catch (error) {
      console.error('❌ Dependency health check failed:', error.message);
    }
  }

  async checkVulnerabilities() {
    console.log('🛡️ Checking for security vulnerabilities...');
    
    try {
      // Run npm audit
      const auditOutput = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(auditOutput);
      
      if (auditData.vulnerabilities) {
        Object.keys(auditData.vulnerabilities).forEach(packageName => {
          const vuln = auditData.vulnerabilities[packageName];
          vuln.via.forEach(via => {
            this.monitoringResults.vulnerabilities.push({
              package: packageName,
              severity: via.severity || 'unknown',
              title: via.title || 'Unknown vulnerability',
              description: via.description || 'No description available',
              cwe: via.cwe || [],
              recommendation: via.recommendation || 'Update to latest version',
              via: via.source || 'unknown'
            });
          });
        });
      }
      
      console.log(`✅ Found ${this.monitoringResults.vulnerabilities.length} vulnerabilities`);
      
    } catch (error) {
      console.log('⚠️  npm audit failed, trying alternative method...');
      await this.checkVulnerabilitiesAlternative();
    }
  }

  async checkVulnerabilitiesAlternative() {
    try {
      // Try using npm ls to check for known vulnerable packages
      const lsOutput = execSync('npm ls --depth=0', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Check for common vulnerable patterns
      const vulnerablePatterns = [
        /UNMET PEER DEPENDENCY/,
        /npm ERR! missing:/,
        /npm ERR! extraneous:/
      ];
      
      vulnerablePatterns.forEach(pattern => {
        if (pattern.test(lsOutput)) {
          this.monitoringResults.vulnerabilities.push({
            package: 'unknown',
            severity: 'medium',
            title: 'Dependency resolution issue',
            description: 'Package dependency resolution problem detected',
            recommendation: 'Run npm install to resolve dependencies'
          });
        }
      });
      
    } catch (error) {
      console.log('⚠️  Alternative vulnerability check also failed');
    }
  }

  async checkOutdatedPackages() {
    console.log('📦 Checking for outdated packages...');
    
    try {
      // Run npm outdated
      const outdatedOutput = execSync('npm outdated --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const outdatedData = JSON.parse(outdatedOutput);
      
      Object.keys(outdatedData).forEach(packageName => {
        const packageInfo = outdatedData[packageName];
        this.monitoringResults.outdatedPackages.push({
          package: packageName,
          current: packageInfo.current,
          wanted: packageInfo.wanted,
          latest: packageInfo.latest,
          location: packageInfo.location,
          updateType: this.determineUpdateType(packageInfo.current, packageInfo.latest)
        });
      });
      
      console.log(`✅ Found ${this.monitoringResults.outdatedPackages.length} outdated packages`);
      
    } catch (error) {
      console.log('ℹ️  No outdated packages found or npm outdated failed');
    }
  }

  determineUpdateType(current, latest) {
    const currentParts = current.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);
    
    if (latestParts[0] > currentParts[0]) return 'major';
    if (latestParts[1] > currentParts[1]) return 'minor';
    if (latestParts[2] > currentParts[2]) return 'patch';
    return 'none';
  }

  async checkDeprecatedPackages() {
    console.log('⚠️ Checking for deprecated packages...');
    
    try {
      const packageLockPath = path.join(process.cwd(), 'package-lock.json');
      if (!fs.existsSync(packageLockPath)) return;
      
      const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
      
      // Check dependencies for deprecated packages
      await this.checkPackageDeprecation(packageLock.dependencies || {});
      
      console.log(`✅ Found ${this.monitoringResults.deprecatedPackages.length} deprecated packages`);
      
    } catch (error) {
      console.log('⚠️  Failed to check deprecated packages:', error.message);
    }
  }

  async checkPackageDeprecation(dependencies, depth = 0) {
    if (depth > 3) return; // Limit recursion depth
    
    for (const [packageName, packageInfo] of Object.entries(dependencies)) {
      try {
        // Check npm registry for deprecation info
        const deprecationInfo = await this.checkNpmDeprecation(packageName);
        
        if (deprecationInfo.deprecated) {
          this.monitoringResults.deprecatedPackages.push({
            package: packageName,
            version: packageInfo.version,
            deprecated: deprecationInfo.deprecated,
            replacement: deprecationInfo.replacement || 'No replacement suggested'
          });
        }
        
        // Recursively check nested dependencies
        if (packageInfo.dependencies && depth < 2) {
          await this.checkPackageDeprecation(packageInfo.dependencies, depth + 1);
        }
        
      } catch (error) {
        // Skip packages that can't be checked
      }
    }
  }

  async checkNpmDeprecation(packageName) {
    return new Promise((resolve) => {
      const url = `https://registry.npmjs.org/${packageName}`;
      
      https.get(url, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          try {
            const packageData = JSON.parse(data);
            const latestVersion = packageData['dist-tags']?.latest;
            const latestPackage = packageData.versions?.[latestVersion];
            
            resolve({
              deprecated: latestPackage?.deprecated || false,
              replacement: latestPackage?.deprecated ? 'Check npm registry for alternatives' : null
            });
          } catch (error) {
            resolve({ deprecated: false, replacement: null });
          }
        });
      }).on('error', () => {
        resolve({ deprecated: false, replacement: null });
      });
    });
  }

  async analyzeDependencyTree() {
    console.log('🌳 Analyzing dependency tree...');
    
    try {
      const packageLockPath = path.join(process.cwd(), 'package-lock.json');
      if (!fs.existsSync(packageLockPath)) return;
      
      const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
      
      // Analyze dependency depth and complexity
      const treeAnalysis = this.analyzeTreeStructure(packageLock.dependencies || {});
      
      this.monitoringResults.performanceMetrics = {
        totalDependencies: treeAnalysis.totalCount,
        maxDepth: treeAnalysis.maxDepth,
        duplicatePackages: treeAnalysis.duplicates,
        largeDependencies: treeAnalysis.largePackages
      };
      
      console.log(`✅ Dependency tree analyzed: ${treeAnalysis.totalCount} packages, max depth: ${treeAnalysis.maxDepth}`);
      
    } catch (error) {
      console.log('⚠️  Failed to analyze dependency tree:', error.message);
    }
  }

  analyzeTreeStructure(dependencies, depth = 0, visited = new Set()) {
    let totalCount = 0;
    let maxDepth = depth;
    let duplicates = 0;
    let largePackages = 0;
    
    for (const [packageName, packageInfo] of Object.entries(dependencies)) {
      totalCount++;
      
      if (visited.has(packageName)) {
        duplicates++;
      } else {
        visited.add(packageName);
      }
      
      // Check for large packages (>1MB)
      if (packageInfo.size && packageInfo.size > 1024 * 1024) {
        largePackages++;
      }
      
      if (packageInfo.dependencies) {
        const nestedAnalysis = this.analyzeTreeStructure(packageInfo.dependencies, depth + 1, visited);
        totalCount += nestedAnalysis.totalCount;
        maxDepth = Math.max(maxDepth, nestedAnalysis.maxDepth);
        duplicates += nestedAnalysis.duplicates;
        largePackages += nestedAnalysis.largePackages;
      }
    }
    
    return { totalCount, maxDepth, duplicates, largePackages };
  }

  async checkPackageEcosystemHealth() {
    console.log('🏥 Checking package ecosystem health...');
    
    try {
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      const criticalPackages = [
        'react', 'react-dom', 'vite', 'typescript', 'eslint'
      ];
      
      for (const criticalPackage of criticalPackages) {
        if (packageJson.dependencies?.[criticalPackage] || packageJson.devDependencies?.[criticalPackage]) {
          const health = await this.checkPackageHealth(criticalPackage);
          if (health.issues.length > 0) {
            this.monitoringResults.securityIssues.push(...health.issues);
          }
        }
      }
      
      console.log(`✅ Package ecosystem health checked`);
      
    } catch (error) {
      console.log('⚠️  Failed to check package ecosystem health:', error.message);
    }
  }

  async checkPackageHealth(packageName) {
    const issues = [];
    
    try {
      // Check if package has recent updates
      const lastUpdate = await this.getPackageLastUpdate(packageName);
      const daysSinceUpdate = (Date.now() - lastUpdate) / (1000 * 60 * 60 * 24);
      
      if (daysSinceUpdate > 365) {
        issues.push({
          type: 'stale-package',
          package: packageName,
          severity: 'medium',
          description: `Package hasn't been updated in ${Math.floor(daysSinceUpdate)} days`,
          recommendation: 'Consider alternative packages or check if maintenance is still active'
        });
      }
      
    } catch (error) {
      // Skip packages that can't be checked
    }
    
    return { issues };
  }

  async getPackageLastUpdate(packageName) {
    return new Promise((resolve) => {
      const url = `https://registry.npmjs.org/${packageName}`;
      
      https.get(url, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          try {
            const packageData = JSON.parse(data);
            const latestVersion = packageData['dist-tags']?.latest;
            const latestPackage = packageData.versions?.[latestVersion];
            
            resolve(latestPackage?.time?.modified ? new Date(latestPackage.time.modified).getTime() : Date.now());
          } catch (error) {
            resolve(Date.now());
          }
        });
      }).on('error', () => {
        resolve(Date.now());
      });
    });
  }

  async generateSmartRecommendations() {
    console.log('💡 Generating smart recommendations...');
    
    const recommendations = [];
    
    // Security recommendations
    if (this.monitoringResults.vulnerabilities.length > 0) {
      const highSeverityVulns = this.monitoringResults.vulnerabilities.filter(v => v.severity === 'high');
      
      if (highSeverityVulns.length > 0) {
        recommendations.push({
          priority: 'critical',
          category: 'security',
          title: 'High severity vulnerabilities detected',
          description: `Found ${highSeverityVulns.length} high severity vulnerabilities that need immediate attention`,
          action: 'Run npm audit fix and review remaining vulnerabilities manually',
          urgency: 'immediate'
        });
      }
    }
    
    // Update recommendations
    if (this.monitoringResults.outdatedPackages.length > 0) {
      const majorUpdates = this.monitoringResults.outdatedPackages.filter(p => p.updateType === 'major');
      
      if (majorUpdates.length > 0) {
        recommendations.push({
          priority: 'high',
          category: 'updates',
          title: 'Major version updates available',
          description: `Found ${majorUpdates.length} packages with major version updates`,
          action: 'Review breaking changes and plan major version updates',
          urgency: 'planned'
        });
      }
    }
    
    // Performance recommendations
    if (this.monitoringResults.performanceMetrics.largeDependencies > 5) {
      recommendations.push({
        priority: 'medium',
        category: 'performance',
        title: 'Large dependencies detected',
        description: `Found ${this.monitoringResults.performanceMetrics.largeDependencies} large dependencies that may impact build times`,
        action: 'Review if all large dependencies are necessary',
        urgency: 'low'
      });
    }
    
    // Maintenance recommendations
    if (this.monitoringResults.deprecatedPackages.length > 0) {
      recommendations.push({
        priority: 'medium',
        category: 'maintenance',
        title: 'Deprecated packages detected',
        description: `Found ${this.monitoringResults.deprecatedPackages.length} deprecated packages`,
        action: 'Plan migration to alternative packages',
        urgency: 'planned'
      });
    }
    
    this.monitoringResults.recommendations = recommendations;
  }

  async saveMonitoringReport() {
    console.log('📊 Saving dependency monitoring report...');
    
    const reportPath = path.join(this.reportDir, `dependency-monitor-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.monitoringResults, null, 2));
    
    // Also save latest report
    const latestReportPath = path.join(this.reportDir, 'latest-dependency-monitor.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(this.monitoringResults, null, 2));
    
    console.log(`✅ Dependency monitoring report saved to ${reportPath}`);
    
    // Log summary
    console.log('\n📊 Dependency Health Summary:');
    console.log(`  - Vulnerabilities: ${this.monitoringResults.vulnerabilities.length}`);
    console.log(`  - Outdated Packages: ${this.monitoringResults.outdatedPackages.length}`);
    console.log(`  - Deprecated Packages: ${this.monitoringResults.deprecatedPackages.length}`);
    console.log(`  - Security Issues: ${this.monitoringResults.securityIssues.length}`);
    console.log(`  - Recommendations: ${this.monitoringResults.recommendations.length}`);
    
    if (this.monitoringResults.recommendations.length > 0) {
      console.log('\n💡 Key Recommendations:');
      this.monitoringResults.recommendations
        .filter(r => r.priority === 'critical' || r.priority === 'high')
        .forEach(rec => {
          console.log(`  - ${rec.priority.toUpperCase()}: ${rec.title}`);
        });
    }
  }
}

async function runSmartDependencyMonitor() {
  const monitor = new SmartDependencyMonitor();
  await monitor.runDependencyHealthCheck();
}

// Run the monitor
runSmartDependencyMonitor();

// Set up continuous monitoring
setInterval(runSmartDependencyMonitor, AUTOMATION_INTERVAL);

console.log(`🔍 Smart Dependency Monitor will run every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);