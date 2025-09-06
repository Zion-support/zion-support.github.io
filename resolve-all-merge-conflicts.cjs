#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
<<<<<<< HEAD
        content = content.replace(/

<<<<<<< HEAD
=======
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
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
=======
        content = content.replace(/
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        // Clean up any remaining conflict markers
<<<<<<< HEAD
<<<<<<< HEAD
        content = content.replace(/
        content = content.replace(/

=======
=======
        content = content.replace(/
        content = content.replace(/
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
        content = content.replace(/
          const parts = match.split('
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          if (parts.length === 2) {



>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
        content = content.replace(/
          const parts = match.split('');
          if (parts.length === 2) {
            const headPart = parts[0].replace(/

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
