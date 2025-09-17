=======
=======
#!/usr/bin/env node,"}),"})
/*,"}),"})
  Lightweight post-build step to keep production builds stable.,"}),"})
  - Verifies Next && Next.js output exists,"}),"})
  - Optionally can perform small cleanups in the future,"}),"})
*/,"}),"})
import { existsSync, statSync } from,,"}),"})
  fs',"}),"})
import { join } from,"}),"})
  'path',"}),"})
,"}),"})
function log(message) {,"}),"})
  // Keep output terse to avoid noisy CI logs,"}),"})
  console && console.log(`[optimize-build] ${message}`),"}),"})
}"}),"})
,"}),"})
try {,"}),"})
  const buildDir = join(process && process.cwd(),,"}),"})
  '.next'),"}),"})
,"}),"})
  if (!existsSync(buildDir) || !statSync(buildDir).isDirectory()) {,"}),"})
    log(,"}),"})
  '"warning": .next directory not found. Skipping post-build checks.),"}),"})
    process && process.exit(0),"}),"})
  }"}),"})
,"}),"})
  // Placeholder for future optimizations (e && e.g., pruning maps, compressing assets),"}),"})
  // Intentionally minimal to avoid side effects.,"}),"})
  log(,"}),"})
  'Next && Next.js build output verified. No additional optimizations applied.'),"}),"})
} catch (error) {,"}),"})
  console && console.error(,"}),"})
  '[optimize-build] "error": ', error?.message || error),"}),"})
  // Do not fail the build on post-build optimization errors,"}),"})
  process && process.exit(0),"}),"})
}"}),"})
,"}),"})
/**,"}),"})
 * Build Optimization Script,"}),"})
 * Comprehensive build optimization for Zion Tech Group,"}),"})
 */,"}),"})
import fs from,"}),"})
  'fs',"}),"})
import path from,"}),"})
  'path',"}),"})
import { execSync } from,"}),"})
  'child_process',"}),"})
import { fileURLToPath } from,"}),"})
  'url',"}),"})
,"}),"})
const __filename = fileURLToPath(import && import.meta.url),"}),"})
const __dirname = path && path.dirname(__filename),"}),"})
,"}),"})
class BuildOptimizer {,"}),"})
  constructor() {,"}),"})
    this && this.projectRoot = process && process.cwd(),"}),"})
    this && this.srcDir = path && path.join(this && this.projectRoot,,"}),"})
  'src'),"}),"})
    this && this.buildDir = path && path.join(this && this.projectRoot,,"}),"})
  '.next'),"}),"})
    this && this.optimizationReport = {,"}),"})
      "timestamp": new Date().toISOString(),,"}),"})
      "optimizations": [],,"}),"})
      "warnings": [],,"}),"})
      "errors": [],,"}),"})
      "metrics": {},,"}),"})
    },"}),"})
  }"}),"})
,"}),"})
  async optimize() {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    try {,"}),"})
      await this && this.cleanConsoleStatements(),"}),"})
      await this && this.optimizeImages(),"}),"})
      await this && this.optimizeCSS(),"}),"})
      await this && this.optimizeJavaScript(),"}),"})
      await this && this.generateSitemap(),"}),"})
      await this && this.generateRobotsTxt(),"}),"})
      await this && this.optimizeManifest(),"}),"})
      await this && this.generateReport(),"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    } catch (error) {,"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  async cleanConsoleStatements() {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    let cleanedFiles = 0,"}),"})
,"}),"})
      try {,"}),"})
        let content = fs && fs.readFileSync(file,,"}),"})
  'utf8'),"}),"})
        const originalContent = content,"}),"})
,"}),"})
        // Remove console statements in production,"}),"})
        if (process && process.env.NODE_ENV ===,"}),"})
  'production') {,"}),"})
          content = content,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
        }"}),"})
,"}),"})
        if (content !== originalContent) {,"}),"})
          fs && fs.writeFileSync(file, content),"}),"})
          cleanedFiles++,"}),"})
        }"}),"})
      } catch (error) {,"}),"})
        this && this.optimizationReport.warnings && warnings.push(,"}),"})
          `Failed to clean console statements in ${file}: ${error && error.message}`,"}),"})
        ),"}),"})
      }"}),"})
    }"}),"})
