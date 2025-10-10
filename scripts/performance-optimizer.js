#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance optimization...');

// 1. Optimize Vite configuration for better performance
const viteConfigPath = path.join(__dirname, '..', 'vite.config.ts');
let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');

// Add more aggressive optimization settings
const optimizedViteConfig = viteConfig.replace(
  /chunkSizeWarningLimit: 500,/,
  `chunkSizeWarningLimit: 300,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion') || id.includes('lucide-react') || id.includes('@heroicons')) {
              return 'vendor-ui';
            }
            if (id.includes('recharts')) {
              return 'vendor-charts';
            }
            if (id.includes('react-router-dom')) {
              return 'vendor-router';
            }
            return 'vendor';
          }
          // Page chunks - group similar pages
          if (id.includes('/src/ai-') || id.includes('/src/machine-learning') || id.includes('/src/nlp') || id.includes('/src/computer-vision')) {
            return 'pages-ai';
          }
          if (id.includes('/src/it-') || id.includes('/src/cloud-') || id.includes('/src/cybersecurity') || id.includes('/src/devops')) {
            return 'pages-it';
          }
          if (id.includes('/src/blog/')) {
            return 'pages-blog';
          }
          if (id.includes('/src/')) {
            return 'pages-other';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },`
);

fs.writeFileSync(viteConfigPath, optimizedViteConfig);
console.log('✅ Optimized Vite configuration');

// 2. Create a performance monitoring script
const performanceScript = `
// Performance monitoring and optimization
export const performanceOptimizer = {
  // Measure Core Web Vitals
  measureCoreWebVitals: () => {
    if (typeof window === 'undefined') return;
    
    // First Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        console.log('FCP:', fcpEntry.startTime);
        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'FCP',
            value: Math.round(fcpEntry.startTime),
            event_category: 'Performance'
          });
        }
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'LCP',
          value: Math.round(lastEntry.startTime),
          event_category: 'Performance'
        });
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'CLS',
          value: Math.round(clsValue * 1000) / 1000,
          event_category: 'Performance'
        });
      }
    }).observe({ entryTypes: ['layout-shift'] });
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

  // Preload critical resources
  preloadCriticalResources: () => {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  },

  // Initialize all optimizations
  init: () => {
    if (typeof window === 'undefined') return;
    
    // Run optimizations after DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        performanceOptimizer.measureCoreWebVitals();
        performanceOptimizer.optimizeImages();
        performanceOptimizer.preloadCriticalResources();
      });
    } else {
      performanceOptimizer.measureCoreWebVitals();
      performanceOptimizer.optimizeImages();
      performanceOptimizer.preloadCriticalResources();
    }
  }
};

// Auto-initialize
performanceOptimizer.init();
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'utils', 'performanceOptimizer.ts'), performanceScript);
console.log('✅ Created performance optimizer utility');

// 3. Create SEO optimization script
const seoScript = `
// SEO optimization utilities
export const seoOptimizer = {
  // Generate structured data
  generateStructuredData: (data) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: data.name || 'Zion Tech Group',
      description: data.description || 'Leading provider of AI-powered enterprise solutions',
      url: data.url || 'https://ziontechgroup.com',
      logo: data.logo || 'https://ziontechgroup.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US'
      },
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup'
      ]
    };
  },

  // Optimize meta tags
  optimizeMetaTags: (title, description, keywords) => {
    // Update title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;
  },

  // Add canonical URL
  addCanonicalUrl: (url) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }
};
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'utils', 'seoOptimizer.ts'), seoScript);
console.log('✅ Created SEO optimizer utility');

// 4. Create accessibility enhancement script
const accessibilityScript = `
// Accessibility enhancement utilities
export const accessibilityEnhancer = {
  // Add skip links
  addSkipLinks: () => {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = \`
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    \`;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = \`
      .skip-links {
        position: absolute;
        top: -40px;
        left: 6px;
        z-index: 1000;
      }
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        transition: top 0.3s;
      }
      .skip-link:focus {
        top: 6px;
      }
    \`;
    document.head.appendChild(style);
    document.body.insertBefore(skipLinks, document.body.firstChild);
  },

  // Enhance form accessibility
  enhanceForms: () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        // Add labels if missing
        if (!input.id || !document.querySelector(\`label[for="\${input.id}"]\`)) {
          const label = document.createElement('label');
          label.textContent = input.placeholder || input.name || 'Input field';
          label.setAttribute('for', input.id || input.name);
          input.parentNode.insertBefore(label, input);
        }
        
        // Add ARIA attributes
        if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
          input.setAttribute('aria-label', input.placeholder || input.name || 'Input field');
        }
      });
    });
  },

  // Add focus management
  enhanceFocusManagement: () => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = \`
      *:focus {
        outline: 2px solid #4f46e5;
        outline-offset: 2px;
      }
      .focus-visible {
        outline: 2px solid #4f46e5;
        outline-offset: 2px;
      }
    \`;
    document.head.appendChild(style);
  },

  // Initialize all enhancements
  init: () => {
    if (typeof window === 'undefined') return;
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        accessibilityEnhancer.addSkipLinks();
        accessibilityEnhancer.enhanceForms();
        accessibilityEnhancer.enhanceFocusManagement();
      });
    } else {
      accessibilityEnhancer.addSkipLinks();
      accessibilityEnhancer.enhanceForms();
      accessibilityEnhancer.enhanceFocusManagement();
    }
  }
};

// Auto-initialize
accessibilityEnhancer.init();
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'utils', 'accessibilityEnhancer.ts'), accessibilityScript);
console.log('✅ Created accessibility enhancer utility');

console.log('🎉 Performance optimization completed!');