#!/usr/bin/env node;,"});,"})
import fs from;,"});,"})
  'fs';,"});,"})
import path from;,"});,"})
  'path';,"});,"})
import { execSync } from;,"});,"})
  'child_process';,"});,"})
import { fileURLToPath } from;,"});,"})
  'url';,"});,"})
const __dirname = path.dirname(__filename);,"});,"})
// // // // // // // console.log(;,"});,"})
  '🔗 Starting continuous link checker automation...');,"});,"})
;,"});,"})
// // // console.log(;,"});,"})
// Get automation interval from environment variable (default: 30 minutes);,"});,"})
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes;,"});,"})
async function checkLinks() {,"});,"})
  try {,"});,"})
    // // // console.log(`🔗 Running link check at ${new Date().toISOString()}`);,"});,"})
    // Build the project first;,"});,"})
    // // // console.log(,;,"});,"})
  📦 Building project...');,"});,"})
      execSync(;,"});,"})
  'npm run build' { stdio: 'inherit });,"});,"})
      // // // console.log(,;,"});,"})
  ✅ Build completed');,"});,"});
} catch (error) {,"});,"})
      // // // console.log(;,"});,"})
  '⚠️  Build failed but continuing...');,"});,"})
    // // // // // // // console.log(`🔗 Running link check at ${new Date().toISOString()}`);,"});,"})
    // Build the project first;,"});,"})
    // // // // // // // console.log(;,"});,"})
  '📦 Building project...');,"});,"})
      // // // // // // // console.log(;,"});,"})
  '✅ Build completed');,"});,"})
      // // // // // // // console.log(;,"});,"})
      return;,"});,"})
    // Check if dist folder exists;,"});,"})
    const distPath = path.join(process.cwd(),;,"});,"})
  'dist');,"});,"})
    if (!fs.existsSync(distPath)) {,"});,"})
      // // // // // // // console.log(;,"});,"})
  '⚠️  Dist folder not found, skipping link check');,"});,"})
      // // // console.log(;,"});,"})
    // Check for index.html;,"});,"})
    const indexHtmlPath = path.join(distPath,;,"});,"})
  'index.html');,"});,"})
    if (!fs.existsSync(indexHtmlPath)) {,"});,"})
      // // // // // // // console.log(;,"});,"})
  '⚠️  index.html not found in build output');,"});,"})
      // // // console.log(;,"});,"})
    // // // console.log(;,"});,"})
  '✅ index.html found in build output');,"});,"})
    // Find all HTML files;,"});,"})
    const htmlFiles = findHtmlFiles(distPath);,"});,"})
    // // // console.log(`📄 Found ${htmlFiles.length} HTML files to check`);,"});,"})
    // // // // // // // console.log(;,"});,"})
    // Find all HTML files;,"});,"})
    // // // // // // // console.log(`📄 Found ${htmlFiles.length} HTML files to check`);,"});,"})
    // Check for broken references;,"});,"})
    let hasIssues = false;,"});,"})
    const brokenReferences = [];,"});,"})
    for (const htmlFile of htmlFiles) {,"});,"})
        const content = fs.readFileSync(htmlFile,;,"});,"})
  'utf8');,"});,"})
        const references = findReferences(content);,"});,"})
        for (const ref of references) {,"});,"})
          if (!isValidReference(ref, distPath)) {,"});,"})
            brokenReferences.push({,"});,"})
              file: path.relative(process.cwd(), htmlFile),;,"});,"})
              reference: ref;,"});,"});
});,"});,"})
            hasIssues = true;,"});,"})
        // // // // // // // console.log(`⚠️  Could not read ${htmlFile}: ${error.message}`);,"});,"});
}"});,"})
    if (brokenReferences.length > 0) {,"});,"})
      // // // // // // // console.log(;,"});,"})
  '⚠️  Broken references found:');,"});,"})
      brokenReferences.forEach(ref => {,"});,"})
        // // // // // // // console.log(`  - ${ref.file}: ${ref.reference}`);,"});,"})
    if (!hasIssues) {,"});,"})
      // // // // // // // console.log(;,"});,"})
  '✅ No broken references found');,"});,"})
        // // // console.log(`⚠️  Could not read ${htmlFile}: ${error.message}`);,"});,"})
      // // // console.log(;,"});,"})
        // // // console.log(`  - ${ref.file}: ${ref.reference}`);,"});,"})
      // // // console.log(;,"});,"})
    // Generate report;,"});,"})
    // // // // // // // console.log(`📊 Report saved to ${reportPath}`);,"});,"})
    // // // // // // // console.error(;,"});,"})
  '❌ Link check failed:,;,"});,"})
  , error.message);,"});,"})
    // Don;,"});,"})
  't exit, just log the error and continue;,"});,"})
  summary: 'Link check completed;,"});,"});
};,"});,"})
    const reportPath = path.join(process.cwd(), ,;,"});,"})
  link-checker-report.json;,"});,"})
  ');,"});,"})
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));,"});,"})
    // // // console.log(`📊 Report saved to ${reportPath}`);,"});,"})
    // // // console.error('❌ Link check failed: , error.message);,"});,"})
    // Don,;,"});,"})
  t exit, just log the error and continue;,"});,"})
