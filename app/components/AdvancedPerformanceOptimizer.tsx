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
          setPerformanceMetrics(prev => ({
            ...prev,
            fid: fid || 0
          }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Measure Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            setPerformanceMetrics(prev => ({
              ...prev,
              cls: clsValue
            }));
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Measure First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries[0];
        setPerformanceMetrics(prev => ({
          ...prev,
          fcp: fcpEntry.startTime
        }));
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Measure Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setPerformanceMetrics(prev => ({
          ...prev,
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart
        }));
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
  const setupAdvancedCaching = useCallback(() => {
    if (enableAdvancedCaching && typeof window !== 'undefined') {
      // Implement service worker for caching
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service Worker registered:', registration);
          })
          .catch(error => {
            console.log('Service Worker registration failed:', error);
          });
      }

      // Implement memory caching for API responses
      const cache = new Map();
      const originalFetch = window.fetch;
      window.fetch = async (input, init) => {
        const url = typeof input === 'string' ? input : input.url;
        const cacheKey = `${url}-${JSON.stringify(init)}`;
        
        if (cache.has(cacheKey)) {
          return cache.get(cacheKey);
        }

        const response = await originalFetch(input, init);
        if (response.ok) {
          cache.set(cacheKey, response.clone());
        }
        return response;
      };
    }
  }, [enableAdvancedCaching]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (enableImageOptimization && typeof window !== 'undefined') {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" for images below the fold
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }

        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }

        // Optimize image sources for different screen sizes
        if (!img.hasAttribute('srcset') && img.src) {
          const src = img.src;
          const srcset = `${src}?w=320 320w, ${src}?w=640 640w, ${src}?w=1024 1024w, ${src}?w=1920 1920w`;
          img.setAttribute('srcset', srcset);
          img.setAttribute('sizes', '(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px');
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
      criticalCSS.href = '/styles/critical.css';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const criticalFont = document.createElement('link');
      criticalFont.rel = 'preload';
      criticalFont.as = 'font';
      criticalFont.type = 'font/woff2';
      criticalFont.href = '/fonts/inter.woff2';
      criticalFont.crossOrigin = 'anonymous';
      document.head.appendChild(criticalFont);

      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    }
  }, [enablePreloading]);

  // Service Worker setup
  const setupServiceWorker = useCallback(() => {
    if (enableServiceWorker && typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const swCode = `
        const CACHE_NAME = 'zion-tech-v1';
        const urlsToCache = [
          '/',
          '/styles/main.css',
          '/scripts/main.js',
          '/images/logo.png'
        ];

        self.addEventListener('install', (event) => {
          event.waitUntil(
            caches.open(CACHE_NAME)
              .then((cache) => cache.addAll(urlsToCache))
          );
        });

        self.addEventListener('fetch', (event) => {
          event.respondWith(
            caches.match(event.request)
              .then((response) => {
                if (response) {
                  return response;
                }
                return fetch(event.request);
              }
            )
          );
        });
      `;

      const blob = new Blob([swCode], { type: 'application/javascript' });
      const swUrl = URL.createObjectURL(blob);
      
      navigator.serviceWorker.register(swUrl)
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, [enableServiceWorker]);

  useEffect(() => {
    const cleanup = measureWebVitals();
    setupAdvancedCaching();
    optimizeImages();
    preloadCriticalResources();
    setupServiceWorker();

    return () => {
      if (cleanup) cleanup();
    };
  }, [measureWebVitals, setupAdvancedCaching, optimizeImages, preloadCriticalResources, setupServiceWorker]);

  // Performance optimization recommendations
  const getOptimizationRecommendations = () => {
    const recommendations = [];

    if (performanceMetrics.lcp > 2500) {
      recommendations.push('Consider optimizing images and reducing server response time');
    }

    if (performanceMetrics.fid > 100) {
      recommendations.push('Reduce JavaScript execution time and optimize third-party scripts');
    }

    if (performanceMetrics.cls > 0.1) {
      recommendations.push('Ensure images and ads have size attributes to prevent layout shifts');
    }

    if (performanceMetrics.fcp > 1800) {
      recommendations.push('Optimize critical rendering path and reduce render-blocking resources');
    }

    if (performanceMetrics.ttfb > 800) {
      recommendations.push('Improve server response time and consider using a CDN');
    }

    return recommendations;
  };

  return (
    <div className="performance-optimizer">
      {/* This component works behind the scenes to optimize performance */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg text-xs max-w-xs">
          <h4 className="font-bold mb-2">Performance Metrics:</h4>
          <div>LCP: {performanceMetrics.lcp.toFixed(0)}ms</div>
          <div>FID: {performanceMetrics.fid.toFixed(0)}ms</div>
          <div>CLS: {performanceMetrics.cls.toFixed(3)}</div>
          <div>FCP: {performanceMetrics.fcp.toFixed(0)}ms</div>
          <div>TTFB: {performanceMetrics.ttfb.toFixed(0)}ms</div>
          
          {getOptimizationRecommendations().length > 0 && (
            <div className="mt-2">
              <h5 className="font-bold">Recommendations:</h5>
              <ul className="text-xs">
                {getOptimizationRecommendations().map((rec, index) => (
                  <li key={index}>• {rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceOptimizer;