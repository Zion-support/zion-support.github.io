#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files that need fixing based on the lint output
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

function fixUnescapedEntities(content) {
  // First, restore any incorrectly replaced quotes in import statements
  content = content.replace(/from &apos;([^&]+)&apos;/g, "from '$1'");
  content = content.replace(/import ([^&]+) from &apos;([^&]+)&apos;/g, "import $1 from '$2'");
  
  // Fix unescaped apostrophes in JSX text content only (not in import statements)
  // Look for apostrophes that are not already escaped and not in import statements
  content = content.replace(/(?<!import\s+[^]+from\s+['"])(?<!&)(?<!&#39;)(?<!&apos;)(?<!&lsquo;)(?<!&rsquo;)(?<!&amp;)'/g, '&apos;');
  
  // Fix unescaped quotes in JSX text content only
  content = content.replace(/(?<!import\s+[^]+from\s+['"])(?<!&)(?<!&quot;)(?<!&ldquo;)(?<!&rdquo;)(?<!&&#34;)(?<!&amp;)"/g, '&quot;');
  
  return content}

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return false}
    
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixUnescapedEntities(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true}
    
    return false} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}

console.log('Fixing unescaped entities in files...');

let fixedCount = 0;
filesToFix.forEach(filePath => {
  if (fixFile(filePath)) {
    fixedCount++}
});

console.log(`Fixed ${fixedCount} files`);