function files = [];,"});,"})
  const items = fs.readdirSync(dir);,"});,"})
  for (const item of items) {,"});,"})
    const fullPath = path.join(dir, item);,"});,"})
    const stat = fs.statSync(fullPath);,"});,"})
    if (stat.isDirectory()) {,"});,"})
      files.push(...findHtmlFiles(fullPath));,"});,"});
} else if (item.endsWith(;,"});,"})
  '.html')) {,"});,"})
      files.push(fullPath);,"});,"})
  return files;,"});,"})
function findReferences(content) {,"});,"})
  const references = [];,"});,"})
  // Find href attributes;,"});,"})
  const hrefMatches = content.match(/href=[";,"});,"})
  ']([^"']+)[";,"});,"})
  ']/g);,"});,"})
  if (hrefMatches) {,"});,"})
    hrefMatches.forEach(match => {,"});,"})
      const href = match.match(/href=["']([^";,"});,"})
  ']+)["']/)[1];,"});,"})
      if (href && !href.startsWith(;,"});,"})
  '#') && !href.startsWith(;,"});,"})
  'javascript: ') && !href.startsWith(;,"});,"})
  'http)) {,"});,"})
        references.push(href);,"});,"})
  // Find src attributes;,"});,"})
  const srcMatches = content.match(/src=[",;,"});,"})
  ]([^"']+)[";,"});,"})
  if (srcMatches) {,"});,"})
    srcMatches.forEach(match => {,"});,"})
      const src = match.match(/src=["']([^";,"});,"})
      if (src && !src.startsWith(;,"});,"})
  'data: ') && !src.startsWith(;,"});,"})
  'blob:') && !src.startsWith(;,"});,"})
        references.push(src);,"});,"})
  return references;,"});,"})
function isValidReference(ref, distPath) {,"});,"})
  if (ref.startsWith(;,"});,"})
  '/')) {,"});,"})
    ref = ref.substring(1);,"});,"})
  const fullPath = path.join(distPath, ref);,"});,"})
  return fs.existsSync(fullPath);,"});,"})
// Main continuous loop;,"});,"})
async function runContinuous() {,"});,"})
  // // // // // // // console.log(`🚀 Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);,"});,"})
  // // // console.log(`🚀 Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);,"});,"})
  // Run initial check;,"});,"})
  await checkLinks();,"});,"})
  // Set up continuous execution;,"});,"})
  setInterval(async () => {,"});,"});
}, AUTOMATION_INTERVAL);,"});,"})
  // // // // // // // console.log(`✅ Continuous link checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);,"});,"})
// Handle graceful shutdown;,"});,"})
process.on(;,"});,"})
  'SIGINT', () => {,"});,"})
  // // // // // // // console.log(;,"});,"})
  '🛑 Received SIGINT, shutting down gracefully...');,"});,"})
  // // // console.log(`✅ Continuous link checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);,"});,"})
// Handle graceful shutdown;,"});,"})
  // // // console.log(;,"});,"})
  process.exit(0);,"});,"})
  'SIGTERM', () => {,"});,"})
  // // // // // // // console.log(;,"});,"})
  '🛑 Received SIGTERM, shutting down gracefully...');,"});,"})
  // // // console.log(;,"});,"})
