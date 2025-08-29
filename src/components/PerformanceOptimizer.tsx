import React, { useEffect, useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
}

export function PerformanceOptimizer({ showMetrics = false }: PerformanceOptimizerProps) {
  const location = useLocation();
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalPaths = [
      '/services',
      '/ai-services',
      '/contact',
      '/about'
    ];

    criticalPaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = path;
      document.head.appendChild(link);
    });
  }, []);

  // Monitor Core Web Vitals
  const monitorCoreWebVitals = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            const fcp = entry.startTime;
            setMetrics(prev => ({ ...prev, fcp }));
            console.log('FCP:', fcp);
            // Send to analytics
            if (fcp < 1800) {
              console.log('✅ FCP is good');
            } else {
              console.log('⚠️ FCP needs improvement');
            }
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          const lcp = lastEntry.startTime;
          setMetrics(prev => ({ ...prev, lcp }));
          console.log('LCP:', lcp);
          if (lcp < 2500) {
            console.log('✅ LCP is good');
          } else {
            console.log('⚠️ LCP needs improvement');
          }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fid = entry.processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
          console.log('FID:', fid);
          if (fid < 100) {
            console.log('✅ FID is good');
          } else {
            console.log('⚠️ FID needs improvement');
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => ({ ...prev, cls: clsValue }));
        console.log('CLS:', clsValue);
        if (clsValue < 0.1) {
          console.log('✅ CLS is good');
        } else {
          console.log('⚠️ CLS needs improvement');
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (!img.loading) {
        img.loading = 'lazy';
      }
      
      // Add decoding="async" for better performance
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  // Add intersection observer for animations
  const setupIntersectionObserver = useCallback(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el) => observer.observe(el));
  }, []);

  // Route change optimization
  useEffect(() => {
    // Preload critical resources on route change
    preloadCriticalResources();
    
    // Optimize images on route change
    setTimeout(optimizeImages, 100);
    
    // Setup intersection observer
    setupIntersectionObserver();
  }, [location.pathname, preloadCriticalResources, optimizeImages, setupIntersectionObserver]);

  // Initial setup
  useEffect(() => {
    monitorCoreWebVitals();
    preloadCriticalResources();
    optimizeImages();
    setupIntersectionObserver();

    // Add performance monitoring to window for debugging
    (window as any).performanceMetrics = {
      getMetrics: () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const ttfb = navigation.responseStart - navigation.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
        return {
          ttfb,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          totalTime: navigation.loadEventEnd - navigation.navigationStart
        };
      }
    };
  }, [monitorCoreWebVitals, preloadCriticalResources, optimizeImages, setupIntersectionObserver]);

  // Performance score calculation
  const calculatePerformanceScore = () => {
    let score = 100;
    
    if (metrics.fcp > 1800) score -= 20;
    if (metrics.lcp > 2500) score -= 25;
    if (metrics.fid > 100) score -= 25;
    if (metrics.cls > 0.1) score -= 30;
    
    return Math.max(0, score);
  };

  const performanceScore = calculatePerformanceScore();
  const grade = performanceScore >= 90 ? 'A' : performanceScore >= 80 ? 'B' : performanceScore >= 70 ? 'C' : performanceScore >= 60 ? 'D' : 'F';
  const gradeColor = performanceScore >= 90 ? 'text-green-500' : performanceScore >= 80 ? 'text-yellow-500' : performanceScore >= 70 ? 'text-orange-500' : 'text-red-500';

  if (!showMetrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Performance Monitor
        </h3>
        <div className={`text-lg font-bold ${gradeColor}`}>
          {grade}
        </div>
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FCP:</span>
          <span className={metrics.fcp > 1800 ? 'text-red-500' : 'text-green-500'}>
            {metrics.fcp}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">LCP:</span>
          <span className={metrics.lcp > 2500 ? 'text-red-500' : 'text-green-500'}>
            {metrics.lcp}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FID:</span>
          <span className={metrics.fid > 100 ? 'text-red-500' : 'text-green-500'}>
            {metrics.fid}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">CLS:</span>
          <span className={metrics.cls > 0.1 ? 'text-red-500' : 'text-green-500'}>
            {metrics.cls.toFixed(3)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
          <span className={metrics.ttfb > 800 ? 'text-red-500' : 'text-green-500'}>
            {metrics.ttfb}ms
          </span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600 dark:text-gray-400">Score:</span>
          <span className={`text-sm font-semibold ${gradeColor}`}>
            {performanceScore}/100
          </span>
        </div>
      </div>
    </div>
  );
}
