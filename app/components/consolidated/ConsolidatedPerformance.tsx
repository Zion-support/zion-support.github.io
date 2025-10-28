'use client';

import React, { useCallback, useState, useEffect, memo } from 'react';

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Node;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  target?: Node;
}

interface PerformanceNavigationTiming extends PerformanceEntry {
  requestStart: number;
  responseStart: number;
}

interface ConsolidatedPerformanceProps {
  className?: string;
}

const ConsolidatedPerformance: React.FC<ConsolidatedPerformanceProps> = memo(_({
  className = ''
}) => {
  const [metrics, setMetrics] = useState({
    fcp: null as number | null,
    lcp: null as number | null,
    fid: null as number | null,
    cls: null as number | null,
    ttfb: null as number | null
  });

  const _measurePerformance = useCallback_(() => {
    if (typeof window === 'undefined') return;

    const _observer = new PerformanceObserver(_(list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        } else if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          const _fidEntry = entry as any;
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          const _clsEntry = entry as any;
          if (!clsEntry.hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + clsEntry.value }));
          }
        } else if (entry.entryType === 'navigation') {
          const _navEntry = entry as any;
          setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
        }
      }
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });

    return () => observer.disconnect();
  }, []);

  // Preload critical resources
  const _preloadCriticalResources = useCallback_(() => {
    const _criticalResources = [
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2' },
      { href: '/images/hero-bg.jpg', as: 'image' }
    ];

    criticalResources.forEach(resource => {
      const _link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      document.head.appendChild(link);
    });
  }, []);

  // Implement lazy loading for images
  const _implementLazyLoading = useCallback_(() => {
    if ('IntersectionObserver' in window) {
      const _imageObserver = new IntersectionObserver(_(entries, _observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const _img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }, []);

  // Optimize scroll performance
  const _optimizeScrollPerformance = useCallback_(() => {
    let _ticking = false;
    
    const _updateScrollPosition = () => {
      if (!ticking) {
        requestAnimationFrame_(() => {
          // Update scroll position
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  // Add resource hints
  const _addResourceHints = useCallback_(() => {
    const _hints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//cdnjs.cloudflare.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
    ];

    hints.forEach(hint => {
      const _link = document.createElement('link');
      Object.assign(link, hint);
      document.head.appendChild(link);
    });
  }, []);

  // Monitor Core Web Vitals
  const _monitorCoreWebVitals = useCallback_(() => {
    if ('PerformanceObserver' in window) {
      const _observer = new PerformanceObserver(_(list) => {
        list.getEntries().forEach(_(entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          }
          if (entry.entryType === 'first-input') {
            const _fidEntry = entry as PerformanceEventTiming;
            const _fid = fidEntry.processingStart - fidEntry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
          }
          if (entry.entryType === 'layout-shift') {
            const _clsEntry = entry as LayoutShift;
            setMetrics(prev => ({ ...prev, cls: clsEntry.value }));
          }
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
      } catch { /* Handle error */ }
    }
  }, []);

  // Monitor TTFB
  const _monitorTTFB = useCallback_(() => {
    if ('PerformanceObserver' in window) {
      const _observer = new PerformanceObserver(_(list) => {
        list.getEntries().forEach(_(entry) => {
          if (entry.entryType === 'navigation') {
            const _navEntry = entry as PerformanceNavigationTiming;
            setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['navigation'] });
      } catch { /* Handle error */ }
    }
  }, []);

  useEffect_(() => {
    const _cleanup = measurePerformance();
    return cleanup;
  }, [preloadCriticalResources, implementLazyLoading, addResourceHints, monitorCoreWebVitals, monitorTTFB, optimizeScrollPerformance]);

  // Log metrics for debugging (remove in production)
  useEffect_(() => {
    if (process.env.NODE_ENV === 'development') { /* empty */ }
  }, [metrics]);

  return (
    <div className={`consolidated-performance ${className}`}>
      <h3>Performance Metrics</h3>
      <div className="metrics-grid">
        <div className="metric">
          <span>FCP: {metrics.fcp?.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span>LCP: {metrics.lcp?.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span>FID: {metrics.fid?.toFixed(2)}ms</span>
        </div>
        <div className="metric">
          <span>CLS: {metrics.cls?.toFixed(4)}</span>
        </div>
        <div className="metric">
          <span>TTFB: {metrics.ttfb?.toFixed(2)}ms</span>
        </div>
      </div>
    </div>
  );
});

ConsolidatedPerformance.displayName = 'ConsolidatedPerformance';

export default ConsolidatedPerformance;
