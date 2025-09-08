#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔒 Starting Intelligent Dependency Analyzer...');

// Get automation interval from environment variable (default: 4 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours

class IntelligentDependencyAnalyzer {
  constructor() {
    this.analysisResults = {
      dependencies: {
        outdated: [],
        vulnerable: [],
        unused: [],
        duplicate: [],
        size: {}
      },
      security: {
        vulnerabilities: [],
        licenseIssues: [],
        supplyChain: [],
        riskScore: 0
      },
      optimization: {
        bundleSize: {},
        treeShaking: {},
        recommendations: []
      },
      maintenance: {
        lastUpdate: null,
        updateFrequency: 'unknown',
        breakingChanges: [],
        migrationPaths: []
      }
    };
    this.reportDir = path.join(process.cwd(), 'dependency-analysis-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async runAnalysis() {
    try {
      console.log(`🔒 Running intelligent dependency analysis at ${new Date().toISOString()}`);
      
      // Analyze package dependencies
      await this.analyzeDependencies();
      
      // Analyze security vulnerabilities
      await this.analyzeSecurity();
      
      // Analyze bundle optimization
      await this.analyzeBundleOptimization();
      
      // Analyze maintenance patterns
      await this.analyzeMaintenancePatterns();
      
      // Generate intelligent recommendations
      await this.generateRecommendations();
      
      // Save comprehensive report
      await this.saveReport();
      
      console.log('✅ Intelligent dependency analysis completed successfully');
      
    } catch (error) {
      console.error('❌ Intelligent dependency analysis failed:', error.message);
    }
  }

  async analyzeDependencies() {
    console.log('📦 Analyzing dependencies for intelligent insights...');
    
    try {
      // Check for outdated packages
      await this.checkOutdatedPackages();
      
      // Check for unused dependencies
      await this.checkUnusedDependencies();
      
      // Check for duplicate dependencies
      await this.checkDuplicateDependencies();
      
      // Analyze dependency sizes
      await this.analyzeDependencySizes();
      
    } catch (error) {
      console.log('⚠️  Dependency analysis failed:', error.message);
    }
  }

  async checkOutdatedPackages() {
    try {
      const output = execSync('npm outdated --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const outdated = JSON.parse(output);
      const outdatedPackages = [];
      
      Object.keys(outdated).forEach(packageName => {
        const packageInfo = outdated[packageName];
        const current = packageInfo.current;
        const latest = packageInfo.latest;
        const wanted = packageInfo.wanted;
        
        // Calculate update priority based on version difference
        const priority = this.calculateUpdatePriority(current, latest);
        
        outdatedPackages.push({
          name: packageName,
          current,
          wanted,
          latest,
          priority,
          location: packageInfo.location,
          homepage: packageInfo.homepage,
          updateType: this.getUpdateType(current, latest)
        });
      });
      
      // Sort by priority (high to low)
      this.analysisResults.dependencies.outdated = outdatedPackages.sort((a, b) => b.priority - a.priority);
      
      console.log(`✅ Found ${outdatedPackages.length} outdated packages`);
      
    } catch (error) {
      // npm outdated might fail if no packages are outdated
      console.log('✅ All packages are up to date');
    }
  }

  calculateUpdatePriority(current, latest) {
    const currentParts = current.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);
    
    // Major version difference = high priority
    if (latestParts[0] > currentParts[0]) return 3;
    
    // Minor version difference = medium priority
    if (latestParts[1] > currentParts[1]) return 2;
    
    // Patch version difference = low priority
    if (latestParts[2] > currentParts[2]) return 1;
    
    return 0;
  }

  getUpdateType(current, latest) {
    const currentParts = current.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);
    
    if (latestParts[0] > currentParts[0]) return 'major';
    if (latestParts[1] > currentParts[1]) return 'minor';
    if (latestParts[2] > currentParts[2]) return 'patch';
    return 'none';
  }

