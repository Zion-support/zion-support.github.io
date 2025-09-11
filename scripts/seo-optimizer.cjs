#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class SEOOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(__dirname, '../logs/seo-report.json');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  getAllFiles(dir, extensions) {
    const files = [];
    const items = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
        files.push(...this.getAllFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
    return files;
  }

  analyzeFile(filePath, content) {
    const relativePath = path.relative(this.projectRoot, filePath);
    const analysis = {
      file: relativePath,
      hasTitle: /<title[^>]*>[^<]*<\/title>/i.test(content),
      hasMetaDescription: /<meta[^>]*name=["']description["'][^>]*content=["'][^"']*["']/i.test(content),
      hasH1: /<h1[^>]*>.*<\/h1>/is.test(content),
      hasImages: /<img[^>]*>/i.test(content),
      titleLength: 0,
      metaLength: 0,
      issues: []
    };
    const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/i);
    if (titleMatch) analysis.titleLength = titleMatch[1].length;
    const metaMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
    if (metaMatch) analysis.metaLength = metaMatch[1].length;
    return analysis;
  }

  updateMetrics(metrics, analysis) {
    if (analysis.hasTitle) {
      metrics.pagesWithTitle++;
      metrics.averageTitleLength += analysis.titleLength;
    }
    if (analysis.hasMetaDescription) {
      metrics.pagesWithMetaDescription++;
      metrics.averageMetaLength += analysis.metaLength;
    }
    if (analysis.hasH1) metrics.pagesWithH1++;
    if (analysis.hasImages) metrics.pagesWithImages++;
  }

  checkIssues(seoReport, analysis) {
    if (!analysis.hasTitle) seoReport.issues.push(`${analysis.file}: Missing <title>`);
    if (!analysis.hasMetaDescription) seoReport.issues.push(`${analysis.file}: Missing meta description`);
    if (!analysis.hasH1) seoReport.issues.push(`${analysis.file}: Missing <h1>`);
    if (analysis.titleLength && (analysis.titleLength < 30 || analysis.titleLength > 60)) {
      seoReport.issues.push(`${analysis.file}: Title length ${analysis.titleLength} outside 30-60 range`);
    }
    if (analysis.metaLength && (analysis.metaLength < 120 || analysis.metaLength > 160)) {
      seoReport.issues.push(`${analysis.file}: Meta description length ${analysis.metaLength} outside 120-160 range`);
    }
  }

  generateRecommendations(seoReport) {
    const m = seoReport.metrics;
    if (m.pagesWithTitle < Math.ceil(m.totalPages * 0.8)) seoReport.recommendations.push('Add title tags to at least 80% of pages');
    if (m.pagesWithMetaDescription < Math.ceil(m.totalPages * 0.8)) seoReport.recommendations.push('Add meta descriptions to at least 80% of pages');
    if (m.pagesWithH1 < Math.ceil(m.totalPages * 0.9)) seoReport.recommendations.push('Ensure pages include a single H1');
    if (m.pagesWithTitle > 0) m.averageTitleLength = Math.round(m.averageTitleLength / m.pagesWithTitle);
    if (m.pagesWithMetaDescription > 0) m.averageMetaLength = Math.round(m.averageMetaLength / m.pagesWithMetaDescription);
  }

  saveReport(seoReport) {
    const outDir = path.dirname(this.reportFile);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(this.reportFile, JSON.stringify(seoReport, null, 2));
    this.log(`SEO report saved to ${this.reportFile}`);
  }

  async optimizeSEO() {
    this.log('Starting SEO optimization...');
    const files = this.getAllFiles(this.projectRoot, ['.html', '.tsx', '.jsx']);
    const seoReport = {
      timestamp: new Date().toISOString(),
      metrics: {
        totalPages: 0,
        pagesWithTitle: 0,
        pagesWithMetaDescription: 0,
        pagesWithH1: 0,
        pagesWithImages: 0,
        averageTitleLength: 0,
        averageMetaLength: 0
      },
      issues: [],
      recommendations: []
    };
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const analysis = this.analyzeFile(file, content);
        seoReport.metrics.totalPages++;
        this.updateMetrics(seoReport.metrics, analysis);
        this.checkIssues(seoReport, analysis);
      } catch (err) {
        this.log(`Failed to analyze ${file}: ${err.message}`, 'WARN');
      }
    }
    this.generateRecommendations(seoReport);
    this.saveReport(seoReport);
    this.log(`Completed. Analyzed ${seoReport.metrics.totalPages} files.`);
    return seoReport;
  }

  async run() {
    return this.optimizeSEO();
  }
}

if (require.main === module) {
  const optimizer = new SEOOptimizer();
  optimizer.run().catch(err => { console.error(err); process.exit(1); });
}

module.exports = SEOOptimizer;
