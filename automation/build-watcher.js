




<<<<<<< HEAD


=======
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0,}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}',]; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath);  this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString(),}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) {  return} this.isBuilding = true; const buildStartTime = Date.now();  try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build',}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; } catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message,}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1;  await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() {  try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); } catch (error) {  throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() {  try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); } catch (error) {  throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() {  try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout,}); } catch (error) {  throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() {  try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run();  setTimeout(async () => { if (this.isRunning) {  await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() {  setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() {  try { await this.runTypeCheck(); } catch (error) {  await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime(),})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() {  this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport();  process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;

#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0,}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}',]; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath);  this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString(),}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) {  return} this.isBuilding = true; const buildStartTime = Date.now();  try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build',}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; } catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message,}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1;  await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() {  try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); } catch (error) {  throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() {  try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); } catch (error) {  throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() {  try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout,}); } catch (error) {  throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() {  try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run();  setTimeout(async () => { if (this.isRunning) {  await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() {  setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() {  try { await this.runTypeCheck(); } catch (error) {  await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime(),})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() {  this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport();  process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0,}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}',]; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath);  this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString(),}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) {  return} this.isBuilding = true; const buildStartTime = Date.now();  try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build',}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; } catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message,}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1;  await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() {  try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); } catch (error) {  throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() {  try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); } catch (error) {  throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() {  try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout,}); } catch (error) {  throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() {  try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run();  setTimeout(async () => { if (this.isRunning) {  await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() {  setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() {  try { await this.runTypeCheck(); } catch (error) {  await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime(),})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() {  this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport();  process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;
>>>>>>> origin/cursor/delete-old-data-records-6bba
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class BuildWatcher {
  constructor() {
    this.projectRoot = process.cwd();
    this.buildReport = {
      'timestamp': new Date().toISOString(),
      'duration': 0,
      'buildAttempts': [],
      'fileChanges': [],
      'buildSuccess': false,
      'lastBuildTime': null,
      'totalBuilds': 0,
      'successfulBuilds': 0,
      'failedBuilds': 0};
    this.startTime = Date.now();
    this.isRunning = false;
    this.watchPatterns = ['src/**/*.{ts,tsx,js,jsx}',
      'pages/**/*.{ts,tsx,js,jsx}',
      'components/**/*.{ts,tsx,js,jsx}',
      '*.{json,config.js,config.ts}',
    ];
    this.ignoredPatterns = ['node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      '*.log',
      'error-reports/**',
    ];
    this.buildDebounceTime = 5000; // 5 seconds
    this.buildTimeout = 300000; // 5 minutes
    this.lastBuildTime = 0;
    this.buildQueue = [];
    this.isBuilding = false;
  }
  async start() {
    console.log('🔍 Starting Build Watcher...');
    this.isRunning = true;
    // Create logs directory
    const logsDir = path.join(this.projectRoot, 'automation', 'logs');
<<<<<<< HEAD



=======
    if (!fs.existsSync(logsDir)) {

      fs.mkdirSync(logsDir, { recursive: true });
    }

      fs.mkdirSync(logsDir, { recursive: true });
    }
ursor/integrate-build-improve-and-re-verify-8f7d
      fs.mkdirSync(logsDir, { recursive: true });
    }
      fs.mkdirSync(logsDir, { recursive: true });
    }
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
      fs.mkdirSync(logsDir, { recursive: true });
    }
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/delete-old-data-records-6bba

      fs.mkdirSync(logsDir, { recursive: true });
    }


<<<<<<< HEAD
      fs.mkdirSync(logsDir, { "recursive": true });
=======
      fs.mkdirSync(logsDir, { 'recursive': true });
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    // Initial build check
    await this.performInitialBuild()
    // Start file watching
    this.startFileWatching()
    // Start periodic health checks
    this.startPeriodicHealthChecks()
      console.log('✅ Initial build successful')
    } catch (error) {'
      console.log('❌ Initial build failed, triggering error fixer...')
      await this.triggerErrorFixer()
    // Watch root config files'
    const configFiles = ['package.json','
      'tsconfig.json','
      'next.config.js','
      'eslint.config.js',
    ]
  watchDirectory($2) {
    try {

<<<<<<< HEAD

ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      const watcher = fs.watch(dir, { recursive: true }, (eventType, filename) => {
        if (filename && this.shouldWatchFile(filename)) {
          this.handleFileChange(eventType, path.join(dir, filename));
        }
      });
      console.log(`👀 Watching directory: ${dir}`);
      console.log(`👀 Watching directory: ${dir}`);

<<<<<<< HEAD








=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      const watcher = fs.watch(
        dir,'
        { 'recursive': true },
        (eventType, filename) => {
          if (filename && this.shouldWatchFile(filename)) {
            this.handleFileChange(eventType, path.join(dir, filename));
          }
        }
      );
      console.log(`👀 Watching 'directory': ${dir}`);
    } catch (error) {
      console.error(`Error watching directory ${dir}:`, error);
    }
  }
  watchFile(filePath) {
    try {
      const watcher = fs.watch(filePath, (eventType, filename) => {
        this.handleFileChange(eventType, filePath);
      });




<<<<<<< HEAD



      console.log(`👀 Watching file: ${filePath}`);




      console.log(`👀 Watching "file": ${filePath}`);
=======

      console.log(`👀 Watching file: ${filePath}`);

      console.log(`👀 Watching file: ${filePath}`);
      console.log(`👀 Watching file: ${filePath}`);
      console.log(`👀 Watching 'file': ${filePath}`);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    } catch (error) {
      console.error(`Error watching file ${filePath}:`, error);
    }
  }
  shouldWatchFile(filename) {
    if (!filename) return false;
    // Check if file matches watch patterns
    const matchesPattern = this.watchPatterns.some(pattern => {}

      const regex = this.patternToRegex(pattern)
      return regex.test(filename)
    if (!matchesPattern) return false
    // Check if file is ignored
    const isIgnored = this.ignoredPatterns.some(pattern => {
      const regex = this.patternToRegex(pattern);
      return regex.test(filename);
<<<<<<< HEAD

    if (!matchesPattern) return false;
    // Check if file is ignored;
=======
    });
    return !isIgnored;
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba

    return !isIgnored;
  }

<<<<<<< HEAD

    return !isIgnored;
  }
=======
    return !isIgnored;
  }
ursor/integrate-build-improve-and-re-verify-8f7d
    return !isIgnored;
  }
    return !isIgnored;
  }
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
    return !isIgnored;
  }
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/delete-old-data-records-6bba

    return !isIgnored;
  }


  patternToRegex(pattern) {
    // Convert glob pattern to regex
    const regexStr = pattern;'
      .replace(/\./g, '\\.')
      .replace(/\*/g, '.*')
      .replace(/\?/g, '.')
      .replace(/\{([^}]+)\}/g, '($1)')
