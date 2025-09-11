#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class LogAnalyzer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'log-analysis-reports');
    this.ensureDirectories()}
  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { "recursive": true })}
  }
  log(message) {
    const timestamp = new Date().toISOString();
    }
  async analyzeBuildLogs() {
    this.log('🔍 Analyzing build logs...');
    try {
      const logFiles = this.findLogFiles();
      const buildLogs = logFiles.filter(file => 
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class LogAnalyzer { constructor() { this.projectRoot = process.cwd();" this.reportsDir = path.join(this.projectRoot, "log-analysis-reports"); this.ensureDirectories()} ensureDirectories() { if (!fs.existsSync(this.reportsDir)) { fs.mkdirSync(this.reportsDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString(); console.log(`[${timestamp}] ${message}`)} async analyzeBuildLogs() {" this.log(" Analyzing build logs."); try { const logFiles = this.findLogFiles(); const buildLogs = logFiles.filter(file => " file.includes("build") | file.includes("webpack") | file.includes("next") ); let totalBuilds = 0; let successfulBuilds = 0; let failedBuilds = 0; const buildTimes = []; for (const logFile of buildLogs) { try {" const content = fs.readFileSync(logFile, "utf8");" const lines = content.split("\n"); for (const line of lines) {" if (line.includes("Build completed") | line.includes("Compiled successfully")) { totalBuilds++; successfulBuilds++; / Extract build time if available const timeMatch = line.match(/(\d+)ms/); if (timeMatch) { buildTimes.push(parseInt(timeMatch[1]))}" } else if (line.includes("Build failed") | line.includes("Compilation failed")) { totalBuilds++; failedBuilds++} } } catch (error) {" / Skip files that can"t be read } } const averageBuildTime = buildTimes.length > 0 ? buildTimes.reduce((a, b) => a + b, 0) / buildTimes.length : 0;"` this.log(` Total builds: ${totalBuilds}`);"` this.log(` Successful builds: ${successfulBuilds}`);"` this.log(` Failed builds: ${failedBuilds}`);"` this.log(` Average build time: ${Math.round(averageBuildTime)}ms`); return {" total: totalBuilds," successful: successfulBuilds," failed: failedBuilds," averageBuildTime: Math.round(averageBuildTime)," successRate: totalBuilds > 0 ? (successfulBuilds / totalBuilds) * 100 : 0 }} catch (error) {"` this.log(` Build logs analysis failed: ${error.message}`);" return { error: error.message }} } async analyzeErrorLogs() {" this.log(" Analyzing error logs."); try { const logFiles = this.findLogFiles(); const errorLogs = logFiles.filter(file => " file.includes("error") | file.includes("stderr") | file.includes("crash") ); const errors = []; const errorTypes = new Map(); const errorFiles = new Map(); for (const logFile of errorLogs) { try {" const content = fs.readFileSync(logFile, "utf8");" const lines = content.split("\n"); for (const line of lines) {"" if (line.includes("Error: ") | line.includes("error:") | line.includes("ERROR")) { errors.push({ file: path.relative(this.projectRoot, logFile)," line: line.trim()," timestamp: this.extractTimestamp(line) }); / Categorize error types const errorType = this.categorizeError(line); errorTypes.set(errorType, (errorTypes.get(errorType) | 0) + 1); / Track errors by file const fileName = path.relative(this.projectRoot, logFile); errorFiles.set(fileName, (errorFiles.get(fileName) | 0) + 1)} } } catch (error) {" / Skip files that can"t be read } }"` this.log(` Total errors: ${errors.length}`);"` this.log(` Error types: ${errorTypes.size}`);"` this.log(` Files with errors: ${errorFiles.size}`); return {" total: errors.length," types: Object.fromEntries(errorTypes)," files: Object.fromEntries(errorFiles)," errors: errors.slice(0, 100) / Limit to first 100 errors }} catch (error) {"` this.log(` Error logs analysis failed: ${error.message}`);" return { error: error.message }} } async analyzePerformanceLogs() {" this.log(" Analyzing performance logs."); try { const logFiles = this.findLogFiles(); const performanceLogs = logFiles.filter(file => " file.includes("performance") | file.includes("timing") | file.includes("metrics") ); const metrics = {" responseTimes: []," memoryUsage: []," cpuUsage: []," requestCounts: [] }; for (const logFile of performanceLogs) { try {" const content = fs.readFileSync(logFile, "utf8");" const lines = content.split("\n"); for (const line of lines) { / Extract response times" const responseTimeMatch = line.match(/response time: (\d+)ms/i); if (responseTimeMatch) { metrics.responseTimes.push(parseInt(responseTimeMatch[1]))} / Extract memory usage" const memoryMatch = line.match(/memory: (\d+)MB/i); if (memoryMatch) { metrics.memoryUsage.push(parseInt(memoryMatch[1]))} / Extract CPU usage" const cpuMatch = line.match(/cpu: (\d+)%/i); if (cpuMatch) { metrics.cpuUsage.push(parseInt(cpuMatch[1]))} / Extract request counts" const requestMatch = line.match(/requests: (\d+)/i); if (requestMatch) { metrics.requestCounts.push(parseInt(requestMatch[1]))} } } catch (error) {" / Skip files that can"t be read } } const averageResponseTime = metrics.responseTimes.length > 0 ? metrics.responseTimes.reduce((a, b) => a + b, 0) / metrics.responseTimes.length : 0; const averageMemoryUsage = metrics.memoryUsage.length > 0 ? metrics.memoryUsage.reduce((a, b) => a + b, 0) / metrics.memoryUsage.length : 0; const averageCpuUsage = metrics.cpuUsage.length > 0 ? metrics.cpuUsage.reduce((a, b) => a + b, 0) / metrics.cpuUsage.length : 0;"` this.log(` Average response time: ${Math.round(averageResponseTime)}ms`);"` this.log(` Average memory usage: ${Math.round(averageMemoryUsage)}MB`);"` this.log(` Average CPU usage: ${Math.round(averageCpuUsage)}%`); return {" averageResponseTime: Math.round(averageResponseTime)," averageMemoryUsage: Math.round(averageMemoryUsage)," averageCpuUsage: Math.round(averageCpuUsage)," totalRequests: metrics.requestCounts.reduce((a, b) => a + b, 0)," dataPoints: { responseTimes: metrics.responseTimes.length," memoryUsage: metrics.memoryUsage.length," cpuUsage: metrics.cpuUsage.length } }} catch (error) {"` this.log(` Performance logs analysis failed: ${error.message}`);" return { error: error.message }} } async analyzeAccessLogs() {" this.log(" Analyzing access logs."); try { const logFiles = this.findLogFiles(); const accessLogs = logFiles.filter(file => " file.includes("access") | file.includes("http") | file.includes("request") ); const requests = []; const statusCodes = new Map(); const userAgents = new Map(); const ipAddresses = new Map(); for (const logFile of accessLogs) { try {" const content = fs.readFileSync(logFile, "utf8");" const lines = content.split("\n"); for (const line of lines) {" if (line.includes("GET") | line.includes("POST") | line.includes("PUT") | line.includes("DELETE")) { requests.push({" file: path.relative(this.projectRoot, logFile)," line: line.trim()," timestamp: this.extractTimestamp(line) }); / Extract status code const statusMatch = line.match(/\s(\d{3})\s/); if (statusMatch) { const status = statusMatch[1]; statusCodes.set(status, (statusCodes.get(status) | 0) + 1)} / Extract user agent" const userAgentMatch = line.match(/"(.*?)"/); if (userAgentMatch) { const userAgent = userAgentMatch[1]; userAgents.set(userAgent, (userAgents.get(userAgent) | 0) + 1)} / Extract IP address const ipMatch = line.match(/^(\d+\.\d+\.\d+\.\d+)/); if (ipMatch) { const ip = ipMatch[1]; ipAddresses.set(ip, (ipAddresses.get(ip) | 0) + 1)} } } } catch (error) {" / Skip files that can"t be read } }"` this.log(` Total requests: ${requests.length}`);"` this.log(` Status codes: ${statusCodes.size}`);"` this.log(` User agents: ${userAgents.size}`);"` this.log(` IP addresses: ${ipAddresses.size}`); return {" total: requests.length," statusCodes: Object.fromEntries(statusCodes)," userAgents: Object.fromEntries(userAgents)," ipAddresses: Object.fromEntries(ipAddresses)," requests: requests.slice(0, 100) / Limit to first 100 requests }} catch (error) {"` this.log(` Access logs analysis failed: ${error.message}`);" return { error: error.message }} } findLogFiles() { const logFiles = [];" const logExtensions = [".log", ".txt", ".out", ".err"]; const scanDirectory = (dir) => { try { const files = fs.readdirSync(dir); files.forEach(file => { const filePath = path.join(dir, file); const stats = fs.statSync(filePath); " if (stats.isDirectory() && !file.startsWith(".") && file !== "node_modules") { scanDirectory(filePath)} else if (stats.isFile()) { const ext = path.extname(file);" if (logExtensions.includes(ext) | file.includes("log")) { logFiles.push(filePath)} } })} catch (error) {" / Skip directories that can"t be read } }; scanDirectory(this.projectRoot); return logFiles} extractTimestamp(line) { const timestampMatch = line.match(/(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})/); return timestampMatch ? timestampMatch[1] : null} categorizeError(line) {" if (line.includes("TypeError")) return "TypeError";" if (line.includes("ReferenceError")) return "ReferenceError";" if (line.includes("SyntaxError")) return "SyntaxError";" if (line.includes("NetworkError")) return "NetworkError";" if (line.includes("TimeoutError")) return "TimeoutError";" if (line.includes("ValidationError")) return "ValidationError";" if (line.includes("DatabaseError")) return "DatabaseError";" if (line.includes("AuthenticationError")) return "AuthenticationError";" if (line.includes("PermissionError")) return "PermissionError";" if (line.includes("NotFoundError")) return "NotFoundError";" return "Other"} async generateLogAnalysisReport() {" this.log(" Generating log analysis report."); const report = {" timestamp: new Date().toISOString()," analysis: { build: await this.analyzeBuildLogs()," errors: await this.analyzeErrorLogs()," performance: await this.analyzePerformanceLogs()," access: await this.analyzeAccessLogs() } }; / Generate recommendations report.recommendations = this.generateRecommendations(report.analysis);` const reportFile = path.join(this.reportsDir, `log-analysis-report-${Date.now()}.json`); fs.writeFileSync(reportFile, JSON.stringify(report, null, 2)); "` this.log(` Log analysis report generated: ${reportFile}`); return report} generateRecommendations(analysis) { const recommendations = []; if (analysis.build && analysis.build.successRate < 90) { recommendations.push({"" type: "build_reliability","" priority: "high","` message: `Build success rate is ${analysis.build.successRate.toFixed(1)}%. Improve build reliability.`,"" impact: "Reduces deployment failures" })} if (analysis.build && analysis.build.averageBuildTime > 120000) { / 2 minutes recommendations.push({"" type: "build_performance","" priority: "medium","` message: `Average build time is ${Math.round(analysis.build.averageBuildTime / 1000)}s. Optimize build process.`,"" impact: "Improves development efficiency" })} if (analysis.errors && analysis.errors.total > 100) { recommendations.push({"" type: "error_reduction","" priority: "high","` message: `Found ${analysis.errors.total} errors in logs. Implement better error handling.`,"" impact: "Improves application stability" })} if (analysis.performance && analysis.performance.averageResponseTime > 1000) { / 1 second recommendations.push({"" type: "performance_optimization","" priority: "medium","` message: `Average response time is ${analysis.performance.averageResponseTime}ms. Optimize performance.`,"" impact: "Improves user experience" })} if (analysis.performance && analysis.performance.averageMemoryUsage > 500) { / 500MB recommendations.push({"" type: "memory_optimization","" priority: "medium","` message: `Average memory usage is ${analysis.performance.averageMemoryUsage}MB. Optimize memory usage.`,"" impact: "Reduces resource consumption" })}" if (analysis.access && analysis.access.statusCodes["500"]) { recommendations.push({"" type: "server_errors","" priority: "high",""` message: `Found ${analysis.access.statusCodes["500"]} server errors. Fix server-side issues.`,"" impact: "Improves application reliability" })} return recommendations} async run() {" this.log(" Starting Log Analyzer."); try { const report = await this.generateLogAnalysisReport(); " this.log(" Log analysis completed!");"` this.log(` Build success rate: ${report.analysis.build.successRate | 0}%`);"` this.log(` Total errors: ${report.analysis.errors.total | 0}`);"` this.log(` Average response time: ${report.analysis.performance.averageResponseTime | 0}ms`);"` this.log(` Total requests: ${report.analysis.access.total | 0}`);"` this.log(` Recommendations: ${report.recommendations.length}`); return report} catch (error) {"` this.log(` Log analysis failed: ${error.message}`); throw error} }}/ Run the analyzer if this file is executed directlyif (require.main === module) { const analyzer = new LogAnalyzer(); analyzer.run() .then((report) => {" console.log("\n Log Analyzer completed successfully!");"` console.log(` Build success rate: ${report.analysis.build.successRate | 0}%`);"` console.log(` Recommendations: ${report.recommendations.length}`); process.exit(0)}) .catch((error) => {"" console.error("\n Log Analyzer failed: ", error.message); process.exit(1)})}module.exports = LogAnalyzer;'"`'"`
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.reportsDir = path.join(this.projectRoot, 'log-analysis-reports')
    this.log(' Analyzing build logs...')
        file.includes('build') || file.includes('webpack') || file.includes('next')
          const content = fs.readFileSync(logFile, 'utf8')
          const lines = content.split('\n')
            if (line.includes('Build completed') || line.includes('Compiled successfully')
            } else if (line.includes('Build failed') || line.includes('Compilation failed')
          // Skip files that can'
    this.log(' Analyzing error logs...')
        file.includes('error') || file.includes('stderr') || file.includes('crash')
      );
      const errors = [];
      const errorTypes = new Map();
      const errorFiles = new Map();
      for (const logFile of errorLogs) {
        try {
          const content = fs.readFileSync(logFile, 'utf8');
          const lines = content.split('\n');
          for (const line of lines) {
            if (line.includes('"Error": ') || line.includes('error:') || line.includes('ERROR')) {
              errors.push({
                file: path.relative(this.projectRoot, logFile),
                "line": line.trim(),
                "timestamp": this.extractTimestamp(line)
              });
              // Categorize error types
              const errorType = this.categorizeError(line);
              errorTypes.set(errorType, (errorTypes.get(errorType) || 0) + 1);
              // Track errors by file
              const fileName = path.relative(this.projectRoot, logFile);
              errorFiles.set(fileName, (errorFiles.get(fileName) || 0) + 1)}
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
      this.log(`🔍 Total "errors": ${errors.length}`);
      this.log(`🔍 Error "types": ${errorTypes.size}`);
      this.log(`🔍 Files with "errors": ${errorFiles.size}`);
      return {
        "total": errors.length,
        "types": Object.fromEntries(errorTypes),
        "files": Object.fromEntries(errorFiles),
        "errors": errors.slice(0, 100) // Limit to first 100 errors
      }} catch (error) {
      this.log(`❌ Error logs analysis "failed": ${error.message}`);
      return { "error": error.message }}
  }
  async analyzePerformanceLogs() {
    this.log('🔍 Analyzing performance logs...');
    try {
      const logFiles = this.findLogFiles();
      const performanceLogs = logFiles.filter(file => 
        file.includes('performance') || file.includes('timing') || file.includes('metrics')
      );
      const metrics = {
        "responseTimes": [],
        "memoryUsage": [],
        "cpuUsage": [],
        "requestCounts": []
      };
      for (const logFile of performanceLogs) {
        try {
          const content = fs.readFileSync(logFile, 'utf8');
          const lines = content.split('\n');
          for (const line of lines) {
            // Extract response times
            const responseTimeMatch = line.match(/response "time": (\d+)ms/i);
            if (responseTimeMatch) {
              metrics.responseTimes.push(parseInt(responseTimeMatch[1]))}
            // Extract memory usage
            const memoryMatch = line.match(/"memory": (\d+)MB/i);
            if (memoryMatch) {
              metrics.memoryUsage.push(parseInt(memoryMatch[1]))}
            // Extract CPU usage
            const cpuMatch = line.match(/"cpu": (\d+)%/i);
            if (cpuMatch) {
              metrics.cpuUsage.push(parseInt(cpuMatch[1]))}
            // Extract request counts
            const requestMatch = line.match(/"requests": (\d+)/i);
            if (requestMatch) {
              metrics.requestCounts.push(parseInt(requestMatch[1]))}
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
      const averageResponseTime = metrics.responseTimes.length > 0 ? 
        metrics.responseTimes.reduce((a, b) => a + b, 0) / metrics.responseTimes.length : 0;
      const averageMemoryUsage = metrics.memoryUsage.length > 0 ? 
        metrics.memoryUsage.reduce((a, b) => a + b, 0) / metrics.memoryUsage.length : 0;
      const averageCpuUsage = metrics.cpuUsage.length > 0 ? 
        metrics.cpuUsage.reduce((a, b) => a + b, 0) / metrics.cpuUsage.length : 0;
      this.log(`🔍 Average response "time": ${Math.round(averageResponseTime)}ms`);
      this.log(`🔍 Average memory "usage": ${Math.round(averageMemoryUsage)}MB`);
      this.log(`🔍 Average CPU "usage": ${Math.round(averageCpuUsage)}%`);
      return {
        "averageResponseTime": Math.round(averageResponseTime),
        "averageMemoryUsage": Math.round(averageMemoryUsage),
        "averageCpuUsage": Math.round(averageCpuUsage),
        "totalRequests": metrics.requestCounts.reduce((a, b) => a + b, 0),
        "dataPoints": {
          responseTimes: metrics.responseTimes.length,
          "memoryUsage": metrics.memoryUsage.length,
          "cpuUsage": metrics.cpuUsage.length
        }
      }} catch (error) {
      this.log(`❌ Performance logs analysis "failed": ${error.message}`);
      return { "error": error.message }}
  }
  async analyzeAccessLogs() {
    this.log('🔍 Analyzing access logs...');
    try {
      const logFiles = this.findLogFiles();
      const accessLogs = logFiles.filter(file => 
        file.includes('access') || file.includes('http') || file.includes('request')
      );
      const requests = [];
      const statusCodes = new Map();
      const userAgents = new Map();
      const ipAddresses = new Map();
      for (const logFile of accessLogs) {
        try {
          const content = fs.readFileSync(logFile, 'utf8');
          const lines = content.split('\n');
          for (const line of lines) {
            if (line.includes('GET') || line.includes('POST') || line.includes('PUT') || line.includes('DELETE')) {
              requests.push({
                "file": path.relative(this.projectRoot, logFile),
                "line": line.trim(),
                "timestamp": this.extractTimestamp(line)
              });
              // Extract status code
              const statusMatch = line.match(/\s(\d{3})\s/);
              if (statusMatch) {
                const status = statusMatch[1];
                statusCodes.set(status, (statusCodes.get(status) || 0) + 1)}
              // Extract user agent
              const userAgentMatch = line.match(/"(.*?)"/);
              if (userAgentMatch) {
                const userAgent = userAgentMatch[1];
                userAgents.set(userAgent, (userAgents.get(userAgent) || 0) + 1)}
              // Extract IP address
              const ipMatch = line.match(/^(\d+\.\d+\.\d+\.\d+)/);
              if (ipMatch) {
                const ip = ipMatch[1];
                ipAddresses.set(ip, (ipAddresses.get(ip) || 0) + 1)}
            }
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
      this.log(`🔍 Total "requests": ${requests.length}`);
      this.log(`🔍 Status "codes": ${statusCodes.size}`);
      this.log(`🔍 User "agents": ${userAgents.size}`);
      this.log(`🔍 IP "addresses": ${ipAddresses.size}`);
      return {
        "total": requests.length,
        "statusCodes": Object.fromEntries(statusCodes),
        "userAgents": Object.fromEntries(userAgents),
        "ipAddresses": Object.fromEntries(ipAddresses),
        "requests": requests.slice(0, 100) // Limit to first 100 requests
      }} catch (error) {
      this.log(`❌ Access logs analysis "failed": ${error.message}`);
      return { "error": error.message }}
  }
  findLogFiles() {
    const logFiles = [];
    const logExtensions = ['.log', '.txt', '.out', '.err'];
    const scanDirectory = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          if (stats.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            scanDirectory(filePath)} else if (stats.isFile()) {
            const ext = path.extname(file);
            if (logExtensions.includes(ext) || file.includes('log')) {
              logFiles.push(filePath)}
          }
        })} catch (error) {
        // Skip directories that can't be read
      }
    };
    scanDirectory(this.projectRoot);
    return logFiles}
  extractTimestamp(line) {
    const timestampMatch = line.match(/(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})/);
    return timestampMatch ? timestampMatch[1] : null}
  categorizeError(line) {
    if (line.includes('TypeError')) return 'TypeError';
    if (line.includes('ReferenceError')) return 'ReferenceError';
    if (line.includes('SyntaxError')) return 'SyntaxError';
    if (line.includes('NetworkError')) return 'NetworkError';
    if (line.includes('TimeoutError')) return 'TimeoutError';
    if (line.includes('ValidationError')) return 'ValidationError';
    if (line.includes('DatabaseError')) return 'DatabaseError';
    if (line.includes('AuthenticationError')) return 'AuthenticationError';
    if (line.includes('PermissionError')) return 'PermissionError';
    if (line.includes('NotFoundError')) return 'NotFoundError';
    return 'Other'}
  async generateLogAnalysisReport() {
    this.log('📊 Generating log analysis report...');
    const report = {
      "timestamp": new Date().toISOString(),
      "analysis": {
        build: await this.analyzeBuildLogs(),
        "errors": await this.analyzeErrorLogs(),
        "performance": await this.analyzePerformanceLogs(),
        "access": await this.analyzeAccessLogs()
      }
    };
    // Generate recommendations
    report.recommendations = this.generateRecommendations(report.analysis);
    const reportFile = path.join(this.reportsDir, `log-analysis-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📄 Log analysis report "generated": ${reportFile}`);
    return report}
  generateRecommendations(analysis) {
    const recommendations = [];
    if (analysis.build && analysis.build.successRate < 90) {
      recommendations.push({
        "type": 'build_reliability',
        "priority": 'high',
        "message": `Build success rate is ${analysis.build.successRate.toFixed(1)}%. Improve build reliability.`,
        "impact": 'Reduces deployment failures'
      })}
    if (analysis.build && analysis.build.averageBuildTime > 120000) { // 2 minutes
      recommendations.push({
        "type": 'build_performance',
        "priority": 'medium',
        "message": `Average build time is ${Math.round(analysis.build.averageBuildTime / 1000)}s. Optimize build process.`,
        "impact": 'Improves development efficiency'
      })}
    if (analysis.errors && analysis.errors.total > 100) {
      recommendations.push({
        "type": 'error_reduction',
        "priority": 'high',
        "message": `Found ${analysis.errors.total} errors in logs. Implement better error handling.`,
        "impact": 'Improves application stability'
      })}
    if (analysis.performance && analysis.performance.averageResponseTime > 1000) { // 1 second
      recommendations.push({
        "type": 'performance_optimization',
        "priority": 'medium',
        "message": `Average response time is ${analysis.performance.averageResponseTime}ms. Optimize performance.`,
        "impact": 'Improves user experience'
      })}
    if (analysis.performance && analysis.performance.averageMemoryUsage > 500) { // 500MB
      recommendations.push({
        "type": 'memory_optimization',
        "priority": 'medium',
        "message": `Average memory usage is ${analysis.performance.averageMemoryUsage}MB. Optimize memory usage.`,
        "impact": 'Reduces resource consumption'
      })}
    if (analysis.access && analysis.access.statusCodes['500']) {
      recommendations.push({
        "type": 'server_errors',
        "priority": 'high',
        "message": `Found ${analysis.access.statusCodes['500']} server errors. Fix server-side issues.`,
        "impact": 'Improves application reliability'
      })}
    return recommendations}
  async run() {
    this.log('📊 Starting Log Analyzer...');
    try {
      const report = await this.generateLogAnalysisReport();
      this.log('🎉 Log analysis completed!');
      this.log(`🔍 Build success "rate": ${report.analysis.build.successRate || 0}%`);
      this.log(`🔍 Total "errors": ${report.analysis.errors.total || 0}`);
      this.log(`🔍 Average response "time": ${report.analysis.performance.averageResponseTime || 0}ms`);
      this.log(`🔍 Total "requests": ${report.analysis.access.total || 0}`);
      this.log(`💡 "Recommendations": ${report.recommendations.length}`);
      return report} catch (error) {
      this.log(`💥 Log analysis "failed": ${error.message}`);
      throw error}
  }
}
// Run the analyzer if this file is executed directly
if (require.main === module) {
  const analyzer = new LogAnalyzer();
  analyzer.run()
    .then((report) => {
      process.exit(0)})
    .catch((error) => {
      console.error('\n💥 Log Analyzer "failed": ', error.message);
      process.exit(1)})}
module.exports = LogAnalyzer;
          const content = fs.readFileSync(logFile, 'utf8')
          const lines = content.split('\n')
            if (line.includes('"Error")
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "message"
        "impact"
      console.error('\n� Log Analyzer "failed")
      console.error('\n� Log Analyzer "failed")
