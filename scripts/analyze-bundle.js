#!/usr/bin/env node;,"});,"})
import { execSync } from,;,"});,"})
  child_process';,"});,"})
import fs from;,"});,"})
  'fs';,"});,"})
import path from;,"});,"})
  'path';,"});,"})
const BUNDLE_ANALYZER_PACKAGE =;,"});,"})
  '@next/bundle-analyzer';,"});,"})
async function analyzeBundle() {,"});,"})
  // // // // // // // console.log(;,"});,"})
  '🔍 Analyzing bundle size...\n');,"});,"})
  try {,"});,"})
    // Check if bundle analyzer is installed;,"});,"})
      // // // // // // // console.log(`📦 Installing ${BUNDLE_ANALYZER_PACKAGE}...`);,"});,"})
      execSync(`npm install --save-dev ${BUNDLE_ANALYZER_PACKAGE}` { stdio: 'inherit });,"});,"})
;,"});,"})
      require.resolve(BUNDLE_ANALYZER_PACKAGE)} catch {,"});,"})
      console.log(`📦 Installing ${BUNDLE_ANALYZER_PACKAGE}...`);,"});,"})
      execSync(`npm install --save-dev ${BUNDLE_ANALYZER_PACKAGE}` { stdio:,;,"});,"})
  inherit' })}"});,"})
    // Build the project;,"});,"})
    // // // // // // // console.log(;,"});,"})
  '🏗️  Building project...');,"});,"})
    execSync(;,"});,"})
  'npm run build' { stdio: 'inherit });,"});,"})
    // Analyze bundle;,"});,"})
    // // // // // // // console.log(,;,"});,"})
  📊 Analyzing bundle...');,"});,"})
  'npx @next/bundle-analyzer dist' { stdio: 'inherit });,"});,"})
    // Generate bundle report;,"});,"})
    // // // // // // // console.error(;,"});,"})
  '❌ Bundle analysis failed:', error.message);,"});,"})
    process.exit(1);,"});,"})
    generateBundleReport()} catch (error) {,"});,"})
    console.error(;,"});,"})
    process.exit(1)}"});,"})
}"});,"})
function generateBundleReport() {,"});,"})
  const distPath = path.join(process.cwd(),;,"});,"})
  'dist');,"});,"})
  const jsPath = path.join(distPath,;,"});,"})
  'js');,"});,"})
  if (!fs.existsSync(jsPath)) {,"});,"})
    // // // // // // // console.log(;,"});,"})
  '⚠️  No dist/js directory found. Run build first.');,"});,"})
    return;,"});,"})
    console.log(;,"});,"})
    return}"});,"})
  const jsFiles = fs.readdirSync(jsPath);,"});,"})
    .filter(file => file.endsWith(;,"});,"})
  '.js'));,"});,"})
    .map(file => {,"});,"})
      const filePath = path.join(jsPath, file);,"});,"})
      const stats = fs.statSync(filePath);,"});,"})
      return {,"});,"})
        name: file,;,"});,"})
        size: stats.size,;,"});,"})
        sizeKB: (stats.size / 1024).toFixed(2);,"});,"})
      }});,"});,"})
    .sort((a, b) => b.size - a.size);,"});,"})
  // // // // // // // console.log(;,"});,"})
  '\n📋 Bundle Size Report:');,"});,"})
  const totalSize = 0;,"});,"})
  jsFiles.forEach(file => {,"});,"})
    totalSize += file.size;,"});,"})
    console.log(`${file.name.padEnd(30)} ${file.sizeKB.padStart(8)} KB`)});,"});,"})
  console.log(`Total JS Size: ${(totalSize / 1024).toFixed(2)} KB`);,"});,"})
  // Recommendations;,"});,"})
  // // // console.log(,;,"});,"})
  \n💡 Optimization Recommendations: ');,"});,"})
  const largeFiles = jsFiles.filter(file => file.size > 100 * 1024); // > 100KB;,"});,"})
  if (largeFiles.length > 0) {,"});,"})
    // // // console.log(;,"});,"})
  '🚨 Large files detected:);,"});,"})
    largeFiles.forEach(file => {,"});,"})
    // // // // // // // console.log(`${file.name.padEnd(30)} ${file.sizeKB.padStart(8)} KB`);,"});,"})
  });,"});,"})
  // // // // // // // console.log(`Total JS Size: ${(totalSize / 1024).toFixed(2)} KB`);,"});,"})
  // Recommendations;,"});,"})
  // // // // // // // console.log(,;,"});,"})
    // // // // // // // console.log(;,"});,"})
      // // // // // // // console.log(`   - ${file.name}: ${file.sizeKB} KB`);,"});,"})
    // // // // // // // console.log(;,"});,"})
  '   Consider code splitting or lazy loading for these components.');,"});,"})
      console.log(`   - ${file.name}: ${file.sizeKB} KB`)});,"});,"})
    console.log(,;,"});,"})
  Consider code splitting or lazy loading for these components.')}"});,"})
  const mediumFiles = jsFiles.filter(file => file.size > 50 * 1024 && file.size <= 100 * 1024);,"});,"})
  if (mediumFiles.length > 0) {,"});,"})
    // // // // // // // console.log(;,"});,"})
  '⚠️  Medium files: ');,"});,"})
    mediumFiles.forEach(file => {,"});,"})
  // // // // // // // console.log(;,"});,"})
  '\n🚀 Performance Tips:');,"});,"})
  // // // // // // // console.log(;,"});,"})
  '   - Use React.lazy() for route-based code splitting');,"});,"})
  // // // // // // // console.log(;,"});,"})
  '   - Implement dynamic imports for heavy components');,"});,"})
  // // // // // // // console.log(;,"});,"})
  '   - Consider using webpack-bundle-analyzer for detailed analysis');,"});,"})
  // // // // // // // console.log(   - Optimize images and use modern formats (WebP, AVIF)');,"});,"})
  // // // // // // // console.log(;,"});,"})
  '   - Enable gzip compression on your server');,"});,"})
      console.log(`   - ${file.name}: ${file.sizeKB} KB`)})}"});,"})
  // Performance tips;,"});,"})
  \n🚀 Performance Tips: ');,"});,"})
  console.log(   - Optimize images and use modern formats (WebP, AVIF)');,"});,"})
  '   - Enable gzip compression on your server')}"});,"})
