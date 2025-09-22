import React, { useEffect, useState } from 'react';

const PerformanceOptimizer = () => {
  const [metrics, setMetrics] = useState({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });

  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Performance monitoring
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
        const lcp = performance.getEntriesByType('largest-contentful-paint');
        
        setMetrics(prev => ({
          ...prev,
          fcp: fcp ? fcp.startTime : 0,
          lcp: lcp.length > 0 ? lcp[lcp.length - 1].startTime : 0,
          ttfb: navigation ? navigation.responseStart - navigation.requestStart : 0
        }));

        // Check if performance is optimized
        const isGoodPerformance = 
          (fcp ? fcp.startTime : 0) < 1800 && // FCP < 1.8s
          (lcp.length > 0 ? lcp[lcp.length - 1].startTime : 0) < 2500; // LCP < 2.5s
        
        setIsOptimized(isGoodPerformance);
      }
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
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/services-bg.jpg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
  }, []);

  // Optimize images
  useEffect(() => {
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      }
    };

    optimizeImages();
  }, []);

  // Resource hints
  useEffect(() => {
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const domains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'www.google-analytics.com'
      ];

      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });
    };

    addResourceHints();
  }, []);

  // Development mode performance display
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
        <div className="mb-2 font-bold">Performance Metrics</div>
        <div>FCP: {metrics.fcp.toFixed(0)}ms</div>
        <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
        <div>TTFB: {metrics.ttfb.toFixed(0)}ms</div>
        <div className={`mt-2 ${isOptimized ? 'text-green-400' : 'text-red-400'}`}>
          {isOptimized ? '✓ Optimized' : '⚠ Needs Optimization'}
        </div>
      </div>
    );
  }

  return null;
};

export default PerformanceOptimizer;