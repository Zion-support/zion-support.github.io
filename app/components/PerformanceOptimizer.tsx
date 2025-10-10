import React, { useCallback, useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

interface OptimizationStatus {
  preloaded: number;
  codeSplit: boolean;
  serviceWorker: boolean;
  optimized: boolean;
}

const PerformanceOptimizer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });

  const [status, setStatus] = useState<OptimizationStatus>({
    preloaded: 0,
    codeSplit: false,
    serviceWorker: false,
    optimized: false
  });

  const preloadCriticalResources = useCallback(() => {
    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg',
      '/css/critical.css'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'image';
      document.head.appendChild(link);
    });

    setStatus(prev => ({ ...prev, preloaded: criticalResources.length }));
  }, []);

  const enableServiceWorker = useCallback(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(() => {
          setStatus(prev => ({ ...prev, serviceWorker: true }));
        })
        .catch(console.error);
    }
  }, []);

  const optimizeImages = useCallback(() => {
    // Lazy load images
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
  }, []);

  useEffect(() => {
    preloadCriticalResources();
    enableServiceWorker();
    optimizeImages();

    // Mark as optimized
    setStatus(prev => ({ ...prev, optimized: true }));
  }, [preloadCriticalResources, enableServiceWorker, optimizeImages]);

  return <>{children}</>;
};

export default PerformanceOptimizer;
