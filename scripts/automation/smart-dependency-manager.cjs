#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧠 Starting Smart Dependency Management...');

class SmartDependencyManager {
  constructor() {
    this.dependencyResults = {
      currentState: { packages: {}, vulnerabilities: [], outdated: [] },
      updateAnalysis: { safe: [], risky: [], breaking: [] },
      securityStatus: { score: 0, issues: [], fixes: [] },
      healthMetrics: { score: 0, concerns: [], recommendations: [] },
      autoUpdates: { applied: [], failed: [], pending: [] }
    };
    this.reportDir = path.join(process.cwd(), 'dependency-management-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    this.autoUpdateMinor = process.env.AUTO_UPDATE_MINOR === 'true';
    this.autoUpdatePatch = process.env.AUTO_UPDATE_PATCH === 'true';
    this.securityAutoFix = process.env.SECURITY_AUTO_FIX === 'true';
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async analyzeCurrentDependencies() {
    console.log('📦 Analyzing current dependencies...');
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Get current installed versions
      const installedVersions = await this.getInstalledVersions();
      
      // Check for vulnerabilities
      const vulnerabilities = await this.checkVulnerabilities();
      
      // Check for outdated packages
      const outdated = await this.checkOutdatedPackages();
      
      this.dependencyResults.currentState = {
        packages: { ...dependencies, ...installedVersions },
        vulnerabilities: vulnerabilities,
        outdated: outdated
      };
      
      console.log(`✅ Dependency analysis completed. Found ${vulnerabilities.length} vulnerabilities, ${outdated.length} outdated packages`);
    } catch (error) {
      console.log('⚠️ Dependency analysis failed:', error.message);
      this.dependencyResults.currentState = { packages: {}, vulnerabilities: [], outdated: [] };
    }
  }

  async analyzeUpdateImpact() {
    console.log('🔍 Analyzing update impact...');
    try {
      const updateAnalysis = await this.performUpdateImpactAnalysis();
      this.dependencyResults.updateAnalysis = updateAnalysis;
      
      console.log(`✅ Update impact analysis completed. Safe: ${updateAnalysis.safe.length}, Risky: ${updateAnalysis.risky.length}, Breaking: ${updateAnalysis.breaking.length}`);
    } catch (error) {
      console.log('⚠️ Update impact analysis failed:', error.message);
      this.dependencyResults.updateAnalysis = { safe: [], risky: [], breaking: [] };
    }
  }

  async assessSecurityStatus() {
    console.log('🔒 Assessing security status...');
    try {
      const securityData = await this.performSecurityAssessment();
      this.dependencyResults.securityStatus = securityData;
      
      console.log(`✅ Security assessment completed. Score: ${(securityData.score * 100).toFixed(1)}%`);
    } catch (error) {
      console.log('⚠️ Security assessment failed:', error.message);
      this.dependencyResults.securityStatus = { score: 0, issues: [], fixes: [] };
    }
  }

  async assessDependencyHealth() {
    console.log('🏥 Assessing dependency health...');
    try {
      const healthData = await this.performHealthAssessment();
      this.dependencyResults.healthMetrics = healthData;
      
      console.log(`✅ Health assessment completed. Score: ${(healthData.score * 100).toFixed(1)}%`);
    } catch (error) {
      console.log('⚠️ Health assessment failed:', error.message);
      this.dependencyResults.healthMetrics = { score: 0, concerns: [], recommendations: [] };
    }
  }

  async performSmartUpdates() {
    console.log('🚀 Performing smart updates...');
    try {
      const updateResults = await this.executeSmartUpdates();
      this.dependencyResults.autoUpdates = updateResults;
      
      console.log(`✅ Smart updates completed. Applied: ${updateResults.applied.length}, Failed: ${updateResults.failed.length}`);
    } catch (error) {
      console.log('⚠️ Smart updates failed:', error.message);
      this.dependencyResults.autoUpdates = { applied: [], failed: [], pending: [] };
    }
  }

  async getInstalledVersions() {
    try {
      const output = execSync('npm list --depth=0 --json', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const npmList = JSON.parse(output);
      const versions = {};
      
      if (npmList.dependencies) {
        Object.keys(npmList.dependencies).forEach(pkg => {
          versions[pkg] = npmList.dependencies[pkg].version;
        });
      }
      
      return versions;
    } catch (error) {
      return {};
    }
  }

  async checkVulnerabilities() {
    try {
      const output = execSync('npm audit --json', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const audit = JSON.parse(output);
      const vulnerabilities = [];
      
      if (audit.vulnerabilities) {
        Object.keys(audit.vulnerabilities).forEach(pkg => {
          const vuln = audit.vulnerabilities[pkg];
          vulnerabilities.push({
            package: pkg,
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation
          });
        });
      }
      
      return vulnerabilities;
    } catch (error) {
      return [];
    }
  }

  async checkOutdatedPackages() {
    try {
      const output = execSync('npm outdated --json', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const outdated = JSON.parse(output);
      const outdatedPackages = [];
      
      Object.keys(outdated).forEach(pkg => {
        const pkgInfo = outdated[pkg];
        outdatedPackages.push({
          package: pkg,
          current: pkgInfo.current,
          wanted: pkgInfo.wanted,
          latest: pkgInfo.latest,
          location: pkgInfo.location
        });
      });
      
      return outdatedPackages;
    } catch (error) {
      return [];
    }
  }

  async performUpdateImpactAnalysis() {
    try {
      const safe = [];
      const risky = [];
      const breaking = [];
      
      const outdated = this.dependencyResults.currentState.outdated;
      
      outdated.forEach(pkg => {
        const updateType = this.determineUpdateType(pkg.current, pkg.wanted, pkg.latest);
        
        switch (updateType) {
          case 'patch':
            safe.push({
              package: pkg.package,
              from: pkg.current,
              to: pkg.wanted,
              type: 'patch',
              risk: 'low'
            });
            break;
          case 'minor':
            if (this.autoUpdateMinor) {
              safe.push({
                package: pkg.package,
                from: pkg.current,
                to: pkg.wanted,
                type: 'minor',
                risk: 'low'
              });
            } else {
              risky.push({
                package: pkg.package,
                from: pkg.current,
                to: pkg.wanted,
                type: 'minor',
                risk: 'medium'
              });
            }
            break;
          case 'major':
            breaking.push({
              package: pkg.package,
              from: pkg.current,
              to: pkg.latest,
              type: 'major',
              risk: 'high'
            });
            break;
        }
      });
      
      return { safe, risky, breaking };
    } catch (error) {
      return { safe: [], risky: [], breaking: [] };
    }
  }

  determineUpdateType(current, wanted, latest) {
    const currentParts = current.split('.').map(Number);
    const wantedParts = wanted.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);
    
    if (wantedParts[0] > currentParts[0]) return 'major';
    if (wantedParts[1] > currentParts[1]) return 'minor';
    if (wantedParts[2] > currentParts[2]) return 'patch';
    
    return 'none';
  }

  async performSecurityAssessment() {
    try {
      const vulnerabilities = this.dependencyResults.currentState.vulnerabilities;
      let securityScore = 1;
      const issues = [];
      const fixes = [];
      
      // Calculate security score based on vulnerabilities
      vulnerabilities.forEach(vuln => {
        switch (vuln.severity) {
          case 'critical':
            securityScore -= 0.3;
            issues.push(`🔴 Critical: ${vuln.package} - ${vuln.title}`);
            fixes.push(`🔴 Critical: Update ${vuln.package} to fix: ${vuln.recommendation}`);
            break;
          case 'high':
            securityScore -= 0.2;
            issues.push(`🟠 High: ${vuln.package} - ${vuln.title}`);
            fixes.push(`🟠 High: Update ${vuln.package} to fix: ${vuln.recommendation}`);
            break;
          case 'moderate':
            securityScore -= 0.1;
            issues.push(`🟡 Moderate: ${vuln.package} - ${vuln.title}`);
            fixes.push(`🟡 Moderate: Update ${vuln.package} to fix: ${vuln.recommendation}`);
            break;
          case 'low':
            securityScore -= 0.05;
            issues.push(`🟢 Low: ${vuln.package} - ${vuln.title}`);
            fixes.push(`🟢 Low: Update ${vuln.package} to fix: ${vuln.recommendation}`);
            break;
        }
      });
      
      securityScore = Math.max(0, securityScore);
      
      // Add general security recommendations
      if (securityScore < 0.7) {
        fixes.push('🔴 Critical: Run npm audit fix immediately');
        fixes.push('🔴 Critical: Review all security vulnerabilities');
      } else if (securityScore < 0.9) {
        fixes.push('🟡 Warning: Address security vulnerabilities soon');
        fixes.push('🟡 Warning: Consider updating vulnerable packages');
      } else {
        fixes.push('🟢 Good: Security status is healthy');
        fixes.push('🟢 Good: Maintain regular security updates');
      }
      
      return { score: securityScore, issues, fixes };
    } catch (error) {
      return { score: 0, issues: ['Unable to assess security'], fixes: [] };
    }
  }

  async performHealthAssessment() {
    try {
      let healthScore = 1;
      const concerns = [];
      const recommendations = [];
      
      const packages = this.dependencyResults.currentState.packages;
      const outdated = this.dependencyResults.currentState.outdated;
      const vulnerabilities = this.dependencyResults.currentState.vulnerabilities;
      
      // Check for deprecated packages
      const deprecatedPackages = await this.checkDeprecatedPackages();
      if (deprecatedPackages.length > 0) {
        healthScore -= 0.2;
        concerns.push(`${deprecatedPackages.length} deprecated packages detected`);
        recommendations.push('Replace deprecated packages with maintained alternatives');
      }
      
      // Check for duplicate packages
      const duplicatePackages = this.checkDuplicatePackages();
      if (duplicatePackages.length > 0) {
        healthScore -= 0.15;
        concerns.push(`${duplicatePackages.length} duplicate package versions detected`);
        recommendations.push('Consolidate duplicate package versions');
      }
      
      // Check for unused packages
      const unusedPackages = await this.checkUnusedPackages();
      if (unusedPackages.length > 0) {
        healthScore -= 0.1;
        concerns.push(`${unusedPackages.length} potentially unused packages detected`);
        recommendations.push('Review and remove unused dependencies');
      }
      
      // Check for peer dependency issues
      const peerDependencyIssues = await this.checkPeerDependencies();
      if (peerDependencyIssues.length > 0) {
        healthScore -= 0.1;
        concerns.push(`${peerDependencyIssues.length} peer dependency issues detected`);
        recommendations.push('Resolve peer dependency conflicts');
      }
      
      // Check for outdated packages
      if (outdated.length > 10) {
        healthScore -= 0.2;
        concerns.push(`${outdated.length} outdated packages (excessive)`);
        recommendations.push('Update packages in batches to maintain stability');
      } else if (outdated.length > 5) {
        healthScore -= 0.1;
        concerns.push(`${outdated.length} outdated packages`);
        recommendations.push('Consider updating packages soon');
      }
      
      // Check for vulnerabilities
      if (vulnerabilities.length > 5) {
        healthScore -= 0.3;
        concerns.push(`${vulnerabilities.length} security vulnerabilities (critical)`);
        recommendations.push('Address security vulnerabilities immediately');
      } else if (vulnerabilities.length > 0) {
        healthScore -= 0.1;
        concerns.push(`${vulnerabilities.length} security vulnerabilities`);
        recommendations.push('Address security vulnerabilities soon');
      }
      
      healthScore = Math.max(0, healthScore);
      
      // Add general health recommendations
      if (healthScore < 0.6) {
        recommendations.push('🔴 Critical: Dependency health needs immediate attention');
        recommendations.push('🔴 Critical: Review and fix all major issues');
      } else if (healthScore < 0.8) {
        recommendations.push('🟡 Warning: Dependency health needs improvement');
        recommendations.push('🟡 Warning: Address issues systematically');
      } else {
        recommendations.push('🟢 Good: Dependency health is good');
        recommendations.push('🟢 Good: Maintain current practices');
      }
      
      return { score: healthScore, concerns, recommendations };
    } catch (error) {
      return { score: 0, concerns: ['Unable to assess health'], fixes: [] };
    }
  }

  async checkDeprecatedPackages() {
    try {
      const deprecated = [];
      const packages = Object.keys(this.dependencyResults.currentState.packages);
      
      for (const pkg of packages) {
        try {
          const output = execSync(`npm view ${pkg} deprecated --json`, { 
            encoding: 'utf8',
            cwd: process.cwd(),
            stdio: 'pipe'
          });
          
          const deprecatedInfo = JSON.parse(output);
          if (deprecatedInfo && deprecatedInfo !== 'null') {
            deprecated.push({
              package: pkg,
              reason: deprecatedInfo
            });
          }
        } catch (error) {
          // Package not deprecated or error checking
        }
      }
      
      return deprecated;
    } catch (error) {
      return [];
    }
  }

  checkDuplicatePackages() {
    try {
      const duplicates = [];
      const packages = this.dependencyResults.currentState.packages;
      const versions = {};
      
      Object.keys(packages).forEach(pkg => {
        const version = packages[pkg];
        if (!versions[version]) {
          versions[version] = [];
        }
        versions[version].push(pkg);
      });
      
      Object.keys(versions).forEach(version => {
        if (versions[version].length > 1) {
          duplicates.push({
            version: version,
            packages: versions[version]
          });
        }
      });
      
      return duplicates;
    } catch (error) {
      return [];
    }
  }

  async checkUnusedPackages() {
    try {
      // This is a simplified check - in a real implementation, you'd use tools like depcheck
      const potentiallyUnused = [];
      const srcDir = path.join(process.cwd(), 'src');
      
      if (fs.existsSync(srcDir)) {
        const files = this.getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
        const imports = this.extractImports(files);
        const packages = Object.keys(this.dependencyResults.currentState.packages);
        
        packages.forEach(pkg => {
          if (!imports.includes(pkg) && !this.isFrameworkPackage(pkg)) {
            potentiallyUnused.push(pkg);
          }
        });
      }
      
      return potentiallyUnused;
    } catch (error) {
      return [];
    }
  }

  getAllFiles(dir, extensions) {
    let results = [];
    const list = fs.readdirSync(dir);
    
    list.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat && stat.isDirectory()) {
        results = results.concat(this.getAllFiles(filePath, extensions));
      } else if (extensions.some(ext => file.endsWith(ext))) {
        results.push(filePath);
      }
    });
    
    return results;
  }

