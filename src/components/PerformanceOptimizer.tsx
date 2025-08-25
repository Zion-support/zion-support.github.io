import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Zap, 
  Clock, 
  HardDrive, 
  Network, 
  Cpu, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Info,
  Settings,
  RefreshCw
} from 'lucide-react';

interface PerformanceMetrics {
  pageLoadTime: number;
  memoryUsage: number;
  bundleSize: number;
  performanceScore: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  domContentLoaded: number;
}

interface OptimizationSuggestion {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'accessibility' | 'seo' | 'best-practices';
  implemented: boolean;
}

export const PerformanceOptimizer: React.FC<{
  children: React.ReactNode;
  showMetrics?: boolean;
  onOptimize?: (metrics: PerformanceMetrics) => void;
  autoOptimize?: boolean;
  checkInterval?: number;
}> = ({ 
  children, 
  showMetrics = false, 
  onOptimize, 
  autoOptimize = false,
  checkInterval = 30000 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    pageLoadTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    performanceScore: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0,
    domContentLoaded: 0
  });

  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [lastCheck, setLastCheck] = useState<Date>(new Date());
  const [showDetails, setShowDetails] = useState(false);

  // Performance monitoring functions
  const measurePerformance = useCallback(async (): Promise<PerformanceMetrics> => {
    const startTime = performance.now();
    
    // Get performance timing data
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    // Calculate key metrics
    const pageLoadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
    const domContentLoaded = navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0;
    
    // Get paint metrics
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
    const lcp = paint.find(entry => entry.name === 'largest-contentful-paint');
    
    // Memory usage (if available)
    const memory = (performance as any).memory;
    const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;
    
    // Estimate bundle size (rough calculation)
    const bundleSize = performance.getEntriesByType('resource')
      .filter((entry: any) => entry.initiatorType === 'script' || entry.initiatorType === 'css')
      .reduce((total: number, entry: any) => total + (entry.transferSize || 0), 0) / 1024 / 1024;
    
    // Calculate performance score (Lighthouse-like)
    let performanceScore = 100;
    
    if (pageLoadTime > 3000) performanceScore -= 20;
    if (pageLoadTime > 5000) performanceScore -= 20;
    if (memoryUsage > 100) performanceScore -= 15;
    if (bundleSize > 2) performanceScore -= 15;
    if (bundleSize > 5) performanceScore -= 15;
    
    performanceScore = Math.max(0, performanceScore);
    
    const newMetrics: PerformanceMetrics = {
      pageLoadTime,
      memoryUsage: Math.round(memoryUsage * 100) / 100,
      bundleSize: Math.round(bundleSize * 100) / 100,
      performanceScore,
      firstContentfulPaint: fcp ? fcp.startTime : 0,
      largestContentfulPaint: lcp ? lcp.startTime : 0,
      cumulativeLayoutShift: 0, // Would need to be measured over time
      firstInputDelay: 0, // Would need user interaction
      timeToInteractive: navigation ? navigation.domInteractive - navigation.fetchStart : 0,
      domContentLoaded
    };
    
    return newMetrics;
  }, []);

  // Generate optimization suggestions
  const generateSuggestions = useCallback((currentMetrics: PerformanceMetrics): OptimizationSuggestion[] => {
    const newSuggestions: OptimizationSuggestion[] = [];
    
    if (currentMetrics.pageLoadTime > 3000) {
      newSuggestions.push({
        id: 'page-load-time',
        title: 'Optimize Page Load Time',
        description: 'Page load time is above 3 seconds. Consider code splitting, lazy loading, and image optimization.',
        impact: 'high',
        category: 'performance',
        implemented: false
      });
    }
    
    if (currentMetrics.memoryUsage > 100) {
      newSuggestions.push({
        id: 'memory-usage',
        title: 'Reduce Memory Usage',
        description: 'Memory usage is high. Check for memory leaks and optimize component lifecycle.',
        impact: 'medium',
        category: 'performance',
        implemented: false
      });
    }
    
    if (currentMetrics.bundleSize > 2) {
      newSuggestions.push({
        id: 'bundle-size',
        title: 'Optimize Bundle Size',
        description: 'Bundle size is large. Implement tree shaking, code splitting, and remove unused dependencies.',
        impact: 'high',
        category: 'performance',
        implemented: false
      });
    }
    
    if (currentMetrics.performanceScore < 80) {
      newSuggestions.push({
        id: 'overall-performance',
        title: 'Improve Overall Performance',
        description: 'Performance score is below 80. Review and implement performance best practices.',
        impact: 'high',
        category: 'performance',
        implemented: false
      });
    }
    
    return newSuggestions;
  }, []);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    const interval = setInterval(async () => {
      try {
        const newMetrics = await measurePerformance();
        setMetrics(newMetrics);
        setLastCheck(new Date());
        
        // Generate new suggestions
        const newSuggestions = generateSuggestions(newMetrics);
        setSuggestions(newSuggestions);
        
        // Call callback if provided
        if (onOptimize) {
          onOptimize(newMetrics);
        }
        
        // Auto-optimize if enabled
        if (autoOptimize && newMetrics.performanceScore < 80) {
          console.log('Auto-optimization triggered due to low performance score');
          // Implement auto-optimization logic here
        }
      } catch (error) {
        console.error('Performance measurement failed:', error);
      }
    }, checkInterval);
    
    return () => clearInterval(interval);
  }, [measurePerformance, generateSuggestions, onOptimize, autoOptimize, checkInterval]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Manual performance check
  const manualCheck = useCallback(async () => {
    try {
      const newMetrics = await measurePerformance();
      setMetrics(newMetrics);
      setLastCheck(new Date());
      
      const newSuggestions = generateSuggestions(newMetrics);
      setSuggestions(newSuggestions);
      
      if (onOptimize) {
        onOptimize(newMetrics);
      }
    } catch (error) {
      console.error('Manual performance check failed:', error);
    }
  }, [measurePerformance, generateSuggestions, onOptimize]);

  // Initialize monitoring on mount
  useEffect(() => {
    if (showMetrics) {
      manualCheck();
      startMonitoring();
    }
    
    return () => {
      stopMonitoring();
    };
  }, [showMetrics, manualCheck, startMonitoring, stopMonitoring]);

  // Performance status indicator
  const getPerformanceStatus = useMemo(() => {
    if (metrics.performanceScore >= 90) return { color: 'text-green-400', icon: CheckCircle, label: 'Excellent' };
    if (metrics.performanceScore >= 80) return { color: 'text-yellow-400', icon: TrendingUp, label: 'Good' };
    if (metrics.performanceScore >= 60) return { color: 'text-orange-400', icon: AlertTriangle, label: 'Fair' };
    return { color: 'text-red-400', icon: AlertTriangle, label: 'Poor' };
  }, [metrics.performanceScore]);

  const StatusIcon = getPerformanceStatus.icon;

  if (!showMetrics) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      
      {/* Performance Dashboard */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-zion-blue-dark border border-zion-cyan/30 rounded-2xl shadow-2xl shadow-zion-cyan/20 backdrop-blur-md">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-zion-cyan/20">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-semibold">Performance</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={manualCheck}
                className="p-1 text-zion-cyan hover:text-white transition-colors duration-200"
                title="Refresh metrics"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="p-1 text-zion-cyan hover:text-white transition-colors duration-200"
                title="Toggle details"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Metrics */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm">Score</span>
              <div className="flex items-center space-x-2">
                <StatusIcon className={`w-4 h-4 ${getPerformanceStatus.color}`} />
                <span className={`text-sm font-semibold ${getPerformanceStatus.color}`}>
                  {getPerformanceStatus.label}
                </span>
              </div>
            </div>
            
            <div className="text-2xl font-bold text-white mb-2">
              {metrics.performanceScore}
            </div>
            
            <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  metrics.performanceScore >= 90 ? 'bg-green-500' :
                  metrics.performanceScore >= 80 ? 'bg-yellow-500' :
                  metrics.performanceScore >= 60 ? 'bg-orange-500' : 'bg-red-500'
                }`}
                style={{ width: `${metrics.performanceScore}%` }}
              />
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center space-x-2">
                <Clock className="w-3 h-3 text-zion-cyan" />
                <span className="text-gray-400">Load:</span>
                <span className="text-white">{metrics.pageLoadTime.toFixed(0)}ms</span>
              </div>
              <div className="flex items-center space-x-2">
                <HardDrive className="w-3 h-3 text-zion-cyan" />
                <span className="text-gray-400">Memory:</span>
                <span className="text-white">{metrics.memoryUsage}MB</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cpu className="w-3 h-3 text-zion-cyan" />
                <span className="text-gray-400">Bundle:</span>
                <span className="text-white">{metrics.bundleSize}MB</span>
              </div>
              <div className="flex items-center space-x-2">
                <Network className="w-3 h-3 text-zion-cyan" />
                <span className="text-gray-400">FCP:</span>
                <span className="text-white">{metrics.firstContentfulPaint.toFixed(0)}ms</span>
              </div>
            </div>
          </div>

          {/* Detailed Metrics */}
          {showDetails && (
            <div className="border-t border-zion-cyan/20 p-4">
              <h4 className="text-white font-semibold mb-3 text-sm">Detailed Metrics</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Time to Interactive:</span>
                  <span className="text-white">{metrics.timeToInteractive.toFixed(0)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">DOM Content Loaded:</span>
                  <span className="text-white">{metrics.domContentLoaded.toFixed(0)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Largest Contentful Paint:</span>
                  <span className="text-white">{metrics.largestContentfulPaint.toFixed(0)}ms</span>
                </div>
              </div>

              {/* Optimization Suggestions */}
              {suggestions.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-white font-semibold mb-3 text-sm">Optimization Suggestions</h4>
                  <div className="space-y-2">
                    {suggestions.slice(0, 3).map((suggestion) => (
                      <div key={suggestion.id} className="p-2 bg-gray-800/50 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <Info className="w-3 h-3 text-zion-cyan mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="text-white font-medium text-xs">{suggestion.title}</div>
                            <div className="text-gray-400 text-xs mt-1">{suggestion.description}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Status Bar */}
          <div className="px-4 py-2 bg-gray-800/50 rounded-b-2xl">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">
                {isMonitoring ? 'Monitoring' : 'Stopped'}
              </span>
              <span className="text-gray-500">
                {lastCheck.toLocaleTimeString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

    // FCP scoring (0-100)
    if (fcp <= 1800) score -= 0;
    else if (fcp <= 3000) score -= 10;
    else score -= 25;

    // LCP scoring (0-100)
    if (lcp <= 2500) score -= 0;
    else if (lcp <= 4000) score -= 10;
    else score -= 25;

    // FID scoring (0-100)
    if (fid <= 100) score -= 0;
    else if (fid <= 300) score -= 10;
    else score -= 25;

    // CLS scoring (0-100)
    if (cls <= 0.1) score -= 0;
    else if (cls <= 0.25) score -= 10;
    else score -= 25;

    // TTFB scoring (0-100)
    if (ttfb <= 800) score -= 0;
    else if (ttfb <= 1800) score -= 10;
    else score -= 25;

    score = Math.max(0, Math.min(100, score));
    setMetrics(prev => ({ ...prev, score }));
  }, []);

  const analyzePerformance = useCallback(() => {
    const newIssues: PerformanceIssue[] = [];

    // Analyze FCP
    if (metrics.fcp > 3000) {
      newIssues.push({
        id: 'fcp-slow',
        type: 'critical',
        title: 'Slow First Contentful Paint',
        description: `FCP is ${Math.round(metrics.fcp)}ms, which is above the recommended 3000ms threshold.`,
        impact: 'High - Users may perceive the page as slow to load',
        suggestion: 'Optimize critical rendering path, reduce render-blocking resources, and optimize server response time.',
        priority: 1
      });
    }

    // Analyze LCP
    if (metrics.lcp > 4000) {
      newIssues.push({
        id: 'lcp-slow',
        type: 'critical',
        title: 'Slow Largest Contentful Paint',
        description: `LCP is ${Math.round(metrics.lcp)}ms, which is above the recommended 4000ms threshold.`,
        impact: 'High - Users may perceive the page as slow to load',
        suggestion: 'Optimize images, reduce render-blocking resources, and improve server response time.',
        priority: 1
      });
    }

    // Analyze FID
    if (metrics.fid > 300) {
      newIssues.push({
        id: 'fid-slow',
        type: 'warning',
        title: 'Slow First Input Delay',
        description: `FID is ${Math.round(metrics.fid)}ms, which is above the recommended 300ms threshold.`,
        impact: 'Medium - Users may experience lag when interacting with the page',
        suggestion: 'Reduce JavaScript execution time, break up long tasks, and optimize event handlers.',
        priority: 2
      });
    }

    // Analyze CLS
    if (metrics.cls > 0.25) {
      newIssues.push({
        id: 'cls-high',
        type: 'warning',
        title: 'High Cumulative Layout Shift',
        description: `CLS is ${metrics.cls.toFixed(3)}, which is above the recommended 0.25 threshold.`,
        impact: 'Medium - Users may experience visual instability',
        suggestion: 'Set explicit dimensions for images and other media elements, avoid inserting content above existing content.',
        priority: 2
      });
    }

    // Analyze TTFB
    if (metrics.ttfb > 1800) {
      newIssues.push({
        id: 'ttfb-slow',
        type: 'warning',
        title: 'Slow Time to First Byte',
        description: `TTFB is ${Math.round(metrics.ttfb)}ms, which is above the recommended 1800ms threshold.`,
        impact: 'Medium - Server response time is slow',
        suggestion: 'Optimize server performance, use CDN, and implement caching strategies.',
        priority: 3
      });
    }

    // Analyze memory usage
    if (metrics.memory.used > metrics.memory.limit * 0.8) {
      newIssues.push({
        id: 'memory-high',
        type: 'warning',
        title: 'High Memory Usage',
        description: `Memory usage is ${metrics.memory.used}MB, which is ${Math.round((metrics.memory.used / metrics.memory.limit) * 100)}% of the limit.`,
        impact: 'Medium - May cause performance degradation or crashes',
        suggestion: 'Optimize memory usage, implement memory leaks detection, and consider code splitting.',
        priority: 3
      });
    }

    // Sort issues by priority
    newIssues.sort((a, b) => a.priority - b.priority);
    setIssues(newIssues);
  }, [metrics]);

  const performAutoOptimization = useCallback(() => {
    const optimizations: string[] = [];
    const timestamp = new Date().toLocaleTimeString();

    // Auto-optimize based on issues
    issues.forEach(issue => {
      switch (issue.id) {
        case 'fcp-slow':
        case 'lcp-slow':
          // Preload critical resources
          preloadCriticalResources();
          optimizations.push(`Preloaded critical resources at ${timestamp}`);
          break;
        case 'memory-high':
          // Suggest garbage collection
          if ('gc' in window) {
            (window as any).gc();
            optimizations.push(`Triggered garbage collection at ${timestamp}`);
          }
          break;
        case 'ttfb-slow':
          // Preconnect to external domains
          preconnectToExternalDomains();
          optimizations.push(`Preconnected to external domains at ${timestamp}`);
          break;
      }
    });

    if (optimizations.length > 0) {
      setOptimizationHistory(prev => [...prev.slice(-9), ...optimizations]);
    }
  }, [issues]);

  const preloadCriticalResources = () => {
    // Preload critical CSS and JS
    const criticalResources = [
      '/css/critical.css',
      '/js/critical.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  };

  const preconnectToExternalDomains = () => {
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-6 h-6 text-green-500" />;
    if (score >= 70) return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
    return <AlertTriangle className="w-6 h-6 text-red-500" />;
  };

  const getMetricStatus = (value: number, threshold: number, unit: string) => {
    const isGood = value <= threshold;
    return {
      color: isGood ? 'text-green-500' : 'text-red-500',
      icon: isGood ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />
    };
  };

  return (
    <>
      {/* Performance Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-20 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open performance monitor"
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Activity className="w-8 h-8" />
                    <div>
                      <h2 className="text-2xl font-bold">Performance Monitor</h2>
                      <p className="text-blue-100">Real-time performance insights and optimization</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className={`text-3xl font-bold ${getScoreColor(metrics.score)}`}>
                        {metrics.score}
                      </div>
                      <div className="text-sm text-blue-100">Performance Score</div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:text-blue-200 transition-colors"
                      aria-label="Close performance panel"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="bg-gray-50 dark:bg-gray-700 p-4 border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isMonitoring}
                        onChange={(e) => setIsMonitoring(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium">Live Monitoring</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={autoOptimize}
                        onChange={(e) => setAutoOptimize(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium">Auto-Optimize</span>
                    </label>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    Last update: {lastUpdate.toLocaleTimeString()}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Core Web Vitals */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      Core Web Vitals
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="font-medium">FCP</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`font-mono ${getMetricStatus(metrics.fcp, 1800, 'ms').color}`}>
                            {Math.round(metrics.fcp)}ms
                          </span>
                          {getMetricStatus(metrics.fcp, 1800, 'ms').icon}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-gray-500" />
                          <span className="font-medium">LCP</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`font-mono ${getMetricStatus(metrics.lcp, 2500, 'ms').color}`}>
                            {Math.round(metrics.lcp)}ms
                          </span>
                          {getMetricStatus(metrics.lcp, 2500, 'ms').icon}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-gray-500" />
                          <span className="font-medium">FID</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`font-mono ${getMetricStatus(metrics.fid, 100, 'ms').color}`}>
                            {Math.round(metrics.fid)}ms
                          </span>
                          {getMetricStatus(metrics.fid, 100, 'ms').icon}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-gray-500" />
                          <span className="font-medium">CLS</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`font-mono ${getMetricStatus(metrics.cls, 0.1, '').color}`}>
                            {metrics.cls.toFixed(3)}
                          </span>
                          {getMetricStatus(metrics.cls, 0.1, '').icon}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Wifi className="w-4 h-4 text-gray-500" />
                          <span className="font-medium">TTFB</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`font-mono ${getMetricStatus(metrics.ttfb, 800, 'ms').color}`}>
                            {Math.round(metrics.ttfb)}ms
                          </span>
                          {getMetricStatus(metrics.ttfb, 800, 'ms').icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* System Resources */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-green-600" />
                      System Resources
                    </h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Memory Usage</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {metrics.memory.used}MB / {metrics.memory.limit}MB
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${
                              metrics.memory.used / metrics.memory.limit > 0.8 
                                ? 'bg-red-500' 
                                : metrics.memory.used / metrics.memory.limit > 0.6 
                                ? 'bg-yellow-500' 
                                : 'bg-green-500'
                            }`}
                            style={{ width: `${Math.min((metrics.memory.used / metrics.memory.limit) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                      
                      <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Network</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {metrics.network.effectiveType.toUpperCase()}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>Downlink: {metrics.network.downlink} Mbps</div>
                          <div>RTT: {metrics.network.rtt} ms</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Issues */}
                {issues.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      Performance Issues ({issues.length})
                    </h3>
                    <div className="space-y-3">
                      {issues.map((issue) => (
                        <div
                          key={issue.id}
                          className={`p-4 rounded-lg border-l-4 ${
                            issue.type === 'critical' 
                              ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                              : issue.type === 'warning' 
                              ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                              : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                {issue.title}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                {issue.description}
                              </p>
                              <div className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                                <strong>Impact:</strong> {issue.impact}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-500">
                                <strong>Suggestion:</strong> {issue.suggestion}
                              </div>
                            </div>
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                              issue.type === 'critical' 
                                ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                : issue.type === 'warning' 
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            }`}>
                              {issue.type.toUpperCase()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Optimization History */}
                {optimizationHistory.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <RefreshCw className="w-5 h-5 text-green-600" />
                      Recent Optimizations
                    </h3>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {optimizationHistory.map((optimization, index) => (
                          <div key={index} className="text-sm text-gray-600 dark:text-gray-400">
                            • {optimization}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceOptimizer;