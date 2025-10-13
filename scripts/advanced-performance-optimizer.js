import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting advanced performance optimization...');

// 1. Optimize Vite configuration for better chunking
const viteConfigPath = path.join(__dirname, '..', 'vite.config.ts');
let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');

// Enhanced chunking strategy
const enhancedChunking = `
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          // Router
          if (id.includes('react-router')) {
            return 'router'
          }
          // UI libraries
          if (id.includes('lucide-react') || id.includes('@heroicons')) {
            return 'ui-vendor'
          }
          // Large libraries
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          // App components
          if (id.includes('/app/')) {
            return 'app'
          }
        }`;

// Update Vite config with enhanced chunking
if (!viteConfig.includes('manualChunks')) {
  viteConfig = viteConfig.replace(
    /build:\s*{/,
    `build: {
      rollupOptions: {
        output: {
          ${enhancedChunking}
        }
      },`
  );
}

fs.writeFileSync(viteConfigPath, viteConfig);
console.log('✓ Enhanced Vite configuration for better chunking');

// 2. Optimize package.json scripts
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add performance optimization scripts
packageJson.scripts = {
  ...packageJson.scripts,
  'optimize:images': 'imagemin app/**/*.{jpg,png,svg} --out-dir=app/optimized',
  'analyze:bundle': 'npx vite-bundle-analyzer',
  'preload:critical': 'node scripts/preload-critical-resources.js'
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('✓ Added performance optimization scripts');

// 3. Create preload script for critical resources
const preloadScript = `const fs = require('fs');
const path = require('path');

// Critical resources to preload
const criticalResources = [
  '/fonts/inter.woff2',
  '/images/hero-bg.webp',
  '/css/critical.css'
];

const preloadLinks = criticalResources
  .map(resource => \`<link rel="preload" href="\${resource}" as="font" crossorigin>\`)
  .join('\\n');

console.log('Critical resources preload links:');
console.log(preloadLinks);
`;

fs.writeFileSync(path.join(__dirname, 'preload-critical-resources.js'), preloadScript);
console.log('✓ Created preload script for critical resources');

// 4. Optimize Next.js configuration
const nextConfigPath = path.join(__dirname, '..', 'next.config.js');
if (fs.existsSync(nextConfigPath)) {
  let nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
  
  // Add performance optimizations
  const performanceOptimizations = `
    // Performance optimizations
    compress: true,
    poweredByHeader: false,
    generateEtags: false,
    httpAgentOptions: {
      keepAlive: true,
    },
    experimental: {
      optimizeCss: true,
      optimizePackageImports: ['lucide-react', '@heroicons/react'],
    },`;

  if (!nextConfig.includes('compress: true')) {
    nextConfig = nextConfig.replace(
      /reactStrictMode: true,/,
      `reactStrictMode: true,${performanceOptimizations}`
    );
  }

  fs.writeFileSync(nextConfigPath, nextConfig);
  console.log('✓ Enhanced Next.js configuration for performance');
}

console.log('🎉 Advanced performance optimization completed!');
console.log('Run "npm run optimize:images" to optimize images');
console.log('Run "npm run analyze:bundle" to analyze bundle size');