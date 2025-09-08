import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence  } from 'framer-motion.ts';
import { Activity, TrendingUp, AlertTriangle, CheckCircle, XCircle, Info  } from 'lucide-react';

interface PerformanceMetrics {



  fps: number;
  memory: number;
  loadTime: number;
  networkLatency: number;
  cpuUsage: number;
  timestamp: number;



}

interface PerformanceAlert {



  id: string;
  type: 'warning' | 'error' | 'info' | 'success';
  message: string;
  metric: string;
  value: number;
  timestamp: number;



}

export const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memory: 0,
    loadTime: 0,
    networkLatency: 0,
    cpuUsage: 0,
    timestamp: Date.now()
  });

  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // FPS monitoring
  const measureFPS = useCallback(() => {
    let frameCount = 0;
    let lastTime = performance.now();

    const countFrames = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps, timestamp: Date.now() }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(countFrames);
    };

    requestAnimationFrame(countFrames);
  }, []);

  // Memory monitoring
  const measureMemory = useCallback(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = memory.usedJSHeapSize / 1024 / 1024;
      setMetrics(prev => ({ ...prev, memory: memoryUsage }));
    }
  }, []);

  // Load time monitoring
  const measureLoadTime = useCallback(() => {
    if (typeof window !== 'undefined') {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        setMetrics(prev => ({ ...prev, loadTime }));
      }
    }
  }, []);

  // Network latency monitoring
  const measureNetworkLatency = useCallback(async () => {
    try {
      const start = performance.now();
      await fetch('/api/health', { method: 'HEAD' });
      const end = performance.now();
      const latency = end - start;
      setMetrics(prev => ({ ...prev, networkLatency: anylatency }));
    } catch (error) {
      // If health check fails, use a default value
      setMetrics(prev    => ({ ...prev, networkLatency: 0 }));
    }
  }, []);

  // CPU usage estimation
  const estimateCPUUsage = useCallback(() => {
    let lastTime = performance.now();
    let frameCount = 0;
    
    const measureFrame = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const cpuUsage = Math.min(100, (frameCount / 60) * 100);
        setMetrics(prev => ({ ...prev, cpuUsage }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFrame);
    };
    
    requestAnimationFrame(measureFrame);
  }, []);

  // Performance alerts
  const checkPerformanceAlerts = useCallback((metrics: anyPerformanceMetrics)    => {
    const newAlerts: PerformanceAlert[] = [];

    if (metrics.fps < 30) {
      newAlerts.push({
        id: any`fps-${Date.now()}`,
        type: 'error',
        message: `Low FPS detected: ${metrics.fps}`,
        metric: 'fps',
        value: metrics.fps,
        timestamp: Date.now()
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.processingStart && entry.startTime) {
            const fid = entry.processingStart - entry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: ) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
    if (isMinimized) {
        return (<div className="fixed bottom-4 right-4 bg-white dark:bg-zion-slate border border-zion-slate-light rounded-lg shadow-xl z-50">
        <div className="flex items-center gap-2 p-3">
          <Activity className="w-5 h-5 text-zion-blue"/>
          <span className="text-sm font-medium text-zion-slate">Performance</span>
          <button onClick={() => setIsMinimized(false)} className="ml-auto p-1 hover:bg-zion-slate-light rounded">
            <Maximize2 className="w-4 h-4"/>
          </button>
        </div>
      </div>);
    }

    if (metrics.networkLatency > 1000) {
      newAlerts.push({
        id: `network-${Date.now()}`,
        type: 'warning',
        message: `High network latency: ${metrics.networkLatency.toFixed(0)}ms`,
        metric: 'networkLatency',
        value: metrics.networkLatency,
        timestamp: Date.now()
      });
    }

    if (newAlerts.length > 0) {
      setAlerts(prev    => [...prev, ...newAlerts]);
    }
  }, []);

  // Auto-hide alerts after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlerts(prev => prev.filter(alert => Date.now() - alert.timestamp < 5000));
    }, 5000);

    return () => clearTimeout(timer);
  }, [alerts]);

  // Initialize monitoring
  useEffect(() => {
    measureFPS();
    measureMemory();
    measureLoadTime();
    measureNetworkLatency();
    estimateCPUUsage();

    const interval = setInterval(() => {
      measureMemory();
      measureLoadTime();
      measureNetworkLatency();
      checkPerformanceAlerts(metrics);
    }, 2000);

    return () => clearInterval(interval);
  }, [measureFPS, measureMemory, measureLoadTime, measureNetworkLatency, estimateCPUUsage, checkPerformanceAlerts, metrics]);

  const getPerformanceScore = useMemo(() => {
    let score = 100;
    
    if (metrics.fps < 30) score -= 30;
    else if (metrics.fps < 50) score -= 15;
    
    if (metrics.memory > 100) score -= 20;
    else if (metrics.memory > 50) score -= 10;
    
    if (metrics.loadTime > 3000) score -= 20;
    else if (metrics.loadTime > 1000) score -= 10;
    
    if (metrics.networkLatency > 1000) score -= 15;
    else if (metrics.networkLatency > 500) score -= 5;
    
    return Math.max(0, score);
  }, [metrics]);

  const getScoreColor = (score: anynumber)    => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: anynumber)    => {
    if (score >= 80) return <CheckCircle className="w-4 h-4" />;
    if (score >= 60) return <AlertTriangle className="w-4 h-4" />;
    return <XCircle className="w-4 h-4" />;
  };

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-slate-800 hover:bg-slate-700 rounded-full shadow-lg transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Activity className="w-5 h-5 text-cyan-400" />
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-4 right-4 z-50 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-slate-700">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-white">Performance Monitor</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setAutoRefresh(!autoRefresh)} className={`p-2 rounded-lg transition-colors ${autoRefresh ? 'bg-white/20' : 'hover:bg-white/10'}`} title={autoRefresh ? 'Auto-refresh enabled' : 'Auto-refresh disabled'}>
            <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`}/>
          </button>
          <button onClick={() => setIsMinimized(true)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Minimize2 className="w-4 h-4"/>
          </button>
          <button onClick={() => setIsFullscreen(!isFullscreen)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            {isFullscreen ? <Minimize2 className="w-4 h-4"/> : <Maximize2 className="w-4 h-4"/>}
          </button>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <X className="w-4 h-4"/>
          </button>
        </div>
      </div>
    </div>
  )}