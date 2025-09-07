

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function fixMergeConflicts(filePath) {
  try {

  }

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.match(/\.(ts|tsx|js|jsx)$/)) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
  
  return fixedCount;
}

console.log('Starting merge conflict fix...');
const fixedCount = findAndFixFiles('.');
console.log(`Fixed ${fixedCount} files with merge conflicts.`);
class MergeConflictFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async findFilesWithConflicts() {
    try {
      const result = execSync(
        'find . -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "" 2>/dev/null || true',
        { cwd: this.projectRoot, encoding: 'utf8' }
      );
      return result.trim().split('\n').filter(file => file && !file.includes('node_modules'));
    } catch (error) {
      this.log(`Error finding conflict files: ${error.message}`);
      return [];
    }

  fixMergeConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Skip if no merge conflicts
      if (!content.includes('')) {
        return { success: true, message: 'No conflicts found' };
      }

      this.log(`Fixing merge conflicts in: ${filePath}`);

      // Strategy: Keep the last version (after the last     content = content.replace(/[\s\S]*?    content = content.replace(/[\s\S]*?    
    // Clean up any remaining merge conflict markers
    content = content.replace(//g, '');
    content = content.replace(/    
    // Remove empty lines and clean up syntax
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/;\s*;/g, ';');
    content = content.replace(/,\s*,/g, ',');
    
    // Fix common syntax issues
    content = content.replace(/export type DisputeStatus = 'Open' \| 'Under Review' \| 'Resolved',;/g, "export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';");
    content = content.replace(/export type DisputeReason =;/g, "export type DisputeReason = 'Scope Disagreement' | 'Quality Issues' | 'Delivery Delay' | 'Payment Issue' | 'Communication Breakdown' | 'Other';");
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed merge conflicts in: ${filePath}`);
    
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }

// Fix all files
filesToFix.forEach(fixMergeConflicts);

console.log('🎉 Merge conflict fixing completed!');
