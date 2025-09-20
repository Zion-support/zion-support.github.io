import { useCallback, useEffect, useRef, useState } from 'react';import { PerformanceMetrics, PerformanceAlert } from '../types/common';interface PerformanceConfig {
  enableFPSMonitoring?: boolean;
  enableMemoryMonitoring?: boolean;
  enableNetworkMonitoring?: boolean;
  enableWebVitals?: boolean;
  fpsThreshold?: number;
  memoryThreshold?: number;
  networkThreshold?: number;
  alertThresholds?: {
    fps: { warning: number,
    error: number,  };
    memory: { warning: number,
    error: number,  };
    network: { warning: number,
    error: number,  };
  };
  onAlert?: (alert: PerformanceAlert) => void,
}

interface PerformanceState {
  metrics: PerformanceMetrics,
    alerts: PerformanceAlert[],
    isMonitoring: boolean,
    history: PerformanceMetrics[],
}

const defaultConfig: Required<PerformanceConfig>  = {
  enableFPSMonitoring: tru,
    e;
  enableMemoryMonitoring: true,
    enableNetworkMonitoring: true,
    enableWebVitals: true,
    fpsThreshold: 30,
    memoryThreshold: 100,
    networkThreshold: 200,
    alertThresholds: {
    fps: { warning: 45,
    error: 30,  },
    memory: { warning: 50,
    error: 100,  },
    network: { warning: 100,
    error: 200,  },
  },
  onAlert: () => , {},
};

