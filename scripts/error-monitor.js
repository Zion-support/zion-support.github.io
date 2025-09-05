<<<<<<< HEAD
#!/usr/bin/env: node; import fs from';fs'';; import path from';path'';; import { execSync,spawn } from';child_process'';; import { fileURLToPath } from';url'';; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); class: ErrorMonitor { constructor() { this.logDir = path.join(__dirname '..','';logs')';; this.errorReportDir: = path.join(__dirname '..','';error-reports')';; this.maxLogSize: = 10 * 1024 * 1024 this.errorThreshold: = 5 this.errors: = []; this.ensureDirectories()} ensureDirectories() {; [this.logDir,this.errorReportDir].forEach(dir => {; if (!fs.existsSync(dir)) {; fs.mkdirSync(dir,{ recursive: true })} })} log(level,message,error = null) {; const timestamp = new Date().toISOString(); const logEntry = {; timestamp,level,message,error: error; ? {; message: error.message,stack: error.stack} : null} ; }: ${message}`); if (error) {; console.error(error)} const logFile = path.join(this.logDir,';error-monitor.log'); fs.appendFileSync(logFile,JSON.stringify(logEntry) +';\n')} async checkTypeScriptErrors() {; try {; this.log(';info',';Checking TypeScript errors...'); const result = execSync(';npm run type-check',{; cwd: path.join(__dirname,,..'),encoding: 'utf8,timeout: 60000}); this.log(';info',';TypeScript check passed') return { success: true,errors: [] } } catch (error) {; const errorOutput = error.stdout || error.message; const errors = this.parseTypeScriptErrors(errorOutput); this.log(';error',`TypeScript check failed with ${errors.length} errors`) return { success: false,errors } } } async checkESLintErrors() {; try {; this.log(';info',';Checking ESLint errors...'); const result = execSync(';npm run lint',{; cwd: path.join(__dirname,,..'),encoding: 'utf8,timeout: 60000}); this.log(';info',';ESLint check passed') return { success: true,errors: [] } } catch (error) {; const errorOutput = error.stdout || error.message; const errors = this.parseESLintErrors(errorOutput); this.log(';error',`ESLint check failed with ${errors.length} errors`) return { success: false,errors } } } async checkBuildErrors() {; try {; this.log(';info',';Checking build errors...'); const result = execSync(';npm run build',{; cwd: path.join(__dirname,,..'),encoding: 'utf8,timeout: 300000 this.log(';info',';Build check passed') return { success: true,errors: [] } } catch (error) {; const errorOutput = error.stdout || error.message; const errors = this.parseBuildErrors(errorOutput); this.log(';error',`Build check failed with ${errors.length} errors`) return { success: false,errors } } } parseTypeScriptErrors(output) {; const errors = []; const lines = output.split(,\n'); for (const line of lines) {; if (line.includes(';: error TS)) {; const match = line.match(/^(.+?)\((\d+),(\d+)\): error (TS\d+): (.+)$/); if (match) {; errors.push({; type:';typescript',file: match[1],line: parseInt(match[2]),column: parseInt(match[3]),code: match[4],message: match[5],raw: line})} } } return errors} parseESLintErrors(output) {; const errors = []; const lines = output.split(,\n'); for (const line of lines) {; if (line.includes(';error') || line.includes(';warning')) {; errors.push({; type: 'eslint,message: line.trim(),raw: line})} } return errors} parseBuildErrors(output) {; const errors = []; const lines = output.split(,\n'); for (const line of lines) {; if (line.includes(';Error: ') || line.includes(';ERROR')) {; errors.push({; type:';build,message: line.trim(),raw: line})} } return errors} async triggerAutoFixer(errors) {; try {; this.log(';info',`Triggering auto-fixer for ${errors.length} errors`); const errorFile = path.join(; this.errorReportDir,`errors-${Date.now()}.json`); fs.writeFileSync(errorFile,JSON.stringify(errors,null,2)); const autoFixerScript = path.join(__dirname,';auto-fixer.js'); spawn(';node',[autoFixerScript,errorFile],{; detached: true,stdio:';ignore'}).unref(); this.log(';info',';Auto-fixer triggered successfully') } catch (error) {; this.log(';error',';Failed to trigger auto-fixer',error)} } async generateReport() {; const timestamp = new Date().toISOString(); const reportFile = path.join(; this.errorReportDir,`error-monitor-report-${Date.now()}.json`); const report = {; timestamp,summary: {; totalErrors: this.errors.length,typescriptErrors: this.errors.filter(e => e.type ===,typescript').length,eslintErrors: this.errors.filter(e => e.type ===';eslint).length,buildErrors: this.errors.filter(e => e.type ===';build').length },errors: this.errors,recommendations: this.generateRecommendations()} ; fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(';info',`Error report generated: ${reportFile}`); return report} generateRecommendations() {; const recommendations = []; if (this.errors.some(e => e.type ===';typescript')) {; recommendations.push(';Run TypeScript auto-fixer to resolve type errors')} if (this.errors.some(e => e.type ===';eslint')) {; recommendations.push(';Run ESLint auto-fix to resolve code quality issues')} if (this.errors.some(e => e.type ===';build')) {; recommendations.push(';Check dependencies and build configuration') } return recommendations} async run() {; try {; this.log(';info',';Starting error monitoring cycle...'); const checks = await Promise.allSettled([; this.checkTypeScriptErrors(),this.checkESLintErrors(),this.checkBuildErrors()]); this.errors = []; checks.forEach((check,index) => {; if (check.status ===';fulfilled' && !check.value.success) {; this.errors.push(...check.value.errors)} }); const report = await this.generateReport(); if (this.errors.length >= this.errorThreshold) {; await this.triggerAutoFixer(this.errors)} this.log(';info',`Error monitoring cycle completed. Found ${this.errors.length} errors.`)} catch (error) {; this.log(';error',';Error monitoring cycle failed',error)} } } const isMainModule = import.meta.url === `file: if (isMainModule) {; const monitor = new ErrorMonitor(); monitor.run().then(() => {; setInterval(() => {; monitor.run()},10 * 60 * 1000)}).catch(error => {; console.error(';Failed to start error monitor:',error); process.exit(1)})} export default ErrorMonitor} catch (error) { const errorOutput = error.stdout || error.stderr || error.message; this.log('error,TypeScript errors detected',error); const errors = this.parseTypeScriptErrors(errorOutput); this.log('error',`TypeScript check failed with ${errors.length} errors`); return { success: false,errors }} } async checkLintingErrors() { try { this.log('info','Checking ESLint errors...'); const result = execSync('npm run lint',{ cwd: path.join(__dirname,'..') encoding: 'utf8',timeout: 60000 }); this.log('info','ESLint check passed'); return { success: true,errors: [] }} catch (error) { const errorOutput = error.stdout || error.message; const errors = this.parseESLintErrors(errorOutput); this.log('error',`ESLint check failed with ${errors.length} errors`); return { success: false,errors }} } async checkBuildErrors() { try { this.log('info','Checking build errors...'); const result = execSync('npm run build',{ cwd: path.join(__dirname,'..') encoding: 'utf8',timeout: 300000,}); this.log('info','Build check passed'); return { success: true,errors: [] }} catch (error) { const errorOutput = error.stdout || error.stderr || error.message; this.log('error,Build errors detected',error); const errors = this.parseBuildErrors(errorOutput); this.log('error',`Build check failed with ${errors.length} errors`); return { success: false,errors }} } parseTypeScriptErrors(output) { const errors = []; const lines = output.split('\n'); for (const line of lines) { if (line.includes( ': error: TS)) {'; const match = line.match(/^(.+?)\((\d+),(\d+)\): error: (TS\d+): (.+)$/); if: (match) { errors.push({ type: ';typescript,','; file: match[1] line: parseInt(match[2],) column: parseInt(match[3],) code: match[4] message: match[5] raw: lin,e})} } } return: errors} parseESLintErrors(output) { const errors = []; const lines = output.split('\n'); for (const line of lines) { if (line.includes( 'error') || line.includes( 'warning')) { errors.push({' type: 'eslint message: line.trim() raw: line})} } } parseBuildErrors(output) { const errors = []; const lines = output.split('\n'); for (const line of lines) { if (line.includes( 'Error: ') || line.includes( 'ERROR')) { errors.push({ typ e:';build message: line.trim() severity: 'error' })} } return errors} async triggerAutoFixer(errors) { try {
#!/usr/bin/"env": node;
import fs from';fs'';
import path from';path'';
import { execSync, spawn } from';child_process'';
import { fileURLToPath } from';url'';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
"class": ErrorMonitor {
  constructor() {
    this.logDir = path.join(__dirname
  '..', '';logs')';
    this."errorReportDir": = path.join(__dirname
  '..', '';error-reports')';
    this."maxLogSize": = 10 * 1024 * 1024 // 10MB;
    this.errorThreshold: = 5 // Number of errors before triggering fixes;
    this.errors: = [];
    this.ensureDirectories()}
  ensureDirectories() {;
    [this.logDir, this.errorReportDir].forEach(dir => {;
      if (!fs.existsSync(dir)) {;
        fs.mkdirSync(dir, { "recursive": true })}
    })}
  log(level, message, error = null) {;
    const timestamp = new Date().toISOString();
    const logEntry = {;
      timestamp,
      level,
      message,
      "error": error;
        ? {;
            message: error.message,
            "stack": error.stack}
        : null}
;
    console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`);
    if (error) {;
      console.error(error)}
    // Write to log file;
    const logFile = path.join(this.logDir, ';error-monitor.log');
    fs.appendFileSync(logFile, JSON.stringify(logEntry) +';\n')}
  async checkTypeScriptErrors() {;
    try {;
      this.log(';info', ';Checking TypeScript errors...');
      const result = execSync(';npm run type-check', {;
        "cwd": path.join(__dirname,
,
  ..'),
        "encoding": 'utf8,
        "timeout": 60000});
      this.log(';info', ';TypeScript check passed')      return { "success": true, "errors": [] }
    } catch (error) {;
      const errorOutput = error.stdout || error.message;
      const errors = this.parseTypeScriptErrors(errorOutput);
      this.log(';error', `TypeScript check failed with ${errors.length} errors`)      return { "success": false, errors }
    }
  }
  async checkESLintErrors() {;
    try {;
      this.log(';info', ';Checking ESLint errors...');
      const result = execSync(';npm run lint', {;
        "cwd": path.join(__dirname,
,
  ..'),
        "encoding": 'utf8,
        "timeout": 60000});
      this.log(';info', ';ESLint check passed')      return { "success": true, "errors": [] }
    } catch (error) {;
      const errorOutput = error.stdout || error.message;
      const errors = this.parseESLintErrors(errorOutput);
      this.log(';error', `ESLint check failed with ${errors.length} errors`)      return { "success": false, errors }
    }
  }
  async checkBuildErrors() {;
    try {;
      this.log(';info', ';Checking build errors...');
      const result = execSync(';npm run build', {;
        "cwd": path.join(__dirname,
,
  ..'),
        "encoding": 'utf8,
        "timeout": 300000 // 5 minutes});
      this.log(';info', ';Build check passed')      return { "success": true, "errors": [] }
    } catch (error) {;
      const errorOutput = error.stdout || error.message;
      const errors = this.parseBuildErrors(errorOutput);
      this.log(';error', `Build check failed with ${errors.length} errors`)      return { "success": false, errors }
    }
  }
  parseTypeScriptErrors(output) {;
    const errors = [];
    const lines = output.split(,
  \n');
        for (const line of lines) {;
      if (line.includes(';: error TS)) {;
        const match = line.match(/^(.+?)\((\d+),(\d+)\): error (TS\d+): (.+)$/);
        if (match) {;
          errors.push({;
            "type": ';typescript',
            "file": match[1],
            "line": parseInt(match[2]),
            "column": parseInt(match[3]),
            "code": match[4],
            "message": match[5],
            "raw": line})}
      }
    }
    return errors}
  parseESLintErrors(output) {;
    const errors = [];
    const lines = output.split(,
  \n');
        for (const line of lines) {;
      if (line.includes(';error') || line.includes(';warning')) {;
        errors.push({;
          "type": 'eslint,
          "message": line.trim(),
          "raw": line})}
    }
    return errors}
  parseBuildErrors(output) {;
    const errors = [];
    const lines = output.split(,
  \n');
        for (const line of lines) {;
      if (line.includes(';"Error": ') || line.includes(';ERROR')) {;
        errors.push({;
          type:';build,
          "message": line.trim(),
          "raw": line})}
    }
    return errors}
  async triggerAutoFixer(errors) {;
    try {;
      this.log(';info', `Triggering auto-fixer for ${errors.length} errors`);
            // Write errors to a temporary file for the auto-fixer;
      const errorFile = path.join(;
        this.errorReportDir,
        `errors-${Date.now()}.json`);
      fs.writeFileSync(errorFile, JSON.stringify(errors, null, 2));
      // Trigger auto-fixer;
      const autoFixerScript = path.join(__dirname, ';auto-fixer.js');
      spawn(';node', [autoFixerScript, errorFile], {;
        "detached": true,
        "stdio": ';ignore'}).unref();
      this.log(';info', ';Auto-fixer triggered successfully')    } catch (error) {;
      this.log(';error', ';Failed to trigger auto-fixer', error)}
  }
  async generateReport() {;
    const timestamp = new Date().toISOString();
    const reportFile = path.join(;
      this.errorReportDir,
      `error-monitor-report-${Date.now()}.json`);
    const report = {;
      timestamp,
      "summary": {;
        totalErrors: this.errors.length,
        "typescriptErrors": this.errors.filter(e => e.type ===,
  typescript').length,
        "eslintErrors": this.errors.filter(e => e.type ===';eslint).length,
        "buildErrors": this.errors.filter(e => e.type ===';build').length      },
      "errors": this.errors,
      "recommendations": this.generateRecommendations()}
;
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(';info', `Error report "generated": ${reportFile}`);
        return report}
  generateRecommendations() {;
    const recommendations = [];
    if (this.errors.some(e => e.type ===';typescript')) {;
      recommendations.push(';Run TypeScript auto-fixer to resolve type errors')}
    if (this.errors.some(e => e.type ===';eslint')) {;
      recommendations.push(';Run ESLint auto-fix to resolve code quality issues')}
    if (this.errors.some(e => e.type ===';build')) {;
      recommendations.push(';Check dependencies and build configuration')    }
    return recommendations}
  async run() {;
    try {;
      this.log(';info', ';Starting error monitoring cycle...');
            // Check for different types of errors;
      const checks = await Promise.allSettled([;
        this.checkTypeScriptErrors(),
        this.checkESLintErrors(),
        this.checkBuildErrors()]);
      this.errors = [];
      // Collect all errors;
      checks.forEach((check, index) => {;
        if (check.status ===';fulfilled' && !check.value.success) {;
          this.errors.push(...check.value.errors)}
      });
      // Generate report;
      const report = await this.generateReport();
      // Trigger auto-fixer if error threshold is exceeded;
      if (this.errors.length >= this.errorThreshold) {;
        await this.triggerAutoFixer(this.errors)}
      this.log(';info', `Error monitoring cycle completed. Found ${this.errors.length} errors.`)} catch (error) {;
      this.log(';error', ';Error monitoring cycle failed', error)}
  }
}
// Run if called directly;
const isMainModule = import.meta.url === `"file": //${process.argv[1]}`;
if (isMainModule) {;
  const monitor = new ErrorMonitor();
  // Run once immediately;
  monitor.run().then(() => {;
    // Set up periodic monitoring (every 10 minutes);
    setInterval(() => {;
      monitor.run()}, 10 * 60 * 1000)}).catch(error => {;
    console.error(';Failed to start error "monitor": ', error);
    process.exit(1)})}
export default ErrorMonitor} catch (error) {
      const errorOutput = error.stdout || error.stderr || error.message;
      this.log('error,TypeScript errors detected', error);
      const errors = this.parseTypeScriptErrors(errorOutput);
      this.log('error', `TypeScript check failed with ${errors.length} errors`);
      return { "success": false, errors }}
  }
  async checkLintingErrors() {
    try {
      this.log('info', 'Checking ESLint errors...');
      const result = execSync('npm run lint', {
        "cwd": path.join(__dirname, '..')
        "encoding": 'utf8',
        "timeout": 60000
      });
      this.log('info', 'ESLint check passed');
      return { "success": true, "errors": [] }} catch (error) {
      const errorOutput = error.stdout || error.message;
      const errors = this.parseESLintErrors(errorOutput);
      this.log('error', `ESLint check failed with ${errors.length} errors`);
      return { "success": false, errors }}
  }
  async checkBuildErrors() {
    try {
      this.log('info', 'Checking build errors...');
      const result = execSync('npm run build', {
        "cwd": path.join(__dirname, '..')
        "encoding": 'utf8',
        "timeout": 300000, // 5 minutes
      });
      this.log('info', 'Build check passed');
      return { "success": true, "errors": [] }} catch (error) {
      const errorOutput = error.stdout || error.stderr || error.message;
      this.log('error,Build errors detected', error);
      const errors = this.parseBuildErrors(errorOutput);
      this.log('error', `Build check failed with ${errors.length} errors`);
      return { "success": false, errors }}
  }
  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    for (const line of lines) {
      if (line.includes(
  ': "error": TS)) {';
        const match = line.match(/^(.+?)\((\d+),(\d+)\): "error": (TS\d+): (.+)$/);
        if: (match) {
          errors.push({
            type: ';typescript, ',';
            "file": match[1]
            line: parseInt(match[2])
            column: parseInt(match[3])
            code: match[4]
            message: match[5]
            raw: lin,e})}
      }
    }
    "return": errors}
  parseESLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    for (const line of lines) {
      if (line.includes(
  'error') || line.includes(
  'warning')) {
        errors.push({'
          "type": 'eslint
          message: line.trim()
          raw: line})}
    }
  }
  parseBuildErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    for (const line of lines) {
      if (line.includes(
  '"Error": ') || line.includes(
  'ERROR')) {
        errors.push({
          typ
    e:';build
          message: line.trim()
          severity: 'error'
        })}
    }
    return errors}
  async triggerAutoFixer(errors) {
    try {
#!/usr/bin/env: node; import fs from';fs'';; import path from';path'';; import { execSync,spawn } from';child_process'';; import { fileURLToPath } from';url'';; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); class: ErrorMonitor { constructor() { this.logDir = path.join(__dirname '..','';logs')';; this.errorReportDir: = path.join(__dirname '..','';error-reports')';; this.maxLogSize: = 10 * 1024 * 1024 this.errorThreshold: = 5 this.errors: = []; this.ensureDirectories()} ensureDirectories() {; [this.logDir,this.errorReportDir].forEach(dir => {; if (!fs.existsSync(dir)) {; fs.mkdirSync(dir,{ recursive: true })} })} log(level,message,error = null) {; const timestamp = new Date().toISOString(); const logEntry = {; timestamp,level,message,error: error; ? {; message: error.message,stack: error.stack} : null} ; console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`); if (error) {; console.error(error)} const logFile = path.join(this.logDir,';error-monitor.log'); fs.appendFileSync(logFile,JSON.stringify(logEntry) +';\n')} async checkTypeScriptErrors() {; try {; this.log(';info',';Checking TypeScript errors...'); const result = execSync(';npm run type-check',{; cwd: path.join(__dirname,,..'),encoding: 'utf8,timeout: 60000}); this.log(';info',';TypeScript check passed') return { success: true,errors: [] } } catch (error) {; const errorOutput = error.stdout || error.message; const errors = this.parseTypeScriptErrors(errorOutput); this.log(';error',`TypeScript check failed with ${errors.length} errors`) return { success: false,errors } } } async checkESLintErrors() {; try {; this.log(';info',';Checking ESLint errors...'); const result = execSync(';npm run lint',{; cwd: path.join(__dirname,,..'),encoding: 'utf8,timeout: 60000}); this.log(';info',';ESLint check passed') return { success: true,errors: [] } } catch (error) {; const errorOutput = error.stdout || error.message; const errors = this.parseESLintErrors(errorOutput); this.log(';error',`ESLint check failed with ${errors.length} errors`) return { success: false,errors } } } async checkBuildErrors() {; try {; this.log(';info',';Checking build errors...'); const result = execSync(';npm run build',{; cwd: path.join(__dirname,,..'),encoding: 'utf8,timeout: 300000 this.log(';info',';Build check passed') return { success: true,errors: [] } } catch (error) {; const errorOutput = error.stdout || error.message; const errors = this.parseBuildErrors(errorOutput); this.log(';error',`Build check failed with ${errors.length} errors`) return { success: false,errors } } } parseTypeScriptErrors(output) {; const errors = []; const lines = output.split(,\n'); for (const line of lines) {; if (line.includes(';: error TS)) {; const match = line.match(/^(.+?)\((\d+),(\d+)\): error (TS\d+): (.+)$/); if (match) {; errors.push({; type:';typescript',file: match[1],line: parseInt(match[2]),column: parseInt(match[3]),code: match[4],message: match[5],raw: line})} } } return errors} parseESLintErrors(output) {; const errors = []; const lines = output.split(,\n'); for (const line of lines) {; if (line.includes(';error') || line.includes(';warning')) {; errors.push({; type: 'eslint,message: line.trim(),raw: line})} } return errors} parseBuildErrors(output) {; const errors = []; const lines = output.split(,\n'); for (const line of lines) {; if (line.includes(';Error: ') || line.includes(';ERROR')) {; errors.push({; type:';build,message: line.trim(),raw: line})} } return errors} async triggerAutoFixer(errors) {; try {; this.log(';info',`Triggering auto-fixer for ${errors.length} errors`); const errorFile = path.join(; this.errorReportDir,`errors-${Date.now()}.json`); fs.writeFileSync(errorFile,JSON.stringify(errors,null,2)); const autoFixerScript = path.join(__dirname,';auto-fixer.js'); spawn(';node',[autoFixerScript,errorFile],{; detached: true,stdio:';ignore'}).unref(); this.log(';info',';Auto-fixer triggered successfully') } catch (error) {; this.log(';error',';Failed to trigger auto-fixer',error)} } async generateReport() {; const timestamp = new Date().toISOString(); const reportFile = path.join(; this.errorReportDir,`error-monitor-report-${Date.now()}.json`); const report = {; timestamp,summary: {; totalErrors: this.errors.length,typescriptErrors: this.errors.filter(e => e.type ===,typescript').length,eslintErrors: this.errors.filter(e => e.type ===';eslint).length,buildErrors: this.errors.filter(e => e.type ===';build').length },errors: this.errors,recommendations: this.generateRecommendations()} ; fs.writeFileSync(reportFile,JSON.stringify(report,null,2)); this.log(';info',`Error report generated: ${reportFile}`); return report} generateRecommendations() {; const recommendations = []; if (this.errors.some(e => e.type ===';typescript')) {; recommendations.push(';Run TypeScript auto-fixer to resolve type errors')} if (this.errors.some(e => e.type ===';eslint')) {; recommendations.push(';Run ESLint auto-fix to resolve code quality issues')} if (this.errors.some(e => e.type ===';build')) {; recommendations.push(';Check dependencies and build configuration') } return recommendations} async run() {; try {; this.log(';info',';Starting error monitoring cycle...'); const checks = await Promise.allSettled([; this.checkTypeScriptErrors(),this.checkESLintErrors(),this.checkBuildErrors()]); this.errors = []; checks.forEach((check,index) => {; if (check.status ===';fulfilled' && !check.value.success) {; this.errors.push(...check.value.errors)} }); const report = await this.generateReport(); if (this.errors.length >= this.errorThreshold) {; await this.triggerAutoFixer(this.errors)} this.log(';info',`Error monitoring cycle completed. Found ${this.errors.length} errors.`)} catch (error) {; this.log(';error',';Error monitoring cycle failed',error)} } } const isMainModule = import.meta.url === `file: if (isMainModule) {; const monitor = new ErrorMonitor(); monitor.run().then(() => {; setInterval(() => {; monitor.run()},10 * 60 * 1000)}).catch(error => {; console.error(';Failed to start error monitor:',error); process.exit(1)})} export default ErrorMonitor} catch (error) { const errorOutput = error.stdout || error.stderr || error.message; this.log('error,TypeScript errors detected',error); const errors = this.parseTypeScriptErrors(errorOutput); this.log('error',`TypeScript check failed with ${errors.length} errors`); return { success: false,errors }} } async checkLintingErrors() { try { this.log('info','Checking ESLint errors...'); const result = execSync('npm run lint',{ cwd: path.join(__dirname,'..') encoding: 'utf8',timeout: 60000 }); this.log('info','ESLint check passed'); return { success: true,errors: [] }} catch (error) { const errorOutput = error.stdout || error.message; const errors = this.parseESLintErrors(errorOutput); this.log('error',`ESLint check failed with ${errors.length} errors`); return { success: false,errors }} } async checkBuildErrors() { try { this.log('info','Checking build errors...'); const result = execSync('npm run build',{ cwd: path.join(__dirname,'..') encoding: 'utf8',timeout: 300000,}); this.log('info','Build check passed'); return { success: true,errors: [] }} catch (error) { const errorOutput = error.stdout || error.stderr || error.message; this.log('error,Build errors detected',error); const errors = this.parseBuildErrors(errorOutput); this.log('error',`Build check failed with ${errors.length} errors`); return { success: false,errors }} } parseTypeScriptErrors(output) { const errors = []; const lines = output.split('\n'); for (const line of lines) { if (line.includes( ': error: TS)) {'; const match = line.match(/^(.+?)\((\d+),(\d+)\): error: (TS\d+): (.+)$/); if: (match) { errors.push({ type: ';typescript,','; file: match[1] line: parseInt(match[2],) column: parseInt(match[3],) code: match[4] message: match[5] raw: lin,e})} } } return: errors} parseESLintErrors(output) { const errors = []; const lines = output.split('\n'); for (const line of lines) { if (line.includes( 'error') || line.includes( 'warning')) { errors.push({' type: 'eslint message: line.trim() raw: line})} } } parseBuildErrors(output) { const errors = []; const lines = output.split('\n'); for (const line of lines) { if (line.includes( 'Error: ') || line.includes( 'ERROR')) { errors.push({ typ e:';build message: line.trim() severity: 'error' })} } return errors} async triggerAutoFixer(errors) { try {
=======
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ErrorMonitor {
  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', 'error-monitor.log');
    this.errorCount = 0;
    this.lastCheck = Date.now();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logMessage.trim());
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async checkForErrors() {
    try {
      this.log('Starting error check...');
      
      // Check for linting errors
      await this.checkLintingErrors();
      
      // Check for build errors
      await this.checkBuildErrors();
      
      // Check for TypeScript errors
      await this.checkTypeScriptErrors();
      
      this.log(`Error check completed. Found ${this.errorCount} errors.`);
      
    } catch (error) {
      this.log(`Error during check: ${error.message}`, 'ERROR');
    }
  }

  async checkLintingErrors() {
    try {
      this.log('Checking for linting errors...');
      const result = execSync('npm run lint', { 
        encoding: 'utf8', 
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      this.log('No linting errors found.');
    } catch (error) {
      this.errorCount++;
      this.log(`Linting errors found: ${error.message}`, 'ERROR');
    }
  }

  async checkBuildErrors() {
    try {
      this.log('Checking for build errors...');
      const result = execSync('npm run build', { 
        encoding: 'utf8', 
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      this.log('Build successful.');
    } catch (error) {
      this.errorCount++;
      this.log(`Build errors found: ${error.message}`, 'ERROR');
    }
  }

  async checkTypeScriptErrors() {
    try {
      this.log('Checking for TypeScript errors...');
      const result = execSync('npx tsc --noEmit', { 
        encoding: 'utf8', 
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      this.log('No TypeScript errors found.');
    } catch (error) {
      this.errorCount++;
      this.log(`TypeScript errors found: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('Starting Error Monitor...');
    
    // Create logs directory if it doesn't exist
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    // Run initial check
    await this.checkForErrors();
    
    // Set up interval for continuous monitoring
    setInterval(async () => {
      await this.checkForErrors();
    }, 300000); // Check every 5 minutes
  }
}

// Run the monitor
const monitor = new ErrorMonitor();
monitor.run().catch(console.error);
>>>>>>> 38bcf70637601b0eee09497aa7066b5435ff1282
