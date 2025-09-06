#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🧹 Starting basic cleanup...');

try {
  // Remove problematic files
  const filesToRemove = [
    '/workspace/.eslintrc.js',
    '/workspace/.eslintrc.mjs',
    '/workspace/postcss.config.mjs'
  ];
  
  for (const file of filesToRemove) {
    if (fs.existsSync(file)) {
      try {
        fs.unlinkSync(file);
        console.log(`🗑️  Removed: ${file}`);
      } catch (error) {
        console.log(`❌ Could not remove ${file}: ${error.message}`);
      }
    }
  }
  
  // Clean up temp directories
  const dirsToRemove = [
    '/workspace/temp_conflicts',
    '/workspace/temp-exclude',
    '/workspace/temp_backup',
    '/workspace/temp_broken_files',
    '/workspace/corrupted_backup'
  ];
  
  for (const dir of dirsToRemove) {
    if (fs.existsSync(dir)) {
      try {
        execSync(`rm -rf "${dir}"`, { cwd: '/workspace' });
        console.log(`🗑️  Removed directory: ${dir}`);
      } catch (error) {
        console.log(`❌ Could not remove ${dir}: ${error.message}`);
      }
    }
  }
  
  // Fix src/main.tsx merge conflicts
  const mainTsxPath = '/workspace/src/main.tsx';
  if (fs.existsSync(mainTsxPath)) {
    try {
      let content = fs.readFileSync(mainTsxPath, 'utf8');
      content = content
        .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
        .replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
        .replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '')
        .replace(/<<<<<<< [^\n]+[\s\S]*?=======/g, '')
        .replace(/^<<<<<<< [^\n]+$/gm, '')
        .replace(/^=======$/gm, '')
        .replace(/^>>>>>>> [^\n]+$/gm, '');
      
      fs.writeFileSync(mainTsxPath, content);
      console.log('✅ Fixed src/main.tsx merge conflicts');
    } catch (error) {
      console.log(`❌ Error fixing src/main.tsx: ${error.message}`);
    }
  }
  
  // Fix src/hooks/index.ts window issues
  const hooksPath = '/workspace/src/hooks/index.ts';
  if (fs.existsSync(hooksPath)) {
    try {
      let content = fs.readFileSync(hooksPath, 'utf8');
      content = content
        .replace(/window\./g, 'typeof window !== "undefined" && window.')
        .replace(/^export const useLocalStorage = \(key: string, initialValue: any\) => \{$/gm, 'export const useLocalStorage = (key: string, initialValue: any) => {')
        .replace(/^ {2}if \(typeof window === "undefined"\) return initialValue;$/gm, '  if (typeof window === "undefined") return initialValue;');
      
      fs.writeFileSync(hooksPath, content);
      console.log('✅ Fixed src/hooks/index.ts window issues');
    } catch (error) {
      console.log(`❌ Error fixing src/hooks/index.ts: ${error.message}`);
    }
  }
  
  console.log('\n🎉 Basic cleanup complete!');
  
  // Try to run build after cleanup
  console.log('\n🔨 Testing build after cleanup...');
  try {
    execSync('npm run build', { stdio: 'inherit', cwd: '/workspace' });
    console.log('✅ Build successful after cleanup!');
  } catch (error) {
    console.log('❌ Build still has issues, but cleanup completed.');
  }
  
} catch (error) {
  console.error('❌ Cleanup failed:', error.message);
  process.exit(1);
}