#!/usr/bin/env node

/**
 * Advanced Performance Optimizer for Zion Tech Group Website
 * Comprehensive optimization for Core Web Vitals and user experience
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting Advanced Performance Optimization...');

// 1. Optimize CSS for better performance
const optimizeCSS = () => {
  console.log('📝 Optimizing CSS...');
  
  const cssPath = path.join(__dirname, '..', 'app', 'globals.css');
  let css = fs.readFileSync(cssPath, 'utf8');
  
  // Add critical CSS optimizations
  const criticalCSS = `
/* Critical CSS optimizations */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  color: var(--text-primary);
  background: var(--dark-bg);
  min-height: 100vh;
}

/* Performance optimizations */
img {
  max-width: 100%;
  height: auto;
  loading: lazy;
}

/* Reduce layout shifts */
.aspect-ratio {
  aspect-ratio: 16/9;
}

/* Optimize animations for performance */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Critical above-the-fold styles */
.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Optimize for mobile first */
@media (max-width: 768px) {
  .hero-section {
    min-height: 80vh;
    padding: 2rem 1rem;
  }
}

/* Font loading optimization */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070-209F, U+20A0-20CF, U+2100-214F, U+2150-217F, U+2180-21FF, U+2200-22FF, U+2300-23FF, U+2400-24FF, U+2500-25FF, U+2600-26FF, U+2700-27FF, U+2800-28FF, U+2900-29FF, U+2A00-2AFF, U+2B00-2BFF, U+2C00-2CFF, U+2D00-2DFF, U+2E00-2EFF, U+2F00-2FFF, U+3000-30FF, U+3100-31FF, U+3200-32FF, U+3300-33FF, U+3400-34FF, U+3500-35FF, U+3600-36FF, U+3700-37FF, U+3800-38FF, U+3900-39FF, U+3A00-3AFF, U+3B00-3BFF, U+3C00-3CFF, U+3D00-3DFF, U+3E00-3EFF, U+3F00-3FFF, U+4000-40FF, U+4100-41FF, U+4200-42FF, U+4300-43FF, U+4400-44FF, U+4500-45FF, U+4600-46FF, U+4700-47FF, U+4800-48FF, U+4900-49FF, U+4A00-4AFF, U+4B00-4BFF, U+4C00-4CFF, U+4D00-4DFF, U+4E00-4EFF, U+4F00-4FFF, U+5000-50FF, U+5100-51FF, U+5200-52FF, U+5300-53FF, U+5400-54FF, U+5500-55FF, U+5600-56FF, U+5700-57FF, U+5800-58FF, U+5900-59FF, U+5A00-5AFF, U+5B00-5BFF, U+5C00-5CFF, U+5D00-5DFF, U+5E00-5EFF, U+5F00-5FFF, U+6000-60FF, U+6100-61FF, U+6200-62FF, U+6300-63FF, U+6400-64FF, U+6500-65FF, U+6600-66FF, U+6700-67FF, U+6800-68FF, U+6900-69FF, U+6A00-6AFF, U+6B00-6BFF, U+6C00-6CFF, U+6D00-6DFF, U+6E00-6EFF, U+6F00-6FFF, U+7000-70FF, U+7100-71FF, U+7200-72FF, U+7300-73FF, U+7400-74FF, U+7500-75FF, U+7600-76FF, U+7700-77FF, U+7800-78FF, U+7900-79FF, U+7A00-7AFF, U+7B00-7BFF, U+7C00-7CFF, U+7D00-7DFF, U+7E00-7EFF, U+7F00-7FFF, U+8000-80FF, U+8100-81FF, U+8200-82FF, U+8300-83FF, U+8400-84FF, U+8500-85FF, U+8600-86FF, U+8700-87FF, U+8800-88FF, U+8900-89FF, U+8A00-8AFF, U+8B00-8BFF, U+8C00-8CFF, U+8D00-8DFF, U+8E00-8EFF, U+8F00-8FFF, U+9000-90FF, U+9100-91FF, U+9200-92FF, U+9300-93FF, U+9400-94FF, U+9500-95FF, U+9600-96FF, U+9700-97FF, U+9800-98FF, U+9900-99FF, U+9A00-9AFF, U+9B00-9BFF, U+9C00-9CFF, U+9D00-9DFF, U+9E00-9EFF, U+9F00-9FFF, U+A000-A0FF, U+A100-A1FF, U+A200-A2FF, U+A300-A3FF, U+A400-A4FF, U+A500-A5FF, U+A600-A6FF, U+A700-A7FF, U+A800-A8FF, U+A900-A9FF, U+AA00-AAFF, U+AB00-ABFF, U+AC00-ACFF, U+AD00-ADFF, U+AE00-AEFF, U+AF00-AFFF, U+B000-B0FF, U+B100-B1FF, U+B200-B2FF, U+B300-B3FF, U+B400-B4FF, U+B500-B5FF, U+B600-B6FF, U+B700-B7FF, U+B800-B8FF, U+B900-B9FF, U+BA00-BAFF, U+BB00-BBFF, U+BC00-BCFF, U+BD00-BDFF, U+BE00-BEFF, U+BF00-BFFF, U+C000-C0FF, U+C100-C1FF, U+C200-C2FF, U+C300-C3FF, U+C400-C4FF, U+C500-C5FF, U+C600-C6FF, U+C700-C7FF, U+C800-C8FF, U+C900-C9FF, U+CA00-CAFF, U+CB00-CBFF, U+CC00-CCFF, U+CD00-CDFF, U+CE00-CEFF, U+CF00-CFFF, U+D000-D0FF, U+D100-D1FF, U+D200-D2FF, U+D300-D3FF, U+D400-D4FF, U+D500-D5FF, U+D600-D6FF, U+D700-D7FF, U+D800-D8FF, U+D900-D9FF, U+DA00-DAFF, U+DB00-DBFF, U+DC00-DCFF, U+DD00-DDFF, U+DE00-DEFF, U+DF00-DFFF, U+E000-E0FF, U+E100-E1FF, U+E200-E2FF, U+E300-E3FF, U+E400-E4FF, U+E500-E5FF, U+E600-E6FF, U+E700-E7FF, U+E800-E8FF, U+E900-E9FF, U+EA00-EAFF, U+EB00-EBFF, U+EC00-ECFF, U+ED00-EDFF, U+EE00-EEFF, U+EF00-EFFF, U+F000-F0FF, U+F100-F1FF, U+F200-F2FF, U+F300-F3FF, U+F400-F4FF, U+F500-F5FF, U+F600-F6FF, U+F700-F7FF, U+F800-F8FF, U+F900-F9FF, U+FA00-FAFF, U+FB00-FBFF, U+FC00-FCFF, U+FD00-FDFF, U+FE00-FEFF, U+FF00-FFFF;
}
`;

  // Append critical CSS to the beginning
  css = criticalCSS + css;
  
  fs.writeFileSync(cssPath, css);
  console.log('✅ CSS optimized');
};

// 2. Create performance monitoring utilities
const createPerformanceUtils = () => {
  console.log('📊 Creating performance utilities...');
  
  const performanceUtils = `
