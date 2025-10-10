'use client';

import { useEffect, useCallback } from 'react';

export const usePerformanceMonitor = () => {
  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
          const firstByte = navigation.responseStart - navigation.requestStart;
          
          // Track performance metrics
          if (typeof window !== 'undefined' && 'gtag' in window) {
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
            if (typeof window !== 'undefined' && 'gtag' in window) {
              const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
              gtag('event', 'slow_resource', {
                event_category: 'performance',
                resource_name: entry.name,
                duration: Math.round(entry.duration),
                size: entry.transferSize || 0
              });
            }
          }
          
          // Track failed resources
          if (entry.transferSize === 0 && entry.duration > 0) {
            if (typeof window !== 'undefined' && 'gtag' in window) {
              const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
              gtag('event', 'failed_resource', {
                event_category: 'performance',
                resource_name: entry.name
              });
            }
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
        
        // Track memory usage if it's high
        if (usedMB > limitMB * 0.8) {
          if (typeof window !== 'undefined' && 'gtag' in window) {
            const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
            gtag('event', 'high_memory_usage', {
              event_category: 'performance',
              used_mb: usedMB,
              total_mb: totalMB,
              limit_mb: limitMB,
              usage_percentage: Math.round((usedMB / limitMB) * 100)
            });
          }
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
          if (typeof window !== 'undefined' && 'gtag' in window) {
            const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
            gtag('event', 'first_interaction', {
              event_category: 'performance',
              delay: Math.round(now - interactionStart)
            });
          }
        }
        
        // Track interaction type
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
          gtag('event', 'user_interaction', {
            event_category: 'engagement',
            interaction_type: event.type
          });
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
};