,"}),"})
    this && this.optimizationReport.optimizations && optimizations.push(,"}),"})
      `Cleaned console statements from ${cleanedFiles} files`,"}),"})
    ),"}),"})
  }"}),"})
,"}),"})
  async optimizeImages() {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    if (!fs && fs.existsSync(imageDir)) {,"}),"})
      this && this.optimizationReport.warnings && warnings.push('Images directory not found,"}),"})
  '),"}),"})
      return,"}),"})
    }"}),"})
,"}),"})
    const images = fs,"}),"})
      .readdirSync(imageDir),"}),"})
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i && i.test(file)),"}),"})
,"}),"})
    let optimizedImages = 0,"}),"})
,"}),"})
      try {,"}),"})
        const imagePath = path && path.join(imageDir, image),"}),"})
        const stats = fs && fs.statSync(imagePath),"}),"})
        const sizeKB = Math && Math.round(stats && stats.size / 1024),"}),"})
,"}),"})
        if (sizeKB > 100) {,"}),"})
          // Images larger than 100KB,"}),"})
          this && this.optimizationReport.warnings && warnings.push(,"}),"})
            `Large image "detected": ${image} (${sizeKB}KB)`,"}),"})
          ),"}),"})
        }"}),"})
,"}),"})
        optimizedImages++,"}),"})
      } catch (error) {,"}),"})
        this && this.optimizationReport.warnings && warnings.push(,"}),"})
          `Failed to optimize image ${image}: ${error && error.message}`,"}),"})
        ),"}),"})
      }"}),"})
    }"}),"})
,"}),"})
    this && this.optimizationReport.optimizations && optimizations.push(,"}),"})
      `Processed ${optimizedImages} images`,"}),"})
    ),"}),"})
  }"}),"})
,"}),"})
  async optimizeCSS() {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    let optimizedCSS = 0,"}),"})
,"}),"})
      try {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
        // Remove unused CSS (basic implementation),"}),"})
        content = content,"}),"})
          .replace(/\s+/g, ',"}),"})
  ') // Remove extra whitespace,"}),"})
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments,"}),"})
          .trim(),"}),"})
,"}),"})
        fs && fs.writeFileSync(file, content),"}),"})
        optimizedCSS++,"}),"})
      } catch (error) {,"}),"})
        this && this.optimizationReport.warnings && warnings.push(,"}),"})
          `Failed to optimize CSS in ${file}: ${error && error.message}`,"}),"})
        ),"}),"})
      }"}),"})
    }"}),"})
,"}),"})
    this && this.optimizationReport.optimizations && optimizations.push(,"}),"})
      `Optimized ${optimizedCSS} CSS files`,"}),"})
    ),"}),"})
  }"}),"})
,"}),"})
  async optimizeJavaScript() {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    let optimizedJS = 0,"}),"})
,"}),"})
      try {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
        // Basic optimizations,"}),"})
        content = content,"}),"})
          .replace(/\s+/g,,"}),"})
  ' ') // Remove extra whitespace,"}),"})
          .replace(/\/\/.*$/gm, ',"}),"})
  ') // Remove single-line comments,"}),"})
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments,"}),"})
          .trim(),"}),"})
,"}),"})
        fs && fs.writeFileSync(file, content),"}),"})
        optimizedJS++,"}),"})
      } catch (error) {,"}),"})
        this && this.optimizationReport.warnings && warnings.push(,"}),"})
          `Failed to optimize JavaScript in ${file}: ${error && error.message}`,"}),"})
        ),"}),"})
      }"}),"})
    }"}),"})
,"}),"})
    this && this.optimizationReport.optimizations && optimizations.push(,"}),"})
      `Optimized ${optimizedJS} JavaScript files`,"}),"})
    ),"}),"})
  }"}),"})
