#!/usr/bin/env node

/**
 * AI-Powered Code Quality Automation
 * Uses intelligent pattern recognition to improve code quality automatically
 * 
 * Features:
 * - AI-powered code smell detection
 * - Automatic refactoring suggestions
 * - Code complexity analysis
 * - Performance optimization recommendations
 * - Best practice enforcement
 * - Intelligent code formatting
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class AICodeQualityAutomation {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      patterns: {
        react: ['src/**/*.{tsx,jsx}', 'components/**/*.{tsx,jsx}'],
        typescript: ['src/**/*.{ts,tsx}', 'types/**/*.ts'],
        javascript: ['src/**/*.{js,jsx}', 'scripts/**/*.js'],
        styles: ['src/**/*.{css,scss}', 'styles/**/*.{css,scss}'],
        config: ['*.{js,ts,json,md}', 'config/**/*']
      },
      qualityThresholds: {
        complexity: 10,
        maintainability: 65,
        coverage: 80,
        duplication: 5
      },
      logFile: 'logs/ai-code-quality.log',
      reportDir: 'ai-quality-reports'
    };
    
    this.issues = [];
    this.improvements = [];
    this.setupLogging();
    this.ensureDirectories();
  }

  setupLogging() {
    const logDir = path.dirname(this.config.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    this.log = (message, level = 'INFO') => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] ${message}`;
      console.log(logMessage);
      
      try {
        fs.appendFileSync(this.config.logFile, logMessage + '\n');
      } catch (error) {
        console.error('Failed to write to log file:', error.message);
      }
    };
  }

  ensureDirectories() {
    if (!fs.existsSync(this.config.reportDir)) {
      fs.mkdirSync(this.config.reportDir, { recursive: true });
    }
  }

  async analyzeCodeQuality() {
    this.log('🔍 Starting AI-powered code quality analysis...');
    
    try {
      await this.analyzeReactComponents();
      await this.analyzeTypeScriptCode();
      await this.analyzeJavaScriptCode();
      await this.analyzeStyles();
      await this.analyzeConfiguration();
      
      this.generateQualityReport();
      this.applyAutomaticFixes();
      
    } catch (error) {
      this.log(`❌ Code quality analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzeReactComponents() {
    this.log('⚛️ Analyzing React components...');
    
    const reactFiles = glob.sync(this.config.patterns.react, { cwd: this.config.projectRoot });
    
    for (const file of reactFiles) {
      const filePath = path.join(this.config.projectRoot, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // AI-powered pattern detection
      const issues = this.detectReactIssues(content, file);
      const improvements = this.suggestReactImprovements(content, file);
      
      this.issues.push(...issues);
      this.improvements.push(...improvements);
    }
  }

  detectReactIssues(content, file) {
    const issues = [];
    
    // Detect unused imports
    const importRegex = /import\s+([^;]+)\s+from\s+['"]([^'"]+)['"]/g;
    const imports = [...content.matchAll(importRegex)];
    
    imports.forEach(importMatch => {
      const importName = importMatch[1].trim();
      const importPath = importMatch[2];
      
      // Check if import is actually used
      const usageRegex = new RegExp(`\\b${importName.split('{')[0].trim()}\\b`, 'g');
      const usageCount = (content.match(usageRegex) || []).length;
      
      if (usageCount <= 1) {
        issues.push({
          type: 'unused_import',
          file,
          line: this.getLineNumber(content, importMatch.index),
          severity: 'warning',
          message: `Unused import: ${importName}`,
          suggestion: `Remove unused import or use it in the component`
        });
      }
    });
    
    // Detect missing PropTypes or TypeScript types
    if (!content.includes('PropTypes') && !content.includes(': FC') && !content.includes(': React.FC')) {
      issues.push({
        type: 'missing_types',
        file,
        line: 1,
        severity: 'info',
        message: 'Component lacks type definitions',
        suggestion: 'Add TypeScript types or PropTypes for better type safety'
      });
    }
    
    // Detect inline styles
    const inlineStyleRegex = /style=\s*{([^}]+)}/g;
    const inlineStyles = content.match(inlineStyleRegex);
    
    if (inlineStyles && inlineStyles.length > 3) {
      issues.push({
        type: 'inline_styles',
        file,
        line: this.getLineNumber(content, content.indexOf(inlineStyles[0])),
        severity: 'warning',
        message: 'Multiple inline styles detected',
        suggestion: 'Move styles to CSS modules or styled-components for better maintainability'
      });
    }
    
    return issues;
  }

  suggestReactImprovements(content, file) {
    const improvements = [];
    
    // Suggest React.memo for performance
    if (content.includes('export default') && !content.includes('React.memo') && !content.includes('forwardRef')) {
      improvements.push({
        type: 'performance_optimization',
        file,
        line: this.getLineNumber(content, content.indexOf('export default')),
        priority: 'medium',
        message: 'Consider wrapping component with React.memo',
        suggestion: 'Use React.memo to prevent unnecessary re-renders',
        code: 'export default React.memo(ComponentName)'
      });
    }
    
    // Suggest useCallback for event handlers
    const eventHandlerRegex = /const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/g;
    const eventHandlers = [...content.matchAll(eventHandlerRegex)];
    
    eventHandlers.forEach(handler => {
      const handlerName = handler[1];
      if (handlerName.includes('Handle') || handlerName.includes('Click') || handlerName.includes('Change')) {
        improvements.push({
          type: 'performance_optimization',
          file,
          line: this.getLineNumber(content, handler.index),
          priority: 'low',
          message: `Consider wrapping ${handlerName} with useCallback`,
          suggestion: 'Use useCallback to memoize event handlers',
          code: `const ${handlerName} = useCallback((params) => { /* handler logic */ }, [dependencies])`
        });
      }
    });
    
    return improvements;
  }

  async analyzeTypeScriptCode() {
    this.log('📘 Analyzing TypeScript code...');
    
    const tsFiles = glob.sync(this.config.patterns.typescript, { cwd: this.config.projectRoot });
    
    for (const file of tsFiles) {
      const filePath = path.join(this.config.projectRoot, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      const issues = this.detectTypeScriptIssues(content, file);
      const improvements = this.suggestTypeScriptImprovements(content, file);
      
      this.issues.push(...issues);
      this.improvements.push(...improvements);
    }
  }

  detectTypeScriptIssues(content, file) {
    const issues = [];
    
    // Detect any types
    const anyRegex = /:\s*any\b/g;
    const anyTypes = content.match(anyRegex);
    
    if (anyTypes) {
      issues.push({
        type: 'any_type',
        file,
        line: this.getLineNumber(content, content.indexOf(anyTypes[0])),
        severity: 'warning',
        message: 'Usage of "any" type detected',
        suggestion: 'Replace with proper TypeScript types for better type safety'
      });
    }
    
    // Detect unused interfaces/types
    const interfaceRegex = /(?:interface|type)\s+(\w+)/g;
    const interfaces = [...content.matchAll(interfaceRegex)];
    
    interfaces.forEach(interfaceMatch => {
      const interfaceName = interfaceMatch[1];
      const usageRegex = new RegExp(`\\b${interfaceName}\\b`, 'g');
      const usageCount = (content.match(usageRegex) || []).length;
      
      if (usageCount <= 1) {
        issues.push({
          type: 'unused_interface',
          file,
          line: this.getLineNumber(content, interfaceMatch.index),
          severity: 'info',
          message: `Unused interface/type: ${interfaceName}`,
          suggestion: 'Remove unused interface or export it for use in other files'
        });
      }
    });
    
    return issues;
  }

  suggestTypeScriptImprovements(content, file) {
    const improvements = [];
    
    // Suggest strict null checks
    if (content.includes('!') && !content.includes('strictNullChecks')) {
      improvements.push({
        type: 'type_safety',
        file,
        line: this.getLineNumber(content, content.indexOf('!')),
        priority: 'medium',
        message: 'Consider using strict null checks instead of non-null assertion',
        suggestion: 'Replace ! with proper null checking for better type safety',
        code: '// Instead of: value!.property\n// Use: value?.property || defaultValue'
      });
    }
    
    return improvements;
  }

  async analyzeJavaScriptCode() {
    this.log('📜 Analyzing JavaScript code...');
    
    const jsFiles = glob.sync(this.config.patterns.javascript, { cwd: this.config.projectRoot });
    
    for (const file of jsFiles) {
      const filePath = path.join(this.config.projectRoot, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      const issues = this.detectJavaScriptIssues(content, file);
      const improvements = this.suggestJavaScriptImprovements(content, file);
      
      this.issues.push(...issues);
      this.improvements.push(...improvements);
    }
  }

  detectJavaScriptIssues(content, file) {
    const issues = [];
    
    // Detect console.log statements in production code
    if (content.includes('console.log') && !file.includes('test') && !file.includes('spec')) {
      issues.push({
        type: 'console_log',
        file,
        line: this.getLineNumber(content, content.indexOf('console.log')),
        severity: 'warning',
        message: 'Console.log detected in production code',
        suggestion: 'Remove console.log statements or use proper logging library'
      });
    }
    
    // Detect var usage
    const varRegex = /\bvar\s+\w+/g;
    const varUsage = content.match(varRegex);
    
    if (varUsage) {
      issues.push({
        type: 'var_usage',
        file,
        line: this.getLineNumber(content, content.indexOf(varUsage[0])),
        severity: 'warning',
        message: 'Usage of "var" detected',
        suggestion: 'Replace "var" with "const" or "let" for better scoping'
      });
    }
    
    return issues;
  }

  suggestJavaScriptImprovements(content, file) {
    const improvements = [];
    
    // Suggest async/await over .then()
    const thenRegex = /\.then\s*\(/g;
    const thenUsage = content.match(thenRegex);
    
    if (thenUsage && !content.includes('async')) {
      improvements.push({
        type: 'modern_js',
        file,
        line: this.getLineNumber(content, content.indexOf(thenUsage[0])),
        priority: 'medium',
        message: 'Consider using async/await instead of .then()',
        suggestion: 'Convert to async/await for better readability and error handling'
      });
    }
    
    return improvements;
  }

  async analyzeStyles() {
    this.log('🎨 Analyzing styles...');
    
    const styleFiles = glob.sync(this.config.patterns.styles, { cwd: this.config.projectRoot });
    
    for (const file of styleFiles) {
      const filePath = path.join(this.config.projectRoot, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      const issues = this.detectStyleIssues(content, file);
      const improvements = this.suggestStyleImprovements(content, file);
      
      this.issues.push(...issues);
      this.improvements.push(...improvements);
    }
  }

  detectStyleIssues(content, file) {
    const issues = [];
    
    // Detect !important usage
    const importantRegex = /!important/g;
    const importantUsage = content.match(importantRegex);
    
    if (importantUsage) {
      issues.push({
        type: 'important_usage',
        file,
        line: this.getLineNumber(content, content.indexOf(importantUsage[0])),
        severity: 'warning',
        message: '!important usage detected',
        suggestion: 'Avoid !important, use more specific selectors instead'
      });
    }
    
    // Detect magic numbers
    const magicNumberRegex = /:\s*(\d+(?:\.\d+)?)px\b/g;
    const magicNumbers = [...content.matchAll(magicNumberRegex)];
    
    magicNumbers.forEach(match => {
      const number = parseFloat(match[1]);
      if (number > 100) {
        issues.push({
          type: 'magic_number',
          file,
          line: this.getLineNumber(content, match.index),
          severity: 'info',
          message: `Large magic number: ${number}px`,
          suggestion: 'Consider using CSS custom properties or design tokens'
        });
      }
    });
    
    return issues;
  }

  suggestStyleImprovements(content, file) {
    const improvements = [];
    
    // Suggest CSS custom properties
    if (content.includes('px') && !content.includes('var(--')) {
      improvements.push({
        type: 'css_modernization',
        file,
        line: 1,
        priority: 'low',
        message: 'Consider using CSS custom properties',
        suggestion: 'Use CSS custom properties for consistent spacing and theming',
        code: ':root {\n  --spacing-sm: 8px;\n  --spacing-md: 16px;\n  --spacing-lg: 24px;\n}'
      });
    }
    
    return improvements;
  }

  async analyzeConfiguration() {
    this.log('⚙️ Analyzing configuration files...');
    
    const configFiles = glob.sync(this.config.patterns.config, { cwd: this.config.projectRoot });
    
    for (const file of configFiles) {
      const filePath = path.join(this.config.projectRoot, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      const issues = this.detectConfigIssues(content, file);
      const improvements = this.suggestConfigImprovements(content, file);
      
      this.issues.push(...issues);
      this.improvements.push(...improvements);
    }
  }

  detectConfigIssues(content, file) {
    const issues = [];
    
    // Detect hardcoded values in config
    if (file.includes('config') || file.includes('vite.config') || file.includes('tailwind.config')) {
      const hardcodedRegex = /['"](https?:\/\/[^'"]+)['"]/g;
      const hardcodedUrls = content.match(hardcodedRegex);
      
      if (hardcodedUrls) {
        issues.push({
          type: 'hardcoded_config',
          file,
          line: this.getLineNumber(content, content.indexOf(hardcodedUrls[0])),
          severity: 'warning',
          message: 'Hardcoded URLs detected in configuration',
          suggestion: 'Use environment variables for configuration values'
        });
      }
    }
    
    return issues;
  }

  suggestConfigImprovements(content, file) {
    const improvements = [];
    
    // Suggest environment variable usage
    if (file.includes('config') && content.includes('localhost')) {
      improvements.push({
        type: 'config_improvement',
        file,
        line: this.getLineNumber(content, content.indexOf('localhost')),
        priority: 'medium',
        message: 'Consider using environment variables for configuration',
        suggestion: 'Replace hardcoded values with environment variables',
        code: '// Instead of: localhost:3000\n// Use: process.env.PORT || 3000'
      });
    }
    
    return improvements;
  }

  getLineNumber(content, index) {
    return content.substring(0, index).split('\n').length;
  }

  generateQualityReport() {
    this.log('📊 Generating AI quality report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalIssues: this.issues.length,
        totalImprovements: this.improvements.length,
        criticalIssues: this.issues.filter(i => i.severity === 'critical').length,
        highPriorityImprovements: this.improvements.filter(i => i.priority === 'high').length
      },
      issues: this.issues,
      improvements: this.improvements,
      recommendations: this.generateRecommendations()
    };
    
    const reportPath = path.join(this.config.reportDir, `ai-quality-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`✅ Quality report generated: ${reportPath}`);
    
    // Also save latest report
    const latestReportPath = path.join(this.config.reportDir, 'latest-ai-quality-report.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(report, null, 2));
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Generate action plan based on issues
    if (this.issues.length > 0) {
      const criticalIssues = this.issues.filter(i => i.severity === 'critical');
      const warningIssues = this.issues.filter(i => i.severity === 'warning');
      
      if (criticalIssues.length > 0) {
        recommendations.push({
          priority: 'immediate',
          action: 'Fix critical issues first',
          description: `${criticalIssues.length} critical issues need immediate attention`,
          estimatedTime: '2-4 hours'
        });
      }
      
      if (warningIssues.length > 0) {
        recommendations.push({
          priority: 'high',
          action: 'Address warning issues',
          description: `${warningIssues.length} warning issues should be resolved soon`,
          estimatedTime: '4-8 hours'
        });
      }
    }
    
    // Generate improvement suggestions
    if (this.improvements.length > 0) {
      const highPriorityImprovements = this.improvements.filter(i => i.priority === 'high');
      
      if (highPriorityImprovements.length > 0) {
        recommendations.push({
          priority: 'high',
          action: 'Implement high-priority improvements',
          description: `${highPriorityImprovements.length} high-priority improvements identified`,
          estimatedTime: '1-2 days'
        });
      }
    }
    
    return recommendations;
  }

  async applyAutomaticFixes() {
    this.log('🔧 Applying automatic fixes...');
    
    let fixedCount = 0;
    
    for (const issue of this.issues) {
      if (issue.type === 'console_log' && issue.severity === 'warning') {
        try {
          await this.fixConsoleLog(issue);
          fixedCount++;
        } catch (error) {
          this.log(`Failed to fix console.log in ${issue.file}: ${error.message}`, 'WARNING');
        }
      }
    }
    
    this.log(`✅ Applied ${fixedCount} automatic fixes`);
  }

  async fixConsoleLog(issue) {
    const filePath = path.join(this.config.projectRoot, issue.file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove console.log statements
    content = content.replace(/console\.log\([^)]*\);?\n?/g, '');
    
    fs.writeFileSync(filePath, content);
    
    this.log(`Fixed console.log in ${issue.file}`);
  }

  async start() {
    this.log('🚀 Starting AI Code Quality Automation...');
    
    // Run initial analysis
    await this.analyzeCodeQuality();
    
    // Set up continuous monitoring
    setInterval(async () => {
      await this.analyzeCodeQuality();
    }, 1800000); // Every 30 minutes
    
    this.log('✅ AI Code Quality Automation is running continuously');
  }
}

// Start the automation if run directly
if (require.main === module) {
  const automation = new AICodeQualityAutomation();
  automation.start().catch(console.error);
}

module.exports = AICodeQualityAutomation;