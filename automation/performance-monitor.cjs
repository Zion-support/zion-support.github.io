<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD


#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs);const path = require("path");const { execSync } = require(child_process");class PerformanceMonitor { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join( this.projectRoot," automation/logs/performance-monitor.log ); this.performanceReportFile = path.join( this.projectRoot," "automation/logs/performance-report.json ); this.lastCheck = null; this.checkInterval = 300000; / 5 minutes this.isRunning = false; this.setupLogging(); this.log("Performance Monitor initialized"); } setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; process.stdout.write(logMessage); try { fs.appendFileSync(this.logFile, logMessage); } catch (_) { / ignore } } async checkPerformance() { try { this.log(Checking performance metrics."); const startTime = Date.now(); const systemMetrics = await this.getSystemMetrics(); const buildMetrics = await this.getBuildMetrics(); const bundleMetrics = await this.getBundleMetrics(); const endTime = Date.now(); const checkTime = endTime - startTime; this.lastCheck = {" timestamp: new Date().toISOString(), checkTime, systemMetrics, buildMetrics, bundleMetrics}` this.log(`Performance check completed in ${checkTime}ms`); await this.savePerformanceReport(); await this.checkOptimizationNeeded(); } catch (error) {` this.log(`Performance check failed: ${error.message}`); await this.reportPerformanceError(error); } } async getSystemMetrics() { try { const metrics = { memory: process.memoryUsage()," uptime: process.uptime()," cpuUsage: process.cpuUsage(), nodeVersion: process.version, platform: process.platform} try {" const diskUsage = execSync("df -h ., { cwd: this.projectRoot,"" encoding: utf8," timeout: 10000}); metrics.diskUsage = diskUsage; } catch (_) {" metrics.diskUsage = Unavailable; } return metrics; } catch (error) {"` this.log(`Failed to get system metrics: ${error.message}`);" return { error: error.message } } } async getBuildMetrics() { try { const buildDir = path.join(this.projectRoot, .next"); if (!fs.existsSync(buildDir)) {" return { exists: false } } const stats = fs.statSync(buildDir); const buildSize = this.getDirectorySize(buildDir); return { exists: true, lastModified: stats.mtime," size: buildSize," age: Date.now() - stats.mtime.getTime()} } catch (error) {` this.log(`Failed to get build metrics: ${error.message}`); return { error: error.message } } } async getBundleMetrics() { try {" const pkgPath = path.join(this.projectRoot, "package.json); if (!fs.existsSync(pkgPath)) { return { analyzerAvailable: false } }" const packageJson = JSON.parse(fs.readFileSync(pkgPath, "utf8)); const hasAnalyze = packageJson.scripts && packageJson.scripts.analyze; return hasAnalyze" ? { analyzerAvailable: true, script: "npm run analyze } : { analyzerAvailable: false,"" recommendation: Consider adding bundle analyzer} } catch (error) {"` this.log(`Failed to get bundle metrics: ${error.message}`);" return { error: error.message } } } getDirectorySize(dirPath) { let totalSize = 0; try { const stack = [dirPath]; while (stack.length) { const current = stack.pop(); const entries = fs.readdirSync(current, { withFileTypes: true }); for (const entry of entries) { const full = path.join(current, entry.name); if (entry.isDirectory()) { stack.push(full); } else { try { totalSize += fs.statSync(full).size; } catch (_) {} } } } } catch (_) {} return totalSize; } async checkOptimizationNeeded() { if (!this.lastCheck | !this.lastCheck.systemMetrics) return; try { const memory = this.lastCheck.systemMetrics.memory; const memoryUsagePercent = memory.heapTotal ? (memory.heapUsed / memory.heapTotal) * 100 : 0; if (memoryUsagePercent > 80) { this.log("High memory usage detected, considering optimization."); await this.optimizeMemory(); } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) { this.log(Build is stale, considering rebuild."); await this.optimizeBuild(); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) {" this.log(Large build size detected, considering optimization.); await this.optimizeBuildSize(); } } } catch (error) {"` this.log(`Optimization check failed: ${error.message}`); } } async optimizeMemory() { try { if (global.gc) { global.gc();" this.log(Garbage collection performed); } } catch (error) {"` this.log(`Memory optimization failed: ${error.message}`); } } async optimizeBuild() { try {" execSync(npm run clean, {" cwd: this.projectRoot," stdio: ignore"," timeout: 30000}); execSync(npm run build", {" cwd: this.projectRoot, stdio: "ignore", timeout: 300000}); this.log("Build optimization completed"); } catch (error) {` this.log(`Build optimization failed: ${error.message}`); } } async optimizeBuildSize() { try { const pkg = JSON.parse( fs.readFileSync(path.join(this.projectRoot, "package.json"), utf8) ); if (pkg.scripts && pkg.scripts.analyze) {" execSync("npm run analyze, { cwd: this.projectRoot,"" stdio: ignore," timeout: 300000});" this.log(Bundle analysis completed); } await this.optimizeBuild(); } catch (error) {"` this.log(`Build size optimization failed: ${error.message}`); } } async savePerformanceReport() { const report = {" lastCheck: this.lastCheck, projectRoot: this.projectRoot, recommendations: this.getPerformanceRecommendations()} try { fs.writeFileSync( this.performanceReportFile, JSON.stringify(report, null, 2) ); } catch (_) {} } getPerformanceRecommendations() { const recommendations = []; if (!this.lastCheck) return recommendations; const metrics = this.lastCheck.systemMetrics; if (metrics && metrics.memory && metrics.memory.heapTotal) { const memoryUsagePercent (metrics.memory.heapUsed / metrics.memory.heapTotal) * 100; if (memoryUsagePercent > 80) { recommendations.push(" "High memory usage detected. Consider optimizing memory usage. ); } if (memoryUsagePercent > 90) { recommendations.push( "Critical memory usage. Immediate optimization required." ); } } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) { recommendations.push( Build is stale. Consider rebuilding for optimal performance." ); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) { recommendations.push(" Large build size detected. Consider code splitting and optimization. ); } } return recommendations; } async reportPerformanceError(error) { try { const errorReport = {" timestamp: new Date().toISOString()," error: error.message, stack: error.stack, projectRoot: this.projectRoot} const errorFile = path.join( this.projectRoot," "automation/logs/performance-error-report.json ); fs.writeFileSync(errorFile, JSON.stringify(errorReport, null, 2)); this.log("Performance error reported"); } catch (_) {} } async start() { this.isRunning = true; this.log(Performance Monitor started"); await this.checkPerformance(); setInterval(async () => { if (!this.isRunning) return; await this.checkPerformance(); }, this.checkInterval);" process.on(SIGTERM, () => {" this.log("Received SIGTERM, shutting down gracefully); this.isRunning = false; process.exit(0); }); process.on("SIGINT", () => { this.log(Received SIGINT, shutting down gracefully"); this.isRunning = false; process.exit(0); }); }}const monitor = new PerformanceMonitor();monitor.start().catch(error => {" console.error(Failed to start performance monitor: ", error); process.exit(1);});"``


