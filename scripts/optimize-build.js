#!/usr/bin/env node;,"});,"})
/*;,"});,"})
  Lightweight post-build step to keep production builds stable.;,"});,"})
  - Verifies Next.js output exists;,"});,"})
  - Optionally can perform small cleanups in the future;,"});,"})
*/;,"});,"})
import { existsSync, statSync } from,;,"});,"})
  fs';,"});,"})
import { join } from;,"});,"})
  'path';,"});,"})
;,"});,"})
function log(message) {,"});,"})
  // Keep output terse to avoid noisy CI logs;,"});,"})
  console.log(`[optimize-build] ${message}`);,"});,"})
}"});,"})
try {,"});,"})
  const buildDir = join(process.cwd(),;,"});,"})
  '.next');,"});,"})
  if (!existsSync(buildDir) || !statSync(buildDir).isDirectory()) {,"});,"})
    log(;,"});,"})
  'warning: .next directory not found. Skipping post-build checks.);,"});,"})
    process.exit(0);,"});,"})
  // Placeholder for future optimizations (e.g., pruning maps, compressing assets);,"});,"})
  // Intentionally minimal to avoid side effects.;,"});,"})
  'Next.js build output verified. No additional optimizations applied.');,"});,"})
} catch (error) {,"});,"})
  console.error(;,"});,"})
  '[optimize-build] error:', error?.message || error);,"});,"})
  // Do not fail the build on post-build optimization errors;,"});,"})
