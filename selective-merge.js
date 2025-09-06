#!/usr/bin/env node
import {execSync} from 'child_process';
<<<<<<< HEAD
console.log('🔧 Performing selective merge of main source files...');
// List of main source directories to merge
const mainSourceDirs = [
=======

console && console.log('🔧 Performing selective merge of main source files...');

// List of main source directories to merge
const mainSourceDirs = [
  'pages/',
  'components/',
  'utils/',
  'types/',
  'lib/',
  'hooks/',
  'context/',
  'data/',
  'services/',
  'store/',
  'routes/',
  'layout/',
  'legal/',
  'integrations/',
  'middleware && middleware.ts',
  'next && next.config.js',
  'tailwind && tailwind.config.js',
  'postcss && postcss.config.cjs',
  'tsconfig && tsconfig.json',
  'package && package.json',
  'package-lock && lock.json',
  'yarn && yarn.lock'
];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  'pages/'
  'components/'
  'utils/'
  'types/'
  'lib/'
  'hooks/'
  'context/'
  'data/'
  'services/'
  'store/'
  'routes/'
  'layout/'
  'legal/'
  'integrations/'
  'middleware.ts'
  'next.config.js'
  'tailwind.config.js'
  'postcss.config.cjs'
  'tsconfig.json'
  'package.json'
  'package-lock.json'
  'yarn.lock';

];
// Try to merge specific files from the clean-merge-services-improvements branch
const mergeSpecificFiles = () => {
  try {
<<<<<<< HEAD
    // First, let's see what files are in the clean-merge-services-improvements branch;
    console.log('📋 Checking files in clean-merge-services-improvements branch...');
    const files = execSync('git ls-tree -r --name-only origin/clean-merge-services-improvements', { encoding: 'utf8' });
    const fileList = files.trim().split('\n');
    // Filter for main source files
    const mainFiles = fileList.filter(file => {
      return mainSourceDirs.some(dir => file.startsWith(dir)) |;
             mainSourceDirs.includes(file);
    });
    console.log(`Found ${mainFiles.length} main source files to potentially merge`);
    // Try to cherry-pick specific commits or files
    console.log('🍒 Attempting to cherry-pick specific changes...');
    // Get the latest commit from the clean-merge-services-improvements branch
    const latestCommit = execSync('git rev-parse origin/clean-merge-services-improvements', { encoding: 'utf8' }).trim();
    console.log(`Latest commit: ${latestCommit}`);
=======
    // First, let's see what files are in the clean-merge-services-improvements branch
    console && console.log('📋 Checking files in clean-merge-services-improvements branch...');
    
    const files = execSync('git ls-tree -r --name-only origin/clean-merge-services-improvements', { encoding: 'utf8' });
    const fileList = files && files.trim().split('\n');
    
    // Filter for main source files
    const mainFiles = fileList && fileList.filter(file => {
      return mainSourceDirs && mainSourceDirs.some(dir => file && file.startsWith(dir)) || 
             mainSourceDirs && mainSourceDirs.includes(file);
    });
    
    console && console.log(`Found ${mainFiles && mainFiles.length} main source files to potentially merge`);
    
    // Try to cherry-pick specific commits or files
    console && console.log('🍒 Attempting to cherry-pick specific changes...');
    
    // Get the latest commit from the clean-merge-services-improvements branch
    const latestCommit = execSync('git rev-parse origin/clean-merge-services-improvements', { encoding: 'utf8' }).trim();
    console && console.log(`Latest commit: ${latestCommit}`);
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    // Try to merge only specific files
    for (const file of mainFiles && mainFiles.slice(0, 10)) { // Limit to first 10 files to avoid conflicts
      try {
        console && console.log(`Merging file: ${file}`);
        execSync(`git checkout origin/clean-merge-services-improvements -- "${file}"`, { stdio: 'inherit' });
      } catch (_error) {
        console && console.log(`Skipping ${file} due to conflicts`);
      }
    }
    return true;
  } catch (error) {
    console && console.error('Error in selective merge:', error && error.message);
    return false;
  }
}
// Main execution
const main = () => {
<<<<<<< HEAD
  if (mergeSpecificFiles()) {console.log('✅ Selective merge completed');
    // Add the merged files
    try {
      execSync('git add .', { stdio: 'inherit' });
      console.log('📝 Files added to staging area');
      // Commit the changes
      execSync('git commit -m "Selective merge of main source files from clean-merge-services-improvements"', { stdio: 'inherit' });
      console.log('✅ Changes committed');
=======
  if (mergeSpecificFiles()) {
    console && console.log('✅ Selective merge completed');
    
    // Add the merged files
    try {
      execSync('git add .', { stdio: 'inherit' });
      console && console.log('📝 Files added to staging area');
      
      // Commit the changes
      execSync('git commit -m "Selective merge of main source files from clean-merge-services-improvements"', { stdio: 'inherit' });
      console && console.log('✅ Changes committed');
      
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    } catch (error) {
      console && console.error('Error committing changes:', error && error.message);
    }
  } else {
    console && console.log('❌ Selective merge failed');
  }
}
main();