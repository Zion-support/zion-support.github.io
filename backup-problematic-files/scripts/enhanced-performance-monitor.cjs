<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');
// Enhanced performance monitoring configuration
const config = {
  "monitoringInterval": 5000, // 5 seconds
  "maxSamples": 100,
  "alertThresholds": {
    cpu: 80,
    "memory": 85,
    "disk": 90,
    "responseTime": 5000
  },
  "enableRealTime": true,
  "enableAlerts": true,
  "enableReporting": true
};
// Performance metrics structure
const performanceMetrics = {
  "timestamp": new Date().toISOString(),
  "sessionId": Date.now().toString(),
  "systemInfo": {
    platform: os.platform(),
    "arch": os.arch(),
    "nodeVersion": process.version,
    "totalMemory": os.totalmem(),
    "freeMemory": os.freemem(),
    "cpus": os.cpus().length,
    "uptime": os.uptime()
  },
  "metrics": {
    cpu: [],
    "memory": [],
    "disk": [],
    "network": [],
    "build": {},
    "runtime": {}
  },
  "alerts": [],
  "recommendations": [],
  "summary": {
    averageCpu: 0,
    "averageMemory": 0,
    "peakCpu": 0,
    "peakMemory": 0,
    "totalAlerts": 0,
    "performanceScore": 0
  }
};
// Utility functions
function log(level, message, data = null) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  if (level === 'error') {
    console.error(logMessage)} else if (level === 'warn') {
    } else {
    }
  if (data && config.enableRealTime) {
    )}
}
// Get system metrics
function getSystemMetrics() {
  const cpus = os.cpus();
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;
  // Calculate CPU usage
  let cpuUsage = 0;
  if (cpus.length > 0) {
    const cpu = cpus[0];
    const total = Object.values(cpu.times).reduce((acc, time) => acc + time, 0);
    const idle = cpu.times.idle;
    cpuUsage = Math.round(100 - (idle / total) * 100)}
  // Calculate memory usage
  const memoryUsage = Math.round((usedMemory / totalMemory) * 100);
  return {
    "cpu": cpuUsage,
    "memory": memoryUsage,
    "memoryUsed": usedMemory,
    "memoryTotal": totalMemory,
    "memoryFree": freeMemory,
    "timestamp": Date.now()
  }}