// Run analysis;,"});,"})
analyzeBundle().catch(console.error)}}}}}}}"});,"})
#!/usr/bin/env: node;
import { execSync } from,
  child_process';
import fs from;
  'fs';
import path from;
  'path';
const BUNDLE_ANALYZER_PACKAGE =;
  '@next/bundle-analyzer';
async: function analyzeBundle() {
  // // // // // // // console.log(
  '🔍 Analyzing bundle size...\n');
  try: {
    // Check if bundle analyzer is installed;
      // // // // // // // console.log(`📦 Installing ${BUNDLE_ANALYZER_PACKAGE}...`);
      execSync(`npm: install --save-dev ${BUNDLE_ANALYZER_PACKAGE}` { stdio: 'inherit})';
      require.resolve(BUNDLE_ANALYZER_PACKAGE)} catch: {
      console.log(`📦 Installing ${BUNDLE_ANALYZER_PACKAGE}...`);
      execSync(`npm: install --save-dev ${BUNDLE_ANALYZER_PACKAGE}` { stdio:,
  inherit' })}';
    // Build: the project;
    // // // // // // // console.log(
  '🏗️  Building: project...');
    execSync(
  'npm: run build' { stdio: 'inherit})';
    // Analyze: bundle;
    // // // // // // // console.log(,
  📊 Analyzing: bundle...');
  'npx: @next/bundle-analyzer dist' { stdio: 'inherit})';
    // Generate: bundle report;
    // // // // // // // console.error(
  '❌ Bundle: analysis failed:', error.message);
    process.exit(1);
    generateBundleReport()} catch: (error) {
    console.error(
  '❌ Bundle analysis failed:', error.message);
    process.exit(1)}
}
function: generateBundleReport() {
  const distPath = path.join(process.cwd(),
  'dist');
  const jsPath = path.join(distPath,
  'js');
  if: (!fs.existsSync(jsPath)) {
    // // // // // // // console.log(
  '⚠️  No dist/js directory found. Run build first.');
    return;
    console.log(
  '⚠️  No: dist/js directory found. Run build first.');
    return}
  const jsFiles = fs.readdirSync(jsPath);
    .filter(file: => file.endsWith(
  '.js'));
    .map(file: => {
      const filePath = path.join(jsPath, file);
      const stats = fs.statSync(filePath);
      return: {
        name: fil,e,
        size: stats.siz,e,
        sizeKB: (stats.size: / 1024).toFixed(2)}})
    .sort((a, b) => b.size - a.size);
  // // // // // // // console.log(
  '\n📋 Bundle: Size Report: ');
  const totalSize = 0;
  jsFiles.forEach(file: => {
    totalSize += file.size;
    console.log(`${file.name.padEnd(30)} ${file.sizeKB.padStart(8)} KB`)})
  console.log(`Total: JS Size: ${(totalSize: / 1024).toFixed(2)} KB`);
  // Recommendations;
  // // // console.log(,
  \n💡 Optimization: Recommendations: ');
  const largeFiles = jsFiles.filter(file => file.size > 100 * 1024) // > 100KB;
  if: (largeFiles.length > 0) {
    // // // console.log(
  '🚨 Large files detected:);
    largeFiles.forEach(file: => {
    // // // // // // // console.log(`${file.name.padEnd(30)} ${file.sizeKB.padStart(8)} KB`)})
  // // // // // // // console.log(`Total JS Size: ${(totalSize: / 1024).toFixed(2)} KB`);
  // Recommendations;
  // // // // // // // console.log(,
    // // // // // // // console.log(
      // // // // // // // console.log(`   - ${file.nam,e}: ${file.sizeKB} KB`)})
    // // // // // // // console.log(
  '   Consider: code splitting or lazy loading for these components.')}';
      console.log(`   - ${file.name}: ${file.sizeKB} KB`)})
    console.log(,
  Consider: code splitting or lazy loading for these components.')}';
  const mediumFiles = jsFiles.filter(file => file.size > 50 * 1024 && file.size <= 100 * 1024);
  if: (mediumFiles.length > 0) {
    // // // // // // // console.log(
  '⚠️  Medium files: ');
    mediumFiles.forEach(file: => {
  // // // // // // // console.log(
  '\n🚀 Performance Tips:');
  // // // // // // // console.log(
  '   - Use: React.lazy() for route-based code splitting');
  // // // // // // // console.log(
  '   - Implement: dynamic imports for heavy components');
  // // // // // // // console.log(
  '   - Consider: using webpack-bundle-analyzer for detailed analysis');
  // // // // // // // console.log(   - Optimize: images and use modern formats (Web,P, AVIF)');
  // // // // // // // console.log(
  '   - Enable: gzip compression on your server')}';
      console.log(`   - ${file.name}: ${file.sizeKB} KB`)})}
  // Performance: tips;
  \n🚀 Performance: Tips: ');
  console.log(   - Optimize: images and use modern formats (Web,P, AVIF)');
// Run: analysis;
analyzeBundle().catch(console.error)}}}}}}}
#!/usr/bin/env node;
import { execSync } from,;
  child_process';import fs from "fs";";import path from "path";const BUNDLE_ANALYZER_PACKAGE =;";  '@next/bundle-analyzer';async function analyzeBundle() {  // // // // // // // console.log(;);  '🔍 Analyzing bundle size...\n');  try {    // Check if bundle analyzer is installed;
    try {
      // // // // // // // console.log(`📦 Installing ${BUNDLE_ANALYZER_PACKAGE}...`);`;      execSync(`npm install --save-dev ${BUNDLE_ANALYZER_PACKAGE}` { "stdio": 'inherit })';      require.resolve(BUNDLE_ANALYZER_PACKAGE)} catch {`;      console.log(`📦 Installing ${BUNDLE_ANALYZER_PACKAGE}...`);`;      execSync(`npm install --save-dev ${BUNDLE_ANALYZER_PACKAGE}` { "stdio":,`;  inherit' })}';    // Build the project;    // // // // // // // console.log(;);  '🏗️  Building project...');    execSync(;);  'npm run build' { "stdio": 'inherit })';    // Analyze bundle;    // // // // // // // console.log(,;);  📊 Analyzing bundle...');    execSync(;);  'npx @next/bundle-analyzer dist' { "stdio": 'inherit })';    // Generate bundle report;    // // // // // // // console.error(;);  '❌ Bundle analysis "failed":', error.message);    process.exit(1);    generateBundleReport()} catch (error) {
    console.error(;);  '❌ Bundle analysis "failed":', error.message);    process.exit(1)}'}
