#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
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
=======
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
        content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> main/g, '');
        content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
        
        // Clean up any remaining conflict markers
        content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
        content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
        
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
        content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, (match) => {
          const parts = match.split('=======');
          if (parts.length === 2) {
            const headPart = parts[0].replace(/<<<<<<< HEAD\s*/, '');
            const mainPart = parts[1].replace(/\s*>>>>>>> [a-f0-9]+/, '');
            return headPart + mainPart;
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
