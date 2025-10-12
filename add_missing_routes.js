import fs from 'fs';

// Read the broken links (pages that exist but have no routes)
const brokenLinks = fs.readFileSync('/workspace/broken_links.txt', 'utf8').split('\n').filter(Boolean);

// Read the current App.tsx
let appContent = fs.readFileSync('/workspace/App.tsx', 'utf8');

// Generate import statements for all missing pages
const generateImportStatement = (page) => {
  const componentName = page.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `import ${componentName} from './app/${page}/page'`;
};

const imports = brokenLinks.map(generateImportStatement).join('\n');

// Generate route statements
const generateRouteStatement = (page) => {
  const componentName = page.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `                <Route path="/${page}" element={<${componentName} />} />`;
};

const routes = brokenLinks.map(generateRouteStatement).join('\n');

// Add imports after the existing imports
const importSection = appContent.match(/import.*from.*react.*\n/)[0];
const newImports = importSection + '\n' + imports + '\n';

appContent = appContent.replace(importSection, newImports);

// Add routes before the closing Routes tag
appContent = appContent.replace(
  '              </Routes>',
  `              ${routes}\n              </Routes>`
);

// Write the updated content back to App.tsx
fs.writeFileSync('/workspace/App.tsx', appContent);

console.log('Successfully added missing routes to App.tsx');
console.log(`Added ${brokenLinks.length} routes`);