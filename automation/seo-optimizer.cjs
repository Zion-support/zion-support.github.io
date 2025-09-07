#!/usr/bin/env node

/**
 * SEO Optimizer
 * Optimizes SEO elements and structure
 */

const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
=======

console.log('🔍 Starting SEO optimization...');

class SEOOptimizer {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      seoScore: 0,
      issues: [],
      recommendations: [],
      metrics: {},
    };
  }
};

  async analyzePages() {
    console.log('📄 Analyzing pages for SEO...');

    const pagesDir = path.join(process.cwd(), 'pages');
    const appDir = path.join(process.cwd(), 'app');

    let pages = [];

    if (fs.existsSync(pagesDir)) {
      pages = this.findPages(pagesDir);
    } else if (fs.existsSync(appDir)) {
      pages = this.findAppPages(appDir);
    }

    this.results.metrics.totalPages = pages.length;

    for (const page of pages) {
      await this.analyzePage(page);
    }
  }

  findPages(dir) {
    const pages = [];
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        pages.push(...this.findPages(filePath));
      } else if (
        file.endsWith('.js') ||
        file.endsWith('.jsx') ||
        file.endsWith('.ts') ||
        file.endsWith('.tsx')
      ) {
        pages.push(filePath);
      }
    });

    return pages;
  }

  findAppPages(dir) {
    const pages = [];
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        pages.push(...this.findAppPages(filePath));
      } else if (
        file === 'page.js' ||
        file === 'page.tsx' ||
        file === 'layout.js' ||
        file === 'layout.tsx'
      ) {
        pages.push(filePath);
      }
    });

    return pages;
  }

  async analyzePage(pagePath) {
    try {
      const content = fs.readFileSync(pagePath, 'utf8');

      // Check for meta tags
      if (!content.includes('<title>') && !content.includes('title:')) {
        this.results.issues.push({
          type: 'missing_title',
          file: pagePath,
          severity: 'high',
        });
      }

      if (
        !content.includes('description') &&
        !content.includes('meta name="description"')
      ) {
        this.results.issues.push({
          type: 'missing_description',
          file: pagePath,
          severity: 'medium',
        });
      }

      // Check for heading structure
      const h1Count = (content.match(/<h1[^>]*>/gi) || []).length;
      if (h1Count === 0) {
        this.results.issues.push({
          type: 'missing_h1',
          file: pagePath,
          severity: 'medium',
        });
      }
    } catch (error) {
      console.error(`Error analyzing page ${pagePath}:`, error.message);
    }
  }

  async generateRecommendations() {
    console.log('💡 Generating SEO recommendations...');

    this.results.recommendations = [
      {
        type: 'meta_tags',
        priority: 'high',
        description: 'Add proper meta tags including title, description, and keywords',
      },
      {
        type: 'heading_structure',
        priority: 'medium',
        description: 'Ensure proper heading hierarchy (H1, H2, H3)',
      },
      {
        type: 'alt_text',
        priority: 'medium',
        description: 'Add alt text to all images for accessibility and SEO',
      },
      {
        type: 'sitemap',
        priority: 'low',
        description: 'Generate and submit XML sitemap to search engines',
      },
    ];
  }

  calculateSEOScore() {
    const totalIssues = this.results.issues.length;
    const highSeverityIssues = this.results.issues.filter(
      issue => issue.severity === 'high'
    ).length;
    const mediumSeverityIssues = this.results.issues.filter(
      issue => issue.severity === 'medium'
    ).length;

    // Calculate score based on issues (100 - penalties)
    let score = 100;
    score -= highSeverityIssues * 20;
    score -= mediumSeverityIssues * 10;
    score -= (totalIssues - highSeverityIssues - mediumSeverityIssues) * 5;

    this.results.seoScore = Math.max(0, score);
  }

  async saveReport() {
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    const reportPath = path.join(
      logsDir,
      `seo-optimization-${Date.now()}.json`
    );
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`📊 Report saved: to: ${reportPath}`);
  }

  async run() {
    console.log('🚀 Starting SEO optimization...');

    await this.analyzePages();
    await this.generateRecommendations();
    this.calculateSEOScore();
    await this.saveReport();

    console.log(
      `✅ SEO optimization completed! Scor: e: ${this.results.seoScore}/100`
    );
  }
}

