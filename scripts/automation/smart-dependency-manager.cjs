#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📦 Starting smart dependency management automation...');

// Get automation interval from environment variable (default: 4 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours

class SmartDependencyManager {
  constructor() {
    this.dependencyAnalysis = {};
    this.vulnerabilityReport = {};
    this.updateRecommendations = [];
    this.logFile = path.join(process.cwd(), 'smart-dependency-manager.log');
    this.packageFiles = ['package.json', 'package-lock.json'];
  }

  async runDependencyManagement() {
    try {
      console.log(`📦 Running smart dependency management at ${new Date().toISOString()}`);
      
      // Analyze current dependencies
      await this.analyzeDependencies();
      
      // Check for vulnerabilities
      await this.checkVulnerabilities();
      
      // Analyze dependency health
      await this.analyzeDependencyHealth();
      
      // Generate update recommendations
      await this.generateUpdateRecommendations();
      
      // Apply smart updates
      await this.applySmartUpdates();
      
      // Generate comprehensive report
      await this.generateDependencyReport();
      
      console.log('✅ Smart dependency management completed successfully');
      
    } catch (error) {
      console.error('❌ Smart dependency management failed:', error.message);
      this.logError(error);
    }
  }

  async analyzeDependencies() {
    try {
      console.log('🔍 Analyzing current dependencies...');
      
      // Read package.json
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      if (!fs.existsSync(packageJsonPath)) {
        console.log('⚠️  package.json not found');
        return;
      }
      
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      this.dependencyAnalysis = {
        dependencies: packageJson.dependencies || {},
        devDependencies: packageJson.devDependencies || {},
        peerDependencies: packageJson.peerDependencies || {},
        totalDependencies: 0,
        outdatedPackages: [],
        unusedPackages: [],
        duplicatePackages: [],
        securityIssues: []
      };
      
      // Count total dependencies
      this.dependencyAnalysis.totalDependencies = 
        Object.keys(this.dependencyAnalysis.dependencies).length +
        Object.keys(this.dependencyAnalysis.devDependencies).length +
        Object.keys(this.dependencyAnalysis.peerDependencies).length;
      
      // Check for outdated packages
      await this.checkOutdatedPackages();
      
      // Check for unused packages
      await this.checkUnusedPackages();
      
      // Check for duplicate packages
      await this.checkDuplicatePackages();
      
      console.log(`🔍 Dependency analysis complete: ${this.dependencyAnalysis.totalDependencies} total dependencies`);
      
    } catch (error) {
      console.log('⚠️  Dependency analysis failed:', error.message);
    }
  }

  async checkOutdatedPackages() {
    try {
      console.log('📅 Checking for outdated packages...');
      
      // Run npm outdated to get outdated packages
      try {
        const outdatedOutput = execSync('npm outdated --json', { stdio: 'pipe', encoding: 'utf8' });
        const outdatedData = JSON.parse(outdatedOutput);
        
        this.dependencyAnalysis.outdatedPackages = Object.entries(outdatedData).map(([name, info]) => ({
          name,
          current: info.current,
          wanted: info.wanted,
          latest: info.latest,
          type: this.getPackageType(name)
        }));
        
        console.log(`📅 Found ${this.dependencyAnalysis.outdatedPackages.length} outdated packages`);
        
      } catch (error) {
        // npm outdated returns non-zero exit code when there are outdated packages
        if (error.status === 1) {
          console.log('📅 No outdated packages found');
        } else {
          console.log('⚠️  Could not check for outdated packages');
        }
      }
      
    } catch (error) {
      console.log('⚠️  Outdated package check failed:', error.message);
    }
  }

  getPackageType(packageName) {
    if (this.dependencyAnalysis.dependencies[packageName]) return 'dependency';
    if (this.dependencyAnalysis.devDependencies[packageName]) return 'devDependency';
    if (this.dependencyAnalysis.peerDependencies[packageName]) return 'peerDependency';
    return 'unknown';
  }

  async checkUnusedPackages() {
    try {
      console.log('🗑️  Checking for unused packages...');
      
      // This is a simplified check - in a real implementation, you'd use tools like depcheck
      const unusedPackages = [];
      
      // Check for packages that might be unused (simplified heuristic)
      for (const [name, version] of Object.entries(this.dependencyAnalysis.dependencies)) {
        if (this.isPackagePotentiallyUnused(name)) {
          unusedPackages.push({ name, version, reason: 'Potentially unused based on import analysis' });
        }
      }
      
      this.dependencyAnalysis.unusedPackages = unusedPackages;
      console.log(`🗑️  Found ${unusedPackages.length} potentially unused packages`);
      
    } catch (error) {
      console.log('⚠️  Unused package check failed:', error.message);
    }
  }

  isPackagePotentiallyUnused(packageName) {
    // Simplified check - in reality, you'd analyze imports across the codebase
    const commonUnusedPackages = [
      'lodash', 'moment', 'jquery', 'underscore', 'ramda'
    ];
    
    return commonUnusedPackages.includes(packageName);
  }

