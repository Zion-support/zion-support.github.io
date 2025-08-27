import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Cpu, 
  Memory, 
  HardDrive, 
  Wifi, 
  Clock, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Info,
  Settings,
  RefreshCw,
  BarChart3,
  Gauge,
  Target
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  bundleSize: number;
  cacheHitRate: number;
  fps: number;
  domNodes: number;
}

interface PerformanceRecommendation {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  category: 'performance' | 'memory' | 'network' | 'bundle';
  action: string;
  impact: string;
}

export function PerformanceOptimizer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    bundleSize: 0,
    cacheHitRate: 0,
    fps: 0,
    domNodes: 0
  });
  const [recommendations, setRecommendations] = useState<PerformanceRecommendation[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Performance monitoring functions
  const measureLoadTime = useCallback(() => {
    if (performance.timing) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      return Math.round(loadTime);
    }
    return 0;
  }, []);

  const measureMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return Math.round(memory.usedJSHeapSize / 1024 / 1024 * 100) / 100;
    }
    return 0;
  }, []);

  const measureBundleSize = useCallback(() => {
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('index-')) {
        totalSize += 100; // Approximate size for demo
      }
    });
    return totalSize;
  }, []);

  const measureDOMNodes = useCallback(() => {
    return document.querySelectorAll('*').length;
  }, []);

  const measureFPS = useCallback(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    
    const countFrames = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
        return fps;
      }
      
      requestAnimationFrame(countFrames);
    };
    
    requestAnimationFrame(countFrames);
    return 60; // Default fallback
  }, []);

  const updateMetrics = useCallback(() => {
    const newMetrics: PerformanceMetrics = {
      loadTime: measureLoadTime(),
      memoryUsage: measureMemoryUsage(),
      cpuUsage: Math.random() * 30 + 10, // Simulated for demo
      networkLatency: Math.random() * 50 + 20, // Simulated for demo
      bundleSize: measureBundleSize(),
      cacheHitRate: Math.random() * 20 + 80, // Simulated for demo
      fps: measureFPS(),
      domNodes: measureDOMNodes()
    };

    setMetrics(newMetrics);
    setLastUpdate(new Date());
    generateRecommendations(newMetrics);
  }, [measureLoadTime, measureMemoryUsage, measureBundleSize, measureDOMNodes, measureFPS]);

  const generateRecommendations = useCallback((currentMetrics: PerformanceMetrics) => {
    const newRecommendations: PerformanceRecommendation[] = [];

    // Load time recommendations
    if (currentMetrics.loadTime > 3000) {
      newRecommendations.push({
        id: 'load-time',
        title: 'Optimize Page Load Time',
        description: 'Page load time is above recommended threshold',
        priority: 'high',
        category: 'performance',
        action: 'Implement lazy loading and optimize images',
        impact: 'High - Improves user experience and SEO'
      });
    }

    // Memory usage recommendations
    if (currentMetrics.memoryUsage > 50) {
      newRecommendations.push({
        id: 'memory-usage',
        title: 'Reduce Memory Usage',
        description: 'Memory usage is higher than optimal',
        priority: 'medium',
        category: 'memory',
        action: 'Review and optimize component lifecycle',
        impact: 'Medium - Prevents memory leaks and improves performance'
      });
    }

    // Bundle size recommendations
    if (currentMetrics.bundleSize > 200) {
      newRecommendations.push({
        id: 'bundle-size',
        title: 'Optimize Bundle Size',
        description: 'JavaScript bundle size can be reduced',
        priority: 'medium',
        category: 'bundle',
        action: 'Implement code splitting and tree shaking',
        impact: 'Medium - Faster initial page loads'
      });
    }

    // FPS recommendations
    if (currentMetrics.fps < 50) {
      newRecommendations.push({
        id: 'fps',
        title: 'Improve Frame Rate',
        description: 'Frame rate is below optimal for smooth animations',
        priority: 'low',
        category: 'performance',
        action: 'Optimize animations and reduce DOM updates',
        impact: 'Low - Better visual experience'
      });
    }

    setRecommendations(newRecommendations);
  }, []);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    const interval = setInterval(updateMetrics, 5000); // Update every 5 seconds
    
    return () => {
      clearInterval(interval);
      setIsMonitoring(false);
    };
  }, [updateMetrics]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    updateMetrics();
    
    if (isMonitoring) {
      const cleanup = startMonitoring();
      return cleanup;
    }
  }, [isMonitoring, startMonitoring, updateMetrics]);

  const getPerformanceScore = useMemo(() => {
    let score = 100;
    
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.memoryUsage > 50) score -= 15;
    if (metrics.bundleSize > 200) score -= 10;
    if (metrics.fps < 50) score -= 5;
    
    return Math.max(score, 0);
  }, [metrics]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-500/20';
    if (score >= 60) return 'bg-yellow-500/20';
    return 'bg-red-500/20';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'low': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'performance': return <Zap className="w-4 h-4" />;
      case 'memory': return <Memory className="w-4 h-4" />;
      case 'network': return <Wifi className="w-4 h-4" />;
      case 'bundle': return <HardDrive className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Performance Score Badge */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`cursor-pointer p-4 rounded-2xl backdrop-blur-xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/20 ${getScoreBgColor(getPerformanceScore)}`}
      >
        <div className="flex items-center space-x-3">
          <div className="relative">
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-cyan-500/20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={`${getScoreColor(getPerformanceScore)} transition-all duration-500`}
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray={`${getPerformanceScore}, 100`}
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-sm font-bold ${getScoreColor(getPerformanceScore)}`}>
                {getPerformanceScore}
              </span>
            </div>
          </div>
          <div>
            <div className="text-white font-semibold">Performance</div>
            <div className={`text-xs font-medium ${getScoreColor(getPerformanceScore)}`}>
              {getPerformanceScore >= 80 ? 'Excellent' : getPerformanceScore >= 60 ? 'Good' : 'Needs Attention'}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expanded Performance Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full right-0 mb-4 w-96 bg-black/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/20 p-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-lg font-bold flex items-center space-x-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                <span>Performance Monitor</span>
              </h3>
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={updateMetrics}
                  className="p-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  <RefreshCw className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsExpanded(false)}
                  className="p-2 text-white hover:text-gray-300 transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  <Settings className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-slate-400">Load Time</span>
                </div>
                <div className="text-white font-semibold">{metrics.loadTime}ms</div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Memory className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-slate-400">Memory</span>
                </div>
                <div className="text-white font-semibold">{metrics.memoryUsage}MB</div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-slate-400">CPU</span>
                </div>
                <div className="text-white font-semibold">{metrics.cpuUsage.toFixed(1)}%</div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Gauge className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-slate-400">FPS</span>
                </div>
                <div className="text-white font-semibold">{metrics.fps}</div>
              </div>
            </div>

            {/* Monitoring Controls */}
            <div className="flex items-center justify-between mb-6 p-3 bg-white/5 rounded-xl">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
                <span className="text-sm text-white">
                  {isMonitoring ? 'Monitoring Active' : 'Monitoring Stopped'}
                </span>
              </div>
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={isMonitoring ? stopMonitoring : startMonitoring}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                    isMonitoring 
                      ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                      : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                  }`}
                >
                  {isMonitoring ? 'Stop' : 'Start'}
                </motion.button>
              </div>
            </div>

            {/* Recommendations */}
            {recommendations.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center space-x-2">
                  <Target className="w-4 h-4 text-cyan-400" />
                  <span>Recommendations</span>
                </h4>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {recommendations.map((rec) => (
                    <motion.div
                      key={rec.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-3 bg-white/5 rounded-lg border-l-4 border-cyan-500/50"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          {getCategoryIcon(rec.category)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h5 className="text-white text-sm font-medium">{rec.title}</h5>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                              {rec.priority}
                            </span>
                          </div>
                          <p className="text-slate-300 text-xs mb-2">{rec.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-cyan-400 text-xs font-medium">{rec.action}</span>
                            <span className="text-slate-400 text-xs">{rec.impact}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Last Update */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-xs text-slate-400 text-center">
                Last updated: {lastUpdate.toLocaleTimeString()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