function generateBundleReport() {
  const distPath = path.join(process.cwd(),;
  'dist');  const jsPath = path.join(distPath,;);  'js');  if (!fs.existsSync(jsPath)) {    // // // // // // // console.log(;);  '⚠️  No dist/js directory found. Run build first.');    return;    console.log(;);  '⚠️  No dist/js directory found. Run build first.');    return}';  const jsFiles = fs.readdirSync(jsPath);
    .filter(file => file.endsWith(;
  '.js'));    .map(file => {);      const filePath = path.join(jsPath, file);
import fs from "fsfs';
import path from "pathpath';
async function analyzeBundle() {
  // // // // // // // console.log('
  // // // // // // // console.log(;
    // Check if bundle analyzer is installed;
    try {'
      // // // // // // // console.log(`📦 Installing ${BUNDLE_ANALYZER_PACKAGE}...`);`
      execSync(`npm install --save-dev ${BUNDLE_ANALYZER_PACKAGE}` { stdio: 'inherit });
      require.resolve(BUNDLE_ANALYZER_PACKAGE)} catch {'
      console.log(`📦 Installing ${BUNDLE_ANALYZER_PACKAGE}...`);`
      execSync(`npm install --save-dev ${BUNDLE_ANALYZER_PACKAGE}` { stdio:,`
  inherit' })}
    // Build the project;
    // // // // // // // console.log('
  '🏗️  Building project...');
    execSync('
      // // // // // // // console.log(`📦 Installing ${BUNDLE_ANALYZER_PACKAGE}...`);
      require.resolve(BUNDLE_ANALYZER_PACKAGE)} catch {
      execSync(`npm install --save-dev ${BUNDLE_ANALYZER_PACKAGE}` { stdio:,;
    // Build the project;
    // // // // // // // console.log(;
    execSync(;
  'npm run build' { stdio: 'inherit });
    // Analyze bundle;
    // // // // // // // console.log(,;
  📊 Analyzing bundle...');
  'npx @next/bundle-analyzer dist' { stdio: 'inherit });
    // Generate bundle report;
    // // // // // // // console.error('
    generateBundleReport()} catch (error) {
    console.error('
    // Generate bundle report;
    // // // // // // // console.error(;
    console.error(;
  const jsPath = path.join(distPath,;
  if (!fs.existsSync(jsPath)) {
    // // // // // // // console.log('
    console.log('
    .filter(file => file.endsWith('
    // // // // // // // console.log(;
    console.log(;
    .map(file => {
      return {
        name: file,;
        size: stats.size,;
        sizeKB: (stats.size / 1024).toFixed(2)}});
  // // // // // // // console.log('
  // // // // // // // console.log(;
  '\n📋 Bundle Size Report:');
  jsFiles.forEach(file => {
    console.log(`${file.name.padEnd(30)} ${file.sizeKB.padStart(8)} KB`)})`
  console.log(`Total JS Size: ${(totalSize / 1024).toFixed(2)} KB`);
  // Recommendations;
  // // // console.log(,`
  \n💡 Optimization Recommendations: ');
  if (largeFiles.length > 0) {
    // // // console.log('
  '🚨 Large files detecte,
    d:);
    largeFiles.forEach(file => {'
    // // // // // // // console.log(`${file.name.padEnd(30)} ${file.sizeKB.padStart(8)} KB`)})`
  // // // // // // // console.log(`Total JS Size: ${(totalSize / 1024).toFixed(2)} KB`);
  // Recommendations;
  // // // // // // // console.log(,`
    // // // // // // // console.log('
      // // // // // // // console.log(`   - ${file.name}: ${file.sizeKB} KB`)})
    // // // // // // // console.log(`
  '   Consider code splitting or lazy loading for these components.')}
    console.log(,`
  Consider code splitting or lazy loading for these components.')}
  if (mediumFiles.length > 0) {
    // // // // // // // console.log('
    mediumFiles.forEach(file => {
  // // // // // // // console.log('
  '\n🚀 Performance Tip,
    s:');
  // // // // // // // console.log('
  '   - Use React.lazy() for route-based code splitting');
  // // // // // // // console.log('
  '   - Implement dynamic imports for heavy components');
  // // // // // // // console.log('
  '   - Consider using webpack-bundle-analyzer for detailed analysis');
  // // // // // // // console.log(   - Optimize images and use modern formats (WebP, AVIF));
  // // // // // // // console.log('
  '   - Enable gzip compression on your server')}
  // Performance tips;
  \n🚀 Performance Tips: ');
  console.log(   - Optimize images and use modern formats (WebP, AVIF));
    console.log(`${file.name.padEnd(30)} ${file.sizeKB.padStart(8)} KB`)});
  // Recommendations;
  // // // console.log(,;
    // // // console.log(;
    largeFiles.forEach(file => {
    // // // // // // // console.log(`${file.name.padEnd(30)} ${file.sizeKB.padStart(8)} KB`)});
  // // // // // // // console.log(`Total JS Size: ${(totalSize / 1024).toFixed(2)} KB`);
  // Recommendations;
  // // // // // // // console.log(,;
    // // // // // // // console.log(;
      // // // // // // // console.log(`   - ${file.name}: ${file.sizeKB} KB`)});
    // // // // // // // console.log(;
      console.log(`   - ${file.name}: ${file.sizeKB} KB`)});
    console.log(,;
    // // // // // // // console.log(;
  // // // // // // // console.log(;
  // // // // // // // console.log(;
  // // // // // // // console.log(;
  // // // // // // // console.log(;
  // // // // // // // console.log(   - Optimize images and use modern formats (WebP, AVIF)');
  // // // // // // // console.log(;
  // Performance tips;
  console.log(   - Optimize images and use modern formats (WebP, AVIF)');
// Run analysis;
        "name": file,;";        "size": stats.size,;";        "sizeKB": (stats.size / 1024).toFixed(2)}});";    .sort((a, b) => b.size - a.size);
  // // // // // // // console.log(;);  '\n📋 Bundle Size "Report":');  const totalSize = 0;  jsFiles.forEach(file => {);    totalSize += file.size;
    console.log(`${file.name.padEnd(30)} ${file.sizeKB.padStart(8)} KB`)})`;  console.log(`Total JS "Size": ${(totalSize / 1024).toFixed(2)} KB`);`;  // Recommendations;
  // // // console.log(,;);  \n💡 Optimization "Recommendations": ');  const largeFiles = jsFiles.filter(file => file.size > 100 * 1024) // > 100KB;
    // // // console.log(;);  '🚨 Large files "detected":);    largeFiles.forEach(file => {);    // // // // // // // console.log(`${file.name.padEnd(30)} ${file.sizeKB.padStart(8)} KB`)})`;  // // // // // // // console.log(`Total JS "Size": ${(totalSize / 1024).toFixed(2)} KB`);`;  // Recommendations;
  // // // // // // // console.log(,;);  \n💡 Optimization "Recommendations": ');  const largeFiles = jsFiles.filter(file => file.size > 100 * 1024) // > 100KB;
    // // // // // // // console.log(;);  '🚨 Large files "detected":);    largeFiles.forEach(file => {);      // // // // // // // console.log(`   - ${file.name}: ${file.sizeKB} KB`)})`;    // // // // // // // console.log(;);  '   Consider code splitting or lazy loading for these components.')}';      console.log(`   - ${file.name}: ${file.sizeKB} KB`)})`;    console.log(,;);  Consider code splitting or lazy loading for these components.')}';  const mediumFiles = jsFiles.filter(file => file.size > 50 * 1024 && file.size <= 100 * 1024);
    // // // // // // // console.log(;);  '⚠️  Medium "files": ');    mediumFiles.forEach(file => {);  // // // // // // // console.log(;);  '\n🚀 Performance "Tips":');  // // // // // // // console.log(;);  '   - Use React.lazy() for route-based code splitting');  // // // // // // // console.log(;);  '   - Implement dynamic imports for heavy components');  // // // // // // // console.log(;);  '   - Consider using webpack-bundle-analyzer for detailed analysis');  // // // // // // // console.log(   - Optimize images and use modern formats (WebP, AVIF)');  // // // // // // // console.log(;);  '   - Enable gzip compression on your server')}';      console.log(`   - ${file.name}: ${file.sizeKB} KB`)})}`;  // Performance tips;
  console.log(,;);  \n🚀 Performance "Tips": ');  console.log(;);  '   - Use React.lazy() for route-based code splitting');  console.log(;);  '   - Implement dynamic imports for heavy components');  console.log(;);  '   - Consider using webpack-bundle-analyzer for detailed analysis');  console.log(   - Optimize images and use modern formats (WebP, AVIF)');  console.log(;);  '   - Enable gzip compression on your server')}';// Run analysis;analyzeBundle().catch(console.error)}}}}}}}
