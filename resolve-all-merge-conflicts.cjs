#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD
=======

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve conflicts in a file
function resolveConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('')) {
      return true; // No conflicts
    }
    
    console.log(`Resolving conflicts in ${filePath}...`);
    
    // Replace merge conflict markers with incoming changes (choose the incoming version)
    content = content.replace(/[\s\S]*?([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/[\s\S]*?[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining markers
    content = content.replace(//g, '');
    content = content.replace(//g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    // Write the resolved content back
    fs.writeFileSync(filePath, content);
    
    console.log(`✅ Resolved conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Get all files with merge conflicts
console.log('🔍 Finding files with merge conflicts...');
const findConflicts = execSync('find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.md" -o -name "*.html" -o -name "*.css" | xargs grep -l "" 2>/dev/null || true', { encoding: 'utf8' });
const conflictFiles = findConflicts.split('\n').filter(file => file && file !== '');

console.log(`Found ${conflictFiles.length} files with merge conflicts`);

// Process all conflict files
let resolvedCount = 0;
let errorCount = 0;

for (const file of conflictFiles) {
  if (resolveConflicts(file)) {
    resolvedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\n📊 Conflict Resolution Summary:`);
console.log(`✅ Successfully resolved: ${resolvedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

// Add all files to git
try {
  execSync('git add .', { stdio: 'inherit' });
  console.log('✅ Added all files to git');
} catch (error) {
  console.error('❌ Error adding files to git:', error.message);
}

// Commit the changes
try {
  execSync('git commit -m "Resolve all merge conflicts automatically - choose incoming changes"', { stdio: 'inherit' });
  console.log('✅ Committed merge resolution');
} catch (error) {
  console.error('❌ Error committing merge:', error.message);
}

console.log('🎉 Merge conflict resolution completed!');
>>>>>>> origin/merge-pr-12271
class MergeConflictResolver {
  constructor() {
    this.resolvedFiles = [];
    this.failedFiles = [];
  }
  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
  async resolveMergeConflicts() {
    this.log('🔍 Starting comprehensive merge conflict resolution...');
    try {
      // First, let's get all files with merge conflicts
      const result = execSync('git status --porcelain', { encoding: 'utf8' });
      const conflictedFiles = result
        .split('\n')
        .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
        .map(line => line.substring(3).trim())
        .filter(file => file);
      this.log(`Found ${conflictedFiles.length} files with merge conflicts`);
      // Also search for files with conflict markers
      const conflictMarkerFiles = this.findFilesWithConflictMarkers();
      this.log(`Found ${conflictMarkerFiles.length} files with conflict markers`);
      const allFiles = [...new Set([...conflictedFiles, ...conflictMarkerFiles])];
      this.log(`Total files to process: ${allFiles.length}`);
      for (const file of allFiles) {
        try {
          await this.resolveFileConflicts(file);
        } catch (error) {
          this.log(`❌ Failed to resolve conflicts in ${file}: ${error.message}`);
          this.failedFiles.push({ file, error: error.message });
        }
      }
      // Try to add and commit resolved files
      if (this.resolvedFiles.length > 0) {
        this.log('📝 Adding resolved files to git...');
        try {
          execSync('git add .', { stdio: 'inherit' });
          execSync('git commit -m "Resolve merge conflicts automatically"', { stdio: 'inherit' });
          this.log('✅ Successfully committed resolved files');
        } catch (error) {
          this.log(`⚠️  Could not commit: ${error.message}`);
        }
      }
      this.generateReport();
    } catch (error) {
      this.log(`❌ Error during merge conflict resolution: ${error.message}`);
    }
  }
  findFilesWithConflictMarkers() {
    const files = [];
    const extensions = ['.js', '.ts', '.tsx', '.jsx', '.cjs', '.json', '.md', '.yml', '.yaml'];
    function searchDirectory(dir) {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            searchDirectory(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              try {
                const content = fs.readFileSync(fullPath, 'utf8');
                if (content.includes('') || content.includes('
                  files.push(fullPath);
                }
              } catch (error) {
                // Skip files that can't be read
              }
            }
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    }
    searchDirectory('/workspace');
    return files;
  }
  async resolveFileConflicts(filePath) {
    if (!fs.existsSync(filePath)) {
      this.log(`⚠️  File does not exist: ${filePath}`);
      return;
    }
    this.log(`🔧 Resolving conflicts in: ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    // Remove merge conflict markers and choose the newer version (after )
    content = content
      .replace(/([\s\S]*?)
      .replace(/[\s\S]*?
      .replace(//g, '')
      .replace(/
    // Clean up any remaining artifacts
    content = content
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive blank lines
      .replace(/^\s*\n/gm, '') // Remove lines with only whitespace
      .trim();
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      this.resolvedFiles.push(filePath);
      this.log(`✅ Resolved conflicts in: ${filePath}`);
    } else {
      this.log(`ℹ️  No changes needed for: ${filePath}`);
    }
  }
  generateReport() {
    this.log('\n📊 MERGE CONFLICT RESOLUTION REPORT');
    this.log('==');
    this.log(`✅ Successfully resolved: ${this.resolvedFiles.length} files`);
    this.log(`❌ Failed to resolve: ${this.failedFiles.length} files`);
    if (this.resolvedFiles.length > 0) {
      this.log('\n✅ Resolved files:');
      this.resolvedFiles.forEach(file => this.log(`  - ${file}`));
    }
    if (this.failedFiles.length > 0) {
      this.log('\n❌ Failed files:');
      this.failedFiles.forEach(({ file, error }) => this.log(`  - ${file}: ${error}`));
    }
    this.log('\n🎯 Next steps:');
    this.log('1. Run tests to verify everything works');
    this.log('2. Build the application');
    this.log('3. Push changes to repository');
  }
}
// Run the resolver
const resolver = new MergeConflictResolver();
resolver.resolveMergeConflicts().catch(console.error);
module.exports = MergeConflictResolver;

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove merge conflict markers and keep the HEAD version (first part)
    content = content.replace(/[\s\S]*?
      // Extract only the HEAD part (before 
    
    // Handle incomplete conflicts (missing closing markers)
    content = content.replace(/[\s\S]*?
console.log('🚀 Starting comprehensive merge conflict resolution...');

// Function to resolve modify/delete conflicts by removing the files
function resolveModifyDeleteConflicts() {
  console.log('📁 Resolving modify/delete conflicts...');
  
  try {
    // Get list of conflicted files
    const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' });
    const conflictedFiles = statusOutput
      .split('\n')
      .filter(line => line.includes('CONFLICT (modify/delete)'))
      .map(line => line.split(' ').pop())
      .filter(file => file && !file.includes('temp_conflicts/'));
    
    console.log(`Found ${conflictedFiles.length} modify/delete conflicts`);
    
    // Remove the conflicted files (they were deleted in main)
    conflictedFiles.forEach(file => {
      if (fs.existsSync(file)) {
        console.log(`Removing ${file} (deleted in main)`);
        fs.unlinkSync(file);
        execSync(`git add ${file}`);
      }
    });
    
    return conflictedFiles.length;
  } catch (error) {
    console.error('Error resolving modify/delete conflicts:', error.message);
    return 0;
  }
}

// Function to resolve content conflicts by choosing main branch version
function resolveContentConflicts() {
  console.log('📝 Resolving content conflicts...');
  
  const contentConflictFiles = [
    'tsconfig.json',
    'tsconfig.tsbuildinfo',
    'types/global.d.ts',
    'types/index.ts',
    'types/moderation.ts',
    'utils/accessibility.ts',
    'utils/adminAuth.ts',
    'utils/api.ts',
    'utils/api/auth.ts',
    'utils/api/projects.ts',
    'utils/auth.ts',
    'utils/db.ts',
    'utils/design-map.ts',
    'utils/feedback/store.ts',
    'utils/fraud/gpt.ts',
    'utils/fraud/types.ts',
    'utils/fsdb.ts',
    'utils/i18n.ts',
    'utils/ip.ts',
    'utils/marketplace/auth.ts',
    'utils/marketplace/store.ts',
    'utils/marketplace/types.ts',
    'utils/messaging/storage.ts',
    'utils/messaging/types.ts',
    'utils/moderationDb.ts',
    'utils/next-link-shim.tsx',
    'utils/operator.ts',
    'utils/performance.ts',
    'utils/rateLimit.ts',
    'utils/search/parser.ts',
    'utils/sourceMap.ts',
    'utils/supabase/client.ts',
    'utils/supabase/server.ts',
    'utils/support.ts',
    'utils/sync/signature.ts',
    'utils/sync/storage.ts',
    'utils/sync/versioning.ts',
    'utils/testing-system.ts',
    'utils/token/service.ts',
    'utils/token/storage.ts',
    'utils/types.ts',
    'utils/types/milestones.ts',
    'utils/wallet.ts',
    'vite.config.js',
    'vite.config.ts',
    'yarn.lock'
  ];
  
  let resolvedCount = 0;
  
  contentConflictFiles.forEach(file => {
    if (fs.existsSync(file)) {
      try {
        console.log(`Resolving content conflict in ${file}`);
        
        // Read the file content
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove conflict markers and keep main branch version
<<<<<<< HEAD

        content = content.replace(/[\s\S]*?
        content = content.replace(/[\s\S]*?
=======
        content = content.replace(/[\s\S]*?[\s\S]*?>>>>>>> main/g, '');
        content = content.replace(/[\s\S]*?[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
        
        // Clean up any remaining conflict markers
        content = content.replace(/[\s\S]*?[\s\S]*?>>>>>>> [^\n]+/g, '');
        content = content.replace(/[\s\S]*?[\s\S]*?>>>>>>> [^\n]+/g, '');

        content = content.replace(/
>>>>>>> origin/merge-pr-12271
        
        // Clean up any remaining conflict markers
        content = content.replace(/[\s\S]*?
        content = content.replace(/[\s\S]*?
        
 (Resolve merge conflicts: clean up all conflict markers)
        // Write the cleaned content
        fs.writeFileSync(file, content);
        execSync(`git add ${file}`);
        resolvedCount++;
      } catch (error) {
        console.error(`Error resolving ${file}:`, error.message);
      }
    }
  });
  
  return resolvedCount;
}

// Function to resolve add/add conflicts
function resolveAddAddConflicts() {
  console.log('➕ Resolving add/add conflicts...');
  
  const addAddFiles = [
    'zion-os/src/app/admin/deployments/page.tsx',
    'zion-os/src/app/admin/os-deploy/page.tsx',
    'zion-os/src/app/api/user/onboarding/route.ts'
  ];
  
  let resolvedCount = 0;
  
  addAddFiles.forEach(file => {
    if (fs.existsSync(file)) {
      try {
        console.log(`Resolving add/add conflict in ${file}`);
        
        // Read the file content
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove conflict markers and keep both versions
<<<<<<< HEAD

        content = content.replace(/[\s\S]*?
          const parts = match.split('=======');
 (Resolve merge conflicts: clean up all conflict markers)
=======
        content = content.replace(/[\s\S]*?[\s\S]*?>>>>>>> [a-f0-9]+/g, (match) => {
          const parts = match.split('');
>>>>>>> origin/merge-pr-12271
          if (parts.length === 2) {
            const headPart = parts[0].replace(/\s*/, '');
            const mainPart = parts[1].replace(/\s*            return headPart + mainPart;
          }
          return match;
        });
        
        // Write the cleaned content
        fs.writeFileSync(file, content);
        execSync(`git add ${file}`);
        resolvedCount++;
      } catch (error) {
        console.error(`Error resolving ${file}:`, error.message);
      }
    }
  });
  
  return resolvedCount;
}

// Function to clean up temp_conflicts directory
function cleanupTempConflicts() {
  console.log('🧹 Cleaning up temp_conflicts directory...');
  
  try {
    if (fs.existsSync('temp_conflicts')) {
      execSync('rm -rf temp_conflicts');
      console.log('Removed temp_conflicts directory');
    }
  } catch (error) {
    console.error('Error cleaning up temp_conflicts:', error.message);
  }
}

// Main execution
async function main() {
  try {
    console.log('Starting merge conflict resolution...');
    
    // Resolve different types of conflicts
    const modifyDeleteCount = resolveModifyDeleteConflicts();
    const contentCount = resolveContentConflicts();
    const addAddCount = resolveAddAddConflicts();
    
    // Clean up temp files
    cleanupTempConflicts();
    
    console.log(`\n✅ Conflict resolution summary:`);
    console.log(`- Modify/delete conflicts resolved: ${modifyDeleteCount}`);
    console.log(`- Content conflicts resolved: ${contentCount}`);
    console.log(`- Add/add conflicts resolved: ${addAddCount}`);
    
    // Check if there are any remaining conflicts
    try {
      const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' });
      const remainingConflicts = statusOutput.split('\n').filter(line => line.includes('CONFLICT'));
      
      if (remainingConflicts.length === 0) {
        console.log('\n🎉 All conflicts resolved! Ready to commit.');
        
        // Commit the merge
        execSync('git commit -m "Resolve merge conflicts: automated resolution of modify/delete and content conflicts"');
        console.log('✅ Merge committed successfully!');
      } else {
        console.log(`\n⚠️  ${remainingConflicts.length} conflicts still remain:`);
        remainingConflicts.forEach(conflict => console.log(`  - ${conflict}`));
      }
    } catch (error) {
      console.error('Error checking remaining conflicts:', error.message);
    }
    
  } catch (error) {
    console.error('Error during conflict resolution:', error.message);
    process.exit(1);
  }
}

main();
<<<<<<< HEAD
=======
ursor/integrate-build-improve-and-re-verify-7ffc
        content = content.replace(/
          const parts = match.split('
>>>>>>> origin/merge-pr-12271
