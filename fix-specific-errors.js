#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix specific syntax errors
function fixSpecificErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix malformed import statements
    content = content.replace(/Monitor\}\} from 'lucide-react'/g, "Monitor\n} from 'lucide-react';");
    
    // Fix malformed array structures
    content = content.replace(/\];\s*\{\s*icon: Shield,\s*title: 'Cloud Security'\}\];/g, '];');
    content = content.replace(/const benefits = \[\s*\{\s*icon: Shield,\s*title: 'Cloud Security'\}\s*\]\;\;\s*const benefits = \[\;\s*\]\;\s*const benefits = \[\s*\]/g, 'const benefits = [];');
    
    // Fix malformed JSX
    content = content.replace(/\{feature\.description\<\/p\>\}\<\/p\>/g, '{feature.description}</p>');
    
    // Fix malformed array declarations
    content = content.replace(/features: \[,\s*/g, 'features: [');
    
    // Fix duplicate semicolons
    content = content.replace(/\]\;\;/g, '];');
    
    // Fix malformed object properties
    content = content.replace(/title: 'Cloud Security'\}\];/g, "title: 'Cloud Security',\n      description: 'Comprehensive security solutions',\n      features: ['Firewall protection', 'Intrusion detection']\n    }];");
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Files to fix
const filesToFix = [
  '/workspace/app/cloud-infrastructure-manager/page.tsx',
  '/workspace/app/cloud-migration/page.tsx',
  '/workspace/app/cloud-security/page.tsx',
  '/workspace/app/cloud-services/page.tsx'
];

console.log('Fixing specific syntax errors...');

let fixedCount = 0;
for (const file of filesToFix) {
  if (fixSpecificErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('Specific error fixes completed!');