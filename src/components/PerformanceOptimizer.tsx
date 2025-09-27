import React, { useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  enableServiceWorker?: boolean;
  enableMonitoring?: boolean;
  enableResourceHints?: boolean;
  enablePreloading?: boolean;
}

function PerformanceOptimizerComponent({
  enableServiceWorker = true,
  enableMonitoring = true,
  enableResourceHints = true,
  enablePreloading = true
}: PerformanceOptimizerProps): null {
  const [memoryUsage, setMemoryUsage] = useState<{
    used: number;
    total: number;
    percentage: number;
  } | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Simple performance monitoring
    if (enableMonitoring) {
      console.log('Performance monitoring enabled');
    }

    // Memory Usage Monitoring
    const updateMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMemoryUsage({
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          percentage: (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100
        });
      }
    };

    updateMemoryUsage();
    const interval = setInterval(updateMemoryUsage, 5000);

    return () => clearInterval(interval);
  }, [enableServiceWorker, enableMonitoring, enableResourceHints, enablePreloading]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Resource hints
    if (enableResourceHints) {
      const hints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ];

      hints.forEach(hint => {
        const link = document.createElement('link');
        Object.entries(hint).forEach(([key, value]) => {
          link.setAttribute(key, value);
        });
        document.head.appendChild(link);
      });
    }
  }, [enableResourceHints]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Service Worker registration
    if (enableServiceWorker && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, [enableServiceWorker]);

  return null;
}

// Export as default with React.memo for performance
const PerformanceOptimizer = React.memo(PerformanceOptimizerComponent);

export default PerformanceOptimizer;