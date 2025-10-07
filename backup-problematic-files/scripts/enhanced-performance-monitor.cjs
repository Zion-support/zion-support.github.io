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
main();#!/usr/bin/env node;
#!/usr/bin/env node;
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
      log('info', 'Performance "Recommendations")