#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");const path = require(path");"const { execSync } = require(child_process);class PerformanceMonitor { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join( this.projectRoot," "automation/logs/performance-monitor.log ); this.performanceReportFile = path.join( this.projectRoot, "automation/logs/performance-report.json" ); this.lastCheck = null; this.checkInterval = 300000; / 5 minutes this.isRunning = false; this.setupLogging(); this.log(Performance Monitor initialized"); } setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; process.stdout.write(logMessage); try { fs.appendFileSync(this.logFile, logMessage); } catch (_) { / ignore } } async checkPerformance() { try {" this.log(Checking performance metrics.); const startTime = Date.now(); const systemMetrics = await this.getSystemMetrics(); const buildMetrics = await this.getBuildMetrics(); const bundleMetrics = await this.getBundleMetrics(); const endTime = Date.now(); const checkTime = endTime - startTime; this.lastCheck = {" timestamp: new Date().toISOString(), checkTime, systemMetrics, buildMetrics, bundleMetrics}` this.log(`Performance check completed in ${checkTime}ms`); await this.savePerformanceReport(); await this.checkOptimizationNeeded(); } catch (error) {"` this.log(`Performance check failed: ${error.message}`); await this.reportPerformanceError(error); } } async getSystemMetrics() { try { const metrics = { memory: process.memoryUsage(), uptime: process.uptime()," cpuUsage: process.cpuUsage()," nodeVersion: process.version, platform: process.platform} try { const diskUsage = execSync("df -h .", { cwd: this.projectRoot," encoding: "utf8, timeout: 10000}); metrics.diskUsage = diskUsage; } catch (_) {" metrics.diskUsage = "Unavailable; } return metrics; } catch (error) {` this.log(`Failed to get system metrics: ${error.message}`);" return { error: error.message } } } async getBuildMetrics() { try {" const buildDir = path.join(this.projectRoot, .next); if (!fs.existsSync(buildDir)) {" return { exists: false } } const stats = fs.statSync(buildDir); const buildSize = this.getDirectorySize(buildDir); return {" exists: true, lastModified: stats.mtime, size: buildSize," age: Date.now() - stats.mtime.getTime()} } catch (error) {"` this.log(`Failed to get build metrics: ${error.message}`); return { error: error.message } } } async getBundleMetrics() { try { const pkgPath = path.join(this.projectRoot, "package.json"); if (!fs.existsSync(pkgPath)) { return { analyzerAvailable: false } } const packageJson = JSON.parse(fs.readFileSync(pkgPath, "utf8")); const hasAnalyze = packageJson.scripts && packageJson.scripts.analyze; return hasAnalyze ? { analyzerAvailable: true, script: "npm run analyze" } : { analyzerAvailable: false," recommendation: "Consider adding bundle analyzer} } catch (error) {` this.log(`Failed to get bundle metrics: ${error.message}`);" return { error: error.message } } } getDirectorySize(dirPath) { let totalSize = 0; try { const stack = [dirPath]; while (stack.length) { const current = stack.pop();" const entries = fs.readdirSync(current, { withFileTypes: true }); for (const entry of entries) { const full = path.join(current, entry.name); if (entry.isDirectory()) { stack.push(full); } else { try { totalSize += fs.statSync(full).size; } catch (_) {} } } } } catch (_) {} return totalSize; } async checkOptimizationNeeded() { if (!this.lastCheck | !this.lastCheck.systemMetrics) return; try { const memory = this.lastCheck.systemMetrics.memory; const memoryUsagePercent = memory.heapTotal ? (memory.heapUsed / memory.heapTotal) * 100 : 0; if (memoryUsagePercent > 80) { this.log(High memory usage detected, considering optimization."); await this.optimizeMemory(); } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) {" this.log(Build is stale, considering rebuild.); await this.optimizeBuild(); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) {" this.log("Large build size detected, considering optimization.); await this.optimizeBuildSize(); } } } catch (error) {` this.log(`Optimization check failed: ${error.message}`); } } async optimizeMemory() { try { if (global.gc) { global.gc();" this.log("Garbage collection performed); } } catch (error) {` this.log(`Memory optimization failed: ${error.message}`); } } async optimizeBuild() { try {" execSync("npm run clean, { cwd: this.projectRoot,"" stdio: ignore," timeout: 30000});" execSync(npm run build, {" cwd: this.projectRoot," stdio: ignore"," timeout: 300000}); this.log(Build optimization completed"); } catch (error) {"` this.log(`Build optimization failed: ${error.message}`); } } async optimizeBuildSize() { try { const pkg = JSON.parse( fs.readFileSync(path.join(this.projectRoot, package.json"), "utf8) ); if (pkg.scripts && pkg.scripts.analyze) { execSync("npm run analyze", { cwd: this.projectRoot," stdio: "ignore, timeout: 300000});" this.log("Bundle analysis completed); } await this.optimizeBuild(); } catch (error) {` this.log(`Build size optimization failed: ${error.message}`); } } async savePerformanceReport() { const report = {" lastCheck: this.lastCheck," projectRoot: this.projectRoot, recommendations: this.getPerformanceRecommendations()} try { fs.writeFileSync( this.performanceReportFile, JSON.stringify(report, null, 2) ); } catch (_) {} } getPerformanceRecommendations() { const recommendations = []; if (!this.lastCheck) return recommendations; const metrics = this.lastCheck.systemMetrics; if (metrics && metrics.memory && metrics.memory.heapTotal) { const memoryUsagePercent (metrics.memory.heapUsed / metrics.memory.heapTotal) * 100; if (memoryUsagePercent > 80) { recommendations.push( "High memory usage detected. Consider optimizing memory usage." ); } if (memoryUsagePercent > 90) { recommendations.push( Critical memory usage. Immediate optimization required." ); } } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) { recommendations.push(" Build is stale. Consider rebuilding for optimal performance. ); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) { recommendations.push(" "Large build size detected. Consider code splitting and optimization. ); } } return recommendations; } async reportPerformanceError(error) { try { const errorReport = { timestamp: new Date().toISOString()," error: error.message," stack: error.stack, projectRoot: this.projectRoot} const errorFile = path.join( this.projectRoot, "automation/logs/performance-error-report.json" ); fs.writeFileSync(errorFile, JSON.stringify(errorReport, null, 2)); this.log(Performance error reported"); } catch (_) {} } async start() { this.isRunning = true;" this.log(Performance Monitor started); await this.checkPerformance(); setInterval(async () => { if (!this.isRunning) return; await this.checkPerformance(); }, this.checkInterval);" process.on("SIGTERM, () => { this.log("Received SIGTERM, shutting down gracefully"); this.isRunning = false; process.exit(0); }); process.on(SIGINT", () => {" this.log(Received SIGINT, shutting down gracefully); this.isRunning = false; process.exit(0); }); }}const monitor = new PerformanceMonitor();monitor.start().catch(error => {"" console.error(Failed to start performance monitor: , error); process.exit(1);});""``
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class PerformanceMonitor { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join( this.projectRoot," "automation/logs/performance-monitor.log" ); this.performanceReportFile = path.join( this.projectRoot," "automation/logs/performance-report.json" ); this.lastCheck = null; this.checkInterval = 300000; / 5 minutes this.isRunning = false; this.setupLogging();" this.log("Performance Monitor initialized"); } setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; process.stdout.write(logMessage); try { fs.appendFileSync(this.logFile, logMessage); } catch (_) { / ignore } } async checkPerformance() { try {" this.log("Checking performance metrics."); const startTime = Date.now(); const systemMetrics = await this.getSystemMetrics(); const buildMetrics = await this.getBuildMetrics(); const bundleMetrics = await this.getBundleMetrics(); const endTime = Date.now(); const checkTime = endTime - startTime; this.lastCheck = {" timestamp: new Date().toISOString(), checkTime, systemMetrics, buildMetrics, bundleMetrics};` this.log(`Performance check completed in ${checkTime}ms`); await this.savePerformanceReport(); await this.checkOptimizationNeeded(); } catch (error) {"` this.log(`Performance check failed: ${error.message}`); await this.reportPerformanceError(error); } } async getSystemMetrics() { try { const metrics = {" memory: process.memoryUsage()," uptime: process.uptime()," cpuUsage: process.cpuUsage()," nodeVersion: process.version," platform: process.platform}; try {" const diskUsage = execSync("df -h .", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 10000}); metrics.diskUsage = diskUsage; } catch (_) {" metrics.diskUsage = "Unavailable"; } return metrics; } catch (error) {"` this.log(`Failed to get system metrics: ${error.message}`);" return { error: error.message }; } } async getBuildMetrics() { try {" const buildDir = path.join(this.projectRoot, ".next"); if (!fs.existsSync(buildDir)) {" return { exists: false }; } const stats = fs.statSync(buildDir); const buildSize = this.getDirectorySize(buildDir); return {" exists: true," lastModified: stats.mtime," size: buildSize," age: Date.now() - stats.mtime.getTime()}; } catch (error) {"` this.log(`Failed to get build metrics: ${error.message}`);" return { error: error.message }; } } async getBundleMetrics() { try {" const pkgPath = path.join(this.projectRoot, "package.json"); if (!fs.existsSync(pkgPath)) {" return { analyzerAvailable: false }; }" const packageJson = JSON.parse(fs.readFileSync(pkgPath, "utf8")); const hasAnalyze = packageJson.scripts && packageJson.scripts.analyze; return hasAnalyze"" ? { analyzerAvailable: true, script: "npm run analyze" } : {" analyzerAvailable: false,"" recommendation: "Consider adding bundle analyzer"}; } catch (error) {"` this.log(`Failed to get bundle metrics: ${error.message}`);" return { error: error.message }; } } getDirectorySize(dirPath) { let totalSize = 0; try { const stack = [dirPath]; while (stack.length) { const current = stack.pop();" const entries = fs.readdirSync(current, { withFileTypes: true }); for (const entry of entries) { const full = path.join(current, entry.name); if (entry.isDirectory()) { stack.push(full); } else { try { totalSize += fs.statSync(full).size; } catch (_) {} } } } } catch (_) {} return totalSize; } async checkOptimizationNeeded() { if (!this.lastCheck | !this.lastCheck.systemMetrics) return; try { const memory = this.lastCheck.systemMetrics.memory; const memoryUsagePercent = memory.heapTotal ? (memory.heapUsed / memory.heapTotal) * 100 : 0; if (memoryUsagePercent > 80) {" this.log("High memory usage detected, considering optimization."); await this.optimizeMemory(); } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) {" this.log("Build is stale, considering rebuild."); await this.optimizeBuild(); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) {" this.log("Large build size detected, considering optimization."); await this.optimizeBuildSize(); } } } catch (error) {"` this.log(`Optimization check failed: ${error.message}`); } } async optimizeMemory() { try { if (global.gc) { global.gc();" this.log("Garbage collection performed"); } } catch (error) {"` this.log(`Memory optimization failed: ${error.message}`); } } async optimizeBuild() { try {" execSync("npm run clean", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 30000});" execSync("npm run build", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 300000});" this.log("Build optimization completed"); } catch (error) {"` this.log(`Build optimization failed: ${error.message}`); } } async optimizeBuildSize() { try { const pkg = JSON.parse(" fs.readFileSync(path.join(this.projectRoot, "package.json"), "utf8") ); if (pkg.scripts && pkg.scripts.analyze) {" execSync("npm run analyze", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 300000});" this.log("Bundle analysis completed"); } await this.optimizeBuild(); } catch (error) {"` this.log(`Build size optimization failed: ${error.message}`); } } async savePerformanceReport() { const report = {" lastCheck: this.lastCheck," projectRoot: this.projectRoot," recommendations: this.getPerformanceRecommendations()}; try { fs.writeFileSync( this.performanceReportFile, JSON.stringify(report, null, 2) ); } catch (_) {} } getPerformanceRecommendations() { const recommendations = []; if (!this.lastCheck) return recommendations; const metrics = this.lastCheck.systemMetrics; if (metrics && metrics.memory && metrics.memory.heapTotal) { const memoryUsagePercent (metrics.memory.heapUsed / metrics.memory.heapTotal) * 100; if (memoryUsagePercent > 80) { recommendations.push(" "High memory usage detected. Consider optimizing memory usage." ); } if (memoryUsagePercent > 90) { recommendations.push(" "Critical memory usage. Immediate optimization required." ); } } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) { recommendations.push(" "Build is stale. Consider rebuilding for optimal performance." ); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) { recommendations.push(" "Large build size detected. Consider code splitting and optimization." ); } } return recommendations; } async reportPerformanceError(error) { try { const errorReport = {" timestamp: new Date().toISOString()," error: error.message," stack: error.stack," projectRoot: this.projectRoot}; const errorFile = path.join( this.projectRoot," "automation/logs/performance-error-report.json" ); fs.writeFileSync(errorFile, JSON.stringify(errorReport, null, 2));" this.log("Performance error reported"); } catch (_) {} } async start() { this.isRunning = true;" this.log("Performance Monitor started"); await this.checkPerformance(); setInterval(async () => { if (!this.isRunning) return; await this.checkPerformance(); }, this.checkInterval);" process.on("SIGTERM", () => {" this.log("Received SIGTERM, shutting down gracefully"); this.isRunning = false; process.exit(0); });" process.on("SIGINT", () => {" this.log("Received SIGINT, shutting down gracefully"); this.isRunning = false; process.exit(0); }); }}const monitor = new PerformanceMonitor();monitor.start().catch(error => {"" console.error("Failed to start performance monitor: ", error); process.exit(1);});""`"`
<<<<<<< HEAD
=======
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class PerformanceMonitor { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join( this.projectRoot," "automation/logs/performance-monitor.log" ); this.performanceReportFile = path.join( this.projectRoot," "automation/logs/performance-report.json" ); this.lastCheck = null; this.checkInterval = 300000; / 5 minutes this.isRunning = false; this.setupLogging();" this.log("Performance Monitor initialized"); } setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; process.stdout.write(logMessage); try { fs.appendFileSync(this.logFile, logMessage); } catch (_) { / ignore } } async checkPerformance() { try {" this.log("Checking performance metrics."); const startTime = Date.now(); const systemMetrics = await this.getSystemMetrics(); const buildMetrics = await this.getBuildMetrics(); const bundleMetrics = await this.getBundleMetrics(); const endTime = Date.now(); const checkTime = endTime - startTime; this.lastCheck = {" timestamp: new Date().toISOString(), checkTime, systemMetrics, buildMetrics, bundleMetrics};` this.log(`Performance check completed in ${checkTime}ms`); await this.savePerformanceReport(); await this.checkOptimizationNeeded(); } catch (error) {"` this.log(`Performance check failed: ${error.message}`); await this.reportPerformanceError(error); } } async getSystemMetrics() { try { const metrics = {" memory: process.memoryUsage()," uptime: process.uptime()," cpuUsage: process.cpuUsage()," nodeVersion: process.version," platform: process.platform}; try {" const diskUsage = execSync("df -h .", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 10000}); metrics.diskUsage = diskUsage; } catch (_) {" metrics.diskUsage = "Unavailable"; } return metrics; } catch (error) {"` this.log(`Failed to get system metrics: ${error.message}`);" return { error: error.message }; } } async getBuildMetrics() { try {" const buildDir = path.join(this.projectRoot, ".next"); if (!fs.existsSync(buildDir)) {" return { exists: false }; } const stats = fs.statSync(buildDir); const buildSize = this.getDirectorySize(buildDir); return {" exists: true," lastModified: stats.mtime," size: buildSize," age: Date.now() - stats.mtime.getTime()}; } catch (error) {"` this.log(`Failed to get build metrics: ${error.message}`);" return { error: error.message }; } } async getBundleMetrics() { try {" const pkgPath = path.join(this.projectRoot, "package.json"); if (!fs.existsSync(pkgPath)) {" return { analyzerAvailable: false }; }" const packageJson = JSON.parse(fs.readFileSync(pkgPath, "utf8")); const hasAnalyze = packageJson.scripts && packageJson.scripts.analyze; return hasAnalyze"" ? { analyzerAvailable: true, script: "npm run analyze" } : {" analyzerAvailable: false,"" recommendation: "Consider adding bundle analyzer"}; } catch (error) {"` this.log(`Failed to get bundle metrics: ${error.message}`);" return { error: error.message }; } } getDirectorySize(dirPath) { let totalSize = 0; try { const stack = [dirPath]; while (stack.length) { const current = stack.pop();" const entries = fs.readdirSync(current, { withFileTypes: true }); for (const entry of entries) { const full = path.join(current, entry.name); if (entry.isDirectory()) { stack.push(full); } else { try { totalSize += fs.statSync(full).size; } catch (_) {} } } } } catch (_) {} return totalSize; } async checkOptimizationNeeded() { if (!this.lastCheck | !this.lastCheck.systemMetrics) return; try { const memory = this.lastCheck.systemMetrics.memory; const memoryUsagePercent = memory.heapTotal ? (memory.heapUsed / memory.heapTotal) * 100 : 0; if (memoryUsagePercent > 80) {" this.log("High memory usage detected, considering optimization."); await this.optimizeMemory(); } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) {" this.log("Build is stale, considering rebuild."); await this.optimizeBuild(); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) {" this.log("Large build size detected, considering optimization."); await this.optimizeBuildSize(); } } } catch (error) {"` this.log(`Optimization check failed: ${error.message}`); } } async optimizeMemory() { try { if (global.gc) { global.gc();" this.log("Garbage collection performed"); } } catch (error) {"` this.log(`Memory optimization failed: ${error.message}`); } } async optimizeBuild() { try {" execSync("npm run clean", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 30000});" execSync("npm run build", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 300000});" this.log("Build optimization completed"); } catch (error) {"` this.log(`Build optimization failed: ${error.message}`); } } async optimizeBuildSize() { try { const pkg = JSON.parse(" fs.readFileSync(path.join(this.projectRoot, "package.json"), "utf8") ); if (pkg.scripts && pkg.scripts.analyze) {" execSync("npm run analyze", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 300000});" this.log("Bundle analysis completed"); } await this.optimizeBuild(); } catch (error) {"` this.log(`Build size optimization failed: ${error.message}`); } } async savePerformanceReport() { const report = {" lastCheck: this.lastCheck," projectRoot: this.projectRoot," recommendations: this.getPerformanceRecommendations()}; try { fs.writeFileSync( this.performanceReportFile, JSON.stringify(report, null, 2) ); } catch (_) {} } getPerformanceRecommendations() { const recommendations = []; if (!this.lastCheck) return recommendations; const metrics = this.lastCheck.systemMetrics; if (metrics && metrics.memory && metrics.memory.heapTotal) { const memoryUsagePercent (metrics.memory.heapUsed / metrics.memory.heapTotal) * 100; if (memoryUsagePercent > 80) { recommendations.push(" "High memory usage detected. Consider optimizing memory usage." ); } if (memoryUsagePercent > 90) { recommendations.push(" "Critical memory usage. Immediate optimization required." ); } } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) { recommendations.push(" "Build is stale. Consider rebuilding for optimal performance." ); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) { recommendations.push(" "Large build size detected. Consider code splitting and optimization." ); } } return recommendations; } async reportPerformanceError(error) { try { const errorReport = {" timestamp: new Date().toISOString()," error: error.message," stack: error.stack," projectRoot: this.projectRoot}; const errorFile = path.join( this.projectRoot," "automation/logs/performance-error-report.json" ); fs.writeFileSync(errorFile, JSON.stringify(errorReport, null, 2));" this.log("Performance error reported"); } catch (_) {} } async start() { this.isRunning = true;" this.log("Performance Monitor started"); await this.checkPerformance(); setInterval(async () => { if (!this.isRunning) return; await this.checkPerformance(); }, this.checkInterval);" process.on("SIGTERM", () => {" this.log("Received SIGTERM, shutting down gracefully"); this.isRunning = false; process.exit(0); });" process.on("SIGINT", () => {" this.log("Received SIGINT, shutting down gracefully"); this.isRunning = false; process.exit(0); }); }}const monitor = new PerformanceMonitor();monitor.start().catch(error => {"" console.error("Failed to start performance monitor: ", error); process.exit(1);});""`"`
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class PerformanceMonitor { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join( this.projectRoot," "automation/logs/performance-monitor.log" ); this.performanceReportFile = path.join( this.projectRoot," "automation/logs/performance-report.json" ); this.lastCheck = null; this.checkInterval = 300000; / 5 minutes this.isRunning = false; this.setupLogging();" this.log("Performance Monitor initialized"); } setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; process.stdout.write(logMessage); try { fs.appendFileSync(this.logFile, logMessage); } catch (_) { / ignore } } async checkPerformance() { try {" this.log("Checking performance metrics."); const startTime = Date.now(); const systemMetrics = await this.getSystemMetrics(); const buildMetrics = await this.getBuildMetrics(); const bundleMetrics = await this.getBundleMetrics(); const endTime = Date.now(); const checkTime = endTime - startTime; this.lastCheck = {" timestamp: new Date().toISOString(), checkTime, systemMetrics, buildMetrics, bundleMetrics};` this.log(`Performance check completed in ${checkTime}ms`); await this.savePerformanceReport(); await this.checkOptimizationNeeded(); } catch (error) {"` this.log(`Performance check failed: ${error.message}`); await this.reportPerformanceError(error); } } async getSystemMetrics() { try { const metrics = {" memory: process.memoryUsage()," uptime: process.uptime()," cpuUsage: process.cpuUsage()," nodeVersion: process.version," platform: process.platform}; try {" const diskUsage = execSync("df -h .", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 10000}); metrics.diskUsage = diskUsage; } catch (_) {" metrics.diskUsage = "Unavailable"; } return metrics; } catch (error) {"` this.log(`Failed to get system metrics: ${error.message}`);" return { error: error.message }; } } async getBuildMetrics() { try {" const buildDir = path.join(this.projectRoot, ".next"); if (!fs.existsSync(buildDir)) {" return { exists: false }; } const stats = fs.statSync(buildDir); const buildSize = this.getDirectorySize(buildDir); return {" exists: true," lastModified: stats.mtime," size: buildSize," age: Date.now() - stats.mtime.getTime()}; } catch (error) {"` this.log(`Failed to get build metrics: ${error.message}`);" return { error: error.message }; } } async getBundleMetrics() { try {" const pkgPath = path.join(this.projectRoot, "package.json"); if (!fs.existsSync(pkgPath)) {" return { analyzerAvailable: false }; }" const packageJson = JSON.parse(fs.readFileSync(pkgPath, "utf8")); const hasAnalyze = packageJson.scripts && packageJson.scripts.analyze; return hasAnalyze"" ? { analyzerAvailable: true, script: "npm run analyze" } : {" analyzerAvailable: false,"" recommendation: "Consider adding bundle analyzer"}; } catch (error) {"` this.log(`Failed to get bundle metrics: ${error.message}`);" return { error: error.message }; } } getDirectorySize(dirPath) { let totalSize = 0; try { const stack = [dirPath]; while (stack.length) { const current = stack.pop();" const entries = fs.readdirSync(current, { withFileTypes: true }); for (const entry of entries) { const full = path.join(current, entry.name); if (entry.isDirectory()) { stack.push(full); } else { try { totalSize += fs.statSync(full).size; } catch (_) {} } } } } catch (_) {} return totalSize; } async checkOptimizationNeeded() { if (!this.lastCheck | !this.lastCheck.systemMetrics) return; try { const memory = this.lastCheck.systemMetrics.memory; const memoryUsagePercent = memory.heapTotal ? (memory.heapUsed / memory.heapTotal) * 100 : 0; if (memoryUsagePercent > 80) {" this.log("High memory usage detected, considering optimization."); await this.optimizeMemory(); } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) {" this.log("Build is stale, considering rebuild."); await this.optimizeBuild(); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) {" this.log("Large build size detected, considering optimization."); await this.optimizeBuildSize(); } } } catch (error) {"` this.log(`Optimization check failed: ${error.message}`); } } async optimizeMemory() { try { if (global.gc) { global.gc();" this.log("Garbage collection performed"); } } catch (error) {"` this.log(`Memory optimization failed: ${error.message}`); } } async optimizeBuild() { try {" execSync("npm run clean", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 30000});" execSync("npm run build", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 300000});" this.log("Build optimization completed"); } catch (error) {"` this.log(`Build optimization failed: ${error.message}`); } } async optimizeBuildSize() { try { const pkg = JSON.parse(" fs.readFileSync(path.join(this.projectRoot, "package.json"), "utf8") ); if (pkg.scripts && pkg.scripts.analyze) {" execSync("npm run analyze", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 300000});" this.log("Bundle analysis completed"); } await this.optimizeBuild(); } catch (error) {"` this.log(`Build size optimization failed: ${error.message}`); } } async savePerformanceReport() { const report = {" lastCheck: this.lastCheck," projectRoot: this.projectRoot," recommendations: this.getPerformanceRecommendations()}; try { fs.writeFileSync( this.performanceReportFile, JSON.stringify(report, null, 2) ); } catch (_) {} } getPerformanceRecommendations() { const recommendations = []; if (!this.lastCheck) return recommendations; const metrics = this.lastCheck.systemMetrics; if (metrics && metrics.memory && metrics.memory.heapTotal) { const memoryUsagePercent (metrics.memory.heapUsed / metrics.memory.heapTotal) * 100; if (memoryUsagePercent > 80) { recommendations.push(" "High memory usage detected. Consider optimizing memory usage." ); } if (memoryUsagePercent > 90) { recommendations.push(" "Critical memory usage. Immediate optimization required." ); } } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) { recommendations.push(" "Build is stale. Consider rebuilding for optimal performance." ); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) { recommendations.push(" "Large build size detected. Consider code splitting and optimization." ); } } return recommendations; } async reportPerformanceError(error) { try { const errorReport = {" timestamp: new Date().toISOString()," error: error.message," stack: error.stack," projectRoot: this.projectRoot}; const errorFile = path.join( this.projectRoot," "automation/logs/performance-error-report.json" ); fs.writeFileSync(errorFile, JSON.stringify(errorReport, null, 2));" this.log("Performance error reported"); } catch (_) {} } async start() { this.isRunning = true;" this.log("Performance Monitor started"); await this.checkPerformance(); setInterval(async () => { if (!this.isRunning) return; await this.checkPerformance(); }, this.checkInterval);" process.on("SIGTERM", () => {" this.log("Received SIGTERM, shutting down gracefully"); this.isRunning = false; process.exit(0); });" process.on("SIGINT", () => {" this.log("Received SIGINT, shutting down gracefully"); this.isRunning = false; process.exit(0); }); }}const monitor = new PerformanceMonitor();monitor.start().catch(error => {"" console.error("Failed to start performance monitor: ", error); process.exit(1);});""`"`
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
main
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

