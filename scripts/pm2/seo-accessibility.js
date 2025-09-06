<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

;
#!/usr/bin/env node,;
const fs = require('fs'),;
const path = require('path'),;
const { execSync } = require('child_process'),;
,;
class SEOAccessibility {,;
  constructor() {,;
    this.projectRoot = process.cwd(),;
    this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'),;
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'),;
    this.startTime = Date.now(),;
  };
,;
  log(message) {,;
    const timestamp = new Date().toISOString(),;
    const logMessage = `[${timestamp}] ${message}\n`,;
,;
    try {,;
      fs.appendFileSync(this.logFile, logMessage),;
    } catch (error) {,;
      console.error('Error writing to log:file:', error.message),;
    };
  };
,;
  async checkSEO() {,;
    try {,;
      this.log('🔍 Checking SEO...'),;
,;
      const seoIssues = [],;
      const pagesDir = path.join(this.projectRoot, 'pages'),;
,;
      if (fs.existsSync(pagesDir)) {,;
        const pageFiles = this.getPageFiles(pagesDir),;
,;
        pageFiles.forEach(file => {,;
          const content = fs.readFileSync(file, 'utf8'),;
          const seoChecks = this.analyzeSEO(file, content),;
          seoIssues.push(...seoChecks),;
        }),;
      };
    };
  };
,;
  getPageFiles(dir) {,;
    const files = [],;
,;
    const scanDirectory = (currentDir) => {,;
      const items = fs.readdirSync(currentDir),;
      items.forEach(item => {,;
        const fullPath = path.join(currentDir, item),;
        const stat = fs.statSync(fullPath),;
,;
        if (stat.isDirectory()) {,;
          scanDirectory(fullPath),;
        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {,;
          files.push(fullPath),;
        };
      }),;
    };
;#!/usr/bin/env node;
=======
#!/usr/bin/env node;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class SEOAccessibility {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json');
    this.startTime = Date.now();
};
;
<<<<<<< HEAD
<<<<<<< HEAD
const fs = require('fs'),
const path = require('path'),
const { execSync } = require('child_process'),
,
class SEOAccessibility {,
  constructor() {,
    this.projectRoot = process.cwd(),
    this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'),
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'),
    this.startTime = Date.now()
  };
,
  log(message) {,
    const timestamp = new Date().toISOString(),
    const logMessage = `[${timestamp}] ${message}\n`,
,
    try {,
      fs.appendFileSync(this.logFile, logMessage)
    } catch (error) {,
      console.error('Error writing to log file:', error.message)
    };
  };
,
  async checkSEO() {,
    try {,
      this.log('🔍 Checking SEO...'),
,
      const seoIssues = [],
      const pagesDir = path.join(this.projectRoot, 'pages'),
,
      if (fs.existsSync(pagesDir)) {,
        const pageFiles = this.getPageFiles(pagesDir),
,
        pageFiles.forEach(file => {,
          const content = fs.readFileSync(file, 'utf8'),
          const seoChecks = this.analyzeSEO(file, content),
          seoIssues.push(...seoChecks)
        })
      };
    };
  };
,
  getPageFiles(dir) {,
    const files = [],
,
    const scanDirectory = (currentDir) => {,
      const items = fs.readdirSync(currentDir),
      items.forEach(item => {,
        const fullPath = path.join(currentDir, item),
        const stat = fs.statSync(fullPath),
,
        if (stat.isDirectory()) {,
          scanDirectory(fullPath)
        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {,
          files.push(fullPath)
        };
      })
    };
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
<<<<<<< HEAD
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD
;
class SEOAccessibility {; constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()};
; log(message) {; const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`;
; try {; fs.appendFileSync(this.logFile, logMessage)} catch (error) {; console.error('Error writing to log file: ', error.message)}};
; async checkSEO() {; try {; this.log('🔍 Checking SEO...');
; const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages');
; if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir);
; pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}};
; getPageFiles(dir) {; const files = [];
; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath);
; if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {; files.push(fullPath)}})};
;
<<<<<<< HEAD
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
=======

;
#!/usr/bin/env node,;
const fs = require('fs'),;
const path = require('path'),;
const { execSync } = require('child_process'),;
,;
class SEOAccessibility {,;
  constructor() {,;
    this.projectRoot = process.cwd(),;
    this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'),;
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'),;
    this.startTime = Date.now();
  },;
,;
  log(message) {,;
    const timestamp = new Date().toISOString(),;
    const logMessage = `[${timestamp}] ${message}\n`,;
,;
    try {,;
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {,;
      console.error('Error writing to log: file:', error.message);
    }
  },;
,;
  async checkSEO() {,;
    try {,;
      this.log('🔍 Checking SEO...'),;
,;
      const seoIssues = [],;
      const pagesDir = path.join(this.projectRoot, 'pages'),;
,;
      if (fs.existsSync(pagesDir)) {,;
        const pageFiles = this.getPageFiles(pagesDir),;
,;
        pageFiles.forEach(file => {,;
          const content = fs.readFileSync(file, 'utf8'),;
          const seoChecks = this.analyzeSEO(file, content),;
          seoIssues.push(...seoChecks);
        });
      }
    }
  },;
,;
  getPageFiles(dir) {,;
    const files = [],;
,;
    const scanDirectory = (currentDir) => {,;
      const items = fs.readdirSync(currentDir),;
      items.forEach(item => {,;
        const fullPath = path.join(currentDir, item),;
        const stat = fs.statSync(fullPath),;
,;
        if (stat.isDirectory()) {,;
          scanDirectory(fullPath);
        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {,;
          files.push(fullPath);
        }
<<<<<<< HEAD
      })
    },

>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
<<<<<<< HEAD
      });
    },;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
<<<<<<< HEAD
=======
module.exports = SEOAccessibilityScanner;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
#!/usr/bin/env node,
const fs = require('fs'),
const path = require('path'),
const { execSync } = require('child_process'),
,
class SEOAccessibility {,
  constructor() {,
    this.projectRoot = process.cwd(),
    this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'),
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'),
    this.startTime = Date.now()
  };
,
  log(message) {,
    const timestamp = new Date().toISOString(),
    const logMessage = `[${timestamp}] ${message}\n`,
,
    try {,
      fs.appendFileSync(this.logFile, logMessage)
    } catch (error) {,
      console.error('Error writing to log file:', error.message)
    };
  };
,
  async checkSEO() {,
    try {,
      this.log('🔍 Checking SEO...'),
,
      const seoIssues = [],
      const pagesDir = path.join(this.projectRoot, 'pages'),
,
      if (fs.existsSync(pagesDir)) {,
        const pageFiles = this.getPageFiles(pagesDir),
,
        pageFiles.forEach(file => {,
          const content = fs.readFileSync(file, 'utf8'),
          const seoChecks = this.analyzeSEO(file, content),
          seoIssues.push(...seoChecks)
        })
      };
    };
  };
,
  getPageFiles(dir) {,
    const files = [],
,
    const scanDirectory = (currentDir) => {,
      const items = fs.readdirSync(currentDir),
      items.forEach(item => {,
        const fullPath = path.join(currentDir, item),
        const stat = fs.statSync(fullPath),
,
        if (stat.isDirectory()) {,
          scanDirectory(fullPath)
        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {,
          files.push(fullPath)
        };
      })
    };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
class SEOAccessibility {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkSEO() {try {; this.log('🔍 Checking SEO...'); const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages'); if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir); pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}}; getPageFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.jsx') |item.endsWith('.ts') |item.endsWith('.tsx')) {files.push(fullPath)}})}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======

      });
    },;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

=======

      });
    },;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
