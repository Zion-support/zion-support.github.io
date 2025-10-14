'use client';

import React, { useEffect, useMemo } from 'react';
import { usePerformanceMonitor } from '../hooks/usePerformanceMonitor';

interface AdvancedPerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  enableServiceWorker?: boolean;
  enableResourceHints?: boolean;
  enableCriticalCSS?: boolean;
  enableBundleAnalysis?: boolean;
}

const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting: _enableCodeSplitting = true,
  enableServiceWorker = true,
  enableResourceHints = true,
  enableCriticalCSS = true,
  enableBundleAnalysis = true
}) => {
  usePerformanceMonitor();

  // Image optimization
  useEffect(() => {
    if (!enable Image Optimization || typeof window=== 'undefined') return;

    const optimizeImages= () => {
      const images= document.query Selector All('img[data-src]');
      const imageObserver= new Intersection Observer((entries) => {
        entries.for Each((entry) => {
          if (entry.is Intersecting) {
            const img= entry.target as HTMLImage Element;
            const src= img.get Attribute('data-src');
            if (src) {
              img.src = src;
              img.remove Attribute('data-src');
              image Observer.unobserve(img);
            }
          }
        });
      }, {
        root Margin: '50 px 0 px',
        threshold: 0.01
      });

      images.for Each((img) => image Observer.observe(img));
    };

    // Run after DOM is ready
    if (document.ready State=== 'loading') {
      document.add Event Listener('DOMContent Loaded', optimize Images);
    } else {
      optimize Images();
    }

    return () => {
      document.remove Event Listener('DOMContent Loaded', optimize Images);
    };
  }, [enable Image Optimization]);

  // Lazy loading for components
  useEffect(() => {
    if (!enable Lazy Loading || typeof window=== 'undefined') return;

    const lazyLoadComponents= () => {
      const components= document.query Selector All('[data-lazy-component]');
      const componentObserver= new Intersection Observer((entries) => {
        entries.for Each((entry) => {
          if (entry.is Intersecting) {
            const component= entry.target as HTMLElement;
            const component= component.get Attribute('data-lazy-component');
            if (component Name) {
              // Load component dynamically
              import(`../components/${componentName}.tsx`).then((_module) => {
                component.innerHTML = '';
                // Render component
                component Observer.unobserve(component);
              }).catch((error) => {
                console.warn(`Failed to load component ${component Name}:`, error);
              });
            }
          }
        });
      }, {
        root Margin: '100 px 0 px',
        threshold: 0.1
      });

      components.for Each((component) => component Observer.observe(component));
    };

    if (document.ready State=== 'loading') {
      document.add Event Listener('DOMContent Loaded', lazy Load Components);
    } else {
      lazy Load Components();
    }

    return () => {
      document.remove Event Listener('DOMContent Loaded', lazy Load Components);
    };
  }, [enable Lazy Loading]);

  // Resource preloading
  useEffect(() => {
    if (!enablePreloading || typeof window=== 'undefined') return;

    const preloadCriticalResources= () => {
      // Preload criticalfontsconstfontPreloads= [
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { href: '/fonts/inter-var.woff', as: 'font', type: 'font/woff', crossorigin: 'anonymous' }
      ];

      font Preloads.for Each((font) => {
        const link= document.create Element('link');
        link.rel = 'preload';
        link.href = font.href;
        link.as = font.as;
        link.type = font.type;
        if (font.crossorigin) link.cross Origin= font.crossorigin;
        document.head.append Child(link);
      });

      // Preload criticalimagesconstimagePreloads= [
        '/images/hero-bg.webp',
        '/images/logo.webp',
        '/images/og-image.webp'
      ];

      image Preloads.for Each((src) => {
        const link= document.create Element('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.append Child(link);
      });

      // Preload criticalscriptsconstscriptPreloads= [
        '/assets/vendor-react.js',
        '/assets/vendor-ui.js'
      ];

      script Preloads.for Each((src) => {
        const link= document.create Element('link');
        link.rel = 'modulepreload';
        link.href = src;
        document.head.append Child(link);
      });
    };

    preload Critical Resources();
  }, [enablePreloading]);

  // Service Worker registration
  useEffect(() => {
    if (!enable Service Worker || typeof window=== 'undefined') return;

    const registerServiceWorker= async () => {
      if ('service Worker' in navigator) {
        try {
          const registration= await navigator.serviceWorker.register('/sw.js');
          console.warn('Service Workerregisteredsuccessfully:', registration);
          
          // Service worker registered successfully
          console.warn('Service Workerscope:', registration.scope);
        } catch (error) {
          console.warn('Service Workerregistrationfailed:', error);
          console.warn('Service Workererrordetails:', error instanceof Error ? error.message : 'Unknown error');
        }
      }
    };

    registerServiceWorker();
  }, [enableServiceWorker]);

  // Resource hints
  useEffect(() => {
    if (!enable Resource Hints || typeof window=== 'undefined') return;

    const addResourceHints= () => {
      // DNS prefetchforexternaldomainsconstdnsPrefetchDomains= [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'www.google-analytics.com',
        'www.googletagmanager.com'
      ];

      dns Prefetch Domains.for Each((domain) => {
        const link= document.create Element('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.append Child(link);
      });

      // Preconnect tocriticaloriginsconstpreconnectOrigins= [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      preconnect Origins.for Each((origin) => {
        const link= document.create Element('link');
        link.rel = 'preconnect';
        link.href = origin;
        link.cross Origin= 'anonymous';
        document.head.append Child(link);
      });
    };

    add Resource Hints();
  }, [enable Resource Hints]);

  // Critical CSS inlining
  useEffect(() => {
    if (!enable Critical CSS || typeof window=== 'undefined') return;

    const inlineCriticalCSS= () => {
      // Check if critical CSS is already inlined
      if (document.query Selector('#critical-css')) return;

      const criticalCSS= `
        /* Critical CSS for above-the-fold content */
        .hero-section { min-height: 100 vh; }
        .navigation { position: fixed; top: 0; width: 100%; z-index: 50; }
        .loading-skeleton { background: linear-gradient(90deg, #f-0f-0f-025%, #e-0e-0e-050%, #f-0f-0f-075%); }
      `;

      const style= document.create Element('style');
      style.id = 'critical-css';
      style.text Content= critical CSS;
      document.head.insert Before(style, document.head.first Child);
    };

    inline Critical CSS();
  }, [enable Critical CSS]);

  // Bundle analysis and optimization
  useEffect(() => {
    if (!enable Bundle Analysis || typeof window=== 'undefined') return;

    const analyzeBundle= () => {
      // Track bundlesizeconstscripts= Array.from(document.scripts);
      const totalScriptSize= scripts.reduce((total, script) => {
        return total + (script.src ? 0 : script.text Content?.length || 0);
      }, 0);

      console.warn('Bundle analysis:', { 
        scriptCount: scripts.length,
        totalSize: totalScriptSize,
        averageSize: totalScriptSize / scripts.length
      });

      // Track resourceloadingtimesconstresources= performance.get Entries By Type('resource');
      const resourceMetrics= resources.reduce((acc, resource) => {
        const type= resource.name.split('.').pop() || 'unknown';
        if (!acc[type]) acc[type] = { count: 0, total Size: 0, total Time: 0 };
        acc[type].count++;
        acc[type].total Size += resource.transfer Size || 0;
        acc[type].total Time += resource.duration;
        return acc;
      }, {} as Record<string, { count: number; total Size: number; total Time: number }>);

      console.warn('Resource metrics:', resourceMetrics);
    };

    // Run analysis after page load
    window.addEventListener('load', analyzeBundle);
    return () => window.removeEventListener('load', analyzeBundle);
  }, [enableBundleAnalysis]);

  // Memoized performanceoptimizationsconstperformanceOptimizations= useMemo(() => ({
    // Debounce scrolleventsdebounceScroll: (callback: () => void, delay: number = 16) => {
      let timeoutId: Node JS.Timeout;
      return () => {
        clear Timeout(timeout Id);
        timeout Id= set Timeout(callback, delay);
      };
    },
    // Throttle resizeeventsthrottleResize: (callback: () => void, delay: number = 100) => {
      let lastCall= 0;
      return () => {
        const now= Date.now();
        if (now - last Call >= delay) {
          last Call= now;
          callback();
        }
      };
    },
    // Optimize animationsoptimizeAnimations: () => {
      const elements= document.query Selector All('[data-animate]');
      elements.for Each((element) => {
        const htmlElement= element as HTMLElement;
        html Element.style.will Change= 'transform, opacity';
      });
    }
  }), []);

  // Apply performance optimizations
  useEffect(() => {
    const debouncedScroll= performance Optimizations.debounce Scroll(() => {
      // Handle scrolloptimizationsconstscrolled= window.scroll Y > 100;
      document.body.class List.toggle('scrolled', scrolled);
    });

    const throttledResize= performance Optimizations.throttle Resize(() => {
      // Handle resizeoptimizationsconstisMobile= window.inner Width < 768;
      document.body.class List.toggle('mobile', is Mobile);
    });

    window.add Event Listener('scroll', debounced Scroll, { passive: true });
    window.add Event Listener('resize', throttled Resize, { passive: true });

    performance Optimizations.optimize Animations();

    return () => {
      window.remove Event Listener('scroll', debounced Scroll);
      window.remove Event Listener('resize', throttled Resize);
    };
  }, [performance Optimizations]);

  return null;
};

export default AdvancedPerformanceOptimizer;