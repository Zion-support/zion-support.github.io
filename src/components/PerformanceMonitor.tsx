import React, { useEffect, useState, useCallback } from 'react';
import { 
  Activity, 
  Zap, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  BarChart3,
  Settings,
  RefreshCw,
  X
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domContentLoaded: number;
  loadComplete: number;
  bundleSize: number;
  chunkCount: number;
}

interface PerformanceRecommendation {
  type: 'critical' | 'warning' | 'info';
  message: string;
  impact: 'high' | 'medium' | 'low';
  action: string;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [recommendations, setRecommendations] = useState<PerformanceRecommendation[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Performance thresholds
  const thresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 }
  };

  const getPerformanceScore = useCallback((metric: keyof typeof thresholds, value: number): number => {
    const { good, poor } = thresholds[metric];
    if (value <= good) return 100;
    if (value <= poor) return 50;
    return 0;
  }, []);

  const getOverallScore = useCallback((metrics: PerformanceMetrics): number => {
    const scores = [
      getPerformanceScore('fcp', metrics.fcp),
      getPerformanceScore('lcp', metrics.lcp),
      getPerformanceScore('fid', metrics.fid),
      getPerformanceScore('cls', metrics.cls),
      getPerformanceScore('ttfb', metrics.ttfb)
    ];
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  }, [getPerformanceScore]);

  const generateRecommendations = useCallback((metrics: PerformanceMetrics): PerformanceRecommendation[] => {
    const recs: PerformanceRecommendation[] = [];
    
    if (metrics.fcp > thresholds.fcp.poor) {
      recs.push({
        type: 'critical',
        message: 'First Contentful Paint is too slow',
        impact: 'high',
        action: 'Optimize critical rendering path, reduce server response time'
      });
    }
    
    if (metrics.lcp > thresholds.lcp.poor) {
      recs.push({
        type: 'critical',
        message: 'Largest Contentful Paint needs improvement',
        impact: 'high',
        action: 'Optimize images, implement lazy loading, reduce bundle size'
      });
    }
    
    if (metrics.fid > thresholds.fid.poor) {
      recs.push({
        type: 'warning',
        message: 'First Input Delay is affecting user experience',
        impact: 'medium',
        action: 'Reduce JavaScript execution time, implement code splitting'
      });
    }
    
    if (metrics.cls > thresholds.cls.poor) {
      recs.push({
        type: 'warning',
        message: 'Cumulative Layout Shift is causing visual instability',
        impact: 'medium',
        action: 'Set explicit dimensions for images and media elements'
      });
    }
    
    if (metrics.bundleSize > 500000) { // 500KB
      recs.push({
        type: 'info',
        message: 'Bundle size could be optimized',
        impact: 'low',
        action: 'Implement tree shaking, code splitting, and lazy loading'
      });
    }
    
    return recs;
  }, []);

  const measurePerformance = useCallback(async () => {
    try {
      // Measure Core Web Vitals
      const fcp = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          resolve(fcpEntry ? fcpEntry.startTime : 0);
        }).observe({ entryTypes: ['paint'] });
      });

      const lcp = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          resolve(lcpEntry ? lcpEntry.startTime : 0);
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      });

      const fid = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fidEntry = entries[entries.length - 1] as PerformanceEventTiming;
          resolve(fidEntry ? fidEntry.processingStart - fidEntry.startTime : 0);
        }).observe({ entryTypes: ['first-input'] });
      });

      const cls = await new Promise<number>((resolve) => {
        let clsValue = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as any;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          }
          resolve(clsValue);
        }).observe({ entryTypes: ['layout-shift'] });
      });

      // Get navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigation.responseStart - navigation.requestStart;
      const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
      const loadComplete = navigation.loadEventEnd - navigation.fetchStart;

      // Estimate bundle size (this is a rough estimate)
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && src.includes('js/')) {
          totalSize += 50000; // Rough estimate per chunk
        }
      });

      const newMetrics: PerformanceMetrics = {
        fcp: Math.round(fcp),
        lcp: Math.round(lcp),
        fid: Math.round(fid),
        cls: Math.round(cls * 1000) / 1000,
        ttfb: Math.round(ttfb),
        domContentLoaded: Math.round(domContentLoaded),
        loadComplete: Math.round(loadComplete),
        bundleSize: totalSize,
        chunkCount: scripts.length
      };

      setMetrics(newMetrics);
      setRecommendations(generateRecommendations(newMetrics));
      setLastUpdate(new Date());
    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }
  }, [generateRecommendations]);

  useEffect(() => {
    // Initial measurement
    const timer = setTimeout(measurePerformance, 1000);
    
    // Set up periodic monitoring
    const interval = setInterval(measurePerformance, 30000); // Every 30 seconds
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [measurePerformance]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getMetricColor = (metric: keyof typeof thresholds, value: number) => {
    const score = getPerformanceScore(metric, value);
    if (score >= 90) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-cyan-500" />
          <h3 className="font-semibold text-gray-900 dark:text-white">Performance Monitor</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={measurePerformance}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            title="Refresh metrics"
          >
            <RefreshCw className="w-4 h-4 text-gray-500" />
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            title={isExpanded ? "Collapse" : "Expand"}
          >
            <BarChart3 className="w-4 h-4 text-gray-500" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            title="Close"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {metrics ? (
          <>
            {/* Overall Score */}
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {getOverallScore(metrics)}
              </div>
              <div className="text-sm text-gray-500">Performance Score</div>
            </div>

            {/* Core Web Vitals */}
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900 dark:text-white flex items-center">
                <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                Core Web Vitals
              </h4>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">FCP:</span>
                  <span className={getMetricColor('fcp', metrics.fcp)}>
                    {metrics.fcp}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">LCP:</span>
                  <span className={getMetricColor('lcp', metrics.lcp)}>
                    {metrics.lcp}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">FID:</span>
                  <span className={getMetricColor('fid', metrics.fid)}>
                    {metrics.fid}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">CLS:</span>
                  <span className={getMetricColor('cls', metrics.cls)}>
                    {metrics.cls}
                  </span>
                </div>
              </div>
            </div>

            {/* Additional Metrics */}
            {isExpanded && (
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 dark:text-white flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-500" />
                  Timing Metrics
                </h4>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
                    <span className={getMetricColor('ttfb', metrics.ttfb)}>
                      {metrics.ttfb}ms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">DOM Ready:</span>
                    <span className="text-gray-900 dark:text-white">
                      {metrics.domContentLoaded}ms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Load Complete:</span>
                    <span className="text-gray-900 dark:text-white">
                      {metrics.loadComplete}ms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Bundle Size:</span>
                    <span className="text-gray-900 dark:text-white">
                      {(metrics.bundleSize / 1024).toFixed(1)}KB
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Recommendations */}
            {recommendations.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 dark:text-white flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2 text-orange-500" />
                  Recommendations
                </h4>
                
                {recommendations.slice(0, isExpanded ? undefined : 2).map((rec, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded text-xs border-l-4 ${
                      rec.type === 'critical' 
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                        : rec.type === 'warning'
                        ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                        : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    }`}
                  >
                    <div className="font-medium text-gray-900 dark:text-white">
                      {rec.message}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 mt-1">
                      {rec.action}
                    </div>
                  </div>
                ))}
                
                {!isExpanded && recommendations.length > 2 && (
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="text-xs text-cyan-600 hover:text-cyan-700 dark:text-cyan-400"
                  >
                    Show {recommendations.length - 2} more...
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500 mx-auto mb-2"></div>
            <div className="text-sm text-gray-500">Measuring performance...</div>
          </div>
        )}

        {/* Footer */}
        <div className="text-xs text-gray-500 text-center border-t border-gray-200 dark:border-gray-700 pt-2">
          Last updated: {lastUpdate.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;