import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  X,
  Settings,
  RefreshCw,
  BarChart3,
  Gauge,
  HardDrive,
  Wifi,
  Cpu,
  Memory
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

interface ResourceMetrics {
  totalResources: number;
  totalSize: number;
  imageCount: number;
  scriptCount: number;
  cssCount: number;
  fontCount: number;
}

interface PerformanceScore {
  overall: number;
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMonitoring, setIsMonitoring] = useState(false);
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
  const [resourceMetrics, setResourceMetrics] = useState<ResourceMetrics>({
    totalResources: 0,
    totalSize: 0,
    imageCount: 0,
    scriptCount: 0,
    cssCount: 0,
    fontCount: 0
  });
  const [performanceScore, setPerformanceScore] = useState<PerformanceScore>({
    overall: 0,
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0
  });
  const [alerts, setAlerts] = useState<string[]>([]);
  const [history, setHistory] = useState<PerformanceMetrics[]>([]);

  // Performance thresholds
  const thresholds = useMemo(() => ({
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 }
  }), []);

  // Calculate performance score
  const calculateScore = useCallback((metrics: PerformanceMetrics): PerformanceScore => {
    const getScore = (value: number, good: number, poor: number, lowerIsBetter: boolean = true): number => {
      if (lowerIsBetter) {
        if (value <= good) return 100;
        if (value >= poor) return 0;
        return Math.round(((poor - value) / (poor - good)) * 100);
      } else {
        if (value >= good) return 100;
        if (value <= poor) return 0;
        return Math.round(((value - poor) / (good - poor)) * 100);
      }
    };

    const fcpScore = getScore(metrics.fcp, thresholds.fcp.good, thresholds.fcp.poor);
    const lcpScore = getScore(metrics.lcp, thresholds.lcp.good, thresholds.lcp.poor);
    const fidScore = getScore(metrics.fid, thresholds.fid.good, thresholds.fid.poor);
    const clsScore = getScore(metrics.cls, thresholds.cls.good, thresholds.cls.poor, false);

    const overall = Math.round((fcpScore + lcpScore + fidScore + clsScore) / 4);

    return { overall, fcp: fcpScore, lcp: lcpScore, fid: fidScore, cls: clsScore };
  }, [thresholds]);

  // Get performance rating
  const getRating = useCallback((score: number): { label: string; color: string; icon: React.ReactNode } => {
    if (score >= 90) return { label: 'Excellent', color: 'text-green-600', icon: <CheckCircle className="w-4 h-4" /> };
    if (score >= 70) return { label: 'Good', color: 'text-blue-600', icon: <TrendingUp className="w-4 h-4" /> };
    if (score >= 50) return { label: 'Fair', color: 'text-yellow-600', icon: <AlertTriangle className="w-4 h-4" /> };
    return { label: 'Poor', color: 'text-red-600', icon: <AlertTriangle className="w-4 h-4" /> };
  }, []);

  // Monitor Core Web Vitals
  const monitorCoreWebVitals = useCallback(() => {
    if (!('PerformanceObserver' in window)) {
      console.warn('PerformanceObserver not supported');
      return;
    }

    try {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        if (fid) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Navigation timing
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
          fmp: navigationEntry.domContentLoadedEventEnd - navigationEntry.fetchStart,
          si: navigationEntry.loadEventEnd - navigationEntry.fetchStart,
          tti: navigationEntry.domInteractive - navigationEntry.fetchStart
        }));
      }

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    } catch (error) {
      console.error('Error setting up performance observers:', error);
    }
  }, []);

  // Analyze resources
  const analyzeResources = useCallback(() => {
    const resources = performance.getEntriesByType('resource');
    let totalSize = 0;
    let imageCount = 0;
    let scriptCount = 0;
    let cssCount = 0;
    let fontCount = 0;

    resources.forEach((resource: PerformanceResourceTiming) => {
      const url = resource.name.toLowerCase();
      if (url.includes('.jpg') || url.includes('.jpeg') || url.includes('.png') || url.includes('.gif') || url.includes('.webp')) {
        imageCount++;
      } else if (url.includes('.js')) {
        scriptCount++;
      } else if (url.includes('.css')) {
        cssCount++;
      } else if (url.includes('.woff') || url.includes('.woff2') || url.includes('.ttf') || url.includes('.otf')) {
        fontCount++;
      }
      
      // Estimate size based on transfer size
      if (resource.transferSize) {
        totalSize += resource.transferSize;
      }
    });

    setResourceMetrics({
      totalResources: resources.length,
      totalSize,
      imageCount,
      scriptCount,
      cssCount,
      fontCount
    });
  }, []);

  // Generate alerts
  const generateAlerts = useCallback((metrics: PerformanceMetrics) => {
    const newAlerts: string[] = [];

    if (metrics.fcp > thresholds.fcp.poor) {
      newAlerts.push(`First Contentful Paint is too slow: ${Math.round(metrics.fcp)}ms`);
    }
    if (metrics.lcp > thresholds.lcp.poor) {
      newAlerts.push(`Largest Contentful Paint is too slow: ${Math.round(metrics.lcp)}ms`);
    }
    if (metrics.fid > thresholds.fid.poor) {
      newAlerts.push(`First Input Delay is too high: ${Math.round(metrics.fid)}ms`);
    }
    if (metrics.cls > thresholds.cls.poor) {
      newAlerts.push(`Cumulative Layout Shift is too high: ${metrics.cls.toFixed(3)}`);
    }

    setAlerts(newAlerts);
  }, [thresholds]);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    const cleanup = monitorCoreWebVitals();
    analyzeResources();
    
    // Monitor every 5 seconds
    const interval = setInterval(() => {
      analyzeResources();
    }, 5000);

    return () => {
      clearInterval(interval);
      if (cleanup) cleanup();
    };
  }, [monitorCoreWebVitals, analyzeResources]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Refresh metrics
  const refreshMetrics = useCallback(() => {
    analyzeResources();
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({
        ...prev,
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
        fmp: navigationEntry.domContentLoadedEventEnd - navigationEntry.fetchStart,
        si: navigationEntry.loadEventEnd - navigationEntry.fetchStart,
        tti: navigationEntry.domInteractive - navigationEntry.fetchStart
      }));
    }
  }, [analyzeResources]);

  // Update performance score when metrics change
  useEffect(() => {
    const score = calculateScore(metrics);
    setPerformanceScore(score);
    generateAlerts(metrics);
    
    // Add to history
    setHistory(prev => [...prev.slice(-9), metrics]);
  }, [metrics, calculateScore, generateAlerts]);

  // Start monitoring on mount
  useEffect(() => {
    const cleanup = startMonitoring();
    return cleanup;
  }, [startMonitoring]);

  // Format bytes
  const formatBytes = useCallback((bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }, []);

  // Format time
  const formatTime = useCallback((ms: number): string => {
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  }, []);

  const overallRating = getRating(performanceScore.overall);

  return (
    <>
      {/* Performance Monitor Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 left-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 ${
          performanceScore.overall >= 90 
            ? 'bg-green-500 hover:bg-green-600 focus:ring-green-300' 
            : performanceScore.overall >= 70
            ? 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-300'
            : performanceScore.overall >= 50
            ? 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300'
            : 'bg-red-500 hover:bg-red-600 focus:ring-red-300'
        } text-white`}
        aria-label="Open performance monitor"
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </button>

      {/* Performance Monitor Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 h-full w-96 bg-white shadow-2xl z-40 overflow-hidden"
          >
            {/* Panel Header */}
            <div className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold flex items-center space-x-2">
                  <Gauge className="w-5 h-5" />
                  <span>Performance Monitor</span>
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label="Close performance monitor"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Panel Content */}
            <div className="p-4 space-y-6 overflow-y-auto h-full">
              {/* Overall Score */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {performanceScore.overall}
                  </div>
                  <div className={`text-lg font-medium mb-2 ${overallRating.color} flex items-center justify-center space-x-2`}>
                    {overallRating.icon}
                    {overallRating.label}
                  </div>
                  <div className="text-sm text-gray-600">Performance Score</div>
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-zion-cyan" />
                  <span>Core Web Vitals</span>
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { key: 'fcp', label: 'FCP', value: metrics.fcp, format: formatTime, score: performanceScore.fcp },
                    { key: 'lcp', label: 'LCP', value: metrics.lcp, format: formatTime, score: performanceScore.lcp },
                    { key: 'fid', label: 'FID', value: metrics.fid, format: formatTime, score: performanceScore.fid },
                    { key: 'cls', label: 'CLS', value: metrics.cls, format: (v: number) => v.toFixed(3), score: performanceScore.cls }
                  ].map(({ key, label, value, format, score }) => (
                    <div key={key} className="bg-white border border-gray-200 rounded-lg p-3">
                      <div className="text-sm font-medium text-gray-600">{label}</div>
                      <div className="text-lg font-semibold text-gray-900">{format(value)}</div>
                      <div className={`text-xs font-medium ${getRating(score).color}`}>
                        {getRating(score).label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-zion-cyan" />
                  <span>Additional Metrics</span>
                </h3>
                
                <div className="space-y-3">
                  {[
                    { label: 'Time to First Byte', value: metrics.ttfb, format: formatTime },
                    { label: 'First Meaningful Paint', value: metrics.fmp, format: formatTime },
                    { label: 'Speed Index', value: metrics.si, format: formatTime },
                    { label: 'Time to Interactive', value: metrics.tti, format: formatTime }
                  ].map(({ label, value, format }) => (
                    <div key={label} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">{label}</span>
                      <span className="text-sm font-medium text-gray-900">{format(value)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resource Analysis */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                  <HardDrive className="w-5 h-5 text-zion-cyan" />
                  <span>Resource Analysis</span>
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-600">Total Resources</div>
                    <div className="text-lg font-semibold text-gray-900">{resourceMetrics.totalResources}</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-600">Total Size</div>
                    <div className="text-lg font-semibold text-gray-900">{formatBytes(resourceMetrics.totalSize)}</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-600">Images</div>
                    <div className="text-lg font-semibold text-gray-900">{resourceMetrics.imageCount}</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-600">Scripts</div>
                    <div className="text-lg font-semibold text-gray-900">{resourceMetrics.scriptCount}</div>
                  </div>
                </div>
              </div>

              {/* Alerts */}
              {alerts.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <span>Performance Alerts</span>
                  </h3>
                  
                  <div className="space-y-2">
                    {alerts.map((alert, index) => (
                      <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <div className="text-sm text-red-800">{alert}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Controls */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <button
                    onClick={refreshMetrics}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Refresh</span>
                  </button>
                  
                  <button
                    onClick={isMonitoring ? stopMonitoring : startMonitoring}
                    className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      isMonitoring 
                        ? 'bg-red-500 hover:bg-red-600 text-white' 
                        : 'bg-green-500 hover:bg-green-600 text-white'
                    }`}
                  >
                    <Activity className="w-4 h-4" />
                    <span>{isMonitoring ? 'Stop' : 'Start'}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdvancedPerformanceMonitor;
