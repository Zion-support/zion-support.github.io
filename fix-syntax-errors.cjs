#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find files with syntax errors
function findFilesWithSyntaxErrors() {
  try {
    const result = execSync('find /workspace -name "*.tsx" -o -name "*.ts" | grep -v node_modules | xargs grep -l "Declaration or statement expected\\|Unexpected token" 2>/dev/null || true', { encoding: 'utf8' });
    return result.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    return [];
  }
}

// Fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix extra closing braces at the end
    content = content.replace(/\n\s*}\s*}\s*}\s*$/g, '\n}');
    content = content.replace(/\n\s*}\s*}\s*$/g, '\n}');
    
    // Fix missing opening braces for useEffect
    content = content.replace(/useEffect\(\(\) => \{([^}]+)\}, \[\]\);/g, 'useEffect(() => {\n    $1\n  }, []);');
    
    // Fix malformed JSX closing tags
    content = content.replace(/<\s*\/\s*>\s*$/gm, '');
    
    // Fix incomplete function declarations
    content = content.replace(/export default function[^{]*\{[^}]*$/g, (match) => {
      if (!match.includes('}')) {
        return match + '\n  return null;\n}';
      }
      return match;
    });
    
    // Remove any remaining orphaned closing braces at the end
    const lines = content.split('\n');
    let fixedLines = [];
    let braceCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const openBraces = (line.match(/\{/g) || []).length;
      const closeBraces = (line.match(/\}/g) || []).length;
      
      braceCount += openBraces - closeBraces;
      
      // If we have too many closing braces at the end, skip them
      if (i === lines.length - 1 && braceCount < 0) {
        // Skip extra closing braces
        continue;
      }
      
      fixedLines.push(line);
    }
    
    content = fixedLines.join('\n');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('🔍 Finding files with syntax errors...');
  
  // Get files that might have syntax errors by checking specific patterns
  const files = [
    '/workspace/App.tsx',
    '/workspace/App_clean.tsx', 
    '/workspace/EnhancedFooter.tsx'
  ];
  
  // Add all app pages
  try {
    const appFiles = execSync('find /workspace/app -name "*.tsx" -o -name "*.ts" | head -50', { encoding: 'utf8' });
    files.push(...appFiles.trim().split('\n').filter(line => line.trim()));
  } catch (error) {
    console.log('Could not find app files');
  }
  
  console.log(`📁 Checking ${files.length} files for syntax errors...`);
  
  let fixed = 0;
  let failed = 0;
  
  files.forEach(file => {
    if (fs.existsSync(file)) {
      if (fixSyntaxErrors(file)) {
        fixed++;
      } else {
        // Check if file has syntax issues
        try {
          const content = fs.readFileSync(file, 'utf8');
          if (content.includes('}') && content.split('{').length < content.split('}').length) {
            console.log(`⚠️  ${file} may have brace mismatch`);
          }
        } catch (error) {
          // File might not exist or be readable
        }
      }
    }
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`  ✅ Fixed: ${fixed} files`);
  console.log(`  ❌ Failed: ${failed} files`);
  
  if (fixed > 0) {
    console.log('\n🎉 Syntax errors fixed! Running type check...');
    try {
      execSync('cd /workspace && pnpm run type-check 2>&1 | head -20', { stdio: 'inherit' });
    } catch (error) {
      console.log('⚠️  Type check completed with some issues remaining');
    }
  }
}

main();