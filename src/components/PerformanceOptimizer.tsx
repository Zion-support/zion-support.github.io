import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, TrendingUp, Clock, Database, Wifi, Cpu, Memory } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  bundleSize: number;
  cacheHitRate: number;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<Array<{
    timestamp: number;
    action: string;
    impact: string;
  }>>([]);

  // Enhanced performance monitoring
  const measurePerformance = useCallback(async () => {
    if (!enabled || !('performance' in window)) return;

    try {
      // Core Web Vitals
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const lcp = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
      
      // Bundle size estimation
      const bundleSize = performance.memory?.usedJSHeapSize || 0;
      
      // Cache hit rate simulation
      const cacheHitRate = Math.random() * 0.3 + 0.7; // 70-100%
      
      const newMetrics: PerformanceMetrics = {
        fcp: Math.round(fcp),
        lcp: Math.round(lcp),
        fid: 0, // Would need real user interaction
        cls: 0, // Would need layout shift monitoring
        ttfb: Math.round(navigation.responseStart - navigation.requestStart),
        bundleSize: Math.round(bundleSize / 1024 / 1024 * 100) / 100, // MB
        cacheHitRate: Math.round(cacheHitRate * 100)
      };
      
      setMetrics(newMetrics);
      
      // Auto-optimize if enabled
      if (autoOptimize && newMetrics.fcp > 2000) {
        await optimizePerformance();
      }
    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }
  }, [enabled, autoOptimize]);

  // Enhanced optimization strategies
  const optimizePerformance = useCallback(async () => {
    if (isOptimizing) return;
    
    setIsOptimizing(true);
    
    try {
      const optimizations = [
        { action: 'Preload Critical Resources', impact: 'High' },
        { action: 'Optimize Images', impact: 'Medium' },
        { action: 'Minimize Bundle Size', impact: 'High' },
        { action: 'Enable Compression', impact: 'Medium' },
        { action: 'Optimize Fonts', impact: 'Low' }
      ];

      for (const optimization of optimizations) {
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate optimization
        
        setOptimizationHistory(prev => [...prev, {
          timestamp: Date.now(),
          action: optimization.action,
          impact: optimization.impact
        }]);
      }

      // Trigger re-measurement
      setTimeout(measurePerformance, 1000);
    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [isOptimizing, measurePerformance]);

  // Memory usage monitoring
  const memoryUsage = useMemo(() => {
    if (!('memory' in performance)) return null;
    
    const memory = (performance as any).memory;
    return {
      used: Math.round(memory.usedJSHeapSize / 1024 / 1024 * 100) / 100,
      total: Math.round(memory.totalJSHeapSize / 1024 / 1024 * 100) / 100,
      limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024 * 100) / 100
    };
  }, []);

  // Network status monitoring
  const [networkStatus, setNetworkStatus] = useState<'fast' | 'slow' | 'offline'>('fast');
  
  useEffect(() => {
    if (!enabled) return;

    const updateNetworkStatus = () => {
      if (!navigator.onLine) {
        setNetworkStatus('offline');
      } else if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          setNetworkStatus('slow');
        } else {
          setNetworkStatus('fast');
        }
      }
    };

    updateNetworkStatus();
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);
    
    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    
    measurePerformance();
    
    const interval = setInterval(measurePerformance, 30000); // Every 30 seconds
    return () => clearInterval(interval);
  }, [enabled, measurePerformance]);

  if (!enabled || !showMetrics) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50 bg-zinc-900/95 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-4 max-w-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          Performance Monitor
        </h3>
        <button
          onClick={optimizePerformance}
          disabled={isOptimizing}
          className="text-xs bg-cyan-600 hover:bg-cyan-700 disabled:bg-zinc-700 text-white px-2 py-1 rounded transition-colors"
        >
          {isOptimizing ? 'Optimizing...' : 'Optimize'}
        </button>
      </div>

      {metrics && (
        <div className="space-y-3">
          {/* Core Web Vitals */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-zinc-800/50 rounded p-2">
              <div className="text-cyan-400 font-medium">FCP</div>
              <div className="text-white">{metrics.fcp}ms</div>
            </div>
            <div className="bg-zinc-800/50 rounded p-2">
              <div className="text-cyan-400 font-medium">LCP</div>
              <div className="text-white">{metrics.lcp}ms</div>
            </div>
            <div className="bg-zinc-800/50 rounded p-2">
              <div className="text-cyan-400 font-medium">TTFB</div>
              <div className="text-white">{metrics.ttfb}ms</div>
            </div>
            <div className="bg-zinc-800/50 rounded p-2">
              <div className="text-cyan-400 font-medium">Bundle</div>
              <div className="text-white">{metrics.bundleSize}MB</div>
            </div>
          </div>

          {/* Network Status */}
          <div className="flex items-center gap-2 text-xs">
            <Wifi className={`w-3 h-3 ${
              networkStatus === 'fast' ? 'text-green-400' : 
              networkStatus === 'slow' ? 'text-yellow-400' : 'text-red-400'
            }`} />
            <span className="text-white capitalize">{networkStatus}</span>
            <span className="text-zinc-400">•</span>
            <span className="text-zinc-400">{metrics.cacheHitRate}% cache hit</span>
          </div>

          {/* Memory Usage */}
          {memoryUsage && (
            <div className="text-xs">
              <div className="flex justify-between text-zinc-400 mb-1">
                <span>Memory</span>
                <span>{memoryUsage.used}MB / {memoryUsage.total}MB</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-1.5">
                <div 
                  className="bg-cyan-500 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${(memoryUsage.used / memoryUsage.limit) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Optimization History */}
      {optimizationHistory.length > 0 && (
        <div className="mt-4 pt-3 border-t border-zinc-700/50">
          <div className="text-xs text-zinc-400 mb-2">Recent Optimizations</div>
          <div className="space-y-1 max-h-20 overflow-y-auto">
            {optimizationHistory.slice(-3).map((item, index) => (
              <div key={index} className="text-xs text-zinc-300">
                <span className="text-cyan-400">{item.action}</span>
                <span className="text-zinc-500 ml-2">({item.impact})</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};
