import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Measure page load performance
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            const metrics = {
              // Time to First Byte
              ttfb: navigation.responseStart - navigation.requestStart,
              // DOM Content Loaded
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
              // Load Complete
              loadComplete: navigation.loadEventEnd - navigation.fetchStart,
              // First Contentful Paint (estimated)
              fcp: navigation.domContentLoadedEventEnd - navigation.fetchStart,
            };

            // Log performance metrics
            console.log('🚀 Performance Metrics:', metrics);

            // Send to analytics if available
            if (window.gtag) {
              window.gtag('event', 'performance_metrics', {
                event_category: 'Performance',
                event_label: 'Page Load',
                value: Math.round(metrics.loadComplete),
                custom_parameters: metrics
              });
            }
          }
        }, 0);
      });

      // Monitor Core Web Vitals
      if ('PerformanceObserver' in window) {
        try {
          // Largest Contentful Paint
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              console.log('🎯 LCP:', lastEntry.startTime);
              if (window.gtag) {
                window.gtag('event', 'core_web_vital', {
                  event_category: 'Web Vitals',
                  event_label: 'LCP',
                  value: Math.round(lastEntry.startTime)
                });
              }
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              const fidEntry = entry as PerformanceEntry & { processingStart: number };
              console.log('⚡ FID:', fidEntry.processingStart - fidEntry.startTime);
              if (window.gtag) {
                window.gtag('event', 'core_web_vital', {
                  event_category: 'Web Vitals',
                  event_label: 'FID',
                  value: Math.round(fidEntry.processingStart - fidEntry.startTime)
                });
              }
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            console.log('📐 CLS:', clsValue);
            if (window.gtag) {
              window.gtag('event', 'core_web_vital', {
                event_category: 'Web Vitals',
                event_label: 'CLS',
                value: Math.round(clsValue * 1000) / 1000
              });
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (error) {
          console.warn('Performance monitoring not supported:', error);
        }
      }
    }
  }, []);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (typeof window !== 'undefined') {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        // Add loading="lazy" for images below the fold
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }

        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }

        // Add error handling
        img.addEventListener('error', () => {
          img.style.display = 'none';
          console.warn('Image failed to load:', img.src);
        });

        // Add intersection observer for progressive loading
        if ('IntersectionObserver' in window) {
          const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement;
                if (img.dataset.src) {
                  img.src = img.dataset.src;
                  img.removeAttribute('data-src');
                  imageObserver.unobserve(img);
                }
              }
            });
          });

          imageObserver.observe(img);
        }
      });
    }
  }, []);

  // Resource hints optimization
  const addResourceHints = useCallback(() => {
    if (typeof window !== 'undefined' && !document.querySelector('link[rel="preconnect"][href="https://fonts.googleapis.com"]')) {
      // Add preconnect for external resources
      const preconnectLinks = [
        { href: 'https://fonts.googleapis.com', crossorigin: 'anonymous' },
        { href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { href: 'https://www.google-analytics.com' },
        { href: 'https://www.googletagmanager.com' }
      ];

      preconnectLinks.forEach(({ href, crossorigin }) => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        if (crossorigin) {
          link.setAttribute('crossorigin', crossorigin);
        }
        document.head.appendChild(link);
      });

      // Add DNS prefetch for social media
      const dnsPrefetchLinks = [
        'https://www.linkedin.com',
        'https://twitter.com',
        'https://github.com',
        'https://www.youtube.com'
      ];

      dnsPrefetchLinks.forEach((href) => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = href;
        document.head.appendChild(link);
      });
    }
  }, []);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Clean up event listeners on page unload
      window.addEventListener('beforeunload', () => {
        // Remove all event listeners to prevent memory leaks
        const elements = document.querySelectorAll('*');
        elements.forEach((element) => {
          const clone = element.cloneNode(true);
          element.parentNode?.replaceChild(clone, element);
        });
      });

      // Monitor memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const checkMemory = () => {
          const used = Math.round(memory.usedJSHeapSize / 1048576);
          const total = Math.round(memory.totalJSHeapSize / 1048576);
          const limit = Math.round(memory.jsHeapSizeLimit / 1048576);
          
          console.log(`💾 Memory Usage: ${used}MB / ${total}MB (Limit: ${limit}MB)`);
          
          if (used > total * 0.8) {
            console.warn('⚠️ High memory usage detected');
          }
        };

        // Check memory every 30 seconds
        setInterval(checkMemory, 30000);
      }
    }
  }, []);

  useEffect(() => {
    measurePerformance();
    optimizeImages();
    addResourceHints();
    optimizeMemory();
  }, [measurePerformance, optimizeImages, addResourceHints, optimizeMemory]);

  return <>{children}</>;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
