'use client';

import React,{ useEffect, useMemo } from 'react';
import { usePerformanceMonitor  } from '../hooks/usePerformanceMonitor';

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
    if (!enableImageOptimization || typeof window ==='undefined') return;

    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute('data-src');
            if (src) {
              img.src = src;
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
    if (document.readyState ==='loading') {
      document.addEventListener('DOMContentLoaded', optimizeImages);
    } else {
      optimizeImages();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', optimizeImages);
    };
  },[enableImageOptimization]);

  // Lazy loading for components
  useEffect(() => {
    if (!enableLazyLoading || typeof window ==='undefined') return;

    const lazyLoadComponents = () => {
      const components = document.querySelectorAll('[data-lazy-component]');
      const componentObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const component = entry.target as HTMLElement;
            const component = component.getAttribute('data-lazy-component');
            if (componentName) {
              // Load component dynamically
              import(`../components/${componentName}.tsx`).then((_module) => {
                component.innerHTML ='';
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

    if (document.readyState ==='loading') {
      document.addEventListener('DOMContentLoaded', lazyLoadComponents);
    } else {
      lazyLoadComponents();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', lazyLoadComponents);
    };
  },[enableLazyLoading]);

  // Resource preloading
  useEffect(() => {
    if (!enablePreloading || typeof window ==='undefined') return;

    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontPreloads =[
    { href:'/fonts/inter-var.woff2', as:'font', type:'font/woff2', crossorigin:'anonymous' },{ href:'/fonts/inter-var.woff', as:'font', type:'font/woff', crossorigin:'anonymous' }
      ];

      fontPreloads.forEach((font) => {
        const link = document.createElement('link');
        link.rel ='preload';
        link.href = font.href;
        link.as = font.as;
        link.type= font.type;
        if (font.crossorigin) link.crossOrigin = font.crossorigin;
        document.head.appendChild(link);
      });

      // Preload critical images
      const imagePreloads =[
        '/images/hero-bg.webp','/images/logo.webp','/images/og-image.webp'
      ];

      imagePreloads.forEach((src) => {
        const link = document.createElement('link');
        link.rel ='preload';
        link.href = src;
        link.as ='image';
        document.head.appendChild(link);
      });

      // Preload critical scripts
      const scriptPreloads =[
        '/assets/vendor-react.js','/assets/vendor-ui.js'
      ];

      scriptPreloads.forEach((src) => {
        const link = document.createElement('link');
        link.rel ='modulepreload';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
  },[enablePreloading]);

  // Service Worker registration
  useEffect(() => {
    if (!enableServiceWorker || typeof window ==='undefined') return;

    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.warn('Service Worker registered successfully:', registration);
          
          // Service worker registered successfully
          console.warn('Service Worker scope:', registration.scope);
        } catch (error) {
          console.warn('Service Worker registration failed:', error);
          console.warn('Service Worker error details:', error instanceof Error ? error.message :'Unknown error');
        }
      }
    };

    registerServiceWorker();
  },[enableServiceWorker]);

  // Resource hints
  useEffect(() => {
    if (!enableResourceHints || typeof window ==='undefined') return;

    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetchDomains =[
        'fonts.googleapis.com','fonts.gstatic.com','www.google-analytics.com','www.googletagmanager.com'
      ];

      dnsPrefetchDomains.forEach((domain) => {
        const link = document.createElement('link');
        link.rel ='dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect to critical origins
      const preconnectOrigins =[
        'https://fonts.googleapis.com','https://fonts.gstatic.com'
      ];

      preconnectOrigins.forEach((origin) => {
        const link = document.createElement('link');
        link.rel ='preconnect';
        link.href = origin;
        link.crossOrigin ='anonymous';
        document.head.appendChild(link);
      });
    };

    addResourceHints();
  },[enableResourceHints]);

  // Critical CSS inlining
  useEffect(() => {
    if (!enableCriticalCSS || typeof window ==='undefined') return;

    const inlineCriticalCSS = () => {
      // Check if criticalCSS is already inlined
      if (document.querySelector('#critical-css')) return;

      const criticalCSS = `
        /* Critical CSS for above-the-fold content */
        .hero-section { min-height: 100 vh; }
        .navigation { position: fixed; top: 0; width: 100%; z-index: 50; }
        .loading-skeleton { background: linear-gradient(90deg, #f-0f-0f-025%, #e-0e-0e-050%, #f-0f-0f-075%); }
      `;

      const style = document.createElement('style');
      style.id ='critical-css';
      style.textContent = criticalCSS;
      document.head.insertBefore(style, document.head.firstChild);
    };

    inlineCriticalCSS();
  },[enableCriticalCSS]);

  // Bundle analysis and optimization
  useEffect(() => {
    if (!enableBundleAnalysis || typeof window ==='undefined') return;

    const analyzeBundle = () => {
      // Track bundle size
      const scripts = Array.from(document.scripts);
      const totalScriptSize = scripts.reduce((total, script) => {
        return total + (script.src ? 0 : script.textContent?.length || 0);
      }, 0);

      console.warn('Bundle analysis:',{ 
        scriptCount: scripts.length,
        totalSize: totalScriptSize,
        averageSize: totalScriptSize / scripts.length
      });

      // Track resource loading times
      const resources = performance.getEntriesByType('resource');
      const resourceMetrics = resources.reduce((acc, resource) => {
        const type = resource.name.split('.').pop() || 'unknown';
        if (!acc[type]) acc[type] ={ count: 0, totalSize: 0, totalTime: 0 };
        acc[type].count++;
        acc[type].totalSize += resource.transferSize || 0;
        acc[type].totalTime += resource.duration;
        return acc;
      },{} as Record<string,{ count: number; totalSize: number; totalTime: number }>);

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
      const elements = document.querySelectorAll('[data-animate]');
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

    window.addEventListener('scroll', debouncedScroll,{ passive: true });
    window.addEventListener('resize', throttledResize,{ passive: true });

    performanceOptimizations.optimizeAnimations();

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      window.removeEventListener('resize', throttledResize);
    };
  },[performanceOptimizations]);

  return null;
};

export default AdvancedPerformanceOptimizer;