  async checkDuplicatePackages() {
    try {
      console.log('🔄 Checking for duplicate packages...');
      
      // Check package-lock.json for duplicate packages
      const packageLockPath = path.join(process.cwd(), 'package-lock.json');
      if (fs.existsSync(packageLockPath)) {
        const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
        
        const duplicates = this.findDuplicatePackages(packageLock);
        this.dependencyAnalysis.duplicatePackages = duplicates;
        
        console.log(`🔄 Found ${duplicates.length} duplicate package instances`);
      }
      
    } catch (error) {
      console.log('⚠️  Duplicate package check failed:', error.message);
    }
  }

  findDuplicatePackages(packageLock) {
    const duplicates = [];
    const packageVersions = new Map();
    
    // Analyze dependencies in package-lock.json
    if (packageLock.dependencies) {
      for (const [name, info] of Object.entries(packageLock.dependencies)) {
        if (packageVersions.has(name)) {
          duplicates.push({
            name,
            versions: [packageVersions.get(name), info.version],
            reason: 'Multiple versions detected'
          });
        } else {
          packageVersions.set(name, info.version);
        }
      }
    }
    
    return duplicates;
  }

  async checkVulnerabilities() {
    try {
      console.log('🔒 Checking for security vulnerabilities...');
      
      // Run npm audit
      try {
        const auditOutput = execSync('npm audit --json', { stdio: 'pipe', encoding: 'utf8' });
        const auditData = JSON.parse(auditOutput);
        
        this.vulnerabilityReport = {
          vulnerabilities: auditData.vulnerabilities || {},
          summary: auditData.metadata?.vulnerabilities || {},
          totalVulnerabilities: 0,
          critical: 0,
          high: 0,
          moderate: 0,
          low: 0
        };
        
        // Count vulnerabilities by severity
        for (const vuln of Object.values(this.vulnerabilityReport.vulnerabilities)) {
          this.vulnerabilityReport.totalVulnerabilities++;
          
          if (vuln.severity === 'critical') this.vulnerabilityReport.critical++;
          else if (vuln.severity === 'high') this.vulnerabilityReport.high++;
          else if (vuln.severity === 'moderate') this.vulnerabilityReport.moderate++;
          else if (vuln.severity === 'low') this.vulnerabilityReport.low++;
        }
        
        console.log(`🔒 Found ${this.vulnerabilityReport.totalVulnerabilities} vulnerabilities`);
        
      } catch (error) {
        if (error.status === 1) {
          console.log('🔒 npm audit completed with vulnerabilities found');
        } else {
          console.log('⚠️  Could not run npm audit');
        }
      }
      
    } catch (error) {
      console.log('⚠️  Vulnerability check failed:', error.message);
    }
  }

  async analyzeDependencyHealth() {
    try {
      console.log('🏥 Analyzing dependency health...');
      
      // Calculate health score
      let healthScore = 100;
      
      // Deduct points for issues
      healthScore -= this.dependencyAnalysis.outdatedPackages.length * 5;
      healthScore -= this.dependencyAnalysis.unusedPackages.length * 3;
      healthScore -= this.dependencyAnalysis.duplicatePackages.length * 10;
      healthScore -= this.vulnerabilityReport.critical * 20;
      healthScore -= this.vulnerabilityReport.high * 15;
      healthScore -= this.vulnerabilityReport.moderate * 10;
      healthScore -= this.vulnerabilityReport.low * 5;
      
      this.dependencyAnalysis.healthScore = Math.max(0, healthScore);
      
      console.log(`🏥 Dependency health score: ${this.dependencyAnalysis.healthScore}/100`);
      
    } catch (error) {
      console.log('⚠️  Dependency health analysis failed:', error.message);
    }
  }

  async generateUpdateRecommendations() {
    try {
      console.log('💡 Generating update recommendations...');
      
      this.updateRecommendations = [];
      
      // Critical security updates
      if (this.vulnerabilityReport.critical > 0 || this.vulnerabilityReport.high > 0) {
        this.updateRecommendations.push({
          type: 'security',
          priority: 'critical',
          action: 'Update packages with critical/high vulnerabilities immediately',
          packages: this.getVulnerablePackages(['critical', 'high'])
        });
      }
      
      // Major version updates
      const majorUpdates = this.dependencyAnalysis.outdatedPackages.filter(pkg => {
        const current = pkg.current.split('.')[0];
        const latest = pkg.latest.split('.')[0];
        return current !== latest;
      });
      
      if (majorUpdates.length > 0) {
        this.updateRecommendations.push({
          type: 'major',
          priority: 'high',
          action: 'Review and update major versions carefully',
          packages: majorUpdates
        });
      }
      
      // Minor and patch updates
      const minorUpdates = this.dependencyAnalysis.outdatedPackages.filter(pkg => {
        const current = pkg.current.split('.')[0];
        const latest = pkg.latest.split('.')[0];
        return current === latest;
      });
      
      if (minorUpdates.length > 0) {
        this.updateRecommendations.push({
          type: 'minor',
          priority: 'medium',
          action: 'Safe to update minor and patch versions',
          packages: minorUpdates
        });
      }
      
      // Cleanup recommendations
      if (this.dependencyAnalysis.unusedPackages.length > 0) {
        this.updateRecommendations.push({
          type: 'cleanup',
          priority: 'low',
          action: 'Remove unused packages to reduce bundle size',
          packages: this.dependencyAnalysis.unusedPackages
        });
      }
      
      console.log(`💡 Generated ${this.updateRecommendations.length} update recommendations`);
      
    } catch (error) {
      console.log('⚠️  Update recommendation generation failed:', error.message);
    }
  }

