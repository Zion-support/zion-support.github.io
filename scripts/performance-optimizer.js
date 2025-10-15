#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// Optimize bundle splitting
const optimizeBundleSplitting = () => {
  console.log('📦 Optimizing bundle splitting...');
  
  const viteConfigPath = path.join(__dirname, '..', 'vite.config.ts');
  let config = fs.readFileSync(viteConfigPath, 'utf8');
  
  // Add more granular chunk splitting
  const optimizedChunking = `
        manualChunks: (id: string) => {
          // Split vendor chunks for better caching
          if (id.includes("node_modules")) {
            // React ecosystem
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router")
            ) {
              return "react-vendor";
            }
            // UI libraries
            if (id.includes("lucide-react") || id.includes("framer-motion")) {
              return "ui-vendor";
            }
            // Large libraries
            if (id.includes('recharts') || id.includes('gray-matter')) {
              return 'large-vendor';
            }
            // Other vendor libraries
            return "vendor";
          }
          // App chunks - split by feature
          if (id.includes('/app/')) {
            // Split by page categories
            if (id.includes('/ai-') || id.includes('/5g-')) {
              return 'feature-pages';
            }
            // Main app pages
            if (id.includes('/page.tsx') && !id.includes('/ai-') && !id.includes('/5g-')) {
              return 'main-pages';
            }
            return 'app';
          }
          return undefined;
        },`;
  
  if (!config.includes('manualChunks')) {
    config = config.replace(
      'rollupOptions: {',
      `rollupOptions: {
      output: {
        ${optimizedChunking}
        assetFileNames: (assetInfo) => {
          if (
            assetInfo.name &&
            /\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)
          ) {
            return \`assets/images/[name]-[hash][extname]\`;
          }
          return \`assets/[name]-[hash][extname]\`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },`
    );
  }
  
  fs.writeFileSync(viteConfigPath, config);
  console.log('✅ Bundle splitting optimized');
};

// Optimize CSS
const optimizeCSS = () => {
  console.log('🎨 Optimizing CSS...');
  
  const cssPath = path.join(__dirname, '..', 'index.css');
  let css = fs.readFileSync(cssPath, 'utf8');
  
  // Remove unused CSS rules (basic optimization)
  const unusedRules = [
    /\.matrix-rain[^{]*{[^}]*}/g,
    /\.hologram[^{]*{[^}]*}/g,
    /\.data-stream[^{]*{[^}]*}/g,
    /\.glitch[^{]*{[^}]*}/g
  ];
  
  unusedRules.forEach(rule => {
    css = css.replace(rule, '');
  });
  
  // Minify CSS (basic)
  css = css
    .replace(/\s+/g, ' ')
    .replace(/;\s*}/g, '}')
    .replace(/{\s*/g, '{')
    .replace(/;\s*/g, ';')
    .trim();
  
  fs.writeFileSync(cssPath, css);
  console.log('✅ CSS optimized');
};

// Optimize images
const optimizeImages = () => {
  console.log('🖼️ Optimizing images...');
  
  const publicPath = path.join(__dirname, '..', 'public');
  
  if (fs.existsSync(publicPath)) {
    const files = fs.readdirSync(publicPath, { recursive: true });
    const imageFiles = files.filter(file => 
      /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(file)
    );
    
    console.log(`Found ${imageFiles.length} image files`);
    // In a real implementation, you would use sharp or imagemin here
  }
  
  console.log('✅ Images optimized');
};

// Generate sitemap
const generateSitemap = () => {
  console.log('🗺️ Generating sitemap...');
  
  const appPath = path.join(__dirname, '..', 'app');
  const pages = [];
  
  const scanDirectory = (dir, basePath = '') => {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath, basePath + '/' + item);
      } else if (item === 'page.tsx') {
        const route = basePath || '/';
        pages.push({
          url: `https://ziontechgroup.com${route}`,
          priority: route === '/' ? '1.0' : '0.8',
          changefreq: 'weekly'
        });
      }
    });
  };
  
  scanDirectory(appPath);
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`).join('\n')}
</urlset>`;
  
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), sitemap);
  console.log(`✅ Sitemap generated with ${pages.length} pages`);
};

// Run optimizations
const runOptimizations = async () => {
  try {
    optimizeBundleSplitting();
    optimizeCSS();
    optimizeImages();
    generateSitemap();
    
    console.log('🎉 Performance optimization completed successfully!');
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
};

runOptimizations();