<<<<<<< HEAD

#!/usr/bin/env node/usr/bin/env nodeconst fs = require(fs");"const path = require(path);"const { execSync } = require("child_process);class PerformanceMonitor { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join( this.projectRoot, "automation/logs/performance-monitor.log" ); this.performanceReportFile = path.join( this.projectRoot, automation/logs/performance-report.json" ); this.lastCheck = null; this.checkInterval = 300000; / 5 minutes this.isRunning = false; this.setupLogging();" this.log(Performance Monitor initialized); } setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; process.stdout.write(logMessage); try { fs.appendFileSync(this.logFile, logMessage); } catch (_) { / ignore } } async checkPerformance() { try {" this.log("Checking performance metrics.); const startTime = Date.now(); const systemMetrics = await this.getSystemMetrics(); const buildMetrics = await this.getBuildMetrics(); const bundleMetrics = await this.getBundleMetrics(); const endTime = Date.now(); const checkTime = endTime - startTime; this.lastCheck = { timestamp: new Date().toISOString(), checkTime, systemMetrics, buildMetrics, bundleMetrics}` this.log(`Performance check completed in ${checkTime}ms`); await this.savePerformanceReport(); await this.checkOptimizationNeeded(); } catch (error) {"` this.log(`Performance check failed: ${error.message}`); await this.reportPerformanceError(error); } } async getSystemMetrics() { try { const metrics = {" memory: process.memoryUsage(), uptime: process.uptime(), cpuUsage: process.cpuUsage()," nodeVersion: process.version," platform: process.platform} try { const diskUsage = execSync(df -h .", {" cwd: this.projectRoot, encoding: "utf8", timeout: 10000}); metrics.diskUsage = diskUsage; } catch (_) { metrics.diskUsage = "Unavailable"; } return metrics; } catch (error) {` this.log(`Failed to get system metrics: ${error.message}`); return { error: error.message } } } async getBuildMetrics() { try {" const buildDir = path.join(this.projectRoot, ".next); if (!fs.existsSync(buildDir)) { return { exists: false } } const stats = fs.statSync(buildDir); const buildSize = this.getDirectorySize(buildDir); return {" exists: true," lastModified: stats.mtime, size: buildSize, age: Date.now() - stats.mtime.getTime()} } catch (error) {"` this.log(`Failed to get build metrics: ${error.message}`);" return { error: error.message } } } async getBundleMetrics() { try { const pkgPath = path.join(this.projectRoot, package.json"); if (!fs.existsSync(pkgPath)) {" return { analyzerAvailable: false } } const packageJson = JSON.parse(fs.readFileSync(pkgPath, utf8")); const hasAnalyze = packageJson.scripts && packageJson.scripts.analyze; return hasAnalyze" ? { analyzerAvailable: true, script: npm run analyze" } : {" analyzerAvailable: false, recommendation: "Consider adding bundle analyzer"} } catch (error) {` this.log(`Failed to get bundle metrics: ${error.message}`); return { error: error.message } } } getDirectorySize(dirPath) { let totalSize = 0; try { const stack = [dirPath]; while (stack.length) { const current = stack.pop();" const entries = fs.readdirSync(current, { withFileTypes: true }); for (const entry of entries) { const full = path.join(current, entry.name); if (entry.isDirectory()) { stack.push(full); } else { try { totalSize += fs.statSync(full).size; } catch (_) {} } } } } catch (_) {} return totalSize; } async checkOptimizationNeeded() { if (!this.lastCheck | !this.lastCheck.systemMetrics) return; try { const memory = this.lastCheck.systemMetrics.memory; const memoryUsagePercent = memory.heapTotal ? (memory.heapUsed / memory.heapTotal) * 100 : 0; if (memoryUsagePercent > 80) {" this.log(High memory usage detected, considering optimization.); await this.optimizeMemory(); } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) {" this.log("Build is stale, considering rebuild.); await this.optimizeBuild(); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) { this.log("Large build size detected, considering optimization."); await this.optimizeBuildSize(); } } } catch (error) {` this.log(`Optimization check failed: ${error.message}`); } } async optimizeMemory() { try { if (global.gc) { global.gc(); this.log("Garbage collection performed"); } } catch (error) {` this.log(`Memory optimization failed: ${error.message}`); } } async optimizeBuild() { try { execSync("npm run clean", { cwd: this.projectRoot," stdio: "ignore, timeout: 30000});" execSync("npm run build, { cwd: this.projectRoot,"" stdio: ignore," timeout: 300000});" this.log(Build optimization completed); } catch (error) {"` this.log(`Build optimization failed: ${error.message}`); } } async optimizeBuildSize() { try { const pkg = JSON.parse(" fs.readFileSync(path.join(this.projectRoot, package.json), "utf8") ); if (pkg.scripts && pkg.scripts.analyze) { execSync(npm run analyze", {" cwd: this.projectRoot, stdio: "ignore", timeout: 300000}); this.log("Bundle analysis completed"); } await this.optimizeBuild(); } catch (error) {` this.log(`Build size optimization failed: ${error.message}`); } } async savePerformanceReport() { const report = { lastCheck: this.lastCheck," projectRoot: this.projectRoot," recommendations: this.getPerformanceRecommendations()} try { fs.writeFileSync( this.performanceReportFile, JSON.stringify(report, null, 2) ); } catch (_) {} } getPerformanceRecommendations() { const recommendations = []; if (!this.lastCheck) return recommendations; const metrics = this.lastCheck.systemMetrics; if (metrics && metrics.memory && metrics.memory.heapTotal) { const memoryUsagePercent (metrics.memory.heapUsed / metrics.memory.heapTotal) * 100; if (memoryUsagePercent > 80) { recommendations.push( High memory usage detected. Consider optimizing memory usage." ); } if (memoryUsagePercent > 90) { recommendations.push(" Critical memory usage. Immediate optimization required. ); } } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) { recommendations.push(" "Build is stale. Consider rebuilding for optimal performance. ); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) { recommendations.push( "Large build size detected. Consider code splitting and optimization." ); } } return recommendations; } async reportPerformanceError(error) { try { const errorReport = { timestamp: new Date().toISOString(), error: error.message," stack: error.stack," projectRoot: this.projectRoot} const errorFile = path.join( this.projectRoot, automation/logs/performance-error-report.json" ); fs.writeFileSync(errorFile, JSON.stringify(errorReport, null, 2));" this.log(Performance error reported); } catch (_) {} } async start() { this.isRunning = true;" this.log("Performance Monitor started); await this.checkPerformance(); setInterval(async () => { if (!this.isRunning) return; await this.checkPerformance(); }, this.checkInterval); process.on("SIGTERM", () => { this.log(Received SIGTERM, shutting down gracefully"); this.isRunning = false; process.exit(0); });" process.on(SIGINT, () => {" this.log("Received SIGINT, shutting down gracefully); this.isRunning = false; process.exit(0); }); }}const monitor = new PerformanceMonitor();monitor.start().catch(error => {" console.error("Failed to start performance monitor: , error); process.exit(1);});"`"`

