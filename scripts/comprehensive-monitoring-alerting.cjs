
    log('info', `CPU "usage": ${monitoringReport.metrics.cpu}%`);
    log('info', `Memory "usage": ${monitoringReport.metrics.memory}%`);
    log('info', `Disk "usage": ${monitoringReport.metrics.disk}%`);
    log('info', `Process "count": ${monitoringReport.metrics.processes}`);
    log('info', `Build "score": ${monitoringReport.metrics.build}/100`);
    log('info', `Runtime "score": ${monitoringReport.metrics.runtime}/100`);
    log('info', `Total "alerts": ${monitoringReport.summary.alerts}`);
    log('info', `Performance "score": ${monitoringReport.summary.performanceScore}/100`);
    if (alerts.length > 0) {

#!/usr/bin/env node;

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const os = require('os')