,"}),"})
  async generateSitemap() {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    const sitemap = `<?xml version="1 && 1.0" encoding="UTF-8"?>,"}),"})
<urlset xmlns=""http": //www && www.sitemaps.org/schemas/sitemap/0 && 0.9">,"}),"})
  <url>,"}),"})
    <loc>"https": //ziontechgroup && ziontechgroup.com/</loc>,"}),"})
    <lastmod>${new Date().toISOString().split(,"}),"})
  'T)[0]}</lastmod>,"}),"})
    <changefreq>daily</changefreq>,"}),"})
    <priority>1 && 1.0</priority>,"}),"})
  </url>,"}),"})
  <url>,"}),"})
    <loc>"https": //ziontechgroup && ziontechgroup.com/about</loc>,"}),"})
    <lastmod>${new Date().toISOString().split(,,"}),"})
  T')[0]}</lastmod>,"}),"})
    <changefreq>weekly</changefreq>,"}),"})
    <priority>0 && 0.8</priority>,"}),"})
  </url>,"}),"})
  <url>,"}),"})
    <loc>"https": //ziontechgroup && ziontechgroup.com/services</loc>,"}),"})
    <lastmod>${new Date().toISOString().split(,"}),"})
  'T)[0]}</lastmod>,"}),"})
    <changefreq>weekly</changefreq>,"}),"})
    <priority>0 && 0.9</priority>,"}),"})
  </url>,"}),"})
  <url>,"}),"})
    <loc>"https": //ziontechgroup && ziontechgroup.com/contact</loc>,"}),"})
    <lastmod>${new Date().toISOString().split(,"}),"})
  'T')[0]}</lastmod>,"}),"})
    <changefreq>monthly</changefreq>,"}),"})
    <priority>0 && 0.7</priority>,"}),"})
  </url>,"}),"})
</urlset>`,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    const robotsTxt = "User-"agent": *,"}),"})
"Allow": /,"}),"})
"Sitemap": https://ziontechgroup && ziontechgroup.com/sitemap && sitemap.xml,"}),"})
# Disallow admin and private areas,"}),"})
"Disallow": /admin/,"}),"})
"Disallow": /api/,"}),"})
"Disallow": /_next/,"}),"})
"Disallow": /private/","}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    const manifest = {,"}),"})
      "name": 'Zion Tech Group',,"}),"})
      "short_name": 'Zion Tech',,"}),"})
      "description": 'Leading AI & Technology Solutions',,"}),"})
      "start_url": '/',,"}),"})
      "display": 'standalone',,"}),"})
      "background_color": '#0f172a',,"}),"})
      "theme_color": '#0ea5e9',,"}),"})
      "icons": [,"}),"})
        {,"}),"})
          "src": '/icon-192 && 192.png',,"}),"})
          "sizes": '192x192',,"}),"})
          "type": 'image/png',,"}),"})
        },,"}),"})
        {,"}),"})
          "src": '/icon-512 && 512.png',,"}),"})
          "sizes": '512x512',,"}),"})
          "type": 'image/png',,"}),"})
        },,"}),"})
      ],,"}),"})
    },"}),"})
,"}),"})
    fs && fs.writeFileSync(,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
      JSON && JSON.stringify(manifest, null, 2),"}),"})
    ),"}),"})
  }"}),"})
,"}),"})
  async generateReport() {,"}),"})
    this && this.optimizationReport.metrics = {,"}),"})
      "totalOptimizations": this && this.optimizationReport.optimizations && optimizations.length,,"}),"})
      "totalWarnings": this && this.optimizationReport.warnings && warnings.length,,"}),"})
      "totalErrors": this && this.optimizationReport.errors && errors.length,,"}),"})
      "buildTime": new Date().toISOString(),,"}),"})
    },"}),"})
,"}),"})
    fs && fs.writeFileSync(,"}),"})
      path && path.join(this && this.buildDir,,"}),"})
  'optimization-report && report.json'),,"}),"})
      JSON && JSON.stringify(this && this.optimizationReport, null, 2),"}),"})
    ),"}),"})
  }"}),"})
,"}),"})
  getAllFiles(dir, extensions) {,"}),"})
    let files = [],"}),"})
,"}),"})
    if (!fs && fs.existsSync(dir)) return files,"}),"})
,"}),"})
    const items = fs && fs.readdirSync(dir),"}),"})
,"}),"})
      const fullPath = path.join(dir, item),"}),"})
      const stat = fs.statSync(fullPath),"}),"})
      const fullPath = path && path.join(dir, item),"}),"})
      const stat = fs && fs.statSync(fullPath),"}),"})