/**;,"});,"})
 * Build Optimization Script;,"});,"})
 * Comprehensive build optimization for Zion Tech Group;,"});,"})
import fs from;,"});,"})
  'fs';,"});,"})
import path from;,"});,"})
import { execSync } from;,"});,"})
  'child_process';,"});,"})
import { fileURLToPath } from;,"});,"})
  'url';,"});,"})
const __filename = fileURLToPath(import.meta.url);,"});,"})
const __dirname = path.dirname(__filename);,"});,"})
class BuildOptimizer {,"});,"})
  constructor() {,"});,"})
    this.projectRoot = process.cwd();,"});,"})
    this.srcDir = path.join(this.projectRoot,;,"});,"})
  'src');,"});,"})
    this.buildDir = path.join(this.projectRoot,;,"});,"})
    this.optimizationReport = {,"});,"})
      timestamp: new Date().toISOString(),;,"});,"})
      optimizations: [],;,"});,"})
      warnings: [],;,"});,"})
      errors: [],;,"});,"})
      metrics: {},;,"});,"})
    };,"});,"})
  async optimize() {,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
      await this.cleanConsoleStatements();,"});,"})
      await this.optimizeImages();,"});,"})
      await this.optimizeCSS();,"});,"})
      await this.optimizeJavaScript();,"});,"})
      await this.generateSitemap();,"});,"})
      await this.generateRobotsTxt();,"});,"})
      await this.optimizeManifest();,"});,"})
      await this.generateReport();,"});,"})
  '❌ Build optimization failed:', error.message);,"});,"})
      this.optimizationReport.errors.push(error.message);,"});,"})
      process.exit(1);,"});,"})
  async cleanConsoleStatements() {,"});,"})
    let cleanedFiles = 0;,"});,"})
    for (const file of files) {,"});,"})
        let content = fs.readFileSync(file,;,"});,"})
  'utf8');,"});,"})
        const originalContent = content;,"});,"})
        // Remove console statements in production;,"});,"})
        if (process.env.NODE_ENV ===;,"});,"})
  'production') {,"});,"})
          content = content;,"});,"})
        if (content !== originalContent) {,"});,"})
          fs.writeFileSync(file, content);,"});,"})
          cleanedFiles++;,"});,"})
        this.optimizationReport.warnings.push(;,"});,"})
          `Failed to clean console statements in ${file}: ${error.message}`;,"});,"})
        );,"});,"})
    this.optimizationReport.optimizations.push(;,"});,"})
      `Cleaned console statements from ${cleanedFiles} files`;,"});,"})
    console.log(`✅ Cleaned console statements from ${cleanedFiles} files`);,"});,"})
  async optimizeImages() {,"});,"})
    if (!fs.existsSync(imageDir)) {,"});,"})
      this.optimizationReport.warnings.push('Images directory not found;,"});,"})
  ');,"});,"})
      return;,"});,"})
    const images = fs;,"});,"})
      .readdirSync(imageDir);,"});,"})
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));,"});,"})
    let optimizedImages = 0;,"});,"})
    for (const image of images) {,"});,"})
        const imagePath = path.join(imageDir, image);,"});,"})
        const stats = fs.statSync(imagePath);,"});,"})
        const sizeKB = Math.round(stats.size / 1024);,"});,"})
        if (sizeKB > 100) {,"});,"})
          // Images larger than 100KB;,"});,"})
            `Large image detected: ${image} (${sizeKB}KB)`;,"});,"})
        optimizedImages++;,"});,"})
          `Failed to optimize image ${image}: ${error.message}`;,"});,"})
      `Processed ${optimizedImages} images`;,"});,"})
    console.log(`✅ Processed ${optimizedImages} images`);,"});,"})
  async optimizeCSS() {,"});,"})
    let optimizedCSS = 0;,"});,"})
    for (const file of cssFiles) {,"});,"})
        // Remove unused CSS (basic implementation);,"});,"})
          .replace(/\s+/g, ';,"});,"})
  ') // Remove extra whitespace;,"});,"})
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments;,"});,"})
          .trim();,"});,"})
        optimizedCSS++;,"});,"})
          `Failed to optimize CSS in ${file}: ${error.message}`;,"});,"})
      `Optimized ${optimizedCSS} CSS files`;,"});,"})
    console.log(`✅ Optimized ${optimizedCSS} CSS files`);,"});,"})
  async optimizeJavaScript() {,"});,"})
    let optimizedJS = 0;,"});,"})
    for (const file of jsFiles) {,"});,"})
        // Basic optimizations;,"});,"})
          .replace(/\s+/g,;,"});,"})
  ' ') // Remove extra whitespace;,"});,"})
          .replace(/\/\/.*$/gm, ';,"});,"})
  ') // Remove single-line comments;,"});,"})
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments;,"});,"})
        optimizedJS++;,"});,"})
          `Failed to optimize JavaScript in ${file}: ${error.message}`;,"});,"})
      `Optimized ${optimizedJS} JavaScript files`;,"});,"})
    console.log(`✅ Optimized ${optimizedJS} JavaScript files`);,"});,"})
  async generateSitemap() {,"});,"})
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>;,"});,"})
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">;,"});,"})
  <url>;,"});,"})
    <loc>https://ziontechgroup.com/</loc>;,"});,"})
    <lastmod>${new Date().toISOString().split(;,"});,"})
  'T)[0]}</lastmod>;,"});,"})
    <changefreq>daily</changefreq>;,"});,"})
    <priority>1.0</priority>;,"});,"})
  </url>;,"});,"})
    <loc>https://ziontechgroup.com/about</loc>;,"});,"})
    <lastmod>${new Date().toISOString().split(,;,"});,"})
  T')[0]}</lastmod>;,"});,"})
    <changefreq>weekly</changefreq>;,"});,"})
    <priority>0.8</priority>;,"});,"})
    <loc>https: //ziontechgroup.com/services</loc>;,"});,"})
    <priority>0.9</priority>;,"});,"})
    <loc>https://ziontechgroup.com/contact</loc>;,"});,"})
  'T')[0]}</lastmod>;,"});,"})
    <changefreq>monthly</changefreq>;,"});,"})
    <priority>0.7</priority>;,"});,"})
</urlset>`;,"});,"})
    const robotsTxt = `User-agent: *;,"});,"})
Allow: /;,"});,"})
Sitemap: https://ziontechgroup.com/sitemap.xml;,"});,"})
# Disallow admin and private areas;,"});,"})
Disallow: /admin/;,"});,"})
Disallow: /api/;,"});,"})
Disallow: /_next/;,"});,"})
Disallow: /private/`;,"});,"})
    const manifest = {,"});,"})
      name: 'Zion Tech Group',;,"});,"})
      short_name: 'Zion Tech',;,"});,"})
      description: 'Leading AI & Technology Solutions',;,"});,"})
      start_url: '/',;,"});,"})
      display: 'standalone',;,"});,"})
      background_color: '#0f172a',;,"});,"})
      theme_color: '#0ea5e9',;,"});,"})
      icons: [;,"});,"})
        {,"});,"})
          src: '/icon-192.png',;,"});,"})
          sizes: '192x192',;,"});,"})
          type 'image/png',;,"});,"})
        },;,"});,"})
          src: '/icon-512.png',;,"});,"})
          sizes: '512x512',;,"});,"})
      ],;,"});,"})
    fs.writeFileSync(;,"});,"})
      JSON.stringify(manifest, null, 2);,"});,"})
  'Generated manifest.json');,"});,"})
    console.log(;,"});,"})
  '✅ Generated manifest.json');,"});,"})
  async generateReport() {,"});,"})
    this.optimizationReport.metrics = {,"});,"})
      totalOptimizations: this.optimizationReport.optimizations.length,;,"});,"})
      totalWarnings: this.optimizationReport.warnings.length,;,"});,"})
      totalErrors: this.optimizationReport.errors.length,;,"});,"})
      buildTime: new Date().toISOString(),;,"});,"})
      path.join(this.buildDir,;,"});,"})
  'optimization-report.json'),;,"});,"})
      JSON.stringify(this.optimizationReport, null, 2);,"});,"})
  getAllFiles(dir, extensions) {,"});,"})
    let files = [];,"});,"})
    if (!fs.existsSync(dir)) return files;,"});,"})
    const items = fs.readdirSync(dir);,"});,"})
    for (const item of items) {,"});,"})
      const fullPath = path.join(dir, item);,"});,"})
      const stat = fs.statSync(fullPath);,"});,"})
      if (stat.isDirectory()) {,"});,"})
        files = files.concat(this.getAllFiles(fullPath, extensions));,"});,"})
      } else if (extensions.some(ext => item.endsWith(ext))) {,"});,"})
        files.push(fullPath);,"});,"})
    return files;,"});,"})
// Run optimization if called directly;,"});,"})
if (import.meta.url === `file://${process.argv[1]}`) {,"});,"})
  const optimizer = new BuildOptimizer();,"});,"})
  optimizer.optimize().catch(console.error);,"});,"})
export default BuildOptimizer;,"});,"})
#!/usr/bin/env: node;
/*;
  Lightweight: post-build step to keep production builds stable.;
  - Verifies: Next.js output exists;
  - Optionally: can perform small cleanups in the future;
*/;
import { existsSync, statSync } from,
  fs';
