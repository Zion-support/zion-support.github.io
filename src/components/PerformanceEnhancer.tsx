import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memory: number;
  renderTime: number;
}

interface PerformanceEnhancerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

export const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  enabled = true,
  showMetrics = false,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    memory: 0,
    renderTime: 0
  });

  const [isVisible, setIsVisible] = useState(showMetrics);

  // Performance optimization techniques
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  const optimizeFonts = useCallback(() => {
    // Preload critical fonts
    const criticalFonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    ];
    
    criticalFonts.forEach(fontUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = fontUrl;
      link.as = 'style';
      link.onload = () => {
        link.rel = 'stylesheet';
      };
      document.head.appendChild(link);
    });
  }, []);

  const optimizeResources = useCallback(() => {
    // Add resource hints
    const resourceHints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
    ];

    resourceHints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossorigin) {
        link.crossOrigin = hint.crossorigin;
      }
      document.head.appendChild(link);
    });
  }, []);

  const measurePerformance = useCallback(() => {
    if (!enabled) return;

    // Measure Core Web Vitals
    const measureFCP = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    };

    const measureLCP = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: (lastEntry as any).startTime as number }));
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    };

    const measureCLS = () => {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const e = entry as any;
          if (!e.hadRecentInput) {
            clsValue += (e.value as number);
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    };

    const measureMemory = () => {
      if ('memory' in (performance as any)) {
        const memory = (performance as any).memory as { usedJSHeapSize: number };
        setMetrics(prev => ({ 
          ...prev, 
          memory: memory.usedJSHeapSize / 1024 / 1024 
        }));
      }
    };

    const measureRenderTime = () => {
      const renderTime = performance.now();
      setMetrics(prev => ({ ...prev, renderTime }));
    };

    // Initialize measurements
    measureFCP();
    measureLCP();
    measureCLS();
    measureMemory();
    measureRenderTime();

    // Update metrics periodically
    const interval = setInterval(() => {
      measureMemory();
      measureRenderTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    // Apply optimizations
    optimizeImages();
    optimizeFonts();
    optimizeResources();

    // Start performance measurement
    const cleanup = measurePerformance();

    // Notify parent of metrics updates
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }

    return cleanup;
  }, [enabled, optimizeImages, optimizeFonts, optimizeResources, measurePerformance, onMetricsUpdate, metrics]);

  if (!enabled) return null;

  return (
    <>
      {isVisible && (
        <div className="fixed top-4 left-4 z-50 bg-black bg-opacity-90 text-white p-4 rounded-lg shadow-lg min-w-[300px] max-w-[400px]">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold">Performance Metrics</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-300 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>First Contentful Paint:</span>
              <span className="text-green-400">{metrics.fcp.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span>Largest Contentful Paint:</span>
              <span className="text-blue-400">{metrics.lcp.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span>Cumulative Layout Shift:</span>
              <span className="text-yellow-400">{metrics.cls.toFixed(4)}</span>
            </div>
            <div className="flex justify-between">
              <span>Memory Usage:</span>
              <span className="text-purple-400">{metrics.memory.toFixed(2)}MB</span>
            </div>
            <div className="flex justify-between">
              <span>Render Time:</span>
              <span className="text-orange-400">{metrics.renderTime.toFixed(2)}ms</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-600">
            <div className="text-xs text-gray-400">
              Performance optimizations active
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PerformanceEnhancer;