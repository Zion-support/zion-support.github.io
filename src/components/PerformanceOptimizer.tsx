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

  // Performance monitoring setup
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        // Core Web Vitals
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              updateMetric('lcp', entry.startTime);
            } else if (entry.entryType === 'first-input') {
              updateMetric('fid', entry.processingStart - entry.startTime);
            } else if (entry.entryType === 'layout-shift') {
              const layoutShift = entry as any;
              if (!layoutShift.hadRecentInput) {
                updateMetric('cls', layoutShift.value);
              }
            }
          });
        });

        observerRef.current.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            updateMetric('fcp', entry.startTime);
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Time to First Byte
        const navigationObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as any;
              updateMetric('ttfb', navEntry.responseStart - navEntry.requestStart);
            }
          });
        });
        navigationObserver.observe({ entryTypes: ['navigation'] });

        // Resource timing
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const newResources: ResourceMetrics[] = [];
          
          entries.forEach((entry) => {
            if (entry.entryType === 'resource') {
              const resourceEntry = entry as any;
              const size = resourceEntry.transferSize || 0;
              const loadTime = resourceEntry.responseEnd - resourceEntry.fetchStart;
              
              let type: ResourceMetrics['type'] = 'other';
              if (resourceEntry.name.includes('.js')) type = 'script';
              else if (resourceEntry.name.includes('.css')) type = 'stylesheet';
              else if (resourceEntry.name.includes('.woff') || resourceEntry.name.includes('.ttf')) type = 'font';
              else if (resourceEntry.name.includes('.jpg') || resourceEntry.name.includes('.png') || resourceEntry.name.includes('.svg')) type = 'image';
              
              let status: ResourceMetrics['status'] = 'success';
              if (loadTime > 3000) status = 'warning';
              if (loadTime > 5000) status = 'error';
              
              newResources.push({
                name: resourceEntry.name.split('/').pop() || resourceEntry.name,
                size,
                type,
                loadTime,
                status
              });
            }
          });
          
          if (newResources.length > 0) {
            setResourceMetrics(prev => [...prev, ...newResources].slice(-20)); // Keep last 20
          }
        });
        resourceObserver.observe({ entryTypes: ['resource'] });

      } catch (error) {
        console.warn('Performance monitoring setup failed:', error);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Auto-refresh metrics
  useEffect(() => {
    if (autoRefresh && refreshInterval > 0) {
      intervalRef.current = setInterval(() => {
        refreshMetrics();
      }, refreshInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRefresh, refreshInterval]);

  const updateMetric = useCallback((key: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => ({
      ...prev,
      [key]: value
    } as PerformanceMetrics));
  }, []);

  const refreshMetrics = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const perf = window.performance;
      
      // Get navigation timing
      const navigation = perf.getEntriesByType('navigation')[0] as any;
      if (navigation) {
        updateMetric('ttfb', navigation.responseStart - navigation.requestStart);
      }

      // Get paint timing
      const paint = perf.getEntriesByType('paint');
      paint.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          updateMetric('fcp', entry.startTime);
        }
      });

      // Calculate other metrics
      const now = performance.now();
      updateMetric('fmp', now);
      updateMetric('si', now);
      updateMetric('tti', now);
      updateMetric('tbt', now);
    }
  }, [updateMetric]);

  const optimizePerformance = useCallback(async () => {
    setIsOptimizing(true);
    const optimizations: string[] = [];

    try {
      // Preload critical resources
      if (typeof window !== 'undefined') {
        // Preload fonts
        const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
        if (fontLinks.length === 0) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'font';
          link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap';
          link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
          optimizations.push('Preloaded critical fonts');
        }

        // Preload critical images
        const heroImages = document.querySelectorAll('img[data-critical="true"]');
        heroImages.forEach(img => {
          if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'eager');
            optimizations.push('Optimized hero image loading');
          }
        });

        // Optimize non-critical resources
        const nonCriticalScripts = document.querySelectorAll('script[data-critical="false"]');
        nonCriticalScripts.forEach(script => {
          if (!script.hasAttribute('defer')) {
            script.setAttribute('defer', 'true');
            optimizations.push('Deferred non-critical scripts');
          }
        });

        // Add resource hints
        const dnsPrefetch = document.createElement('link');
        dnsPrefetch.rel = 'dns-prefetch';
        dnsPrefetch.href = '//fonts.googleapis.com';
        document.head.appendChild(dnsPrefetch);
        optimizations.push('Added DNS prefetch for external domains');
      }

      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      setOptimizationHistory(prev => [...optimizations, ...prev].slice(0, 10));
      optimizations.forEach(opt => {
        console.log(`Performance optimization: ${opt}`);
      });

    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, []);

  const getMetricStatus = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getMetricColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getMetricIcon = (status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <X className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  const formatMetric = (value: number, unit: string = 'ms') => {
    if (value === 0 || !value) return 'N/A';
    if (value < 1000) return `${Math.round(value)}${unit}`;
    return `${(value / 1000).toFixed(1)}s`;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-4 right-4 z-50 max-w-sm w-full"
    >
      <div className="bg-zion-slate/95 backdrop-blur-lg border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/25 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 p-4 border-b border-zion-cyan/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zion-cyan/20 rounded-lg">
                <Activity className="w-5 h-5 text-zion-cyan" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Performance Monitor</h3>
                <p className="text-xs text-zion-cyan">Real-time metrics</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="p-2 hover:bg-zion-cyan/20 rounded-lg transition-colors"
                title={showDetails ? 'Hide details' : 'Show details'}
              >
                {showDetails ? <EyeOff className="w-4 h-4 text-zion-cyan" /> : <Eye className="w-4 h-4 text-zion-cyan" />}
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 hover:bg-zion-cyan/20 rounded-lg transition-colors"
                title="Close"
              >
                <X className="w-4 h-4 text-zion-cyan" />
              </button>
            </div>
          </div>
        </div>

        {/* Metrics Overview */}
        <div className="p-4">
          {metrics && (
            <div className="space-y-3">
              {/* Core Web Vitals */}
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-zion-slate/50 rounded-lg border border-zion-cyan/20">
                  <div className="text-xs text-gray-400 mb-1">FCP</div>
                  <div className={`text-lg font-bold ${getMetricColor(getMetricStatus(metrics.fcp, { good: 1800, needsImprovement: 3000 }))}`}>
                    {formatMetric(metrics.fcp)}
                  </div>
                  <div className="text-xs text-gray-500">First Contentful Paint</div>
                </div>
                
                <div className="text-center p-3 bg-zion-slate/50 rounded-lg border border-zion-cyan/20">
                  <div className="text-xs text-gray-400 mb-1">LCP</div>
                  <div className={`text-lg font-bold ${getMetricColor(getMetricStatus(metrics.lcp, { good: 2500, needsImprovement: 4000 }))}`}>
                    {formatMetric(metrics.lcp)}
                  </div>
                  <div className="text-xs text-gray-500">Largest Contentful Paint</div>
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center p-2 bg-zion-slate/30 rounded border border-zion-cyan/10">
                  <div className="text-xs text-gray-400">FID</div>
                  <div className={`text-sm font-semibold ${getMetricColor(getMetricStatus(metrics.fid, { good: 100, needsImprovement: 300 }))}`}>
                    {formatMetric(metrics.fid)}
                  </div>
                </div>
                
                <div className="text-center p-2 bg-zion-slate/30 rounded border border-zion-cyan/10">
                  <div className="text-xs text-gray-400">CLS</div>
                  <div className={`text-sm font-semibold ${getMetricColor(getMetricStatus(metrics.cls, { good: 0.1, needsImprovement: 0.25 }))}`}>
                    {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
                  </div>
                </div>
                
                <div className="text-center p-2 bg-zion-slate/30 rounded border border-zion-cyan/10">
                  <div className="text-xs text-gray-400">TTFB</div>
                  <div className={`text-sm font-semibold ${getMetricColor(getMetricStatus(metrics.ttfb, { good: 800, needsImprovement: 1800 }))}`}>
                    {formatMetric(metrics.ttfb)}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={refreshMetrics}
              disabled={isOptimizing}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-zion-cyan/20 hover:bg-zion-cyan/30 text-zion-cyan rounded-lg transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isOptimizing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            
            <button
              onClick={optimizePerformance}
              disabled={isOptimizing}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
            >
              <Zap className="w-4 h-4" />
              {isOptimizing ? 'Optimizing...' : 'Optimize'}
            </button>
          </div>

          {/* Settings */}
          <div className="mt-3 pt-3 border-t border-zion-cyan/20">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Auto-refresh</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoRefresh}
                  onChange={(e) => setAutoRefresh(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-zion-slate border border-zion-cyan/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zion-cyan after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zion-cyan"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Detailed Metrics */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-zion-cyan/20"
            >
              <div className="p-4 space-y-4">
                {/* Resource Metrics */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-zion-cyan" />
                    Resource Performance
                  </h4>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {resourceMetrics.slice(-5).map((resource, index) => (
                      <div key={index} className="flex items-center justify-between text-xs p-2 bg-zion-slate/30 rounded border border-zion-cyan/10">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            resource.status === 'success' ? 'bg-green-400' :
                            resource.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                          }`} />
                          <span className="text-gray-300 truncate max-w-20">{resource.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-zion-cyan">{formatFileSize(resource.size)}</div>
                          <div className="text-gray-500">{formatMetric(resource.loadTime)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optimization History */}
                {optimizationHistory.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Settings className="w-4 h-4 text-zion-cyan" />
                      Recent Optimizations
                    </h4>
                    <div className="space-y-2 max-h-24 overflow-y-auto">
                      {optimizationHistory.map((optimization, index) => (
                        <div key={index} className="text-xs text-gray-300 p-2 bg-zion-slate/30 rounded border border-zion-cyan/10">
                          <CheckCircle className="w-3 h-3 text-green-400 inline mr-2" />
                          {optimization}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
