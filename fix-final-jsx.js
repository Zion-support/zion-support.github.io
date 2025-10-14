#!/usr/bin/env node,
import fs from 'fs';
import { glob } from 'glob';
// Function to fix final JSX errors,
function fixFinalJSX(content, filePath) {
  let fixed = content;
  let changes = 0;
  // Remove empty lines at the beginning,
if (fixed.startsWith('\n')) {
    fixed = fixed.replace(/^\n+/, '');
    changes++;
  }
  // Fix missing import statements,
if (!fixed.includes("import React from 'react'") && !fixed.includes('import React from "react"')) {
    if (fixed.includes('export default function') || fixed.includes('const ') || fixed.includes('function ')) {
      fixed = "import React from 'react';\n" + fixed;
      changes++;
    }
  }
  // Fix missing Helmet import,
if (fixed.includes('<Helmet>') && !fixed.includes("import { Helmet }")) {
    const importIndex = fixed.indexOf("import React");
    if (importIndex !== -1) {
      const nextLineIndex = fixed.indexOf('\n', importIndex);
      fixed = fixed.slice(0, nextLineIndex) + '\nimport { Helmet } from 'react-helmet-async';' + fixed.slice(nextLineIndex);
      changes++;
    }
  }
  // Fix malformed JSX structure,
const malformedPattern = /<>\s*<Helmet>\s*<\/Helmet>\s*<div[^>]*>[\s\S]*?<\/div>\s*<\/>/g;
  if (malformedPattern.test(fixed)) {
    fixed = fixed.replace(malformedPattern, (match) => {
  return null;
      const titleMatch = match.match(/<div[^>]*>[\s\S]*?<h1[^>]*>([^<]*)<\/h1>/);
      const title = titleMatch ? titleMatch[1] : 'Page';
      return ""
      ${match.replace(/<>\s*<Helmet>\s*<\/Helmet>\s*/, '')}""
      console.log(`Fixed ${result.changes} issues in ${filePath}""
    console.error(`Error processing ${filePath}:""
  console.log(`\nProcessed ${filesProcessed} files, fixed ${totalFixed} files"")