// Performance monitoring and optimization utilities
export const performanceUtils = {
  // Measure Core Web Vitals
  measureWebVitals: () => {
    if (typeof window === 'undefined') return;
    
    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          console.log('FCP:', entry.startTime);
          // Send to analytics
          if (typeof gtag !== 'undefined') {
            gtag('event', 'web_vitals', {
              name: 'FCP',
              value: Math.round(entry.startTime),
              event_category: 'Performance'
            });
          }
        }
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });
    
    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          name: 'LCP',
          value: Math.round(lastEntry.startTime),
          event_category: 'Performance'
        });
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    
    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      console.log('CLS:', clsValue);
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          name: 'CLS',
          value: Math.round(clsValue * 1000),
          event_category: 'Performance'
        });
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  },
  
  // Preload critical resources
  preloadCriticalResources: () => {
    const criticalResources = [
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { href: '/images/hero-bg.webp', as: 'image' },
      { href: '/images/logo.svg', as: 'image' }
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      document.head.appendChild(link);
    });
  },
  
  // Optimize images
  optimizeImages: () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" if not present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  },
  
  // Initialize performance optimizations
  init: () => {
    if (typeof window !== 'undefined') {
      performanceUtils.measureWebVitals();
      performanceUtils.preloadCriticalResources();
      performanceUtils.optimizeImages();
    }
  }
};

