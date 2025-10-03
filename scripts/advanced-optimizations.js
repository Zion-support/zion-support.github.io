// Advanced optimizations and enhancements
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting advanced optimizations...');

// 1. Advanced performance optimizations
const advancedPerformance = {
  // Bundle optimization
  bundleOptimizer: `
// Bundle optimization utilities
export const bundleOptimizer = {
  // Code splitting configuration
  getCodeSplittingConfig: () => ({
    chunks: 'all',
    cacheGroups: {
      vendor: {
        test: /[\\\\/]node_modules[\\\\/]/,
        name: 'vendors',
        chunks: 'all',
        priority: 10
      },
      common: {
        name: 'common',
        minChunks: 2,
        chunks: 'all',
        priority: 5
      }
    }
  }),
  
  // Preload critical resources
  preloadCriticalResources: () => {
    const criticalResources = [
      '/fonts/main-font.woff2',
      '/images/hero-image.webp',
      '/critical.css'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'image';
      document.head.appendChild(link);
    });
  },
  
  // Resource hints
  addResourceHints: () => {
    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://api.zion.ai' },
      { rel: 'prefetch', href: '/pages/about' }
    ];
    
    hints.forEach(hint => {
      const link = document.createElement('link');
      Object.assign(link, hint);
      document.head.appendChild(link);
    });
  }
};
`,
  
  // Memory management
  memoryManagement: `
// Memory management utilities
export const memoryManager = {
  // WeakMap for caching without memory leaks
  createWeakCache: () => {
    const cache = new WeakMap();
    return {
      get: (key) => cache.get(key),
      set: (key, value) => cache.set(key, value),
      has: (key) => cache.has(key)
    };
  },
  
  // Cleanup function registry
  createCleanupRegistry: () => {
    const cleanupFunctions = new Set();
    
    return {
      register: (fn) => cleanupFunctions.add(fn),
      cleanup: () => {
        cleanupFunctions.forEach(fn => {
          try { fn(); } catch (e) { console.error('Cleanup error:', e); }
        });
        cleanupFunctions.clear();
      }
    };
  },
  
  // Debounced function with memory cleanup
  createDebouncedFunction: (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }
};
`
};

// 2. Advanced security features
const advancedSecurity = {
  // Rate limiting
  rateLimiting: `
// Rate limiting utilities
export const rateLimiter = {
  // Simple in-memory rate limiter
  createRateLimiter: (maxRequests, windowMs) => {
    const requests = new Map();
    
    return (identifier) => {
      const now = Date.now();
      const windowStart = now - windowMs;
      
      // Clean old entries
      for (const [key, timestamps] of requests.entries()) {
        const validTimestamps = timestamps.filter(ts => ts > windowStart);
        if (validTimestamps.length === 0) {
          requests.delete(key);
        } else {
          requests.set(key, validTimestamps);
        }
      }
      
      // Check current user
      const userRequests = requests.get(identifier) || [];
      const validRequests = userRequests.filter(ts => ts > windowStart);
      
      if (validRequests.length >= maxRequests) {
        return false; // Rate limit exceeded
      }
      
      validRequests.push(now);
      requests.set(identifier, validRequests);
      return true;
    };
  },
  
  // API rate limiter
  createAPIRateLimiter: () => {
    const limiter = rateLimiter.createRateLimiter(100, 60000); // 100 requests per minute
    
    return async (req, res, next) => {
      const identifier = req.ip || req.headers['x-forwarded-for'];
      
      if (!limiter(identifier)) {
        return res.status(429).json({ error: 'Rate limit exceeded' });
      }
      
      next();
    };
  }
};
`,
  
  // Security headers
  securityHeaders: `
// Security headers configuration
export const securityHeaders = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': \`
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data: https:;
    connect-src 'self' https://api.zion.ai;
  \`
};

export const applySecurityHeaders = (res) => {
  Object.entries(securityHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
};
`
};

// 3. Advanced SEO features
const advancedSEO = {
  // Sitemap generator
  sitemapGenerator: `
// Dynamic sitemap generator
export const sitemapGenerator = {
  generateSitemap: (routes) => {
    const baseUrl = 'https://zion.ai';
    const sitemap = \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
\`;
    
    const routesXml = routes.map(route => {
      const priority = route.priority || 0.5;
      const changefreq = route.changefreq || 'weekly';
      const lastmod = route.lastmod || new Date().toISOString().split('T')[0];
      
      return \`  <url>
    <loc>\${baseUrl}\${route.path}</loc>
    <lastmod>\${lastmod}</lastmod>
    <changefreq>\${changefreq}</changefreq>
    <priority>\${priority}</priority>
  </url>\`;
    }).join('\\n');
    
    return sitemap + routesXml + '\\n</urlset>';
  },
  
  // Robots.txt generator
  generateRobotsTxt: (options = {}) => {
    const { allowCrawl = true, sitemapUrl = 'https://zion.ai/sitemap.xml' } = options;
    
    if (!allowCrawl) {
      return 'User-agent: *\\nDisallow: /';
    }
    
    return \`User-agent: *
Allow: /

Sitemap: \${sitemapUrl}\`;
  }
};
`,
  
  // Schema markup generator
  schemaMarkup: `
// Advanced schema markup generator
export const schemaMarkup = {
  // Generate FAQ schema
  generateFAQSchema: (faqs) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
  },
  
  // Generate service schema
  generateServiceSchema: (service) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'Organization',
        name: 'Zion AI',
        url: 'https://zion.ai'
      },
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: \`https://zion.ai/services/\${service.slug}\`
      }
    };
  },
  
  // Generate breadcrumb schema
  generateBreadcrumbSchema: (breadcrumbs) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: \`https://zion.ai\${crumb.url}\`
      }))
    };
  }
};
`
};