// Check meta tags
function checkMetaTags(dir) {
  const issues = [];
  const files = getAllFiles(dir, ['.jsx', '.tsx', '.js', '.ts']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for missing meta description
    if (content.includes('<Head>') || content.includes('<head>')) {
      if (!content.includes('meta name="description"')) {
        issues.push({
          file: path.relative(__dirname, file),
          type: 'missing-meta-description',
          severity: 'high',
          message: 'Missing meta description tag'
        });
      }
      
      // Check for missing viewport meta tag
      if (!content.includes('meta name="viewport"')) {
        issues.push({
          file: path.relative(__dirname, file),
          type: 'missing-viewport-meta',
          severity: 'high',
          message: 'Missing viewport meta tag'
        });
      }
    }
  });
  
  return issues;
}

// Check heading structure
function checkHeadingStructure(dir) {
  const issues = [];
  const files = getAllFiles(dir, ['.jsx', '.tsx', '.js', '.ts']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for proper heading hierarchy
    const headings = content.match(/<h[1-6][^>]*>.*?<\/h[1-6]>/gi);
    if (headings) {
      let lastLevel = 0;
      headings.forEach(heading => {
        const level = parseInt(heading.match(/<h([1-6])/)[1]);
        if (level > lastLevel + 1) {
          issues.push({
            file: path.relative(__dirname, file),
            type: 'heading-hierarchy',
            severity: 'medium',
            message: `Heading level ${level} follows level ${lastLevel}`
          });
        }
        lastLevel = level;
      });
    }
  });
  
  return issues;
}

// Check page titles
function checkPageTitles(dir) {
  const issues = [];
  const files = getAllFiles(dir, ['.jsx', '.tsx', '.js', '.ts']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for missing or empty page titles
    if (content.includes('<Head>') || content.includes('<head>')) {
      const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/i);
      if (!titleMatch || !titleMatch[1].trim()) {
        issues.push({
          file: path.relative(__dirname, file),
          type: 'missing-page-title',
          severity: 'high',
          message: 'Missing or empty page title'
        });
      }
    }
  });
  
  return issues;
}

// Get all files recursively
function getAllFiles(dir, extensions = []) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  });
  
  return files;
}
<<<<<<< HEAD
module.exports = SEOOptimizer;
=======

// Run SEO audit
function runSEOAudit() {
  const srcDir = path.join(__dirname, '..', 'src');
  const componentsDir = path.join(__dirname, '..', 'components');
  const pagesDir = path.join(__dirname, '..', 'pages');
  
  const audit = {
    timestamp: new Date().toISOString(),
    checks: {
      metaTags: checkMetaTags(srcDir).concat(checkMetaTags(componentsDir)).concat(checkMetaTags(pagesDir)),
      headingStructure: checkHeadingStructure(srcDir).concat(checkHeadingStructure(componentsDir)).concat(checkHeadingStructure(pagesDir)),
      pageTitles: checkPageTitles(srcDir).concat(checkPageTitles(componentsDir)).concat(checkPageTitles(pagesDir))
    },
    summary: {
      totalIssues: 0,
      highSeverity: 0,
      mediumSeverity: 0,
      lowSeverity: 0
    }
  };

  // Calculate summary
  Object.values(audit.checks).forEach(check => {
    audit.summary.totalIssues += check.length;
    check.forEach(issue => {
      if (issue.severity === 'high') audit.summary.highSeverity++;
      else if (issue.severity === 'medium') audit.summary.mediumSeverity++;
      else audit.summary.lowSeverity++;
    });
  });

  return audit;
}

// Save audit results
function saveAuditResults(audit) {
  const filename = `seo-audit-${Date.now()}.json`;
  const filepath = path.join(config.outputDir, filename);
  
  fs.writeFileSync(filepath, JSON.stringify(audit, null, 2));
  console.log(`🔍 SEO audit saved to: ${filename}`);
  
  // Print summary
  console.log(`📊 SEO Audit Summary:`);
  console.log(`   Total Issues: ${audit.summary.totalIssues}`);
  console.log(`   High Severity: ${audit.summary.highSeverity}`);
  console.log(`   Medium Severity: ${audit.summary.mediumSeverity}`);
  console.log(`   Low Severity: ${audit.summary.lowSeverity}`);
}

// Main execution
try {
  const audit = runSEOAudit();
  saveAuditResults(audit);
  console.log('✅ SEO optimization completed');
} catch (error) {
  console.error('❌ SEO optimization failed:', error.message);
  process.exit(1);
}