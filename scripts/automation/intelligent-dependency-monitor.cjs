#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Starting Intelligent Dependency Health Monitor...');

class IntelligentDependencyMonitor {
  constructor() {
    this.dependencyHealth = {
      outdated: [],
      vulnerable: [],
      conflicts: [],
      unused: [],
      peerDependencies: [],
      securityIssues: [],
      updateRecommendations: []
    };
    this.reportDir = path.join(process.cwd(), 'dependency-health-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async monitorDependencies() {
    try {
      console.log('📦 Analyzing dependency health...');
      
      // Check for outdated packages
      await this.checkOutdatedPackages();
      
      // Check for security vulnerabilities
      await this.checkSecurityVulnerabilities();
      
      // Analyze dependency conflicts
      await this.analyzeDependencyConflicts();
      
      // Detect unused dependencies
      await this.detectUnusedDependencies();
      
      // Check peer dependency issues
      await this.checkPeerDependencies();
      
      // Generate update recommendations
      await this.generateUpdateRecommendations();
      
      // Generate comprehensive report
      await this.generateReport();
      
      console.log('✅ Intelligent Dependency Health Monitor completed successfully');
      
    } catch (error) {
      console.error('❌ Intelligent Dependency Health Monitor failed:', error.message);
      throw error;
    }
  }

  async checkOutdatedPackages() {
    console.log('🔄 Checking for outdated packages...');
    
    try {
      const output = execSync('npm outdated --json', { 
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      if (output.trim()) {
        const outdatedData = JSON.parse(output);
        this.dependencyHealth.outdated = Object.entries(outdatedData).map(([name, data]) => ({
          name,
          current: data.current,
          wanted: data.wanted,
          latest: data.latest,
          location: data.location,
          severity: this.calculateUpdateSeverity(data.current, data.latest)
        }));
        
        console.log(`⚠️  Found ${this.dependencyHealth.outdated.length} outdated packages`);
      } else {
        console.log('✅ All packages are up to date');
      }
      
    } catch (error) {
      if (error.status === 1) {
        // npm outdated returns 1 when there are outdated packages
        console.log('⚠️  Outdated packages detected');
      } else {
        console.log('⚠️  Could not check outdated packages:', error.message);
      }
    }
  }

  calculateUpdateSeverity(current, latest) {
    const currentParts = current.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);
    
    // Major version difference
    if (latestParts[0] > currentParts[0]) return 'critical';
    
    // Minor version difference
    if (latestParts[1] > currentParts[1]) return 'medium';
    
    // Patch version difference
    if (latestParts[2] > currentParts[2]) return 'low';
    
    return 'none';
  }

  async checkSecurityVulnerabilities() {
    console.log('🔒 Checking for security vulnerabilities...');
    
    try {
      const output = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      if (output.trim()) {
        const auditData = JSON.parse(output);
        
        if (auditData.vulnerabilities) {
          this.dependencyHealth.vulnerabilities = Object.entries(auditData.vulnerabilities).map(([name, vuln]) => ({
            name,
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation,
            via: vuln.via
          }));
        }
        
        if (auditData.metadata) {
          this.dependencyHealth.securityIssues = {
            totalVulnerabilities: auditData.metadata.vulnerabilities.total,
            critical: auditData.metadata.vulnerabilities.critical || 0,
            high: auditData.metadata.vulnerabilities.high || 0,
            moderate: auditData.metadata.vulnerabilities.moderate || 0,
            low: auditData.metadata.vulnerabilities.low || 0
          };
        }
        
        console.log(`⚠️  Found ${this.dependencyHealth.vulnerabilities.length} security vulnerabilities`);
      } else {
        console.log('✅ No security vulnerabilities found');
      }
      
    } catch (error) {
      console.log('⚠️  Could not check security vulnerabilities:', error.message);
    }
  }

  async analyzeDependencyConflicts() {
    console.log('⚔️  Analyzing dependency conflicts...');
    
    try {
      // Check for duplicate packages
      const packageLockPath = path.join(process.cwd(), 'package-lock.json');
      if (fs.existsSync(packageLockPath)) {
        const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
        this.dependencyHealth.conflicts = this.findDependencyConflicts(packageLock);
      }
      
      // Check for peer dependency warnings
      try {
        const installOutput = execSync('npm install --dry-run', { 
          encoding: 'utf8',
          stdio: 'pipe',
          cwd: process.cwd()
        });
        
        const peerWarnings = installOutput.match(/npm WARN.*peer dependency.*/g);
        if (peerWarnings) {
          this.dependencyHealth.peerDependencies = peerWarnings.map(warning => ({
            warning: warning.trim(),
            severity: 'medium'
          }));
        }
      } catch (error) {
        // Expected for dry-run
      }
      
      console.log(`⚠️  Found ${this.dependencyHealth.conflicts.length} dependency conflicts`);
      console.log(`⚠️  Found ${this.dependencyHealth.peerDependencies.length} peer dependency issues`);
      
    } catch (error) {
      console.log('⚠️  Could not analyze dependency conflicts:', error.message);
    }
  }

  findDependencyConflicts(packageLock) {
    const conflicts = [];
    const packageVersions = new Map();
    
    function traverseDependencies(deps, path = '') {
      if (!deps) return;
      
      Object.entries(deps).forEach(([name, dep]) => {
        const fullPath = path ? `${path} > ${name}` : name;
        const version = dep.version;
        
        if (packageVersions.has(name)) {
          const existing = packageVersions.get(name);
          if (existing.version !== version) {
            conflicts.push({
              package: name,
              version1: existing.version,
              version2: version,
              path1: existing.path,
              path2: fullPath,
              severity: 'medium'
            });
          }
        } else {
          packageVersions.set(name, { version, path: fullPath });
        }
        
        if (dep.dependencies) {
          traverseDependencies(dep.dependencies, fullPath);
        }
      });
    }
    
    traverseDependencies(packageLock.dependencies);
    return conflicts;
  }

  async detectUnusedDependencies() {
    console.log('🗑️  Detecting unused dependencies...');
    
    try {
      // Use depcheck to find unused dependencies
      try {
        const output = execSync('npx depcheck --json', { 
          encoding: 'utf8',
          stdio: 'pipe',
          cwd: process.cwd()
        });
        
        if (output.trim()) {
          const depcheckData = JSON.parse(output);
          
          if (depcheckData.dependencies) {
            this.dependencyHealth.unused = depcheckData.dependencies.map(dep => ({
              name: dep,
              type: 'unused',
              severity: 'low',
              suggestion: 'Consider removing if not needed'
            }));
          }
          
          if (depcheckData.devDependencies) {
            this.dependencyHealth.unused.push(...depcheckData.devDependencies.map(dep => ({
              name: dep,
              type: 'unused-dev',
              severity: 'low',
              suggestion: 'Consider removing if not needed for development'
            })));
          }
        }
        
      } catch (error) {
        // depcheck might not be available or might fail
        console.log('⚠️  Could not run depcheck, using alternative method');
        await this.detectUnusedDependenciesAlternative();
      }
      
      console.log(`⚠️  Found ${this.dependencyHealth.unused.length} potentially unused dependencies`);
      
    } catch (error) {
      console.log('⚠️  Could not detect unused dependencies:', error.message);
    }
  }

  async detectUnusedDependenciesAlternative() {
    // Alternative method: check package.json against actual imports
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    if (!fs.existsSync(packageJsonPath)) return;
    
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const allDeps = [
      ...Object.keys(packageJson.dependencies || {}),
      ...Object.keys(packageJson.devDependencies || {})
    ];
    
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) return;
    
    const files = this.getAllFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
    const usedImports = new Set();
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const imports = this.extractImports(content);
      imports.forEach(imp => usedImports.add(imp));
    }
    
    const unused = allDeps.filter(dep => !usedImports.has(dep));
    this.dependencyHealth.unused = unused.map(dep => ({
      name: dep,
      type: 'potentially-unused',
      severity: 'low',
      suggestion: 'Verify if this dependency is actually needed'
    }));
  }

