const fs = require('fs');
const path = require('path');

console.log('🚀 Starting performance optimization...');

// Performance optimization configurations
const optimizations = {
  // Image optimization
  images: {
    formats: ['webp', 'avif'],
    quality: 85,
    sizes: [320, 640, 768, 1024, 1280, 1920]
  },
  
  // Bundle optimization
  bundle: {
    chunkSizeWarningLimit: 500,
    minify: true,
    treeshake: true
  },
  
  // CSS optimization
  css: {
    minify: true,
    purge: true,
    critical: true
  },
  
  // JavaScript optimization
  js: {
    minify: true,
    compress: true,
    mangle: true
  }
};

// Create optimized Vite config
const viteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  root: '.',
  build: {
    outDir: 'dist',
    target: 'es2015',
    minify: 'terser',
    sourcemap: false,
    chunkSizeWarningLimit: ${optimizations.bundle.chunkSizeWarningLimit},
    cssCodeSplit: true,
    assetsInlineLimit: 2048,
    reportCompressedSize: true,
    emptyOutDir: true,
    copyPublicDir: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn', 'console.error'],
        passes: 5,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_arrows: true,
        unsafe_methods: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        collapse_vars: true,
        sequences: true,
        dead_code: true,
        conditionals: true,
        comparisons: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true,
        hoist_vars: true,
        if_return: true,
        join_vars: true,
        side_effects: true,
        properties: true,
        reduce_vars: true,
        reduce_funcs: true,
        keep_fargs: false,
        keep_fnames: false,
        keep_infinity: false,
        toplevel: true,
        warnings: false,
        negate_iife: true,
        typeofs: true,
        global_defs: {
          'process.env.NODE_ENV': '"production"'
        }
      },
      mangle: {
        safari10: true,
        toplevel: true,
      },
      format: {
        comments: false,
        ecma: 2015,
      },
    },
    rollupOptions: {
      maxParallelFileOps: 2,
      treeshake: {
        moduleSideEffects: false,
      },
      external: id => {
        if (id.includes('next/') || id.includes('next')) {
          return true;
        }
        return false;
      },
      output: {
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
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
  },
  css: {
    devSourcemap: false,
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
});`;

// Write optimized Vite config
fs.writeFileSync('vite.config.js', viteConfig);
console.log('✅ Optimized Vite configuration created');

// Create performance monitoring script
const performanceMonitor = `// Performance monitoring utilities
export const performanceMonitor = {
  // Measure Core Web Vitals
  measureWebVitals: () => {
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  },

  // Measure page load time
  measurePageLoad: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0];
      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalTime: navigation.loadEventEnd - navigation.fetchStart
      };
    }
    return null;
  },

  // Measure resource loading
  measureResources: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const resources = window.performance.getEntriesByType('resource');
      return resources.map(resource => ({
        name: resource.name,
        duration: resource.duration,
        size: resource.transferSize,
        type: resource.initiatorType
      }));
    }
    return [];
  }
};`;

fs.writeFileSync('app/utils/performanceMonitor.ts', performanceMonitor);
console.log('✅ Performance monitoring utilities created');

// Create image optimization script
const imageOptimizer = `const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const optimizeImages = async () => {
  const publicDir = path.join(__dirname, '../public');
  const imagesDir = path.join(publicDir, 'images');
  
  if (!fs.existsSync(imagesDir)) {
    console.log('No images directory found, skipping image optimization');
    return;
  }

  const files = fs.readdirSync(imagesDir);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png|gif|bmp|tiff)$/i.test(file)
  );

  console.log(\`Found \${imageFiles.length} images to optimize\`);

  for (const file of imageFiles) {
    const inputPath = path.join(imagesDir, file);
    const outputDir = path.join(imagesDir, 'optimized');
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const baseName = path.parse(file).name;
    
    try {
      // Generate WebP version
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(path.join(outputDir, \`\${baseName}.webp\`));

      // Generate AVIF version
      await sharp(inputPath)
        .avif({ quality: 80 })
        .toFile(path.join(outputDir, \`\${baseName}.avif\`));

      // Generate responsive sizes
      const sizes = [320, 640, 768, 1024, 1280, 1920];
      for (const size of sizes) {
        await sharp(inputPath)
          .resize(size, null, { withoutEnlargement: true })
          .webp({ quality: 85 })
          .toFile(path.join(outputDir, \`\${baseName}-\${size}.webp\`));
      }

      console.log(\`✅ Optimized \${file}\`);
    } catch (error) {
      console.error(\`❌ Error optimizing \${file}:\`, error.message);
    }
  }
};

if (require.main === module) {
  optimizeImages().catch(console.error);
}

module.exports = { optimizeImages };`;

fs.writeFileSync('scripts/optimize-images.js', imageOptimizer);
console.log('✅ Image optimization script created');

// Create CSS optimization script
const cssOptimizer = `const fs = require('fs');
const path = require('path');

const optimizeCSS = () => {
  const cssFile = path.join(__dirname, '../app/globals.css');
  
  if (!fs.existsSync(cssFile)) {
    console.log('No CSS file found');
    return;
  }

  let css = fs.readFileSync(cssFile, 'utf8');
  
  // Remove comments
  css = css.replace(/\/\*[\s\S]*?\*\//g, '');
  
  // Remove extra whitespace
  css = css.replace(/\s+/g, ' ');
  css = css.replace(/;\s*}/g, '}');
  css = css.replace(/{\s*/g, '{');
  css = css.replace(/;\s*/g, ';');
  
  // Remove empty rules
  css = css.replace(/[^{}]+{\s*}/g, '');
  
  // Minify
  css = css.trim();
  
  // Write optimized CSS
  const outputFile = path.join(__dirname, '../dist/optimized.css');
  fs.writeFileSync(outputFile, css);
  
  const originalSize = fs.statSync(cssFile).size;
  const optimizedSize = css.length;
  const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
  
  console.log(\`✅ CSS optimized: \${originalSize} bytes → \${optimizedSize} bytes (\${savings}% reduction)\`);
};

if (require.main === module) {
  optimizeCSS();
}

module.exports = { optimizeCSS };`;

fs.writeFileSync('scripts/optimize-css.js', cssOptimizer);
console.log('✅ CSS optimization script created');

// Create bundle analyzer
const bundleAnalyzer = `const fs = require('fs');
const path = require('path');

const analyzeBundle = () => {
  const distDir = path.join(__dirname, '../dist');
  
  if (!fs.existsSync(distDir)) {
    console.log('No dist directory found. Run build first.');
    return;
  }

  const files = fs.readdirSync(distDir, { recursive: true });
  const assets = files.filter(file => 
    typeof file === 'string' && 
    (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html'))
  );

  let totalSize = 0;
  const analysis = {};

  for (const file of assets) {
    const filePath = path.join(distDir, file);
    const stats = fs.statSync(filePath);
    const size = stats.size;
    totalSize += size;

    const ext = path.extname(file);
    if (!analysis[ext]) {
      analysis[ext] = { count: 0, size: 0, files: [] };
    }
    
    analysis[ext].count++;
    analysis[ext].size += size;
    analysis[ext].files.push({
      name: file,
      size: size,
      sizeKB: (size / 1024).toFixed(2)
    });
  }

  console.log('\\n📊 Bundle Analysis');
  console.log('==================');
  console.log(\`Total size: \${(totalSize / 1024).toFixed(2)} KB\`);
  console.log(\`Total files: \${assets.length}\`);
  
  for (const [ext, data] of Object.entries(analysis)) {
    console.log(\`\\n\${ext} files:\`);
    console.log(\`  Count: \${data.count}\`);
    console.log(\`  Total size: \${(data.size / 1024).toFixed(2)} KB\`);
    console.log(\`  Average size: \${(data.size / data.count / 1024).toFixed(2)} KB\`);
    
    // Show largest files
    const sortedFiles = data.files.sort((a, b) => b.size - a.size);
    console.log('  Largest files:');
    sortedFiles.slice(0, 3).forEach(file => {
      console.log(\`    \${file.name}: \${file.sizeKB} KB\`);
    });
  }

  // Recommendations
  console.log('\\n💡 Recommendations:');
  if (totalSize > 500 * 1024) {
    console.log('  - Bundle size is large. Consider code splitting.');
  }
  if (analysis['.js'] && analysis['.js'].count > 5) {
    console.log('  - Many JS files. Consider combining smaller chunks.');
  }
  if (analysis['.css'] && analysis['.css'].size > 50 * 1024) {
    console.log('  - CSS is large. Consider purging unused styles.');
  }
};

if (require.main === module) {
  analyzeBundle();
}

module.exports = { analyzeBundle };`;

fs.writeFileSync('scripts/analyze-bundle.js', bundleAnalyzer);
console.log('✅ Bundle analyzer created');

console.log('\\n🎉 Performance optimization setup complete!');
console.log('\\nNext steps:');
console.log('1. Run: npm run build');
console.log('2. Run: node scripts/analyze-bundle.js');
console.log('3. Run: node scripts/optimize-images.js');
console.log('4. Run: node scripts/optimize-css.js');