<<<<<<< HEAD

      .replace(/,/g, '|');`;
    return new RegExp(`^${regexStr}$`);
  }


    return new RegExp(`^${regexStr}$`);
  }
=======
      .replace(/,/g, '|');
    return new RegExp(`^${regexStr}$`);
  }

    return new RegExp(`^${regexStr}$`);
  }

    return new RegExp(`^${regexStr}$`);
  }
ursor/integrate-build-improve-and-re-verify-8f7d
    return new RegExp(`^${regexStr}$`);
  }
    return new RegExp(`^${regexStr}$`);
  }
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
    return new RegExp(`^${regexStr}$`);
  }
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/delete-old-data-records-6bba

    return new RegExp(`^${regexStr}$`);
  }


  handleFileChange(eventType, filePath) {
    const relativePath = path.relative(this.projectRoot, filePath);
    console.log(`📝 File change 'detected': ${eventType} - ${relativePath}`);
    this.buildReport.fileChanges.push({
      eventType,
      'file': relativePath,
      'timestamp': new Date().toISOString()});
    // Queue build
    this.queueBuild()
  queueBuild($2) {}
    const now = Date.now()
    // Clear existing timeout
  if($2) {}
      clearTimeout(this.buildTimeout)
    // Set new timeout for debounced build
    this.buildTimeout = setTimeout(async () => {}
  if($2) {}
        await this.runBuild()
    }, this.buildDebounceTime)
  async runBuild() {}
  if($2) {'

      console.log('⏳ Build already in progress, skipping...')
      return
    this.isBuilding = true
    const buildStartTime = Date.now();'
    console.log('🏗️ Starting build...')
      // Run type check first
      await this.runTypeCheck()
      // Run lint check
      await this.runLintCheck()
      // Run build
      await this.runNextBuild();
      const buildDuration = Date.now() - buildStartTime;
      this.buildReport.buildAttempts.push({
        'timestamp': new Date().toISOString(),
        'duration': buildDuration,
        'success': true,
        'type': 'full_build'});
      this.buildReport.buildSuccess = true;
      this.buildReport.lastBuildTime = new Date().toISOString();
      this.buildReport.totalBuilds += 1;
      this.buildReport.successfulBuilds += 1;
<<<<<<< HEAD


      console.log(`✅ Build completed successfully in ${buildDuration}ms`);

=======
      console.log(`✅ Build completed successfully in ${buildDuration}ms`);
      console.log(`✅ Build completed successfully in ${buildDuration}ms`);
>>>>>>> origin/cursor/delete-old-data-records-6bba




<<<<<<< HEAD


=======

      console.log(`✅ Build completed successfully in ${buildDuration}ms`);

      console.log(`✅ Build completed successfully in ${buildDuration}ms`);
      console.log(`✅ Build completed successfully in ${buildDuration}ms`);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    } catch (error) {
      const buildDuration = Date.now() - buildStartTime;
      this.buildReport.buildAttempts.push({
        'timestamp': new Date().toISOString(),
        'duration': buildDuration,
        'success': false,
        'type': 'full_build',
        'error': error.message});
      this.buildReport.buildSuccess = false;
      this.buildReport.totalBuilds += 1;
      this.buildReport.failedBuilds += 1;
      console.log(`❌ Build failed after ${buildDuration}'ms': `, error.message);
      // Trigger error fixer on build failure
      await this.triggerErrorFixer();
    } finally {
      this.isBuilding = false;
    }
  }
  async runTypeCheck() {
    console.log('🔍 Running type check...');
    try {
      execSync('npx tsc --noEmit', {
        'encoding': 'utf8',
        'cwd': this.projectRoot,
        'stdio': 'pipe',
        'timeout': 60000, // 1 minute timeout
      });

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      console.log('✅ Type check passed');
    } catch (error) {
      console.log('❌ Type check failed');
      throw new Error(`Type check failed: ${error.message}`);

      console.log('✅ Type check passed');
    } catch (error) {
      console.log('❌ Type check failed');
      throw new Error(`Type check 'failed': ${error.message}`);
    }
  }
  async runLintCheck() {
    console.log('🧹 Running lint check...');
    try {
      execSync('npx eslint . --max-warnings 0', {
        'encoding': 'utf8',
        'cwd': this.projectRoot,
        'stdio': 'pipe',
        'timeout': 60000, // 1 minute timeout
      });

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      console.log('✅ Lint check passed');
    } catch (error) {
      console.log('❌ Lint check failed');
      throw new Error(`Lint check failed: ${error.message}`);

      console.log('✅ Lint check passed');
    } catch (error) {
      console.log('❌ Lint check failed');
      throw new Error(`Lint check 'failed': ${error.message}`);
    }
  }
  async runNextBuild() {
    console.log('🏗️ Running Next.js build...');
    try {

<<<<<<< HEAD





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      execSync('npx next build', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,

        stdio: 'pipe',
        timeout: this.buildTimeout
      });
      console.log('✅ Next.js build completed');
    } catch (error) {
      console.log('❌ Next.js build failed');
      throw new Error(`Next.js build failed: ${error.message}`);

<<<<<<< HEAD

ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5







=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      execSync('npx next build', {
        'encoding': 'utf8',
        'cwd': this.projectRoot,
        'stdio': 'pipe',
        'timeout': this.buildTimeout})
      console.log('✅ Next.js build completed')
    } catch (error) {'
      console.log('❌ Next.js build failed');'`
      throw new Error(`Next.js build 'failed': ${error.message}`)
      const automation = new ErrorFixerAutomation()
      await automation.run();'
      console.log('✅ Error fixer completed')
      // Try build again after error fixing
      setTimeout(async () => {
        if (this.isRunning) {
          console.log('🔄 Retrying build after error fixing...');
          await this.runBuild();
        }
      }, 5000);