  extractImports(content) {
    const imports = [];
    
    // Extract ES6 imports
    const es6Imports = content.match(/import\s+(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)\s+from\s+['"]([^'"]+)['"]/g);
    if (es6Imports) {
      es6Imports.forEach(imp => {
        const match = imp.match(/from\s+['"]([^'"]+)['"]/);
        if (match) {
          const packageName = match[1].split('/')[0];
          imports.push(packageName);
        }
      });
    }
    
    // Extract require statements
    const requireImports = content.match(/require\s*\(\s*['"]([^'"]+)['"]\s*\)/g);
    if (requireImports) {
      requireImports.forEach(req => {
        const match = req.match(/require\s*\(\s*['"]([^'"]+)['"]\s*\)/);
        if (match) {
          const packageName = match[1].split('/')[0];
          imports.push(packageName);
        }
      });
    }
    
    return imports;
  }

  getAllFiles(dirPath, extensions) {
    const files = [];
    
    function traverse(currentPath) {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          traverse(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    }
    
    traverse(dirPath);
    return files;
  }

  async checkPeerDependencies() {
    console.log('🔗 Checking peer dependencies...');
    
    try {
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      if (!fs.existsSync(packageJsonPath)) return;
      
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      if (packageJson.peerDependencies) {
        Object.entries(packageJson.peerDependencies).forEach(([name, version]) => {
          this.dependencyHealth.peerDependencies.push({
            name,
            requiredVersion: version,
            type: 'peer-dependency',
            severity: 'medium',
            suggestion: 'Ensure this peer dependency is installed'
          });
        });
      }
      
    } catch (error) {
      console.log('⚠️  Could not check peer dependencies:', error.message);
    }
  }

  async generateUpdateRecommendations() {
    console.log('💡 Generating update recommendations...');
    
    const recommendations = [];
    
    // Critical security updates
    if (this.dependencyHealth.securityIssues.critical > 0) {
      recommendations.push({
        priority: 'critical',
        action: 'Immediate Security Update',
        description: `Update ${this.dependencyHealth.securityIssues.critical} critical security vulnerabilities immediately`,
        packages: this.dependencyHealth.vulnerabilities
          .filter(v => v.severity === 'critical')
          .map(v => v.name)
      });
    }
    
    // Major version updates
    const criticalUpdates = this.dependencyHealth.outdated.filter(d => d.severity === 'critical');
    if (criticalUpdates.length > 0) {
      recommendations.push({
        priority: 'high',
        action: 'Major Version Updates',
        description: `Consider updating ${criticalUpdates.length} packages with major version changes`,
        packages: criticalUpdates.map(d => d.name),
        note: 'Test thoroughly after major version updates'
      });
    }
    
    // Dependency conflicts
    if (this.dependencyHealth.conflicts.length > 0) {
      recommendations.push({
        priority: 'medium',
        action: 'Resolve Dependency Conflicts',
        description: `Resolve ${this.dependencyHealth.conflicts.length} dependency version conflicts`,
        conflicts: this.dependencyHealth.conflicts
      });
    }
    
    // Unused dependencies
    if (this.dependencyHealth.unused.length > 0) {
      recommendations.push({
        priority: 'low',
        action: 'Clean Up Unused Dependencies',
        description: `Remove ${this.dependencyHealth.unused.length} potentially unused dependencies`,
        packages: this.dependencyHealth.unused.map(d => d.name),
        note: 'Verify dependencies are not used before removal'
      });
    }
    
    this.dependencyHealth.updateRecommendations = recommendations;
  }

  async generateReport() {
    console.log('📋 Generating dependency health report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      dependencyHealth: this.dependencyHealth,
      summary: {
        totalIssues: 
          this.dependencyHealth.outdated.length +
          this.dependencyHealth.vulnerabilities.length +
          this.dependencyHealth.conflicts.length +
          this.dependencyHealth.unused.length +
          this.dependencyHealth.peerDependencies.length,
        securityScore: this.calculateSecurityScore(),
        updateScore: this.calculateUpdateScore(),
        executionTime: Date.now() - this.startTime
      },
      recommendations: this.dependencyHealth.updateRecommendations
    };
    
    const reportPath = path.join(this.reportDir, `dependency-health-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Also save to root for PM2 monitoring
    const rootReportPath = path.join(process.cwd(), 'dependency-health-report.json');
    fs.writeFileSync(rootReportPath, JSON.stringify(report, null, 2));
    
    console.log(`✅ Dependency health report saved to ${reportPath}`);
    console.log(`✅ Root report saved to ${rootReportPath}`);
  }

  calculateSecurityScore() {
    const { critical, high, moderate, low } = this.dependencyHealth.securityIssues;
    let score = 100;
    
    score -= critical * 20; // Critical issues heavily impact score
    score -= high * 10;     // High issues significantly impact score
    score -= moderate * 5;  // Moderate issues moderately impact score
    score -= low * 2;       // Low issues slightly impact score
    
    return Math.max(0, score);
  }

  calculateUpdateScore() {
    const totalOutdated = this.dependencyHealth.outdated.length;
    const criticalUpdates = this.dependencyHealth.outdated.filter(d => d.severity === 'critical').length;
    
    let score = 100;
    score -= totalOutdated * 2;      // Each outdated package reduces score
    score -= criticalUpdates * 10;   // Critical updates heavily impact score
    
    return Math.max(0, score);
  }
}

// Main execution
async function main() {
  const monitor = new IntelligentDependencyMonitor();
  await monitor.monitorDependencies();
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = IntelligentDependencyMonitor;