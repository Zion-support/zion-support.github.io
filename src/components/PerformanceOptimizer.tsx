import React, { useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '50px',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for lazy loading
    if (componentRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      observerRef.current.observe(componentRef.current);
    }

    // Performance monitoring
    if ('PerformanceObserver' in window) {
      try {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime } as PerformanceMetrics));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          if (lcpEntry) {
            setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime } as PerformanceMetrics));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fidEntry = entries[entries.length - 1];
          if (fidEntry) {
            setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime } as PerformanceMetrics));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue } as PerformanceMetrics));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to First Byte
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart } as PerformanceMetrics));
        }

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };

        // Check memory every 30 seconds
        setInterval(checkMemory, 30000);
      }
    }
  }, []);

  useEffect(() => {
    measurePerformance();
    optimizeImages();
    addResourceHints();
    optimizeMemory();
  }, [measurePerformance, optimizeImages, addResourceHints, optimizeMemory]);

  return <>{children}</>;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
