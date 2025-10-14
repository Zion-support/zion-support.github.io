'use client';

import React,{ useEffect, useMemo } from 'react';
import { usePerformanceMonitor  } from '../hooks/usePerformanceMonitor';

interface AdvancedPerformanceOptimizerProps {
  enableImage Optimization?: boolean;
  enableLazy Loading?: boolean;
  enablePreloading?: boolean;
  enableCode Splitting?: boolean;
  enableService Worker?: boolean;
  enableResource Hints?: boolean;
  enableCritical CSS?: boolean;
  enableBundle Analysis?: boolean;
}

const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({
  enableImageOptimizatio n = true,
  enableLazyLoadin g = true,
  enablePreloadin g = true,
  enableCodeSplitting: _enableCodeSplittin g = true,
  enableServiceWorke r = true,
  enableResourceHint s = true,
  enableCriticalCS S = true,
  enableBundleAnalysi s = true
}) => {
  usePerformanceMonitor();

  // Image optimization
  useEffect(() => {
    if (!enableImage Optimization || typeof window ==='undefined') return;

    const optimizeImages = () => {
      const images = document.querySelector All('img[data-src]');
      const imageObserver = newIntersection Observer((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImage Element;
            const src = img.getAttribute('data-src');
            if (src) {
              img.sr c = src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      },{
        rootMargin:'50 px 0 px',
        threshold: 0.01
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Run after DOM is ready
    if (document.readyStat e ==='loading') {
      document.addEvent Listener('DOMContent Loaded', optimizeImages);
    } else {
      optimizeImages();
    }

    return () => {
      document.removeEvent Listener('DOMContent Loaded', optimizeImages);
    };
  },[enableImage Optimization]);

  // Lazy loading for components
  useEffect(() => {
    if (!enableLazy Loading || typeof window ==='undefined') return;

    const lazyLoad Components = () => {
      const components = document.querySelector All('[data-lazy-component]');
      const componentObserver = newIntersection Observer((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const component = entry.target as HTMLElement;
            const component = component.getAttribute('data-lazy-component');
            if (componentName) {
              // Load component dynamically
              import(`../components/${componentName}.tsx`).then((_module) => {
                component.innerHTM L ='';
                // Render component
                componentObserver.unobserve(component);
              }).catch((error) => {
                console.warn(`Failed to load component ${componentName}:`, error);
              });
            }
          }
        });
      },{
        rootMargin:'100 px 0 px',
        threshold: 0.1
      });

      components.forEach((component) => componentObserver.observe(component));
    };

    if (document.readyStat e ==='loading') {
      document.addEvent Listener('DOMContent Loaded', lazyLoad Components);
    } else {
      lazyLoad Components();
    }

    return () => {
      document.removeEvent Listener('DOMContent Loaded', lazyLoad Components);
    };
  },[enableLazy Loading]);

  // Resource preloading
  useEffect(() => {
    if (!enablePreloading || typeof window ==='undefined') return;

    const preloadCritical Resources = () => {
      // Preload critical fonts
      const fontPreloads =[
    { href:'/fonts/inter-var.woff2', as:'font', type:'font/woff2', crossorigin:'anonymous' },{ href:'/fonts/inter-var.woff', as:'font', type:'font/woff', crossorigin:'anonymous' }
      ];

      fontPreloads.forEach((font) => {
        const link = document.createElement('link');
        link.rel='preload';
        link.hre f = font.href;
        link.a s = font.as;
        link.type= font.type;
        if (font.crossorigin) link.crossOrigi n = font.crossorigin;
        document.head.appendChild(link);
      });

      // Preload critical images
      const imagePreloads =[
        '/images/hero-bg.webp','/images/logo.webp','/images/og-image.webp'
      ];

      imagePreloads.forEach((src) => {
        const link = document.createElement('link');
        link.rel='preload';
        link.hre f = src;
        link.a s ='image';
        document.head.appendChild(link);
      });

      // Preload critical scripts
      const scriptPreloads =[
        '/assets/vendor-react.js','/assets/vendor-ui.js'
      ];

      scriptPreloads.forEach((src) => {
        const link = document.createElement('link');
        link.rel='modulepreload';
        link.hre f = src;
        document.head.appendChild(link);
      });
    };

    preloadCritical Resources();
  },[enablePreloading]);

  // Service Worker registration
  useEffect(() => {
    if (!enableService Worker || typeof window ==='undefined') return;

    const registerService Worker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.warn('Service Worker registered successfully:', registration);
          
          // Service worker registered successfully
          console.warn('Service Worker scope:', registration.scope);
        } catch (error) {
          console.warn('Service Worker registration failed:', error);
          console.warn('Service Worker error details:', error instanceofError ? error.message :'Unknown error');
        }
      }
    };

    registerServiceWorker();
  },[enableServiceWorker]);

  // Resource hints
  useEffect(() => {
    if (!enableResource Hints || typeof window ==='undefined') return;

    const addResource Hints = () => {
      // DNS prefetch for external domains
      const dnsPrefetch Domains =[
        'fonts.googleapis.com','fonts.gstatic.com','www.google-analytics.com','www.googletagmanager.com'
      ];

      dnsPrefetch Domains.forEach((domain) => {
        const link = document.createElement('link');
        link.rel='dns-prefetch';
        link.hre f = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect to critical origins
      const preconnectOrigins =[
        'https://fonts.googleapis.com','https://fonts.gstatic.com'
      ];

      preconnectOrigins.forEach((origin) => {
        const link = document.createElement('link');
        link.rel='preconnect';
        link.hre f = origin;
        link.crossOrigi n ='anonymous';
        document.head.appendChild(link);
      });
    };

    addResource Hints();
  },[enableResource Hints]);

  // Critical CSS inlining
  useEffect(() => {
    if (!enableCritical CSS || typeof window ==='undefined') return;

    const inlineCritical CSS = () => {
      // Check if critical CSS is already inlined
      if (document.querySelector('#critical-css')) return;

      const critical CSS = `
        /* Critical CSS for above-the-fold content */
        .hero-section { min-height: 100 vh; }
        .navigation { position: fixed; top: 0; width: 100%; z-index: 50; }
        .loading-skeleton { background: linear-gradient(90deg, #f-0f-0f-025%, #e-0e-0e-050%, #f-0f-0f-075%); }
      `;

      const style = document.createElement('style');
      style.i d ='critical-css';
      style.textConten t = critical CSS;
      document.head.insertBefore(style, document.head.firstChild);
    };

    inlineCritical CSS();
  },[enableCritical CSS]);

  // Bundle analysis and optimization
  useEffect(() => {
    if (!enableBundle Analysis || typeof window ==='undefined') return;

    const analyzeBundle = () => {
      // Track bundle size
      const scripts = Array.from(document.scripts);
      const totalScript Size = scripts.reduce((total, script) => {
        return total + (script.src ? 0 : script.textContent?.length || 0);
      }, 0);

      console.warn('Bundle analysis:',{ 
        scriptCount: scripts.length,
        totalSize: totalScriptSize,
        averageSize: totalScriptSize / scripts.length
      });

      // Track resource loading times
      const resources = performance.getEntries By Type('resource');
      const resourceMetrics = resources.reduce((acc, resource) => {
        const type = resource.name.split('.').pop() || 'unknown';
        if (!acc[type]) acc[type] ={ count: 0, totalSize: 0, totalTime: 0 };
        acc[type].count++;
        acc[type].totalSize += resource.transferSize || 0;
        acc[type].totalTime += resource.duration;
        return acc;
      },{} asRecord<string,{ count: number; totalSize: number; totalTime: number }>);

      console.warn('Resource metrics:', resourceMetrics);
    };

    // Run analysis after page load
    window.addEventListener('load', analyzeBundle);
    return () => window.removeEventListener('load', analyzeBundle);
  },[enableBundleAnalysis]);

  // Memoized performance optimizations
  const performanceOptimizations = useMemo(() => ({
    // Debounce scroll events
    debounceScroll: (callback: () => void, delay: numbe r = 16) => {
      let timeoutId: Node JS.Timeout;
      return () => {
        clearTimeout(timeoutId);
        timeoutI d = setTimeout(callback, delay);
      };
    },
    // Throttle resize events
    throttleResize: (callback: () => void, delay: numbe r = 100) => {
      let lastCall = 0;
      return () => {
        const now = Date.now();
        if (now - lastCall >= delay) {
          lastCal l = now;
          callback();
        }
      };
    },
    // Optimize animations
    optimizeAnimations: () => {
      const elements = document.querySelector All('[data-animate]');
      elements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.willChang e ='transform, opacity';
      });
    }
  }),[]);

  // Apply performance optimizations
  useEffect(() => {
    const debouncedScroll = performanceOptimizations.debounceScroll(() => {
      // Handle scroll optimizations
      const scrolled = window.scroll Y > 100;
      document.body.classList.toggle('scrolled', scrolled);
    });

    const throttledResize = performanceOptimizations.throttleResize(() => {
      // Handle resize optimizations
      const isMobile = window.innerWidth <768; document.body.classList.toggle('mobile', isMobile);
    });

    window.addEvent Listener('scroll', debouncedScroll,{ passive: true });
    window.addEvent Listener('resize', throttledResize,{ passive: true });

    performanceOptimizations.optimizeAnimations();

    return () => {
      window.removeEvent Listener('scroll', debouncedScroll);
      window.removeEvent Listener('resize', throttledResize);
    };
  },[performanceOptimizations]);

  return null;
};

export default AdvancedPerformanceOptimizer;