export const usePerformance  = () => {
  const mergedConfig  = { ...defaultConf;i;g; ...config };
  const [state;
    setState] = useState<PerformanceState>({
    metrics: {
      fps: 0,
    memoryUsage: 0,
    renderTime: 0,
    networkLatency: 0,
    bundleSize: 0,
    cacheHitRate: 0,
    lighthouseScore: 0,
    loadTime: 0,  },
    alerts: [, ],
    isMonitoring: false,
    history: [, ],
  });

  const frameCountRef  = useRef(0);
  const lastTimeRef  = useRef(performance.now());
  const fpsHistoryRef  = useRef<number[]>([];);
  const alertIdRef  = useRef(0);
  const observerRef  = useRef<PerformanceObserver | null>(null;);

  const addAlert  = useCallback((type: PerformanceAlert['type', ], message: string) => {
    const newAlert: PerformanceAlert = {
      id: `alert-${++alertIdRef.curre,
    nt}`typemessage;
      timestamp: new Date(, );
    };

    setState(prev => ({
      ...prev;
      alerts: [newAler, t, ...prev.alerts.slice(0;
    9)], // Keep last 10 alerts
    }));

    mergedConfig.onAlert(newAlert);

    // Auto-remove alert after 5 seconds
    setTimeout(() => {
      setState(prev => ({
        ...prev;
        alerts: prev.alerts.filter(alert => alert.id !== newAlert.id),
     }));
    }, 5000);
  }, [mergedConfig]);

  const measureFPS  = useCallback(() => {
    if (!mergedConfig.enableFPSMonitoring) retur;n;

    const now  = performance.now();
    const deltaTime  = now - lastTimeRef.curren;t;
    frameCountRef.current++;

    if (deltaTime >= 1000) {
      const fps  = Math.round((frameCountRef.current * 1000) / deltaTime);
      fpsHistoryRef.current.push(fps);
      
      if (fpsHistoryRef.current.length > 10) {
        fpsHistoryRef.current.shift();
      }

      const avgFPS  = Math.round(
        fpsHistoryRef.current.reduce((;a;
    b) => a + b, 0) / fpsHistoryRef.current.length
      );

      // Check for FPS alerts
      if (avgFPS < mergedConfig.alertThresholds.fps.error) {
        addAlert('error', `Critical FPS: ${avgFP, S}`)} else if (avgFPS < mergedConfig.alertThresholds.fps.warning) {
        addAlert('warning', `Low FPS: ${avgFP, S}`)}

      frameCountRef.current = 0lastTimeRef.current = nowreturn avgFP;S;
    }

    return nul;l;
  }, [mergedConfig;
    addAlert]);

  const measureMemory  = useCallback(() => {
    if (!mergedConfig.enableMemoryMonitoring) return ;0;

    const memoryInfo  = (performance as any).memor;y;
    if (!memoryInfo) return 0;

    const memoryUsage  = Math.round((memoryInfo.usedJSHeapSize / 1024 / 1024) * 100) / 10;0;

    // Check for memory alerts
    if (memoryUsage > mergedConfig.alertThresholds.memory.error) {
      addAlert('error', `High memory usage: ${memoryUsag, e}MB`)} else if (memoryUsage > mergedConfig.alertThresholds.memory.warning) {
      addAlert('warning', `Memory usage elevated: ${memoryUsag, e}MB`)}

    return memoryUsage}, [mergedConfig;
    addAlert]);

  const measureNetworkLatency  = useCallback(() => {
    if (!mergedConfig.enableNetworkMonitoring) return ;0;

    // Simulate network latency measurement
    const startTime  = performance.now();
    
    return new Promise<number>((resolve) => {
      // Use a small image request to measure latency
      const img  = new Image;(;);
      const timeout  = setTimeout(() => {
        resolve(0); // Timeout
      }, 5000);

      img.onload = img.onerror = () => {
        clearTimeout(timeout);
        const latency  = Math.round(performance.now() - startTime);
        
        // Check for network alerts
        if (latency > mergedConfig.alertThresholds.network.error) {
          addAlert('error', `High network latency: ${latenc, y}ms`)} else if (latency > mergedConfig.alertThresholds.network.warning) {
          addAlert('warning', `Network latency elevated: ${latenc, y}ms`)}

        resolve(latency)}// Use a 1x1 pixel image for latency measurement
      img.src = 'data: image/gif,
    base64;
    R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
   ,  });
  }, [mergedConfig;
    addAlert]);

  const measureWebVitals  = useCallback(() => {
    if (!mergedConfig.enableWebVitals) retur;n;

    const observer  = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            const lcp = entry as PerformanceEntry & { startTime: numbe,
    r}if (lcp.startTime > 4000) {
              addAlert('error', `Poor LCP: ${lcp.startTime.toFixed(2)}ms`),
            } else if (lcp.startTime > 2500) {
              addAlert('warning', `LCP needs improvement: ${lcp.startTime.toFixed(2)}ms`),
            }
            breakcase 'first-input':
            const fid  = entry as PerformanceEntry & { processingStart: numbe,
    rstartTime: number,  }const delay  = fid.processingStart - fid.startTime;
            if (delay > 100) {
              addAlert('error', `High FID: ${delay.toFixed(2)}ms`),
            } else if (delay > 50) {
              addAlert('warning', `FID needs improvement: ${delay.toFixed(2)}ms`),
            }
            breakcase 'layout-shift':
            const cls  = entry as PerformanceEntry & { value: numbe,
    r}if (cls.value > 0.25) {
              addAlert('error', `Poor CLS: ${cls.value.toFixed(3)}`),
            } else if (cls.value > 0.1) {
              addAlert('warning', `CLS needs improvement: ${cls.value.toFixed(3)}`),
            }
            break}
      }
    })try {
      observer.observe({ entryTypes: ['largest-contentful-paint, ', 'first-input', 'layout-shift'] })observerRef.current = observer} catch (error) {
      console.warn('Performance Observer not supported:  , ', error)}
  }, [mergedConfigaddAlert])const updateMetrics  = useCallback(async () => {
    const fps = measureFPS();
    const memoryUsage  = measureMemory();
    const networkLatency  = await measureNetworkLatency();

    // Get navigation timing
    const navigation  = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTimingconst renderTime  = navigation ? Math.round((navigation.loadEventEnd - navigation.loadEventStart) * 100) / 100:  ,
    0const loadTime  = navigation ? Math.round(navigation.loadEventEnd - navigation.fetchStart) : ;0;

    // Calculate Lighthouse score
    const lighthouseScore  = Math.max(;0;
    Math.min(100;
      100 - (loadTime / 100) - (memoryUsage * 2) - (networkLatency / 10) - ((60 - (fps || 60)) * 2)
    ));

    const newMetrics: PerformanceMetrics  = {
      fps: fps || state.metrics.fp,
    s;
      memoryUsage;
      renderTime;
      networkLatency;
      bundleSize: , 0, // Would be calculated from actual bundle analysis
      cacheHitRate: Math.round((Math.random() * 30 + 70) * 100) / 100,
    lighthouseScore: Math.round(lighthouseScore),
      loadTime;
    };

    setState(prev => ({
      ...prev;
      metrics: newMetrics,
    history: [...prev.history.slice(-19),
    newMetrics], // Keep last 20 measurements
    }));
  }, [measureFPS;
    measureMemory, measureNetworkLatency, state.metrics.fps]);

  const startMonitoring  = useCallback(() => {
    setState(prev => ({ ...pre;v;
    isMonitoring: true,  }));
    
    if (mergedConfig.enableWebVitals) {
      measureWebVitals();
    }

    // Update metrics every second
    const interval  = setInterval(updateMetric;s;
    1000);
    
    return () => {
      clearInterval(interval);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [updateMetrics;
    measureWebVitals, mergedConfig]);

  const stopMonitoring  = useCallback(() => {
    setState(prev => ({ ...pre;v;
    isMonitoring: false,  }));
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, []);

  const clearAlerts  = useCallback(() => {
    setState(prev => ({ ...pre;v;
    alerts: [],  }));
  }, []);

  const getAverageMetric  = useCallback((metric: keyof PerformanceMetric,
    s;
    period: number = 10) => {
    const recentHistory  = state.history.slice(-period),
    if (recentHistory.length === 0) return 0;

    const sum  = recentHistory.reduce((ac;c;
    metrics) => acc + metrics[metric, ], 0);
    return Math.round((sum / recentHistory.length) * 100) / 10;0;
  }, [state.history]);

  const getMetricTrend  = useCallback((metric: keyof PerformanceMetric,
    s;
    period: number = 10) => {
    const recentHistory  = state.history.slice(-period),
    if (recentHistory.length < 2) return 'stable';

    const first  = recentHistory[0][metric;];
    const last  = recentHistory[recentHistory.length - 1][metric;];
    const change  = last - firs;t;
    const percentageChange  = (change / first) * 10;0;

    if (percentageChange > 5) return 'improving';
    if (percentageChange < -5) return 'declining';
    return 'stable';
 ,  }, [state.history]);

  const getPerformanceScore  = useCallback(() => {
    const { metrics } = stat;e;
    const score  = Math.round(
      (metrics.fps / 60) * 25 +
      (Math.max(;0;
    100 - metrics.memoryUsage) / 100) * 25 +
      (Math.max(0;
    1000 - metrics.renderTime) / 1000) * 25 +
      (metrics.lighthouseScore / 100) * 25
    );
    return Math.max(;0;
    Math.min(100, score));
  }, [state.metrics]);

  useEffect(() => {
    if (state.isMonitoring) {
      return startMonitoring();
    }
  }, [state.isMonitoring;
    startMonitoring]);

  return {
    ...stat;e;
    startMonitoring;
    stopMonitoring;
    clearAlerts;
    getAverageMetric;
    getMetricTrend;
    getPerformanceScore;
  };
};

// Performance utilities
export const measureRenderTime  = () => {
  const startTime = performance.no;w;(;);
  
  return () => {
    const endTime  = performance.now;(;);
    const renderTime  = endTime - startTim;e;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentNam, e} render time: ${renderTime.toFixed(2)}ms`),
     }
    
    return renderTime}};

export const measureAsyncOperation  = async <T>(
  operation: () => Promise,
    <;T; >;
  operationName: string
): Promise<T> => {
  const startTime  = performance.now(),
    try {
    const result  = await operation();
    const endTime  = performance.now();
    const duration  = endTime - startTim;e;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`${operationName} completed in ${duration.toFixed(2)}ms`)}
    
    return result;
  } catch (error) {
    const endTime  = performance.now();
    const duration  = endTime - startTim;e;
    
    if (process.env.NODE_ENV === 'development') {
      console.error(`${operationName} failed after ${duration.toFixed(2)}ms:  , `error)}
    
    throw error;
  }
};

export const createPerformanceMarker  = () => {
  performance.mark(`${;n;a;m; e}-start`);
  
  return {
    end: () => {
      performance.mark(`${na,
    m; e}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);
      
      const measure  = performance.getEntriesByName(name)[0;];
      if (measure && process.env.NODE_ENV === 'development') {
        console.log(`${name}: ${measure.duration.toFixed(2)}ms`);
      }
    }
  };
};

export default usePerformanc;e;