import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  X,
  Info,
  BarChart3,
  Gauge,
  Monitor,
  HardDrive,
  Wifi,
  WifiOff,
  RefreshCw
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
  fps: number;
  networkSpeed?: number;
  isOnline: boolean;
}

interface PerformanceScore {
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  color: string;
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  className?: string;
  showDetails?: boolean;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = false,
  onMetricsUpdate,
  className = '',
  showDetails = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null,
    loadTime: 0,
    renderTime: 0,
    fps: 0,
    isOnline: navigator.onLine
  });
  const [scores, setScores] = useState<Record<string, PerformanceScore>>({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const calculateScore = useCallback((metric: number, thresholds: number[]): PerformanceScore => {
    if (metric <= thresholds[0]) return { score: 100, grade: 'A', color: 'text-green-400' };
    if (metric <= thresholds[1]) return { score: 80, grade: 'B', color: 'text-yellow-400' };
    if (metric <= thresholds[2]) return { score: 60, grade: 'C', color: 'text-orange-400' };
    if (metric <= thresholds[3]) return { score: 40, grade: 'D', color: 'text-red-400' };
    return { score: 20, grade: 'F', color: 'text-red-600' };
  }, []);

  const updateMetrics = useCallback(() => {
    if ('performance' in window) {
      const perf = performance;
      const navigation = perf.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const newMetrics: PerformanceMetrics = {
          fcp: null,
          lcp: null,
          fid: null,
          cls: null,
          ttfb: navigation.responseStart - navigation.requestStart,
          domLoad: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          windowLoad: navigation.loadEventEnd - navigation.loadEventStart,
          loadTime: navigation.loadEventEnd - navigation.fetchStart,
          renderTime: navigation.domContentLoadedEventEnd - navigation.fetchStart,
          fps: 60, // Default FPS
          isOnline: navigator.onLine
        };

        // Get Core Web Vitals
        if ('PerformanceObserver' in window) {
          // FCP
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            if (entries.length > 0) {
              newMetrics.fcp = entries[0].startTime;
            }
          });
          fcpObserver.observe({ entryTypes: ['paint'] });

          // LCP
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            if (entries.length > 0) {
              newMetrics.lcp = entries[entries.length - 1].startTime;
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // FID
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            if (entries.length > 0) {
              newMetrics.fid = entries[0].processingStart - entries[0].startTime;
            }
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // CLS
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
            newMetrics.cls = clsValue;
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        }

        // Memory usage (if available)
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          newMetrics.memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
        }

        // Network speed estimation
        if ('connection' in navigator) {
          const connection = (navigator as any).connection;
          if (connection.effectiveType) {
            const speeds: Record<string, number> = {
              'slow-2g': 0.5,
              '2g': 1,
              '3g': 3,
              '4g': 10
            };
            newMetrics.networkSpeed = speeds[connection.effectiveType] || 1;
          }
        }

        setMetrics(newMetrics);
        if (onMetricsUpdate) {
          onMetricsUpdate(newMetrics);
        }

        // Calculate scores
        const newScores: Record<string, PerformanceScore> = {};
        
        if (newMetrics.fcp) {
          newScores.fcp = calculateScore(newMetrics.fcp, [1800, 3000, 4000, 5000]);
        }
        if (newMetrics.lcp) {
          newScores.lcp = calculateScore(newMetrics.lcp, [2500, 4000, 5000, 6000]);
        }
        if (newMetrics.fid) {
          newScores.fid = calculateScore(newMetrics.fid, [100, 300, 500, 700]);
        }
        if (newMetrics.cls) {
          newScores.cls = calculateScore(newMetrics.cls, [0.1, 0.25, 0.4, 0.5]);
        }
        if (newMetrics.ttfb) {
          newScores.ttfb = calculateScore(newMetrics.ttfb, [800, 1200, 1600, 2000]);
        }

        setScores(newScores);
      }
    }
  }, [calculateScore, onMetricsUpdate]);

  useEffect(() => {
    updateMetrics();
    
    const interval = setInterval(updateMetrics, 5000);
    return () => clearInterval(interval);
  }, [updateMetrics]);

  useEffect(() => {
    const handleOnline = () => setMetrics(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setMetrics(prev => ({ ...prev, isOnline: false }));
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const getOverallScore = () => {
    const scoreValues = Object.values(scores).map(s => s.score);
    if (scoreValues.length === 0) return { score: 0, grade: 'N/A', color: 'text-gray-400' };
    
    const average = scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length;
    
    if (average >= 90) return { score: average, grade: 'A', color: 'text-green-400' };
    if (average >= 80) return { score: average, grade: 'B', color: 'text-yellow-400' };
    if (average >= 70) return { score: average, grade: 'C', color: 'text-orange-400' };
    if (average >= 60) return { score: average, grade: 'D', color: 'text-red-400' };
    return { score: average, grade: 'F', color: 'text-red-600' };
  };

  const overallScore = getOverallScore();

  if (!showMetrics && !showDetails) {
    return (
      <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Activity className="w-6 h-6" />
        </motion.button>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 w-96 max-h-[80vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Performance Monitor</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Real-time metrics</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overall Score */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Overall Score</p>
                  <p className={`text-3xl font-bold ${overallScore.color}`}>
                    {overallScore.score.toFixed(0)}
                  </p>
                </div>
                <div className={`text-6xl font-bold ${overallScore.color}`}>
                  {overallScore.grade}
                </div>
              </div>
            </div>

            {/* Core Web Vitals */}
            <div className="space-y-4 mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Core Web Vitals</span>
              </h4>
              
              {metrics.fcp && (
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium">FCP</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {metrics.fcp.toFixed(0)}ms
                    </span>
                    {scores.fcp && (
                      <span className={`text-xs font-bold ${scores.fcp.color}`}>
                        {scores.fcp.grade}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {metrics.lcp && (
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">LCP</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {metrics.lcp.toFixed(0)}ms
                    </span>
                    {scores.lcp && (
                      <span className={`text-xs font-bold ${scores.lcp.color}`}>
                        {scores.lcp.grade}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {metrics.fid && (
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-purple-500" />
                    <span className="text-sm font-medium">FID</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {metrics.fid.toFixed(0)}ms
                    </span>
                    {scores.fid && (
                      <span className={`text-xs font-bold ${scores.fid.color}`}>
                        {scores.fid.grade}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {metrics.cls && (
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium">CLS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {metrics.cls.toFixed(3)}
                    </span>
                    {scores.cls && (
                      <span className={`text-xs font-bold ${scores.cls.color}`}>
                        {scores.cls.grade}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Additional Metrics */}
            <div className="space-y-4 mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                <Gauge className="w-4 h-4" />
                <span>Additional Metrics</span>
              </h4>
              
              {metrics.ttfb && (
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium">TTFB</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {metrics.ttfb.toFixed(0)}ms
                  </span>
                </div>
              )}

              {metrics.loadTime > 0 && (
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium">Load Time</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {metrics.loadTime.toFixed(0)}ms
                  </span>
                </div>
              )}

              {metrics.renderTime > 0 && (
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium">Render Time</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {metrics.renderTime.toFixed(0)}ms
                  </span>
                </div>
              )}

              {metrics.memoryUsage && (
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium">Memory Usage</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {(metrics.memoryUsage * 100).toFixed(1)}%
                  </span>
                </div>
              )}

              {metrics.networkSpeed && (
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium">Network Speed</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {metrics.networkSpeed} Mbps
                  </span>
                </div>
              )}
            </div>

            {/* Network Status */}
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg mb-6">
              <div className="flex items-center space-x-2">
                {metrics.isOnline ? (
                  <Wifi className="w-4 h-4 text-green-500" />
                ) : (
                  <WifiOff className="w-4 h-4 text-red-500" />
                )}
                <span className="text-sm font-medium">Network Status</span>
              </div>
              <span className={`text-sm font-medium ${
                metrics.isOnline ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}>
                {metrics.isOnline ? 'Online' : 'Offline'}
              </span>
            </div>

            {/* Refresh Button */}
            <button
              onClick={updateMetrics}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh Metrics</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Activity className="w-6 h-6" />
      </motion.button>
    </div>
  );
};
