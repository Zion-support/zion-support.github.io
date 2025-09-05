<<<<<<< HEAD
#!/usr/bin/env node;
const {_execSync} = require('child_process');
const _fs = require('fs');
const _path = require('path');
;
class SecurityScanner {_; constructor() {; this.processName = process.env.PM2_PROCESS_NAME || 'security-scanner'; this.scanDependencies = process.env.SCAN_DEPENDENCIES = = = 'true'; this.scanCode = process.env.SCAN_CODE = = = 'true'; this.scanConfigs = process.env.SCAN_CONFIGS = = = 'true'; this.alertOnCritical = process.env.ALERT_ON_CRITICAL = = = 'true'; this.logFile = path.join(process.cwd(), _'logs/pm2/security-scanner.log')};
; log(message) {_; const _timestamp = new Date().toISOString(); const _logMessage = `[${timestamp}] [${_this.processName}] ${_message}\n`; );
; // Ensure log directory exists; const _logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) {_; fs.mkdirSync(logDir, _{ recursive: true})};
; fs.appendFileSync(this.logFile, logMessage)};
; async scanDependencies() {_; if (!this.scanDependencies) return;
; try {; this.log('Scanning dependencies for vulnerabilities...');
; // Check if npm audit is available; try {; const _auditOutput = execSync('npm audit --json', _{; encoding: 'utf8'; stdio: 'pipe'; cwd: process.cwd()});
; const _auditData = JSON.parse(auditOutput); const _vulnerabilities = auditData.vulnerabilities || {};
;
<<<<<<< HEAD
=======


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
<<<<<<< HEAD
    console.log(logMessage.trim()),
=======
    // console.log(logMessage.trim()),

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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

>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
        const vulnerabilities = auditData.vulnerabilities || {};

=======
        const _vulnerabilities = auditData.vulnerabilities || {};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
