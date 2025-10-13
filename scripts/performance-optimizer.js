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