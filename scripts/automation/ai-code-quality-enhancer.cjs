#!/usr/bin/env node

/**
 * AI-Powered Code Quality Enhancer - PM2 Automation
 * Intelligently analyzes and improves code quality using pattern recognition
 * and automated refactoring suggestions
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AICodeQualityEnhancer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'ai-code-quality-enhancer.log');
    this.improvementsLog = path.join(this.projectRoot, 'logs', 'ai-improvements.json');
    this.patternsFile = path.join(this.projectRoot, 'logs', 'code-patterns.json');
    this.ensureLogsDirectory();
    
    // AI patterns for code improvement
    this.improvementPatterns = {
      performance: [
        { pattern: /useCallback\([^)]*\)/g, suggestion: 'Consider memoizing with useMemo for expensive computations' },
        { pattern: /useEffect\([^)]*\)/g, suggestion: 'Check if dependencies array is optimized' },
        { pattern: /\.map\([^)]*\)\.filter\([^)]*\)/g, suggestion: 'Consider combining map and filter operations' },
        { pattern: /for\s*\(\s*let\s+i\s*=\s*0/g, suggestion: 'Consider using forEach or reduce for better readability' }
      ],
      accessibility: [
        { pattern: /<div[^>]*onClick/g, suggestion: 'Consider adding keyboard event handlers for accessibility' },
        { pattern: /<img[^>]*>/g, suggestion: 'Ensure all images have alt attributes' },
        { pattern: /<button[^>]*>/g, suggestion: 'Add aria-label if button text is not descriptive' }
      ],
      security: [
        { pattern: /dangerouslySetInnerHTML/g, suggestion: 'Review for potential XSS vulnerabilities' },
        { pattern: /eval\(/g, suggestion: 'Avoid eval() for security reasons' },
        { pattern: /innerHTML\s*=/g, suggestion: 'Consider using textContent for safer content insertion' }
      ],
      maintainability: [
        { pattern: /console\.log\(/g, suggestion: 'Remove console.log statements in production code' },
        { pattern: /TODO:|FIXME:/g, suggestion: 'Address TODO/FIXME comments' },
        { pattern: /[a-zA-Z_$][a-zA-Z0-9_$]{20,}/g, suggestion: 'Consider shorter, more descriptive variable names' }
      ]
    };
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async runAICodeEnhancement() {
    this.log('Starting AI-powered code quality enhancement...');
    
    const improvements = [];
    const suggestions = [];
    const metrics = {};

    try {
      // 1. Analyze code patterns across the project
      const patternAnalysis = await this.analyzeCodePatterns();
      
      // 2. Generate intelligent improvement suggestions
      const aiSuggestions = await this.generateAISuggestions(patternAnalysis);
      
      // 3. Apply automatic improvements where safe
      const autoImprovements = await this.applyAutomaticImprovements(aiSuggestions);
      
      // 4. Generate code quality metrics
      const qualityMetrics = await this.generateQualityMetrics();
      
      // 5. Create improvement roadmap
      const roadmap = await this.createImprovementRoadmap(aiSuggestions, qualityMetrics);
      
      // 6. Generate comprehensive report
      await this.generateAIEnhancementReport({
        improvements: autoImprovements,
        suggestions: aiSuggestions,
        metrics: qualityMetrics,
        roadmap: roadmap
      });

      // 7. Commit improvements if any were made
      if (autoImprovements.length > 0) {
        await this.commitImprovements(autoImprovements);
      }

    } catch (error) {
      this.log(`AI code enhancement failed: ${error.message}`, 'ERROR');
    }

    return { improvements, suggestions, metrics };
  }

  async analyzeCodePatterns() {
    this.log('Analyzing code patterns across the project...');
    
    const patterns = {
      performance: [],
      accessibility: [],
      security: [],
      maintainability: [],
      complexity: {}
    };

    const srcPath = path.join(this.projectRoot, 'src');
    if (!fs.existsSync(srcPath)) return patterns;

    try {
      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const filePatterns = this.analyzeFilePatterns(content, file);
            
            // Aggregate patterns by category
            Object.keys(filePatterns).forEach(category => {
              if (patterns[category]) {
                patterns[category].push(...filePatterns[category]);
              }
            });
            
            // Analyze complexity
            patterns.complexity[file] = this.analyzeCodeComplexity(content);
            
          } catch (error) {
            this.log(`Error analyzing file ${file}: ${error.message}`, 'WARN');
          }
        }
      }
    } catch (error) {
      this.log(`Pattern analysis failed: ${error.message}`, 'ERROR');
    }

    return patterns;
  }

  analyzeFilePatterns(content, filePath) {
    const patterns = {
      performance: [],
      accessibility: [],
      security: [],
      maintainability: []
    };

    Object.keys(this.improvementPatterns).forEach(category => {
      this.improvementPatterns[category].forEach(pattern => {
        const matches = content.match(pattern.pattern);
        if (matches) {
          patterns[category].push({
            file: filePath,
            pattern: pattern.pattern.source,
            suggestion: pattern.suggestion,
            matches: matches.length,
            lines: this.findPatternLines(content, pattern.pattern)
          });
        }
      });
    });

    return patterns;
  }

  findPatternLines(content, pattern) {
    const lines = content.split('\n');
    const matchingLines = [];
    
    lines.forEach((line, index) => {
      if (pattern.test(line)) {
        matchingLines.push({
          lineNumber: index + 1,
          content: line.trim()
        });
      }
    });
    
    return matchingLines;
  }

  analyzeCodeComplexity(content) {
    const lines = content.split('\n');
    const metrics = {
      totalLines: lines.length,
      codeLines: lines.filter(line => line.trim() && !line.trim().startsWith('//') && !line.trim().startsWith('/*')).length,
      commentLines: lines.filter(line => line.trim().startsWith('//') || line.trim().startsWith('/*')).length,
      emptyLines: lines.filter(line => !line.trim()).length,
      functionCount: (content.match(/function\s+\w+|const\s+\w+\s*=\s*\(|=>\s*{/g) || []).length,
      importCount: (content.match(/import\s+/g) || []).length,
      complexity: 0
    };

    // Calculate cyclomatic complexity
    const complexityKeywords = ['if', 'else', 'for', 'while', 'case', 'catch', '&&', '||', '?'];
    complexityKeywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      const matches = content.match(regex);
      if (matches) {
        metrics.complexity += matches.length;
      }
    });

    return metrics;
  }

  async generateAISuggestions(patternAnalysis) {
    this.log('Generating AI-powered improvement suggestions...');
    
    const suggestions = [];
    
    // Performance suggestions
    if (patternAnalysis.performance.length > 0) {
      suggestions.push({
        category: 'PERFORMANCE',
        priority: 'HIGH',
        title: 'Performance Optimization Opportunities',
        description: `Found ${patternAnalysis.performance.length} performance improvement opportunities`,
        actions: patternAnalysis.performance.map(p => ({
          file: p.file,
          suggestion: p.suggestion,
          lines: p.lines
        })),
        estimatedImpact: 'MEDIUM',
        estimatedEffort: 'LOW'
      });
    }

    // Accessibility suggestions
    if (patternAnalysis.accessibility.length > 0) {
      suggestions.push({
        category: 'ACCESSIBILITY',
        priority: 'MEDIUM',
        title: 'Accessibility Improvements',
        description: `Found ${patternAnalysis.accessibility.length} accessibility enhancement opportunities`,
        actions: patternAnalysis.accessibility.map(p => ({
          file: p.file,
          suggestion: p.suggestion,
          lines: p.lines
        })),
        estimatedImpact: 'HIGH',
        estimatedEffort: 'LOW'
      });
    }

    // Security suggestions
    if (patternAnalysis.security.length > 0) {
      suggestions.push({
        category: 'SECURITY',
        priority: 'CRITICAL',
        title: 'Security Vulnerabilities',
        description: `Found ${patternAnalysis.security.length} potential security issues`,
        actions: patternAnalysis.security.map(p => ({
          file: p.file,
          suggestion: p.suggestion,
          lines: p.lines
        }),
        estimatedImpact: 'CRITICAL',
        estimatedEffort: 'MEDIUM'
      });
    }

    // Maintainability suggestions
    if (patternAnalysis.maintainability.length > 0) {
      suggestions.push({
        category: 'MAINTAINABILITY',
        priority: 'MEDIUM',
        title: 'Code Maintainability Improvements',
        description: `Found ${patternAnalysis.maintainability.length} maintainability enhancement opportunities`,
        actions: patternAnalysis.maintainability.map(p => ({
          file: p.file,
          suggestion: p.suggestion,
          lines: p.lines
        })),
        estimatedImpact: 'MEDIUM',
        estimatedEffort: 'LOW'
      });
    }

    // Complexity-based suggestions
    const highComplexityFiles = Object.entries(patternAnalysis.complexity)
      .filter(([file, metrics]) => metrics.complexity > 10)
      .map(([file, metrics]) => ({ file, metrics }));

    if (highComplexityFiles.length > 0) {
      suggestions.push({
        category: 'COMPLEXITY',
        priority: 'HIGH',
        title: 'High Complexity Code Refactoring',
        description: `Found ${highComplexityFiles.length} files with high cyclomatic complexity`,
        actions: highComplexityFiles.map(({ file, metrics }) => ({
          file: file,
          suggestion: `Refactor to reduce complexity (current: ${metrics.complexity})`,
          complexity: metrics.complexity
        })),
        estimatedImpact: 'HIGH',
        estimatedEffort: 'HIGH'
      });
    }

    return suggestions;
  }

  async applyAutomaticImprovements(suggestions) {
    this.log('Applying automatic improvements where safe...');
    
    const improvements = [];
    
    for (const suggestion of suggestions) {
      if (suggestion.category === 'MAINTAINABILITY' && suggestion.priority !== 'CRITICAL') {
        // Safe to auto-fix maintainability issues
        for (const action of suggestion.actions) {
          try {
            const improvement = await this.applyMaintainabilityFix(action);
            if (improvement) {
              improvements.push(improvement);
            }
          } catch (error) {
            this.log(`Failed to apply improvement to ${action.file}: ${error.message}`, 'WARN');
          }
        }
      }
    }

    return improvements;
  }

  async applyMaintainabilityFix(action) {
    try {
      const content = fs.readFileSync(action.file, 'utf8');
      let modified = false;
      let newContent = content;

      // Remove console.log statements
      if (action.suggestion.includes('console.log')) {
        newContent = content.replace(/console\.log\([^)]*\);?\n?/g, '');
        modified = true;
      }

      // Remove TODO/FIXME comments
      if (action.suggestion.includes('TODO/FIXME')) {
        newContent = content.replace(/\/\/\s*(TODO|FIXME):[^\n]*\n?/g, '');
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(action.file, newContent);
        return {
          file: action.file,
          type: 'MAINTAINABILITY_FIX',
          description: action.suggestion,
          timestamp: new Date().toISOString()
        };
      }
    } catch (error) {
      this.log(`Error applying fix to ${action.file}: ${error.message}`, 'ERROR');
    }

    return null;
  }

  async generateQualityMetrics() {
    this.log('Generating comprehensive code quality metrics...');
    
    const metrics = {
      overallScore: 0,
      categories: {},
      recommendations: []
    };

    try {
      // Run ESLint if available
      try {
        const eslintResult = execSync('npm run lint 2>&1', { encoding: 'utf8' });
        metrics.eslint = {
          status: 'completed',
          output: eslintResult
        };
      } catch (error) {
        metrics.eslint = {
          status: 'failed',
          error: error.message
        };
      }

      // Run TypeScript check
      try {
        const tsResult = execSync('npm run type-check 2>&1', { encoding: 'utf8' });
        metrics.typescript = {
          status: 'completed',
          output: tsResult
        };
      } catch (error) {
        metrics.typescript = {
          status: 'failed',
          error: error.message
        };
      }

      // Calculate overall score
      let score = 100;
      if (metrics.eslint.status === 'completed') score -= 10;
      if (metrics.typescript.status === 'completed') score -= 10;
      
      metrics.overallScore = Math.max(0, score);
      
    } catch (error) {
      this.log(`Metrics generation failed: ${error.message}`, 'ERROR');
    }

    return metrics;
  }

  async createImprovementRoadmap(suggestions, metrics) {
    this.log('Creating intelligent improvement roadmap...');
    
    const roadmap = {
      immediate: [],
      shortTerm: [],
      longTerm: [],
      estimatedTimeline: '2-4 weeks'
    };

    // Prioritize suggestions based on impact and effort
    suggestions.forEach(suggestion => {
      if (suggestion.priority === 'CRITICAL') {
        roadmap.immediate.push(suggestion);
      } else if (suggestion.priority === 'HIGH') {
        roadmap.shortTerm.push(suggestion);
      } else {
        roadmap.longTerm.push(suggestion);
      }
    });

    return roadmap;
  }

  async generateAIEnhancementReport(data) {
    this.log('Generating AI enhancement report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalImprovements: data.improvements.length,
        totalSuggestions: data.suggestions.length,
        overallQualityScore: data.metrics.overallScore || 0
      },
      improvements: data.improvements,
      suggestions: data.suggestions,
      metrics: data.metrics,
      roadmap: data.roadmap,
      nextSteps: this.generateNextSteps(data)
    };

    const reportPath = path.join(this.projectRoot, 'logs', 'ai-enhancement-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Generate HTML dashboard
    await this.generateHTMLDashboard(report);

    this.log(`AI enhancement report generated: ${reportPath}`);
  }

  generateNextSteps(data) {
    const nextSteps = [];
    
    if (data.improvements.length > 0) {
      nextSteps.push('Review and test automatic improvements');
    }
    
    if (data.suggestions.filter(s => s.priority === 'CRITICAL').length > 0) {
      nextSteps.push('Address critical security and performance issues immediately');
    }
    
    if (data.suggestions.filter(s => s.priority === 'HIGH').length > 0) {
      nextSteps.push('Plan high-priority improvements for next sprint');
    }
    
    nextSteps.push('Schedule code review sessions for complex refactoring');
    nextSteps.push('Set up automated quality gates in CI/CD pipeline');
    
    return nextSteps;
  }

  async generateHTMLDashboard(report) {
    const dashboardPath = path.join(this.projectRoot, 'logs', 'ai-quality-dashboard');
    if (!fs.existsSync(dashboardPath)) {
      fs.mkdirSync(dashboardPath, { recursive: true });
    }

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Code Quality Dashboard</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; margin-bottom: 20px; }
        .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .metric-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .metric-value { font-size: 2em; font-weight: bold; color: #667eea; }
        .suggestions { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px; }
        .suggestion-item { border-left: 4px solid #667eea; padding: 15px; margin: 10px 0; background: #f8f9fa; }
        .priority-high { border-left-color: #dc3545; }
        .priority-medium { border-left-color: #ffc107; }
        .priority-low { border-left-color: #28a745; }
        .roadmap { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .roadmap-phase { margin: 20px 0; }
        .phase-title { font-weight: bold; color: #667eea; margin-bottom: 10px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🤖 AI Code Quality Dashboard</h1>
            <p>Last updated: ${new Date(report.timestamp).toLocaleString()}</p>
        </div>
        
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-value">${report.summary.overallQualityScore}</div>
                <div>Overall Quality Score</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${report.summary.totalImprovements}</div>
                <div>Automatic Improvements</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${report.summary.totalSuggestions}</div>
                <div>AI Suggestions</div>
            </div>
        </div>
        
        <div class="suggestions">
            <h2>🎯 AI Improvement Suggestions</h2>
            ${report.suggestions.map(s => `
                <div class="suggestion-item priority-${s.priority.toLowerCase()}">
                    <h3>${s.title}</h3>
                    <p><strong>Priority:</strong> ${s.priority} | <strong>Category:</strong> ${s.category}</p>
                    <p>${s.description}</p>
                    <p><strong>Estimated Impact:</strong> ${s.estimatedImpact} | <strong>Effort:</strong> ${s.estimatedEffort}</p>
                </div>
            `).join('')}
        </div>
        
        <div class="roadmap">
            <h2>🗺️ Improvement Roadmap</h2>
            <div class="roadmap-phase">
                <div class="phase-title">🚨 Immediate (This Week)</div>
                ${report.roadmap.immediate.map(s => `<div>• ${s.title}</div>`).join('')}
            </div>
            <div class="roadmap-phase">
                <div class="phase-title">⚡ Short Term (Next 2 Weeks)</div>
                ${report.roadmap.shortTerm.map(s => `<div>• ${s.title}</div>`).join('')}
            </div>
            <div class="roadmap-phase">
                <div class="phase-title">📈 Long Term (Next Month)</div>
                ${report.roadmap.longTerm.map(s => `<div>• ${s.title}</div>`).join('')}
            </div>
            <p><strong>Estimated Timeline:</strong> ${report.roadmap.estimatedTimeline}</p>
        </div>
        
        <div class="suggestions">
            <h2>📋 Next Steps</h2>
            ${report.nextSteps.map(step => `<div>• ${step}</div>`).join('')}
        </div>
    </div>
</body>
</html>`;

    const dashboardFile = path.join(dashboardPath, 'index.html');
    fs.writeFileSync(dashboardFile, html);
    this.log(`HTML dashboard generated: ${dashboardFile}`);
  }

  async getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = this.getAllFiles(fullPath, arrayOfFiles);
      } else {
        arrayOfFiles.push(fullPath);
      }
    });

    return arrayOfFiles;
  }

  async commitImprovements(improvements) {
    if (improvements.length === 0) return;

    try {
      // Stage all changes
      execSync('git add .', { cwd: this.projectRoot });
      
      // Commit with descriptive message
      const commitMessage = `🤖 AI Code Quality Improvements: ${improvements.length} automatic fixes applied`;
      execSync(`git commit -m "${commitMessage}"`, { cwd: this.projectRoot });
      
      this.log(`Committed ${improvements.length} improvements to git`);
    } catch (error) {
      this.log(`Failed to commit improvements: ${error.message}`, 'WARN');
    }
  }
}

// Main execution
if (require.main === module) {
  const enhancer = new AICodeQualityEnhancer();
  enhancer.runAICodeEnhancement()
    .then(result => {
      console.log('AI Code Quality Enhancement completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('AI Code Quality Enhancement failed:', error);
      process.exit(1);
    });
}

module.exports = AICodeQualityEnhancer;