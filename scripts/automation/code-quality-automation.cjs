#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

class CodeQualityAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.qualityScore = 0;
    this.issuesFound = [];
    this.improvementsMade = [];
    this.startTime = Date.now();
  }

  async init() {
    console.log('🚀 Code Quality Automation Starting...');
    console.log(`📁 Project Root: ${this.projectRoot}`);
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async analyzeCodeQuality() {
    console.log('🔍 Analyzing code quality...');
    
    const qualityMetrics = {
      linting: await this.runLintingAnalysis(),
      typescript: await this.runTypeScriptAnalysis(),
      complexity: await this.analyzeCodeComplexity(),
      duplication: await this.analyzeCodeDuplication(),
      coverage: await this.analyzeTestCoverage(),
      dependencies: await this.analyzeDependencies()
    };
    
    this.qualityScore = this.calculateQualityScore(qualityMetrics);
    return qualityMetrics;
  }

  async runLintingAnalysis() {
    try {
      const result = execSync('npm run lint', { encoding: 'utf8' });
      const lines = result.split('\n');
      const errors = lines.filter(line => line.includes('error'));
      const warnings = lines.filter(line => line.includes('warning'));
      
      return {
        errors: errors.length,
        warnings: warnings.length,
        total: errors.length + warnings.length
      };
    } catch (error) {
      const output = error.stdout?.toString() || '';
      const lines = output.split('\n');
      const errors = lines.filter(line => line.includes('error'));
      const warnings = lines.filter(line => line.includes('warning'));
      
      return {
        errors: errors.length,
        warnings: warnings.length,
        total: errors.length + warnings.length
      };
    }
  }

  async runTypeScriptAnalysis() {
    try {
      const result = execSync('npm run type-check', { encoding: 'utf8' });
      const lines = result.split('\n');
      const errors = lines.filter(line => line.includes('error'));
      
      return {
        errors: errors.length,
        total: errors.length
      };
    } catch (error) {
      const output = error.stdout?.toString() || '';
      const lines = output.split('\n');
      const errors = lines.filter(line => line.includes('error'));
      
      return {
        errors: errors.length,
        total: errors.length
      };
    }
  }

  async analyzeCodeComplexity() {
    console.log('🔍 Analyzing code complexity...');
    
    let totalComplexity = 0;
    let fileCount = 0;
    
    const analyzeFile = (filePath) => {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        // Simple complexity analysis
        let complexity = 0;
        lines.forEach(line => {
          if (line.includes('if') || line.includes('else')) complexity += 1;
          if (line.includes('for') || line.includes('while')) complexity += 2;
          if (line.includes('switch')) complexity += 3;
          if (line.includes('catch')) complexity += 2;
        });
        
        totalComplexity += complexity;
        fileCount += 1;
      } catch (error) {
        // Skip files that can't be read
      }
    };
    
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
          walkDir(filePath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
          analyzeFile(filePath);
        }
      });
    };
    
    walkDir(path.join(this.projectRoot, 'src'));
    
    return {
      averageComplexity: fileCount > 0 ? totalComplexity / fileCount : 0,
      totalComplexity,
      fileCount
    };
  }

  async analyzeCodeDuplication() {
    console.log('🔍 Analyzing code duplication...');
    
    // Simple duplication detection
    const allCode = [];
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
          walkDir(filePath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            allCode.push(content);
          } catch (error) {
            // Skip files that can't be read
          }
        }
      });
    };
    
    walkDir(path.join(this.projectRoot, 'src'));
    
    // Find similar code blocks
    let duplicationScore = 0;
    for (let i = 0; i < allCode.length; i++) {
      for (let j = i + 1; j < allCode.length; j++) {
        const similarity = this.calculateSimilarity(allCode[i], allCode[j]);
        if (similarity > 0.8) {
          duplicationScore += similarity;
        }
      }
    }
    
    return {
      duplicationScore: Math.min(duplicationScore, 100),
      filesAnalyzed: allCode.length
    };
  }

  calculateSimilarity(str1, str2) {
    const words1 = str1.split(/\s+/);
    const words2 = str2.split(/\s+/);
    
    const commonWords = words1.filter(word => words2.includes(word));
    return commonWords.length / Math.max(words1.length, words2.length);
  }

  async analyzeTestCoverage() {
    console.log('🔍 Analyzing test coverage...');
    
    try {
      // Check if tests exist
      const testDir = path.join(this.projectRoot, 'tests');
      const testFiles = fs.existsSync(testDir) ? fs.readdirSync(testDir) : [];
      
      return {
        testFiles: testFiles.length,
        hasTests: testFiles.length > 0,
        coverage: testFiles.length > 0 ? Math.min(testFiles.length * 10, 100) : 0
      };
    } catch (error) {
      return {
        testFiles: 0,
        hasTests: false,
        coverage: 0
      };
    }
  }

  async analyzeDependencies() {
    console.log('🔍 Analyzing dependencies...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const dependencies = Object.keys(packageJson.dependencies || {});
      const devDependencies = Object.keys(packageJson.devDependencies || {});
      
      // Check for outdated packages
      let outdatedCount = 0;
      try {
        const outdatedResult = execSync('npm outdated --json', { encoding: 'utf8' });
        const outdated = JSON.parse(outdatedResult);
        outdatedCount = Object.keys(outdated).length;
      } catch (error) {
        // No outdated packages
      }
      
      return {
        totalDependencies: dependencies.length + devDependencies.length,
        outdatedPackages: outdatedCount,
        dependencyHealth: Math.max(0, 100 - outdatedCount * 5)
      };
    } catch (error) {
      return {
        totalDependencies: 0,
        outdatedPackages: 0,
        dependencyHealth: 0
      };
    }
  }

  calculateQualityScore(metrics) {
    let score = 100;
    
    // Deduct points for issues
    score -= metrics.linting.errors * 2;
    score -= metrics.linting.warnings * 0.5;
    score -= metrics.typescript.errors * 3;
    score -= Math.min(metrics.complexity.averageComplexity * 5, 20);
    score -= metrics.duplication.duplicationScore * 0.5;
    score -= (100 - metrics.coverage.coverage) * 0.3;
    score -= (100 - metrics.dependencies.dependencyHealth) * 0.2;
    
    return Math.max(0, Math.round(score));
  }

  async generateQualityReport(metrics) {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      qualityScore: this.qualityScore,
      metrics,
      summary: `Code quality score: ${this.qualityScore}/100`,
      recommendations: this.generateRecommendations(metrics)
    };
    
    const reportPath = path.join(this.reportsDir, 'code-quality-report.json');
    await writeFile(reportPath, JSON.stringify(report, null, 2));
    
    console.log('\n📊 Code Quality Report:');
    console.log(`⏱️  Duration: ${duration}ms`);
    console.log(`🎯 Quality Score: ${this.qualityScore}/100`);
    console.log(`📁 Report saved to: ${reportPath}`);
    
    return report;
  }

  generateRecommendations(metrics) {
    const recommendations = [];
    
    if (metrics.linting.errors > 0) {
      recommendations.push('Fix linting errors to improve code quality');
    }
    
    if (metrics.linting.warnings > 10) {
      recommendations.push('Address linting warnings to improve code consistency');
    }
    
    if (metrics.typescript.errors > 0) {
      recommendations.push('Fix TypeScript errors to improve type safety');
    }
    
    if (metrics.complexity.averageComplexity > 5) {
      recommendations.push('Reduce code complexity by breaking down complex functions');
    }
    
    if (metrics.duplication.duplicationScore > 20) {
      recommendations.push('Reduce code duplication by extracting common functionality');
    }
    
    if (metrics.coverage.coverage < 50) {
      recommendations.push('Increase test coverage to improve code reliability');
    }
    
    if (metrics.dependencies.outdatedPackages > 5) {
      recommendations.push('Update outdated dependencies to improve security and performance');
    }
    
    return recommendations;
  }

  async run() {
    await this.init();
    
    try {
      const metrics = await this.analyzeCodeQuality();
      const report = await this.generateQualityReport(metrics);
      return report;
    } catch (error) {
      console.error('❌ Error in Code Quality Automation:', error);
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const automation = new CodeQualityAutomation();
  automation.run().catch(console.error);
}

module.exports = CodeQualityAutomation;