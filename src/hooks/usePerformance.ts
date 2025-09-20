import { useState, useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  isVisible: boolean;
  connectionSpeed: string;
  loadTime: number;
  coreWebVitals: {
    lcp: number | null;
    fid: number | null;
    cls: number | null;
  };
}

export const usePerformance = (): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    renderTime: 0,
    isVisible: true,
    connectionSpeed: 'unknown',
    loadTime: 0,
    coreWebVitals: {
      lcp: null,
      fid: null,
      cls: null
    }
  });

  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const fpsRef = useRef(60);

  const calculateFPS = useCallback(() => {
    frameCount.current++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime.current >= 1000) {
      fpsRef.current = Math.round((frameCount.current * 1000) / (currentTime - lastTime.current));
      frameCount.current = 0;
      lastTime.current = currentTime;
    }
    
    requestAnimationFrame(calculateFPS);
  }, []);

  const measureCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({
        ...prev,
        coreWebVitals: {
          ...prev.coreWebVitals,
          lcp: lastEntry.startTime
        }
      }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        setMetrics(prev => ({
          ...prev,
          coreWebVitals: {
            ...prev.coreWebVitals,
            fid: entry.processingStart - entry.startTime
          }
        }));
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          setMetrics(prev => ({
            ...prev,
            coreWebVitals: {
              ...prev.coreWebVitals,
              cls: clsValue
            }
          }));
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  const getConnectionSpeed = useCallback(() => {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection;
      return connection.effectiveType || connection.type || 'unknown';
    }
    return 'unknown';
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Start FPS calculation
    requestAnimationFrame(calculateFPS);

    // Measure Core Web Vitals
    const cleanupVitals = measureCoreWebVitals();

    const updateMetrics = () => {
      const memory = (performance as any).memory;
      const loadTime = performance.timing ? 
        performance.timing.loadEventEnd - performance.timing.navigationStart : 0;

      setMetrics(prev => ({
        ...prev,
        fps: fpsRef.current,
        memoryUsage: memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0,
        renderTime: performance.now(),
        isVisible: document.visibilityState === 'visible',
        connectionSpeed: getConnectionSpeed(),
        loadTime
      }));
    };

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 1000);
    
    // Update on visibility change
    document.addEventListener('visibilitychange', updateMetrics);

    // Initial update
    updateMetrics();

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', updateMetrics);
      if (cleanupVitals) cleanupVitals();
    };
  }, [calculateFPS, measureCoreWebVitals, getConnectionSpeed]);

  return metrics;
};