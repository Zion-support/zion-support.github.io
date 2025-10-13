<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD

/**
 * Performance Optimization Script
 * Optimizes the application for better performance
 */

console.log('Running performance optimizations...');

// 1. Optimize Vite configuration for better chunking
const viteConfigPath = path.join(__dirname, '../vite.config.ts');
let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');

// Enhanced chunk splitting strategy
const optimizedChunkConfig = `
        manualChunks: (id) => {
          // Vendor chunks - more granular splitting
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-animations';
            }
            if (id.includes('lucide-react') || id.includes('@heroicons')) {
              return 'vendor-icons';
            }
            if (id.includes('recharts')) {
              return 'vendor-charts';
            }
            if (id.includes('web-vitals')) {
              return 'vendor-analytics';
            }
            if (id.includes('tailwindcss')) {
              return 'vendor-styles';
            }
            return 'vendor-misc';
          }
          
          // App chunks - more specific splitting
          if (id.includes('/app/ai-')) {
            return 'ai-services';
          }
          if (id.includes('/app/it-')) {
            return 'it-services';
          }
          if (id.includes('/app/components/')) {
            return 'components';
          }
          if (id.includes('/app/utils/')) {
            return 'utils';
          }
          if (id.includes('/app/hooks/')) {
            return 'hooks';
          }
          return 'app';
        },`;

// Replace the existing chunk configuration
viteConfig = viteConfig.replace(
  /manualChunks: \(id\) => \{[\s\S]*?\},/,
  optimizedChunkConfig
);

// Add performance optimizations
const performanceOptimizations = `
  // Performance optimizations
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    target: 'es2020',
    cssTarget: 'chrome80',
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        ${optimizedChunkConfig}
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop();
          if (/\.(css)$/i.test(assetInfo.name || '')) {
            return \`assets/css/[name]-[hash].\${ext}\`;
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name || '')) {
            return \`assets/images/[name]-[hash].\${ext}\`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            return \`assets/fonts/[name]-[hash].\${ext}\`;
          }
          return \`assets/[name]-[hash].\${ext}\`;
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2,
      },
      mangle: {
        safari10: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ascii_only: true
      }
    }
  },`;

// Write the optimized config
fs.writeFileSync(viteConfigPath, viteConfig);

// 2. Create a performance monitoring component
const performanceMonitorPath = path.join(__dirname, '../app/components/PerformanceMonitor.tsx');
const performanceMonitorContent = `'use client';
import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  name: string;
  value: number;
  delta: number;
  id: string;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const sendToAnalytics = (metric: PerformanceMetrics) => {
      // Send to your analytics service
      console.log('Performance metric:', metric);
      
      // Example: Send to Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    // Measure Core Web Vitals
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);

    // Measure additional performance metrics
    if (typeof window !== 'undefined') {
      // First Contentful Paint
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            sendToAnalytics({
              name: 'FCP',
              value: entry.startTime,
              delta: entry.startTime,
              id: 'fcp-custom'
            });
          }
        }
      });
      
      observer.observe({ entryTypes: ['paint'] });
    }
  }, []);

  return null;
};

export default PerformanceMonitor;`;

fs.writeFileSync(performanceMonitorPath, performanceMonitorContent);

