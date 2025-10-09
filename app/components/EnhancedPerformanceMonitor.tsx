import React, { useEffect, useState, useCallback } from 'react';
import { Activity, Zap, Clock, TrendingUp, AlertCircle } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memory: number | null;
  loadTime: number;
  renderTime: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  showUI?: boolean;
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  showUI = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memory: null,
    loadTime: 0,
    renderTime: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  // Get Core Web Vitals
  const getCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // FCP (First Contentful Paint)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // TTFB (Time to First Byte)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({ 
        ...prev, 
        memory: Math.round(memory.usedJSHeapSize / 1024 / 1024) // MB
      }));
    }

    // Load time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    setMetrics(prev => ({ ...prev, loadTime }));

    // Render time
    const renderTime = performance.now();
    setMetrics(prev => ({ ...prev, renderTime }));

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fcpObserver.disconnect();
    };
  }, []);

  // Send metrics to analytics
  const sendMetricsToAnalytics = useCallback((metrics: PerformanceMetrics) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // Send Core Web Vitals
      if (metrics.lcp !== null) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'web_vitals', {
          name: 'LCP',
          value: Math.round(metrics.lcp),
          event_category: 'Performance'
        });
      }

      if (metrics.fid !== null) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'web_vitals', {
          name: 'FID',
          value: Math.round(metrics.fid),
          event_category: 'Performance'
        });
      }

      if (metrics.cls !== null) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'web_vitals', {
          name: 'CLS',
          value: Math.round(metrics.cls * 1000),
          event_category: 'Performance'
        });
      }

      // Send custom metrics
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'custom_metrics', {
        load_time: Math.round(metrics.loadTime),
        render_time: Math.round(metrics.renderTime),
        memory_usage: metrics.memory,
        event_category: 'Performance'
      });
    }
  }, []);

  useEffect(() => {
    const cleanup = getCoreWebVitals();

    // Update metrics every 5 seconds
    const interval = setInterval(() => {
      setMetrics(prev => {
        const newMetrics = { ...prev };
        onMetricsUpdate?.(newMetrics);
        sendMetricsToAnalytics(newMetrics);
        return newMetrics;
      });
    }, 5000);

    return () => {
      cleanup?.();
      clearInterval(interval);
    };
  }, [getCoreWebVitals, onMetricsUpdate, sendMetricsToAnalytics]);

  // Performance score calculation
  const getPerformanceScore = () => {
    let score = 100;
    
    if (metrics.lcp && metrics.lcp > 2500) score -= 20;
    if (metrics.fid && metrics.fid > 100) score -= 20;
    if (metrics.cls && metrics.cls > 0.1) score -= 20;
    if (metrics.fcp && metrics.fcp > 1800) score -= 20;
    if (metrics.ttfb && metrics.ttfb > 600) score -= 20;

    return Math.max(0, score);
  };

  const getPerformanceGrade = (score: number) => {
    if (score >= 90) return { grade: 'A', color: 'text-green-400' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-400' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-400' };
    return { grade: 'D', color: 'text-red-400' };
  };

  const performanceScore = getPerformanceScore();
  const { grade, color } = getPerformanceGrade(performanceScore);

  if (!showUI) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2"
        aria-label="Toggle Performance Monitor"
      >
        <Activity className="w-5 h-5" />
        <span className="text-sm font-medium">Performance</span>
        <div className={`w-3 h-3 rounded-full ${performanceScore >= 80 ? 'bg-green-400' : performanceScore >= 60 ? 'bg-yellow-400' : 'bg-red-400'}`} />
      </button>

      {isVisible && (
        <div className="absolute bottom-16 right-0 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Performance Monitor
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* Performance Score */}
            <div className="text-center">
              <div className={`text-3xl font-bold ${color}`}>{grade}</div>
              <div className="text-sm text-gray-400">Performance Score: {performanceScore}/100</div>
            </div>

            {/* Core Web Vitals */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-300">Core Web Vitals</h4>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">LCP:</span>
                  <span className={metrics.lcp && metrics.lcp <= 2500 ? 'text-green-400' : 'text-red-400'}>
                    {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-400">FID:</span>
                  <span className={metrics.fid && metrics.fid <= 100 ? 'text-green-400' : 'text-red-400'}>
                    {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-400">CLS:</span>
                  <span className={metrics.cls && metrics.cls <= 0.1 ? 'text-green-400' : 'text-red-400'}>
                    {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-400">FCP:</span>
                  <span className={metrics.fcp && metrics.fcp <= 1800 ? 'text-green-400' : 'text-red-400'}>
                    {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
                  </span>
                </div>
              </div>
            </div>

            {/* Additional Metrics */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-300">Additional Metrics</h4>
              
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Load Time:</span>
                  <span className="text-white">{Math.round(metrics.loadTime)}ms</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-400">Render Time:</span>
                  <span className="text-white">{Math.round(metrics.renderTime)}ms</span>
                </div>
                
                {metrics.memory && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Memory:</span>
                    <span className="text-white">{metrics.memory}MB</span>
                  </div>
                )}
              </div>
            </div>

            {/* Performance Tips */}
            {performanceScore < 80 && (
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-yellow-200">
                    <div className="font-semibold mb-1">Performance Tips:</div>
                    <ul className="space-y-1">
                      {metrics.lcp && metrics.lcp > 2500 && <li>• Optimize images and fonts</li>}
                      {metrics.fid && metrics.fid > 100 && <li>• Reduce JavaScript execution time</li>}
                      {metrics.cls && metrics.cls > 0.1 && <li>• Reserve space for dynamic content</li>}
                      {metrics.fcp && metrics.fcp > 1800 && <li>• Minimize render-blocking resources</li>}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedPerformanceMonitor;