import React, { useState, useEffect, useCallback } from 'react';
import { X, RefreshCw, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number;
  renderTime: number;
  loadTime: number;
  fps: number;
}

interface AdvancedPerformanceMonitorProps {
  enableConsoleLogging?: boolean;
  enableReporting?: boolean;
  reportInterval?: number;
  showUI?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({
  enableConsoleLogging = false,
  enableReporting = true,
  reportInterval = 5000,
  showUI = false,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: 0,
    renderTime: 0,
    loadTime: 0,
    fps: 0,
  });

  const [performanceScore, setPerformanceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const updateMetrics = useCallback(() => {
    const currentMetrics: PerformanceMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null,
      memoryUsage: 0,
      renderTime: 0,
      loadTime: 0,
      fps: 0,
    };

    // Get memory usage if available
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      currentMetrics.memoryUsage = memory.usedJSHeapSize / (1024 * 1024); // Convert to MB
    }

    // Get navigation timing
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      currentMetrics.renderTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      currentMetrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    }

    // Calculate FPS
    let frameCount = 0;
    let lastTime = performance.now();
    const calculateFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      if (currentTime >= lastTime + 1000) {
        currentMetrics.fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
      }
      requestAnimationFrame(calculateFPS);
    };
    calculateFPS();

    setMetrics(currentMetrics);
  }, []);

  const getPerformanceScore = useCallback((currentMetrics: PerformanceMetrics): number => {
    let score = 100;
    
    // LCP scoring (Good: <2.5s, Needs Improvement: 2.5-4s, Poor: >4s)
    if (currentMetrics.lcp !== null) {
      if (currentMetrics.lcp > 4000) score -= 20;
      else if (currentMetrics.lcp > 2500) score -= 10;
    }
    
    // FID scoring (Good: <100ms, Needs Improvement: 100-300ms, Poor: >300ms)
    if (currentMetrics.fid !== null) {
      if (currentMetrics.fid > 300) score -= 20;
      else if (currentMetrics.fid > 100) score -= 10;
    }
    
    // CLS scoring (Good: <0.1, Needs Improvement: 0.1-0.25, Poor: >0.25)
    if (currentMetrics.cls !== null) {
      if (currentMetrics.cls > 0.25) score -= 20;
      else if (currentMetrics.cls > 0.1) score -= 10;
    }
    
    // FCP scoring (Good: <1.8s, Needs Improvement: 1.8-3s, Poor: >3s)
    if (currentMetrics.fcp !== null) {
      if (currentMetrics.fcp > 3000) score -= 15;
      else if (currentMetrics.fcp > 1800) score -= 8;
    }
    
    // TTFB scoring (Good: <800ms, Needs Improvement: 800-1800ms, Poor: >1800ms)
    if (currentMetrics.ttfb !== null) {
      if (currentMetrics.ttfb > 1800) score -= 15;
      else if (currentMetrics.ttfb > 800) score -= 8;
    }
    
    // Memory usage scoring
    if (currentMetrics.memoryUsage > 50) score -= 10;
    else if (currentMetrics.memoryUsage > 30) score -= 5;
    
    // FPS scoring
    if (currentMetrics.fps < 30) score -= 15;
    else if (currentMetrics.fps < 45) score -= 8;
    
    return Math.max(0, score);
  }, []);

  const measureWebVitals = useCallback(() => {
    if (!('PerformanceObserver' in window)) return;

    try {
      // LCP - Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID - First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          setMetrics(prev => ({ 
            ...prev, 
            fid: entry.processingStart - entry.startTime 
          }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS - Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FCP - First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // TTFB - Time to First Byte
      const ttfbObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          setMetrics(prev => ({ 
            ...prev, 
            ttfb: entry.responseStart - entry.requestStart 
          }));
        });
      });
      ttfbObserver.observe({ entryTypes: ['navigation'] });

    } catch (error) {
      console.warn('Performance monitoring setup failed:', error);
    }
  }, []);

  const reportMetrics = useCallback((currentMetrics: PerformanceMetrics, score: number) => {
    if (!enableReporting) return;

    const report = {
      timestamp: new Date().toISOString(),
      metrics: currentMetrics,
      score,
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    if (enableConsoleLogging) {
      console.log('Advanced Performance Report:', report);
    }

    // In a real application, you would send this data to your analytics service
    // Example: analytics.track('advanced_performance_metrics', report);
  }, [enableReporting, enableConsoleLogging]);

  useEffect(() => {
    // Initial metrics update
    updateMetrics();

    // Set up performance observers
    measureWebVitals();

    // Set up interval for continuous monitoring
    const interval = setInterval(() => {
      updateMetrics();
    }, reportInterval);

    // Report metrics after page load
    const handleLoad = () => {
      setTimeout(() => {
        const currentMetrics = metrics;
        const score = getPerformanceScore(currentMetrics);
        setPerformanceScore(score);
        reportMetrics(currentMetrics, score);
      }, 2000);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
    };
  }, [updateMetrics, measureWebVitals, reportInterval, getPerformanceScore, reportMetrics, metrics]);

  // Update score when metrics change
  useEffect(() => {
    const score = getPerformanceScore(metrics);
    setPerformanceScore(score);
  }, [metrics, getPerformanceScore]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    return <AlertTriangle className="w-5 h-5 text-red-500" />;
  };

  if (!showUI) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900">Performance Monitor</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => updateMetrics()}
            className="p-1 hover:bg-gray-100 rounded"
            title="Refresh metrics"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="p-1 hover:bg-gray-100 rounded"
            title="Toggle visibility"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {isVisible && (
        <div className="space-y-3">
          {/* Performance Score */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Performance Score</span>
            <div className="flex items-center space-x-2">
              {getScoreIcon(performanceScore)}
              <span className={`text-lg font-bold ${getScoreColor(performanceScore)}`}>
                {performanceScore}
              </span>
            </div>
          </div>

          {/* Core Web Vitals */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700">Core Web Vitals</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-gray-500">LCP:</span>
                <span className="ml-1 font-mono">
                  {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
                </span>
              </div>
              <div>
                <span className="text-gray-500">FID:</span>
                <span className="ml-1 font-mono">
                  {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
                </span>
              </div>
              <div>
                <span className="text-gray-500">CLS:</span>
                <span className="ml-1 font-mono">
                  {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
                </span>
              </div>
              <div>
                <span className="text-gray-500">FCP:</span>
                <span className="ml-1 font-mono">
                  {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
                </span>
              </div>
            </div>
          </div>

          {/* Additional Metrics */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700">Additional Metrics</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-gray-500">TTFB:</span>
                <span className="ml-1 font-mono">
                  {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Memory:</span>
                <span className="ml-1 font-mono">
                  {metrics.memoryUsage.toFixed(1)}MB
                </span>
              </div>
              <div>
                <span className="text-gray-500">FPS:</span>
                <span className="ml-1 font-mono">
                  {metrics.fps}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Load:</span>
                <span className="ml-1 font-mono">
                  {metrics.loadTime.toFixed(0)}ms
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;