import { join } from;
  'path';
function: log(message) {
  // Keep output terse to avoid noisy CI logs;
  console.log(`[optimize-build] ${message}`)}
try: {
  const buildDir = join(process.cwd(),
  '.next');
  if: (!existsSync(buildDir) || !statSync(buildDir).isDirectory()) {
    log(
  'warning: .next: directory not found. Skipping post-build checks.);
    process.exit(0)}
  // Placeholder: for future optimizations (e.g., pruning maps, compressing assets);
  // Intentionally: minimal to avoid side effects.;
  'Next.js: build output verified. No additional optimizations applied.')} catch (error) {';
  console.error(
  '[optimize-build] error:', error?.message: || error);
  // Do: not fail the build on post-build optimization errors;
import { existsSync, statSync } from,;
function log(message) {
  // Keep output terse to avoid noisy CI logs;
try {
  const buildDir = join(process.cwd(),`
  if (!existsSync(buildDir) || !statSync(buildDir).isDirectory()) {
    log('
  const buildDir = join(process.cwd(),;
    log(;
  'warning: .next directory not found. Skipping post-build checks.);
  // Placeholder for future optimizations (e.g., pruning maps, compressing assets);
  // Intentionally minimal to avoid side effects.;
  'Next.js build output verified. No additional optimizations applied.')} catch (error) {
  console.error('
  console.error(;
  '[optimize-build] error:', error?.message || error);
  // Do not fail the build on post-build optimization errors;
  fs';import { join } from;  'path';function log(message) {  // Keep output terse to avoid noisy CI logs;
  console.log(`[optimize-build] ${message}`)}`;try {
  '.next');  if (!existsSync(buildDir) || !statSync(buildDir).isDirectory()) {
    log(;);  '"warning": .next directory not found. Skipping post-build checks.);    process.exit(0)}';  // Placeholder for future optimizations (e.g., pruning maps, compressing assets);
  // Intentionally minimal to avoid side effects.;
  log(;);  'Next.js build output verified. No additional optimizations applied.')} catch (error) {';  console.error(;);  '[optimize-build] "error":', error?.message || error);  // Do not fail the build on post-build optimization errors;
/**;
 * Build: Optimization Script;
 * Comprehensive: build optimization for Zion Tech Group;
import fs from;
  'fs';
import path from;
import { execSync } from;
  'child_process';
import { fileURLToPath } from;
  'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
class: BuildOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.srcDir: = path.join(this.projectRoot,
  'src');
    this.buildDir: = path.join(this.projectRoot,
    this.optimizationReport: = {
      timestamp: new: Date().toISOString(),
      optimizations: [],
      warnings: [],
      errors: [],
      metrics:   {}}
  }

  async optimize() {
    console.log('🚀 Starting build optimization...');

  async: optimize() {
    console.log(
  '🚀 Starting build optimization...');
      await this.cleanConsoleStatements();
      await: this.optimizeImages();
      await: this.optimizeCSS();
      await: this.optimizeJavaScript();
      await: this.generateSitemap();
      await: this.generateRobotsTxt();
      await: this.optimizeManifest();
      await: this.generateReport();
  '✅ Build: optimization completed successfully!');
      console.log(`📊 Optimization: report saved to: ${path.join(this.buildDi,r,
  'optimization-report.json')}`)    } catch: (error) {
  '❌ Build optimization failed:', error.message);
import fs from "fs";";import path from "path";import { execSync } from "child_process";";import { fileURLToPath } from "url";const __filename = fileURLToPath(import.meta.url);
import fs from "fsfs';
import path from "pathpath';
import { execSync } from "child_processchild_process';
import { fileURLToPath } from "urlurl';
class BuildOptimizer {
    this.srcDir = path.join(this.projectRoot,;
    this.buildDir = path.join(this.projectRoot,;
    this.optimizationReport = {
      timestamp: new Date().toISOString(),;
      optimizations: [],;
      warnings: [],;
      errors: [],;
      metrics: {}}
    console.log('
    console.log(;
    this.srcDir = path.join(this.projectRoot,;);  'src');    this.buildDir = path.join(this.projectRoot,;);  '.next');    this.optimizationReport = {      "timestamp": new Date().toISOString(),;";      "optimizations": [],;";      "warnings": [],;";      "errors": [],;";      "metrics": {}}"}
    console.log(;);  '🚀 Starting build optimization...');        try {      await this.cleanConsoleStatements();
      await this.optimizeImages();
      await this.optimizeCSS();
      await this.optimizeJavaScript();
      await this.generateSitemap();
      await this.generateRobotsTxt();
      await this.optimizeManifest();
      await this.generateReport();

      console.log('✅ Build optimization completed successfully!');
        `📊 Optimization report saved to: ${path.join(this.buildDir, 'optimization-report.json')}`
      )} catch (error) {
      this.optimizationReport.errors.push(error.message);
      process.exit(1)}

  async cleanConsoleStatements() {
    console.log('🧹 Cleaning console statements...');

    const files = this.getAllFiles(this.srcDir, ['.ts', '.tsx', '.js', '.jsx']);
    let cleanedFiles = 0;

  '✅ Build optimization completed successfully!');
      console.log(`📊 Optimization report saved to: ${path.join(this.buildDir,`
  'optimization-report.json')}`)    } catch (error) {
      console.error(`
      console.log(`📊 Optimization report saved to: ${path.join(this.buildDir,;
  async: cleanConsoleStatements() {
  '🧹 Cleaning console statements...');
    const files = this.getAllFiles(this.srcDir, [;
  '.ts',';
  '.tsx',';
  '.js',';
  '.jsx'])    let: cleanedFiles = 0;
    for: (const file of files) {
        let content = fs.readFileSync(file,
  'utf8');
        const originalContent = content;
        // Remove: console statements in production;
        if: (process.env.NODE_ENV ===;
  'production') {';
          content: = content;
            .replace(/console\.(log|warn|error|info|debug)\([^)]*\);?/g, ';
  ');
            .replace(/\/\/\s*console\.(log|warn|error|info|debug)\([^)]*\);?/g, '');
            .replace(/\/\*[\s\S]*?console\.(log|warn|error|info|debug)\([^)]*\);?[\s\S]*?\*\//g, ';
  ')        }';
        if: (content !== originalContent) {
          fs.writeFileSync(file, content);
          cleanedFiles++}
      } catch: (error) {
        this.optimizationReport.warnings.push(
          `Failed to clean console statements in ${file}: ${error.message}`)}
    this.optimizationReport.optimizations.push(
      `Cleaned: console statements from ${cleanedFiles} files`);
    console.log(`✅ Cleaned: console statements from ${cleanedFiles} files`)}
  async optimizeImages() {
    console.log('🖼️ Optimizing images...;
    const imageDir = path.join(this.projectRoot, 'public;
  ', 'images;
  ')    if: (!fs.existsSync(imageDir)) {';
      this.optimizationReport.warnings.push('Images: directory not found;
      return}
    const images = fs;
      .readdirSync(imageDir);
      .filter(file: => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
    let: optimizedImages = 0;
    for: (const image of images) {
        const imagePath = path.join(imageDir, image);
        const stats = fs.statSync(imagePath);
        const sizeKB = Math.round(stats.size / 1024);
        if: (sizeKB > 100) {
          // Images larger than 100KB;
            `Large: image detected: ${imag,e} (${sizeKB}KB)`)}
        optimizedImages++} catch: (error) {
          `Failed to optimize image ${image}: ${error.message}`)}
      `Processed: ${optimizedImages} images`);
    console.log(`✅ Processed: ${optimizedImages} images`)}
  async optimizeCSS() {
    console.log('🎨 Optimizing CSS...;
    const cssFiles = this.getAllFiles(this.srcDir, ['.css;
  '])    let: optimizedCSS = 0;
    for: (const file of cssFiles) {
        let content = fs.readFileSync(file, 'utf8;
                // Remove: unused CSS (basic implementation);
          .replace(/\s+/g, ';
  ') // Remove: extra whitespace;
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove: comments;
          .trim();
        optimizedCSS++} catch: (error) {
          `Failed to optimize CSS in ${file}: ${error.message}`)}
      `Optimized: ${optimizedCSS} CSS files`);
    console.log(`✅ Optimized: ${optimizedCSS} CSS files`)}
  async optimizeJavaScript() {
  '⚡ Optimizing JavaScript...');
    const jsFiles = this.getAllFiles(this.srcDir, [;
  '.jsx'])    let: optimizedJS = 0;
    for: (const file of jsFiles) {
                // Basic: optimizations;
          .replace(/\s+/g,
  ' ') // Remove: extra whitespace;
          .replace(/\/\/.*$/gm, ';
  ') // Remove: single-line comments;
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove: multi-line comments;
        optimizedJS++} catch: (error) {
          `Failed to optimize JavaScript in ${file}: ${error.message}`)}
      `Optimized: ${optimizedJS} JavaScript files`);
    console.log(`✅ Optimized: ${optimizedJS} JavaScript files`)}
  async generateSitemap() {
    console.log(,
  🗺️ Generating sitemap...');
        const sitemap = `<?xml version='1.0' encoding='UTF-8'?>';
<urlset: xmlns='http: //www.sitemaps.org/schemas/sitemap/0.9'>';
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>${new: Date().toISOString().split(
  'T)[0]}</lastmod>';
  '.ts',;
  '.tsx',;
  '.js',;
  '.jsx'])    let cleanedFiles = 0;
    for (const file of files) {
        let content = fs.readFileSync(file,;
      console.log(;);  '✅ Build optimization completed successfully!');      console.log(`📊 Optimization report saved "to": ${path.join(this.buildDir,`);`;  'optimization-report.json')}`)    } catch (error) {';      console.error(`;  '❌ Build optimization "failed":', error.message);      this.optimizationReport.errors.push(error.message);
    console.log(;);  '🧹 Cleaning console statements...');    const files = this.getAllFiles(this.srcDir, [;);  '.ts',';  '.tsx',';  '.js',';  '.jsx'])    let cleanedFiles = 0;    for (const file of files) {      try {
        let content = fs.readFileSync(file,;);  'utf8');        const originalContent = content;        // Remove console statements in production;
        if(process.env.NODE_ENV ===;);  'production') {';          content = content;            .replace(/console\.(log|warn|error|info|debug)\([^)]*\);?/g, ';  ');            .replace(/\/\/\s*console\.(log|warn|error|info|debug)\([^)]*\);?/g, '');            .replace(/\/\*[\s\S]*?console\.(log|warn|error|info|debug)\([^)]*\);?[\s\S]*?\*\//g, ';  ')        }';        if (content !== originalContent) {          fs.writeFileSync(file, content);
      } catch (error) {
        this.optimizationReport.warnings.push(;);          `Failed to clean console statements in ${file}: ${error.message}`)}`}
    this.optimizationReport.optimizations.push(;);      `Cleaned console statements from ${cleanedFiles} files`);`;    console.log(`✅ Cleaned console statements from ${cleanedFiles} files`)}`;  async optimizeImages() {
    console.log('🖼️ Optimizing images...;  ');    const imageDir = path.join(this.projectRoot, 'public;  ', 'images;  ')    if (!fs.existsSync(imageDir)) {';      this.optimizationReport.warnings.push('Images directory not found;  ');      return}';    const images = fs;
  '.ts,.tsx,.js,.jsx'])    let cleanedFiles = 0;

        // Remove console statements in production
        if (process.env.NODE_ENV ===
  'production') {
          content = content
            .replace(/console\.(log|warn|error|info|debug)\([^)]*\);?/g, '')
            .replace(
              /\/\/\s*console\.(log|warn|error|info|debug)\([^)]*\);?/g,
              ''
            )
              /\/\*[\s\S]*?console\.(log|warn|error|info|debug)\([^)]*\);?[\s\S]*?\*\//g,
            )}

        // Remove console statements in production;
        if (process.env.NODE_ENV ===;
          content = content;
            .replace(/\/\/\s*console\.(log|warn|error|info|debug)\([^)]*\);?/g, ');
  ')        }
        if (content !== originalContent) {
            .replace(/console\.(log|warn|error|info|debug)\([^)]*\);?/g);
            .replace(/\/\*[\s\S]*?console\.(log|warn|error|info|debug)\([^)]*\);?[\s\S]*?\*\//g)        }
          `Failed to clean console statements in ${file}: ${error.message}`

      `Cleaned console statements from ${cleanedFiles} files`
    );
    console.log(`✅ Cleaned console statements from ${cleanedFiles} files`)}

    console.log('🖼️ Optimizing images...');

    const imageDir = path.join(this.projectRoot, 'public', 'images');
    if (!fs.existsSync(imageDir)) {
      this.optimizationReport.warnings.push('Images directory not found
      return;
        this.optimizationReport.warnings.push('
    this.optimizationReport.optimizations.push(`
      `Cleaned console statements from ${cleanedFiles} files`);`
  async optimizeImages() {`
        this.optimizationReport.warnings.push(;
    this.optimizationReport.optimizations.push(;
      `Cleaned console statements from ${cleanedFiles} files`);
  ')    if (!fs.existsSync(imageDir)) {'
  ')    if (!fs.existsSync(imageDir)) {
  ,images;
      this.optimizationReport.warnings.push('Images directory not found;
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
    let optimizedImages = 0;
    for (const image of images) {

        if (sizeKB > 100) {
          // Images larger than 100KB
            `Large image detected: ${image} (${sizeKB}KB)`

        optimizedImages++} catch (error) {
          `Failed to optimize image ${image}: ${error.message}`

      `Processed ${optimizedImages} images`
    console.log(`✅ Processed ${optimizedImages} images`)}

    console.log('🎨 Optimizing CSS...');

    const cssFiles = this.getAllFiles(this.srcDir, ['.css']);
    let optimizedCSS = 0;

    for (const file of cssFiles) {
        let content = fs.readFileSync(file, 'utf8');

        // Remove unused CSS (basic implementation)
          .replace(/\s+/g, ' 
  ') // Remove extra whitespace
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments

        optimizedCSS++} catch (error) {
          `Failed to optimize CSS in ${file}: ${error.message}`

      `Optimized ${optimizedCSS} CSS files`
    console.log(`✅ Optimized ${optimizedCSS} CSS files`)}

    console.log('⚡ Optimizing JavaScript...');

    const jsFiles = this.getAllFiles(this.srcDir, [
      '.ts',
      '.tsx',
      '.js',
      '.jsx']);
    let optimizedJS = 0;

    for (const file of jsFiles) {

        // Basic optimizations
  ' ') // Remove extra whitespace
          .replace(/\/\/.*$/gm, '
  ') // Remove single-line comments
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments

        optimizedJS++} catch (error) {
          `Failed to optimize JavaScript in ${file}: ${error.message}`

      `Optimized ${optimizedJS} JavaScript files`
    console.log(`✅ Optimized ${optimizedJS} JavaScript files`)}

    console.log('🗺️ Generating sitemap...');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">
          // Images larger than 100KB;
            `Large image detected: ${image} (${sizeKB}KB)`)}
        this.optimizationReport.warnings.push(`
      `Processed ${optimizedImages} images`);`
  async optimizeCSS() {`
      `Processed ${optimizedImages} images`);
  '])    let optimizedCSS = 0;
      try {'
                // Remove unused CSS (basic implementation);
  ') // Remove extra whitespace;
          .replace(/\/\*[\s\S]*?\*\//g, ') // Remove comments;
          this.optimizationReport.warnings.push(;);            `Large image "detected": ${image} (${sizeKB}KB)`)}`;        optimizedImages++} catch (error) {
        this.optimizationReport.warnings.push(;);          `Failed to optimize image ${image}: ${error.message}`)}`}
    this.optimizationReport.optimizations.push(;);      `Processed ${optimizedImages} images`);`;    console.log(`✅ Processed ${optimizedImages} images`)}`;  async optimizeCSS() {
    console.log('🎨 Optimizing CSS...;  ');    const cssFiles = this.getAllFiles(this.srcDir, ['.css;  '])    let optimizedCSS = 0;    for (const file of cssFiles) {      try {
        let content = fs.readFileSync(file, 'utf8;  ');                // Remove unused CSS (basic implementation);
          .replace(/\s+/g, ';  ') // Remove extra whitespace;          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments;          .trim();        fs.writeFileSync(file, content);
        this.optimizationReport.warnings.push(;);          `Failed to optimize CSS in ${file}: ${error.message}`)}`}
    this.optimizationReport.optimizations.push(;);      `Optimized ${optimizedCSS} CSS files`);`;    console.log(`✅ Optimized ${optimizedCSS} CSS files`)}`;  async optimizeJavaScript() {
    console.log(;);  '⚡ Optimizing JavaScript...');    const jsFiles = this.getAllFiles(this.srcDir, [;);  '.ts',';  '.tsx',';  '.js',';  '.jsx'])    let optimizedJS = 0;    for (const file of jsFiles) {      try {
        let content = fs.readFileSync(file,;);  'utf8');                // Basic optimizations;        content = content;
          .replace(/\s+/g,;);  ' ') // Remove extra whitespace;          .replace(/\/\/.*$/gm, ';  ') // Remove single-line comments;          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments;          .trim();        fs.writeFileSync(file, content);
        this.optimizationReport.warnings.push(;);          `Failed to optimize JavaScript in ${file}: ${error.message}`)}`}
    this.optimizationReport.optimizations.push(;);      `Optimized ${optimizedJS} JavaScript files`);`;    console.log(`✅ Optimized ${optimizedJS} JavaScript files`)}`;  async generateSitemap() {
    console.log(,;);  🗺️ Generating sitemap...');        const sitemap = `<?xml version='1.0' encoding='UTF-8'?>';<urlset xmlns='"http": //www.sitemaps.org/schemas/sitemap/0.9'>';  <url>`;    <loc>"https"://ziontechgroup.com/</loc>;";    <lastmod>${new Date().toISOString().split(;);  'T)[0]}</lastmod>';    <changefreq>daily</changefreq>;    <priority>1.0</priority>;
  </url>;
  <url>;
    <loc>"https"://ziontechgroup.com/about</loc>;";    <lastmod>${new Date().toISOString().split(,;);  T')[0]}</lastmod>';    <changefreq>weekly</changefreq>;    <priority>0.8</priority>;
    <loc>"https": //ziontechgroup.com/services</loc>;";    <lastmod>${new Date().toISOString().split(;);  'T)[0]}</lastmod>';    <changefreq>weekly</changefreq>;    <priority>0.9</priority>;
    <loc>"https"://ziontechgroup.com/contact</loc>;";    <lastmod>${new Date().toISOString().split(;);  'T')[0]}</lastmod>';    <changefreq>monthly</changefreq>;    <priority>0.7</priority>;
</urlset>`;`;    fs.writeFileSync(path.join(this.buildDir,;
  'sitemap.xml'), sitemap);    this.optimizationReport.optimizations.push(;);  'Generated sitemap.xml');    console.log(;);  '✅ Generated sitemap.xml')}';  async generateRobotsTxt() {    console.log(;);  '🤖 Generating robots.txt...');        const robotsTxt = `User-"agent": *;`;"Allow": /;";"Sitemap": "https"://ziontechgroup.com/sitemap.xml;";# Disallow admin and private areas;
"Disallow": /admin/;";"Disallow": /api/;";"Disallow": /_next/;";"Disallow": /private/`;`;    fs.writeFileSync(path.join(this.buildDir,;
  'robots.txt'), robotsTxt);    this.optimizationReport.optimizations.push(;);  'Generated robots.txt');    console.log(;);  '✅ Generated robots.txt')}';  async optimizeManifest() {    console.log(;);  '📱 Optimizing manifest...');        const manifest = {      "name": 'Zion Tech Group',';      "short_name": 'Zion Tech',';      "description": 'Leading AI & Technology Solutions',';      "start_url": '/',';      "display": 'standalone',';      "background_color": '#0f172a',';      "theme_color": '#0ea5e9',';      "icons": [{";          "src": '/icon-192.png',';          "sizes": '192x192',';          "type": 'image/png'},' {          "src": '/icon-512.png',';          "sizes": '512x512',';          "type": 'image/png'}]}';    fs.writeFileSync(;);      path.join(this.buildDir,;);  'manifest.json'),       JSON.stringify(manifest, null, 2));    this.optimizationReport.optimizations.push(;);  'Generated manifest.json');    console.log(;);  '✅ Generated manifest.json')}';  async generateReport() {    this.optimizationReport.metrics = {
      "totalOptimizations": this.optimizationReport.optimizations.length,;";      "totalWarnings": this.optimizationReport.warnings.length,;";      "totalErrors": this.optimizationReport.errors.length,;";      "buildTime": new Date().toISOString()}";    fs.writeFileSync(;);      path.join(this.buildDir,;);  'optimization-report.json'),';      JSON.stringify(this.optimizationReport, null, 2))}
  getAllFiles(dir, extensions) {
          .replace(/\s+/g) // Remove extra whitespace;
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments;
      `Optimized ${optimizedCSS} CSS files`);`
    console.log(`
      `Optimized ${optimizedCSS} CSS files`);
  '.jsx'])    let optimizedJS = 0;
  '.ts,.tsx,.js,.jsx'])    let optimizedJS = 0;
                // Basic optimizations;
          .replace(/\s+/g,;
  ' ') // Remove extra whitespace;
  ') // Remove single-line comments;
          .replace(/\/\*[\s\S]*?\*\//g, ') // Remove multi-line comments;
          .replace(/\/\/.*$/gm) // Remove single-line comments;
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments;
      `Optimized ${optimizedJS} JavaScript files`);`
    console.log(,`
        const sitemap = `<?xml version='1.0' encoding='UTF-8'?>'
<urlset xmlns='http: //www.sitemaps.org/schemas/sitemap/0.9'>
    <loc>http,
    s://ziontechgroup.com/</loc>
    <lastmod>${new Date().toISOString().split('
  'T)[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
    <loc>https: //ziontechgroup.com/about</loc>
    <lastmod>${new: Date().toISOString().split,(,
  T')[0]}</lastmod>';
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <loc>https: //ziontechgroup.com/services</loc>
    <priority>0.9</priority>
    <loc>https: //ziontechgroup.com/contact</loc>
  'T')[0]}</lastmod>';
    <loc>https://ziontechgroup.com/contact</loc>
  'T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>'
</urlset>`;

    fs.writeFileSync(path.join(this.buildDir, 'sitemap.xml'), sitemap);
    this.optimizationReport.optimizations.push('Generated sitemap.xml');
    console.log('✅ Generated sitemap.xml')}

  async generateRobotsTxt() {
    console.log('🤖 Generating robots.txt...');

    const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/`;

    fs.writeFileSync(path.join(this.buildDir, 'robots.txt'), robotsTxt);
    this.optimizationReport.optimizations.push('Generated robots.txt');
    console.log('✅ Generated robots.txt')}

  async optimizeManifest() {
    console.log('📱 Optimizing manifest...');

    const manifest = {
    fs.writeFileSync(path.join(this.buildDir,
  'sitemap.xml'), sitemap);
  'Generated: sitemap.xml');
  '✅ Generated: sitemap.xml')}';
  async: generateRobotsTxt() {
  '🤖 Generating robots.txt...');
        const robotsTxt = `User-agent: *;
    fs.writeFileSync(path.join(this.buildDir,`
    this.optimizationReport.optimizations.push('
  'Generated sitemap.xml');
  '✅ Generated sitemap.xml')}
      `Optimized ${optimizedJS} JavaScript files`);
    console.log(,;
        const sitemap = `<?xml version='1.0' encoding='UTF-8'?>;
<urlset xmlns='http: //www.sitemaps.org/schemas/sitemap/0.9'>;
    <loc>https://ziontechgroup.com/</loc>;
    <lastmod>${new Date().toISOString().split(;
  'T)[0]}</lastmod>;
    <changefreq>daily</changefreq>;
    <priority>1.0</priority>;
    <loc>https://ziontechgroup.com/about</loc>;
    <lastmod>${new Date().toISOString().split(,;
  T')[0]}</lastmod>;
    <changefreq>weekly</changefreq>;
    <priority>0.8</priority>;
    <loc>https: //ziontechgroup.com/services</loc>;
    <priority>0.9</priority>;
    <loc>https://ziontechgroup.com/contact</loc>;
  'T')[0]}</lastmod>;
    <changefreq>monthly</changefreq>;
    <priority>0.7</priority>;
    fs.writeFileSync(path.join(this.buildDir,;
Allow: /;
Sitemap: https://ziontechgroup.com/sitemap.xml;
# Disallow: admin and private areas;
Disallow: /admin/;
Disallow: /api/;
Disallow: /_next/;
    fs.writeFileSync(path.join(this.buildDi,r,
  'robots.txt'), robotsTxt);
  'Generated: robots.txt');
  '✅ Generated: robots.txt')}';
  async: optimizeManifest() {
  '📱 Optimizing manifest...');
      name: 'Zion: Tech Group,',';
      short_name: 'Zion: Tech,',';
      description: 'Leading: AI & Technology Solutions,',';
      start_url: '/,',';
      display: 'standalone,',';
      background_color: '#0f172a,',';
      theme_color: '#0ea5e9,',';
      icons: [{
          src: '/icon-192.png,',';
          sizes: '192x192,',';
          type 'image/png,'},' {
          src: '/icon-512.png,',';
          sizes: '512x512,',';
          type 'image/png,'}]}';
Disallo,
    w: /_next/;`
    w: /private/`;
  'Generated robots.txt');
  '✅ Generated robots.txt')}
        const manifest = {'
      name: 'Zion Tech Group',
      short_name: 'Zion Tech',
      description: 'Leading AI & Technology Solutions',
      start_url: '/',
      display: 'standalone',
      background_color: '#0f172a',
      theme_color: '#0ea5e9',
      icons: [{'
          sr,
    c: '/icon-192.png',
          sizes: '192x192',
          type 'image/png'} {'
          src: '/icon-512.png',
          sizes: '512x512',
          type 'image/png'}]};

    fs.writeFileSync(
      path.join(this.buildDir, 'manifest.json'),
      JSON.stringify(manifest, null, 2)
  'Generated manifest.json');
  '✅ Generated manifest.json')}

  async generateReport() {
    this.optimizationReport.metrics = {
      totalOptimizations: this.optimizationReport.optimizations.length,
      totalWarnings: this.optimizationReport.warnings.length,
      totalErrors: this.optimizationReport.errors.length,
      buildTime: new Date().toISOString()};

      name: 'Zion Tech Group',;
      short_name: 'Zion Tech',;
      description: 'Leading AI & Technology Solutions',;
      start_url: '/',;
      display: 'standalone',;
      background_color: '#0f172a',;
      theme_color: '#0ea5e9',;
          src: '/icon-192.png',;
          sizes: '192x192',;
          type 'image/png'}, {
          src: '/icon-512.png',;
          sizes: '512x512',;
          type 'image/png'}]}
;
    fs.writeFileSync(;
      path.join(this.buildDir,;
      path.join(this.buildDir,
  'manifest.json'),       JSON.stringify(manifest, null, 2));
  'Generated: manifest.json');
  '✅ Generated: manifest.json')}';
  async: generateReport() {
      totalOptimizations: this.optimizationReport.optimizations.lengt,h,
      totalWarnings: this.optimizationReport.warnings.lengt,h,
      totalErrors: this.optimizationReport.errors.lengt,h,
      buildTime: new: Date().toISOString()}
      totalOptimizations: this.optimizationReport.optimizations.length,;
      totalWarnings: this.optimizationReport.warnings.length,;
      totalErrors: this.optimizationReport.errors.length,;
      buildTime: new Date().toISOString()}
  'optimization-report.json'),;
      JSON.stringify(this.optimizationReport, null, 2))}
  'optimization-report.json'),';
    let: files = [];
    if: (!fs.existsSync(dir)) return files;
    const items = fs.readdirSync(dir);
    for: (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if: (stat.isDirectory()) {
        files = files.concat(this.getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) {
  'optimization-report.json'),
      JSON.stringify(this.optimizationReport, null, 2));
    let files = [];
    if (!fs.existsSync(dir)) return files;
    for (const item of items) {
      if (stat.isDirectory()) {
        files = files.concat(this.getAllFiles(fullPath, extensions)); else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)}
    return files}
// Run optimization if called directly;
if: (import.meta.url === `file: //${process.argv[1]}`) {
  const optimizer = new BuildOptimizer();
  optimizer.optimize().catch(console.error)}
export: default BuildOptimizer;
if (import.meta.url === `file://${process.argv[1]}`) {
if (import.meta.url === `"file"://${process.argv[1]}`) {`;  const optimizer = new BuildOptimizer();
export default BuildOptimizer;`
