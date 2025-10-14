#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 Fixing JSX syntax errors...');

// Function to recursively find all files
function getAllFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix JSX syntax errors
function fixJSXSyntax(content) {
  // Fix missing closing tags for Helmet
  content = content.replace(/<Helmet([^>]*?)>(?![\s\S]*?<\/Helmet>)/g, (match, attrs) => {
    return `<Helmet${attrs}></Helmet>`;
  });
  
  // Fix missing closing tags for div
  content = content.replace(/<div([^>]*?)>(?![\s\S]*?<\/div>)/g, (match, attrs) => {
    return `<div${attrs}></div>`;
  });
  
  // Fix JSX fragments
  content = content.replace(/<>([^<//////]*?)<([^>]*?)>/g, (match, p1, p2) => {
    if (p1.trim() && !p1.includes('</')) {
      return `<>${p1}<///////${p2}>`;
    }
    return match;
  });
  
  // Fix missing closing tags for Suspense
  content = content.replace(/<Suspense([^>]*?)>(?![\s\S]*?<\/Suspense>)/g, (match, attrs) => {
    return `<Suspense${attrs}></Suspense>`;
  });
  
  // Fix missing closing tags for AccessibilityEnhancer
  content = content.replace(/<AccessibilityEnhancer([^>]*?)>(?![\s\S]*?<\/AccessibilityEnhancer>)/g, (match, attrs) => {
    return `<AccessibilityEnhancer${attrs}></AccessibilityEnhancer>`;
  });
  
  // Fix missing closing tags for EnhancedErrorBoundary
  content = content.replace(/<EnhancedErrorBoundary([^>]*?)>(?![\s\S]*?<\/EnhancedErrorBoundary>)/g, (match, attrs) => {
    return `<EnhancedErrorBoundary${attrs}></EnhancedErrorBoundary>`;
  });
  
  // Fix malformed JSX expressions
  content = content.replace(/<([^>]*?)>([^<]*?)<([^>]*?)>/g, (match, p1, p2, p3) => {
    if (p2.trim() && !p2.includes('<') && !p2.includes('>')) {
      return `<////${p1}>${p2}</${p3}>`;
    }
    return match;
  });
  
  // Fix missing semicolons after imports
  content = content.replace(/import\s+.*?from\s+['"][^'"]*['"]\s*$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix missing semicolons after variable declarations
  content = content.replace(/const\s+\w+\s*=.*?$/gm, (match) => {
    if (!match.endsWith(';') && !match.includes('{') && !match.includes('}')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix missing semicolons after function declarations
  content = content.replace(/function\s+\w+\([^)]*\)\s*{[^}]*}$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  return content;
}

// Function to fix specific file issues
function fixFileSpecificIssues(filePath, content) {
  const fileName = path.basename(filePath);
  
  // Fix App.tsx specific issues
  if (fileName === 'App.tsx') {
    // Fix missing closing tags
    content = content.replace(/<Suspense([^>]*?)>(?![\s\S]*?<\/Suspense>)/g, (match, attrs) => {
      return `<Suspense${attrs}></Suspense>`;
    });
    
    content = content.replace(/<////AccessibilityEnhancer([^>]*?)>(?![\s\S]*?<\/AccessibilityEnhancer>)/g, (match, attrs) => {
      return `<AccessibilityEnhancer${attrs}></AccessibilityEnhancer>`;
    });
    
    content = content.replace(/<////EnhancedErrorBoundary([^>]*?)>(?![\s\S]*?<\/EnhancedErrorBoundary>)/g, (match, attrs) => {
      return `<EnhancedErrorBoundary${attrs}></EnhancedErrorBoundary>`;
    });
  }
  
  // Fix page.tsx files
  if (fileName.endsWith('page.tsx')) {
    // Fix missing Helmet closing tags
    content = content.replace(/<////Helmet([^>]*?)>(?![\s\S]*?<\/Helmet>)/g, (match, attrs) => {
      return `<Helmet${attrs}></Helmet>`;
    });
    
    // Fix missing div closing tags
    content = content.replace(/<////div([^>]*?)>(?![\s\S]*?<\/div>)/g, (match, attrs) => {
      return `<div${attrs}></div>`;
    });
  }
  
  return content;
}

// Main function
function main() {
  try {
    const files = getAllFiles('/workspace');
    let fixedCount = 0;
    let errorCount = 0;
    
    console.log(`📁 Found ${files.length} files to process...`);
    
    for (const filePath of files) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Fix JSX syntax errors
        content = fixJSXSyntax(content);
        
        // Fix file-specific issues
        content = fixFileSpecificIssues(filePath, content);
        
        // Only write if content changed
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          fixedCount++;
          console.log(`✅ Fixed: ${filePath}`);
        }
        
      } catch (error) {
        errorCount++;
        console.error(`❌ Error processing ${filePath}:`, error.message);
      }
    }
    
    console.log(`\n🎉 JSX syntax fixing complete!`);
    console.log(`✅ Fixed: ${fixedCount} files`);
    console.log(`❌ Errors: ${errorCount} files`);
    
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

main();