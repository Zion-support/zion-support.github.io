import React, { useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableImageOptimization?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableLazyLoading = true,
  enablePreloading = true,
  enableImageOptimization = true
}) => {
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
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            performanceDataRef.current.fcp = entry.startTime;
            console.log('FCP:', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.startTime > performanceDataRef.current.lcp) {
            performanceDataRef.current.lcp = entry.startTime;
            console.log('LCP:', entry.startTime);
          }
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          performanceDataRef.current.fid = entry.processingStart - entry.startTime;
          console.log('FID:', performanceDataRef.current.fid);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        performanceDataRef.current.cls = clsValue;
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Time to First Byte
    if (performance.timing) {
      performanceDataRef.current.ttfb = performance.timing.responseStart - performance.timing.requestStart;
      console.log('TTFB:', performanceDataRef.current.ttfb);
    }
  }, []);

  // Lazy loading implementation
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading) return;

    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyVideos = document.querySelectorAll('video[data-src]');

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLImageElement | HTMLVideoElement;
          if (element.dataset.src) {
            if (element.tagName === 'IMG') {
              (element as HTMLImageElement).src = element.dataset.src;
            } else if (element.tagName === 'VIDEO') {
              (element as HTMLVideoElement).src = element.dataset.src;
            }
            element.removeAttribute('data-src');
            observerRef.current?.unobserve(element);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    lazyImages.forEach(img => observerRef.current?.observe(img));
    lazyVideos.forEach(video => observerRef.current?.observe(video));
  }, [enableLazyLoading]);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return;

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
  }, [enablePreloading]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for images below the fold
      if (!img.loading) {
        img.loading = 'lazy';
      }
      
      // Add decoding="async" for better performance
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, [enableImageOptimization]);

  // Resource hints
  const addResourceHints = useCallback(() => {
    const hints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'preconnect', href: '//fonts.googleapis.com' },
      { rel: 'preconnect', href: '//fonts.gstatic.com' }
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      document.head.appendChild(link);
    });
  }, []);

  // Memory management
  const optimizeMemory = useCallback(() => {
    // Clean up event listeners
    const cleanup = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };

    // Cleanup on page unload
    window.addEventListener('beforeunload', cleanup);
    
    return cleanup;
  }, []);

  useEffect(() => {
    measurePerformance();
    setupLazyLoading();
    preloadCriticalResources();
    optimizeImages();
    addResourceHints();

    const cleanup = optimizeMemory();

    return () => {
      cleanup();
    };
  }, [measurePerformance, setupLazyLoading, preloadCriticalResources, optimizeImages, addResourceHints, optimizeMemory]);

  // Performance score calculation
  const getPerformanceScore = useCallback(() => {
    const { fcp, lcp, fid, cls, ttfb } = performanceDataRef.current;
    
    let score = 100;
    
    // FCP scoring (0-2.5s is good)
    if (fcp > 2500) score -= 20;
    else if (fcp > 1000) score -= 10;
    
    // LCP scoring (0-2.5s is good)
    if (lcp > 2500) score -= 20;
    else if (lcp > 1000) score -= 10;
    
    // FID scoring (0-100ms is good)
    if (fid > 100) score -= 20;
    else if (fid > 50) score -= 10;
    
    // CLS scoring (0-0.1 is good)
    if (cls > 0.1) score -= 20;
    else if (cls > 0.05) score -= 10;
    
    // TTFB scoring (0-600ms is good)
    if (ttfb > 600) score -= 10;
    
    return Math.max(0, score);
  }, []);

  // Performance insights
  const getPerformanceInsights = useCallback(() => {
    const score = getPerformanceScore();
    const { fcp, lcp, fid, cls, ttfb } = performanceDataRef.current;
    
    const insights = [];
    
    if (fcp > 2500) insights.push('First Contentful Paint is slow. Consider optimizing critical rendering path.');
    if (lcp > 2500) insights.push('Largest Contentful Paint is slow. Optimize hero images and above-the-fold content.');
    if (fid > 100) insights.push('First Input Delay is high. Reduce JavaScript execution time.');
    if (cls > 0.1) insights.push('Cumulative Layout Shift is high. Avoid layout shifts during page load.');
    if (ttfb > 600) insights.push('Time to First Byte is slow. Optimize server response time.');
    
    return { score, insights };
  }, [getPerformanceScore]);

  // Performance monitoring UI (only in development)
  if (process.env.NODE_ENV === 'development') {
    const { score, insights } = getPerformanceInsights();
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-zion-cyan/30 rounded-lg p-4 text-white text-sm max-w-xs z-50"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-zion-cyan animate-pulse"></div>
          <span className="font-semibold">Performance Monitor</span>
        </div>
        <div className="text-zion-cyan font-bold text-lg mb-2">Score: {score}/100</div>
        {insights.length > 0 && (
          <div className="space-y-1">
            <div className="text-xs text-gray-300">Insights:</div>
            {insights.map((insight, index) => (
              <div key={index} className="text-xs text-red-300">• {insight}</div>
            ))}
          </div>
        )}
      </motion.div>
    );
  }

  return null;
};
