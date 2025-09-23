#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
class SEOOptimizer {
  constructor() {
    this.seoData = new Map();
  }

  async analyzeSEO() {
    const pagesDir = path.join(__dirname, '..', '..', 'pages');
    this.scanPages(pagesDir);
    
    const issues = this.findSEOIssues();
    const suggestions = this.generateSuggestions(issues);
    
    console.log('SEO analysis completed');
    return { issues, suggestions };
  }

  scanPages(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        this.scanPages(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        this.analyzePage(filePath);
      }
    }
  }

  analyzePage(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const route = filePath.replace(path.join(__dirname, '..', '..', 'pages'), '').replace(/\.[jt]sx?$/, '');
    
    const seoData = {
      hasTitle: /<title>/.test(content),
      hasDescription: /meta.*description/.test(content),
      hasKeywords: /meta.*keywords/.test(content),
      hasOpenGraph: /og:/i.test(content),
      hasTwitterCard: /twitter:/i.test(content),
      hasStructuredData: /application\/ld\+json/.test(content)
    };
    
    this.seoData.set(route, seoData);
  }

  findSEOIssues() {
    const issues = [];
    
    for (const [route, data] of this.seoData) {
      if (!data.hasTitle) issues.push({ route, type: 'missing-title', severity: 'high' });
      if (!data.hasDescription) issues.push({ route, type: 'missing-description', severity: 'medium' });
      if (!data.hasOpenGraph) issues.push({ route, type: 'missing-og', severity: 'medium' });
      if (!data.hasStructuredData) issues.push({ route, type: 'missing-structured-data', severity: 'low' });
    }
    
    return issues;
  }

  generateSuggestions(issues) {
    const suggestions = [];
    
    for (const issue of issues) {
      switch (issue.type) {
        case 'missing-title':
          suggestions.push(`Add <title> tag to ${issue.route}`);
          break;
        case 'missing-description':
          suggestions.push(`Add meta description to ${issue.route}`);
          break;
        case 'missing-og':
          suggestions.push(`Add Open Graph tags to ${issue.route}`);
          break;
        case 'missing-structured-data':
          suggestions.push(`Add structured data to ${issue.route}`);
          break;
      }
    }
    
    return suggestions;
  }
}

const optimizer = new SEOOptimizer();
optimizer.analyzeSEO();
=======
const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'seo-optimizer.log');
const reportFile = path.join(logsDir, 'seo-report.json');

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }
function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  console.log(msg);
  fs.appendFileSync(logFile, line);
}

function scanPages(rootDir) {
  const results = [];
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const item of fs.readdirSync(dir)) {
      const full = path.join(dir, item);
      const s = fs.statSync(full);
      if (s.isDirectory()) walk(full);
      else if (/\.(tsx|ts|jsx|js)$/.test(item)) {
        const content = fs.readFileSync(full, 'utf8');
        const issues = [];
        if (!content.includes('<title>')) issues.push('missing-title');
        if (!/meta[^>]+name=["']description["']/i.test(content)) issues.push('missing-description');
        if (!/og:/i.test(content)) issues.push('missing-og');
        if (!/application\/ld\+json/i.test(content)) issues.push('missing-structured-data');
        if (issues.length) {
          results.push({ file: full, issues });
        }
      }
    }
  };
  walk(rootDir);
  return results;
}

function main() {
  ensureDir(logsDir);
  log('Starting SEO optimizer...');
  const pagesRoot = path.join(__dirname, '..', 'pages');
  const issues = scanPages(pagesRoot);
  fs.writeFileSync(reportFile, JSON.stringify({ timestamp: new Date().toISOString(), issues }, null, 2));
  log(`Found ${issues.length} file(s) with SEO issues`);
}

if (require.main === module) main();
>>>>>>> origin/auto/autonomy-17186719616
