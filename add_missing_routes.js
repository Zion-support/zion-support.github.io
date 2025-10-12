import fs from 'fs';

// Read the broken links (pages that exist but have, no, routes)

// Read the current App.tsx;
let appContent = fs.readFileSync('/workspace/App.tsx', 'utf8');

// Generate import statements for all missing pages;
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `import ${componentName} from './app/${page}/page'`;
}).join('\n');

// Generate route statements;
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  return `                  <Route path="/${page}" element={<${componentName} />} />`;
}).join('\n');

// Add imports after the last import;

// Add routes before the 404 route;

// Combine everything;

// Write the updated App.tsx;
fs.writeFileSync('/workspace/App.tsx', newAppContent);
</Route>
console.log(`Added ${brokenLinks.length} routes to App.tsx`);</Route>
console.log('Routes added for:', brokenLinks.slice(0, 10).join(', '), '... and more');</Route>