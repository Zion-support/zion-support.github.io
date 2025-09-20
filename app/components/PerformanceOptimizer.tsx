'use client';

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  bundleSize: string;
  cacheHitRate: number;
}

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  showMetrics?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableMonitoring = true,
  showMetrics = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    bundleSize: '0 KB',
    cacheHitRate: 0
  });

  useEffect(() => {
    if (!enableMonitoring) return;

    const startTime = performance.now();
    
    // Measure page load performance
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.navigationStart;
      const renderTime = performance.now() - startTime;

      // Estimate bundle size from resource entries
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const totalSize = resources.reduce((acc, resource) => {
        return acc + (resource.transferSize || 0);
      }, 0);
      const bundleSize = `${(totalSize / 1024).toFixed(2)} KB`;

      // Calculate cache hit rate
      const cachedResources = resources.filter(resource => 
        resource.transferSize === 0 && resource.decodedBodySize > 0
      );
      const cacheHitRate = resources.length > 0 ? (cachedResources.length / resources.length) * 100 : 0;

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        bundleSize,
        cacheHitRate: Math.round(cacheHitRate)
      });
    };

    // Wait for page to fully load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = ['/og-image.svg', '/logo.svg'];
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();

    // Enable service worker for caching (if available)
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('Service worker registration failed:', err);
      });
    }

  }, [enableMonitoring]);

  // Optimize images with lazy loading and WebP support
  useEffect(() => {
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
    }
  }, []);

  if (!showMetrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
      <h4 className="font-bold mb-2">Performance Metrics</h4>
      <div className="space-y-1">
        <div>Load: {metrics.loadTime}ms</div>
        <div>Render: {metrics.renderTime}ms</div>
        <div>Bundle: {metrics.bundleSize}</div>
        <div>Cache: {metrics.cacheHitRate}%</div>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;