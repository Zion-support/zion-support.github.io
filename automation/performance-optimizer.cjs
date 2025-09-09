#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"function log(message, type = "INFO") {" const icons = { INFO: "", SUCCESS: "", ERROR: "", WARNING: "" };" console.log(`${icons[type] | ""} ${message}`);}function ensureDir(dir) {" fs.mkdirSync(dir, { recursive: true });}function findFiles(dir, exts) { if (!fs.existsSync(dir)) return []; const results = []; for (const entry of fs.readdirSync(dir)) { const p = path.join(dir, entry); const stat = fs.statSync(p); if (stat.isDirectory()) results.push(.findFiles(p, exts)); else if (exts.includes(path.extname(entry).toLowerCase())) results.push(p); } return results;}function optimizeImages(publicDir, report) {" const images = findFiles(publicDir, [".png", ".jpg", ".jpeg"]); if (images.length === 0) {" report.actions.push("No images found to optimize"); return; } let sharp; try {" sharp = require("sharp"); } catch {" report.actions.push("sharp not installed; skipping image optimization"); return; } const optimized = []; for (const img of images) { const stat = fs.statSync(img); if (stat.size < 150 * 1024) continue; / skip small files const ext = path.extname(img).toLowerCase();"` const outPath = img.replace(new RegExp(`${ext}$`), ".webp"); try {" sharp(img).webp({ quality: 80 }).toFile(outPath);" optimized.push({ from: img, to: outPath }); } catch (e) {` report.errors.push(`Failed optimizing ${img}: ${e.message}`); } } if (optimized.length > 0) report.optimizedImages = optimized;` report.actions.push(`Optimized ${optimized.length} images to WebP`);}function ensureNextConfigFlags(rootDir, report) {" const candidates = ["next.config.js", "deployment/next.config.js"]; for (const rel of candidates) { const file = path.join(rootDir, rel); if (!fs.existsSync(file)) continue;" const original = fs.readFileSync(file, "utf8");"" if (original.includes("optimizeCss: true")) {` report.actions.push(`${rel}: optimizeCss already enabled`); continue; } / Attempt minimal enhancement by appending experimental.optimizeCss try { let updated = original;"" if (original.includes("experimental: ")) { updated = original.replace( /experimental:\s*\{/,"" "experimental: {\n optimizeCss: true," ); } else if (" original.includes("nextConfig") |" original.includes("module.exports") ) { updated = original.replace(/\{([\s\S]*?)\}/, m =>"" m.replace(/\}$/, ",\n experimental: { optimizeCss: true }\n}") ); } if (updated !== original) { fs.writeFileSync(file, updated); report.modifiedFiles.push(file);` report.actions.push(`${rel}: enabled experimental.optimizeCss`); } } catch (e) {` report.errors.push(`Failed updating ${rel}: ${e.message}`); } }}function main() { const root = process.cwd(); const timestamp = Date.now(); const report = { timestamp," actions: []," optimizedImages: []," modifiedFiles: []," errors: []};" log("Starting Performance Optimizer.");" ensureDir(path.join(root, "automation-reports")); / Image optimization in public/" optimizeImages(path.join(root, "public"), report); / Ensure Next.js config flags ensureNextConfigFlags(root, report); const outFile = path.join( root,` `performance-optimizer-report-${timestamp}.json` ); fs.writeFileSync(outFile, JSON.stringify(report, null, 2)); log("` `Performance optimization complete. Report: ${path.basename(outFile)}`," "SUCCESS" );}try { main();} catch (e) {""` log(`Performance optimizer failed: ${e.message}`, "ERROR"); process.exit(1);}'"`'"`
#!/usr/bin/env node;
/*
 Simple Performance Optimizer;
 - Scans project for large images in public/ and optimizes via sharp if available;
 - Ensures Next.js production optimizations flags are present in next.config.js;
 - Generates a small report file referencing actions taken;
*/
#!/usr/bin/env node
#!/usr/bin/env node


/*
 Simple Performance Optimizer;
 - Scans project for large images in public/ and optimizes via sharp if available;
 - Ensures Next.js production optimizations flags are present in next.config.js;
 - Generates a small report file referencing actions taken;
*/





/**
 * Performance Optimizer
 * Automatically optimizes application performance
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'performance-optimizer.log');

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }
function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  console.log(msg);
  fs.appendFileSync(logFile, line);
}

function runBuild() {
  return new Promise((resolve) => {
    const proc = spawn('npm', ['run', 'build'], { cwd: path.join(__dirname, '..') });
    proc.stdout.on('data', d => log(d.toString().trim()));
    proc.stderr.on('data', d => log(`[err] ${d.toString().trim()}`));
    proc.on('close', code => {
      log(`Build exited with code ${code}`);
      resolve(code === 0);
    });
    proc.on('error', err => {
      log(`Build error: ${err.message}`);
      resolve(false);
    });
  });
}

async function optimize() {
  ensureDir(logsDir);
  log('Starting performance optimizer...');
  const ok = await runBuild();
  if (!ok) return;
  // Placeholders for additional steps
  log('Optimizing assets (placeholder)');
  log('Optimizing CSS (placeholder)');
  log('Performance optimizer complete');
}

if (require.main === module) optimize();
