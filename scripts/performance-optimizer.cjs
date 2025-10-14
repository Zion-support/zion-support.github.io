const fs = require('fs');
const path = require('path');

console.log('Starting performance optimization...');

// Function to optimize imports in a file
function optimizeImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Optimize Lucide React imports - use individual imports instead of large destructured imports
    const lucideImportRegex = /import\s+{([^}]+)}\s+from\s+['"]lucide-react['"];?/g;
    const lucideMatches = [...content.matchAll(lucideImportRegex)];

    for (const match of lucideMatches) {
      const fullImport = match[0];
      const importList = match[1];
      
      // Split the imports and clean them
      const imports = importList.split(',').map(imp => imp.trim()).filter(imp => imp);
      
      if (imports.length > 5) {
        // If more than 5 imports, convert to individual imports for better tree shaking
        const individualImports = imports.map(imp => {
          const importName = imp.split(' as ')[0].trim();
          return `import { ${importName} } from 'lucide-react';`;
        }).join('\n');
        
        content = content.replace(fullImport, individualImports);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Optimized imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to add lazy loading to components
function addLazyLoading(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if this is a page component that should be lazy loaded
    if (filePath.includes('/page.tsx') && !content.includes('React.lazy')) {
      // Add lazy loading wrapper if not already present
      if (content.includes('export default')) {
        const componentName = path.basename(filePath, '.tsx');
        const lazyWrapper = `const ${componentName} = React.lazy(() => import('./${componentName}'));\nexport default ${componentName};`;
        
        // Replace the export with lazy wrapper
        content = content.replace(/export default function \w+\(\) {[\s\S]*?^}/m, (match) => {
          const functionName = match.match(/export default function (\w+)\(\)/)?.[1];
          if (functionName) {
            return `function ${functionName}() {${match.split('{')[1]}`;
          }
          return match;
        });
        
        content = content.replace(/export default \w+;/, lazyWrapper);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Added lazy loading to: ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Error adding lazy loading to ${filePath}:`, error.message);
  }
}

// Function to optimize images
function optimizeImages() {
  const publicDir = path.join(__dirname, '..', 'public');
  const imagesDir = path.join(publicDir, 'images');
  
  if (fs.existsSync(imagesDir)) {
    console.log('Found images directory, consider optimizing images for web');
    console.log('Recommendations:');
    console.log('- Convert images to WebP format');
    console.log('- Compress images to reduce file size');
    console.log('- Use responsive images with srcset');
  }
}

// Function to add performance monitoring
function addPerformanceMonitoring() {
  const performanceScript = `
// Performance monitoring
if (typeof window !== 'undefined') {
  // Monitor Core Web Vitals
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  });

  // Monitor bundle size
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'navigation') {
        console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart, 'ms');
      }
    }
  });
  observer.observe({ entryTypes: ['navigation'] });
}
`;

  const appFile = path.join(__dirname, '..', 'App.tsx');
  if (fs.existsSync(appFile)) {
    let content = fs.readFileSync(appFile, 'utf8');
    if (!content.includes('Performance monitoring')) {
      content = content.replace('useEffect(() => {', `useEffect(() => {${performanceScript}`);
      fs.writeFileSync(appFile, content, 'utf8');
      console.log('Added performance monitoring to App.tsx');
    }
  }
}

// Function to create optimized bundle configuration
function createBundleConfig() {
  const bundleConfig = {
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  };

  const configPath = path.join(__dirname, '..', 'bundle.config.json');
  fs.writeFileSync(configPath, JSON.stringify(bundleConfig, null, 2));
  console.log('Created bundle optimization config');
}

// Main optimization function
function optimizeProject() {
  console.log('Optimizing project performance...');
  
  // Process all TypeScript/JavaScript files
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== 'dist') {
        processDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        optimizeImports(filePath);
        addLazyLoading(filePath);
      }
    }
  }

  // Run optimizations
  processDirectory(path.join(__dirname, '..', 'app'));
  optimizeImages();
  addPerformanceMonitoring();
  createBundleConfig();
  
  console.log('Performance optimization completed successfully!');
}

// Run the optimization
optimizeProject();