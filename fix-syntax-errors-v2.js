const fs = require('fs');
const path = require('path');

// List of files with syntax errors
const filesToFix = [
  'app/ai-data-analytics/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-workflow-automation/page.tsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;

    // Fix malformed closing structure like </div>););
    content = content.replace(/<\/div>\s*\);\s*\);/g, '\n    </div>\n  );\n}');
    if (content.includes('););')) {
      modified = true;
    }

    // Fix missing closing div tags
    content = content.replace(/<\/div>\s*\);\s*}/g, '\n    </div>\n  );\n}');
    
    // Fix extra closing div tags pattern
    const extraDivPattern = /(\s*<\/div>\s*){2,}(\s*<\/div>\s*){2,}/g;
    if (extraDivPattern.test(content)) {
      content = content.replace(extraDivPattern, '\n    </div>\n  );');
      modified = true;
    }

    // Fix incorrect closing tags like </>
    content = content.replace(/<\s*\/\s*>/g, '</div>');
    if (content.includes('</>')) {
      modified = true;
    }

    // Ensure proper JSX structure
    if (!content.includes('    </div>\n  );\n}')) {
      // Find the last </div> and fix the structure
      const lastDivIndex = content.lastIndexOf('</div>');
      if (lastDivIndex !== -1) {
        const beforeLastDiv = content.substring(0, lastDivIndex);
        const afterLastDiv = content.substring(lastDivIndex + 6);
        
        // Remove any malformed closing patterns
        const cleanedAfter = afterLastDiv.replace(/^\s*\);\s*\);\s*}/, '\n  );\n}');
        
        content = beforeLastDiv + '</div>' + cleanedAfter;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
    } else {
      console.log(`No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting syntax error fixes v2...');
filesToFix.forEach(fixFile);
console.log('Syntax error fixes v2 completed!');