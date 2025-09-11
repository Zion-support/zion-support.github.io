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

function optimizeImages(publicDir, report) {
  const images = findFiles(publicDir, [".png", ".jpg", ".jpeg"]);
  if (images.length === 0) {
    report.actions.push("No images found to optimize");
    return;
  }
  
  let sharp;
  try {
    sharp = require("sharp");
  } catch {
    report.actions.push("sharp not installed; skipping image optimization");
    return;
  }
  
  const optimized = [];
  for (const img of images) {
    const stat = fs.statSync(img);
    if (stat.size < 150 * 1024) continue; // skip small files
    
    const ext = path.extname(img).toLowerCase();
    const outPath = img.replace(new RegExp(`${ext}$`), ".webp");
    
    try {
      sharp(img).webp({ quality: 80 }).toFile(outPath);
      optimized.push({ from: img, to: outPath });
    } catch (e) {
      report.errors.push(`Failed optimizing ${img}: ${e.message}`);
    }
  }
  
  if (optimized.length > 0) {
    report.optimizedImages = optimized;
  }
  report.actions.push(`Optimized ${optimized.length} images to WebP`);
}

function main() {
  const root = process.cwd();
  const timestamp = Date.now();
  const report = {
    timestamp,
    actions: [],
    optimizedImages: [],
    modifiedFiles: [],
    errors: []
  };
  
  log("Starting Performance Optimizer");
  
  ensureDir(path.join(root, "automation-reports"));
  
  // Image optimization in public/
  optimizeImages(path.join(root, "public"), report);
  
  const outFile = path.join(
    root,
    `automation-reports/performance-optimizer-report-${timestamp}.json`
  );
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2));
  
  log(`Performance optimization complete. Report: ${path.basename(outFile)}`, "SUCCESS");
}

try {
  main();
} catch (e) {
  log(`Performance optimizer failed: ${e.message}`, "ERROR");
  process.exit(1);
}