// Get disk usage
function getDiskUsage() {
  try {
    const output = execSync('df -h /', { "encoding": 'utf8' });
    const lines = output.trim().split('\n');
    const data = lines[1].split(/\s+/);
    return {
      "total": data[1],
      "used": data[2],
      "available": data[3],
      "percentage": parseInt(data[4].replace('%', '')),
      "timestamp": Date.now()
    }} catch (error) {
    log('warn', 'Failed to get disk usage', error.message);
    return { "percentage": 0, "timestamp": Date.now() }}
}
// Get network metrics
function getNetworkMetrics() {
  try {
    const output = execSync('cat /proc/net/dev', { "encoding": 'utf8' });
    const lines = output.trim().split('\n');
    let totalBytes = 0;
    let totalPackets = 0;
    lines.forEach(line => {
      if (line.includes(':')) {
        const parts = line.split(':');
        const data = parts[1].trim().split(/\s+/);
        totalBytes += parseInt(data[0]) + parseInt(data[8]); // RX + TX bytes
        totalPackets += parseInt(data[1]) + parseInt(data[9]); // RX + TX packets
      }
    });
    return {
      totalBytes,
      totalPackets,
      "timestamp": Date.now()
    }} catch (error) {
    log('warn', 'Failed to get network metrics', error.message);
    return { "totalBytes": 0, "totalPackets": 0, "timestamp": Date.now() }}
}
// Monitor build performance
function monitorBuildPerformance() {
  const startTime = Date.now();
  try {
    log('info', 'Starting build performance monitoring');
    // Run build command
    const buildOutput = execSync('npm run build', { 
      "encoding": 'utf8',
      "stdio": 'pipe'
    });
    const endTime = Date.now();
    const duration = endTime - startTime;
    // Analyze build output for performance insights
    const buildMetrics = {
      duration,
      "success": true,
      "outputSize": buildOutput.length,
      "timestamp": new Date().toISOString()
    };
    // Check for performance warnings in build output
    if (buildOutput.includes('warning') || buildOutput.includes('WARN')) {
      buildMetrics.warnings = true}
    if (buildOutput.includes('error') || buildOutput.includes('ERROR')) {
      buildMetrics.errors = true}
    performanceMetrics.metrics.build = buildMetrics;
    log('info', `Build completed in ${duration}ms`);
    return buildMetrics} catch (error) {
    const endTime = Date.now();
    const duration = endTime - startTime;
    const buildMetrics = {
      duration,
      "success": false,
      "error": error.message,
      "timestamp": new Date().toISOString()
    };
    performanceMetrics.metrics.build = buildMetrics;
    log('error', `Build failed after ${duration}ms`, error.message);
    return buildMetrics}
}
// Monitor runtime performance
async function monitorRuntimePerformance() {
  const startTime = Date.now();
  try {
    log('info', 'Starting runtime performance monitoring');
    // Start development server
    const child = require('child_process').spawn('npm', ['run', 'dev'], {
      "stdio": 'pipe',
      "detached": false
    });
    let output = '';
    let errorOutput = '';
    child.stdout.on('data', (data) => {
      output += data.toString()});
    child.stderr.on('data', (data) => {
      errorOutput += data.toString()});
    // Wait for server to start
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        child.kill();
        reject(new Error('Server startup timeout'))}, 30000);
      child.stdout.on('data', (data) => {
        if (data.toString().includes('ready') || data.toString().includes('started')) {
          clearTimeout(timeout);
          resolve()}
      })});
    const endTime = Date.now();
    const startupTime = endTime - startTime;
    // Test server response time
    const responseStart = Date.now();
    try {
      const response = execSync('curl -s -o /dev/null -w "%{time_total}" "http": //localhost:3000', { 
        "encoding": 'utf8',
        "timeout": 10000
      });
      const responseTime = parseFloat(response) * 1000;
      const runtimeMetrics = {
        startupTime,
        responseTime,
        "success": true,
        "timestamp": new Date().toISOString()
      };
      performanceMetrics.metrics.runtime = runtimeMetrics;
      log('info', `Server started in ${startupTime}ms, response "time": ${responseTime}ms`);
      // Clean up
      child.kill();
      return runtimeMetrics} catch (error) {
      const responseTime = Date.now() - responseStart;
      const runtimeMetrics = {
        startupTime,
        responseTime,
        "success": false,
        "error": error.message,
        "timestamp": new Date().toISOString()
      };
      performanceMetrics.metrics.runtime = runtimeMetrics;
      log('error', "Runtime monitoring failed", error.message);
      // Clean up
      child.kill();
      return runtimeMetrics}
  } catch (error) {
    const endTime = Date.now();
    const duration = endTime - startTime;
    const runtimeMetrics = {
      "startupTime": duration,
      "success": false,
      "error": error.message,
      "timestamp": new Date().toISOString()
    };
    performanceMetrics.metrics.runtime = runtimeMetrics;
    log('error', `Runtime monitoring failed after ${duration}ms`, error.message);
    return runtimeMetrics}
}
// Check for performance alerts
function checkAlerts(metrics) {
  const alerts = [];
  if (metrics.cpu > config.alertThresholds.cpu) {
    alerts.push({
      "type": 'cpu',
      "level": 'warning',
      "message": `High CPU usage: ${metrics.cpu}%`,
      "threshold": config.alertThresholds.cpu,
      "value": metrics.cpu,
      "timestamp": new Date().toISOString()
    })}
  if (metrics.memory > config.alertThresholds.memory) {
    alerts.push({
      "type": 'memory',
      "level": 'warning',
      "message": `High memory usage: ${metrics.memory}%`,
      "threshold": config.alertThresholds.memory,
      "value": metrics.memory,
      "timestamp": new Date().toISOString()
    })}
  if (metrics.disk && metrics.disk.percentage > config.alertThresholds.disk) {
    alerts.push({
      "type": 'disk',
      "level": 'warning',
      "message": `High disk usage: ${metrics.disk.percentage}%`,
      "threshold": config.alertThresholds.disk,
      "value": metrics.disk.percentage,
      "timestamp": new Date().toISOString()
    })}
  return alerts}
