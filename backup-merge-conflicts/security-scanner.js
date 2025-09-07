<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
#!/usr/bin/env node;
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
;
class SecurityScanner {; constructor() {; this.processName = process.env.PM2_PROCESS_NAME || 'security-scanner'; this.scanDependencies = process.env.SCAN_DEPENDENCIES = = = 'true'; this.scanCode = process.env.SCAN_CODE = = = 'true'; this.scanConfigs = process.env.SCAN_CONFIGS = = = 'true'; this.alertOnCritical = process.env.ALERT_ON_CRITICAL = = = 'true'; this.logFile = path.join(process.cwd(), 'logs/pm2/security-scanner.log')};
; log(message) {; const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`; console.log(logMessage.trim());
; // Ensure log directory exists; const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) {; fs.mkdirSync(logDir, { recursive: true })};
; fs.appendFileSync(this.logFile, logMessage)};
; async scanDependencies() {; if (!this.scanDependencies) return;
; try {; this.log('Scanning dependencies for vulnerabilities...');
; // Check if npm audit is available; try {; const auditOutput = execSync('npm audit --json', {; encoding: 'utf8'; stdio: 'pipe'; cwd: process.cwd()});
; const auditData = JSON.parse(auditOutput); const vulnerabilities = auditData.vulnerabilities || {};
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

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
class SecurityScanner {constructor() {; this.processName = process.env.PM2_PROCESS_NAME |'security-scanner'; this.scanDependencies = process.env.SCAN_DEPENDENCIES = = = 'true'; this.scanCode = process.env.SCAN_CODE = = = 'true'; this.scanConfigs = process.env.SCAN_CONFIGS = = = 'true'; this.alertOnCritical = process.env.ALERT_ON_CRITICAL = = = 'true'; this.logFile = path.join(process.cwd(), 'logs/pm2/security-scanner.log')}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`; console.log(logMessage.trim()); // Ensure log directory exists; const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) {fs.mkdirSync(logDir, { recursive: true })}; fs.appendFileSync(this.logFile, logMessage)}; async scanDependencies() {if (!this.scanDependencies) return; try {; this.log('Scanning dependencies for vulnerabilities...'); // Check if npm audit is available; try {; const auditOutput = execSync('npm audit --json', {; encoding: 'utf8', stdio: 'pipe', cwd: process.cwd()}); const auditData = JSON.parse(auditOutput); const vulnerabilities = auditData.vulnerabilities |{};        const vulnerabilities = auditData.vulnerabilities |{}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
; // Check if npm audit is available; try {; const auditOutput = execSync('npm audit --json', {; encoding: 'utf8', stdio: 'pipe', cwd: process.cwd()});
; const auditData = JSON.parse(auditOutput); const vulnerabilities = auditData.vulnerabilities || {};
;
=======
;        const vulnerabilities = auditData.vulnerabilities || {};
}
}
}
}
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
        const auditData = JSON.parse($2);
        const vulnerabilities = $2;
=======
        const auditData = JSON.parse(auditOutput),

;
=======


=======
#!/usr / bin / env node;
const { exec_sync } = require ('child_process');
const fs = require ('fs');
const path = require ('path');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
class SecurityScanner {; constructor() {; this.processName = process.env.PM2_PROCESS_NAME || 'security-scanner'; this.scanDependencies = process.env.SCAN_DEPENDENCIES = = = 'true'; this.scanCode = process.env.SCAN_CODE = = = 'true'; this.scanConfigs = process.env.SCAN_CONFIGS = = = 'true'; this.alertOnCritical = process.env.ALERT_ON_CRITICAL = = = 'true'; this.logFile = path.join(process.cwd(), 'logs/pm2/security-scanner.log')};
; log(message) {; const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`; console.log(logMessage.trim());
; // Ensure log directory exists; const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) {; fs.mkdirSync(logDir, { recursive: true })};
; fs.appendFileSync(this.logFile, logMessage)};
; async scanDependencies() {; if (!this.scanDependencies) return;
; try {; this.log('Scanning dependencies for vulnerabilities...');
; // Check if npm audit is available; try {; const auditOutput = execSync('npm audit --json', {; encoding: 'utf8'; stdio: 'pipe'; cwd: process.cwd()});
; const auditData = JSON.parse(auditOutput); const vulnerabilities = auditData.vulnerabilities || {};
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

;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
; // Check if npm audit is available; try {; const auditOutput = execSync('npm audit --json', {; encoding: 'utf8', stdio: 'pipe', cwd: process.cwd()});
; const auditData = JSON.parse(auditOutput); const vulnerabilities = auditData.vulnerabilities || {};
;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
#!/usr/bin/env node;
        const auditData = JSON.parse($2);
        const vulnerabilities = $2;
=======
        const vulnerabilities = auditData.vulnerabilities || {};
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
