#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');



// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {

      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');

        const parts = match.split('');
        if (parts.length === 2) {
          const headPart = parts[0].replace('
        const parts = match.split('');
        if (parts.length === 2) {
          const headPart = parts[0].replace('
        const parts = match.split('');
        if (parts.length === 2) {
          const headPart = parts[0].replace('
    resolvedContent = resolvedContent.replace(/

    // Write the resolved content
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);


    // Check if file has merge conflicts
    if (!content.includes('
    return false;
  }
}

// Function to find all files with merge conflicts

  } catch (error) {
    console.error('Error finding conflicted files:', error.message);
    return [];
  }
}