<<<<<<< HEAD
=======
    } catch (error) {
      console.error('❌ Error fixer failed:', error);
>>>>>>> origin/cursor/delete-old-data-records-6bba


    } catch (error) {
      console.error('❌ Error fixer 'failed': ', error);
    }
  }
  startPeriodicHealthChecks() {
    console.log('🔄 Starting periodic health checks...');
    // Check every 30 minutes

<<<<<<< HEAD





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    setInterval(async () => {
      if (this.isRunning) {
        await this.performHealthCheck();
      }
    }, 30 * 60 * 1000);
  }

<<<<<<< HEAD






=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    setInterval(
      async () => {
        if (this.isRunning) {
          await this.performHealthCheck();
        }
      },
      30 * 60 * 1000
    );
  }
  async performHealthCheck() {
    console.log('🏥 Performing build health check...');
    try {
      // Check if build is still working
      await this.runTypeCheck();
      console.log('✅ Health check passed');
    } catch (error) {
      console.log('❌ Health check failed, triggering error fixer...');
      await this.triggerErrorFixer();
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  }
  async saveReport() {
    const reportPath = path.join(
      this.projectRoot,
      'error-reports',
      `build-watcher-report-${Date.now()}.json`
    );
    const reportDir = path.dirname(reportPath);
    if (!fs.existsSync(reportDir)) {

      fs.mkdirSync(reportDir, { recursive: true });
    }

<<<<<<< HEAD




    }
  }
  async saveReport() {
    const reportPath = path.join(
      this.projectRoot,
      'error-reports',
      `build-watcher-report-${Date.now()}.json`
    );
    const reportDir = path.dirname(reportPath);
    if (!fs.existsSync(reportDir)) {
=======
      fs.mkdirSync(reportDir, { recursive: true });
    }
ursor/integrate-build-improve-and-re-verify-8f7d
      fs.mkdirSync(reportDir, { recursive: true });
    }
      fs.mkdirSync(reportDir, { recursive: true });
    }
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
      fs.mkdirSync(reportDir, { recursive: true });
    }
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/delete-old-data-records-6bba

      fs.mkdirSync(reportDir, { recursive: true });
    }


<<<<<<< HEAD
      fs.mkdirSync(reportDir, { "recursive": true });
=======
      fs.mkdirSync(reportDir, { 'recursive': true });
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    // Add duration to report
    this.buildReport.duration = Date.now() - this.startTime;
    fs.writeFileSync(reportPath, JSON.stringify(this.buildReport, null, 2));
    // Keep only the latest 10 reports
    this.cleanupOldReports(reportDir);
  }
  cleanupOldReports(reportDir) {
    try {
      const files = fs
        .readdirSync(reportDir)
        .filter(file => file.startsWith('build-watcher-report-'))
        .map(file => ({
          'name': file,
          'path': path.join(reportDir, file),
          'time': fs.statSync(path.join(reportDir, file)).mtime.getTime()}))
        .sort((a, b) => b.time - a.time);
      // Remove old reports (keep only the latest 10)
      if (files.length > 10) {
        for (let i = 10; i < files.length; i++) {
          fs.unlinkSync(files[i].path);
        }
      }
<<<<<<< HEAD
=======
    } catch (error) {
>>>>>>> origin/cursor/delete-old-data-records-6bba




<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
      console.error('Error cleaning up old "reports": ', error);
=======
      console.error('Error cleaning up old reports:', error);
      console.error('Error cleaning up old reports:', error);
      console.error('Error cleaning up old 'reports': ', error);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  }
  async shutdown() {
    console.log('🛑 Shutting down Build Watcher...');
    this.isRunning = false;
    // Clear any pending timeouts
    if (this.buildTimeout) {
      clearTimeout(this.buildTimeout);
    }
    // Save final report
    await this.saveReport();
    console.log('✅ Build Watcher shutdown complete');
    process.exit(0);
  }
}
// Run the build watcher
if (require.main === module) {
  const watcher = new BuildWatcher();
  watcher.start().catch(console.error);
}
<<<<<<< HEAD