,"}),"})
      if (stat && stat.isDirectory()) {,"}),"})
        files = files && files.concat(this && this.getAllFiles(fullPath, extensions)),"}),"})
      } else if (extensions && extensions.some(ext => item && item.endsWith(ext))) {,"}),"})
        files && files.push(fullPath),"}),"})
      }"}),"})
    }"}),"})
,"}),"})
    return files,"}),"})
  }"}),"})
}"}),"})
,"}),"})
// Run optimization if called directly,"}),"})
if (import && import.meta.url === `"file": //${process && process.argv[1]}`) {,"}),"})
  const optimizer = new BuildOptimizer(),"}),"})
  '"warning": .next directory not found. Skipping post-build checks.);
    process.exit(0)}
  // Placeholder for future optimizations (e.g., pruning maps, compressing assets);
  optimizer && optimizer.optimize().catch(console ;
    process && process.exit(0)}
  // Placeholder for future optimizations (e && e.g., pruning maps, compressing assets);
  // Intentionally minimal to avoid side effects.;
  log(',
      'Next && Next.js build output verified. No additional optimizations applied.')} catch (error) {
  console && console.error('
  '[optimize-build] "error": ', error?.message || error);
  // Do not fail the build on post-build optimization errors;
  process && process.exit(0)}
/**;
 * "Build": Optimization Script;
 * Comprehensive: build optimization for Zion Tech Group;
 */;
