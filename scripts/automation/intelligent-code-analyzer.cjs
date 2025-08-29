#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧠 Starting Intelligent Code Analyzer...');

// Get automation interval from environment variable (default: 2 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours

class IntelligentCodeAnalyzer {
  constructor() {
    this.analysisResults = {
      timestamp: new Date().toISOString(),
      improvements: [],
      patterns: [],
      suggestions: [],
      metrics: {}
    };
    
    this.codePatterns = {
      performance: [
        { pattern: /useMemo\(/g, suggestion: 'Consider if useMemo is necessary for performance', priority: 'medium' },
        { pattern: /useCallback\(/g, suggestion: 'Consider if useCallback is necessary for performance', priority: 'medium' },
        { pattern: /\.map\(.*=>.*\.map\(/g, suggestion: 'Nested maps detected - consider using flatMap or reduce', priority: 'high' },
        { pattern: /\.filter\(.*=>.*\.filter\(/g, suggestion: 'Nested filters detected - combine conditions', priority: 'high' }
      ],
      accessibility: [
        { pattern: /<div.*onClick/g, suggestion: 'Consider using button or role="button" for clickable divs', priority: 'high' },
        { pattern: /<img.*src=/g, suggestion: 'Ensure all images have alt attributes for accessibility', priority: 'high' },
        { pattern: /aria-label=/g, suggestion: 'Good accessibility practice detected', priority: 'info' }
      ],
      security: [
        { pattern: /dangerouslySetInnerHTML/g, suggestion: 'Security risk: validate HTML content before rendering', priority: 'critical' },
        { pattern: /eval\(/g, suggestion: 'Security risk: eval() can execute arbitrary code', priority: 'critical' },
        { pattern: /innerHTML\s*=/g, suggestion: 'Security risk: innerHTML can lead to XSS attacks', priority: 'high' }
      ],
      bestPractices: [
        { pattern: /console\.log\(/g, suggestion: 'Remove console.log statements in production code', priority: 'medium' },
        { pattern: /TODO:/g, suggestion: 'TODO comment detected - consider addressing', priority: 'low' },
        { pattern: /FIXME:/g, suggestion: 'FIXME comment detected - high priority to address', priority: 'high' }
      ]
    };
  }

  async analyzeCodeQuality() {
    try {
      console.log('🔍 Analyzing code quality patterns...');
      
      // Analyze source code files
      const sourceFiles = this.findSourceFiles('./src');
      const analysis = await this.performCodeAnalysis(sourceFiles);
      
      // Generate improvement suggestions
      const suggestions = this.generateSuggestions(analysis);
      
      // Apply automatic fixes where safe
      await this.applySafeFixes(suggestions);
      
      // Generate comprehensive report
      this.generateReport(analysis, suggestions);
      
      console.log('✅ Intelligent code analysis completed');
      
    } catch (error) {
      console.error('❌ Intelligent code analysis failed:', error.message);
    }
  }

  findSourceFiles(directory) {
    const files = [];
    
    const scanDirectory = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (item.match(/\.(js|jsx|ts|tsx)$/)) {
          files.push(fullPath);
        }
      });
    };
    
    scanDirectory(directory);
    return files;
  }

  async performCodeAnalysis(files) {
    const analysis = {
      totalFiles: files.length,
      patterns: {},
      metrics: {
        linesOfCode: 0,
        complexity: 0,
        maintainability: 0
      }
    };

    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const fileAnalysis = this.analyzeFile(file, content);
        
        // Aggregate patterns
        Object.keys(fileAnalysis.patterns).forEach(category => {
          if (!analysis.patterns[category]) {
            analysis.patterns[category] = [];
          }
          analysis.patterns[category].push(...fileAnalysis.patterns[category]);
        });
        
        // Aggregate metrics
        analysis.metrics.linesOfCode += fileAnalysis.metrics.linesOfCode;
        analysis.metrics.complexity += fileAnalysis.metrics.complexity;
        
      } catch (error) {
        console.log(`⚠️  Could not analyze ${file}: ${error.message}`);
      }
    });

    // Calculate maintainability index
    analysis.metrics.maintainability = this.calculateMaintainabilityIndex(analysis.metrics);
    
    return analysis;
  }

  analyzeFile(filePath, content) {
    const analysis = {
      file: filePath,
      patterns: {},
      metrics: {
        linesOfCode: content.split('\n').length,
        complexity: 0
      }
    };

    // Analyze patterns by category
    Object.keys(this.codePatterns).forEach(category => {
      analysis.patterns[category] = [];
      
      this.codePatterns[category].forEach(pattern => {
        const matches = content.match(pattern.pattern);
        if (matches) {
          analysis.patterns[category].push({
            pattern: pattern.pattern.source,
            suggestion: pattern.suggestion,
            priority: pattern.priority,
            count: matches.length,
            lines: this.findPatternLines(content, pattern.pattern)
          });
        }
      });
    });

    // Calculate cyclomatic complexity
    analysis.metrics.complexity = this.calculateCyclomaticComplexity(content);
    
    return analysis;
  }

  findPatternLines(content, pattern) {
    const lines = content.split('\n');
    const matchingLines = [];
    
    lines.forEach((line, index) => {
      if (pattern.test(line)) {
        matchingLines.push(index + 1);
      }
    });
    
    return matchingLines;
  }

  calculateCyclomaticComplexity(content) {
    let complexity = 1; // Base complexity
    
    // Count decision points
    const decisionPatterns = [
      /if\s*\(/g,
      /else\s*if\s*\(/g,
      /for\s*\(/g,
      /while\s*\(/g,
      /switch\s*\(/g,
      /case\s+/g,
      /catch\s*\(/g,
      /\|\||&&/g,
      /\?/g
    ];
    
    decisionPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        complexity += matches.length;
      }
    });
    
    return complexity;
  }

  calculateMaintainabilityIndex(metrics) {
    // Simplified maintainability index calculation
    const avgComplexity = metrics.complexity / Math.max(metrics.totalFiles, 1);
    const locFactor = Math.min(metrics.linesOfCode / 1000, 1);
    
    let maintainability = 100;
    maintainability -= avgComplexity * 5;
    maintainability -= locFactor * 20;
    
    return Math.max(0, Math.min(100, maintainability));
  }

  generateSuggestions(analysis) {
    const suggestions = [];
    
    Object.keys(analysis.patterns).forEach(category => {
      analysis.patterns[category].forEach(pattern => {
        suggestions.push({
          category,
          pattern: pattern.pattern,
          suggestion: pattern.suggestion,
          priority: pattern.priority,
          count: pattern.count,
          files: pattern.files
        });
      });
    });
    
    // Sort by priority
    const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1, info: 0 };
    suggestions.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
    
    return suggestions;
  }

  async applySafeFixes(suggestions) {
    console.log('🔧 Applying safe automatic fixes...');
    
    let fixesApplied = 0;
    
    suggestions.forEach(suggestion => {
      if (suggestion.priority === 'low' && suggestion.category === 'bestPractices') {
        // Apply safe fixes like removing console.log statements
        if (suggestion.pattern.includes('console.log')) {
          try {
            this.removeConsoleLogs(suggestion.files);
            fixesApplied++;
          } catch (error) {
            console.log(`⚠️  Could not apply fix to ${suggestion.files}: ${error.message}`);
          }
        }
      }
    });
    
    if (fixesApplied > 0) {
      console.log(`✅ Applied ${fixesApplied} safe fixes automatically`);
    }
  }

  removeConsoleLogs(files) {
    files.forEach(file => {
      try {
        let content = fs.readFileSync(file, 'utf8');
        const originalContent = content;
        
        // Remove console.log statements
        content = content.replace(/console\.log\([^)]*\);?\s*/g, '');
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content);
          console.log(`✅ Removed console.log statements from ${file}`);
        }
      } catch (error) {
        console.log(`⚠️  Could not modify ${file}: ${error.message}`);
      }
    });
  }

  generateReport(analysis, suggestions) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: analysis.totalFiles,
        totalSuggestions: suggestions.length,
        criticalIssues: suggestions.filter(s => s.priority === 'critical').length,
        highPriorityIssues: suggestions.filter(s => s.priority === 'high').length,
        maintainabilityScore: analysis.metrics.maintainability
      },
      analysis: analysis,
      suggestions: suggestions,
      recommendations: this.generateRecommendations(analysis, suggestions)
    };

    // Save detailed report
    const reportPath = path.join(process.cwd(), 'intelligent-code-analysis-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Save human-readable summary
    const summaryPath = path.join(process.cwd(), 'intelligent-code-analysis-summary.txt');
    const summary = this.generateHumanReadableSummary(report);
    fs.writeFileSync(summaryPath, summary);
    
    console.log(`📊 Analysis report saved to ${reportPath}`);
    console.log(`📋 Summary saved to ${summaryPath}`);
  }

  generateRecommendations(analysis, suggestions) {
    const recommendations = [];
    
    if (analysis.metrics.maintainability < 50) {
      recommendations.push({
        priority: 'high',
        category: 'maintainability',
        title: 'Low Maintainability Score',
        description: 'Code maintainability is below recommended threshold. Consider refactoring complex functions and reducing cyclomatic complexity.',
        actions: [
          'Break down complex functions into smaller, focused functions',
          'Extract repeated logic into utility functions',
          'Consider using design patterns to reduce complexity'
        ]
      });
    }
    
    const criticalSecurityIssues = suggestions.filter(s => s.priority === 'critical' && s.category === 'security');
    if (criticalSecurityIssues.length > 0) {
      recommendations.push({
        priority: 'critical',
        category: 'security',
        title: 'Critical Security Issues Detected',
        description: 'Critical security vulnerabilities found in code. Immediate action required.',
        actions: [
          'Review and fix all security-related patterns',
          'Implement proper input validation',
          'Use security-focused libraries and patterns'
        ]
      });
    }
    
    return recommendations;
  }

  generateHumanReadableSummary(report) {
    let summary = '🧠 Intelligent Code Analysis Summary\n';
    summary += '=====================================\n\n';
    
    summary += `📊 Analysis Overview:\n`;
    summary += `  - Files analyzed: ${report.summary.totalFiles}\n`;
    summary += `  - Total suggestions: ${report.summary.totalSuggestions}\n`;
    summary += `  - Critical issues: ${report.summary.criticalIssues}\n`;
    summary += `  - High priority issues: ${report.summary.highPriorityIssues}\n`;
    summary += `  - Maintainability score: ${report.summary.maintainabilityScore}/100\n\n`;
    
    if (report.recommendations.length > 0) {
      summary += `🚨 Priority Recommendations:\n`;
      report.recommendations.forEach((rec, index) => {
        summary += `  ${index + 1}. ${rec.title} (${rec.priority.toUpperCase()})\n`;
        summary += `     ${rec.description}\n`;
        summary += `     Actions: ${rec.actions.join(', ')}\n\n`;
      });
    }
    
    if (report.suggestions.length > 0) {
      summary += `💡 Top Suggestions:\n`;
      report.suggestions.slice(0, 10).forEach((suggestion, index) => {
        summary += `  ${index + 1}. [${suggestion.priority.toUpperCase()}] ${suggestion.suggestion}\n`;
        summary += `     Category: ${suggestion.category}, Count: ${suggestion.count}\n\n`;
      });
    }
    
    return summary;
  }
}

// Main execution
async function runIntelligentCodeAnalyzer() {
  try {
    console.log(`🧠 Running intelligent code analyzer at ${new Date().toISOString()}`);
    
    const analyzer = new IntelligentCodeAnalyzer();
    await analyzer.analyzeCodeQuality();
    
    console.log('✅ Intelligent code analyzer completed successfully');
    
  } catch (error) {
    console.error('❌ Intelligent code analyzer failed:', error.message);
  }
}

// Run the analyzer
runIntelligentCodeAnalyzer();

// Set up continuous operation
setInterval(runIntelligentCodeAnalyzer, AUTOMATION_INTERVAL);

console.log(`🧠 Intelligent code analyzer will run every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);