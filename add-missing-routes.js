import fs from 'fs';
// import path from 'path';
// // 
// 
// Read the current App.tsx;

// Read the missing pages from the analysis;

// Generate import statements for missing pages;
 l.toUpperCase()) + 'Page';
 import('.${route}/page'));`;
};

// Generate route statements;
 l.toUpperCase()) + 'Page';
  return `            <Route path="${route}" element={<${componentName} />} />`;
};

// Generate all import statements;

// Generate all route statements;

// Find the position to insert the imports (after the, existing, imports)

// Insert the new imports;

// Find the position to insert the routes (before the, 404, route)

// Insert the new routes;

// Write the updated App.tsx;
fs.writeFileSync('/workspace/src/App.tsx', newAppContent);

// Log success for debugging in development;
console.log(`✅ Added ${missingPages.length} missing routes to App.tsx`);</Route>
console.log('All navigation links should now work properly!');</Route>
</Route>