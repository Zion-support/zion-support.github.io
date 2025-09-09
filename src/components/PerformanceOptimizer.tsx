import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  enableMonitoring = false 
}) => {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    if (!enableMonitoring || typeof window === 'undefined') return;

    const measurePerformance = () => {
      // Measure Core Web Vitals
      if ('PerformanceObserver' in window) {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcp) {
            setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.processingStart && entry.startTime) {
              setMetrics(prev => ({ 
                ...prev, 
                fid: entry.processingStart - entry.startTime 
              }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      // Time to First Byte
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigation.responseStart - navigation.requestStart 
        }));
      }
    };

    // Run performance measurement after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Apply optimizations based on metrics
    const applyOptimizations = () => {
      const { fcp, lcp, fid, cls } = metrics;
      
      if (fcp && fcp > 2500) {
        // Optimize for slow FCP
        optimizeImages();
        preloadCriticalResources();
      }
      
      if (lcp && lcp > 4000) {
        // Optimize for slow LCP
        optimizeLargestContentfulPaint();
      }
      
      if (fid && fid > 100) {
        // Optimize for slow FID
        optimizeJavaScriptExecution();
      }
      
      if (cls && cls > 0.1) {
        // Optimize for layout shift
        optimizeLayoutShift();
      }

      setIsOptimized(true);
    };

    // Apply optimizations after metrics are collected
    const timeoutId = setTimeout(applyOptimizations, 3000);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('load', measurePerformance);
    };
  }, [enableMonitoring, metrics]);

  const optimizeImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  };

  const preloadCriticalResources = () => {
    const criticalCSS = document.querySelector('link[rel="stylesheet"]');
    if (criticalCSS && !criticalCSS.getAttribute('rel')?.includes('preload')) {
      criticalCSS.setAttribute('rel', 'preload');
      criticalCSS.setAttribute('as', 'style');
      criticalCSS.onload = () => {
        criticalCSS.setAttribute('rel', 'stylesheet');
      };
    }
  };

  const optimizeLargestContentfulPaint = () => {
    // Optimize the largest contentful paint element
    const lcpElements = document.querySelectorAll('img, video, canvas, svg');
    lcpElements.forEach(element => {
      if (element instanceof HTMLImageElement) {
        element.loading = 'eager';
        element.fetchPriority = 'high';
      }
    });
  };

  const optimizeJavaScriptExecution = () => {
    // Defer non-critical JavaScript
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      if (!script.async && !script.defer) {
        script.defer = true;
      }
    });
  };

  const optimizeLayoutShift = () => {
    // Add dimensions to images to prevent layout shift
    const images = document.querySelectorAll('img:not([width]):not([height])');
    images.forEach(img => {
      if (img instanceof HTMLImageElement) {
        img.style.aspectRatio = '16/9'; // Default aspect ratio
        img.style.width = '100%';
        img.style.height = 'auto';
      }
    });
  };

  // Don't render anything, this is a performance optimization component
  return null;
};