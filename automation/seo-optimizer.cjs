#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

console.log("🔍 Starting SEO Optimization Analysis...");

const seoReport = {
  timestamp: new Date().toISOString(),
  checks: [],
  recommendations: [],
  status: "completed"
};

// Check for meta tags in HTML files
function checkMetaTags(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const checks = [];
    
    // Check for title tag
    if (content.includes("<title>")) {
      checks.push({ type: "title", status: "ok", message: "Title tag found" });
    } else {
      checks.push({ type: "title", status: "warning", message: "Title tag missing" });
    }
    
    // Check for meta description
    if (content.includes('name="description"')) {
      checks.push({ type: "meta_description", status: "ok", message: "Meta description found" });
    } else {
      checks.push({ type: "meta_description", status: "warning", message: "Meta description missing" });
    }
    
    // Check for Open Graph tags
    if (content.includes('property="og:title"')) {
      checks.push({ type: "og_title", status: "ok", message: "Open Graph title found" });
    } else {
      checks.push({ type: "og_title", status: "warning", message: "Open Graph title missing" });
    }
    
    // Check for canonical URL
    if (content.includes('rel="canonical"')) {
      checks.push({ type: "canonical", status: "ok", message: "Canonical URL found" });
    } else {
      checks.push({ type: "canonical", status: "warning", message: "Canonical URL missing" });
    }
    
    return checks;
  } catch (error) {
    return [{ type: "file_read", status: "error", message: `Failed to read file: ${error.message}` }];
  }
}

// Check for sitemap
function checkSitemap() {
  const sitemapFiles = ["sitemap.xml", "sitemap.txt", "sitemap.json"];
  const found = sitemapFiles.find(file => fs.existsSync(file));
  
  if (found) {
    return { type: "sitemap", status: "ok", message: `Sitemap found: ${found}` };
  } else {
    return { type: "sitemap", status: "warning", message: "No sitemap found" };
  }
}

// Check for robots.txt
function checkRobotsTxt() {
  if (fs.existsSync("robots.txt")) {
    return { type: "robots_txt", status: "ok", message: "robots.txt found" };
  } else {
    return { type: "robots_txt", status: "warning", message: "robots.txt missing" };
  }
}

// Check for alt attributes in images
function checkImageAltTags(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const imgTags = content.match(/<img[^>]*>/g) || [];
    const imgWithoutAlt = imgTags.filter(img => !img.includes('alt='));
    
    if (imgWithoutAlt.length === 0) {
      return { type: "image_alt", status: "ok", message: "All images have alt attributes" };
    } else {
      return { 
        type: "image_alt", 
        status: "warning", 
        message: `${imgWithoutAlt.length} images missing alt attributes` 
      };
    }
  } catch (error) {
    return { type: "image_alt", status: "error", message: `Failed to check images: ${error.message}` };
  }
}

// Check for heading structure
function checkHeadingStructure(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const h1Tags = (content.match(/<h1[^>]*>/g) || []).length;
    const h2Tags = (content.match(/<h2[^>]*>/g) || []).length;
    
    if (h1Tags === 0) {
      return { type: "heading_structure", status: "warning", message: "No H1 tag found" };
    } else if (h1Tags > 1) {
      return { type: "heading_structure", status: "warning", message: "Multiple H1 tags found" };
    } else {
      return { 
        type: "heading_structure", 
        status: "ok", 
        message: `Good heading structure: 1 H1, ${h2Tags} H2 tags` 
      };
    }
  } catch (error) {
    return { type: "heading_structure", status: "error", message: `Failed to check headings: ${error.message}` };
  }
}

// Run SEO checks
console.log("📄 Checking HTML files for SEO elements...");

// Check main HTML files
const htmlFiles = ["index.html", "src/index.html", "public/index.html"];
let foundHtmlFile = null;

for (const htmlFile of htmlFiles) {
  if (fs.existsSync(htmlFile)) {
    foundHtmlFile = htmlFile;
    break;
  }
}

if (foundHtmlFile) {
  console.log(`Found HTML file: ${foundHtmlFile}`);
  const metaChecks = checkMetaTags(foundHtmlFile);
  const imageChecks = checkImageAltTags(foundHtmlFile);
  const headingChecks = checkHeadingStructure(foundHtmlFile);
  
  seoReport.checks.push(...metaChecks, imageChecks, headingChecks);
} else {
  seoReport.checks.push({ 
    type: "html_file", 
    status: "warning", 
    message: "No main HTML file found to check" 
  });
}

// Check for sitemap
console.log("🗺️ Checking for sitemap...");
seoReport.checks.push(checkSitemap());

// Check for robots.txt
console.log("🤖 Checking for robots.txt...");
seoReport.checks.push(checkRobotsTxt());

// Generate recommendations
const warnings = seoReport.checks.filter(check => check.status === "warning");
const errors = seoReport.checks.filter(check => check.status === "error");

if (warnings.length > 0) {
  seoReport.recommendations.push("Consider implementing missing SEO elements");
}

if (errors.length > 0) {
  seoReport.recommendations.push("Fix SEO-related errors");
}

// Save report
const reportPath = `seo-optimization-report-${Date.now()}.json`;
fs.writeFileSync(reportPath, JSON.stringify(seoReport, null, 2));

console.log("✅ SEO optimization analysis completed");
console.log(`📄 Report saved to: ${reportPath}`);

// Print summary
const okChecks = seoReport.checks.filter(check => check.status === "ok").length;
const totalChecks = seoReport.checks.length;

console.log("\n📊 SEO Optimization Summary:");
console.log(`   - Total checks: ${totalChecks}`);
console.log(`   - OK: ${okChecks}`);
console.log(`   - Warnings: ${warnings.length}`);
console.log(`   - Errors: ${errors.length}`);

if (warnings.length > 0) {
  console.log("\n⚠️  SEO improvements recommended:");
  warnings.forEach(warning => {
    console.log(`   - ${warning.message}`);
  });
}

if (errors.length > 0) {
  console.log("\n❌ SEO errors found:");
  errors.forEach(error => {
    console.log(`   - ${error.message}`);
  });
}

if (warnings.length === 0 && errors.length === 0) {
  console.log("🎉 All SEO checks passed!");
}

process.exit(errors.length > 0 ? 1 : 0);