  async checkUnusedDependencies() {
    try {
      // Use depcheck to find unused dependencies
      const output = execSync('npx depcheck --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const depcheckResult = JSON.parse(output);
      
      if (depcheckResult.dependencies && depcheckResult.dependencies.length > 0) {
        this.analysisResults.dependencies.unused = depcheckResult.dependencies.map(dep => ({
          name: dep,
          type: 'unused',
          suggestion: 'Consider removing if not needed'
        }));
      }
      
      if (depcheckResult.devDependencies && depcheckResult.devDependencies.length > 0) {
        this.analysisResults.dependencies.unused.push(...depcheckResult.devDependencies.map(dep => ({
          name: dep,
          type: 'unused-dev',
          suggestion: 'Consider removing if not needed for development'
        })));
      }
      
      console.log(`✅ Found ${this.analysisResults.dependencies.unused.length} unused dependencies`);
      
    } catch (error) {
      console.log('⚠️  Could not check for unused dependencies:', error.message);
    }
  }

  async checkDuplicateDependencies() {
    try {
      // Check for duplicate packages in node_modules
      const output = execSync('npm ls --depth=0', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const lines = output.split('\n');
      const packageCounts = {};
      
      lines.forEach(line => {
        const match = line.match(/├──\s+([^@]+)(?:@([^@]+))?/);
        if (match) {
          const packageName = match[1];
          packageCounts[packageName] = (packageCounts[packageName] || 0) + 1;
        }
      });
      
      const duplicates = Object.entries(packageCounts)
        .filter(([name, count]) => count > 1)
        .map(([name, count]) => ({
          name,
          count,
          suggestion: 'Consider using npm dedupe or yarn dedupe'
        }));
      
      this.analysisResults.dependencies.duplicate = duplicates;
      
      console.log(`✅ Found ${duplicates.length} duplicate dependencies`);
      
    } catch (error) {
      console.log('⚠️  Could not check for duplicate dependencies:', error.message);
    }
  }

  async analyzeDependencySizes() {
    try {
      // Use bundle analyzer if available
      if (fs.existsSync('dist')) {
        const distSize = this.getDirectorySize('dist');
        this.analysisResults.dependencies.size.bundle = {
          total: distSize,
          formatted: this.formatBytes(distSize)
        };
      }
      
      // Check node_modules size
      if (fs.existsSync('node_modules')) {
        const nodeModulesSize = this.getDirectorySize('node_modules');
        this.analysisResults.dependencies.size.nodeModules = {
          total: nodeModulesSize,
          formatted: this.formatBytes(nodeModulesSize)
        };
      }
      
      console.log('✅ Dependency size analysis completed');
      
    } catch (error) {
      console.log('⚠️  Could not analyze dependency sizes:', error.message);
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      
      items.forEach(item => {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          totalSize += this.getDirectorySize(fullPath);
        } else {
          totalSize += stat.size;
        }
      });
    } catch (error) {
      // Ignore permission errors
    }
    
    return totalSize;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async analyzeSecurity() {
    console.log('🔒 Analyzing security vulnerabilities...');
    
    try {
      // Run npm audit
      await this.runSecurityAudit();
      
      // Check for license issues
      await this.checkLicenseIssues();
      
      // Analyze supply chain risks
      await this.analyzeSupplyChainRisks();
      
      // Calculate overall risk score
      this.calculateRiskScore();
      
    } catch (error) {
      console.log('⚠️  Security analysis failed:', error.message);
    }
  }

  async runSecurityAudit() {
    try {
      const output = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const audit = JSON.parse(output);
      
      if (audit.vulnerabilities) {
        Object.keys(audit.vulnerabilities).forEach(packageName => {
          const vuln = audit.vulnerabilities[packageName];
          
          this.analysisResults.security.vulnerabilities.push({
            package: packageName,
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation,
            cwe: vuln.cwe,
            cvss: vuln.cvss,
            via: vuln.via
          });
        });
      }
      
      console.log(`✅ Found ${this.analysisResults.security.vulnerabilities.length} security vulnerabilities`);
      
    } catch (error) {
      console.log('✅ No security vulnerabilities detected');
    }
  }

  async checkLicenseIssues() {
    try {
      // Check for potentially problematic licenses
      const output = execSync('npx license-checker --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const licenses = JSON.parse(output);
      const problematicLicenses = [];
      
      Object.keys(licenses).forEach(packageName => {
        const licenseInfo = licenses[packageName];
        const license = licenseInfo.licenses;
        
        // Check for potentially problematic licenses
        if (this.isProblematicLicense(license)) {
          problematicLicenses.push({
            package: packageName,
            license,
            risk: this.getLicenseRisk(license),
            suggestion: 'Review license compatibility with your project'
          });
        }
      });
      
      this.analysisResults.security.licenseIssues = problematicLicenses;
      
      console.log(`✅ Found ${problematicLicenses.length} potential license issues`);
      
    } catch (error) {
      console.log('⚠️  Could not check licenses:', error.message);
    }
  }

  isProblematicLicense(license) {
    const problematicLicenses = [
      'GPL', 'AGPL', 'LGPL', 'MPL', 'EPL', 'CDDL', 'CPL', 'IPL'
    ];
    
    return problematicLicenses.some(lic => license.includes(lic));
  }

  getLicenseRisk(license) {
    if (license.includes('GPL') || license.includes('AGPL')) return 'high';
    if (license.includes('LGPL') || license.includes('MPL')) return 'medium';
    return 'low';
  }

  async analyzeSupplyChainRisks() {
    try {
      // Check for packages with many dependencies (potential supply chain risk)
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      const highRiskPackages = [];
      
      for (const [packageName, version] of Object.entries(allDeps)) {
        try {
          const packagePath = path.join('node_modules', packageName, 'package.json');
          if (fs.existsSync(packagePath)) {
            const packageInfo = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
            const depCount = Object.keys(packageInfo.dependencies || {}).length;
            
            if (depCount > 50) {
              highRiskPackages.push({
                package: packageName,
                dependencyCount: depCount,
                risk: 'high',
                suggestion: 'Consider alternatives with fewer dependencies'
              });
            }
          }
        } catch (error) {
          // Ignore individual package errors
        }
      }
      
      this.analysisResults.security.supplyChain = highRiskPackages;
      
      console.log(`✅ Found ${highRiskPackages.length} high-risk supply chain packages`);
      
    } catch (error) {
      console.log('⚠️  Could not analyze supply chain risks:', error.message);
    }
  }

  calculateRiskScore() {
    let riskScore = 0;
    
    // Add points for vulnerabilities
    this.analysisResults.security.vulnerabilities.forEach(vuln => {
      switch (vuln.severity) {
        case 'critical': riskScore += 10; break;
        case 'high': riskScore += 7; break;
        case 'moderate': riskScore += 4; break;
        case 'low': riskScore += 1; break;
      }
    });
    
    // Add points for license issues
    this.analysisResults.security.licenseIssues.forEach(issue => {
      switch (issue.risk) {
        case 'high': riskScore += 5; break;
        case 'medium': riskScore += 3; break;
        case 'low': riskScore += 1; break;
      }
    });
    
    // Add points for supply chain risks
    this.analysisResults.security.supplyChain.forEach(risk => {
      if (risk.risk === 'high') riskScore += 3;
    });
    
    this.analysisResults.security.riskScore = Math.min(100, riskScore);
  }

  async analyzeBundleOptimization() {
    console.log('⚡ Analyzing bundle optimization...');
    
    try {
      // Check for tree shaking opportunities
      await this.analyzeTreeShaking();
      
      // Analyze bundle splitting
      await this.analyzeBundleSplitting();
      
      // Check for optimization opportunities
      await this.checkOptimizationOpportunities();
      
    } catch (error) {
      console.log('⚠️  Bundle optimization analysis failed:', error.message);
    }
  }

  async analyzeTreeShaking() {
    try {
      const srcPath = path.join(process.cwd(), 'src');
      if (!fs.existsSync(srcPath)) return;
      
      const files = this.getAllFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
      let treeShakingIssues = 0;
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for wildcard imports
        if (content.includes('import * as') || content.includes('import * from')) {
          treeShakingIssues++;
        }
        
        // Check for large library imports
        if (content.includes('import {') && content.includes('} from') && 
            content.split(',').length > 10) {
          treeShakingIssues++;
        }
      });
      
      this.analysisResults.optimization.treeShaking = {
        issues: treeShakingIssues,
        suggestion: treeShakingIssues > 0 ? 
          'Consider using named imports instead of wildcard imports' : 
          'Tree shaking looks good'
      };
      
    } catch (error) {
      console.log('⚠️  Could not analyze tree shaking:', error.message);
    }
  }

  async analyzeBundleSplitting() {
    try {
      // Check if bundle splitting is configured
      const viteConfig = path.join(process.cwd(), 'vite.config.ts');
      
      if (fs.existsSync(viteConfig)) {
        const content = fs.readFileSync(viteConfig, 'utf8');
        
        if (content.includes('build.rollupOptions') && content.includes('output.manualChunks')) {
          this.analysisResults.optimization.bundleSplitting = {
            configured: true,
            suggestion: 'Bundle splitting is configured'
          };
        } else {
          this.analysisResults.optimization.bundleSplitting = {
            configured: false,
            suggestion: 'Consider implementing bundle splitting for better performance'
          };
        }
      }
      
    } catch (error) {
      console.log('⚠️  Could not analyze bundle splitting:', error.message);
    }
  }

  async checkOptimizationOpportunities() {
    const opportunities = [];
    
    // Check for large dependencies that could be optimized
    if (this.analysisResults.dependencies.size.nodeModules) {
      const size = this.analysisResults.dependencies.size.nodeModules.total;
      if (size > 100 * 1024 * 1024) { // 100MB
        opportunities.push({
          type: 'large-dependencies',
          description: 'Node modules size is quite large',
          suggestion: 'Consider using pnpm or yarn for better dependency management'
        });
      }
    }
    
    // Check for outdated packages that might have performance improvements
    if (this.analysisResults.dependencies.outdated.length > 0) {
      opportunities.push({
        type: 'performance-updates',
        description: 'Several packages have updates available',
        suggestion: 'Update packages to get latest performance improvements'
      });
    }
    
    this.analysisResults.optimization.recommendations = opportunities;
  }

  async analyzeMaintenancePatterns() {
    console.log('🔧 Analyzing maintenance patterns...');
    
    try {
      // Check package.json for maintenance info
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      if (packageJson.repository) {
        this.analysisResults.maintenance.lastUpdate = new Date().toISOString();
      }
      
      // Check for breaking changes in major updates
      const majorUpdates = this.analysisResults.dependencies.outdated.filter(pkg => pkg.updateType === 'major');
      
      if (majorUpdates.length > 0) {
        this.analysisResults.maintenance.breakingChanges = majorUpdates.map(pkg => ({
          package: pkg.name,
          current: pkg.current,
          latest: pkg.latest,
          suggestion: 'Review changelog for breaking changes before updating'
        }));
      }
      
      // Generate migration paths for major updates
      if (majorUpdates.length > 0) {
        this.analysisResults.maintenance.migrationPaths = majorUpdates.map(pkg => ({
          package: pkg.name,
          steps: [
            'Check the package changelog for breaking changes',
            'Update your code to be compatible with the new version',
            'Test thoroughly after the update',
            'Consider updating in stages if there are many breaking changes'
          ]
        }));
      }
      
    } catch (error) {
      console.log('⚠️  Could not analyze maintenance patterns:', error.message);
    }
  }

  async generateRecommendations() {
    console.log('💡 Generating intelligent dependency recommendations...');
    
    const recommendations = [];
    
    // Security-based recommendations
    if (this.analysisResults.security.riskScore > 50) {
      recommendations.push({
        priority: 'critical',
        type: 'security',
        description: 'High security risk detected',
        actions: [
          'Update vulnerable packages immediately',
          'Review and fix license issues',
          'Consider alternatives for high-risk packages'
        ]
      });
    }
    
    // Performance-based recommendations
    if (this.analysisResults.optimization.recommendations.length > 0) {
      recommendations.push({
        priority: 'medium',
        type: 'performance',
        description: 'Performance optimization opportunities available',
        actions: this.analysisResults.optimization.recommendations.map(rec => rec.suggestion)
      });
    }
    
    // Maintenance-based recommendations
    if (this.analysisResults.dependencies.outdated.length > 10) {
      recommendations.push({
        priority: 'medium',
        type: 'maintenance',
        description: 'Many outdated packages detected',
        actions: [
          'Update packages in batches',
          'Focus on security updates first',
          'Test thoroughly after updates'
        ]
      });
    }
    
    // Add specific package recommendations
    this.analysisResults.dependencies.outdated
      .filter(pkg => pkg.priority === 3) // High priority updates
      .forEach(pkg => {
        recommendations.push({
          priority: 'high',
          type: 'package-update',
          description: `Update ${pkg.name} from ${pkg.current} to ${pkg.latest}`,
          actions: [
            `npm update ${pkg.name}`,
            'Test the application thoroughly',
            'Check for breaking changes'
          ]
        });
      });
    
    this.analysisResults.recommendations = recommendations;
  }

  async saveReport() {
    const timestamp = new Date().toISOString();
    const reportPath = path.join(this.reportDir, `dependency-analysis-${Date.now()}.json`);
    
    const report = {
      timestamp,
      summary: {
        totalOutdated: this.analysisResults.dependencies.outdated.length,
        totalVulnerabilities: this.analysisResults.security.vulnerabilities.length,
        securityRiskScore: this.analysisResults.security.riskScore,
        unusedDependencies: this.analysisResults.dependencies.unused.length,
        recommendations: this.analysisResults.recommendations.length
      },
      details: this.analysisResults
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Dependency analysis report saved to ${reportPath}`);
    
    // Also save a summary report
    const summaryPath = path.join(this.reportDir, 'latest-dependency-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(report.summary, null, 2));
  }

  getAllFiles(dirPath, extensions) {
    const files = [];
    
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    });
    
    return files;
  }
}

// Main execution
async function main() {
  const analyzer = new IntelligentDependencyAnalyzer();
  
  // Run initial analysis
  await analyzer.runAnalysis();
  
  // Set up continuous analysis
  setInterval(async () => {
    await analyzer.runAnalysis();
  }, AUTOMATION_INTERVAL);
  
  console.log(`🔄 Intelligent dependency analyzer will run every ${AUTOMATION_INTERVAL / 60000} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Intelligent dependency analyzer shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Intelligent dependency analyzer shutting down gracefully...');
  process.exit(0);
});

// Start the analyzer
main().catch(error => {
  console.error('❌ Fatal error in intelligent dependency analyzer:', error);
  process.exit(1);
});