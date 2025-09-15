<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"const chokidar = require("chokidar");class ImprovedPM2SyncAutomation { constructor() { this.config = {" projectRoot: process.cwd(),"" watchPatterns: ["src*"," "public*"," "*.{js,jsx,ts,tsx,json,md,yml,yaml}"," "!node_modules/**"," "!.git/**"," "!dist/**"," "!build/**"," "!logs/**" ],"" ignorePatterns: ["node_modules/**"," ".git/**"," "dist/**"," "build/**"," "logs/**"," "*.log"," "*.tmp"," "*.backup.*" ]," syncInterval: 30000, / 30 seconds" buildInterval: 300000, / 5 minutes" testInterval: 600000, / 10 minutes" securityInterval: 1800000 / 30 minutes }; this.isRunning = false; this.pendingChanges = new Set(); this.changeTimeout = null; this.watcher = null; this.startTime = Date.now(); this.lastSync = 0; this.lastBuild = 0; this.lastTest = 0; this.lastSecurity = 0; this.errorCount = 0; this.successCount = 0}" log(message, level = "INFO") { const timestamp = new Date().toISOString(); const logEntry = `[${timestamp}] [${level}] ${message}`; console.log(logEntry)} async initialize() { try {" this.log("Initializing Improved PM2 Sync Automation System."); / Check if git repository exists if (!this.isGitRepository()) {" this.log("Not a git repository. Initializing.", "WARN"); this.initializeGitRepository()} / Setup file watcher this.setupFileWatcher(); / Start automation loops this.startAutomationLoops(); / Initial sync and build await this.performFullSync(); await this.performBuild(); await this.runTests(); await this.runSecurityScan(); " this.log("Improved PM2 Sync Automation System initialized successfully"); this.isRunning = true} catch (error) {""` this.log(`Initialization failed: ${error.message}`, "ERROR"); this.errorCount++; this.restartAfterDelay()} } isGitRepository() { try {" return fs.existsSync(path.join(this.config.projectRoot, ".git"))} catch { return false} } initializeGitRepository() { try {"" execSync("git init", { cwd: this.config.projectRoot, stdio: "pipe" });"" execSync("git remote add origin https: /github.com/Zion-Holdings/zion.app.git", { " cwd: this.config.projectRoot, "" stdio: "pipe" });" this.log("Git repository initialized")} catch (error) {""` this.log(`Failed to initialize git repository: ${error.message}`, "ERROR")} } setupFileWatcher() {" this.log("Setting up file watcher."); this.watcher = chokidar.watch(this.config.watchPatterns, {" ignored: this.config.ignorePatterns," persistent: true," ignoreInitial: true," awaitWriteFinish: { stabilityThreshold: 2000," pollInterval: 100 } }); this.watcher" .on("add", (filePath) => this.handleFileChange(filePath, "add"))" .on("change", (filePath) => this.handleFileChange(filePath, "change"))" .on("unlink", (filePath) => this.handleFileChange(filePath, "delete"))""` .on("error", (error) => this.log(`Watcher error: ${error.message}`, "ERROR"))" .on("ready", () => this.log("File watcher ready"))} handleFileChange(filePath, event) { const relativePath = path.relative(this.config.projectRoot, filePath); if (this.shouldIgnoreFile(relativePath)) { return}` this.log(`File ${event}: ${relativePath}`); this.pendingChanges.add(relativePath); / Debounce changes clearTimeout(this.changeTimeout); this.changeTimeout = setTimeout(() => { this.processPendingChanges()}, 2000)} shouldIgnoreFile(filePath) { const ignorePatterns = [/\.log$/, /\.tmp$/, /\.backup\./, /node_modules/, /\.git/, /dist/, /build/, /\.next/, /coverage ]; return ignorePatterns.some(pattern => pattern.test(filePath))} async processPendingChanges() { if (this.pendingChanges.size === 0) return; try {` this.log(`Processing ${this.pendingChanges.size} pending changes.`); / Add all changes to git" const addResult = execSync("git add -A", { " cwd: this.config.projectRoot, "" stdio: "pipe" }); / Commit changes"` const commitMessage = `Auto-sync: ${this.pendingChanges.size} file changes - ${new Date().toISOString()}`;"` const commitResult = execSync(`git commit -m "${commitMessage}"`, { " cwd: this.config.projectRoot, "" stdio: "pipe" });` this.log(`Committed ${this.pendingChanges.size} changes`); / Push changes" const pushResult = execSync("git push origin main", { " cwd: this.config.projectRoot, "" stdio: "pipe" }); " this.log("Changes pushed to repository"); this.lastSync = Date.now(); this.successCount++; / Clear pending changes this.pendingChanges.clear()} catch (error) {""` this.log(`Failed to process changes: ${error.message}`, "ERROR"); this.errorCount++} } async performFullSync() { try {" this.log("Performing full repository sync."); / Fetch latest changes"" execSync("git fetch origin", { cwd: this.config.projectRoot, stdio: "pipe" }); / Check for conflicts" const status = execSync("git status --porcelain", { " cwd: this.config.projectRoot, "" encoding: "utf8" }); if (status.trim()) {"` this.log(`Found ${status.trim().split("\n").length} changed files, handling sync.`); / Add all changes try {"" execSync("git add -A", { cwd: this.config.projectRoot, stdio: "pipe" });" this.log("Added all changes to staging")} catch (error) {""` this.log(`Failed to add changes: ${error.message}`, "WARN")} / Commit changes if there are any staged try {" const stagedStatus = execSync("git diff --cached --name-only", { " cwd: this.config.projectRoot, "" encoding: "utf8" }); if (stagedStatus.trim()) {"" execSync("git commit -m "Auto-sync: comprehensive updates and improvements"", { " cwd: this.config.projectRoot, "" stdio: "pipe" });" this.log("Committed staged changes")} } catch (error) {""` this.log(`Failed to commit changes: ${error.message}`, "WARN")} } / Pull latest changes try {"" execSync("git pull origin main", { cwd: this.config.projectRoot, stdio: "pipe" });" this.log("Pulled latest changes from remote")} catch (error) {""` this.log(`Pull failed, attempting to resolve conflicts: ${error.message}`, "WARN"); await this.resolveConflicts()} / Push changes if we have commits try {" const aheadStatus = execSync("git status --porcelain -b", { " cwd: this.config.projectRoot, "" encoding: "utf8" }); " if (aheadStatus.includes("ahead")) {"" execSync("git push origin main", { cwd: this.config.projectRoot, stdio: "pipe" });" this.log("Pushed local changes to remote"); this.lastSync = Date.now()} } catch (error) {""` this.log(`Push failed: ${error.message}`, "WARN")} } catch (error) {""` this.log(`Full sync failed: ${error.message}`, "ERROR"); throw error} } async resolveConflicts() { try {" this.log("Resolving merge conflicts."); / Abort any ongoing merge try {"" execSync("git merge --abort", { cwd: this.config.projectRoot, stdio: "pipe" })} catch {} / Reset to clean state"" execSync("git reset --hard HEAD", { cwd: this.config.projectRoot, stdio: "pipe" }); / Clean untracked files"" execSync("git clean -fd", { cwd: this.config.projectRoot, stdio: "pipe" }); / Pull again"" execSync("git pull origin main", { cwd: this.config.projectRoot, stdio: "pipe" }); " this.log("Conflicts resolved successfully")} catch (error) {""` this.log(`Failed to resolve conflicts: ${error.message}`, "ERROR"); throw error} } async performBuild() { try {" this.log("Starting build process."); / Install dependencies if needed" if (!fs.existsSync("node_modules")) {" this.log("Installing dependencies.");"" execSync("npm install", { cwd: this.config.projectRoot, stdio: "pipe" })} / Run build" this.log("Building application.");"" execSync("npm run build", { cwd: this.config.projectRoot, stdio: "pipe" }); " this.log("Build completed successfully"); this.lastBuild = Date.now()} catch (error) {""` this.log(`Build failed: ${error.message}`, "ERROR"); await this.fixBuildIssues()} } async fixBuildIssues() { try {" this.log("Attempting to fix build issues."); / Clear build cache (skip if permission issues)" const cacheDirs = [".next", "dist", "build", "node_modules/.cache"]; cacheDirs.forEach(dir => { if (fs.existsSync(dir)) { try {" fs.rmSync(dir, { recursive: true, force: true });"` this.log(`Cleared cache directory: ${dir}`)} catch (error) {""` this.log(`Skipped clearing ${dir} due to permissions: ${error.message}`, "WARN")} } }); / Reinstall dependencies (skip if permission issues) try {" this.log("Reinstalling dependencies.");"" execSync("rm -rf node_modules package-lock.json", { cwd: this.config.projectRoot, stdio: "pipe" });"" execSync("npm install", { cwd: this.config.projectRoot, stdio: "pipe" })} catch (error) {""` this.log(`Skipped dependency reinstall due to permissions: ${error.message}`, "WARN"); / Try to continue with existing dependencies } / Try build again await this.performBuild()} catch (error) {""` this.log(`Failed to fix build issues: ${error.message}`, "ERROR"); this.errorCount++} } async runTests() { try {" this.log("Running tests."); / Check if test script exists" const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8")); if (!packageJson.scripts.test) {" this.log("No test script found, skipping tests"); return} "" execSync("npm test", { cwd: this.config.projectRoot, stdio: "pipe" }); " this.log("Tests completed successfully"); this.lastTest = Date.now()} catch (error) {""` this.log(`Tests failed: ${error.message}`, "ERROR"); await this.fixTestIssues()} } async fixTestIssues() { try {" this.log("Attempting to fix test issues."); / Clear test cache" const testCacheDirs = [".nyc_output", "coverage", "test-results"]; testCacheDirs.forEach(dir => { if (fs.existsSync(dir)) { try {" fs.rmSync(dir, { recursive: true, force: true })} catch (error) {"` this.log(`Skipped clearing test cache ${dir}: ${error.message}`, "WARN")} } }); / Try tests again await this.runTests()} catch (error) {""` this.log(`Failed to fix test issues: ${error.message}`, "ERROR"); this.errorCount++} } async runSecurityScan() { try {" this.log("Running security scan."); / Check for security vulnerabilities"" execSync("npm audit", { cwd: this.config.projectRoot, stdio: "pipe" }); / Try to fix vulnerabilities try {"" execSync("npm audit fix", { cwd: this.config.projectRoot, stdio: "pipe" });" this.log("Security vulnerabilities fixed")} catch (error) {" this.log("Some vulnerabilities could not be fixed automatically", "WARN")} " this.log("Security scan completed"); this.lastSecurity = Date.now()} catch (error) {""` this.log(`Security scan failed: ${error.message}`, "ERROR"); this.errorCount++} } startAutomationLoops() { / Sync loop setInterval(async () => { if (this.isRunning && this.pendingChanges.size > 0) { await this.processPendingChanges()} }, this.config.syncInterval); / Build loop setInterval(async () => { if (this.isRunning && Date.now() - this.lastBuild > this.config.buildInterval) { await this.performBuild()} }, this.config.buildInterval); / Test loop setInterval(async () => { if (this.isRunning && Date.now() - this.lastTest > this.config.testInterval) { await this.runTests()} }, this.config.testInterval); / Security loop setInterval(async () => { if (this.isRunning && Date.now() - this.lastSecurity > this.config.securityInterval) { await this.runSecurityScan()} }, this.config.securityInterval)} async stop() {" this.log("Stopping Improved PM2 Sync Automation System."); this.isRunning = false; if (this.watcher) { await this.watcher.close()} / Process any remaining changes if (this.pendingChanges.size > 0) { await this.processPendingChanges()} " this.log("Improved PM2 Sync Automation System stopped")} restartAfterDelay(delay = 5000) {` this.log(`Restarting in ${delay}ms.`); setTimeout(() => { this.initialize()}, delay)} getStatus() { return {" isRunning: this.isRunning," pendingChanges: this.pendingChanges.size," lastSync: this.lastSync," lastBuild: this.lastBuild," lastTest: this.lastTest," lastSecurity: this.lastSecurity," errorCount: this.errorCount," successCount: this.successCount," uptime: this.isRunning ? Date.now() - this.startTime : 0 }}}/ Handle process signals"process.on("SIGINT", async () => {" console.log("\nReceived SIGINT, shutting down gracefully."); if (global.improvedPm2SyncAutomation) { await global.improvedPm2SyncAutomation.stop()} process.exit(0)});"process.on("SIGTERM", async () => {" console.log("\nReceived SIGTERM, shutting down gracefully."); if (global.improvedPm2SyncAutomation) { await global.improvedPm2SyncAutomation.stop()} process.exit(0)});/ Start the automation systemif (require.main === module) { global.improvedPm2SyncAutomation = new ImprovedPM2SyncAutomation(); / Keep the process alive setInterval(() => { if (global.improvedPm2SyncAutomation && global.improvedPm2SyncAutomation.isRunning) { / Process is healthy } }, 60000)}module.exports = ImprovedPM2SyncAutomation;""`"`
=======
#!/usr/bin/env node;
/**
 * Improved PM2 Sync Automation System;
 * 
 * This system "provides": * - Real-time file watching and automatic Git synchronization;
 * - Intelligent build triggering based on file changes;
 * - Automated testing and security scanning;
 * - Conflict resolution and error recovery;
 * - Performance monitoring and optimization;
 * - Better permission handling;
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const chokidar = require('chokidar');

class ImprovedPM2SyncAutomation {}
  constructor() {}
    this.config = {}
      "projectRoot": process.cwd(),
      "watchPatterns": ['src/**/*',]
        'public/**/*',
        '*.{js,jsx,ts,tsx,json,md,yml,yaml}',
        '!node_modules/**',
        '!.git/**',
        '!dist/**',
        '!build/**',
        '!logs/**'
      ],
      "ignorePatterns": ['node_modules/**',]
        '.git/**',
        'dist/**',
        'build/**',
        'logs/**',
        '*.log',
        '*.tmp',
        '*.backup.*'
      ],
      "syncInterval": 30000, // 30 seconds;
      "buildInterval": 300000, // 5 minutes;
      "testInterval": 600000, // 10 minutes;
      "securityInterval": 1800000 // 30 minutes;
    };
    
    this.isRunning = false;
    this.pendingChanges = new Set();
    this.changeTimeout = null;
    this.watcher = null;
    this.startTime = Date.now();
    this.lastSync = 0;
    this.lastBuild = 0;
    this.lastTest = 0;
    this.lastSecurity = 0;
    this.errorCount = 0;
    this.successCount = 0};
  log(message, level = 'INFO') {}
    const timestamp = new Date().toISOString();