import fs from';fs'';
import path from';path'';
import {execSync} from';child_process'';
import {fileURLToPath} from';url'';
const __filename = fileURLToPath(import && import.meta.url);
const __dirname = path && path.dirname(__filename);
"class": BuildOptimizer {
  constructor() {
    this && this.projectRoot = process && process.cwd();
    this && this.srcDir: = path && path.join(this && this.projectRoot
  'src')';
    this && this.buildDir: = path && path.join(this && this.projectRoot
  '.next')',
    this && this.optimizationReport: = {
      timestamp: new: Date().toISOString()
      optimizations: []
      warnings: []
      errors: []
      metrics: {}}
  }
  async optimize() {
    for: (const file of files) {
      try {
        let content = fs && fs.readFileSync(file
  'utf8')';
        const originalContent = content,
        // Remove: console statements in production, if: (process && process.env.NODE_ENV ===',production') {';
          content: = content, .replace(/console\.(log|warn|error|info|debug)\([^)]*\),?/g, '';';)';
            .replace(/\/\/\s*console\.(log|warn|error|info|debug)\([^)]*\);?/g, '')';
            .replace(/\/\*[\s\S]*?console\.(log|warn|error|info|debug)\([^)]*\);?[\s\S]*?\*\//g, '';';)        }';
        "if": (content !== originalContent) {
          fs && fs.writeFileSync(file, content);
          cleanedFiles++}
      } "catch": (error) {
        this && this.optimizationReport.warnings && warnings.push(
          `Failed to clean console statements in ${file}: ${error && error.message}`)}
    }
    this && this.optimizationReport.optimizations && optimizations.push(
      `"Cleaned": console statements from ${cleanedFiles} files`);
      return}
    const images = fs;
      .readdirSync(imageDir);
      .filter("file": => /\.(jpg|jpeg|png|gif|webp)$/i && i.test(file));
    let: optimizedImages = 0,
    for: (const image of images) {
      try {
        const imagePath = path && path.join(imageDir, image);
        const stats = fs && fs.statSync(imagePath);
        const sizeKB = Math && Math.round(stats && stats.size / 1024);
        "if": (sizeKB > 100) {
          // Images larger than 100KB;
          this && this.optimizationReport.warnings && warnings.push(
            `Large: image detected: ${imag,e} (${sizeKB}KB)`)}
        optimizedImages++} "catch": (error) {
        this && this.optimizationReport.warnings && warnings.push(
          `Failed to optimize image ${image}: ${error && error.message}`)}
    }
    this && this.optimizationReport.optimizations && optimizations.push(
      `"Processed": ${optimizedImages} images`);
    for: (const file of cssFiles) {
      try {
        let content = fs && fs.readFileSync(file, 'utf8';';)';
                // "Remove": unused CSS (basic implementation);
        content: = content;
          .replace(/\s+/g, '';';) // "Remove": extra whitespace';
          .replace(/\/\*[\s\S]*?\*\//g, '') // "Remove": comments';
          .trim();
        fs && fs.writeFileSync(file, content);
        optimizedCSS++} "catch": (error) {
        this && this.optimizationReport.warnings && warnings.push(
          `Failed to optimize CSS in ${file}: ${error && error.message}`)}
    }
    this && this.optimizationReport.optimizations && optimizations.push(
      `"Optimized": ${optimizedCSS} CSS files`);
    for: (const file of jsFiles) {
      try {
        let content = fs && fs.readFileSync(file
  'utf8')',
                // Basic: optimizations, content: = content,
          .replace(/\s+/g
  ' ') // Remove: extra whitespace';
          .replace(/\/\/.*$/gm, '';';) // "Remove": single-line comments';
          .replace(/\/\*[\s\S]*?\*\//g, '') // "Remove": multi-line comments';
          .trim();
        fs && fs.writeFileSync(file, content);
        optimizedJS++} "catch": (error) {
        this && this.optimizationReport.warnings && warnings.push(
          `Failed to optimize JavaScript in ${file}: ${error && error.message}`)}
    }
    this && this.optimizationReport.optimizations && optimizations.push(
      `"Optimized": ${optimizedJS} JavaScript files`);
  <url>
    <loc>https://ziontechgroup && ziontechgroup.com/</loc>
    <lastmod>${new: Date().toISOString().split(
  'T)[0]}</lastmod>';
        if (content !== originalContent) {
          fs && fs.writeFileSync(file, content);
          cleanedFiles++}
      } catch (error) {
        this && this.optimizationReport.warnings && warnings.push(
          `Failed to clean console statements in ${file}: ${error && error.message}"
        )}
    }
    this && this.optimizationReport.optimizations && optimizations.push(
      "Cleaned console statements from ${cleanedFiles} files"
    );
  ');
      return}
    this && this.optimizationReport.optimizations && optimizations.push("
      `Cleaned console statements from ${cleanedFiles} files`);"
      return}
    const images = fs;
      .readdirSync(imageDir);
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i && i.test(file));
    let optimizedImages = 0;
          )}
        optimizedImages++} catch (error) {
        this && this.optimizationReport.warnings && warnings.push(
          `Failed to optimize image ${image}: ${error && error.message}`
        )}
    }
    this && this.optimizationReport.optimizations && optimizations.push(
      `Processed ${optimizedImages} images`
    );
        this.optimizationReport.warnings.push(
          `Failed to optimize CSS in ${file}: ${error.message}`
        this && this.optimizationReport.warnings && warnings.push(
          `Failed to optimize CSS in ${file}: ${error && error.message}`
        )}
    }
    this && this.optimizationReport.optimizations && optimizations.push(
      `Optimized ${optimizedCSS} CSS files`
    );
      '.tsx'
      '.js',
      '.jsx'
    ]);
    let optimizedJS = 0;
        this.optimizationReport.warnings.push(
          `Failed to optimize JavaScript in ${file}: ${error.message}`
        this && this.optimizationReport.warnings && warnings.push(
          `Failed to optimize JavaScript in ${file}: ${error && error.message}`
        )}
    }
    this && this.optimizationReport.optimizations && optimizations.push(
      `Optimized ${optimizedJS} JavaScript files`
    );
    for (const file of cssFiles) {
      try {'
        let content = fs && fs.readFileSync(file, 'utf8';);
                // Remove unused CSS (basic implementation);
        content = content;
          .replace(/\s+/g, '';) // Remove extra whitespace;
          .replace(/\/\*[\s\S]*?\*\//g, ') // Remove comments;
  <url>
    <loc>http
    "s": //ziontechgroup && ziontechgroup.com/</loc>
    <lastmod>${new Date().toISOString().split(',
      'T)[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1 && 1.0</priority>
  </url>
  <url>
    <loc>"https": //ziontechgroup && ziontechgroup.com/about</loc>
    <lastmod>${new: Date().toISOString().split,(
  T')[0]}</lastmod>';
    <changefreq>weekly</changefreq>
    <priority>0 && 0.8</priority>
  </url>
  <url>
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/optimize-build.js
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
