import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

interface PerformanceOptimizerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  onMetricsUpdate,
  enableReporting = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });

  useEffect(() => {
    if (!enableReporting) return;

    // Import web-vitals dynamically to avoid bundle bloat
    import('web-vitals').then((webVitals) => {
      const getCLS = webVitals.getCLS;
      const getFID = webVitals.getFID;
      const getFCP = webVitals.getFCP;
      const getLCP = webVitals.getLCP;
      const getTTFB = webVitals.getTTFB;
      getCLS((metric) => {
        setMetrics(prev => {
          const newMetrics = { ...prev, cls: metric.value };
          onMetricsUpdate?.(newMetrics);
          return newMetrics;
        });
      });

      getFID((metric) => {
        setMetrics(prev => {
          const newMetrics = { ...prev, fid: metric.value };
          onMetricsUpdate?.(newMetrics);
          return newMetrics;
        });
      });

      getFCP((metric) => {
        setMetrics(prev => {
          const newMetrics = { ...prev, fcp: metric.value };
          onMetricsUpdate?.(newMetrics);
          return newMetrics;
        });
      });

      getLCP((metric) => {
        setMetrics(prev => {
          const newMetrics = { ...prev, lcp: metric.value };
          onMetricsUpdate?.(newMetrics);
          return newMetrics;
        });
      });

      getTTFB((metric) => {
        setMetrics(prev => {
          const newMetrics = { ...prev, ttfb: metric.value };
          onMetricsUpdate?.(newMetrics);
          return newMetrics;
        });
      });
    });

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/main.woff2',
        '/images/hero.webp',
        '/api/services',
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.includes('.woff') ? 'font' : 
                  resource.includes('.webp') ? 'image' : 'fetch';
        if (resource.includes('.woff')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();

    // Cleanup
    return () => {
      // Cleanup any observers or listeners if needed
    };
  }, [enableReporting, onMetricsUpdate, metrics]);

  // Performance budget monitoring
  useEffect(() => {
    const checkPerformanceBudget = () => {
      const { fcp, lcp, fid, cls } = metrics;
      
      // Performance budgets (in milliseconds)
      const budgets = {
        fcp: 1800, // First Contentful Paint
        lcp: 2500, // Largest Contentful Paint
        fid: 100,  // First Input Delay
        cls: 0.1,  // Cumulative Layout Shift
      };

      const violations = [];
      
      if (fcp && fcp > budgets.fcp) {
        violations.push(`FCP: ${fcp}ms (budget: ${budgets.fcp}ms)`);
      }
      if (lcp && lcp > budgets.lcp) {
        violations.push(`LCP: ${lcp}ms (budget: ${budgets.lcp}ms)`);
      }
      if (fid && fid > budgets.fid) {
        violations.push(`FID: ${fid}ms (budget: ${budgets.fid}ms)`);
      }
      if (cls && cls > budgets.cls) {
        violations.push(`CLS: ${cls} (budget: ${budgets.cls})`);
      }

      if (violations.length > 0 && enableReporting) {
        console.warn('Performance budget violations:', violations);
        
        // Report to analytics or monitoring service
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'performance_budget_violation', {
            event_category: 'Performance',
            event_label: violations.join(', '),
            value: violations.length,
          });
        }
      }
    };

    checkPerformanceBudget();
  }, [metrics, enableReporting]);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;