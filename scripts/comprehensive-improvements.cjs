#!/usr/bin/env node

/**
 * Comprehensive Improvements Script
 * Applies various improvements to the project including performance, security, SEO, and accessibility
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveImprovements {
  constructor() {
    this.projectRoot = process.cwd();
    this.improvements = [];
    this.errors = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = {
      info: '📋',
      success: '✅',
      warning: '⚠️',
      error: '❌'
    }[type];
    
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  // Performance improvements
  async applyPerformanceImprovements() {
    this.log('Applying performance improvements...', 'info');
    
    try {
      // Update Next.js configuration for performance
      const nextConfigPath = path.join(this.projectRoot, 'next.config.cjs');
      if (fs.existsSync(nextConfigPath)) {
        let config = fs.readFileSync(nextConfigPath, 'utf8');
        
        // Add performance optimizations
        if (!config.includes('compress: true')) {
          config = config.replace('const nextConfig = {', `const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,`);
        }
        
        // Add image optimization
        if (!config.includes('images:')) {
          config = config.replace('};', `  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
};`);
        }
        
        fs.writeFileSync(nextConfigPath, config);
        this.improvements.push('Updated Next.js configuration for performance');
      }

      // Create service worker for caching
      const swPath = path.join(this.projectRoot, 'public', 'sw.js');
      const swContent = `
// Service Worker for caching and performance
const CACHE_NAME = 'zion-tech-group-v1';
const urlsToCache = [
  '/',
  '/static/css/',
  '/static/js/',
  '/images/'
];

// Service worker code - only execute in browser environment
if (typeof self !== 'undefined' && 'addEventListener' in self) {
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
        })
    );
  });
}
`;
      
      if (!fs.existsSync(path.dirname(swPath))) {
        fs.mkdirSync(path.dirname(swPath), { recursive: true });
      }
      fs.writeFileSync(swPath, swContent);
      this.improvements.push('Created service worker for caching');

      this.log('Performance improvements applied successfully', 'success');
    } catch (error) {
      this.log(`Error applying performance improvements: ${error.message}`, 'error');
      this.errors.push(error.message);
    }
  }

  // Security improvements
  async applySecurityImprovements() {
    this.log('Applying security improvements...', 'info');
    
    try {
      // Create middleware for security headers
      const middlewarePath = path.join(this.projectRoot, 'middleware.ts');
      const middlewareContent = `
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  if (process.env.NODE_ENV === 'production') {
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
  
  // CSP header
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:;"
  );
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
`;
      
      if (!fs.existsSync(middlewarePath)) {
        fs.writeFileSync(middlewarePath, middlewareContent);
        this.improvements.push('Created security middleware');
      }

      // Update package.json with security audit script
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        if (!packageJson.scripts['security:audit']) {
          packageJson.scripts['security:audit'] = 'npm audit --audit-level moderate';
          packageJson.scripts['security:fix'] = 'npm audit fix';
          
          fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
          this.improvements.push('Added security audit scripts to package.json');
        }
      }

      this.log('Security improvements applied successfully', 'success');
    } catch (error) {
      this.log(`Error applying security improvements: ${error.message}`, 'error');
      this.errors.push(error.message);
    }
  }

  // SEO improvements
  async applySEOImprovements() {
    this.log('Applying SEO improvements...', 'info');
    
    try {
      // Create robots.txt
      const robotsPath = path.join(this.projectRoot, 'public', 'robots.txt');
      const robotsContent = `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml
`;
      
      if (!fs.existsSync(robotsPath)) {
        fs.writeFileSync(robotsPath, robotsContent);
        this.improvements.push('Created robots.txt');
      }

      // Create sitemap generation script
      const sitemapScriptPath = path.join(this.projectRoot, 'scripts', 'generate-sitemap.js');
      const sitemapScriptContent = `
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://ziontechgroup.com';
const pages = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/services', changefreq: 'weekly', priority: '0.9' },
  { url: '/contact', changefreq: 'monthly', priority: '0.7' },
  { url: '/pricing', changefreq: 'weekly', priority: '0.8' },
];

const generateSitemap = () => {
  const sitemap = \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
\${pages.map(page => \`  <url>
    <loc>\${baseUrl}\${page.url}</loc>
    <lastmod>\${new Date().toISOString()}</lastmod>
    <changefreq>\${page.changefreq}</changefreq>
    <priority>\${page.priority}</priority>
  </url>\`).join('\\n')}
</urlset>\`;

  fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully');
};

generateSitemap();
`;
      
      if (!fs.existsSync(path.dirname(sitemapScriptPath))) {
        fs.mkdirSync(path.dirname(sitemapScriptPath), { recursive: true });
      }
      fs.writeFileSync(sitemapScriptPath, sitemapScriptContent);
      this.improvements.push('Created sitemap generation script');

      // Generate sitemap
      try {
        execSync(`node ${sitemapScriptPath}`, { stdio: 'inherit' });
        this.improvements.push('Generated sitemap.xml');
      } catch (error) {
        this.log(`Warning: Could not generate sitemap: ${error.message}`, 'warning');
      }

      this.log('SEO improvements applied successfully', 'success');
    } catch (error) {
      this.log(`Error applying SEO improvements: ${error.message}`, 'error');
      this.errors.push(error.message);
    }
  }

  // Accessibility improvements
  async applyAccessibilityImprovements() {
    this.log('Applying accessibility improvements...', 'info');
    
    try {
      // Create accessibility CSS
      const a11yCssPath = path.join(this.projectRoot, 'styles', 'accessibility.css');
      const a11yCssContent = `
/* Accessibility improvements */

