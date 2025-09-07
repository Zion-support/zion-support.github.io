#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Starting comprehensive merge conflict resolution...\n');

// Get all conflicted files
function getConflictedFiles() {
  try {
    const output = execSync('git status --porcelain', { encoding: 'utf8' });
    const lines = output.split('\n').filter(line => line.trim());
    
    const conflictedFiles = lines
      .filter(line => {
        const status = line.substring(0, 2);
        return ['UU', 'AA', 'DD', 'AU', 'UA', 'DU', 'UD'].includes(status);
      })
      .map(line => line.substring(3).trim());
    
    return conflictedFiles;
  } catch (error) {
    console.error('❌ Error getting conflicted files:', error.message);
    return [];
  }
}

// Resolve conflicts in a file
function resolveConflictsInFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File does not exist: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has conflict markers
    if (!content.includes('<<<<<<< HEAD') || !content.includes('=======') || !content.includes('>>>>>>>')) {
      console.log(`✅ No conflicts in: ${filePath}`);
      return true;
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);

    let resolvedContent = content;
    let conflictCount = 0;

    // Strategy 1: Keep both versions when possible (for different sections)
    resolvedContent = resolvedContent.replace(
      /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g,
      (match, headContent, mainContent) => {
        conflictCount++;
        
        // If both sections are similar (just whitespace differences), keep HEAD
        const headTrimmed = headContent.trim();
        const mainTrimmed = mainContent.trim();
        
        if (headTrimmed === mainTrimmed) {
          return headContent;
        }
        
        // If one is empty, keep the non-empty one
        if (!headTrimmed) return mainContent;
        if (!mainTrimmed) return headContent;
        
        // If both have content, prefer HEAD (our changes) but add a comment
        return `${headContent}\n// Merged from main branch:\n${mainContent}`;
      }
    );

    // Strategy 2: Handle import conflicts - prefer the more complete version
    resolvedContent = resolvedContent.replace(
      /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g,
      (match, headContent, mainContent) => {
        if (headContent.includes('import') && mainContent.includes('import')) {
          // Merge imports intelligently
          const headImports = headContent.match(/import[^;]+;/g) || [];
          const mainImports = mainContent.match(/import[^;]+;/g) || [];
          
          const allImports = [...new Set([...headImports, ...mainImports])];
          return allImports.join('\n') + '\n' + 
                 headContent.replace(/import[^;]+;/g, '').trim() + '\n' +
                 mainContent.replace(/import[^;]+;/g, '').trim();
        }
        return headContent;
      }
    );

    // Strategy 3: Handle package.json conflicts - prefer our version but merge dependencies
    if (filePath.endsWith('package.json')) {
      try {
        const headJson = JSON.parse(headContent.split('<<<<<<< HEAD')[1]?.split('=======')[0] || '{}');
        const mainJson = JSON.parse(headContent.split('=======')[1]?.split('>>>>>>>')[0] || '{}');
        
        // Merge dependencies
        const mergedDeps = { ...mainJson.dependencies, ...headJson.dependencies };
        const mergedDevDeps = { ...mainJson.devDependencies, ...headJson.devDependencies };
        
        const mergedJson = {
          ...mainJson,
          ...headJson,
          dependencies: mergedDeps,
          devDependencies: mergedDevDeps
        };
        
        resolvedContent = JSON.stringify(mergedJson, null, 2);
        conflictCount = 1; // Reset since we handled it specially
      } catch (e) {
        // Fall back to regular resolution
      }
    }

    // Write resolved content
    fs.writeFileSync(filePath, resolvedContent);
    
    console.log(`✅ Resolved ${conflictCount} conflicts in: ${filePath}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Main resolution process
function resolveAllConflicts() {
  const conflictedFiles = getConflictedFiles();
  
  console.log(`📊 Found ${conflictedFiles.length} files with conflicts\n`);
  
  if (conflictedFiles.length === 0) {
    console.log('🎉 No conflicts found!');
    return;
  }

  let resolvedCount = 0;
  let failedCount = 0;

  // Process files in batches to avoid overwhelming the system
  const batchSize = 50;
  for (let i = 0; i < conflictedFiles.length; i += batchSize) {
    const batch = conflictedFiles.slice(i, i + batchSize);
    console.log(`\n📦 Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(conflictedFiles.length/batchSize)} (${batch.length} files)`);
    
    for (const file of batch) {
      if (resolveConflictsInFile(file)) {
        resolvedCount++;
      } else {
        failedCount++;
      }
    }
  }

  console.log(`\n📈 Resolution Summary:`);
  console.log(`✅ Successfully resolved: ${resolvedCount} files`);
  console.log(`❌ Failed to resolve: ${failedCount} files`);
  console.log(`📊 Total processed: ${resolvedCount + failedCount} files`);

  // Add resolved files to git
  if (resolvedCount > 0) {
    try {
      console.log('\n🔄 Adding resolved files to git...');
      execSync('git add .', { stdio: 'inherit' });
      console.log('✅ Files added to git successfully');
    } catch (error) {
      console.error('❌ Error adding files to git:', error.message);
    }
  }
}

// Run the resolution
resolveAllConflicts();

console.log('\n🎯 Merge conflict resolution completed!');
console.log('💡 Next steps:');
console.log('   1. Review the resolved conflicts');
console.log('   2. Test the application');
console.log('   3. Commit the merge: git commit -m "Resolve merge conflicts"');
console.log('   4. Push to repository');