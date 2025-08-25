import React, { useState, useEffect, useCallback } from 'react';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Info,
  BarChart3,
  Gauge,
  Smartphone,
  Monitor,
  Globe
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fmp: number; // First Meaningful Paint
  si: number; // Speed Index
  tti: number; // Time to Interactive
}

interface PerformanceScore {
  overall: number;
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface ResourceTiming {
  name: string;
  duration: number;
  size: number;
  type: string;
}

// Performance API type extensions
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: EventTarget;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
  sources: Array<{
    node?: Node;
    currentRect: DOMRectReadOnly;
    previousRect: DOMRectReadOnly;
  }>;
}

export const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fmp: 0,
    si: 0,
    tti: 0
  });
  const [score, setScore] = useState<PerformanceScore>({
    overall: 0,
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });
  const [resourceTimings, setResourceTimings] = useState<ResourceTiming[]>([]);
  const [memoryUsage, setMemoryUsage] = useState<{
    used: number;
    total: number;
    limit: number;
  }>({ used: 0, total: 0, limit: 0 });
  const [networkInfo, setNetworkInfo] = useState<{
    effectiveType: string;
    downlink: number;
    rtt: number;
  }>({ effectiveType: 'unknown', downlink: 0, rtt: 0 });
  const [alerts, setAlerts] = useState<string[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  // Calculate performance scores
  const calculateScore = useCallback((metric: number, thresholds: { good: number; needsImprovement: number }): number => {
    if (metric <= thresholds.good) return 100;
    if (metric <= thresholds.needsImprovement) return 50;
    return 0;
  }, []);

  // Update performance metrics
  const updateMetrics = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // FCP
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      }).observe({ entryTypes: ['paint'] });

      // LCP
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // FID
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1] as PerformanceEventTiming;
        if (fid && 'processingStart' in fid) {
          setMetrics(prev => ({ ...prev, fid: (fid as any).processingStart - fid.startTime }));
        }
      }).observe({ entryTypes: ['first-input'] });

      // CLS
      new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as LayoutShift;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      }).observe({ entryTypes: ['layout-shift'] });
    }

    // TTFB
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({ ...prev, ttfb: navigation.responseStart - navigation.requestStart }));
      }
    }
  }, []);

  // Monitor resource loading
  const monitorResources = useCallback(() => {
    if ('PerformanceObserver' in window) {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const resources: ResourceTiming[] = entries.map((entry: any) => ({
          name: entry.name,
          duration: entry.duration,
          size: entry.transferSize || 0,
          type: entry.initiatorType || 'unknown'
        }));
        setResourceTimings(resources.slice(-10)); // Keep last 10
      }).observe({ entryTypes: ['resource'] });
    }
  }, []);

  // Monitor memory usage
  const monitorMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMemoryUsage({
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit
      });
    }
  }, []);

  // Monitor network conditions
  const monitorNetwork = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      setNetworkInfo({
        effectiveType: connection.effectiveType || 'unknown',
        downlink: connection.downlink || 0,
        rtt: connection.rtt || 0
      });
    }
  }, []);

  // Calculate overall score
  useEffect(() => {
    const newScore = {
      fcp: calculateScore(metrics.fcp, { good: 1800, needsImprovement: 3000 }),
      lcp: calculateScore(metrics.lcp, { good: 2500, needsImprovement: 4000 }),
      fid: calculateScore(metrics.fid, { good: 100, needsImprovement: 300 }),
      cls: calculateScore(metrics.cls, { good: 0.1, needsImprovement: 0.25 }),
      ttfb: calculateScore(metrics.ttfb, { good: 800, needsImprovement: 1800 }),
      overall: 0
    };

    newScore.overall = Math.round(
      (newScore.fcp + newScore.lcp + newScore.fid + newScore.cls + newScore.ttfb) / 5
    );

    setScore(newScore);

    // Generate alerts for poor performance
    const newAlerts: string[] = [];
    if (newScore.fcp < 50) newAlerts.push('First Contentful Paint is too slow');
    if (newScore.lcp < 50) newAlerts.push('Largest Contentful Paint is too slow');
    if (newScore.fid < 50) newAlerts.push('First Input Delay is too high');
    if (newScore.cls < 50) newAlerts.push('Cumulative Layout Shift is too high');
    if (newScore.ttfb < 50) newAlerts.push('Time to First Byte is too slow');

    setAlerts(newAlerts);
  }, [metrics, calculateScore]);

  // Start monitoring
  useEffect(() => {
    if (isMonitoring) {
      updateMetrics();
      monitorResources();
      monitorMemory();
      monitorNetwork();

      const interval = setInterval(() => {
        monitorMemory();
        monitorNetwork();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isMonitoring, updateMetrics, monitorResources, monitorMemory, monitorNetwork]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (score >= 50) return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    return <AlertTriangle className="w-5 h-5 text-red-500" />;
  };

  const formatTime = (ms: number) => {
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-h-[80vh] bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5" />
                <h3 className="font-semibold">Performance Monitor</h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                ×
              </button>
            </div>
            
            {/* Overall Score */}
            <div className="mt-3 text-center">
              <div className="text-3xl font-bold">{score.overall}</div>
              <div className="text-sm opacity-90">Performance Score</div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
            {/* Control */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsMonitoring(!isMonitoring)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isMonitoring 
                    ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
              </button>
              <div className="text-xs text-gray-500">
                {isMonitoring ? 'Live' : 'Stopped'}
              </div>
            </div>

            {/* Core Web Vitals */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Core Web Vitals</span>
              </h4>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400">FCP</span>
                    {getScoreIcon(score.fcp)}
                  </div>
                  <div className={`text-lg font-semibold ${getScoreColor(score.fcp)}`}>
                    {formatTime(metrics.fcp)}
                  </div>
                  <div className="text-xs text-gray-500">Score: {score.fcp}</div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400">LCP</span>
                    {getScoreIcon(score.lcp)}
                  </div>
                  <div className={`text-lg font-semibold ${getScoreColor(score.lcp)}`}>
                    {formatTime(metrics.lcp)}
                  </div>
                  <div className="text-xs text-gray-500">Score: {score.lcp}</div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400">FID</span>
                    {getScoreIcon(score.fid)}
                  </div>
                  <div className={`text-lg font-semibold ${getScoreColor(score.fid)}`}>
                    {formatTime(metrics.fid)}
                  </div>
                  <div className="text-xs text-gray-500">Score: {score.fid}</div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400">CLS</span>
                    {getScoreIcon(score.cls)}
                  </div>
                  <div className={`text-lg font-semibold ${getScoreColor(score.cls)}`}>
                    {metrics.cls.toFixed(3)}
                  </div>
                  <div className="text-xs text-gray-500">Score: {score.cls}</div>
                </div>
              </div>
            </div>

            {/* System Info */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                <Gauge className="w-4 h-4" />
                <span>System Info</span>
              </h4>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 dark:text-gray-400">Memory Usage</div>
                  <div className="text-sm font-medium">
                    {formatBytes(memoryUsage.used)} / {formatBytes(memoryUsage.total)}
                  </div>
                  <div className="text-xs text-gray-500">
                    {memoryUsage.limit > 0 ? `${Math.round((memoryUsage.used / memoryUsage.limit) * 100)}%` : 'N/A'}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 dark:text-gray-400">Network</div>
                  <div className="text-sm font-medium">{networkInfo.effectiveType}</div>
                  <div className="text-xs text-gray-500">{networkInfo.downlink} Mbps</div>
                </div>
              </div>
            </div>

            {/* Alerts */}
            {alerts.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-semibold text-red-600 flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Performance Alerts</span>
                </h4>
                
                <div className="space-y-2">
                  {alerts.map((alert, index) => (
                    <div key={index} className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                      <div className="text-sm text-red-700 dark:text-red-400">{alert}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Resource Timings */}
            {resourceTimings.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Resource Loading</span>
                </h4>
                
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {resourceTimings.map((resource, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-2 rounded text-xs">
                      <div className="font-medium truncate">{resource.name.split('/').pop()}</div>
                      <div className="text-gray-500">
                        {formatTime(resource.duration)} • {formatBytes(resource.size)} • {resource.type}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};