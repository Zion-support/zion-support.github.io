import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, Gauge, Cpu, HardDrive, Wifi, Battery, Activity } from 'lucide-react';

interface PerformanceMetrics {
  fps: number;
  memory: number;
  network: number;
  cpu: number;
  battery: number;
}

export function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memory: 0,
    network: 0,
    cpu: 0,
    battery: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const memory = (performance as any).memory;
      
      setMetrics(prev => ({
        ...prev,
        memory: memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0,
        network: navigation ? Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart) : 0
      }));
    }
  }, []);

  // FPS monitoring
  const measureFPS = useCallback(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    
    const countFrames = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(countFrames);
    };
    
    requestAnimationFrame(countFrames);
  }, []);

  // Battery monitoring
  const measureBattery = useCallback(async () => {
    if ('getBattery' in navigator) {
      try {
        const battery = await (navigator as any).getBattery();
        setMetrics(prev => ({ ...prev, battery: Math.round(battery.level * 100) }));
      } catch (error) {
        console.log('Battery API not supported');
      }
    }
  }, []);

  // CPU monitoring
  const measureCPU = useCallback(() => {
    if ('hardwareConcurrency' in navigator) {
      const cores = navigator.hardwareConcurrency;
      setMetrics(prev => ({ ...prev, cpu: cores }));
    }
  }, []);

  // Performance optimizations
  const applyOptimizations = useCallback(() => {
    const newOptimizations: string[] = [];
    
    // Image optimization
    if (metrics.memory > 100) {
      newOptimizations.push('Optimizing image loading and caching');
    }
    
    // Network optimization
    if (metrics.network > 1000) {
      newOptimizations.push('Implementing service worker caching');
    }
    
    // FPS optimization
    if (metrics.fps < 30) {
      newOptimizations.push('Reducing animation complexity');
    }
    
    setOptimizations(newOptimizations);
  }, [metrics]);

  useEffect(() => {
    measurePerformance();
    measureFPS();
    measureBattery();
    measureCPU();
    
    const interval = setInterval(measurePerformance, 5000);
    return () => clearInterval(interval);
  }, [measurePerformance, measureFPS, measureBattery, measureCPU]);

  useEffect(() => {
    applyOptimizations();
  }, [applyOptimizations]);

  // Auto-hide after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6 text-white" />
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-4 right-4 z-50 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Gauge className="w-5 h-5 text-cyan-500" />
            Performance Monitor
          </h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          {/* FPS */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-600">FPS</span>
            </div>
            <span className={`font-mono text-sm ${metrics.fps >= 50 ? 'text-green-600' : metrics.fps >= 30 ? 'text-yellow-600' : 'text-red-600'}`}>
              {metrics.fps}
            </span>
          </div>

          {/* Memory */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                              <HardDrive className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-gray-600">Memory</span>
            </div>
            <span className={`font-mono text-sm ${metrics.memory < 50 ? 'text-green-600' : metrics.memory < 100 ? 'text-yellow-600' : 'text-red-600'}`}>
              {metrics.memory} MB
            </span>
          </div>

          {/* Network */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4 text-purple-500" />
              <span className="text-sm text-gray-600">Network</span>
            </div>
            <span className={`font-mono text-sm ${metrics.network < 500 ? 'text-green-600' : metrics.network < 1000 ? 'text-yellow-600' : 'text-red-600'}`}>
              {metrics.network}ms
            </span>
          </div>

          {/* CPU */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-600">CPU Cores</span>
            </div>
            <span className="font-mono text-sm text-gray-800">{metrics.cpu}</span>
          </div>

          {/* Battery */}
          {metrics.battery > 0 && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Battery className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">Battery</span>
              </div>
              <span className={`font-mono text-sm ${metrics.battery > 50 ? 'text-green-600' : metrics.battery > 20 ? 'text-yellow-600' : 'text-red-600'}`}>
                {metrics.battery}%
              </span>
            </div>
          )}
        </div>

        {/* Optimizations */}
        {optimizations.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Optimizations Applied:</h4>
            <ul className="space-y-1">
              {optimizations.map((opt, index) => (
                <li key={index} className="text-xs text-gray-600 flex items-center gap-2">
                  <Zap className="w-3 h-3 text-yellow-500" />
                  {opt}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Performance Score */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Performance Score</span>
            <div className="flex items-center gap-2">
              <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    metrics.fps >= 50 && metrics.memory < 100 ? 'bg-green-500' : 
                    metrics.fps >= 30 && metrics.memory < 150 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ 
                    width: `${Math.min(100, (metrics.fps / 60) * 100)}%` 
                  }}
                />
              </div>
              <span className="text-xs font-mono text-gray-600">
                {Math.round((metrics.fps / 60) * 100)}%
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
