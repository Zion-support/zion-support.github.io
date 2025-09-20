#!/usr/bin/env node

/**
 * Performance Optimization Script
 * Optimizes the codebase for better performance and smaller bundle sizes
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting Performance Optimization...');

// 1. Remove unused files and directories
const unusedDirectories = [
  'automation_backup',
  'backup',
  'backups',
  'broken_files_backup',
  'corrupted_backup',
  'components-disabled',
  'components.disabled',
  'components.disabled_full',
  'app-disabled',
  'app-minimal',
  'recovered',
  'zion-os.disabled',
  'node_modules_bak_1756984224'
];

const unusedFiles = [
  '*.txt',
  '*.log',
  '*.md',
  '*.json',
  '*.tsv',
  '*.py',
  '*.sh',
  '*.service'
];

console.log('🧹 Cleaning up unused files and directories...');

unusedDirectories.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (fs.existsSync(fullPath)) {
    try {
      fs.rmSync(fullPath, { recursive: true, force: true });
      console.log(`✅ Removed: ${dir}`);
    } catch (error) {
      console.log(`⚠️  Could not remove ${dir}: ${error.message}`);
    }
  }
});

// 2. Optimize package.json
console.log('📦 Optimizing package.json...');

const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Remove unused dependencies
  const unusedDeps = [
    'child_process',
    'path',
    'toml',
    'js-yaml',
    'cron-parser',
    'node-cron',
    'chalk',
    'cheerio',
    'import-fresh',
    'uuid',
    'pdfkit',
    'web-vitals',
    'workbox-build',
    'workbox-window'
  ];
  
  unusedDeps.forEach(dep => {
    if (packageJson.dependencies && packageJson.dependencies[dep]) {
      delete packageJson.dependencies[dep];
      console.log(`✅ Removed unused dependency: ${dep}`);
    }
  });
  
  // Add performance scripts
  packageJson.scripts = {
    ...packageJson.scripts,
    'analyze': 'vite build --mode analyze',
    'optimize': 'npm run clean && npm run build',
    'clean': 'rm -rf dist node_modules/.vite',
    'size': 'npm run build && npx vite-bundle-analyzer dist'
  };
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Updated package.json with performance scripts');
}

// 3. Create optimized Vite config
console.log('⚡ Creating optimized Vite configuration...');

const viteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react({
      // Optimize React for production
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ]
      }
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        maximumFileSizeToCacheInBytes: 1000000
      }
    })
  ],
  build: {
    target: 'es2020',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog'],
          utils: ['axios', 'framer-motion']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
});
`;

fs.writeFileSync(path.join(process.cwd(), 'vite.config.ts'), viteConfig);
console.log('✅ Created optimized Vite configuration');

// 4. Create performance monitoring
const performanceMonitor = `// Performance monitoring utilities
export const performanceMonitor = {
  measure(name, fn) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(\`\${name}: \${(end - start).toFixed(2)}ms\`);
    return result;
  },
  
  measureAsync: async (name, fn) => {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    console.log(\`\${name}: \${(end - start).toFixed(2)}ms\`);
    return result;
  }
};

export const lazyLoad = (importFn) => {
  return React.lazy(importFn);
};

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};
`;

fs.writeFileSync(path.join(process.cwd(), 'src/utils/performance.ts'), performanceMonitor);
console.log('✅ Created performance monitoring utilities');

console.log('🎉 Performance optimization completed!');
console.log('📊 Next steps:');
console.log('1. Run "npm run optimize" to test the optimized build');
console.log('2. Run "npm run analyze" to analyze bundle size');
console.log('3. Check the performance improvements');