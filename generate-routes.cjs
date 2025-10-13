const fs = require('fs');
const path = require('path');

// Get all page.tsx files
const appDir = '/workspace/app';
const pages = [];

function findPages(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      findPages(fullPath);
    } else if (file === 'page.tsx') {
      const relativePath = path.relative(appDir, fullPath);
      const routePath = '/' + relativePath.replace('/page.tsx', '');
      const importPath = './' + relativePath.replace('/page.tsx', '');
      
      // Convert path to component name
      const componentName = routePath
        .split('/')
        .filter(Boolean)
        .map(part => part
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('')
        )
        .join('') + 'Page';
      
      pages.push({
        route: routePath,
        import: importPath,
        component: componentName
      });
    }
  }
}

findPages(appDir);

// Sort pages by route
pages.sort((a, b) => a.route.localeCompare(b.route));

// Generate imports
const imports = pages.map(page => 
  `const ${page.component} = lazy(() => import("${page.import}/page"));`
).join('\n');

// Generate routes
const routes = pages.map(page => 
  `              <Route path="${page.route}" element={<${page.component} />} />`
).join('\n');

// Generate the complete App.tsx content
const appContent = `"use client";

import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import PerformanceMonitor from "./components/PerformanceMonitor";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";
import LoadingSpinner from "./components/LoadingSpinner";
import CriticalResourcePreloader from "./components/CriticalResourcePreloader";
import CacheManager from "./components/CacheManager";
import AdvancedPerformanceMonitor from "./components/AdvancedPerformanceMonitor";

// Lazy load pages for better performance
${imports}

// Main App Component
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <PerformanceMonitor />
          <AccessibilityEnhancer>
            <CriticalResourcePreloader />
            <CacheManager />
            <AdvancedPerformanceMonitor />
            <Suspense fallback={<LoadingSpinner />}>
            <Routes>
${routes}
            </Routes>
            </Suspense>
          </AccessibilityEnhancer>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;`;

// Write the new App.tsx
fs.writeFileSync('/workspace/app/App.tsx', appContent);

console.log(`Generated App.tsx with ${pages.length} routes`);
console.log('Sample routes:', pages.slice(0, 10).map(p => p.route));