=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD
;
class PerformanceMonitor {;
  constructor() {;
    this.metrics = {;
      "buildTime": 0,
=======
class PerformanceMonitor {}
  constructor() {}
    this.projectRoot = process.cwd();
    this.logFile = path.join(
      this.projectRoot,
      'automation/logs/performance-monitor.log'
    );
    this.performanceReportFile = path.join(
    this.logFile = path.join()
      this.projectRoot,
      'automation/logs/performance-monitor.log'
    );
    this.performanceReportFile = path.join()
      this.projectRoot,
      'automation/logs/performance-report.json'
    );
    this.lastCheck = null;
    this.checkInterval = 300000; // 5 minutes;
    this.isRunning = false;
    this.setupLogging();
    this.log('Performance Monitor initialized');
  };
  setupLogging() {}
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
#!/usr/bin/env node
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

<<<<<<< HEAD
main
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const fs = require('fs');
const path = require(path');
const { execSync } = require('child_process');

<<<<<<< HEAD
#!/usr/bin/env node


main
=======
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class PerformanceMonitor {}
  constructor() {}
    this.projectRoot = process.cwd();
    this.logFile = path.join(
      this.projectRoot,
      'automation/logs/performance-monitor.log)
    );
    this.performanceReportFile = path.join()
    this.logFile = path.join()

    this.lastCheck = null;
    this.checkInterval = 300000; // 5 minutes;
    this.isRunning = false;
    this.setupLogging();
    this.log('Performance Monitor initialized');
  };
  setupLogging() {}
>>>>>>> origin/chore/fix-lint-and-merge


<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
class PerformanceMonitor {
  // TODO: Implement
}
  constructor() {
<<<<<<< HEAD
    this.logsDir = path.join(__dirname, ../logs');
    this.ensureLogsDir();
#!/usr/bin/env node;
  constructor() {
    this.metrics = {
      buildTime: 0,
>>>>>>> merged-prs-20250907-203621
      "bundleSize": 0,
      "memoryUsage": 0,
      "cpuUsage": 0,
      "lastUpdated": new Date().toISOString();
    };
    this.logFile = path.join(__dirname, 'logs', 'performance-monitor.log');
    this.ensureLogDirectory();
  }
<<<<<<< HEAD
;
  ensureLogDirectory() {;
=======
  ensureLogDirectory() {
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {;
      fs.mkdirSync(logDir, { "recursive": true });
    }
  }
;
  log(message, level = 'INFO') {;
    const timestamp = new Date().toISOString();

<<<<<<< HEAD
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5




=======

    this.ensureLogsDir();
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
  }
<<<<<<< HEAD
  ensureLogDirectory() {

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { "recursive": true }
});
    };
  };
  log(message) {}
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }
  log(message, level = 'INFO') {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const timestamp = new Date().toISOString();
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { "recursive": true }
});
    };
  };
  log(message) {}
    const timestamp = new Date().toISOString();
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> merged-prs-20250907-203621
    const logMessage = `[${timestamp}] ${message}\n`;`
    process.stdout.write(logMessage);
    try {}
      fs.appendFileSync(this.logFile, logMessage);
    } catch (_) {}
      // ignore;
    };
  };
  async checkPerformance() {}
    try {}
      this.log('Checking performance metrics...');
      const startTime = Date.now();
      const systemMetrics = await this.getSystemMetrics();
      const buildMetrics = await this.getBuildMetrics();
      const bundleMetrics = await this.getBundleMetrics();
      const endTime = Date.now();
      const checkTime = endTime - startTime;
      this.lastCheck = {}
        "timestamp": new Date().toISOString(),
        checkTime,
        systemMetrics,
        buildMetrics,
        bundleMetrics,
      };
        bundleMetrics};
      this.log(`Performance check completed in ${checkTime}ms`);
      await this.savePerformanceReport();
      await this.checkOptimizationNeeded();
    } catch (error) {}
      this.log(`Performance check "failed": ${error.message}`);
      await this.reportPerformanceError(error);
    };
  };
  async getSystemMetrics() {}
    try {}
      const metrics = {}
        "memory": process.memoryUsage(),
        "uptime": process.uptime(),
        "cpuUsage": process.cpuUsage(),
        "nodeVersion": process.version,
        "platform": process.platform};
  async getSystemMetrics() {
    try {
      const metrics = {
        memory: process.memoryUsage(),
        uptime: process.uptime(),
        cpuUsage: process.cpuUsage(),
        nodeVersion: process.version,
        platform: process.platform,
      };
      try {
        const diskUsage = execSync('df -h .', {
          cwd: this.projectRoot,
          encoding: 'utf8',
          timeout: 10000,
        });
      try {}
        const diskUsage = execSync('df -h .', {})
          "cwd": this.projectRoot,
          "encoding": 'utf8',
          "timeout": 10000}
});
        metrics.diskUsage = diskUsage;
      } catch (_) {}
        metrics.diskUsage = 'Unavailable';
      };
      return metrics;
    } catch (error) {}
      this.log(`Failed to get system "metrics": ${error.message}`);
      return { "error": error.message };
    };
  };
  async getBuildMetrics() {}
    try {}
      const buildDir = path.join(this.projectRoot, '.next');
      if (!fs.existsSync(buildDir)) {}
        return { "exists": false };
      };
      const stats = fs.statSync(buildDir);
      const buildSize = this.getDirectorySize(buildDir);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return {
        exists: true,
        lastModified: stats.mtime,
        size: buildSize,
        age: Date.now() - stats.mtime.getTime()}

<<<<<<< HEAD
<<<<<<< HEAD





=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);


  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });

  log(message, type = 'info') {
origin/cursor/integrate-build-improve-and-re-verify-c7b5

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { "recursive": true }")
});
  log(message) {}
    if (!fs.existsSync(logDir)) {}"

    const timestamp = new Date().toISOString();


    const logMessage = `[${timestamp}] ${message}\n`;`
    process.stdout.write(logMessage);
    try {}
      fs.appendFileSync(this.logFile, logMessage);
    } catch (_) {}
      // ignore;
  async checkPerformance() {}

      const startTime = Date.now();

      const systemMetrics = await this.getSystemMetrics();
      const buildMetrics = await this.getBuildMetrics();
      const bundleMetrics = await this.getBundleMetrics();

      const endTime = Date.now();
      const checkTime = endTime - startTime;

      this.lastCheck = {}
        "timestamp": new Date().toISOString(),"
        checkTime,
        systemMetrics,
        buildMetrics,
        bundleMetrics};
      this.log(`Performance check completed in ${checkTime}ms`);
      await this.savePerformanceReport();
      await this.checkOptimizationNeeded();

      await this.reportPerformanceError(error);
  async getSystemMetrics() {}
      const metrics = {}"
        "memory": process.memoryUsage(),
        "uptime": process.uptime(),
        "cpuUsage": process.cpuUsage(),
        "nodeVersion": process.version,
        "platform": process.platform};"
      try {}"

          "timeout": 10000}"
        metrics.diskUsage = diskUsage;
      } catch (_) {}"
        metrics.diskUsage = 'Unavailable';

      return { "error": error.message };"
  async getBuildMetrics() {}

      if (!fs.existsSync(buildDir)) {}
        return { "exists": false };"
      const stats = fs.statSync(buildDir);
      const buildSize = this.getDirectorySize(buildDir);

