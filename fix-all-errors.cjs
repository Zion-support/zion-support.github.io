const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix malformed lucide-react imports
    content = content.replace(/import lucide-react from 'lucide-react';\s*\n/g, '');
    
    // Fix multiple duplicate imports
    const duplicateImportPattern = /import lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport lucide-react from 'lucide-react';\s*\nimport react-router-dom from 'react-router-dom';\s*\n/g;
    content = content.replace(duplicateImportPattern, "import { Link } from 'react-router-dom';\n");
    
    // Fix malformed JSX syntax
    content = content.replace(/\{\s*feature\.icon;\s*\}/g, '{feature.icon}');
    content = content.replace(/\{\s*feature\.title\s*\}/g, '{feature.title}');
    content = content.replace(/\{\s*feature\.description\s*\}/g, '{feature.description}');
    
    // Fix malformed EnhancedSEO component
    content = content.replace(/<EnhancedSEO\s*;\s*\n\s*title="[^"]*"/g, '<EnhancedSEO\n        title="Page - Zion Tech Group"');
    
    // Fix unclosed JSX tags
    content = content.replace(/<\/div>\s*\n<\/section>/g, '</div>\n        </div>\n      </div>\n    </div>');
    
    // Fix malformed closing tags
    content = content.replace(/<\/section>\s*\n\s*\{\/\* Features Section \*\/\}/g, '</div>\n        </div>\n      </div>\n    </div>');
    
    // Fix missing closing tags for common patterns
    if (content.includes('<div className="page-container">') && !content.includes('</div>'.repeat(3))) {
      // Add missing closing divs
      content += '\n    </div>\n  </div>\n</div>';
    }
    
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*<\/>/g, '');
    content = content.replace(/<>\s*\{[^}]*\}\s*<\/>/g, '');
    
    // Fix export statements
    content = content.replace(/export default pagePage;/g, 'export default Page;');
    content = content.replace(/export default page;/g, 'export default Page;');
    
    // Fix malformed string literals
    content = content.replace(/className="[^"]*'[^"]*"/g, (match) => {
      return match.replace(/'/g, '"');
    });
    
    // Fix malformed JSX attributes
    content = content.replace(/className="[^"]*'[^"]*"/g, (match) => {
      return match.replace(/'/g, '"');
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files.`);
