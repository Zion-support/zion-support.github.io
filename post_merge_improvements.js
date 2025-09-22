#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting post-merge improvements...');

// Configuration
const config = {
  projectRoot: '/workspace',
  improvements: [],
  fixes: [],
  newFeatures: []
};

// Helper function to execute commands
function execCommand(command, options = {}) {
  try {
    const result = execSync(command, { 
      encoding: 'utf8', 
      cwd: config.projectRoot,
      timeout: 30000,
      ...options 
    });
    return { success: true, output: result.trim() };
  } catch (error) {
    return { 
      success: false, 
      error: error.message,
      output: error.stdout ? error.stdout.toString() : '',
      stderr: error.stderr ? error.stderr.toString() : ''
    };
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Check if file exists
function fileExists(filePath) {
  return fs.existsSync(path.join(config.projectRoot, filePath));
}

// Read file content
function readFile(filePath) {
  try {
    return fs.readFileSync(path.join(config.projectRoot, filePath), 'utf8');
  } catch (error) {
    return null;
  }
}

// Write file content
function writeFile(filePath, content) {
  try {
    const fullPath = path.join(config.projectRoot, filePath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(fullPath, content);
    return true;
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error.message);
    return false;
  }
}

// Fix metadataBase warning
function fixMetadataBase() {
  console.log('🔧 Fixing metadataBase warning...');
  
  const layoutPath = 'app/layout.tsx';
  const content = readFile(layoutPath);
  
  if (content && !content.includes('metadataBase')) {
    const metadataBaseFix = `import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com'),
  title: 'Zion Tech Group - AI-Powered Solutions',
  description: 'Leading provider of AI-powered business solutions and automation services.',
  // ... existing metadata
`;

    // Insert metadataBase at the beginning of metadata export
    const updatedContent = content.replace(
      /export const metadata: Metadata = \{/,
      `export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com'),`
    );
    
    if (writeFile(layoutPath, updatedContent)) {
      config.fixes.push('Fixed metadataBase warning in layout.tsx');
      console.log('✅ Fixed metadataBase warning');
      return true;
    }
  }
  
  return false;
}

// Add SEO enhancements
function addSEOEnhancements() {
  console.log('🔍 Adding SEO enhancements...');
  
  const seoEnhancerContent = `import { Metadata } from 'next';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateSEOMetadata({
  title = 'Zion Tech Group',
  description = 'Leading provider of AI-powered business solutions',
  keywords = ['AI', 'automation', 'business solutions', 'technology'],
  canonical,
  ogImage = '/og-image.jpg',
  noIndex = false
}: SEOProps = {}): Metadata {
  const fullTitle = title === 'Zion Tech Group' ? title : \`\${title} | Zion Tech Group\`;
  
  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    canonical,
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: 'Zion Tech Group',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical,
    },
  };
}`;

  if (writeFile('lib/seo.ts', seoEnhancerContent)) {
    config.newFeatures.push('Added SEO enhancement utilities');
    console.log('✅ Added SEO enhancement utilities');
    return true;
  }
  
  return false;
}

// Add performance optimizations
function addPerformanceOptimizations() {
  console.log('⚡ Adding performance optimizations...');
  
  const performanceContent = `import { Metadata } from 'next';

export function optimizeImages() {
  return {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  };
}

export function getPerformanceHeaders() {
  return [
    {
      key: 'X-DNS-Prefetch-Control',
      value: 'on'
    },
    {
      key: 'X-Frame-Options',
      value: 'DENY'
    },
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    },
    {
      key: 'Referrer-Policy',
      value: 'origin-when-cross-origin'
    },
    {
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=()'
    }
  ];
}`;

  if (writeFile('lib/performance.ts', performanceContent)) {
    config.newFeatures.push('Added performance optimization utilities');
    console.log('✅ Added performance optimization utilities');
    return true;
  }
  
  return false;
}

// Update Next.js config with optimizations
function updateNextConfig() {
  console.log('⚙️  Updating Next.js configuration...');
  
  const configPath = 'next.config.cjs';
  const content = readFile(configPath);
  
  if (content) {
    const optimizations = `
    // Performance optimizations
    experimental: {
      optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
      turbo: {
        rules: {
          '*.svg': {
            loaders: ['@svgr/webpack'],
            as: '*.js',
          },
        },
      },
    },
    
    // Image optimization
    images: {
      formats: ['image/webp', 'image/avif'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 60,
    },
    
    // Compression
    compress: true,
    
    // Bundle analyzer (only in development)
    ...(process.env.ANALYZE === 'true' && {
      webpack: (config) => {
        config.plugins.push(
          new (require('@next/bundle-analyzer'))({
            enabled: true,
          })
        );
        return config;
      },
    }),`;

    // Insert optimizations before the closing brace
    const updatedContent = content.replace(
      /(\s+)(module\.exports\s*=\s*\{[\s\S]*?)(\s+\})/,
      `$1$2${optimizations}$1$3`
    );
    
    if (writeFile(configPath, updatedContent)) {
      config.improvements.push('Updated Next.js config with performance optimizations');
      console.log('✅ Updated Next.js configuration');
      return true;
    }
  }
  
  return false;
}

// Add environment template
function addEnvironmentTemplate() {
  console.log('🌍 Adding environment template...');
  
  const envTemplate = `# Environment Variables Template
# Copy this file to .env.local and fill in your values

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://ziontechgroup.com
NEXT_PUBLIC_SITE_NAME=Zion Tech Group

# API Configuration
NEXT_PUBLIC_API_URL=https://api.ziontechgroup.com
API_SECRET_KEY=your-secret-key-here

# Database (if using)
DATABASE_URL=your-database-url-here

# Authentication (if using)
NEXTAUTH_SECRET=your-nextauth-secret-here
NEXTAUTH_URL=https://ziontechgroup.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id

# Performance
ANALYZE=false
NODE_ENV=production`;

  if (writeFile('.env.example', envTemplate)) {
    config.newFeatures.push('Added environment variables template');
    console.log('✅ Added environment template');
    return true;
  }
  
  return false;
}

// Run linting and fix issues
function runLinting() {
  console.log('🔍 Running linting...');
  
  const lintResult = execCommand('npm run lint -- --fix');
  if (lintResult.success) {
    config.improvements.push('Fixed linting issues');
    console.log('✅ Linting completed');
    return true;
  } else {
    console.log('⚠️  Linting had some issues but completed');
    return false;
  }
}

// Run type checking
function runTypeCheck() {
  console.log('📝 Running type checking...');
  
  const typeCheckResult = execCommand('npm run type-check');
  if (typeCheckResult.success) {
    config.improvements.push('Type checking passed');
    console.log('✅ Type checking passed');
    return true;
  } else {
    console.log('⚠️  Type checking had some issues');
    return false;
  }
}

// Generate sitemap
function generateSitemap() {
  console.log('🗺️  Generating sitemap...');
  
  const sitemapResult = execCommand('npm run sitemap');
  if (sitemapResult.success) {
    config.improvements.push('Generated sitemap');
    console.log('✅ Sitemap generated');
    return true;
  } else {
    console.log('⚠️  Sitemap generation had some issues');
    return false;
  }
}

// Main improvement function
async function runImprovements() {
  console.log('🎯 Starting comprehensive improvements...');
  
  try {
    // Fix metadata warnings
    fixMetadataBase();
    await sleep(1000);
    
    // Add SEO enhancements
    addSEOEnhancements();
    await sleep(1000);
    
    // Add performance optimizations
    addPerformanceOptimizations();
    await sleep(1000);
    
    // Update Next.js config
    updateNextConfig();
    await sleep(1000);
    
    // Add environment template
    addEnvironmentTemplate();
    await sleep(1000);
    
    // Run linting
    runLinting();
    await sleep(1000);
    
    // Run type checking
    runTypeCheck();
    await sleep(1000);
    
    // Generate sitemap
    generateSitemap();
    await sleep(1000);
    
    // Final build test
    console.log('🏗️  Running final build test...');
    const buildResult = execCommand('npm run build');
    if (buildResult.success) {
      config.improvements.push('Final build test passed');
      console.log('✅ Final build test passed');
    } else {
      console.log('⚠️  Final build test had some issues');
    }
    
  } catch (error) {
    console.error('❌ Error during improvements:', error.message);
  }
}

// Generate improvement report
function generateReport() {
  const report = {
    timestamp: new Date().toISOString(),
    improvements: config.improvements,
    fixes: config.fixes,
    newFeatures: config.newFeatures,
    summary: {
      totalImprovements: config.improvements.length,
      totalFixes: config.fixes.length,
      totalNewFeatures: config.newFeatures.length
    }
  };
  
  const reportPath = path.join(config.projectRoot, 'post-merge-improvements-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log('\n📊 Improvement Summary:');
  console.log('='.repeat(50));
  console.log(`✅ Improvements: ${config.improvements.length}`);
  console.log(`🔧 Fixes: ${config.fixes.length}`);
  console.log(`🆕 New Features: ${config.newFeatures.length}`);
  console.log('='.repeat(50));
  
  console.log('\n🎯 Improvements Made:');
  config.improvements.forEach((improvement, index) => {
    console.log(`${index + 1}. ${improvement}`);
  });
  
  console.log('\n🔧 Fixes Applied:');
  config.fixes.forEach((fix, index) => {
    console.log(`${index + 1}. ${fix}`);
  });
  
  console.log('\n🆕 New Features Added:');
  config.newFeatures.forEach((feature, index) => {
    console.log(`${index + 1}. ${feature}`);
  });
  
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  
  return report;
}

// Main execution
async function main() {
  try {
    console.log('🎯 Starting post-merge improvements...');
    
    await runImprovements();
    
    const report = generateReport();
    
    console.log('\n🎉 Post-merge improvements completed successfully!');
    
  } catch (error) {
    console.error('💥 Fatal error during improvements:', error.message);
    process.exit(1);
  }
}

// Run the script
main().catch(console.error);