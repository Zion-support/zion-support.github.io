#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🤖 Starting AI Code Analyzer...');

// Get automation interval from environment variable (default: 4 hours)
const AUTOMATION_INTERVAL =
  parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours

class AICodeAnalyzer {
  constructor() {
    this.analysisResults = {
      codeSmells: [],
      performanceIssues: [],
      securityVulnerabilities: [],
      maintainabilityScore: 0,
      complexityScore: 0,
      suggestions: [],
    };
    this.reportDir = path.join(process.cwd(), 'ai-analysis-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async analyzeCodebase() {
    try {
      console.log(`🤖 Running AI code analysis at ${new Date().toISOString()}`);

      // Analyze TypeScript files
      await this.analyzeTypeScriptFiles();

      // Analyze React components
      await this.analyzeReactComponents();

      // Analyze performance patterns
      await this.analyzePerformancePatterns();

      // Analyze security patterns
      await this.analyzeSecurityPatterns();

      // Generate AI suggestions
      await this.generateAISuggestions();

      // Calculate scores
      this.calculateScores();

      // Generate report
      await this.generateReport();

      console.log('✅ AI code analysis completed successfully');
    } catch (error) {
      console.error('❌ AI code analysis failed:', error.message);
    }
  }

  async analyzeTypeScriptFiles() {
    console.log('🔍 Analyzing TypeScript files...');
    const tsFiles = this.findFiles('./src', ['.ts', '.tsx']);

    for (const file of tsFiles) {
      const content = fs.readFileSync(file, 'utf8');

      // Analyze code complexity
      const complexity = this.calculateComplexity(content);
      if (complexity > 10) {
        this.analysisResults.codeSmells.push({
          file: path.relative(process.cwd(), file),
          type: 'high_complexity',
          severity: 'medium',
          description: `Function complexity score: ${complexity}`,
          suggestion:
            'Consider breaking down complex functions into smaller, more manageable pieces',
        });
      }

      // Analyze import patterns
      const importAnalysis = this.analyzeImports(content);
      if (importAnalysis.unusedImports.length > 0) {
        this.analysisResults.codeSmells.push({
          file: path.relative(process.cwd(), file),
          type: 'unused_imports',
          severity: 'low',
          description: `Found ${importAnalysis.unusedImports.length} unused imports`,
          suggestion:
            'Remove unused imports to improve code clarity and reduce bundle size',
        });
      }
    }
  }

  async analyzeReactComponents() {
    console.log('⚛️ Analyzing React components...');
    const reactFiles = this.findFiles('./src', ['.tsx', '.jsx']);

    for (const file of reactFiles) {
      const content = fs.readFileSync(file, 'utf8');

      // Analyze component patterns
      const componentAnalysis = this.analyzeReactComponent(content);

      if (componentAnalysis.largeComponent) {
        this.analysisResults.codeSmells.push({
          file: path.relative(process.cwd(), file),
          type: 'large_component',
          severity: 'medium',
          description: 'Component has more than 200 lines',
          suggestion:
            'Consider breaking down large components into smaller, focused components',
        });
      }

      if (componentAnalysis.missingPropTypes) {
        this.analysisResults.codeSmells.push({
          file: path.relative(process.cwd(), file),
          type: 'missing_prop_types',
          severity: 'low',
          description: 'Component missing TypeScript interfaces or PropTypes',
          suggestion:
            'Add proper type definitions for better code maintainability',
        });
      }
    }
  }

  async analyzePerformancePatterns() {
    console.log('⚡ Analyzing performance patterns...');
    const allFiles = this.findFiles('./src', ['.ts', '.tsx', '.js', '.jsx']);

    for (const file of allFiles) {
      const content = fs.readFileSync(file, 'utf8');

      // Check for expensive operations
      const expensivePatterns = [
        /\.map\(.*=>.*\.filter\(/g,
        /\.filter\(.*=>.*\.map\(/g,
        /new Date\(\)/g,
        /JSON\.parse\(/g,
        /JSON\.stringify\(/g,
      ];

      expensivePatterns.forEach((pattern, index) => {
        const matches = content.match(pattern);
        if (matches && matches.length > 2) {
          this.analysisResults.performanceIssues.push({
            file: path.relative(process.cwd(), file),
            type: 'expensive_operation',
            severity: 'medium',
            description: `Found ${matches.length} expensive operations`,
            suggestion:
              'Consider optimizing expensive operations or memoizing results',
          });
        }
      });
    }
  }

  async analyzeSecurityPatterns() {
    console.log('🔒 Analyzing security patterns...');
    const allFiles = this.findFiles('./src', ['.ts', '.tsx', '.js', '.jsx']);

    for (const file of allFiles) {
      const content = fs.readFileSync(file, 'utf8');

      // Check for security vulnerabilities
      const securityPatterns = [
        { pattern: /innerHTML\s*=/g, type: 'xss_risk' },
        { pattern: /eval\(/g, type: 'code_injection' },
        { pattern: /document\.write\(/g, type: 'xss_risk' },
        { pattern: /localStorage\.setItem\(/g, type: 'sensitive_data' },
      ];

      securityPatterns.forEach(({ pattern, type }) => {
        const matches = content.match(pattern);
        if (matches) {
          this.analysisResults.securityVulnerabilities.push({
            file: path.relative(process.cwd(), file),
            type: type,
            severity: 'high',
            description: `Found ${matches.length} potential security issues`,
            suggestion:
              'Review and secure these operations to prevent security vulnerabilities',
          });
        }
      });
    }
  }

  async generateAISuggestions() {
    console.log('💡 Generating AI suggestions...');

    // Generate suggestions based on analysis results
    if (this.analysisResults.codeSmells.length > 10) {
      this.analysisResults.suggestions.push({
        priority: 'high',
        category: 'code_quality',
        title: 'High Code Smell Count',
        description: 'Consider implementing automated code quality gates',
        action: 'Set up pre-commit hooks with linting and complexity checks',
      });
    }

    if (this.analysisResults.performanceIssues.length > 5) {
      this.analysisResults.suggestions.push({
        priority: 'medium',
        category: 'performance',
        title: 'Performance Optimization Needed',
        description: 'Multiple performance issues detected',
        action: 'Implement performance monitoring and optimization strategies',
      });
    }

    if (this.analysisResults.securityVulnerabilities.length > 0) {
      this.analysisResults.suggestions.push({
        priority: 'critical',
        category: 'security',
        title: 'Security Vulnerabilities Detected',
        description: 'Immediate security review required',
        action: 'Conduct security audit and implement secure coding practices',
      });
    }
  }

  calculateScores() {
    // Calculate maintainability score (0-100)
    const totalIssues =
      this.analysisResults.codeSmells.length +
      this.analysisResults.performanceIssues.length +
      this.analysisResults.securityVulnerabilities.length;

    this.analysisResults.maintainabilityScore = Math.max(
      0,
      100 - totalIssues * 5
    );

    // Calculate complexity score (0-100)
    const complexFiles = this.analysisResults.codeSmells.filter(
      smell => smell.type === 'high_complexity'
    ).length;

    this.analysisResults.complexityScore = Math.min(100, complexFiles * 10);
  }

  async generateReport() {
    console.log('📊 Generating AI analysis report...');

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFilesAnalyzed: this.findFiles('./src', [
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
        ]).length,
        codeSmells: this.analysisResults.codeSmells.length,
        performanceIssues: this.analysisResults.performanceIssues.length,
        securityVulnerabilities:
          this.analysisResults.securityVulnerabilities.length,
        maintainabilityScore: this.analysisResults.maintainabilityScore,
        complexityScore: this.analysisResults.complexityScore,
      },
      details: this.analysisResults,
      recommendations: this.analysisResults.suggestions,
    };

    const reportPath = path.join(
      this.reportDir,
      `ai-analysis-${Date.now()}.json`
    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Also save latest report
    const latestReportPath = path.join(
      process.cwd(),
      'ai-analysis-report.json'
    );
    fs.writeFileSync(latestReportPath, JSON.stringify(report, null, 2));

    console.log(`📊 AI analysis report saved to ${reportPath}`);
  }

  findFiles(dir, extensions) {
    const files = [];

    function scanDirectory(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);

        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);

          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories that can't be accessed
      }
    }

    scanDirectory(dir);
    return files;
  }

  calculateComplexity(content) {
    // Simplified cyclomatic complexity calculation
    const complexityIndicators = [
      /if\s*\(/g,
      /else\s*if\s*\(/g,
      /for\s*\(/g,
      /while\s*\(/g,
      /switch\s*\(/g,
      /case\s+/g,
      /catch\s*\(/g,
      /\|\|/g,
      /&&/g,
    ];

    let complexity = 1; // Base complexity
    complexityIndicators.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        complexity += matches.length;
      }
    });

    return complexity;
  }

  analyzeImports(content) {
    const importRegex = /import\s+.*?from\s+['"]([^'"]+)['"]/g;
    const imports = [];
    let match;

    while ((match = importRegex.exec(content)) !== null) {
      imports.push(match[1]);
    }

    // Simplified unused import detection
    const unusedImports = imports.filter(imp => {
      const importName = imp
        .split('/')
        .pop()
        .replace(/\.(js|ts|tsx|jsx)$/, '');
      return (
        !content.includes(importName) ||
        content.indexOf(importName) === content.indexOf(`import.*${importName}`)
      );
    });

    return { imports, unusedImports };
  }

  analyzeReactComponent(content) {
    const lines = content.split('\n');
    const componentAnalysis = {
      largeComponent: lines.length > 200,
      missingPropTypes:
        !content.includes('interface') && !content.includes('PropTypes'),
      hasState: content.includes('useState') || content.includes('this.state'),
      hasEffects:
        content.includes('useEffect') || content.includes('componentDidMount'),
    };

    return componentAnalysis;
  }
}

// Main continuous loop
async function runContinuous() {
  console.log(
    `🤖 Starting AI code analyzer with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`
  );

  const analyzer = new AICodeAnalyzer();

  // Run initial analysis
  await analyzer.analyzeCodebase();

  // Set up continuous execution
  setInterval(async () => {
    await analyzer.analyzeCodebase();
  }, AUTOMATION_INTERVAL);

  console.log(
    `✅ AI code analyzer running. Next analysis in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`
  );
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the AI code analyzer
runContinuous().catch(error => {
  console.error('❌ Failed to start AI code analyzer:', error);
  process.exit(1);
});
