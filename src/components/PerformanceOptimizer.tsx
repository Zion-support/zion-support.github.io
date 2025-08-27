import React, { useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, Gauge, Cpu, HardDrive, Wifi, Battery, Activity } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  enabled: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ enabled }) => {
  const performanceMetrics = useMemo<PerformanceMetrics>(() => ({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  }), []);

  const preloadCriticalResources = useCallback(() => {
    if (!enabled) return;

    // Preload critical fonts
    const fontLinks = [
      'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap',
      'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap'
    ];

    fontLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      document.head.appendChild(link);
    });

    // Preload critical images
    const criticalImages = [
      '/images/hero-bg.jpg',
      '/images/logo.svg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, [enabled]);

  const optimizeImages = useCallback(() => {
    if (!enabled) return;

    // Lazy load images with Intersection Observer
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

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }, [enabled]);

  const optimizeAnimations = useCallback(() => {
    if (!enabled) return;

    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--animation-delay', '0s');
    }

    // Optimize animations for better performance
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(element => {
      const el = element as HTMLElement;
      el.style.willChange = 'transform, opacity';
    });
  }, [enabled]);

  const monitorPerformance = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              performanceMetrics.fcp = entry.startTime;
            }
            break;
          case 'largest-contentful-paint':
            performanceMetrics.lcp = entry.startTime;
            break;
          case 'first-input':
            performanceMetrics.fid = entry.processingStart - entry.startTime;
            break;
          case 'layout-shift':
            performanceMetrics.cls += (entry as any).value;
            break;
        }
      });
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      performanceMetrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
    }
  }, [enabled, performanceMetrics]);

  const optimizeBundle = useCallback(() => {
    if (!enabled) return;

    // Implement service worker for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.error);
    }

    // Prefetch non-critical routes
    const prefetchRoutes = [
      '/about',
      '/services',
      '/contact',
      '/blog'
    ];

    prefetchRoutes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    preloadCriticalResources();
    optimizeImages();
    optimizeAnimations();
    monitorPerformance();
    optimizeBundle();

    // Cleanup
    return () => {
      // Remove preloaded resources
      document.querySelectorAll('link[rel="preload"]').forEach(link => link.remove());
    };
  }, [enabled, preloadCriticalResources, optimizeImages, optimizeAnimations, monitorPerformance, optimizeBundle]);

  // Performance monitoring dashboard (development only)
  if (process.env.NODE_ENV === 'development' && enabled) {
    return (
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50">
        <div className="font-mono">
          <div>FCP: {performanceMetrics.fcp.toFixed(0)}ms</div>
          <div>LCP: {performanceMetrics.lcp.toFixed(0)}ms</div>
          <div>FID: {performanceMetrics.fid.toFixed(0)}ms</div>
          <div>CLS: {performanceMetrics.cls.toFixed(3)}</div>
          <div>TTFB: {performanceMetrics.ttfb.toFixed(0)}ms</div>
        </div>
      </div>
    );
  }

  return null;
};
