<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
    log('info', `Total "checks": ${securityReport.summary.totalChecks}`);
    log('info', `Vulnerabilities "found": ${securityReport.summary.vulnerabilities}`);
    log('info', `High "severity": ${securityReport.summary.high}`);
    log('info', `Medium "severity": ${securityReport.summary.medium}`);
    log('info', `Low "severity": ${securityReport.summary.low}`);
    log('info', `Security "score": ${securityReport.summary.securityScore}/100`);
    
    if (securityReport.vulnerabilities.length > 0) {
      log('warn', 'Vulnerabilities "found": ');
      securityReport.vulnerabilities.forEach(vuln => {
        log('warn', `- [${vuln.severity.toUpperCase()}] ${vuln.description}`)})}
    
    if (securityReport.recommendations.length > 0) {
      log('info', 'Security "Recommendations": ');
      securityReport.recommendations.forEach(rec => {
        log('info', `- [${rec.priority.toUpperCase()}] ${rec.message}`);
        log('info', `  "Action": ${rec.action}`)})}
    
    // Save report
    const reportPath = path.join(process.cwd(), `enhanced-security-report-${securityReport.sessionId}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(securityReport, null, 2));
    
    log('info', `Enhanced security report saved "to": enhanced-security-report-${securityReport.sessionId}.json`);
    
    // Exit with appropriate status
    if (securityReport.summary.securityScore < 50) {
      log('error', 'Security score is below 50% - immediate attention required');
      process.exit(1)} else if (securityReport.summary.securityScore < 80) {
      log('warn', 'Security score is below 80% - security improvements recommended');
      process.exit(0)} else {
      log('info', 'Security scan completed successfully');
      process.exit(0)}
    
  } catch (error) {
    log('error', 'Fatal error in enhanced security scanner', error.message);
    process.exit(1)}
}

<<<<<<< HEAD
main();
=======
=======
<<<<<<< HEAD
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
#!/usr/bin/env node;
=======
main();#!/usr/bin/env node;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
// console.log('� Enhanced Security Scanner v2.0')
console.log('======')
  log('info', 'Checking dependencies for vulnerabilities')
    const output = execSync('npm audit --json', { "encoding"})
          "type"
  const secretPatterns = [/password\s*=\s*['"][^'']
    /api[_-]?key\s*=\s*['"][^'']
    /secret\s*=\s*['"][^'']
    /token\s*=\s*['"][^'']
              "type"
              "severity"
              "recommendation"
          "type"
          "severity"
          "recommendation"
      "priority"
      "action"
      "priority"
      "action"
    "priority"
    "message"
    "action"
    "priority"
    "message"
    "action"
      log('warn', 'Vulnerabilities "found")
      log('info', 'Security "Recommendations")