// 4. Advanced accessibility features
const advancedAccessibility = {
  // Screen reader optimizations
  screenReaderOptimizations: `
// Advanced screen reader optimizations
export const screenReaderOptimizations = {
  // Live region for dynamic content
  createLiveRegion: (type = 'polite') => {
    const region = document.createElement('div');
    region.setAttribute('aria-live', type);
    region.setAttribute('aria-atomic', 'true');
    region.className = 'sr-only';
    document.body.appendChild(region);
    
    return {
      announce: (message) => {
        region.textContent = message;
      },
      remove: () => {
        document.body.removeChild(region);
      }
    };
  },
  
  // Skip links
  createSkipLinks: () => {
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];
    
    const container = document.createElement('div');
    container.className = 'skip-links';
    
    skipLinks.forEach(link => {
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.text;
      a.className = 'skip-link';
      container.appendChild(a);
    });
    
    document.body.insertBefore(container, document.body.firstChild);
  },
  
  // High contrast mode detection
  detectHighContrastMode: () => {
    return window.matchMedia('(prefers-contrast: high)').matches;
  },
  
  // Reduced motion detection
  detectReducedMotion: () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
};
`,
  
  // Keyboard navigation enhancements
  keyboardNavigation: `
// Advanced keyboard navigation
export const keyboardNavigation = {
  // Roving tabindex pattern
  createRovingTabindex: (container) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    // Set initial tabindex
    focusableElements.forEach((el, index) => {
      el.setAttribute('tabindex', index === 0 ? '0' : '-1');
      el.setAttribute('data-roving-index', index.toString());
    });
    
    // Handle focus events
    const handleFocus = (e) => {
      focusableElements.forEach(el => {
        el.setAttribute('tabindex', '-1');
      });
      e.target.setAttribute('tabindex', '0');
    };
    
    focusableElements.forEach(el => {
      el.addEventListener('focus', handleFocus);
    });
    
    return () => {
      focusableElements.forEach(el => {
        el.removeEventListener('focus', handleFocus);
      });
    };
  },
  
  // Arrow key navigation
  createArrowKeyNavigation: (container, options = {}) => {
    const {
      orientation = 'horizontal',
      loop = true,
      onSelect = () => {}
    } = options;
    
    const focusableElements = Array.from(container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ));
    
    let currentIndex = 0;
    
    const handleKeyDown = (e) => {
      const { key } = e;
      let nextIndex = currentIndex;
      
      if (orientation === 'horizontal') {
        if (key === 'ArrowLeft') {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : (loop ? focusableElements.length - 1 : currentIndex);
        } else if (key === 'ArrowRight') {
          nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : (loop ? 0 : currentIndex);
        }
      } else {
        if (key === 'ArrowUp') {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : (loop ? focusableElements.length - 1 : currentIndex);
        } else if (key === 'ArrowDown') {
          nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : (loop ? 0 : currentIndex);
        }
      }
      
      if (nextIndex !== currentIndex) {
        e.preventDefault();
        currentIndex = nextIndex;
        focusableElements[currentIndex].focus();
        onSelect(currentIndex);
      }
    };
    
    container.addEventListener('keydown', handleKeyDown);
    
    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }
};
`
};

// Write advanced optimizations to files
const advancedOptimizations = {
  ...advancedPerformance,
  ...advancedSecurity,
  ...advancedSEO,
  ...advancedAccessibility
};

// Create directories if they don't exist
const utilsDir = path.join(__dirname, '..', 'src', 'utils');

if (!fs.existsSync(utilsDir)) {
  fs.mkdirSync(utilsDir, { recursive: true });
}

// Write advanced utility files
Object.entries(advancedOptimizations).forEach(([name, content]) => {
  const fileName = `advanced${name.charAt(0).toUpperCase() + name.slice(1)}.ts`;
  const filePath = path.join(utilsDir, fileName);
  
  try {
    fs.writeFileSync(filePath, content.trim());
    console.log(`✅ Created ${fileName}`);
  } catch (error) {
    console.error(`❌ Failed to create ${fileName}:`, error.message);
  }
});

// Create advanced optimization report
const advancedReport = {
  timestamp: new Date().toISOString(),
  optimizations: Object.keys(advancedOptimizations),
  summary: {
    performance: Object.keys(advancedPerformance).length,
    security: Object.keys(advancedSecurity).length,
    seo: Object.keys(advancedSEO).length,
    accessibility: Object.keys(advancedAccessibility).length
  }
};

fs.writeFileSync(
  path.join(__dirname, '..', 'advanced-improvements-report.json'),
  JSON.stringify(advancedReport, null, 2)
);

console.log('🎉 Advanced optimizations completed!');
console.log('📊 Summary:', advancedReport.summary);
console.log('📝 Report saved to advanced-improvements-report.json');