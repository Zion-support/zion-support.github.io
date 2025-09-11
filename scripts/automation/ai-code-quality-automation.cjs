#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class AICodeQualityAutomation {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      sourcePatterns: [
        'src/**/*.{js,jsx,ts,tsx}',
        'components/**/*.{js,jsx,ts,tsx}',
        'utils/**/*.{js,jsx,ts,tsx}',
        'pages/**/*.{js,jsx,ts,tsx}'
      ],
      ignorePatterns: [
        'node_modules/**',
        'dist/**',
        'build/**',
        '*.min.js',
        '*.bundle.js'
      ],
      reportDir: 'ai-quality-reports',
      logFile: 'logs/ai-code-quality.log'
    };
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [this.config.reportDir, 'logs'];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    console.log(logMessage.trim());
    
    if (fs.existsSync('logs')) {
      fs.appendFileSync(this.config.logFile, logMessage);
    }
  }

  async analyzeCodeQuality() {
    this.log('🤖 Starting AI-Powered Code Quality Analysis...');
    
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalFiles: 0,
          complexityIssues: 0,
          maintainabilityIssues: 0,
          coverageEstimate: 0,
          duplicationIssues: 0
        },
        details: {
          complexity: [],
          maintainability: [],
          coverage: [],
          duplication: []
        },
        suggestions: [],
        recommendations: []
      };

      // Analyze complexity
      await this.analyzeComplexity(report);
      
      // Analyze maintainability
      await this.analyzeMaintainability(report);
      
      // Analyze code coverage
      await this.analyzeCodeCoverage(report);
      
      // Analyze duplication
      await this.analyzeDuplication(report);
      
      // Generate intelligent suggestions
      await this.generateIntelligentSuggestions(report);
      
      // Generate final report
      await this.generateReport(report);
      
      this.log('✅ AI Code Quality Analysis completed successfully');
      return report;
      
    } catch (error) {
      this.log(`❌ Error during code quality analysis: ${error.message}`);
      throw error;
    }
  }

  async analyzeComplexity(report) {
    this.log('🔍 Analyzing code complexity...');
    
    const sourceFiles = this.getSourceFiles();
    report.summary.totalFiles = sourceFiles.length;
    
    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const complexity = this.calculateComplexity(content);
        
        if (complexity.score > 7) {
          const issue = {
            file,
            score: complexity.score,
            factors: complexity.factors,
            suggestions: this.generateComplexitySuggestions(complexity, content)
          };
          
          report.details.complexity.push(issue);
          report.summary.complexityIssues++;
        }
      } catch (error) {
        this.log(`Warning: Could not analyze ${file}: ${error.message}`);
      }
    }
  }

  calculateComplexity(content) {
    const factors = {
      cyclomatic: 0,
      nesting: 0,
      lines: content.split('\n').length,
      functions: (content.match(/function\s+\w+|=>\s*{|const\s+\w+\s*=\s*\(/g) || []).length,
      conditions: (content.match(/if\s*\(|else\s*if|switch\s*\(|case\s+/g) || []).length,
      loops: (content.match(/for\s*\(|while\s*\(|do\s*\{/g) || []).length
    };

    // Calculate cyclomatic complexity
    factors.cyclomatic = factors.conditions + factors.loops + 1;
    
    // Calculate nesting depth
    let maxNesting = 0;
    let currentNesting = 0;
    const lines = content.split('\n');
    
    for (const line of lines) {
      if (line.includes('{')) currentNesting++;
      if (line.includes('}')) currentNesting--;
      maxNesting = Math.max(maxNesting, currentNesting);
    }
    factors.nesting = maxNesting;

    // Calculate overall complexity score (1-10)
    const score = Math.min(10, Math.max(1, 
      (factors.cyclomatic / 10) * 3 + 
      (factors.nesting / 5) * 2 + 
      (factors.lines / 100) * 2 + 
      (factors.functions / 20) * 1.5
    ));

    return { score: Math.round(score * 10) / 10, factors };
  }

  generateComplexitySuggestions(complexity, content) {
    const suggestions = [];
    
    if (complexity.factors.cyclomatic > 10) {
      suggestions.push('Consider breaking down complex functions into smaller, focused functions');
      suggestions.push('Extract complex conditional logic into separate helper functions');
    }
    
    if (complexity.factors.nesting > 5) {
      suggestions.push('Reduce nesting depth by using early returns or guard clauses');
      suggestions.push('Extract deeply nested logic into separate functions');
    }
    
    if (complexity.factors.lines > 100) {
      suggestions.push('Consider splitting large files into smaller, focused modules');
      suggestions.push('Extract reusable logic into utility functions');
    }
    
    return suggestions;
  }

  async analyzeMaintainability(report) {
    this.log('🔧 Analyzing code maintainability...');
    
    const sourceFiles = this.getSourceFiles();
    
    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const maintainability = this.calculateMaintainability(content);
        
        if (maintainability.score < 6) {
          const issue = {
            file,
            score: maintainability.score,
            factors: maintainability.factors,
            suggestions: this.generateMaintainabilitySuggestions(maintainability, content)
          };
          
          report.details.maintainability.push(issue);
          report.summary.maintainabilityIssues++;
        }
      } catch (error) {
        this.log(`Warning: Could not analyze ${file}: ${error.message}`);
      }
    }
  }

  calculateMaintainability(content) {
    const factors = {
      longLines: 0,
      magicNumbers: 0,
      hardcodedStrings: 0,
      largeFunctions: 0,
      comments: 0
    };

    const lines = content.split('\n');
    
    for (const line of lines) {
      if (line.length > 120) factors.longLines++;
      if (/\b\d{3,}\b/.test(line)) factors.magicNumbers++;
      if (line.includes('"') && line.includes('http')) factors.hardcodedStrings++;
      if (line.includes('//') || line.includes('/*')) factors.comments++;
    }

    // Count large functions (more than 20 lines)
    const functionMatches = content.match(/function\s+\w+\s*\([^)]*\)\s*\{([\s\S]*?)\}/g) || [];
    factors.largeFunctions = functionMatches.filter(func => 
      func.split('\n').length > 20
    ).length;

    // Calculate maintainability score (1-10, higher is better)
    const score = Math.max(1, Math.min(10, 
      10 - (factors.longLines * 0.5) - 
      (factors.magicNumbers * 0.3) - 
      (factors.hardcodedStrings * 0.2) - 
      (factors.largeFunctions * 0.4) + 
      (factors.comments * 0.1)
    ));

    return { score: Math.round(score * 10) / 10, factors };
  }

  generateMaintainabilitySuggestions(maintainability, content) {
    const suggestions = [];
    
    if (maintainability.factors.longLines > 5) {
      suggestions.push('Break long lines into multiple lines for better readability');
      suggestions.push('Extract long expressions into variables with descriptive names');
    }
    
    if (maintainability.factors.magicNumbers > 3) {
      suggestions.push('Replace magic numbers with named constants');
      suggestions.push('Create configuration objects for numeric values');
    }
    
    if (maintainability.factors.largeFunctions > 2) {
      suggestions.push('Break large functions into smaller, focused functions');
      suggestions.push('Extract common logic into utility functions');
    }
    
    return suggestions;
  }

  async analyzeCodeCoverage(report) {
    this.log('📊 Analyzing code coverage...');
    
    try {
      // Estimate coverage based on test file presence
      const sourceFiles = this.getSourceFiles();
      const testFiles = glob.sync('**/*.{test,spec}.{js,jsx,ts,tsx}', { 
        ignore: this.config.ignorePatterns 
      });
      
      const coverageEstimate = this.estimateCoverage(testFiles, sourceFiles);
      report.summary.coverageEstimate = coverageEstimate;
      
      if (coverageEstimate < 70) {
        report.details.coverage.push({
          current: coverageEstimate,
          target: 80,
          suggestions: [
            'Add unit tests for untested components',
            'Implement integration tests for critical user flows',
            'Add test coverage for utility functions',
            'Consider using testing libraries like Jest or Vitest'
          ]
        });
      }
      
    } catch (error) {
      this.log(`Warning: Could not analyze coverage: ${error.message}`);
    }
  }

  estimateCoverage(testFiles, sourceFiles) {
    if (sourceFiles.length === 0) return 0;
    
    // Simple heuristic: assume each test file covers 2-3 source files
    const estimatedCoveredFiles = testFiles.length * 2.5;
    const coverage = Math.min(100, (estimatedCoveredFiles / sourceFiles.length) * 100);
    
    return Math.round(coverage);
  }

  async analyzeDuplication(report) {
    this.log('🔍 Analyzing code duplication...');
    
    const sourceFiles = this.getSourceFiles();
    const duplicates = [];
    
    for (let i = 0; i < sourceFiles.length; i++) {
      for (let j = i + 1; j < sourceFiles.length; j++) {
        try {
          const content1 = fs.readFileSync(sourceFiles[i], 'utf8');
          const content2 = fs.readFileSync(sourceFiles[j], 'utf8');
          
          const similarity = this.calculateSimilarity(content1, content2);
          
          if (similarity > 0.7) {
            duplicates.push({
              file1: sourceFiles[i],
              file2: sourceFiles[j],
              similarity: Math.round(similarity * 100),
              suggestions: [
                'Consider extracting common code into shared utilities',
                'Use composition over duplication',
                'Create reusable components for similar functionality'
              ]
            });
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
    
    report.details.duplication = duplicates;
    report.summary.duplicationIssues = duplicates.length;
  }

  calculateSimilarity(content1, content2) {
    // Simple similarity calculation based on common lines
    const lines1 = content1.split('\n').filter(line => line.trim().length > 0);
    const lines2 = content2.split('\n').filter(line => line.trim().length > 0);
    
    if (lines1.length === 0 || lines2.length === 0) return 0;
    
    const commonLines = lines1.filter(line => lines2.includes(line));
    const similarity = commonLines.length / Math.max(lines1.length, lines2.length);
    
    return similarity;
  }

  async generateIntelligentSuggestions(report) {
    this.log('🧠 Generating intelligent suggestions...');
    
    const suggestions = [];
    
    // Priority-based suggestions
    if (report.summary.complexityIssues > 10) {
      suggestions.push({
        priority: 'HIGH',
        category: 'Complexity',
        message: 'High number of complexity issues detected. Focus on refactoring complex functions first.',
        action: 'Schedule refactoring sessions for the most complex files'
      });
    }
    
    if (report.summary.maintainabilityIssues > 15) {
      suggestions.push({
        priority: 'MEDIUM',
        category: 'Maintainability',
        message: 'Multiple maintainability issues found. Improve code structure and readability.',
        action: 'Establish coding standards and review processes'
      });
    }
    
    if (report.summary.coverageEstimate < 60) {
      suggestions.push({
        priority: 'HIGH',
        category: 'Testing',
        message: 'Low test coverage detected. Prioritize testing for critical functionality.',
        action: 'Implement testing strategy and increase coverage targets'
      });
    }
    
    if (report.summary.duplicationIssues > 5) {
      suggestions.push({
        priority: 'MEDIUM',
        category: 'Duplication',
        message: 'Code duplication detected. Extract common functionality into shared utilities.',
        action: 'Identify and refactor duplicate code patterns'
      });
    }
    
    report.suggestions = suggestions;
  }

  async generateReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportFile = path.join(this.config.reportDir, `ai-code-quality-${timestamp}.json`);
    const summaryFile = path.join(this.config.reportDir, `ai-code-quality-summary-${timestamp}.md`);
    
    // Save detailed JSON report
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    // Generate human-readable summary
    const summary = this.generateHumanReadableSummary(report);
    fs.writeFileSync(summaryFile, summary);
    
    this.log(`📄 Detailed report saved to: ${reportFile}`);
    this.log(`📋 Summary report saved to: ${summaryFile}`);
    
    // Log summary to console
    console.log('\n' + '='.repeat(60));
    console.log('🤖 AI CODE QUALITY ANALYSIS SUMMARY');
    console.log('='.repeat(60));
    console.log(`📊 Total Files Analyzed: ${report.summary.totalFiles}`);
    console.log(`⚠️  Complexity Issues: ${report.summary.complexityIssues}`);
    console.log(`🔧 Maintainability Issues: ${report.summary.maintainabilityIssues}`);
    console.log(`📈 Estimated Coverage: ${report.summary.coverageEstimate}%`);
    console.log(`🔄 Duplication Issues: ${report.summary.duplicationIssues}`);
    console.log('='.repeat(60));
  }

  generateHumanReadableSummary(report) {
    let summary = `# AI Code Quality Analysis Report\n\n`;
    summary += `**Generated:** ${report.timestamp}\n\n`;
    
    summary += `## Summary\n\n`;
    summary += `- **Total Files Analyzed:** ${report.summary.totalFiles}\n`;
    summary += `- **Complexity Issues:** ${report.summary.complexityIssues}\n`;
    summary += `- **Maintainability Issues:** ${report.summary.maintainabilityIssues}\n`;
    summary += `- **Estimated Coverage:** ${report.summary.coverageEstimate}%\n`;
    summary += `- **Duplication Issues:** ${report.summary.duplicationIssues}\n\n`;
    
    if (report.suggestions.length > 0) {
      summary += `## Priority Recommendations\n\n`;
      report.suggestions.forEach(suggestion => {
        summary += `### ${suggestion.priority} Priority: ${suggestion.category}\n`;
        summary += `${suggestion.message}\n\n`;
        summary += `**Action:** ${suggestion.action}\n\n`;
      });
    }
    
    if (report.details.complexity.length > 0) {
      summary += `## Top Complexity Issues\n\n`;
      report.details.complexity.slice(0, 5).forEach(issue => {
        summary += `- **${issue.file}** (Score: ${issue.score})\n`;
        issue.suggestions.forEach(suggestion => {
          summary += `  - ${suggestion}\n`;
        });
        summary += `\n`;
      });
    }
    
    return summary;
  }

  getSourceFiles() {
    const files = [];
    
    this.config.sourcePatterns.forEach(pattern => {
      const matches = glob.sync(pattern, { ignore: this.config.ignorePatterns });
      files.push(...matches);
    });
    
    return files.filter(file => {
      const stats = fs.statSync(file);
      return stats.isFile() && stats.size > 0;
    });
  }

  async run() {
    try {
      this.log('🚀 Starting AI Code Quality Automation...');
      
      const report = await this.analyzeCodeQuality();
      
      this.log('✅ AI Code Quality Automation completed successfully');
      return report;
      
    } catch (error) {
      this.log(`❌ AI Code Quality Automation failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const automation = new AICodeQualityAutomation();
  automation.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = AICodeQualityAutomation;