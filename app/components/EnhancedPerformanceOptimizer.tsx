'use client';
import React, { useEffect, useCallback } from 'react';

interface EnhancedPerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enablePrefetching?: boolean;
  enableServiceWorker?: boolean;
  enableCriticalCSS?: boolean;
  enableResourceHints?: boolean;
  enableWebVitals?: boolean;
}

const EnhancedPerformanceOptimizer: React.FC<EnhancedPerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enablePrefetching = true,
  enableServiceWorker = true,
  enableCriticalCSS = true,
  enableResourceHints = true,
  enableWebVitals = true
}) => {
  // Register Service Worker
  useEffect(() => {
    if (enableServiceWorker && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, [enableServiceWorker]);

  // Web Vitals monitoring
  useEffect(() => {
    if (enableWebVitals && typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => {
          console.log('CLS:', metric);
          // Send to analytics
          if ('gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'CLS',
              value: Math.round(metric.value * 1000)
            });
          }
        });

        getFID((metric) => {
          console.log('FID:', metric);
          if ('gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'FID',
              value: Math.round(metric.value)
            });
          }
        });

        getFCP((metric) => {
          console.log('FCP:', metric);
          if ('gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'FCP',
              value: Math.round(metric.value)
            });
          }
        });

        getLCP((metric) => {
          console.log('LCP:', metric);
          if ('gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'LCP',
              value: Math.round(metric.value)
            });
          }
        });

        getTTFB((metric) => {
          console.log('TTFB:', metric);
          if ('gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'TTFB',
              value: Math.round(metric.value)
            });
          }
        });
      });
    }
  }, [enableWebVitals]);

  // Image optimization
  useEffect(() => {
    if (enableImageOptimization && typeof window !== 'undefined') {
      const optimizeImages = () => {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
          const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement;
                const src = img.getAttribute('data-src');
                
                if (src) {
                  // Check for WebP support
                  const canvas = document.createElement('canvas');
                  const webpSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
                  
                  if (webpSupported && !src.includes('.webp')) {
                    img.src = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
                  } else {
                    img.src = src;
                  }
                  
                  img.removeAttribute('data-src');
                  img.classList.add('loaded');
                  observer.unobserve(img);
                }
              }
            });
          });

          images.forEach((img) => imageObserver.observe(img));
        } else {
          // Fallback for older browsers
          images.forEach((img) => {
            const src = img.getAttribute('data-src');
            if (src) {
              (img as HTMLImageElement).src = src;
              img.removeAttribute('data-src');
            }
          });
        }
      };

      // Run optimization after DOM is loaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', optimizeImages);
      } else {
        optimizeImages();
      }
    }
  }, [enableImageOptimization]);

  // Prefetch critical resources
  useEffect(() => {
    if (enablePrefetching && typeof window !== 'undefined') {
      const prefetchResources = () => {
        const criticalResources = [
          '/css/critical.css',
          '/fonts/inter-var.woff2',
          '/js/vendor.js',
          '/js/main.js'
        ];

        criticalResources.forEach((resource) => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = resource;
          document.head.appendChild(link);
        });
      };

      // Prefetch on idle
      if ('requestIdleCallback' in window) {
        requestIdleCallback(prefetchResources);
      } else {
        setTimeout(prefetchResources, 100);
      }
    }
  }, [enablePrefetching]);

  // Critical CSS inlining
  useEffect(() => {
    if (enableCriticalCSS && typeof window !== 'undefined') {
      const inlineCriticalCSS = () => {
        const criticalCSS = `
          /* Critical CSS for above-the-fold content */
          body { font-family: 'Inter', sans-serif; }
          .cyber-grid { background: #0a0a0a; }
          .neon-text { color: #00ffff; }
          .cyber-button { background: linear-gradient(135deg, #00ffff, #8b5cf6); }
        `;
        
        const style = document.createElement('style');
        style.textContent = criticalCSS;
        document.head.insertBefore(style, document.head.firstChild);
      };

      inlineCriticalCSS();
    }
  }, [enableCriticalCSS]);

  // Resource hints
  useEffect(() => {
    if (enableResourceHints && typeof window !== 'undefined') {
      const addResourceHints = () => {
        const hints = [
          { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
          { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
          { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
          { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
          { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
        ];

        hints.forEach((hint) => {
          const link = document.createElement('link');
          Object.entries(hint).forEach(([key, value]) => {
            link.setAttribute(key, value);
          });
          document.head.appendChild(link);
        });
      };

      addResourceHints();
    }
  }, [enableResourceHints]);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          totalTime: navigation.loadEventEnd - navigation.fetchStart
        };

        console.log('Performance Metrics:', metrics);
        
        // Send to analytics
        if ('gtag' in window) {
          (window as any).gtag('event', 'performance_metrics', {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(metrics.totalTime)
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    if (enableWebVitals) {
      measurePerformance();
    }
  }, [measurePerformance, enableWebVitals]);

  return null;
};

export default EnhancedPerformanceOptimizer;