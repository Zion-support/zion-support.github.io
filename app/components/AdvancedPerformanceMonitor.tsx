import React, { useEffect, useState, useCallback } from 'react';
import { Activity, Zap, Clock, Database, Wifi, RefreshCw } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
  connectionSpeed: string | null;
  bundleSize: number | null;
  loadTime: number | null;
}

interface PerformanceThresholds {
  lcp: { good: 2500, needsImprovement: 4000 };
  fid: { good: 100, needsImprovement: 300 };
  cls: { good: 0.1, needsImprovement: 0.25 };
  fcp: { good: 1800, needsImprovement: 3000 };
  ttfb: { good: 800, needsImprovement: 1800 };
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null,
    connectionSpeed: null,
    bundleSize: null,
    loadTime: null
  });

  const [isVisible, setIsVisible] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number | null>(null);

  const thresholds: PerformanceThresholds = {
    lcp: { good: 2500, needsImprovement: 4000 },
    fid: { good: 100, needsImprovement: 300 },
    cls: { good: 0.1, needsImprovement: 0.25 },
    fcp: { good: 1800, needsImprovement: 3000 },
    ttfb: { good: 800, needsImprovement: 1800 }
  };

  const getPerformanceStatus = (value: number | null, threshold: { good: number; needsImprovement: number }) => {
    if (value === null) return 'unknown';
    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return '✓';
      case 'needs-improvement': return '⚠';
      case 'poor': return '✗';
      default: return '?';
    }
  };

  const calculatePerformanceScore = useCallback(() => {
    const scores = [];
    
    if (metrics.lcp !== null) {
      const lcpStatus = getPerformanceStatus(metrics.lcp, thresholds.lcp);
      scores.push(lcpStatus === 'good' ? 100 : lcpStatus === 'needs-improvement' ? 60 : 20);
    }
    
    if (metrics.fid !== null) {
      const fidStatus = getPerformanceStatus(metrics.fid, thresholds.fid);
      scores.push(fidStatus === 'good' ? 100 : fidStatus === 'needs-improvement' ? 60 : 20);
    }
    
    if (metrics.cls !== null) {
      const clsStatus = getPerformanceStatus(metrics.cls, thresholds.cls);
      scores.push(clsStatus === 'good' ? 100 : clsStatus === 'needs-improvement' ? 60 : 20);
    }
    
    if (metrics.fcp !== null) {
      const fcpStatus = getPerformanceStatus(metrics.fcp, thresholds.fcp);
      scores.push(fcpStatus === 'good' ? 100 : fcpStatus === 'needs-improvement' ? 60 : 20);
    }
    
    if (metrics.ttfb !== null) {
      const ttfbStatus = getPerformanceStatus(metrics.ttfb, thresholds.ttfb);
      scores.push(ttfbStatus === 'good' ? 100 : ttfbStatus === 'needs-improvement' ? 60 : 20);
    }

    if (scores.length > 0) {
      const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
      setPerformanceScore(Math.round(averageScore));
    }
  }, [metrics, thresholds]);

  useEffect(() => {
    calculatePerformanceScore();
  }, [calculatePerformanceScore]);

  const measurePerformance = useCallback(() => {
    // Measure Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => setMetrics(prev => ({ ...prev, cls: metric.value })));
        getFID((metric) => setMetrics(prev => ({ ...prev, fid: metric.value })));
        getFCP((metric) => setMetrics(prev => ({ ...prev, fcp: metric.value })));
        getLCP((metric) => setMetrics(prev => ({ ...prev, lcp: metric.value })));
        getTTFB((metric) => setMetrics(prev => ({ ...prev, ttfb: metric.value })));
      });
    }

    // Measure memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({ 
        ...prev, 
        memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) // MB
      }));
    }

    // Measure connection speed
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      setMetrics(prev => ({ 
        ...prev, 
        connectionSpeed: connection.effectiveType || 'unknown'
      }));
    }

    // Measure load time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    setMetrics(prev => ({ ...prev, loadTime }));

    // Estimate bundle size (this would be more accurate with actual bundle analysis)
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('assets/')) {
        // This is a rough estimate - in production you'd want more accurate measurement
        totalSize += 100; // KB estimate per script
      }
    });
    setMetrics(prev => ({ ...prev, bundleSize: totalSize }));
  }, []);

  useEffect(() => {
    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [measurePerformance]);

  const formatValue = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    if (unit === 'ms') return `${Math.round(value)}ms`;
    if (unit === 'MB') return `${value}MB`;
    if (unit === 'KB') return `${value}KB`;
    return `${value}${unit}`;
  };

  const getScoreColor = (score: number | null) => {
    if (score === null) return 'text-gray-400';
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <>
      {/* Performance Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        aria-label="Performance metrics"
        title="Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div className="fixed bottom-20 right-4 z-50 bg-white/10 backdrop-blur-sm rounded-xl p-6 w-80 max-h-96 overflow-y-auto border border-blue-500/20 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Performance
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>

          {/* Performance Score */}
          {performanceScore !== null && (
            <div className="mb-6 p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">Overall Score</span>
                <span className={`text-2xl font-bold ${getScoreColor(performanceScore)}`}>
                  {performanceScore}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    performanceScore >= 90 ? 'bg-green-500' : 
                    performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${performanceScore}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Core Web Vitals */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Core Web Vitals</h4>
            
            {/* LCP */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">LCP</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-white">
                  {formatValue(metrics.lcp)}
                </span>
                <span className={`text-xs ${getStatusColor(getPerformanceStatus(metrics.lcp, thresholds.lcp))}`}>
                  {getStatusIcon(getPerformanceStatus(metrics.lcp, thresholds.lcp))}
                </span>
              </div>
            </div>

            {/* FID */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">FID</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-white">
                  {formatValue(metrics.fid)}
                </span>
                <span className={`text-xs ${getStatusColor(getPerformanceStatus(metrics.fid, thresholds.fid))}`}>
                  {getStatusIcon(getPerformanceStatus(metrics.fid, thresholds.fid))}
                </span>
              </div>
            </div>

            {/* CLS */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">CLS</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-white">
                  {formatValue(metrics.cls, '')}
                </span>
                <span className={`text-xs ${getStatusColor(getPerformanceStatus(metrics.cls, thresholds.cls))}`}>
                  {getStatusIcon(getPerformanceStatus(metrics.cls, thresholds.cls))}
                </span>
              </div>
            </div>

            {/* FCP */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">FCP</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-white">
                  {formatValue(metrics.fcp)}
                </span>
                <span className={`text-xs ${getStatusColor(getPerformanceStatus(metrics.fcp, thresholds.fcp))}`}>
                  {getStatusIcon(getPerformanceStatus(metrics.fcp, thresholds.fcp))}
                </span>
              </div>
            </div>

            {/* TTFB */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Database className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">TTFB</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-white">
                  {formatValue(metrics.ttfb)}
                </span>
                <span className={`text-xs ${getStatusColor(getPerformanceStatus(metrics.ttfb, thresholds.ttfb))}`}>
                  {getStatusIcon(getPerformanceStatus(metrics.ttfb, thresholds.ttfb))}
                </span>
              </div>
            </div>
          </div>

          {/* Additional Metrics */}
          <div className="mt-6 space-y-3">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Additional Metrics</h4>
            
            {/* Memory Usage */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Database className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">Memory</span>
              </div>
              <span className="text-sm text-white">
                {formatValue(metrics.memoryUsage, 'MB')}
              </span>
            </div>

            {/* Connection Speed */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Wifi className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">Connection</span>
              </div>
              <span className="text-sm text-white">
                {metrics.connectionSpeed || 'N/A'}
              </span>
            </div>

            {/* Load Time */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">Load Time</span>
              </div>
              <span className="text-sm text-white">
                {formatValue(metrics.loadTime)}
              </span>
            </div>

            {/* Bundle Size */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">Bundle Size</span>
              </div>
              <span className="text-sm text-white">
                {formatValue(metrics.bundleSize, 'KB')}
              </span>
            </div>
          </div>

          {/* Refresh Button */}
          <button
            onClick={measurePerformance}
            className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Refresh Metrics</span>
          </button>
        </div>
      )}
    </>
  );
};

export default AdvancedPerformanceMonitor;