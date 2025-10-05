#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔧 Quick Merge Conflict Resolution');

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has conflicts
    if (!content.includes('      return false;
    }
    
    console.log(`Fixing: ${filePath}`);
    
    // Remove conflict markers and choose the better version
    const sections = content.split(/    