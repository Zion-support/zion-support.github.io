import React, { useEffect, useState, useCallback } from 'react';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  showMetrics?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
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
    domLoad: 0,
    windowLoad: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [performanceScore, setPerformanceScore] = useState(0);

  // Calculate performance score based on metrics
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;

    // FCP scoring (0-100)
    if (metrics.fcp > 3000) score -= 30;
    else if (metrics.fcp > 2000) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;

    // LCP scoring (0-100)
    if (metrics.lcp > 4000) score -= 30;
    else if (metrics.lcp > 2500) score -= 20;
    else if (metrics.lcp > 1500) score -= 10;

    // FID scoring (0-100)
    if (metrics.fid > 300) score -= 20;
    else if (metrics.fid > 100) score -= 10;

    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;

    return Math.max(0, score);
  }, []);

  // Get performance score color
  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  // Get performance score label
  const getScoreLabel = (score: number): string => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  // Measure First Contentful Paint
  const measureFCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    }
  }, []);

  // Measure Largest Contentful Paint
  const measureLCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      let lcpValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          lcpValue = lastEntry.startTime;
          setMetrics(prev => ({ ...prev, lcp: lcpValue }));
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }, []);

  // Measure First Input Delay
  const measureFID = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          }
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
  }, []);

  // Measure Cumulative Layout Shift
  const measureCLS = useCallback(() => {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
            clsValue += (entry as any).value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  // Measure Time to First Byte
  const measureTTFB = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
          }
        });
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  }, []);

  // Measure DOM and Window load times
  const measureLoadTimes = useCallback(() => {
    const domLoadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    const windowLoadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    
    setMetrics(prev => ({
      ...prev,
      domLoad: domLoadTime,
      windowLoad: windowLoadTime
    }));
  }, []);

  // Initialize performance monitoring
  useEffect(() => {
    if (!enabled) return;

    // Start measuring when component mounts
    measureFCP();
    measureLCP();
    measureFID();
    measureCLS();
    measureTTFB();

    // Measure load times when page loads
    if (document.readyState === 'complete') {
      measureLoadTimes();
    } else {
      window.addEventListener('load', measureLoadTimes);
      return () => window.removeEventListener('load', measureLoadTimes);
    }
  }, [enabled, measureFCP, measureLCP, measureFID, measureCLS, measureTTFB, measureLoadTimes]);

  // Update performance score when metrics change
  useEffect(() => {
    const score = calculatePerformanceScore(metrics);
    setPerformanceScore(score);
    
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, calculatePerformanceScore, onMetricsUpdate]);

  // Show metrics panel on hover (if enabled)
  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  if (!enabled) return null;

  return (
    <>
      {/* Performance Indicator */}
      <div
        className="fixed bottom-4 right-4 z-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative">
          <div className={`w-12 h-12 rounded-full bg-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/30 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 ${isVisible ? 'ring-2 ring-zion-cyan' : ''}`}>
            <Activity className={`w-6 h-6 ${getScoreColor(performanceScore)}`} />
          </div>

          {/* Performance Score Badge */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">{performanceScore}</span>
          </div>
        </div>

        {/* Metrics Panel */}
        {isVisible && showMetrics && (
          <div className="absolute bottom-16 right-0 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/30 rounded-xl p-4 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-zion-cyan" />
                Performance Metrics
              </h3>
              <div className={`text-sm font-medium ${getScoreColor(performanceScore)}`}>
                {getScoreLabel(performanceScore)}
              </div>
            </div>

            {/* Score Display */}
            <div className="text-center mb-4">
              <div className={`text-3xl font-bold ${getScoreColor(performanceScore)}`}>
                {performanceScore}
              </div>
              <div className="text-sm text-zion-slate-light">Performance Score</div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-zion-blue-light/10 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-zion-cyan" />
                  <span className="text-zion-slate-light">FCP</span>
                </div>
                <div className="text-white font-mono">
                  {metrics.fcp > 0 ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
                </div>
                <div className="text-xs text-zion-slate-light">First Contentful Paint</div>
              </div>

              <div className="bg-zion-blue-light/10 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-zion-cyan" />
                  <span className="text-zion-slate-light">LCP</span>
                </div>
                <div className="text-white font-mono">
                  {metrics.lcp > 0 ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
                </div>
                <div className="text-xs text-zion-slate-light">Largest Contentful Paint</div>
              </div>

              <div className="bg-zion-blue-light/10 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-zion-cyan" />
                  <span className="text-zion-slate-light">FID</span>
                </div>
                <div className="text-white font-mono">
                  {metrics.fid > 0 ? `${Math.round(metrics.fid)}ms` : 'N/A'}
                </div>
                <div className="text-xs text-zion-slate-light">First Input Delay</div>
              </div>

              <div className="bg-zion-blue-light/10 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="w-4 h-4 text-zion-cyan" />
                  <span className="text-zion-slate-light">CLS</span>
                </div>
                <div className="text-white font-mono">
                  {metrics.cls > 0 ? metrics.cls.toFixed(3) : 'N/A'}
                </div>
                <div className="text-xs text-zion-slate-light">Cumulative Layout Shift</div>
              </div>
            </div>

            {/* Additional Metrics */}
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-zion-slate-light">TTFB:</span>
                <span className="text-white font-mono">
                  {metrics.ttfb > 0 ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zion-slate-light">DOM Load:</span>
                <span className="text-white font-mono">
                  {metrics.domLoad > 0 ? `${Math.round(metrics.domLoad)}ms` : 'N/A'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zion-slate-light">Window Load:</span>
                <span className="text-white font-mono">
                  {metrics.windowLoad > 0 ? `${Math.round(metrics.windowLoad)}ms` : 'N/A'}
                </span>
              </div>
            </div>

            {/* Performance Tips */}
            <div className="mt-4 p-3 bg-zion-cyan/10 rounded-lg border border-zion-cyan/20">
              <div className="text-xs text-zion-cyan font-medium mb-1">Performance Tips</div>
              <div className="text-xs text-zion-slate-light">
                {performanceScore >= 90 ? 'Excellent performance! Keep it up.' :
                 performanceScore >= 70 ? 'Good performance. Consider optimizing images and reducing bundle size.' :
                 'Performance needs improvement. Focus on Core Web Vitals optimization.'}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
