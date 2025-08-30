import React, { useState, useEffect, useCallback } from 'react';
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
  Monitor,
  Smartphone,
  Tablet,
  Globe,
  Database,
  Server,
  Network,
  Shield,
  Lock,
  Eye,
  EyeOff,
  RefreshCw,
  Info,
  Target,
  Gauge,
  Timer,
  Speed,
  Memory,
  HardDriveIcon
} from 'lucide-react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  renderTime: number;
  networkLatency: number;
  bundleSize: number;
  lighthouseScore: number;
  coreWebVitals: {
    lcp: number;
    fid: number;
    cls: number;
  };
}

interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  timestamp: Date;
  severity: 'low' | 'medium' | 'high';
}

export function AdvancedPerformanceMonitor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0,
    networkLatency: 0,
    bundleSize: 0,
    lighthouseScore: 0,
    coreWebVitals: { lcp: 0, fid: 0, cls: 0 }
  });
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [autoOptimize, setAutoOptimize] = useState(false);

  // Performance monitoring functions
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

  const measureMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const usage = Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100);
      setMetrics(prev => ({ ...prev, memoryUsage: usage }));
    }
  }, []);

  const measureLoadTime = useCallback(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      setMetrics(prev => ({ ...prev, loadTime }));
    }
  }, []);

  const measureCoreWebVitals = useCallback(() => {
    // LCP measurement
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        setMetrics(prev => ({
          ...prev,
          coreWebVitals: { ...prev.coreWebVitals, lcp: lastEntry.startTime }
        }));
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // FID measurement
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        setMetrics(prev => ({
          ...prev,
          coreWebVitals: { ...prev.coreWebVitals, fid: entry.processingStart - entry.startTime }
        }));
      });
    }).observe({ entryTypes: ['first-input'] });

    // CLS measurement
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      setMetrics(prev => ({
        ...prev,
        coreWebVitals: { ...prev.coreWebVitals, cls: clsValue }
      }));
    }).observe({ entryTypes: ['layout-shift'] });
  }, []);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    measureFPS();
    measureCoreWebVitals();
    
    const interval = setInterval(() => {
      measureMemory();
      measureLoadTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [measureFPS, measureMemory, measureLoadTime, measureCoreWebVitals]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  const generateOptimizationRecommendations = useCallback(() => {
    const recommendations: PerformanceAlert[] = [];
    
    if (metrics.fps < 30) {
      recommendations.push({
        id: 'low-fps',
        type: 'warning',
        message: 'Low FPS detected. Consider optimizing animations and reducing DOM complexity.',
        timestamp: new Date(),
        severity: 'medium'
      });
    }
    
    if (metrics.memoryUsage > 80) {
      recommendations.push({
        id: 'high-memory',
        type: 'error',
        message: 'High memory usage detected. Check for memory leaks and optimize resource usage.',
        timestamp: new Date(),
        severity: 'high'
      });
    }
    
    if (metrics.coreWebVitals.lcp > 2500) {
      recommendations.push({
        id: 'slow-lcp',
        type: 'warning',
        message: 'Slow Largest Contentful Paint. Optimize image loading and critical resources.',
        timestamp: new Date(),
        severity: 'medium'
      });
    }
    
    setAlerts(prev => [...prev, ...recommendations]);
  }, [metrics]);

  const autoOptimizePerformance = useCallback(() => {
    if (!autoOptimize) return;
    
    // Auto-optimization logic
    if (metrics.fps < 30) {
      // Reduce animation complexity
      document.documentElement.style.setProperty('--animation-duration', '0.2s');
    }
    
    if (metrics.memoryUsage > 80) {
      // Trigger garbage collection if available
      if ('gc' in window) {
        (window as any).gc();
      }
    }
  }, [autoOptimize, metrics]);

  useEffect(() => {
    if (isMonitoring) {
      const cleanup = startMonitoring();
      return cleanup;
    }
  }, [isMonitoring, startMonitoring]);

  useEffect(() => {
    generateOptimizationRecommendations();
  }, [metrics, generateOptimizationRecommendations]);

  useEffect(() => {
    autoOptimizePerformance();
  }, [autoOptimizePerformance]);

  const getPerformanceScore = () => {
    let score = 100;
    
    if (metrics.fps < 30) score -= 20;
    if (metrics.fps < 45) score -= 10;
    if (metrics.memoryUsage > 80) score -= 15;
    if (metrics.memoryUsage > 60) score -= 5;
    if (metrics.coreWebVitals.lcp > 2500) score -= 15;
    if (metrics.coreWebVitals.lcp > 1500) score -= 5;
    
    return Math.max(0, score);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5" />;
    if (score >= 70) return <AlertTriangle className="w-5 h-5" />;
    return <X className="w-5 h-5" />;
  };

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-zion-blue-dark border border-zion-purple/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Activity className="w-6 h-6 text-zion-cyan group-hover:text-zion-purple transition-colors" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-zion-cyan rounded-full animate-pulse"></div>
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-4 right-4 z-50 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-2xl shadow-2xl shadow-zion-purple/20 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-zion-blue-dark to-zion-purple/20 border-b border-zion-purple/30">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-zion-cyan" />
            <h3 className="text-white font-semibold">Performance Monitor</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 text-zion-slate-light hover:text-zion-cyan transition-colors"
            >
              {isMinimized ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 text-zion-slate-light hover:text-zion-cyan transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="p-4 space-y-4"
          >
            {/* Performance Score */}
            <div className="text-center p-4 bg-zion-blue/20 rounded-xl border border-zion-purple/20">
              <div className="flex items-center justify-center space-x-2 mb-2">
                {getScoreIcon(getPerformanceScore())}
                <span className="text-2xl font-bold text-white">
                  {getPerformanceScore()}
                </span>
                <span className="text-zion-slate-light">/100</span>
              </div>
              <p className={`text-sm font-medium ${getScoreColor(getPerformanceScore())}`}>
                {getPerformanceScore() >= 90 ? 'Excellent' : 
                 getPerformanceScore() >= 70 ? 'Good' : 'Needs Improvement'}
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-zion-blue/10 rounded-lg border border-zion-purple/20">
                <div className="flex items-center space-x-2 mb-1">
                  <Zap className="w-4 h-4 text-zion-cyan" />
                  <span className="text-xs text-zion-slate-light">FPS</span>
                </div>
                <div className="text-lg font-bold text-white">{metrics.fps}</div>
              </div>
              
              <div className="p-3 bg-zion-blue/10 rounded-lg border border-zion-purple/20">
                <div className="flex items-center space-x-2 mb-1">
                  <Memory className="w-4 h-4 text-zion-cyan" />
                  <span className="text-xs text-zion-slate-light">Memory</span>
                </div>
                <div className="text-lg font-bold text-white">{metrics.memoryUsage}%</div>
              </div>
              
              <div className="p-3 bg-zion-blue/10 rounded-lg border border-zion-purple/20">
                <div className="flex items-center space-x-2 mb-1">
                  <Timer className="w-4 h-4 text-zion-cyan" />
                  <span className="text-xs text-zion-slate-light">Load Time</span>
                </div>
                <div className="text-lg font-bold text-white">{Math.round(metrics.loadTime)}ms</div>
              </div>
              
              <div className="p-3 bg-zion-blue/10 rounded-lg border border-zion-purple/20">
                <div className="flex items-center space-x-2 mb-1">
                  <Gauge className="w-4 h-4 text-zion-cyan" />
                  <span className="text-xs text-zion-slate-light">LCP</span>
                </div>
                <div className="text-lg font-bold text-white">{Math.round(metrics.coreWebVitals.lcp)}ms</div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsMonitoring(!isMonitoring)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isMonitoring
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark'
                }`}
              >
                {isMonitoring ? 'Stop' : 'Start'} Monitoring
              </button>
              
              <button
                onClick={() => setAutoOptimize(!autoOptimize)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  autoOptimize
                    ? 'bg-zion-purple hover:bg-zion-purple-dark text-white'
                    : 'bg-zion-slate-700 hover:bg-zion-slate-600 text-zion-slate-light'
                }`}
              >
                Auto-Optimize
              </button>
            </div>

            {/* Alerts */}
            {alerts.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-zion-slate-light">Recent Alerts</h4>
                {alerts.slice(-3).map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-3 rounded-lg text-sm border-l-4 ${
                      alert.type === 'error' ? 'bg-red-500/10 border-red-500 text-red-300' :
                      alert.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500 text-yellow-300' :
                      'bg-blue-500/10 border-blue-500 text-blue-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <p>{alert.message}</p>
                      <button
                        onClick={() => setAlerts(prev => prev.filter(a => a.id !== alert.id))}
                        className="ml-2 text-zion-slate-light hover:text-white"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-xs mt-1 opacity-70">
                      {alert.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
