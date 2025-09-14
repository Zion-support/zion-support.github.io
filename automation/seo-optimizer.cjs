#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Starting SEO Optimizer...');

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
        description:
          'Add proper meta tags including title, description, and keywords',
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
    console.log(`📊 Report saved to: ${reportPath}`);
  }

  async run() {
    console.log('🚀 Starting SEO optimization...');

    await this.analyzePages();
    await this.generateRecommendations();
    this.calculateSEOScore();
    await this.saveReport();

    console.log(
      `✅ SEO optimization completed! Score: ${this.results.seoScore}/100`
    );
  }
}

// Run the SEO optimizer
const seoOptimizer = new SEOOptimizer();
seoOptimizer.run().catch(console.error);
