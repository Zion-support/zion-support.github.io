#!/usr/bin/env node;
/**
 * Footer Injector Script;
 * Injects dynamic content into the footer after build;
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 Running footer injector...');

try {
  const distPath = path.join(__dirname, '..', 'dist');
  const indexPath = path.join(distPath, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.log('⚠️  index.html not found in dist folder');
    process.exit(0)}

  let html = fs.readFileSync(indexPath, `utf8`);

  // Add build timestamp;
  const timestamp = new Date().toISOString();
  const buildInfo = `<!-- Build: ${timestamp} -->`;

  if (!html.includes(buildInfo)) {
    html = html.replace(`</head>`, `${buildInfo}\n</head>`);
    fs.writeFileSync(indexPath, html);
    console.log(`✅ Footer injection completed`)} else {
    console.log('ℹ️  Footer already injected')}
} catch (error) { 
  console.log('⚠️  Footer injection failed:', error.message);
  // Don't fail the build for this;
  process.exit(0)}
