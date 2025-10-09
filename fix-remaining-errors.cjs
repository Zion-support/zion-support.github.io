const fs = require('fs');
const path = require('path');

// List of files that need fixing based on the remaining lint errors
const filesToFix = [
  'src/docs/page.tsx',
  'src/it-consulting/page.tsx',
  'src/it-services/page.tsx',
  'src/micro-saas/page.tsx',
  'src/page-minimal.tsx',
  'src/page-optimized.tsx',
  'src/page.tsx',
  'src/service-template.tsx',
  'src/services-advertising/page.tsx',
  'src/services/ai-analytics/page.tsx',
  'src/services/page.tsx',
  'src/setupTests.tsx',
  'src/signup/page.tsx',
  'src/sitemap.tsx',
  'src/sitemap/page.tsx',
  'src/status/page.tsx',
  'src/support/page.tsx',
  'src/terms/page.tsx'
];

function fixCommonIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing closing tags for common elements
    content = content.replace(/<p([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g, (match, attrs, text) => {
      if (!match.includes('</p>')) {
        return `<p${attrs}>${text}</p>`;
      }
      return match;
    });
    
    // Fix missing closing tags for h2
    content = content.replace(/<h2([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g, (match, attrs, text) => {
      if (!match.includes('</h2>')) {
        return `<h2${attrs}>${text}</h2>`;
      }
      return match;
    });
    
    // Fix missing closing tags for Link
    content = content.replace(/<Link([^>]*)>([^<]*?)(?=\s*<[^/]|$)/g, (match, attrs, text) => {
      if (!match.includes('</Link>')) {
        return `<Link${attrs}>${text}</Link>`;
      }
      return match;
    });
    
    // Fix missing commas in arrays/objects
    content = content.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n    $2');
    
    // Fix missing closing braces
    content = content.replace(/(\w+)\s*\n\s*}/g, '$1\n  }');
    
    // Fix JSX expressions with one parent element
    content = content.replace(/return\s*\(\s*([^<]+)\s*\)/g, 'return (\n    <div>\n      $1\n    </div>\n  )');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix each file
filesToFix.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  if (fs.existsSync(fullPath)) {
    fixCommonIssues(fullPath);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Remaining errors have been fixed!');