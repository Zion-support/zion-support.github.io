#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting comprehensive PR merge and conflict resolution...\n');

// Function to run git commands safely
function runGit(command, options = {}) {
  try {
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      ...options 
    });
    return result.trim();
  } catch (error) {
    console.log(`⚠️  Git command failed: ${command}`);
    console.log(`Error: ${error.message}`);
    return null;
  }
}

// Function to resolve package.json conflicts
function resolvePackageJsonConflicts() {
  console.log('📦 Resolving package.json conflicts...');
  
  const packageJsonPath = '/workspace/package.json';
  let content = fs.readFileSync(packageJsonPath, 'utf8');
  
  // Remove merge conflict markers and keep the most complete version
    
    // For dependencies, merge both parts intelligently
    if (headPart.includes('"dependencies"') || headPart.includes('"devDependencies"')) {
      try {
        const headObj = JSON.parse('{' + headPart + '}');
        const prObj = JSON.parse('{' + prPart + '}');
        
        // Merge dependencies, preferring PR versions for conflicts
        const merged = { ...headObj, ...prObj };
        return JSON.stringify(merged, null, 2).replace('{', '').replace('}', '');
      } catch (e) {
        // If parsing fails, prefer the PR version
        return prPart;
      }
    }
    
    // For other sections, prefer PR version
    return prPart;
  });
  
  // Clean up any remaining conflict markers