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

    fs.writeFileSync(path.join(this.projectRoot, 'next.config.js'), nextConfig);
    this.improvements.push('Performance optimizations added to next.config.js');
  }

  createSecurityEnhancements() {
    this.log('🔒 Creating Security Enhancements');
    
    // Security headers middleware
    const securityMiddleware = `import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // CSP header
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;"
  );
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};`;

    const middlewareDir = path.join(this.projectRoot, 'middleware.ts');
    fs.writeFileSync(middlewareDir, securityMiddleware);
    this.improvements.push('Security middleware created');
  }

  createSEOOptimizations() {
    this.log('🔍 Creating SEO Optimizations');
    
    // SEO component
    const seoComponent = `import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = 'Zion Tech Group - Advanced AI Solutions',
  description = 'Leading provider of AI-powered automation, blockchain solutions, and enterprise software development.',
  image = '/og-image.jpg',
  url,
  type = 'website'
}: SEOProps) {
  const router = useRouter();
  const canonicalUrl = url || \`https://zion.app\${router.asPath}\`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}`;

    const componentsDir = path.join(this.projectRoot, 'components');
    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(componentsDir, 'SEO.tsx'), seoComponent);
    this.improvements.push('SEO component created');
  }

  createAccessibilityImprovements() {
    this.log('♿ Creating Accessibility Improvements');
    
    // Accessibility utilities
    const accessibilityUtils = `// Accessibility utilities
export const accessibilityUtils = {
  // Focus management
  trapFocus: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    element.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => element.removeEventListener('keydown', handleTabKey);
  },

  // ARIA helpers
  announceToScreenReader: (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  },

  // Skip links
  createSkipLink: (targetId: string, text: string = 'Skip to main content') => {
    const skipLink = document.createElement('a');
    skipLink.href = \`#\${targetId}\`;
    skipLink.textContent = text;
    skipLink.className = 'skip-link';
    skipLink.style.cssText = \`
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      transition: top 0.3s;
    \`;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    
    return skipLink;
  }
};

export default accessibilityUtils;`;

    const utilsDir = path.join(this.projectRoot, 'utils');
    if (!fs.existsSync(utilsDir)) {
      fs.mkdirSync(utilsDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(utilsDir, 'accessibility.ts'), accessibilityUtils);
    this.improvements.push('Accessibility utilities created');
  }

  createMonitoringScripts() {
    this.log('📊 Creating Monitoring Scripts');
    
    // Health check script
    const healthCheckScript = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class HealthChecker {
  constructor() {
    this.checks = [];
    this.results = [];
  }

  async checkBuildFiles() {
    const buildDir = path.join(process.cwd(), '.next');
    const exists = fs.existsSync(buildDir);
    this.results.push({
      check: 'Build Files',
      status: exists ? 'PASS' : 'FAIL',
      message: exists ? 'Build directory exists' : 'Build directory missing'
    });
    return exists;
  }

  async checkDependencies() {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const nodeModulesPath = path.join(process.cwd(), 'node_modules');
    
    const packageExists = fs.existsSync(packageJsonPath);
    const nodeModulesExists = fs.existsSync(nodeModulesPath);
    
    this.results.push({
      check: 'Dependencies',
      status: packageExists && nodeModulesExists ? 'PASS' : 'FAIL',
      message: packageExists && nodeModulesExists ? 'Dependencies installed' : 'Missing dependencies'
    });
    
    return packageExists && nodeModulesExists;
  }

  async checkEnvironmentVariables() {
    const envFile = path.join(process.cwd(), '.env.local');
    const envExists = fs.existsSync(envFile);
    
    this.results.push({
      check: 'Environment Variables',
      status: envExists ? 'PASS' : 'WARN',
      message: envExists ? 'Environment file exists' : 'No environment file found'
    });
    
    return envExists;
  }

  async runAllChecks() {
    console.log('🏥 Running Health Checks...');
    
    await this.checkBuildFiles();
    await this.checkDependencies();
    await this.checkEnvironmentVariables();
    
    const passed = this.results.filter(r => r.status === 'PASS').length;
    const failed = this.results.filter(r => r.status === 'FAIL').length;
    const warnings = this.results.filter(r => r.status === 'WARN').length;
    
    console.log('\\n📊 Health Check Results:');
    this.results.forEach(result => {
      const icon = result.status === 'PASS' ? '✅' : result.status === 'FAIL' ? '❌' : '⚠️';
      console.log(\`\${icon} \${result.check}: \${result.message}\`);
    });
    
    console.log(\`\\n📈 Summary: \${passed} passed, \${failed} failed, \${warnings} warnings\`);
    
    return {
      passed,
      failed,
      warnings,
      results: this.results
    };
  }
}

if (require.main === module) {
  const checker = new HealthChecker();
  checker.runAllChecks().catch(console.error);
}

module.exports = HealthChecker;`;

    const scriptsDir = path.join(this.projectRoot, 'scripts');
    if (!fs.existsSync(scriptsDir)) {
      fs.mkdirSync(scriptsDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(scriptsDir, 'health-check.js'), healthCheckScript);
    fs.chmodSync(path.join(scriptsDir, 'health-check.js'), '755');
    this.improvements.push('Health check script created');
  }

  async runAllImprovements() {
    this.log('🚀 Starting Comprehensive Improvements');

    try {
      this.createPerformanceOptimizations();
      this.createSecurityEnhancements();
      this.createSEOOptimizations();
      this.createAccessibilityImprovements();
      this.createMonitoringScripts();

      this.log('🎉 All improvements completed successfully');
      this.log(`📊 Total improvements: ${this.improvements.length}`);
      
      this.improvements.forEach((improvement, index) => {
        this.log(`${index + 1}. ${improvement}`);
      });

      return {
        success: true,
        improvements: this.improvements,
        count: this.improvements.length
      };
    } catch (error) {
      this.log(`❌ Improvements failed: ${error.message}`);
      return {
        success: false,
        error: error.message,
        improvements: this.improvements
      };
    }
  }
}

// Run if called directly
if (require.main === module) {
  const improvements = new ComprehensiveImprovements();
  improvements.runAllImprovements().catch(console.error);
}

module.exports = ComprehensiveImprovements;