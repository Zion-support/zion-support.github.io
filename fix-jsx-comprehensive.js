#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
// Function to fix comprehensive JSX errors,
function fixJSXComprehensive(content, filePath) {
  let fixed = content;
  let changes = 0;
  // Fix files with duplicate closing tags and malformed structure,
if (filePath.includes('5 g-implementation') || filePath.includes('5 g-solutions')) {
    const correctStructure = ""
}""
    const correctStructure = "";
export default AboutPage;""
    const correctStructure = ""
}""
      console.log(`Fixed ${result.changes} issues in ${filePath}""
    console.error(`Error processing ${filePath}:""
  console.log(`\nProcessed ${filesProcessed} files, fixed ${totalFixed} files"";)