// Generate performance recommendations
function generateRecommendations() {
  const recommendations = [];
  const { averageCpu, averageMemory, peakCpu, peakMemory } = performanceMetrics.summary;
  // CPU recommendations
  if (averageCpu > 70) {
    recommendations.push({
      "type": 'cpu',
      "priority": 'high',
      "message": 'High average CPU usage detected',
      "action": 'Consider optimizing CPU-intensive operations or upgrading hardware'
    })}
  if (peakCpu > 90) {
    recommendations.push({
      "type": 'cpu',
      "priority": 'critical',
      "message": 'Peak CPU usage exceeded 90%',
      "action": 'Immediate optimization required - check for infinite loops or inefficient algorithms'
    })}
  // Memory recommendations
  if (averageMemory > 80) {
    recommendations.push({
      "type": 'memory',
      "priority": 'high',
      "message": 'High average memory usage detected',
      "action": 'Consider implementing memory optimization techniques or increasing available memory'
    })}
  if (peakMemory > 95) {
    recommendations.push({
      "type": 'memory',
      "priority": 'critical',
      "message": 'Peak memory usage exceeded 95%',
      "action": 'Immediate memory optimization required - check for memory leaks'
    })}
  // Build performance recommendations
  if (performanceMetrics.metrics.build.duration > 60000) { // More than 1 minute
    recommendations.push({
      "type": 'build',
      "priority": 'medium',
      "message": 'Build time is longer than 1 minute',
      "action": 'Consider optimizing build process, using build caching, or parallel builds'
    })}
  // Runtime performance recommendations
  if (performanceMetrics.metrics.runtime.startupTime > 10000) { // More than 10 seconds
    recommendations.push({
      "type": 'runtime',
      "priority": 'medium',
      "message": 'Server startup time is longer than 10 seconds',
      "action": 'Consider optimizing server startup process or using faster development server'
    })}
  if (performanceMetrics.metrics.runtime.responseTime > 1000) { // More than 1 second
    recommendations.push({
      "type": 'runtime',
      "priority": 'high',
      "message": 'Server response time is longer than 1 second',
      "action": 'Consider optimizing server performance, database queries, or network requests'
    })}
  return recommendations}
// Calculate performance score
function calculatePerformanceScore() {
  let score = 100;
  // CPU score
  if (performanceMetrics.summary.averageCpu > 80) {
    score -= 20} else if (performanceMetrics.summary.averageCpu > 60) {
    score -= 10}
  // Memory score
  if (performanceMetrics.summary.averageMemory > 85) {
    score -= 20} else if (performanceMetrics.summary.averageMemory > 70) {
    score -= 10}
  // Build performance score
  if (performanceMetrics.metrics.build.duration > 120000) { // More than 2 minutes
    score -= 15} else if (performanceMetrics.metrics.build.duration > 60000) { // More than 1 minute
    score -= 10}
  // Runtime performance score
  if (performanceMetrics.metrics.runtime.startupTime > 15000) { // More than 15 seconds
    score -= 10}
  if (performanceMetrics.metrics.runtime.responseTime > 2000) { // More than 2 seconds
    score -= 15}
  // Alert penalty
  score -= performanceMetrics.summary.totalAlerts * 5;
  return Math.max(0, Math.min(100, score))}
