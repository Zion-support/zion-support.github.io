const fs = require('fs');
const path = require('path');

function fixJSXFragments(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing JSX fragments
    // Look for patterns like: return (<>...content... without closing </>
    const fragmentPattern = /return\s*\(\s*<>([\s\S]*?)(?=\s*\)\s*;?\s*$)/gm;
    
    content = content.replace(fragmentPattern, (match, innerContent) => {
      // Check if there's already a closing fragment
      if (!innerContent.includes('</>')) {
        modified = true;
        return `return (\n    <>\n${innerContent}\n    </>\n  )`;
      }
      return match;
    });

    // Fix missing closing tags for specific JSX elements
    const jsxPattern = /<(\w+)([^>]*)>\s*$/gm;
    content = content.replace(jsxPattern, (match, tagName, attributes) => {
      // Only fix if it's not a self-closing tag and doesn't have a closing tag
      if (!attributes.includes('/>') && !content.includes(`</${tagName}>`)) {
        modified = true;
        return `<${tagName}${attributes}></${tagName}>`;
      }
      return match;
    });

    // Fix missing closing Suspense tags
    if (content.includes('<Suspense') && !content.includes('</Suspense>')) {
      content = content.replace(/(<Suspense[^>]*>[\s\S]*?)(\s*\)\s*;?\s*$)/gm, '$1\n        </Suspense>\n      </ErrorBoundary>\n    </HelmetProvider>\n  );');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX fragments in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixJSXFragments(filePath);
    }
  });
}

// Start fixing from the app directory
console.log('Starting JSX fragment fixes...');
walkDir('./app');
walkDir('./src');
console.log('JSX fragment fixes completed!');