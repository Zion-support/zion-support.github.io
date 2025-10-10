'use client';

import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor page load performance
    const handleLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        };

        console.log('Performance Metrics:', metrics);

        // Send to analytics if available
        if ('gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
          gtag('event', 'page_performance', {
            event_category: 'performance',
            dom_content_loaded: Math.round(metrics.domContentLoaded),
            load_complete: Math.round(metrics.loadComplete),
            total_load_time: Math.round(metrics.totalLoadTime),
          });
        }
      }
    };

    // Monitor resource loading
    const handleResourceTiming = () => {
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter(resource => resource.duration > 1000);
      
      if (slowResources.length > 0) {
        console.warn('Slow loading resources:', slowResources);
      }
    };

    // Monitor memory usage
    const handleMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024),
        };

        if (memoryUsage.used > memoryUsage.limit * 0.8) {
          console.warn('High memory usage detected:', memoryUsage);
        }
      }
    };

    // Set up monitoring
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Monitor resources after a delay
    setTimeout(handleResourceTiming, 2000);
    setTimeout(handleMemoryUsage, 5000);

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
import { useEffect, useCallback } from 'react';
import { useAnalytics } from '../components/AnalyticsProvider';

export const usePerformanceMonitor = () => {
  const { trackEvent } = useAnalytics();

  const measurePerformance = useCallback(() => {
    // Measure page load time
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
          const firstByte = navigation.responseStart - navigation.requestStart;
          
          trackEvent('page_performance', {
            load_time: Math.round(loadTime),
            dom_content_loaded: Math.round(domContentLoaded),
            time_to_first_byte: Math.round(firstByte),
            category: 'performance'
          });
        }
      });
    }
  }, [trackEvent]);

  const measureResourcePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        
        entries.forEach((entry: any) => {
          // Track slow resources
          if (entry.duration > 1000) {
            trackEvent('slow_resource', {
              resource_name: entry.name,
              duration: Math.round(entry.duration),
              size: entry.transferSize || 0,
              category: 'performance'
            });
          }
          
          // Track failed resources
          if (entry.transferSize === 0 && entry.duration > 0) {
            trackEvent('failed_resource', {
              resource_name: entry.name,
              category: 'performance'
            });
          }
        });
      });
      
      observer.observe({ entryTypes: ['resource'] });
      
      return () => observer.disconnect();
    }
  }, [trackEvent]);

  const measureMemoryUsage = useCallback(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        const usedMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
        const totalMB = Math.round(memory.totalJSHeapSize / 1024 / 1024);
        const limitMB = Math.round(memory.jsHeapSizeLimit / 1024 / 1024);
        
        // Track memory usage if it's high
        if (usedMB > limitMB * 0.8) {
          trackEvent('high_memory_usage', {
            used_mb: usedMB,
            total_mb: totalMB,
            limit_mb: limitMB,
            usage_percentage: Math.round((usedMB / limitMB) * 100),
            category: 'performance'
          });
        }
      };
      
      // Check memory every 30 seconds
      const interval = setInterval(checkMemory, 30000);
      checkMemory(); // Initial check
      
      return () => clearInterval(interval);
    }
  }, [trackEvent]);

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
          trackEvent('first_interaction', {
            delay: Math.round(now - interactionStart),
            category: 'performance'
          });
        }
        
        // Track interaction type
        trackEvent('user_interaction', {
          type: event.type,
          category: 'engagement'
        });
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
  }, [trackEvent]);

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