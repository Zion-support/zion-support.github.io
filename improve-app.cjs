#!/usr/bin/env node

/**
 * App Improvement Script
 * Analyzes and improves the application
 */

const fs = require('fs');
const path = require('path');

class AppImprover {
  constructor() {
    this.improvements = [];
    this.issues = [];
  }

  log(message) {
    console.log(`🔧 ${message}`);
  }

  analyzeApp() {
    this.log('Analyzing application structure...');

    // Check for common issues
    this.checkNextConfig();
    this.checkPackageJson();
    this.checkAppStructure();
    this.checkForOptimizations();
  }

  checkNextConfig() {
    try {
      const configPath = 'next.config.js';
      if (fs.existsSync(configPath)) {
        const content = fs.readFileSync(configPath, 'utf8');

        // Check for performance optimizations
        if (!content.includes('swcMinify')) {
          this.improvements.push('Add SWC minification to next.config.js');
        }

        if (!content.includes('compress')) {
          this.improvements.push('Enable compression in next.config.js');
        }

        if (!content.includes('poweredByHeader')) {
          this.improvements.push('Remove X-Powered-By header for security');
        }

        this.log('✅ Next.js config analyzed');
      } else {
        this.issues.push('next.config.js not found');
      }
    } catch (error) {
      this.issues.push(`Error reading next.config.js: ${error.message}`);
    }
  }

  checkPackageJson() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

      // Check for missing scripts
      const requiredScripts = ['build', 'dev', 'start', 'test'];
      requiredScripts.forEach(script => {
        if (!packageJson.scripts[script]) {
          this.improvements.push(`Add ${script} script to package.json`);
        }
      });

      // Check for security
      if (!packageJson.scripts.audit) {
        this.improvements.push('Add security audit script');
      }

      this.log('✅ Package.json analyzed');
    } catch (error) {
      this.issues.push(`Error reading package.json: ${error.message}`);
    }
  }

  checkAppStructure() {
    const requiredDirs = ['src', 'src/components', 'src/pages', 'public'];
    requiredDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        this.log(`✅ ${dir} directory exists`);
      } else {
        this.issues.push(`Missing directory: ${dir}`);
      }
    });
  }

  checkForOptimizations() {
    // Check for image optimization
    if (fs.existsSync('public')) {
      const publicFiles = fs.readdirSync('public');
      const images = publicFiles.filter(file =>
        file.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)
      );
      if (images.length > 0) {
        this.improvements.push(
          `Optimize ${images.length} images in public directory`
        );
      }
    }

    // Check for unused dependencies
    this.improvements.push('Run npm audit to check for unused dependencies');
  }

  createOptimizedNextConfig() {
    const optimizedConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Performance optimizations
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
  
  // Image optimization
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  
  // Security headers
  async headers() {
    return [{
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      }
    ];
  },
  
  // Bundle analyzer
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false
      };
    }
    return config;
  }
};

module.exports = nextConfig;`;

    fs.writeFileSync('next.config.optimized.js', optimizedConfig);
    this.log('✅ Created optimized next.config.js');
  }

  createPerformanceScript() {
    const performanceScript = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class PerformanceOptimizer {
  constructor() {
    this.metrics = {};
  }

  async analyzeBundle() {
    const buildDir = path.join(process.cwd(), '.next');
    if (fs.existsSync(buildDir)) {
      const stats = this.getDirectorySize(buildDir);
      this.metrics.bundleSize = stats;
      console.log(\`Bundle size: \${(stats / 1024 / 1024).toFixed(2)} MB\`);
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        totalSize += this.getDirectorySize(filePath);
      } else {
        totalSize += stats.size;
      }
    });
    
    return totalSize;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      recommendations: this.generateRecommendations()
    };

    fs.writeFileSync('performance-report.json', JSON.stringify(report, null, 2));
    console.log('Performance report generated');
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.bundleSize > 1000000) { // 1MB
      recommendations.push('Consider implementing code splitting');
      recommendations.push('Use dynamic imports for large components');
      recommendations.push('Optimize images and assets');
    }
    
    return recommendations;
  }
}

if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.analyzeBundle();
  optimizer.generateReport();
}

module.exports = PerformanceOptimizer;`;

    fs.writeFileSync('scripts/performance-optimizer.js', performanceScript);
    this.log('✅ Created performance optimizer script');
  }

  createSecurityScript() {
    const securityScript = `#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

class SecurityAuditor {
  constructor() {
    this.issues = [];
    this.fixes = [];
  }

  async runAudit() {
    console.log('🔒 Running security audit...');
    try {
      const result = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON.parse(result);
      
      if (audit.vulnerabilities) {
        Object.keys(audit.vulnerabilities).forEach(pkg => {
          const vuln = audit.vulnerabilities[pkg];
          this.issues.push({
            package: pkg,
            severity: vuln.severity,
            description: vuln.description
          });
        });
      }
      
      console.log(\`Found \${this.issues.length} security issues\`);
    } catch (error) {
      console.log('No security issues found or audit failed');
    }
  }

  async fixIssues() {
    if (this.issues.length > 0) {
      console.log('🔧 Attempting to fix security issues...');
      try {
        execSync('npm audit fix', { stdio: 'inherit' });
        this.fixes.push('Applied automatic security fixes');
        console.log('✅ Security fixes applied');
      } catch (error) {
        console.log('❌ Could not apply automatic fixes');
      }
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      issues: this.issues,
      fixes: this.fixes,
      summary: {
        totalIssues: this.issues.length,
        fixesApplied: this.fixes.length
      }
    };

    fs.writeFileSync('security-report.json', JSON.stringify(report, null, 2));
    console.log('Security report generated');
  }
}

if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.runAudit();
  auditor.fixIssues();
  auditor.generateReport();
}

module.exports = SecurityAuditor;`;

    fs.writeFileSync('scripts/security-auditor.js', securityScript);
    this.log('✅ Created security auditor script');
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      issues: this.issues,
      improvements: this.improvements,
      summary: {
        totalIssues: this.issues.length,
        totalImprovements: this.improvements.length,
      },
    };

    fs.writeFileSync(
      'app-analysis-report.json',
      JSON.stringify(report, null, 2)
    );

    console.log('\n📊 App Analysis Report:');
    console.log(`❌ Issues found: ${this.issues.length}`);
    console.log(`🚀 Improvements suggested: ${this.improvements.length}`);

    if (this.issues.length > 0) {
      console.log('\nIssues:');
      this.issues.forEach(issue => console.log(`  - ${issue}`));
    }

    if (this.improvements.length > 0) {
      console.log('\nImprovements:');
      this.improvements.forEach(improvement =>
        console.log(`  - ${improvement}`)
      );
    }
  }

  async run() {
    this.log('🚀 Starting app improvement analysis...');

    this.analyzeApp();
    this.createOptimizedNextConfig();
    this.createPerformanceScript();
    this.createSecurityScript();
    this.generateReport();

    this.log('✅ App improvement analysis completed');
  }
}

if (require.main === module) {
  const improver = new AppImprover();
  improver.run().catch(error => {
    console.error('App improvement failed:', error);
    process.exit(1);
  });
}

module.exports = AppImprover;
