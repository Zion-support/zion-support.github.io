#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function log(message, type = "INFO") {
  const icons = { INFO: "ℹ️", SUCCESS: "✅", ERROR: "❌", WARNING: "⚠️" };
  console.log(`[${new Date().toISOString()}] [${type}] ${message}`);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function findFiles(dir, exts) {
  if (!fs.existsSync(dir)) return [];
  const results = [];
  for (const entry of fs.readdirSync(dir)) {
    const p = path.join(dir, entry);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) {
      results.push(...findFiles(p, exts));
    } else if (exts.includes(path.extname(entry).toLowerCase())) {
      results.push(p);
    }
  }
  return results;
}

function optimizeSEO(rootDir, report) {
  const htmlFiles = findFiles(rootDir, [".html", ".tsx", ".jsx"]);
  let optimizedCount = 0;
  
  for (const file of htmlFiles) {
    try {
      const content = fs.readFileSync(file, "utf8");
      let updated = content;
      let modified = false;
      
      // Add meta description if missing
      if (!content.includes('name="description"') && !content.includes('property="og:description"')) {
        const metaDescription = '    <meta name="description" content="Zion Tech Group - Advanced AI, IT Solutions, and Digital Transformation Services" />';
        if (content.includes('<head>')) {
          updated = updated.replace('<head>', `<head>\n${metaDescription}`);
          modified = true;
        }
      }
      
      // Add Open Graph tags if missing
      if (!content.includes('property="og:title"')) {
        const ogTags = `    <meta property="og:title" content="Zion Tech Group" />
    <meta property="og:description" content="Advanced AI, IT Solutions, and Digital Transformation Services" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ziontechgroup.com" />`;
        if (content.includes('<head>')) {
          updated = updated.replace('<head>', `<head>\n${ogTags}`);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(file, updated);
        optimizedCount++;
        report.actions.push(`Optimized SEO for ${path.basename(file)}`);
      }
    } catch (e) {
      report.errors.push(`Failed optimizing ${file}: ${e.message}`);
    }
  }
  
  report.actions.push(`Optimized SEO for ${optimizedCount} files`);
}

function main() {
  const root = process.cwd();
  const timestamp = Date.now();
  const report = {
    timestamp,
    actions: [],
    modifiedFiles: [],
    errors: []
  };
  
  log("Starting SEO Optimizer");
  
  ensureDir(path.join(root, "automation-reports"));
  
  // Optimize SEO in src/ directory
  optimizeSEO(path.join(root, "src"), report);
  
  const outFile = path.join(
    root,
    `automation-reports/seo-optimizer-report-${timestamp}.json`
  );
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2));
  
  log(`SEO optimization complete. Report: ${path.basename(outFile)}`, "SUCCESS");
}

try {
  main();
} catch (e) {
  log(`SEO optimizer failed: ${e.message}`, "ERROR");
  process.exit(1);
}