// 3. Create a bundle analyzer script
const bundleAnalyzerPath = path.join(__dirname, '../scripts/analyze-bundle.js');
const bundleAnalyzerContent = `const fs = require('fs');
const path = require('path');

/**
 * Bundle Analysis Script
 * Analyzes the built bundle for optimization opportunities
 */

function analyzeBundle() {
  const distPath = path.join(__dirname, '../dist');
  
<<<<<<< HEAD
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist folder not found. Run npm run build first.');
    return;
  }

  const assetsPath = path.join(distPath, 'assets');
  const files = fs.readdirSync(assetsPath);
  
  const jsFiles = files.filter(file => file.endsWith('.js'));
  const cssFiles = files.filter(file => file.endsWith('.css'));
  
  let totalJSSize = 0;
  let totalCSSSize = 0;
  
  console.log('\\n📊 Bundle Analysis Report');
  console.log('========================');
  
  console.log('\\n📦 JavaScript Files:');
  jsFiles.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalJSSize += stats.size;
    console.log(\`  \${file}: \${sizeKB} KB\`);
  });
  
  console.log('\\n🎨 CSS Files:');
  cssFiles.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalCSSSize += stats.size;
    console.log(\`  \${file}: \${sizeKB} KB\`);
  });
  
  console.log('\\n📈 Summary:');
  console.log(\`  Total JS Size: \${(totalJSSize / 1024).toFixed(2)} KB\`);
  console.log(\`  Total CSS Size: \${(totalCSSSize / 1024).toFixed(2)} KB\`);
  console.log(\`  Total Bundle Size: \${((totalJSSize + totalCSSSize) / 1024).toFixed(2)} KB\`);
  
  // Recommendations
  console.log('\\n💡 Optimization Recommendations:');
  if (totalJSSize > 500 * 1024) {
    console.log('  ⚠️  JavaScript bundle is large. Consider code splitting.');
  }
  if (totalCSSSize > 50 * 1024) {
    console.log('  ⚠️  CSS bundle is large. Consider purging unused styles.');
  }
  if (jsFiles.length > 20) {
    console.log('  ⚠️  Many JS chunks. Consider consolidating smaller chunks.');
  }
  
  console.log('\\n✅ Bundle analysis complete!');
}

analyzeBundle();`;

fs.writeFileSync(bundleAnalyzerPath, bundleAnalyzerContent);

// 4. Add performance scripts to package.json
const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

packageJson.scripts['analyze:bundle'] = 'node scripts/analyze-bundle.js';
packageJson.scripts['perf:audit'] = 'lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html';
packageJson.scripts['perf:check'] = 'npm run build && npm run analyze:bundle';

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('✅ Performance optimizations completed!');
console.log('📊 Run "npm run analyze:bundle" to analyze your bundle');
console.log('🔍 Run "npm run perf:audit" to run Lighthouse audit');
=======
  // This is a placeholder for performance optimizations
=======
// Performance optimization script;
const optimizePerformance = () => {
};
  // console.log removed for production
// This is a placeholder for performance optimizations
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // In a real implementation, you would:
  // 1. Optimize images
  // 2. Minify CSS/JS
  // 3. Generate critical CSS
  // 4. Optimize fonts
  // 5. Generate service worker
<<<<<<< HEAD
  
  console.log('Performance optimizations completed')
  }

=======
  // console.log removed for production
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
optimizePerformance();
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Performance optimization configurations
const performanceConfig = {
  // Image optimization settings
  images: {
    quality: 85,
    formats: ['webp', 'avif', 'jpeg'],
    sizes: [320, 640, 768, 1024, 1280, 1920],
    lazy: true
  },
  
  // Bundle optimization
  bundle: {
    chunkSizeLimit: 250000, // 250KB
    maxChunks: 20,
    vendorChunkSize: 100000 // 100KB
  },
  
  // Caching strategies
  caching: {
    static: '1y',
    images: '1M',
    fonts: '1y',
    api: '1h'
  },
  
  // Preloading strategies
  preloading: {
    critical: true,
    fonts: true,
    images: false,
    scripts: true
  }
};

// Generate performance optimization report
function generatePerformanceReport() {
  const distDir = path.join(__dirname, '../dist');
  
  if (!fs.existsSync(distDir)) {
    console.log('No dist directory found. Run build first.');
    return;
  }

  const report = {
    timestamp: new Date().toISOString(),
    buildSize: getDirectorySize(distDir),
    files: analyzeFiles(distDir),
    recommendations: []
  };

  // Analyze bundle sizes
  const jsFiles = getFilesByExtension(distDir, '.js');
  const cssFiles = getFilesByExtension(distDir, '.css');
  
  report.files.js = jsFiles.map(file => ({
    name: path.basename(file),
    size: fs.statSync(file).size,
    gzipped: estimateGzipSize(fs.readFileSync(file))
  }));
  
  report.files.css = cssFiles.map(file => ({
    name: path.basename(file),
    size: fs.statSync(file).size,
    gzipped: estimateGzipSize(fs.readFileSync(file))
  }));

  // Generate recommendations
  report.recommendations = generateRecommendations(report);

  // Write report
  const reportPath = path.join(__dirname, '../performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log('Performance report generated:', reportPath);
  console.log(`Total build size: ${formatBytes(report.buildSize)}`);
  console.log(`JavaScript files: ${report.files.js.length}`);
  console.log(`CSS files: ${report.files.css.length}`);
}

// Get directory size recursively
function getDirectorySize(dir) {
  let size = 0;
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      size += getDirectorySize(filePath);
    } else {
      size += stat.size;
    }
  });
  
  return size;
}

