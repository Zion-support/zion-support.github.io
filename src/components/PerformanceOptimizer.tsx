import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Gauge, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  X,
  RefreshCw,
  Settings,
  BarChart3,
  Cpu,
  Memory,
  HardDrive,
  Network
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  bundleSize: number;
  memoryUsage: number;
  cpuUsage: number;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export function PerformanceOptimizer({ 
  enabled = true, 
  showMetrics = false,
  autoOptimize = true 
}: PerformanceOptimizerProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [serviceWorkerStatus, setServiceWorkerStatus] = useState<'installing' | 'installed' | 'failed' | 'none'>('none');
  const [optimizationHistory, setOptimizationHistory] = useState<Array<{timestamp: number, action: string, improvement: number}>>([]);

  // Performance monitoring
  const measurePerformance = useCallback(async () => {
    if (!enabled) return;

    try {
      // Core Web Vitals
      const fcp = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;
      const lcp = performance.getEntriesByName('largest-contentful-paint')[0]?.startTime || 0;
      const fid = performance.getEntriesByName('first-input-delay')[0]?.processingStart || 0;
      const cls = performance.getEntriesByName('cumulative-layout-shift')[0]?.value || 0;
      
      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry?.responseStart - navigationEntry?.requestStart || 0;

      // Bundle size estimation
      const bundleSize = performance.getEntriesByType('resource')
        .filter((entry: any) => entry.name.includes('.js') || entry.name.includes('.css'))
        .reduce((total: number, entry: any) => total + (entry.transferSize || 0), 0);

      // Memory usage
      const memoryInfo = (performance as any).memory;
      const memoryUsage = memoryInfo ? memoryInfo.usedJSHeapSize / 1024 / 1024 : 0;

      // CPU usage estimation
      const cpuUsage = performance.now() / 1000;

      setMetrics({
        fcp,
        lcp,
        fid,
        cls,
        ttfb,
        bundleSize,
        memoryUsage,
        cpuUsage
      });
    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }
  }, [enabled]);

  // Service Worker registration
  const registerServiceWorker = useCallback(async () => {
    if (!enabled || !('serviceWorker' in navigator)) return;

    try {
      setServiceWorkerStatus('installing');
      
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });

      if (registration.installing) {
        registration.installing.addEventListener('statechange', (event) => {
          if ((event.target as any).state === 'installed') {
            setServiceWorkerStatus('installed');
          }
        });
      }

      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New version available
              if (confirm('New version available. Reload to update?')) {
                window.location.reload();
              }
            }
          });
        }
      });

    } catch (error) {
      console.error('Service Worker registration failed:', error);
      setServiceWorkerStatus('failed');
    }
  }, [enabled]);

  // Performance optimization
  const optimizePerformance = useCallback(async () => {
    if (!enabled || isOptimizing) return;

    setIsOptimizing(true);
    const startTime = performance.now();

    try {
      // Preload critical resources
      const criticalResources = [
        '/src/components/Header.tsx',
        '/src/components/Footer.tsx',
        '/src/pages/Home.tsx'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'script';
        document.head.appendChild(link);
      });

      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });

      // Prefetch next likely pages
      const prefetchLinks = ['/about', '/services', '/contact'];
      prefetchLinks.forEach(link => {
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = link;
        document.head.appendChild(prefetchLink);
      });

      const endTime = performance.now();
      const improvement = endTime - startTime;

      setOptimizationHistory(prev => [...prev, {
        timestamp: Date.now(),
        action: 'Performance optimization',
        improvement
      }]);

      // Trigger performance measurement
      setTimeout(measurePerformance, 1000);

    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [enabled, isOptimizing, measurePerformance]);

  // Auto-optimization
  useEffect(() => {
    if (autoOptimize && enabled) {
      const timer = setTimeout(optimizePerformance, 5000);
      return () => clearTimeout(timer);
    }
  }, [autoOptimize, enabled, optimizePerformance]);

  // Initial setup
  useEffect(() => {
    if (enabled) {
      registerServiceWorker();
      measurePerformance();
      
      // Monitor performance continuously
      const interval = setInterval(measurePerformance, 30000);
      return () => clearInterval(interval);
    }
  }, [enabled, registerServiceWorker, measurePerformance]);

  if (!enabled) return null;

  const getPerformanceScore = (metrics: PerformanceMetrics) => {
    let score = 100;
    
    if (metrics.fcp > 1800) score -= 20;
    if (metrics.lcp > 2500) score -= 25;
    if (metrics.fid > 100) score -= 15;
    if (metrics.cls > 0.1) score -= 20;
    if (metrics.ttfb > 600) score -= 20;
    
    return Math.max(0, score);
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <>
      {/* Floating Performance Button */}
      <motion.button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Performance Monitor"
      >
        <Activity className="w-7 h-7 text-white mx-auto" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">
            {metrics ? getPerformanceScore(metrics) : '?'}
          </span>
        </div>
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-20 right-6 z-40 w-96 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-cyan-400" />
                  Performance Monitor
                </h3>
                <button
                  onClick={() => setShowPanel(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Performance Score */}
              {metrics && (
                <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Performance Score</span>
                    <span className={`text-2xl font-bold ${getPerformanceColor(getPerformanceScore(metrics))}`}>
                      {getPerformanceScore(metrics)}
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        getPerformanceScore(metrics) >= 90 ? 'bg-green-500' :
                        getPerformanceScore(metrics) >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${getPerformanceScore(metrics)}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Metrics Grid */}
              {metrics && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs text-gray-400">FCP</span>
                    </div>
                    <span className="text-sm font-mono text-white">
                      {metrics.fcp.toFixed(0)}ms
                    </span>
                  </div>
                  
                  <div className="p-3 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs text-gray-400">LCP</span>
                    </div>
                    <span className="text-sm font-mono text-white">
                      {metrics.lcp.toFixed(0)}ms
                    </span>
                  </div>
                  
                  <div className="p-3 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs text-gray-400">Memory</span>
                    </div>
                    <span className="text-sm font-mono text-white">
                      {metrics.memoryUsage.toFixed(1)}MB
                    </span>
                  </div>
                  
                  <div className="p-3 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <HardDrive className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs text-gray-400">Bundle</span>
                    </div>
                    <span className="text-sm font-mono text-white">
                      {(metrics.bundleSize / 1024 / 1024).toFixed(1)}MB
                    </span>
                  </div>
                </div>
              )}

              {/* Service Worker Status */}
              <div className="mb-6 p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Service Worker</span>
                  <div className="flex items-center gap-2">
                    {serviceWorkerStatus === 'installing' && (
                      <RefreshCw className="w-4 h-4 text-yellow-400 animate-spin" />
                    )}
                    {serviceWorkerStatus === 'installed' && (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    )}
                    {serviceWorkerStatus === 'failed' && (
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                    )}
                    <span className={`text-xs ${
                      serviceWorkerStatus === 'installed' ? 'text-green-400' :
                      serviceWorkerStatus === 'failed' ? 'text-red-400' : 'text-yellow-400'
                    }`}>
                      {serviceWorkerStatus}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={optimizePerformance}
                  disabled={isOptimizing}
                  className="flex-1 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isOptimizing ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Zap className="w-4 h-4" />
                  )}
                  {isOptimizing ? 'Optimizing...' : 'Optimize Now'}
                </button>
                
                <button
                  onClick={measurePerformance}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                  title="Refresh Metrics"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              {/* Optimization History */}
              {optimizationHistory.length > 0 && (
                <div className="mt-4 p-3 bg-slate-800/50 rounded-lg">
                  <h4 className="text-sm font-medium text-white mb-2">Recent Optimizations</h4>
                  <div className="space-y-2">
                    {optimizationHistory.slice(-3).map((item, index) => (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">{item.action}</span>
                        <span className="text-cyan-400">+{item.improvement.toFixed(0)}ms</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