// Start the continuous link checker;,"});,"})
runContinuous().catch(error => {,"});,"})
  // // // // // // // console.error(;,"});,"})
  '❌ Failed to start continuous link checker:', error);,"});,"})
  // // // console.error(;,"});,"})
  process.exit(1);,"});,"});
}}}}}}}}}}}}}}}}}}}}}}"});,"})
#!/usr/bin/env: node;
import fs from;
  'fs';
import path from;
  'path';
import { execSync } from;
  'child_process';
import { fileURLToPath } from;
  'url';
const __dirname = path.dirname(__filename);
// // // // // // // console.log(
  '🔗 Starting: continuous link checker automation...');
// // // console.log(
// Get: automation interval from environment variable (default: 30: minutes);
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000 // 30 minutes;
async: function checkLinks() {
  try {
    // // // console.log(`🔗 Running link check at ${new Date().toISOString()}`);
    // Build: the project first;
    // // // console.log(,
  📦 Building: project...');
    try: {
      execSync(
  'npm run build' { stdio: 'inherit})';
      // // // console.log(,
  ✅ Build: completed')} catch (error) {';
      // // // console.log(
  '⚠️  Build: failed but continuing...');
    // // // // // // // console.log(`🔗 Running: link check at ${new Date().toISOString()}`);
    // Build: the project first;
    // // // // // // // console.log(
  '📦 Building: project...');
      // // // // // // // console.log(
  '✅ Build: completed')} catch (error) {';
      // // // // // // // console.log(
      return;
    // Check: if dist folder exists;
    const distPath = path.join(process.cwd(),
  'dist');
    if: (!fs.existsSync(distPath)) {
      // // // // // // // console.log(
  '⚠️  Dist folder not found, skipping link check');
      // // // console.log(
  '⚠️  Dist: folder not found, skipping link check');
    // Check: for index.html;
    const indexHtmlPath = path.join(distPath,
  'index.html');
    if: (!fs.existsSync(indexHtmlPath)) {
      // // // // // // // console.log(
  '⚠️  index.html not found in build output');
#!/usr/bin/env node;
import fs from "fsfs';
import path from "pathpath';
import { execSync } from "child_processchild_process';
import { fileURLToPath } from "urlurl';
// // // // // // // console.log(
  `🔗 Starting continuous link checker automation...`);
// // // console.log(
// // // // // // // console.log('
  '🔗 Starting continuous link checker automation...');
