import React, { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
}

interface PerformanceOptimizerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableLogging?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  onMetricsUpdate,
  enableLogging = false
}) => {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null
  });

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      onMetricsUpdate?.(updated);
      return updated;
    });
  }, [onMetricsUpdate]);

  const measureWebVitals = useCallback(async () => {
    try {
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
      
      getCLS((metric) => {
        updateMetrics({ cls: metric.value });
        if (enableLogging) console.log('CLS:', metric);
      });

      getFID((metric) => {
        updateMetrics({ fid: metric.value });
        if (enableLogging) console.log('FID:', metric);
      });

      getFCP((metric) => {
        updateMetrics({ fcp: metric.value });
        if (enableLogging) console.log('FCP:', metric);
      });

      getLCP((metric) => {
        updateMetrics({ lcp: metric.value });
        if (enableLogging) console.log('LCP:', metric);
      });

      getTTFB((metric) => {
        updateMetrics({ ttfb: metric.value });
        if (enableLogging) console.log('TTFB:', metric);
      });
    } catch (error) {
      console.warn('Failed to load web-vitals:', error);
    }
  }, [updateMetrics, enableLogging]);

  const measureMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const usedMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
      updateMetrics({ memoryUsage: usedMB });
      if (enableLogging) console.log('Memory usage:', usedMB, 'MB');
    }
  }, [updateMetrics, enableLogging]);

  const optimizeImages = useCallback(() => {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }, []);

  const preloadCriticalResources = useCallback(() => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = '/critical.css';
    criticalCSS.as = 'style';
    criticalCSS.onload = () => {
      criticalCSS.rel = 'stylesheet';
    };
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);
  }, []);

  const optimizeAnimations = useCallback(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    }

    // Optimize animations for better performance
    const style = document.createElement('style');
    style.textContent = `
      .reduce-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const startMark = useCallback((name: string) => {
    if ('performance' in window && 'mark' in performance) {
      performance.mark(`${name}-start`);
    }
  }, []);

  const endMark = useCallback((name: string) => {
    if ('performance' in window && 'mark' in performance && 'measure' in performance) {
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);
    }
  }, []);

  useEffect(() => {
    // Measure initial performance
    measureWebVitals();
    measureMemoryUsage();

    // Set up periodic memory monitoring
    const memoryInterval = setInterval(measureMemoryUsage, 30000);

    // Optimize images
    optimizeImages();

    // Preload critical resources
    preloadCriticalResources();

    // Optimize animations
    optimizeAnimations();

    // Monitor page load performance
    const measurePageLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        if (enableLogging) {
          console.log('Page load metrics:', {
            domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
            loadComplete: Math.round(loadTime),
            totalTime: Math.round(navigation.loadEventEnd - navigation.fetchStart)
          });
        }
      }
    };

    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

    // Monitor resource loading
    const monitorResources = () => {
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter((resource: any) => resource.duration > 1000);
      
      if (slowResources.length > 0 && enableLogging) {
        console.warn('Slow resources detected:', slowResources.map((r: any) => ({
          name: r.name,
          duration: Math.round(r.duration) + 'ms'
        })));
      }
    };

    setTimeout(monitorResources, 5000);

    return () => {
      clearInterval(memoryInterval);
      window.removeEventListener('load', measurePageLoad);
    };
  }, [measureWebVitals, measureMemoryUsage, optimizeImages, preloadCriticalResources, optimizeAnimations, enableLogging]);

  // Expose methods for external use
  React.useImperativeHandle(React.forwardRef(() => null), () => ({
    startMark,
    endMark,
    measureMemoryUsage,
    getMetrics: () => metrics
  }));

  return null;
};

export default PerformanceOptimizer;