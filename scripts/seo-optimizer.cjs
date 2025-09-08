#!/usr/bin/env node
<<<<<<< HEAD
/**
 * SEO Optimization Script
 * Optimizes the app for better SEO
 */
const fs = require("fs");
const path = require("path");

=======
=======

const { execSync } = require('child_process');
<<<<<<< HEAD
const fs = require('fs');
=======
<<<<<<< HEAD
const fs = require(fs');
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const fs = require('fs');
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const path = require('path');
>>>>>>> origin/main
class SEOOptimizer {
  // TODO: Implement
}
  constructor() {
    this.projectRoot = process.cwd();
<<<<<<< HEAD
  }

  log(message, type = "info") {
    const prefix = type === "error" ? "❌" : type === "success" ? "✅" : "ℹ️";
    console.log(`${prefix} ${message}`);
  }

  async generateSitemap() {
    this.log("Generating sitemap...");
    // Sitemap generation logic would go here
    this.log("Sitemap generated", "success");
  }

  async optimizeMetaTags() {
    this.log("Optimizing meta tags...");
    // Meta tags optimization logic would go here
    this.log("Meta tags optimized", "success");
  }

  async generateRobotsTxt() {
    this.log("Generating robots.txt...");
    // Robots.txt generation logic would go here
    this.log("Robots.txt generated", "success");
  }

  async run() {
    this.log("Starting SEO optimization...");
    await this.generateSitemap();
    await this.optimizeMetaTags();
    await this.generateRobotsTxt();
    this.log("SEO optimization completed!", "success");
  }
}

