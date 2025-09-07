




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
#!/usr/bin/env node;
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
  },;
  log(message) {,;
    const timestamp = new Date().toISOString(),;
    const logMessage = `[${timestamp}] ${message}\n`,;
    try {,;
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {,;
      console.error('Error writing to log: file:', error.message);
    }
  async checkSEO() {,;
      this.log('🔍 Checking SEO...'),;
      const seoIssues = [],;
      const pagesDir = path.join(this.projectRoot, 'pages'),;
      if (fs.existsSync(pagesDir)) {,;
        const pageFiles = this.getPageFiles(pagesDir),;
        pageFiles.forEach(file => {,;)
          const content = fs.readFileSync(file, 'utf8'),;
          const seoChecks = this.analyzeSEO(file, content),;
          seoIssues.push(...seoChecks);
        });
  getPageFiles(dir) {,;
    const files = [],;
    const scanDirectory = (currentDir) => {,;
      const items = fs.readdirSync(currentDir),;
      items.forEach(item => {,;)
        const fullPath = path.join(currentDir, item),;
        const stat = fs.statSync(fullPath),;
        if (stat.isDirectory()) {,;
          scanDirectory(fullPath);
        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {,;
          files.push(fullPath);
      })
    },

ursor/fix-lint-push-and-merge-to-main-28da;
ursor/automate-test-improve-and-merge-code-4094;
module.exports = SEOAccessibilityScanner;
ursor/add-new-services-and-deploy-updates-0462;
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
  log(message) {,
    const timestamp = new Date().toISOString(),`;
    const logMessage = `[${timestamp}] ${message}\n`,
    try {,
      fs.appendFileSync(this.logFile, logMessage)
    } catch (error) {,
      console.error('Error writing to log file:', error.message)
  async checkSEO() {,
      this.log('🔍 Checking SEO...'),
      const seoIssues = [],
      const pagesDir = path.join(this.projectRoot, 'pages'),
      if (fs.existsSync(pagesDir)) {,
        const pageFiles = this.getPageFiles(pagesDir),
        pageFiles.forEach(file => {,)
          const content = fs.readFileSync(file, 'utf8'),
          const seoChecks = this.analyzeSEO(file, content),
          seoIssues.push(...seoChecks)
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
`;
class SEOAccessibility {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkSEO() {try {; this.log('🔍 Checking SEO...'); const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages'); if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir); pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}}; getPageFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.jsx') |item.endsWith('.ts') |item.endsWith('.tsx')) {files.push(fullPath)}})}`;
class SEOAccessibility {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkSEO() {try {; this.log('🔍 Checking SEO...'); const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages'); if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir); pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}}; getPageFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.jsx') |item.endsWith('.ts') |item.endsWith('.tsx')) {files.push(fullPath)}})}





origin/cursor/integrate-build-improve-and-re-verify-c7b5;
ursor/integrate-build-improve-and-re-verify-8f7d;
const { execSync } = require('child_process');`;
    },;`;





    
    try {}
      fs.appendFileSync(this.logFile, logMessage);,
    } catch (error) {}
      _console.error('Failed to write to log file:', error.message);',
  error(message) {}
    this.log(message, 'ERROR');',
    try {}`;
      fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] ERROR: ${message}\n`);,
    } catch (err) {}
      _console.error('Failed to write to error file:', err.message);',
  async checkSEO() {}
    this.log('Checking SEO metrics...');',
      const seoIssues = [];,
      const seoScore = { total: 0, passed: 0, failed: 0 };,
      // Check for meta tags in HTML files;
      const htmlFiles = this.findHtmlFiles();
      for (const file of, htmlFiles) {}
        const content = fs.readFileSync(file, 'utf8');',
        const fileIssues = this.analyzeSEOContent(content, file);,
        seoIssues.push(...fileIssues);,
      // Check for sitemap;
      const sitemapFiles = ['sitemap.xml', 'sitemap.txt', 'public/sitemap.xml'];',
      let sitemapExists = false;,
      for (const sitemap of, sitemapFiles) {}
        if (fs.existsSync(sitemap)) {}
          sitemapExists = true;,
          break;,
      if (!sitemapExists) {}
        seoIssues.push({}),
          type: 'missing_sitemap,',
          severity: 'medium,',
          message: 'No sitemap found,',
          file: 'global;,
        });,
      // Check for robots.txt;
      if (!fs.existsSync('robots.txt') && !fs.existsSync('public/robots.txt')) {'}
          type: 'missing_robots,',
          severity: 'low,',
          message: 'No robots.txt found,',
      // Calculate SEO score;
      const totalChecks = 10; // Adjust based on actual checks;
      const passedChecks = totalChecks - seoIssues.length;
      seoScore.total = totalChecks;
      seoScore.passed = passedChecks;
      seoScore.failed = seoIssues.length;`;
      this.log(`SEO check completed: ${passedChecks}/${totalChecks} checks passed`);,
      return {}
        success: true,
        issues: seoIssues,
        score: seoScore,
        sitemapExists,
        robotsExists: fs.existsSync('robots.txt') || fs.existsSync('public/robots.txt'),
      };,
    } catch (error) {}`;
      this.error(`SEO check failed: ${error.message}`);,
      return { success: false, error: error.message };,
  analyzeSEOContent(content, filePath) {}
    const issues = [];,
    // Check for title tag;
    if (!content.includes('<title>') && !content.includes('<title ')) {'}
</title>
    const imgTags = content.match(/<img[^>]*>/g) || [];,
</img>
    const h1Count = (content.match(/<h1[^>]*>/g) || []).length;,
</h1>
    if (!content.includes('lang=') && !content.includes('<html lang=')) {'}
      issues.push({}),
        type: 'missing_lang,',
        severity: 'high,',
        message: 'Missing lang attribute on html tag,',
        file: filePath;,
    // Check for proper heading hierarchy;
    const headings = content.match(/<h[1-6][^>]*>/g) || [];,
</html>
      const level = parseInt(heading.match(/<h([1-6])/)[1]);,
      if (level > previousLevel + 1) {}
</h>
    const inputTags = content.match(/<input[^>]*>/g) || [];,
</input>`;
          if (!inputId || !content.includes(`<label for="${inputId[1]}">`)) {"}"
</label>
    const styleTags = content.match(/<style[^>]*>[\s\S]*?<\/style>/g) || [];,
</style>"`;