// Main monitoring function
async function main() {
  try {
    log('info', 'Starting enhanced performance monitoring');
    // Collect system metrics
    const systemMetrics = getSystemMetrics();
    const diskMetrics = getDiskUsage();
    const networkMetrics = getNetworkMetrics();
    // Store metrics
    performanceMetrics.metrics.cpu.push(systemMetrics);
    performanceMetrics.metrics.memory.push(systemMetrics);
    performanceMetrics.metrics.disk.push(diskMetrics);
    performanceMetrics.metrics.network.push(networkMetrics);
    // Check for alerts
    const alerts = checkAlerts({
      "cpu": systemMetrics.cpu,
      "memory": systemMetrics.memory,
      "disk": diskMetrics
    });
    performanceMetrics.alerts.push(...alerts);
    // Monitor build performance
    const buildMetrics = monitorBuildPerformance();
    // Monitor runtime performance
    const runtimeMetrics = await monitorRuntimePerformance();
    // Calculate summary metrics
    const cpuValues = performanceMetrics.metrics.cpu.map(m => m.cpu);
    const memoryValues = performanceMetrics.metrics.memory.map(m => m.memory);
    performanceMetrics.summary.averageCpu = Math.round(cpuValues.reduce((a, b) => a + b, 0) / cpuValues.length);
    performanceMetrics.summary.averageMemory = Math.round(memoryValues.reduce((a, b) => a + b, 0) / memoryValues.length);
    performanceMetrics.summary.peakCpu = Math.max(...cpuValues);
    performanceMetrics.summary.peakMemory = Math.max(...memoryValues);
    performanceMetrics.summary.totalAlerts = performanceMetrics.alerts.length;
    performanceMetrics.summary.performanceScore = calculatePerformanceScore();
    // Generate recommendations
    performanceMetrics.recommendations = generateRecommendations();
    // Display summary
    log('info', 'Enhanced Performance Monitor Summary');
    log('info', '=');
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    log('info', `Average CPU "usage": ${performanceMetrics.summary.averageCpu}%`);
    log('info', `Peak CPU "usage": ${performanceMetrics.summary.peakCpu}%`);
    log('info', `Average memory "usage": ${performanceMetrics.summary.averageMemory}%`);
    log('info', `Peak memory "usage": ${performanceMetrics.summary.peakMemory}%`);
    log('info', `Build "duration": ${performanceMetrics.metrics.build.duration}ms`);
    log('info', `Server startup "time": ${performanceMetrics.metrics.runtime.startupTime}ms`);
    log('info', `Server response "time": ${performanceMetrics.metrics.runtime.responseTime}ms`);
    log('info', `Total "alerts": ${performanceMetrics.summary.totalAlerts}`);
    log('info', `Performance "score": ${performanceMetrics.summary.performanceScore}/100`);
    
    if (performanceMetrics.alerts.length > 0) {
      log('warn', 'Performance "Alerts": ');
      performanceMetrics.alerts.forEach(alert => {
        log('warn', `- [${alert.level.toUpperCase()}] ${alert.message}`)})}
    
    if (performanceMetrics.recommendations.length > 0) {
      log('info', 'Performance "Recommendations": ');
      performanceMetrics.recommendations.forEach(rec => {
        log('info', `- [${rec.priority.toUpperCase()}] ${rec.message}`);
        log('info', `  "Action": ${rec.action}`)})}
    
    // Save performance report
    const reportPath = path.join(process.cwd(), `enhanced-performance-report-${performanceMetrics.sessionId}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(performanceMetrics, null, 2));
    
    log('info', `Enhanced performance report saved "to": enhanced-performance-report-${performanceMetrics.sessionId}.json`);
    
    // Exit with appropriate status
    if (performanceMetrics.summary.performanceScore < 50) {
      log('error', 'Performance score is below 50% - immediate attention required');
      process.exit(1)} else if (performanceMetrics.summary.performanceScore < 80) {
      log('warn', 'Performance score is below 80% - optimization recommended');
      process.exit(0)} else {
      log('info', 'Performance monitoring completed successfully');
      process.exit(0)}
    
  } catch (error) {
    log('error', 'Fatal error in enhanced performance monitor', error.message);
    process.exit(1)}
}

// Run the enhanced performance monitor
<<<<<<< HEAD
main();#!/usr/bin/env node;
=======
main();
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"const os = require("os");"console.log(" Enhanced Performance Monitor v2.0");"console.log("=");/ Enhanced performance monitoring configurationconst config = { monitoringInterval: 5000, / 5 seconds" maxSamples: 100," alertThresholds: { cpu: 80," memory: 85," disk: 90," responseTime: 5000 }," enableRealTime: true," enableAlerts: true," enableReporting: true};/ Performance metrics structureconst performanceMetrics = {" timestamp: new Date().toISOString()," sessionId: Date.now().toString()," systemInfo: { platform: os.platform()," arch: os.arch()," nodeVersion: process.version," totalMemory: os.totalmem()," freeMemory: os.freemem()," cpus: os.cpus().length," uptime: os.uptime() }," metrics: { cpu: []," memory: []," disk: []," network: []," build: {}," runtime: {} }," alerts: []," recommendations: []," summary: { averageCpu: 0," averageMemory: 0," peakCpu: 0," peakMemory: 0," totalAlerts: 0," performanceScore: 0 }};/ Utility functionsfunction log(level, message, data = null) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`; " if (level === "error") {" console.error(logMessage)} else if (level === "warn") { console.warn(logMessage)} else { console.log(logMessage)} if (data && config.enableRealTime) { console.log(JSON.stringify(data, null, 2))}}/ Get system metricsfunction getSystemMetrics() { const cpus = os.cpus(); const totalMemory = os.totalmem(); const freeMemory = os.freemem(); const usedMemory = totalMemory - freeMemory; / Calculate CPU usage let cpuUsage = 0; if (cpus.length > 0) { const cpu = cpus[0]; const total = Object.values(cpu.times).reduce((acc, time) => acc + time, 0); const idle = cpu.times.idle; cpuUsage = Math.round(100 - (idle / total) * 100)} / Calculate memory usage const memoryUsage = Math.round((usedMemory / totalMemory) * 100); return {" cpu: cpuUsage," memory: memoryUsage," memoryUsed: usedMemory," memoryTotal: totalMemory," memoryFree: freeMemory," timestamp: Date.now() }}/ Get disk usagefunction getDiskUsage() { try {"" const output = execSync("df -h /", { encoding: "utf8" });" const lines = output.trim().split("\n"); const data = lines[1].split(/\s+/); return {" total: data[1]," used: data[2]," available: data[3],"" percentage: parseInt(data[4].replace("%", ""))," timestamp: Date.now() }} catch (error) {" log("warn", "Failed to get disk usage", error.message);" return { percentage: 0, timestamp: Date.now() }}}/ Get network metricsfunction getNetworkMetrics() { try {"" const output = execSync("cat /proc/net/dev", { encoding: "utf8" });" const lines = output.trim().split("\n"); let totalBytes = 0; let totalPackets = 0; lines.forEach(line => {" if (line.includes(":")) {" const parts = line.split(":"); const data = parts[1].trim().split(/\s+/); totalBytes += parseInt(data[0]) + parseInt(data[8]); / RX + TX bytes totalPackets += parseInt(data[1]) + parseInt(data[9]); / RX + TX packets } }); return { totalBytes, totalPackets," timestamp: Date.now() }} catch (error) {" log("warn", "Failed to get network metrics", error.message);" return { totalBytes: 0, totalPackets: 0, timestamp: Date.now() }}}/ Monitor build performancefunction monitorBuildPerformance() { const startTime = Date.now(); try {" log("info", "Starting build performance monitoring"); / Run build command" const buildOutput = execSync("npm run build", { "" encoding: "utf8","" stdio: "pipe" }); const endTime = Date.now(); const duration = endTime - startTime; / Analyze build output for performance insights const buildMetrics = { duration," success: true," outputSize: buildOutput.length," timestamp: new Date().toISOString() }; / Check for performance warnings in build output" if (buildOutput.includes("warning") | buildOutput.includes("WARN")) { buildMetrics.warnings = true} " if (buildOutput.includes("error") | buildOutput.includes("ERROR")) { buildMetrics.errors = true} performanceMetrics.metrics.build = buildMetrics; "` log("info", `Build completed in ${duration}ms`); return buildMetrics} catch (error) { const endTime = Date.now(); const duration = endTime - startTime; const buildMetrics = { duration," success: false," error: error.message," timestamp: new Date().toISOString() }; performanceMetrics.metrics.build = buildMetrics; "` log("error", `Build failed after ${duration}ms`, error.message); return buildMetrics}}/ Monitor runtime performanceasync function monitorRuntimePerformance() { const startTime = Date.now(); try {" log("info", "Starting runtime performance monitoring"); / Start development server" const child = require("child_process").spawn("npm", ["run", "dev"], {"" stdio: "pipe"," detached: false }); " let output = "";" let errorOutput = ""; " child.stdout.on("data", (data) => { output += data.toString()}); " child.stderr.on("data", (data) => { errorOutput += data.toString()}); / Wait for server to start await new Promise((resolve, reject) => { const timeout = setTimeout(() => { child.kill();" reject(new Error("Server startup timeout"))}, 30000); " child.stdout.on("data", (data) => {" if (data.toString().includes("ready") | data.toString().includes("started")) { clearTimeout(timeout); resolve()} })}); const endTime = Date.now(); const startupTime = endTime - startTime; / Test server response time const responseStart = Date.now(); try {"" const response = execSync("curl -s -o /dev/null -w "%{time_total}" http: /localhost:3000", { "" encoding: "utf8"," timeout: 10000 }); const responseTime = parseFloat(response) * 1000; const runtimeMetrics = { startupTime, responseTime," success: true," timestamp: new Date().toISOString() }; performanceMetrics.metrics.runtime = runtimeMetrics; ""` log("info", `Server started in ${startupTime}ms, response time: ${responseTime}ms`); / Clean up child.kill(); return runtimeMetrics} catch (error) { const responseTime = Date.now() - responseStart; const runtimeMetrics = { startupTime, responseTime," success: false," error: error.message," timestamp: new Date().toISOString() }; performanceMetrics.metrics.runtime = runtimeMetrics; "" log("error", "Runtime monitoring failed", error.message); / Clean up child.kill(); return runtimeMetrics} } catch (error) { const endTime = Date.now(); const duration = endTime - startTime; const runtimeMetrics = {" startupTime: duration," success: false," error: error.message," timestamp: new Date().toISOString() }; performanceMetrics.metrics.runtime = runtimeMetrics; "` log("error", `Runtime monitoring failed after ${duration}ms`, error.message); return runtimeMetrics}}/ Check for performance alertsfunction checkAlerts(metrics) { const alerts = []; if (metrics.cpu > config.alertThresholds.cpu) { alerts.push({"" type: "cpu","" level: "warning","` message: `High CPU usage: ${metrics.cpu}%`," threshold: config.alertThresholds.cpu," value: metrics.cpu," timestamp: new Date().toISOString() })} if (metrics.memory > config.alertThresholds.memory) { alerts.push({"" type: "memory","" level: "warning","` message: `High memory usage: ${metrics.memory}%`," threshold: config.alertThresholds.memory," value: metrics.memory," timestamp: new Date().toISOString() })} if (metrics.disk && metrics.disk.percentage > config.alertThresholds.disk) { alerts.push({"" type: "disk","" level: "warning","` message: `High disk usage: ${metrics.disk.percentage}%`," threshold: config.alertThresholds.disk," value: metrics.disk.percentage," timestamp: new Date().toISOString() })} return alerts}/ Generate performance recommendationsfunction generateRecommendations() { const recommendations = []; const { averageCpu, averageMemory, peakCpu, peakMemory } = performanceMetrics.summary; / CPU recommendations if (averageCpu > 70) { recommendations.push({"" type: "cpu","" priority: "high","" message: "High average CPU usage detected","" action: "Consider optimizing CPU-intensive operations or upgrading hardware" })} if (peakCpu > 90) { recommendations.push({"" type: "cpu","" priority: "critical","" message: "Peak CPU usage exceeded 90%","" action: "Immediate optimization required - check for infinite loops or inefficient algorithms" })} / Memory recommendations if (averageMemory > 80) { recommendations.push({"" type: "memory","" priority: "high","" message: "High average memory usage detected","" action: "Consider implementing memory optimization techniques or increasing available memory" })} if (peakMemory > 95) { recommendations.push({"" type: "memory","" priority: "critical","" message: "Peak memory usage exceeded 95%","" action: "Immediate memory optimization required - check for memory leaks" })} / Build performance recommendations if (performanceMetrics.metrics.build.duration > 60000) { / More than 1 minute recommendations.push({"" type: "build","" priority: "medium","" message: "Build time is longer than 1 minute","" action: "Consider optimizing build process, using build caching, or parallel builds" })} / Runtime performance recommendations if (performanceMetrics.metrics.runtime.startupTime > 10000) { / More than 10 seconds recommendations.push({"" type: "runtime","" priority: "medium","" message: "Server startup time is longer than 10 seconds","" action: "Consider optimizing server startup process or using faster development server" })} if (performanceMetrics.metrics.runtime.responseTime > 1000) { / More than 1 second recommendations.push({"" type: "runtime","" priority: "high","" message: "Server response time is longer than 1 second","" action: "Consider optimizing server performance, database queries, or network requests" })} return recommendations}/ Calculate performance scorefunction calculatePerformanceScore() { let score = 100; / CPU score if (performanceMetrics.summary.averageCpu > 80) { score -= 20} else if (performanceMetrics.summary.averageCpu > 60) { score -= 10} / Memory score if (performanceMetrics.summary.averageMemory > 85) { score -= 20} else if (performanceMetrics.summary.averageMemory > 70) { score -= 10} / Build performance score if (performanceMetrics.metrics.build.duration > 120000) { / More than 2 minutes score -= 15} else if (performanceMetrics.metrics.build.duration > 60000) { / More than 1 minute score -= 10} / Runtime performance score if (performanceMetrics.metrics.runtime.startupTime > 15000) { / More than 15 seconds score -= 10} if (performanceMetrics.metrics.runtime.responseTime > 2000) { / More than 2 seconds score -= 15} / Alert penalty score -= performanceMetrics.summary.totalAlerts * 5; return Math.max(0, Math.min(100, score))}/ Main monitoring functionasync function main() { try {" log("info", "Starting enhanced performance monitoring"); / Collect system metrics const systemMetrics = getSystemMetrics(); const diskMetrics = getDiskUsage(); const networkMetrics = getNetworkMetrics(); / Store metrics performanceMetrics.metrics.cpu.push(systemMetrics); performanceMetrics.metrics.memory.push(systemMetrics); performanceMetrics.metrics.disk.push(diskMetrics); performanceMetrics.metrics.network.push(networkMetrics); / Check for alerts const alerts = checkAlerts({" cpu: systemMetrics.cpu," memory: systemMetrics.memory," disk: diskMetrics }); performanceMetrics.alerts.push(.alerts); / Monitor build performance const buildMetrics = monitorBuildPerformance(); / Monitor runtime performance const runtimeMetrics = await monitorRuntimePerformance(); / Calculate summary metrics const cpuValues = performanceMetrics.metrics.cpu.map(m => m.cpu); const memoryValues = performanceMetrics.metrics.memory.map(m => m.memory); performanceMetrics.summary.averageCpu = Math.round(cpuValues.reduce((a, b) => a + b, 0) / cpuValues.length); performanceMetrics.summary.averageMemory = Math.round(memoryValues.reduce((a, b) => a + b, 0) / memoryValues.length); performanceMetrics.summary.peakCpu = Math.max(.cpuValues); performanceMetrics.summary.peakMemory = Math.max(.memoryValues); performanceMetrics.summary.totalAlerts = performanceMetrics.alerts.length; performanceMetrics.summary.performanceScore = calculatePerformanceScore(); / Generate recommendations performanceMetrics.recommendations = generateRecommendations(); / Display summary" log("info", "Enhanced Performance Monitor Summary");" log("info", "=");""` log("info", `Average CPU usage: ${performanceMetrics.summary.averageCpu}%`);""` log("info", `Peak CPU usage: ${performanceMetrics.summary.peakCpu}%`);""` log("info", `Average memory usage: ${performanceMetrics.summary.averageMemory}%`);""` log("info", `Peak memory usage: ${performanceMetrics.summary.peakMemory}%`);""` log("info", `Build duration: ${performanceMetrics.metrics.build.duration}ms`);""` log("info", `Server startup time: ${performanceMetrics.metrics.runtime.startupTime}ms`);""` log("info", `Server response time: ${performanceMetrics.metrics.runtime.responseTime}ms`);""` log("info", `Total alerts: ${performanceMetrics.summary.totalAlerts}`);""` log("info", `Performance score: ${performanceMetrics.summary.performanceScore}/100`); if (performanceMetrics.alerts.length > 0) {"" log("warn", "Performance Alerts: "); performanceMetrics.alerts.forEach(alert => {"` log("warn", `- [${alert.level.toUpperCase()}] ${alert.message}`)})} if (performanceMetrics.recommendations.length > 0) {"" log("info", "Performance Recommendations: "); performanceMetrics.recommendations.forEach(rec => {"` log("info", `- [${rec.priority.toUpperCase()}] ${rec.message}`);""` log("info", ` Action: ${rec.action}`)})} / Save performance report` const reportPath = path.join(process.cwd(), `enhanced-performance-report-${performanceMetrics.sessionId}.json`); fs.writeFileSync(reportPath, JSON.stringify(performanceMetrics, null, 2)); ""` log("info", `Enhanced performance report saved to: enhanced-performance-report-${performanceMetrics.sessionId}.json`); / Exit with appropriate status if (performanceMetrics.summary.performanceScore < 50) {" log("error", "Performance score is below 50% - immediate attention required"); process.exit(1)} else if (performanceMetrics.summary.performanceScore < 80) {" log("warn", "Performance score is below 80% - optimization recommended"); process.exit(0)} else {" log("info", "Performance monitoring completed successfully"); process.exit(0)} } catch (error) {" log("error", "Fatal error in enhanced performance monitor", error.message); process.exit(1)}}/ Run the enhanced performance monitormain();""`"`
=======
=======
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/usr/bin/env node;
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const os = require('os')
// console.log(' Enhanced Performance Monitor v2.0')
console.log('=')
  if (level === 'error')
    console.error(logMessage)} else if (level === 'warn')
    const output = execSync('df -h /', { "encoding"})
      "percentage"
    const output = execSync('cat /proc/net/dev', { "encoding"})
      "encoding"
      "stdio"
      "stdio"
      const response = execSync('curl -s -o /dev/null -w "%{time_total}" "http")
        "encoding"
      "type"
      "level"
      "type"
      "level"
      "type"
      "level"
      "type"
      "priority"
      "message"
      "action"
      "type"
      "priority"
      "message"
      "action"
      "type"
      "priority"
      "message"
      "action"
      "type"
      "priority"
      "message"
      "action"
      "type"
      "priority"
      "message"
      "action"
      "type"
      "priority"
      "message"
      "action"
      "type"
      "priority"
      "message"
      "action"
      log('warn', 'Performance "Alerts")
<<<<<<< HEAD
      log('info', 'Performance "Recommendations")
=======
<<<<<<< HEAD
      log('info', 'Performance "Recommendations")
=======
<<<<<<< HEAD
      log('info', 'Performance "Recommendations")
=======
      log('info', 'Performance "Recommendations")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
