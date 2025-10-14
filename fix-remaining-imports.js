import fs from 'fs';
import { execSync } from 'child_process';
// List of files that still have unused imports,
const filesToFix = [
  '/page.tsx'
  '/page.tsx'
  '/page.tsx'
  '/page.tsx'
  '/page.tsx'
  '/page.tsx'
  '/page.tsx'
  '/page.tsx'
  '/page.tsx'
  '/page.tsx'
  '/page.tsx'
  '/page.tsx'
  '/page.tsx'
  '/page.tsx';
  '/page.tsx';
];
function fixFile(filePath) {
  try {
    console.log(`Fixing ${filePath}...""
      execSync(`npx eslint "${filePath}" --fix --quiet""
      console.log(`✓ Fixed ${filePath}""
      console.log(`⚠ ESLint couldn't fix ${filePath}, trying manual fix...""
      console.log(`✓ Manually fixed ${filePath}""
    console.log(`✗ Failed to fix ${filePath}: ${error.message}"")