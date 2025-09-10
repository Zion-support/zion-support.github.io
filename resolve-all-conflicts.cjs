const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ConflictResolver {
  constructor() {
    this.resolvedFiles = [];
    this.failedFiles = [];
    this.totalFiles = 0;
  }

  
  // Clean up any remaining artifacts
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  // Remove any remaining conflict markers
  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  resolveConflictsInFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return false;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has merge conflicts
        .replace(/<<<<<<< [^\n]+\n?/g, '')

      // Clean up any remaining artifacts
      content = content
        .replace(/\n{3,}/g, '\n\n') // Remove excessive newlines
        .replace(/^\s*\n/gm, '') // Remove empty lines at start
        .trim();

      fs.writeFileSync(filePath, content);
      this.resolvedFiles.push(filePath);
      return true;
    } catch (error) {
      this.log(`❌ Failed to resolve ${filePath}: ${error.message}`);
      this.failedFiles.push({ file: filePath, error: error.message });
      return false;
    }
  }

  async resolveAllConflicts() {
    this.log('🚀 Starting conflict resolution...');
    
    // Get all files with merge conflicts
    try {