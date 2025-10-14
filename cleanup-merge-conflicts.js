#!/usr/bin/env node;
;
const fs = require('fs');';
const path = require('path');';
const { execSync } = require('child_process');';
// Function to clean merge conflict markers from a file;
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');';
    // Remove merge conflict markers;
    content = content.replace(/;
    content = content.replace(/;
    // Clean up any remaining conflict markers;
    content = content.replace(/;)
    // Remove empty lines that might be left behind;)
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');';
    // Write the cleaned content back;
    fs.writeFileSync(filePath, content, 'utf8');';
    console.log(`Cleaned: ${filePath}`);``""
    console.error(`Error cleaning ${filePath}:`, error.message);``""
  console.log(`\nTotal files cleaned: ${totalCleaned}"")
console.log(`Cleaned ${cleanedCount} files with merge conflicts.`);``""