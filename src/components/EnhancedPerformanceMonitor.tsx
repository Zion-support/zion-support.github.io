import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  X,
  Info,
  Zap,
  Clock,
  Wifi,
  Smartphone,
  Monitor,
  Settings,
  RefreshCw
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memory: {
    used: number;
    total: number;
    limit: number;
  } | null;
  network: {
    type: string;
    downlink: number;
    rtt: number;
  } | null;
  device: {
    type: 'mobile' | 'tablet' | 'desktop';
    memory: number;
    cores: number;
  } | null;
}

interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  metric: string;
  value: number;
  threshold: number;
  timestamp: Date;
}

export const EnhancedPerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null,
    network: null,
    device: null
  });
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [overallScore, setOverallScore] = useState<number>(0);
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState(10000); // 10 seconds
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<PerformanceObserver | null>(null);

  // Performance thresholds
  const thresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 }
  };

  // Initialize performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      initializePerformanceObserver();
      detectDeviceCapabilities();
      startMonitoring();
    }

    return () => {
      stopMonitoring();
    };
  }, []);

  // Start/stop monitoring based on state
  useEffect(() => {
    if (isMonitoring) {
      startMonitoring();
    } else {
      stopMonitoring();
    }
  }, [isMonitoring, refreshInterval]);

  const initializePerformanceObserver = useCallback(() => {
    try {
      // First Contentful Paint
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      });
      observerRef.current.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

    } catch (error) {
      console.error('Performance Observer not supported:', error);
    }
  }, []);

  const detectDeviceCapabilities = useCallback(() => {
    const device = {
      type: 'desktop' as const,
      memory: 0,
      cores: navigator.hardwareConcurrency || 0
    };

    // Detect device type
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      device.type = 'mobile';
    } else if (/iPad|Android/i.test(navigator.userAgent)) {
      device.type = 'tablet';
    }

    // Detect memory (if available)
    if ('memory' in performance) {
      const mem = (performance as any).memory;
      device.memory = mem.totalJSHeapSize / (1024 * 1024 * 1024); // Convert to GB
    }

    setMetrics(prev => ({ ...prev, device }));
  }, []);

  const startMonitoring = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      updateMetrics();
      checkAlerts();
    }, refreshInterval);
  }, [refreshInterval]);

  const stopMonitoring = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const updateMetrics = useCallback(() => {
    // Update TTFB
    if (performance.getEntriesByType('navigation').length > 0) {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Update memory usage
    if ('memory' in performance) {
      const mem = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memory: {
          used: mem.usedJSHeapSize / (1024 * 1024), // MB
          total: mem.totalJSHeapSize / (1024 * 1024), // MB
          limit: mem.jsHeapSizeLimit / (1024 * 1024) // MB
        }
      }));
    }

    // Update network information
    if ('connection' in navigator) {
      const conn = (navigator as any).connection;
      setMetrics(prev => ({
        ...prev,
        network: {
          type: conn.effectiveType || 'unknown',
          downlink: conn.downlink || 0,
          rtt: conn.rtt || 0
        }
      }));
    }
  }, []);

  const checkAlerts = useCallback(() => {
    const newAlerts: PerformanceAlert[] = [];

    // Check FCP
    if (metrics.fcp && metrics.fcp > thresholds.fcp.poor) {
      newAlerts.push({
        id: `fcp-${Date.now()}`,
        type: 'error',
        message: `First Contentful Paint is very slow (${Math.round(metrics.fcp)}ms)`,
        metric: 'FCP',
        value: metrics.fcp,
        threshold: thresholds.fcp.poor,
        timestamp: new Date()
      });
    }

    // Check LCP
    if (metrics.lcp && metrics.lcp > thresholds.lcp.poor) {
      newAlerts.push({
        id: `lcp-${Date.now()}`,
        type: 'error',
        message: `Largest Contentful Paint is very slow (${Math.round(metrics.lcp)}ms)`,
        metric: 'LCP',
        value: metrics.lcp,
        threshold: thresholds.lcp.poor,
        timestamp: new Date()
      });
    }

    // Check FID
    if (metrics.fid && metrics.fid > thresholds.fid.poor) {
      newAlerts.push({
        id: `fid-${Date.now()}`,
        type: 'error',
        message: `First Input Delay is very high (${Math.round(metrics.fid)}ms)`,
        metric: 'FID',
        value: metrics.fid,
        threshold: thresholds.fid.poor,
        timestamp: new Date()
      });
    }

    // Check CLS
    if (metrics.cls && metrics.cls > thresholds.cls.poor) {
      newAlerts.push({
        id: `cls-${Date.now()}`,
        type: 'error',
        message: `Cumulative Layout Shift is very high (${metrics.cls.toFixed(3)})`,
        metric: 'CLS',
        value: metrics.cls,
        threshold: thresholds.cls.poor,
        timestamp: new Date()
      });
    }

    // Check memory usage
    if (metrics.memory && metrics.memory.used > metrics.memory.limit * 0.8) {
      newAlerts.push({
        id: `memory-${Date.now()}`,
        type: 'warning',
        message: `High memory usage (${Math.round(metrics.memory.used)}MB / ${Math.round(metrics.memory.limit)}MB)`,
        metric: 'Memory',
        value: metrics.memory.used,
        threshold: metrics.memory.limit * 0.8,
        timestamp: new Date()
      });
    }

    if (newAlerts.length > 0) {
      setAlerts(prev => [...prev, ...newAlerts]);
    }
  }, [metrics]);

  // Calculate overall performance score
  useEffect(() => {
    let score = 100;
    let totalMetrics = 0;

    if (metrics.fcp) {
      totalMetrics++;
      if (metrics.fcp > thresholds.fcp.poor) score -= 20;
      else if (metrics.fcp > thresholds.fcp.good) score -= 10;
    }

    if (metrics.lcp) {
      totalMetrics++;
      if (metrics.lcp > thresholds.lcp.poor) score -= 20;
      else if (metrics.lcp > thresholds.lcp.good) score -= 10;
    }

    if (metrics.fid) {
      totalMetrics++;
      if (metrics.fid > thresholds.fid.poor) score -= 20;
      else if (metrics.fid > thresholds.fid.good) score -= 10;
    }

    if (metrics.cls) {
      totalMetrics++;
      if (metrics.cls > thresholds.cls.poor) score -= 20;
      else if (metrics.cls > thresholds.cls.good) score -= 10;
    }

    if (totalMetrics > 0) {
      setOverallScore(Math.max(0, score));
    }
  }, [metrics]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="text-green-500" size={20} />;
    if (score >= 70) return <AlertTriangle className="text-yellow-500" size={20} />;
    return <AlertTriangle className="text-red-500" size={20} />;
  };

  const dismissAlert = (alertId: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== alertId));
  };

  const clearAllAlerts = () => {
    setAlerts([]);
  };

  const refreshMetrics = () => {
    updateMetrics();
    checkAlerts();
  };

  return (
    <>
      {/* Floating Performance Monitor */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Activity size={20} />
                <span className="font-semibold text-sm">Performance</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  {isExpanded ? <X size={16} /> : <Settings size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Performance Score */}
          <div className="p-3 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Overall Score</span>
              <div className="flex items-center space-x-2">
                {getScoreIcon(overallScore)}
                <span className={`font-bold text-lg ${getScoreColor(overallScore)}`}>
                  {overallScore}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          {!isExpanded && (
            <div className="p-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-center">
                  <div className="font-medium text-gray-700">FCP</div>
                  <div className={`font-bold ${metrics.fcp && metrics.fcp > thresholds.fcp.poor ? 'text-red-500' : 'text-green-500'}`}>
                    {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '--'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-gray-700">LCP</div>
                  <div className={`font-bold ${metrics.lcp && metrics.lcp > thresholds.lcp.poor ? 'text-red-500' : 'text-green-500'}`}>
                    {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '--'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Expanded View */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-200"
              >
                {/* Controls */}
                <div className="p-3 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">Monitoring</span>
                    <button
                      onClick={() => setIsMonitoring(!isMonitoring)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        isMonitoring 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {isMonitoring ? 'Active' : 'Paused'}
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={refreshMetrics}
                      className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded transition-colors"
                      title="Refresh metrics"
                    >
                      <RefreshCw size={16} />
                    </button>
                    <select
                      value={refreshInterval}
                      onChange={(e) => setRefreshInterval(Number(e.target.value))}
                      className="text-xs border border-gray-300 rounded px-2 py-1"
                    >
                      <option value={5000}>5s</option>
                      <option value={10000}>10s</option>
                      <option value={30000}>30s</option>
                      <option value={60000}>1m</option>
                    </select>
                  </div>
                </div>

                {/* Detailed Metrics */}
                <div className="p-3 space-y-3">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <div className="font-medium text-gray-700 mb-1">FCP</div>
                      <div className={`font-bold ${metrics.fcp && metrics.fcp > thresholds.fcp.poor ? 'text-red-500' : 'text-green-500'}`}>
                        {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '--'}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {metrics.fcp && metrics.fcp <= thresholds.fcp.good ? 'Good' : 
                         metrics.fcp && metrics.fcp <= thresholds.fcp.poor ? 'Needs Improvement' : 'Poor'}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-700 mb-1">LCP</div>
                      <div className={`font-bold ${metrics.lcp && metrics.lcp > thresholds.lcp.poor ? 'text-red-500' : 'text-green-500'}`}>
                        {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '--'}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {metrics.lcp && metrics.lcp <= thresholds.lcp.good ? 'Good' : 
                         metrics.lcp && metrics.lcp <= thresholds.lcp.poor ? 'Needs Improvement' : 'Poor'}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-700 mb-1">FID</div>
                      <div className={`font-bold ${metrics.fid && metrics.fid > thresholds.fid.poor ? 'text-red-500' : 'text-green-500'}`}>
                        {metrics.fid ? `${Math.round(metrics.fid)}ms` : '--'}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {metrics.fid && metrics.fid <= thresholds.fid.good ? 'Good' : 
                         metrics.fid && metrics.fid <= thresholds.fid.poor ? 'Needs Improvement' : 'Poor'}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-700 mb-1">CLS</div>
                      <div className={`font-bold ${metrics.cls && metrics.cls > thresholds.cls.poor ? 'text-red-500' : 'text-green-500'}`}>
                        {metrics.cls ? metrics.cls.toFixed(3) : '--'}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {metrics.cls && metrics.cls <= thresholds.cls.good ? 'Good' : 
                         metrics.cls && metrics.cls <= thresholds.cls.poor ? 'Needs Improvement' : 'Poor'}
                      </div>
                    </div>
                  </div>

                  {/* System Info */}
                  {metrics.device && (
                    <div className="pt-2 border-t border-gray-200">
                      <div className="flex items-center space-x-2 text-xs text-gray-600 mb-2">
                        {metrics.device.type === 'mobile' ? <Smartphone size={14} /> : 
                         metrics.device.type === 'tablet' ? <Monitor size={14} /> : <Monitor size={14} />}
                        <span className="capitalize">{metrics.device.type}</span>
                        {metrics.device.cores > 0 && (
                          <span>• {metrics.device.cores} cores</span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Network Info */}
                  {metrics.network && (
                    <div className="pt-2 border-t border-gray-200">
                      <div className="flex items-center space-x-2 text-xs text-gray-600">
                        <Wifi size={14} />
                        <span>{metrics.network.type}</span>
                        {metrics.network.downlink > 0 && (
                          <span>• {metrics.network.downlink}Mbps</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Alerts */}
                {alerts.length > 0 && (
                  <div className="border-t border-gray-200">
                    <div className="p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Alerts</span>
                        <button
                          onClick={clearAllAlerts}
                          className="text-xs text-blue-600 hover:text-blue-700"
                        >
                          Clear All
                        </button>
                      </div>
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {alerts.slice(-3).map((alert) => (
                          <div
                            key={alert.id}
                            className={`p-2 rounded text-xs ${
                              alert.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' :
                              alert.type === 'warning' ? 'bg-yellow-50 text-yellow-700 border border-yellow-200' :
                              'bg-blue-50 text-blue-700 border border-blue-200'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="font-medium">{alert.metric}</div>
                                <div className="text-xs opacity-75">{alert.message}</div>
                              </div>
                              <button
                                onClick={() => dismissAlert(alert.id)}
                                className="ml-2 text-gray-400 hover:text-gray-600"
                              >
                                <X size={12} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-40 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        title="Toggle Performance Monitor"
      >
        <Activity size={20} />
      </button>
    </>
  );
};

export default EnhancedPerformanceMonitor;