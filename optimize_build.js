#!/usr/bin/env node

/**
 * Build Optimization Script
 * Automatically optimizes the build process and resolves common issues
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting build optimization...');

// 1. Clean up build artifacts
console.log('🧹 Cleaning build artifacts...');
try {
    execSync('rm -rf dist', { stdio: 'inherit' });
    console.log('✅ Build artifacts cleaned');
} catch (error) {
    console.log('ℹ️  No build artifacts to clean');
}

// 2. Optimize package.json
console.log('📦 Optimizing package.json...');
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add build optimization scripts
packageJson.scripts = {
    ...packageJson.scripts,
    'build:analyze': 'vite build --mode production && npx vite-bundle-analyzer dist/assets/*.js',
    'build:clean': 'rm -rf dist && npm run build:netlify',
    'build:optimize': 'npm run build:clean && npm run build:analyze',
    'preview:build': 'npm run build:netlify && npm run preview'
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('✅ Package.json optimized');

// 3. Create optimized Vite config
console.log('⚙️  Creating optimized Vite configuration...');
const viteConfig = `
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
});
`;

fs.writeFileSync(path.join(__dirname, 'vite.config.js'), viteConfig);
console.log('✅ Vite configuration optimized');

// 4. Create build monitoring script
console.log('📊 Creating build monitoring script...');
const buildMonitor = `
#!/bin/bash

echo "🔍 Build Analysis Report"
echo "========================"

# Check build size
if [ -d "dist" ]; then
    echo "📦 Build Size:"
    du -sh dist/
    echo ""
    
    echo "📁 Largest files:"
    find dist -type f -exec du -h {} + | sort -rh | head -10
    echo ""
    
    echo "📄 File count:"
    find dist -type f | wc -l
    echo ""
else
    echo "❌ No dist folder found. Run 'npm run build:netlify' first."
fi

# Check for common issues
echo "🔍 Checking for common issues:"
echo ""

# Check for large files
if [ -d "dist" ]; then
    large_files=$(find dist -type f -size +1M)
    if [ -n "$large_files" ]; then
        echo "⚠️  Large files found:"
        echo "$large_files"
    else
        echo "✅ No large files found"
    fi
fi

echo ""
echo "✅ Build analysis complete"
`;

fs.writeFileSync(path.join(__dirname, 'build-monitor.sh'), buildMonitor);
execSync('chmod +x build-monitor.sh');
console.log('✅ Build monitoring script created');

// 5. Run optimized build
console.log('🏗️  Running optimized build...');
try {
    execSync('npm run build:netlify', { stdio: 'inherit' });
    console.log('✅ Build completed successfully');
    
    // Run build analysis
    execSync('./build-monitor.sh', { stdio: 'inherit' });
    
} catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
}

console.log('🎉 Build optimization complete!');
console.log('');
console.log('📋 Next steps:');
console.log('1. Review the build analysis report above');
console.log('2. Run "npm run build:analyze" for detailed bundle analysis');
console.log('3. Test the build with "npm run preview"');
console.log('4. Deploy to Netlify when ready');