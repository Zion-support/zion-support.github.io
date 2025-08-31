import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, HardDrive, Wifi, AlertTriangle, CheckCircle, X, ChevronDown } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  bundleSize: number | null;
  loadTime: number | null;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  showDetails?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

export function PerformanceMonitor({ 
  enabled = true, 
  showDetails = false,
  autoRefresh = true, 
  refreshInterval = 30000 
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    bundleSize: null,
    loadTime: null
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const calculateMetrics = useCallback(() => {
    if (!window.performance) return null;
    
    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || null;
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || null;
      const fid = null; // First Input Delay - would need to be measured during user interaction
      const cls = null; // Cumulative Layout Shift - would need to be measured over time
      const ttfb = navigation ? navigation.responseStart - navigation.requestStart : null;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.navigationStart : null;
      
      // Estimate bundle size (this is a rough approximation)
      const bundleSize = (performance as any).memory?.usedJSHeapSize || null;
      
      return {
        fcp,
        lcp,
        fid,
        cls,
        ttfb,
        bundleSize,
        loadTime
      };
    } catch (error) {
      console.warn('Error calculating performance metrics:', error);
      return null;
    }
  }, []);

  const getPerformanceScore = useCallback((metrics: PerformanceMetrics) => {
    let score = 100;
    
    if (metrics.fcp && metrics.fcp > 1800) score -= 20;
    if (metrics.lcp && metrics.lcp > 2500) score -= 20;
    if (metrics.ttfb && metrics.ttfb > 600) score -= 15;
    if (metrics.loadTime && metrics.loadTime > 3000) score -= 15;
    
    return Math.max(0, score);
  }, []);

  const getPerformanceColor = useCallback((score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  }, []);

  const getPerformanceStatus = useCallback((score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  }, []);

  const checkPerformanceIssues = useCallback((metrics: PerformanceMetrics) => {
    const newAlerts: string[] = [];
    
    if (metrics.fcp && metrics.fcp > 1800) {
      newAlerts.push('First Contentful Paint is slow (>1.8s)');
    }
    if (metrics.lcp && metrics.lcp > 2500) {
      newAlerts.push('Largest Contentful Paint is slow (>2.5s)');
    }
    if (metrics.ttfb && metrics.ttfb > 600) {
      newAlerts.push('Time to First Byte is slow (>600ms)');
    }
    if (metrics.loadTime && metrics.loadTime > 3000) {
      newAlerts.push('Page load time is slow (>3s)');
    }
    
    setAlerts(newAlerts);
  }, []);

  const updateMetrics = useCallback(() => {
    const newMetrics = calculateMetrics();
    if (newMetrics) {
      setMetrics(newMetrics);
      const score = getPerformanceScore(newMetrics);
      checkPerformanceIssues(newMetrics);
    }
  }, [calculateMetrics, getPerformanceScore, checkPerformanceIssues]);

  useEffect(() => {
    if (!enabled) return;

    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || localStorage.getItem('showPerformanceMonitor') === 'true') {
      setIsVisible(true);
    }

    // Initial metrics calculation
    updateMetrics();

    // Set up auto-refresh if enabled
    let intervalId: NodeJS.Timeout | null = null;
    if (autoRefresh) {
      intervalId = setInterval(updateMetrics, refreshInterval);
    }

    // Set up performance observers
    try {
      // Measure First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });

      // Measure Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
        }
      });

      // Measure First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - (entry as any).startTime }));
          }
        });
      });

      // Measure Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });

      // Measure Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
        }));
      }

      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        if (intervalId) clearInterval(intervalId);
      };
    } catch (error) {
      console.warn('PerformanceObserver not supported:', error);
      if (intervalId) clearInterval(intervalId);
    }
  }, [enabled, autoRefresh, refreshInterval, updateMetrics]);

  if (!isVisible) return null;

  const overallScore = getPerformanceScore(metrics);
  const scoreColor = getPerformanceColor(overallScore);
  const scoreStatus = getPerformanceStatus(overallScore);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-xl z-50 max-w-sm"
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Performance Monitor
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Overall Score */}
        <div className="mb-3 p-3 bg-slate-800/50 rounded-lg">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">Overall Score:</span>
            <div className="flex items-center gap-2">
              <span className={`font-bold ${scoreColor}`}>{overallScore}</span>
              <span className={`text-xs ${scoreColor}`}>{scoreStatus}</span>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="space-y-2"
            >
              {Object.entries(metrics).map(([key, value]) => {
                if (value === null) return null;
                
                const metricName = key.toUpperCase();
                const metricValue = key === 'cls' ? value.toFixed(3) : `${Math.round(value)}ms`;
                const metricColor = key === 'cls' ? 
                  (value < 0.1 ? 'text-green-400' : value < 0.25 ? 'text-yellow-400' : 'text-red-400') :
                  (value < (key === 'fcp' ? 1800 : key === 'lcp' ? 2500 : key === 'ttfb' ? 600 : 3000) ? 
                    'text-green-400' : 'text-yellow-400');
                
                return (
                  <div key={key} className="flex items-center justify-between text-xs p-2 bg-slate-800/30 rounded">
                    <span className="text-gray-300">{metricName}:</span>
                    <span className={metricColor}>{metricValue}</span>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Alerts */}
        {alerts.length > 0 && (
          <div className="mt-3 pt-3 border-t border-slate-700">
            <div className="flex items-center gap-2 text-xs text-yellow-400 mb-2">
              <AlertTriangle className="w-3 h-3" />
              <span>Performance Issues:</span>
            </div>
            <div className="space-y-1">
              {alerts.map((alert, index) => (
                <div key={index} className="text-xs text-yellow-300 bg-yellow-900/20 p-2 rounded">
                  {alert}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Refresh Button */}
        <div className="mt-3 pt-3 border-t border-slate-700">
          <button
            onClick={updateMetrics}
            className="w-full text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded transition-colors"
          >
            <Zap className="w-3 h-3 inline mr-1" />
            Refresh Metrics
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default PerformanceMonitor;
