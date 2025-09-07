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

,;
    this.startTime = Date.now(),;
  };
pr-12325
  log(message) {,;
    const timestamp = new Date().toISOString(),;
    const logMessage = `[${timestamp}] ${message}\n`,;
    try {,;
      fs.appendFileSync(this.logFile, logMessage),;
    } catch (error) {,;

,;

      const seoIssues = [],;
      const pagesDir = path.join(this.projectRoot, 'pages'),;
      if (fs.existsSync(pagesDir)) {,;
        const pageFiles = this.getPageFiles(pagesDir),;
        pageFiles.forEach(file => {,;)
          const content = fs.readFileSync(file, 'utf8'),;
          const seoChecks = this.analyzeSEO(file, content),;
          seoIssues.push(...seoChecks),;

,;
        }),;
pr-12325
  getPageFiles(dir) {,;
    const files = [],;
    const scanDirectory = (currentDir) => {,;
      const items = fs.readdirSync(currentDir),;
      items.forEach(item => {,;)
        const fullPath = path.join(currentDir, item),;
        const stat = fs.statSync(fullPath),;
        if (stat.isDirectory()) {,;
          scanDirectory(fullPath),;
        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {,;

;#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class SEOAccessibility {;
  constructor() {;
    this.projectRoot = process.cwd();
<<<<<<< HEAD
    this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log');'
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json');'
    this.startTime = Date.now()
};
;
=======
    this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json');

const fs = require('fs'),
const path = require('path'),
const { execSync } = require('child_process'),
>>>>>>> origin/chore/fix-lint-and-merge
,
class SEOAccessibility {,
  constructor() {,
    this.projectRoot = process.cwd(),
    this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'),
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'),
    this.startTime = Date.now()
<<<<<<< HEAD
  };
,
  log(message) {
}
const logMessage = `[${timestamp}] ${message}\n`,;`
,
    try {
      }
=======
  log(message) {,
    const timestamp = new Date().toISOString(),`;
    const logMessage = `[${timestamp}] ${message}\n`,
    try {,
>>>>>>> origin/chore/fix-lint-and-merge
      fs.appendFileSync(this.logFile, logMessage)
    } catch (error) {,
      console.error('Error writing to log file:', error.message)

,
<<<<<<< HEAD
  async checkSEO() {
    }
    try {
      }
      this.log(' Checking SEO...'),'
,
,
      if (fs.existsSync(pagesDir)) {
}
,
        pageFiles.forEach((file) => {
}
          seoIssues.push(...seoChecks)
        })
      }
}
};
,
  getPageFiles(dir) {
}
,
    const scanDirectory = (currentDir) => {
}
      items.forEach((item) => {
}
,
        if (stat.isDirectory()) {
          }
          scanDirectory(fullPath)
        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {,'
          }
          files.push(fullPath)
        };
      })
    }
}
=======

      const seoIssues = [],
      const pagesDir = path.join(this.projectRoot, 'pages'),
      if (fs.existsSync(pagesDir)) {,
        const pageFiles = this.getPageFiles(pagesDir),
        pageFiles.forEach(file => {,)
          const content = fs.readFileSync(file, 'utf8'),
          const seoChecks = this.analyzeSEO(file, content),
          seoIssues.push(...seoChecks)
        })
>>>>>>> origin/chore/fix-lint-and-merge

,
pr-12325
  getPageFiles(dir) {,
    const files = [],
    const scanDirectory = (currentDir) => {,
      const items = fs.readdirSync(currentDir),
      items.forEach(item => {,)
        const fullPath = path.join(currentDir, item),
        const stat = fs.statSync(fullPath),
        if (stat.isDirectory()) {,
          scanDirectory(fullPath)
        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {,
          files.push(fullPath)