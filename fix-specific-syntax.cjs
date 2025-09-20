#!/usr/bin/env node

const fs = require('fs');

const filesToFix = [
  'lib/integrations/fileStore.ts',
  'pages/api/admin/analytics/summary.ts',
  'pages/api/admin/kyc-queue.ts',
  'pages/api/admin/learn/course.ts',
  'pages/api/admin/moderation/flags/[id].ts'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove extra empty lines at the end
    content = content.replace(/\n+$/, '\n');
    
    // Ensure proper closing braces
    if (content.includes('export function') && !content.includes('}')) {
      content += '\n}';
    }
    
    // Fix missing imports
    if (filePath.includes('analytics/summary.ts') && !content.includes('import path')) {
      content = "import path from 'path';\nimport fs from 'fs';\n" + content;
    }
    
    if (filePath.includes('kyc-queue.ts') && !content.includes('import { load, save }')) {
      content = "import { load, save } from '../../../utils/fsdb';\n" + content;
    }
    
    if (filePath.includes('learn/course.ts') && !content.includes('import fs')) {
      content = "import fs from 'fs';\nimport path from 'path';\n" + content;
    }
    
    if (filePath.includes('moderation/flags/[id].ts') && !content.includes('import { parseUserFromRequest, ensureAdmin }')) {
      content = "import { parseUserFromRequest, ensureAdmin } from '../../../../../utils/auth';\nimport { getFlagById } from '../../../../../utils/moderationDb';\n" + content;
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('🔧 Fixing specific syntax errors...');
let fixedCount = 0;

for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}

console.log(`✅ Fixed ${fixedCount} files`);