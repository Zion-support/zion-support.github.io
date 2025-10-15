import fs from 'fs';
import path from 'path';

// Generate dynamic imports for all pages in the app directory
const appDir = path.join(__dirname, '../app');
const outputFile = path.join(__dirname, '../app/dynamic-imports.ts');

function generateDynamicImports(dir, basePath = '') {
  const files = fs.readdirSync(dir);
  const imports = [];
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', 'dist', 'build'].includes(file)) {
        const subImports = generateDynamicImports(fullPath, path.join(basePath, file));
        imports.push(...subImports);
      }
    } else if (file === 'page.tsx') {
      const importPath = `./${path.join(basePath, file).replace(/\\/g, '/')}`;
      const componentName = basePath.split('/').pop() || 'HomePage';
      const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
      
      imports.push({
        path: importPath,
        name: capitalizedName,
        route: basePath || '/'
      });
    }
  });
  
  return imports;
}

const dynamicImports = generateDynamicImports(appDir);

const importsCode = dynamicImports.map(imp => 
  `const ${imp.name} = React.lazy(() => import('${imp.path}'));`
).join('\n');

const routesCode = dynamicImports.map(imp => 
  `  <Route path="${imp.route}" element={<${imp.name} />} />`
).join('\n');

const fullCode = `// Auto-generated dynamic imports
import React from 'react';

${importsCode}

export const dynamicRoutes = [
${dynamicImports.map(imp => `  { path: '${imp.route}', component: ${imp.name} }`).join(',\n')}
];

export const DynamicRoutes = () => (
  <>
${routesCode}
  </>
);
`;

fs.writeFileSync(outputFile, fullCode);
if (process.env.NODE_ENV === 'development') {
   
  console.log(`Generated dynamic imports for ${dynamicImports.length} pages`);
}