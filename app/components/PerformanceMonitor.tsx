'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const measurePerformance = () => {
      // First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint') {
              console.log(`${entry.name}: ${entry.startTime}ms`);
              
              // Track FCP
              if (entry.name === 'first-contentful-paint') {
                // Send to analytics if available
                if (window.gtag) {
                  window.gtag('event', 'timing_complete', {
                    name: 'fcp',
                    value: Math.round(entry.startTime),
                  });
                }
              }
            }
          }
        });
        
        observer.observe({ entryTypes: ['paint'] });
      }

      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          console.log('LCP:', lastEntry.startTime);
          
          if (window.gtag) {
            window.gtag('event', 'timing_complete', {
              name: 'lcp',
              value: Math.round(lastEntry.startTime),
            });
          }
        });
        
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // First Input Delay (FID)
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('FID:', entry.processingStart - entry.startTime);
            
            if (window.gtag) {
              window.gtag('event', 'timing_complete', {
                name: 'fid',
                value: Math.round(entry.processingStart - entry.startTime),
              });
            }
          }
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });
      }

      // Cumulative Layout Shift (CLS)
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          
          console.log('CLS:', clsValue);
          
          if (window.gtag) {
            window.gtag('event', 'timing_complete', {
              name: 'cls',
              value: Math.round(clsValue * 1000),
            });
          }
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Monitor resource loading
    const monitorResources = () => {
      if ('PerformanceObserver' in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'resource') {
              const resource = entry as PerformanceResourceTiming;
              
              // Track slow resources
              if (resource.duration > 1000) {
                console.warn('Slow resource:', resource.name, resource.duration + 'ms');
                
                if (window.gtag) {
                  window.gtag('event', 'slow_resource', {
                    event_category: 'performance',
                    event_label: resource.name,
                    value: Math.round(resource.duration),
                  });
                }
              }
            }
          }
        });
        
        resourceObserver.observe({ entryTypes: ['resource'] });
      }
    };

    // Monitor JavaScript errors
    const monitorErrors = () => {
      window.addEventListener('error', (event) => {
        console.error('JavaScript error:', event.error);
        
        if (window.gtag) {
          window.gtag('event', 'exception', {
            description: event.error?.message || 'Unknown error',
            fatal: false,
          });
        }
      });

      window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason);
        
        if (window.gtag) {
          window.gtag('event', 'exception', {
            description: event.reason?.message || 'Unhandled promise rejection',
            fatal: false,
          });
        }
      });
    };

    // Initialize monitoring
    measurePerformance();
    monitorResources();
    monitorErrors();

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.jpg',
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" to images below the fold
        if (img.getBoundingClientRect().top > window.innerHeight) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        img.setAttribute('decoding', 'async');
      });
    };

    // Run optimization after DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeImages);
    } else {
      optimizeImages();
    }

  }, []);

  return null;
}