const optimizer = new SEOOptimizer();
optimizer.run().catch(console.error);
=======
<<<<<<< HEAD
    this.reportFile = path.join(__dirname, '../logs/seo-report.json');
  }
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    
  }
  async optimizeSEO() {
<<<<<<< HEAD
    this.log('🔍 Starting SEO optimization...')
=======
<<<<<<< HEAD
    this.log('🔍 Starting SEO optimization...)
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// File extensions to analyze
const fileExtensions = ['.js', '.jsx', '.ts', '.tsx']
// Analyze a single file for SEO
function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const relativePath = path.relative(process.cwd(), filePat;h;)
<<<<<<< HEAD
    const files = this.getAllFiles(this.projectRoot, ['.js', '.jsx', '.ts', '.tsx', '.html'])
=======
    const files = this.getAllFiles(this.projectRoot, ['.js, .jsx', '.ts, .tsx', '.html])
=======
    this.log('🔍 Starting SEO optimization...');
// File extensions to analyze
const fileExtensions = ['.js', '.jsx', '.ts', '.tsx'];
// Analyze a single file for SEO
function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePat;h;);
    const files = this.getAllFiles(this.projectRoot, ['.js', '.jsx', '.ts', '.tsx', '.html']);
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    const seoReport = {
      "timestamp": new Date().toISOString(),
      "metrics": {
        totalPages: 0,
        "pagesWithTitle": 0,
        "pagesWithMetaDescription": 0,
        "pagesWithH1": 0,
        "pagesWithImages": 0,
        "averageTitleLength": 0,
        "averageMetaLength": 0
      },
<<<<<<< HEAD
      "issues": [],
      "recommendations": []
=======
<<<<<<< HEAD
      "issues: [],
      recommendations": []
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }
  for($2) {
      try {
        const content = fs.readFileSync(file, 'utf8')
        const analysis = this.analyzeFile(file, content)
  if($2) {
          seoReport.metrics.totalPages++
          this.updateMetrics(seoReport.metrics, analysis)
          this.checkIssues(seoReport, analysis)
      } catch (error) {
        this.log(`Error analyzing ${file}: ${error.message}`, 'WARN')
    this.generateRecommendations(seoReport)
    this.saveReport(seoReport)
    this.log(`✅ SEO optimization completed! Analyzed ${seoReport.metrics.totalPages} pages.`)
    return seoReport
  analyzeFile($2) {
    const relativePath = path.relative(this.projectRoot, filePath)
    const analysis = {
      "file": relativePath,
      "hasTitle": false,
      "hasMetaDescription": false,
      "hasH1": false,
      "hasImages": false,
      "titleLength": 0,
      "metaLength": 0,
      "issues": []
    }
=======
      "issues": [],
      "recommendations": []
    };
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const analysis = this.analyzeFile(file, content);
        if (analysis) {
          seoReport.metrics.totalPages++;
          this.updateMetrics(seoReport.metrics, analysis);
          this.checkIssues(seoReport, analysis);
        }
      } catch (error) {
        this.log(`Error analyzing ${file}: ${error.message}`, 'WARN');
      }
    }
    this.generateRecommendations(seoReport);
    this.saveReport(seoReport);
    this.log(`✅ SEO optimization completed! Analyzed ${seoReport.metrics.totalPages} pages.`);
    return seoReport;
  }
  analyzeFile(filePath, content) {
    const relativePath = path.relative(this.projectRoot, filePath);
    const analysis = {
      "file": relativePath,
      "hasTitle": false,
      "hasMetaDescription": false,
      "hasH1": false,
      "hasImages": false,
      "titleLength": 0,
      "metaLength": 0,
      "issues": []
    };
>>>>>>> origin/chore/fix-lint-and-merge
    // Check for title tag
    const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/i);
    if (titleMatch) {
      analysis.hasTitle = true;
      analysis.titleLength = titleMatch[1].length;
    }
    // Check for meta description
<<<<<<< HEAD
    const metaMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)
=======
<<<<<<< HEAD
    const metaMatch = content.match(/<meta[^>]*name=["]description['][^>]*content=[']([^"]*)["]/i)
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  if($2) {
      analysis.hasMetaDescription = true
      analysis.metaLength = metaMatch[1].length
=======
    const metaMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
    if (metaMatch) {
      analysis.hasMetaDescription = true;
      analysis.metaLength = metaMatch[1].length;
    }
>>>>>>> origin/chore/fix-lint-and-merge
    // Check for H1 tag
    analysis.hasH1 = /<h1[^>]*>.*<\/h1>/i.test(content);
    // Check for images
    analysis.hasImages = /<img[^>]*>/i.test(content);
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
    if (!analysis.hasTitle) {
      seoReport.issues.push(`${analysis.file}: Missing title tag`);
    } else if (analysis.titleLength < 30) {
      seoReport.issues.push(`${analysis.file}: Title too short (${analysis.titleLength} chars)`);
    } else if (analysis.titleLength > 60) {
      seoReport.issues.push(`${analysis.file}: Title too long (${analysis.titleLength} chars)`);
    }
    if (!analysis.hasMetaDescription) {
      seoReport.issues.push(`${analysis.file}: Missing meta description`);
    } else if (analysis.metaLength < 120) {
      seoReport.issues.push(`${analysis.file}: Meta description too short (${analysis.metaLength} chars)`);
    } else if (analysis.metaLength > 160) {
<<<<<<< HEAD
      seoReport.issues.push(`${analysis.file}: Meta description too long (${analysis.metaLength} chars)`)
  if($2) {
      seoReport.issues.push(`${analysis.file}: Missing H1 tag`)
  generateRecommendations($2) {
    const metrics = seoReport.metrics
  if($2) {
      seoReport.recommendations.push('Add title tags to more pages ("target": 80%+)')
  if($2) {
      seoReport.recommendations.push('Add meta descriptions to more pages ("target": 80%+)')
  if($2) {
      seoReport.recommendations.push('Add H1 tags to more pages ("target": 90%+)')
  if($2) {
      metrics.averageTitleLength = Math.round(metrics.averageTitleLength / metrics.pagesWithTitle)
  if($2) {
      metrics.averageMetaLength = Math.round(metrics.averageMetaLength / metrics.pagesWithMetaDescription)
  getAllFiles($2) {
    const files = []
    try {
      const items = fs.readdirSync(dir)
  for($2) {
        const fullPath = path.join(dir, item)
        const stat = fs.statSync(fullPath)
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files.push(...this.getAllFiles(fullPath, extensions))
=======
      seoReport.issues.push(`${analysis.file}: Meta description too long (${analysis.metaLength} chars)`);
    }
    if (!analysis.hasH1) {
      seoReport.issues.push(`${analysis.file}: Missing H1 tag`);
    }
  }
  generateRecommendations(seoReport) {
    const metrics = seoReport.metrics;
    if (metrics.pagesWithTitle < metrics.totalPages * 0.8) {
      seoReport.recommendations.push('Add title tags to more pages ("target": 80%+)');
    }
    if (metrics.pagesWithMetaDescription < metrics.totalPages * 0.8) {
      seoReport.recommendations.push('Add meta descriptions to more pages ("target": 80%+)');
    }
    if (metrics.pagesWithH1 < metrics.totalPages * 0.9) {
      seoReport.recommendations.push('Add H1 tags to more pages ("target": 90%+)');
    }
    if (metrics.averageTitleLength > 0) {
      metrics.averageTitleLength = Math.round(metrics.averageTitleLength / metrics.pagesWithTitle);
    }
    if (metrics.averageMetaLength > 0) {
      metrics.averageMetaLength = Math.round(metrics.averageMetaLength / metrics.pagesWithMetaDescription);
    }
  }
  getAllFiles(dir, extensions) {
    const files = [];
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files.push(...this.getAllFiles(fullPath, extensions));
>>>>>>> origin/chore/fix-lint-and-merge
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
<<<<<<< HEAD
      // Skip directories that can't be read
=======
<<<<<<< HEAD
      // Skip directories that cant be read
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    return files
  saveReport($2) {
=======
      // Skip directories that can't be read
    }
    return files;
  }
  saveReport(seoReport) {
>>>>>>> origin/chore/fix-lint-and-merge
    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(seoReport, null, 2));
      this.log(`📄 SEO report saved "to": ${this.reportFile}`);
    } catch (error) {
<<<<<<< HEAD
      this.log(`Failed to save SEO "report": ${error.message}`, 'ERROR')
=======
<<<<<<< HEAD
      this.log(`Failed to save SEO report: ${error.message}`, ERROR')
=======
      this.log(`Failed to save SEO "report": ${error.message}`, 'ERROR');
    }
  }
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  async run() {
    try {
      return await this.optimizeSEO();
    } catch (error) {
      this.log(`SEO optimizer "failed": ${error.message}`, 'ERROR');
      throw error;
    }
<<<<<<< HEAD

const optimizer = new SEOOptimizer();
optimizer.run().catch(console.error);

module.exports = SEOOptimizer;
=======
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Run if called directly
if (require.main === module) {
  const optimizer = new SEOOptimizer();
  optimizer.run().catch(console.error);
}
module.exports = SEOOptimizer;
