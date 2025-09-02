import React, { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  fid: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  });

  useEffect(() => {
    // Collect Web Vitals
    getCLS((metric) => setMetrics(prev => ({ ...prev, cls: metric.value })));
    getFID((metric) => setMetrics(prev => ({ ...prev, fid: metric.value })));
    getFCP((metric) => setMetrics(prev => ({ ...prev, fcp: metric.value })));
    getLCP((metric) => setMetrics(prev => ({ ...prev, lcp: metric.value })));
    getTTFB((metric) => setMetrics(prev => ({ ...prev, ttfb: metric.value })));

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/og-image.svg',
        '/favicon.ico',
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

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    // Run optimization after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeImages);
    } else {
      optimizeImages();
    }

    // Cleanup
    return () => {
      document.removeEventListener('DOMContentLoaded', optimizeImages);
    };
  }, []);

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && metrics.lcp) {
      
    }
  }, [metrics]);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;