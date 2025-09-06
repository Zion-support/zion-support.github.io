
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
