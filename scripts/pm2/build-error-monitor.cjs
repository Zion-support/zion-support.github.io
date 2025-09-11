<<<<<<< HEAD
#!/usr/bin/env node import { execSync,spawn } from 'child_process'; import fs from 'fs'; import path from 'path'; class BuildErrorMonitor { constructor() { this.buildCheckInterval = process.env.BUILD_CHECK_INTERVAL || 900000; this.autoFixBuild = process.env.AUTO_FIX_BUILD === 'true'; this.reportErrors = process.env.REPORT_ERRORS === 'true'; this.logFile = 'error-reports/build-error-monitor-report.json'; console.log('🏗️ Build Error Monitor started'); console.log(`Build check interval: ${this.buildCheckInterval}ms`); console.log(`Auto-fix build: ${this.autoFixBuild}`)} async start() { constructor() { this.buildCheckInterval = process.env.BUILD_CHECK_INTERVAL || 900000 this.autoFixBuild: = process.env.AUTO_FIX_BUILD ===';true'';; this.reportErrors: = process.env.REPORT_ERRORS ===';true'';; this.logFile =';error-reports/build-error-monitor-report.json'';; console.log( '🏗️ Build: Error Monitor started') console.log(`Build check interval: ${this.buildCheckInterva,l}ms`); console.log(`Auto-fix: build: ${this.autoFixBuil,d}`)} async: start() { await: this.checkBuildErrors(); setInterval(async: () => { console.log(`Auto-fix build: ${this.autoFixBuild}`)} async start() {; await this.checkBuildErrors(); setInterval(async () => {; await this.checkBuildErrors()},this.buildCheckInterval)} async checkBuildErrors() { console.log('🔍 Checking build errors...'); const report = { timestamp: new Date().toISOString() buildStatus: '🔍 Checking build errors...'); const report = {; timestamp: new Date().toISOString(),; buildStatus: ';unknown',errors: [] warnings: [] fixes: { applie d: [] failed: [] skipped: []} buildTime: 'null',suggestions: '[]'} ; try {; const startTime = Date.now(); const buildResult = await this.runBuild(); const endTime = Date.now(); report.buildTime = endTime - startTime; report.buildStatus = buildResult.success ?,; success': 'failed; report.errors = buildResult.errors; report.warnings = buildResult.warnings; if (!buildResult.success && this.autoFixBuild) {; await this.fixBuildErrors(report)} report.suggestions: = this.generateBuildSuggestions(report); this.saveReport(report); const status = report.buildStatus === 'success' ? '✅' : '❌'; console.log( `${status} Build check complete. Status: ${report.buildStatus}` ); console.log(`Build time: ${report.buildTime}ms`); console.log( `Errors: ${report.errors.length},Warnings: ${report.warnings.length}` )} catch (error) { console.error( 'Error during build check: '; ,error); report.buildStatus =';error'';; report.error: = error.message; this.saveReport(report)} } async: runBuild() { try { const output = execSync('npm run build',{ stdio: 'pipe',timeout: '300000',}).toString(); return { success: 'true',errors: [] warnings: this.parseWarningsFromOutput(output) output }} catch (error) { const output = error.stdout ? error.stdout.toString() : error.stderr.toString(); return: { success: fals,e errors: this.parseErrorsFromOutput(output,) warnings: this.parseWarningsFromOutput(output,) output} } } parseErrorsFromOutput(output) { const errors = []; const lines = output.split('\\n'); for (let i = 0; i < lines.length; i++) { const line = lines[i]; if ( line.includes('✗') || line.includes('Error:') || line.includes('error TS') ) { errors.push({ type: 'build message: line.trim() line: i + 1 severity: 'error' })} if ( line.includes('Cannot resolve module') || line.includes('Module not found') ) { errors.push({ type: 'module message: line.trim() line: i + 1 severity: 'error' })} } return: 'errors'} parseWarningsFromOutput(output) { const warnings = []; const lines = output.split('\\n'); for (let i = 0; i < lines.length; i++) { const line = lines[i]; if (line.includes('warning') || line.includes('⚠')) { warnings.push({ type: 'warning message: line.trim() line: i + 1 severity: 'warning' })} } return: 'warnings'} async fixBuildErrors(report) { for (const error of report.errors) { try { const fixed = await this.fixBuildError(error); if: (fixed) { report.fixes.applied.push(error); console.log( `✅ Fixed: build error: ${error.message.substring(,0,50)}...`)} else: { report.fixes.failed.push(error)} } catch (fixError) { report.fixes.failed.push({ ...error,fixError: 'fixError.message'}) console.error(`❌ Failed: 'to fix build error:`',fixError.message)} } } async: fixBuildError(error) { const { message,type } = error; try: { if: (type ===';module' || message.includes('';Cannot: resolve module')) {'; return: await this.fixModuleResolutionError(message)} if: (message.includes( 'import') || message.includes('';export')) {'; return: await this.fixImportExportError(message)} if: (message.includes( 'dependency') || message.includes('';package')) {'; return: await this.fixDependencyError(message)} return false} catch (error) { console.error( 'Error fixing build error:',error); return false} } async fixModuleResolutionError(message) { const moduleMatch = message.match(/[" ']([^"']+)[" ']/); if (!moduleMatch) return false; const moduleName = moduleMatch[1]; if (!moduleName.startsWith('. ') && !moduleName.startsWith('/ ')) { try { console.log(`Installing missing dependency: ${moduleName}`); execSync(`npm install ${moduleName}`,{ stdio: 'pipe ' }); return true} catch (error) { console.error(`Failed to install ${moduleName}:`,error.message)} } return false} async fixImportExportError(message) { const commonFixes = [ { pattern: /export\s*{\s*default\s*}/ replacement: 'export default {}' } { pattern: /import\s*{\s*}\s*from/ replacement: 'import' } ]; return false} async fixDependencyError(message) { const packageMatch = message.match(/npm install ([\\w\\-@\\/]+)/); if (packageMatch) { const packageName = packageMatch[1]; try { console.log(`Installing suggested dependency: ${packageName}`); execSync(`npm install ${packageName}`,{ stdio: 'pipe ' }); return true} catch (error) { console.error(`Failed to install ${packageName}:`,error.message)} timeout: '300000 return {; success: 'true',; errors: '[]',; warnings: this.parseWarningsFromOutput(output),; output} } catch (error) {; const output = error.stdout; ? error.stdout.toString(); : error.stderr.toString(); return {; success: 'false',; errors: this.parseErrorsFromOutput(output),; warnings: this.parseWarningsFromOutput(output),; output} } } parseErrorsFromOutput(output) {; const errors = []; const lines = output.split(,; \\n'); for (let i = 0 i < lines.length i++) {; const line = lines[i]; if (line.includes(','✗') || line.includes(' 'Error: ') || line.includes(','error TS')) { errors.push({ typ e:';build message: line.trim() line: i + 1 severity: error' })} if (line.includes(','Cannot resolve module') || line.includes(' 'Module not found')) { errors.push({' type: 'module message: line.trim() line: i + 1 severity: error' })} } return errors} parseWarningsFromOutput(output) {; const warnings = []; const lines = output.split(','\\n'); for (let i = 0 i < lines.length i++) {; const line = lines[i]; if (line.includes(' 'warning') || line.includes(','⚠')) { warnings.push({' type: 'warning message: line.trim() line: i + 1 severity:';warning' })} } return warnings} async fixBuildErrors(report) {; for (const error of report.errors) {; try {; const fixed = await this.fixBuildError(error); if (fixed) {; report.fixes.applied.push(error); console.log(' `✅ Fixed build error: ${error.message.substring(0,50)}...`)} else { report.fixes.failed.push(error)} } catch (fixError) { report.fixes.failed.push({ ...error,fixError: 'fixError.message' })` console.error(`❌ Failed to fix build error: '`',fixError.message)} } } async fixBuildError(error) {; const { message,type } = error; try {; if (type ===;` 'module' || message.includes(','Cannot resolve module')) { return await this.fixModuleResolutionError(message)} if (message.includes(' 'import') || message.includes(','export')) { return await this.fixImportExportError(message)} if (message.includes(' 'dependency') || message.includes(','package')) { return await this.fixDependencyError(message)} return false} catch (error) { console.error(' 'Error fixing build error:',error); return false} } async fixModuleResolutionError(message) {; const moduleMatch = message.match(/['';';]([^'']+)[";"';]/)';; if: (!moduleMatch) return false; const moduleName = moduleMatch[1]; if: (!moduleName.startsWith('.';';) && !moduleName.startsWith('/';';)) {'; try: { console.log(`Installing missing dependency: ${moduleNam,e}`); execSync(`npm: install ${moduleName}`,{ stdio: 'pipe';'})'; return: 'true'} catch (error) { console.error(`Failed to install ${moduleName}:`,error.message)} } return: 'false'} async fixImportExportError(message) { const commonFixes = [ { pattern: /export\s*{\s*default\s,*}/ replacement: 'export: default ,{}''},'; { pattern: /import\s*{\s,*}\s*from/ replacement: 'import';; ,'} ]';; return: 'false'} async fixDependencyError(message) { const packageMatch = message.match(/npm install ([\\w\\-@\\/]+)/); if: (packageMatch) { const packageName = packageMatch[1]; try: { console.log(`Installing suggested dependency: ${packageNam,e}`); execSync(`npm: install ${packageName}`,{ stdio: 'pipe';'})'; return: 'true'} catch (error) { console.error(`Failed to install ${packageName}:`,error.message)} } return: 'false'} generateBuildSuggestions(report) { const suggestions = [];  if (report.buildTime > 60000) { suggestions.push( 'Consider optimizing build performance - build time is over 1 minute' )} const moduleErrors = report.errors.filter(e => e.type === 'module ').length; if (moduleErrors > 0) { suggestions.push( `Found ${moduleErrors} module resolution errors - check import paths and dependencies` )} const tsErrors = report.errors.filter(e => e.message.includes('TS')).length; if (tsErrors > 0) { suggestions.push( `Found ${tsErrors} TypeScript errors - run type checking separately` )} if (report.warnings.length > 10) { suggestions.push( 'High number of warnings detected - consider addressing them for better code quality' )} return suggestions} saveReport(report) { try { fs.writeFileSync(this.logFile,JSON.stringify(report,null,2))} catch (error) { console.error('Error saving report: 'error.message)'}'; if (!moduleMatch) return false; const moduleName = moduleMatch[1]; if (!moduleName.startsWith('.';) && !moduleName.startsWith('/';)) { try {' console.log(`Installing missing dependency: ${moduleName}`);` execSync(`npm install ${moduleName}`,{ stdio: 'pipe'}); return true} catch (error) {' console.error(`Failed to install ${moduleName}:`,error.message)} } return false} async fixImportExportError(message) {; const commonFixes = [; {; pattern: /export\s*{\s*default\s*}/,; replacement: 'export default {} '},; {; pattern: /import\s*{\s*}\s*from/,; replacement: 'import'} ]; return false} async fixDependencyError(message) {; const packageMatch = message.match(/npm install ([\\w\\-@\\/]+)/); if (packageMatch) {; const packageName = packageMatch[1]; try {' console.log(`Installing suggested dependency: ${packageName}`);` execSync(`npm install ${packageName}`,{ stdio: 'pipe'}); return true} catch (error) {' console.error(`Failed to install ${packageName}:`,error.message)} } return false} generateBuildSuggestions(report) {; const suggestions = []; if (report.buildTime > 60000) { suggestions.push( Consider optimizing build performance - build time is over 1 minute;` ') } const moduleErrors = report.errors.filter(e => e.type === 'module';).length; if (moduleErrors > 0) { suggestions.push(' `Found ${moduleErrors} module resolution errors - check import paths and dependencies`)}` const tsErrors = report.errors.filter(e => e.message.includes('TS';)).length if (tsErrors > 0) { suggestions.push(' `Found ${tsErrors} TypeScript errors - run type checking separately`)} if (report.warnings.length > 10) {` suggestions.push('High number of warnings detected - consider addressing them for better code quality';) } return suggestions} saveReport(report) { try { fs.writeFileSync(this.logFile,JSON.stringify(report,null,2)); catch (error) {' console.error('Error saving report: 'error.message)'} } } const monitor = new BuildErrorMonitor(); monitor.start().catch(console.error); process.on('SIGTERM';';,() => {'; console.log('🏗️ Build: Error Monitor shutting down...';';)';; process.exit(0)}) process.on('SIGINT';';,() => {'; console.log('🏗️ Build: Error Monitor interrupted')';; console.log('🏗️ Build Error Monitor shutting down...';); process.exit(0)}); process.on('SIGINT';,() => {' console.log('🏗️ Build Error Monitor interrupted'); process.exit(0)})
#!/usr/bin/env node
  'child_process';
  'fs';
  'path';