  extractImports(files) {
    const imports = [];
    
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const importMatches = content.match(/import\s+.*?from\s+['"]([^'"]+)['"]/g);
        
        if (importMatches) {
          importMatches.forEach(match => {
            const packageMatch = match.match(/from\s+['"]([^'"]+)['"]/);
            if (packageMatch) {
              const pkg = packageMatch[1];
              if (!pkg.startsWith('.') && !pkg.startsWith('@/')) {
                imports.push(pkg.split('/')[0]);
              }
            }
          });
        }
      } catch (error) {
        // Skip files that can't be read
      }
    });
    
    return [...new Set(imports)];
  }

  isFrameworkPackage(pkg) {
    const frameworkPackages = [
      'react', 'react-dom', 'vite', 'typescript', 'eslint',
      'tailwindcss', 'postcss', 'autoprefixer'
    ];
    return frameworkPackages.includes(pkg);
  }

  async checkPeerDependencies() {
    try {
      const issues = [];
      const output = execSync('npm ls --depth=0', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const lines = output.split('\n');
      lines.forEach(line => {
        if (line.includes('UNMET PEER DEPENDENCY')) {
          issues.push(line.trim());
        }
      });
      
      return issues;
    } catch (error) {
      return [];
    }
  }

  async executeSmartUpdates() {
    try {
      const applied = [];
      const failed = [];
      const pending = [];
      
      // Apply security fixes first
      if (this.securityAutoFix) {
        try {
          execSync('npm audit fix', { 
            encoding: 'utf8',
            cwd: process.cwd(),
            stdio: 'pipe'
          });
          applied.push('Security fixes applied via npm audit fix');
        } catch (error) {
          failed.push('Security fixes failed: ' + error.message);
        }
      }
      
      // Apply safe updates
      const safe = this.dependencyResults.updateAnalysis.safe;
      for (const update of safe) {
        try {
          if (this.autoUpdatePatch && update.type === 'patch') {
            execSync(`npm update ${update.package}`, { 
              encoding: 'utf8',
              cwd: process.cwd(),
              stdio: 'pipe'
            });
            applied.push(`Updated ${update.package} from ${update.from} to ${update.to}`);
          } else if (this.autoUpdateMinor && update.type === 'minor') {
            execSync(`npm update ${update.package}`, { 
              encoding: 'utf8',
              cwd: process.cwd(),
              stdio: 'pipe'
            });
            applied.push(`Updated ${update.package} from ${update.from} to ${update.to}`);
          } else {
            pending.push(`Manual review needed: ${update.package} (${update.type})`);
          }
        } catch (error) {
          failed.push(`Failed to update ${update.package}: ${error.message}`);
        }
      }
      
      // Flag breaking changes for manual review
      const breaking = this.dependencyResults.updateAnalysis.breaking;
      breaking.forEach(update => {
        pending.push(`Breaking change: ${update.package} from ${update.from} to ${update.to}`);
      });
      
      return { applied, failed, pending };
    } catch (error) {
      return { applied: [], failed: [error.message], pending: [] };
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      autoUpdateSettings: {
        minor: this.autoUpdateMinor,
        patch: this.autoUpdatePatch,
        security: this.securityAutoFix
      },
      results: this.dependencyResults,
      summary: {
        totalPackages: Object.keys(this.dependencyResults.currentState.packages).length,
        vulnerabilities: this.dependencyResults.currentState.vulnerabilities.length,
        outdated: this.dependencyResults.currentState.outdated.length,
        securityScore: `${(this.dependencyResults.securityStatus.score * 100).toFixed(1)}%`,
        healthScore: `${(this.dependencyResults.healthMetrics.score * 100).toFixed(1)}%`
      }
    };
    
    const reportFile = path.join(this.reportDir, `dependency-management-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    console.log(`📊 Dependency Management Report generated: ${reportFile}`);
    
    return report;
  }

  async run() {
    console.log('🚀 Starting Smart Dependency Management...');
    
    try {
      await this.analyzeCurrentDependencies();
      await this.analyzeUpdateImpact();
      await this.assessSecurityStatus();
      await this.assessDependencyHealth();
      await this.performSmartUpdates();
      
      const report = await this.generateReport();
      
      const duration = Date.now() - this.startTime;
      console.log(`✅ Smart Dependency Management completed in ${duration}ms`);
      
      return report;
    } catch (error) {
      console.error('❌ Smart Dependency Management failed:', error.message);
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const manager = new SmartDependencyManager();
  
  // Set up interval for continuous operation
  const interval = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours default
  
  const runManagement = async () => {
    try {
      await manager.run();
    } catch (error) {
      console.error('Management cycle failed:', error.message);
    }
  };
  
  // Run immediately
  runManagement();
  
  // Set up interval
  setInterval(runManagement, interval);
  
  console.log(`🧠 Smart Dependency Manager running every ${interval / 60000} minutes`);
}

module.exports = SmartDependencyManager;