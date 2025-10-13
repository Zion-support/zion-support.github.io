import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Script to fix missing routes by adding them to App.tsx
class RouteFixer {
  constructor() {
    this.appPath = path.join(__dirname, 'App.tsx');
    this.appDir = path.join(__dirname, 'app');
    this.existingRoutes = new Set();
    this.missingRoutes = [];
  }

  // Get all existing routes from App.tsx
  getExistingRoutes() {
    const content = fs.readFileSync(this.appPath, 'utf8');
    const routeRegex = /<Route\s+path="([^"]+)"\s+element={<[^>]+>}\s*\/>/g;
    let match;
    
    while ((match = routeRegex.exec(content)) !== null) {
      this.existingRoutes.add(match[1]);
    }
  }

  // Get all pages from app directory
  getAllPages() {
    const pages = [];
    
    const scanDirectory = (dir, basePath = '') => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          const newBasePath = basePath ? `${basePath}/${item}` : item;
          scanDirectory(fullPath, newBasePath);
        } else if (item === 'page.tsx') {
          const route = basePath ? `/${basePath}` : '/';
          pages.push(route);
        }
      }
    };
    
    scanDirectory(this.appDir);
    return pages;
  }

  // Generate component name from route
  generateComponentName(route) {
    if (route === '/') return 'HomePage';
    
    const parts = route.substring(1).split('/');
    return parts.map(part => {
      // Handle routes starting with numbers
      if (/^\d/.test(part)) {
        return 'FiveG' + part.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('');
      }
      // Handle special characters like dots, hyphens, etc.
      const cleanPart = part.replace(/[^a-zA-Z0-9-]/g, '').split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('');
      return cleanPart;
    }).join('') + 'Page';
  }

  // Generate import statement for a component
  generateImportStatement(route, componentName) {
    const importPath = route === '/' ? 
      './app/page' : 
      `./app${route}/page`;
    
    return `const ${componentName} = React.lazy(() => import("${importPath}"));`;
  }

  // Generate route element
  generateRouteElement(route, componentName) {
    return `                  <Route path="${route}" element={<${componentName} />} />`;
  }

  // Fix routes in App.tsx
  fixRoutes() {
    // Get existing routes and all pages
    this.getExistingRoutes();
    const allPages = this.getAllPages();
    
    // Find missing routes
    for (const page of allPages) {
      if (!this.existingRoutes.has(page)) {
        this.missingRoutes.push(page);
      }
    }
    
    if (this.missingRoutes.length === 0) {
      return;
    }
    
    // Read current App.tsx content
    let content = fs.readFileSync(this.appPath, 'utf8');
    
    // Add import statements for missing routes
    const importStatements = [];
    const routeElements = [];
    
    for (const route of this.missingRoutes) {
      const componentName = this.generateComponentName(route);
      importStatements.push(this.generateImportStatement(route, componentName));
      routeElements.push(this.generateRouteElement(route, componentName));
    }
    
    // Find the position to insert new imports (after existing lazy imports)
    const lastLazyImportIndex = content.lastIndexOf('const ') + content.substring(content.lastIndexOf('const ')).indexOf(';');
    const insertPosition = content.indexOf(';', lastLazyImportIndex) + 1;
    
    // Insert new imports
    const newImports = '\n' + importStatements.join('\n') + '\n';
    content = content.slice(0, insertPosition) + newImports + content.slice(insertPosition);
    
    // Find the position to insert new routes (before the closing </Routes>)
    const routesEndIndex = content.lastIndexOf('</Routes>');
    const insertRoutesPosition = routesEndIndex;
    
    // Insert new routes
    const newRoutes = '\n' + routeElements.join('\n') + '\n';
    content = content.slice(0, insertRoutesPosition) + newRoutes + content.slice(insertRoutesPosition);
    
    // Write updated content
    fs.writeFileSync(this.appPath, content);
    
    this.missingRoutes.forEach(route => {
      });
  }
}

// Run the route fixer
const fixer = new RouteFixer();
fixer.fixRoutes();