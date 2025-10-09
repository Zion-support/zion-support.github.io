// Performance monitoring hook
import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number;
}

interface UsePerformanceReturn {
  metrics: PerformanceMetrics;
  optimize: () => void;
  getScore: () => number;
}

export const usePerformance = (): UsePerformanceReturn => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: 0,
  });

  const optimize = useCallback(() => {
    // Performance optimization logic
    if (typeof window !== 'undefined') {
      // Preload critical resources
      const criticalResources = [
        '/fonts/main.woff2',
        '/images/hero.jpg',
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        document.head.appendChild(link);
      });

      // Optimize images
      const images = document.querySelectorAll('img[data-src]');
      images.forEach((img) => {
        const src = img.getAttribute('data-src');
        if (src) {
          img.setAttribute('src', src);
          img.removeAttribute('data-src');
        }
      });
    }
  }, []);

  const getScore = useCallback((): number => {
    let score = 100;

    // LCP scoring
    if (metrics.lcp !== null) {
      if (metrics.lcp > 4000) score -= 40;
      else if (metrics.lcp > 2500) score -= 20;
    }

    // FID scoring
    if (metrics.fid !== null) {
      if (metrics.fid > 300) score -= 40;
      else if (metrics.fid > 100) score -= 20;
    }

    // CLS scoring
    if (metrics.cls !== null) {
      if (metrics.cls > 0.25) score -= 40;
      else if (metrics.cls > 0.1) score -= 20;
    }

    return Math.max(0, score);
  }, [metrics]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const collectMetrics = () => {
      const newMetrics: PerformanceMetrics = {
        lcp: null,
        fid: null,
        cls: null,
        fcp: null,
        ttfb: null,
        memoryUsage: 0,
      };

      // Get memory usage if available
      if ('memory' in performance) {
        newMetrics.memoryUsage = (performance as any).memory.usedJSHeapSize;
      }

      // Get navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        newMetrics.ttfb = navigation.responseStart - navigation.requestStart;
      }

      // Get paint timing
      const paintEntries = performance.getEntriesByType('paint');
      paintEntries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          newMetrics.fcp = entry.startTime;
        }
      });

      setMetrics(newMetrics);
    };

    // Collect metrics immediately
    collectMetrics();

    // Set up interval for periodic collection
    const interval = setInterval(collectMetrics, 5000);

    return () => clearInterval(interval);
  }, []);

  return {
    metrics,
    optimize,
    getScore,
  };
};

export default usePerformance;