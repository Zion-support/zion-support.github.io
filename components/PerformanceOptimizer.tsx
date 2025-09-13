import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

export default function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Performance monitoring
    const measurePerformance = () => {
      if (typeof window === 'undefined') return;

      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime } as PerformanceMetrics));
            }
          }
          
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime } as PerformanceMetrics));
          }
          
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime } as PerformanceMetrics));
          }
          
          if (entry.entryType === 'layout-shift') {
            if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({ 
                ...prev, 
                cls: (prev?.cls || 0) + (entry as any).value 
              } as PerformanceMetrics));
            }
          }
        }
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Measure TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
        } as PerformanceMetrics));
      }

      return () => observer.disconnect();
    };

    measurePerformance();

    // Lazy load images
    const lazyLoadImages = () => {
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
    };

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/css/critical.css',
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'font';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    // Optimize animations
    const optimizeAnimations = () => {
      const animatedElements = document.querySelectorAll('[data-animate]');
      animatedElements.forEach(element => {
        element.addEventListener('animationend', () => {
          element.classList.remove('animate-in');
        });
      });
    };

    // Run optimizations
    lazyLoadImages();
    preloadCriticalResources();
    optimizeAnimations();

    // Check if performance is optimized
    setTimeout(() => {
      const currentMetrics = metrics;
      if (currentMetrics) {
        const isGoodPerformance = 
          currentMetrics.fcp < 1800 && // Good FCP
          currentMetrics.lcp < 2500 && // Good LCP
          currentMetrics.fid < 100 &&  // Good FID
          currentMetrics.cls < 0.1;    // Good CLS
        
        setIsOptimized(isGoodPerformance);
      }
    }, 3000);

  }, [metrics]);

  // Performance optimization functions
  const optimizeImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  };

  const optimizeFonts = () => {
    const fontLinks = document.querySelectorAll('link[rel="stylesheet"][href*="font"]');
    fontLinks.forEach(link => {
      link.setAttribute('media', 'print');
      link.setAttribute('onload', "this.media='all'");
    });
  };

  const optimizeScripts = () => {
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      if (!script.async && !script.defer) {
        script.defer = true;
      }
    });
  };

  // Run optimizations on mount
  useEffect(() => {
    optimizeImages();
    optimizeFonts();
    optimizeScripts();
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-sm z-50">
      <h3 className="font-bold mb-2">Performance Monitor</h3>
      {metrics ? (
        <div className="space-y-1">
          <div>FCP: {metrics.fcp.toFixed(0)}ms</div>
          <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
          <div>FID: {metrics.fid.toFixed(0)}ms</div>
          <div>CLS: {metrics.cls.toFixed(3)}</div>
          <div>TTFB: {metrics.ttfb.toFixed(0)}ms</div>
          <div className={`mt-2 px-2 py-1 rounded ${isOptimized ? 'bg-green-600' : 'bg-red-600'}`}>
            {isOptimized ? '✓ Optimized' : '⚠ Needs Optimization'}
          </div>
        </div>
      ) : (
        <div>Measuring performance...</div>
      )}
    </div>
  );
}