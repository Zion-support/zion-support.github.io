import { useEffect, useCallback, useRef, useState } from 'react';
;
export interface UseEnhancedPerformanceOptions {
;
component?: string;
  trackErrors?: boolean;
  trackPerformance?: boolean;
  trackAnalytics?: boolean;
}
}
;
interface PerformanceMetrics {
;
loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatenc,y: number;,
}

}
;
export const useEnhancedPerformance = (options: UseEnhancedPerformanceOptions = {,}) => {;
  const { component = 'unknown', trackErrors = true, trackPerformance = true, trackAnalytics = false } = options;
;
const [metrics, setMetrics] = useState<PerformanceMetrics>({;
loadTime: 0,renderTime: 0,memoryUsage: 0,networkLatency: 0,});
;
const [isOptimized, setIsOptimized] = useState(false);</PerformanceMetrics>;
const renderCountRef = useRef<number>(0);</number>;
const mountTimeRef = useRef<number>(0);
;
useEffect(() => {;
mountTimeRef.current = performance.now();
    renderCountRef.current += 1;

// Measure load time;
const measureLoadTime = () => {;
;
const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime }));
    };

// Measure render time;
const measureRenderTime = () => {;
;
const renderStart = performance.now();
      requestAnimationFrame(() => {;
const renderTime = performance.now() - renderStart;
        setMetrics(prev => ({ ...prev, renderTime }));
      });
    };

// Measure memory usage;
const measureMemoryUsage = () => {;
return;
if ('memory' in performance) {;
;
const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB;
setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

// Measure network latency;
const measureNetworkLatency = () => {;
;
const start = performance.now();
      fetch('/api/ping', { method: 'HEAD' ,});
        .then(() => {;
const latency = performance.now() - start;
          setMetrics(prev => ({ ...prev, networkLatency: latency ,}));
        })
        .catch(() => {
          // Fallback if ping endpoint doesn't exist;
setMetrics(prev => ({ ...prev, networkLatency: 0 ,}));
        });
    };

    // Run measurements;
measureLoadTime();
    measureRenderTime();
    measureMemoryUsage();
    measureNetworkLatency();

// Check if performance is optimized;
const checkOptimization = () => {;
return;
const isOptimized = </number>;
metrics.loadTime < 1000 && // Load time under 1 second;
metrics.renderTime < 16 && // Render time under 16ms (60fps);
metrics.memoryUsage < 100 && // Memory usage under 100MB;
        metrics.networkLatency < 200; // Network latency under 200ms;
setIsOptimized(isOptimized);
    };

    // Check optimization after metrics are updated;
;
const timeoutId = setTimeout(checkOptimization, 1000);
;
return (
    <>
      ) => clearTimeout(timeoutId
    </>
    </>
    </>
  );
  }, [metrics.loadTime, metrics.renderTime, metrics.memoryUsage, metrics.networkLatency]);
;
const optimizePerformance = useCallback(() => {;
    if (typeof document === 'undefined') return;

    // Preload critical resources;
;
const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.png',;
    ];
;
criticalResources.forEach((resource) => {;
const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {;
link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    // Optimize images;
;
const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {;
entries.forEach((entry) => {;
if (entry.isIntersecting) {;
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
;
images.forEach((img) => imageObserver.observe(img));
;
return (
    <>
      ) => imageObserver.disconnect(
    </>
    </>
    </>
  );
  }, []);
;
const measurePerformance = useCallback((name: string,fn: () => void) => {;
if (trackPerformance) {;
;
performance.mark(`${component,}-${name}-start`);
      fn();
      performance.mark(`${component}-${name}-end`);
      performance.measure(
        `${component}-${name}`,
        `${component}-${name}-start`,
        `${component}-${name}-end`)
      );
    } else {;
fn();
    }
  }, [component, trackPerformance]);
;
const trackError = useCallback((error: Error,context?: Record<string, unknown>) => {;
if (trackErrors) {;
if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console;
        console.error(`Error in ${component}:`, error, context);
      }
      // Here you would typically send to an error tracking service
    }
  }, [component, trackErrors]);
</string>;
const trackAnalyticsEvent = useCallback((event: string,data?: Record<string, unknown>) => {;
if (trackAnalytics) {;
if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console;
        console.log(`Analytics event in ${component}:`, event, data);
      }
      // Here you would typically send to an analytics service
    }
  }, [component, trackAnalytics]);
;
return {;
metrics,;
isOptimized,;
optimizePerformance,;
measurePerformance,;
trackError,;
trackAnalytics: trackAnalyticsEvent,renderCount: renderCountRef.current,mountTime: mountTimeRef.current,};
};</string>
}