module.exports = BuildWatcher;
module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0,}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}',]; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath); console.log(`📝 File change detected: ${eventType} - ${relativePath}`); this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString(),}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) { console.log('⏳ Build already in progress,skipping...'); return} this.isBuilding = true; const buildStartTime = Date.now(); console.log('🏗️ Starting build...'); try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build',}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; console.log(`✅ Build completed successfully in ${buildDuration}ms`)} catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message,}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1; console.log(`❌ Build failed after ${buildDuration}ms:`,error.message); await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() { console.log('🔍 Running type check...'); try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Type check passed')} catch (error) { console.log('❌ Type check failed'); throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() { console.log('🧹 Running lint check...'); try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Lint check passed')} catch (error) { console.log('❌ Lint check failed'); throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() { console.log('🏗️ Running Next.js build...'); try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout,}); console.log('✅ Next.js build completed')} catch (error) { console.log('❌ Next.js build failed'); throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() { console.log('🚀 Triggering error fixer...'); try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run(); console.log('✅ Error fixer completed'); setTimeout(async () => { if (this.isRunning) { console.log('🔄 Retrying build after error fixing...'); await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() { console.log('🔄 Starting periodic health checks...'); setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() { console.log('🏥 Performing build health check...'); try { await this.runTypeCheck(); console.log('✅ Health check passed')} catch (error) { console.log('❌ Health check failed,triggering error fixer...'); await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime(),})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() { console.log('🛑 Shutting down Build Watcher...'); this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport(); console.log('✅ Build Watcher shutdown complete'); process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;





=======
module.exports = BuildWatcher;
module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0,}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}',]; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath); console.log(`📝 File change detected: ${eventType} - ${relativePath}`); this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString(),}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) { console.log('⏳ Build already in progress,skipping...'); return} this.isBuilding = true; const buildStartTime = Date.now(); console.log('🏗️ Starting build...'); try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build',}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; console.log(`✅ Build completed successfully in ${buildDuration}ms`)} catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message,}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1; console.log(`❌ Build failed after ${buildDuration}ms:`,error.message); await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() { console.log('🔍 Running type check...'); try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Type check passed')} catch (error) { console.log('❌ Type check failed'); throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() { console.log('🧹 Running lint check...'); try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Lint check passed')} catch (error) { console.log('❌ Lint check failed'); throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() { console.log('🏗️ Running Next.js build...'); try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout,}); console.log('✅ Next.js build completed')} catch (error) { console.log('❌ Next.js build failed'); throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() { console.log('🚀 Triggering error fixer...'); try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run(); console.log('✅ Error fixer completed'); setTimeout(async () => { if (this.isRunning) { console.log('🔄 Retrying build after error fixing...'); await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() { console.log('🔄 Starting periodic health checks...'); setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() { console.log('🏥 Performing build health check...'); try { await this.runTypeCheck(); console.log('✅ Health check passed')} catch (error) { console.log('❌ Health check failed,triggering error fixer...'); await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime(),})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() { console.log('🛑 Shutting down Build Watcher...'); this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport(); console.log('✅ Build Watcher shutdown complete'); process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;
module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0,}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}',]; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath); console.log(`📝 File change detected: ${eventType} - ${relativePath}`); this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString(),}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) { console.log('⏳ Build already in progress,skipping...'); return} this.isBuilding = true; const buildStartTime = Date.now(); console.log('🏗️ Starting build...'); try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build',}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; console.log(`✅ Build completed successfully in ${buildDuration}ms`)} catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message,}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1; console.log(`❌ Build failed after ${buildDuration}ms:`,error.message); await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() { console.log('🔍 Running type check...'); try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Type check passed')} catch (error) { console.log('❌ Type check failed'); throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() { console.log('🧹 Running lint check...'); try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Lint check passed')} catch (error) { console.log('❌ Lint check failed'); throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() { console.log('🏗️ Running Next.js build...'); try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout,}); console.log('✅ Next.js build completed')} catch (error) { console.log('❌ Next.js build failed'); throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() { console.log('🚀 Triggering error fixer...'); try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run(); console.log('✅ Error fixer completed'); setTimeout(async () => { if (this.isRunning) { console.log('🔄 Retrying build after error fixing...'); await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() { console.log('🔄 Starting periodic health checks...'); setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() { console.log('🏥 Performing build health check...'); try { await this.runTypeCheck(); console.log('✅ Health check passed')} catch (error) { console.log('❌ Health check failed,triggering error fixer...'); await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime(),})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() { console.log('🛑 Shutting down Build Watcher...'); this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport(); console.log('✅ Build Watcher shutdown complete'); process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;

module.exports = BuildWatcher;
module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0,}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}',]; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath); console.log(`📝 File change detected: ${eventType} - ${relativePath}`); this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString(),}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) { console.log('⏳ Build already in progress,skipping...'); return} this.isBuilding = true; const buildStartTime = Date.now(); console.log('🏗️ Starting build...'); try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build',}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; console.log(`✅ Build completed successfully in ${buildDuration}ms`)} catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message,}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1; console.log(`❌ Build failed after ${buildDuration}ms:`,error.message); await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() { console.log('🔍 Running type check...'); try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Type check passed')} catch (error) { console.log('❌ Type check failed'); throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() { console.log('🧹 Running lint check...'); try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Lint check passed')} catch (error) { console.log('❌ Lint check failed'); throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() { console.log('🏗️ Running Next.js build...'); try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout,}); console.log('✅ Next.js build completed')} catch (error) { console.log('❌ Next.js build failed'); throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() { console.log('🚀 Triggering error fixer...'); try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run(); console.log('✅ Error fixer completed'); setTimeout(async () => { if (this.isRunning) { console.log('🔄 Retrying build after error fixing...'); await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() { console.log('🔄 Starting periodic health checks...'); setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() { console.log('🏥 Performing build health check...'); try { await this.runTypeCheck(); console.log('✅ Health check passed')} catch (error) { console.log('❌ Health check failed,triggering error fixer...'); await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime(),})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() { console.log('🛑 Shutting down Build Watcher...'); this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport(); console.log('✅ Build Watcher shutdown complete'); process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;

module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0,}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}',]; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath); console.log(`📝 File change detected: ${eventType} - ${relativePath}`); this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString(),}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) { console.log('⏳ Build already in progress,skipping...'); return} this.isBuilding = true; const buildStartTime = Date.now(); console.log('🏗️ Starting build...'); try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build',}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; console.log(`✅ Build completed successfully in ${buildDuration}ms`)} catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message,}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1; console.log(`❌ Build failed after ${buildDuration}ms:`,error.message); await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() { console.log('🔍 Running type check...'); try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Type check passed')} catch (error) { console.log('❌ Type check failed'); throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() { console.log('🧹 Running lint check...'); try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Lint check passed')} catch (error) { console.log('❌ Lint check failed'); throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() { console.log('🏗️ Running Next.js build...'); try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout,}); console.log('✅ Next.js build completed')} catch (error) { console.log('❌ Next.js build failed'); throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() { console.log('🚀 Triggering error fixer...'); try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run(); console.log('✅ Error fixer completed'); setTimeout(async () => { if (this.isRunning) { console.log('🔄 Retrying build after error fixing...'); await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() { console.log('🔄 Starting periodic health checks...'); setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() { console.log('🏥 Performing build health check...'); try { await this.runTypeCheck(); console.log('✅ Health check passed')} catch (error) { console.log('❌ Health check failed,triggering error fixer...'); await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime(),})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() { console.log('🛑 Shutting down Build Watcher...'); this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport(); console.log('✅ Build Watcher shutdown complete'); process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;
module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0,}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}',]; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath); console.log(`📝 File change detected: ${eventType} - ${relativePath}`); this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString(),}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) { console.log('⏳ Build already in progress,skipping...'); return} this.isBuilding = true; const buildStartTime = Date.now(); console.log('🏗️ Starting build...'); try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build',}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; console.log(`✅ Build completed successfully in ${buildDuration}ms`)} catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message,}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1; console.log(`❌ Build failed after ${buildDuration}ms:`,error.message); await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() { console.log('🔍 Running type check...'); try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Type check passed')} catch (error) { console.log('❌ Type check failed'); throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() { console.log('🧹 Running lint check...'); try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Lint check passed')} catch (error) { console.log('❌ Lint check failed'); throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() { console.log('🏗️ Running Next.js build...'); try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout,}); console.log('✅ Next.js build completed')} catch (error) { console.log('❌ Next.js build failed'); throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() { console.log('🚀 Triggering error fixer...'); try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run(); console.log('✅ Error fixer completed'); setTimeout(async () => { if (this.isRunning) { console.log('🔄 Retrying build after error fixing...'); await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() { console.log('🔄 Starting periodic health checks...'); setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() { console.log('🏥 Performing build health check...'); try { await this.runTypeCheck(); console.log('✅ Health check passed')} catch (error) { console.log('❌ Health check failed,triggering error fixer...'); await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime(),})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() { console.log('🛑 Shutting down Build Watcher...'); this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport(); console.log('✅ Build Watcher shutdown complete'); process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;
module.exports = BuildWatcher;
module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}']; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath); console.log(`📝 File change detected: ${eventType} - ${relativePath}`); this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString()}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) { console.log('⏳ Build already in progress,skipping...'); return} this.isBuilding = true; const buildStartTime = Date.now(); console.log('🏗️ Starting build...'); try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build'}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; console.log(`✅ Build completed successfully in ${buildDuration}ms`)} catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1; console.log(`❌ Build failed after ${buildDuration}ms:`,error.message); await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() { console.log('🔍 Running type check...'); try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000}); console.log('✅ Type check passed')} catch (error) { console.log('❌ Type check failed'); throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() { console.log('🧹 Running lint check...'); try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000}); console.log('✅ Lint check passed')} catch (error) { console.log('❌ Lint check failed'); throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() { console.log('🏗️ Running Next.js build...'); try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout}); console.log('✅ Next.js build completed')} catch (error) { console.log('❌ Next.js build failed'); throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() { console.log('🚀 Triggering error fixer...'); try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run(); console.log('✅ Error fixer completed'); setTimeout(async () => { if (this.isRunning) { console.log('🔄 Retrying build after error fixing...'); await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() { console.log('🔄 Starting periodic health checks...'); setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() { console.log('🏥 Performing build health check...'); try { await this.runTypeCheck(); console.log('✅ Health check passed')} catch (error) { console.log('❌ Health check failed,triggering error fixer...'); await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime()})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() { console.log('🛑 Shutting down Build Watcher...'); this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport(); console.log('✅ Build Watcher shutdown complete'); process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}']; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath); console.log(`📝 File change detected: ${eventType} - ${relativePath}`); this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString()}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) { console.log('⏳ Build already in progress,skipping...'); return} this.isBuilding = true; const buildStartTime = Date.now(); console.log('🏗️ Starting build...'); try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build'}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; console.log(`✅ Build completed successfully in ${buildDuration}ms`)} catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1; console.log(`❌ Build failed after ${buildDuration}ms:`,error.message); await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() { console.log('🔍 Running type check...'); try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000}); console.log('✅ Type check passed')} catch (error) { console.log('❌ Type check failed'); throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() { console.log('🧹 Running lint check...'); try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000}); console.log('✅ Lint check passed')} catch (error) { console.log('❌ Lint check failed'); throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() { console.log('🏗️ Running Next.js build...'); try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout}); console.log('✅ Next.js build completed')} catch (error) { console.log('❌ Next.js build failed'); throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() { console.log('🚀 Triggering error fixer...'); try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run(); console.log('✅ Error fixer completed'); setTimeout(async () => { if (this.isRunning) { console.log('🔄 Retrying build after error fixing...'); await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() { console.log('🔄 Starting periodic health checks...'); setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() { console.log('🏥 Performing build health check...'); try { await this.runTypeCheck(); console.log('✅ Health check passed')} catch (error) { console.log('❌ Health check failed,triggering error fixer...'); await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime()})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() { console.log('🛑 Shutting down Build Watcher...'); this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport(); console.log('✅ Build Watcher shutdown complete'); process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;
module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}']; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath); console.log(`📝 File change detected: ${eventType} - ${relativePath}`); this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString()}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) { console.log('⏳ Build already in progress,skipping...'); return} this.isBuilding = true; const buildStartTime = Date.now(); console.log('🏗️ Starting build...'); try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build'}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; console.log(`✅ Build completed successfully in ${buildDuration}ms`)} catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1; console.log(`❌ Build failed after ${buildDuration}ms:`,error.message); await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() { console.log('🔍 Running type check...'); try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000}); console.log('✅ Type check passed')} catch (error) { console.log('❌ Type check failed'); throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() { console.log('🧹 Running lint check...'); try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000}); console.log('✅ Lint check passed')} catch (error) { console.log('❌ Lint check failed'); throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() { console.log('🏗️ Running Next.js build...'); try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout}); console.log('✅ Next.js build completed')} catch (error) { console.log('❌ Next.js build failed'); throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() { console.log('🚀 Triggering error fixer...'); try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run(); console.log('✅ Error fixer completed'); setTimeout(async () => { if (this.isRunning) { console.log('🔄 Retrying build after error fixing...'); await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() { console.log('🔄 Starting periodic health checks...'); setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() { console.log('🏥 Performing build health check...'); try { await this.runTypeCheck(); console.log('✅ Health check passed')} catch (error) { console.log('❌ Health check failed,triggering error fixer...'); await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime()})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() { console.log('🛑 Shutting down Build Watcher...'); this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport(); console.log('✅ Build Watcher shutdown complete'); process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;
module.exports = BuildWatcher;
module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}']; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath); console.log(`📝 File change detected: ${eventType} - ${relativePath}`); this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString()}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) { console.log('⏳ Build already in progress,skipping...'); return} this.isBuilding = true; const buildStartTime = Date.now(); console.log('🏗️ Starting build...'); try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build'}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; console.log(`✅ Build completed successfully in ${buildDuration}ms`)} catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1; console.log(`❌ Build failed after ${buildDuration}ms:`,error.message); await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() { console.log('🔍 Running type check...'); try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000}); console.log('✅ Type check passed')} catch (error) { console.log('❌ Type check failed'); throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() { console.log('🧹 Running lint check...'); try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000}); console.log('✅ Lint check passed')} catch (error) { console.log('❌ Lint check failed'); throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() { console.log('🏗️ Running Next.js build...'); try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout}); console.log('✅ Next.js build completed')} catch (error) { console.log('❌ Next.js build failed'); throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() { console.log('🚀 Triggering error fixer...'); try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run(); console.log('✅ Error fixer completed'); setTimeout(async () => { if (this.isRunning) { console.log('🔄 Retrying build after error fixing...'); await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() { console.log('🔄 Starting periodic health checks...'); setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() { console.log('🏥 Performing build health check...'); try { await this.runTypeCheck(); console.log('✅ Health check passed')} catch (error) { console.log('❌ Health check failed,triggering error fixer...'); await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime()})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() { console.log('🛑 Shutting down Build Watcher...'); this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport(); console.log('✅ Build Watcher shutdown complete'); process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
}
module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}']; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath); console.log(`📝 File change detected: ${eventType} - ${relativePath}`); this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString()}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) { console.log('⏳ Build already in progress,skipping...'); return} this.isBuilding = true; const buildStartTime = Date.now(); console.log('🏗️ Starting build...'); try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build'}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; console.log(`✅ Build completed successfully in ${buildDuration}ms`)} catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1; console.log(`❌ Build failed after ${buildDuration}ms:`,error.message); await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() { console.log('🔍 Running type check...'); try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000}); console.log('✅ Type check passed')} catch (error) { console.log('❌ Type check failed'); throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() { console.log('🧹 Running lint check...'); try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000}); console.log('✅ Lint check passed')} catch (error) { console.log('❌ Lint check failed'); throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() { console.log('🏗️ Running Next.js build...'); try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout}); console.log('✅ Next.js build completed')} catch (error) { console.log('❌ Next.js build failed'); throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() { console.log('🚀 Triggering error fixer...'); try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run(); console.log('✅ Error fixer completed'); setTimeout(async () => { if (this.isRunning) { console.log('🔄 Retrying build after error fixing...'); await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() { console.log('🔄 Starting periodic health checks...'); setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() { console.log('🏥 Performing build health check...'); try { await this.runTypeCheck(); console.log('✅ Health check passed')} catch (error) { console.log('❌ Health check failed,triggering error fixer...'); await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime()})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() { console.log('🛑 Shutting down Build Watcher...'); this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport(); console.log('✅ Build Watcher shutdown complete'); process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;
module.exports = BuildWatcher;
module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}']; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath); console.log(`📝 File change detected: ${eventType} - ${relativePath}`); this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString()}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) { console.log('⏳ Build already in progress,skipping...'); return} this.isBuilding = true; const buildStartTime = Date.now(); console.log('🏗️ Starting build...'); try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build'}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; console.log(`✅ Build completed successfully in ${buildDuration}ms`)} catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1; console.log(`❌ Build failed after ${buildDuration}ms:`,error.message); await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() { console.log('🔍 Running type check...'); try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000}); console.log('✅ Type check passed')} catch (error) { console.log('❌ Type check failed'); throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() { console.log('🧹 Running lint check...'); try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000}); console.log('✅ Lint check passed')} catch (error) { console.log('❌ Lint check failed'); throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() { console.log('🏗️ Running Next.js build...'); try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout}); console.log('✅ Next.js build completed')} catch (error) { console.log('❌ Next.js build failed'); throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() { console.log('🚀 Triggering error fixer...'); try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run(); console.log('✅ Error fixer completed'); setTimeout(async () => { if (this.isRunning) { console.log('🔄 Retrying build after error fixing...'); await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() { console.log('🔄 Starting periodic health checks...'); setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() { console.log('🏥 Performing build health check...'); try { await this.runTypeCheck(); console.log('✅ Health check passed')} catch (error) { console.log('❌ Health check failed,triggering error fixer...'); await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime()})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() { console.log('🛑 Shutting down Build Watcher...'); this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport(); console.log('✅ Build Watcher shutdown complete'); process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;
module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0,}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}',]; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath); console.log(`📝 File change detected: ${eventType} - ${relativePath}`); this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString(),}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) { console.log('⏳ Build already in progress,skipping...'); return} this.isBuilding = true; const buildStartTime = Date.now(); console.log('🏗️ Starting build...'); try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build',}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; console.log(`✅ Build completed successfully in ${buildDuration}ms`)} catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message,}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1; console.log(`❌ Build failed after ${buildDuration}ms:`,error.message); await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() { console.log('🔍 Running type check...'); try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Type check passed')} catch (error) { console.log('❌ Type check failed'); throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() { console.log('🧹 Running lint check...'); try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Lint check passed')} catch (error) { console.log('❌ Lint check failed'); throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() { console.log('🏗️ Running Next.js build...'); try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout,}); console.log('✅ Next.js build completed')} catch (error) { console.log('❌ Next.js build failed'); throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() { console.log('🚀 Triggering error fixer...'); try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run(); console.log('✅ Error fixer completed'); setTimeout(async () => { if (this.isRunning) { console.log('🔄 Retrying build after error fixing...'); await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() { console.log('🔄 Starting periodic health checks...'); setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() { console.log('🏥 Performing build health check...'); try { await this.runTypeCheck(); console.log('✅ Health check passed')} catch (error) { console.log('❌ Health check failed,triggering error fixer...'); await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime(),})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() { console.log('🛑 Shutting down Build Watcher...'); this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport(); console.log('✅ Build Watcher shutdown complete'); process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;

module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0,}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}',]; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath); console.log(`📝 File change detected: ${eventType} - ${relativePath}`); this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString(),}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) { console.log('⏳ Build already in progress,skipping...'); return} this.isBuilding = true; const buildStartTime = Date.now(); console.log('🏗️ Starting build...'); try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build',}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; console.log(`✅ Build completed successfully in ${buildDuration}ms`)} catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message,}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1; console.log(`❌ Build failed after ${buildDuration}ms:`,error.message); await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() { console.log('🔍 Running type check...'); try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Type check passed')} catch (error) { console.log('❌ Type check failed'); throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() { console.log('🧹 Running lint check...'); try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Lint check passed')} catch (error) { console.log('❌ Lint check failed'); throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() { console.log('🏗️ Running Next.js build...'); try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout,}); console.log('✅ Next.js build completed')} catch (error) { console.log('❌ Next.js build failed'); throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() { console.log('🚀 Triggering error fixer...'); try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run(); console.log('✅ Error fixer completed'); setTimeout(async () => { if (this.isRunning) { console.log('🔄 Retrying build after error fixing...'); await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() { console.log('🔄 Starting periodic health checks...'); setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() { console.log('🏥 Performing build health check...'); try { await this.runTypeCheck(); console.log('✅ Health check passed')} catch (error) { console.log('❌ Health check failed,triggering error fixer...'); await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime(),})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() { console.log('🛑 Shutting down Build Watcher...'); this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport(); console.log('✅ Build Watcher shutdown complete'); process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;

module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}']; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath); console.log(`📝 File change detected: ${eventType} - ${relativePath}`); this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString()}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) { console.log('⏳ Build already in progress,skipping...'); return} this.isBuilding = true; const buildStartTime = Date.now(); console.log('🏗️ Starting build...'); try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build'}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; console.log(`✅ Build completed successfully in ${buildDuration}ms`)} catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1; console.log(`❌ Build failed after ${buildDuration}ms:`,error.message); await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() { console.log('🔍 Running type check...'); try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000}); console.log('✅ Type check passed')} catch (error) { console.log('❌ Type check failed'); throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() { console.log('🧹 Running lint check...'); try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000}); console.log('✅ Lint check passed')} catch (error) { console.log('❌ Lint check failed'); throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() { console.log('🏗️ Running Next.js build...'); try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout}); console.log('✅ Next.js build completed')} catch (error) { console.log('❌ Next.js build failed'); throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() { console.log('🚀 Triggering error fixer...'); try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run(); console.log('✅ Error fixer completed'); setTimeout(async () => { if (this.isRunning) { console.log('🔄 Retrying build after error fixing...'); await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() { console.log('🔄 Starting periodic health checks...'); setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() { console.log('🏥 Performing build health check...'); try { await this.runTypeCheck(); console.log('✅ Health check passed')} catch (error) { console.log('❌ Health check failed,triggering error fixer...'); await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime()})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() { console.log('🛑 Shutting down Build Watcher...'); this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport(); console.log('✅ Build Watcher shutdown complete'); process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); class BuildWatcher { constructor() { this.projectRoot = process.cwd(); this.buildReport = { timestamp: new Date().toISOString(),duration: 0,buildAttempts: [],fileChanges: [],buildSuccess: false,lastBuildTime: null,totalBuilds: 0,successfulBuilds: 0,failedBuilds: 0,}; this.startTime = Date.now(); this.isRunning = false; this.watchPatterns = [ 'src*.{ts,tsx,js,jsx}','pages*.{ts,tsx,js,jsx}','components*.{ts,tsx,js,jsx}','*.{json,config.js,config.ts}',]; this.ignoredPatterns = [ 'node_modulesg,'.*') .replace(/\?/g,'.') .replace(/\{([^}]+)\}/g,'($1)') .replace(/,/g,'|'); return new RegExp(`^${regexStr}$`)} handleFileChange(eventType,filePath) { const relativePath = path.relative(this.projectRoot,filePath); console.log(`📝 File change detected: ${eventType} - ${relativePath}`); this.buildReport.fileChanges.push({ eventType,file: relativePath,timestamp: new Date().toISOString(),}); this.queueBuild()} queueBuild() { const now = Date.now(); if (this.buildTimeout) { clearTimeout(this.buildTimeout)} this.buildTimeout = setTimeout(async () => { if (this.isRunning && !this.isBuilding) { await this.runBuild()} },this.buildDebounceTime)} async runBuild() { if (this.isBuilding) { console.log('⏳ Build already in progress,skipping...'); return} this.isBuilding = true; const buildStartTime = Date.now(); console.log('🏗️ Starting build...'); try { await this.runTypeCheck(); await this.runLintCheck(); await this.runNextBuild(); const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: true,type: 'full_build',}); this.buildReport.buildSuccess = true; this.buildReport.lastBuildTime = new Date().toISOString(); this.buildReport.totalBuilds += 1; this.buildReport.successfulBuilds += 1; console.log(`✅ Build completed successfully in ${buildDuration}ms`)} catch (error) { const buildDuration = Date.now() - buildStartTime; this.buildReport.buildAttempts.push({ timestamp: new Date().toISOString(),duration: buildDuration,success: false,type: 'full_build',error: error.message,}); this.buildReport.buildSuccess = false; this.buildReport.totalBuilds += 1; this.buildReport.failedBuilds += 1; console.log(`❌ Build failed after ${buildDuration}ms:`,error.message); await this.triggerErrorFixer()} finally { this.isBuilding = false} } async runTypeCheck() { console.log('🔍 Running type check...'); try { execSync('npx tsc --noEmit',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Type check passed')} catch (error) { console.log('❌ Type check failed'); throw new Error(`Type check failed: ${error.message}`)} } async runLintCheck() { console.log('🧹 Running lint check...'); try { execSync('npx eslint . --max-warnings 0',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: 60000,}); console.log('✅ Lint check passed')} catch (error) { console.log('❌ Lint check failed'); throw new Error(`Lint check failed: ${error.message}`)} } async runNextBuild() { console.log('🏗️ Running Next.js build...'); try { execSync('npx next build',{ encoding: 'utf8',cwd: this.projectRoot,stdio: 'pipe',timeout: this.buildTimeout,}); console.log('✅ Next.js build completed')} catch (error) { console.log('❌ Next.js build failed'); throw new Error(`Next.js build failed: ${error.message}`)} } async triggerErrorFixer() { console.log('🚀 Triggering error fixer...'); try { const ErrorFixerAutomation = require('./error-fixer-automation.js'); const automation = new ErrorFixerAutomation(); await automation.run(); console.log('✅ Error fixer completed'); setTimeout(async () => { if (this.isRunning) { console.log('🔄 Retrying build after error fixing...'); await this.runBuild()} },5000)} catch (error) { console.error('❌ Error fixer failed:',error)} } startPeriodicHealthChecks() { console.log('🔄 Starting periodic health checks...'); setInterval( async () => { if (this.isRunning) { await this.performHealthCheck()} },30 * 60 * 1000 )} async performHealthCheck() { console.log('🏥 Performing build health check...'); try { await this.runTypeCheck(); console.log('✅ Health check passed')} catch (error) { console.log('❌ Health check failed,triggering error fixer...'); await this.triggerErrorFixer()} } async saveReport() { const reportPath = path.join( this.projectRoot,'error-reports',`build-watcher-report-${Date.now()}.json` ); const reportDir = path.dirname(reportPath); if (!fs.existsSync(reportDir)) { fs.mkdirSync(reportDir,{ recursive: true })} this.buildReport.duration = Date.now() - this.startTime; fs.writeFileSync(reportPath,JSON.stringify(this.buildReport,null,2)); this.cleanupOldReports(reportDir)} cleanupOldReports(reportDir) { try { const files = fs .readdirSync(reportDir) .filter(file => file.startsWith('build-watcher-report-')) .map(file => ({ name: file,path: path.join(reportDir,file),time: fs.statSync(path.join(reportDir,file)).mtime.getTime(),})) .sort((a,b) => b.time - a.time); if (files.length > 10) { for (let i = 10; i < files.length; i++) { fs.unlinkSync(files[i].path)} } } catch (error) { console.error('Error cleaning up old reports:',error)} } async shutdown() { console.log('🛑 Shutting down Build Watcher...'); this.isRunning = false; if (this.buildTimeout) { clearTimeout(this.buildTimeout)} await this.saveReport(); console.log('✅ Build Watcher shutdown complete'); process.exit(0)} } if (require.main === module) { const watcher = new BuildWatcher(); watcher.start().catch(console.error)} module.exports = BuildWatcher;
>>>>>>> origin/cursor/delete-old-data-records-6bba