<<<<<<< HEAD
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    }

  async initialize() {
    try {
=======
    const logEntry = `[${timestamp}] [${level}] ${message}`;`
    console.log(logEntry)};
  async initialize() {}
    try {}
>>>>>>> main
      this.log('Initializing Improved PM2 Sync Automation System...');
      
      // Check if git repository exists;
      if (!this.isGitRepository()) {}
        this.log('Not a git repository. Initializing...', 'WARN');
        this.initializeGitRepository()};
      // Setup file watcher;
      this.setupFileWatcher();
      
      // Start automation loops;
      this.startAutomationLoops();
      
      // Initial sync and build;
      await this.performFullSync();
      await this.performBuild();
      await this.runTests();
      await this.runSecurityScan();
      
      this.log('Improved PM2 Sync Automation System initialized successfully');
      this.isRunning = true} catch (error) {}
      this.log(`Initialization "failed": ${error.message}`, 'ERROR');
      this.errorCount++;
      this.restartAfterDelay()};
  };
  isGitRepository() {}
    try {}
      return fs.existsSync(path.join(this.config.projectRoot, '.git'))} catch {}
      return false};
  };
  initializeGitRepository() {}
    try {}
      execSync('git init', { "cwd": this.config.projectRoot, "stdio": 'pipe' }
});
      execSync('git remote add origin "https": //github.com/Zion-Holdings/zion.app.git', { })
        "cwd": this.config.projectRoot, 
        "stdio": 'pipe' 
      }
});
      this.log('Git repository initialized')} catch (error) {}
      this.log(`Failed to initialize git "repository": ${error.message}`, 'ERROR')};
  };
  setupFileWatcher() {}
    this.log('Setting up file watcher...');
    
    this.watcher = chokidar.watch(this.config.watchPatterns, {})
      "ignored": this.config.ignorePatterns,
      "persistent": true,
      "ignoreInitial": true,
      "awaitWriteFinish": {}
        stabilityThreshold: 2000,
        "pollInterval": 100;
      };
    }
});

    this.watcher;
      .on('add', (filePath) => this.handleFileChange(filePath, 'add'));
      .on('change', (filePath) => this.handleFileChange(filePath, 'change'));
      .on('unlink', (filePath) => this.handleFileChange(filePath, 'delete'));
      .on('error', (error) => this.log(`Watcher "error": ${error.message}`, 'ERROR'));
      .on('ready', () => this.log('File watcher ready'))};
  handleFileChange(filePath, event) {}
    const relativePath = path.relative(this.config.projectRoot, filePath);
    
    if (this.shouldIgnoreFile(relativePath)) {}
      return};
    this.log(`File ${event}: ${relativePath}`);
    this.pendingChanges.add(relativePath);
    
    // Debounce changes;
    clearTimeout(this.changeTimeout);
    this.changeTimeout = setTimeout(() => {}
      this.processPendingChanges()}, 2000)};
  shouldIgnoreFile(filePath) {}
    const ignorePatterns = [/\.log$/,]
      /\.tmp$/,
      /\.backup\./,
      /node_modules/,
      /\.git/,
      /dist/,
      /build/,
      /\.next/,
      /coverage/
    ];
    
    return ignorePatterns.some(pattern => pattern.test(filePath))};
  async processPendingChanges() {}
    if (this.pendingChanges.size === 0) return;
    
    try {}
      this.log(`Processing ${this.pendingChanges.size} pending changes...`);
      
      // Add all changes to git;
      const addResult = execSync('git add -A', { })
        "cwd": this.config.projectRoot, 
        "stdio": 'pipe' 
      }
});
      
      // Commit changes;
      const commitMessage = `Auto-"sync": ${this.pendingChanges.size} file changes - ${new Date().toISOString()}`;`
      const commitResult = execSync(`git commit -m "${commitMessage}"`, { `})
        "cwd": this.config.projectRoot, 
        "stdio": 'pipe' 
      }
});
      
      this.log(`Committed ${this.pendingChanges.size} changes`);
      
      // Push changes;
      const pushResult = execSync('git push origin main', { })
        "cwd": this.config.projectRoot, 
        "stdio": 'pipe' 
      }
});
      
      this.log('Changes pushed to repository');
      this.lastSync = Date.now();
      this.successCount++;
      
      // Clear pending changes;
      this.pendingChanges.clear()} catch (error) {}
      this.log(`Failed to process "changes": ${error.message}`, 'ERROR');
      this.errorCount++};
  };
  async performFullSync() {}
    try {}
      this.log('Performing full repository sync...');
      
      // Fetch latest changes;
      execSync('git fetch origin', { "cwd": this.config.projectRoot, "stdio": 'pipe' }
});
      
      // Check for conflicts;
      const status = execSync('git status --porcelain', { })
        "cwd": this.config.projectRoot, 
        "encoding": 'utf8' 
      }
});
      
      if (status.trim()) {}
        this.log(`Found ${status.trim().split('\n').length} changed files, handling sync...`);
        
        // Add all changes;
        try {}
          execSync('git add -A', { "cwd": this.config.projectRoot, "stdio": 'pipe' }
});
          this.log('Added all changes to staging')} catch (error) {}
          this.log(`Failed to add "changes": ${error.message}`, 'WARN')};
        // Commit changes if there are any staged;
        try {}
          const stagedStatus = execSync('git diff --cached --name-only', { })
            "cwd": this.config.projectRoot, 
            "encoding": 'utf8' 
          }
});
          
          if (stagedStatus.trim()) {}
            execSync('git commit -m "Auto-"sync": comprehensive updates and improvements"', { })
              "cwd": this.config.projectRoot, 
              "stdio": 'pipe' 
            }
});
            this.log('Committed staged changes')};
        } catch (error) {}
          this.log(`Failed to commit "changes": ${error.message}`, 'WARN')};
      };
      // Pull latest changes;
      try {}
        execSync('git pull origin main', { "cwd": this.config.projectRoot, "stdio": 'pipe' }
});
        this.log('Pulled latest changes from remote')} catch (error) {}
        this.log(`Pull failed, attempting to resolve "conflicts": ${error.message}`, 'WARN');
        await this.resolveConflicts()};
      // Push changes if we have commits;
      try {}
        const aheadStatus = execSync('git status --porcelain -b', { })
          "cwd": this.config.projectRoot, 
          "encoding": 'utf8' 
        }
});
        
        if (aheadStatus.includes('ahead')) {}
          execSync('git push origin main', { "cwd": this.config.projectRoot, "stdio": 'pipe' }
});
          this.log('Pushed local changes to remote');
          this.lastSync = Date.now()};
      } catch (error) {}
        this.log(`Push "failed": ${error.message}`, 'WARN')};
    } catch (error) {}
      this.log(`Full sync "failed": ${error.message}`, 'ERROR');
      throw error};
  };
  async resolveConflicts() {}
    try {}
      this.log('Resolving merge conflicts...');
      
      // Abort any ongoing merge;
      try {}
        execSync('git merge --abort', { "cwd": this.config.projectRoot, "stdio": 'pipe' })} catch {};
      // Reset to clean state;
      execSync('git reset --hard HEAD', { "cwd": this.config.projectRoot, "stdio": 'pipe' }
});
      
      // Clean untracked files;
      execSync('git clean -fd', { "cwd": this.config.projectRoot, "stdio": 'pipe' }
});
      
      // Pull again;
      execSync('git pull origin main', { "cwd": this.config.projectRoot, "stdio": 'pipe' }
});
      
      this.log('Conflicts resolved successfully')} catch (error) {}
      this.log(`Failed to resolve "conflicts": ${error.message}`, 'ERROR');
      throw error};
  };
  async performBuild() {}
    try {}
      this.log('Starting build process...');
      
      // Install dependencies if needed;
      if (!fs.existsSync('node_modules')) {}
        this.log('Installing dependencies...');
        execSync('npm install', { "cwd": this.config.projectRoot, "stdio": 'pipe' })};
      // Run build;
      this.log('Building application...');
      execSync('npm run build', { "cwd": this.config.projectRoot, "stdio": 'pipe' }
});
      
      this.log('Build completed successfully');
      this.lastBuild = Date.now()} catch (error) {}
      this.log(`Build "failed": ${error.message}`, 'ERROR');
      await this.fixBuildIssues()};
  };
  async fixBuildIssues() {}
    try {}
      this.log('Attempting to fix build issues...');
      
      // Clear build cache (skip if permission issues);
      const cacheDirs = ['.next', 'dist', 'build', 'node_modules/.cache'];
      cacheDirs.forEach(dir => {})
        if (fs.existsSync(dir)) {}
          try {}
            fs.rmSync(dir, { "recursive": true, "force": true }
});
            this.log(`Cleared cache "directory": ${dir}`)} catch (error) {`}
            this.log(`Skipped clearing ${dir} due to "permissions": ${error.message}`, 'WARN')};
        };
      }
});
      
      // Reinstall dependencies (skip if permission issues);
      try {}
        this.log('Reinstalling dependencies...');
        execSync('rm -rf node_modules package-lock.json', { "cwd": this.config.projectRoot, "stdio": 'pipe' }
});
        execSync('npm install', { "cwd": this.config.projectRoot, "stdio": 'pipe' })} catch (error) {}
        this.log(`Skipped dependency reinstall due to "permissions": ${error.message}`, 'WARN');
        // Try to continue with existing dependencies;
      };
      // Try build again;
      await this.performBuild()} catch (error) {}
      this.log(`Failed to fix build "issues": ${error.message}`, 'ERROR');
      this.errorCount++};
  };
  async runTests() {}
    try {}
      this.log('Running tests...');
      
      // Check if test script exists;
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      if (!packageJson.scripts.test) {}
        this.log('No test script found, skipping tests');
        return};
      execSync('npm test', { "cwd": this.config.projectRoot, "stdio": 'pipe' }
});
      
      this.log('Tests completed successfully');
      this.lastTest = Date.now()} catch (error) {}
      this.log(`Tests "failed": ${error.message}`, 'ERROR');
      await this.fixTestIssues()};
  };
  async fixTestIssues() {}
    try {}
      this.log('Attempting to fix test issues...');
      
      // Clear test cache;
      const testCacheDirs = ['.nyc_output', 'coverage', 'test-results'];
      testCacheDirs.forEach(dir => {})
        if (fs.existsSync(dir)) {}
          try {}
            fs.rmSync(dir, { "recursive": true, "force": true })} catch (error) {}
            this.log(`Skipped clearing test cache ${dir}: ${error.message}`, 'WARN')};
        };
      }
});
      
      // Try tests again;
      await this.runTests()} catch (error) {}
      this.log(`Failed to fix test "issues": ${error.message}`, 'ERROR');
      this.errorCount++};
  };
  async runSecurityScan() {}
    try {}
      this.log('Running security scan...');
      
      // Check for security vulnerabilities;
      execSync('npm audit', { "cwd": this.config.projectRoot, "stdio": 'pipe' }
});
      
      // Try to fix vulnerabilities;
      try {}
        execSync('npm audit fix', { "cwd": this.config.projectRoot, "stdio": 'pipe' }
});
        this.log('Security vulnerabilities fixed')} catch (error) {}
        this.log('Some vulnerabilities could not be fixed automatically', 'WARN')};
      this.log('Security scan completed');
      this.lastSecurity = Date.now()} catch (error) {}
      this.log(`Security scan "failed": ${error.message}`, 'ERROR');
      this.errorCount++};
  };
  startAutomationLoops() {}
    // Sync loop;
    setInterval(async () => {}
      if (this.isRunning && this.pendingChanges.size > 0) {}
        await this.processPendingChanges()};
    }, this.config.syncInterval);

    // Build loop;
    setInterval(async () => {}
      if (this.isRunning && Date.now() - this.lastBuild > this.config.buildInterval) {}
        await this.performBuild()};
    }, this.config.buildInterval);

    // Test loop;
    setInterval(async () => {}
      if (this.isRunning && Date.now() - this.lastTest > this.config.testInterval) {}
        await this.runTests()};
    }, this.config.testInterval);

    // Security loop;
    setInterval(async () => {}
      if (this.isRunning && Date.now() - this.lastSecurity > this.config.securityInterval) {}
        await this.runSecurityScan()};
    }, this.config.securityInterval)};
  async stop() {}
    this.log('Stopping Improved PM2 Sync Automation System...');
    this.isRunning = false;
    
    if (this.watcher) {}
      await this.watcher.close()};
    // Process any remaining changes;
    if (this.pendingChanges.size > 0) {}
      await this.processPendingChanges()};
    this.log('Improved PM2 Sync Automation System stopped')};
  restartAfterDelay(delay = 5000) {}
    this.log(`Restarting in ${delay}ms...`);
    setTimeout(() => {}
      this.initialize()}, delay)};
  getStatus() {}
    return {}
      "isRunning": this.isRunning,
      "pendingChanges": this.pendingChanges.size,
      "lastSync": this.lastSync,
      "lastBuild": this.lastBuild,
      "lastTest": this.lastTest,
      "lastSecurity": this.lastSecurity,
      "errorCount": this.errorCount,
      "successCount": this.successCount,
