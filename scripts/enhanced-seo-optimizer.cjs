#!/usr/bin/env node;
const fs = require("fs")";const path = require("path")""
      "seo-optimization-report.json""),"
    console.log(`[${new Date().toISOString()}] ${message}`);
    this.log("� Checking meta tags");""
      "pages": [],""issues": [],,"
    const pagesDir = path.join(this.projectRoot, "src", "pages");";    if (!fs.existsSync(pagesDir)) {";      results.issues.push("Pages directory not found");";      return results,"}
    const files = this.getAllFiles(pagesDir, [".tsx", ".jsx", ".ts", ".js"]);""
        const content = fs.readFileSync(file, "utf8");";        const pageName = path.basename(file);"
          "file": pageName,""hasTitle": content.includes("<title>") || content.includes(""title":"),""hasDescription":;";            content.includes("description") ||";            content.includes("meta name="description""),""hasKeywords":;";            content.includes("keywords") ||";            content.includes("meta name="keywords""),""hasOpenGraph":;";            content.includes(""og":") || content.includes("property=""og":"),""hasTwitterCard":;";            content.includes(""twitter":") || content.includes("name=""twitter":"),"};"
          results.issues.push("${pageName}: Missing title tag");"
          results.issues.push(`${pageName}: Missing meta description`);
          results.issues.push("${pageName}: Missing Open Graph tags");"
        results.issues.push(`Error reading ${file}: ${error.message}`);
    this.log("� Checking sitemap");""
      "exists": false,""valid": false,""issues": [],,"
    const sitemapPath = path.join(this.projectRoot, "public", "sitemap.xml");";    results.exists = fs.existsSync(sitemapPath);"
        const content = fs.readFileSync(sitemapPath, "utf8");";        results.valid =;";          content.includes("<urlset") && content.includes("</urlset>");""
          results.issues.push("Invalid sitemap format");"}"
        results.issues.push("Error reading "sitemap": ${error.message}");"
      results.issues.push("Sitemap not found");"}"
    this.log("🤖 Checking robots.txt");""
      "exists": false,""valid": false,""issues": [],,"
    const robotsPath = path.join(this.projectRoot, "public", "robots.txt");";    results.exists = fs.existsSync(robotsPath);"
        const content = fs.readFileSync(robotsPath, "utf8");";        results.valid =;";          content.includes("User-"agent":") || content.includes(""Sitemap":");""
          results.issues.push("Invalid robots.txt format");"}"
        results.issues.push(`Error reading robots."txt": ${error.message}`);
      results.issues.push("robots.txt not found");"}"
      "timestamp": new Date().toISOString(),""metaTags": results.metaTags,""sitemap": results.sitemap,""robotsTxt": results.robotsTxt,""summary": {""overall": "good", ""totalIssues":;"}
        "recommendations": [],,"
      report.summary.overall = "needs_improvement""}"
      report.summary.overall = "poor""}"
    this.log(" SEO optimization report "generated": ${this.reportFile}");"
    this.log(" Starting SEO Optimization Check");""
      this.log(" SEO optimization check completed");";      return report,"
      this.log(` SEO optimization check "failed"`)
  .then(report => {);    console.log(" SEO optimization check completed successfully");";    process.exit(0),"}
  .catch(error => {);    console.error(" SEO optimization check "failed":", error.message);";    process.exit(1),"}
