import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Zap,
  BarChart3,
  RefreshCw
} from 'lucide-react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcp: number;
  timestamp: number;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  showDetails?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  showDetails = false,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [history, setHistory] = useState<PerformanceMetrics[]>([]);

  // Get performance score color
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  // Get performance score background
  const getScoreBackground = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  // Calculate overall performance score
  const calculateScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // LCP scoring (0-25 points)
    if (metrics.lcp <= 2.5) score -= 0;
    else if (metrics.lcp <= 4.0) score -= 10;
    else score -= 25;
    
    // FID scoring (0-25 points)
    if (metrics.fid <= 100) score -= 0;
    else if (metrics.fid <= 300) score -= 10;
    else score -= 25;
    
    // CLS scoring (0-25 points)
    if (metrics.cls <= 0.1) score -= 0;
    else if (metrics.cls <= 0.25) score -= 10;
    else score -= 25;
    
    // TTFB scoring (0-25 points)
    if (metrics.ttfb <= 800) score -= 0;
    else if (metrics.ttfb <= 1800) score -= 10;
    else score -= 25;
    
    return Math.max(0, score);
  }, []);

  // Monitor Core Web Vitals
  const monitorPerformance = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    setIsMonitoring(true);

    try {
      // Monitor LCP
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        
        if (lastEntry) {
          setMetrics(prev => {
            const newMetrics = {
              ...prev,
              lcp: Math.round(lastEntry.startTime),
              timestamp: Date.now()
            } as PerformanceMetrics;
            
            if (newMetrics.lcp && newMetrics.fid && newMetrics.cls && newMetrics.ttfb) {
              onMetricsUpdate?.(newMetrics);
              setHistory(prev => [...prev.slice(-9), newMetrics]);
            }
            
            return newMetrics;
          });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor FID
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        
        if (lastEntry) {
          setMetrics(prev => {
            const newMetrics = {
              ...prev,
              fid: Math.round(lastEntry.processingStart - lastEntry.startTime),
              timestamp: Date.now()
            } as PerformanceMetrics;
            
            if (newMetrics.lcp && newMetrics.fid && newMetrics.cls && newMetrics.ttfb) {
              onMetricsUpdate?.(newMetrics);
              setHistory(prev => [...prev.slice(-9), newMetrics]);
            }
            
            return newMetrics;
          });
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Monitor CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        
        setMetrics(prev => {
          const newMetrics = {
            ...prev,
            cls: Math.round(clsValue * 1000) / 1000,
            timestamp: Date.now()
          } as PerformanceMetrics;
          
          if (newMetrics.lcp && newMetrics.fid && newMetrics.cls && newMetrics.ttfb) {
            onMetricsUpdate?.(newMetrics);
            setHistory(prev => [...prev.slice(-9), newMetrics]);
          }
          
          return newMetrics;
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Get TTFB and FCP from navigation timing
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({
          ...prev,
          ttfb: Math.round(navigationEntry.responseStart - navigationEntry.requestStart),
          fcp: Math.round(navigationEntry.domContentLoadedEventEnd - navigationEntry.fetchStart),
          timestamp: Date.now()
        } as PerformanceMetrics));
      }

      // Cleanup observers
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    } catch (error) {
      console.error('Performance monitoring error:', error);
      setIsMonitoring(false);
    }
  }, [enabled, onMetricsUpdate]);

  // Start monitoring on mount
  useEffect(() => {
    if (enabled) {
      const cleanup = monitorPerformance();
      return cleanup;
    }
  }, [enabled, monitorPerformance]);

  if (!enabled) return null;

  const score = metrics ? calculateScore(metrics) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-zion-cyan/20 p-4 max-w-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zion-slate-dark">Performance</h3>
              <p className="text-xs text-zion-slate/60">Real-time monitoring</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="p-1 hover:bg-zion-slate/10 rounded-lg transition-colors"
              title="Toggle details"
            >
              <BarChart3 className="w-4 h-4 text-zion-slate" />
            </button>
            
            <button
              onClick={monitorPerformance}
              className="p-1 hover:bg-zion-slate/10 rounded-lg transition-colors"
              title="Refresh metrics"
            >
              <RefreshCw className={`w-4 h-4 text-zion-slate ${isMonitoring ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Overall Score */}
        <div className="text-center mb-4">
          <div className={`w-16 h-16 rounded-full ${getScoreBackground(score)} flex items-center justify-center mx-auto mb-2`}>
            <span className={`text-2xl font-bold ${getScoreColor(score)}`}>
              {score}
            </span>
          </div>
          <p className="text-xs text-zion-slate/60">Performance Score</p>
        </div>

        {/* Core Web Vitals */}
        {metrics && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div className={`p-2 rounded-lg text-center ${
                metrics.lcp <= 2.5 ? 'bg-green-50 border border-green-200' : 
                metrics.lcp <= 4.0 ? 'bg-yellow-50 border border-yellow-200' : 
                'bg-red-50 border border-red-200'
              }`}>
                <div className="text-sm font-semibold text-zion-slate-dark">
                  {metrics.lcp}ms
                </div>
                <div className="text-xs text-zion-slate/60">LCP</div>
                <div className="text-xs">
                  {metrics.lcp <= 2.5 ? (
                    <CheckCircle className="w-3 h-3 text-green-500 mx-auto" />
                  ) : (
                    <AlertTriangle className="w-3 h-3 text-yellow-500 mx-auto" />
                  )}
                </div>
              </div>

              <div className={`p-2 rounded-lg text-center ${
                metrics.fid <= 100 ? 'bg-green-50 border border-green-200' : 
                metrics.fid <= 300 ? 'bg-yellow-50 border border-yellow-200' : 
                'bg-red-50 border border-red-200'
              }`}>
                <div className="text-sm font-semibold text-zion-slate-dark">
                  {metrics.fid}ms
                </div>
                <div className="text-xs text-zion-slate/60">FID</div>
                <div className="text-xs">
                  {metrics.fid <= 100 ? (
                    <CheckCircle className="w-3 h-3 text-green-500 mx-auto" />
                  ) : (
                    <AlertTriangle className="w-3 h-3 text-yellow-500 mx-auto" />
                  )}
                </div>
              </div>
            </div>

            <div className={`p-2 rounded-lg text-center ${
              metrics.cls <= 0.1 ? 'bg-green-50 border border-green-200' : 
              metrics.cls <= 0.25 ? 'bg-yellow-50 border border-yellow-200' : 
              'bg-red-50 border border-red-200'
            }`}>
              <div className="text-sm font-semibold text-zion-slate-dark">
                {metrics.cls}
              </div>
              <div className="text-xs text-zion-slate/60">CLS</div>
              <div className="text-xs">
                {metrics.cls <= 0.1 ? (
                  <CheckCircle className="w-3 h-3 text-green-500 mx-auto" />
                ) : (
                  <AlertTriangle className="w-3 h-3 text-yellow-500 mx-auto" />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Advanced Details */}
        <AnimatePresence>
          {showAdvanced && metrics && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-zion-slate/20"
            >
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-zion-slate/60">TTFB:</span>
                  <span className="font-medium">{metrics.ttfb}ms</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-zion-slate/60">FCP:</span>
                  <span className="font-medium">{metrics.fcp}ms</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-zion-slate/60">Updated:</span>
                  <span className="font-medium">
                    {new Date(metrics.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>

              {/* Performance History */}
              {history.length > 1 && (
                <div className="mt-3">
                  <div className="text-xs text-zion-slate/60 mb-2">Performance Trend</div>
                  <div className="flex items-end space-x-1 h-8">
                    {history.slice(-8).map((metric, index) => {
                      const historyScore = calculateScore(metric);
                      const height = (historyScore / 100) * 24;
                      return (
                        <div
                          key={index}
                          className="flex-1 bg-zion-cyan/20 rounded-t"
                          style={{ height: `${height}px` }}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
