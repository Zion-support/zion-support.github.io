#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files that need fixing
const filesToFix = [
  'pages/ai-services.tsx',
  'pages/blog.tsx', 
  'pages/help.tsx',
  'pages/it-services.tsx',
  'pages/micro-saas.tsx',
  'pages/pricing.tsx',
  'pages/privacy.tsx',
  'pages/services/ai-development.tsx',
  'pages/services/cloud-services.tsx',
  'pages/services/web-development.tsx',
  'pages/terms.tsx',
  'components/ContactForm.tsx',
  'components/TestimonialsSection.tsx'
];

function fixImports(content) {
  // Fix corrupted import statements
  content = content.replace(/from &apos;([^&]+)&apos;/g, "from '$1'");
  content = content.replace(/import ([^&]+) from &apos;([^&]+)&apos;/g, "import $1 from '$2'");
  content = content.replace(/from &quot;([^&]+)&quot;/g, 'from "$1"');
  content = content.replace(/import ([^&]+) from &quot;([^&]+)&quot;/g, 'import $1 from "$2"');
  
  return content;
}

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixImports(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Fixing corrupted import statements...');

let fixedCount = 0;
filesToFix.forEach(filePath => {
  if (fixFile(filePath)) {
    fixedCount++;
  }
});

console.log(`Fixed imports in ${fixedCount} files`);