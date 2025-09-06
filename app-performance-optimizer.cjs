#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * App Performance Optimizer
 * Analyzes and optimizes application performance
 */
class AppPerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.optimizations = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix =
      type === 'ERROR'
        ? '❌'
        : type === 'SUCCESS'
          ? '✅'
          : type === 'WARNING'
            ? '⚠️'
            : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description) {
    this.log(`Running: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        maxBuffer: 1024 * 1024 * 10,
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  async analyzeBundleSize() {
    this.log('\n📦 ANALYZING BUNDLE SIZE');
    
    try {
      // Build the application
      await this.runCommand('npm run build', 'Build Application');
      
      // Analyze bundle size
      const distPath = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distPath)) {
        const files = fs.readdirSync(distPath, { recursive: true });
        let totalSize = 0;
        const fileSizes = [];

        files.forEach(file => {
          const filePath = path.join(distPath, file);
          if (fs.statSync(filePath).isFile()) {
            const size = fs.statSync(filePath).size;
            totalSize += size;
            fileSizes.push({
              file: file,
              size: size,
              sizeKB: (size / 1024).toFixed(2)
            });
          }
        });

        // Sort by size
        fileSizes.sort((a, b) => b.size - a.size);

        this.log(`Total bundle size: ${(totalSize / 1024).toFixed(2)} KB`);
        this.log('Largest files:');
        fileSizes.slice(0, 10).forEach(file => {
          this.log(`  ${file.file}: ${file.sizeKB} KB`);
        });

        this.optimizations.push({
          type: 'bundle-analysis',
          totalSize: totalSize,
          fileSizes: fileSizes,
          recommendations: this.getBundleRecommendations(fileSizes)
        });
      }
    } catch (error) {
      this.log(`❌ Bundle analysis failed: ${error.message}`, 'ERROR');
    }
  }

  getBundleRecommendations(fileSizes) {
    const recommendations = [];
    const totalSize = fileSizes.reduce((sum, file) => sum + file.size, 0);
    
    if (totalSize > 1024 * 1024) { // > 1MB
      recommendations.push('Consider code splitting to reduce initial bundle size');
    }
    
    const largeFiles = fileSizes.filter(file => file.size > 100 * 1024); // > 100KB
    if (largeFiles.length > 0) {
      recommendations.push(`Large files detected: ${largeFiles.map(f => f.file).join(', ')}`);
    }
    
    const jsFiles = fileSizes.filter(file => file.file.endsWith('.js'));
    if (jsFiles.length > 5) {
      recommendations.push('Consider consolidating JavaScript files');
    }
    
    return recommendations;
  }

  async optimizeImages() {
    this.log('\n🖼️ OPTIMIZING IMAGES');
    
    try {
      // Find image files
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
      const imageFiles = [];
      
      const findImages = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            findImages(filePath);
          } else if (stat.isFile()) {
            const ext = path.extname(file).toLowerCase();
            if (imageExtensions.includes(ext)) {
              imageFiles.push(filePath);
            }
          }
        });
      };
      
      findImages(this.projectRoot);
      
      this.log(`Found ${imageFiles.length} image files`);
      
      if (imageFiles.length > 0) {
        // Install image optimization tools
        await this.runCommand(
          'npm install imagemin imagemin-mozjpeg imagemin-pngquant imagemin-webp --save-dev',
          'Install Image Optimization Tools'
        );
        
        // Create image optimization script
        const optimizeScript = `
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const imageFiles = ${JSON.stringify(imageFiles)};
  let totalSavings = 0;
  
  for (const imagePath of imageFiles) {
    try {
      const originalSize = fs.statSync(imagePath).size;
      
      const result = await imagemin([imagePath], {
        destination: path.dirname(imagePath),
        plugins: [
          imageminMozjpeg({ quality: 80 }),
          imageminPngquant({ quality: [0.6, 0.8] }),
        ]
      });
      
      if (result.length > 0) {
        const optimizedSize = fs.statSync(imagePath).size;
        const savings = originalSize - optimizedSize;
        totalSavings += savings;
        console.log(\`Optimized \${path.basename(imagePath)}: \${(savings / 1024).toFixed(2)} KB saved\`);
      }
    } catch (error) {
      console.log(\`Failed to optimize \${imagePath}: \${error.message}\`);
    }
  }
  
  console.log(\`Total savings: \${(totalSavings / 1024).toFixed(2)} KB\`);
}

optimizeImages().catch(console.error);
`;
        
        fs.writeFileSync(path.join(this.projectRoot, 'optimize-images.js'), optimizeScript);
        await this.runCommand('node optimize-images.js', 'Optimize Images');
        
        this.optimizations.push({
          type: 'image-optimization',
          filesProcessed: imageFiles.length,
          recommendations: [
            'Consider using WebP format for better compression',
            'Implement lazy loading for images',
            'Use responsive images with srcset'
          ]
        });
      }
    } catch (error) {
      this.log(`❌ Image optimization failed: ${error.message}`, 'ERROR');
    }
  }

  async optimizeCodeSplitting() {
    this.log('\n✂️ OPTIMIZING CODE SPLITTING');
    
    try {
      // Check if Vite config exists
      const viteConfigPath = path.join(this.projectRoot, 'vite.config.js');
      if (fs.existsSync(viteConfigPath)) {
        let config = fs.readFileSync(viteConfigPath, 'utf8');
        
        // Add code splitting configuration if not present
        if (!config.includes('rollupOptions')) {
          const codeSplittingConfig = `
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@headlessui/react', '@heroicons/react']
        }
      }
    }
  }`;
          
          config = config.replace(
            /export default defineConfig\({/,
            `export default defineConfig({${codeSplittingConfig}`
          );
          
          fs.writeFileSync(viteConfigPath, config);
          this.log('✅ Added code splitting configuration to Vite config');
        }
      }
      
      this.optimizations.push({
        type: 'code-splitting',
        recommendations: [
          'Implement route-based code splitting',
          'Use dynamic imports for large components',
          'Split vendor libraries into separate chunks'
        ]
      });
    } catch (error) {
      this.log(`❌ Code splitting optimization failed: ${error.message}`, 'ERROR');
    }
  }

  async optimizeCaching() {
    this.log('\n💾 OPTIMIZING CACHING');
    
    try {
      // Create service worker for caching
      const serviceWorker = `
const CACHE_NAME = 'zion-app-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
`;
      
      fs.writeFileSync(path.join(this.projectRoot, 'public/sw.js'), serviceWorker);
      
      // Create manifest.json
      const manifest = {
        name: 'Zion Tech Group',
        short_name: 'Zion',
        description: 'Zion Tech Group - AI Automation Solutions',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      };
      
      fs.writeFileSync(path.join(this.projectRoot, 'public/manifest.json'), JSON.stringify(manifest, null, 2));
      
      this.optimizations.push({
        type: 'caching',
        recommendations: [
          'Service worker implemented for caching',
          'Manifest.json created for PWA support',
          'Consider implementing cache invalidation strategy'
        ]
      });
      
      this.log('✅ Caching optimization completed');
    } catch (error) {
      this.log(`❌ Caching optimization failed: ${error.message}`, 'ERROR');
    }
  }

  async generateReport() {
    const totalDuration = Date.now() - this.startTime;
    
    this.log('\n📊 PERFORMANCE OPTIMIZATION REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log(`Optimizations Applied: ${this.optimizations.length}`);
    this.log('');
    
    this.optimizations.forEach((opt, index) => {
      this.log(`${index + 1}. ${opt.type.toUpperCase()}`);
      if (opt.recommendations) {
        opt.recommendations.forEach(rec => {
          this.log(`   • ${rec}`);
        });
      }
      this.log('');
    });
    
    // Save report
    const reportData = {
      timestamp: new Date().toISOString(),
      totalDuration,
      optimizations: this.optimizations
    };
    
    const reportPath = path.join(this.projectRoot, 'performance-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
    this.log(`📊 Report saved to: ${reportPath}`);
  }

  async run() {
    this.log('🚀 Starting App Performance Optimizer');
    this.log('='.repeat(60));
    
    try {
      await this.analyzeBundleSize();
      await this.optimizeImages();
      await this.optimizeCodeSplitting();
      await this.optimizeCaching();
      
      await this.generateReport();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    }
  }
}

// Run the optimizer
const optimizer = new AppPerformanceOptimizer();
optimizer.run().catch(console.error);

module.exports = AppPerformanceOptimizer;