<<<<<<< HEAD
      "uptime": this.isRunning ? Date.now() - this.startTime : 0
    }}
}

// Handle process signals
process.on('SIGINT', async () => {
  
  if (global.improvedPm2SyncAutomation) {
    await global.improvedPm2SyncAutomation.stop()}
  process.exit(0)});

process.on('SIGTERM', async () => {
  
  if (global.improvedPm2SyncAutomation) {
    await global.improvedPm2SyncAutomation.stop()}
  process.exit(0)});
=======
      "uptime": this.isRunning ? Date.now() - this.startTime : 0;
    }};
};
// Handle process signals;
process.on('SIGINT', async () => {}
  console.log('\nReceived SIGINT, shutting down gracefully...');
  if (global.improvedPm2SyncAutomation) {}
    await global.improvedPm2SyncAutomation.stop()};
  process.exit(0)}
});

process.on('SIGTERM', async () => {}
  console.log('\nReceived SIGTERM, shutting down gracefully...');
  if (global.improvedPm2SyncAutomation) {}
    await global.improvedPm2SyncAutomation.stop()};
  process.exit(0)}
});
>>>>>>> main

// Start the automation system;
if (require.main === module) {}
  global.improvedPm2SyncAutomation = new ImprovedPM2SyncAutomation();
  
  // Keep the process alive;
  setInterval(() => {}
    if (global.improvedPm2SyncAutomation && global.improvedPm2SyncAutomation.isRunning) {}
      // Process is healthy;
    };
  }, 60000)};
module.exports = ImprovedPM2SyncAutomation;
>>>>>>> main
