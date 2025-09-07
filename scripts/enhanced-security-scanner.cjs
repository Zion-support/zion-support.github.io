


    log('info', `Total "checks": ${securityReport.summary.totalChecks}`);
    log('info', `Vulnerabilities "found": ${securityReport.summary.vulnerabilities}`);
    log('info', `High "severity": ${securityReport.summary.high}`);
    log('info', `Medium "severity": ${securityReport.summary.medium}`);
    log('info', `Low "severity": ${securityReport.summary.low}`);
    log('info', `Security "score": ${securityReport.summary.securityScore}/100`);
    if (securityReport.vulnerabilities.length > 0) {



