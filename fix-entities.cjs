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
  // Fix unescaped apostrophes in JSX text content
  // This is a more targeted approach to avoid breaking existing HTML entities
  content = content.replace(/(?<!&)(?<!&#39;)(?<!&apos;)(?<!&lsquo;)(?<!&rsquo;)(?<!&amp;)'/g, '&apos;');
  
  // Fix unescaped quotes in JSX text content  
  content = content.replace(/(?<!&)(?<!&quot;)(?<!&ldquo;)(?<!&rdquo;)(?<!&&#34;)(?<!&amp;)"/g, '&quot;');
  
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