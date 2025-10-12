#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts
    }
    
    console.log(`📝 Resolving conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = '';
    let headContent = [];
    let otherContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'other';
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        // End of conflict - choose the best content
        inConflict = false;
        
        // For most cases, prefer the HEAD version (current branch)
        // But for specific files, we might want different logic
        const chosenContent = chooseBestContent(filePath, headContent, otherContent);
        resolvedLines.push(...chosenContent);
        
        headContent = [];
        otherContent = [];
        conflictType = '';
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headContent.push(line);
        } else if (conflictType === 'other') {
          otherContent.push(line);
        }
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write resolved content
    fs.writeFileSync(filePath, resolvedLines.join('\n'));
    return true;
    
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to choose the best content between HEAD and other branch
function chooseBestContent(filePath, headContent, otherContent) {
  // For specific file types, apply different logic
  if (filePath.includes('package.json')) {
    // For package.json, prefer the version with more dependencies
    return headContent.length > otherContent.length ? headContent : otherContent;
  }
  
  if (filePath.includes('index.html')) {
    // For index.html, prefer the version with more meta tags and SEO content
    const headMetaCount = headContent.filter(line => line.includes('<meta')).length;
    const otherMetaCount = otherContent.filter(line => line.includes('<meta')).length;
    return headMetaCount > otherMetaCount ? headContent : otherContent;
  }
  
  if (filePath.includes('Navigation.tsx') || filePath.includes('Navigation.tsx')) {
    // For navigation components, prefer the version with more comprehensive navigation
    const headServiceCount = headContent.filter(line => line.includes('name:')).length;
    const otherServiceCount = otherContent.filter(line => line.includes('name:')).length;
    return headServiceCount > otherServiceCount ? headContent : otherContent;
  }
  
  // Default: prefer HEAD (current branch) content
  return headContent.length > 0 ? headContent : otherContent;
}

// Function to find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'out'].includes(file)) {
          scanDirectory(filePath);
        }
      } else if (stat.isFile()) {
        // Check if file has merge conflicts
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
            conflictedFiles.push(filePath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory(dir);
  return conflictedFiles;
}

// Main execution
try {
  const conflictedFiles = findConflictedFiles('.');
  console.log(`🔍 Found ${conflictedFiles.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`✅ Successfully resolved conflicts in ${resolvedCount} files`);
  if (errorCount > 0) {
    console.log(`❌ Failed to resolve conflicts in ${errorCount} files`);
  }
  
  // Try to build the project to check if conflicts are resolved
  console.log('🔨 Testing build after conflict resolution...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build successful! All conflicts resolved.');
  } catch (buildError) {
    console.log('❌ Build still has issues. Checking for remaining conflicts...');
    
    // Check for remaining conflicts
    const remainingConflicts = findConflictedFiles('.');
    if (remainingConflicts.length > 0) {
      console.log(`⚠️  Still have ${remainingConflicts.length} files with conflicts:`);
      remainingConflicts.forEach(file => console.log(`   - ${file}`));
    }
  }
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1);
}