/* Skip links */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
  transform: translateY(-100%);
  transition: transform 0.3s;
}

.skip-link:focus {
  transform: translateY(0%);
}

/* Screen reader only content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Focus indicators */
*:focus {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  * {
    border-color: ButtonText;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Color contrast improvements */
.text-low-contrast {
  color: #666;
}

@media (prefers-contrast: high) {
  .text-low-contrast {
    color: #000;
  }
}
`;
      
      if (!fs.existsSync(path.dirname(a11yCssPath))) {
        fs.mkdirSync(path.dirname(a11yCssPath), { recursive: true });
      }
      fs.writeFileSync(a11yCssPath, a11yCssContent);
      this.improvements.push('Created accessibility CSS');

      this.log('Accessibility improvements applied successfully', 'success');
    } catch (error) {
      this.log(`Error applying accessibility improvements: ${error.message}`, 'error');
      this.errors.push(error.message);
    }
  }

  // Code quality improvements
  async applyCodeQualityImprovements() {
    this.log('Applying code quality improvements...', 'info');
    
    try {
      // Create .gitignore improvements
      const gitignorePath = path.join(this.projectRoot, '.gitignore');
      const additionalIgnores = `
# Additional ignores for better project management
*.log
*.tmp
*.temp
.env.local
.env.development.local
.env.test.local
.env.production.local
.vercel
.netlify
coverage/
.nyc_output/
dist/
build/
.cache/
.parcel-cache/
.DS_Store
Thumbs.db
`;
      
      if (fs.existsSync(gitignorePath)) {
        const currentContent = fs.readFileSync(gitignorePath, 'utf8');
        if (!currentContent.includes('# Additional ignores')) {
          fs.appendFileSync(gitignorePath, additionalIgnores);
          this.improvements.push('Enhanced .gitignore file');
        }
      }

      // Create EditorConfig
      const editorConfigPath = path.join(this.projectRoot, '.editorconfig');
      const editorConfigContent = `root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
indent_style = space
indent_size = 2

[*.md]
trim_trailing_whitespace = false

[*.{yml,yaml}]
indent_size = 2

[*.json]
indent_size = 2
`;
      
      if (!fs.existsSync(editorConfigPath)) {
        fs.writeFileSync(editorConfigPath, editorConfigContent);
        this.improvements.push('Created .editorconfig file');
      }

      this.log('Code quality improvements applied successfully', 'success');
    } catch (error) {
      this.log(`Error applying code quality improvements: ${error.message}`, 'error');
      this.errors.push(error.message);
    }
  }

  // Generate improvement report
  generateReport() {
    const reportPath = path.join(this.projectRoot, 'improvement-report.json');
    const report = {
      timestamp: new Date().toISOString(),
      improvements: this.improvements,
      errors: this.errors,
      summary: {
        totalImprovements: this.improvements.length,
        totalErrors: this.errors.length,
        success: this.errors.length === 0
      }
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`Improvement report generated: ${reportPath}`, 'success');
    
    return report;
  }

  // Main execution method
  async run() {
    this.log('Starting comprehensive improvements...', 'info');
    
    await this.applyPerformanceImprovements();
    await this.applySecurityImprovements();
    await this.applySEOImprovements();
    await this.applyAccessibilityImprovements();
    await this.applyCodeQualityImprovements();
    
    const report = this.generateReport();
    
    this.log(`Comprehensive improvements completed!`, 'success');
    this.log(`Applied ${report.summary.totalImprovements} improvements`, 'success');
    
    if (report.summary.totalErrors > 0) {
      this.log(`Encountered ${report.summary.totalErrors} errors`, 'warning');
    }
    
    return report;
  }
}

// Run the improvements if this script is executed directly
if (require.main === module) {
  const improvements = new ComprehensiveImprovements();
  improvements.run().catch(console.error);
}

module.exports = ComprehensiveImprovements;