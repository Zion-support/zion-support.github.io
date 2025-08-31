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
  BarChart3,
  Cpu,
  HardDrive,
  Wifi,
  Smartphone
} from 'lucide-react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  networkLatency: number;
  cpuUsage: number;
  batteryLevel?: number;
  connectionType?: string;
}

interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info' | 'success';
  message: string;
  timestamp: Date;
  severity: 'low' | 'medium' | 'high';
}

export const EnhancedPerformanceMonitor: React.FC<{
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}> = ({ 
  enabled = true, 
  showMetrics = true, 
  autoOptimize = true 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    loadTime: 0,
    networkLatency: 0,
    cpuUsage: 0
  });
  
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<string[]>([]);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled) return;

    // FPS calculation
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };

    // Memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024)
      }));
    }

    // Network information
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      setMetrics(prev => ({
        ...prev,
        connectionType: connection.effectiveType || 'unknown',
        networkLatency: connection.rtt || 0
      }));
    }

    // Battery level
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        setMetrics(prev => ({
          ...prev,
          batteryLevel: Math.round(battery.level * 100)
        }));
      });
    }

    requestAnimationFrame(measureFPS);
  }, [enabled]);

  // Performance alerts
  const checkPerformanceAlerts = useCallback(() => {
    const newAlerts: PerformanceAlert[] = [];

    if (metrics.fps < 30) {
      newAlerts.push({
        id: `fps-${Date.now()}`,
        type: 'warning',
        message: `Low FPS detected: ${metrics.fps} FPS`,
        timestamp: new Date(),
        severity: 'medium'
      });
    }

    if (metrics.memoryUsage > 100) {
      newAlerts.push({
        id: `memory-${Date.now()}`,
        type: 'error',
        message: `High memory usage: ${metrics.memoryUsage} MB`,
        timestamp: new Date(),
        severity: 'high'
      });
    }

    if (metrics.networkLatency > 100) {
      newAlerts.push({
        id: `network-${Date.now()}`,
        type: 'warning',
        message: `High network latency: ${metrics.networkLatency}ms`,
        timestamp: new Date(),
        severity: 'medium'
      });
    }

    if (newAlerts.length > 0) {
      setAlerts(prev => [...prev, ...newAlerts]);
    }
  }, [metrics]);

  // Auto-optimization
  const performOptimization = useCallback(() => {
    if (!autoOptimize) return;

    const optimizations: string[] = [];

    // Memory optimization
    if (metrics.memoryUsage > 80) {
      if ('gc' in window) {
        (window as any).gc();
        optimizations.push('Garbage collection triggered');
      }
    }

    // Image optimization
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.loading !== 'lazy') {
        img.loading = 'lazy';
        optimizations.push('Lazy loading enabled for images');
      }
    });

    // Preload critical resources
    const criticalResources = [
      '/css/critical.css',
      '/js/critical.js'
    ];

    criticalResources.forEach(resource => {
      if (!document.querySelector(`link[href="${resource}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
        optimizations.push(`Preloaded critical resource: ${resource}`);
      }
    });

    if (optimizations.length > 0) {
      setOptimizationHistory(prev => [...prev, ...optimizations]);
    }
  }, [autoOptimize, metrics.memoryUsage]);

  // Effects
  useEffect(() => {
    if (!enabled) return;

    measurePerformance();
    const interval = setInterval(() => {
      checkPerformanceAlerts();
      performOptimization();
    }, 5000);

    return () => clearInterval(interval);
  }, [enabled, measurePerformance, checkPerformanceAlerts, performOptimization]);

  // Show monitor after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    let score = 100;
    
    if (metrics.fps < 30) score -= 20;
    if (metrics.fps < 15) score -= 30;
    
    if (metrics.memoryUsage > 100) score -= 15;
    if (metrics.memoryUsage > 200) score -= 25;
    
    if (metrics.networkLatency > 100) score -= 10;
    if (metrics.networkLatency > 200) score -= 20;
    
    return Math.max(0, score);
  }, [metrics]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 60) return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    return <AlertTriangle className="w-5 h-5 text-red-400" />;
  };

  if (!enabled || !isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-slate-900/95 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 shadow-2xl w-80"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-semibold">Performance Monitor</h3>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Performance Score */}
            <div className="mb-4 p-4 bg-slate-800/50 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300 text-sm">Performance Score</span>
                {getScoreIcon(performanceScore)}
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-2xl font-bold ${getScoreColor(performanceScore)}`}>
                  {performanceScore}
                </span>
                <span className="text-slate-400 text-sm">/ 100</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
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
            {showMetrics && (
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-slate-300 text-xs">FPS</span>
                  </div>
                  <span className="text-white font-semibold">{metrics.fps}</span>
                </div>
                
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <HardDrive className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-300 text-xs">Memory</span>
                  </div>
                  <span className="text-white font-semibold">{metrics.memoryUsage} MB</span>
                </div>
                
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Wifi className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300 text-xs">Latency</span>
                  </div>
                  <span className="text-white font-semibold">{metrics.networkLatency}ms</span>
                </div>
                
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Cpu className="w-4 h-4 text-purple-400" />
                    <span className="text-slate-300 text-xs">CPU</span>
                  </div>
                  <span className="text-white font-semibold">{metrics.cpuUsage}%</span>
                </div>
              </div>
            )}

            {/* Alerts */}
            {alerts.length > 0 && (
              <div className="mb-4">
                <h4 className="text-slate-300 text-sm font-medium mb-2">Recent Alerts</h4>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {alerts.slice(-3).map(alert => (
                    <div
                      key={alert.id}
                      className={`p-2 rounded-lg text-xs ${
                        alert.type === 'error' ? 'bg-red-500/20 text-red-300' :
                        alert.type === 'warning' ? 'bg-yellow-500/20 text-yellow-300' :
                        alert.type === 'info' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-green-500/20 text-green-300'
                      }`}
                    >
                      {alert.message}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Optimization History */}
            {optimizationHistory.length > 0 && (
              <div>
                <h4 className="text-slate-300 text-sm font-medium mb-2">Recent Optimizations</h4>
                <div className="space-y-1 max-h-24 overflow-y-auto">
                  {optimizationHistory.slice(-3).map((optimization, index) => (
                    <div key={index} className="text-xs text-green-400 bg-green-500/10 p-2 rounded">
                      {optimization}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsExpanded(true)}
            className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
              performanceScore >= 80 ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
              performanceScore >= 60 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
              'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}
            title="Performance Monitor"
          >
            <BarChart3 className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};