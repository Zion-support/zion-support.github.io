import fs from 'fs';
import path from 'path';

function fixUnescapedEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unescaped quotes and apostrophes in JSX text content
    // This is a simple approach - replace common cases
    const replacements = [
      // Fix apostrophes
      [/(?<=>)[^<]*(?<!&apos;|&lsquo;|&#39;|&rsquo;)'(?=[^<]*<)/g, '&apos;'],
      // Fix quotes in text content (be more careful with this one)
      [/(?<=>)[^<]*(?<!&quot;|&ldquo;|&#34;|&rdquo;)"(?=[^<]*<)/g, '&quot;'],
    ];
    
    for (const [pattern, replacement] of replacements) {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unescaped entities in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Files that need fixing based on the lint output
const filesToFix = [
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/blog/ai-enterprise-transformation-2025/page.tsx',
  'app/components/ContentNewsletterSignup.tsx'
];

let fixedCount = 0;
for (const file of filesToFix) {
  if (fixUnescapedEntities(file)) {
    fixedCount++;
  }
}

console.log(`Fixed unescaped entities in ${fixedCount} files`);
