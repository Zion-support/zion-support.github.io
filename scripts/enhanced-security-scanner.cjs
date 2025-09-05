#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');




const securityReport = {
  "timestamp": new Date().toISOString(),
  "sessionId": Date.now().toString(),
  "vulnerabilities": [],
  "recommendations": [],
  "summary": {
    totalChecks: 0,
    "vulnerabilities": 0,
    "high": 0,
    "medium": 0,
    "low": 0,
    "securityScore": 0
  }
};

function log(level, message) {
  const timestamp = new Date().toISOString();
  }] ${message}`)}

function checkDependencies() {
  log('info', 'Checking dependencies for vulnerabilities');
  
  try {
    const output = execSync('npm audit --json', { "encoding": 'utf8' });
    const audit = JSON.parse(output);
    
    if (audit.vulnerabilities) {
      Object.entries(audit.vulnerabilities).forEach(([name, vuln]) => {
        securityReport.vulnerabilities.push({
          "type": 'dependency',
          name,
          "severity": vuln.severity,
          "description": vuln.description,
          "recommendation": vuln.recommendation
        })})}
    
    securityReport.summary.totalChecks++;
    log('info', 'Dependency security check completed')} catch (error) {
    log('warn', 'Dependency audit failed', error.message)}
}

function checkSecrets() {
  log('info', 'Scanning for exposed secrets');
  
  const secretPatterns = [/password\s*=\s*['"][^'"]+['"]/gi,
    /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,
    /secret\s*=\s*['"][^'"]+['"]/gi,
    /token\s*=\s*['"][^'"]+['"]/gi
  ];
  
  function scanFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      secretPatterns.forEach((pattern, index) => {
        const matches = content.match(pattern);
        if (matches) {
          matches.forEach(match => {
            securityReport.vulnerabilities.push({
              "type": 'secret',
              "file": filePath,
              "severity": 'high',
              "description": `Potential secret exposed: ${match.substring(0, 50)}...`,
              "recommendation": 'Remove or move secrets to environment variables'
            })})}
      })} catch (error) {
      // Skip files that can't be read
    }
  }
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        scanDirectory(filePath)} else if (stat.isFile() && /\.(js|ts|jsx|tsx|json|env)$/.test(file)) {
        scanFile(filePath)}
    })}
  
  scanDirectory(process.cwd());
  securityReport.summary.totalChecks++;
  log('info', 'Secret scanning completed')}

function checkFilePermissions() {
  log('info', 'Checking file permissions');
  
  const sensitiveFiles = ['package.json',
    'package-lock.json',
    '.env',
    '.env.local',
    '.env.production'
  ];
  
  sensitiveFiles.forEach(file => {
    try {
      const stats = fs.statSync(file);
      const mode = stats.mode & parseInt('777', 8);
      
      if (mode > parseInt('644', 8)) {
        securityReport.vulnerabilities.push({
          "type": 'permission',
          file,
          "severity": 'medium',
          "description": `File has overly permissive permissions: ${mode.toString(8)}`,
          "recommendation": 'Set file permissions to 644 or more restrictive'
        })}
    } catch (error) {
      // File doesn't exist, skip
    }
  });
  
  securityReport.summary.totalChecks++;
  log('info', 'File permission check completed')}

function generateRecommendations() {
  const recommendations = [];
  
  if (securityReport.summary.high > 0) {
    recommendations.push({
      "priority": 'critical',
      "message": `${securityReport.summary.high} high severity vulnerabilities found`,
      "action": 'Address high severity issues immediately'
    })}
  
  if (securityReport.summary.medium > 0) {
    recommendations.push({
      "priority": 'high',
      "message": `${securityReport.summary.medium} medium severity vulnerabilities found`,
      "action": 'Address medium severity issues within 48 hours'
    })}
  
  recommendations.push({
    "priority": 'medium',
    "message": 'Implement automated security scanning',
    "action": 'Set up CI/CD pipeline with security checks'
  });
  
  recommendations.push({
    "priority": 'low',
    "message": 'Regular security audits',
    "action": 'Schedule monthly security reviews'
  });
  
  return recommendations}

function calculateSecurityScore() {
  let score = 100;
  
  score -= securityReport.summary.high * 20;
  score -= securityReport.summary.medium * 10;
  score -= securityReport.summary.low * 5;
  
  return Math.max(0, Math.min(100, score))}

async function main() {
  try {
    log('info', 'Starting enhanced security scan');
    
    checkDependencies();
    checkSecrets();
    checkFilePermissions();
    
    // Calculate summary
    securityReport.vulnerabilities.forEach(vuln => {
      securityReport.summary.vulnerabilities++;
      securityReport.summary[vuln.severity]++});
    
    securityReport.summary.securityScore = calculateSecurityScore();
    securityReport.recommendations = generateRecommendations();
    
    // Display summary
    log('info', 'Enhanced Security Scanner Summary');
