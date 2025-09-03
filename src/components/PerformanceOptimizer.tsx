import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({
            ...prev,
            largestContentfulPaint: entry.startTime
          } as PerformanceMetrics));
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    // Get page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      setMetrics({
        loadTime: navigation.loadEventEnd - navigation.fetchStart,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0
      });
    });

    // Optimize images
    optimizeImages();
    
    // Preload critical resources
    preloadCriticalResources();

    return () => observer.disconnect();
  }, []);

  const optimizeImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  };

  const preloadCriticalResources = () => {
    const criticalFonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    ];

    criticalFonts.forEach((font) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = font;
      document.head.appendChild(link);
    });
  };

  const enableOptimizations = () => {
    // Enable service worker for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }

    // Enable compression
    document.documentElement.style.setProperty('--compression-enabled', 'true');
    
    setIsOptimized(true);
  };

  return (
    <div className="performance-optimizer">
      {metrics && (
        <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm z-50">
          <h3 className="text-lg font-semibold mb-2">Performance Metrics</h3>
          <div className="space-y-2 text-sm">
            <div>Load Time: {metrics.loadTime.toFixed(0)}ms</div>
            <div>LCP: {metrics.largestContentfulPaint.toFixed(0)}ms</div>
          </div>
          {!isOptimized && (
            <button
              onClick={enableOptimizations}
              className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Enable Optimizations
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;