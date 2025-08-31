import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Performance monitoring
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        if (fid) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  // TTFB measurement
  useEffect(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      setMetrics(prev => ({ ...prev, ttfb: navigation.responseStart - navigation.requestStart }));
    }
  }, []);

  // Performance optimization functions
  const optimizeImages = useCallback(() => {
    setIsOptimizing(true);
    
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

    // Optimize existing images
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });

    setIsOptimizing(false);
  }, []);

  const preloadCriticalResources = useCallback(() => {
    // Preload critical CSS and JS
    const criticalResources = [
      '/src/styles/index.css',
      '/src/components/AppHeader.tsx',
      '/src/pages/Home.tsx'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }, []);

  const optimizeFonts = useCallback(() => {
    // Font optimization
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontLinks.forEach(link => {
      link.setAttribute('crossorigin', 'anonymous');
    });
  }, []);

  // Auto-optimize on mount
  useEffect(() => {
    optimizeImages();
    preloadCriticalResources();
    optimizeFonts();
  }, [optimizeImages, preloadCriticalResources, optimizeFonts]);

  if (!metrics) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 text-white text-sm z-50"
    >
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="font-medium">Performance Monitor</span>
      </div>
      
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={metrics.fcp < 1800 ? 'text-green-400' : 'text-yellow-400'}>
            {Math.round(metrics.fcp)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={metrics.lcp < 2500 ? 'text-green-400' : 'text-yellow-400'}>
            {Math.round(metrics.lcp)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={metrics.cls < 0.1 ? 'text-green-400' : 'text-yellow-400'}>
            {metrics.cls.toFixed(3)}
          </span>
        </div>
      </div>

      {isOptimizing && (
        <div className="mt-2 text-center">
          <div className="animate-spin w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full mx-auto"></div>
          <span className="text-xs text-cyan-400">Optimizing...</span>
        </div>
      )}
    </motion.div>
  );
}
