import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enablePreloading?: boolean;
  enableWebVitals?: boolean;
  enableResourceTiming?: boolean;
  enableMemoryMonitoring?: boolean;
  enableNetworkMonitoring?: boolean;
  enableUserTiming?: boolean;
  enableLongTaskMonitoring?: boolean;
  enableLayoutShiftMonitoring?: boolean;
  enableAnalytics?: boolean;
  enableErrorReporting?: boolean;
  performanceBudget?: {
    lcp?: number;
    fid?: number;
    cls?: number;
    fcp?: number;
    ttfb?: number;
  };
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enablePreloading = true,
  enableWebVitals = true,
  enableResourceTiming = true,
  enableMemoryMonitoring = true,
  enableNetworkMonitoring = true,
  enableUserTiming = true,
  enableLongTaskMonitoring = true,
  enableLayoutShiftMonitoring = true,
  enableAnalytics = true,
  enableErrorReporting = true,
  performanceBudget = {
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    fcp: 1800,
    ttfb: 600
  }
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Image optimization
    if (enableImageOptimization) {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    }

    // Lazy loading for images
    if (enableLazyLoading) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
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

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Web Vitals monitoring
    if (enableWebVitals) {
      const measureWebVitals = () => {
        // First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry && performanceBudget.fcp) {
            const fcp = fcpEntry.startTime;
            if (fcp > performanceBudget.fcp) {
              console.warn(`FCP exceeded budget: ${fcp}ms > ${performanceBudget.fcp}ms`);
            }
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry && performanceBudget.lcp) {
            const lcp = lastEntry.startTime;
            if (lcp > performanceBudget.lcp) {
              console.warn(`LCP exceeded budget: ${lcp}ms > ${performanceBudget.lcp}ms`);
            }
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            const fid = entry.processingStart - entry.startTime;
            if (performanceBudget.fid && fid > performanceBudget.fid) {
              console.warn(`FID exceeded budget: ${fid}ms > ${performanceBudget.fid}ms`);
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              if (performanceBudget.cls && clsValue > performanceBudget.cls) {
                console.warn(`CLS exceeded budget: ${clsValue} > ${performanceBudget.cls}`);
              }
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to First Byte (TTFB)
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation && performanceBudget.ttfb) {
          const ttfb = navigation.responseStart - navigation.requestStart;
          if (ttfb > performanceBudget.ttfb) {
            console.warn(`TTFB exceeded budget: ${ttfb}ms > ${performanceBudget.ttfb}ms`);
          }
        }
      };

      // Run after page load
      if (document.readyState === 'complete') {
        measureWebVitals();
      } else {
        window.addEventListener('load', measureWebVitals);
      }
    }

    // Resource timing monitoring
    if (enableResourceTiming) {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.duration > 1000) { // Resources taking more than 1 second
            console.warn(`Slow resource: ${entry.name} took ${entry.duration}ms`);
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
    }

    // Memory monitoring
    if (enableMemoryMonitoring && 'memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        if (memory) {
          const usedMB = memory.usedJSHeapSize / 1024 / 1024;
          const totalMB = memory.totalJSHeapSize / 1024 / 1024;
          const limitMB = memory.jsHeapSizeLimit / 1024 / 1024;
          
          if (usedMB / limitMB > 0.8) {
            console.warn(`High memory usage: ${usedMB.toFixed(2)}MB / ${limitMB.toFixed(2)}MB`);
          }
        }
      };

      setInterval(checkMemory, 30000); // Check every 30 seconds
    }

    // Network monitoring
    if (enableNetworkMonitoring && 'connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        console.log(`Network type: ${connection.effectiveType}, Downlink: ${connection.downlink}Mbps`);
        
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          console.warn('Slow network detected, enabling performance optimizations');
        }
      }
    }

    // Long task monitoring
    if (enableLongTaskMonitoring) {
      const longTaskObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          console.warn(`Long task detected: ${entry.duration}ms`);
        });
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    }

    // Layout shift monitoring
    if (enableLayoutShiftMonitoring) {
      const layoutShiftObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            console.warn(`Layout shift detected: ${entry.value}`);
          }
        });
      });
      layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Analytics integration
    if (enableAnalytics && typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as any).gtag;
      
      // Track page performance
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          gtag('event', 'page_performance', {
            event_category: 'Performance',
            page_load_time: Math.round(navigation.loadEventEnd - navigation.fetchStart),
            dom_content_loaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
            first_byte: Math.round(navigation.responseStart - navigation.requestStart)
          });
        }
      });
    }

    // Error reporting
    if (enableErrorReporting) {
      window.addEventListener('error', (event) => {
        console.error('JavaScript error:', event.error);
        
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as any).gtag;
          gtag('event', 'exception', {
            description: event.error?.message || 'Unknown error',
            fatal: false
          });
        }
      });

      window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason);
        
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as any).gtag;
          gtag('event', 'exception', {
            description: event.reason?.toString() || 'Unhandled promise rejection',
            fatal: false
          });
        }
      });
    }

  }, [
    enableImageOptimization,
    enableLazyLoading,
    enableCodeSplitting,
    enablePreloading,
    enableWebVitals,
    enableResourceTiming,
    enableMemoryMonitoring,
    enableNetworkMonitoring,
    enableUserTiming,
    enableLongTaskMonitoring,
    enableLayoutShiftMonitoring,
    enableAnalytics,
    enableErrorReporting,
    performanceBudget
  ]);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;