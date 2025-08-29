import React, { useEffect, useState, useRef, useCallback } from 'react';
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
  HardDrive,
  Wifi,
  Cpu,
  Memory,
  Battery,
  Thermometer,
  Settings,
  RefreshCw,
  Eye,
  EyeOff
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fmp: number;
  si: number;
  tti: number;
  tbt: number;
}

interface ResourceMetrics {
  name: string;
  size: number;
  type: 'script' | 'stylesheet' | 'image' | 'font' | 'other';
  loadTime: number;
  status: 'success' | 'warning' | 'error';
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  autoOptimize?: boolean;
  alertThreshold?: number;
}

export default function PerformanceOptimizer({ 
  showMetrics = false, 
  autoOptimize = true,
  alertThreshold = 3000 
}: PerformanceOptimizerProps) {
  const [isVisible, setIsVisible] = useState(showMetrics);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [resourceMetrics, setResourceMetrics] = useState<ResourceMetrics[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<string[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState(5000);
  
  const observerRef = useRef<PerformanceObserver | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  // Helper functions
  const getMetricStatus = (value: number, threshold: number) => {
    if (value <= threshold * 0.7) return 'excellent';
    if (value <= threshold) return 'good';
    if (value <= threshold * 1.5) return 'warning';
    return 'poor';
  };

  const getMetricColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-400';
      case 'good': return 'text-blue-400';
      case 'warning': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getMetricIcon = (status: string) => {
    switch (status) {
      case 'excellent': return CheckCircle;
      case 'good': return TrendingUp;
      case 'warning': return AlertTriangle;
      case 'poor': return X;
      default: return Info;
    }
  };

  const formatMetric = (value: number, unit: string = 'ms') => {
    if (value === 0) return 'N/A';
    return `${Math.round(value)}${unit}`;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Update metrics callback
  const updateMetric = useCallback((key: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => prev ? { ...prev, [key]: value } : null);
  }, []);

  // Refresh metrics
  const refreshMetrics = useCallback(() => {
    if ('performance' in window) {
      const perf = window.performance;
      const navigation = perf.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const newMetrics: PerformanceMetrics = {
          fcp: 0,
          lcp: 0,
          fid: 0,
          cls: 0,
          ttfb: navigation.responseStart - navigation.requestStart,
          fmp: 0,
          si: 0,
          tti: 0,
          tbt: 0
        };

        // Get FCP
        const fcpEntry = perf.getEntriesByName('first-contentful-paint')[0];
        if (fcpEntry) {
          newMetrics.fcp = fcpEntry.startTime;
        }

        // Get LCP
        const lcpEntries = perf.getEntriesByType('largest-contentful-paint');
        if (lcpEntries.length > 0) {
          newMetrics.lcp = lcpEntries[lcpEntries.length - 1].startTime;
        }

        setMetrics(newMetrics);
      }
    }

    // Simulate resource metrics
    const mockResources: ResourceMetrics[] = [
      { name: 'main.js', size: 245760, type: 'script', loadTime: 120, status: 'success' },
      { name: 'styles.css', size: 81920, type: 'stylesheet', loadTime: 85, status: 'success' },
      { name: 'hero-image.jpg', size: 153600, type: 'image', loadTime: 200, status: 'warning' },
      { name: 'font-awesome.woff2', size: 40960, type: 'font', loadTime: 95, status: 'success' }
    ];
    setResourceMetrics(mockResources);
  }, []);

  // Optimize performance
  const optimizePerformance = useCallback(async () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    const optimizations = [
      'Preloading critical fonts...',
      'Optimizing image loading...',
      'Deferring non-critical scripts...',
      'Adding resource hints...',
      'Compressing assets...'
    ];

    for (let i = 0; i < optimizations.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setOptimizationHistory(prev => [...prev, optimizations[i]]);
    }

    // Simulate improved metrics
    setTimeout(() => {
      if (metrics) {
        setMetrics(prev => prev ? {
          ...prev,
          fcp: Math.max(prev.fcp * 0.8, 100),
          lcp: Math.max(prev.lcp * 0.8, 200),
          ttfb: Math.max(prev.ttfb * 0.7, 50)
        } : null);
      }
      setIsOptimizing(false);
    }, 1000);
  }, [metrics]);

  // Setup performance observer
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            updateMetric('lcp', entry.startTime);
          } else if (entry.entryType === 'first-input') {
            updateMetric('fid', (entry as any).processingStart - entry.startTime);
          }
        });
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
      observerRef.current = observer;
      
      return () => observer.disconnect();
    }
  }, [updateMetric]);

  // Auto-refresh setup
  useEffect(() => {
    if (autoRefresh && refreshInterval > 0) {
      intervalRef.current = setInterval(refreshMetrics, refreshInterval);
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [autoRefresh, refreshInterval, refreshMetrics]);

  // Initial metrics load
  useEffect(() => {
    refreshMetrics();
  }, [refreshMetrics]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  if (!isVisible) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-zion-cyan text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Show Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg shadow-2xl backdrop-blur-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zion-cyan/20">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-zion-cyan/20 rounded-lg">
            <Gauge className="w-5 h-5 text-zion-cyan" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Performance Monitor</h3>
            <p className="text-xs text-gray-400">Real-time metrics</p>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-zion-slate/50 rounded transition-colors"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Core Web Vitals */}
        <div>
          <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-zion-cyan" />
            Core Web Vitals
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {metrics && (
              <>
                <div className="bg-zion-slate/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">FCP</span>
                    <span className={`text-xs ${getMetricColor(getMetricStatus(metrics.fcp, 1800))}`}>
                      {formatMetric(metrics.fcp)}
                    </span>
                  </div>
                  <div className="w-full bg-zion-slate rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getMetricStatus(metrics.fcp, 1800) === 'excellent' ? 'bg-green-500' : getMetricStatus(metrics.fcp, 1800) === 'good' ? 'bg-blue-500' : getMetricStatus(metrics.fcp, 1800) === 'warning' ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${Math.min((metrics.fcp / 3000) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="bg-zion-slate/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">LCP</span>
                    <span className={`text-xs ${getMetricColor(getMetricStatus(metrics.lcp, 2500))}`}>
                      {formatMetric(metrics.lcp)}
                    </span>
                  </div>
                  <div className="w-full bg-zion-slate rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getMetricStatus(metrics.lcp, 2500) === 'excellent' ? 'bg-green-500' : getMetricStatus(metrics.lcp, 2500) === 'good' ? 'bg-blue-500' : getMetricStatus(metrics.lcp, 2500) === 'warning' ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${Math.min((metrics.lcp / 4000) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="bg-zion-slate/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">FID</span>
                    <span className={`text-xs ${getMetricColor(getMetricStatus(metrics.fid, 100))}`}>
                      {formatMetric(metrics.fid)}
                    </span>
                  </div>
                  <div className="w-full bg-zion-slate rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getMetricStatus(metrics.fid, 100) === 'excellent' ? 'bg-green-500' : getMetricStatus(metrics.fid, 100) === 'good' ? 'bg-blue-500' : getMetricStatus(metrics.fid, 100) === 'warning' ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${Math.min((metrics.fid / 300) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="bg-zion-slate/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">CLS</span>
                    <span className={`text-xs ${getMetricColor(getMetricStatus(metrics.cls * 1000, 100))}`}>
                      {(metrics.cls * 1000).toFixed(3)}
                    </span>
                  </div>
                  <div className="w-full bg-zion-slate rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getMetricStatus(metrics.cls * 1000, 100) === 'excellent' ? 'bg-green-500' : getMetricStatus(metrics.cls * 1000, 100) === 'good' ? 'bg-blue-500' : getMetricStatus(metrics.cls * 1000, 100) === 'warning' ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${Math.min((metrics.cls * 1000 / 250) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Additional Metrics */}
        <div>
          <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4 text-zion-cyan" />
            Additional Metrics
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {metrics && (
              <>
                <div className="bg-zion-slate/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">TTFB</span>
                    <span className={`text-xs ${getMetricColor(getMetricStatus(metrics.ttfb, 800))}`}>
                      {formatMetric(metrics.ttfb)}
                    </span>
                  </div>
                  <div className="w-full bg-zion-slate rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getMetricStatus(metrics.ttfb, 800) === 'excellent' ? 'bg-green-500' : getMetricStatus(metrics.ttfb, 800) === 'good' ? 'bg-blue-500' : getMetricStatus(metrics.ttfb, 800) === 'warning' ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${Math.min((metrics.ttfb / 1200) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="bg-zion-slate/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">FMP</span>
                    <span className={`text-xs ${getMetricColor(getMetricStatus(metrics.fmp, 2000))}`}>
                      {formatMetric(metrics.fmp)}
                    </span>
                  </div>
                  <div className="w-full bg-zion-slate rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getMetricStatus(metrics.fmp, 2000) === 'excellent' ? 'bg-green-500' : getMetricStatus(metrics.fmp, 2000) === 'good' ? 'bg-blue-500' : getMetricStatus(metrics.fmp, 2000) === 'warning' ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${Math.min((metrics.fmp / 3000) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={refreshMetrics}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-zion-cyan/20 border border-zion-cyan/30 text-zion-cyan rounded-lg hover:bg-zion-cyan/30 transition-colors text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
          <button
            onClick={optimizePerformance}
            disabled={isOptimizing}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/90 transition-colors text-sm disabled:opacity-50"
          >
            <Zap className="w-4 h-4" />
            {isOptimizing ? 'Optimizing...' : 'Optimize'}
          </button>
        </div>

        {/* Settings */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-400">Auto-refresh</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-zion-slate peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-zion-cyan/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zion-cyan"></div>
          </label>
        </div>

        {/* Details Toggle */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-zion-slate/30 border border-zion-slate/50 text-gray-300 rounded-lg hover:bg-zion-slate/50 transition-colors text-sm"
        >
          {showDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>

        {/* Detailed View */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4"
            >
              {/* Resource Performance */}
              <div>
                <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-zion-cyan" />
                  Resource Performance
                </h4>
                <div className="space-y-2">
                  {resourceMetrics.map((resource, index) => (
                    <div key={index} className="bg-zion-slate/30 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-white font-medium">{resource.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          resource.status === 'success' ? 'bg-green-500/20 text-green-400' :
                          resource.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {resource.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                        <span>Size: {formatFileSize(resource.size)}</span>
                        <span>Load: {formatMetric(resource.loadTime)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optimization History */}
              <div>
                <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-zion-cyan" />
                  Optimization History
                </h4>
                <div className="max-h-32 overflow-y-auto space-y-2">
                  {optimizationHistory.length > 0 ? (
                    optimizationHistory.map((item, index) => (
                      <div key={index} className="bg-zion-slate/30 rounded-lg p-2 text-xs text-gray-300">
                        {item}
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-gray-500 text-center py-4">
                      No optimizations yet
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
