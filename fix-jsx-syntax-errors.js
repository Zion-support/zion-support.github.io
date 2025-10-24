const fs = require('fs');
const path = require('path');

// Function to fix common JSX syntax errors
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix missing closing tags for JSX fragments
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  
  // Fix unclosed JSX elements that should be self-closing
  fixed = fixed.replace(/<div([^>]*?)\s*>\s*<\/div>/g, '<div$1 />');
  fixed = fixed.replace(/<section([^>]*?)\s*>\s*<\/section>/g, '<section$1 />');
  fixed = fixed.replace(/<button([^>]*?)\s*>\s*<\/button>/g, '<button$1 />');
  
  // Fix malformed TypeScript interfaces
  fixed = fixed.replace(/class\s+Nam\s+e\s*\?/g, 'className?: string');
  fixed = fixed.replace(/constContentNewsletterSignup/g, 'const ContentNewsletterSignup');
  fixed = fixed.replace(/ContentNewsletterSignupProp\s+s/g, 'ContentNewsletterSignupProps');
  fixed = fixed.replace(/React\.FC<ContentNewsletterSignupProp\s+s>/g, 'React.FC<ContentNewsletterSignupProps>');
  
  // Fix missing variable declarations
  fixed = fixed.replace(/<title>\{title\}<\/title>/g, '<title>Advanced SEO Optimizer</title>');
  
  // Fix malformed JSX structure - ensure proper nesting
  fixed = fixed.replace(/(<div[^>]*>)\s*<\/div>\s*<section/g, '$1\n        <section');
  fixed = fixed.replace(/(<section[^>]*>)\s*<\/section>\s*<div/g, '$1\n          <div');
  
  // Fix missing closing tags for fragments
  const openFragments = (fixed.match(/<>/g) || []).length;
  const closeFragments = (fixed.match(/<\/>/g) || []).length;
  
  if (openFragments > closeFragments) {
    const missingFragments = openFragments - closeFragments;
    fixed += '\n' + '</>'.repeat(missingFragments);
  }
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(filePath, content) {
  let fixed = content;
  
  // Fix specific issues in AdvancedSEOOptimizer_new.tsx
  if (filePath.includes('AdvancedSEOOptimizer_new.tsx')) {
    fixed = fixed.replace(/<div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"><\/div>/, 
      '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">');
    fixed = fixed.replace(/<section className="relative py-20 px-4 overflow-hidden"><\/section>/, 
      '<section className="relative py-20 px-4 overflow-hidden">');
    fixed = fixed.replace(/<div className="absolute inset-0 bg-gradient-to-r from-emerald-600\/20 to-blue-600\/20"><\/div>/, 
      '<div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>');
    fixed = fixed.replace(/<div className="relative max-w-7xl mx-auto text-center"><\/div>/, 
      '<div className="relative max-w-7xl mx-auto text-center">');
    fixed = fixed.replace(/<div className="flex flex-col sm:flex-row gap-4 justify-center"><\/div>/, 
      '<div className="flex flex-col sm:flex-row gap-4 justify-center">');
    fixed = fixed.replace(/<section className="py-20 px-4"><\/section>/, 
      '<section className="py-20 px-4">');
    fixed = fixed.replace(/<div className="max-w-7xl mx-auto"><\/div>/, 
      '<div className="max-w-7xl mx-auto">');
    fixed = fixed.replace(/<div className="text-center mb-16"><\/div>/, 
      '<div className="text-center mb-16">');
  }
  
  // Fix specific issues in Breadcrumb.tsx
  if (filePath.includes('Breadcrumb.tsx')) {
    fixed = fixed.replace(/<div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"><\/div>/, 
      '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">');
    fixed = fixed.replace(/<section className="relative py-20 px-4 overflow-hidden"><\/section>/, 
      '<section className="relative py-20 px-4 overflow-hidden">');
    fixed = fixed.replace(/<div className="absolute inset-0 bg-gradient-to-r from-emerald-600\/20 to-blue-600\/20"><\/div>/, 
      '<div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>');
    fixed = fixed.replace(/<div className="relative max-w-7xl mx-auto text-center"><\/div>/, 
      '<div className="relative max-w-7xl mx-auto text-center">');
    fixed = fixed.replace(/<div className="flex flex-col sm:flex-row gap-4 justify-center"><\/div>/, 
      '<div className="flex flex-col sm:flex-row gap-4 justify-center">');
    fixed = fixed.replace(/<section className="py-20 px-4"><\/section>/, 
      '<section className="py-20 px-4">');
    fixed = fixed.replace(/<div className="max-w-7xl mx-auto"><\/div>/, 
      '<div className="max-w-7xl mx-auto">');
    fixed = fixed.replace(/<div className="text-center mb-16"><\/div>/, 
      '<div className="text-center mb-16">');
  }
  
  // Fix specific issues in ContentNewsletterSignup.tsx
  if (filePath.includes('ContentNewsletterSignup.tsx')) {
    fixed = fixed.replace(/class\s+Nam\s+e\s*\?/g, 'className?: string');
    fixed = fixed.replace(/constContentNewsletterSignup/g, 'const ContentNewsletterSignup');
    fixed = fixed.replace(/ContentNewsletterSignupProp\s+s/g, 'ContentNewsletterSignupProps');
    fixed = fixed.replace(/React\.FC<ContentNewsletterSignupProp\s+s>/g, 'React.FC<ContentNewsletterSignupProps>');
    fixed = fixed.replace(/onSubscribe\?\s*\(email:\s*string\)\s*=>\s*void\}/g, 'onSubscribe?: (email: string) => void\n}');
    fixed = fixed.replace(/constContentNewsletterSignup:React\.FC<ContentNewsletterSignupProps>/g, 'const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps>');
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixed = fixJSXSyntax(content);
    fixed = fixSpecificFile(filePath, fixed);
    
    // Ensure proper closing of JSX fragments
    const lines = fixed.split('\n');
    let inFragment = false;
    let fragmentDepth = 0;
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<>')) {
        inFragment = true;
        fragmentDepth++;
      }
      
      if (line.includes('</>')) {
        fragmentDepth--;
        if (fragmentDepth === 0) {
          inFragment = false;
        }
      }
      
      newLines.push(line);
    }
    
    // Add missing closing fragments
    if (inFragment && fragmentDepth > 0) {
      for (let i = 0; i < fragmentDepth; i++) {
        newLines.push('</>');
      }
    }
    
    fixed = newLines.join('\n');
    
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let processedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (processFile(filePath)) {
        processedCount++;
      }
    }
  }
  
  return processedCount;
}

// Main execution
console.log('Starting JSX syntax error fixes...');
const processedCount = processDirectory('/workspace');
console.log(`Processed ${processedCount} files`);