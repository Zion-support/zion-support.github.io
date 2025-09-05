#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveImprovements {
  constructor() {
    this.projectRoot = process.cwd();
    this.improvements = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  createPerformanceOptimizations() {
    this.log('⚡ Creating Performance Optimizations');
    
    // Next.js performance config
    const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\\\/]node_modules[\\\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  }
};

module.exports = nextConfig;`;

    fs.writeFileSync(path.join(this.projectRoot, 'next.config.performance.js'), nextConfig);
    this.improvements.push('Next.js performance configuration');

    // Performance monitoring script
    const perfMonitor = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
  }

  log(message) {
    console.log(\`[\${new Date().toISOString()}] \${message}\`);
  }

  async monitorPerformance() {
    this.log('⚡ Monitoring Performance');
    
    const metrics = {
      timestamp: new Date().toISOString(),
      memory: process.memoryUsage(),
      uptime: process.uptime(),
      cpu: process.cpuUsage()
    };
    
    // Check bundle size
    const buildDir = path.join(this.projectRoot, '.next');
    if (fs.existsSync(buildDir)) {
      const buildSize = this.getDirectorySize(buildDir);
      metrics.buildSize = buildSize;
    }
    
    // Check node_modules size
    const nodeModulesDir = path.join(this.projectRoot, 'node_modules');
    if (fs.existsSync(nodeModulesDir)) {
      const nodeModulesSize = this.getDirectorySize(nodeModulesDir);
      metrics.nodeModulesSize = nodeModulesSize;
    }
    
    console.log('📊 Performance metrics:', JSON.stringify(metrics, null, 2));
    
    // Save metrics to file
    const metricsFile = path.join(this.projectRoot, 'performance-metrics.json');
    fs.writeFileSync(metricsFile, JSON.stringify(metrics, null, 2));
    
    return metrics;
  }

  getDirectorySize(dir) {
    let size = 0;
    if (!fs.existsSync(dir)) return size;
    
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        size += this.getDirectorySize(fullPath);
      } else {
        size += stat.size;
      }
    }
    return size;
  }
}

const monitor = new PerformanceMonitor();
monitor.monitorPerformance().catch(console.error);`;

    fs.writeFileSync(path.join(this.projectRoot, 'scripts', 'performance-monitor-enhanced.cjs'), perfMonitor);
    this.improvements.push('Enhanced performance monitoring script');
  }

  createSecurityEnhancements() {
    this.log('🔒 Creating Security Enhancements');
    
    // Security headers middleware
    const securityMiddleware = `// middleware/security.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self' https:",
    "frame-ancestors 'none'"
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', csp);
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};`;

    const middlewareDir = path.join(this.projectRoot, 'middleware');
    if (!fs.existsSync(middlewareDir)) {
      fs.mkdirSync(middlewareDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(middlewareDir, 'security.js'), securityMiddleware);
    this.improvements.push('Security headers middleware');

    // Security audit script
    const securityAudit = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SecurityAuditor {
  constructor() {
    this.projectRoot = process.cwd();
    this.vulnerabilities = [];
  }

  log(message) {
    console.log(\`[\${new Date().toISOString()}] \${message}\`);
  }

  async auditSecurity() {
    this.log('🔒 Running Security Audit');
    
    // Check for sensitive files
    this.checkSensitiveFiles();
    
    // Check for hardcoded secrets
    this.checkHardcodedSecrets();
    
    // Check for outdated dependencies
    this.checkDependencies();
    
    // Check for security headers
    this.checkSecurityHeaders();
    
    const report = {
      timestamp: new Date().toISOString(),
      vulnerabilities: this.vulnerabilities,
      totalVulnerabilities: this.vulnerabilities.length,
      status: this.vulnerabilities.length === 0 ? 'secure' : 'vulnerable'
    };
    
    fs.writeFileSync(
      path.join(this.projectRoot, 'security-audit-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    this.log(\`🔒 Security audit completed: \${this.vulnerabilities.length} vulnerabilities found\`);
    return report;
  }

  checkSensitiveFiles() {
    const sensitiveFiles = [
      '.env.local',
      '.env.production',
      'config/secrets.json',
      'private-key.pem',
      'database-credentials.json'
    ];
    
    for (const file of sensitiveFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        this.vulnerabilities.push({
          type: 'sensitive_file',
          file: file,
          severity: 'high',
          message: 'Sensitive file found in repository'
        });
      }
    }
  }

  checkHardcodedSecrets() {
    const files = this.getAllFiles(this.projectRoot, ['.js', '.jsx', '.ts', '.tsx']);
    
    for (const file of files) {
      if (file.includes('node_modules')) continue;
      
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for common secret patterns
        const secretPatterns = [
          /password\s*=\s*['"][^'"]+['"]/gi,
          /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,
          /secret\s*=\s*['"][^'"]+['"]/gi,
          /token\s*=\s*['"][^'"]+['"]/gi
        ];
        
        for (const pattern of secretPatterns) {
          if (pattern.test(content)) {
            this.vulnerabilities.push({
              type: 'hardcoded_secret',
              file: file,
              severity: 'high',
              message: 'Potential hardcoded secret found'
            });
          }
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
  }

  checkDependencies() {
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
        
        // Check for known vulnerable packages
        const vulnerablePackages = [
          'lodash',
          'jquery',
          'moment',
          'express'
        ];
        
        for (const pkg of vulnerablePackages) {
          if (dependencies[pkg]) {
            this.vulnerabilities.push({
              type: 'vulnerable_dependency',
              package: pkg,
              severity: 'medium',
              message: 'Potentially vulnerable dependency found'
            });
          }
        }
      } catch (error) {
        this.vulnerabilities.push({
          type: 'package_json_error',
          severity: 'low',
          message: 'Could not parse package.json'
        });
      }
    }
  }

  checkSecurityHeaders() {
    // This would typically check actual HTTP headers
    // For now, we'll just note that this should be implemented
    this.vulnerabilities.push({
      type: 'security_headers',
      severity: 'info',
      message: 'Security headers should be implemented in middleware'
    });
  }

  getAllFiles(dir, extensions) {
    let files = [];
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath, extensions));
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
    return files;
  }
}

const auditor = new SecurityAuditor();
auditor.auditSecurity().catch(console.error);`;

    fs.writeFileSync(path.join(this.projectRoot, 'scripts', 'security-auditor-enhanced.cjs'), securityAudit);
    this.improvements.push('Enhanced security auditor script');
  }

  createSEOOptimizations() {
    this.log('🔍 Creating SEO Optimizations');
    
    // Sitemap generator
    const sitemapGenerator = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SitemapGenerator {
  constructor() {
    this.projectRoot = process.cwd();
    this.baseUrl = 'https://ziontechgroup.com';
  }

  log(message) {
    console.log(\`[\${new Date().toISOString()}] \${message}\`);
  }

  generateSitemap() {
    this.log('🔍 Generating Sitemap');
    
    const pages = [
      { url: '', priority: '1.0', changefreq: 'daily' },
      { url: '/about', priority: '0.8', changefreq: 'weekly' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
      { url: '/contact', priority: '0.7', changefreq: 'monthly' },
      { url: '/blog', priority: '0.8', changefreq: 'daily' }
    ];
    
    const sitemap = \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
\${pages.map(page => \`  <url>
    <loc>\${this.baseUrl}\${page.url}</loc>
    <lastmod>\${new Date().toISOString()}</lastmod>
    <changefreq>\${page.changefreq}</changefreq>
    <priority>\${page.priority}</priority>
  </url>\`).join('\\n')}
</urlset>\`;

    const publicDir = path.join(this.projectRoot, 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    this.log('✅ Sitemap generated');
  }

  generateRobotsTxt() {
    this.log('🤖 Generating robots.txt');
    
    const robotsTxt = \`User-agent: *
Allow: /

Sitemap: \${this.baseUrl}/sitemap.xml\`;

    fs.writeFileSync(path.join(this.projectRoot, 'public', 'robots.txt'), robotsTxt);
    this.log('✅ robots.txt generated');
  }

  generateMetaTags() {
    this.log('🏷️ Generating meta tags configuration');
    
    const metaConfig = {
      default: {
        title: 'Zion Tech Group - AI & Technology Solutions',
        description: 'Leading provider of AI-powered technology solutions, automation, and digital transformation services.',
        keywords: 'AI, technology, automation, digital transformation, software development',
        ogTitle: 'Zion Tech Group - AI & Technology Solutions',
        ogDescription: 'Leading provider of AI-powered technology solutions and digital transformation services.',
        ogImage: '/og-image.jpg',
        twitterCard: 'summary_large_image',
        twitterSite: '@ziontechgroup'
      },
      pages: {
        '/': {
          title: 'Zion Tech Group - AI & Technology Solutions',
          description: 'Leading provider of AI-powered technology solutions, automation, and digital transformation services.'
        },
        '/about': {
          title: 'About Us - Zion Tech Group',
          description: 'Learn about Zion Tech Group\'s mission, values, and commitment to technological innovation.'
        },
        '/services': {
          title: 'Our Services - Zion Tech Group',
          description: 'Comprehensive AI and technology services including automation, development, and consulting.'
        }
      }
    };
    
    fs.writeFileSync(
      path.join(this.projectRoot, 'config', 'meta-tags.json'),
      JSON.stringify(metaConfig, null, 2)
    );
    this.log('✅ Meta tags configuration generated');
  }

  async run() {
    this.generateSitemap();
    this.generateRobotsTxt();
    this.generateMetaTags();
  }
}

new SitemapGenerator().run().catch(console.error);`;

    fs.writeFileSync(path.join(this.projectRoot, 'scripts', 'seo-optimizer-enhanced.cjs'), sitemapGenerator);
    this.improvements.push('Enhanced SEO optimizer script');
  }

  createAccessibilityEnhancements() {
    this.log('♿ Creating Accessibility Enhancements');
    
    const accessibilityChecker = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AccessibilityChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.issues = [];
  }

  log(message) {
    console.log(\`[\${new Date().toISOString()}] \${message}\`);
  }

  async checkAccessibility() {
    this.log('♿ Checking Accessibility');
    
    const files = this.getAllFiles(this.projectRoot, ['.jsx', '.tsx', '.js', '.ts']);
    
    for (const file of files) {
      if (file.includes('node_modules')) continue;
      
      try {
        const content = fs.readFileSync(file, 'utf8');
        this.checkFileAccessibility(file, content);
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    const report = {
      timestamp: new Date().toISOString(),
      issues: this.issues,
      totalIssues: this.issues.length,
      status: this.issues.length === 0 ? 'accessible' : 'needs_improvement'
    };
    
    fs.writeFileSync(
      path.join(this.projectRoot, 'accessibility-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    this.log(\`♿ Accessibility check completed: \${this.issues.length} issues found\`);
    return report;
  }

  checkFileAccessibility(file, content) {
    // Check for missing alt attributes
    const imgTags = content.match(/<img[^>]*>/g) || [];
    for (const img of imgTags) {
      if (!img.includes('alt=')) {
        this.issues.push({
          file: file,
          type: 'missing_alt',
          severity: 'high',
          message: 'Image missing alt attribute'
        });
      }
    }
    
    // Check for missing aria-labels
    const interactiveElements = content.match(/<(button|input|select|textarea)[^>]*>/g) || [];
    for (const element of interactiveElements) {
      if (!element.includes('aria-label') && !element.includes('aria-labelledby')) {
        this.issues.push({
          file: file,
          type: 'missing_aria_label',
          severity: 'medium',
          message: 'Interactive element missing aria-label'
        });
      }
    }
    
    // Check for proper heading hierarchy
    const headings = content.match(/<h[1-6][^>]*>/g) || [];
    let lastLevel = 0;
    for (const heading of headings) {
      const level = parseInt(heading.match(/<h([1-6])/)[1]);
      if (level > lastLevel + 1) {
        this.issues.push({
          file: file,
          type: 'heading_hierarchy',
          severity: 'medium',
          message: 'Heading hierarchy skipped levels'
        });
      }
      lastLevel = level;
    }
  }

  getAllFiles(dir, extensions) {
    let files = [];
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath, extensions));
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
    return files;
  }
}

const checker = new AccessibilityChecker();
checker.checkAccessibility().catch(console.error);`;

    fs.writeFileSync(path.join(this.projectRoot, 'scripts', 'accessibility-checker-enhanced.cjs'), accessibilityChecker);
    this.improvements.push('Enhanced accessibility checker script');
  }

  async run() {
    this.log('🚀 Starting Comprehensive Improvements');
    
    this.createPerformanceOptimizations();
    this.createSecurityEnhancements();
    this.createSEOOptimizations();
    this.createAccessibilityEnhancements();
    
    const report = {
      timestamp: new Date().toISOString(),
      improvements: this.improvements,
      totalImprovements: this.improvements.length
    };
    
    fs.writeFileSync(
      path.join(this.projectRoot, 'comprehensive-improvements-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    this.log(`🎉 Created ${this.improvements.length} comprehensive improvements`);
    this.log('📊 Improvements created:');
    this.improvements.forEach(improvement => {
      this.log(`  - ${improvement}`);
    });
    
    return report;
  }
}

// Run the comprehensive improvements
const improver = new ComprehensiveImprovements();
improver.run().catch(console.error);