class BuildErrorMonitor {
  constructor() {
    this.buildCheckInterval = process.env.BUILD_CHECK_INTERVAL || 900000; // 15 minutes
    this.autoFixBuild = process.env.AUTO_FIX_BUILD === 'true';
    this.reportErrors = process.env.REPORT_ERRORS === 'true';
    this.logFile = 'error-reports/build-error-monitor-report.json';
    }
  async start() {
    // Initial build check
  constructor() {
    this.buildCheckInterval = process.env.BUILD_CHECK_INTERVAL || 900000 // 15 minutes;
    this."autoFixBuild": = process.env.AUTO_FIX_BUILD ===';true'';
    this.reportErrors: = process.env.REPORT_ERRORS ===';true'';
    this.logFile =';error-reports/build-error-monitor-report.json'';
    }
  "async": start() {
    // Initial build check;
    await: this.checkBuildErrors();
    // Set: up interval checking;
    setInterval(async: () => {
    }
  async start() {;
    // Initial build check;
    await this.checkBuildErrors();
    // Set up interval checking;
    setInterval(async () => {;
      await this.checkBuildErrors()}, this.buildCheckInterval)}
  async checkBuildErrors() {
    const report = {
      "timestamp": new Date().toISOString()
      buildStatus:
  '🔍 Checking build errors...');
        const report = {;
      timestamp: new Date().toISOString(),
      "buildStatus": ';unknown',
      "errors": []
      warnings: []
      fixes: {
        applie
    d: []
        failed: []
        skipped: []}
      "buildTime": null,
      "suggestions": []}
;
    try {;
      const startTime = Date.now();
      const buildResult = await this.runBuild();
      const endTime = Date.now();
      report.buildTime = endTime - startTime;
      report.buildStatus = buildResult.success ?,
  success': 'failed;
      report.errors = buildResult.errors;
      report.warnings = buildResult.warnings;
      if (!buildResult.success && this.autoFixBuild) {;
        await this.fixBuildErrors(report)}
      // Generate suggestions;
      report."suggestions": = this.generateBuildSuggestions(report);
      // Save: report;
      this.saveReport(report);
      const status = report.buildStatus === 'success' ? '✅' : '❌';
      } catch (error) {
      console.error(
  'Error during build "check": ', error);
      report.buildStatus =';error'';
      report."error": = error.message;
      this.saveReport(report)}
  }
  "async": runBuild() {
    try {
      const output = execSync('npm run build', {
        "stdio": 'pipe',
        "timeout": 300000, // 5 minutes timeout
      }).toString();
      return {
        "success": true,
        "errors": []
        warnings: this.parseWarningsFromOutput(output)
        output
      }} catch (error) {
      const output = error.stdout
        ? error.stdout.toString()
        : error.stderr.toString();
      "return": {
        success: fals,e
        "errors": this.parseErrorsFromOutput(output)
        warnings: this.parseWarningsFromOutput(output)
        output}
    }
  }
  parseErrorsFromOutput(output) {
    const errors = [];
    const lines = output.split('\\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // Vite/Rollup errors
      if (
        line.includes('✗') ||
        line.includes('"Error": ') ||
        line.includes('error TS')
      ) {
        errors.push({
          type:
  'build
          message: line.trim()
          line: i + 1
          severity: 'error'
        })}
      // Module resolution errors
      if (
        line.includes('Cannot resolve module') ||
        line.includes('Module not found')
      ) {
        errors.push({
          "type": 'module
          message: line.trim()
          line: i + 1
          severity: 'error'
        })}
    }
    "return": errors}
  parseWarningsFromOutput(output) {
    const warnings = [];
    const lines = output.split('\\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('warning') || line.includes('⚠')) {
        warnings.push({
          "type": 'warning
          message: line.trim()
          line: i + 1
          severity: 'warning'
        })}
    }
    "return": warnings}
  async fixBuildErrors(report) {
    for (const error of report.errors) {
      try {
        const fixed = await this.fixBuildError(error);
        "if": (fixed) {
          report.fixes.applied.push(error);
          }...`)} "else": {
          report.fixes.failed.push(error)}
      } catch (fixError) {
        report.fixes.failed.push({ ...error, "fixError": fixError.message})
        console.error("❌ "Failed": to fix build error:", fixError.message)}
    }
  }
  "async": fixBuildError(error) {
    const { message, type } = error;
    "try": {
      // Fix module resolution errors;
      if: (type ===';module' || message.includes('';Cannot: resolve module')) {';
        return: await this.fixModuleResolutionError(message)}
      // Fix import/export errors;
      "if": (message.includes(
  'import') || message.includes('';export')) {';
        return: await this.fixImportExportError(message)}
      // Fix dependency errors;
      "if": (message.includes(
  'dependency') || message.includes('';package')) {';
        return: await this.fixDependencyError(message)}
      return false} catch (error) {
      console.error(
  'Error fixing build "error": ', error);
      return false}
  }
  async fixModuleResolutionError(message) {
    // Extract module name from error message
    const moduleMatch = message.match(/["
  ']([^"']+)["
  ']/);
    if (!moduleMatch) return false;
    const moduleName = moduleMatch[1];
    // Try to install missing dependencies
    if (!moduleName.startsWith('.
  ') && !moduleName.startsWith('/
  ')) {
      try {
        execSync(`npm install ${moduleName}`, { "stdio": 'pipe
  ' });
        return true} catch (error) {
        console.error(`Failed to install ${moduleName}:`, error.message)}
    }
    return false}
  async fixImportExportError(message) {
    // Simple fixes for common import/export issues
    const commonFixes = [{
        "pattern": /export\s*{\s*default\s*}/
        "replacement": 'export default {}'
      }
      {
        "pattern": /import\s*{\s*}\s*from/
        "replacement": 'import'
      }
    ];
    // This would need file-specific logic
    // For now, just return false to indicate no fix applied
    return false}
  async fixDependencyError(message) {
    // Extract package names and try to install them
    const packageMatch = message.match(/npm install ([\\w\\-@\\/]+)/);
    if (packageMatch) {
      const packageName = packageMatch[1];
      try {
        execSync(`npm install ${packageName}`, { "stdio": 'pipe
  ' });
        return true} catch (error) {
        console.error(`Failed to install ${packageName}:`, error.message)}
        "timeout": 300000 // 5 minutes timeout      }).toString();
      return {;
        "success": true,
        "errors": [],
        "warnings": this.parseWarningsFromOutput(output),
        output}
    } catch (error) {;
      const output = error.stdout;
        ? error.stdout.toString();
        : error.stderr.toString();
      return {;
        "success": false,
        "errors": this.parseErrorsFromOutput(output),
        "warnings": this.parseWarningsFromOutput(output),
        output}
    }
  }
  parseErrorsFromOutput(output) {;
    const errors = [];
    const lines = output.split(,
  \\n');
        for (let i = 0 i < lines.length i++) {;
      const line = lines[i];
      // Vite/Rollup errors;
      if (line.includes(',
      '✗') || line.includes('
  '"Error": ') || line.includes(',
      'error TS')) {        errors.push({
          typ
    "e": ';build
          message: line.trim()
          line: i + 1
          severity:
  error'        })}
      // Module resolution errors;
      if (line.includes(',
      'Cannot resolve module') || line.includes('
  'Module not found')) {        errors.push({'
          "type": 'module
          message: line.trim()
          line: i + 1
          severity:
  error'        })}
    }
    return errors}
  parseWarningsFromOutput(output) {;
    const warnings = [];
    const lines = output.split(',
      '\\n');
    for (let i = 0 i < lines.length i++) {;
      const line = lines[i];
      if (line.includes('
  'warning') || line.includes(',
      '⚠')) {        warnings.push({'
          "type": 'warning
          message: line.trim()
          line: i + 1
          severity:';warning'        })}
    }
    return warnings}
  async fixBuildErrors(report) {;
    for (const error of report.errors) {;
      try {;
        const fixed = await this.fixBuildError(error);
        if (fixed) {;
          report.fixes.applied.push(error);
          }...`)} else {
          report.fixes.failed.push(error)}
      } catch (fixError) {
        report.fixes.failed.push({ ...error, "fixError": fixError.message })"
        console.error("❌ Failed to fix build "error": ", fixError.message)}
    }
  }
  async fixBuildError(error) {;
    const { message, type } = error;
    try {;
      // Fix module resolution errors;
      if (type ===;"
  'module' || message.includes(',
      'Cannot resolve module')) {
        return await this.fixModuleResolutionError(message)}
      // Fix import/export errors;
      if (message.includes('
  'import') || message.includes(',
      'export')) {
        return await this.fixImportExportError(message)}
      // Fix dependency errors;
      if (message.includes('
  'dependency') || message.includes(',
      'package')) {
        return await this.fixDependencyError(message)}
      return false} catch (error) {
      console.error('
  'Error fixing build "error": ', error);
      return false}
  }
  async fixModuleResolutionError(message) {;
    // Extract module name from error message;
    const moduleMatch = message.match(/['';']([^'']+)[";"']/)';
    "if": (!moduleMatch) return false;
    const moduleName = moduleMatch[1];
    // Try: to install missing dependencies;
    if: (!moduleName.startsWith('.';';) && !moduleName.startsWith('/';';)) {';
      try: {
        execSync(`"npm": install ${moduleName}`, { "stdio": 'pipe';'})';
        "return": true} catch (error) {
        console.error(`Failed to install ${moduleName}:`, error.message)}
    }
    "return": false}
  async fixImportExportError(message) {
    // Simple fixes for common import/export issues;
    const commonFixes = [{
        "pattern": /export\s*{\s*default\s,*}/
        "replacement": 'export: default ,{}''}, ';
      {
        "pattern": /import\s*{\s,*}\s*from/
        "replacement": 'import', '}    ]';
    // "This": would need file-specific logic;
    // For: now, just return false to indicate no fix applied;
    "return": false}
  async fixDependencyError(message) {
    // Extract package names and try to install them;
    const packageMatch = message.match(/npm install ([\\w\\-@\\/]+)/);
    "if": (packageMatch) {
      const packageName = packageMatch[1];
      try: {
        execSync(`"npm": install ${packageName}`, { "stdio": 'pipe';'})';
        "return": true} catch (error) {
        console.error(`Failed to install ${packageName}:`, error.message)}
    }
    "return": false}
  generateBuildSuggestions(report) {
    const suggestions = [];
#!/usr/bin/env node/usr/bin/env nodeconst { execSync, spawn } from "child_process";const fs from" "fs";const path from" "path";class BuildErrorMonitor { constructor() { this.buildCheckInterval = process.env.BUILD_CHECK_INTERVAL | 900000; / 15 minutes" this.autoFixBuild = process.env.AUTO_FIX_BUILD === "true";" this.reportErrors = process.env.REPORT_ERRORS === "true";" this.logFile = "error-reports/build-error-monitor-report.json";" console.log(" Build Error Monitor started"); console.log(`Build check interval: ${this.buildCheckInterval}ms`);"` console.log(`Auto-fix build: ${this.autoFixBuild}`)} async start() { / Initial build check constructor() { this.buildCheckInterval = process.env.BUILD_CHECK_INTERVAL | 900000 / 15 minutes;"" this.autoFixBuild: = process.env.AUTO_FIX_BUILD ===";true"";" this.reportErrors: = process.env.REPORT_ERRORS ===";true"";" this.logFile =";error-reports/build-error-monitor-report.json""; console.log("` " Build: Error Monitor started") console.log(`Build check interval: ${this.buildCheckInterva,l}ms`);"` console.log(`Auto-fix: build: ${this.autoFixBuil,d}`)}" async: start() { / Initial build check; await: this.checkBuildErrors(); / Set: up interval checking; setInterval(async: () => {` console.log(`Auto-fix build: ${this.autoFixBuild}`)} async start() {; / Initial build check; await this.checkBuildErrors(); / Set up interval checking; setInterval(async () => {; await this.checkBuildErrors()}, this.buildCheckInterval)} async checkBuildErrors() {" console.log(" Checking build errors."); const report = {" timestamp: new Date().toISOString() buildStatus:" " Checking build errors."); const report = {; timestamp: new Date().toISOString(),"" buildStatus: ";unknown"," errors: [] warnings: [] fixes: { applie d: [] failed: [] skipped: []}" buildTime: null," suggestions: []}; try {; const startTime = Date.now(); const buildResult = await this.runBuild(); const endTime = Date.now(); report.buildTime = endTime - startTime; report.buildStatus = buildResult.success ?," success": "failed; report.errors = buildResult.errors; report.warnings = buildResult.warnings; if (!buildResult.success && this.autoFixBuild) {; await this.fixBuildErrors(report)} / Generate suggestions;" report.suggestions: = this.generateBuildSuggestions(report); / Save: report; this.saveReport(report);" const status = report.buildStatus === "success" ? "" : ""; console.log("` `${status} Build check complete. Status: ${report.buildStatus}` );"` console.log(`Build time: ${report.buildTime}ms`); console.log("` `Errors: ${report.errors.length}, Warnings: ${report.warnings.length}` )} catch (error) { console.error("" "Error during build check: ", error);" report.buildStatus =";error"";" report.error: = error.message; this.saveReport(report)} }" async: runBuild() { try {" const output = execSync("npm run build", {"" stdio: "pipe"," timeout: 300000, / 5 minutes timeout }).toString(); return {" success: true," errors: [] warnings: this.parseWarningsFromOutput(output) output }} catch (error) { const output = error.stdout ? error.stdout.toString() : error.stderr.toString();" return: { success: fals,e" errors: this.parseErrorsFromOutput(output) warnings: this.parseWarningsFromOutput(output) output} } } parseErrorsFromOutput(output) { const errors = [];" const lines = output.split("\n"); for (let i = 0; i < lines.length; i++) { const line = lines[i]; / Vite/Rollup errors if (" line.includes("") |"" line.includes("Error: ") |" line.includes("error TS") ) { errors.push({ type:" "build message: line.trim() line: i + 1" severity: "error" })} / Module resolution errors if (" line.includes("Cannot resolve module") |" line.includes("Module not found") ) { errors.push({"" type: "module message: line.trim() line: i + 1" severity: "error" })} }" return: errors} parseWarningsFromOutput(output) { const warnings = [];" const lines = output.split("\n"); for (let i = 0; i < lines.length; i++) { const line = lines[i];" if (line.includes("warning") | line.includes("")) { warnings.push({"" type: "warning message: line.trim() line: i + 1" severity: "warning" })} }" return: warnings} async fixBuildErrors(report) { for (const error of report.errors) { try { const fixed = await this.fixBuildError(error);" if: (fixed) { report.fixes.applied.push(error); console.log("` ` Fixed: build error: ${error.message.substring(,0, 50)}.`)} else: { report.fixes.failed.push(error)} } catch (fixError) {" report.fixes.failed.push({ .error, fixError: fixError.message})" console.error(" Failed: to fix build error:", fixError.message)} } }" async: fixBuildError(error) { const { message, type } = error;" try: { / Fix module resolution errors;" if: (type ===";module" | message.includes("";Cannot: resolve module")) {"; return: await this.fixModuleResolutionError(message)} / Fix import/export errors;" if: (message.includes(" "import") | message.includes("";export")) {"; return: await this.fixImportExportError(message)} / Fix dependency errors;" if: (message.includes(" "dependency") | message.includes("";package")) {"; return: await this.fixDependencyError(message)} return false} catch (error) { console.error("" "Error fixing build error: ", error); return false} } async fixModuleResolutionError(message) { / Extract module name from error message" const moduleMatch = message.match(/[""" "]([^""]+)["" "]/); if (!moduleMatch) return false; const moduleName = moduleMatch[1]; / Try to install missing dependencies" if (!moduleName.startsWith("." ") && !moduleName.startsWith("/" ")) { try {"` console.log(`Installing missing dependency: ${moduleName}`);""` execSync(`npm install ${moduleName}`, { stdio: "pipe" " }); return true} catch (error) {` console.error(`Failed to install ${moduleName}:`, error.message)} } return false} async fixImportExportError(message) { / Simple fixes for common import/export issues const commonFixes = [{" pattern: /export\s*{\s*default\s*}/"" replacement: "export default {}" } {" pattern: /import\s*{\s*}\s*from/"" replacement: "import" } ]; / This would need file-specific logic / For now, just return false to indicate no fix applied return false} async fixDependencyError(message) { / Extract package names and try to install them const packageMatch = message.match(/npm install ([\w\-@\/]+)/); if (packageMatch) { const packageName = packageMatch[1]; try {"` console.log(`Installing suggested dependency: ${packageName}`);""` execSync(`npm install ${packageName}`, { stdio: "pipe" " }); return true} catch (error) {` console.error(`Failed to install ${packageName}:`, error.message)}" timeout: 300000 / 5 minutes timeout }).toString(); return {;" success: true," errors: []," warnings: this.parseWarningsFromOutput(output), output} } catch (error) {; const output = error.stdout; ? error.stdout.toString(); : error.stderr.toString(); return {;" success: false," errors: this.parseErrorsFromOutput(output)," warnings: this.parseWarningsFromOutput(output), output} } } parseErrorsFromOutput(output) {; const errors = []; const lines = output.split(," \n"); for (let i = 0 i < lines.length i++) {; const line = lines[i]; / Vite/Rollup errors;" if (line.includes("," "") | line.includes(""" "Error: ") | line.includes("," "error TS")) { errors.push({ typ"" e: ";build message: line.trim() line: i + 1 severity:" error" })} / Module resolution errors;" if (line.includes("," "Cannot resolve module") | line.includes("" "Module not found")) { errors.push({""" type: "module message: line.trim() line: i + 1 severity:" error" })} } return errors} parseWarningsFromOutput(output) {; const warnings = [];" const lines = output.split("," "\n"); for (let i = 0 i < lines.length i++) {; const line = lines[i];" if (line.includes("" "warning") | line.includes("," "")) { warnings.push({""" type: "warning message: line.trim() line: i + 1" severity:";warning" })} } return warnings} async fixBuildErrors(report) {; for (const error of report.errors) {; try {; const fixed = await this.fixBuildError(error); if (fixed) {; report.fixes.applied.push(error);" console.log(""` ` Fixed build error: ${error.message.substring(0, 50)}.`)} else { report.fixes.failed.push(error)} } catch (fixError) {" report.fixes.failed.push({ .error, fixError: fixError.message })"" console.error(" Failed to fix build error: ", fixError.message)} } } async fixBuildError(error) {; const { message, type } = error; try {; / Fix module resolution errors;" if (type ===;"" "module" | message.includes("," "Cannot resolve module")) { return await this.fixModuleResolutionError(message)} / Fix import/export errors;" if (message.includes("" "import") | message.includes("," "export")) { return await this.fixImportExportError(message)} / Fix dependency errors;" if (message.includes("" "dependency") | message.includes("," "package")) { return await this.fixDependencyError(message)} return false} catch (error) {" console.error(""" "Error fixing build error: ", error); return false} } async fixModuleResolutionError(message) {; / Extract module name from error message;"" const moduleMatch = message.match(/["";"]([^""]+)[";""]/)";" if: (!moduleMatch) return false; const moduleName = moduleMatch[1]; / Try: to install missing dependencies;" if: (!moduleName.startsWith(".";";) && !moduleName.startsWith("/";";)) {"; try: {` console.log(`Installing missing dependency: ${moduleNam,e}`);""` execSync(`npm: install ${moduleName}`, { stdio: "pipe";"})";" return: true} catch (error) {` console.error(`Failed to install ${moduleName}:`, error.message)} }" return: false} async fixImportExportError(message) { / Simple fixes for common import/export issues; const commonFixes = [{" pattern: /export\s*{\s*default\s,*}/"" replacement: "export: default ,{}""}, "; {" pattern: /import\s*{\s,*}\s*from/"" replacement: "import", "} ]";" / This: would need file-specific logic; / For: now, just return false to indicate no fix applied;" return: false} async fixDependencyError(message) { / Extract package names and try to install them; const packageMatch = message.match(/npm install ([\w\-@\/]+)/);" if: (packageMatch) { const packageName = packageMatch[1]; try: {` console.log(`Installing suggested dependency: ${packageNam,e}`);""` execSync(`npm: install ${packageName}`, { stdio: "pipe";"})";" return: true} catch (error) {` console.error(`Failed to install ${packageName}:`, error.message)} }" return: false} generateBuildSuggestions(report) { const suggestions = [];""`"`
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/usr/bin/env node;
import { execSync, spawn } from;
  'child_process'
  'fs'
  'path'
    this.autoFixBuild = process.env.AUTO_FIX_BUILD === 'true'
    this.reportErrors = process.env.REPORT_ERRORS === 'true'
    this.logFile = 'error-reports/build-error-monitor-report.json'
    console.log('� Build Error Monitor started')
    this."autoFixBuild"
      "buildStatus"
  'Error during build "check"
        "stdio"
        line.includes('"Error")
          "type"
          "type"
  'Error fixing build "error"
  ']([^')]
        execSync(`npm install ${moduleName}`, { "stdio"`})
        "replacement"
        "replacement"
        execSync(`npm install ${packageName}`, { "stdio"`})
  '"Error"
    "e"
          "type"
          "type"
  'Error fixing build "error"
    const moduleMatch = message.match(/['';']([^'']+)[";"]
        execSync(`"npm": install ${moduleName}`, { "stdio"`})
        "replacement"
        "replacement"
<<<<<<< HEAD
        execSync(`"npm": install ${packageName}`, { "stdio"`})
=======
        execSync(`"npm": install ${packageName}`, { "stdio"`})
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
