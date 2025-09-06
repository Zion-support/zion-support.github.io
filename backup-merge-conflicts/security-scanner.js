<<<<<<< HEAD
#!/usr/bin/env node;
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
class SecurityScanner {constructor() {; this.processName = process.env.PM2_PROCESS_NAME |'security-scanner'; this.scanDependencies = process.env.SCAN_DEPENDENCIES = = = 'true'; this.scanCode = process.env.SCAN_CODE = = = 'true'; this.scanConfigs = process.env.SCAN_CONFIGS = = = 'true'; this.alertOnCritical = process.env.ALERT_ON_CRITICAL = = = 'true'; this.logFile = path.join(process.cwd(), 'logs/pm2/security-scanner.log')}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`; console.log(logMessage.trim()); // Ensure log directory exists; const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) {fs.mkdirSync(logDir, { recursive: true })}; fs.appendFileSync(this.logFile, logMessage)}; async scanDependencies() {if (!this.scanDependencies) return; try {; this.log('Scanning dependencies for vulnerabilities...'); // Check if npm audit is available; try {; const auditOutput = execSync('npm audit --json', {; encoding: 'utf8', stdio: 'pipe', cwd: process.cwd()}); const auditData = JSON.parse(auditOutput); const vulnerabilities = auditData.vulnerabilities |{};        const vulnerabilities = auditData.vulnerabilities |{}
=======

class SecurityScanner {; constructor() {; this && this.processName = process && process.env.PM2_PROCESS_NAME || 'security-scanner'; this && this.scanDependencies = process && process.env.SCAN_DEPENDENCIES = = = 'true'; this && this.scanCode = process && process.env.SCAN_CODE = = = 'true'; this && this.scanConfigs = process && process.env.SCAN_CONFIGS = = = 'true'; this && this.alertOnCritical = process && process.env.ALERT_ON_CRITICAL = = = 'true'; this && this.logFile = path && path.join(process && process.cwd(), 'logs/pm2/security-scanner && scanner.log')};
; log(message) {; const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${this && this.processName}] ${message}\n`; console && console.log(logMessage && logMessage.trim());
; // Ensure log directory exists; const logDir = path && path.dirname(this && this.logFile); if (!fs && fs.existsSync(logDir)) {; fs && fs.mkdirSync(logDir, { recursive: true })};
; fs && fs.appendFileSync(this && this.logFile, logMessage)};
; async scanDependencies() {; if (!this && this.scanDependencies) return;
; try {; this && this.log('Scanning dependencies for vulnerabilities...');
; // Check if npm audit is available; try {; const auditOutput = execSync('npm audit --json', {; encoding: 'utf8', stdio: 'pipe', cwd: process && process.cwd()});
; const auditData = JSON && JSON.parse(auditOutput); const vulnerabilities = auditData && auditData.vulnerabilities || {};
;        const vulnerabilities = auditData && auditData.vulnerabilities || {};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
class SecurityScanner {;
  constructor() {;
    this.processName = process.env.PM2_PROCESS_NAME || 'security-scanner';
    this.scanDependencies = process.env.SCAN_DEPENDENCIES === 'true';
    this.scanCode = process.env.SCAN_CODE === 'true';
    this.scanConfigs = process.env.SCAN_CONFIGS === 'true';
    this.alertOnCritical = process.env.ALERT_ON_CRITICAL === 'true';
    this.logFile = path.join(process.cwd(), 'logs/pm2/security-scanner.log');
};
;
  log(message) {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    console.log(logMessage.trim());
;
    // Ensure log directory exists;
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {;
      fs.mkdirSync(logDir, { recursive: true });
};
;
    fs.appendFileSync(this.logFile, logMessage);
};
;
  async scanDependencies() {;
    if (!this.scanDependencies) return;
;
    try {;
      this.log('Scanning dependencies for vulnerabilities...');
;
      // Check if npm audit is available;
      try {;
        const auditOutput = execSync('npm audit --json', {;
          encoding: 'utf8', stdio: 'pipe',
          cwd: process.cwd(),
        });
;
        const auditData = JSON.parse(auditOutput);
#!/usr/bin/env node,
const { execSync } = require('child_process'),
const fs = require('fs'),
const path = require('path'),
,
class SecurityScanner {,
  constructor() {,
    this.processName = process.env.PM2_PROCESS_NAME || 'security-scanner',
    this.scanDependencies = process.env.SCAN_DEPENDENCIES === 'true',
    this.scanCode = process.env.SCAN_CODE === 'true',
    this.scanConfigs = process.env.SCAN_CONFIGS === 'true',
    this.alertOnCritical = process.env.ALERT_ON_CRITICAL === 'true',
    this.logFile = path.join(process.cwd(), 'logs/pm2/security-scanner.log'),
  };
,
  log(message) {,
    const timestamp = new Date().toISOString(),
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`,
    console.log(logMessage.trim()),
,
    // Ensure log directory exists,
    const logDir = path.dirname(this.logFile),
    if (!fs.existsSync(logDir)) {,
      fs.mkdirSync(logDir, { recursive: true }),
    };
,
    fs.appendFileSync(this.logFile, logMessage),
  };
,
  async scanDependencies() {,
    if (!this.scanDependencies) return,
,
    try {,
      this.log('Scanning dependencies for vulnerabilities...'),
,
      // Check if npm audit is available,
      try {,
        const auditOutput = execSync('npm audit --json', {,
          encoding: 'utf8',
          stdio: 'pipe',
          cwd: process.cwd(),
        }),
,
        const auditData = JSON.parse(auditOutput),
        const vulnerabilities = auditData.vulnerabilities || {};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
