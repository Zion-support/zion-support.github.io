#!/usr/bin/env node
=======

const { execSync } = require('child_process');
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const path = require('path');
>>>>>>> origin/main
class SEOOptimizer {
  // TODO: Implement
}
  constructor() {
    this.projectRoot = process.cwd();
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
    // Check for title tag
    const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/i);
    if (titleMatch) {
      analysis.hasTitle = true;
      analysis.titleLength = titleMatch[1].length;
    }
    // Check for meta description
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
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(seoReport, null, 2));
      this.log(`📄 SEO report saved "to": ${this.reportFile}`);
    } catch (error) {
  async run() {
    try {
      return await this.optimizeSEO();
    } catch (error) {
      this.log(`SEO optimizer "failed": ${error.message}`, 'ERROR');
      throw error;
    }
  }
}
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Run if called directly
if (require.main === module) {
  const optimizer = new SEOOptimizer();
  optimizer.run().catch(console.error);
}
module.exports = SEOOptimizer;
