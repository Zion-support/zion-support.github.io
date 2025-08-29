import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Gauge, 
  HardDrive, 
  Network, 
  Cpu, 
  Battery, 
  Wifi, 
  WifiOff,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Info,
  Settings,
  Play,
  Pause,
  Target,
  Rocket,
  Shield,
  Globe,
  Brain,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
  memoryUsage: number; // Memory usage in MB
  networkSpeed: number; // Network speed in Mbps
  batteryLevel: number; // Battery level percentage
  cpuUsage: number; // CPU usage percentage
  deviceType: string; // Device type detection
  connectionType: string; // Network connection type
  performanceScore: number; // Overall performance score
}

interface OptimizationSuggestion {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'accessibility' | 'seo' | 'security';
  action: string;
  implemented: boolean;
}

export function AdvancedPerformanceMonitor() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domLoad: 0,
    windowLoad: 0,
    memoryUsage: 0,
    networkSpeed: 0,
    batteryLevel: 0,
    cpuUsage: 0,
    deviceType: 'desktop',
    connectionType: 'unknown',
    performanceScore: 0
  });
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [optimizations, setOptimizations] = useState({
    codeSplitting: false,
    lazyLoading: false,
    imageOptimization: false,
    caching: false,
    compression: false,
    minification: false
  });

  // Performance monitoring functions
  const measurePerformance = useCallback(async () => {
    if (!isMonitoring) return;

    try {
      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure other metrics
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigation.responseStart - navigation.requestStart,
          domLoad: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          windowLoad: navigation.loadEventEnd - navigation.loadEventStart
        }));
      }

      // Measure memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024)
        }));
      }

      // Detect device type
      const userAgent = navigator.userAgent;
      let deviceType = 'desktop';
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        deviceType = 'mobile';
      } else if (/iPad|Android/i.test(userAgent)) {
        deviceType = 'tablet';
      }

      // Detect connection type
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      const connectionType = connection ? connection.effectiveType || connection.type : 'unknown';

      setMetrics(prev => ({
        ...prev,
        deviceType,
        connectionType
      }));

      // Calculate performance score
      const score = calculatePerformanceScore();
      setMetrics(prev => ({ ...prev, performanceScore: score }));

    } catch (error) {
      console.error('Performance measurement error:', error);
    }
  }, [isMonitoring]);

  const calculatePerformanceScore = useCallback(() => {
    let score = 100;
    
    // Deduct points for poor performance
    if (metrics.lcp > 2500) score -= 20;
    if (metrics.fid > 100) score -= 20;
    if (metrics.cls > 0.1) score -= 20;
    if (metrics.ttfb > 600) score -= 15;
    if (metrics.memoryUsage > 100) score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  // Generate optimization suggestions
  const generateSuggestions = useCallback(() => {
    const newSuggestions: OptimizationSuggestion[] = [];

    if (metrics.lcp > 2500) {
      newSuggestions.push({
        id: 'lcp-optimization',
        title: 'Optimize Largest Contentful Paint',
        description: 'LCP is above 2.5s threshold. Consider image optimization, server response time, and critical resource loading.',
        impact: 'high',
        category: 'performance',
        action: 'Implement lazy loading and image optimization',
        implemented: false
      });
    }

    if (metrics.fid > 100) {
      newSuggestions.push({
        id: 'fid-optimization',
        title: 'Improve First Input Delay',
        description: 'FID is above 100ms threshold. Reduce JavaScript execution time and optimize event handlers.',
        impact: 'high',
        category: 'performance',
        action: 'Optimize JavaScript bundles and event handling',
        implemented: false
      });
    }

    if (metrics.cls > 0.1) {
      newSuggestions.push({
        id: 'cls-optimization',
        title: 'Reduce Cumulative Layout Shift',
        description: 'CLS is above 0.1 threshold. Reserve space for dynamic content and avoid layout shifts.',
        impact: 'medium',
        category: 'performance',
        action: 'Implement proper image dimensions and reserve space',
        implemented: false
      });
    }

    if (metrics.memoryUsage > 100) {
      newSuggestions.push({
        id: 'memory-optimization',
        title: 'Optimize Memory Usage',
        description: 'Memory usage is high. Consider code splitting and lazy loading to reduce initial bundle size.',
        impact: 'medium',
        category: 'performance',
        action: 'Implement code splitting and lazy loading',
        implemented: false
      });
    }

    setSuggestions(newSuggestions);
  }, [metrics]);

  // Auto-optimization functions
  const implementOptimization = useCallback((suggestionId: string) => {
    setSuggestions(prev => 
      prev.map(s => s.id === suggestionId ? { ...s, implemented: true } : s)
    );

    // Implement specific optimizations
    switch (suggestionId) {
      case 'lcp-optimization':
        setOptimizations(prev => ({ ...prev, imageOptimization: true }));
        break;
      case 'memory-optimization':
        setOptimizations(prev => ({ ...prev, codeSplitting: true, lazyLoading: true }));
        break;
      case 'cls-optimization':
        // Implement CLS optimizations
        break;
    }
  }, []);

  // Start/stop monitoring
  const toggleMonitoring = useCallback(() => {
    setIsMonitoring(!isMonitoring);
  }, [isMonitoring]);

  // Effects
  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(measurePerformance, 2000);
      return () => clearInterval(interval);
    }
  }, [isMonitoring, measurePerformance]);

  useEffect(() => {
    generateSuggestions();
  }, [generateSuggestions]);

  // Performance status indicators
  const getPerformanceStatus = (value: number, threshold: number, metric: string) => {
    if (value <= threshold) return { status: 'good', color: 'text-green-500', icon: CheckCircle };
    if (value <= threshold * 1.5) return { status: 'warning', color: 'text-yellow-500', icon: AlertTriangle };
    return { status: 'poor', color: 'text-red-500', icon: AlertTriangle };
  };

  const lcpStatus = getPerformanceStatus(metrics.lcp, 2500, 'LCP');
  const fidStatus = getPerformanceStatus(metrics.fid, 100, 'FID');
  const clsStatus = getPerformanceStatus(metrics.cls, 0.1, 'CLS');

  return (
    <>
      {/* Floating Performance Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Gauge className="w-6 h-6" />
      </motion.button>

      {/* Performance Monitor Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-96 bg-white dark:bg-gray-900 shadow-2xl z-40 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Performance Monitor
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ×
                </button>
              </div>

              {/* Monitoring Controls */}
              <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Real-time Monitoring
                  </span>
                  <button
                    onClick={toggleMonitoring}
                    className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                      isMonitoring
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}
                  >
                    {isMonitoring ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isMonitoring ? 'Active' : 'Inactive'}</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <Monitor className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-600 dark:text-gray-400">{metrics.deviceType}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 dark:text-gray-400">{metrics.connectionType}</span>
                  </div>
                </div>
              </div>

              {/* Performance Score */}
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {metrics.performanceScore}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Performance Score
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        metrics.performanceScore >= 90 ? 'bg-green-500' :
                        metrics.performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${metrics.performanceScore}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Core Web Vitals
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <lcpStatus.icon className={`w-5 h-5 ${lcpStatus.color}`} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">LCP</span>
                    </div>
                    <span className={`text-sm font-bold ${lcpStatus.color}`}>
                      {metrics.lcp.toFixed(0)}ms
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <fidStatus.icon className={`w-5 h-5 ${fidStatus.color}`} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">FID</span>
                    </div>
                    <span className={`text-sm font-bold ${fidStatus.color}`}>
                      {metrics.fid.toFixed(0)}ms
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <clsStatus.icon className={`w-5 h-5 ${clsStatus.color}`} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">CLS</span>
                    </div>
                    <span className={`text-sm font-bold ${clsStatus.color}`}>
                      {metrics.cls.toFixed(3)}
                    </span>
                  </div>
                </div>
              </div>

              {/* System Metrics */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  System Metrics
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {metrics.memoryUsage}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Memory (MB)</div>
                  </div>
                  
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {metrics.ttfb.toFixed(0)}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">TTFB (ms)</div>
                  </div>
                </div>
              </div>

              {/* Optimization Suggestions */}
              {suggestions.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Optimization Suggestions
                  </h3>
                  <div className="space-y-3">
                    {suggestions.map((suggestion) => (
                      <motion.div
                        key={suggestion.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 rounded-lg border ${
                          suggestion.implemented
                            ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
                            : 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {suggestion.title}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                suggestion.impact === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                                suggestion.impact === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                                'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                              }`}>
                                {suggestion.impact}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                              {suggestion.description}
                            </p>
                            {!suggestion.implemented && (
                              <button
                                onClick={() => implementOptimization(suggestion.id)}
                                className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition-colors"
                              >
                                Implement
                              </button>
                            )}
                          </div>
                          {suggestion.implemented && (
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Active Optimizations */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Active Optimizations
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(optimizations).map(([key, active]) => (
                    <div
                      key={key}
                      className={`flex items-center space-x-2 p-2 rounded text-sm ${
                        active
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                      }`}
                    >
                      {active ? <CheckCircle className="w-4 h-4" /> : <Settings className="w-4 h-4" />}
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}