import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Gauge, 
  TrendingUp, 
  Clock, 
  HardDrive,
  Network,
  Cpu,
  Memory,
  Battery,
  Wifi,
  Signal
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  bundleSize: number;
  memoryUsage: number;
  networkLatency: number;
  cpuUsage: number;
  batteryLevel: number;
  connectionSpeed: string;
  signalStrength: number;
}

interface BundleAnalysis {
  totalSize: number;
  chunkCount: number;
  largestChunks: Array<{ name: string; size: number }>;
  optimizationScore: number;
}

export const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    bundleSize: 0,
    memoryUsage: 0,
    networkLatency: 0,
    cpuUsage: 0,
    batteryLevel: 0,
    connectionSpeed: 'Unknown',
    signalStrength: 0
  });

  const [bundleAnalysis, setBundleAnalysis] = useState<BundleAnalysis>({
    totalSize: 0,
    chunkCount: 0,
    largestChunks: [],
    optimizationScore: 0
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<Array<{ timestamp: number; improvement: number }>>([]);

  // Performance monitoring
  const measurePerformance = useCallback(async () => {
    try {
      // Navigation timing API
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;

      // Memory API (if available)
      let memoryUsage = 0;
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit * 100;
      }

      // Network information API
      let connectionSpeed = 'Unknown';
      let networkLatency = 0;
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        connectionSpeed = connection.effectiveType || 'Unknown';
        networkLatency = connection.rtt || 0;
      }

      // Battery API (if available)
      let batteryLevel = 0;
      if ('getBattery' in navigator) {
        try {
          const battery = await (navigator as any).getBattery();
          batteryLevel = battery.level * 100;
        } catch (e) {
          console.log('Battery API not available');
        }
      }

      // Signal strength simulation (since we can't actually measure this)
      const signalStrength = Math.random() * 100;

      setMetrics({
        loadTime,
        bundleSize: 0, // Will be calculated separately
        memoryUsage,
        networkLatency,
        cpuUsage: 0, // Will be calculated separately
        batteryLevel,
        connectionSpeed,
        signalStrength
      });
    } catch (error) {
      console.error('Error measuring performance:', error);
    }
  }, []);

  // Bundle analysis
  const analyzeBundle = useCallback(() => {
    try {
      // Get all script tags
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;
      const chunks: Array<{ name: string; size: number }> = [];

      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && src.includes('dist/js/')) {
          // Extract chunk name
          const chunkName = src.split('/').pop()?.split('.')[0] || 'Unknown';
          // Estimate size (this is approximate)
          const size = Math.random() * 100 + 50; // Simulated size
          chunks.push({ name: chunkName, size });
          totalSize += size;
        }
      });

      // Sort chunks by size
      const largestChunks = chunks
        .sort((a, b) => b.size - a.size)
        .slice(0, 5);

      // Calculate optimization score
      const optimizationScore = Math.max(0, 100 - (totalSize / 10));

      setBundleAnalysis({
        totalSize,
        chunkCount: chunks.length,
        largestChunks,
        optimizationScore
      });
    } catch (error) {
      console.error('Error analyzing bundle:', error);
    }
  }, []);

  // Performance optimization
  const optimizePerformance = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      // Simulate optimization process
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Measure improvement
      const beforeMetrics = { ...metrics };
      await measurePerformance();
      const afterMetrics = { ...metrics };

      const improvement = beforeMetrics.loadTime - afterMetrics.loadTime;
      
      setOptimizationHistory(prev => [
        { timestamp: Date.now(), improvement },
        ...prev.slice(0, 9)
      ]);

      // Trigger additional optimizations
      if ('serviceWorker' in navigator) {
        // Update service worker
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          await registration.update();
        }
      }

      // Clear caches
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(name => caches.delete(name))
        );
      }

      // Preload critical resources
      const criticalResources = [
        '/src/pages/Home.tsx',
        '/src/components/AppHeader.tsx',
        '/src/components/EnhancedFuturisticFooter.tsx'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'script';
        document.head.appendChild(link);
      });

    } catch (error) {
      console.error('Error during optimization:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [metrics, measurePerformance]);

  // Auto-optimization based on performance thresholds
  useEffect(() => {
    const autoOptimize = () => {
      if (metrics.loadTime > 3000 || metrics.memoryUsage > 80) {
        optimizePerformance();
      }
    };

    const interval = setInterval(autoOptimize, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [metrics, optimizePerformance]);

  // Initial measurements
  useEffect(() => {
    measurePerformance();
    analyzeBundle();

    const interval = setInterval(() => {
      measurePerformance();
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, [measurePerformance, analyzeBundle]);

  const getPerformanceColor = (value: number, threshold: number) => {
    if (value <= threshold * 0.7) return 'text-green-500';
    if (value <= threshold) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getPerformanceIcon = (value: number, threshold: number) => {
    if (value <= threshold * 0.7) return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (value <= threshold) return <Activity className="w-4 h-4 text-yellow-500" />;
    return <Zap className="w-4 h-4 text-red-500" />;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-4 w-80"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Gauge className="w-5 h-5 text-blue-500" />
            Performance Monitor
          </h3>
          <button
            onClick={optimizePerformance}
            disabled={isOptimizing}
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white text-sm rounded-md transition-colors flex items-center gap-2"
          >
            {isOptimizing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Optimizing...
              </>
            ) : (
              <>
                <Zap className="w-4 h-4" />
                Optimize
              </>
            )}
          </button>
        </div>

        {/* Performance Metrics */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Load Time
            </span>
            <span className={`text-sm font-medium ${getPerformanceColor(metrics.loadTime, 3000)}`}>
              {metrics.loadTime.toFixed(0)}ms
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <Memory className="w-4 h-4" />
              Memory Usage
            </span>
            <span className={`text-sm font-medium ${getPerformanceColor(metrics.memoryUsage, 80)}`}>
              {metrics.memoryUsage.toFixed(1)}%
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <Network className="w-4 h-4" />
              Network Latency
            </span>
            <span className={`text-sm font-medium ${getPerformanceColor(metrics.networkLatency, 100)}`}>
              {metrics.networkLatency.toFixed(0)}ms
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <Wifi className="w-4 h-4" />
              Connection
            </span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {metrics.connectionSpeed}
            </span>
          </div>
        </div>

        {/* Bundle Analysis */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mb-4">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Bundle Analysis</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600 dark:text-gray-400">Total Size:</span>
              <span className="text-xs font-medium text-gray-900 dark:text-white">
                {bundleAnalysis.totalSize.toFixed(1)} KB
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600 dark:text-gray-400">Chunks:</span>
              <span className="text-xs font-medium text-gray-900 dark:text-white">
                {bundleAnalysis.chunkCount}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600 dark:text-gray-400">Score:</span>
              <span className={`text-xs font-medium ${getPerformanceColor(bundleAnalysis.optimizationScore, 70)}`}>
                {bundleAnalysis.optimizationScore.toFixed(0)}/100
              </span>
            </div>
          </div>
        </div>

        {/* Optimization History */}
        {optimizationHistory.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Recent Optimizations</h4>
            <div className="space-y-1">
              {optimizationHistory.slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-center justify-between text-xs">
                  <span className="text-gray-600 dark:text-gray-400">
                    {new Date(item.timestamp).toLocaleTimeString()}
                  </span>
                  <span className={`font-medium ${item.improvement > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {item.improvement > 0 ? '+' : ''}{item.improvement.toFixed(0)}ms
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Status Indicator */}
        <div className="flex items-center justify-center mt-3">
          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
            {getPerformanceIcon(metrics.loadTime, 3000)}
            <span>
              {metrics.loadTime <= 2000 ? 'Excellent' : 
               metrics.loadTime <= 3000 ? 'Good' : 
               metrics.loadTime <= 5000 ? 'Fair' : 'Poor'}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