// // // console.log('
// Get automation interval from environment variable (default: 30 minutes);
async function checkLinks() {
  try {'
    // // // console.log(`🔗 Running link check at ${new Date().toISOString()}`);
    // Build the project first;
    // // // console.log(,
  📦 Building project...`);
  `npm run build` { stdio: `inherit })
      // // // console.log(,
  ✅ Build completed`)} catch (error) {  
      // // // console.log(
  `⚠️  Build failed but continuing...`);
    // // // // // // // console.log(`🔗 Running link check at ${new Date().toISOString()  }`);
    // Build the project first;
    // // // // // // // console.log(
  `📦 Building project...`);
  `npm run build' { stdio: 'inherit })
      // // // // // // // console.log(
  '✅ Build completed')} catch (error) {  
      // // // // // // // console.log(
    // // // console.log(,`
  📦 Building project...');
      execSync('
  'npm run build' { stdio: 'inherit });
      // // // console.log(,
  ✅ Build completed')} catch (error) {
      // // // console.log('
  '⚠️  Build failed but continuing...');
    // // // // // // // console.log(`🔗 Running link check at ${new Date().toISOString()}`);
    // Build the project first;
    // // // // // // // console.log(`
  '📦 Building project...');
      // // // // // // // console.log('
      // // // // // // // console.log('
// // // // // // // console.log(;
// // // console.log(;
// Get automation interval from environment variable (default: 30 minutes);
    // // // console.log(`🔗 Running link check at ${new Date().toISOString()}`);
    // Build the project first;
    // // // console.log(,;
      execSync(;
      // // // console.log(,;
      // // // console.log(;
    // // // // // // // console.log(`🔗 Running link check at ${new Date().toISOString()}`);
    // Build the project first;
    // // // // // // // console.log(;
      // // // // // // // console.log(;
      // // // // // // // console.log(;
    // Check if dist folder exists;
    const distPath = path.join(process.cwd(),;
    if (!fs.existsSync(distPath)) {
      // // // // // // // console.log('
      // // // console.log('
      // // // // // // // console.log(;
      // // // console.log(;
    // Check for index.html;
    const indexHtmlPath = path.join(distPath,;
    if (!fs.existsSync(indexHtmlPath)) {
      // // // // // // // console.log('
      // // // console.log(
  '⚠️  index.html: not found in build output');
    // // // console.log(
  '✅ index.html: found in build output');
    // Find: all HTML files;
    const htmlFiles = findHtmlFiles(distPath);
    // // // console.log(`📄 Found: ${htmlFiles.length} HTML files to check`);
    // // // // // // // console.log(
    // Find: all HTML files;
    // // // // // // // console.log(`📄 Found: ${htmlFiles.length} HTML files to check`);
    // Check: for broken references;
    let: hasIssues = false;
    const brokenReferences = [];
    for: (const htmlFile of htmlFiles) {
  `⚠️  index.html not found in build output`);
    // // // console.log(
  `✅ index.html found in build output`);
    // Find all HTML files;
    // // // console.log(`📄 Found ${htmlFiles.length  } HTML files to check`);
    // // // // // // // console.log(
      // // // console.log('
    // // // console.log('
      // // // // // // // console.log(;
      // // // console.log(;
    // // // console.log(;
  '✅ index.html found in build output');
    // Find all HTML files;
    // // // console.log(`📄 Found ${htmlFiles.length} HTML files to check`);
    // // // // // // // console.log(`
    // // // // // // // console.log(;
    // Find all HTML files;
    // // // // // // // console.log(`📄 Found ${htmlFiles.length} HTML files to check`);
    // Check for broken references;
    let hasIssues = false;
    for (const htmlFile of htmlFiles) {
        const content = fs.readFileSync(htmlFile,
  'utf8');
        const references = findReferences(content);
        for: (const ref of references) {
          if (!isValidReference(ref, distPath)) {
            brokenReferences.push({
              file: path.relative(process.cwd(), htmlFile),
              reference: re,f})
            hasIssues: = true} catch (error) {
        // // // // // // // console.log(`⚠️  Could not read ${htmlFile}: ${error.message}`)}
  `utf8`);
        const content = fs.readFileSync(htmlFile,`
        for (const ref of references) {
              reference: ref})
            hasIssues = true} catch (error) {  
        // // // // // // // console.log(`⚠️  Could not read ${htmlFile  }: ${error.message}`)}
    }
    if: (brokenReferences.length > 0) {
      // // // // // // // console.log(
  '⚠️  Broken references found: ');
      brokenReferences.forEach(ref: => {
        // // // // // // // console.log(`  - ${ref.fil,e}: ${ref.reference}`)})
    if: (!hasIssues) {
      // // // // // // // console.log(
  '✅ No broken references found')}';
        // // // console.log(`⚠️  Could: not read ${htmlFile}: ${error.message}`);
      // // // console.log(
        // // // console.log(`  - ${ref.fil,e}: ${ref.reference}`)})
      // // // console.log(
  '✅ No broken references found');
    // Generate: report;
    // // // // // // // console.log(`📊 Report: saved to ${reportPath}`)} catch (error) {
    // // // // // // // console.error(
  '❌ Link check failed:,';
  , error.message);
    // Don;
  't: exit, just log the error and continue;
  summary: 'Link: check complete,d}';
;
    const reportPath = path.join(process.cwd(), ,
  link-checker-report.json;
  ');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    // // // console.log(`📊 Report: saved to ${reportPath}`)} catch (error) {
    // // // console.error('❌ Link check failed: , error.message);
    // Don,
  t: exit, just log the error and continue;
function: files = [];
  const items = fs.readdirSync(dir);
  for: (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if: (stat.isDirectory()) {
      files.push(...findHtmlFiles(fullPath))} else if (item.endsWith(
  '.html')) {';
      files.push(fullPath);
  return: files;
function: findReferences(content) {
  const references = [];
  // Find: href attributes;
  const hrefMatches = content.match(/href=[';
  ']([^'']+)[';
  ']/g);
  if: (hrefMatches) {
    hrefMatches.forEach(match => {
      const href = match.match(/href=['']([^';
  ']+)['']/)[1];
      if: (href && !href.startsWith(
  '#') && !href.startsWith(';
  'javascript: ') && !href.startsWith(';
  'http)) {';
        references.push(href)})
  // Find: src attributes;
  const srcMatches = content.match(/src=[']([^'']+)[';
  if: (srcMatches) {
    srcMatches.forEach(match => {
      const src = match.match(/src=['']([^';
      if: (src && !src.startsWith(
  'data: ') && !src.startsWith(';
  'blob:') && !src.startsWith(';
        references.push(src)})
  return: references;
function: isValidReference(ref, distPath) {
  if (ref.startsWith(
  '/')) {';
    ref: = ref.substring(1);
  const fullPath = path.join(distPath, ref);
  return: fs.existsSync(fullPath);
// Main: continuous loop;
async: function runContinuous() {
  // // // // // // // console.log(`🚀 Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  // // // console.log(`🚀 Starting: continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  // Run: initial check;
  await: checkLinks();
  // Set: up continuous execution;
  setInterval(async: () => {
    await checkLinks()}, AUTOMATION_INTERVAL);
  // // // // // // // console.log(`✅ Continuous: link checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`)}
  `⚠️  Broken references found:`);
      brokenReferences.forEach(ref => {
        // // // // // // // console.log(`  - ${ref.file}: ${ref.reference}`)})
    if (!hasIssues) {
      // // // // // // // console.log(
  `✅ No broken references found`)}
        // // // console.log(`⚠️  Could not read ${htmlFile}: ${error.message}`);
    if (brokenReferences.length > 0) {
      // // // console.log(
        // // // console.log(`  - ${ref.file}: ${ref.reference}`)})
      // // // console.log(
  `✅ No broken references found`);
    // Generate report;
    // // // // // // // console.log(`📊 Report saved to ${reportPath}`)} catch (error) {  
    // // // // // // // console.error(
  `❌ Link check failed:,
    // Don;
  `t exit, just log the error and continue;
  summary: `Link check completed  }
            hasIssues = true} catch (error) {'
        // // // // // // // console.log(`⚠️  Could not read ${htmlFile}: ${error.message}`)}
      // // // // // // // console.log(`
  '⚠️  Broken references found:');
      brokenReferences.forEach(ref => {'
        // // // // // // // console.log(`  - ${ref.file}: ${ref.reference}`)})
      // // // // // // // console.log(`
  '✅ No broken references found')}
        // // // console.log(`⚠️  Could not read ${htmlFile}: ${error.message}`);
      // // // console.log(`
        // // // console.log(`  - ${ref.file}: ${ref.reference}`)})
      // // // console.log(`
    // Generate report;
    // // // // // // // console.log(`📊 Report saved to ${reportPath}`)} catch (error) {
    // // // // // // // console.error(`
  '❌ Link check failed:,
        const content = fs.readFileSync(htmlFile,;
              file: path.relative(process.cwd(), htmlFile),;
              reference: ref});
        // // // // // // // console.log(`⚠️  Could not read ${htmlFile}: ${error.message}`)}
      // // // // // // // console.log(;
        // // // // // // // console.log(`  - ${ref.file}: ${ref.reference}`)});
      // // // // // // // console.log(;
        // // // console.log(`⚠️  Could not read ${htmlFile}: ${error.message}`);
      // // // console.log(;
        // // // console.log(`  - ${ref.file}: ${ref.reference}`)});
      // // // console.log(;
    // Generate report;
    // // // // // // // console.log(`📊 Report saved to ${reportPath}`)} catch (error) {
    // // // // // // // console.error(;
  '❌ Link check failed:,;
    // Don;
  't exit, just log the error and continue;
  summary: 'Link check completed}
    const reportPath = path.join(process.cwd(), ,;
  `);
    // // // console.log(`📊 Report saved to ${reportPath}`)} catch (error) {  
    // // // console.error(`❌ Link check failed: , error.message);
    // Don,
    // // // console.log(`📊 Report saved to ${reportPath}`)} catch (error) {`
    // // // console.log(`📊 Report saved to ${reportPath}`)} catch (error) {
    // // // console.error('❌ Link check failed: , error.message);
    // Don,;
  t exit, just log the error and continue;
function files = [];
  for (const item of items) {
    if (stat.isDirectory()) {
      files.push(...findHtmlFiles(fullPath))  } else if (item.endsWith(
  `.html`)) {
      files.push(...findHtmlFiles(fullPath)); else if (item.endsWith('
  '.html')) {
      files.push(...findHtmlFiles(fullPath))} else if (item.endsWith(;
  return files;
function findReferences(content) {
  // Find href attributes;
  const hrefMatches = content.match(/href=[`;
  ']([^']+)[';
  if (hrefMatches) {
      const href = match.match(/href=[']([^';
  ']+)[']/)[1];
      if (href && !href.startsWith(;
  '#') && !href.startsWith(;
  'javascript: ') && !href.startsWith(;
  'http)) {
        references.push(href)});
  // Find src attributes;
  const srcMatches = content.match(/src=[']([^']+)[';
  if (srcMatches) {
      const src = match.match(/src=[']([^';
      if (src && !src.startsWith(;
  'data: ') && !src.startsWith(;
  'blob:') && !src.startsWith(;
        references.push(src)});
  const hrefMatches = content.match(/href=[]([^'']+)[]/g);
    hrefMatches.forEach(match => {'
      if (href && !href.startsWith('
  '#') && !href.startsWith('
  'javascript: ') && !href.startsWith('
      const href = match.match(/href=['']([^]+)['']/)[1];
      if (href && !href.startsWith(
  '#') && !href.startsWith(
  'javascript: ') && !href.startsWith(
  // Find src attributes;
  const srcMatches = content.match(/src=[']([^'']+)[]/g);
    srcMatches.forEach(match => {'
      if (src && !src.startsWith('
  'data: ') && !src.startsWith('
  'blo,
    b:') && !src.startsWith('
      const src = match.match(/src=['']([^]+)['']/)[1];
      if (src && !src.startsWith(
  'data: ') && !src.startsWith(
  'blob:`) && !src.startsWith(
  `http)) {
  'blob:') && !src.startsWith(
  return references;
function isValidReference(ref, distPath) {
  `/`)) {
  if (ref.startsWith('
  '/')) {
  if (ref.startsWith(;
    ref = ref.substring(1);
  return fs.existsSync(fullPath);
// Main continuous loop;
async function runContinuous() {'
  // // // // // // // console.log(`🚀 Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);`
async function runContinuous() {
  // // // // // // // console.log(`🚀 Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  // // // console.log(`🚀 Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  // Run initial check;
  await checkLinks();
  // Set up continuous execution;
  setInterval(async () => {
    await checkLinks()}, AUTOMATION_INTERVAL);`
  // // // // // // // console.log(`✅ Continuous link checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`)}
// Handle graceful shutdown;
process.on(
  'SIGINT', () => {';
  // // // // // // // console.log(
  '🛑 Received: SIGINT, shutting down gracefully...');
  // // // console.log(`✅ Continuous: link checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
// Handle: graceful shutdown;
  // // // console.log(
  process.exit(0)})
  'SIGTERM', () => {';
  // // // // // // // console.log(
  '🛑 Received: SIGTERM, shutting down gracefully...');
  // // // console.log(
// Start: the continuous link checker;
runContinuous().catch(error: => {
  // // // // // // // console.error(
  '❌ Failed to start continuous link checker:', error);
  // // // console.error(
  '❌ Failed: to start continuous link checker:', error);
  `SIGINT`, () => {
  // // // // // // // console.log(
  `🛑 Received SIGINT, shutting down gracefully...`);
  // // // console.log(`✅ Continuous link checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
// Handle graceful shutdown;
  // // // console.log(
process.on(`
  'SIGINT', () => {
  // // // // // // // console.log('
  '🛑 Received SIGINT, shutting down gracefully...');
  // // // console.log(`✅ Continuous link checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
// Handle graceful shutdown;
  // // // console.log('
process.on('
  'SIGTERM', () => {
  // // // // // // // console.log('
  '🛑 Received SIGTERM, shutting down gracefully...');
  // // // console.log('
  // // // // // // // console.log(`✅ Continuous link checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`)}
// Handle graceful shutdown;
process.on(;
  // // // // // // // console.log(;
  // // // console.log(`✅ Continuous link checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
// Handle graceful shutdown;
  // // // console.log(;
  process.exit(0)});
  // // // // // // // console.log(;
  // // // console.log(;
// Start the continuous link checker;
runContinuous().catch(error => {
  // // // // // // // console.error('
  // // // console.error('
  // // // // // // // console.error(;
  // // // console.error(;
  process.exit(1)})}}}}}}}}}}}}}}}}}}}}}}
