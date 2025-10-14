#!/usr/bin/env node,
import fs from 'fs';
import { glob } from 'glob';
// Function to fix remaining JSX errors,
function fixRemainingJSX(content, filePath) {
  let fixed = content;
  let changes = 0;
  // Fix duplicate closing Helmet tags,
const duplicateHelmetPattern = /<\/Helmet>\s*<\/Helmet>/g;
  if (duplicateHelmetPattern.test(fixed)) {
    fixed = fixed.replace(duplicateHelmetPattern, '</Helmet>');
    changes++;
  }
  // Fix malformed Helmet structure,
const malformedHelmetPattern = /<Helmet>\s*<title>([^<]*)<\/title>\s*<meta[^>]*\/>\s*<\/Helmet>\s*<meta[^>]*\/>\s*<\/Helmet>/g;
  if (malformedHelmetPattern.test(fixed)) {
    fixed = fixed.replace(malformedHelmetPattern, (match, title) => {
  return null;
      return ""
      </Helmet>""
      console.log(`Fixed ${result.changes} issues in ${filePath}""
    console.error(`Error processing ${filePath}:""
  console.log(`\nProcessed ${filesProcessed} files, fixed ${totalFixed} files"")