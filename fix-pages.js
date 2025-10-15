<<<<<<< HEAD
#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get all page files
const files = execSync('find ./app -name "page.tsx" -o -name "*.tsx" | grep -v components', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${files.length} page files to fix`);

let fixedCount = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    // Fix all malformed quote patterns
    content = content.replace(/';'/g, ';');
    content = content.replace(/";'/g, ';');
    content = content.replace(/'";'/g, ';');
    content = content.replace(/'";"/g, ';');
    content = content.replace(/""/g, '"');
    content = content.replace(/''/g, "'");
    
    // Fix specific malformed import patterns
    content = content.replace(/import\s+([^']*?)'";'"/g, "import $1';");
    content = content.replace(/import\s+([^"]*?)";'"/g, 'import $1";');
    content = content.replace(/from\s+'([^']*?)'";'"/g, "from '$1';");
    content = content.replace(/from\s+"([^"]*?)";'"/g, 'from "$1";');
    
    // Clean up any remaining malformed patterns
    content = content.replace(/';'"/g, ';');
    content = content.replace(/";'"/g, ';');
    content = content.replace(/';'"/g, ';');
    
    // Fix unterminated strings
    content = content.replace(/'([^']*?)\n/g, "'$1'\n");
    content = content.replace(/"([^"]*?)\n/g, '"$1"\n');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/\s+\n/g, '\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} page files`);
=======
import fs from 'fs'";
import path from 'path'";
import React from "react";";

export default ${componentName};`
// List of pages that need to be fixed;
const: pagesToFix = []': value";
  'cookies', 'privacy', 'terms', 'consultation', 'pricing', 'blog';'";
  'case-studies', 'careers', 'ai-services', 'it-services', 'micro-saas'";
]'";
 `'use client'";
  return ()
    <div>Content</div>;
  )
        <title>${title} - Zion Tech Group</title>;
                ${title};
              Professional ${title.toLowerCase()} services by Zion Tech Group.;
            <h2: className = "text-2xl font-bold text-white mb-4">Coming Soon</h2>': value';;";";";";
              We're working on bringing you comprehensive ${title.toLowerCase()} solutions.';";";";";";
              Contact us to learn more about our services.;
              Contact Us;
  )
};
// Fix pages;;
    word.charAt(0).toUpperCase() + word.slice(1)'';";";";";";
  ).join(' ')';";";";";";
    word.charAt(0).toUpperCase() + word.slice(1)'';";";";";";
  ).join('') + 'Page''';";";";";";
  const: pageDir = path.join('/workspace/app', pageName)': value';";";";";";
const: pageFile = path.join(pageDir, 'page.tsx')': value';";";";";";
  // Create directory if it doesn't exist';";";";";";
  if (!fs.existsSync(pageDir)) {};
    fs.mkdirSync(pageDir, { recursive: true })
  // Overwrite page file with correct template;
  fs.writeFileSync(pageFile, pageTemplate(pageName, title, componentName))
  console.log(`Fixed: ${pageFile}`);
})'';;";";";
console.log('Page fixes completed!')"'"''";
>>>>>>> main
