
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting Merge Conflict Resolution');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/



