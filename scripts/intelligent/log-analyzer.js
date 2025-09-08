#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class IntelligentLogAnalyzer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/intelligent-log-analyzer.log');
    this.reportFile = path.join(this.projectRoot, 'logs/intelligent-log-analyzer-report.json');
    this.analysisHistory = this.loadAnalysisHistory();
    this.ensureDirectories()}

  ensureDirectories() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir { recursive: true })}
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n')} catch (error) {
      console.error('Failed to write to log file:', error.message)}
  }

  loadAnalysisHistory() {
    try {
      if (fs.existsSync(this.reportFile)) {
        const data = fs.readFileSync(this.reportFile, 'utf8');
        return JSON.parse(data).analysisHistory || []}
    } catch (error) {
      this.log(`Failed to load analysis history: ${error.message}`, 'warn')}
    return []}

  saveAnalysisHistory() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        analysisHistory: this.analysisHistory,
        totalAnalyses: this.analysisHistory.length,
        lastRun: Date.now()
      };
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2))} catch (error) {
      this.log(`Failed to save analysis history: ${error.message}`, 'error')}
  }

  async analyzeLogs() {
    this.log('📊 Analyzing system logs...');
    
    const analysis = {
      errorPatterns: await this.analyzeErrorPatterns(),
      performanceIssues: await this.analyzePerformanceIssues(),
      securityEvents: await this.analyzeSecurityEvents(),
      usagePatterns: await this.analyzeUsagePatterns(),
      anomalies: await this.detectAnomalies(),
      trends: await this.analyzeTrends()
    };

    this.log(`Log Analysis Results:`);
    this.log(`  - Error Patterns: ${analysis.errorPatterns.patterns.length}`);
    this.log(`  - Performance Issues: ${analysis.performanceIssues.issues.length}`);
    this.log(`  - Security Events: ${analysis.securityEvents.events.length}`);
    this.log(`  - Usage Patterns: ${analysis.usagePatterns.patterns.length}`);
    this.log(`  - Anomalies: ${analysis.anomalies.count}`);
    this.log(`  - Trends: ${analysis.trends.count}`);

    return analysis}

  async analyzeErrorPatterns() {
    try {
      this.log('🔍 Analyzing error patterns...');
      
      const logFiles = this.getLogFiles();
      const errorPatterns = [];
      const errorCounts = {};
      
      for (const logFile of logFiles) {
        try {
          const content = fs.readFileSync(logFile, 'utf8');
          const lines = content.split('\n');
          
          lines.forEach((line, index) => {
            if (this.isErrorLine(line)) {
              const pattern = this.extractErrorPattern(line);
              if (pattern) {
                if (!errorCounts[pattern]) {
                  errorCounts[pattern] = {
                    pattern,
                    count: 0,
                    files: new Set(),
                    firstOccurrence: null,
                    lastOccurrence: null,
                    examples: []
                  }}
                
                errorCounts[pattern].count++;
                errorCounts[pattern].files.add(logFile);
                
                if (!errorCounts[pattern].firstOccurrence) {
                  errorCounts[pattern].firstOccurrence = this.extractTimestamp(line)}
                errorCounts[pattern].lastOccurrence = this.extractTimestamp(line);
                
                if (errorCounts[pattern].examples.length < 3) {
                  errorCounts[pattern].examples.push({
                    line: index + 1,
                    content: line.trim(),
                    file: logFile
                  })}
              }
            }
          })} catch (error) {
          this.log(`Failed to analyze ${logFile}: ${error.message}`, 'warn')}
      }
      
      // Convert to array and sort by count
      const patterns = Object.values(errorCounts).map(pattern => ({
        ...pattern,
        files: Array.from(pattern.files)
      })).sort((a, b) => b.count - a.count);
      
      return {
        patterns,
        totalErrors: patterns.reduce((sum, p) => sum + p.count, 0),
        uniquePatterns: patterns.length,
        topErrors: patterns.slice(0, 10)
      }} catch (error) {
      this.log(`Error pattern analysis failed: ${error.message}`, 'error');
      return { patterns: [], totalErrors: 0, uniquePatterns: 0, topErrors: [] }}
  }

  getLogFiles() {
    const logFiles = [];
    const logDir = path.join(this.projectRoot, 'logs');
    
    if (fs.existsSync(logDir)) {
      const items = fs.readdirSync(logDir);
      
      for (const item of items) {
        const fullPath = path.join(logDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isFile() && (item.endsWith('.log') || item.includes('error') || item.includes('out'))) {
          logFiles.push(fullPath)}
      }
    }
    
    return logFiles}

  isErrorLine(line) {
    const errorKeywords = ['error', 'Error', 'ERROR', 'exception', 'Exception', 'EXCEPTION', 'fail', 'Fail', 'FAIL'];
    return errorKeywords.some(keyword => line.includes(keyword))}

  extractErrorPattern(line) {
    // Extract common error patterns
    const patterns = [
      { regex: /Module not found: (.+)/, pattern: 'Module not found' }, { regex: /Cannot resolve (.+)/, pattern: 'Cannot resolve module' }, { regex: /TypeError: (.+)/, pattern: 'TypeError' }, { regex: /ReferenceError: (.+)/, pattern: 'ReferenceError' }, { regex: /SyntaxError: (.+)/, pattern: 'SyntaxError' }, { regex: /Build failed/, pattern: 'Build failed' }, { regex: /Out of memory/, pattern: 'Out of memory' }, { regex: /Connection refused/, pattern: 'Connection refused' }, { regex: /Timeout/, pattern: 'Timeout' }, { regex: /Permission denied/, pattern: 'Permission denied' }
    ];
    
    for (const { regex, pattern } of patterns) {
      if (regex.test(line)) {
        return pattern}
    }
    
    // Generic error pattern
    return 'Generic error'}

  extractTimestamp(line) {
    // Try to extract timestamp from log line
    const timestampRegex = /(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})/;
    const match = line.match(timestampRegex);
    return match ? match[1] : null}

  async analyzePerformanceIssues() {
    try {
      this.log('⚡ Analyzing performance issues...');
      
      const logFiles = this.getLogFiles();
      const performanceIssues = [];
      
      for (const logFile of logFiles) {
        try {
          const content = fs.readFileSync(logFile, 'utf8');
          const lines = content.split('\n');
          
          lines.forEach((line, index) => {
            if (this.isPerformanceIssue(line)) {
              const issue = this.extractPerformanceIssue(line);
              if (issue) {
                performanceIssues.push({
                  file: logFile,
                  line: index + 1,
                  content: line.trim(),
                  type: issue.type,
                  severity: issue.severity,
                  timestamp: this.extractTimestamp(line)
                })}
            }
          })} catch (error) {
          this.log(`Failed to analyze performance in ${logFile}: ${error.message}`, 'warn')}
      }
      
      return {
        issues: performanceIssues,
        count: performanceIssues.length,
        byType: this.groupByType(performanceIssues),
        bySeverity: this.groupBySeverity(performanceIssues)
      }} catch (error) {
      this.log(`Performance analysis failed: ${error.message}`, 'error');
      return { issues: [], count: 0, byType: {}, bySeverity: {} }}
  }

  isPerformanceIssue(line) {
    const performanceKeywords = ['slow', 'Slow', 'SLOW', 'timeout', 'Timeout', 'TIMEOUT', 'memory', 'Memory', 'MEMORY', 'cpu', 'CPU', 'performance', 'Performance'];
    return performanceKeywords.some(keyword => line.includes(keyword))}

  extractPerformanceIssue(line) {
    if (line.includes('timeout') || line.includes('Timeout')) {
      return { type: 'timeout', severity: 'high' }} else if (line.includes('memory') || line.includes('Memory')) {
      return { type: 'memory', severity: 'medium' }} else if (line.includes('cpu') || line.includes('CPU')) {
      return { type: 'cpu', severity: 'medium' }} else if (line.includes('slow') || line.includes('Slow')) {
      return { type: 'slow', severity: 'low' }}
    return { type: 'performance', severity: 'low' }}

  groupByType(issues) {
    const groups = {};
    issues.forEach(issue => {
      if (!groups[issue.type]) {
        groups[issue.type] = []}
      groups[issue.type].push(issue)});
    return groups}

  groupBySeverity(issues) {
    const groups = {};
    issues.forEach(issue => {
      if (!groups[issue.severity]) {
        groups[issue.severity] = []}
      groups[issue.severity].push(issue)});
    return groups}

  async analyzeSecurityEvents() {
    try {
      this.log('🔒 Analyzing security events...');
      
      const logFiles = this.getLogFiles();
      const securityEvents = [];
      
      for (const logFile of logFiles) {
        try {
          const content = fs.readFileSync(logFile, 'utf8');
          const lines = content.split('\n');
          
          lines.forEach((line, index) => {
            if (this.isSecurityEvent(line)) {
              const event = this.extractSecurityEvent(line);
              if (event) {
                securityEvents.push({
                  file: logFile,
                  line: index + 1,
                  content: line.trim(),
                  type: event.type,
                  severity: event.severity,
                  timestamp: this.extractTimestamp(line)
                })}
            }
          })} catch (error) {
          this.log(`Failed to analyze security in ${logFile}: ${error.message}`, 'warn')}
      }
      
      return {
        events: securityEvents,
        count: securityEvents.length,
        byType: this.groupByType(securityEvents),
        bySeverity: this.groupBySeverity(securityEvents)
      }} catch (error) {
      this.log(`Security analysis failed: ${error.message}`, 'error');
      return { events: [], count: 0, byType: {}, bySeverity: {} }}
  }

  isSecurityEvent(line) {
    const securityKeywords = ['unauthorized', 'Unauthorized', 'UNAUTHORIZED', 'forbidden', 'Forbidden', 'FORBIDDEN', 'attack', 'Attack', 'ATTACK', 'injection', 'Injection', 'INJECTION', 'xss', 'XSS', 'csrf', 'CSRF'];
    return securityKeywords.some(keyword => line.includes(keyword))}

  extractSecurityEvent(line) {
    if (line.includes('unauthorized') || line.includes('Unauthorized')) {
      return { type: 'unauthorized_access', severity: 'high' }} else if (line.includes('forbidden') || line.includes('Forbidden')) {
      return { type: 'forbidden_access', severity: 'medium' }} else if (line.includes('injection') || line.includes('Injection')) {
      return { type: 'injection_attempt', severity: 'critical' }} else if (line.includes('xss') || line.includes('XSS')) {
      return { type: 'xss_attempt', severity: 'critical' }} else if (line.includes('csrf') || line.includes('CSRF')) {
      return { type: 'csrf_attempt', severity: 'high' }}
    return { type: 'security_event', severity: 'medium' }}

  async analyzeUsagePatterns() {
    try {
      this.log('📈 Analyzing usage patterns...');
      
      const logFiles = this.getLogFiles();
      const usagePatterns = [];
      const hourlyUsage = {};
      const dailyUsage = {};
      
      for (const logFile of logFiles) {
        try {
          const content = fs.readFileSync(logFile, 'utf8');
          const lines = content.split('\n');
          
          lines.forEach((line, index) => {
            const timestamp = this.extractTimestamp(line);
            if (timestamp) {
              const date = new Date(timestamp);
              const hour = date.getHours();
              const day = date.toDateString();
              
              hourlyUsage[hour] = (hourlyUsage[hour] || 0) + 1;
              dailyUsage[day] = (dailyUsage[day] || 0) + 1}
          })} catch (error) {
          this.log(`Failed to analyze usage in ${logFile}: ${error.message}`, 'warn')}
      }
      
      return {
        patterns: usagePatterns,
        hourlyUsage,
        dailyUsage,
        peakHour: Object.keys(hourlyUsage).reduce((a, b) => hourlyUsage[a] > hourlyUsage[b] ? a : b, 0),
        peakDay: Object.keys(dailyUsage).reduce((a, b) => dailyUsage[a] > dailyUsage[b] ? a : b, '')
      }} catch (error) {
      this.log(`Usage pattern analysis failed: ${error.message}`, 'error');
      return { patterns: [], hourlyUsage: {}, dailyUsage: {}, peakHour: 0, peakDay: '' }}
  }

  async detectAnomalies() {
    try {
      this.log('🔍 Detecting anomalies...');
      
      const logFiles = this.getLogFiles();
      const anomalies = [];
      
      for (const logFile of logFiles) {
        try {
          const content = fs.readFileSync(logFile, 'utf8');
          const lines = content.split('\n');
          
          // Detect unusual patterns
          const errorCount = lines.filter(line => this.isErrorLine(line)).length;
          const totalLines = lines.length;
          const errorRate = totalLines > 0 ? (errorCount / totalLines) * 100 : 0;
          
          if (errorRate > 10) { // More than 10% error rate
            anomalies.push({
              file: logFile,
              type: 'high_error_rate',
              severity: 'high',
              value: errorRate.toFixed(2),
              description: `High error rate: ${errorRate.toFixed(2)}%`
            })}
          
          // Detect sudden spikes in activity
          const hourlyActivity = {};
          lines.forEach(line => {
            const timestamp = this.extractTimestamp(line);
            if (timestamp) {
              const hour = new Date(timestamp).getHours();
              hourlyActivity[hour] = (hourlyActivity[hour] || 0) + 1}
          });
          
          const avgActivity = Object.values(hourlyActivity).reduce((a, b) => a + b, 0) / Object.keys(hourlyActivity).length;
          Object.entries(hourlyActivity).forEach(([hour, count]) => {
            if (count > avgActivity * 3) { // 3x average activity
              anomalies.push({
                file: logFile,
                type: 'activity_spike',
                severity: 'medium',
                value: count,
                description: `Activity spike at hour ${hour}: ${count} events (avg: ${avgActivity.toFixed(2)})`
              })}
          })} catch (error) {
          this.log(`Failed to detect anomalies in ${logFile}: ${error.message}`, 'warn')}
      }
      
      return {
        anomalies,
        count: anomalies.length,
        byType: this.groupByType(anomalies),
        bySeverity: this.groupBySeverity(anomalies)
      }} catch (error) {
      this.log(`Anomaly detection failed: ${error.message}`, 'error');
      return { anomalies: [], count: 0, byType: {}, bySeverity: {} }}
  }

  async analyzeTrends() {
    try {
      this.log('📊 Analyzing trends...');
      
      const logFiles = this.getLogFiles();
      const trends = [];
      
      for (const logFile of logFiles) {
        try {
          const content = fs.readFileSync(logFile, 'utf8');
          const lines = content.split('\n');
          
          // Analyze error trends over time
          const errorTrend = this.analyzeErrorTrend(lines);
          if (errorTrend.trend !== 'stable') {
            trends.push({
              file: logFile,
              type: 'error_trend',
              trend: errorTrend.trend,
              change: errorTrend.change,
              description: `Error trend: ${errorTrend.trend} (${errorTrend.change}% change)`
            })}
          
          // Analyze performance trends
          const performanceTrend = this.analyzePerformanceTrend(lines);
          if (performanceTrend.trend !== 'stable') {
            trends.push({
              file: logFile,
              type: 'performance_trend',
              trend: performanceTrend.trend,
              change: performanceTrend.change,
              description: `Performance trend: ${performanceTrend.trend} (${performanceTrend.change}% change)`
            })}
        } catch (error) {
          this.log(`Failed to analyze trends in ${logFile}: ${error.message}`, 'warn')}
      }
      
      return {
        trends,
        count: trends.length,
        byType: this.groupByType(trends),
        byTrend: this.groupByTrend(trends)
      }} catch (error) {
      this.log(`Trend analysis failed: ${error.message}`, 'error');
      return { trends: [], count: 0, byType: {}, byTrend: {} }}
  }

  analyzeErrorTrend(lines) {
    const errors = lines.filter(line => this.isErrorLine(line));
    const totalLines = lines.length;
    
    if (totalLines < 100) {
      return { trend: 'stable', change: 0 }}
    
    const firstHalf = errors.slice(0, Math.floor(errors.length / 2));
    const secondHalf = errors.slice(Math.floor(errors.length / 2));
    
    const firstHalfRate = (firstHalf.length / (totalLines / 2)) * 100;
    const secondHalfRate = (secondHalf.length / (totalLines / 2)) * 100;
    
    const change = ((secondHalfRate - firstHalfRate) / firstHalfRate) * 100;
    
    if (change > 20) {
      return { trend: 'increasing', change: change.toFixed(2) }} else if (change < -20) {
      return { trend: 'decreasing', change: change.toFixed(2) }} else {
      return { trend: 'stable', change: change.toFixed(2) }}
  }

  analyzePerformanceTrend(lines) {
    const performanceIssues = lines.filter(line => this.isPerformanceIssue(line));
    const totalLines = lines.length;
    
    if (totalLines < 100) {
      return { trend: 'stable', change: 0 }}
    
    const firstHalf = performanceIssues.slice(0, Math.floor(performanceIssues.length / 2));
    const secondHalf = performanceIssues.slice(Math.floor(performanceIssues.length / 2));
    
    const firstHalfRate = (firstHalf.length / (totalLines / 2)) * 100;
    const secondHalfRate = (secondHalf.length / (totalLines / 2)) * 100;
    
    const change = ((secondHalfRate - firstHalfRate) / firstHalfRate) * 100;
    
    if (change > 20) {
      return { trend: 'increasing', change: change.toFixed(2) }} else if (change < -20) {
      return { trend: 'decreasing', change: change.toFixed(2) }} else {
      return { trend: 'stable', change: change.toFixed(2) }}
  }

  groupByTrend(trends) {
    const groups = {};
    trends.forEach(trend => {
      if (!groups[trend.trend]) {
        groups[trend.trend] = []}
      groups[trend.trend].push(trend)});
    return groups}

  async autoCleanupLogs() {
    this.log('🧹 Auto-cleaning log files...');
    
    const cleanupActions = [];
    const logFiles = this.getLogFiles();
    
    for (const logFile of logFiles) {
      try {
        const stats = fs.statSync(logFile);
        const sizeInMB = stats.size / (1024 * 1024);
        
        // Clean up large log files (> 50MB)
        if (sizeInMB > 50) {
          this.log(`Cleaning up large log file: ${logFile} (${sizeInMB.toFixed(2)}MB)`);
          
          // Truncate to last 1000 lines
          const content = fs.readFileSync(logFile, 'utf8');
          const lines = content.split('\n');
          const lastLines = lines.slice(-1000).join('\n');
          
          fs.writeFileSync(logFile, lastLines);
          
          cleanupActions.push({
            file: logFile,
            action: 'truncated',
            originalSize: sizeInMB.toFixed(2),
            newSize: (lastLines.length / (1024 * 1024)).toFixed(2),
            success: true
          })}
        
        // Remove old log files (> 30 days)
        const fileAge = Date.now() - stats.mtime.getTime();
        const ageInDays = fileAge / (1000 * 60 * 60 * 24);
        
        if (ageInDays > 30) {
          this.log(`Removing old log file: ${logFile} (${ageInDays.toFixed(2)} days old)`);
          
          fs.unlinkSync(logFile);
          
          cleanupActions.push({
            file: logFile,
            action: 'deleted',
            age: ageInDays.toFixed(2),
            success: true
          })}
      } catch (error) {
        cleanupActions.push({
          file: logFile,
          action: 'cleanup',
          success: false,
          error: error.message
        });
        
        this.log(`Failed to cleanup ${logFile}: ${error.message}`, 'error')}
    }
    
    return cleanupActions}

  async generateLogReport() {
    this.log('📊 Generating log analysis report...');
    
    const analysis = await this.analyzeLogs();
    const cleanupActions = await this.autoCleanupLogs();
    
    const report = {
      timestamp: new Date().toISOString(),
      analysis,
      cleanupActions,
      summary: {
        totalErrors: analysis.errorPatterns.totalErrors,
        uniqueErrorPatterns: analysis.errorPatterns.uniquePatterns,
        performanceIssues: analysis.performanceIssues.count,
        securityEvents: analysis.securityEvents.count,
        anomalies: analysis.anomalies.count,
        trends: analysis.trends.count,
        cleanupActions: cleanupActions.length,
        successfulCleanups: cleanupActions.filter(a => a.success).length
      },
      recommendations: this.generateLogRecommendations(analysis)
    };

    const reportFile = path.join(this.projectRoot, 'logs/intelligent-log-analyzer-intelligence.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Log analysis report saved to ${reportFile}`);
    return report}

  generateLogRecommendations(analysis) {
    const recommendations = [];
    
    if (analysis.errorPatterns.totalErrors > 100) {
      recommendations.push('High error count detected - investigate and fix common error patterns')}
    
    if (analysis.errorPatterns.uniquePatterns > 20) {
      recommendations.push('Many unique error patterns - consider implementing better error handling')}
    
    if (analysis.performanceIssues.count > 50) {
      recommendations.push('Multiple performance issues detected - optimize application performance')}
    
    if (analysis.securityEvents.count > 0) {
      recommendations.push('Security events detected - review and strengthen security measures')}
    
    if (analysis.anomalies.count > 10) {
      recommendations.push('Anomalies detected - investigate unusual patterns in system behavior')}
    
    if (analysis.trends.count > 0) {
      recommendations.push('Trends detected - monitor and address changing patterns')}
    
    recommendations.push('Implement log rotation to prevent log files from growing too large');
    recommendations.push('Set up automated log monitoring and alerting');

    return recommendations}

  async run() {
    this.log('🚀 Starting Intelligent Log Analyzer...');
    
    try {
      // Generate comprehensive log analysis report
      const report = await this.generateLogReport();
      
      // Save analysis history
      this.analysisHistory.push({
        timestamp: new Date().toISOString(),
        report: report,
        summary: report.summary
      });
      
      this.saveAnalysisHistory();

      this.log(`🎯 Log Analysis Complete:`);
      this.log(`   - Total Errors: ${report.summary.totalErrors}`);
      this.log(`   - Unique Error Patterns: ${report.summary.uniqueErrorPatterns}`);
      this.log(`   - Performance Issues: ${report.summary.performanceIssues}`);
      this.log(`   - Security Events: ${report.summary.securityEvents}`);
      this.log(`   - Anomalies: ${report.summary.anomalies}`);
      this.log(`   - Trends: ${report.summary.trends}`);
      this.log(`   - Cleanup Actions: ${report.summary.cleanupActions}`);
      this.log(`   - Successful Cleanups: ${report.summary.successfulCleanups}`)} catch (error) {
      this.log(`❌ Log Analyzer failed: ${error.message}`, 'error');
      throw error}
  }
}

// Run the log analyzer
if (import.meta.url === `file://${process.argv[1]}`) {
  const analyzer = new IntelligentLogAnalyzer();
  analyzer.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1)})}

export default $1;