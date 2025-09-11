#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixed = false;

    // Check if file has merge conflicts
      
      // Clean up extra whitespace
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      content = content.replace(/^\s+$/gm, '');
      
      fixed = true;
    }

    if (fixed && content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      log(`✅ Resolved conflicts in: ${filePath}`, 'green');
      return true;
    }

    return false;
  } catch (error) {
    log(`❌ Error resolving conflicts in ${filePath}: ${error.message}`, 'red');
    return false;
  }
}

// Function to find files with merge conflicts
function findConflictedFiles() {
  const conflictedFiles = [];
  
  function scanDirectory(dir) {
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(fullPath);
        } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.json') || item.endsWith('.md'))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');