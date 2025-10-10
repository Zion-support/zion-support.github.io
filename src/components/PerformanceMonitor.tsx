import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  connectionType: string;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        
        // Memory usage (if available)
        const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
        
        // Connection type
        const connection = (navigator as any).connection?.effectiveType || 'unknown';
        
        setMetrics({
          loadTime,
          renderTime,
          memoryUsage,
          connectionType: connection
        });

        // Send metrics to analytics (if available)
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'performance_metrics', {
            load_time: loadTime,
            render_time: renderTime,
            memory_usage: memoryUsage,
            connection_type: connection
          });
        }
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical images
      const criticalImages = [
        '/og-image.jpg',
        '/logo.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
    };

    preloadCriticalResources();
  }, []);

  // Resource hints for better performance
  useEffect(() => {
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.googletagmanager.com',
        'https://www.google-analytics.com'
      ];

      domains.forEach(domain => {
        if (!document.querySelector(`link[href="${domain}"]`)) {
          const link = document.createElement('link');
          link.rel = 'dns-prefetch';
          link.href = domain;
          document.head.appendChild(link);
        }
      });
    };

    addResourceHints();
  }, []);

  return null; // This component doesn't render anything visible
};

export default PerformanceMonitor;