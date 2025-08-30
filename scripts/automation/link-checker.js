#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

<<<<<<< HEAD
// // // console.log('🔗 Starting continuous link checker automation...');
=======
// // // // // // // console.log('🔗 Starting continuous link checker automation...');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

// Get automation interval from environment variable (default: 30 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes

async function checkLinks() {
  try {
<<<<<<< HEAD
    // // // console.log(`🔗 Running link check at ${new Date().toISOString()}`);

    // Build the project first
    // // // console.log('📦 Building project...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      // // // console.log('✅ Build completed');
    } catch (error) {
      // // // console.log('⚠️  Build failed but continuing...');
=======
    // // // // // // // console.log(`🔗 Running link check at ${new Date().toISOString()}`);

    // Build the project first
    // // // // // // // console.log('📦 Building project...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      // // // // // // // console.log('✅ Build completed');
    } catch (error) {
      // // // // // // // console.log('⚠️  Build failed but continuing...');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
      return;

    // Check if dist folder exists
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
<<<<<<< HEAD
      // // // console.log('⚠️  Dist folder not found, skipping link check');
=======
      // // // // // // // console.log('⚠️  Dist folder not found, skipping link check');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
      return;

    // Check for index.html
    const indexHtmlPath = path.join(distPath, 'index.html');
    if (!fs.existsSync(indexHtmlPath)) {
<<<<<<< HEAD
      // // // console.log('⚠️  index.html not found in build output');
=======
      // // // // // // // console.log('⚠️  index.html not found in build output');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
      return;

<<<<<<< HEAD
    // // // console.log('✅ index.html found in build output');

    // Find all HTML files
    const htmlFiles = findHtmlFiles(distPath);
    // // // console.log(`📄 Found ${htmlFiles.length} HTML files to check`);
=======
    // // // // // // // console.log('✅ index.html found in build output');

    // Find all HTML files
    const htmlFiles = findHtmlFiles(distPath);
    // // // // // // // console.log(`📄 Found ${htmlFiles.length} HTML files to check`);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

    // Check for broken references
    let hasIssues = false;
    const brokenReferences = [];

    for (const htmlFile of htmlFiles) {
      try {
        const content = fs.readFileSync(htmlFile, 'utf8');
        const references = findReferences(content);

        for (const ref of references) {
          if (!isValidReference(ref, distPath)) {
            brokenReferences.push({
              file: path.relative(process.cwd(), htmlFile),
              reference: ref
            });
            hasIssues = true;


      } catch (error) {
<<<<<<< HEAD
        // // // console.log(`⚠️  Could not read ${htmlFile}: ${error.message}`);


    if (brokenReferences.length > 0) {
      // // // console.log('⚠️  Broken references found:');
      brokenReferences.forEach(ref => {
        // // // console.log(`  - ${ref.file}: ${ref.reference}`);
=======
        // // // // // // // console.log(`⚠️  Could not read ${htmlFile}: ${error.message}`);
      }
    }

    if (brokenReferences.length > 0) {
      // // // // // // // console.log('⚠️  Broken references found:');
      brokenReferences.forEach(ref => {
        // // // // // // // console.log(`  - ${ref.file}: ${ref.reference}`);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
      });

    if (!hasIssues) {
<<<<<<< HEAD
      // // // console.log('✅ No broken references found');
=======
      // // // // // // // console.log('✅ No broken references found');
    }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      hasIssues,
      htmlFiles: htmlFiles.length,
      brokenReferences: brokenReferences.length,
      summary: 'Link check completed'
    };

    const reportPath = path.join(process.cwd(), 'link-checker-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
<<<<<<< HEAD
    // // // console.log(`📊 Report saved to ${reportPath}`);

  } catch (error) {
    // // // console.error('❌ Link check failed:', error.message);
=======
    // // // // // // // console.log(`📊 Report saved to ${reportPath}`);

  } catch (error) {
    // // // // // // // console.error('❌ Link check failed:', error.message);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    // Don't exit, just log the error and continue


function findHtmlFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (item.endsWith('.html')) {
      files.push(fullPath);


  return files;

function findReferences(content) {
  const references = [];

  // Find href attributes
  const hrefMatches = content.match(/href=["']([^"']+)["']/g);
  if (hrefMatches) {
    hrefMatches.forEach(match => {
      const href = match.match(/href=["']([^"']+)["']/)[1];
      if (href && !href.startsWith('#') && !href.startsWith('javascript:') && !href.startsWith('http')) {
        references.push(href);

    });

  // Find src attributes
  const srcMatches = content.match(/src=["']([^"']+)["']/g);
  if (srcMatches) {
    srcMatches.forEach(match => {
      const src = match.match(/src=["']([^"']+)["']/)[1];
      if (src && !src.startsWith('data:') && !src.startsWith('blob:') && !src.startsWith('http')) {
        references.push(src);

    });

  return references;

function isValidReference(ref, distPath) {
  if (ref.startsWith('/')) {
    ref = ref.substring(1);

  const fullPath = path.join(distPath, ref);
  return fs.existsSync(fullPath);

// Main continuous loop
async function runContinuous() {
<<<<<<< HEAD
  // // // console.log(`🚀 Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
=======
  // // // // // // // console.log(`🚀 Starting continuous link checker with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

  // Run initial check
  await checkLinks();

  // Set up continuous execution
  setInterval(async () => {
    await checkLinks();
  }, AUTOMATION_INTERVAL);

<<<<<<< HEAD
  // // // console.log(`✅ Continuous link checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);

// Handle graceful shutdown
process.on('SIGINT', () => {
  // // // console.log('🛑 Received SIGINT, shutting down gracefully...');
=======
  // // // // // // // console.log(`✅ Continuous link checker running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  // // // // // // // console.log('🛑 Received SIGINT, shutting down gracefully...');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
  process.exit(0);
});

process.on('SIGTERM', () => {
<<<<<<< HEAD
  // // // console.log('🛑 Received SIGTERM, shutting down gracefully...');
=======
  // // // // // // // console.log('🛑 Received SIGTERM, shutting down gracefully...');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
  process.exit(0);
});

// Start the continuous link checker
runContinuous().catch(error => {
<<<<<<< HEAD
  // // // console.error('❌ Failed to start continuous link checker:', error);
=======
  // // // // // // // console.error('❌ Failed to start continuous link checker:', error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
  process.exit(1);
});
}}}}}}}}}}}}}}}}}}}}}}