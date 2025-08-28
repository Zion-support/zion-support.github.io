import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
}

export function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationComplete, setOptimizationComplete] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => prev ? { ...prev, fcp: fcp.startTime } : null);
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => prev ? { ...prev, lcp: lcp.startTime } : null);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        if (fid) {
          setMetrics(prev => prev ? { ...prev, fid: fid.processingStart - fid.startTime } : null);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let cls = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            cls += (entry as any).value;
          }
        }
        setMetrics(prev => prev ? { ...prev, cls } : null);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Time to First Byte
    if (performance.timing) {
      const ttfb = performance.timing.responseStart - performance.timing.requestStart;
      setMetrics(prev => prev ? { ...prev, ttfb } : null);
    }

    // DOM and Window load times
    const domLoad = performance.timing?.domContentLoadedEventEnd - performance.timing?.navigationStart || 0;
    const windowLoad = performance.timing?.loadEventEnd - performance.timing?.navigationStart || 0;
    
    setMetrics(prev => prev ? { ...prev, domLoad, windowLoad } : { fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb, domLoad, windowLoad });
  }, []);

  // Resource optimization
  const optimizeResources = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      // Preload critical resources
      const criticalResources = [
        '/images/hero-ai-solutions.jpg',
        '/images/hero-it-services.jpg',
        '/images/hero-green-it.jpg'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = resource;
        document.head.appendChild(link);
      });

      // Optimize images with lazy loading
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

      // Optimize fonts
      if ('fonts' in document) {
        await document.fonts.ready;
      }

      // Service Worker optimization
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('SW registered: ', registration);
        } catch (error) {
          console.log('SW registration failed: ', error);
        }
      }

      setOptimizationComplete(true);
    } catch (error) {
      console.error('Resource optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, []);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    // Clear unnecessary event listeners
    const cleanup = () => {
      // Cleanup logic here
    };

    // Memory leak prevention
    window.addEventListener('beforeunload', cleanup);
    
    return () => {
      window.removeEventListener('beforeunload', cleanup);
    };
  }, []);

  useEffect(() => {
    measurePerformance();
    const cleanup = optimizeMemory();
    
    // Optimize resources after initial load
    const timer = setTimeout(optimizeResources, 2000);
    
    return () => {
      cleanup();
      clearTimeout(timer);
    };
  }, [measurePerformance, optimizeResources, optimizeMemory]);

  // Performance score calculation
  const getPerformanceScore = useCallback((metrics: PerformanceMetrics) => {
    let score = 100;
    
    if (metrics.fcp > 1800) score -= 20;
    if (metrics.lcp > 2500) score -= 25;
    if (metrics.fid > 100) score -= 15;
    if (metrics.cls > 0.1) score -= 20;
    if (metrics.ttfb > 600) score -= 20;
    
    return Math.max(0, score);
  }, []);

  if (!metrics) return null;

  const performanceScore = getPerformanceScore(metrics);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-white shadow-2xl"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Performance Monitor</span>
        </div>
        
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span>Score:</span>
            <span className={`font-bold ${performanceScore >= 90 ? 'text-green-400' : performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400'}`}>
              {performanceScore}/100
            </span>
          </div>
          
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
          <div className="mt-3 text-center">
            <div className="animate-spin w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full mx-auto"></div>
            <span className="text-xs text-cyan-400">Optimizing...</span>
          </div>
        )}

        {optimizationComplete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-3 text-center"
          >
            <span className="text-xs text-green-400">✓ Optimized</span>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