// Auto-initialize
if (typeof window !== 'undefined') {
  performanceUtils.init();
}
`;

  fs.writeFileSync(
    path.join(__dirname, '..', 'app', 'utils', 'performanceUtils.ts'),
    performanceUtils
  );
  
  console.log('✅ Performance utilities created');
};

// 3. Create bundle optimization script
const createBundleOptimizer = () => {
  console.log('📦 Creating bundle optimizer...');
  
  const bundleOptimizer = `
// Bundle optimization and analysis
export const bundleOptimizer = {
  // Analyze bundle size
  analyzeBundle: () => {
    const scripts = Array.from(document.querySelectorAll('script[src]'));
    const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    
    const analysis = {
      scripts: scripts.length,
      stylesheets: stylesheets.length,
      totalSize: 0,
      recommendations: []
    };
    
    // Check for large bundles
    if (analysis.scripts > 5) {
      analysis.recommendations.push('Consider code splitting to reduce initial bundle size');
    }
    
    if (analysis.stylesheets > 3) {
      analysis.recommendations.push('Consider consolidating CSS files');
    }
    
    console.log('Bundle Analysis:', analysis);
    return analysis;
  },
  
  // Optimize third-party scripts
  optimizeThirdPartyScripts: () => {
    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
      }
    });
  },
  
  // Initialize bundle optimizations
  init: () => {
    if (typeof window !== 'undefined') {
      bundleOptimizer.analyzeBundle();
      bundleOptimizer.optimizeThirdPartyScripts();
    }
  }
};

// Auto-initialize
if (typeof window !== 'undefined') {
  bundleOptimizer.init();
}
`;

  fs.writeFileSync(
    path.join(__dirname, '..', 'app', 'utils', 'bundleOptimizer.ts'),
    bundleOptimizer
  );
  
  console.log('✅ Bundle optimizer created');
};

// 4. Create SEO optimization utilities
const createSEOOptimizer = () => {
  console.log('🔍 Creating SEO optimizer...');
  
  const seoOptimizer = `
// SEO optimization utilities
export const seoOptimizer = {
  // Add structured data
  addStructuredData: (data) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  },
  
  // Optimize meta tags
  optimizeMetaTags: () => {
    const metaTags = [
      { name: 'description', content: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.' },
      { name: 'keywords', content: 'AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence' },
      { name: 'author', content: 'Zion Tech Group' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ziontechgroup.com' },
      { property: 'og:title', content: 'Zion Tech Group - Advanced AI and IT Solutions' },
      { property: 'og:description', content: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.' },
      { property: 'og:image', content: 'https://ziontechgroup.com/og-image.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Zion Tech Group - Advanced AI and IT Solutions' },
      { name: 'twitter:description', content: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.' },
      { name: 'twitter:image', content: 'https://ziontechgroup.com/og-image.jpg' }
    ];
    
    metaTags.forEach(tag => {
      const existingTag = document.querySelector(\`meta[\${tag.name ? 'name' : 'property'}="\${tag.name || tag.property}"]\`);
      if (!existingTag) {
        const meta = document.createElement('meta');
        if (tag.name) meta.name = tag.name;
        if (tag.property) meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
  },
  
  // Initialize SEO optimizations
  init: () => {
    if (typeof window !== 'undefined') {
      seoOptimizer.optimizeMetaTags();
    }
  }
};

// Auto-initialize
if (typeof window !== 'undefined') {
  seoOptimizer.init();
}
`;

  fs.writeFileSync(
    path.join(__dirname, '..', 'app', 'utils', 'seoOptimizer.ts'),
    seoOptimizer
  );
  
  console.log('✅ SEO optimizer created');
};

// 5. Run optimizations
const runOptimizations = () => {
  console.log('🔄 Running optimizations...');
  
  try {
    optimizeCSS();
    createPerformanceUtils();
    createBundleOptimizer();
    createSEOOptimizer();
    
    console.log('✅ All optimizations completed successfully!');
    console.log('');
    console.log('📊 Performance improvements:');
    console.log('  - Critical CSS optimizations');
    console.log('  - Web Vitals monitoring');
    console.log('  - Image optimization');
    console.log('  - Bundle analysis');
    console.log('  - SEO enhancements');
    console.log('');
    console.log('🚀 Run "npm run build" to apply optimizations');
    
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
};

// Run the optimizations
runOptimizations();