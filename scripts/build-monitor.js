#!/usr/bin/env node

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class IntelligentBuildMonitor {
  constructor() {
    this.buildHistory = [];
    this.performanceMetrics = {};
    this.errorPatterns = new Map();
    this.optimizationSuggestions = [];
    this.lastBuildTime = 0;
    this.buildCount = 0;
    this.successRate = 100;
    
    this.initializeErrorPatterns();
    this.startMonitoring();
  }

  initializeErrorPatterns() {
    // Common build error patterns and their solutions
    this.errorPatterns.set(
      /Module not found: Can't resolve '(.+)'/,
      'Missing dependency. Run: npm install $1'
    );
    this.errorPatterns.set(
      /SyntaxError: Unexpected token/,
      'Syntax error detected. Check TypeScript/JavaScript files for syntax issues.'
    );
    this.errorPatterns.set(
      /Maximum call stack size exceeded/,
      'Infinite recursion detected. Check for circular dependencies or infinite loops.'
    );
    this.errorPatterns.set(
      /ENOENT: no such file or directory/,
      'File not found. Check file paths and ensure all required files exist.'
    );
    this.errorPatterns.set(
      /Port \d+ is already in use/,
      'Port conflict. Kill existing process or change port configuration.'
    );
  }

  async startMonitoring() {
    console.log('🚀 Intelligent Build Monitor Started');
    
    // Monitor build performance every 5 minutes
    setInterval(() => this.analyzeBuildPerformance(), 5 * 60 * 1000);
    
    // Monitor file changes for potential build issues
    this.watchSourceFiles();
    
    // Run initial analysis
    await this.runBuildAnalysis();
  }

  async runBuildAnalysis() {
    try {
      console.log('📊 Running build analysis...');
      
      // Check package.json for potential issues
      await this.analyzeDependencies();
      
      // Check build configuration
      await this.analyzeBuildConfig();
      
      // Run a test build to gather metrics
      await this.runTestBuild();
      
      // Generate optimization report
      this.generateOptimizationReport();
      
    } catch (error) {
      console.error('❌ Build analysis failed:', error.message);
    }
  }

  async analyzeDependencies() {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const serverPackageJson = JSON.parse(fs.readFileSync('server/package.json', 'utf8'));
    
    // Check for outdated dependencies
    const outdatedDeps = await this.checkOutdatedDependencies();
    
    // Check for security vulnerabilities
    const securityIssues = await this.checkSecurityVulnerabilities();
    
    // Check for dependency conflicts
    const conflicts = await this.checkDependencyConflicts();
    
    if (outdatedDeps.length > 0) {
      this.optimizationSuggestions.push({
        type: 'dependency',
        priority: 'medium',
        message: `Update ${outdatedDeps.length} outdated dependencies`,
        action: 'npm update',
        impact: 'Build stability and security'
      });
    }
    
    if (securityIssues.length > 0) {
      this.optimizationSuggestions.push({
        type: 'security',
        priority: 'high',
        message: `Fix ${securityIssues.length} security vulnerabilities`,
        action: 'npm audit fix',
        impact: 'Security and compliance'
      });
    }
  }

  async analyzeBuildConfig() {
    // Analyze Vite configuration
    if (fs.existsSync('vite.config.ts')) {
      const viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
      
      // Check for performance optimizations
      if (!viteConfig.includes('build.rollupOptions')) {
        this.optimizationSuggestions.push({
          type: 'performance',
          priority: 'low',
          message: 'Add rollup options for better bundle optimization',
          action: 'Configure vite.config.ts with rollup options',
          impact: 'Bundle size and build performance'
        });
      }
      
      // Check for chunk splitting
      if (!viteConfig.includes('build.chunkSizeWarningLimit')) {
        this.optimizationSuggestions.push({
          type: 'performance',
          priority: 'medium',
          message: 'Configure chunk size limits for better caching',
          action: 'Add chunk size configuration to vite.config.ts',
          impact: 'User experience and caching efficiency'
        });
      }
    }
    
    // Analyze TypeScript configuration
    if (fs.existsSync('tsconfig.json')) {
      const tsConfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
      
      if (!tsConfig.compilerOptions?.incremental) {
        this.optimizationSuggestions.push({
          type: 'performance',
          priority: 'medium',
          message: 'Enable incremental TypeScript compilation',
          action: 'Add "incremental": true to tsconfig.json',
          impact: 'Build speed for subsequent builds'
        });
      }
    }
  }

  async runTestBuild() {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      
      exec('npm run build', { timeout: 300000 }, (error, stdout, stderr) => {
        const endTime = Date.now();
        const buildTime = endTime - startTime;
        
        this.buildHistory.push({
          timestamp: new Date(),
          duration: buildTime,
          success: !error,
          output: stdout,
          errors: stderr
        });
        
        this.lastBuildTime = buildTime;
        this.buildCount++;
        
        if (error) {
          this.successRate = Math.max(0, this.successRate - 5);
          this.analyzeBuildErrors(stderr);
        } else {
          this.successRate = Math.min(100, this.successRate + 2);
        }
        
        // Update performance metrics
        this.performanceMetrics = {
          averageBuildTime: this.calculateAverageBuildTime(),
          successRate: this.successRate,
          totalBuilds: this.buildCount,
          lastBuildTime: buildTime
        };
        
        resolve();
      });
    });
  }

  analyzeBuildErrors(errorOutput) {
    for (const [pattern, solution] of this.errorPatterns) {
      if (pattern.test(errorOutput)) {
        console.log(`🔍 Build Error Detected: ${solution}`);
        
        this.optimizationSuggestions.push({
          type: 'error',
          priority: 'high',
          message: `Build error: ${solution}`,
          action: solution,
          impact: 'Build success rate'
        });
        break;
      }
    }
  }

  calculateAverageBuildTime() {
    if (this.buildHistory.length === 0) return 0;
    
    const totalTime = this.buildHistory.reduce((sum, build) => sum + build.duration, 0);
    return totalTime / this.buildHistory.length;
  }

  generateOptimizationReport() {
    const report = {
      timestamp: new Date(),
      performanceMetrics: this.performanceMetrics,
      optimizationSuggestions: this.optimizationSuggestions,
      buildHistory: this.buildHistory.slice(-10) // Last 10 builds
    };
    
    // Save report to file
    fs.writeFileSync(
      path.join(__dirname, '../logs/build-optimization-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    // Log summary
    console.log('\n📈 Build Optimization Report:');
    console.log(`   Average Build Time: ${Math.round(report.performanceMetrics.averageBuildTime)}ms`);
    console.log(`   Success Rate: ${report.performanceMetrics.successRate}%`);
    console.log(`   Total Builds: ${report.performanceMetrics.totalBuilds}`);
    console.log(`   Optimization Suggestions: ${report.optimizationSuggestions.length}`);
    
    if (report.optimizationSuggestions.length > 0) {
      console.log('\n🚀 Recommended Actions:');
      report.optimizationSuggestions
        .sort((a, b) => this.getPriorityScore(b.priority) - this.getPriorityScore(a.priority))
        .forEach((suggestion, index) => {
          console.log(`   ${index + 1}. [${suggestion.priority.toUpperCase()}] ${suggestion.message}`);
          console.log(`      Action: ${suggestion.action}`);
          console.log(`      Impact: ${suggestion.impact}`);
        });
    }
  }

  getPriorityScore(priority) {
    const scores = { high: 3, medium: 2, low: 1 };
    return scores[priority] || 0;
  }

  watchSourceFiles() {
    const sourceDirs = ['src', 'server/src', 'pages', 'components'];
    
    sourceDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        fs.watch(dir, { recursive: true }, (eventType, filename) => {
          if (filename && filename.endsWith('.tsx') || filename.endsWith('.ts') || filename.endsWith('.js')) {
            console.log(`📝 Source file changed: ${filename}`);
            this.scheduleBuildAnalysis();
          }
        });
      }
    });
  }

  scheduleBuildAnalysis() {
    // Debounce build analysis to avoid excessive runs
    if (this.analysisTimeout) {
      clearTimeout(this.analysisTimeout);
    }
    
    this.analysisTimeout = setTimeout(() => {
      this.runBuildAnalysis();
    }, 5000); // Wait 5 seconds after last file change
  }

  async analyzeBuildPerformance() {
    console.log('📊 Analyzing build performance trends...');
    
    // Check for performance degradation
    if (this.buildHistory.length >= 5) {
      const recentBuilds = this.buildHistory.slice(-5);
      const olderBuilds = this.buildHistory.slice(-10, -5);
      
      const recentAvg = recentBuilds.reduce((sum, build) => sum + build.duration, 0) / recentBuilds.length;
      const olderAvg = olderBuilds.reduce((sum, build) => sum + build.duration, 0) / olderBuilds.length;
      
      if (recentAvg > olderAvg * 1.2) {
        console.log('⚠️  Build performance degradation detected');
        this.optimizationSuggestions.push({
          type: 'performance',
          priority: 'high',
          message: 'Build performance has degraded by 20%+',
          action: 'Investigate recent changes and optimize build configuration',
          impact: 'Development productivity'
        });
      }
    }
    
    // Generate performance report
    this.generateOptimizationReport();
  }

  async checkOutdatedDependencies() {
    return new Promise((resolve) => {
      exec('npm outdated --json', (error, stdout) => {
        if (error) {
          resolve([]);
        } else {
          try {
            const outdated = JSON.parse(stdout);
            resolve(Object.keys(outdated));
          } catch {
            resolve([]);
          }
        }
      });
    });
  }

  async checkSecurityVulnerabilities() {
    return new Promise((resolve) => {
      exec('npm audit --json', (error, stdout) => {
        if (error) {
          resolve([]);
        } else {
          try {
            const audit = JSON.parse(stdout);
            resolve(audit.vulnerabilities || []);
          } catch {
            resolve([]);
          }
        }
      });
    });
  }

  async checkDependencyConflicts() {
    return new Promise((resolve) => {
      exec('npm ls --depth=0', (error, stdout) => {
        if (error) {
          // Parse npm ls output for conflicts
          const conflicts = stdout.match(/UNMET PEER DEPENDENCY|npm ERR!/g) || [];
          resolve(conflicts);
        } else {
          resolve([]);
        }
      });
    });
  }
}

// Start the monitor
const monitor = new IntelligentBuildMonitor();

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Build Monitor...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down Build Monitor...');
  process.exit(0);
});