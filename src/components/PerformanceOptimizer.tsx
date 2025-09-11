import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkRequests: number;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkRequests: 0
  });

  useEffect(() => {
    // Measure performance metrics
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      // Measure render time
      const renderStart = performance.now();
      requestAnimationFrame(() => {
        const renderTime = performance.now() - renderStart;
        
        // Get memory usage if available
        const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
        
        // Count network requests
        const networkRequests = performance.getEntriesByType('resource').length;
        
        setMetrics({
          loadTime,
          renderTime,
          memoryUsage: Math.round(memoryUsage / 1024 / 1024), // Convert to MB
          networkRequests
        });
      });
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png',
        '/images/services-bg.jpg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
  }, []);

  // Optimize images with lazy loading
  useEffect(() => {
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      } else {
        // Fallback for older browsers
        images.forEach(img => {
          const imgElement = img as HTMLImageElement;
          imgElement.src = imgElement.dataset.src || '';
        });
      }
    };

    optimizeImages();
  }, []);

  // Service Worker registration for caching
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  // Performance monitoring in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs font-mono">
        <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
        <div>Render: {metrics.renderTime.toFixed(2)}ms</div>
        <div>Memory: {metrics.memoryUsage}MB</div>
        <div>Requests: {metrics.networkRequests}</div>
      </div>
    );
  }

  return null;
};

export default PerformanceOptimizer;
export { PerformanceOptimizer };