import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  HardDrive, 
  Network, 
  Cpu, 
  Battery,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Settings,
  X,
  RefreshCw
} from 'lucide-react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  networkLatency: number;
  cpuUsage: number;
  batteryLevel?: number;
  isOnline: boolean;
  lastUpdated: Date;
}

interface PerformanceThresholds {
  fps: { warning: number; critical: number };
  memory: { warning: number; critical: number };
  loadTime: { warning: number; critical: number };
  network: { warning: number; critical: number };
}

const DEFAULT_THRESHOLDS: PerformanceThresholds = {
  fps: { warning: 45, critical: 30 },
  memory: { warning: 70, critical: 90 },
  loadTime: { warning: 3000, critical: 5000 },
  network: { warning: 200, critical: 500 }
};

export const AdvancedPerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    loadTime: 0,
    networkLatency: 0,
    cpuUsage: 0,
    isOnline: navigator.onLine,
    lastUpdated: new Date()
  });
  const [thresholds, setThresholds] = useState<PerformanceThresholds>(DEFAULT_THRESHOLDS);
  const [optimizationSuggestions, setOptimizationSuggestions] = useState<string[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(true);
  
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const rafIdRef = useRef<number>();
  const memoryIntervalRef = useRef<NodeJS.Timeout>();
  const networkIntervalRef = useRef<NodeJS.Timeout>();

  // FPS calculation
  const measureFPS = useCallback(() => {
    frameCountRef.current++;
    const currentTime = performance.now();
    
    if (currentTime - lastTimeRef.current >= 1000) {
      const fps = Math.round((frameCountRef.current * 1000) / (currentTime - lastTimeRef.current));
      setMetrics(prev => ({ ...prev, fps, lastUpdated: new Date() }));
      frameCountRef.current = 0;
      lastTimeRef.current = currentTime;
    }
    
    rafIdRef.current = requestAnimationFrame(measureFPS);
  }, []);

  // Memory usage monitoring
  const measureMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100);
      setMetrics(prev => ({ ...prev, memoryUsage }));
    }
  }, []);

  // Network latency monitoring
  const measureNetworkLatency = useCallback(async () => {
    try {
      const startTime = performance.now();
      const response = await fetch('/api/health', { 
        method: 'HEAD',
        cache: 'no-cache'
      });
      const endTime = performance.now();
      const latency = endTime - startTime;
      setMetrics(prev => ({ ...prev, networkLatency: latency }));
    } catch (error) {
      // Fallback to a simple ping test
      const startTime = performance.now();
      await new Promise(resolve => setTimeout(resolve, 1));
      const endTime = performance.now();
      setMetrics(prev => ({ ...prev, networkLatency: endTime - startTime }));
    }
  }, []);

  // Battery level monitoring
  const measureBattery = useCallback(async () => {
    if ('getBattery' in navigator) {
      try {
        const battery = await (navigator as any).getBattery();
        const batteryLevel = Math.round(battery.level * 100);
        setMetrics(prev => ({ ...prev, batteryLevel }));
      } catch (error) {
        // Battery API not available
      }
    }
  }, []);

  // Generate optimization suggestions
  const generateOptimizationSuggestions = useCallback((currentMetrics: PerformanceMetrics) => {
    const suggestions: string[] = [];
    
    if (currentMetrics.fps < thresholds.fps.warning) {
      suggestions.push('Consider reducing animations or complex DOM operations');
    }
    
    if (currentMetrics.memoryUsage > thresholds.memory.warning) {
      suggestions.push('Memory usage is high - check for memory leaks');
    }
    
    if (currentMetrics.loadTime > thresholds.loadTime.warning) {
      suggestions.push('Page load time is slow - optimize assets and code splitting');
    }
    
    if (currentMetrics.networkLatency > thresholds.network.warning) {
      suggestions.push('Network latency is high - check connection quality');
    }
    
    if (!currentMetrics.isOnline) {
      suggestions.push('You are currently offline - some features may not work');
    }
    
    return suggestions;
  }, [thresholds]);

  // Start monitoring
  useEffect(() => {
    if (!isMonitoring) return;

    // Start FPS monitoring
    rafIdRef.current = requestAnimationFrame(measureFPS);
    
    // Start memory monitoring
    memoryIntervalRef.current = setInterval(measureMemory, 2000);
    
    // Start network monitoring
    networkIntervalRef.current = setInterval(measureNetworkLatency, 5000);
    
    // Measure battery level
    measureBattery();
    
    // Online/offline status
    const handleOnline = () => setMetrics(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setMetrics(prev => ({ ...prev, isOnline: false }));
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Page load time
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime }));
    }

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (memoryIntervalRef.current) {
        clearInterval(memoryIntervalRef.current);
      }
      if (networkIntervalRef.current) {
        clearInterval(networkIntervalRef.current);
      }
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [isMonitoring, measureFPS, measureMemory, measureNetworkLatency, measureBattery]);

  // Update optimization suggestions when metrics change
  useEffect(() => {
    const suggestions = generateOptimizationSuggestions(metrics);
    setOptimizationSuggestions(suggestions);
  }, [metrics, generateOptimizationSuggestions]);

  // Get status color based on thresholds
  const getStatusColor = (value: number, threshold: { warning: number; critical: number }, isLowerBetter = false) => {
    if (isLowerBetter) {
      if (value <= threshold.critical) return 'text-red-400';
      if (value <= threshold.warning) return 'text-yellow-400';
      return 'text-green-400';
    } else {
      if (value >= threshold.critical) return 'text-red-400';
      if (value >= threshold.warning) return 'text-yellow-400';
      return 'text-green-400';
    }
  };

  // Get status icon
  const getStatusIcon = (value: number, threshold: { warning: number; critical: number }, isLowerBetter = false) => {
    if (isLowerBetter) {
      if (value <= threshold.critical) return <AlertTriangle className="w-4 h-4" />;
      if (value <= threshold.warning) return <AlertTriangle className="w-4 h-4" />;
      return <CheckCircle className="w-4 h-4" />;
    } else {
      if (value >= threshold.critical) return <AlertTriangle className="w-4 h-4" />;
      if (value >= threshold.warning) return <AlertTriangle className="w-4 h-4" />;
      return <CheckCircle className="w-4 h-4" />;
    }
  };

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const toggleMonitoring = () => setIsMonitoring(!isMonitoring);

  if (!isVisible) {
    return (
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 right-4 z-50 p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        title="Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-4 right-4 z-50 w-80 bg-slate-800/95 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <h3 className="text-white font-semibold">Performance Monitor</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleMonitoring}
              className={`p-1 rounded ${isMonitoring ? 'text-green-400' : 'text-red-400'}`}
              title={isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
            >
              <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-red-400'}`} />
            </button>
            <button
              onClick={toggleExpanded}
              className="p-1 text-gray-400 hover:text-white transition-colors"
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={toggleVisibility}
              className="p-1 text-gray-400 hover:text-white transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Metrics Display */}
        <div className="p-4 space-y-4">
          {/* FPS */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-300 text-sm">FPS</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`font-mono text-sm ${getStatusColor(metrics.fps, thresholds.fps, true)}`}>
                {metrics.fps}
              </span>
              {getStatusIcon(metrics.fps, thresholds.fps, true)}
            </div>
          </div>

          {/* Memory Usage */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <HardDrive className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300 text-sm">Memory</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`font-mono text-sm ${getStatusColor(metrics.memoryUsage, thresholds.memory)}`}>
                {metrics.memoryUsage}%
              </span>
              {getStatusIcon(metrics.memoryUsage, thresholds.memory)}
            </div>
          </div>

          {/* Load Time */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-green-400" />
              <span className="text-gray-300 text-sm">Load Time</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`font-mono text-sm ${getStatusColor(metrics.loadTime, thresholds.loadTime, true)}`}>
                {Math.round(metrics.loadTime)}ms
              </span>
              {getStatusIcon(metrics.loadTime, thresholds.loadTime, true)}
            </div>
          </div>

          {/* Network Latency */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Network className="w-4 h-4 text-purple-400" />
              <span className="text-gray-300 text-sm">Network</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`font-mono text-sm ${getStatusColor(metrics.networkLatency, thresholds.network, true)}`}>
                {Math.round(metrics.networkLatency)}ms
              </span>
              {getStatusIcon(metrics.networkLatency, thresholds.network, true)}
            </div>
          </div>

          {/* Online Status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${metrics.isOnline ? 'bg-green-400' : 'bg-red-400'}`} />
              <span className="text-gray-300 text-sm">Status</span>
            </div>
            <span className={`text-sm ${metrics.isOnline ? 'text-green-400' : 'text-red-400'}`}>
              {metrics.isOnline ? 'Online' : 'Offline'}
            </span>
          </div>

          {/* Battery Level */}
          {metrics.batteryLevel !== undefined && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Battery className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300 text-sm">Battery</span>
              </div>
              <span className={`text-sm ${metrics.batteryLevel < 20 ? 'text-red-400' : 'text-green-400'}`}>
                {metrics.batteryLevel}%
              </span>
            </div>
          )}

          {/* Last Updated */}
          <div className="text-xs text-gray-500 text-center pt-2 border-t border-slate-700/50">
            Last updated: {metrics.lastUpdated.toLocaleTimeString()}
          </div>
        </div>

        {/* Optimization Suggestions */}
        {isExpanded && optimizationSuggestions.length > 0 && (
          <div className="p-4 border-t border-slate-700/50">
            <h4 className="text-white font-medium mb-3 flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span>Optimization Suggestions</span>
            </h4>
            <ul className="space-y-2">
              {optimizationSuggestions.map((suggestion, index) => (
                <li key={index} className="text-sm text-gray-300 flex items-start space-x-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Threshold Settings */}
        {isExpanded && (
          <div className="p-4 border-t border-slate-700/50">
            <h4 className="text-white font-medium mb-3">Threshold Settings</h4>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-400">FPS Warning</label>
                <input
                  type="number"
                  value={thresholds.fps.warning}
                  onChange={(e) => setThresholds(prev => ({
                    ...prev,
                    fps: { ...prev.fps, warning: parseInt(e.target.value) || 45 }
                  }))}
                  className="w-full mt-1 px-2 py-1 bg-slate-700 text-white text-xs rounded border border-slate-600"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400">Memory Warning (%)</label>
                <input
                  type="number"
                  value={thresholds.memory.warning}
                  onChange={(e) => setThresholds(prev => ({
                    ...prev,
                    memory: { ...prev.memory, warning: parseInt(e.target.value) || 70 }
                  }))}
                  className="w-full mt-1 px-2 py-1 bg-slate-700 text-white text-xs rounded border border-slate-600"
                />
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};