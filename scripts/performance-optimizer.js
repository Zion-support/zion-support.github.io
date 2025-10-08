#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🚀 Starting performance optimization...');

// Function to add performance optimizations to components
function optimizeComponent(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Add React.memo to functional components
    if (content.includes('export default function') && !content.includes('React.memo')) {
      content = content.replace(
        /export default function (\w+)/g,
        'const $1 = React.memo(function $1'
      );
      content = content.replace(
        /}\s*$/,
        '});\n\nexport default $1;'
      );
      modified = true;
    }

    // Add useCallback to event handlers
    if (content.includes('onClick') && !content.includes('useCallback')) {
      if (!content.includes("import { useCallback }")) {
        content = content.replace(
          /import React[^;]*;/,
          '$&, { useCallback }'
        );
      }
    }

    // Add lazy loading for images
    if (content.includes('<img') && !content.includes('loading="lazy"')) {
      content = content.replace(
        /<img([^>]*?)>/g,
        '<img$1 loading="lazy">'
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Optimized component: ${filePath}`);
    }

    return modified;
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
    return false;
  }
}

// Function to add performance monitoring
function addPerformanceMonitoring() {
  const performanceScript = `
// Performance monitoring
if (typeof window !== 'undefined') {
  // Web Vitals monitoring
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  });

  // Performance observer
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.log('Navigation timing:', entry);
        }
      }
    });
    observer.observe({ entryTypes: ['navigation'] });
  }
}
`;

  const mainFile = 'src/main.tsx';
  if (fs.existsSync(mainFile)) {
    let content = fs.readFileSync(mainFile, 'utf8');
    if (!content.includes('Performance monitoring')) {
      content = performanceScript + '\n' + content;
      fs.writeFileSync(mainFile, content, 'utf8');
      console.log('✅ Added performance monitoring to main.tsx');
    }
  }
}

// Function to optimize bundle size
function optimizeBundleConfig() {
  const viteConfigPath = 'vite.config.js';
  if (fs.existsSync(viteConfigPath)) {
    let content = fs.readFileSync(viteConfigPath, 'utf8');
    
    // Add more aggressive tree shaking
    if (!content.includes('treeshake: { moduleSideEffects: false }')) {
      content = content.replace(
        /treeshake: \{[^}]*\}/,
        'treeshake: { moduleSideEffects: false, propertyReadSideEffects: false }'
      );
    }

    // Add more chunk splitting
    if (!content.includes('manualChunks: id => {')) {
      const chunkSplitting = `
        manualChunks: id => {
          // Core React libraries
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor';
          }
          // Router library
          if (id.includes('node_modules/react-router-dom')) {
            return 'router';
          }
          // UI libraries
          if (
            id.includes('node_modules/framer-motion') ||
            id.includes('node_modules/lucide-react')
          ) {
            return 'ui';
          }
          // Utilities and web vitals
          if (id.includes('node_modules/web-vitals')) {
            return 'page';
          }
          // Split other node_modules into separate chunks
          if (id.includes('node_modules')) {
            return 'libs';
          }
        },`;
      
      content = content.replace(
        /output: \{[^}]*\}/,
        `output: {${chunkSplitting}\n        assetFileNames: 'assets/[name]-[hash][extname]',\n        chunkFileNames: 'assets/[name]-[hash].js',\n        entryFileNames: 'assets/[name]-[hash].js',\n      }`
      );
    }

    fs.writeFileSync(viteConfigPath, content, 'utf8');
    console.log('✅ Optimized Vite configuration');
  }
}

// Main execution
async function main() {
  console.log('🔍 Finding component files to optimize...');
  
  const componentFiles = [
    'app/page.tsx',
    'app/components/Navigation.tsx',
    'app/components/Footer.tsx',
    'App.tsx'
  ];

  let optimizedCount = 0;
  
  for (const file of componentFiles) {
    if (fs.existsSync(file)) {
      if (optimizeComponent(file)) {
        optimizedCount++;
      }
    }
  }

  // Add performance monitoring
  addPerformanceMonitoring();
  
  // Optimize bundle configuration
  optimizeBundleConfig();

  console.log(`\n📊 Performance Optimization Summary:`);
  console.log(`✅ Optimized components: ${optimizedCount} files`);
  console.log(`✅ Added performance monitoring`);
  console.log(`✅ Optimized bundle configuration`);
  
  console.log('\n🎉 Performance optimization completed!');
}

main().catch(console.error);