<<<<<<< HEAD
const fs = require("fs");"const path = require("path");"const { exec } = require("child_process");"const { promisify } = require("util");const execAsync = promisify(exec);class BuildMonitor { constructor() {" this.logFile = path.join(__dirname, "logs", "build-monitor.log"); this.lastBuildTime = null; this.buildHistory = []; this.maxHistorySize = 50; } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(logMessage.trim()); fs.appendFileSync(this.logFile, logMessage); } async runBuild() { try {" this.log("Starting build process."); const startTime = Date.now();" const { stdout, stderr } = await execAsync("npm run build", { cwd: process.cwd()," timeout: 300000, / 5 minutes timeout }); const endTime = Date.now(); const duration = endTime - startTime; const buildResult = {" timestamp: new Date().toISOString(), duration," success: true," output: stdout," errors: stderr}; this.buildHistory.push(buildResult); if (this.buildHistory.length > this.maxHistorySize) { this.buildHistory.shift(); } this.lastBuildTime = new Date();` this.log(`Build completed successfully in ${duration}ms`); return buildResult; } catch (error) { const endTime = Date.now(); const duration = endTime - startTime; const buildResult = {" timestamp: new Date().toISOString(), duration," success: false,"" output: error.stdout | ""," errors: error.stderr | error.message}; this.buildHistory.push(buildResult); if (this.buildHistory.length > this.maxHistorySize) { this.buildHistory.shift(); }"` this.log(`Build failed after ${duration}ms: ${error.message}`); return buildResult; } } async runTypeCheck() { try {" this.log("Running type check.");" const { stdout, stderr } = await execAsync("npm run type-check", {" cwd: process.cwd()," timeout: 60000});" this.log("Type check completed successfully");" return { success: true, output: stdout, errors: stderr }; } catch (error) {"` this.log(`Type check failed: ${error.message}`); return {" success: false,"" output: error.stdout | ""," errors: error.stderr | error.message}; } } async runLintCheck() { try {" this.log("Running lint check.");"" const { stdout, stderr } = await execAsync("npm run lint: check", {" cwd: process.cwd()," timeout: 60000});" this.log("Lint check completed successfully");" return { success: true, output: stdout, errors: stderr }; } catch (error) {"` this.log(`Lint check failed: ${error.message}`); return {" success: false,"" output: error.stdout | ""," errors: error.stderr | error.message}; } } async runTests() { try {" this.log("Running tests.");"" const { stdout, stderr } = await execAsync("npm run test: smoke", {" cwd: process.cwd()," timeout: 120000});" this.log("Tests completed successfully");" return { success: true, output: stdout, errors: stderr }; } catch (error) {"` this.log(`Tests failed: ${error.message}`); return {" success: false,"" output: error.stdout | ""," errors: error.stderr | error.message}; } } async performFullCheck() {" this.log("Starting full build check."); const results = {" timestamp: new Date().toISOString()," typeCheck: await this.runTypeCheck()," lintCheck: await this.runLintCheck()," build: await this.runBuild()," tests: await this.runTests()}; const allPassed results.typeCheck.success results.lintCheck.success results.build.success results.tests.success;"` this.log(`Full check completed. All passed: ${allPassed}`); / Save results" const resultsFile = path.join(__dirname, "logs", "build-results.json"); fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2)); return results; } async cleanupOldBuilds() { try {" this.log("Cleaning up old build artifacts.");" const buildDirs = [".next", "out", "dist"]; for (const dir of buildDirs) { const dirPath = path.join(process.cwd(), dir); if (fs.existsSync(dirPath)) {"` await execAsync(`rm -rf ${dirPath}`, { cwd: process.cwd() });` this.log(`Cleaned up ${dir}`); } } } catch (error) {"` this.log(`Cleanup failed: ${error.message}`); } } async optimizeBuild() { try {" this.log("Optimizing build."); / Clean up first await this.cleanupOldBuilds(); / Run build with optimization"" const { stdout, stderr } = await execAsync("npm run build: production", {" cwd: process.cwd()," timeout: 300000});" this.log("Build optimization completed");" return { success: true, output: stdout, errors: stderr }; } catch (error) {"` this.log(`Build optimization failed: ${error.message}`); return {" success: false,"" output: error.stdout | ""," errors: error.stderr | error.message}; } } getBuildStats() { const recentBuilds = this.buildHistory.slice(-10); const successfulBuilds = recentBuilds.filter(b => b.success).length; const averageDuration recentBuilds.reduce((sum, b) => sum + b.duration, 0) recentBuilds.length; return {" totalBuilds: this.buildHistory.length," recentSuccessRate: (successfulBuilds / recentBuilds.length) * 100," averageDuration: Math.round(averageDuration)," lastBuildTime: this.lastBuildTime}; } async start() {" this.log("Build Monitor started"); / Run initial check await this.performFullCheck(); / Set up periodic checks every 4 hours setInterval( async () => { await this.performFullCheck(); }, 4 * 60 * 60 * 1000 ); / Set up daily optimization setInterval( async () => {" this.log("Running daily build optimization."); await this.optimizeBuild(); }, 24 * 60 * 60 * 1000 ); }}/ Start the monitor if this script is run directlyif (require.main === module) { const monitor = new BuildMonitor(); monitor.start().catch(error => {"" console.error("Build Monitor failed: ", error); process.exit(1); });}module.exports = BuildMonitor;'"`'"`
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const fs = require("fs");"const path = require("path");"const { exec } = require("child_process");"const { promisify } = require("util");const execAsync = promisify(exec);class BuildMonitor { constructor() {" this.logFile = path.join(__dirname, "logs", "build-monitor.log"); this.lastBuildTime = null; this.buildHistory = []; this.maxHistorySize = 50; } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; console.log(logMessage.trim()); fs.appendFileSync(this.logFile, logMessage); } async runBuild() { try {" this.log("Starting build process."); const startTime = Date.now();" const { stdout, stderr } = await execAsync("npm run build", { cwd: process.cwd()," timeout: 300000, / 5 minutes timeout }); const endTime = Date.now(); const duration = endTime - startTime; const buildResult = {" timestamp: new Date().toISOString(), duration," success: true," output: stdout," errors: stderr}; this.buildHistory.push(buildResult); if (this.buildHistory.length > this.maxHistorySize) { this.buildHistory.shift(); } this.lastBuildTime = new Date();` this.log(`Build completed successfully in ${duration}ms`); return buildResult; } catch (error) { const endTime = Date.now(); const duration = endTime - startTime; const buildResult = {" timestamp: new Date().toISOString(), duration," success: false,"" output: error.stdout | ""," errors: error.stderr | error.message}; this.buildHistory.push(buildResult); if (this.buildHistory.length > this.maxHistorySize) { this.buildHistory.shift(); }"` this.log(`Build failed after ${duration}ms: ${error.message}`); return buildResult; } } async runTypeCheck() { try {" this.log("Running type check.");" const { stdout, stderr } = await execAsync("npm run type-check", {" cwd: process.cwd()," timeout: 60000});" this.log("Type check completed successfully");" return { success: true, output: stdout, errors: stderr }; } catch (error) {"` this.log(`Type check failed: ${error.message}`); return {" success: false,"" output: error.stdout | ""," errors: error.stderr | error.message}; } } async runLintCheck() { try {" this.log("Running lint check.");"" const { stdout, stderr } = await execAsync("npm run lint: check", {" cwd: process.cwd()," timeout: 60000});" this.log("Lint check completed successfully");" return { success: true, output: stdout, errors: stderr }; } catch (error) {"` this.log(`Lint check failed: ${error.message}`); return {" success: false,"" output: error.stdout | ""," errors: error.stderr | error.message}; } } async runTests() { try {" this.log("Running tests.");"" const { stdout, stderr } = await execAsync("npm run test: smoke", {" cwd: process.cwd()," timeout: 120000});" this.log("Tests completed successfully");" return { success: true, output: stdout, errors: stderr }; } catch (error) {"` this.log(`Tests failed: ${error.message}`); return {" success: false,"" output: error.stdout | ""," errors: error.stderr | error.message}; } } async performFullCheck() {" this.log("Starting full build check."); const results = {" timestamp: new Date().toISOString()," typeCheck: await this.runTypeCheck()," lintCheck: await this.runLintCheck()," build: await this.runBuild()," tests: await this.runTests()}; const allPassed results.typeCheck.success results.lintCheck.success results.build.success results.tests.success;"` this.log(`Full check completed. All passed: ${allPassed}`); / Save results" const resultsFile = path.join(__dirname, "logs", "build-results.json"); fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2)); return results; } async cleanupOldBuilds() { try {" this.log("Cleaning up old build artifacts.");" const buildDirs = [".next", "out", "dist"]; for (const dir of buildDirs) { const dirPath = path.join(process.cwd(), dir); if (fs.existsSync(dirPath)) {"` await execAsync(`rm -rf ${dirPath}`, { cwd: process.cwd() });` this.log(`Cleaned up ${dir}`); } } } catch (error) {"` this.log(`Cleanup failed: ${error.message}`); } } async optimizeBuild() { try {" this.log("Optimizing build."); / Clean up first await this.cleanupOldBuilds(); / Run build with optimization"" const { stdout, stderr } = await execAsync("npm run build: production", {" cwd: process.cwd()," timeout: 300000});" this.log("Build optimization completed");" return { success: true, output: stdout, errors: stderr }; } catch (error) {"` this.log(`Build optimization failed: ${error.message}`); return {" success: false,"" output: error.stdout | ""," errors: error.stderr | error.message}; } } getBuildStats() { const recentBuilds = this.buildHistory.slice(-10); const successfulBuilds = recentBuilds.filter(b => b.success).length; const averageDuration recentBuilds.reduce((sum, b) => sum + b.duration, 0) recentBuilds.length; return {" totalBuilds: this.buildHistory.length," recentSuccessRate: (successfulBuilds / recentBuilds.length) * 100," averageDuration: Math.round(averageDuration)," lastBuildTime: this.lastBuildTime}; } async start() {" this.log("Build Monitor started"); / Run initial check await this.performFullCheck(); / Set up periodic checks every 4 hours setInterval( async () => { await this.performFullCheck(); }, 4 * 60 * 60 * 1000 ); / Set up daily optimization setInterval( async () => {" this.log("Running daily build optimization."); await this.optimizeBuild(); }, 24 * 60 * 60 * 1000 ); }}/ Start the monitor if this script is run directlyif (require.main === module) { const monitor = new BuildMonitor(); monitor.start().catch(error => {"" console.error("Build Monitor failed: ", error); process.exit(1); });}module.exports = BuildMonitor;'"`'"`
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
class BuildMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(
      this.projectRoot,
      'automation/logs/build-monitor.log'
    );
    this.buildReportFile = path.join(
      this.projectRoot,
      'automation/logs/build-report.json'
    );
    this.lastBuild = null;
    this.buildInterval = 300000; // 5 minutes;
    this.isRunning = false;
const execAsync = promisify(exec);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
=======

const execAsync = promisify(exec);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
class BuildMonitor {}
  constructor() {}
    this.logFile = path.join(__dirname, 'logs', 'build-monitor.log');
    this.lastBuildTime = null;
    this.buildHistory = [];
    this.maxHistorySize = 50;
  };
  log(message) {}
    const timestamp = new Date().toISOString();
<<<<<<< HEAD
    const logMessage = `[${timestamp}] ${message}\n`;
    );
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const logMessage = `[${timestamp}] ${message}\n`;
    );
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
    const logMessage = `[${timestamp}] ${message}\n`;`
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  };
  async runBuild() {}
    const startTime = Date.now();
    try {}
      this.log('Starting build process...');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
      execSync('npm run clean', {
        cwd: this.projectRoot,
        stdio: 'ignore',
        timeout: 30000,
      });
      this.log('Build cleaned');
      const buildOutput = execSync('npm run build', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000,
      });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
      const { stdout, stderr } = await execAsync('npm run build', {})
        "cwd": process.cwd(),
        "timeout": 300000, // 5 minutes timeout;
      }
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
      const endTime = Date.now();
      const duration = endTime - startTime;
      this.lastBuild = {
        timestamp: new Date().toISOString(),
        success: true,
        buildTime,
        output: buildOutput,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
=======

      const endTime = Date.now();
      const duration = endTime - startTime;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
      const buildResult = {}
        "timestamp": new Date().toISOString(),
        duration,
        "success": true,
        "output": stdout,
        "errors": stderr};"
      this.buildHistory.push(buildResult);
      if (this.buildHistory.length > this.maxHistorySize) {}
        this.buildHistory.shift();
      this.lastBuildTime = new Date();`;
      this.log(`Build completed successfully in ${duration}ms`);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
      this.log(`Build completed successfully in ${buildTime}ms`);
      await this.saveBuildReport();
    } catch (error) {
      this.log(`Build failed: ${error.message}`);
      this.lastBuild = {
        timestamp: new Date().toISOString(),
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
      return buildResult;
    } catch (error) {}
      const endTime = Date.now();
      const duration = endTime - startTime;
      const buildResult = {}
        "timestamp": new Date().toISOString(),
        duration,
        "success": false,
        "output": error.stdout || '',
        "errors": error.stderr || error.message};
      this.buildHistory.push(buildResult);
      if (this.buildHistory.length > this.maxHistorySize) {}
        this.buildHistory.shift();
      };
      this.log(`Build failed after ${duration}"ms": ${error.message}`);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
  async handleBuildFailure(error) {
    this.log('Handling build failure...');
    try {
  // TODO: Implement
}
      execSync('npm run lint:fix, {
        cwd: this.projectRoot,
        stdio: ignore,
        timeout: 60000)
      });
      this.log('Applied linting fixes');
      execSync('npm run build, {
        cwd: this.projectRoot,
        stdio: ignore,
        timeout: 300000)
      });
      this.log('Build fixed and completed successfully');
    } catch (fixError) {
      this.log(`Failed to fix build: ${fixError.message});

      await this.reportBuildFailure(fixError);
  async saveBuildReport() {
    const report = {
      lastBuild: this.lastBuild,
      projectRoot: this.projectRoot,
      nodeVersion: process.version,
      platform: process.platform,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
      return buildResult;
    };
  };
  async runTypeCheck() {}
    try {}
      this.log('Running type check...');
      const { stdout, stderr } = await execAsync('npm run type-check', {})
        "cwd": process.cwd(),
        "timeout": 60000}
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
  async reportBuildFailure(error) {
    try {
      const failureReport = {
        timestamp: new Date().toISOString(),
        error: error.message,
        stack: error.stack,
        projectRoot: this.projectRoot,
      };
      const failureFile = path.join(
        this.projectRoot,
        'automation/logs/build-failure-report.json'
      );
      fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2));
      this.log('Build failure reported');
    } catch (_) {}
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
      this.log('Type check completed successfully');
      return { "success": true, "output": stdout, "errors": stderr };
    } catch (error) {}
      this.log(`Type check "failed": ${error.message}`);
      return {}
        "success": false,
        "output": error.stdout || '',
        "errors": error.stderr || error.message};
    };
  };
  async runLintCheck() {}
    try {}
      this.log('Running lint check...');
      const { stdout, stderr } = await execAsync('npm run "lint": check', {})
        "cwd": process.cwd(),
        "timeout": 60000}
});
      this.log('Lint check completed successfully');
      return { "success": true, "output": stdout, "errors": stderr };
    } catch (error) {}
      this.log(`Lint check "failed": ${error.message}`);
      return {}
        "success": false,
        "output": error.stdout || '',
        "errors": error.stderr || error.message};
    };
  };
  async runTests() {}
    try {}
      this.log('Running tests...');
      const { stdout, stderr } = await execAsync('npm run "test": smoke', {})
        "cwd": process.cwd(),
        "timeout": 120000}
});
      this.log('Tests completed successfully');
      return { "success": true, "output": stdout, "errors": stderr };
    } catch (error) {}
      this.log(`Tests "failed": ${error.message}`);
      return {}
        "success": false,
        "output": error.stdout || '',
        "errors": error.stderr || error.message};
    };
  };
  async performFullCheck() {}
    this.log('Starting full build check...');
    const results = {}
      "timestamp": new Date().toISOString(),
      "typeCheck": await this.runTypeCheck(),
      "lintCheck": await this.runLintCheck(),
      "build": await this.runBuild(),
      "tests": await this.runTests()};
    const allPassed =
      results.typeCheck.success &&
      results.lintCheck.success &&
      results.build.success &&
      results.tests.success;
    this.log(`Full check completed. All "passed": ${allPassed}`);
    // Save results;
    const resultsFile = path.join(__dirname, 'logs', 'build-results.json');
    fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
    return results;
  };
  async cleanupOldBuilds() {}
    try {}
      this.log('Cleaning up old build artifacts...');
      const buildDirs = ['.next', 'out', 'dist'];
      for (const dir of buildDirs) {}
        const dirPath = path.join(process.cwd(), dir);
        if (fs.existsSync(dirPath)) {}
          await execAsync(`rm -rf ${dirPath}`, { "cwd": process.cwd() }
});
          this.log(`Cleaned up ${dir}`);
        };
      };
    } catch (error) {}
      this.log(`Cleanup "failed": ${error.message}`);
    };
  };
  async optimizeBuild() {}
    try {}
      this.log('Optimizing build...');
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
      // Clean up first;
      await this.cleanupOldBuilds();
      // Run build with optimization;
      const { stdout, stderr } = await execAsync('npm run "build": production', {})
        "cwd": process.cwd(),
        "timeout": 300000}
});
      this.log('Build optimization completed');
      return { "success": true, "output": stdout, "errors": stderr };
    } catch (error) {}
      this.log(`Build optimization "failed": ${error.message}`);
      return {}
        "success": false,
        "output": error.stdout || '',
        "errors": error.stderr || error.message};
    };
  };
  getBuildStats() {}
    const recentBuilds = this.buildHistory.slice(-10);
    const successfulBuilds = recentBuilds.filter(b => b.success).length;
    const averageDuration =
      recentBuilds.reduce((sum, b) => sum + b.duration, 0) /
      recentBuilds.length;
    return {}
      "totalBuilds": this.buildHistory.length,
      "recentSuccessRate": (successfulBuilds / recentBuilds.length) * 100,
      "averageDuration": Math.round(averageDuration),
      "lastBuildTime": this.lastBuildTime};
  };
  async start() {}
    this.log('Build Monitor started');
    // Run initial check;
    await this.performFullCheck();
    // Set up periodic checks every 4 hours;
    setInterval()
      async () => {}
        await this.performFullCheck();
      },
      4 * 60 * 60 * 1000;
    );
    // Set up daily optimization;
    setInterval()
      async () => {}
        this.log('Running daily build optimization...');
        await this.optimizeBuild();
      24 * 60 * 60 * 1000;
// Start the monitor if this script is run directly;
if (require.main === module) {}
  const monitor = new BuildMonitor();
  monitor.start().catch(error => {})

    process.exit(1);
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
}
const monitor = new BuildMonitor();
monitor.start().catch(error => {
  console.error('Failed to start build monitor:', error);
  process.exit(1);
});
});
};
module.exports = BuildMonitor;
=======
<<<<<<< HEAD
<<<<<<< HEAD
module.exports = BuildMonitor;
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
});
};
module.exports = BuildMonitor;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
