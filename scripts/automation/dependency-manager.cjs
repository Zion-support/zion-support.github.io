#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📦 Starting Dependency Manager...');

class DependencyManager {
  constructor() {
    this.managerLogDir = path.join(process.cwd(), 'logs');
    this.ensureLogDirectory();
    this.managerMetrics = {
      dependenciesUpdated: 0,
      vulnerabilitiesFixed: 0,
      outdatedPackages: 0,
      totalDependencies: 0,
      lastUpdate: null
    };
    this.managerHistory = [];
    this.maxManagerHistory = 30;
    this.updateStrategy = 'conservative'; // conservative, moderate, aggressive
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.managerLogDir)) {
      fs.mkdirSync(this.managerLogDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(this.managerLogDir, 'dependency-manager.log');
    fs.appendFileSync(logFile, logMessage);
  }

  async manageDependencies() {
    this.log('📦 Managing dependencies...');
    
    try {
      let dependenciesUpdated = 0;
      let vulnerabilitiesFixed = 0;
      let outdatedPackages = 0;
      
      // Check current dependency status
      const dependencyStatus = await this.checkDependencyStatus();
      outdatedPackages = dependencyStatus.outdatedCount;
      
      // Fix security vulnerabilities first
      const securityResult = await this.fixSecurityVulnerabilities();
      vulnerabilitiesFixed = securityResult.fixed;
      
      // Update outdated dependencies based on strategy
      const updateResult = await this.updateOutdatedDependencies();
      dependenciesUpdated = updateResult.updated;
      
      // Clean up unused dependencies
      await this.cleanupUnusedDependencies();
      
      // Update dependency metrics
      this.updateManagerMetrics({
        dependenciesUpdated,
        vulnerabilitiesFixed,
        outdatedPackages,
        totalDependencies: dependencyStatus.totalCount,
        lastUpdate: new Date().toISOString()
      });
      
      // Log management summary
      this.log(`📦 Dependency Management Summary:`);
      this.log(`🔒 Vulnerabilities Fixed: ${vulnerabilitiesFixed}`);
      this.log(`🔄 Dependencies Updated: ${dependenciesUpdated}`);
      this.log(`📊 Outdated Packages: ${outdatedPackages}`);
      this.log(`📦 Total Dependencies: ${dependencyStatus.totalCount}`);
      
      return {
        dependenciesUpdated,
        vulnerabilitiesFixed,
        outdatedPackages,
        totalDependencies: dependencyStatus.totalCount
      };
      
    } catch (error) {
      this.log(`❌ Dependency management failed: ${error.message}`);
      return { dependenciesUpdated: 0, vulnerabilitiesFixed: 0, outdatedPackages: 0, totalDependencies: 0 };
    }
  }

  async checkDependencyStatus() {
    try {
      this.log('🔍 Checking dependency status...');
      
      // Read package.json
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const totalCount = Object.keys(packageJson.dependencies || {}).length + 
                        Object.keys(packageJson.devDependencies || {}).length;
      
      // Check for outdated packages
      let outdatedCount = 0;
      try {
        const outdatedResult = execSync('npm outdated --json --silent', { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const outdated = JSON.parse(outdatedResult);
        outdatedCount = Object.keys(outdated).length;
        
      } catch (error) {
        // npm outdated returns non-zero exit code when there are outdated packages
        if (error.stdout) {
          try {
            const outdated = JSON.parse(error.stdout);
            outdatedCount = Object.keys(outdated).length;
          } catch (parseError) {
            // Ignore parse errors
          }
        }
      }
      
      return { totalCount, outdatedCount };
      
    } catch (error) {
      this.log(`❌ Failed to check dependency status: ${error.message}`);
      return { totalCount: 0, outdatedCount: 0 };
    }
  }

  async fixSecurityVulnerabilities() {
    try {
      this.log('🔒 Fixing security vulnerabilities...');
      
      let vulnerabilitiesFixed = 0;
      
      // Run security audit
      try {
        const auditResult = execSync('npm audit --json --silent', { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const audit = JSON.parse(auditResult);
        const totalVulnerabilities = audit.metadata?.vulnerabilities?.total || 0;
        
        if (totalVulnerabilities > 0) {
          this.log(`🚨 Found ${totalVulnerabilities} security vulnerabilities`);
          
          // Try to fix vulnerabilities automatically
          try {
            execSync('npm audit fix --silent', { 
              stdio: 'pipe',
              timeout: 60000
            });
            
            // Check if vulnerabilities were fixed
            const fixedAuditResult = execSync('npm audit --json --silent', { 
              encoding: 'utf8',
              stdio: 'pipe'
            });
            
            const fixedAudit = JSON.parse(fixedAuditResult);
            const remainingVulnerabilities = fixedAudit.metadata?.vulnerabilities?.total || 0;
            
            vulnerabilitiesFixed = totalVulnerabilities - remainingVulnerabilities;
            
            if (remainingVulnerabilities > 0) {
              this.log(`⚠️ ${remainingVulnerabilities} vulnerabilities remain after automatic fix`);
            }
            
          } catch (fixError) {
            this.log(`⚠️ Automatic fix failed: ${fixError.message}`);
          }
        } else {
          this.log('✅ No security vulnerabilities found');
        }
        
      } catch (error) {
        // Audit failed, but we still have points
        this.log(`⚠️ Security audit failed: ${error.message}`);
      }
      
      return { fixed: vulnerabilitiesFixed };
      
    } catch (error) {
      this.log(`❌ Failed to fix security vulnerabilities: ${error.message}`);
      return { fixed: 0 };
    }
  }

  async updateOutdatedDependencies() {
    try {
      this.log('🔄 Updating outdated dependencies...');
      
      let updated = 0;
      
      // Get list of outdated packages
      let outdatedPackages = [];
      try {
        const outdatedResult = execSync('npm outdated --json --silent', { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const outdated = JSON.parse(outdatedResult);
        outdatedPackages = Object.keys(outdated);
        
      } catch (error) {
        // npm outdated returns non-zero exit code when there are outdated packages
        if (error.stdout) {
          try {
            const outdated = JSON.parse(error.stdout);
            outdatedPackages = Object.keys(outdated);
          } catch (parseError) {
            // Ignore parse errors
          }
        }
      }
      
      if (outdatedPackages.length === 0) {
        this.log('✅ All dependencies are up to date');
        return { updated: 0 };
      }
      
      this.log(`📦 Found ${outdatedPackages.length} outdated packages`);
      
      // Apply update strategy
      switch (this.updateStrategy) {
        case 'conservative':
          updated = await this.conservativeUpdate(outdatedPackages);
          break;
        case 'moderate':
          updated = await this.moderateUpdate(outdatedPackages);
          break;
        case 'aggressive':
          updated = await this.aggressiveUpdate(outdatedPackages);
          break;
        default:
          updated = await this.conservativeUpdate(outdatedPackages);
      }
      
      return { updated };
      
    } catch (error) {
      this.log(`❌ Failed to update outdated dependencies: ${error.message}`);
      return { updated: 0 };
    }
  }

  async conservativeUpdate(outdatedPackages) {
    this.log('🔄 Applying conservative update strategy...');
    
    let updated = 0;
    
    // Only update patch versions for production dependencies
    for (const packageName of outdatedPackages) {
      try {
        // Check if it's a production dependency
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const isProduction = packageJson.dependencies && packageJson.dependencies[packageName];
        
        if (isProduction) {
          // Update to latest patch version
          execSync(`npm update ${packageName} --silent`, { 
            stdio: 'pipe',
            timeout: 30000
          });
          updated++;
          this.log(`✅ Updated ${packageName} (patch version)`);
        }
      } catch (error) {
        this.log(`⚠️ Failed to update ${packageName}: ${error.message}`);
      }
    }
    
    return updated;
  }

  async moderateUpdate(outdatedPackages) {
    this.log('🔄 Applying moderate update strategy...');
    
    let updated = 0;
    
    // Update patch and minor versions
    for (const packageName of outdatedPackages) {
      try {
        // Check current version
        const currentVersion = this.getCurrentVersion(packageName);
        const latestVersion = this.getLatestVersion(packageName);
        
        if (this.isMinorUpdate(currentVersion, latestVersion)) {
          // Update to latest minor version
          execSync(`npm install ${packageName}@latest --silent`, { 
            stdio: 'pipe',
            timeout: 30000
          });
          updated++;
          this.log(`✅ Updated ${packageName} to latest minor version`);
        } else if (this.isPatchUpdate(currentVersion, latestVersion)) {
          // Update to latest patch version
          execSync(`npm update ${packageName} --silent`, { 
            stdio: 'pipe',
            timeout: 30000
          });
          updated++;
          this.log(`✅ Updated ${packageName} (patch version)`);
        }
      } catch (error) {
        this.log(`⚠️ Failed to update ${packageName}: ${error.message}`);
      }
    }
    
    return updated;
  }

  async aggressiveUpdate(outdatedPackages) {
    this.log('🔄 Applying aggressive update strategy...');
    
    let updated = 0;
    
    // Update all packages to latest versions
    try {
      execSync('npm update --silent', { 
        stdio: 'pipe',
        timeout: 120000
      });
      
      // Count how many were actually updated
      const newOutdatedResult = execSync('npm outdated --json --silent', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      try {
        const newOutdated = JSON.parse(newOutdatedResult);
        const newOutdatedCount = Object.keys(newOutdated).length;
        updated = outdatedPackages.length - newOutdatedCount;
      } catch (parseError) {
        updated = outdatedPackages.length;
      }
      
      this.log(`✅ Aggressively updated ${updated} packages`);
      
    } catch (error) {
      this.log(`❌ Aggressive update failed: ${error.message}`);
    }
    
    return updated;
  }

  getCurrentVersion(packageName) {
    try {
      const packageLockPath = 'package-lock.json';
      if (fs.existsSync(packageLockPath)) {
        const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
        return packageLock.dependencies?.[packageName]?.version || '0.0.0';
      }
      
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      return packageJson.dependencies?.[packageName] || packageJson.devDependencies?.[packageName] || '0.0.0';
    } catch (error) {
      return '0.0.0';
    }
  }

  getLatestVersion(packageName) {
    try {
      const result = execSync(`npm view ${packageName} version --silent`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return result.trim();
    } catch (error) {
      return '0.0.0';
    }
  }

  isMinorUpdate(current, latest) {
    const currentParts = current.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);
    
    return latestParts[1] > currentParts[1] && latestParts[0] === currentParts[0];
  }

  isPatchUpdate(current, latest) {
    const currentParts = current.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);
    
    return latestParts[2] > currentParts[2] && 
           latestParts[1] === currentParts[1] && 
           latestParts[0] === currentParts[0];
  }

  async cleanupUnusedDependencies() {
    try {
      this.log('🧹 Cleaning up unused dependencies...');
      
      // Check for unused dependencies
      try {
        execSync('npm prune --silent', { 
          stdio: 'pipe',
          timeout: 30000
        });
        this.log('✅ Cleaned up unused dependencies');
      } catch (error) {
        this.log(`⚠️ Cleanup failed: ${error.message}`);
      }
      
      // Check for duplicate dependencies
      try {
        const dedupeResult = execSync('npm dedupe --silent', { 
          stdio: 'pipe',
          timeout: 30000
        });
        this.log('✅ Deduplicated dependencies');
      } catch (error) {
        this.log(`⚠️ Deduplication failed: ${error.message}`);
      }
      
    } catch (error) {
      this.log(`❌ Failed to cleanup dependencies: ${error.message}`);
    }
  }

  updateManagerMetrics(metrics) {
    this.managerMetrics = { ...metrics };
    
    // Record manager history
    this.managerHistory.push({
      timestamp: new Date().toISOString(),
      ...metrics
    });
    
    // Keep only recent history
    if (this.managerHistory.length > this.maxManagerHistory) {
      this.managerHistory = this.managerHistory.slice(-this.maxManagerHistory);
    }
    
    // Save manager metrics
    const metricsFile = path.join(this.managerLogDir, 'dependency-manager-metrics.json');
    fs.writeFileSync(metricsFile, JSON.stringify({
      ...this.managerMetrics,
      history: this.managerHistory
    }, null, 2));
  }

  generateManagerReport() {
    const totalRuns = this.managerHistory.length;
    const successfulRuns = this.managerHistory.filter(h => h.dependenciesUpdated > 0 || h.vulnerabilitiesFixed > 0).length;
    const highUpdateRuns = this.managerHistory.filter(h => h.dependenciesUpdated > 5).length;
    
    const report = {
      currentStatus: this.getManagerStatus(),
      summary: {
        totalRuns,
        successfulRuns,
        highUpdateRuns,
        averageUpdates: totalRuns > 0 ? Math.round(this.managerHistory.reduce((sum, h) => sum + h.dependenciesUpdated, 0) / totalRuns) : 0,
        averageVulnerabilities: totalRuns > 0 ? Math.round(this.managerHistory.reduce((sum, h) => sum + h.vulnerabilitiesFixed, 0) / totalRuns) : 0
      },
      recentHistory: this.managerHistory.slice(-5),
      recommendations: this.generateManagerRecommendations()
    };
    
    return report;
  }

  getManagerStatus() {
    if (this.managerHistory.length === 0) return 'unknown';
    
    const recentRuns = this.managerHistory.slice(-3);
    const avgUpdates = recentRuns.reduce((sum, h) => sum + h.dependenciesUpdated, 0) / recentRuns.length;
    const avgVulnerabilities = recentRuns.reduce((sum, h) => sum + h.vulnerabilitiesFixed, 0) / recentRuns.length;
    
    if (avgVulnerabilities > 0) return 'security_issues';
    if (avgUpdates > 10) return 'frequent_updates';
    if (avgUpdates > 0) return 'stable_updates';
    return 'clean';
  }

  generateManagerRecommendations() {
    const recommendations = [];
    
    if (this.managerHistory.length > 0) {
      const recentRuns = this.managerHistory.slice(-3);
      const avgUpdates = recentRuns.reduce((sum, h) => sum + h.dependenciesUpdated, 0) / recentRuns.length;
      const avgVulnerabilities = recentRuns.reduce((sum, h) => sum + h.vulnerabilitiesFixed, 0) / recentRuns.length;
      
      if (avgVulnerabilities > 0) {
        recommendations.push('🚨 Security vulnerabilities detected regularly. Review dependency choices.');
      }
      
      if (avgUpdates > 15) {
        recommendations.push('🔄 Many dependency updates. Consider pinning critical versions.');
      } else if (avgUpdates > 5) {
        recommendations.push('📦 Moderate dependency updates. Current strategy is working well.');
      } else if (avgUpdates === 0) {
        recommendations.push('✅ Dependencies are stable. Consider more frequent updates for security.');
      }
      
      if (this.managerMetrics.outdatedPackages > 20) {
        recommendations.push('📊 Many outdated packages. Consider batch update strategy.');
      }
    }
    
    return recommendations;
  }

  async startContinuousManagement() {
    this.log('🔄 Starting continuous dependency management...');
    
    const interval = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes default
    
    // Run initial dependency management
    await this.manageDependencies();
    
    // Set up continuous management
    setInterval(async () => {
      this.log('🔄 Running scheduled dependency management...');
      await this.manageDependencies();
      
      // Generate and log report
      const report = this.generateManagerReport();
      this.log(`📊 Manager Report: ${report.currentStatus} (${report.summary.averageUpdates} avg updates)`);
      
      if (report.recommendations.length > 0) {
        this.log('💡 Recommendations:');
        report.recommendations.forEach(rec => this.log(`   ${rec}`));
      }
    }, interval);
    
    this.log(`⏰ Dependency management active. Running every ${interval / 60000} minutes.`);
  }
}

// Main execution
async function main() {
  const dependencyManager = new DependencyManager();
  
  try {
    await dependencyManager.startContinuousManagement();
  } catch (error) {
    console.error('❌ Dependency manager failed:', error);
    process.exit(1);
  }
}

// Start the dependency manager
main().catch(console.error);
