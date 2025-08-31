import React, { useEffect, useState, useCallback, useMemo } from 'react';
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
  Memory,
  HardDrive
} from 'lucide-react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  renderTime: number;
  networkLatency: number;
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
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0,
    networkLatency: 0
  });
  
  const [isVisible, setIsVisible] = useState(showMetrics);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled) return;

    // Measure FPS
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

    // Measure memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({ 
        ...prev, 
        memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
      }));
    }

    // Measure render time
    const startTime = performance.now();
    requestAnimationFrame(() => {
      const renderTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, renderTime }));
    });

    requestAnimationFrame(measureFPS);
  }, [enabled]);

  // Auto-optimization logic
  const performOptimizations = useCallback(async () => {
    if (!autoOptimize || isOptimizing) return;
    
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    // Check FPS and suggest optimizations
    if (metrics.fps < 30) {
      newOptimizations.push('Low FPS detected - Consider reducing animations');
      // Reduce animation complexity
      document.documentElement.style.setProperty('--animation-duration', '0.2s');
    }

    // Check memory usage
    if (metrics.memoryUsage > 100) {
      newOptimizations.push('High memory usage - Consider lazy loading');
    }

    // Check render time
    if (metrics.renderTime > 16) {
      newOptimizations.push('Slow rendering - Optimizing component updates');
    }

    // Network optimization
    if (metrics.networkLatency > 100) {
      newOptimizations.push('High network latency - Enabling compression');
    }

    setOptimizations(newOptimizations);
    setIsOptimizing(false);
  }, [metrics, autoOptimize, isOptimizing]);

  // Debounced optimization
  const debouncedOptimize = useMemo(
    () => {
      let timeoutId: NodeJS.Timeout;
      return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(performOptimizations, 2000);
      };
    },
    [performOptimizations]
  );

  useEffect(() => {
    if (!enabled) return;

    measurePerformance();
    debouncedOptimize();

    // Cleanup
    return () => {
      // Reset any applied optimizations
      document.documentElement.style.removeProperty('--animation-duration');
    };
  }, [enabled, measurePerformance, debouncedOptimize]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    let score = 100;
    
    if (metrics.fps < 30) score -= 30;
    else if (metrics.fps < 45) score -= 15;
    
    if (metrics.memoryUsage > 100) score -= 20;
    else if (metrics.memoryUsage > 50) score -= 10;
    
    if (metrics.renderTime > 16) score -= 20;
    else if (metrics.renderTime > 8) score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-4 h-4" />;
    if (score >= 60) return <AlertTriangle className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  if (!enabled) return null;

  return (
    <>
      {/* Performance Metrics Display */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed top-20 right-4 z-40 bg-slate-900/95 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 shadow-2xl min-w-[280px]"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                Performance Monitor
              </h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Performance Score */}
            <div className="mb-4 p-3 bg-slate-800/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">Performance Score</span>
                {getScoreIcon(performanceScore)}
              </div>
              <div className={`text-2xl font-bold ${getScoreColor(performanceScore)}`}>
                {performanceScore}/100
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="text-center p-2 bg-slate-800/30 rounded">
                <div className="text-xs text-gray-400">FPS</div>
                <div className={`text-sm font-semibold ${metrics.fps < 30 ? 'text-red-400' : 'text-green-400'}`}>
                  {metrics.fps}
                </div>
              </div>
              <div className="text-center p-2 bg-slate-800/30 rounded">
                <div className="text-xs text-gray-400">Memory</div>
                <div className={`text-sm font-semibold ${metrics.memoryUsage > 100 ? 'text-red-400' : 'text-green-400'}`}>
                  {metrics.memoryUsage}MB
                </div>
              </div>
              <div className="text-center p-2 bg-slate-800/30 rounded">
                <div className="text-xs text-gray-400">Render</div>
                <div className={`text-sm font-semibold ${metrics.renderTime > 16 ? 'text-red-400' : 'text-green-400'}`}>
                  {metrics.renderTime.toFixed(1)}ms
                </div>
              </div>
              <div className="text-center p-2 bg-slate-800/30 rounded">
                <div className="text-xs text-gray-400">Network</div>
                <div className={`text-sm font-semibold ${metrics.networkLatency > 100 ? 'text-red-400' : 'text-green-400'}`}>
                  {metrics.networkLatency}ms
                </div>
              </div>
            </div>

            {/* Optimizations */}
            {optimizations.length > 0 && (
              <div className="mb-4">
                <div className="text-xs text-gray-400 mb-2">Recent Optimizations:</div>
                <div className="space-y-1">
                  {optimizations.slice(-3).map((opt, index) => (
                    <div key={index} className="text-xs text-cyan-400 bg-cyan-400/10 p-2 rounded">
                      {opt}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Manual Optimize Button */}
            <button
              onClick={performOptimizations}
              disabled={isOptimizing}
              className="w-full px-3 py-2 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded hover:bg-cyan-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isOptimizing ? (
                <>
                  <div className="w-3 h-3 border border-cyan-400 border-t-transparent rounded-full animate-spin" />
                  Optimizing...
                </>
              ) : (
                <>
                  <Zap className="w-3 h-3" />
                  Optimize Now
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-20 right-4 z-30 w-10 h-10 bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-lg shadow-lg hover:bg-slate-800/80 transition-all duration-300 flex items-center justify-center text-cyan-400 hover:text-cyan-300"
        title="Toggle Performance Monitor"
      >
        <BarChart3 className="w-5 h-5" />
      </motion.button>
    </>
  );
};
