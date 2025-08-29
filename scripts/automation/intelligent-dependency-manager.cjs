#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧠 Starting Intelligent Dependency Manager...');

class IntelligentDependencyManager {
  constructor() {
    this.dependencyResults = {
      outdated: [],
      vulnerabilities: [],
      unused: [],
      duplicates: [],
      recommendations: [],
      updatePlan: {},
      timestamp: new Date().toISOString()
    };
    this.reportDir = path.join(process.cwd(), 'dependency-reports');
    this.ensureReportDirectory();
    this.updateStrategy = {
      patch: 'auto',
      minor: 'review',
      major: 'manual'
    };
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async manageDependencies() {
    console.log('🔍 Analyzing and managing dependencies intelligently...');
    
    try {
      await this.analyzeOutdatedDependencies();
      await this.checkSecurityVulnerabilities();
      await this.detectUnusedDependencies();
      await this.findDuplicateDependencies();
      await this.generateUpdatePlan();
      await this.generateRecommendations();
      await this.saveReport();
      
      console.log('✅ Intelligent dependency management completed');
      return this.dependencyResults;
    } catch (error) {
      console.error('❌ Intelligent dependency management failed:', error.message);
      throw error;
    }
  }

  async analyzeOutdatedDependencies() {
    console.log('📦 Analyzing outdated dependencies...');
    
    try {
      // Check for outdated packages
      const outdatedOutput = execSync('npm outdated --json', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const outdatedData = JSON.parse(outdatedOutput);
      const outdatedPackages = [];
      
      Object.entries(outdatedData).forEach(([name, data]) => {
        const current = data.current;
        const latest = data.latest;
        const wanted = data.wanted;
        
        // Determine update type
        let updateType = 'patch';
        if (this.isMajorUpdate(current, latest)) {
          updateType = 'major';
        } else if (this.isMinorUpdate(current, latest)) {
          updateType = 'minor';
        }
        
        outdatedPackages.push({
          name: name,
          current: current,
          wanted: wanted,
          latest: latest,
          updateType: updateType,
          location: data.location,
          homepage: data.homepage,
          description: data.description
        });
      });
      
      this.dependencyResults.outdated = outdatedPackages;
      console.log(`📦 Found ${outdatedPackages.length} outdated dependencies`);
      
    } catch (error) {
      console.log('⚠️  Outdated dependency check failed:', error.message);
    }
  }

  isMajorUpdate(current, latest) {
    const currentMajor = parseInt(current.split('.')[0]);
    const latestMajor = parseInt(latest.split('.')[0]);
    return latestMajor > currentMajor;
  }

  isMinorUpdate(current, latest) {
    const currentParts = current.split('.');
    const latestParts = latest.split('.');
    
    if (currentParts[0] !== latestParts[0]) return false; // Major version different
    
    const currentMinor = parseInt(currentParts[1] || 0);
    const latestMinor = parseInt(latestParts[1] || 0);
    return latestMinor > currentMinor;
  }

  async checkSecurityVulnerabilities() {
    console.log('🛡️  Checking security vulnerabilities...');
    
    try {
      // Run npm audit
      const auditOutput = execSync('npm audit --audit-level moderate --json', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(auditOutput);
      const vulnerabilities = [];
      
      if (auditData.vulnerabilities) {
        Object.entries(auditData.vulnerabilities).forEach(([name, vuln]) => {
          vulnerabilities.push({
            name: name,
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation,
            via: vuln.via,
            dependencyOf: vuln.dependencyOf || []
          });
        });
      }
      
      this.dependencyResults.vulnerabilities = vulnerabilities;
      console.log(`🛡️  Found ${vulnerabilities.length} security vulnerabilities`);
      
      // Save detailed audit results
      fs.writeFileSync(
        path.join(this.reportDir, 'security-audit.json'),
        JSON.stringify(auditData, null, 2)
      );
      
    } catch (error) {
      console.log('⚠️  Security vulnerability check failed:', error.message);
    }
  }

  async detectUnusedDependencies() {
    console.log('🔍 Detecting unused dependencies...');
    
    try {
      // Use depcheck to find unused dependencies
      try {
        execSync('npx depcheck --json', { stdio: 'pipe' });
      } catch (error) {
        // Install depcheck if not available
        console.log('📦 Installing depcheck for dependency analysis...');
        execSync('npm install -g depcheck', { stdio: 'pipe' });
      }
      
      const depcheckOutput = execSync('npx depcheck --json', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const depcheckData = JSON.parse(depcheckOutput);
      const unusedDeps = depcheckData.dependencies || [];
      
      this.dependencyResults.unused = unusedDeps.map(dep => ({
        name: dep,
        type: 'unused',
        suggestion: 'Consider removing if not needed'
      }));
      
      console.log(`🔍 Found ${unusedDeps.length} potentially unused dependencies`);
      
    } catch (error) {
      console.log('⚠️  Unused dependency detection failed:', error.message);
    }
  }

  async findDuplicateDependencies() {
    console.log('🔄 Finding duplicate dependencies...');
    
    try {
      const packageLockPath = path.join(process.cwd(), 'package-lock.json');
      if (fs.existsSync(packageLockPath)) {
        const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
        const duplicates = this.findDuplicatesInLockfile(packageLock);
        
        this.dependencyResults.duplicates = duplicates;
        console.log(`🔄 Found ${duplicates.length} duplicate dependency instances`);
      }
      
    } catch (error) {
      console.log('⚠️  Duplicate dependency detection failed:', error.message);
    }
  }

  findDuplicatesInLockfile(packageLock) {
    const duplicates = [];
    const dependencyVersions = {};
    
    // Collect all dependency versions
    const collectVersions = (deps, path = '') => {
      if (!deps) return;
      
      Object.entries(deps).forEach(([name, dep]) => {
        if (!dependencyVersions[name]) {
          dependencyVersions[name] = [];
        }
        
        dependencyVersions[name].push({
          version: dep.version,
          path: path,
          resolved: dep.resolved
        });
      });
    };
    
    collectVersions(packageLock.dependencies);
    collectVersions(packageLock.devDependencies, 'devDependencies');
    
    // Find duplicates
    Object.entries(dependencyVersions).forEach(([name, versions]) => {
      if (versions.length > 1) {
        const uniqueVersions = [...new Set(versions.map(v => v.version))];
        if (uniqueVersions.length > 1) {
          duplicates.push({
            name: name,
            versions: uniqueVersions,
            instances: versions,
            suggestion: 'Consider using consistent versions across the dependency tree'
          });
        }
      }
    });
    
    return duplicates;
  }

  async generateUpdatePlan() {
    console.log('📋 Generating intelligent update plan...');
    
    const updatePlan = {
      auto: [],
      review: [],
      manual: [],
      security: []
    };
    
    // Categorize updates by strategy
    this.dependencyResults.outdated.forEach(dep => {
      if (dep.updateType === 'patch' && this.updateStrategy.patch === 'auto') {
        updatePlan.auto.push(dep);
      } else if (dep.updateType === 'minor' && this.updateStrategy.minor === 'review') {
        updatePlan.review.push(dep);
      } else if (dep.updateType === 'major' && this.updateStrategy.major === 'manual') {
        updatePlan.manual.push(dep);
      }
    });
    
    // Add security updates
    this.dependencyResults.vulnerabilities.forEach(vuln => {
      if (vuln.severity === 'high' || vuln.severity === 'critical') {
        updatePlan.security.push({
          name: vuln.name,
          severity: vuln.severity,
          recommendation: vuln.recommendation,
          priority: 'high'
        });
      }
    });
    
    this.dependencyResults.updatePlan = updatePlan;
    console.log(`📋 Update plan generated: ${updatePlan.auto.length} auto, ${updatePlan.review.length} review, ${updatePlan.manual.length} manual, ${updatePlan.security.length} security`);
  }

  async generateRecommendations() {
    console.log('💡 Generating intelligent recommendations...');
    
    const recommendations = [];
    
    // Security recommendations
    if (this.dependencyResults.vulnerabilities.length > 0) {
      const criticalVulns = this.dependencyResults.vulnerabilities.filter(v => 
        v.severity === 'critical' || v.severity === 'high'
      );
      
      if (criticalVulns.length > 0) {
        recommendations.push({
          priority: 'critical',
          category: 'security',
          description: `${criticalVulns.length} critical/high security vulnerabilities detected`,
          action: 'Update vulnerable dependencies immediately',
          packages: criticalVulns.map(v => v.name)
        });
      }
    }
    
    // Update recommendations
    const majorUpdates = this.dependencyResults.outdated.filter(d => d.updateType === 'major');
    if (majorUpdates.length > 0) {
      recommendations.push({
        priority: 'high',
        category: 'updates',
        description: `${majorUpdates.length} major version updates available`,
        action: 'Review major updates for breaking changes',
        packages: majorUpdates.map(d => d.name)
      });
    }
    
    // Unused dependency recommendations
    if (this.dependencyResults.unused.length > 0) {
      recommendations.push({
        priority: 'medium',
        category: 'cleanup',
        description: `${this.dependencyResults.unused.length} potentially unused dependencies`,
        action: 'Remove unused dependencies to reduce bundle size',
        packages: this.dependencyResults.unused.map(d => d.name)
      });
    }
    
    // Duplicate dependency recommendations
    if (this.dependencyResults.duplicates.length > 0) {
      recommendations.push({
        priority: 'medium',
        category: 'optimization',
        description: `${this.dependencyResults.duplicates.length} duplicate dependency instances`,
        action: 'Resolve version conflicts to optimize dependency tree',
        packages: this.dependencyResults.duplicates.map(d => d.name)
      });
    }
    
    // Sort by priority
    recommendations.sort((a, b) => {
      const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    
    this.dependencyResults.recommendations = recommendations;
    console.log(`💡 Generated ${recommendations.length} intelligent recommendations`);
  }

  async executeUpdatePlan(planType = 'auto') {
    console.log(`🚀 Executing ${planType} update plan...`);
    
    try {
      const updates = this.dependencyResults.updatePlan[planType] || [];
      
      if (updates.length === 0) {
        console.log(`📋 No ${planType} updates to execute`);
        return;
      }
      
      console.log(`📦 Executing ${updates.length} ${planType} updates...`);
      
      updates.forEach(async (dep) => {
        try {
          console.log(`🔄 Updating ${dep.name} from ${dep.current} to ${dep.latest}...`);
          
          if (planType === 'auto') {
            // Auto-update patch versions
            execSync(`npm update ${dep.name}`, { 
              encoding: 'utf8',
              cwd: process.cwd(),
              stdio: 'pipe'
            });
            console.log(`✅ ${dep.name} updated successfully`);
          } else {
            console.log(`📋 ${dep.name} marked for ${planType} review`);
          }
        } catch (error) {
          console.log(`❌ Failed to update ${dep.name}:`, error.message);
        }
      });
      
      console.log(`✅ ${planType} update plan executed`);
      
    } catch (error) {
      console.error(`❌ Failed to execute ${planType} update plan:`, error.message);
      throw error;
    }
  }

  async saveReport() {
    const reportPath = path.join(this.reportDir, `dependency-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.dependencyResults, null, 2));
    
    // Also save latest report
    const latestReportPath = path.join(this.reportDir, 'latest-dependency-report.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(this.dependencyResults, null, 2));
    
    console.log(`📄 Dependency report saved to ${reportPath}`);
  }

  async displaySummary() {
    console.log('\n🧠 Intelligent Dependency Management Summary');
    console.log('=' .repeat(50));
    console.log(`📦 Outdated Dependencies: ${this.dependencyResults.outdated.length}`);
    console.log(`🛡️  Security Vulnerabilities: ${this.dependencyResults.vulnerabilities.length}`);
    console.log(`🔍 Unused Dependencies: ${this.dependencyResults.unused.length}`);
    console.log(`🔄 Duplicate Dependencies: ${this.dependencyResults.duplicates.length}`);
    
    if (this.dependencyResults.recommendations.length > 0) {
      console.log(`💡 Recommendations: ${this.dependencyResults.recommendations.length}`);
      console.log('\n🔝 Top Priority Recommendations:');
      this.dependencyResults.recommendations.slice(0, 3).forEach((rec, index) => {
        console.log(`${index + 1}. [${rec.priority.toUpperCase()}] ${rec.description}`);
        console.log(`   🎯 ${rec.action}`);
        if (rec.packages && rec.packages.length > 0) {
          console.log(`   📦 Packages: ${rec.packages.slice(0, 3).join(', ')}${rec.packages.length > 3 ? '...' : ''}`);
        }
      });
    }
    
    // Display update plan summary
    if (this.dependencyResults.updatePlan) {
      console.log('\n📋 Update Plan Summary:');
      console.log(`   🚀 Auto Updates: ${this.dependencyResults.updatePlan.auto?.length || 0}`);
      console.log(`   👀 Review Required: ${this.dependencyResults.updatePlan.review?.length || 0}`);
      console.log(`   ⚠️  Manual Review: ${this.dependencyResults.updatePlan.manual?.length || 0}`);
      console.log(`   🛡️  Security Updates: ${this.dependencyResults.updatePlan.security?.length || 0}`);
    }
  }
}

// Main execution
async function main() {
  const manager = new IntelligentDependencyManager();
  
  try {
    await manager.manageDependencies();
    await manager.displaySummary();
    
    // Exit successfully
    process.exit(0);
  } catch (error) {
    console.error('❌ Intelligent Dependency Manager failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = IntelligentDependencyManager;