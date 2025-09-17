#!/usr/bin/env node

/**
 * Build Optimization Script for Zion App
 * Optimizes the build process and outputs
 */

import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

class BuildOptimizer {
  constructor() {
    this.startTime = Date.now();
  }

  log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
  }

  async optimize() {
    this.log('🚀 Starting build optimization...', 'cyan');
    
    try {
      await this.cleanPreviousBuilds();
      await this.optimizeBundle();
      await this.generateManifest();
      await this.optimizeImages();
      await this.generateSitemap();
      
      const duration = Date.now() - this.startTime;
      this.log(`\n✅ Build optimization completed in ${duration}ms!`, 'green');
    } catch (error) {
      this.log(`❌ Error during optimization: ${error.message}`, 'red');
      process.exit(1);
    }
  }

  async cleanPreviousBuilds() {
    this.log('🧹 Cleaning previous builds...', 'blue');
    
    const dirsToClean = ['dist', '.vite', 'node_modules/.vite'];
    
    for (const dir of dirsToClean) {
      if (existsSync(dir)) {
        try {
          execSync(`rm -rf ${dir}`, { stdio: 'pipe' });
          this.log(`   Cleaned ${dir}`, 'green');
        } catch (error) {
          this.log(`   Warning: Could not clean ${dir}`, 'yellow');
        }
      }
    }
  }

  async optimizeBundle() {
    this.log('📦 Optimizing bundle...', 'blue');
    
    try {
      // Run the build
      execSync('npm run build:netlify', { stdio: 'inherit' });
      this.log('   Build completed successfully', 'green');
      
      // Check for large files
      const largeFiles = this.findLargeFiles();
      if (largeFiles.length > 0) {
        this.log('   Large files detected:', 'yellow');
        largeFiles.forEach(file => {
          this.log(`     ${file.name}: ${this.formatBytes(file.size)}`, 'yellow');
        });
      }
    } catch (error) {
      throw new Error(`Build failed: ${error.message}`);
    }
  }

  findLargeFiles() {
    const distPath = 'dist';
    if (!existsSync(distPath)) return [];

    try {
      const files = execSync(`find ${distPath} -type f \\( -name "*.js" -o -name "*.css" \\)`, { encoding: 'utf8' })
        .trim()
        .split('\n')
        .filter(file => file.length > 0);

      return files
        .map(file => {
          const stats = execSync(`stat -c%s "${file}"`, { encoding: 'utf8' });
          const size = parseInt(stats.trim());
          return { name: path.basename(file), size, path: file };
        })
        .filter(file => file.size > 100000) // Files larger than 100KB
        .sort((a, b) => b.size - a.size);
    } catch (error) {
      return [];
    }
  }

  async generateManifest() {
    this.log('📄 Generating manifest...', 'blue');
    
    try {
      const manifest = {
        name: 'Zion App - Revolutionary AI Solutions',
        short_name: 'Zion App',
        description: 'Revolutionary AI solutions for enterprise transformation',
        start_url: '/',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',
        icons: [
          {
            src: '/favicon.ico',
            sizes: 'any',
            type: 'image/x-icon'
          }
        ]
      };

      writeFileSync('dist/manifest.json', JSON.stringify(manifest, null, 2));
      this.log('   Manifest generated', 'green');
    } catch (error) {
      this.log(`   Warning: Could not generate manifest: ${error.message}`, 'yellow');
    }
  }

  async optimizeImages() {
    this.log('🖼️  Optimizing images...', 'blue');
    
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];
    const distPath = 'dist';
    
    if (!existsSync(distPath)) return;

    try {
      const images = execSync(`find ${distPath} -type f \\( ${imageExtensions.map(ext => `-name "*${ext}"`).join(' -o ')} \\)`, { encoding: 'utf8' })
        .trim()
        .split('\n')
        .filter(file => file.length > 0);

      if (images.length > 0) {
        this.log(`   Found ${images.length} images to optimize`, 'green');
        
        // Log image sizes
        images.forEach(image => {
          try {
            const stats = execSync(`stat -c%s "${image}"`, { encoding: 'utf8' });
            const size = parseInt(stats.trim());
            if (size > 50000) { // Images larger than 50KB
              this.log(`     ${path.basename(image)}: ${this.formatBytes(size)}`, 'yellow');
            }
          } catch (error) {
            // Ignore errors for individual files
          }
        });
      }
    } catch (error) {
      this.log(`   Warning: Could not optimize images: ${error.message}`, 'yellow');
    }
  }

  async generateSitemap() {
    this.log('🗺️  Generating sitemap...', 'blue');
    
    try {
      // Read routes from the build output or generate from known routes
      const routes = [
        '/',
        '/about',
        '/services',
        '/contact',
        '/blog',
        '/ai-innovation',
        '/quantum-computing',
        '/space-technology',
        '/biotechnology',
        '/neural-interfaces'
      ];

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://zion.app${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

      writeFileSync('dist/sitemap.xml', sitemap);
      this.log('   Sitemap generated', 'green');
    } catch (error) {
      this.log(`   Warning: Could not generate sitemap: ${error.message}`, 'yellow');
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async run() {
    await this.optimize();
  }
}

// Run the optimizer
const optimizer = new BuildOptimizer();
optimizer.run().catch(console.error);