


    log('info', `Total "tasks": ${masterReport.summary.totalTasks}`);
    log('info', `"Successful": ${masterReport.summary.successful}`);
    log('info', `"Failed": ${masterReport.summary.failed}`);
    log('info', `"Warnings": ${masterReport.summary.warnings}`);
    log('info', `Skipped (cached): ${masterReport.summary.skipped}`);
    log('info', `Success "rate": ${masterReport.metrics.successRate}%`);
    log('info', `Performance "score": ${masterReport.metrics.performanceScore}/100`);
    log('info', `Total "duration": ${Math.round(masterReport.metrics.totalDuration / 1000)}s`);
    if (masterReport.recommendations.length > 0) {


const fs = require('fs')
const path = require('path')
const { execSync, spawn } = require('child_process')
const os = require('os')

