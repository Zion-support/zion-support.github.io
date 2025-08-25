import React, { useEffect, useState } from 'react';
import { 
  Activity, 
  Zap, 
  Clock, 
  HardDrive, 
  Network, 
  Cpu, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
  memoryUsage?: number; // Memory usage (if available)
  networkInfo?: NetworkInformation; // Network information (if available)
}

interface NetworkInformation {
  effectiveType: string;
  downlink: number;
  rtt: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    if (isVisible) {
      measurePerformance();
    }
  }, [isVisible]);

  const measurePerformance = () => {
    // Wait for page to be fully loaded
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
      return () => window.removeEventListener('load', collectMetrics);
    }
  };

  const collectMetrics = () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = getLCP();
    const fid = getFID();
    const cls = getCLS();
    const ttfb = navigation.responseStart - navigation.requestStart;
    const domLoad = navigation.domContentLoadedEventEnd - (navigation as any).navigationStart;
    const windowLoad = navigation.loadEventEnd - (navigation as any).navigationStart;

    const newMetrics: PerformanceMetrics = {
      fcp,
      lcp,
      fid,
      cls,
      ttfb,
      domLoad,
      windowLoad,
      memoryUsage: (performance as any).memory?.usedJSHeapSize,
      networkInfo: (navigator as any).connection
    };

    setMetrics(newMetrics);
    calculatePerformanceScore(newMetrics);
    generateRecommendations(newMetrics);
  };

  const getLCP = (): number => {
    if ('PerformanceObserver' in window) {
      return new Promise((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.startTime);
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }) as any;
    }
    return 0;
  };

  const getFID = (): number => {
    if ('PerformanceObserver' in window) {
      return new Promise((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const firstEntry = entries[0];
          resolve((firstEntry as any).processingStart - firstEntry.startTime);
        });
        observer.observe({ entryTypes: ['first-input'] });
      }) as any;
    }
    return 0;
  };

  const getCLS = (): number => {
    if ('PerformanceObserver' in window) {
      return new Promise((resolve) => {
        let cls = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              cls += (entry as any).value;
            }
          }
          resolve(cls);
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }) as any;
    }
    return 0;
  };

  const calculatePerformanceScore = (metrics: PerformanceMetrics) => {
    let score = 100;

    // FCP scoring (0-25 points)
    if (metrics.fcp <= 1800) score -= 0;
    else if (metrics.fcp <= 3000) score -= 5;
    else if (metrics.fcp <= 4000) score -= 10;
    else score -= 25;

    // LCP scoring (0-25 points)
    if (metrics.lcp <= 2500) score -= 0;
    else if (metrics.lcp <= 4000) score -= 5;
    else if (metrics.lcp <= 6000) score -= 10;
    else score -= 25;

    // FID scoring (0-25 points)
    if (metrics.fid <= 100) score -= 0;
    else if (metrics.fid <= 300) score -= 5;
    else if (metrics.fid <= 500) score -= 10;
    else score -= 25;

    // CLS scoring (0-25 points)
    if (metrics.cls <= 0.1) score -= 0;
    else if (metrics.cls <= 0.25) score -= 5;
    else if (metrics.cls <= 0.4) score -= 10;
    else score -= 25;

    setPerformanceScore(Math.max(0, score));
  };

  const generateRecommendations = (metrics: PerformanceMetrics) => {
    const recs: string[] = [];

    if (metrics.fcp > 3000) {
      recs.push('Optimize First Contentful Paint by reducing render-blocking resources');
    }
    if (metrics.lcp > 4000) {
      recs.push('Improve Largest Contentful Paint by optimizing images and critical resources');
    }
    if (metrics.fid > 300) {
      recs.push('Reduce First Input Delay by minimizing JavaScript execution time');
    }
    if (metrics.cls > 0.25) {
      recs.push('Minimize Cumulative Layout Shift by setting explicit dimensions for media');
    }
    if (metrics.ttfb > 600) {
      recs.push('Optimize Time to First Byte by improving server response time');
    }

    setRecommendations(recs);
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    return <AlertTriangle className="w-5 h-5 text-red-500" />;
  };

  const formatTime = (ms: number): string => {
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <>
      {/* Performance Monitor Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 left-6 z-50 p-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50"
        aria-label="Toggle performance monitor"
        aria-expanded={isVisible}
        aria-controls="performance-panel"
      >
        <Activity className="w-6 h-6" />
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div
          id="performance-panel"
          className="fixed bottom-24 left-6 z-50 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto"
          role="dialog"
          aria-labelledby="performance-title"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 id="performance-title" className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Performance Monitor
              </h2>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Close performance monitor"
              >
                ×
              </button>
            </div>

            {/* Performance Score */}
            <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Performance Score</span>
                {getScoreIcon(performanceScore)}
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-3xl font-bold ${getScoreColor(performanceScore)}`}>
                  {performanceScore}
                </span>
                <span className="text-gray-500">/ 100</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    performanceScore >= 90 ? 'bg-green-500' : 
                    performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${performanceScore}%` }}
                />
              </div>
            </div>

            {/* Metrics */}
            {metrics && (
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Core Web Vitals</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-xs text-blue-600 font-medium">FCP</span>
                    </div>
                    <div className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                      {formatTime(metrics.fcp)}
                    </div>
                    <div className="text-xs text-blue-700 dark:text-blue-300">
                      First Contentful Paint
                    </div>
                  </div>

                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">LCP</span>
                    </div>
                    <div className="text-lg font-semibold text-green-900 dark:text-green-100">
                      {formatTime(metrics.lcp)}
                    </div>
                    <div className="text-xs text-green-700 dark:text-green-300">
                      Largest Contentful Paint
                    </div>
                  </div>

                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Cpu className="w-4 h-4 text-purple-600" />
                      <span className="text-xs text-purple-600 font-medium">FID</span>
                    </div>
                    <div className="text-lg font-semibold text-purple-900 dark:text-purple-100">
                      {formatTime(metrics.fid)}
                    </div>
                    <div className="text-xs text-purple-700 dark:text-purple-300">
                      First Input Delay
                    </div>
                  </div>

                  <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <HardDrive className="w-4 h-4 text-orange-600" />
                      <span className="text-xs text-orange-600 font-medium">CLS</span>
                    </div>
                    <div className="text-lg font-semibold text-orange-900 dark:text-orange-100">
                      {metrics.cls.toFixed(3)}
                    </div>
                    <div className="text-xs text-orange-700 dark:text-orange-300">
                      Cumulative Layout Shift
                    </div>
                  </div>
                </div>

                {/* Additional Metrics */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Additional Metrics</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
                      <span className="font-medium">{formatTime(metrics.ttfb)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">DOM Load:</span>
                      <span className="font-medium">{formatTime(metrics.domLoad)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Window Load:</span>
                      <span className="font-medium">{formatTime(metrics.windowLoad)}</span>
                    </div>
                    {metrics.memoryUsage && (
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Memory:</span>
                        <span className="font-medium">{formatBytes(metrics.memoryUsage)}</span>
                      </div>
                    )}
                    {metrics.networkInfo && (
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Network:</span>
                        <span className="font-medium">{metrics.networkInfo.effectiveType}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Recommendations */}
                {recommendations.length > 0 && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Info className="w-4 h-4 text-blue-600" />
                      Recommendations
                    </h3>
                    <ul className="space-y-2">
                      {recommendations.map((rec, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Refresh Button */}
            <button
              onClick={collectMetrics}
              className="w-full mt-4 px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Refresh Metrics
            </button>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isVisible && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsVisible(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};