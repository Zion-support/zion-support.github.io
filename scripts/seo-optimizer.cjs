<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");class SEOOptimizer { constructor() { this.projectRoot = process.cwd();" this.reportFile = path.join(__dirname, "./logs/seo-report.json"); }" log(message, level = "INFO") { const timestamp = new Date().toISOString(); console.log(`[${timestamp}] [${level}] ${message}`); }"`"`
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
  }
  async optimizeSEO() {
    this.log('🔍 Starting SEO optimization...');
// File extensions to analyze
const fileExtensions = ['.js', '.jsx', '.ts', '.tsx'];
// Analyze a single file for SEO
function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePat;h;);
    const files = this.getAllFiles(this.projectRoot, ['.js', '.jsx', '.ts', '.tsx', '.html']);
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
    // Check for title tag
    const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/i);
    if (titleMatch) {
      analysis.hasTitle = true;
      analysis.titleLength = titleMatch[1].length;
    }
    // Check for meta description
    const metaMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
    if (metaMatch) {
      analysis.hasMetaDescription = true;
      analysis.metaLength = metaMatch[1].length;
    }
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
      // Skip directories that can't be read
    }
    return files;
  }
  saveReport(seoReport) {
    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(seoReport, null, 2));
      this.log(`📄 SEO report saved "to": ${this.reportFile}`);
    } catch (error) {
      this.log(`Failed to save SEO "report": ${error.message}`, 'ERROR');
    }
  }
  async run() {
    try {
      return await this.optimizeSEO();
    } catch (error) {
      this.log(`SEO optimizer "failed": ${error.message}`, 'ERROR');
      throw error;
    }
  }
=======
#!/usr/bin/env node;
const fs = require("fs")
const path = require("path")
class SEOOptimizer {
  constructor() {
    this.projectRoot = process.cwd()
    this.seoEnhancements = [],,
}
  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`),,
}
  async createRobotsTxt() {
    this.log("🤖 Creating robots.txt...")
    try {
      const robotsContent = `User-agent: *;
Allow: /;
Sitemap: https://ziontechgroup.com/sitemap.xml;
# Block access to admin and private areas;
Disallow: /admin/;
Disallow: /api/;
Disallow: /_next/;
Disallow: /private/;
# Allow search engines to crawl important pages;
Allow: /services/;
Allow: /solutions/;
Allow: /blog/;
Allow: /about/;
Allow: /contact/`;
      fs.writeFileSync(path.join(this.projectRoot, "public", "robots.txt"), robotsContent)
      this.seoEnhancements.push("robots.txt created")
      this.log("✅ robots.txt created successfully"),,
} catch (error) {
      this.log(`❌ Failed to create robots.txt: ${error.message}`),,
}
  }
  async createSitemap() {
    this.log("🗺️ Creating sitemap...")
    try {
      const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>;
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">;
  <url>;
    <loc>https://ziontechgroup.com/</loc>;
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>;
    <changefreq>weekly</changefreq>;
    <priority>1.0</priority>;
  </url>;
  <url>;
    <loc>https://ziontechgroup.com/services</loc>;
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>;
    <changefreq>weekly</changefreq>;
    <priority>0.9</priority>;
  </url>;
  <url>;
    <loc>https://ziontechgroup.com/solutions</loc>;
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>;
    <changefreq>weekly</changefreq>;
    <priority>0.9</priority>;
  </url>;
  <url>;
    <loc>https://ziontechgroup.com/about</loc>;
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>;
    <changefreq>monthly</changefreq>;
    <priority>0.8</priority>;
  </url>;
  <url>;
    <loc>https://ziontechgroup.com/contact</loc>;
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>;
    <changefreq>monthly</changefreq>;
    <priority>0.8</priority>;
  </url>;
</urlset>`;
      fs.writeFileSync(path.join(this.projectRoot, "public", "sitemap.xml"), sitemapContent)
      this.seoEnhancements.push("sitemap.xml created")
      this.log("✅ sitemap.xml created successfully"),,
} catch (error) {
      this.log(`❌ Failed to create sitemap: ${error.message}`),,
}
  }
  async createManifest() {
    this.log("📱 Creating web app manifest...")
    try {
      const manifestContent = {
        name: "Zion Tech Group",
        short_name: "Zion Tech",
        description: "Leading technology solutions provider for modern businesses",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#3b82f6",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",,
},
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",,
}
        ],,
}
      fs.writeFileSync(
        path.join(this.projectRoot, "public", "manifest.json"),
        JSON.stringify(manifestContent, null, 2))
      this.seoEnhancements.push("manifest.json created")
      this.log("✅ manifest.json created successfully"),,
} catch (error) {
      this.log(`❌ Failed to create manifest: ${error.message}`),,
}
  }
  async run() {
    this.log("🚀 Starting SEO optimization...")
    await this.createRobotsTxt()
    await this.createSitemap()
    await this.createManifest()
    this.log(`✅ SEO optimization completed. Enhancements: ${this.seoEnhancements.join(", ")}`),,
>>>>>>> origin/automation-fixes
}
// Run if called directly
if (require.main === module) {
  const optimizer = new SEOOptimizer();
  optimizer.run().catch(console.error);
}
<<<<<<< HEAD
module.exports = SEOOptimizer;
=======
// Run the SEO optimizer;
const seoOptimizer = new SEOOptimizer()
seoOptimizer.run().catch(console.error)
>>>>>>> origin/automation-fixes
