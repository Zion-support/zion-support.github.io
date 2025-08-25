import React, { useEffect, useState, useCallback } from 'react';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
<<<<<<< HEAD
  AlertTriangle, 
=======
  AlertTriangle,
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
  CheckCircle,
  Info,
  BarChart3
} from 'lucide-react';

interface PerformanceMetrics {
<<<<<<< HEAD
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fmp: number; // First Meaningful Paint
}

interface PerformanceReport {
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  recommendations: string[];
  metrics: PerformanceMetrics;
  timestamp: Date;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [report, setReport] = useState<PerformanceReport | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const calculateScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 3000) score -= 30;
    else if (metrics.fcp > 2000) score -= 20;
    else if (metrics.fcp > 1500) score -= 10;
    
    // LCP scoring (0-100)
    if (metrics.lcp > 4000) score -= 30;
    else if (metrics.lcp > 2500) score -= 20;
    else if (metrics.lcp > 2000) score -= 10;
    
    // FID scoring (0-100)
    if (metrics.fid > 300) score -= 20;
    else if (metrics.fid > 100) score -= 10;
    
    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;
    
    return Math.max(0, score);
  }, []);

  const getGrade = useCallback((score: number): 'A' | 'B' | 'C' | 'D' | 'F' => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, []);

  const generateRecommendations = useCallback((metrics: PerformanceMetrics): string[] => {
    const recommendations: string[] = [];
    
    if (metrics.fcp > 2000) {
      recommendations.push('Optimize First Contentful Paint: Minimize critical resources, optimize images, and reduce server response time');
    }
    
    if (metrics.lcp > 2500) {
      recommendations.push('Improve Largest Contentful Paint: Optimize images, implement lazy loading, and reduce layout shifts');
    }
    
    if (metrics.fid > 100) {
      recommendations.push('Reduce First Input Delay: Minimize JavaScript execution time and optimize event handlers');
    }
    
    if (metrics.cls > 0.1) {
      recommendations.push('Fix Cumulative Layout Shift: Set explicit dimensions for images and avoid inserting content above existing content');
    }
    
    if (metrics.ttfb > 600) {
      recommendations.push('Optimize Time to First Byte: Improve server response time and implement caching strategies');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Performance is excellent! Keep monitoring and maintain current optimizations');
    }
    
    return recommendations;
  }, []);

  const measurePerformance = useCallback(async () => {
    try {
      // Wait for performance metrics to be available
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              const lcp = entry.startTime;
              setMetrics(prev => prev ? { ...prev, lcp } : null);
            }
          });
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Measure FCP
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      const fcp = fcpEntry ? fcpEntry.startTime : 0;
      
      // Measure TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : 0;
      
      // Measure FMP (approximation)
      const fmp = performance.now();
      
      // Measure FID (approximation)
      const fid = 0; // Would need user interaction to measure
      
      // Measure CLS (approximation)
      const cls = 0; // Would need layout shift observer to measure
      
      const newMetrics: PerformanceMetrics = { fcp, lcp: 0, fid, cls, ttfb, fmp };
      setMetrics(newMetrics);
      
      // Generate report
      const score = calculateScore(newMetrics);
      const grade = getGrade(score);
      const recommendations = generateRecommendations(newMetrics);
      
      setReport({
        score,
        grade,
        recommendations,
        metrics: newMetrics,
        timestamp: new Date()
      });
      
    } catch (error) {
      console.error('Error measuring performance:', error);
    }
  }, [calculateScore, getGrade, generateRecommendations]);

  useEffect(() => {
    measurePerformance();
    
    // Re-measure on route changes
    const handleRouteChange = () => {
      setTimeout(measurePerformance, 1000);
    };
    
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [measurePerformance]);

  const getMetricColor = (value: number, threshold: number, isLowerBetter: boolean = true) => {
    const isGood = isLowerBetter ? value <= threshold : value >= threshold;
    return isGood ? 'text-green-500' : 'text-red-500';
  };

  const getMetricIcon = (value: number, threshold: number, isLowerBetter: boolean = true) => {
    const isGood = isLowerBetter ? value <= threshold : value >= threshold;
    return isGood ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />;
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
=======
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  score: number;
  memory: {
    used: number;
    total: number;
    limit: number;
  } | null;
}

interface PerformanceThresholds {
  fcp: { good: number; needsImprovement: number };
  lcp: { good: number; needsImprovement: number };
  fid: { good: number; needsImprovement: number };
  cls: { good: number; needsImprovement: number };
  ttfb: { good: number; needsImprovement: number };
}

// Extended interfaces for PerformanceEntry types
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    score: 0,
    memory: null,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [history, setHistory] = useState<PerformanceMetrics[]>([]);

  const thresholds: PerformanceThresholds = {
    fcp: { good: 1800, needsImprovement: 3000 },
    lcp: { good: 2500, needsImprovement: 4000 },
    fid: { good: 100, needsImprovement: 300 },
    cls: { good: 0.1, needsImprovement: 0.25 },
    ttfb: { good: 800, needsImprovement: 1800 },
  };

  const getScore = useCallback((metrics: Omit<PerformanceMetrics, 'score' | 'memory'>): number => {
    let score = 100;
    
    if (metrics.fcp && metrics.fcp > thresholds.fcp.needsImprovement) score -= 20;
    else if (metrics.fcp && metrics.fcp > thresholds.fcp.good) score -= 10;
    
    if (metrics.lcp && metrics.lcp > thresholds.lcp.needsImprovement) score -= 20;
    else if (metrics.lcp && metrics.lcp > thresholds.lcp.good) score -= 10;
    
    if (metrics.fid && metrics.fid > thresholds.fid.needsImprovement) score -= 20;
    else if (metrics.fid && metrics.fid > thresholds.fid.good) score -= 10;
    
    if (metrics.cls && metrics.cls > thresholds.cls.needsImprovement) score -= 20;
    else if (metrics.cls && metrics.cls > thresholds.cls.good) score -= 10;
    
    if (metrics.ttfb && metrics.ttfb > thresholds.ttfb.needsImprovement) score -= 20;
    else if (metrics.ttfb && metrics.ttfb > thresholds.ttfb.good) score -= 10;
    
    return Math.max(0, score);
  }, [thresholds]);

  const getMetricStatus = (metric: number | null, threshold: { good: number; needsImprovement: number }): 'good' | 'needsImprovement' | 'poor' => {
    if (!metric) return 'good';
    if (metric <= threshold.good) return 'good';
    if (metric <= threshold.needsImprovement) return 'needsImprovement';
    return 'poor';
  };

  const getStatusColor = (status: 'good' | 'needsImprovement' | 'poor'): string => {
    switch (status) {
      case 'good': return 'text-green-500';
      case 'needsImprovement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: 'good' | 'needsImprovement' | 'poor') => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needsImprovement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <AlertTriangle className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  const formatMetric = (value: number | null, unit: string = 'ms'): string => {
    if (value === null) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  };

  const formatMemory = (bytes: number): string => {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(2)} MB`;
  };

  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({
            ...prev,
            fcp: fcp.startTime,
            score: getScore({ ...prev, fcp: fcp.startTime })
          }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({
            ...prev,
            lcp: lcp.startTime,
            score: getScore({ ...prev, lcp: lcp.startTime })
          }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1] as FirstInputEntry;
        if (fid && 'processingStart' in fid) {
          setMetrics(prev => ({
            ...prev,
            fid: fid.processingStart - fid.startTime,
            score: getScore({ ...prev, fid: fid.processingStart - fid.startTime })
          }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as LayoutShiftEntry;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
          }
        }
        setMetrics(prev => ({
          ...prev,
          cls: clsValue,
          score: getScore({ ...prev, cls: clsValue })
        }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        setMetrics(prev => ({
          ...prev,
          ttfb,
          score: getScore({ ...prev, ttfb })
        }));
      }

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, [getScore]);

  useEffect(() => {
    // Memory monitoring
    if ('memory' in performance) {
      const updateMemory = () => {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memory: {
            used: memory.usedJSHeapSize,
            total: memory.totalJSHeapSize,
            limit: memory.jsHeapSizeLimit,
          }
        }));
      };

      updateMemory();
      const interval = setInterval(updateMemory, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    // Store metrics history
    if (metrics.score > 0) {
      setHistory(prev => [...prev.slice(-9), metrics]);
    }
  }, [metrics.score]);

  const toggleVisibility = () => setIsVisible(!isVisible);

  if (!isVisible) {
    return (
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 right-4 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
        title="Performance Monitor"
      >
        <BarChart3 className="w-6 h-6" />
      </button>
    );
  }

  return (
<<<<<<< HEAD
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 max-w-sm">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Performance Monitor</h3>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {isExpanded ? '−' : '+'}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ×
            </button>
          </div>
        </div>

        {report && (
          <div className="space-y-3">
            {/* Overall Score */}
            <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{report.score}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Performance Score</div>
              <div className={`text-lg font-semibold ${
                report.grade === 'A' ? 'text-green-600' :
                report.grade === 'B' ? 'text-blue-600' :
                report.grade === 'C' ? 'text-yellow-600' :
                report.grade === 'D' ? 'text-orange-600' : 'text-red-600'
              }`}>
                Grade: {report.grade}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>FCP</span>
                </span>
                <span className={getMetricColor(metrics?.fcp || 0, 2000)}>
                  {metrics?.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
                </span>
                {metrics?.fcp && getMetricIcon(metrics.fcp, 2000)}
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>LCP</span>
                </span>
                <span className={getMetricColor(metrics?.lcp || 0, 2500)}>
                  {metrics?.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
                </span>
                {metrics?.lcp && getMetricIcon(metrics.lcp, 2500)}
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>TTFB</span>
                </span>
                <span className={getMetricColor(metrics?.ttfb || 0, 600)}>
                  {metrics?.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
                </span>
                {metrics?.ttfb && getMetricIcon(metrics.ttfb, 600)}
              </div>
            </div>

            {/* Recommendations */}
            {isExpanded && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center space-x-2">
                  <Info className="w-4 h-4 text-blue-600" />
                  <span>Recommendations</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {report.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Last Updated */}
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center pt-2">
              Last updated: {report.timestamp.toLocaleTimeString()}
            </div>
          </div>
        )}

        {!report && (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Measuring performance...</p>
=======
    <div className="fixed bottom-4 right-4 z-50 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600" />
            Performance Monitor
          </h3>
          <button
            onClick={toggleVisibility}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            ×
          </button>
        </div>
        
        {/* Overall Score */}
        <div className="mt-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Score</span>
            <div className="flex items-center gap-2">
              <span className={`text-2xl font-bold ${
                metrics.score >= 90 ? 'text-green-600' :
                metrics.score >= 70 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {metrics.score}
              </span>
              <span className="text-sm text-gray-500">/100</span>
            </div>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                metrics.score >= 90 ? 'bg-green-500' :
                metrics.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${metrics.score}%` }}
            />
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
        {/* Core Web Vitals */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            Core Web Vitals
          </h4>
          <div className="space-y-2">
            {[
              { label: 'FCP', value: metrics.fcp, threshold: thresholds.fcp, unit: 'ms' },
              { label: 'LCP', value: metrics.lcp, threshold: thresholds.lcp, unit: 'ms' },
              { label: 'FID', value: metrics.fid, threshold: thresholds.fid, unit: 'ms' },
              { label: 'CLS', value: metrics.cls, threshold: thresholds.cls, unit: '' },
              { label: 'TTFB', value: metrics.ttfb, threshold: thresholds.ttfb, unit: 'ms' },
            ].map(({ label, value, threshold, unit }) => {
              const status = getMetricStatus(value, threshold);
              return (
                <div key={label} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">{label}</span>
                  <div className="flex items-center gap-2">
                    <span className={getStatusColor(status)}>
                      {formatMetric(value, unit)}
                    </span>
                    <span className={getStatusColor(status)}>
                      {getStatusIcon(status)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Memory Usage */}
        {metrics.memory && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              Memory Usage
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Used:</span>
                <span className="text-gray-900 dark:text-white">{formatMemory(metrics.memory.used)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Total:</span>
                <span className="text-gray-900 dark:text-white">{formatMemory(metrics.memory.total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Limit:</span>
                <span className="text-gray-900 dark:text-white">{formatMemory(metrics.memory.limit)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(metrics.memory.used / metrics.memory.limit) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Performance History */}
        {history.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-500" />
              Recent Scores
            </h4>
            <div className="flex gap-1">
              {history.map((item, index) => (
                <div
                  key={index}
                  className={`h-8 w-4 rounded-sm transition-all duration-300 ${
                    item.score >= 90 ? 'bg-green-500' :
                    item.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ height: `${item.score * 0.4}px` }}
                  title={`Score: ${item.score} (${new Date().toLocaleTimeString()})`}
                />
              ))}
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
          </div>
        )}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export { PerformanceMonitor };
=======
export default PerformanceMonitor;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-601c
