import React, { useState, useEffect, useCallback } from 'react';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  tbt: number | null;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showDetails = false,
  position = 'bottom-right'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    tbt: null
  });
  const [isMonitoring, setIsMonitoring] = useState(false);

  // Performance thresholds
  const thresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 }
  };

  const getMetricStatus = useCallback((metric: keyof typeof thresholds, value: number | null) => {
    if (value === null) return 'unknown';
    if (value <= thresholds[metric].good) return 'good';
    if (value <= thresholds[metric].poor) return 'needs-improvement';
    return 'poor';
  }, [thresholds]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return <TrendingUp className="w-4 h-4" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <AlertTriangle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Measure FCP
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Measure LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure FID
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Measure CLS
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Measure TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Measure FMP (First Meaningful Paint)
    const fmpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fmpEntry = entries.find(entry => entry.name === 'first-meaningful-paint');
      if (fmpEntry) {
        setMetrics(prev => ({ ...prev, fmp: fmpEntry.startTime }));
      }
    });
    fmpObserver.observe({ entryTypes: ['paint'] });

    // Measure TBT (Total Blocking Time)
    const tbtObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      let totalBlockingTime = 0;
      entries.forEach((entry: any) => {
        if (entry.duration > 50) {
          totalBlockingTime += entry.duration - 50;
        }
      });
      setMetrics(prev => ({ ...prev, tbt: totalBlockingTime }));
    });
    tbtObserver.observe({ entryTypes: ['longtask'] });

    // Cleanup observers after 10 seconds
    setTimeout(() => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fmpObserver.disconnect();
      tbtObserver.disconnect();
      setIsMonitoring(false);
    }, 10000);

  }, []);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    measurePerformance();
  }, [measurePerformance]);

  const toggleVisibility = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${Math.round(value)}${unit}`;
  };

  const getOverallScore = () => {
    const scores = [
      getMetricStatus('fcp', metrics.fcp),
      getMetricStatus('lcp', metrics.lcp),
      getMetricStatus('fid', metrics.fid),
      getMetricStatus('cls', metrics.cls),
      getMetricStatus('ttfb', metrics.ttfb)
    ].filter(score => score !== 'unknown');

    if (scores.length === 0) return 'unknown';

    const goodCount = scores.filter(score => score === 'good').length;
    const totalCount = scores.length;

    if (goodCount / totalCount >= 0.8) return 'good';
    if (goodCount / totalCount >= 0.6) return 'needs-improvement';
    return 'poor';
  };

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Toggle Button */}
      <button
        onClick={toggleVisibility}
        className={`mb-2 p-3 rounded-full shadow-lg transition-all duration-300 ${
          isMonitoring 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white animate-pulse' 
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        aria-label="Performance Monitor"
        title="Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Performance Monitor
            </h3>
            <div className="flex items-center space-x-2">
              {!isMonitoring && (
                <button
                  onClick={startMonitoring}
                  className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors"
                >
                  Start
                </button>
              )}
              <button
                onClick={toggleVisibility}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>

          {/* Overall Score */}
          <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Score</span>
              <div className={`flex items-center ${getStatusColor(getOverallScore())}`}>
                {getStatusIcon(getOverallScore())}
                <span className="ml-1 text-sm font-semibold capitalize">
                  {getOverallScore().replace('-', ' ')}
                </span>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-3">
            {showDetails ? (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">FCP:</span>
                  <div className={`flex items-center ${getStatusColor(getMetricStatus('fcp', metrics.fcp))}`}>
                    {getStatusIcon(getMetricStatus('fcp', metrics.fcp))}
                    <span className="ml-1 text-sm font-mono">
                      {formatMetric(metrics.fcp)}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">LCP:</span>
                  <div className={`flex items-center ${getStatusColor(getMetricStatus('lcp', metrics.lcp))}`}>
                    {getStatusIcon(getMetricStatus('lcp', metrics.lcp))}
                    <span className="ml-1 text-sm font-mono">
                      {formatMetric(metrics.lcp)}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">FID:</span>
                  <div className={`flex items-center ${getStatusColor(getMetricStatus('fid', metrics.fid))}`}>
                    {getStatusIcon(getMetricStatus('fid', metrics.fid))}
                    <span className="ml-1 text-sm font-mono">
                      {formatMetric(metrics.fid)}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">CLS:</span>
                  <div className={`flex items-center ${getStatusColor(getMetricStatus('cls', metrics.cls))}`}>
                    {getStatusIcon(getMetricStatus('cls', metrics.cls))}
                    <span className="ml-1 text-sm font-mono">
                      {formatMetric(metrics.cls, '')}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">TTFB:</span>
                  <div className={`flex items-center ${getStatusColor(getMetricStatus('ttfb', metrics.ttfb))}`}>
                    {getStatusIcon(getMetricStatus('ttfb', metrics.ttfb))}
                    <span className="ml-1 text-sm font-mono">
                      {formatMetric(metrics.ttfb)}
                    </span>
                  </div>
                </div>

                {metrics.fmp && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">FMP:</span>
                    <span className="text-sm font-mono text-gray-700 dark:text-gray-300">
                      {formatMetric(metrics.fmp)}
                    </span>
                  </div>
                )}

                {metrics.tbt && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">TBT:</span>
                    <span className="text-sm font-mono text-gray-700 dark:text-gray-300">
                      {formatMetric(metrics.tbt)}
                    </span>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center text-gray-500 dark:text-gray-400">
                <p className="text-sm">Click "Start" to begin monitoring</p>
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  Good
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                  Needs Improvement
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                  Poor
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedPerformanceMonitor;