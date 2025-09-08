#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧠 Starting Smart Dependency Analyzer Automation...');

// Get automation interval from environment variable (default: 6 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 21600000; // 6 hours

class SmartDependencyAnalyzer {
  constructor() {
    this.analysisResults = {
      outdatedPackages: [],
      securityVulnerabilities: [],
      unusedDependencies: [],
      duplicateDependencies: [],
      heavyDependencies: [],
      updateRecommendations: [],
      compatibilityIssues: []
    };
    this.reportDir = path.join(process.cwd(), 'dependency-analysis-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async analyzeDependencies() {
    try {
      console.log(`🧠 Running Smart Dependency Analysis at ${new Date().toISOString()}`);
      
      // Check for outdated packages
      await this.checkOutdatedPackages();
      
      // Check for security vulnerabilities
      await this.checkSecurityVulnerabilities();
      
      // Analyze bundle impact
      await this.analyzeBundleImpact();
      
      // Check for unused dependencies
      await this.checkUnusedDependencies();
      
      // Analyze dependency conflicts
      await this.analyzeDependencyConflicts();
      
      // Generate smart update recommendations
      await this.generateUpdateRecommendations();
      
      // Generate comprehensive report
      await this.generateAnalysisReport();
      
      console.log('✅ Smart Dependency Analysis completed successfully');
      
    } catch (error) {
      console.error('❌ Smart Dependency Analysis failed:', error.message);
    }
  }

  async checkOutdatedPackages() {
    console.log('📦 Checking for outdated packages...');
    
    try {
      // Check npm outdated
      const output = execSync('npm outdated --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const outdatedData = JSON.parse(output);
      
      Object.keys(outdatedData).forEach(packageName => {
        const pkg = outdatedData[packageName];
        const current = pkg.current;
        const latest = pkg.latest;
        const wanted = pkg.wanted;
        
        // Calculate update priority based on version difference
        const priority = this.calculateUpdatePriority(current, latest);
        
        this.analysisResults.outdatedPackages.push({
          name: packageName,
          current: current,
          wanted: wanted,
          latest: latest,
          priority: priority,
          updateType: this.determineUpdateType(current, latest),
          breakingChanges: this.checkBreakingChanges(current, latest),
          recommendation: this.generateUpdateRecommendation(packageName, current, latest)
        });
      });
      
      console.log(`✅ Found ${this.analysisResults.outdatedPackages.length} outdated packages`);
      
    } catch (error) {
      if (error.status === 1) {
        console.log('✅ All packages are up to date');
      } else {
        console.log('⚠️  Could not check outdated packages:', error.message);
      }
    }
  }

  async checkSecurityVulnerabilities() {
    console.log('🔒 Checking for security vulnerabilities...');
    
    try {
      // Check npm audit
      const output = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(output);
      
      if (auditData.vulnerabilities) {
        Object.keys(auditData.vulnerabilities).forEach(packageName => {
          const vuln = auditData.vulnerabilities[packageName];
          
          vuln.via.forEach(via => {
            this.analysisResults.securityVulnerabilities.push({
              package: packageName,
              severity: via.severity,
              title: via.title,
              description: via.description,
              cwe: via.cwe,
              recommendation: this.generateSecurityRecommendation(via),
              fixAvailable: vuln.fixAvailable
            });
          });
        });
      }
      
      console.log(`✅ Found ${this.analysisResults.securityVulnerabilities.length} security vulnerabilities`);
      
    } catch (error) {
      console.log('⚠️  Could not check security vulnerabilities:', error.message);
    }
  }

  async analyzeBundleImpact() {
    console.log('📊 Analyzing bundle impact...');
    
    try {
      // Get package sizes
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Check for heavy packages
      const heavyPackages = [
        'lodash', 'moment', 'date-fns', 'ramda', 'underscore',
        'jquery', 'bootstrap', 'material-ui', 'antd'
      ];
      
      heavyPackages.forEach(pkg => {
        if (dependencies[pkg]) {
          this.analysisResults.heavyDependencies.push({
            name: pkg,
            impact: 'high',
            alternatives: this.suggestAlternatives(pkg),
            recommendation: `Consider using lighter alternatives or implementing tree-shaking for ${pkg}`
          });
        }
      });
      
      // Check for duplicate functionality
      const duplicateGroups = [
        ['date-fns', 'moment', 'dayjs'],
        ['lodash', 'underscore', 'ramda'],
        ['axios', 'fetch', 'superagent']
      ];
      
      duplicateGroups.forEach(group => {
        const found = group.filter(pkg => dependencies[pkg]);
        if (found.length > 1) {
          this.analysisResults.duplicateDependencies.push({
            packages: found,
            issue: 'Duplicate functionality detected',
            recommendation: `Consolidate to one package: ${found[0]}`
          });
        }
      });
      
    } catch (error) {
      console.log('⚠️  Could not analyze bundle impact:', error.message);
    }
  }

  async checkUnusedDependencies() {
    console.log('🔍 Checking for unused dependencies...');
    
    try {
      // Use depcheck to find unused dependencies
      const output = execSync('npx depcheck --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const depcheckData = JSON.parse(output);
      
      if (depcheckData.dependencies && depcheckData.dependencies.length > 0) {
        depcheckData.dependencies.forEach(dep => {
          this.analysisResults.unusedDependencies.push({
            name: dep,
            type: 'unused',
            recommendation: 'Consider removing if truly unused'
          });
        });
      }
      
      if (depcheckData.devDependencies && depcheckData.devDependencies.length > 0) {
        depcheckData.devDependencies.forEach(dep => {
          this.analysisResults.unusedDependencies.push({
            name: dep,
            type: 'unused-dev',
            recommendation: 'Consider removing if not needed for development'
          });
        });
      }
      
      console.log(`✅ Found ${this.analysisResults.unusedDependencies.length} potentially unused dependencies`);
      
    } catch (error) {
      console.log('⚠️  Could not check unused dependencies:', error.message);
    }
  }

  async analyzeDependencyConflicts() {
    console.log('⚠️  Analyzing dependency conflicts...');
    
    try {
      // Check for peer dependency issues
      const output = execSync('npm ls --depth=0', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const lines = output.split('\n');
      
      lines.forEach(line => {
        if (line.includes('UNMET PEER DEPENDENCY')) {
          const match = line.match(/UNMET PEER DEPENDENCY\s+([^\s]+)@([^\s]+)/);
          if (match) {
            this.analysisResults.compatibilityIssues.push({
              type: 'peer-dependency',
              package: match[1],
              version: match[2],
              issue: 'Unmet peer dependency',
              recommendation: `Install compatible version of ${match[1]}`
            });
          }
        }
        
        if (line.includes('npm ERR!')) {
          this.analysisResults.compatibilityIssues.push({
            type: 'npm-error',
            issue: line.trim(),
            recommendation: 'Review and resolve npm errors'
          });
        }
      });
      
    } catch (error) {
      // npm ls might fail with conflicts, which is what we want to catch
      console.log('⚠️  Dependency conflicts detected (this is expected)');
    }
  }

  calculateUpdatePriority(current, latest) {
    const currentParts = current.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);
    
    // Major version difference = high priority
    if (latestParts[0] > currentParts[0]) return 'high';
    
    // Minor version difference = medium priority
    if (latestParts[1] > currentParts[1]) return 'medium';
    
    // Patch version difference = low priority
    if (latestParts[2] > currentParts[2]) return 'low';
    
    return 'none';
  }

  determineUpdateType(current, latest) {
    const currentParts = current.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);
    
    if (latestParts[0] > currentParts[0]) return 'major';
    if (latestParts[1] > currentParts[1]) return 'minor';
    if (latestParts[2] > currentParts[2]) return 'patch';
    
    return 'none';
  }

  checkBreakingChanges(current, latest) {
    const updateType = this.determineUpdateType(current, latest);
    return updateType === 'major';
  }

  generateUpdateRecommendation(packageName, current, latest) {
    const updateType = this.determineUpdateType(current, latest);
    
    switch (updateType) {
      case 'major':
        return `⚠️  Major update available - review breaking changes before updating ${packageName} from ${current} to ${latest}`;
      case 'minor':
        return `✅ Safe to update ${packageName} from ${current} to ${latest} (minor version)`;
      case 'patch':
        return `✅ Safe to update ${packageName} from ${current} to ${latest} (patch version)`;
      default:
        return `✅ ${packageName} is up to date`;
    }
  }

  generateSecurityRecommendation(vulnerability) {
    switch (vulnerability.severity) {
      case 'critical':
        return `🚨 IMMEDIATE ACTION REQUIRED: ${vulnerability.title}`;
      case 'high':
        return `🔴 HIGH PRIORITY: ${vulnerability.title}`;
      case 'moderate':
        return `🟡 MODERATE: ${vulnerability.title}`;
      case 'low':
        return `🟢 LOW: ${vulnerability.title}`;
      default:
        return `ℹ️  Review: ${vulnerability.title}`;
    }
  }

  suggestAlternatives(packageName) {
    const alternatives = {
      'lodash': ['ramda', 'underscore', 'native JavaScript methods'],
      'moment': ['date-fns', 'dayjs', 'luxon'],
      'jquery': ['native JavaScript', 'zepto'],
      'bootstrap': ['tailwindcss', 'bulma', 'foundation'],
      'material-ui': ['chakra-ui', 'antd', 'mantine']
    };
    
    return alternatives[packageName] || ['Check for lighter alternatives'];
  }

  async generateUpdateRecommendations() {
    console.log('💡 Generating smart update recommendations...');
    
    // Prioritize security updates
    const criticalVulns = this.analysisResults.securityVulnerabilities.filter(v => v.severity === 'critical');
    const highVulns = this.analysisResults.securityVulnerabilities.filter(v => v.severity === 'high');
    
    if (criticalVulns.length > 0) {
      this.analysisResults.updateRecommendations.push({
        priority: 'critical',
        action: 'Update packages with critical security vulnerabilities immediately',
        packages: criticalVulns.map(v => v.package)
      });
    }
    
    if (highVulns.length > 0) {
      this.analysisResults.updateRecommendations.push({
        priority: 'high',
        action: 'Update packages with high security vulnerabilities',
        packages: highVulns.map(v => v.package)
      });
    }
    
    // Recommend major version updates with caution
    const majorUpdates = this.analysisResults.outdatedPackages.filter(p => p.updateType === 'major');
    if (majorUpdates.length > 0) {
      this.analysisResults.updateRecommendations.push({
        priority: 'medium',
        action: 'Review major version updates for breaking changes',
        packages: majorUpdates.map(p => p.name)
      });
    }
    
    // Recommend safe updates
    const safeUpdates = this.analysisResults.outdatedPackages.filter(p => 
      p.updateType === 'minor' || p.updateType === 'patch'
    );
    if (safeUpdates.length > 0) {
      this.analysisResults.updateRecommendations.push({
        priority: 'low',
        action: 'Safe to update these packages',
        packages: safeUpdates.map(p => p.name)
      });
    }
  }

  async generateAnalysisReport() {
    console.log('📊 Generating dependency analysis report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalOutdated: this.analysisResults.outdatedPackages.length,
        totalVulnerabilities: this.analysisResults.securityVulnerabilities.length,
        totalUnused: this.analysisResults.unusedDependencies.length,
        totalConflicts: this.analysisResults.compatibilityIssues.length,
        totalHeavy: this.analysisResults.heavyDependencies.length
      },
      details: this.analysisResults,
      nextActions: this.generateNextActions(),
      status: 'completed'
    };
    
    const reportPath = path.join(this.reportDir, `dependency-analysis-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`✅ Dependency analysis report saved to ${reportPath}`);
    console.log(`📊 Summary: ${report.summary.totalOutdated} outdated, ${report.summary.totalVulnerabilities} vulnerabilities`);
    
    // Log critical issues
    if (report.summary.totalVulnerabilities > 0) {
      console.log(`🚨 SECURITY: ${report.summary.totalVulnerabilities} vulnerabilities found!`);
    }
  }

  generateNextActions() {
    const actions = [];
    
    if (this.analysisResults.securityVulnerabilities.length > 0) {
      actions.push('🔒 Address security vulnerabilities immediately');
    }
    
    if (this.analysisResults.outdatedPackages.length > 0) {
      actions.push('📦 Plan dependency updates based on priority');
    }
    
    if (this.analysisResults.unusedDependencies.length > 0) {
      actions.push('🧹 Clean up unused dependencies');
    }
    
    if (this.analysisResults.heavyDependencies.length > 0) {
      actions.push('⚡ Optimize bundle size by reviewing heavy dependencies');
    }
    
    return actions;
  }
}

// Main execution
async function main() {
  const analyzer = new SmartDependencyAnalyzer();
  
  // Run initial analysis
  await analyzer.analyzeDependencies();
  
  // Set up continuous analysis
  setInterval(async () => {
    await analyzer.analyzeDependencies();
  }, AUTOMATION_INTERVAL);
  
  console.log(`🧠 Smart Dependency Analyzer running continuously (${AUTOMATION_INTERVAL / 3600000} hour intervals)`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🧠 Smart Dependency Analyzer shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🧠 Smart Dependency Analyzer shutting down gracefully...');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Smart Dependency Analyzer failed to start:', error);
  process.exit(1);
});