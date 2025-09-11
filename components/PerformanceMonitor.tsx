import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Zap, Clock, TrendingUp, AlertTriangle, 
  CheckCircle, XCircle, Info, BarChart3, Gauge
} from 'lucide-react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcp: number;
  fmp: number;
  tti: number;
}

interface PerformanceMonitorProps {
  enableRealTime?: boolean;
  showMetrics?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  threshold?: {
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableRealTime = true,
  showMetrics = false,
  onMetricsUpdate,
  threshold = {
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    ttfb: 800
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0,
    fmp: 0,
    tti: 0
  });
  
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [performanceIssues, setPerformanceIssues] = useState<string[]>([]);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const metricsRef = useRef<PerformanceMetrics>(metrics);

  const calculateScore = useCallback((metrics: PerformanceMetrics) => {
    let score = 100;
    
    // LCP scoring (0-2500ms, lower is better)
    if (metrics.lcp > threshold.lcp) {
      score -= Math.min(30, (metrics.lcp - threshold.lcp) / 100);
    }
    
    // FID scoring (0-100ms, lower is better)
    if (metrics.fid > threshold.fid) {
      score -= Math.min(25, (metrics.fid - threshold.fid) / 10);
    }
    
    // CLS scoring (0-0.1, lower is better)
    if (metrics.cls > threshold.cls) {
      score -= Math.min(25, (metrics.cls / threshold.cls) * 25);
    }
    
    // TTFB scoring (0-800ms, lower is better)
    if (metrics.ttfb > threshold.ttfb) {
      score -= Math.min(20, (metrics.ttfb - threshold.ttfb) / 100);
    }
    
    return Math.max(0, Math.round(score));
  }, [threshold]);

