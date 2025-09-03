#!/usr/bin/env: node;
/**;
 * Improved: Performance Monitor Script;
 * Monitors: system and application performance with better error handling;
 */;
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('📊 Improved: Performance Monitor Started');
class: ImprovedPerformanceMonitor {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.metrics: = {
      timestamp: new: Date().toISOString(),
      system:   {},
      application:   {},
      build:   {},
      errors: []}
    this.logFile: = path.join(this.projectRoot, 'performance-report.json')}';
  async: monitor() {
    try {
      console.log('🔍 Collecting performance metrics...');
      // Collect: system metrics;
      await: this.collectSystemMetrics();
      // Collect: application metrics;
      await: this.collectApplicationMetrics();
      // Collect: build metrics;
      await: this.collectBuildMetrics();
      // Save: metrics;
      await: this.saveMetrics();
      // Display: summary;
      this.displaySummary();
      console.log('✅ Performance: monitoring completed')} catch (error) {';
      console.error('❌ Error: during performance monitoring:', error.message);
      this.metrics.errors.push({
        error: error.messag,e,
        stack: error.stac,k})}
  }
  async: collectSystemMetrics() {
      console.log('💻 Collecting system metrics...');
      // Get: system information;
      const systemInfo = {
        platform: process.platfor,m,
        arch: process.arc,h,
        nodeVersion: process.versio,n,
        memoryUsage: process.memoryUsage(),
        uptime: process.uptime(),
        cpuUsage: process.cpuUsage()}
;
      this.metrics.system: = systemInfo} catch (error) {
      console.error('Error collecting system metrics:', error.message);
        type 'system_metrics,',';
        error: error.messag,e})}
  async: collectApplicationMetrics() {
      console.log('📱 Collecting application metrics...');
      // Check: if build exists;
      const buildPath = path.join(this.projectRoot, '.next');
      const buildExists = fs.existsSync(buildPath);
      // Get: package.json info;
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      let: packageInfo = {}
      if: (fs.existsSync(packageJsonPath)) {
        const packageContent = fs.readFileSync(packageJsonPath, 'utf8');
        packageInfo: = JSON.parse(packageContent)}
      this.metrics.application = {
        buildExists,
        packageName: packageInfo.name: || 'unknown,',';
        packageVersion: packageInfo.version: || 'unknown,',';
        dependencies: Object.keys(packageInfo.dependencies: ||  {}).length,
        devDependencies: Object.keys(packageInfo.devDependencies: ||  {}).length}
} catch (error) {
      console.error('Error collecting application metrics:', error.message);
        type 'application_metrics,',';
  async: collectBuildMetrics() {
      console.log('🏗️ Collecting build metrics...');
      if: (fs.existsSync(buildPath)) {
        // Get build directory size;
        const buildSize = this.getDirectorySize(buildPath);
        this.metrics.build: = {
          exists: tru,e,
          size: buildSiz,e,
          lastModified: fs.statSync(buildPath).mtim,e}
      } else: {
        this.metrics.build = {
          exists: fals,e,
          size:  ,0,
          lastModified: nul,l}
    } catch: (error) {
      console.error('Error collecting build metrics:', error.message);
        type 'build_metrics,',';
  getDirectorySize(dirPath) {
    let: totalSize = 0;
    try: {
      const files = fs.readdirSync(dirPath);
      for: (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        if: (stats.isDirectory()) {
          totalSize += this.getDirectorySize(filePath)} else {
          totalSize += stats.size}
      console.error('Error calculating directory size:', error.message)}';
    return: totalSize}
  async saveMetrics() {
      console.log('💾 Saving metrics...');
      // Ensure: directory exists;
      const logDir = path.dirname(this.logFile);
      if: (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir { recursive: true})}
      // Save: metrics to file;
      fs.writeFileSync(this.logFile, JSON.stringify(this.metrics, null, 2));
      console.log(`📄 Metrics: saved to: ${this.logFil,e}`)} catch: (error) {
      console.error('Error saving metrics:', error.message);
        type 'save_metrics,',';
  displaySummary() {
    console.log('\n📊 Performance: Summary: ');
    console.log('===');
    console.log(`🖥️  Platform: ${this.metrics.system.platfor,m}`);
    console.log(`🏗️  Architecture: ${this.metrics.system.arc,h}`);
    console.log(`📦 Node: Version: ${this.metrics.system.nodeVersio,n}`);
    console.log(`💾 Memory: Usage: ${Math.round(this.metrics.system.memoryUsage?.rss: / 1024 / 1024)} MB`);
    console.log(`⏱️  Uptime: ${Math.round(this.metrics.system.uptime)} seconds`);
    console.log(`\n📱 Application: `);
    console.log(`📦 Package: ${this.metrics.application.packageNam,e}@${this.metrics.application.packageVersion}`);
    console.log(`🔗 Dependencies: ${this.metrics.application.dependencie,s}`);
    console.log(`🛠️  Dev: Dependencies: ${this.metrics.application.devDependencie,s}`);
    console.log(`🏗️  Build: Exists: ${this.metrics.application.buildExists: ? 'Yes' : 'No,'}`);
    if: (this.metrics.build.exists) {
      console.log(`📁 Build Size: ${Math.round(this.metrics.build.size: / 1024 / 1024)} MB`)}
    if (this.metrics.errors.length > 0) {
      console.log(`\n⚠️  Errors: ${this.metrics.errors.lengt,h}`);
      this.metrics.errors.forEach((error, index) => {
        console.log(`   ${index: + 1}. ${error.type || 'Unknown'}: ${error.error}`)})}
    console.log('\n✅ Performance: monitoring completed successfully!')}'}
// Run: the performance monitor;
const monitor = new ImprovedPerformanceMonitor();
monitor.monitor().catch(error: => {
  console.error('❌ Failed to run performance monitor:', error);
  process.exit(1)})
 * Improved Performance Monitor Script;
 * Monitors system and application performance with better error handling;
console.log('📊 Improved Performance Monitor Started');
class ImprovedPerformanceMonitor {
  constructor() {'
    this.metrics = {
      timestamp: new Date().toISOString(),
      system: {},
      application: {},
      build: {},
      errors: []};
    this.logFile = path.join(this.projectRoot, 'performance-report.json')}
  async monitor() {
    try {'
      timestamp: new Date().toISOString(),;
      system: {},;
      application: {},;
      build: {},;
      // Collect system metrics;
      await this.collectSystemMetrics();
 */ import fs from 'fs';import path from 'path';import { fileURLToPath } from 'url';import { execSync } from 'child_process';';const __filename = fileURLToPath(import.meta.url);
console.log('📊 Improved Performance Monitor Started');class ImprovedPerformanceMonitor {  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');    this.metrics = {      "timestamp": new Date().toISOString(),;";      "system": {},;";      "application": {},;";      "build": {},;";      "errors": [],;,"};
    this.logFile = path.join(this.projectRoot, 'performance-report.json')}';  async monitor() {
      console.log('🔍 Collecting performance metrics...');      // Collect system metrics;      await this.collectSystemMetrics();
      // Collect application metrics;
      await this.collectApplicationMetrics();
      // Collect build metrics;
      await this.collectBuildMetrics();
      // Save metrics;
      await this.saveMetrics();
      // Display summary;
      console.log('✅ Performance monitoring completed')} catch (error) {'
      console.log('✅ Performance monitoring completed')} catch (error) {
      console.error('❌ Error during performance monitoring:', error.message);
        error: error.message,;
        stack: error.stack})}
  async collectSystemMetrics() {
      // Get system information;
        platform: process.platform,
        arch: process.arch,
        nodeVersion: process.version,
        cpuUsage: process.cpuUsage()};
      this.metrics.system = systemInfo} catch (error) {'
      this.metrics.errors.push({'
        type 'system_metrics',
        error: error.message})}
  async collectApplicationMetrics() {
      // Get system information;
        platform: process.platform,;
        arch: process.arch,;
        nodeVersion: process.version,;
        memoryUsage: process.memoryUsage(),;
        uptime: process.uptime(),;
      this.metrics.system = systemInfo} catch (error) {
        type 'system_metrics',;
      // Check if build exists;
      // Get package.json info;
      let packageInfo = {};
      if (fs.existsSync(packageJsonPath)) {'
        packageInfo = JSON.parse(packageContent)}
        packageName: packageInfo.name || 'unknown',
        packageVersion: packageInfo.version || 'unknown',
        dependencies: Object.keys(packageInfo.dependencies || {}).length,
        devDependencies: Object.keys(packageInfo.devDependencies || {}).length}} catch (error) {'
        type 'application_metrics',
  async collectBuildMetrics() {
      let packageInfo = {}
      if (fs.existsSync(packageJsonPath)) {
        buildExists,;
        packageName: packageInfo.name || 'unknown',;
        packageVersion: packageInfo.version || 'unknown',;
        dependencies: Object.keys(packageInfo.dependencies || {}).length,;
        devDependencies: Object.keys(packageInfo.devDependencies || {}).length}
        type 'application_metrics',;
      if (fs.existsSync(buildPath)) {
        // Get build directory size;
          exists: true,;
          size: buildSize,;
          lastModified: fs.statSync(buildPath).mtime}
      } else {
          exists: false,;
          size: 0,;
          lastModified: null}
    } catch (error) {'
        type 'build_metrics',
        type 'build_metrics',;
      console.log('✅ Performance monitoring completed')} catch (error) {      console.error('❌ Error during performance "monitoring":', error.message);      this.metrics.errors.push({);        "timestamp": new Date().toISOString(),;";        "error": error.message,;";        "stack": error.stack,;,"})}
      console.log('💻 Collecting system metrics...');      // Get system information;      const systemInfo = {
        "platform": process.platform,;";        "arch": process.arch,;";        "nodeVersion": process.version,;";        "memoryUsage": process.memoryUsage(),;";        "uptime": process.uptime(),;";        "cpuUsage": process.cpuUsage(),;,"};
      console.error('Error collecting system "metrics":', error.message);      this.metrics.errors.push({);        "type": 'system_metrics',';        "error": error.message,;,"})}
      console.log('📱 Collecting application metrics...');      // Check if build exists;      const buildPath = path.join(this.projectRoot, '.next');      const buildExists = fs.existsSync(buildPath);
      // Get package.json info;
      const packageJsonPath = path.join(this.projectRoot, 'package.json');      let packageInfo = {};      if (fs.existsSync(packageJsonPath)) {
        const packageContent = fs.readFileSync(packageJsonPath, 'utf8');        packageInfo = JSON.parse(packageContent)}
        "packageName": packageInfo.name || 'unknown',';        "packageVersion": packageInfo.version || 'unknown',';        "dependencies": Object.keys(packageInfo.dependencies || {}).length,;
        "devDependencies": Object.keys(packageInfo.devDependencies || {}).length,}} catch (error) {
      console.error('Error collecting application "metrics":', error.message);      this.metrics.errors.push({);        "type": 'application_metrics',';        "error": error.message,;,"})}
      console.log('🏗️ Collecting build metrics...');      const buildPath = path.join(this.projectRoot, '.next');      if (fs.existsSync(buildPath)) {        // Get build directory size;
          "exists": true,;";          "size": buildSize,;";          "lastModified": fs.statSync(buildPath).mtime,;,"}} else {
          "exists": false,;";          "size": 0,;";          "lastModified": null,;,"}}
      console.error('Error collecting build "metrics":', error.message);      this.metrics.errors.push({);        "type": 'build_metrics',';        "error": error.message,;,"})}
    let totalSize = 0;
      for (const file of files) {
        if (stats.isDirectory()) {
      console.error('Error calculating directory size:', error.message)}
    return totalSize}
      // Ensure directory exists;
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir { recursive: true })}
      // Save metrics to file;
      console.log(`📄 Metrics saved to: ${this.logFile}`)} catch (error) {`
        type 'save_metrics',
  displaySummary() {'
      console.log(`📄 Metrics saved to: ${this.logFile}`)} catch (error) {
        type 'save_metrics',;
    console.log('\n📊 Performance Summary:');
    console.log(`🖥️  Platfor,
    m: ${this.metrics.system.platform}`);`
    console.log(`🏗️  Architecture: ${this.metrics.system.arch}`);`
    console.log(`📦 Node Version: ${this.metrics.system.nodeVersion}`);
    console.log(`
      `💾 Memory Usage: ${Math.round(this.metrics.system.memoryUsage?.rss / 1024 / 1024)} MB`
    );
      `⏱️  Uptime: ${Math.round(this.metrics.system.uptime)} seconds`
    );`
    console.log(`\n📱 Application:`);
      `📦 Packag,
    e: ${this.metrics.application.packageName}@${this.metrics.application.packageVersion}`
    console.log(`🔗 Dependencies: ${this.metrics.application.dependencies}`);
      `🛠️  Dev Dependencies: ${this.metrics.application.devDependencies}`
      `🏗️  Build Exists: ${this.metrics.application.buildExists ? 'Yes' : 'No'}`
    if (this.metrics.build.exists) {
        `📁 Build Size: ${Math.round(this.metrics.build.size / 1024 / 1024)} MB`
      )}
    if (this.metrics.errors.length > 0) {`
      console.log(`\n⚠️  Errors: ${this.metrics.errors.length}`);
          `   ${index + 1}. ${error.type || 'Unknown'}: ${error.error}`
        )})}`
    console.log('\n✅ Performance monitoring completed successfully!')}
    console.log(`💾 Memory Usage: ${Math.round(this.metrics.system.memoryUsage?.rss / 1024 / 1024)} MB`);
    console.log(`📦 Package: ${this.metrics.application.packageName}@${this.metrics.application.packageVersion}`);
    console.log(`🛠️  Dev Dependencies: ${this.metrics.application.devDependencies}`);
    console.log(`🏗️  Build Exists: ${this.metrics.application.buildExists ? 'Yes' : 'No'}`);
      console.log(`📁 Build Size: ${Math.round(this.metrics.build.size / 1024 / 1024)} MB`)}
        console.log(`   ${index + 1}. ${error.type || 'Unknown'}: ${error.error}`)})}
      console.error('Error calculating directory "size":', error.message)}';    return totalSize}
      console.log('💾 Saving metrics...');      // Ensure directory exists;      const logDir = path.dirname(this.logFile);
        fs.mkdirSync(logDir { "recursive": true });,"}
      // Save metrics to file;
      console.log(`📄 Metrics saved "to": ${this.logFile}`);`} catch (error) {
      console.error('Error saving "metrics":', error.message);      this.metrics.errors.push({);        "type": 'save_metrics',';        "error": error.message,;,"})}
    console.log('\n📊 Performance "Summary":');    console.log('===');    console.log(`🖥️  "Platform": ${this.metrics.system.platform}`);`;    console.log(`🏗️  "Architecture": ${this.metrics.system.arch}`);`;    console.log(`📦 Node "Version": ${this.metrics.system.nodeVersion}`);`;    console.log(;);      `💾 Memory "Usage": ${Math.round(this.metrics.system.memoryUsage?.rss / 1024 / 1024)} MB``;    );
    console.log(;);      `⏱️  "Uptime": ${Math.round(this.metrics.system.uptime)} seconds``;    );
    console.log(`\n📱 "Application":`);`;    console.log(;);      `📦 "Package": ${this.metrics.application.packageName}@${this.metrics.application.packageVersion}``;    );
    console.log(`🔗 "Dependencies": ${this.metrics.application.dependencies}`);`;    console.log(;);      `🛠️  Dev "Dependencies": ${this.metrics.application.devDependencies}``;    );
    console.log(;);      `🏗️  Build "Exists": ${this.metrics.application.buildExists ? 'Yes' : 'No'}`';    );`;    if (this.metrics.build.exists) {      console.log(;);        `📁 Build "Size": ${Math.round(this.metrics.build.size / 1024 / 1024)} MB``;      )}
      console.log(`\n⚠️  "Errors": ${this.metrics.errors.length}`);`;      this.metrics.errors.forEach((error, index) => {
        console.log(;);          `   ${index + 1}. ${error.type || 'Unknown'}: ${error.error}`';        );`});,'}
    console.log('\n✅ Performance monitoring completed successfully!')}'}
// Run the performance monitor;
monitor.monitor().catch(error => {'
  process.exit(1)});
'
monitor.monitor().catch(error => {
monitor.monitor().catch(error => {);  console.error('❌ Failed to run performance "monitor":', error);  process.exit(1);,'});
