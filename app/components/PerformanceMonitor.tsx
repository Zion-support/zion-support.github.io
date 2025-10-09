'use client';
import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      if ('web-vitals' in window) {
        // This would typically use the web-vitals library
        // For now, we'll use the Performance Observer API
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
              // Send to analytics service
            }
            if (entry.entryType === 'first-input') {
              console.log('FID:', entry.processingStart - entry.startTime);
              // Send to analytics service
            }
            if (entry.entryType === 'layout-shift') {
              console.log('CLS:', entry.value);
              // Send to analytics service
            }
          }
        });

        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      }
    };

    // Monitor page load performance
    const monitorPageLoad = () => {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          firstByte: navigation.responseStart - navigation.requestStart,
          domInteractive: navigation.domInteractive - navigation.navigationStart,
        };

        console.log('Page Load Metrics:', metrics);
        // Send to analytics service
      });
    };

    // Monitor resource loading
    const monitorResources = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resource = entry as PerformanceResourceTiming;
            if (resource.duration > 1000) { // Resources taking more than 1 second
              console.warn('Slow resource:', resource.name, resource.duration);
            }
          }
        }
      });

      observer.observe({ entryTypes: ['resource'] });
    };

    // Monitor memory usage
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit,
        });
      }
    };

    // Run monitoring
    monitorCoreWebVitals();
    monitorPageLoad();
    monitorResources();
    monitorMemory();

    // Monitor user interactions
    const monitorInteractions = () => {
      let interactionCount = 0;
      let totalInteractionTime = 0;

      const trackInteraction = (event: Event) => {
        interactionCount++;
        const startTime = performance.now();
        
        requestAnimationFrame(() => {
          const endTime = performance.now();
          totalInteractionTime += endTime - startTime;
        });
      };

      document.addEventListener('click', trackInteraction);
      document.addEventListener('keydown', trackInteraction);
      document.addEventListener('scroll', trackInteraction);

      // Report interaction metrics every 30 seconds
      setInterval(() => {
        if (interactionCount > 0) {
          const avgInteractionTime = totalInteractionTime / interactionCount;
          console.log('Interaction metrics:', {
            count: interactionCount,
            avgTime: avgInteractionTime,
          });
        }
      }, 30000);
    };

    monitorInteractions();

  }, []);

  return null;
};

export default PerformanceMonitor;
