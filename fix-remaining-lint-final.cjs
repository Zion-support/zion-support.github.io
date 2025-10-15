const fs = require('fs');
const path = require('path');

// Get all TypeScript and JSX files
function getAllFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix unescaped entities - only in JSX text content, not in strings
function fixUnescapedEntities(content) {
  let modified = false;
  
  // Fix apostrophes in JSX text content only
  const apostropheRegex = /(?<=>)([^<]*?)'([^<]*?)(?=<)/g;
  content = content.replace(apostropheRegex, (match, before, after) => {
    // Only replace if it's not already escaped and not in a string literal
    if (!before.includes('&apos;') && !before.includes('&#39;') && !before.includes('&lsquo;') && !before.includes('&rsquo;') &&
        !before.includes('"') && !after.includes('"') && !before.includes("'") && !after.includes("'")) {
      return before + '&apos;' + after;
    }
    return match;
  });
  
  // Fix quotes in JSX text content only
  const quoteRegex = /(?<=>)([^<]*?)"([^<]*?)(?=<)/g;
  content = content.replace(quoteRegex, (match, before, after) => {
    // Only replace if it's not already escaped and not in a string literal
    if (!before.includes('&quot;') && !before.includes('&#34;') && !before.includes('&ldquo;') && !before.includes('&rdquo;') &&
        !before.includes("'") && !after.includes("'") && !before.includes('"') && !after.includes('"')) {
      return before + '&quot;' + after;
    }
    return match;
  });
  
  return { content, modified: true };
}

// Clean up file content
function cleanFileContent(content) {
  // Remove any non-printable characters
  content = content.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
  
  // Ensure proper line endings
  content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  
  // Remove trailing whitespace
  content = content.replace(/[ \t]+$/gm, '');
  
  // Ensure file ends with newline
  if (!content.endsWith('\n')) {
    content += '\n';
  }
  
  return content;
}

// Main function
function fixAllLintIssues() {
  console.log('🔍 Finding all TypeScript/JSX files...');
  const files = getAllFiles('/workspace/app');
  
  console.log(`📁 Found ${files.length} files to process`);
  
  let totalModified = 0;
  
  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Clean up file content
      const cleanedContent = cleanFileContent(content);
      if (cleanedContent !== content) {
        content = cleanedContent;
        modified = true;
      }
      
      // Fix unescaped entities
      const entitiesResult = fixUnescapedEntities(content);
      if (entitiesResult.modified) {
        content = entitiesResult.content;
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        totalModified++;
        console.log(`✅ Fixed: ${path.relative('/workspace', file)}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\n🎉 Fixed ${totalModified} files`);
  return totalModified;
}

// Run the fix
if (require.main === module) {
  fixAllLintIssues();
}

module.exports = { fixAllLintIssues };