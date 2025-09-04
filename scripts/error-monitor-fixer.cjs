#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ErrorMonitorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.ensureDirectories()}

  ensureDirectories() {
    [this.reportsDir, this.logsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })}
    })}

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`)}

  detectCommonErrors() {
    this.log('🔍 Detecting common errors in codebase');

    const errors = {
      syntaxErrors: [],
      importErrors: [],
      typeErrors: [],
      lintErrors: [],
      buildErrors: []
    };

    // Check for syntax errors in source files
    const srcDir = path.join(this.projectRoot, 'src');
    const pagesDir = path.join(this.projectRoot, 'pages');
    const componentsDir = path.join(this.projectRoot, 'components');

    [srcDir, pagesDir, componentsDir].forEach(dir => {
      if (fs.existsSync(dir)) {
        this.scanDirectoryForErrors(dir, errors)}
    });

    return errors}

  scanDirectoryForErrors(dir, errors) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    files.forEach(file => {
      const filePath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.scanDirectoryForErrors(filePath, errors)} else if (file.name.match(/\.(ts|tsx|js|jsx)$/)) {
        this.analyzeFileForErrors(filePath, errors)}
    })}

  analyzeFileForErrors(filePath, errors) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(this.projectRoot, filePath);

      // Check for common syntax errors
      const syntaxIssues = [
        { pattern: /<<<<<<< HEAD/, message: 'Merge conflict markers found' },
        { pattern: /=======/, message: 'Merge conflict markers found' },
        { pattern: />>>>>>>/, message: 'Merge conflict markers found' },
        { pattern: /import\s+.*?from\s+['"][^'"]*?['"]\s*['"]/, message: 'Unterminated import string' },
        { pattern: /className=\{`[^`]*\$\{[^}]*\}[^`]*$/, message: 'Unterminated template literal' },
        { pattern: /console\.log\([^)]*$/, message: 'Unterminated console.log' }
      ];

      syntaxIssues.forEach(({ pattern, message }) => {
        if (pattern.test(content)) {
          errors.syntaxErrors.push({
            file: relativePath,
            message,
            line: this.findLineNumber(content, pattern)
          })}
      });

      // Check for import issues
      const importIssues = [
        { pattern: /import\s+.*?from\s+['"]([^'"]*?)['"]\s*$/, message: 'Missing semicolon in import' },
        { pattern: /import\s+.*?from\s+['"]([^'"]*?)['"]\s*['"]/, message: 'Double quotes in import' }
      ];

      importIssues.forEach(({ pattern, message }) => {
        if (pattern.test(content)) {
          errors.importErrors.push({
            file: relativePath,
            message,
            line: this.findLineNumber(content, pattern)
          })}
      })} catch (error) {
      errors.syntaxErrors.push({
        file: path.relative(this.projectRoot, filePath),
        message: `File read error: ${error.message}`,
        line: 0
      })}
  }

  findLineNumber(content, pattern) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (pattern.test(lines[i])) {
        return i + 1}
    }
    return 0}

  fixCommonErrors(errors) {
    this.log('🔧 Fixing common errors');

    let fixedCount = 0;

    // Fix syntax errors
    errors.syntaxErrors.forEach(error => {
      if (this.fixSyntaxError(error)) {
        fixedCount++}
    });

    // Fix import errors
    errors.importErrors.forEach(error => {
      if (this.fixImportError(error)) {
        fixedCount++}
    });

    return fixedCount}

  fixSyntaxError(error) {
    try {
      const filePath = path.join(this.projectRoot, error.file);
      let content = fs.readFileSync(filePath, 'utf8');

      let fixed = false;

      // Fix merge conflict markers
      if (error.message.includes('Merge conflict')) {
        content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>>.*$/gm, '');
        fixed = true}

      // Fix unterminated strings
      if (error.message.includes('Unterminated')) {
        content = content.replace(/import\s+.*?from\s+['"]([^'"]*?)['"]\s*['"]/g, (match) => {
          return match.replace(/['"]\s*['"]$/, '"')});
        fixed = true}

      // Fix template literals
      if (error.message.includes('template literal')) {
        content = content.replace(/className=\{`([^`]*)\$\{([^}]*)\}([^`]*)$/g, 'className={`$1${$2}$3`}');
        fixed = true}

      if (fixed) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`✅ Fixed syntax error in ${error.file}`);
        return true}

      return false} catch (error) {
      this.log(`❌ Failed to fix syntax error in ${error.file}: ${error.message}`);
      return false}
  }

  fixImportError(error) {
    try {
      const filePath = path.join(this.projectRoot, error.file);
      let content = fs.readFileSync(filePath, 'utf8');

      let fixed = false;

      // Fix missing semicolons
      if (error.message.includes('Missing semicolon')) {
        content = content.replace(/import\s+.*?from\s+['"]([^'"]*?)['"]\s*$/gm, (match) => {
          if (!match.endsWith(';')) {
            return match + ';'}
          return match});
        fixed = true}

      // Fix double quotes
      if (error.message.includes('Double quotes')) {
        content = content.replace(/import\s+.*?from\s+['"]([^'"]*?)['"]\s*['"]/g, (match) => {
          return match.replace(/['"]\s*['"]$/, '"')});
        fixed = true}

      if (fixed) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`✅ Fixed import error in ${error.file}`);
        return true}

      return false} catch (error) {
      this.log(`❌ Failed to fix import error in ${error.file}: ${error.message}`);
      return false}
  }

  runBuildChecks() {
    this.log('🔍 Running build checks');

    const checks = {
      lintCheck: false,
      typeCheck: false,
      buildCheck: false
    };

    try {
      // Run linting
      execSync('npm run lint', { cwd: this.projectRoot, stdio: 'pipe' });
      checks.lintCheck = true;
      this.log('✅ Lint check passed')} catch (error) {
      this.log('❌ Lint check failed')}

    try {
      // Run type check
      execSync('npm run type-check:fast', { cwd: this.projectRoot, stdio: 'pipe' });
      checks.typeCheck = true;
      this.log('✅ Type check passed')} catch (error) {
      this.log('❌ Type check failed')}

    try {
      // Run build check
      execSync('npm run build:fast', { cwd: this.projectRoot, stdio: 'pipe' });
      checks.buildCheck = true;
      this.log('✅ Build check passed')} catch (error) {
      this.log('❌ Build check failed')}

    return checks}

  generateErrorReport(errors, fixedCount, checks) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalErrors: errors.syntaxErrors.length + errors.importErrors.length,
        fixedErrors: fixedCount,
        remainingErrors: (errors.syntaxErrors.length + errors.importErrors.length) - fixedCount
      },
      errors: {
        syntaxErrors: errors.syntaxErrors,
        importErrors: errors.importErrors,
        typeErrors: errors.typeErrors,
        lintErrors: errors.lintErrors,
        buildErrors: errors.buildErrors
      },
      checks: checks,
      recommendations: this.generateRecommendations(errors, checks)
    };

    const reportPath = path.join(this.reportsDir, 'error-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    return report}

  generateRecommendations(errors, checks) {
    const recommendations = [];

    if (errors.syntaxErrors.length > 0) {
      recommendations.push('Review and fix remaining syntax errors manually')}

    if (errors.importErrors.length > 0) {
      recommendations.push('Check import statements for missing dependencies')}

    if (!checks.lintCheck) {
      recommendations.push('Fix linting issues to improve code quality')}

    if (!checks.typeCheck) {
      recommendations.push('Resolve TypeScript type errors')}

    if (!checks.buildCheck) {
      recommendations.push('Fix build errors before deployment')}

    if (recommendations.length === 0) {
      recommendations.push('Codebase is in good condition!')}

    return recommendations}

  async run() {
    this.log('🚀 Starting Error Monitor and Fixer');

    try {
      // Detect errors
      const errors = this.detectCommonErrors();
      this.log(`Found ${errors.syntaxErrors.length} syntax errors and ${errors.importErrors.length} import errors`);

      // Fix errors
      const fixedCount = this.fixCommonErrors(errors);

      // Run build checks
      const checks = this.runBuildChecks();

      // Generate report
      const report = this.generateErrorReport(errors, fixedCount, checks);

      this.log('✅ Error Monitor and Fixer completed');
      this.log(`   Fixed: ${fixedCount} errors`);
      this.log(`   Remaining: ${report.summary.remainingErrors} errors`);

      return report} catch (error) {
      this.log(`❌ Error Monitor and Fixer failed: ${error.message}`);
      throw error}
  }
}

// Run the error monitor
if (require.main === module) {
  const monitor = new ErrorMonitorFixer();
  monitor.run().catch(console.error)}

module.exports = ErrorMonitorFixer;