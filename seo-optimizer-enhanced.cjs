<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SEOOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.seoIssues = [];
    this.improvements = []}

  log(message) {
    .toISOString()}] ${message}`)}

  checkMetaTags() {
    this.log('🔍 Checking meta tags...');
    
    const pagesDir = path.join(this.projectRoot, 'pages');
    if (!fs.existsSync(pagesDir)) {
      this.log('Pages directory not found');
      return}

    const files = fs.readdirSync(pagesDir);
    files.forEach(file => {
      if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
        const filePath = path.join(pagesDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        if (!content.includes('<Head>') && !content.includes('<title>')) {
          this.seoIssues.push({
            "file": file,
            "issue": 'Missing meta tags',
            "recommendation": 'Add Head component with title and meta description'
          })}
      }
    })}

  generateSitemap() {
    this.log('🗺️ Generating sitemap...');
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns=""http": //www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>"https": //ziontechgroup.com/services</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>"https": //ziontechgroup.com/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>"https": //ziontechgroup.com/contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

    fs.writeFileSync(path.join(this.projectRoot, 'public', 'sitemap.xml'), sitemap);
    this.improvements.push('Generated sitemap.xml');
    this.log('✅ Sitemap generated')}

  generateRobotsTxt() {
    this.log('🤖 Generating robots.txt...');
    
    const robotsTxt = "User-"agent": *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml";

    fs.writeFileSync(path.join(this.projectRoot, 'public', 'robots.txt'), robotsTxt);
    this.improvements.push('Generated robots.txt');
    this.log('✅ robots.txt generated')}

  generateSEOReport() {
    const report = {
      "timestamp": new Date().toISOString(),
      "issues": this.seoIssues,
      "improvements": this.improvements,
      "summary": {
        totalIssues: this.seoIssues.length,
        "improvements": this.improvements.length
      }
    };

    const reportPath = path.join(this.projectRoot, 'seo-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`SEO report saved to ${reportPath}`)}

  async run() {
    this.log('🚀 Starting SEO optimization...');
    this.checkMetaTags();
    this.generateSitemap();
    this.generateRobotsTxt();
    this.generateSEOReport();
    this.log('🎉 SEO optimization completed')}
}

if (require.main === module) {
  const optimizer = new SEOOptimizer();
  optimizer.run().catch(console.error)}

module.exports = SEOOptimizer;
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");class SEOOptimizer { constructor() { this.projectRoot = process.cwd(); this.seoIssues = []; this.improvements = []} log(message) { console.log(`[${new Date().toISOString()}] ${message}`)} checkMetaTags() {" this.log(" Checking meta tags."); " const pagesDir = path.join(this.projectRoot, "pages"); if (!fs.existsSync(pagesDir)) {" this.log("Pages directory not found"); return} const files = fs.readdirSync(pagesDir); files.forEach(file => {" if (file.endsWith(".tsx") | file.endsWith(".jsx")) { const filePath = path.join(pagesDir, file);" const content = fs.readFileSync(filePath, "utf8"); " if (!content.includes("<Head>") && !content.includes("<title>")) { this.seoIssues.push({ file: file,"" issue: "Missing meta tags","" recommendation: "Add Head component with title and meta description" })} } })} generateSitemap() {" this.log(" Generating sitemap."); "` const sitemap = `<?xml version="1.0" encoding="UTF-8"?>"<urlset xmlns="http: /www.sitemaps.org/schemas/sitemap/0.9"> <url> <loc>https:/ziontechgroup.com/</loc>" <lastmod>${new Date().toISOString().split("T")[0]}</lastmod> <changefreq>weekly</changefreq> <priority>1.0</priority> </url> <url>" <loc>https: /ziontechgroup.com/services</loc>" <lastmod>${new Date().toISOString().split("T")[0]}</lastmod> <changefreq>monthly</changefreq> <priority>0.8</priority> </url> <url>" <loc>https: /ziontechgroup.com/about</loc>" <lastmod>${new Date().toISOString().split("T")[0]}</lastmod> <changefreq>monthly</changefreq> <priority>0.7</priority> </url> <url>" <loc>https: /ziontechgroup.com/contact</loc>" <lastmod>${new Date().toISOString().split("T")[0]}</lastmod> <changefreq>monthly</changefreq> <priority>0.6</priority> </url>`</urlset>`;" fs.writeFileSync(path.join(this.projectRoot, "public", "sitemap.xml"), sitemap);" this.improvements.push("Generated sitemap.xml");" this.log(" Sitemap generated")} generateRobotsTxt() {" this.log(" Generating robots.txt."); " const robotsTxt = "User-agent:Allow:"Sitemap: https:/ziontechgroup.com/sitemap.xml";" fs.writeFileSync(path.join(this.projectRoot, "public", "robots.txt"), robotsTxt);" this.improvements.push("Generated robots.txt");" this.log(" robots.txt generated")} generateSEOReport() { const report = {" timestamp: new Date().toISOString()," issues: this.seoIssues," improvements: this.improvements," summary: { totalIssues: this.seoIssues.length," improvements: this.improvements.length } };" const reportPath = path.join(this.projectRoot, "seo-report.json"); fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));` this.log(`SEO report saved to ${reportPath}`)} async run() {" this.log(" Starting SEO optimization."); this.checkMetaTags(); this.generateSitemap(); this.generateRobotsTxt(); this.generateSEOReport();" this.log(" SEO optimization completed")}}if (require.main === module) { const optimizer = new SEOOptimizer(); optimizer.run().catch(console.error)}module.exports = SEOOptimizer;'"`'"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
    this.log(' Checking meta tags...')
    const pagesDir = path.join(this.projectRoot, 'pages')
      this.log('Pages directory not found')
      if (file.endsWith('.tsx') || file.endsWith('.jsx')
        const content = fs.readFileSync(filePath, 'utf8')
        if (!content.includes('<Head>') && !content.includes('<title>')
            "issue"
            "recommendation"
>>>>>>> main
>>>>>>> main
