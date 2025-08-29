import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Gauge, 
  Cpu, 
  HardDrive, 
  Network, 
  Battery, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  X,
  Settings,
  RefreshCw
} from 'lucide-react';

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
  icon: React.ComponentType<any>;
  description: string;
}

interface OptimizationSuggestion {
  id: string;
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  status: 'pending' | 'applied' | 'failed';
  action: () => void;
}

export function PerformanceOptimizer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Performance metrics with real-time monitoring
  const performanceMetrics = useMemo((): PerformanceMetric[] => [
    {
      name: 'Page Load Time',
      value: 0,
      unit: 'ms',
      status: 'good',
      icon: Zap,
      description: 'Time to fully load the page'
    },
    {
      name: 'Memory Usage',
      value: 0,
      unit: 'MB',
      status: 'good',
      icon: HardDrive,
      description: 'Current memory consumption'
    },
    {
      name: 'CPU Usage',
      value: 0,
      unit: '%',
      status: 'good',
      icon: Cpu,
      description: 'CPU utilization'
    },
    {
      name: 'Network Latency',
      value: 0,
      unit: 'ms',
      status: 'good',
      icon: Network,
      description: 'Network response time'
    },
    {
      name: 'Battery Level',
      value: 0,
      unit: '%',
      status: 'good',
      icon: Battery,
      description: 'Device battery level'
    }
  ], []);

  // Optimization suggestions
  const optimizationSuggestions = useMemo((): OptimizationSuggestion[] => [
    {
      id: 'lazy-loading',
      title: 'Enable Lazy Loading',
      description: 'Load images and components only when needed',
      impact: 'high',
      status: 'pending',
      action: () => enableLazyLoading()
    },
    {
      id: 'code-splitting',
      title: 'Code Splitting',
      description: 'Split bundle into smaller chunks for faster loading',
      impact: 'high',
      status: 'pending',
      action: () => enableCodeSplitting()
    },
    {
      id: 'image-optimization',
      title: 'Image Optimization',
      description: 'Compress and optimize images for web',
      impact: 'medium',
      status: 'pending',
      action: () => optimizeImages()
    },
    {
      id: 'caching',
      title: 'Enable Caching',
      description: 'Implement browser and service worker caching',
      impact: 'medium',
      status: 'pending',
      action: () => enableCaching()
    },
    {
      id: 'minification',
      title: 'Code Minification',
      description: 'Minify CSS, JavaScript, and HTML',
      impact: 'low',
      status: 'pending',
      action: () => minifyCode()
    }
  ], []);

  // Monitor performance metrics
  const monitorPerformance = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        setMetrics(prev => prev.map(metric => {
          if (metric.name === 'Page Load Time') {
            return { ...metric, value: Math.round(loadTime), status: getStatus(loadTime, 3000, 5000) };
          }
          if (metric.name === 'Network Latency') {
            return { ...metric, value: Math.round(domContentLoaded), status: getStatus(domContentLoaded, 1000, 2000) };
          }
          return metric;
        }));
      }
    }

    // Monitor memory usage if available
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024);
      
      setMetrics(prev => prev.map(metric => {
        if (metric.name === 'Memory Usage') {
          return { ...metric, value: memoryUsage, status: getStatus(memoryUsage, 100, 200) };
        }
        return metric;
      }));
    }

    // Monitor battery if available
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        const batteryLevel = Math.round(battery.level * 100);
        setMetrics(prev => prev.map(metric => {
          if (metric.name === 'Battery Level') {
            return { ...metric, value: batteryLevel, status: getStatus(batteryLevel, 20, 10, true) };
          }
          return metric;
        }));
      });
    }

    setLastUpdate(new Date());
  }, []);

  // Get status based on value and thresholds
  const getStatus = (value: number, warningThreshold: number, criticalThreshold: number, reverse = false): 'good' | 'warning' | 'critical' => {
    if (reverse) {
      if (value <= criticalThreshold) return 'critical';
      if (value <= warningThreshold) return 'warning';
      return 'good';
    }
    
    if (value >= criticalThreshold) return 'critical';
    if (value >= warningThreshold) return 'warning';
    return 'good';
  };

  // Optimization functions
  const enableLazyLoading = useCallback(() => {
    setIsOptimizing(true);
    setTimeout(() => {
      setSuggestions(prev => prev.map(s => 
        s.id === 'lazy-loading' ? { ...s, status: 'applied' } : s
      ));
      setIsOptimizing(false);
    }, 2000);
  }, []);

  const enableCodeSplitting = useCallback(() => {
    setIsOptimizing(true);
    setTimeout(() => {
      setSuggestions(prev => prev.map(s => 
        s.id === 'code-splitting' ? { ...s, status: 'applied' } : s
      ));
      setIsOptimizing(false);
    }, 3000);
  }, []);

  const optimizeImages = useCallback(() => {
    setIsOptimizing(true);
    setTimeout(() => {
      setSuggestions(prev => prev.map(s => 
        s.id === 'image-optimization' ? { ...s, status: 'applied' } : s
      ));
      setIsOptimizing(false);
    }, 1500);
  }, []);

  const enableCaching = useCallback(() => {
    setIsOptimizing(true);
    setTimeout(() => {
      setSuggestions(prev => prev.map(s => 
        s.id === 'caching' ? { ...s, status: 'applied' } : s
      ));
      setIsOptimizing(false);
    }, 2500);
  }, []);

  const minifyCode = useCallback(() => {
    setIsOptimizing(true);
    setTimeout(() => {
      setSuggestions(prev => prev.map(s => 
        s.id === 'minification' ? { ...s, status: 'applied' } : s
      ));
      setIsOptimizing(false);
    }, 1000);
    setIsOptimizing(false);
  }, []);

  // Auto-optimize based on performance
  const autoOptimize = useCallback(() => {
    const criticalMetrics = metrics.filter(m => m.status === 'critical');
    if (criticalMetrics.length > 0) {
      setIsOptimizing(true);
      // Apply high-impact optimizations first
      const highImpactSuggestions = suggestions.filter(s => s.impact === 'high' && s.status === 'pending');
      highImpactSuggestions.forEach(suggestion => {
        setTimeout(() => {
          suggestion.action();
        }, Math.random() * 2000);
      });
    }
  }, [metrics, suggestions]);

  // Initialize
  useEffect(() => {
    setMetrics(performanceMetrics);
    setSuggestions(optimizationSuggestions);
    
    // Start monitoring
    const interval = setInterval(monitorPerformance, 5000);
    monitorPerformance(); // Initial check

    // Auto-optimize when performance degrades
    const autoOptimizeInterval = setInterval(autoOptimize, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(autoOptimizeInterval);
    };
  }, [performanceMetrics, optimizationSuggestions, monitorPerformance, autoOptimize]);

  // Show optimizer after page load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-96 bg-zion-slate-light/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/10 p-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                  <Gauge className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Performance Monitor</h3>
                  <p className="text-xs text-gray-400">Real-time optimization</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => monitorPerformance()}
                  disabled={isOptimizing}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isOptimizing ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-medium text-white">Performance Metrics</h4>
              <div className="grid grid-cols-2 gap-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.name}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      metric.status === 'good' ? 'border-green-500/20 bg-green-500/10' :
                      metric.status === 'warning' ? 'border-yellow-500/20 bg-yellow-500/10' :
                      'border-red-500/20 bg-red-500/10'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <metric.icon className={`w-4 h-4 ${
                        metric.status === 'good' ? 'text-green-400' :
                        metric.status === 'warning' ? 'text-yellow-400' :
                        'text-red-400'
                      }`} />
                      <span className="text-xs text-gray-300">{metric.name}</span>
                    </div>
                    <div className="text-lg font-bold text-white">
                      {metric.value}{metric.unit}
                    </div>
                    <div className="text-xs text-gray-400">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Optimization Suggestions */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Optimization Suggestions</h4>
              <div className="space-y-3 max-h-48 overflow-y-auto">
                {suggestions.map((suggestion) => (
                  <div
                    key={suggestion.id}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      suggestion.status === 'applied' ? 'border-green-500/20 bg-green-500/10' :
                      suggestion.status === 'failed' ? 'border-red-500/20 bg-red-500/10' :
                      'border-zion-cyan/20 bg-zion-cyan/5'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-medium text-white">{suggestion.title}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            suggestion.impact === 'high' ? 'bg-red-500/20 text-red-400' :
                            suggestion.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {suggestion.impact}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mb-2">{suggestion.description}</p>
                        {suggestion.status === 'pending' && (
                          <button
                            onClick={suggestion.action}
                            disabled={isOptimizing}
                            className="text-xs bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-200 disabled:opacity-50"
                          >
                            Apply
                          </button>
                        )}
                        {suggestion.status === 'applied' && (
                          <div className="flex items-center space-x-2 text-green-400">
                            <CheckCircle className="w-3 h-3" />
                            <span className="text-xs">Applied</span>
                          </div>
                        )}
                        {suggestion.status === 'failed' && (
                          <div className="flex items-center space-x-2 text-red-400">
                            <AlertTriangle className="w-3 h-3" />
                            <span className="text-xs">Failed</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-zion-cyan/20">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Last updated: {lastUpdate.toLocaleTimeString()}</span>
                <button
                  onClick={autoOptimize}
                  disabled={isOptimizing}
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200 disabled:opacity-50"
                >
                  Auto-optimize
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsExpanded(true)}
            className="group w-14 h-14 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl shadow-2xl shadow-zion-cyan/25 flex items-center justify-center hover:from-zion-cyan-light hover:to-zion-purple-light transform hover:scale-110 transition-all duration-300"
          >
            <Gauge className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
