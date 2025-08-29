import React, { useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  enableOptimizations?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableMonitoring = true,
  enableOptimizations = true
}) => {
  const performanceMetrics = useMemo<PerformanceMetrics>(() => ({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  }), []);

  const optimizeImages = useCallback(() => {
    if (!enableOptimizations) return;

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
    });
  }, [enableOptimizations]);

  const optimizeAnimations = useCallback(() => {
    if (!enableOptimizations) return;

    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--animation-delay', '0s');
    }
  }, [enableOptimizations]);

  const preloadCriticalResources = useCallback(() => {
    if (!enableOptimizations) return;

    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);

    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = '/src/styles/enhanced-futuristic.css';
    criticalCSS.as = 'style';
    document.head.appendChild(criticalCSS);
  }, [enableOptimizations]);

  const monitorPerformance = useCallback(() => {
    if (!enableMonitoring) return;

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            performanceMetrics.fcp = entry.startTime;
            console.log('FCP:', performanceMetrics.fcp);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'largest-contentful-paint') {
            performanceMetrics.lcp = entry.startTime;
            console.log('LCP:', performanceMetrics.lcp);
          }
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-input') {
            performanceMetrics.fid = entry.processingStart - entry.startTime;
            console.log('FID:', performanceMetrics.fid);
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
        performanceMetrics.cls = clsValue;
        console.log('CLS:', performanceMetrics.cls);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Monitor Time to First Byte
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        performanceMetrics.ttfb = navigation.responseStart - navigation.requestStart;
        console.log('TTFB:', performanceMetrics.ttfb);
      }
    }
  }, [enableMonitoring, performanceMetrics]);

  const optimizeBundle = useCallback(() => {
    if (!enableOptimizations) return;

    // Implement service worker for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('Service Worker registered for performance optimization');
      }).catch((error) => {
        console.warn('Service Worker registration failed:', error);
      });
    }

    // Implement intersection observer for lazy loading
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }, [enableOptimizations]);

  useEffect(() => {
    // Initialize optimizations after component mount
    const timer = setTimeout(() => {
      optimizeImages();
      optimizeAnimations();
      preloadCriticalResources();
      optimizeBundle();
      monitorPerformance();
    }, 100);

    return () => clearTimeout(timer);
  }, [optimizeImages, optimizeAnimations, preloadCriticalResources, optimizeBundle, monitorPerformance]);

  // Performance monitoring dashboard (only in development)
  if (process.env.NODE_ENV === 'development' && enableMonitoring) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-zion-cyan/30 rounded-lg p-4 text-xs text-zion-cyan z-50"
      >
        <div className="font-mono space-y-1">
          <div>FCP: {performanceMetrics.fcp.toFixed(0)}ms</div>
          <div>LCP: {performanceMetrics.lcp.toFixed(0)}ms</div>
          <div>FID: {performanceMetrics.fid.toFixed(0)}ms</div>
          <div>CLS: {performanceMetrics.cls.toFixed(3)}</div>
          <div>TTFB: {performanceMetrics.ttfb.toFixed(0)}ms</div>
        </div>
      </motion.div>
    );
  }

  return null;
};
