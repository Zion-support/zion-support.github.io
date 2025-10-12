#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read all page files
const appDir = '/workspace/app';
const pages = [];

function findPages(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Check if this directory has a page.tsx file
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        const relativePath = path.relative(appDir, fullPath);
        pages.push(relativePath);
      }
      
      // Recursively search subdirectories
      findPages(fullPath);
    }
  }
}

findPages(appDir);

// Sort pages for consistent output
pages.sort();

// Generate route imports and components
let imports = '';
let components = '';
let routes = '';

pages.forEach((page, index) => {
  const routePath = '/' + page;
  const componentName = page
    .split('/')
    .map(part => part
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
    )
    .join('') + 'Page';
  
  const importPath = `./app/${page}/page`;
  
  // Skip if it's the root page (already handled)
  if (page === 'page') return;
  
  imports += `const ${componentName} = React.lazy(() => import('${importPath}'))\n`;
  components += `const ${componentName} = React.lazy(() => import('${importPath}'))\n`;
  routes += `                <Route path="${routePath}" element={<${componentName} />} />\n`;
});

// Write the generated routes to a file
const output = `// Generated routes for all pages
// Total pages: ${pages.length}

// Imports (add these to the top of App.tsx after existing imports):
${imports}

// Routes (add these to the Routes section in App.tsx):
${routes}

// Missing pages that need routes:
${pages.map(p => `- /${p}`).join('\n')}
`;

fs.writeFileSync('/workspace/generated_routes.txt', output);

console.log(`Found ${pages.length} pages`);
console.log('Generated routes written to /workspace/generated_routes.txt');