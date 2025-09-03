#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class AppOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.optimizations = [];
    this.improvements = []}

  async optimizeApp() {
    console.log('🚀 Starting App Optimization...');
    
    try {
      await this.optimizeBuild();
      await this.optimizeDependencies();
      await this.optimizeCode();
      await this.optimizeAssets();
      await this.optimizePerformance();
      await this.optimizeSEO();
      await this.optimizeSecurity();
      
      this.generateReport();
      console.log('✅ App optimization completed!')} catch (error) {
      console.error('❌ App optimization failed:', error.message)}
  }

  async optimizeBuild() {
    console.log('🔨 Optimizing build process...');
    
    try {
      // Optimize Next.js build
      const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
      if (fs.existsSync(nextConfigPath)) {
        let config = fs.readFileSync(nextConfigPath, 'utf8');
        
        // Add build optimizations
        if (!config.includes('swcMinify')) {
          config = config.replace(
            'module.exports = {',
            'module.exports = {\n  swcMinify: true',
          )}
        
        if (!config.includes('compress')) {
          config = config.replace(
            'module.exports = {',
            'module.exports = {\n  compress: true',
          )}
        
        fs.writeFileSync(nextConfigPath, config);
        this.optimizations.push('Build optimizations added to Next.js config')}
      
      // Optimize package.json scripts
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        if (!packageJson.scripts['build:optimized']) {
          packageJson.scripts['build:optimized'] = 'next build && next export'}
        
        if (!packageJson.scripts['analyze']) {
          packageJson.scripts['analyze'] = 'ANALYZE=true npm run build'}
        
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        this.optimizations.push('Optimized build scripts added to package.json')}
      
    } catch (error) {
      console.warn('⚠️  Build optimization failed:', error.message)}
  }

  async optimizeDependencies() {
    console.log('📦 Optimizing dependencies...');
    
    try {
      // Check for outdated dependencies
      const result = execSync('npm outdated --json' { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000
      });
      
      const outdated = JSON.parse(result);
      if (Object.keys(outdated).length > 0) {
        this.improvements.push(`Found ${Object.keys(outdated).length} outdated dependencies`);
        
        // Update dependencies
        execSync('npm update' { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          timeout: 60000
        });
        
        this.optimizations.push('Dependencies updated to latest versions')}
      
      // Check for unused dependencies
      try {
        execSync('npx depcheck' { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          timeout: 30000
        })} catch (error) {
        // depcheck might not be installed, that's okay
      }
      
    } catch (error) {
      console.warn('⚠️  Dependency optimization failed:', error.message)}
  }

  async optimizeCode() {
    console.log('💻 Optimizing code...');
    
    try {
      // Run ESLint with auto-fix
      try {
        execSync('npx eslint . --fix' { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          timeout: 60000
        });
        this.optimizations.push('Code linting and auto-fixing completed')} catch (error) {
        // ESLint might have issues, that's okay
      }
      
      // Run Prettier
      try {
        execSync('npx prettier --write .' { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          timeout: 60000
        });
        this.optimizations.push('Code formatting with Prettier completed')} catch (error) {
        // Prettier might have issues, that's okay
      }
      
      // Remove console.log statements from production code
      try {
        execSync('node scripts/remove-console-logs.js' { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          timeout: 30000
        });
        this.optimizations.push('Console.log statements removed from production code')} catch (error) {
        // Script might not exist, that's okay
      }
      
    } catch (error) {
      console.warn('⚠️  Code optimization failed:', error.message)}
  }

  async optimizeAssets() {
    console.log('🖼️  Optimizing assets...');
    
    try {
      // Check for large files
      const publicDir = path.join(this.projectRoot, 'public');
      if (fs.existsSync(publicDir)) {
        const files = this.getAllFiles(publicDir);
        const largeFiles = files.filter(file => {
          const stats = fs.statSync(file);
          return stats.size > 1024 * 1024; // 1MB
        });
        
        if (largeFiles.length > 0) {
          this.improvements.push(`Found ${largeFiles.length} large files (>1MB) that could be optimized`)}
      }
      
      // Create optimized image component
      const optimizedImagePath = path.join(this.projectRoot, 'src', 'components', 'OptimizedImage.jsx');
      if (!fs.existsSync(optimizedImagePath)) {
        const optimizedImageContent = `import Image from 'next/image';

export default function OptimizedImage({ src, alt, width, height, ...props }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      {...props}
    />
  )}`;
        
        fs.writeFileSync(optimizedImagePath, optimizedImageContent);
        this.optimizations.push('OptimizedImage component created for better performance')}
      
    } catch (error) {
      console.warn('⚠️  Asset optimization failed:', error.message)}
  }

  async optimizePerformance() {
    console.log('⚡ Optimizing performance...');
    
    try {
      // Create performance monitoring hook
      const performanceHookPath = path.join(this.projectRoot, 'src', 'hooks', 'usePerformanceMonitor.js');
      if (!fs.existsSync(performanceHookPath)) {
        const performanceHookContent = `import { useEffect, useState } from 'react';

export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            setMetrics(prev => ({
              ...prev,
              navigation: {
                loadTime: entry.loadEventEnd - entry.loadEventStart,
                domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
                firstPaint: entry.responseEnd - entry.requestStart
              }
            }))}
        })});

      observer.observe({ entryTypes: ['navigation'] });

      return () => observer.disconnect()}
  }, []);

  return metrics}`;
        
        fs.writeFileSync(performanceHookPath, performanceHookContent);
        this.optimizations.push('Performance monitoring hook created')}
      
      // Create loading component
      const loadingPath = path.join(this.projectRoot, 'src', 'components', 'LoadingSpinner.jsx');
      if (!fs.existsSync(loadingPath)) {
        const loadingContent = `import React from 'react';

export default function LoadingSpinner({ size = 'medium' }) {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className="flex justify-center items-center">
      <div className={\`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 \${sizeClasses[size]}\`}></div>
    </div>
  )}`;
        
        fs.writeFileSync(loadingPath, loadingContent);
        this.optimizations.push('Loading spinner component created')}
      
    } catch (error) {
      console.warn('⚠️  Performance optimization failed:', error.message)}
  }

  async optimizeSEO() {
    console.log('🔍 Optimizing SEO...');
    
    try {
      // Create SEO component
      const seoPath = path.join(this.projectRoot, 'src', 'components', 'SEO.jsx');
      if (!fs.existsSync(seoPath)) {
        const seoContent = `import Head from 'next/head';

export default function SEO({ title, description, keywords, image, url }) {
  const siteName = 'Zion Tech Group';
  const defaultTitle = 'Zion Tech Group - AI-Powered Technology Solutions';
  const defaultDescription = 'Leading provider of AI-powered technology solutions, automation, and digital transformation services.';
  const defaultImage = '/images/og-image.jpg';
  const defaultUrl = 'https://ziontechgroup.com';

  const seoTitle = title ? \`\${title} | \${siteName}\` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoImage = image || defaultImage;
  const seoUrl = url || defaultUrl;

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />
    </Head>
  )}`;
        
        fs.writeFileSync(seoPath, seoContent);
        this.optimizations.push('SEO component created for better search engine optimization')}
      
      // Create sitemap
      const sitemapPath = path.join(this.projectRoot, 'public', 'sitemap.xml');
      if (!fs.existsSync(sitemapPath)) {
        const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/services</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;
        
        fs.writeFileSync(sitemapPath, sitemapContent);
        this.optimizations.push('Sitemap created for better SEO')}
      
    } catch (error) {
      console.warn('⚠️  SEO optimization failed:', error.message)}
  }

  async optimizeSecurity() {
    console.log('🔒 Optimizing security...');
    
    try {
      // Create security middleware
      const securityPath = path.join(this.projectRoot, 'src', 'middleware', 'security.js');
      if (!fs.existsSync(securityPath)) {
        const securityContent = `export function securityHeaders(req, res, next) {
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Content Security Policy
  res.setHeader('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https:; " +
    "font-src 'self' data:; " +
    "connect-src 'self' https:; " +
    "frame-ancestors 'none';"
  );
  
  next()}`;
        
        fs.writeFileSync(securityPath, securityContent);
        this.optimizations.push('Security middleware created with comprehensive headers')}
      
      // Create environment validation
      const envValidationPath = path.join(this.projectRoot, 'src', 'utils', 'envValidation.js');
      if (!fs.existsSync(envValidationPath)) {
        const envValidationContent = `export function validateEnvironment() {
  const requiredEnvVars = [
    'NODE_ENV',
    'NEXT_PUBLIC_APP_URL'
  ];
  
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    throw new Error(\`Missing required environment variables: \${missingVars.join(', ')}\`)}
  
  return true}`;
        
        fs.writeFileSync(envValidationPath, envValidationContent);
        this.optimizations.push('Environment validation utility created')}
      
    } catch (error) {
      console.warn('⚠️  Security optimization failed:', error.message)}
  }

  getAllFiles(dirPath) {
    let files = [];
    try {
      const items = fs.readdirSync(dirPath);
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          files = files.concat(this.getAllFiles(fullPath))} else {
          files.push(fullPath)}
      }
    } catch (error) {
      // Skip directories we can't read
    }
    return files}

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: this.optimizations,
      improvements: this.improvements,
      summary: {
        totalOptimizations: this.optimizations.length,
        totalImprovements: this.improvements.length
      }
    };

    const reportPath = path.join(this.projectRoot, 'app-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('\n📊 Optimization Summary:');
    console.log('─'.repeat(50));
    console.log(`✅ Optimizations applied: ${this.optimizations.length}`);
    console.log(`📈 Improvements identified: ${this.improvements.length}`);
    console.log(`📄 Report saved to: ${reportPath}`)}
}

// Run the app optimizer
const optimizer = new AppOptimizer();
optimizer.optimizeApp().catch(console.error);