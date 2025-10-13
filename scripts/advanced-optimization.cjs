const fs = require('fs');
const path = require('path');

// Advanced optimization script for Zion Tech Group website
console.log('🚀 Starting advanced optimization...');

// 1. Optimize Vite configuration for better code splitting
const viteConfigPath = '/workspace/vite.config.ts';
let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');

// Enhanced manual chunks configuration
const enhancedChunksConfig = `
        manualChunks: (id) => {
          // Core React libraries - keep together for better caching
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          // Router - separate chunk
          if (id.includes('react-router')) {
            return 'router'
          }
          // UI libraries - group animations and icons
          if (id.includes('framer-motion')) {
            return 'ui-animations'
          }
          if (id.includes('lucide-react')) {
            return 'ui-icons'
          }
          // SEO and meta - separate chunk
          if (id.includes('react-helmet')) {
            return 'seo'
          }
          // Charts and data visualization
          if (id.includes('recharts')) {
            return 'charts'
          }
          // Utility libraries - group small utilities
          if (id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'utils'
          }
          // Performance monitoring - separate chunk
          if (id.includes('web-vitals')) {
            return 'performance'
          }
          // Error handling - separate chunk
          if (id.includes('react-error-boundary')) {
            return 'error-handling'
          }
          // Group AI service pages by category for better caching
          if (id.includes('/ai-') && id.includes('/page.tsx')) {
            if (id.includes('analytics') || id.includes('data')) {
              return 'ai-analytics'
            }
            if (id.includes('content') || id.includes('generation')) {
              return 'ai-content'
            }
            if (id.includes('cybersecurity') || id.includes('security')) {
              return 'ai-security'
            }
            if (id.includes('crm') || id.includes('customer')) {
              return 'ai-crm'
            }
            return 'ai-services'
          }
          // Group Zion service pages by type
          if (id.includes('/zion-') && id.includes('/page.tsx')) {
            if (id.includes('analytics') || id.includes('data')) {
              return 'zion-analytics'
            }
            if (id.includes('video') || id.includes('content')) {
              return 'zion-content'
            }
            if (id.includes('security') || id.includes('shield')) {
              return 'zion-security'
            }
            return 'zion-services'
          }
          // Group 5G service pages
          if (id.includes('/5g-') && id.includes('/page.tsx')) {
            return '5g-services'
          }
          // Main pages - group core pages together
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/zion-') && !id.includes('/5g-')) {
            return 'main-pages'
          }
          // Components - group by type for better caching
          if (id.includes('/components/')) {
            if (id.includes('Performance') || id.includes('Analytics')) {
              return 'components-performance'
            }
            if (id.includes('SEO') || id.includes('Accessibility')) {
              return 'components-seo'
            }
            if (id.includes('Loading') || id.includes('Error')) {
              return 'components-ui'
            }
            if (id.includes('Futuristic') || id.includes('Responsive')) {
              return 'components-ui-advanced'
            }
            return 'components-common'
          }
          // Default chunk for other modules
          return 'vendor'
        },`;

// Replace the existing manualChunks configuration
viteConfig = viteConfig.replace(
  /manualChunks: \(id\) => \{[\s\S]*?\},/,
  enhancedChunksConfig
);

// Add more aggressive optimization settings
const optimizationSettings = `
    // Enhanced build optimizations
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
      output: {
        ${enhancedChunksConfig}
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        // Add more aggressive minification
        compact: true,
        // Better tree shaking
        exports: 'named',
        // Optimize for production
        format: 'es',
        sourcemap: false,
      },
    },`;

// Update the build configuration
viteConfig = viteConfig.replace(
  /rollupOptions: \{[\s\S]*?\},/,
  optimizationSettings
);

fs.writeFileSync(viteConfigPath, viteConfig);
console.log('✅ Enhanced Vite configuration for better code splitting');

// 2. Create lazy loading wrapper for service pages
const lazyWrapperTemplate = `import { lazy, Suspense } from 'react';
import EnhancedLoadingSpinner from '../components/EnhancedLoadingSpinner';

const LazyPage = lazy(() => import('./[PAGE_NAME]'));

export default function LazyPageWrapper() {
  return (
    <Suspense fallback={<EnhancedLoadingSpinner />}>
      <LazyPage />
    </Suspense>
  );
}`;

// 3. Create performance monitoring component
const performanceMonitor = `import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);

    // Monitor bundle loading performance
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', {
              domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
              loadComplete: entry.loadEventEnd - entry.loadEventStart,
              totalTime: entry.loadEventEnd - entry.navigationStart
            });
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  }, []);

  return null;
}`;

fs.writeFileSync('/workspace/app/components/PerformanceMonitor.tsx', performanceMonitor);
console.log('✅ Created performance monitoring component');

// 4. Create SEO optimization component
const seoOptimizer = `import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

export default function SEOOptimizer({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.',
  keywords = 'AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology',
  canonical = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData
}: SEOOptimizerProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://ziontechgroup.com" />
    </Helmet>
  );
}`;

fs.writeFileSync('/workspace/app/components/SEOOptimizer.tsx', seoOptimizer);
console.log('✅ Created SEO optimization component');

// 5. Create accessibility enhancement component
const accessibilityEnhancer = `import { useEffect } from 'react';

export default function AccessibilityEnhancer() {
  useEffect(() => {
    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Enhance focus management
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const focusable = document.querySelectorAll(focusableElements);
        const firstElement = focusable[0] as HTMLElement;
        const lastElement = focusable[focusable.length - 1] as HTMLElement;

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

    document.addEventListener('keydown', handleKeyDown);

    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}`;

fs.writeFileSync('/workspace/app/components/AccessibilityEnhancer.tsx', accessibilityEnhancer);
console.log('✅ Created accessibility enhancement component');

// 6. Create mobile optimization component
const mobileOptimizer = `import { useEffect } from 'react';

export default function MobileOptimizer() {
  useEffect(() => {
    // Add viewport meta tag if not present
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
      document.head.appendChild(viewport);
    }

    // Add touch-friendly classes
    const addTouchClasses = () => {
      const buttons = document.querySelectorAll('button, a[role="button"]');
      buttons.forEach(button => {
        if (!button.classList.contains('touch-friendly')) {
          button.classList.add('touch-friendly', 'min-h-[44px]', 'min-w-[44px]');
        }
      });
    };

    // Initial setup
    addTouchClasses();

    // Re-run on DOM changes
    const observer = new MutationObserver(addTouchClasses);
    observer.observe(document.body, { childList: true, subtree: true });

    // Handle orientation changes
    const handleOrientationChange = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return null;
}`;

fs.writeFileSync('/workspace/app/components/MobileOptimizer.tsx', mobileOptimizer);
console.log('✅ Created mobile optimization component');

console.log('🎉 Advanced optimization completed!');
console.log('📊 Improvements made:');
console.log('  - Enhanced code splitting for better caching');
console.log('  - Added performance monitoring');
console.log('  - Improved SEO optimization');
console.log('  - Enhanced accessibility features');
console.log('  - Added mobile optimization');