#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const chokidar = require('chokidar');

class CodeReviewAssistant {
  constructor() {
    this.reviewResults = new Map();
    this.codeStandards = new Map();
    this.reviewHistory = [];
    this.logFile = path.join(__dirname, 'logs', 'code-review-assistant.log');
    this.ensureLogDirectory();
    this.loadCodeStandards();
    this.setupFileWatcher();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  loadCodeStandards() {
    // Load predefined code standards and best practices
    this.codeStandards.set('react', {
      patterns: [
        {
          name: 'hook-rules',
          pattern: /use[A-Z][a-zA-Z]*/g,
          description: 'React Hooks usage',
          rules: [
            'Hooks must be called at the top level',
            'Hooks cannot be called inside loops, conditions, or nested functions',
            'Hooks can only be called from React function components or custom hooks'
          ]
        },
        {
          name: 'component-structure',
          pattern: /function\s+\w+\s*\([^)]*\)\s*\{/g,
          description: 'Component function structure',
          rules: [
            'Use descriptive component names',
            'Keep components focused and single-purpose',
            'Extract complex logic into custom hooks'
          ]
        },
        {
          name: 'jsx-patterns',
          pattern: /<[A-Z][a-zA-Z]*/g,
          description: 'JSX component usage',
          rules: [
            'Use PascalCase for component names',
            'Prefer functional components over class components',
            'Use proper JSX syntax and attributes'
          ]
        }
      ]
    });

    this.codeStandards.set('typescript', {
      patterns: [
        {
          name: 'type-annotations',
          pattern: /: [A-Z][a-zA-Z]*[<>\[\]{}]*/g,
          description: 'TypeScript type annotations',
          rules: [
            'Use specific types instead of any',
            'Leverage union types for better type safety',
            'Use interfaces for object shapes',
            'Prefer readonly properties when possible'
          ]
        },
        {
          name: 'interface-usage',
          pattern: /interface\s+\w+/g,
          description: 'Interface definitions',
          rules: [
            'Use interfaces for object shapes',
            'Extend interfaces when appropriate',
            'Use descriptive interface names'
          ]
        },
        {
          name: 'generic-usage',
          pattern: /<[A-Z][a-zA-Z]*>/g,
          description: 'Generic type usage',
          rules: [
            'Use generics for reusable components',
            'Provide meaningful generic type names',
            'Use constraints when appropriate'
          ]
        }
      ]
    });

    this.codeStandards.set('javascript', {
      patterns: [
        {
          name: 'function-declarations',
          pattern: /function\s+\w+\s*\([^)]*\)/g,
          description: 'Function declarations',
          rules: [
            'Use descriptive function names',
            'Keep functions small and focused',
            'Use default parameters when appropriate',
            'Return early to reduce nesting'
          ]
        },
        {
          name: 'variable-declarations',
          pattern: /(const|let|var)\s+\w+/g,
          description: 'Variable declarations',
          rules: [
            'Prefer const over let',
            'Avoid var declarations',
            'Use descriptive variable names',
            'Group related variables together'
          ]
        },
        {
          name: 'array-methods',
          pattern: /\.(map|filter|reduce|find|some|every)\(/g,
          description: 'Array method usage',
          rules: [
            'Use appropriate array methods',
            'Avoid mutating arrays in place',
            'Chain array methods when possible',
            'Use reduce for complex transformations'
          ]
        }
      ]
    });

    this.codeStandards.set('performance', {
      patterns: [
        {
          name: 'memory-leaks',
          pattern: /(setInterval|setTimeout|addEventListener)/g,
          description: 'Potential memory leaks',
          rules: [
            'Always clean up timers and event listeners',
            'Use cleanup functions in useEffect',
            'Store references to timers for cleanup'
          ]
        },
        {
          name: 'expensive-operations',
          pattern: /\.(map|filter)\(.*\)\.(map|filter)\(/g,
          description: 'Multiple array iterations',
          rules: [
            'Combine multiple array operations',
            'Use reduce for complex transformations',
            'Avoid unnecessary array iterations'
          ]
        },
        {
          name: 'dom-manipulation',
          pattern: /(innerHTML|document\.write)/g,
          description: 'DOM manipulation patterns',
          rules: [
            'Avoid innerHTML for user input',
            'Use textContent when possible',
            'Sanitize all user inputs'
          ]
        }
      ]
    });

    this.codeStandards.set('security', {
      patterns: [
        {
          name: 'xss-vulnerabilities',
          pattern: /innerHTML|dangerouslySetInnerHTML/g,
          description: 'XSS vulnerabilities',
          rules: [
            'Never use innerHTML with user input',
            'Use textContent or sanitize input',
            'Implement Content Security Policy',
            'Validate and sanitize all inputs'
          ]
        },
        {
          name: 'code-injection',
          pattern: /eval\(|Function\(|setTimeout\(.*\)/g,
          description: 'Code injection risks',
          rules: [
            'Never use eval()',
            'Avoid Function constructor',
            'Be careful with setTimeout with strings',
            'Use safe alternatives'
          ]
        },
        {
          name: 'data-exposure',
          pattern: /localStorage\.setItem|sessionStorage\.setItem/g,
          description: 'Data storage security',
          rules: [
            'Never store sensitive data in localStorage',
            'Use secure storage for sensitive information',
            'Implement proper data encryption',
            'Review all stored data'
          ]
        }
      ]
    });
  }

  setupFileWatcher() {
    const watcher = chokidar.watch([
      'src/**/*.{js,jsx,ts,tsx}',
      'server/**/*.{js,ts}',
      'components/**/*.{js,jsx,ts,tsx}'
    ], {
      ignored: /(node_modules|\.git|dist|build)/,
      persistent: true
    });

    watcher
      .on('add', (filePath) => this.reviewFile(filePath))
      .on('change', (filePath) => this.reviewFile(filePath))
      .on('unlink', (filePath) => this.removeFileReview(filePath));

    this.log('🔍 File watcher initialized for code review');
  }

  async reviewFile(filePath) {
    try {
      this.log(`🔍 Reviewing file: ${filePath}`);
      
      const content = fs.readFileSync(filePath, 'utf8');
      const review = await this.performCodeReview(content, filePath);
      
      this.reviewResults.set(filePath, {
        ...review,
        lastReviewed: new Date().toISOString(),
        fileSize: content.length,
        lines: content.split('\n').length
      });

      this.reviewHistory.push({
        file: filePath,
        timestamp: new Date().toISOString(),
        score: review.overallScore,
        issues: review.issues.length,
        suggestions: review.suggestions.length
      });

      // Keep only last 100 reviews
      if (this.reviewHistory.length > 100) {
        this.reviewHistory.shift();
      }

      this.saveReviewReport();
      
      this.log(`✅ Code review completed for: ${filePath}`);
    } catch (error) {
      this.log(`❌ Error reviewing ${filePath}: ${error.message}`);
    }
  }

  async performCodeReview(content, filePath) {
    const review = {
      filePath,
      timestamp: new Date().toISOString(),
      overallScore: 100,
      issues: [],
      suggestions: [],
      standards: {},
      metrics: {
        complexity: 0,
        maintainability: 0,
        readability: 0
      }
    };

    // Analyze against all code standards
    for (const [standard, config] of this.codeStandards) {
      const standardReview = this.analyzeAgainstStandard(content, standard, config);
      review.standards[standard] = standardReview;
      
      // Reduce overall score based on issues
      review.overallScore -= standardReview.issues.length * 5;
      review.overallScore = Math.max(0, review.overallScore);
      
      // Add issues and suggestions
      review.issues.push(...standardReview.issues);
      review.suggestions.push(...standardReview.suggestions);
    }

    // Calculate additional metrics
    review.metrics.complexity = this.calculateComplexity(content);
    review.metrics.maintainability = this.calculateMaintainability(content);
    review.metrics.readability = this.calculateReadability(content);

    // Generate additional suggestions based on metrics
    const metricSuggestions = this.generateMetricSuggestions(review.metrics);
    review.suggestions.push(...metricSuggestions);

    // Adjust score based on metrics
    if (review.metrics.complexity > 10) review.overallScore -= 10;
    if (review.metrics.maintainability < 50) review.overallScore -= 15;
    if (review.metrics.readability < 60) review.overallScore -= 10;

    review.overallScore = Math.max(0, review.overallScore);
    
    return review;
  }

  analyzeAgainstStandard(content, standard, config) {
    const analysis = {
      standard,
      score: 100,
      issues: [],
      suggestions: [],
      patterns: []
    };

    for (const pattern of config.patterns) {
      const matches = content.match(pattern.pattern);
      if (matches) {
        analysis.patterns.push({
          name: pattern.name,
          description: pattern.description,
          count: matches.length,
          rules: pattern.rules
        });

        // Check for potential issues
        const issues = this.checkPatternIssues(content, pattern, matches);
        analysis.issues.push(...issues);

        // Generate suggestions
        const suggestions = this.generatePatternSuggestions(pattern, matches, issues);
        analysis.suggestions.push(...suggestions);

        // Reduce score based on issues
        analysis.score -= issues.length * 5;
      }
    }

    analysis.score = Math.max(0, analysis.score);
    return analysis;
  }

  checkPatternIssues(content, pattern, matches) {
    const issues = [];
    
    if (pattern.name === 'hook-rules') {
      // Check for hooks in conditional statements
      const conditionalHooks = content.match(/if\s*\([^)]*\)\s*\{[^}]*use[A-Z][a-zA-Z]*/g);
      if (conditionalHooks) {
        issues.push({
          type: 'hook-rule-violation',
          severity: 'high',
          description: 'Hooks called inside conditional statements',
          line: this.findLineNumber(content, conditionalHooks[0]),
          suggestion: 'Move hooks outside of conditional statements'
        });
      }
    }

    if (pattern.name === 'xss-vulnerabilities') {
      // Check for innerHTML with user input patterns
      const innerHTMLPatterns = content.match(/innerHTML\s*=\s*[^;]+/g);
      if (innerHTMLPatterns) {
        issues.push({
          type: 'security-vulnerability',
          severity: 'critical',
          description: 'innerHTML usage detected - potential XSS vulnerability',
          line: this.findLineNumber(content, innerHTMLPatterns[0]),
          suggestion: 'Use textContent or sanitize input'
        });
      }
    }

    if (pattern.name === 'memory-leaks') {
      // Check for timers without cleanup
      const timers = content.match(/setInterval|setTimeout/g);
      if (timers) {
        const hasCleanup = content.includes('clearInterval') || content.includes('clearTimeout');
        if (!hasCleanup) {
          issues.push({
            type: 'memory-leak',
            severity: 'medium',
            description: 'Timers detected without cleanup',
            line: this.findLineNumber(content, timers[0]),
            suggestion: 'Implement proper cleanup for timers'
          });
        }
      }
    }

    return issues;
  }

  generatePatternSuggestions(pattern, matches, issues) {
    const suggestions = [];
    
    if (pattern.name === 'hook-rules' && issues.length > 0) {
      suggestions.push({
        type: 'best-practice',
        priority: 'high',
        title: 'Follow React Hooks Rules',
        description: 'Ensure hooks follow React rules for proper functionality',
        code: `// ✅ Good: Hooks at top level
function MyComponent() {
  const [state, setState] = useState();
  const effect = useEffect(() => {}, []);
  
  if (condition) {
    // Do something, but don't call hooks here
  }
  
  return <div>{state}</div>;
}`,
        impact: 'high'
      });
    }

    if (pattern.name === 'xss-vulnerabilities' && issues.length > 0) {
      suggestions.push({
        type: 'security',
        priority: 'critical',
        title: 'Fix XSS Vulnerability',
        description: 'Replace innerHTML with safe alternatives',
        code: `// ❌ Dangerous
element.innerHTML = userInput;

// ✅ Safe
element.textContent = userInput;

// ✅ Safe with sanitization
element.innerHTML = DOMPurify.sanitize(userInput);`,
        impact: 'critical'
      });
    }

    if (pattern.name === 'memory-leaks' && issues.length > 0) {
      suggestions.push({
        type: 'performance',
        priority: 'medium',
        title: 'Implement Timer Cleanup',
        description: 'Properly clean up timers to prevent memory leaks',
        code: `// ✅ Good: With cleanup
useEffect(() => {
  const timer = setInterval(() => {
    // Do something
  }, 1000);
  
  return () => clearInterval(timer);
}, []);`,
        impact: 'medium'
      });
    }

    return suggestions;
  }

  generateMetricSuggestions(metrics) {
    const suggestions = [];
    
    if (metrics.complexity > 10) {
      suggestions.push({
        type: 'complexity',
        priority: 'high',
        title: 'Reduce Function Complexity',
        description: 'High cyclomatic complexity detected',
        code: `// Break down complex functions
function processData(data) {
  // Split into smaller functions
  const validated = validateData(data);
  const processed = processValidatedData(validated);
  return processed;
}`,
        impact: 'high'
      });
    }

    if (metrics.maintainability < 50) {
      suggestions.push({
        type: 'maintainability',
        priority: 'medium',
        title: 'Improve Code Maintainability',
        description: 'Low maintainability score detected',
        code: `// Add JSDoc comments
/**
 * Process user data with validation
 * @param {UserData} data - User input data
 * @returns {ProcessedData} - Validated and processed data
 */
function processUserData(data) {
  // Implementation
}`,
        impact: 'medium'
      });
    }

    if (metrics.readability < 60) {
      suggestions.push({
        type: 'readability',
        priority: 'medium',
        title: 'Improve Code Readability',
        description: 'Low readability score detected',
        code: `// Use descriptive variable names
// ❌ Bad
const x = data.filter(d => d.a > 10).map(d => d.b);

// ✅ Good
const activeUsers = users.filter(user => user.isActive).map(user => user.name);`,
        impact: 'medium'
      });
    }

    return suggestions;
  }

  calculateComplexity(content) {
    let complexity = 0;
    
    const patterns = [
      /if\s*\(/g,
      /else\s*if\s*\(/g,
      /for\s*\(/g,
      /while\s*\(/g,
      /switch\s*\(/g,
      /case\s+/g,
      /catch\s*\(/g,
      /\|\||&&/g
    ];

    patterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) complexity += matches.length;
    });

    return complexity;
  }

  calculateMaintainability(content) {
    let score = 100;
    
    const longLines = content.split('\n').filter(line => line.length > 120).length;
    const longFunctions = (content.match(/function\s+\w+\s*\([^)]*\)\s*\{[^}]*\}/gs) || []).length;
    const deepNesting = (content.match(/\{\s*\{/g) || []).length;
    
    score -= longLines * 2;
    score -= longFunctions * 5;
    score -= deepNesting * 3;
    
    return Math.max(0, score);
  }

  calculateReadability(content) {
    let score = 100;
    
    const lines = content.split('\n');
    const emptyLines = lines.filter(line => line.trim() === '').length;
    const commentLines = lines.filter(line => line.trim().startsWith('//') || line.trim().startsWith('/*')).length;
    const longLines = lines.filter(line => line.length > 100).length;
    
    // Bonus for good practices
    if (commentLines > 0) score += 10;
    if (emptyLines > 0) score += 5;
    
    // Penalties for bad practices
    score -= longLines * 3;
    
    return Math.max(0, Math.min(100, score));
  }

  findLineNumber(content, pattern) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(pattern)) {
        return i + 1;
      }
    }
    return 1;
  }

  removeFileReview(filePath) {
    this.reviewResults.delete(filePath);
    this.log(`🗑️ Removed review for: ${filePath}`);
  }

  saveReviewReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: this.reviewResults.size,
        averageScore: 0,
        totalIssues: 0,
        totalSuggestions: 0,
        criticalIssues: 0
      },
      files: Array.from(this.reviewResults.entries()).map(([file, review]) => ({
        file,
        ...review
      })),
      history: this.reviewHistory
    };

    // Calculate summary statistics
    let totalScore = 0;
    let totalIssues = 0;
    let totalSuggestions = 0;
    let criticalIssues = 0;

    report.files.forEach(file => {
      totalScore += file.overallScore || 0;
      totalIssues += file.issues.length || 0;
      totalSuggestions += file.suggestions.length || 0;
      criticalIssues += file.issues.filter(i => i.severity === 'critical').length || 0;
    });

    report.summary.averageScore = Math.round(totalScore / report.files.length);
    report.summary.totalIssues = totalIssues;
    report.summary.totalSuggestions = totalSuggestions;
    report.summary.criticalIssues = criticalIssues;

    const reportPath = path.join(__dirname, 'logs', 'code-review-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Code review report saved: ${reportPath}`);
  }

  async startContinuousReview() {
    this.log('🚀 Starting continuous code review...');
    
    // Initial review of existing files
    const files = [
      ...this.getFilesRecursively('src'),
      ...this.getFilesRecursively('server'),
      ...this.getFilesRecursively('components')
    ];

    for (const file of files) {
      if (file.match(/\.(js|jsx|ts|tsx)$/)) {
        await this.reviewFile(file);
      }
    }

    // Schedule periodic review
    setInterval(() => {
      this.log('🔄 Running periodic code review...');
      this.saveReviewReport();
    }, 300000); // Every 5 minutes

    this.log('✅ Continuous code review started');
  }

  getFilesRecursively(dir) {
    const files = [];
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getFilesRecursively(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  getStatus() {
    return {
      running: true,
      filesReviewed: this.reviewResults.size,
      totalIssues: Array.from(this.reviewResults.values())
        .reduce((sum, review) => sum + review.issues.length, 0),
      totalSuggestions: Array.from(this.reviewResults.values())
        .reduce((sum, review) => sum + review.suggestions.length, 0),
      lastReview: new Date().toISOString()
    };
  }
}

// CLI handling
const assistant = new CodeReviewAssistant();
const command = process.argv[2];

switch (command) {
  case 'start':
    assistant.startContinuousReview();
    break;
  case 'review':
    const filePath = process.argv[3];
    if (filePath) {
      assistant.reviewFile(filePath);
    } else {
      console.log('Usage: node code-review-assistant.cjs review <file-path>');
    }
    break;
  case 'status':
    console.log(JSON.stringify(assistant.getStatus(), null, 2));
    break;
  default:
    assistant.startContinuousReview();
}

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Code Review Assistant...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down Code Review Assistant...');
  process.exit(0);
});