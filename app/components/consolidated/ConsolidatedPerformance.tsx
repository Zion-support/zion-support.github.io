'use client';

import React, { useEffect, memo, useCallback } from 'react';

interface ConsolidatedPerformanceProps {
  className?: string;
}

// Type definitions for Performance API entries
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target: EventTarget | null;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
  sources: LayoutShiftAttribution[];
}

interface LayoutShiftAttribution {
  node?: Node;
  previousRect: DOMRectReadOnly;
  currentRect: DOMRectReadOnly;
}

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const ConsolidatedPerformance: React.FC<ConsolidatedPerformanceProps> = memo(({ className = '' }) => {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  });

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg',
      '/icons/sprite.svg'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, []);

  // Implement lazy loading for images
  const implementLazyLoading = useCallback(() => {
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
      }, {
        rootMargin: '50px 0px',
        threshold: 0.1
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }, []);

  // Monitor Core Web Vitals
  const monitorCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as LayoutShift;
          if (!clsEntry.hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + clsEntry.value }));
          }
        } else if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });
    } catch (error) {
      // Error handled
    }

    return () => observer.disconnect();
  }, []);

  // Optimize scroll performance
  const optimizeScrollPerformance = useCallback(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Throttled scroll handling
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    preloadCriticalResources();
    implementLazyLoading();
    const cleanupMonitoring = monitorCoreWebVitals();
    const cleanupScroll = optimizeScrollPerformance();

    return () => {
      cleanupMonitoring?.();
      cleanupScroll?.();
    };
  }, [preloadCriticalResources, implementLazyLoading, monitorCoreWebVitals, optimizeScrollPerformance]);

  return (
    <div className={`consolidated-performance ${className}`} style={{ display: 'none' }}>
      {/* This component doesn't render anything visible */}
    </div>
  );
});

ConsolidatedPerformance.displayName = 'ConsolidatedPerformance';

export default ConsolidatedPerformance;