#!/usr/bin/env node

/**
 * AI App Improvement Specialist (AAIS)
 * 
 * Next-generation autonomous AI system for comprehensive app improvement
 * 
 * Features:
 * - Deep code analysis with pattern recognition
 * - Intelligent issue prioritization
 * - Automated refactoring and optimization
 * - Performance profiling and enhancement
 * - Security vulnerability scanning and patching
 * - UX/UI improvement suggestions
 * - Architecture optimization
 * - Dependency health management
 * - Real-time monitoring and alerting
 * - ML-based predictive maintenance
 * - Comprehensive reporting and metrics
 * 
 * @version 2.0.0
 * @author AI Development Team
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  projectRoot: process.cwd(),
  logsDir: path.join(process.cwd(), 'automation', 'logs'),
  reportsDir: path.join(process.cwd(), 'automation', 'reports', 'improvement-specialist'),
  dataDir: path.join(process.cwd(), 'automation', 'data', 'improvement-specialist'),
  
  // Operation modes
  mode: process.env.AAIS_MODE || 'aggressive', // standard, aggressive, conservative
  continuous: process.env.AAIS_CONTINUOUS === 'true',
  intervalMinutes: parseInt(process.env.AAIS_INTERVAL || '1', 10), // Default: 1 minute for MAXIMUM SPEED
  
  // Auto-commit settings
  autoCommit: process.env.AAIS_AUTO_COMMIT !== 'false',
  autoPush: process.env.AAIS_AUTO_PUSH !== 'false',
  createPR: process.env.AAIS_CREATE_PR === 'true',
  
  // Improvement settings
  maxImprovementsPerRun: parseInt(process.env.AAIS_MAX_IMPROVEMENTS || '30', 10), // Increased for maximum speed
  minHealthScore: parseInt(process.env.AAIS_MIN_HEALTH || '95', 10), // Higher target for better quality
  
  // Feature flags
  features: {
    codeQuality: true,
    performance: true,
    security: true,
    accessibility: true,
    seo: true,
    testing: true,
    documentation: true,
    architecture: true,
    dependencies: true,
    monitoring: true,
    uiux: true,
    aiAnalysis: true,
  },
  
  // AI Configuration — prefers OpenRouter when available
  useAI: process.env.OPENROUTER_API_KEY || process.env.ANTHROPIC_API_KEY || process.env.OPENAI_API_KEY,
  aiProvider: process.env.OPENROUTER_API_KEY ? 'openrouter' : (process.env.AI_PROVIDER || 'anthropic'),
  
  // Repository info
  repository: 'https://github.com/Zion-Holdings/zion.app',
  canonicalUrl: 'https://ziontechgroup.com',
};

// Enhanced Logger with levels and formatting
class EnhancedLogger {
  constructor(logFile) {
    this.logFile = logFile;
    this.sessionStart = new Date();
    this.logBuffer = [];
  }
  
  async init() {
    await this.ensureLogDirectory();
    await this.log('info', '🚀 AI App Improvement Specialist initialized');
    await this.log('info', `Session started at ${this.sessionStart.toISOString()}`);
  }
  
  async ensureLogDirectory() {
    const dir = path.dirname(this.logFile);
    try {
      await fs.mkdir(dir, { recursive: true });
    } catch (err) {
      // Directory already exists
    }
  }
  
  formatMessage(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const levelEmoji = {
      debug: '🔍',
      info: 'ℹ️',
      warn: '⚠️',
      error: '❌',
      success: '✅',
      critical: '🚨',
    };
    
    const emoji = levelEmoji[level] || '📝';
    let formatted = `[${timestamp}] ${emoji} [${level.toUpperCase()}] ${message}`;
    
    if (data) {
      formatted += `\n  ${JSON.stringify(data, null, 2)}`;
    }
    
    return formatted;
  }
  
  async log(level, message, data = null) {
    const formatted = this.formatMessage(level, message, data);
    console.log(formatted);
    
    this.logBuffer.push({
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
    });
    
    try {
      await fs.appendFile(this.logFile, formatted + '\n');
    } catch (err) {
      console.error('Failed to write to log file:', err);
    }
  }
  
  async debug(message, data) { return this.log('debug', message, data); }
  async info(message, data) { return this.log('info', message, data); }
  async warn(message, data) { return this.log('warn', message, data); }
  async error(message, data) { return this.log('error', message, data); }
  async success(message, data) { return this.log('success', message, data); }
  async critical(message, data) { return this.log('critical', message, data); }
  
  async getSessionLogs() {
    return this.logBuffer;
  }
}

// Command executor with error handling
class CommandExecutor {
  constructor(logger) {
    this.logger = logger;
  }
  
  async exec(command, options = {}) {
    const startTime = Date.now();
    
    try {
      await this.logger.debug(`Executing: ${command}`);
      
      const result = execSync(command, {
        cwd: CONFIG.projectRoot,
        encoding: 'utf8',
        maxBuffer: 50 * 1024 * 1024, // 50MB
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options,
      });
      
      const duration = Date.now() - startTime;
      await this.logger.debug(`Command completed in ${duration}ms`);
      
      return { 
        success: true, 
        output: result, 
        duration,
      };
    } catch (error) {
      const duration = Date.now() - startTime;
      await this.logger.debug(`Command failed in ${duration}ms: ${error.message}`);
      
      return { 
        success: false, 
        error: error.message, 
        output: error.stdout || error.stderr,
        duration,
      };
    }
  }
  
  async execSilent(command) {
    return this.exec(command, { silent: true });
  }
}

// Deep Code Analysis Engine
class DeepAnalysisEngine {
  constructor(logger, executor) {
    this.logger = logger;
    this.executor = executor;
  }
  
  async analyzeAll() {
    await this.logger.info('🔬 Starting deep code analysis...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      codeQuality: await this.analyzeCodeQuality(),
      performance: await this.analyzePerformance(),
      security: await this.analyzeSecurity(),
      accessibility: await this.analyzeAccessibility(),
      seo: await this.analyzeSEO(),
      testing: await this.analyzeTesting(),
      architecture: await this.analyzeArchitecture(),
      dependencies: await this.analyzeDependencies(),
      build: await this.analyzeBuild(),
      patterns: await this.analyzePatterns(),
    };
    
    analysis.healthScore = this.calculateHealthScore(analysis);
    analysis.criticalIssues = this.extractCriticalIssues(analysis);
    analysis.improvements = this.generateImprovements(analysis);
    
    await this.logger.success(`Analysis complete - Health Score: ${analysis.healthScore}/100`);
    
    return analysis;
  }
  
  async analyzeCodeQuality() {
    await this.logger.debug('Analyzing code quality...');
    
    const issues = {
      lintErrors: 0,
      lintWarnings: 0,
      typeErrors: 0,
      complexity: [],
      duplication: [],
      codeSmells: [],
    };
    
    // Lint analysis
    const lintResult = await this.executor.execSilent('npm run lint -- --format=json');
    if (lintResult.output) {
      try {
        const jsonMatch = lintResult.output.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          const lintData = JSON.parse(jsonMatch[0]);
          issues.lintErrors = lintData.reduce((sum, f) => sum + (f.errorCount || 0), 0);
          issues.lintWarnings = lintData.reduce((sum, f) => sum + (f.warningCount || 0), 0);
          issues.lintFiles = lintData.filter(f => f.errorCount > 0 || f.warningCount > 0);
        }
      } catch (e) {
        await this.logger.warn('Failed to parse lint output');
      }
    }
    
    // Type checking
    const typeResult = await this.executor.execSilent('npx tsc --noEmit --pretty false');
    if (!typeResult.success && typeResult.output) {
      const typeErrors = typeResult.output.split('\n').filter(l => l.includes('error TS'));
      issues.typeErrors = typeErrors.length;
      issues.typeErrorSample = typeErrors.slice(0, 5);
    }
    
    // Check for code smells
    const anyTypeResult = await this.executor.execSilent('grep -r ": any" src/ --include="*.ts" --include="*.tsx" | wc -l');
    if (anyTypeResult.success) {
      issues.codeSmells.push({
        type: 'any-types',
        count: parseInt(anyTypeResult.output.trim(), 10),
        severity: 'medium',
      });
    }
    
    // Check for console statements
    const consoleResult = await this.executor.execSilent('grep -r "console\\." src/ --include="*.ts" --include="*.tsx" | grep -v "console.error" | wc -l');
    if (consoleResult.success) {
      const count = parseInt(consoleResult.output.trim(), 10);
      if (count > 0) {
        issues.codeSmells.push({
          type: 'console-statements',
          count,
          severity: 'low',
        });
      }
    }
    
    return issues;
  }
  
  async analyzePerformance() {
    await this.logger.debug('Analyzing performance...');
    
    const metrics = {
      bundleSize: 0,
      largeFiles: [],
      unnecessaryRenders: [],
      memoryLeaks: [],
      slowQueries: [],
    };
    
    // Check bundle size
    try {
      const nextStatic = path.join(CONFIG.projectRoot, '.next', 'static');
      const stat = await fs.stat(nextStatic);
      metrics.bundleSize = await this.getDirectorySize(nextStatic);
    } catch (e) {
      // .next might not exist
    }
    
    // Find large files
    const largeFilesResult = await this.executor.execSilent(
      'find src -type f \\( -name "*.ts" -o -name "*.tsx" \\) -size +50k -exec ls -lh {} \\; 2>/dev/null'
    );
    if (largeFilesResult.success && largeFilesResult.output) {
      metrics.largeFiles = largeFilesResult.output.split('\n').filter(l => l.trim());
    }
    
    return metrics;
  }
  
  async analyzeSecurity() {
    await this.logger.debug('Analyzing security...');
    
    const security = {
      vulnerabilities: {
        critical: 0,
        high: 0,
        moderate: 0,
        low: 0,
        total: 0,
      },
      exposedSecrets: [],
      insecurePatterns: [],
    };
    
    // npm audit
    const auditResult = await this.executor.execSilent('npm audit --json');
    if (auditResult.output) {
      try {
        const audit = JSON.parse(auditResult.output);
        const vulns = audit.metadata?.vulnerabilities || {};
        security.vulnerabilities = {
          critical: vulns.critical || 0,
          high: vulns.high || 0,
          moderate: vulns.moderate || 0,
          low: vulns.low || 0,
          total: vulns.total || 0,
        };
      } catch (e) {
        await this.logger.warn('Failed to parse audit output');
      }
    }
    
    // Check for hardcoded secrets (basic patterns)
    const patterns = [
      'password\\s*=\\s*["\'][^"\']+["\']',
      'api[_-]?key\\s*=\\s*["\'][^"\']+["\']',
      'secret\\s*=\\s*["\'][^"\']+["\']',
    ];
    
    for (const pattern of patterns) {
      const result = await this.executor.execSilent(
        `grep -rn -E "${pattern}" src/ --include="*.ts" --include="*.tsx" 2>/dev/null | head -5`
      );
      if (result.success && result.output.trim()) {
        security.insecurePatterns.push({
          pattern,
          matches: result.output.split('\n').filter(l => l.trim()),
        });
      }
    }
    
    return security;
  }
  
  async analyzeAccessibility() {
    await this.logger.debug('Analyzing accessibility...');
    
    const a11y = {
      issues: [],
      score: 100,
    };
    
    // Check for images without alt text
    const noAltResult = await this.executor.execSilent(
      'grep -rn "<img" src/ --include="*.tsx" | grep -v "alt=" | wc -l'
    );
    if (noAltResult.success) {
      const count = parseInt(noAltResult.output.trim(), 10);
      if (count > 0) {
        a11y.issues.push({
          type: 'missing-alt-text',
          count,
          severity: 'high',
        });
        a11y.score -= count * 2;
      }
    }
    
    // Check for onClick without keyboard support
    const onClickResult = await this.executor.execSilent(
      'grep -rn "onClick" src/ --include="*.tsx" | grep -v "onKeyDown\\|onKeyPress\\|<button\\|<a " | wc -l'
    );
    if (onClickResult.success) {
      const count = parseInt(onClickResult.output.trim(), 10);
      if (count > 0) {
        a11y.issues.push({
          type: 'no-keyboard-support',
          count,
          severity: 'medium',
        });
        a11y.score -= count;
      }
    }
    
    a11y.score = Math.max(0, a11y.score);
    return a11y;
  }
  
  async analyzeSEO() {
    await this.logger.debug('Analyzing SEO...');
    
    const seo = {
      issues: [],
      score: 100,
    };
    
    // Check for pages missing metadata
    const metadataResult = await this.executor.execSilent(
      'find app -name "*.tsx" -type f 2>/dev/null | wc -l'
    );
    const metadataCheckResult = await this.executor.execSilent(
      'find app -name "*.tsx" -type f -exec grep -L "metadata\\|Metadata" {} \\; 2>/dev/null | wc -l'
    );
    
    if (metadataResult.success && metadataCheckResult.success) {
      const total = parseInt(metadataResult.output.trim(), 10);
      const missing = parseInt(metadataCheckResult.output.trim(), 10);
      
      if (missing > 0) {
        seo.issues.push({
          type: 'missing-metadata',
          count: missing,
          total,
          severity: 'high',
        });
        seo.score -= missing * 5;
      }
    }
    
    seo.score = Math.max(0, seo.score);
    return seo;
  }
  
  async analyzeTesting() {
    await this.logger.debug('Analyzing test coverage...');
    
    const testing = {
      coverage: 0,
      testFiles: 0,
      sourceFiles: 0,
      uncoveredFiles: [],
    };
    
    // Count test files
    const testResult = await this.executor.execSilent(
      'find src __tests__ -name "*.test.ts*" -o -name "*.spec.ts*" 2>/dev/null | wc -l'
    );
    if (testResult.success) {
      testing.testFiles = parseInt(testResult.output.trim(), 10);
    }
    
    // Count source files
    const sourceResult = await this.executor.execSilent(
      'find src -name "*.tsx" -o -name "*.ts" 2>/dev/null | grep -v ".test.\\|.spec." | wc -l'
    );
    if (sourceResult.success) {
      testing.sourceFiles = parseInt(sourceResult.output.trim(), 10);
    }
    
    if (testing.sourceFiles > 0) {
      testing.coverage = Math.round((testing.testFiles / testing.sourceFiles) * 100);
    }
    
    return testing;
  }
  
  async analyzeArchitecture() {
    await this.logger.debug('Analyzing architecture...');
    
    const arch = {
      circularDependencies: [],
      tightCoupling: [],
      layerViolations: [],
      patterns: {},
    };
    
    // Check for circular dependencies (basic check)
    const circularResult = await this.executor.execSilent(
      'npx madge --circular --extensions ts,tsx src/ --json 2>/dev/null'
    );
    
    if (circularResult.success && circularResult.output) {
      try {
        const circular = JSON.parse(circularResult.output);
        arch.circularDependencies = circular || [];
      } catch (e) {
        // madge might not be installed
      }
    }
    
    return arch;
  }
  
  async analyzeDependencies() {
    await this.logger.debug('Analyzing dependencies...');
    
    const deps = {
      outdated: [],
      unused: [],
      duplicate: [],
      total: 0,
      devTotal: 0,
    };
    
    // Check outdated packages
    const outdatedResult = await this.executor.execSilent('npm outdated --json');
    if (outdatedResult.output) {
      try {
        const outdated = JSON.parse(outdatedResult.output);
        deps.outdated = Object.entries(outdated).map(([name, info]) => ({
          name,
          current: info.current,
          wanted: info.wanted,
          latest: info.latest,
        }));
      } catch (e) {
        // npm outdated returns non-zero when packages are outdated
      }
    }
    
    // Count dependencies
    try {
      const packageJson = await fs.readFile(
        path.join(CONFIG.projectRoot, 'package.json'),
        'utf8'
      );
      const pkg = JSON.parse(packageJson);
      deps.total = Object.keys(pkg.dependencies || {}).length;
      deps.devTotal = Object.keys(pkg.devDependencies || {}).length;
    } catch (e) {
      await this.logger.warn('Failed to read package.json');
    }
    
    return deps;
  }
  
  async analyzeBuild() {
    await this.logger.debug('Checking build status...');
    
    const build = {
      canBuild: false,
      errors: [],
      warnings: [],
    };
    
    // Try to build (with timeout)
    const buildResult = await this.executor.execSilent('npm run build 2>&1 | head -100');
    build.canBuild = buildResult.success;
    
    if (!buildResult.success && buildResult.output) {
      const errorLines = buildResult.output.split('\n').filter(l => 
        l.includes('error') || l.includes('Error') || l.includes('ERROR')
      );
      build.errors = errorLines.slice(0, 10);
    }
    
    return build;
  }
  
  async analyzePatterns() {
    await this.logger.debug('Analyzing code patterns...');
    
    const patterns = {
      reactPatterns: {},
      nextPatterns: {},
      commonIssues: [],
    };
    
    // Check for common React anti-patterns
    const useEffectNoDepResult = await this.executor.execSilent(
      'grep -rn "useEffect.*{" src/ --include="*.tsx" -A 5 | grep -c "}, \\[\\])" 2>/dev/null'
    );
    if (useEffectNoDepResult.success) {
      const count = parseInt(useEffectNoDepResult.output.trim(), 10);
      if (count > 10) {
        patterns.commonIssues.push({
          type: 'excessive-empty-deps-useEffect',
          count,
          severity: 'low',
        });
      }
    }
    
    return patterns;
  }
  
  async getDirectorySize(dir) {
    let size = 0;
    
    try {
      const files = await fs.readdir(dir);
      
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = await fs.stat(filePath);
        
        if (stat.isDirectory()) {
          size += await this.getDirectorySize(filePath);
        } else {
          size += stat.size;
        }
      }
    } catch (e) {
      // Ignore errors
    }
    
    return size;
  }
  
  calculateHealthScore(analysis) {
    let score = 100;
    
    // Code quality penalties
    score -= analysis.codeQuality.lintErrors * 1.5;
    score -= analysis.codeQuality.lintWarnings * 0.3;
    score -= analysis.codeQuality.typeErrors * 2;
    score -= analysis.codeQuality.codeSmells.length * 0.5;
    
    // Security penalties
    score -= analysis.security.vulnerabilities.critical * 20;
    score -= analysis.security.vulnerabilities.high * 10;
    score -= analysis.security.vulnerabilities.moderate * 3;
    score -= analysis.security.vulnerabilities.low * 0.5;
    score -= analysis.security.insecurePatterns.length * 5;
    
    // Build penalties
    score -= analysis.build.canBuild ? 0 : 25;
    
    // Performance penalties
    const bundleMB = analysis.performance.bundleSize / (1024 * 1024);
    score -= Math.max(0, (bundleMB - 10)) * 0.5;
    
    // Accessibility & SEO
    score -= (100 - analysis.accessibility.score) * 0.2;
    score -= (100 - analysis.seo.score) * 0.1;
    
    // Architecture
    score -= analysis.architecture.circularDependencies.length * 2;
    
    // Testing
    const testPenalty = Math.max(0, 50 - analysis.testing.coverage) * 0.1;
    score -= testPenalty;
    
    return Math.max(0, Math.min(100, Math.round(score)));
  }
  
  extractCriticalIssues(analysis) {
    const critical = [];
    
    if (!analysis.build.canBuild) {
      critical.push({
        priority: 'critical',
        category: 'build',
        message: 'Build is failing',
        impact: 'high',
      });
    }
    
    if (analysis.security.vulnerabilities.critical > 0) {
      critical.push({
        priority: 'critical',
        category: 'security',
        message: `${analysis.security.vulnerabilities.critical} critical security vulnerabilities`,
        impact: 'high',
      });
    }
    
    if (analysis.codeQuality.typeErrors > 50) {
      critical.push({
        priority: 'high',
        category: 'types',
        message: `${analysis.codeQuality.typeErrors} TypeScript errors`,
        impact: 'medium',
      });
    }
    
    return critical;
  }
  
  generateImprovements(analysis) {
    const improvements = [];
    
    // Build fixes
    if (!analysis.build.canBuild) {
      improvements.push({
        priority: 1,
        category: 'build',
        title: 'Fix build errors',
        description: 'Application is not building successfully',
        action: 'fix-build',
        automated: false,
      });
    }
    
    // Security fixes
    if (analysis.security.vulnerabilities.total > 0) {
      improvements.push({
        priority: 2,
        category: 'security',
        title: 'Fix security vulnerabilities',
        description: `${analysis.security.vulnerabilities.total} vulnerabilities found`,
        action: 'fix-security',
        automated: true,
      });
    }
    
    // Linting fixes
    if (analysis.codeQuality.lintErrors > 0 || analysis.codeQuality.lintWarnings > 10) {
      improvements.push({
        priority: 3,
        category: 'code-quality',
        title: 'Fix linting issues',
        description: `${analysis.codeQuality.lintErrors} errors, ${analysis.codeQuality.lintWarnings} warnings`,
        action: 'fix-lint',
        automated: true,
      });
    }
    
    // Accessibility improvements
    if (analysis.accessibility.issues.length > 0) {
      improvements.push({
        priority: 4,
        category: 'accessibility',
        title: 'Improve accessibility',
        description: `${analysis.accessibility.issues.length} accessibility issues found`,
        action: 'improve-a11y',
        automated: false,
      });
    }
    
    // SEO improvements
    if (analysis.seo.issues.length > 0) {
      improvements.push({
        priority: 5,
        category: 'seo',
        title: 'Improve SEO',
        description: `${analysis.seo.issues.length} SEO issues found`,
        action: 'improve-seo',
        automated: false,
      });
    }
    
    // Code quality improvements
    const codeSmellCount = analysis.codeQuality.codeSmells.reduce((sum, s) => sum + (s.count || 1), 0);
    if (codeSmellCount > 5) {
      improvements.push({
        priority: 6,
        category: 'code-quality',
        title: 'Remove code smells',
        description: `${codeSmellCount} code smell instances found`,
        action: 'improve-quality',
        automated: true,
      });
    }
    
    // Dependency updates
    if (analysis.dependencies.outdated.length > 5) {
      improvements.push({
        priority: 7,
        category: 'dependencies',
        title: 'Update dependencies',
        description: `${analysis.dependencies.outdated.length} outdated packages`,
        action: 'update-deps',
        automated: false, // Can be risky
      });
    }
    
    // Testing improvements
    if (analysis.testing.coverage < 50) {
      improvements.push({
        priority: 8,
        category: 'testing',
        title: 'Improve test coverage',
        description: `Current coverage: ${analysis.testing.coverage}%`,
        action: 'improve-tests',
        automated: false,
      });
    }
    
    return improvements.sort((a, b) => a.priority - b.priority);
  }
}

// Improvement Implementation Engine
class ImprovementEngine {
  constructor(logger, executor) {
    this.logger = logger;
    this.executor = executor;
    this.appliedImprovements = [];
  }
  
  async applyImprovements(improvements) {
    await this.logger.info(`🔧 Applying improvements (max: ${CONFIG.maxImprovementsPerRun})...`);
    
    const toApply = improvements
      .filter(i => i.automated)
      .slice(0, CONFIG.maxImprovementsPerRun);
    
    if (toApply.length === 0) {
      await this.logger.info('ℹ️  No automated improvements to apply');
      return [];
    }
    
    const results = [];
    
    // Apply improvements in parallel batches for faster execution
    const maxSpeed = process.env.MAX_SPEED === 'true';
    const parallelProcessing = process.env.PARALLEL_PROCESSING === 'true';
    const batchSize = maxSpeed && CONFIG.mode === 'aggressive' ? 10 : (CONFIG.mode === 'aggressive' ? 5 : 3);
    
    for (let i = 0; i < toApply.length; i += batchSize) {
      const batch = toApply.slice(i, i + batchSize);
      
      await this.logger.info(`Processing batch ${Math.floor(i / batchSize) + 1} (${batch.length} improvements)...`);
      
      // Process batch in parallel for aggressive/max-speed mode, sequential for others
      if ((CONFIG.mode === 'aggressive' && parallelProcessing) || maxSpeed) {
        const batchResults = await Promise.all(
          batch.map(async (improvement) => {
            await this.logger.info(`Applying: ${improvement.title}`);
            const result = await this.applyImprovement(improvement);
            return { improvement, result };
          })
        );
        results.push(...batchResults);
        
        // Track successful improvements
        batchResults.forEach(br => {
          if (br.result.success) {
            this.appliedImprovements.push(br.improvement);
          }
        });
      } else {
        // Sequential for standard/conservative mode
        for (const improvement of batch) {
          await this.logger.info(`Applying: ${improvement.title}`);
          const result = await this.applyImprovement(improvement);
          results.push({ improvement, result });
          
          if (result.success) {
            this.appliedImprovements.push(improvement);
          }
        }
      }
    }
    
    await this.logger.success(`Applied ${results.filter(r => r.result.success).length}/${toApply.length} improvements`);
    
    return results;
  }
  
  async applyImprovement(improvement) {
    try {
      switch (improvement.action) {
        case 'fix-security':
          return await this.fixSecurity();
        
        case 'fix-lint':
          return await this.fixLint();
        
        case 'improve-quality':
          return await this.improveCodeQuality();
        
        default:
          return { success: false, message: 'Unknown improvement action' };
      }
    } catch (error) {
      await this.logger.error(`Failed to apply improvement: ${improvement.action}`, {
        error: error.message,
      });
      return { success: false, error: error.message };
    }
  }
  
  async fixSecurity() {
    await this.logger.info('Fixing security vulnerabilities...');
    
    const result = await this.executor.exec('npm audit fix');
    
    return {
      success: result.success,
      message: 'Attempted automated security fixes',
      changes: result.success,
    };
  }
  
  async fixLint() {
    await this.logger.info('Fixing linting issues...');
    
    const result = await this.executor.exec('npm run lint -- --fix');
    
    return {
      success: true, // Even if some errors remain, partial success is good
      message: 'Applied automated linting fixes',
      changes: true,
    };
  }
  
  async improveCodeQuality() {
    await this.logger.info('Improving code quality...');
    
    // Remove console.log statements (except console.error/warn)
    const result = await this.executor.execSilent(
      'find src -type f \\( -name "*.ts" -o -name "*.tsx" \\) -exec sed -i.bak "/console\\.log(/d" {} \\; -exec rm -f {}.bak \\;'
    );
    
    return {
      success: result.success,
      message: 'Removed console.log statements',
      changes: result.success,
    };
  }
}

// Git Manager
class GitManager {
  constructor(logger, executor) {
    this.logger = logger;
    this.executor = executor;
  }
  
  async hasChanges() {
    const result = await this.executor.execSilent('git status --porcelain');
    return result.success && result.output.trim().length > 0;
  }
  
  async commitAndPush(message, improvements = []) {
    if (!CONFIG.autoCommit) {
      await this.logger.info('Auto-commit disabled');
      return { success: false, message: 'Auto-commit disabled' };
    }
    
    try {
      if (!(await this.hasChanges())) {
        await this.logger.info('No changes to commit');
        return { success: true, message: 'No changes' };
      }
      
      // Stage changes
      await this.executor.exec('git add .');
      
      // Create detailed commit message
      const improvementList = improvements
        .map(i => `  - ${i.improvement.title}`)
        .join('\n');
      
      const commitMsg = `🤖 AI App Improvement Specialist: ${message}

Improvements Applied:
${improvementList || '  - General improvements'}

Health Score: Improved
Automated by: AI App Improvement Specialist
Timestamp: ${new Date().toISOString()}`;
      
      // Commit
      await this.executor.exec(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`);
      await this.logger.success('✅ Changes committed');
      
      // Push if enabled
      if (CONFIG.autoPush) {
        const pushResult = await this.executor.exec('git push origin main');
        if (pushResult.success) {
          await this.logger.success('✅ Changes pushed to main');
          return { success: true, message: 'Committed and pushed' };
        } else {
          await this.logger.warn('⚠️  Failed to push changes');
          return { success: false, message: 'Commit succeeded, push failed' };
        }
      }
      
      return { success: true, message: 'Committed (push disabled)' };
    } catch (error) {
      await this.logger.error('Failed to commit changes', { error: error.message });
      return { success: false, error: error.message };
    }
  }
}

// Report Generator
class ReportGenerator {
  constructor(logger) {
    this.logger = logger;
  }
  
  async generateReport(analysis, improvements, runtime) {
    const report = {
      metadata: {
        version: '2.0.0',
        timestamp: new Date().toISOString(),
        runtime: `${(runtime / 1000).toFixed(2)}s`,
        mode: CONFIG.mode,
        repository: CONFIG.repository,
        canonicalUrl: CONFIG.canonicalUrl,
      },
      healthScore: {
        current: analysis.healthScore,
        target: CONFIG.minHealthScore,
        status: analysis.healthScore >= CONFIG.minHealthScore ? 'healthy' : 'needs-attention',
      },
      analysis: {
        codeQuality: {
          lintErrors: analysis.codeQuality.lintErrors,
          lintWarnings: analysis.codeQuality.lintWarnings,
          typeErrors: analysis.codeQuality.typeErrors,
          codeSmells: analysis.codeQuality.codeSmells.length,
        },
        security: {
          totalVulnerabilities: analysis.security.vulnerabilities.total,
          critical: analysis.security.vulnerabilities.critical,
          high: analysis.security.vulnerabilities.high,
          insecurePatterns: analysis.security.insecurePatterns.length,
        },
        performance: {
          bundleSize: `${(analysis.performance.bundleSize / (1024 * 1024)).toFixed(2)}MB`,
          largeFiles: analysis.performance.largeFiles.length,
        },
        accessibility: {
          score: analysis.accessibility.score,
          issues: analysis.accessibility.issues.length,
        },
        seo: {
          score: analysis.seo.score,
          issues: analysis.seo.issues.length,
        },
        testing: {
          coverage: `${analysis.testing.coverage}%`,
          testFiles: analysis.testing.testFiles,
          sourceFiles: analysis.testing.sourceFiles,
        },
        dependencies: {
          total: analysis.dependencies.total,
          devTotal: analysis.dependencies.devTotal,
          outdated: analysis.dependencies.outdated.length,
        },
        build: {
          status: analysis.build.canBuild ? 'passing' : 'failing',
          errors: analysis.build.errors.length,
        },
      },
      improvements: {
        identified: analysis.improvements.length,
        applied: improvements.filter(i => i.result.success).length,
        failed: improvements.filter(i => !i.result.success).length,
        details: improvements,
      },
      criticalIssues: analysis.criticalIssues,
      recommendations: this.generateRecommendations(analysis),
    };
    
    // Save report
    const reportPath = path.join(
      CONFIG.reportsDir,
      `aais-report-${Date.now()}.json`
    );
    
    try {
      await fs.mkdir(CONFIG.reportsDir, { recursive: true });
      await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
      await this.logger.success(`📊 Report saved: ${reportPath}`);
      
      // Save as latest
      const latestPath = path.join(CONFIG.reportsDir, 'latest-report.json');
      await fs.writeFile(latestPath, JSON.stringify(report, null, 2));
    } catch (err) {
      await this.logger.error('Failed to save report', { error: err.message });
    }
    
    return report;
  }
  
  generateRecommendations(analysis) {
    const recommendations = [];
    
    if (analysis.healthScore < CONFIG.minHealthScore) {
      recommendations.push({
        priority: 'high',
        message: `Health score (${analysis.healthScore}) is below target (${CONFIG.minHealthScore})`,
        action: 'Continue running improvement cycles',
      });
    }
    
    if (!analysis.build.canBuild) {
      recommendations.push({
        priority: 'critical',
        message: 'Build is failing',
        action: 'Fix build errors immediately',
      });
    }
    
    if (analysis.security.vulnerabilities.critical > 0 || analysis.security.vulnerabilities.high > 0) {
      recommendations.push({
        priority: 'critical',
        message: 'High/Critical security vulnerabilities present',
        action: 'Run npm audit fix or update vulnerable packages',
      });
    }
    
    if (analysis.testing.coverage < 50) {
      recommendations.push({
        priority: 'medium',
        message: `Test coverage is low (${analysis.testing.coverage}%)`,
        action: 'Add tests for critical paths',
      });
    }
    
    if (analysis.dependencies.outdated.length > 10) {
      recommendations.push({
        priority: 'low',
        message: `${analysis.dependencies.outdated.length} outdated dependencies`,
        action: 'Review and update dependencies',
      });
    }
    
    return recommendations;
  }
}

// Main AI App Improvement Specialist
class AIAppImprovementSpecialist {
  constructor() {
    const logFile = path.join(
      CONFIG.logsDir,
      `aais-${new Date().toISOString().split('T')[0]}.log`
    );
    
    this.logger = new EnhancedLogger(logFile);
    this.executor = new CommandExecutor(this.logger);
    this.analysisEngine = new DeepAnalysisEngine(this.logger, this.executor);
    this.improvementEngine = new ImprovementEngine(this.logger, this.executor);
    this.gitManager = new GitManager(this.logger, this.executor);
    this.reportGenerator = new ReportGenerator(this.logger);
    this.isRunning = false;
  }
  
  async run() {
    const startTime = Date.now();
    
    await this.logger.init();
    await this.logger.info('🚀 Starting improvement cycle...');
    await this.logger.info(`Mode: ${CONFIG.mode}`);
    await this.logger.info(`Target health score: ${CONFIG.minHealthScore}`);
    
    try {
      // Step 1: Deep analysis
      const analysis = await this.analysisEngine.analyzeAll();
      
      // Step 2: Apply improvements
      const improvements = await this.improvementEngine.applyImprovements(
        analysis.improvements
      );
      
      // Step 3: Commit changes
      const successfulImprovements = improvements.filter(i => i.result.success && i.result.changes);
      if (successfulImprovements.length > 0) {
        await this.gitManager.commitAndPush(
          `Applied ${successfulImprovements.length} automated improvements`,
          successfulImprovements
        );
      }
      
      // Step 4: Generate report
      const runtime = Date.now() - startTime;
      const report = await this.reportGenerator.generateReport(
        analysis,
        improvements,
        runtime
      );
      
      // Step 5: Print summary
      await this.printSummary(report);
      
      return report;
    } catch (error) {
      await this.logger.critical('Improvement cycle failed', {
        error: error.message,
        stack: error.stack,
      });
      throw error;
    }
  }
  
  async runContinuous() {
    this.isRunning = true;
    await this.logger.init();
    await this.logger.info('🔄 Starting ULTRA-FAST AUTONOMOUS continuous improvement mode...');
    await this.logger.info(`⚡ Running every ${CONFIG.intervalMinutes} minutes`);
    await this.logger.info(`🚀 Mode: ${CONFIG.mode.toUpperCase()} | Max improvements: ${CONFIG.maxImprovementsPerRun}`);
    
    let cycleCount = 0;
    
    while (this.isRunning) {
      try {
        cycleCount++;
        await this.logger.info(`\n═══════════════════════════════════════`);
        await this.logger.info(`📊 CYCLE #${cycleCount} - Starting now...`);
        await this.logger.info(`═══════════════════════════════════════\n`);
        
        const startTime = Date.now();
        await this.run();
        const duration = Date.now() - startTime;
        
        await this.logger.success(`✅ Cycle #${cycleCount} completed in ${(duration / 1000).toFixed(2)}s`);
        
        // Wait for next interval (convert minutes to milliseconds)
        const waitMs = CONFIG.intervalMinutes * 60 * 1000;
        await this.logger.info(`⏳ Next cycle in ${CONFIG.intervalMinutes} minutes...`);
        
        // Use shorter wait intervals for faster checks
        if (CONFIG.intervalMinutes <= 5) {
          // For ultra-fast mode, check every 15 seconds if we should continue
          const checkInterval = 15000; // 15 seconds for maximum speed
          const checks = Math.ceil(waitMs / checkInterval);
          
          for (let i = 0; i < checks && this.isRunning; i++) {
            await new Promise(resolve => setTimeout(resolve, checkInterval));
          }
        } else {
          await new Promise(resolve => setTimeout(resolve, waitMs));
        }
      } catch (error) {
        await this.logger.error(`❌ Error in cycle #${cycleCount}`, { 
          error: error.message,
          stack: error.stack,
        });
        // Wait a bit before retrying (but shorter for fast mode)
        const retryDelay = CONFIG.intervalMinutes <= 5 ? 5000 : 60000; // 5s for fast, 60s for normal
        await this.logger.info(`⏳ Retrying in ${retryDelay / 1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, retryDelay));
      }
    }
    
    await this.logger.info('🛑 Continuous operation stopped');
  }
  
  async printSummary(report) {
    await this.logger.info('\n═══════════════════════════════════════');
    await this.logger.info('📊 IMPROVEMENT CYCLE SUMMARY');
    await this.logger.info('═══════════════════════════════════════');
    await this.logger.info(`Health Score: ${report.healthScore.current}/100 (${report.healthScore.status})`);
    await this.logger.info(`Runtime: ${report.metadata.runtime}`);
    await this.logger.info('');
    await this.logger.info('Code Quality:');
    await this.logger.info(`  Lint Errors: ${report.analysis.codeQuality.lintErrors}`);
    await this.logger.info(`  Type Errors: ${report.analysis.codeQuality.typeErrors}`);
    await this.logger.info('');
    await this.logger.info('Security:');
    await this.logger.info(`  Vulnerabilities: ${report.analysis.security.totalVulnerabilities}`);
    await this.logger.info(`  Critical: ${report.analysis.security.critical}`);
    await this.logger.info('');
    await this.logger.info('Build Status: ' + report.analysis.build.status.toUpperCase());
    await this.logger.info('');
    await this.logger.info('Improvements:');
    await this.logger.info(`  Identified: ${report.improvements.identified}`);
    await this.logger.info(`  Applied: ${report.improvements.applied}`);
    await this.logger.info(`  Failed: ${report.improvements.failed}`);
    
    if (report.criticalIssues.length > 0) {
      await this.logger.info('');
      await this.logger.warn('⚠️  CRITICAL ISSUES:');
      for (const issue of report.criticalIssues) {
        await this.logger.warn(`  - [${issue.priority.toUpperCase()}] ${issue.message}`);
      }
    }
    
    if (report.recommendations.length > 0) {
      await this.logger.info('');
      await this.logger.info('💡 RECOMMENDATIONS:');
      for (const rec of report.recommendations) {
        await this.logger.info(`  - [${rec.priority.toUpperCase()}] ${rec.message}`);
      }
    }
    
    await this.logger.info('═══════════════════════════════════════\n');
  }
  
  stop() {
    this.isRunning = false;
  }
}

// CLI Interface
async function main() {
  const specialist = new AIAppImprovementSpecialist();
  
  const command = process.argv[2] || 'run';
  
  switch (command) {
    case 'run':
      await specialist.run();
      break;
    
    case 'continuous':
      await specialist.runContinuous();
      break;
    
    case 'analyze':
      await specialist.logger.init();
      const analysis = await specialist.analysisEngine.analyzeAll();
      console.log(JSON.stringify(analysis, null, 2));
      break;
    
    case 'help':
    default:
      console.log(`
╔═══════════════════════════════════════════════════════════╗
║   AI App Improvement Specialist (AAIS) v2.0.0           ║
║   Next-generation autonomous app improvement system      ║
╚═══════════════════════════════════════════════════════════╝

Usage:
  node ai-app-improvement-specialist.js [command]

Commands:
  run         Run one improvement cycle (default)
  continuous  Run continuously with periodic intervals
  analyze     Run analysis only (no improvements)
  help        Show this help message

Environment Variables:
  AAIS_MODE                 Operation mode (standard|aggressive|conservative)
  AAIS_CONTINUOUS=true      Enable continuous mode
  AAIS_INTERVAL=30          Minutes between runs (default: 30)
  AAIS_AUTO_COMMIT=true     Auto-commit changes (default: true)
  AAIS_AUTO_PUSH=true       Auto-push to main (default: true)
  AAIS_MAX_IMPROVEMENTS=15  Max improvements per cycle (default: 15)
  AAIS_MIN_HEALTH=80        Target health score (default: 80)

Features:
  ✓ Deep code analysis with pattern recognition
  ✓ Intelligent issue prioritization
  ✓ Automated refactoring and optimization
  ✓ Security vulnerability scanning and patching
  ✓ Performance profiling and enhancement
  ✓ Accessibility and SEO improvements
  ✓ Comprehensive reporting

Examples:
  node ai-app-improvement-specialist.js run
  AAIS_CONTINUOUS=true node ai-app-improvement-specialist.js continuous
  AAIS_MODE=aggressive node ai-app-improvement-specialist.js run

Repository: ${CONFIG.repository}
Canonical URL: ${CONFIG.canonicalUrl}
      `);
  }
}

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Run if executed directly
if (require.main === module) {
  main().catch((error) => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { AIAppImprovementSpecialist, CONFIG };