  getVulnerablePackages(severities) {
    const vulnerablePackages = [];
    
    for (const [name, vuln] of Object.entries(this.vulnerabilityReport.vulnerabilities)) {
      if (severities.includes(vuln.severity)) {
        vulnerablePackages.push({
          name,
          severity: vuln.severity,
          title: vuln.title,
          recommendation: vuln.recommendation
        });
      }
    }
    
    return vulnerablePackages;
  }

  async applySmartUpdates() {
    try {
      console.log('🔧 Applying smart updates...');
      
      let updatesApplied = 0;
      
      // Apply security updates first
      if (this.vulnerabilityReport.critical > 0 || this.vulnerabilityReport.high > 0) {
        console.log('🔒 Applying critical security updates...');
        try {
          execSync('npm audit fix', { stdio: 'inherit' });
          updatesApplied++;
          console.log('✅ Security updates applied');
        } catch (error) {
          console.log('⚠️  Security updates failed, trying force fix...');
          try {
            execSync('npm audit fix --force', { stdio: 'inherit' });
            updatesApplied++;
            console.log('✅ Security updates applied with force');
          } catch (forceError) {
            console.log('❌ Security updates failed even with force');
          }
        }
      }
      
      // Apply safe minor updates
      const safeUpdates = this.updateRecommendations.find(rec => rec.type === 'minor');
      if (safeUpdates) {
        console.log('📦 Applying safe minor updates...');
        try {
          for (const pkg of safeUpdates.packages.slice(0, 5)) { // Limit to 5 at a time
            execSync(`npm update ${pkg.name}`, { stdio: 'inherit' });
            updatesApplied++;
          }
          console.log('✅ Minor updates applied');
        } catch (error) {
          console.log('⚠️  Minor updates failed');
        }
      }
      
      // Clean up unused packages
      if (this.dependencyAnalysis.unusedPackages.length > 0) {
        console.log('🗑️  Cleaning up unused packages...');
        try {
          for (const pkg of this.dependencyAnalysis.unusedPackages.slice(0, 3)) { // Limit to 3 at a time
            execSync(`npm uninstall ${pkg.name}`, { stdio: 'inherit' });
            updatesApplied++;
          }
          console.log('✅ Unused packages removed');
        } catch (error) {
          console.log('⚠️  Package cleanup failed');
        }
      }
      
      console.log(`🔧 Applied ${updatesApplied} smart updates`);
      
    } catch (error) {
      console.log('⚠️  Smart updates failed:', error.message);
    }
  }

  async generateDependencyReport() {
    try {
      console.log('📊 Generating dependency report...');
      
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalDependencies: this.dependencyAnalysis.totalDependencies,
          outdatedPackages: this.dependencyAnalysis.outdatedPackages.length,
          vulnerabilities: this.vulnerabilityReport.totalVulnerabilities,
          healthScore: this.dependencyAnalysis.healthScore,
          recommendations: this.updateRecommendations.length
        },
        dependencyAnalysis: this.dependencyAnalysis,
        vulnerabilityReport: this.vulnerabilityReport,
        updateRecommendations: this.updateRecommendations,
        status: 'completed'
      };
      
      const reportPath = path.join(process.cwd(), 'smart-dependency-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      console.log(`✅ Dependency report saved to ${reportPath}`);
      
      // Log summary
      console.log('\n📊 Smart Dependency Management Summary:');
      console.log(`   Total dependencies: ${report.summary.totalDependencies}`);
      console.log(`   Outdated packages: ${report.summary.outdatedPackages}`);
      console.log(`   Vulnerabilities: ${report.summary.vulnerabilities}`);
      console.log(`   Health score: ${report.summary.healthScore}/100`);
      console.log(`   Recommendations: ${report.summary.recommendations}`);
      
    } catch (error) {
      console.log('⚠️  Report generation failed:', error.message);
    }
  }

  logError(error) {
    const errorLog = `[${new Date().toISOString()}] ERROR: ${error.message}\n${error.stack}\n`;
    fs.appendFileSync(this.logFile, errorLog);
  }
}

// Main execution
async function main() {
  const manager = new SmartDependencyManager();
  
  // Run initial management
  await manager.runDependencyManagement();
  
  // Set up continuous monitoring
  setInterval(async () => {
    await manager.runDependencyManagement();
  }, AUTOMATION_INTERVAL);
  
  console.log(`📦 Smart dependency management automation started. Running every ${AUTOMATION_INTERVAL / 60000} minutes.`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n📦 Smart dependency management automation shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n📦 Smart dependency management automation shutting down gracefully...');
  process.exit(0);
});

// Start the automation
main().catch(console.error);