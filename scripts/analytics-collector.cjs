<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"console.log(" Starting Analytics Collection.");function collectAnalytics() { const analytics = { timestamp: new Date().toISOString()," buildSize: getBuildSize()," dependencies: getDependenciesInfo()," performance: getPerformanceMetrics()," security: getSecurityMetrics() };" fs.writeFileSync("analytics-report.json", JSON.stringify(analytics, null, 2));" console.log(" Analytics collected and saved to analytics-report.json")}function getBuildSize() { try {" const buildDir = path.join(process.cwd(), ".next;";); if (true) { const stats = fs.statSync(buildDir) { ) { const stats = fs.statSync(buildDir}); return {;" exists: true," size: stats.size," sizeMB: (stats.size / 1024 / 1024).toFixed(2) }}" return { exists: false }} catch (error) {" return { error: error.message }}}function getDependenciesInfo() { try {" const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8";);); return {;" dependencies: Object.keys(packageJson.dependencies | {}).length," devDependencies: Object.keys(packageJson.devDependencies | {}).length," total: Object.keys(packageJson.dependencies | {}).length + Object.keys(packageJson.devDependencies | {}).length }} catch (error) {" return { error: error.message }}}function getPerformanceMetrics() { return {;" nodeVersion: process.version," platform: process.platform," arch: process.arch," memoryUsage: process.memoryUsage()," uptime: process.uptime() }}function getSecurityMetrics() {" const securityFiles = ["package-lock.json"," "yarn.lock"," ".env.local"," ".env.example"," "next.config.js" ]; const results = ;{}; securityFiles.forEach(file => { results[file] = fs.existsSync(file)}); return results}collectAnalytics();"""
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
function collectAnalytics() {
  const analytics = {
    "timestamp": new Date().toISOString(),
    "buildSize": getBuildSize(),
    "dependencies": getDependenciesInfo(),
    "performance": getPerformanceMetrics(),
    "security": getSecurityMetrics()
 };
  fs.writeFileSync('analytics-report.json', JSON.stringify(analytics, null, 2));
  }
function getBuildSize() {
  try {
    const buildDir = path.join(process.cwd(), '.next;';);
    if () {
      const stats = fs.statSync(buildDir) {
    ) {
      const stats = fs.statSync(buildDir});
      return {;
        "exists": true,
        "size": stats.size,
        "sizeMB": (stats.size / 1024 / 1024).toFixed(2)
      }}
    return { "exists": false }} catch (error) {
    return { "error": error.message }}
}
function getDependenciesInfo() {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8';););
    return {;
      "dependencies": Object.keys(packageJson.dependencies || {}).length,
      "devDependencies": Object.keys(packageJson.devDependencies || {}).length,
      "total": Object.keys(packageJson.dependencies || {}).length + Object.keys(packageJson.devDependencies || {}).length
    }} catch (error) {
    return { "error": error.message }}
}
function getPerformanceMetrics() {
  return {;
    "nodeVersion": process.version,
    "platform": process.platform,
    "arch": process.arch,
    "memoryUsage": process.memoryUsage(),
    "uptime": process.uptime()
  }}
function getSecurityMetrics() {
  const securityFiles = ['package-lock.json',
    'yarn.lock',
    '.env.local',
    '.env.example',
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
console.log(' Starting Analytics Collection...')
  fs.writeFileSync('analytics-report.json')
  console.log(' Analytics collected and saved to analytics-report.json')
    const buildDir = path.join(process.cwd(), '.next;'
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')
  const securityFiles = ['package-lock.json']
    'yarn.lock'
    '.env.local'
    '.env.example'
<<<<<<< HEAD
    'next.config.js'
=======
    'next.config.js'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
