import React, { useEffect, useRef, useState } from 'react';
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
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Performance monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime;
            setMetrics(prev => prev ? { ...prev, lcp } : { fcp: 0, lcp, fid: 0, cls: 0, ttfb: 0 });
          }
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // Intersection Observer for lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (target.dataset.src) {
              target.src = target.dataset.src;
              target.removeAttribute('data-src');
              observerRef.current?.unobserve(target);
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    // Optimize images
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => observerRef.current?.observe(img));

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.svg'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      link.href = resource;
      document.head.appendChild(link);
    });

    // Service worker registration for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.error);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const optimizePerformance = async () => {
    setIsOptimizing(true);
    
    try {
      // Clear unused resources
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(name => caches.delete(name))
        );
      }

      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (img.loading !== 'lazy') {
          img.loading = 'lazy';
        }
      });

      // Prefetch critical routes
      const criticalRoutes = ['/services', '/about', '/contact'];
      criticalRoutes.forEach(route => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      });

      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  };

  if (!metrics) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white text-sm z-50"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="font-semibold">Performance</span>
      </div>
      
      <div className="space-y-1 text-xs">
        <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
        <div>FCP: {metrics.fcp.toFixed(0)}ms</div>
        <div>CLS: {metrics.cls.toFixed(3)}</div>
      </div>
      
      <button
        onClick={optimizePerformance}
        disabled={isOptimizing}
        className="mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors disabled:opacity-50"
      >
        {isOptimizing ? 'Optimizing...' : 'Optimize'}
      </button>
    </motion.div>
  );
}
