#!/usr/bin/env node

/**
 * Deployment Readiness Check for Zion Tech Group Website
 * Comprehensive validation before production deployment
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting Deployment Readiness Check...');

const checks = {
  build: false,
  typeCheck: false,
  lint: false,
  tests: false,
  bundleSize: false,
  performance: false,
  accessibility: false,
  seo: false
};

// 1. Check if build exists and is valid
const checkBuild = () => {
  console.log('📦 Checking build...');
  try {
    const distPath = path.join(__dirname, '..', 'dist');
    if (!fs.existsSync(distPath)) {
      throw new Error('Build directory does not exist');
    }
    
    const indexHtml = path.join(distPath, 'index.html');
    if (!fs.existsSync(indexHtml)) {
      throw new Error('index.html not found in build');
    }
    
    const assetsDir = path.join(distPath, 'assets');
    if (!fs.existsSync(assetsDir)) {
      throw new Error('Assets directory not found in build');
    }
    
    checks.build = true;
    console.log('✅ Build check passed');
  } catch (error) {
    console.error('❌ Build check failed:', error.message);
    return false;
  }
  return true;
};

// 2. Check TypeScript compilation
const checkTypeScript = () => {
  console.log('🔍 Checking TypeScript...');
  try {
    execSync('npm run type-check', { stdio: 'pipe' });
    checks.typeCheck = true;
    console.log('✅ TypeScript check passed');
  } catch (error) {
    console.error('❌ TypeScript check failed:', error.message);
    return false;
  }
  return true;
};

// 3. Check linting
const checkLinting = () => {
  console.log('🧹 Checking linting...');
  try {
    execSync('npm run lint', { stdio: 'pipe' });
    checks.lint = true;
    console.log('✅ Linting check passed');
  } catch (error) {
    console.error('❌ Linting check failed:', error.message);
    return false;
  }
  return true;
};

// 4. Check tests
const checkTests = () => {
  console.log('🧪 Checking tests...');
  try {
    execSync('npm test', { stdio: 'pipe' });
    checks.tests = true;
    console.log('✅ Tests check passed');
  } catch (error) {
    console.error('❌ Tests check failed:', error.message);
    return false;
  }
  return true;
};

// 5. Check bundle size
const checkBundleSize = () => {
  console.log('📊 Checking bundle size...');
  try {
    const distPath = path.join(__dirname, '..', 'dist');
    const assetsPath = path.join(distPath, 'assets');
    
    if (!fs.existsSync(assetsPath)) {
      throw new Error('Assets directory not found');
    }
    
    const files = fs.readdirSync(assetsPath);
    let totalSize = 0;
    
    files.forEach(file => {
      const filePath = path.join(assetsPath, file);
      const stats = fs.statSync(filePath);
      totalSize += stats.size;
    });
    
    const totalSizeMB = totalSize / (1024 * 1024);
    
    if (totalSizeMB > 5) {
      console.warn(`⚠️  Bundle size is ${totalSizeMB.toFixed(2)}MB (recommended: < 5MB)`);
    } else {
      console.log(`✅ Bundle size is ${totalSizeMB.toFixed(2)}MB`);
    }
    
    checks.bundleSize = true;
  } catch (error) {
    console.error('❌ Bundle size check failed:', error.message);
    return false;
  }
  return true;
};

// 6. Check performance optimizations
const checkPerformance = () => {
  console.log('⚡ Checking performance optimizations...');
  try {
    const distPath = path.join(__dirname, '..', 'dist');
    const indexHtml = path.join(distPath, 'index.html');
    
    if (!fs.existsSync(indexHtml)) {
      throw new Error('index.html not found');
    }
    
    const htmlContent = fs.readFileSync(indexHtml, 'utf8');
    
    // Check for performance optimizations
    const performanceChecks = [
      { name: 'Meta viewport', pattern: /<meta name="viewport"/, required: true },
      { name: 'Preconnect to fonts', pattern: /<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com"/, required: true },
      { name: 'DNS prefetch', pattern: /<link rel="dns-prefetch"/, required: true },
      { name: 'Canonical URL', pattern: /<link rel="canonical"/, required: true },
      { name: 'Structured data', pattern: /<script type="application\/ld\+json"/, required: true }
    ];
    
    let passedChecks = 0;
    performanceChecks.forEach(check => {
      if (check.pattern.test(htmlContent)) {
        passedChecks++;
        console.log(`  ✅ ${check.name}`);
      } else if (check.required) {
        console.log(`  ❌ ${check.name} (required)`);
      } else {
        console.log(`  ⚠️  ${check.name} (optional)`);
      }
    });
    
    if (passedChecks >= performanceChecks.filter(c => c.required).length) {
      checks.performance = true;
      console.log('✅ Performance check passed');
    } else {
      console.log('❌ Performance check failed');
      return false;
    }
  } catch (error) {
    console.error('❌ Performance check failed:', error.message);
    return false;
  }
  return true;
};

// 7. Check accessibility
const checkAccessibility = () => {
  console.log('♿ Checking accessibility...');
  try {
    const distPath = path.join(__dirname, '..', 'dist');
    const indexHtml = path.join(distPath, 'index.html');
    
    if (!fs.existsSync(indexHtml)) {
      throw new Error('index.html not found');
    }
    
    const htmlContent = fs.readFileSync(indexHtml, 'utf8');
    
    // Check for accessibility features
    const accessibilityChecks = [
      { name: 'Lang attribute', pattern: /<html lang="en"/, required: true },
      { name: 'Skip links', pattern: /skip.*content/i, required: true },
      { name: 'Alt attributes', pattern: /alt="/, required: false },
      { name: 'ARIA labels', pattern: /aria-label/, required: false },
      { name: 'Semantic HTML', pattern: /<main|<nav|<header|<footer/, required: true }
    ];
    
    let passedChecks = 0;
    accessibilityChecks.forEach(check => {
      if (check.pattern.test(htmlContent)) {
        passedChecks++;
        console.log(`  ✅ ${check.name}`);
      } else if (check.required) {
        console.log(`  ❌ ${check.name} (required)`);
      } else {
        console.log(`  ⚠️  ${check.name} (optional)`);
      }
    });
    
    if (passedChecks >= accessibilityChecks.filter(c => c.required).length) {
      checks.accessibility = true;
      console.log('✅ Accessibility check passed');
    } else {
      console.log('❌ Accessibility check failed');
      return false;
    }
  } catch (error) {
    console.error('❌ Accessibility check failed:', error.message);
    return false;
  }
  return true;
};

// 8. Check SEO
const checkSEO = () => {
  console.log('🔍 Checking SEO...');
  try {
    const distPath = path.join(__dirname, '..', 'dist');
    const indexHtml = path.join(distPath, 'index.html');
    
    if (!fs.existsSync(indexHtml)) {
      throw new Error('index.html not found');
    }
    
    const htmlContent = fs.readFileSync(indexHtml, 'utf8');
    
    // Check for SEO features
    const seoChecks = [
      { name: 'Title tag', pattern: /<title>/, required: true },
      { name: 'Meta description', pattern: /<meta name="description"/, required: true },
      { name: 'Meta keywords', pattern: /<meta name="keywords"/, required: true },
      { name: 'Open Graph tags', pattern: /<meta property="og:/, required: true },
      { name: 'Twitter Card tags', pattern: /<meta name="twitter:/, required: true },
      { name: 'Robots meta', pattern: /<meta name="robots"/, required: true },
      { name: 'Canonical URL', pattern: /<link rel="canonical"/, required: true }
    ];
    
    let passedChecks = 0;
    seoChecks.forEach(check => {
      if (check.pattern.test(htmlContent)) {
        passedChecks++;
        console.log(`  ✅ ${check.name}`);
      } else if (check.required) {
        console.log(`  ❌ ${check.name} (required)`);
      } else {
        console.log(`  ⚠️  ${check.name} (optional)`);
      }
    });
    
    if (passedChecks >= seoChecks.filter(c => c.required).length) {
      checks.seo = true;
      console.log('✅ SEO check passed');
    } else {
      console.log('❌ SEO check failed');
      return false;
    }
  } catch (error) {
    console.error('❌ SEO check failed:', error.message);
    return false;
  }
  return true;
};

// Run all checks
const runAllChecks = () => {
  console.log('🔍 Running all deployment checks...\n');
  
  const results = [
    checkBuild(),
    checkTypeScript(),
    checkLinting(),
    checkTests(),
    checkBundleSize(),
    checkPerformance(),
    checkAccessibility(),
    checkSEO()
  ];
  
  const passedChecks = results.filter(Boolean).length;
  const totalChecks = results.length;
  
  console.log('\n📊 Deployment Readiness Summary:');
  console.log('================================');
  console.log(`Build: ${checks.build ? '✅' : '❌'}`);
  console.log(`TypeScript: ${checks.typeCheck ? '✅' : '❌'}`);
  console.log(`Linting: ${checks.lint ? '✅' : '❌'}`);
  console.log(`Tests: ${checks.tests ? '✅' : '❌'}`);
  console.log(`Bundle Size: ${checks.bundleSize ? '✅' : '❌'}`);
  console.log(`Performance: ${checks.performance ? '✅' : '❌'}`);
  console.log(`Accessibility: ${checks.accessibility ? '✅' : '❌'}`);
  console.log(`SEO: ${checks.seo ? '✅' : '❌'}`);
  console.log('================================');
  console.log(`Overall: ${passedChecks}/${totalChecks} checks passed`);
  
  if (passedChecks === totalChecks) {
    console.log('\n🎉 Deployment ready! All checks passed.');
    console.log('🚀 You can now deploy to production.');
    process.exit(0);
  } else {
    console.log('\n⚠️  Deployment not ready. Please fix the failed checks.');
    process.exit(1);
  }
};

// Run the checks
runAllChecks();