<<<<<<< HEAD

<<<<<<< HEAD

=======
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
#!/usr/bin/env node;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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
      })
    },

ursor/fix-lint-push-and-merge-to-main-28da
      });
    },;
ursor/automate-test-improve-and-merge-code-4094
module.exports = SEOAccessibilityScanner;
ursor/add-new-services-and-deploy-updates-0462
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
class SEOAccessibility {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkSEO() {try {; this.log('🔍 Checking SEO...'); const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages'); if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir); pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}}; getPageFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.jsx') |item.endsWith('.ts') |item.endsWith('.tsx')) {files.push(fullPath)}})}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
=======

class SEOAccessibility {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkSEO() {try {; this.log('🔍 Checking SEO...'); const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages'); if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir); pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}}; getPageFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.jsx') |item.endsWith('.ts') |item.endsWith('.tsx')) {files.push(fullPath)}})}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      });
    },;

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      });
    },;

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class SEOAccessibility {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkSEO() {try {; this.log('🔍 Checking SEO...'); const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages'); if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir); pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}}; getPageFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.jsx') |item.endsWith('.ts') |item.endsWith('.tsx')) {files.push(fullPath)}})}



}
}
      });
    },;
class SEOAccessibility {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkSEO() {try {; this.log('🔍 Checking SEO...'); const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages'); if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir); pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}}; getPageFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.jsx') |item.endsWith('.ts') |item.endsWith('.tsx')) {files.push(fullPath)}})}
      });
    },;
<<<<<<< HEAD


}
}
      });
    },;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
