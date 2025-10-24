'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

interface AdvancedPerformanceOptimizerProps {
  enableWebVitals?: boolean;
  enableAdvancedCaching?: boolean;
  enableImageOptimization?: boolean;
  enablePreloading?: boolean;
  enableServiceWorker?: boolean;
}

const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({
  enableWebVitals = true,
  enableAdvancedCaching = true,
  enableImageOptimization = true,
  enablePreloading = true,
  enableServiceWorker = true
}) => {
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });

  // Web Vitals monitoring
  const measureWebVitals = useCallback(() => {
    if (enableWebVitals && typeof window !== 'undefined') {
      // Measure Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number };
        setPerformanceMetrics(prev => ({
          ...prev,
          lcp: lastEntry.renderTime || lastEntry.loadTime || 0
        }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
          const fid = (entry as any).processingStart - entry.startTime;
          setPerformanceMetrics(prev => ({ ...prev, fid }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Measure Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value || 0;
            setPerformanceMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Measure First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
          if (entry.name === 'first-contentful-paint') {
            setPerformanceMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Measure Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        setPerformanceMetrics(prev => ({ ...prev, ttfb }));
      }

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
      };
    }
  }, [enableWebVitals]);

  // Advanced caching strategies
  const enableAdvancedCachingStrategies = useCallback(() => {
    if (enableAdvancedCaching && typeof window !== 'undefined') {
      // Service Worker for caching
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => console.log('SW registered'))
          .catch(error => console.log('SW registration failed'));
      }

      // Memory caching for API responses
      const cache = new Map();
      const originalFetch = window.fetch;
      window.fetch = async (input, init) => {
        const key = typeof input === 'string' ? input : input.url;
        if (cache.has(key)) {
          return cache.get(key);
        }
        const response = await originalFetch(input, init);
        cache.set(key, response.clone());
        return response;
      };
    }
  }, [enableAdvancedCaching]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (enableImageOptimization && typeof window !== 'undefined') {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Lazy loading
        img.loading = 'lazy';
        
        // WebP format support
        if (img.src && !img.src.includes('.webp')) {
          const webpSrc = img.src.replace(/\.(jpg|jpeg|png)$/, '.webp');
          const webpImg = new Image();
          webpImg.onload = () => {
            img.src = webpSrc;
          };
          webpImg.src = webpSrc;
        }
      });
    }
  }, [enableImageOptimization]);

  // Preloading critical resources
  const preloadCriticalResources = useCallback(() => {
    if (enablePreloading && typeof window !== 'undefined') {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.as = 'style';
      criticalCSS.href = '/critical.css';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const criticalFont = document.createElement('link');
      criticalFont.rel = 'preload';
      criticalFont.as = 'font';
      criticalFont.type = 'font/woff2';
      criticalFont.crossOrigin = 'anonymous';
      criticalFont.href = '/fonts/critical.woff2';
      document.head.appendChild(criticalFont);
    }
  }, [enablePreloading]);

  useEffect(() => {
    measureWebVitals();
    enableAdvancedCachingStrategies();
    optimizeImages();
    preloadCriticalResources();
  }, [measureWebVitals, enableAdvancedCachingStrategies, optimizeImages, preloadCriticalResources]);

  return (
    <div className="performance-optimizer">
      {/* This component works in the background */}
    </div>
  );
};

export default AdvancedPerformanceOptimizer;