  // Measure Core Web Vitals
  const measureCoreWebVitals = useCallback(() => {
    if (!window.PerformanceObserver) return;

    try {
      // First Contentful Paint
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            const newMetrics = { ...metricsRef.current, fcp: Math.round(entry.startTime) };
            setMetrics(newMetrics);
            setPerformanceIssues(analyzePerformance(newMetrics));
            if (onMetricsUpdate) onMetricsUpdate(newMetrics);
          }
        });
      });
      observerRef.current.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          const newMetrics = { ...metricsRef.current, lcp: Math.round(lastEntry.startTime) };
          setMetrics(newMetrics);
          setPerformanceIssues(analyzePerformance(newMetrics));
          if (onMetricsUpdate) onMetricsUpdate(newMetrics);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          // Type assertion for FirstInputEntry
          const fidEntry = entry as PerformanceEntry & { processingStart?: number };
          if (fidEntry.processingStart) {
            const newMetrics = { ...metricsRef.current, fid: Math.round(fidEntry.processingStart - entry.startTime) };
            setMetrics(newMetrics);
            setPerformanceIssues(analyzePerformance(newMetrics));
            if (onMetricsUpdate) onMetricsUpdate(newMetrics);
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
          if (!entry.hadRecentInput && entry.value) {
            clsValue += entry.value;
          }
        });
        const newMetrics = { ...metricsRef.current, cls: Math.round(clsValue * 1000) / 1000 };
        setMetrics(newMetrics);
        setPerformanceIssues(analyzePerformance(newMetrics));
        if (onMetricsUpdate) onMetricsUpdate(newMetrics);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

    } catch {
      // Performance monitoring not supported
    }
  }, [analyzePerformance, onMetricsUpdate]);

  // Measure additional performance metrics
  const measureAdditionalMetrics = useCallback(() => {
    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = Math.round(navigationEntry.responseStart - navigationEntry.requestStart);
      const newMetrics = { ...metricsRef.current, ttfb };
      setMetrics(newMetrics);
      setPerformanceIssues(analyzePerformance(newMetrics));
      if (onMetricsUpdate) onMetricsUpdate(newMetrics);
    }

    // DOM Load and Window Load
    if (document.readyState === 'complete') {
      const domLoad = Math.round(performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart);
      const windowLoad = Math.round(performance.timing.loadEventEnd - performance.timing.navigationStart);
      const newMetrics = { ...metricsRef.current, domLoad, windowLoad };
      setMetrics(newMetrics);
      if (onMetricsUpdate) onMetricsUpdate(newMetrics);
    }
  }, [analyzePerformance, onMetricsUpdate]);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;
    
    setIsMonitoring(true);
    measureCoreWebVitals();
    
    // Measure additional metrics after page load
    if (document.readyState === 'complete') {
      measureAdditionalMetrics();
    } else {
      window.addEventListener('load', measureAdditionalMetrics);
    }
  }, [isMonitoring, measureCoreWebVitals, measureAdditionalMetrics]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    setIsMonitoring(false);
  }, []);

  // Initialize monitoring
  useEffect(() => {
    if (enableRealTime) {
      startMonitoring();
    }

    return () => {
      stopMonitoring();
      window.removeEventListener('load', measureAdditionalMetrics);
    };
  }, [enableRealTime, startMonitoring, stopMonitoring, measureAdditionalMetrics]);

  // Real-time monitoring interval
  useEffect(() => {
    if (!enableRealTime || !isMonitoring) return;

    const interval = setInterval(() => {
      measureAdditionalMetrics();
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [enableRealTime, isMonitoring, measureAdditionalMetrics]);

  // Performance optimization suggestions
  const getOptimizationSuggestions = useCallback((): string[] => {
    const suggestions: string[] = [];
    
    if (metrics.fcp && metrics.fcp > threshold.fcp) {
      suggestions.push('Optimize critical CSS and reduce render-blocking resources');
    }
    
    if (metrics.lcp && metrics.lcp > threshold.lcp) {
      suggestions.push('Use image optimization, lazy loading, and CDN for faster delivery');
    }
  };

  if (!showMetrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-white text-sm max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={isMonitoring ? stopMonitoring : startMonitoring}
          className={`px-2 py-1 rounded text-xs ${
            isMonitoring ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isMonitoring ? 'Stop' : 'Start'}
        </button>
      </div>

      {/* Core Web Vitals */}
      <div className="space-y-2 mb-3">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={metrics.fcp && metrics.fcp > threshold.fcp ? 'text-red-400' : 'text-green-400'}>
            {metrics.fcp ? `${metrics.fcp}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={metrics.lcp && metrics.lcp > threshold.lcp ? 'text-red-400' : 'text-green-400'}>
            {metrics.lcp ? `${metrics.lcp}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={metrics.fid && metrics.fid > threshold.fid ? 'text-red-400' : 'text-green-400'}>
            {metrics.fid ? `${metrics.fid}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={metrics.cls && metrics.cls > threshold.cls ? 'text-red-400' : 'text-green-400'}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={metrics.ttfb && metrics.ttfb > threshold.ttfb ? 'text-red-400' : 'text-green-400'}>
            {metrics.ttfb ? `${metrics.ttfb}ms` : 'N/A'}
          </span>
        </div>
      </div>

      {/* Performance Issues */}
      {performanceIssues.length > 0 && (
        <div className="mb-3 p-2 bg-red-900/20 border border-red-500/30 rounded">
          <div className="text-red-400 font-semibold mb-1">Issues Detected:</div>
          <ul className="text-xs space-y-1">
            {performanceIssues.slice(0, 3).map((issue, index) => (
              <li key={index} className="text-red-300">• {issue}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Optimization Suggestions */}
      <div className="p-2 bg-blue-900/20 border border-blue-500/30 rounded">
        <div className="text-blue-400 font-semibold mb-1">Suggestions:</div>
        <ul className="text-xs space-y-1">
          {getOptimizationSuggestions().slice(0, 2).map((suggestion, index) => (
            <li key={index} className="text-blue-300">• {suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
