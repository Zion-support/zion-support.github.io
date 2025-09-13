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
    // Performance monitoring and optimization
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const navigationEntry = entries.find(
          (entry) => entry.entryType === 'navigation'
        ) as PerformanceNavigationTiming;

        if (navigationEntry) {
          const newMetrics: PerformanceMetrics = {
            loadTime: navigationEntry.loadEventEnd - navigationEntry.fetchStart,
            firstContentfulPaint: 0, // Would need FCP observer
            largestContentfulPaint: 0, // Would need LCP observer
            cumulativeLayoutShift: 0, // Would need CLS observer
            firstInputDelay: 0, // Would need FID observer
          };

          setMetrics(newMetrics);
          
          // Check if performance is optimized
          const isGoodPerformance = newMetrics.loadTime < 3000; // 3 seconds
          setIsOptimized(isGoodPerformance);

          // Log performance issues in development
          if (process.env.NODE_ENV === 'development' && !isGoodPerformance) {
            console.warn('Performance optimization needed:', newMetrics);
          }
        }
      });

      observer.observe({ entryTypes: ['navigation'] });

      // Image lazy loading optimization
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));

      // Preload critical resources
      const preloadCriticalResources = () => {
        const criticalCSS = document.createElement('link');
        criticalCSS.rel = 'preload';
        criticalCSS.href = '/styles/critical.css';
        criticalCSS.as = 'style';
        document.head.appendChild(criticalCSS);

        const criticalFonts = document.createElement('link');
        criticalFonts.rel = 'preload';
        criticalFonts.href = '/fonts/inter.woff2';
        criticalFonts.as = 'font';
        criticalFonts.type = 'font/woff2';
        criticalFonts.crossOrigin = 'anonymous';
        document.head.appendChild(criticalFonts);
      };

      preloadCriticalResources();

      return () => {
        observer.disconnect();
        imageObserver.disconnect();
      };
    }
  }, []);

  // Service Worker registration for caching
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  // Bundle size optimization warning
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const bundleSize = performance.getEntriesByType('resource')
        .filter((entry) => entry.name.includes('.js'))
        .reduce((total, entry) => total + (entry as PerformanceResourceTiming).transferSize, 0);

      if (bundleSize > 500000) { // 500KB
        console.warn('Bundle size is large:', `${(bundleSize / 1024).toFixed(2)}KB`);
      }
    }
  }, []);

  if (process.env.NODE_ENV === 'development' && metrics) {
    return (
      <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg text-sm">
        <h3 className="font-bold mb-2">Performance Metrics</h3>
        <div className="space-y-1">
          <div>Load Time: {metrics.loadTime.toFixed(0)}ms</div>
          <div className={`font-semibold ${isOptimized ? 'text-green-400' : 'text-red-400'}`}>
            Status: {isOptimized ? 'Optimized' : 'Needs Optimization'}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default PerformanceOptimizer;