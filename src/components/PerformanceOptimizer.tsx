import React, { useEffect, useCallback, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export const PerformanceOptimizer: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.8]);
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const performanceDataRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          performanceDataRef.current.fcp = fcpEntry.startTime;
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          performanceDataRef.current.lcp = lastEntry.startTime;
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'first-input') {
            performanceDataRef.current.fid = entry.processingStart - entry.startTime;
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach(entry => {
          if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        performanceDataRef.current.cls = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        performanceDataRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      }
    }
  }, []);

  // Image optimization
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    if (images.length > 0) {
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

  // Resource hints optimization
  const optimizeResourceHints = useCallback(() => {
    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-ai-solutions.jpg',
      '/images/hero-it-services.jpg'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = resource.includes('.woff2') ? 'font' : 'image';
      link.href = resource;
      link.crossOrigin = resource.includes('.woff2') ? 'anonymous' : undefined;
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  // Code splitting optimization
  const optimizeCodeSplitting = useCallback(() => {
    // Prefetch routes that are likely to be visited
    const prefetchRoutes = ['/services', '/about', '/contact'];
    
    prefetchRoutes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }, []);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    // Clean up event listeners and observers
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Monitor memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        console.warn('High memory usage detected');
      }
    }
  }, []);

  // Initialize optimizations
  useEffect(() => {
    measurePerformance();
    optimizeImages();
    optimizeResourceHints();
    optimizeCodeSplitting();

    // Cleanup on unmount
    return () => {
      optimizeMemory();
    };
  }, [measurePerformance, optimizeImages, optimizeResourceHints, optimizeCodeSplitting, optimizeMemory]);

  // Performance monitoring dashboard (development only)
  const showPerformanceDashboard = process.env.NODE_ENV === 'development';

  if (!showPerformanceDashboard) {
    return null;
  }

  return (
    <motion.div
      style={{ opacity, scale }}
      className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white text-sm font-mono max-w-xs"
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-zion-cyan font-semibold">Performance</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </div>
        
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={performanceDataRef.current.fcp < 1800 ? 'text-green-400' : 'text-yellow-400'}>
              {performanceDataRef.current.fcp.toFixed(0)}ms
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={performanceDataRef.current.lcp < 2500 ? 'text-green-400' : 'text-yellow-400'}>
              {performanceDataRef.current.lcp.toFixed(0)}ms
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={performanceDataRef.current.fid < 100 ? 'text-green-400' : 'text-yellow-400'}>
              {performanceDataRef.current.fid.toFixed(0)}ms
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={performanceDataRef.current.cls < 0.1 ? 'text-green-400' : 'text-yellow-400'}>
              {performanceDataRef.current.cls.toFixed(3)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={performanceDataRef.current.ttfb < 600 ? 'text-green-400' : 'text-yellow-400'}>
              {performanceDataRef.current.ttfb.toFixed(0)}ms
            </span>
          </div>
        </div>

        <div className="pt-2 border-t border-white/20">
          <div className="flex justify-between text-xs text-gray-400">
            <span>Memory:</span>
            <span>
              {('memory' in performance) 
                ? `${Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024)}MB`
                : 'N/A'
              }
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