main
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);

  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  async monitorPerformance() {
    this.log('⚡ Starting performance monitoring...);
    try {
      // Monitor build time
>>>>>>> merged-prs-20250907-203621
;
  async monitorPerformance() {;
    this.log('⚡ Starting performance monitoring...');
<<<<<<< HEAD
;
    try {;
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  async monitorPerformance() {
    this.log('⚡ Starting performance monitoring...');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    try {
      // Monitor build time
      const buildTime = await this.measureBuildTime();
      this.metrics.buildTime = buildTime;
      // Monitor bundle size
      const bundleSize = await this.measureBundleSize();
      this.metrics.bundleSize = bundleSize;
      // Monitor memory usage
>>>>>>> origin/chore/fix-lint-and-merge
      const memoryUsage = process.memoryUsage();
      this.metrics.memoryUsage = memoryUsage.heapUsed / 1024 / 1024; // MB
      // Monitor CPU usage
      const cpuUsage = process.cpuUsage();
      this.metrics.cpuUsage = cpuUsage.user / 1000000; // seconds
      this.metrics.lastUpdated = new Date().toISOString();
      await this.saveMetrics();
      await this.generatePerformanceReport();
<<<<<<< HEAD
=======
      this.log('Performance monitoring completed');
      return this.metrics;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
      this.log(Performance monitoring completed');
=======
<<<<<<< HEAD
      this.log('Performance monitoring completed');
>>>>>>> origin/chore/fix-lint-and-merge
      return this.metrics;

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    } catch (error) {
      this.log(`Failed to get build metrics: ${error.message}`);
      return { error: error.message }
    }
  }
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  async getBundleMetrics() {
    try {
<<<<<<< HEAD
=======
=======

>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return {}
        exists: true,
        "lastModified": stats.mtime,
        size: buildSize,
        "age": Date.now() - stats.mtime.getTime()}
    } catch (error) {}
      this.log(`Failed to get build metrics: ${error.message}`);
      return { "error": error.message }
    }
  }
  async getBundleMetrics() {}
    try {}
      const pkgPath = path.join(this.projectRoot, 'package.json);
      if (!fs.existsSync(pkgPath)) {}
        return { analyzerAvailable: false }
      }
      const packageJson = JSON.parse(fs.readFileSync(pkgPath, utf8'));
      const hasAnalyze = packageJson.scripts && packageJson.scripts.analyze;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return hasAnalyze
        ? { analyzerAvailable: true, script: 'npm run analyze }
        : {
            analyzerAvailable: false,
            recommendation: Consider adding bundle analyzer'}

  async measureBuildTime() {
<<<<<<< HEAD

=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
    
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
    
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======





















  async monitorPerformance() {"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    try {
<<<<<<< HEAD
      // Build performance
      const buildStart = Date.now();
      await this.runCommand('npm run build, Build performance test');
      const buildTime = Date.now() - buildStart;
      
      // Bundle size analysis
      const distPath = '/workspace/dist;
      let bundleSize = 0;
      if (fs.existsSync(distPath)) {
        bundleSize = this.getDirectorySize(distPath);
      execSync(npm run build', { stdio: 'pipe, cwd: process.cwd() });
      return Date.now() - startTime;


=======
  // TODO: Implement
>>>>>>> merged-prs-20250907-203621
      // Monitor build time;
      const buildTime = await this.measureBuildTime();
      this.metrics.buildTime = buildTime;
;
      // Monitor bundle size;
      const bundleSize = await this.measureBundleSize();
      this.metrics.bundleSize = bundleSize;
;
      // Monitor memory usage;
      const memoryUsage = process.memoryUsage();
      this.metrics.memoryUsage = memoryUsage.heapUsed / 1024 / 1024; // MB;
      // Monitor CPU usage;
      const cpuUsage = process.cpuUsage();
      this.metrics.cpuUsage = cpuUsage.user / 1000000; // seconds;
      this.metrics.lastUpdated = new Date().toISOString();
;
      await this.saveMetrics();
      await this.generatePerformanceReport();
;
      this.log('Performance monitoring completed');
      return this.metrics;
<<<<<<< HEAD
    } catch (error) {;
      this.log(`Performance monitoring "failed": ${error.message}`, 'ERROR');
=======

<<<<<<< HEAD
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a





      return { error: error.message };

<<<<<<< HEAD
<<<<<<< HEAD
=======












>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  async getBundleMetrics() {
  // TODO: Implement

<<<<<<< HEAD
main

=======
  async getBundleMetrics() {
    try {

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      return {}
        "exists": true,
        "lastModified": stats.mtime,
        "size": buildSize,
        "age": Date.now() - stats.mtime.getTime()};"
    } catch (error) {}"
      this.log(`Failed to get build "metrics": ${error.message});
      return { "error": error.message };"
    };
  };
  async getBundleMetrics() {}
    try {}"
      const pkgPath = path.join(this.projectRoot,package.json');
      if (!fs.existsSync(pkgPath)) {}
        return { "analyzerAvailable": false };"
      };"
      const packageJson = JSON.parse(fs.readFileSync(pkgPath,utf8));

      const hasAnalyze = packageJson.scripts && packageJson.scripts.analyze;

<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  async measureBuildTime() {
    const startTime = Date.now();
    try {
      execSync('npm run build', { stdio: 'pipe', cwd: process.cwd() });
      return Date.now() - startTime;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      const buildTime = Date.now() - buildStart;
      // Bundle size analysis;
      const distPath = '/workspace/dist';
      let bundleSize = 0;
      if (fs.existsSync(distPath)) {
        bundleSize = this.getDirectorySize(distPath);
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
  async measureBuildTime() {
<<<<<<< HEAD
main
    
    try {
      execSync(npm run build', { stdio: 'pipe, cwd: process.cwd() });
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    const startTime = Date.now();
    
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      execSync('npm run build', { stdio: 'pipe', cwd: process.cwd() });
>>>>>>> origin/chore/fix-lint-and-merge
      return Date.now() - startTime;

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    } catch (error) {
      this.log(`Failed to get bundle metrics: ${error.message}`);
      return { error: error.message }
    }
  }
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  getDirectorySize(dirPath) {
<<<<<<< HEAD
=======
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return hasAnalyze;
        ? { "analyzerAvailable": true, script: npm run analyze' }
        : {}
            "analyzerAvailable": false,
            recommendation: 'Consider adding bundle analyzer}
    } catch (error) {}
      this.log(`Failed to get bundle "metrics": ${error.message}`);
      return { error: error.message }
    }
  }
  getDirectorySize(dirPath) {}
    let totalSize = 0;
    try {}
      const stack = [dirPath];
      while (stack.length) {}
        const current = stack.pop();
        const entries = fs.readdirSync(current, { "withFileTypes": true }
});
        for (const entry of entries) {}
          const full = path.join(current, entry.name);
          if (entry.isDirectory()) {}
            stack.push(full);
          } else {}
            try {}
              totalSize += fs.statSync(full).size;
            } catch (_) {}
          }
        }
      }
    } catch (_) {}
    return totalSize;
  }
  async checkOptimizationNeeded() {}
    if (!this.lastCheck || !this.lastCheck.systemMetrics) return;
    try {}
      const memory = this.lastCheck.systemMetrics.memory;
      const memoryUsagePercent = memory.heapTotal
        ? (memory.heapUsed / memory.heapTotal) * 100
        : 0;
      if (memoryUsagePercent > 80) {
      const memoryUsagePercent = memory.heapTotal;
        ? (memory.heapUsed / memory.heapTotal) * 100;
        : 0;
      if (memoryUsagePercent > 80) {}
        this.log(High memory usage detected, considering optimization...');
        await this.optimizeMemory();
      }
      if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) {}
        if (this.lastCheck.buildMetrics.age > 3600000) {}
          this.log('Build is stale, considering rebuild...);
          await this.optimizeBuild();
        }
        if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) {}
          this.log(Large build size detected, considering optimization...');
          await this.optimizeBuildSize();
        }
      }
    } catch (error) {}
      this.log(`Optimization check failed: ${error.message}`);
    }
  }
  async optimizeMemory() {}
    try {}
      if (global.gc) {}
        global.gc();
<<<<<<< HEAD
        this.log('Garbage collection performed);

      }
      
      const performance = {}
      
=======
        this.log('Garbage collection performed');
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }
>>>>>>> origin/chore/fix-lint-and-merge
    } catch (error) {
      this.log(`Memory optimization failed: ${error.message}`);
    }
  }
  async optimizeBuild() {
    try {
      execSync(npm run clean', {
        cwd: this.projectRoot,
        stdio: 'ignore,
        timeout: 30000});
      execSync(npm run build', {
        cwd: this.projectRoot,
        stdio: 'ignore,
        timeout: 300000});
      this.log(Build optimization completed');
    } catch (error) {
      this.log(`Build optimization failed: ${error.message}`);
    }
  }
  async optimizeBuildSize() {
    try {
      const pkg = JSON.parse(
        fs.readFileSync(path.join(this.projectRoot, 'package.json), utf8')
      );
      if (pkg.scripts && pkg.scripts.analyze) {
        execSync('npm run analyze, {
          cwd: this.projectRoot,
          stdio: ignore',
          timeout: 300000,

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  async measureBundleSize() {
    try {
      const buildDir = path.join(process.cwd(), '.next);
      if (!fs.existsSync(buildDir)) {
        return 0;
      }
      const getDirSize = dir => {
        let size = 0;
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory()) {
            size += getDirSize(filePath);
          } else {
            size += stat.size;
          }
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        });
        this.log(Bundle analysis completed');
      }
      await this.optimizeBuild();
<<<<<<< HEAD
        });
        this.log('Bundle analysis completed);
      }
      await this.optimizeBuild();
=======
<<<<<<< HEAD
        });
        return size;
      };
      return getDirSize(buildDir);
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
        });
        this.log('Bundle analysis completed');
      }
      await this.optimizeBuild();
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } catch (error) {
      this.log(`Build size optimization failed: ${error.message}`);
    }
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  async savePerformanceReport() {
=======
<<<<<<< HEAD
<<<<<<< HEAD
  async savePerformanceReport() {
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  async saveMetrics() {
    const metricsFile = path.join(
      __dirname,
      reports',
      'performance-metrics.json
    );
    fs.mkdirSync(path.dirname(metricsFile), { recursive: true });
    fs.writeFileSync(metricsFile, JSON.stringify(this.metrics, null, 2));
  }
  async generatePerformanceReport() {
<<<<<<< HEAD
    const report = {
      lastCheck: this.lastCheck,
      projectRoot: this.projectRoot,
      recommendations: this.getPerformanceRecommendations()}
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const report = {
      lastCheck: this.lastCheck,
      projectRoot: this.projectRoot,
      recommendations: this.getPerformanceRecommendations(),
    };
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    try {
      fs.writeFileSync(
        this.performanceReportFile,
        JSON.stringify(report, null, 2)
      );
    } catch (_) {}
  }
  getPerformanceRecommendations() {

    const recommendations = [];
    if (!this.lastCheck) return recommendations;
    const metrics = this.lastCheck.systemMetrics;
    if (metrics && metrics.memory && metrics.memory.heapTotal) {
      const memoryUsagePercent =
        (metrics.memory.heapUsed / metrics.memory.heapTotal) * 100;
      if (memoryUsagePercent > 80) {
        recommendations.push(
          High memory usage detected. Consider optimizing memory usage.'
        );
      }
      if (memoryUsagePercent > 90) {
        recommendations.push(
          'Critical memory usage. Immediate optimization required.
        );
      }
<<<<<<< HEAD
    } catch (error) {
      this.log(`Performance monitoring "failed": ${error.message}`, ERROR');
>>>>>>> merged-prs-20250907-203621
      return null;
    }
    if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) {
      if (this.lastCheck.buildMetrics.age > 3600000) {
        recommendations.push(
          'Build is stale. Consider rebuilding for optimal performance.'
        );
      }
      if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) {
        recommendations.push(
          'Large build size detected. Consider code splitting and optimization.'
        );
      }
    }
=======
<<<<<<< HEAD
    const reportFile = path.join(
      __dirname,
      'reports',
      'performance-report.json'
    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Performance report generated: ${reportFile}`);
  }
  generateRecommendations() {
    const recommendations = [];
    if (this.metrics.buildTime > 60000) {
      // 1 minute
      recommendations.push(
        'Consider optimizing build process - build time is high'
      );
    }
    if (this.metrics.bundleSize > 5000000) {
      // 5MB
      recommendations.push('Consider code splitting - bundle size is large');
    }
    if (this.metrics.memoryUsage > 100) {
      // 100MB
      recommendations.push(
        'Consider memory optimization - high memory usage detected'
      );
    }
    return recommendations;
  }
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {
      fs.writeFileSync(
        this.performanceReportFile,
        JSON.stringify(report, null, 2)
      );
    } catch (_) {}
  }
<<<<<<< HEAD
  getPerformanceRecommendations() {
=======
<<<<<<< HEAD
<<<<<<< HEAD
  getPerformanceRecommendations() {
=======

  generateRecommendations() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======

  generateRecommendations() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    const recommendations = [];
    if (!this.lastCheck) return recommendations;
    const metrics = this.lastCheck.systemMetrics;
    if (metrics && metrics.memory && metrics.memory.heapTotal) {
      const memoryUsagePercent =
        (metrics.memory.heapUsed / metrics.memory.heapTotal) * 100;
      if (memoryUsagePercent > 80) {
        recommendations.push(
          'High memory usage detected. Consider optimizing memory usage.'
        );
      }
      if (memoryUsagePercent > 90) {
        recommendations.push(
          'Critical memory usage. Immediate optimization required.'
        );
      }
    }
    if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) {
      if (this.lastCheck.buildMetrics.age > 3600000) {
        recommendations.push(
          'Build is stale. Consider rebuilding for optimal performance.'
        );
      }
      if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) {
        recommendations.push(
          'Large build size detected. Consider code splitting and optimization.'
        );
      }
    }
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return recommendations;
  }
;
  async measureBuildTime() {;
    const startTime = Date.now();
    try {;
      execSync('npm run build', { "stdio": 'pipe', "cwd": process.cwd() });
      return Date.now() - startTime;
    } catch (error) {;
      return -1; // Build failed;
    }
  }
;
  async measureBundleSize() {;
    try {;
      const buildDir = path.join(process.cwd(), '.next');
      if (!fs.existsSync(buildDir)) {;
        return 0;
      }
;
      const getDirSize = (dir) => {;
        let size = 0;
        const files = fs.readdirSync(dir);
;
        files.forEach(file => {;
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
;
          if (stat.isDirectory()) {;
            size += getDirSize(filePath);
          } else {;
            size += stat.size;
          }
        });
;
        return size;
      };
;
      return getDirSize(buildDir);
    } catch (error) {;
      return 0;
    }
  }

  async saveMetrics() {
    const metricsFile = path.join(
      __dirname,


    );
    fs.mkdirSync(path.dirname(metricsFile), { recursive: true });
    fs.writeFileSync(metricsFile, JSON.stringify(this.metrics, null, 2));
  }
;
  async generatePerformanceReport() {;
    const report = {;
      ...this.metrics,
      "recommendations": this.generateRecommendations();
    };

    const reportFile = path.join(
      __dirname,


    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
;
    this.log(`Performance report "generated": ${reportFile}`);
  }
;
  generateRecommendations() {;
    const recommendations = [];

    if (this.metrics.buildTime > 60000) {
      // 1 minute
      recommendations.push(

      );
    }
;
    if (this.metrics.bundleSize > 5000000) { // 5MB;
      recommendations.push('Consider code splitting - bundle size is large');
    }

    if (this.metrics.memoryUsage > 100) {
      // 100MB
      recommendations.push(

      );
    }
;
    return recommendations;
  async reportPerformanceError(error) {
  // TODO: Implement
      const errorReport = {







        timestamp: new Date().toISOString(),
        buildTime: buildTime,
        bundleSize: bundleSize,
        totalTime: Date.now() - startTime,
        recommendations: []

      };
    } catch (error) {}
      this.log(`Memory optimization "failed": ${error.message});"
    };
  };
  async optimizeBuild() {}
    try {}"
      execSync('npm run clean, {})
        "cwd": this.projectRoot,
        "stdio": ignore,
        "timeout": 30000}"
});"
      execSync('npm run build, {})
        "cwd": this.projectRoot,
        "stdio": ignore,
        "timeout": 300000}"
});"
      this.log('Build optimization completed');
    } catch (error) {}
      this.log(`Build optimization "failed": ${error.message});"
    };
  };

  async optimizeBuildSize() {}
      const pkg = JSON.parse()"

  async savePerformanceReport() {}
    const report = {}"
      "lastCheck": this.lastCheck,
      "projectRoot": this.projectRoot,
      "recommendations": this.getPerformanceRecommendations()};"
      fs.writeFileSync()
        this.performanceReportFile,
        JSON.stringify(report, null, 2);
  getPerformanceRecommendations() {}
    if (metrics && metrics.memory && metrics.memory.heapTotal) {}
      if (memoryUsagePercent > 80) {}
        recommendations.push()"
          'High memory usage detected. Consider optimizing memory usage.

        "projectRoot": this.projectRoot};"
      const errorFile = path.join()
        this.projectRoot,"
        'automation/logs/performance-error-report.json

  async start() {}
    this.isRunning = true
    this.log('Performance Monitor started')
    await this.checkPerformance()
    setInterval(async () => {}
      if (!this.isRunning) return;
    }, this.checkInterval);

      process.exit(0);
    }
});
<<<<<<< HEAD
    process.on('SIGINT', () => {}
=======
  }
}
const monitor = new PerformanceMonitor();
monitor.start().catch(error => {})
  console.error('Failed to start performance monitor": , error);
  process.exit(1);
});
}
<<<<<<< HEAD

