import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  connectionSpeed: 'slow' | 'fast' | 'unknown';
  isSlowConnection: boolean;
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    connectionSpeed: 'unknown',
    isSlowConnection: false
  });

  const [fps, setFps] = useState(60);
  const [frameCount, setFrameCount] = useState(0);
  const [lastTime, setLastTime] = useState(performance.now());

  // FPS monitoring
  const measureFPS = useCallback(() => {
    const now = performance.now();
    const delta = now - lastTime;
    
    if (delta >= 1000) {
      const currentFPS = Math.round((frameCount * 1000) / delta);
      setFps(currentFPS);
      setFrameCount(0);
      setLastTime(now);
    } else {
      setFrameCount(prev => prev + 1);
    }
    
    requestAnimationFrame(measureFPS);
  }, [frameCount, lastTime]);

  // Memory monitoring
  const measureMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = memory.usedJSHeapSize;
      setMetrics(prev => ({ ...prev, memoryUsage }));
    }
  }, []);

  // Connection speed detection
  const detectConnectionSpeed = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const effectiveType = connection.effectiveType;
      
      let connectionSpeed: 'slow' | 'fast' | 'unknown' = 'unknown';
      let isSlowConnection = false;

      switch (effectiveType) {
        case 'slow-2g':
        case '2g':
          connectionSpeed = 'slow';
          isSlowConnection = true;
          break;
        case '3g':
          connectionSpeed = 'slow';
          isSlowConnection = true;
          break;
        case '4g':
          connectionSpeed = 'fast';
          isSlowConnection = false;
          break;
        default:
          connectionSpeed = 'unknown';
          isSlowConnection = false;
      }

      setMetrics(prev => ({
        ...prev,
        connectionSpeed,
        isSlowConnection
      }));
    }
  }, []);

  // Performance observer for long tasks
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.duration > 50) {
            console.warn('Long task detected:', entry.duration + 'ms');
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        console.warn('Long task observer not supported');
      }

      return () => observer.disconnect();
    }
  }, []);

  // Web Vitals monitoring
  useEffect(() => {
    const measureWebVitals = () => {
      // First Contentful Paint
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              console.log('FCP:', entry.startTime);
            }
          });
        });

        try {
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
          console.warn('Paint observer not supported');
        }

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        });

        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.warn('LCP observer not supported');
        }

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          console.log('CLS:', clsValue);
        });

        try {
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS observer not supported');
        }
      }
    };

    measureWebVitals();
  }, []);

  // Initialize monitoring
  useEffect(() => {
    // Start FPS monitoring
    requestAnimationFrame(measureFPS);

    // Start memory monitoring
    const memoryInterval = setInterval(measureMemory, 1000);

    // Detect connection speed
    detectConnectionSpeed();

    // Listen for connection changes
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      connection.addEventListener('change', detectConnectionSpeed);
    }

    return () => {
      clearInterval(memoryInterval);
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        connection.removeEventListener('change', detectConnectionSpeed);
      }
    };
  }, [measureFPS, measureMemory, detectConnectionSpeed]);

  // Update metrics
  useEffect(() => {
    setMetrics(prev => ({
      ...prev,
      fps
    }));
  }, [fps]);

  return {
    metrics,
    isSlowConnection: metrics.isSlowConnection,
    fps: metrics.fps,
    memoryUsage: metrics.memoryUsage,
    connectionSpeed: metrics.connectionSpeed
  };
};