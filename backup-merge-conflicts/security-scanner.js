#!/usr/bin/env node;
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
class SecurityScanner {constructor() {; this.processName = process.env.PM2_PROCESS_NAME |'security-scanner'; this.scanDependencies = process.env.SCAN_DEPENDENCIES = = = 'true'; this.scanCode = process.env.SCAN_CODE = = = 'true'; this.scanConfigs = process.env.SCAN_CONFIGS = = = 'true'; this.alertOnCritical = process.env.ALERT_ON_CRITICAL = = = 'true'; this.logFile = path.join(process.cwd(), 'logs/pm2/security-scanner.log')}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`; console.log(logMessage.trim()); // Ensure log directory exists; const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) {fs.mkdirSync(logDir, { recursive: true })}; fs.appendFileSync(this.logFile, logMessage)}; async scanDependencies() {if (!this.scanDependencies) return; try {; this.log('Scanning dependencies for vulnerabilities...'); // Check if npm audit is available; try {; const auditOutput = execSync('npm audit --json', {; encoding: 'utf8', stdio: 'pipe', cwd: process.cwd()}); const auditData = JSON.parse(auditOutput); const vulnerabilities = auditData.vulnerabilities |{};        const vulnerabilities = auditData.vulnerabilities |{}
=======
;
class SecurityScanner {; constructor() {; this.processName = process.env.PM2_PROCESS_NAME || 'security-scanner'; this.scanDependencies = process.env.SCAN_DEPENDENCIES = = = 'true'; this.scanCode = process.env.SCAN_CODE = = = 'true'; this.scanConfigs = process.env.SCAN_CONFIGS = = = 'true'; this.alertOnCritical = process.env.ALERT_ON_CRITICAL = = = 'true'; this.logFile = path.join(process.cwd(), 'logs/pm2/security-scanner.log')};
; log(message) {; const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`; console.log(logMessage.trim());
; // Ensure log directory exists; const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) {; fs.mkdirSync(logDir, { recursive: true })};
; fs.appendFileSync(this.logFile, logMessage)};
; async scanDependencies() {; if (!this.scanDependencies) return;
; try {; this.log('Scanning dependencies for vulnerabilities...');
; // Check if npm audit is available; try {; const auditOutput = execSync('npm audit --json', {; encoding: 'utf8'; stdio: 'pipe'; cwd: process.cwd()});
; const auditData = JSON.parse(auditOutput); const vulnerabilities = auditData.vulnerabilities || {};
<<<<<<< HEAD
=======
<<<<<<< HEAD
;        const vulnerabilities = auditData.vulnerabilities || {};
}
}
}
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
;
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

;
#!/usr/bin/env node,;
const { execSync } = require('child_process'),;
const fs = require('fs'),;
const path = require('path'),;
,;
class SecurityScanner {,;
  constructor() {,;
    this.processName = process.env.PM2_PROCESS_NAME || 'security-scanner',;
    this.scanDependencies = process.env.SCAN_DEPENDENCIES === 'true',;
    this.scanCode = process.env.SCAN_CODE === 'true',;
    this.scanConfigs = process.env.SCAN_CONFIGS === 'true',;
    this.alertOnCritical = process.env.ALERT_ON_CRITICAL === 'true',;
    this.logFile = path.join(process.cwd(), 'logs/pm2/security-scanner.log');
  },;
,;
  log(message) {,;
    const timestamp = new Date().toISOString(),;
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`,;
    console.log(logMessage.trim()),;
,;
    // Ensure log directory exists,;
    const logDir = path.dirname(this.logFile),;
    if (!fs.existsSync(logDir)) {,;
      fs.mkdirSync(logDir, { recursive: true });
    },;
,;
    fs.appendFileSync(this.logFile, logMessage);
  },;
,;
  async scanDependencies() {,;
    if (!this.scanDependencies) return,;
,;
    try {,;
      this.log('Scanning dependencies for vulnerabilities...'),;
,;
      // Check if npm audit is available,;
      try {,;
        const auditOutput = execSync('npm audit --json', {,;
          encoding: 'utf8',;
          stdio: 'pipe',;
          cwd: process.cwd();
        }),;
,;
        const auditData = JSON.parse(auditOutput),;
        const vulnerabilities = auditData.vulnerabilities || {},;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
