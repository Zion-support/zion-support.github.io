#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📦 Starting Dependency Monitor...');

class DependencyMonitor {
  constructor() {
    this.dependencyLogDir = path.join(process.cwd(), 'logs');
    this.ensureLogDirectory();
    this.dependencyMetrics = {
      totalDependencies: 0,
      outdatedDependencies: 0,
      vulnerableDependencies: 0,
      devDependencies: 0,
      peerDependencies: 0,
      lastCheck: null
    };
    this.dependencyHistory = [];
    this.maxDependencyHistory = 20;
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.dependencyLogDir)) {
      fs.mkdirSync(this.dependencyLogDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(this.dependencyLogDir, 'dependency-monitor.log');
    fs.appendFileSync(logFile, logMessage);
  }

  async checkDependencies() {
    this.log('📦 Checking dependencies...');
    
    try {
      // Check package.json
      const packageInfo = this.readPackageJson();
      
      // Check for outdated dependencies
      const outdatedInfo = await this.checkOutdatedDependencies();
      
      // Check for security vulnerabilities
      const securityInfo = await this.checkSecurityVulnerabilities();
      
      // Check dependency tree
      const dependencyTree = await this.analyzeDependencyTree();
      
      // Update dependency metrics
      this.updateDependencyMetrics({
        totalDependencies: packageInfo.totalDependencies,
        outdatedDependencies: outdatedInfo.count,
        vulnerableDependencies: securityInfo.vulnerabilities,
        devDependencies: packageInfo.devDependencies,
        peerDependencies: packageInfo.peerDependencies,
        lastCheck: new Date().toISOString()
      });
      
      // Log dependency status
      this.log(`📦 Total Dependencies: ${packageInfo.totalDependencies}`);
      this.log(`🔄 Outdated: ${outdatedInfo.count}`);
      this.log(`🚨 Vulnerabilities: ${securityInfo.vulnerabilities}`);
      this.log(`🛠️ Dev Dependencies: ${packageInfo.devDependencies}`);
      this.log(`🔗 Peer Dependencies: ${packageInfo.peerDependencies}`);
      
      return {
        total: packageInfo.totalDependencies,
        outdated: outdatedInfo.count,
        vulnerabilities: securityInfo.vulnerabilities
      };
      
    } catch (error) {
      this.log(`❌ Dependency check failed: ${error.message}`);
      return { total: 0, outdated: 0, vulnerabilities: 0 };
    }
  }

  readPackageJson() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      const dependencies = Object.keys(packageJson.dependencies || {}).length;
      const devDependencies = Object.keys(packageJson.devDependencies || {}).length;
      const peerDependencies = Object.keys(packageJson.peerDependencies || {}).length;
      const optionalDependencies = Object.keys(packageJson.optionalDependencies || {}).length;
      
      return {
        totalDependencies: dependencies + devDependencies + peerDependencies + optionalDependencies,
        dependencies,
        devDependencies,
        peerDependencies,
        optionalDependencies,
        name: packageJson.name,
        version: packageJson.version
      };
      
    } catch (error) {
      this.log(`❌ Failed to read package.json: ${error.message}`);
      return {
        totalDependencies: 0,
        dependencies: 0,
        devDependencies: 0,
        peerDependencies: 0,
        optionalDependencies: 0,
        name: 'unknown',
        version: 'unknown'
      };
    }
  }

  async checkOutdatedDependencies() {
    try {
      this.log('🔄 Checking for outdated dependencies...');
      const result = execSync('npm outdated --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const outdated = JSON.parse(result);
      const count = Object.keys(outdated).length;
      
      return { count, details: outdated };
      
    } catch (error) {
      // npm outdated returns non-zero exit code when there are outdated packages
      if (error.stdout) {
        try {
          const outdated = JSON.parse(error.stdout);
          const count = Object.keys(outdated).length;
          return { count, details: outdated };
        } catch (parseError) {
          return { count: 0, details: {} };
        }
      }
      
      return { count: 0, details: {} };
    }
  }

  async checkSecurityVulnerabilities() {
    try {
      this.log('🔒 Checking for security vulnerabilities...');
      const result = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const audit = JSON.parse(result);
      const vulnerabilities = audit.metadata?.vulnerabilities?.total || 0;
      
      return { vulnerabilities, details: audit };
      
    } catch (error) {
      // npm audit returns non-zero exit code when vulnerabilities are found
      if (error.stdout) {
        try {
          const audit = JSON.parse(error.stdout);
          const vulnerabilities = audit.metadata?.vulnerabilities?.total || 0;
          return { vulnerabilities, details: audit };
        } catch (parseError) {
          return { vulnerabilities: 0, details: {} };
        }
      }
      
      return { vulnerabilities: 0, details: {} };
    }
  }

  async analyzeDependencyTree() {
    try {
      this.log('🌳 Analyzing dependency tree...');
      const result = execSync('npm ls --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const tree = JSON.parse(result);
      
      // Analyze tree depth and complexity
      const analysis = this.analyzeTreeStructure(tree);
      
      return analysis;
      
    } catch (error) {
      // npm ls may fail due to missing dependencies
      this.log(`⚠️ Dependency tree analysis failed: ${error.message}`);
      return { depth: 0, complexity: 'unknown', totalPackages: 0 };
    }
  }

  analyzeTreeStructure(tree) {
    let maxDepth = 0;
    let totalPackages = 0;
    
    const analyzeNode = (node, depth = 0) => {
      maxDepth = Math.max(maxDepth, depth);
      totalPackages++;
      
      if (node.dependencies) {
        Object.values(node.dependencies).forEach(dep => {
          analyzeNode(dep, depth + 1);
        });
      }
    };
    
    analyzeNode(tree);
    
    let complexity = 'low';
    if (maxDepth > 5) complexity = 'high';
    else if (maxDepth > 3) complexity = 'medium';
    
    return { depth: maxDepth, complexity, totalPackages };
  }

  updateDependencyMetrics(metrics) {
    this.dependencyMetrics = { ...metrics };
    
    // Record dependency history
    this.dependencyHistory.push({
      timestamp: new Date().toISOString(),
      ...metrics
    });
    
    // Keep only recent history
    if (this.dependencyHistory.length > this.maxDependencyHistory) {
      this.dependencyHistory = this.dependencyHistory.slice(-this.maxDependencyHistory);
    }
    
    // Save dependency metrics
    const metricsFile = path.join(this.dependencyLogDir, 'dependency-metrics.json');
    fs.writeFileSync(metricsFile, JSON.stringify({
      ...this.dependencyMetrics,
      history: this.dependencyHistory
    }, null, 2));
  }

  generateDependencyReport() {
    const totalChecks = this.dependencyHistory.length;
    const healthyChecks = this.dependencyHistory.filter(h => h.vulnerableDependencies === 0 && h.outdatedDependencies < 5).length;
    const warningChecks = this.dependencyHistory.filter(h => h.vulnerableDependencies === 0 && h.outdatedDependencies >= 5).length;
    const criticalChecks = this.dependencyHistory.filter(h => h.vulnerableDependencies > 0).length;
    
    const report = {
      currentStatus: this.getDependencyStatus(),
      summary: {
        totalChecks,
        healthy: healthyChecks,
        warning: warningChecks,
        critical: criticalChecks
      },
      recentHistory: this.dependencyHistory.slice(-5),
      recommendations: this.generateDependencyRecommendations()
    };
    
    return report;
  }

  getDependencyStatus() {
    if (this.dependencyMetrics.vulnerableDependencies > 0) {
      return 'critical';
    } else if (this.dependencyMetrics.outdatedDependencies > 10) {
      return 'warning';
    } else if (this.dependencyMetrics.outdatedDependencies > 5) {
      return 'attention';
    } else {
      return 'healthy';
    }
  }

  generateDependencyRecommendations() {
    const recommendations = [];
    
    if (this.dependencyMetrics.vulnerableDependencies > 0) {
      recommendations.push('🚨 Security vulnerabilities detected. Run "npm audit fix" immediately.');
    }
    
    if (this.dependencyMetrics.outdatedDependencies > 10) {
      recommendations.push('🔄 Many outdated dependencies. Consider updating major versions.');
    } else if (this.dependencyMetrics.outdatedDependencies > 5) {
      recommendations.push('⚠️ Several outdated dependencies. Run "npm update" to update minor versions.');
    }
    
    if (this.dependencyMetrics.totalDependencies > 100) {
      recommendations.push('📦 Large dependency tree. Consider auditing for unused dependencies.');
    }
    
    if (this.dependencyHistory.length > 0) {
      const recentChecks = this.dependencyHistory.slice(-3);
      const avgVulnerabilities = recentChecks.reduce((sum, h) => sum + h.vulnerableDependencies, 0) / recentChecks.length;
      
      if (avgVulnerabilities > 0) {
        recommendations.push('🚨 Persistent security issues. Review dependency choices.');
      }
      
      if (avgVulnerabilities === 0 && this.dependencyMetrics.outdatedDependencies < 5) {
        recommendations.push('✅ Dependencies are healthy. Continue regular monitoring.');
      }
    }
    
    return recommendations;
  }

  async startContinuousMonitoring() {
    this.log('🔄 Starting continuous dependency monitoring...');
    
    const interval = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes default
    
    // Run initial dependency check
    await this.checkDependencies();
    
    // Set up continuous monitoring
    setInterval(async () => {
      this.log('🔄 Running scheduled dependency check...');
      await this.checkDependencies();
      
      // Generate and log report
      const report = this.generateDependencyReport();
      this.log(`📊 Dependency Report: ${report.currentStatus}`);
      
      if (report.recommendations.length > 0) {
        this.log('💡 Recommendations:');
        report.recommendations.forEach(rec => this.log(`   ${rec}`));
      }
    }, interval);
    
    this.log(`⏰ Dependency monitoring active. Running every ${interval / 60000} minutes.`);
  }
}

// Main execution
async function main() {
  const dependencyMonitor = new DependencyMonitor();
  
  try {
    await dependencyMonitor.startContinuousMonitoring();
  } catch (error) {
    console.error('❌ Dependency monitor failed:', error);
    process.exit(1);
  }
}

// Start the dependency monitor
main().catch(console.error);
