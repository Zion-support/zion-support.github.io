'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkRequests: number;
  cacheHitRate: number;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableMetrics?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableMetrics = true,
  enableLazyLoading = true,
  enablePreloading = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkRequests: 0,
    cacheHitRate: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Performance monitoring
  useEffect(() => {
    if (!enableMetrics) return;

    const startTime = performance.now();
    let renderStartTime = 0;

    const measurePerformance = () => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      // Memory usage (if available)
      const memoryUsage = (performance as any).memory 
        ? (performance as any).memory.usedJSHeapSize / 1024 / 1024 
        : 0;

      // Network requests count
      const networkRequests = performance.getEntriesByType('resource').length;

      // Cache hit rate (simplified)
      const cacheHitRate = performance.getEntriesByType('resource')
        .filter((entry: any) => entry.transferSize === 0).length / 
        performance.getEntriesByType('resource').length * 100;

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderStartTime ? endTime - renderStartTime : 0),
        memoryUsage: Math.round(memoryUsage * 100) / 100,
        networkRequests,
        cacheHitRate: Math.round(cacheHitRate * 100) / 100
      });
    };

    // Measure render time
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'measure' && entry.name === 'render') {
          renderStartTime = entry.startTime;
        }
      });
    });

    observer.observe({ entryTypes: ['measure'] });

    // Measure performance after component mount
    const timer = setTimeout(measurePerformance, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [enableMetrics]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!enableLazyLoading) {
      setIsVisible(true);
      setIsLoading(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setIsLoading(false);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('performance-optimized-content');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [enableLazyLoading]);

  // Preload critical resources
  useEffect(() => {
    if (!enablePreloading || !isVisible) return;

    const preloadResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.as = 'style';
      criticalCSS.href = '/styles/critical.css';
      document.head.appendChild(criticalCSS);

      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalImages.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Preload critical fonts
      const criticalFonts = [
        '/fonts/inter-var.woff2',
        '/fonts/inter-var.woff'
      ];

      criticalFonts.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.type = 'font/woff2';
        link.href = src;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    preloadResources();
  }, [enablePreloading, isVisible]);

  // Optimize images
  const optimizeImage = useCallback((src: string, width?: number, quality: number = 80) => {
    if (!src.startsWith('/')) return src;
    
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    params.set('q', quality.toString());
    params.set('f', 'webp');
    
    return `${src}?${params.toString()}`;
  }, []);

  // Debounce function for performance
  const debounce = useCallback((func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  // Memoize expensive calculations
  const memoizedValue = React.useMemo(() => {
    // Expensive calculation here
    return Math.random() * 1000;
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div id="performance-optimized-content" className="relative">
      {/* Performance Metrics Display (Development Only) */}
      {enableMetrics && process.env.NODE_ENV === 'development' && (
        <div className="fixed top-20 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs z-50">
          <h4 className="font-bold mb-2">Performance Metrics</h4>
          <div className="space-y-1">
            <div>Load Time: {metrics.loadTime}ms</div>
            <div>Render Time: {metrics.renderTime}ms</div>
            <div>Memory: {metrics.memoryUsage}MB</div>
            <div>Requests: {metrics.networkRequests}</div>
            <div>Cache Hit: {metrics.cacheHitRate}%</div>
          </div>
        </div>
      )}

      {/* Optimized Content */}
      <div className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>

      {/* Performance Optimizations */}
      <style jsx>{`
        /* Critical CSS for above-the-fold content */
        .performance-optimized-content {
          contain: layout style paint;
          will-change: transform;
        }
        
        /* Optimize animations */
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Optimize images */
        img {
          loading: lazy;
          decoding: async;
        }
        
        /* Optimize fonts */
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('/fonts/inter-var.woff2') format('woff2');
        }
        
        /* Optimize layout */
        .grid {
          contain: layout;
        }
        
        .flex {
          contain: layout;
        }
      `}</style>
    </div>
  );
};

export default PerformanceOptimizer;