// Get files by extension
function getFilesByExtension(dir, ext) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const itemPath = path.join(currentDir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        scanDirectory(itemPath);
      } else if (item.endsWith(ext)) {
        files.push(itemPath);
      }
    });
  }
  
  scanDirectory(dir);
  return files;
}

// Estimate gzip size (rough approximation)
function estimateGzipSize(buffer) {
  // Simple gzip estimation: typically 20-30% of original size
  return Math.round(buffer.length * 0.25);
}

// Analyze files in directory
function analyzeFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir, relativePath = '') {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const itemPath = path.join(currentDir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        scanDirectory(itemPath, path.join(relativePath, item));
      } else {
        files.push({
          name: path.join(relativePath, item),
          size: stat.size,
          type: path.extname(item),
          modified: stat.mtime
        });
      }
    });
  }
  
  scanDirectory(dir);
  return files;
}

// Generate performance recommendations
function generateRecommendations(report) {
  const recommendations = [];
  
  // Check for large files
  const largeFiles = report.files.filter(file => file.size > 100000); // 100KB
  if (largeFiles.length > 0) {
    recommendations.push({
      type: 'warning',
      message: `Found ${largeFiles.length} files larger than 100KB`,
      files: largeFiles.map(f => f.name)
    });
  }
  
  // Check JavaScript bundle sizes
  const largeJsFiles = report.files.js.filter(file => file.size > performanceConfig.bundle.chunkSizeLimit);
  if (largeJsFiles.length > 0) {
    recommendations.push({
      type: 'warning',
      message: `Found ${largeJsFiles.length} JavaScript chunks larger than ${formatBytes(performanceConfig.bundle.chunkSizeLimit)}`,
      files: largeJsFiles.map(f => f.name)
    });
  }
  
  // Check for too many chunks
  if (report.files.js.length > performanceConfig.bundle.maxChunks) {
    recommendations.push({
      type: 'info',
      message: `Consider reducing the number of chunks (currently ${report.files.js.length}, recommended max ${performanceConfig.bundle.maxChunks})`
    });
  }
  
  // Check total build size
  if (report.buildSize > 5000000) { // 5MB
    recommendations.push({
      type: 'warning',
      message: `Build size is ${formatBytes(report.buildSize)}, consider optimizing assets`
    });
  }
  
  return recommendations;
}

// Format bytes to human readable
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Generate .htaccess for Apache servers
function generateHtaccess() {
  const htaccess = `# Zion Tech Group - Performance Optimizations

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
    AddOutputFilterByType DEFLATE application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/svg+xml "access plus 1 month"
    ExpiresByType image/webp "access plus 1 month"
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
    ExpiresByType application/font-woff "access plus 1 year"
    ExpiresByType application/font-woff2 "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
</IfModule>

# Redirect to HTTPS
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
`;

  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, '.htaccess'), htaccess);
  console.log('Generated .htaccess for Apache servers');
}

// Generate nginx configuration
function generateNginxConfig() {
  const nginxConfig = `# Zion Tech Group - Nginx Performance Configuration

server {
    listen 80;
    server_name ziontechgroup.com www.ziontechgroup.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name ziontechgroup.com www.ziontechgroup.com;
    
    root /var/www/ziontechgroup.com;
    index index.html;
    
    # SSL configuration (add your certificates)
    # ssl_certificate /path/to/certificate.crt;
    # ssl_certificate_key /path/to/private.key;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml+rss
        application/atom+xml
        image/svg+xml;
    
    # Browser caching
    location ~* \\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
    
    # Main location
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # API routes (if any)
    location /api/ {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
`;

  const configDir = path.join(__dirname, '../config');
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(configDir, 'nginx.conf'), nginxConfig);
  console.log('Generated nginx configuration');
}

// Run all optimizations
if (import.meta.url === `file://${process.argv[1]}`) {
  generatePerformanceReport();
  generateHtaccess();
  generateNginxConfig();
}

export {
  generatePerformanceReport,
  generateHtaccess,
  generateNginxConfig
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-139b
