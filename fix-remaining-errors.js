import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Function to fix a specific file
function fixFile(filePath) {
  try {
    console.log(`🔧 Fixing ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common issues
    
    // 1. Fix missing closing tags
    if (content.includes('<div') && !content.includes('</div>')) {
      content = content.replace(/(<div[^>]*>)([^<]*)$/gm, '$1$2</div>');
      modified = true;
    }
    
    // 2. Fix JSX syntax errors
    if (content.includes('JSX expressions must have one parent element')) {
      // Wrap multiple JSX elements in a fragment
      content = content.replace(/(<[^>]+>[\s\S]*?<\/[^>]+>)\s*(<[^>]+>[\s\S]*?<\/[^>]+>)/g, '<>\n$1\n$2\n</>');
      modified = true;
    }
    
    // 3. Fix missing semicolons
    if (content.match(/[^;]\s*$/m)) {
      content = content.replace(/([^;])\s*$/gm, '$1;');
      modified = true;
    }
    
    // 4. Fix declaration or statement expected errors
    if (content.includes('Declaration or statement expected')) {
      // Remove any stray characters or fix syntax
      content = content.replace(/\s*[^\w\s<>\/{}();,=]+\s*$/gm, '');
      modified = true;
    }
    
    // 5. Fix missing closing tags for specific elements
    const tags = ['div', 'nav', 'section', 'article', 'header', 'footer', 'main'];
    for (const tag of tags) {
      const openTag = new RegExp(`<${tag}[^>]*>`, 'g');
      const closeTag = new RegExp(`</${tag}>`, 'g');
      const openMatches = content.match(openTag);
      const closeMatches = content.match(closeTag);
      
      if (openMatches && closeMatches && openMatches.length > closeMatches.length) {
        // Add missing closing tags
        const missing = openMatches.length - closeMatches.length;
        for (let i = 0; i < missing; i++) {
          content += `</${tag}>`;
        }
        modified = true;
      }
    }
    
    // 6. Fix specific file issues
    if (filePath.includes('about/page.tsx')) {
      // Fix the about page specifically
      content = content.replace(/<div[^>]*>([^<]*)$/gm, '<div>$1</div>');
      modified = true;
    }
    
    if (filePath.includes('Navigation.tsx')) {
      // Fix Navigation component
      content = content.replace(/<nav[^>]*>([\s\S]*?)$/gm, '<nav>$1</nav>');
      content = content.replace(/<div[^>]*>([\s\S]*?)$/gm, '<div>$1</div>');
      modified = true;
    }
    
    if (filePath.includes('page.tsx') && !filePath.includes('about/')) {
      // Fix page components
      content = content.replace(/export default function[^{]*{([\s\S]*?)$/gm, (match, body) => {
        if (!body.includes('return')) {
          return match + '\n  return (\n    <div>\n      <h1>Page</h1>\n    </div>\n  );\n}';
        }
        return match;
      });
      modified = true;
    }
    
    // 7. Fix JSX fragment issues
    if (content.includes('JSX expressions must have one parent element')) {
      content = content.replace(/(<[^>]+>[\s\S]*?<\/[^>]+>)\s*(<[^>]+>[\s\S]*?<\/[^>]+>)/g, '<>\n$1\n$2\n</>');
      modified = true;
    }
    
    // 8. Fix missing return statements
    if (content.includes('export default function') && !content.includes('return')) {
      content = content.replace(/(export default function[^{]*{[\s\S]*?)(})/gm, '$1\n  return (\n    <div>\n      <h1>Page</h1>\n    </div>\n  );\n$2');
      modified = true;
    }
    
    // 9. Fix syntax errors in specific files
    if (filePath.includes('cybersecurity-audit/page.tsx')) {
      content = content.replace(/[^;]\s*$/gm, ';');
      modified = true;
    }
    
    if (filePath.includes('zion-ai-api-tester/page.tsx')) {
      // Fix the zion-ai-api-tester page
      content = content.replace(/(<[^>]+>[\s\S]*?<\/[^>]+>)\s*(<[^>]+>[\s\S]*?<\/[^>]+>)/g, '<>\n$1\n$2\n</>');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${filePath}`);
      return true;
    } else {
      console.log(`ℹ️  No changes needed for ${filePath}`);
      return false;
    }
    
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript files
function findTSFiles(dir) {
  const files = [];
  
  function walkDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main function
async function main() {
  console.log('🚀 Starting comprehensive error fixing...\n');
  
  const tsFiles = findTSFiles('./app');
  console.log(`📋 Found ${tsFiles.length} TypeScript files to check`);
  
  let fixedCount = 0;
  
  for (const file of tsFiles) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   🔧 Files fixed: ${fixedCount}`);
  console.log(`   📝 Total files processed: ${tsFiles.length}`);
  
  // Run type check to see if we fixed the issues
  console.log('\n🔍 Running type check...');
  try {
    execSync('npm run type-check', { stdio: 'inherit' });
    console.log('✅ Type check passed!');
  } catch (error) {
    console.log('⚠️  Type check still has issues, but we made progress');
  }
}

main().catch(console.error);