<<<<<<< HEAD
}

=======
<<<<<<< HEAD
});
=======
<<<<<<< HEAD
});
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
}

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

}

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Run if called directly
if (require.main === module) {
    const monitor = new PerformanceMonitor(),
    monitor.monitorPerformance().catch(console.error)
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
module.exports = PerformanceMonitor;
=======

module.exports = PerformanceMonitor;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======

<<<<<<< HEAD
module.exports = PerformanceMonitor;
origin/cursor/integrate-build-improve-and-re-verify-c7b5


<<<<<<< HEAD
  constructor() {
    this.projectRoot = process.cwd();
    this.metrics = {}
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    this.metrics = {};
>>>>>>> origin/chore/fix-lint-and-merge
    this.performanceIssues = [];
    this.optimizations = [];


<<<<<<< HEAD
  async measureBuildPerformance() {
    this.log(🏗️ Measuring build performance...');
    
    try {
<<<<<<< HEAD

=======
      const startTime = Date.now();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
main
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
>>>>>>> origin/chore/fix-lint-and-merge
      
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      // Generate recommendations
=======
  // TODO: Implement




      // Generate recommendations;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      if (buildTime > 30000) {
<<<<<<< HEAD
        performance.recommendations.push('Build time is slow - consider optimizing dependencies);
      }
    } catch (error) {
      this.log(`❌ Build performance measurement failed: ${error.message}`, ERROR');
    }
  }

  async measureTestPerformance() {
    this.log('🧪 Measuring test performance...);
    try {
      execSync(npm test -- --passWithNoTests', { 
        cwd: this.projectRoot, 
        stdio: 'pipe 
      });
      const testTime = Date.now() - startTime;
      
      this.metrics.testTime = testTime;
      this.log(`✅ Tests completed in ${testTime}ms`);
    } catch (error) {
      this.log(`❌ Test performance measurement failed: ${error.message}`, ERROR');
    }
  }

  async analyzeBundleSize() {
    this.log('📦 Analyzing bundle size...);
    try {
      const buildDir = path.join(this.projectRoot, .next/static');
      if (fs.existsSync(buildDir)) {
        const bundleSize = this.getDirectorySize(buildDir);
        this.metrics.bundleSize = bundleSize;
        this.log(`📊 Bundle size: ${(bundleSize / 1024 / 1024).toFixed(2)} MB`);
        
        // Check for large files
        const largeFiles = this.findLargeFiles(buildDir);
        if (largeFiles.length > 0) {
          this.recommendations.push('Consider code splitting for large files);
          this.log(`⚠️ Found ${largeFiles.length} large files (>1MB)`);
        }
      }
    } catch (error) {
      this.log(`❌ Bundle analysis failed: ${error.message}`, ERROR');
    }
  }

  async checkMemoryUsage() {
    this.log('🧠 Checking memory usage...);
    try {
      const memUsage = process.memoryUsage();
      this.metrics.memoryUsage = {
        rss: Math.round(memUsage.rss / 1024 / 1024),
        heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024),
        heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024),
        external: Math.round(memUsage.external / 1024 / 1024)
      }
      
      this.log(`📊 Memory usage: ${this.metrics.memoryUsage.heapUsed}MB heap, ${this.metrics.memoryUsage.rss}MB RSS`);
      
      if (this.metrics.memoryUsage.heapUsed > 100) {
        this.recommendations.push(Consider optimizing memory usage - heap usage is high');
      }
    } catch (error) {
      this.log(`❌ Memory check failed: ${error.message}`, 'ERROR);
    }
  }

  getDirectorySize(dirPath) {
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      
      if (stat.isDirectory()) {
        totalSize += this.getDirectorySize(filePath);
      } else {
        totalSize += stat.size;
      }
    }
    
    return totalSize;
  }

  findLargeFiles(dirPath, threshold = 1024 * 1024) { // 1MB threshold
    const largeFiles = [];
    
    const scanDir = (dir) => {
      for (const file of files) {
        
        if (stat.isDirectory()) {
          scanDir(filePath);
        } else if (stat.size > threshold) {
          largeFiles.push({
            path: path.relative(this.projectRoot, filePath),
            size: stat.size
          });
        }
      }
    }
    
    scanDir(dirPath);
    return largeFiles;
  }

  generateRecommendations() {
    // Build time recommendations
    if (this.metrics.buildTime > 60000) { // 1 minute
      this.recommendations.push(Build time is slow - consider optimizing dependencies or using build caching');
    }
    
    // Bundle size recommendations
    if (this.metrics.bundleSize > 5 * 1024 * 1024) { // 5MB
      this.recommendations.push('Bundle size is large - consider code splitting and tree shaking);
    }
    
    // Test time recommendations
    if (this.metrics.testTime > 30000) { // 30 seconds
      this.recommendations.push(Test execution is slow - consider parallel test execution');
    }
    
    // General recommendations
    this.recommendations.push('Enable gzip compression for production);
    this.recommendations.push(Use CDN for static assets');
    this.recommendations.push('Implement lazy loading for components);
  }

  async generateReport() {
    this.log(📊 Generating performance report...');
    
    this.generateRecommendations();
    
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      recommendations: this.recommendations,
      summary: {
        buildTime: this.metrics.buildTime ? `${this.metrics.buildTime}ms` : 'N/A,
        bundleSize: this.metrics.bundleSize ? `${(this.metrics.bundleSize / 1024 / 1024).toFixed(2)}MB` : N/A',
        testTime: this.metrics.testTime ? `${this.metrics.testTime}ms` : 'N/A,
        memoryUsage: this.metrics.memoryUsage ? `${this.metrics.memoryUsage.heapUsed}MB` : N/A'
      }
    }
    
    const reportPath = path.join(this.projectRoot, 'performance-report.json);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`✅ Performance report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log(🎯 Starting Performance Monitoring...');
    this.log('=====================================);
    try {
      await this.measureBuildPerformance();
      await this.measureTestPerformance();
      await this.analyzeBundleSize();
      await this.checkMemoryUsage();
      
      const report = await this.generateReport();
      
      this.log(\n📊 PERFORMANCE MONITORING REPORT');
      this.log('==================================);
      this.log(`Build Time: ${report.summary.buildTime}`);
      this.log(`Bundle Size: ${report.summary.bundleSize}`);
      this.log(`Test Time: ${report.summary.testTime}`);
      this.log(`Memory Usage: ${report.summary.memoryUsage}`);
      
      if (this.recommendations.length > 0) {
        this.log(\n💡 Recommendations:');
        this.recommendations.forEach((rec, index) => {
          this.log(`  ${index + 1}. ${rec}`);
        });
      }
      
      this.log('\n🎉 Performance monitoring completed!);
    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, ERROR');
      process.exit(1);
    }
  }
}

=======
        performance.recommendations.push('Build time is slow - consider optimizing dependencies');

      throw error;

  async runCommand(command, description) {
  // TODO: Implement


    const items = fs.readdirSync(dirPath);
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
        size += this.getDirectorySize(fullPath);
  // TODO: Implement
    return size;

const monitor = new PerformanceMonitor();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
monitor.monitorPerformance().catch(console.error);
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
monitor.start().catch(error => {})
  console.error('Failed to start performance "monitor": , error);
  process.exit(1);
}
});
=======
monitor.run().catch(console.error);
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
monitor.monitorPerformance().catch(console.error);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======



monitor.monitorPerformance().catch(console.error);


  process.exit(1);

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
monitor.run().catch(console.error);



<<<<<<< HEAD
    }
});
    process.on(SIGINT', () => {}
>>>>>>> merged-prs-20250907-203621
      this.log('Received SIGINT, shutting down gracefully')
      this.isRunning = false
      process.exit(0)
})
  }
}
;
// Run if called directly;
if (require.main === module) {;
  const monitor = new PerformanceMonitor();
  monitor.monitorPerformance().catch(console.error);
}
<<<<<<< HEAD
;
module.exports = PerformanceMonitor;
=======
module.exports = PerformanceMonitor;
=======
<<<<<<< HEAD
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======









>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
