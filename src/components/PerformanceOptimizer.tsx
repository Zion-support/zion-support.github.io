import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  loadTime: number;
}

interface PerformanceOptimizerProps {
  children?: React.ReactNode;
  enabled?: boolean;
  showMetrics?: boolean;
  optimizeImages?: boolean;
  lazyLoadThreshold?: number;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enabled = true,
  showMetrics = false,
  optimizeImages = true,
  lazyLoadThreshold = 0.1
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    loadTime: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled || typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        }
        if (entry.entryType === 'layout-shift') {
          setMetrics(prev => ({ ...prev, cls: prev.cls + (entry as any).value }));
        }
      }
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] });

    // Measure load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime }));
      setIsLoading(false);
    });

    return () => observer.disconnect();
  }, [enabled]);

  // Resource preloading
  const preloadCriticalResources = useCallback(() => {
    if (!enabled || typeof document === 'undefined') return;

    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = '/fonts/inter-var.woff2';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);

    // Preload critical images
    const criticalImages = [
      '/images/hero-bg.jpg',
      '/images/logo.svg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, [enabled]);

  // Lazy loading setup
  const setupLazyLoading = useCallback(() => {
    if (!enabled || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-lazy]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.lazy || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    }, { rootMargin: '50px' });

    images.forEach(img => imageObserver.observe(img));

    return () => imageObserver.disconnect();
  }, [enabled, lazyLoadThreshold]);

  useEffect(() => {
    if (!enabled) return;

    measurePerformance();
    preloadCriticalResources();
    setupLazyLoading();

    // DNS prefetch for external domains
    const dnsPrefetchDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'cdn.jsdelivr.net'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });
  }, [enabled, measurePerformance, preloadCriticalResources, setupLazyLoading]);

  const performanceScore = useMemo(() => {
    if (!metrics.fcp || !metrics.lcp) return 0;
    
    let score = 100;
    
    // FCP scoring (good: <1.8s, needs improvement: 1.8-3.0s, poor: >3.0s)
    if (metrics.fcp > 3000) score -= 30;
    else if (metrics.fcp > 1800) score -= 15;
    
    // LCP scoring (good: <2.5s, needs improvement: 2.5-4.0s, poor: >4.0s)
    if (metrics.lcp > 4000) score -= 30;
    else if (metrics.lcp > 2500) score -= 15;
    
    // CLS scoring (good: <0.1, needs improvement: 0.1-0.25, poor: >0.25)
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      {showMetrics && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 bg-slate-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs"
        >
          <h3 className="font-semibold mb-2">Performance Metrics</h3>
          <div className="space-y-1 text-sm">
            <div>FCP: {metrics.fcp.toFixed(0)}ms</div>
            <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
            <div>CLS: {metrics.cls.toFixed(3)}</div>
            <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
            <div className="pt-2 border-t border-slate-700">
              Score: {performanceScore}/100
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};