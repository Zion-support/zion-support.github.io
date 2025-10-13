const fs = require('fs');
const path = require('path');

// Comprehensive optimization script
function optimizeApplication() {
  console.log('🚀 Starting comprehensive optimization...');
  
  // 1. Optimize Vite config for better performance
  const viteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@app': path.resolve(__dirname, './app'),
      '@components': path.resolve(__dirname, './app/components'),
      '@utils': path.resolve(__dirname, './utils'),
    },
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@heroicons/react', 'lucide-react'],
          helmet: ['react-helmet-async'],
          motion: ['framer-motion'],
          charts: ['recharts'],
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return \`assets/images/[name]-[hash][extname]\`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return \`assets/fonts/[name]-[hash][extname]\`;
          }
          return \`assets/[name]-[hash][extname]\`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});`;

  fs.writeFileSync('./vite.config.ts', viteConfig);
  console.log('✅ Optimized Vite configuration');

  // 2. Create optimized index.html
  const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Zion Tech Group - Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services." />
    <meta name="keywords" content="AI solutions, IT services, cybersecurity, cloud computing, digital transformation, technology services, Zion Tech Group" />
    <meta name="author" content="Zion Tech Group" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#8b5cf6" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ziontechgroup.com" />
    <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
    <meta property="og:description" content="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services." />
    <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://ziontechgroup.com" />
    <meta name="twitter:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
    <meta name="twitter:description" content="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services." />
    <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://ziontechgroup.com" />
    
    <!-- Preconnect to external domains -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    
    <!-- Favicon -->
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    
    <title>Zion Tech Group - Advanced AI & IT Solutions</title>
    
    <!-- Structured Data -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/logo.svg",
        "description": "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Middletown",
          "addressRegion": "DE",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-302-464-0950",
          "contactType": "customer service",
          "email": "kleber@ziontechgroup.com"
        },
        "sameAs": [
          "https://www.linkedin.com/company/zion-tech-group",
          "https://twitter.com/ziontechgroup",
          "https://github.com/ziontechgroup"
        ]
      }
    </script>
    
    <!-- Critical CSS inline -->
    <style>
      body { margin: 0; font-family: Inter, sans-serif; background: #0f172a; }
      .loading { display: flex; justify-content: center; align-items: center; height: 100vh; }
      .spinner { width: 40px; height: 40px; border: 4px solid #1e293b; border-top: 4px solid #8b5cf6; border-radius: 50%; animation: spin 1s linear infinite; }
      @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    </style>
  </head>
  <body>
    <div id="root">
      <div class="loading">
        <div class="spinner"></div>
      </div>
    </div>
    <script type="module" src="/main.tsx"></script>
    
    <!-- Service Worker Registration -->
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
              console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
              console.log('SW registration failed: ', registrationError);
            });
        });
      }
    </script>
  </body>
</html>`;

  fs.writeFileSync('./index.html', indexHtml);
  console.log('✅ Optimized index.html');

  // 3. Create manifest.json for PWA
  const manifest = {
    "name": "Zion Tech Group",
    "short_name": "Zion Tech",
    "description": "Advanced AI and IT Solutions",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#0f172a",
    "theme_color": "#8b5cf6",
    "icons": [
      {
        "src": "/logo192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/logo512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  };

  fs.writeFileSync('./public/manifest.json', JSON.stringify(manifest, null, 2));
  console.log('✅ Created PWA manifest');

  // 4. Create .htaccess for Apache servers
  const htaccess = `# Enable compression
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
</IfModule>

# Enable browser caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
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
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`;

  fs.writeFileSync('./public/.htaccess', htaccess);
  console.log('✅ Created .htaccess for Apache');

  console.log('🎉 Comprehensive optimization completed!');
}

optimizeApplication();