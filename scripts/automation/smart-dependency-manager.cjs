#!/usr/bin/env node

/**
 * Zion Tech Group - Smart Dependency Manager
 * Intelligently manages dependencies, detects conflicts, and suggests optimal versions
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

class SmartDependencyManager {
  constructor() {
    this.dependencies = {
      production: {},
      development: {},
      peer: {},
      optional: {}
    };
    this.analysis = {
      conflicts: [],
      vulnerabilities: [],
      outdated: [],
      unused: [],
      recommendations: []
    };
    this.reportDir = path.join(process.cwd(), 'dependency-reports');
    this.backupDir = path.join(process.cwd(), 'dependency-backups');
  }

  async initialize() {
    await this.ensureDirectories();
    console.log('📦 Smart Dependency Manager initialized');
  }

  async ensureDirectories() {
    await fs.mkdir(this.reportDir, { recursive: true });
    await fs.mkdir(this.backupDir, { recursive: true });
  }

  async runDependencyAnalysis() {
    console.log('🔍 Starting Smart Dependency Analysis...');
    
    try {
      await this.loadDependencies();
      await this.analyzeDependencies();
      await this.detectConflicts();
      await this.checkVulnerabilities();
      await this.findUnusedDependencies();
      await this.generateRecommendations();
      await this.applySmartUpdates();
      await this.generateReport();
      
      console.log('✅ Smart Dependency Analysis completed successfully');
    } catch (error) {
      console.error('❌ Smart Dependency Analysis failed:', error.message);
    }
  }

  async loadDependencies() {
    console.log('📋 Loading current dependencies...');
    
    try {
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'));
      
      this.dependencies.production = packageJson.dependencies || {};
      this.dependencies.development = packageJson.devDependencies || {};
      this.dependencies.peer = packageJson.peerDependencies || {};
      this.dependencies.optional = packageJson.optionalDependencies || {};
      
      console.log(`📊 Loaded dependencies:
        Production: ${Object.keys(this.dependencies.production).length}
        Development: ${Object.keys(this.dependencies.development).length}
        Peer: ${Object.keys(this.dependencies.peer).length}
        Optional: ${Object.keys(this.dependencies.optional).length}`);
        
    } catch (error) {
      console.error('❌ Failed to load dependencies:', error.message);
    }
  }

  async analyzeDependencies() {
    console.log('🔍 Analyzing dependency patterns...');
    
    try {
      // Get outdated packages
      const outdatedOutput = execSync('npm outdated --json', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const outdatedData = JSON.parse(outdatedOutput);
      this.analysis.outdated = Object.keys(outdatedData).map(pkg => ({
        name: pkg,
        current: outdatedData[pkg].current,
        wanted: outdatedData[pkg].wanted,
        latest: outdatedData[pkg].latest,
        location: outdatedData[pkg].location
      }));
      
      console.log(`📊 Found ${this.analysis.outdated.length} outdated packages`);
      
    } catch (error) {
      console.log('⚠️  Could not check outdated packages:', error.message);
    }
  }

  async detectConflicts() {
    console.log('⚠️  Detecting dependency conflicts...');
    
    try {
      // Check for peer dependency conflicts
      const conflicts = [];
      
      // Analyze peer dependencies
      for (const [pkg, version] of Object.entries(this.dependencies.peer)) {
        const installedVersion = this.getInstalledVersion(pkg);
        if (installedVersion && !this.isVersionCompatible(version, installedVersion)) {
          conflicts.push({
            type: 'peer',
            package: pkg,
            required: version,
            installed: installedVersion,
            severity: 'high'
          });
        }
      }
      
      // Check for version conflicts in production dependencies
      const prodVersions = new Map();
      for (const [pkg, version] of Object.entries(this.dependencies.production)) {
        if (prodVersions.has(pkg)) {
          conflicts.push({
            type: 'version',
            package: pkg,
            version1: prodVersions.get(pkg),
            version2: version,
            severity: 'medium'
          });
        } else {
          prodVersions.set(pkg, version);
        }
      }
      
      this.analysis.conflicts = conflicts;
      console.log(`⚠️  Found ${conflicts.length} dependency conflicts`);
      
    } catch (error) {
      console.log('⚠️  Could not detect conflicts:', error.message);
    }
  }

  async checkVulnerabilities() {
    console.log('🛡️  Checking for vulnerabilities...');
    
    try {
      const auditOutput = execSync('npm audit --audit-level moderate --json', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const auditData = JSON.parse(auditOutput);
      this.analysis.vulnerabilities = auditData.vulnerabilities || [];
      
      console.log(`🛡️  Found ${this.analysis.vulnerabilities.length} vulnerabilities`);
      
    } catch (error) {
      console.log('⚠️  Could not check vulnerabilities:', error.message);
    }
  }

  async findUnusedDependencies() {
    console.log('🔍 Finding unused dependencies...');
    
    try {
      // Use depcheck to find unused dependencies
      const depcheckOutput = execSync('npx depcheck --json', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const depcheckData = JSON.parse(depcheckOutput);
      this.analysis.unused = {
        dependencies: depcheckData.dependencies || [],
        devDependencies: depcheckData.devDependencies || []
      };
      
      console.log(`📊 Found ${this.analysis.unused.dependencies.length} unused production dependencies`);
      console.log(`📊 Found ${this.analysis.unused.devDependencies.length} unused development dependencies`);
      
    } catch (error) {
      console.log('⚠️  Could not find unused dependencies:', error.message);
    }
  }

  async generateRecommendations() {
    console.log('💡 Generating smart recommendations...');
    
    const recommendations = [];
    
    // Security recommendations
    if (this.analysis.vulnerabilities.length > 0) {
      recommendations.push({
        type: 'security',
        priority: 'critical',
        message: `Update ${this.analysis.vulnerabilities.length} vulnerable packages immediately`,
        action: 'run npm audit fix'
      });
    }
    
    // Conflict resolution recommendations
    for (const conflict of this.analysis.conflicts) {
      if (conflict.severity === 'high') {
        recommendations.push({
          type: 'conflict',
          priority: 'high',
          message: `Resolve peer dependency conflict for ${conflict.package}`,
          action: `update ${conflict.package} to compatible version`
        });
      }
    }
    
    // Update recommendations
    const criticalUpdates = this.analysis.outdated.filter(pkg => 
      this.isMajorVersionUpdate(pkg.current, pkg.latest)
    );
    
    if (criticalUpdates.length > 0) {
      recommendations.push({
        type: 'update',
        priority: 'high',
        message: `Consider major version updates for ${criticalUpdates.length} packages`,
        action: 'review and update major versions carefully'
      });
    }
    
    // Cleanup recommendations
    if (this.analysis.unused.dependencies.length > 0) {
      recommendations.push({
        type: 'cleanup',
        priority: 'medium',
        message: `Remove ${this.analysis.unused.dependencies.length} unused production dependencies`,
        action: 'remove unused dependencies to reduce bundle size'
      });
    }
    
    this.analysis.recommendations = recommendations;
    console.log(`💡 Generated ${recommendations.length} recommendations`);
  }

  async applySmartUpdates() {
    console.log('🔧 Applying smart updates...');
    
    let updatesApplied = 0;
    
    // Apply security fixes first
    if (this.analysis.vulnerabilities.length > 0) {
      try {
        console.log('🛡️  Applying security fixes...');
        execSync('npm audit fix', { stdio: 'inherit' });
        updatesApplied++;
      } catch (error) {
        console.log('⚠️  Security fixes failed:', error.message);
      }
    }
    
    // Apply safe minor updates
    const safeUpdates = this.analysis.outdated.filter(pkg => 
      !this.isMajorVersionUpdate(pkg.current, pkg.wanted)
    );
    
    for (const pkg of safeUpdates.slice(0, 5)) { // Limit to 5 updates at a time
      try {
        console.log(`📦 Updating ${pkg.name} to ${pkg.wanted}...`);
        execSync(`npm install ${pkg.name}@${pkg.wanted}`, { stdio: 'pipe' });
        updatesApplied++;
      } catch (error) {
        console.log(`⚠️  Failed to update ${pkg.name}:`, error.message);
      }
    }
    
    // Remove unused dependencies
    if (this.analysis.unused.dependencies.length > 0) {
      const unusedPkgs = this.analysis.unused.dependencies.slice(0, 3); // Limit to 3 removals
      for (const pkg of unusedPkgs) {
        try {
          console.log(`🗑️  Removing unused dependency ${pkg}...`);
          execSync(`npm uninstall ${pkg}`, { stdio: 'pipe' });
          updatesApplied++;
        } catch (error) {
          console.log(`⚠️  Failed to remove ${pkg}:`, error.message);
        }
      }
    }
    
    console.log(`✅ Applied ${updatesApplied} smart updates`);
  }

  getInstalledVersion(packageName) {
    try {
      const packageJsonPath = require.resolve(`${packageName}/package.json`);
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      return packageJson.version;
    } catch (error) {
      return null;
    }
  }

  isVersionCompatible(required, installed) {
    // Simple version compatibility check
    const requiredMajor = required.split('.')[0];
    const installedMajor = installed.split('.')[0];
    return requiredMajor === installedMajor;
  }

  isMajorVersionUpdate(current, latest) {
    const currentMajor = current.split('.')[0];
    const latestMajor = latest.split('.')[0];
    return currentMajor !== latestMajor;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalDependencies: Object.keys(this.dependencies.production).length + 
                          Object.keys(this.dependencies.development).length,
        outdated: this.analysis.outdated.length,
        vulnerabilities: this.analysis.vulnerabilities.length,
        conflicts: this.analysis.conflicts.length,
        unused: this.analysis.unused.dependencies.length + 
                this.analysis.unused.devDependencies.length
      },
      analysis: this.analysis,
      recommendations: this.analysis.recommendations,
      dependencies: this.dependencies
    };

    const reportPath = path.join(this.reportDir, `dependency-analysis-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Dependency analysis report saved to ${reportPath}`);
  }
}

// Main execution
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 21600000; // 6 hours

async function runSmartDependencyManager() {
  console.log('📦 Starting Smart Dependency Manager...');
  
  const manager = new SmartDependencyManager();
  
  try {
    await manager.initialize();
    
    // Run analysis
    await manager.runDependencyAnalysis();
    
    // Schedule recurring analysis
    setInterval(async () => {
      await manager.runDependencyAnalysis();
    }, AUTOMATION_INTERVAL);
    
  } catch (error) {
    console.error('❌ Smart Dependency Manager failed:', error.message);
  }
}

runSmartDependencyManager();