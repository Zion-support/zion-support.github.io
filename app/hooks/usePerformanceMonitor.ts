'use client';

<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useEffect } from 'react'
=======
import { useEffect } from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
export const usePerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor page load performance;
const handleLoad = () => {const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if ($1) { const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          totalLoadTime: navigation.loadEventEnd - navigation.fetchStart};

        // console.log removed for production
// Send to analytics if available
        if ($1) { const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
          gtag('event', 'page_performance', {
            event_category: 'performance',
            dom_content_loaded: Math.round(metrics.domContentLoaded),
            load_complete: Math.round(metrics.loadComplete),
            total_load_time: Math.round(metrics.totalLoadTime)});
      }
    };

    // Monitor resource loading;
const handleResourceTiming = () => {const resources = performance.getEntriesByType('resource');
const slowResources = resources.filter(resource => resource.duration > 1000);
      
      if (slowResources.length > 0) {
        // console.warn removed for production
}
    };

    // Monitor memory usage;
const handleMemoryUsage = () => {
      if ($1) { const memory = (performance as any).memory;
const memoryUsage = {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024);
        if (memoryUsage.used > memoryUsage.limit * 0.8) {
          // console.warn removed for production
}
      }
    };

    // Set up monitoring
    if (document.readyState === 'complete') {
      handleLoad()} else {
      window.addEventListener('load', handleLoad);
    // Monitor resources after a delay
    setTimeout(handleResourceTiming, 2000);
    setTimeout(handleMemoryUsage, 5000);

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
<<<<<<< HEAD
};
      window.removeEventListener('load', handleLoad)}}, []);
=======
>>>>>>> main
import { useEffect, useCallback } from 'react';

export const usePerformanceMonitor = () => {
  const measurePerformance = useCallback(() => {
    // Measure page load time
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
          const firstByte = navigation.responseStart - navigation.requestStart;
          
          console.log('Performance Metrics:', {
            load_time: Math.round(loadTime),
            dom_content_loaded: Math.round(domContentLoaded),
            time_to_first_byte: Math.round(firstByte)
          });

          // Send to analytics if available
          if ('gtag' in window) {
            const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
            gtag('event', 'page_performance', {
              event_category: 'performance',
              load_time: Math.round(loadTime),
              dom_content_loaded: Math.round(domContentLoaded),
              time_to_first_byte: Math.round(firstByte)
            });
          }
        }
      });
    }
  }, []);

  const measureResourcePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        
        entries.forEach((entry: any) => {
          // Track slow resources
          if (entry.duration > 1000) {
            console.warn('Slow resource detected:', {
              name: entry.name,
              duration: Math.round(entry.duration),
              size: entry.transferSize || 0
            });
          }
          
          // Track failed resources
          if (entry.transferSize === 0 && entry.duration > 0) {
            console.warn('Failed resource detected:', entry.name);
          }
        });
      });
      
      observer.observe({ entryTypes: ['resource'] });
      
      return () => observer.disconnect();
    }
  }, []);

  const measureMemoryUsage = useCallback(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        const usedMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
        const totalMB = Math.round(memory.totalJSHeapSize / 1024 / 1024);
        const limitMB = Math.round(memory.jsHeapSizeLimit / 1024 / 1024);
        
        // Log memory usage if it's high
        if (usedMB > limitMB * 0.8) {
          console.warn('High memory usage detected:', {
            used_mb: usedMB,
            total_mb: totalMB,
            limit_mb: limitMB,
            usage_percentage: Math.round((usedMB / limitMB) * 100)
          });
        }
      };
      
      // Check memory every 30 seconds
      const interval = setInterval(checkMemory, 30000);
      checkMemory(); // Initial check
      
      return () => clearInterval(interval);
    }
  }, []);

  const measureUserInteraction = useCallback(() => {
    if (typeof window !== 'undefined') {
      let interactionStart = 0;
      let interactionCount = 0;
      
      const trackInteraction = (event: Event) => {
        const now = performance.now();
        
        if (interactionStart === 0) {
          interactionStart = now;
        }
        
        interactionCount++;
        
        // Track first interaction delay
        if (interactionCount === 1) {
          console.log('First interaction delay:', Math.round(now - interactionStart));
        }
      };
      
      const events = ['click', 'keydown', 'scroll', 'touchstart'];
      events.forEach(eventType => {
        document.addEventListener(eventType, trackInteraction, { passive: true });
      });
      
      return () => {
        events.forEach(eventType => {
          document.removeEventListener(eventType, trackInteraction);
        });
      };
    }
  }, []);

  useEffect(() => {
    measurePerformance();
    const resourceCleanup = measureResourcePerformance();
    const memoryCleanup = measureMemoryUsage();
    const interactionCleanup = measureUserInteraction();
    
    return () => {
      resourceCleanup?.();
      memoryCleanup?.();
      interactionCleanup?.();
    };
  }, [measurePerformance, measureResourcePerformance, measureMemoryUsage, measureUserInteraction]);

  return {
    measurePerformance,
    measureResourcePerformance,
    measureMemoryUsage,
    measureUserInteraction
  };
<<<<<<< HEAD
};
=======
};
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
>>>>>>> main
