#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class CodeQualityMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'quality-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async checkCodeComplexity() {
    this.log('🔍 Checking code complexity...');
    try {
      const sourceFiles = this.findSourceFiles();
      let totalComplexity = 0;
      let complexFiles = 0;

      for (const file of sourceFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const complexity = this.calculateComplexity(content);
          totalComplexity += complexity;
          
          if (complexity > 10) {
            complexFiles++;
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }

      this.log(`🔍 Total complexity: ${totalComplexity}`);
      this.log(`🔍 Complex files (>10): ${complexFiles}`);

      return {
        totalComplexity,
        complexFiles,
        status: complexFiles === 0 ? 'good' : 'needs_improvement'
      };
    } catch (error) {
      this.log(`❌ Code complexity check failed: ${error.message}`);
      return { error: error.message };
    }
  }

  calculateComplexity(content) {
    // Simple complexity calculation based on control flow statements
    const patterns = [
      /if\s*\(/g,
      /else\s+if\s*\(/g,
      /for\s*\(/g,
      /while\s*\(/g,
      /switch\s*\(/g,
      /case\s+/g,
      /catch\s*\(/g,
      /&&/g,
      /\|\|/g
    ];

    let complexity = 1; // Base complexity
    patterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        complexity += matches.length;
      }
    });

    return complexity;
  }

  async checkCodeDuplication() {
    this.log('🔍 Checking code duplication...');
    try {
      const sourceFiles = this.findSourceFiles();
      const duplicates = [];

      // Simple duplication detection based on function signatures
      const functions = new Map();

      for (const file of sourceFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const fileFunctions = this.extractFunctions(content);
          
          fileFunctions.forEach(func => {
            const key = `${func.name}(${func.params.length})`;
            if (functions.has(key)) {
              duplicates.push({
                function: func.name,
                file1: functions.get(key).file,
                file2: path.relative(this.projectRoot, file),
                params: func.params.length
              });
            } else {
              functions.set(key, { file: path.relative(this.projectRoot, file), func });
            }
          });
        } catch (error) {
          // Skip files that can't be read
        }
      }

      this.log(`🔍 Found ${duplicates.length} potential duplicates`);

      return {
        duplicates,
        count: duplicates.length,
        status: duplicates.length === 0 ? 'good' : 'needs_review'
      };
    } catch (error) {
      this.log(`❌ Code duplication check failed: ${error.message}`);
      return { error: error.message };
    }
  }

  extractFunctions(content) {
    const functions = [];
    
    // Match function declarations
    const functionRegex = /function\s+(\w+)\s*\(([^)]*)\)/g;
    let match;
    
    while ((match = functionRegex.exec(content)) !== null) {
      const params = match[2].split(',').map(p => p.trim()).filter(p => p);
      functions.push({
        name: match[1],
        params: params
      });
    }

    // Match arrow functions
    const arrowFunctionRegex = /const\s+(\w+)\s*=\s*\(([^)]*)\)\s*=>/g;
    while ((match = arrowFunctionRegex.exec(content)) !== null) {
      const params = match[2].split(',').map(p => p.trim()).filter(p => p);
      functions.push({
        name: match[1],
        params: params
      });
    }

    return functions;
  }

  async checkCodeStyle() {
    this.log('🔍 Checking code style...');
    try {
      const result = execSync('npm run lint', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000
      });
      
      this.log('✅ Code style check passed');
      return {
        errors: 0,
        warnings: 0,
        status: 'good'
      };
    } catch (error) {
      const errorOutput = error.stdout || error.stderr || error.message;
      const errors = (errorOutput.match(/error/g) || []).length;
      const warnings = (errorOutput.match(/warning/g) || []).length;
      
      this.log(`❌ Found ${errors} errors and ${warnings} warnings`);
      return {
        errors,
        warnings,
        status: errors > 0 ? 'failed' : 'warning'
      };
    }
  }

  async checkTestCoverage() {
    this.log('🔍 Checking test coverage...');
    try {
      const result = execSync('npm run test:coverage', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 120000
      });
      
      // Extract coverage percentage from output
      const coverageMatch = result.match(/All files\s+\|\s+(\d+\.\d+)/);
      const coverage = coverageMatch ? parseFloat(coverageMatch[1]) : 0;
      
      this.log(`🔍 Test coverage: ${coverage}%`);
      
      return {
        coverage,
        status: coverage >= 80 ? 'good' : coverage >= 60 ? 'fair' : 'needs_improvement'
      };
    } catch (error) {
      this.log(`❌ Test coverage check failed: ${error.message}`);
      return { error: error.message };
    }
  }

  async checkDocumentation() {
    this.log('🔍 Checking documentation...');
    try {
      const sourceFiles = this.findSourceFiles();
      let documentedFunctions = 0;
      let totalFunctions = 0;

      for (const file of sourceFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const functions = this.extractFunctions(content);
          totalFunctions += functions.length;

          // Check for JSDoc comments
          functions.forEach(func => {
            const funcRegex = new RegExp(`function\\s+${func.name}\\s*\\(`, 'g');
            const match = funcRegex.exec(content);
            if (match) {
              const beforeFunction = content.substring(0, match.index);
              if (beforeFunction.includes('/**') && beforeFunction.includes('*/')) {
                documentedFunctions++;
              }
            }
          });
        } catch (error) {
          // Skip files that can't be read
        }
      }

      const documentationPercentage = totalFunctions > 0 ? (documentedFunctions / totalFunctions) * 100 : 100;
      
      this.log(`🔍 Documentation coverage: ${documentationPercentage.toFixed(1)}%`);

      return {
        documentedFunctions,
        totalFunctions,
        percentage: documentationPercentage,
        status: documentationPercentage >= 80 ? 'good' : documentationPercentage >= 60 ? 'fair' : 'needs_improvement'
      };
    } catch (error) {
      this.log(`❌ Documentation check failed: ${error.message}`);
      return { error: error.message };
    }
  }

  findSourceFiles() {
    const sourceFiles = [];
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    
    const scanDirectory = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          
          if (stats.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            scanDirectory(filePath);
          } else if (stats.isFile()) {
            const ext = path.extname(file);
            if (extensions.includes(ext)) {
              sourceFiles.push(filePath);
            }
          }
        });
      } catch (error) {
        // Skip directories that can't be read
      }
    };

    scanDirectory(this.projectRoot);
    return sourceFiles;
  }

  async generateQualityReport() {
    this.log('📊 Generating quality report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      analysis: {
        complexity: await this.checkCodeComplexity(),
        duplication: await this.checkCodeDuplication(),
        style: await this.checkCodeStyle(),
        testCoverage: await this.checkTestCoverage(),
        documentation: await this.checkDocumentation()
      }
    };

    // Generate recommendations
    report.recommendations = this.generateRecommendations(report.analysis);

    const reportFile = path.join(this.reportsDir, `quality-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📄 Quality report generated: ${reportFile}`);
    
    return report;
  }

  generateRecommendations(analysis) {
    const recommendations = [];

    if (analysis.complexity && analysis.complexity.complexFiles > 0) {
      recommendations.push({
        type: 'code_complexity',
        priority: 'medium',
        message: `Found ${analysis.complexity.complexFiles} complex files. Consider refactoring.`,
        impact: 'Improves maintainability'
      });
    }

    if (analysis.duplication && analysis.duplication.count > 0) {
      recommendations.push({
        type: 'code_duplication',
        priority: 'medium',
        message: `Found ${analysis.duplication.count} potential duplicates. Consider extracting common code.`,
        impact: 'Reduces maintenance overhead'
      });
    }

    if (analysis.style && analysis.style.errors > 0) {
      recommendations.push({
        type: 'code_style',
        priority: 'low',
        message: `Found ${analysis.style.errors} style errors. Run 'npm run lint:fix' to fix them.`,
        impact: 'Improves code consistency'
      });
    }

    if (analysis.testCoverage && analysis.testCoverage.coverage < 80) {
      recommendations.push({
        type: 'test_coverage',
        priority: 'medium',
        message: `Test coverage is ${analysis.testCoverage.coverage}%. Aim for at least 80%.`,
        impact: 'Improves code reliability'
      });
    }

    if (analysis.documentation && analysis.documentation.percentage < 80) {
      recommendations.push({
        type: 'documentation',
        priority: 'low',
        message: `Documentation coverage is ${analysis.documentation.percentage.toFixed(1)}%. Consider adding more JSDoc comments.`,
        impact: 'Improves code understanding'
      });
    }

    return recommendations;
  }

  async run() {
    this.log('🔍 Starting Code Quality Monitor...');
    
    try {
      const report = await this.generateQualityReport();
      
      this.log('🎉 Code quality monitoring completed!');
      this.log(`🔍 Code complexity: ${report.analysis.complexity.totalComplexity || 0}`);
      this.log(`🔍 Code duplication: ${report.analysis.duplication.count || 0}`);
      this.log(`🔍 Style errors: ${report.analysis.style.errors || 0}`);
      this.log(`🔍 Test coverage: ${report.analysis.testCoverage.coverage || 0}%`);
      this.log(`🔍 Documentation: ${report.analysis.documentation.percentage || 0}%`);
      this.log(`💡 Recommendations: ${report.recommendations.length}`);
      
      return report;
    } catch (error) {
      this.log(`💥 Code quality monitoring failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the monitor if this file is executed directly
if (require.main === module) {
  const monitor = new CodeQualityMonitor();
  monitor.run()
    .then((report) => {
      console.log('\n🎉 Code Quality Monitor completed successfully!');
      console.log(`🔍 Code complexity: ${report.analysis.complexity.totalComplexity || 0}`);
      console.log(`💡 Recommendations: ${report.recommendations.length}`);
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Code Quality Monitor failed:', error.message);
      process.exit(1);
    });
}

module.exports = CodeQualityMonitor;