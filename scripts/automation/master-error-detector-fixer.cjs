

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const appendFile = promisify(fs.appendFile);
;
class MasterErrorDetectorFixer {;
  constructor() {;
    this.projectRoot = process.cwd();

    console.log(`📁 Project Root: ${this.projectRoot});console.log(📊 Log Directory: ${this.logDir}``)}
;
  ensureDirectories() {;
    ['this.logDir', 'this.reportsDir'].forEach(dir => {;
      if (!fs.existsSync(dir)) {;

        fs.mkdirSync(dir { recursive: true })}
    })}

      }}
  }
;
  async detectTypeScriptErrors() {;
    await this.log('🔍 Detecting TypeScript errors...');
    ;
    const result = await this.executeCommand('npm run type-check' { silent: true });
    ;
    if (!result.success) {;
      const errors = this.parseTypeScriptErrors(result.output);

      await this.log(❌ Found ${errors.length} TypeScript errors, 'ERROR'`);
      return errors}
    ;
    await this.log('✅ No TypeScript errors found');

    return []}
;
  parseTypeScriptErrors(output) {;
    const lines = output.split('\n');
    const errors = [];
    let currentError = null;
    ;
    for (const line of lines) {;
      if (line.includes('error TS')) {;
        if (currentError) {;
          errors.push(currentError)}
        currentError = {;
          file: ',;
          line: ',;
          message: line.trim()}} else if (currentError && line.includes('src/')) {;
        const match = line.match(/(\d+):(\d+)/);
        if (match) {;
          currentError.file = line.split(':')[0];
          currentError.line = match[1]}
      }
    }
    ;
    if (currentError) {;
      errors.push(currentError)}
    ;
    return errors}
;
  async detectLintingErrors() {;
    await this.log('🔍 Detecting ESLint errors...');
    ;
    const result = await this.executeCommand('npm run lint' { silent: true });
    ;
    if (!result.success) {;
      const errors = this.parseLintingErrors(result.output)});
      await this.log(`❌ Found ${errors.length} ESLint errors`, `ERROR`);
      return errors}

    return []}
;
  parseLintingErrors(output) {;
    const lines = output.split('\n');
    const errors = [];
    ;
    for (const line of lines) {;
      if (line.includes('error') && line.includes('src/')) {;
        const parts = line.split(':');
        if (parts.length >= 4) {;
          errors.push({;
            file: parts[0],;
            line: parts[1],;
            column: parts[2],;
            message: parts.slice(3).join(':').trim()})}
      }
    }
    ;
    return errors}
;
  async detectBuildErrors() {;
    await this.log('🔍 Detecting build errors...');
    ;
    const result = await this.executeCommand('npm run build' { silent: true });
    ;
    if (!result.success) {;
      const errors = this.parseBuildErrors(result.output)});
      await this.log(`❌ Found ${errors.length} build errors`, `ERROR`);
      return errors}

    return []}
;
  parseBuildErrors(output) {;
    const lines = output.split('\n');
    const errors = [];
    ;
    for (const line of lines) {;
      if (line.includes('Type error:') || line.includes('Failed to compile')) {;
        errors.push({;
          type: 'build',;
          message: line.trim()})}
    }
    ;
    return errors}
;
  async detectDependencyIssues() {;
    await this.log('🔍 Detecting dependency issues...');
    ;
    const result = await this.executeCommand('npm audit --json' { silent: true });
    ;
    if (result.success) {;
      try {;
        const audit = JSON.parse(result.output);
        const vulnerabilities = audit.metadata?.vulnerabilities || {};
        const totalVulnerabilities = Object.values(vulnerabilities).reduce((sum, count) => sum + count, 0)});
          await this.log(`⚠️ Found ${totalVulnerabilities} security vulnerabilities`, `WARN`);
          return audit}

    if (!typescriptErrors) return;
    ;
    for (const error of typescriptErrors.details) {;
      try {;
        await this.fixTypeScriptError(error)} catch (e) {await this.log(`Failed to fix TypeScript error in ${error.file}: ${e.message}`, `ERROR`)}
    }
  }
;
  async fixTypeScriptError(error) {;
    if (!error.file || !fs.existsSync(error.file)) return})}
      }
    }

      await this.log('✅ ESLint errors auto-fixed')} else {;
      await this.log('⚠️ Some ESLint errors could not be auto-fixed', 'WARN')}
  }
;
  async fixBuildErrors() {;
    await this.log('🔧 Fixing build errors...');
    ;
    const buildErrors = this.errors.find(e => e.type === 'build');
    if (!buildErrors) return;
    ;
    for (const error of buildErrors.details) {;
      if (error.message.includes('ServicesPage')) {;
        await this.fixServicesPageError()}
    }
  }

      );
      ;
      await writeFile(appFile, content);
      await this.log('Fixed ServicesPage import in App.tsx')}
  }
;
  async fixDependencyIssues() {;
    await this.log('🔧 Fixing dependency issues...');

    // Try to fix security vulnerabilities;
    const result = await this.executeCommand('npm audit fix' { silent: true });
    ;
    if (result.success) {;
      await this.log('✅ Dependency issues fixed')} else {;
      await this.log('⚠️ Some dependency issues could not be auto-fixed', 'WARN')}
  }
;
  async generateReport() {;
    const report = {;
      timestamp: this.startTime.toISOString(),;
      duration: Date.now() - this.startTime.getTime(),;
      totalErrors: this.errors.reduce((sum, e) => sum + e.count, 0),;
      errorsByType: this.errors.reduce((acc, e) => {;
        acc[e.type] = e.count;
        return acc;

      // Detect all types of errors;
      await this.detectTypeScriptErrors();
      await this.detectLintingErrors();
      await this.detectBuildErrors();
      await this.detectDependencyIssues();

      // Fix errors;
      await this.fixTypeScriptErrors();
      await this.fixLintingErrors();
      await this.fixBuildErrors();
      await this.fixDependencyIssues();

      // Generate report;
      const report = await this.generateReport();
      await this.log(`✅ Error detection and fixing completed!`);await this.log(`📊 Total errors found: ${report.totalErrors}`);await this.log(`🔧 Errors fixed: ${this.fixes.length}`);
      ;
      return report;

      throw error}
  }
;
  async runContinuous(interval = 300000) { // 5 minutes defaultawait this.log(`🔄 Starting continuous error detection (interval: ${interval}ms)`);
    ;
    while (true) {;
      try {;
        await this.run();await this.log(`⏰ Waiting ${interval}ms before next check...`);
        await new Promise(resolve => setTimeout(resolve, interval));

        await new Promise(resolve => setTimeout(resolve, 60000)); // Wait 1 minute on error}
    }
  }
}

  const detector = new MasterErrorDetectorFixer();
  ;
  const args = process.argv.slice(2);
  const continuous = args.includes(`--continuous') || args.includes('-c');
  const interval = parseInt(args.find(arg => arg.startsWith('--interval='))?.split('=')[1]) || 300000;
  ;
  if (continuous) {;
    detector.runContinuous(interval)} else {;
    detector.run().then(() => {;
      process.exit(0)}).catch((error) => {;
      console.error('Error:', error);
      process.exit(1)})}
}
;
module.exports = MasterErrorDetectorFixer;