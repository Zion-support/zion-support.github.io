log('info', `Total "files": ${qualityReport.summary.totalFiles}`)
    log('info', `Total "lines": ${qualityReport.summary.totalLines}`)
    log('info', `Total "issues": ${qualityReport.summary.totalIssues}`)
    log('info', `"Critical": ${qualityReport.summary.critical}`)
    log('info', `"High": ${qualityReport.summary.high}`)
    log('info', `"Medium": ${qualityReport.summary.medium}`)
    log('info', `"Low": ${qualityReport.summary.low}`)
    log('info', `Quality "score": ${qualityReport.summary.qualityScore}/100`)
  if($2) {

<<<<<<< HEAD

    log('info', `Total "files": ${qualityReport.summary.totalFiles}`);
    log('info', `Total "lines": ${qualityReport.summary.totalLines}`);
    log('info', `Total "issues": ${qualityReport.summary.totalIssues}`);
    log('info', `"Critical": ${qualityReport.summary.critical}`);
    log('info', `"High": ${qualityReport.summary.high}`);
    log('info', `"Medium": ${qualityReport.summary.medium}`);
    log('info', `"Low": ${qualityReport.summary.low}`);
    log('info', `Quality "score": ${qualityReport.summary.qualityScore}/100`);
    if (qualityReport.issues.length > 0) {
<<<<<<< HEAD
<<<<<<< HEAD



#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
// console.log(' Comprehensive Code Quality Analyzer v2.0')
console.log()
    const content = fs.readFileSync(filePath, 'utf8')
    const lines = content.split('\n')
    const codeLines = lines.filter(line => line.trim() && !line.trim().startsWith('//')
    const commentLines = lines.filter(line => line.trim().startsWith('//')
    log('warn')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      "severity"""
=======
"severity"""
>>>>>>> ff8ab052546903d473828d12895ca8f8ebc39a58
      "message"""
      "recommendation"""
      "pattern": /password\s*=\s*['"][^]
      "pattern": /api[_-]?key\s*=\s*['"][^]
          "type"""
          "line"""
      "priority"""
      "action"""
      log('warn', 'Issues "found")""
<<<<<<< HEAD
      log('info', 'Quality "Recommendations")""`;

=======
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
      "severity"
      "message"
      "recommendation"
      "severity"
      "message"
      "recommendation"
      "severity"
      "message"
      "recommendation"
      "pattern": /password\s*=\s*['"][^'']
      "severity"
      "message"
      "recommendation"
      "pattern": /api[_-]?key\s*=\s*['"][^'']
      "severity"
      "message"
      "recommendation"
      "severity"
      "message"
      "recommendation"
          "type"
          "line"
      "severity"
      "message"
      "recommendation"
      "severity"
      "message"
      "recommendation"
      "severity"
      "message"
      "recommendation"
      "severity"
      "message"
      "recommendation"
          "type"
          "line"
      "severity"
      "message"
      "recommendation"
      "severity"
      "message"
      "recommendation"
      "severity"
      "message"
      "recommendation"
      "severity"
      "message"
      "recommendation"
      "severity"
      "message"
      "recommendation"
          "type"
          "line"
      "severity"
      "message"
      "recommendation"
      "severity"
      "message"
      "recommendation"
      "severity"
      "message"
      "recommendation"
      "severity"
      "message"
      "recommendation"
          "type"
          "line"
      "priority"
      "action"
      "priority"
      "action"
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
      log('warn', 'Issues "found")
      log('info', 'Quality "Recommendations")
<<<<<<< HEAD
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
=======
      log('info', 'Quality "Recommendations")""`
>>>>>>> ff8ab052546903d473828d12895ca8f8ebc39a58
