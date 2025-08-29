import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, Clock, Database, Cpu, HardDrive, Network, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  bundleSize: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  lighthouseScore: number;
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  showMetrics = false,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    bundleSize: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    lighthouseScore: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      // Estimate bundle size from performance entries
      const resources = performance.getEntriesByType('resource');
      const totalSize = resources.reduce((acc, resource) => {
        const transferSize = (resource as PerformanceResourceTiming).transferSize || 0;
        return acc + transferSize;
      }, 0);

      setMetrics(prev => ({
        ...prev,
        loadTime,
        bundleSize: totalSize / 1024 / 1024, // Convert to MB
        memoryUsage: (performance as any).memory?.usedJSHeapSize / 1024 / 1024 || 0,
        networkLatency: navigation.responseEnd - navigation.requestStart
      }));
    }
  }, []);

  // Auto-optimization logic
  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    try {
      // Lazy load optimization
      if (typeof window !== 'undefined') {
        const images = document.querySelectorAll('img[data-src]');
        if (images.length > 0) {
          const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement;
                img.src = img.dataset.src || '';
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
              }
            });
          });
          
          images.forEach(img => imageObserver.observe(img));
          newOptimizations.push('Lazy loading for images enabled');
        }
      }

      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/css/critical.css'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'style';
        document.head.appendChild(link);
      });
      newOptimizations.push('Critical resources preloaded');

      // Service worker registration for caching
      if ('serviceWorker' in navigator) {
        try {
          await navigator.serviceWorker.register('/sw.js');
          newOptimizations.push('Service worker registered for offline caching');
        } catch (error) {
          console.log('Service worker registration failed:', error);
        }
      }

      // Memory optimization
      if (typeof window !== 'undefined' && 'memory' in performance) {
        const memory = (performance as any).memory;
        if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
          // Trigger garbage collection if memory usage is high
          if ('gc' in window) {
            (window as any).gc();
            newOptimizations.push('Garbage collection triggered');
          }
        }
      }

    } catch (error) {
      console.error('Optimization failed:', error);
    }

    setOptimizations(prev => [...prev, ...newOptimizations]);
    setIsOptimizing(false);
  }, []);

  // Performance monitoring effect
  useEffect(() => {
    if (typeof window !== 'undefined') {
      measurePerformance();
      
      // Monitor performance over time
      const interval = setInterval(measurePerformance, 30000); // Every 30 seconds
      
      // Monitor memory usage
      const memoryInterval = setInterval(() => {
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          setMetrics(prev => ({
            ...prev,
            memoryUsage: memory.usedJSHeapSize / 1024 / 1024,
            cpuUsage: prev.cpuUsage + Math.random() * 0.1 // Simulate CPU monitoring
          }));
        }
      }, 5000);

      return () => {
        clearInterval(interval);
        clearInterval(memoryInterval);
      };
    }
  }, [measurePerformance]);

  // Auto-optimize on mount
  useEffect(() => {
    if (autoOptimize) {
      const timer = setTimeout(runOptimizations, 2000);
      return () => clearTimeout(timer);
    }
  }, [autoOptimize, runOptimizations]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    const { loadTime, bundleSize, memoryUsage, networkLatency } = metrics;
    
    let score = 100;
    
    if (loadTime > 3000) score -= 20;
    if (loadTime > 5000) score -= 20;
    
    if (bundleSize > 2) score -= 15;
    if (bundleSize > 5) score -= 15;
    
    if (memoryUsage > 50) score -= 10;
    if (memoryUsage > 100) score -= 10;
    
    if (networkLatency > 1000) score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  // Performance recommendations
  const recommendations = useMemo(() => {
    const recs: string[] = [];
    
    if (metrics.loadTime > 3000) {
      recs.push('Consider implementing code splitting for faster initial load');
    }
    
    if (metrics.bundleSize > 2) {
      recs.push('Bundle size could be optimized with tree shaking and compression');
    }
    
    if (metrics.memoryUsage > 50) {
      recs.push('Memory usage is high, consider optimizing component lifecycle');
    }
    
    if (metrics.networkLatency > 1000) {
      recs.push('Network latency is high, consider CDN implementation');
    }
    
    return recs;
  }, [metrics]);

  if (!showMetrics) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg p-4 max-w-sm shadow-2xl z-50"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              Performance Monitor
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>

          {/* Performance Score */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-300">Performance Score</span>
              <span className={`text-sm font-bold ${
                performanceScore >= 80 ? 'text-green-400' :
                performanceScore >= 60 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {performanceScore}/100
              </span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  performanceScore >= 80 ? 'bg-green-400' :
                  performanceScore >= 60 ? 'bg-yellow-400' : 'bg-red-400'
                }`}
                style={{ width: `${performanceScore}%` }}
              />
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="text-center">
              <Clock className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
              <div className="text-xs text-slate-300">Load Time</div>
              <div className="text-sm font-semibold text-white">
                {metrics.loadTime.toFixed(0)}ms
              </div>
            </div>
            
            <div className="text-center">
              <Database className="w-4 h-4 text-purple-400 mx-auto mb-1" />
              <div className="text-xs text-slate-300">Bundle Size</div>
              <div className="text-sm font-semibold text-white">
                {metrics.bundleSize.toFixed(1)}MB
              </div>
            </div>
            
            <div className="text-center">
              <HardDrive className="w-4 h-4 text-green-400 mx-auto mb-1" />
              <div className="text-xs text-slate-300">Memory</div>
              <div className="text-lg font-semibold text-white">
                {metrics.memoryUsage.toFixed(1)}MB
              </div>
            </div>
            
            <div className="text-center">
              <Network className="w-4 h-4 text-orange-400 mx-auto mb-1" />
              <div className="text-xs text-slate-300">Latency</div>
              <div className="text-sm font-semibold text-white">
                {metrics.networkLatency.toFixed(0)}ms
              </div>
            </div>
          </div>

          {/* Optimizations */}
          {optimizations.length > 0 && (
            <div className="mb-4">
              <div className="text-xs text-slate-300 mb-2">Recent Optimizations:</div>
              <div className="space-y-1">
                {optimizations.slice(-3).map((opt, index) => (
                  <div key={index} className="text-xs text-green-400 flex items-center gap-2">
                    <TrendingUp className="w-3 h-3" />
                    {opt}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="mb-4">
              <div className="text-xs text-slate-300 mb-2">Recommendations:</div>
              <div className="space-y-1">
                {recommendations.map((rec, index) => (
                  <div key={index} className="text-xs text-yellow-400 flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3" />
                    {rec}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={runOptimizations}
              disabled={isOptimizing}
              className="flex-1 bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-600 text-white text-xs px-3 py-2 rounded transition-colors"
            >
              {isOptimizing ? 'Optimizing...' : 'Run Optimizations'}
            </button>
            
            <button
              onClick={measurePerformance}
              className="bg-slate-700 hover:bg-slate-600 text-white text-xs px-3 py-2 rounded transition-colors"
            >
              Refresh
            </button>
          </div>
        </motion.div>
      )}

      {/* Toggle Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg z-40 transition-colors"
        title="Performance Monitor"
      >
        <Zap className="w-5 h-5" />
      </motion.button>
    </AnimatePresence>
  );
};
