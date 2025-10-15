import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });

  useEffect(() => {
    // Monitor Core Web Vitals
    const observeWebVitals = () => {
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => setMetrics(prev => ({ ...prev, cls: metric.value })));
          getFID((metric) => setMetrics(prev => ({ ...prev, fid: metric.value })));
          getFCP((metric) => setMetrics(prev => ({ ...prev, fcp: metric.value })));
          getLCP((metric) => setMetrics(prev => ({ ...prev, lcp: metric.value })));
          getTTFB((metric) => setMetrics(prev => ({ ...prev, ttfb: metric.value })));
        });
      }
    };

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/app/styles/futuristic.css',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'style';
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
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
    };

    // Initialize optimizations
    preloadCriticalResources();
    observeWebVitals();
    optimizeImages();

    // Cleanup
    return () => {
      // Cleanup observers if needed
    };
  }, []);

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;