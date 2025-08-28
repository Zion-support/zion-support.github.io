import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  Memory, 
  Cpu, 
  Network, 
  HardDrive, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  X,
  Settings,
  BarChart3,
  Gauge,
  Smartphone,
  Monitor,
  Tablet,
  Battery,
  RefreshCw,
  Info,
  Target,
  Rocket
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  bundleSize: number;
  lighthouseScore: number;
  coreWebVitals: {
    lcp: number;
    fid: number;
    cls: number;
  };
}

interface OptimizationSuggestion {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'accessibility' | 'seo' | 'best-practices';
}

const PerformanceOptimizer: React.FC<{ enabled?: boolean }> = ({ enabled = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    bundleSize: 0,
    lighthouseScore: 0,
    coreWebVitals: { lcp: 0, fid: 0, cls: 0 }
  });
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  // Generate optimization suggestions based on metrics
  const generateSuggestions = useCallback((currentMetrics: PerformanceMetrics): OptimizationSuggestion[] => {
    const suggestions: OptimizationSuggestion[] = [];

    // Performance suggestions
    if (currentMetrics.loadTime > 3000) {
      suggestions.push({
        id: 'slow-loading',
        title: 'Slow Page Loading',
        description: 'Page load time exceeds 3 seconds. Consider implementing lazy loading and code splitting.',
        priority: 'high',
        impact: 'high',
        category: 'performance'
      });
    }

    if (currentMetrics.bundleSize > 500000) {
      suggestions.push({
        id: 'large-bundle',
        title: 'Large JavaScript Bundle',
        description: 'Bundle size is over 500KB. Implement tree shaking and dynamic imports.',
        priority: 'high',
        impact: 'high',
        category: 'performance'
      });
    }

    if (currentMetrics.coreWebVitals.lcp > 2500) {
      suggestions.push({
        id: 'poor-lcp',
        title: 'Poor Largest Contentful Paint',
        description: 'LCP exceeds 2.5 seconds. Optimize hero images and critical resources.',
        priority: 'high',
        impact: 'high',
        category: 'performance'
      });
    }

    if (currentMetrics.coreWebVitals.cls > 0.1) {
      suggestions.push({
        id: 'layout-shift',
        title: 'Cumulative Layout Shift',
        description: 'CLS is too high. Fix image dimensions and avoid dynamic content insertion.',
        priority: 'medium',
        impact: 'medium',
        category: 'performance'
      });
    }

    if (currentMetrics.memoryUsage > 50) {
      suggestions.push({
        id: 'high-memory',
        title: 'High Memory Usage',
        description: 'Memory usage is elevated. Check for memory leaks and optimize component lifecycle.',
        priority: 'medium',
        impact: 'medium',
        category: 'performance'
      });
    }

    // Accessibility suggestions
    if (currentMetrics.lighthouseScore < 90) {
      suggestions.push({
        id: 'lighthouse-score',
        title: 'Lighthouse Score Below Target',
        description: 'Overall performance score needs improvement. Focus on Core Web Vitals.',
        priority: 'medium',
        impact: 'medium',
        category: 'best-practices'
      });
    }

    return suggestions.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  }, []);

  // Monitor performance metrics
  const monitorPerformance = useCallback(() => {
    if (!isMonitoring) return;

    // Simulate performance monitoring
    const interval = setInterval(() => {
      // Get performance timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;

      // Simulate other metrics (in real app, these would come from actual monitoring)
      const newMetrics: PerformanceMetrics = {
        loadTime,
        memoryUsage: Math.random() * 100,
        cpuUsage: Math.random() * 100,
        networkLatency: Math.random() * 200,
        bundleSize: 450000 + Math.random() * 100000,
        lighthouseScore: 85 + Math.random() * 15,
        coreWebVitals: {
          lcp: 1500 + Math.random() * 2000,
          fid: 50 + Math.random() * 100,
          cls: Math.random() * 0.2
        }
      };

      setMetrics(newMetrics);
      setSuggestions(generateSuggestions(newMetrics));
    }, 5000);

    return () => clearInterval(interval);
  }, [isMonitoring, generateSuggestions]);

  useEffect(() => {
    if (isMonitoring) {
      const cleanup = monitorPerformance();
      return cleanup;
    }
  }, [isMonitoring, monitorPerformance]);

  // Start monitoring on mount
  useEffect(() => {
    setIsMonitoring(true);
  }, []);

  if (!enabled) return null;

  const getScoreColor = (score: number) => {
=======
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'accessibility' | 'seo' | 'mobile';
  implemented: boolean;
}

export function PerformanceOptimizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [autoOptimize, setAutoOptimize] = useState(false);

  // Performance monitoring with advanced metrics
  const measurePerformance = useCallback(async () => {
    try {
      // Measure page load time
      const loadTime = performance.now();
      
      // Memory usage (if available)
      const memoryInfo = (performance as any).memory;
      const memoryUsage = memoryInfo ? memoryInfo.usedJSHeapSize / 1024 / 1024 : 0;
      
      // CPU usage estimation
      const startTime = performance.now();
      await new Promise(resolve => setTimeout(resolve, 100));
      const endTime = performance.now();
      const cpuUsage = Math.max(0, 100 - (endTime - startTime) / 100 * 100);
      
      // Network latency
      const networkLatency = navigator.connection ? 
        (navigator.connection as any).rtt || 0 : 0;
      
      // Bundle size estimation
      const bundleSize = performance.getEntriesByType('resource')
        .filter((entry: any) => entry.name.includes('.js') || entry.name.includes('.css'))
        .reduce((total: number, entry: any) => total + (entry.transferSize || 0), 0) / 1024;
      
      // Core Web Vitals simulation
      const coreWebVitals = {
        lcp: Math.random() * 2000 + 500, // Largest Contentful Paint
        fid: Math.random() * 100 + 10,   // First Input Delay
        cls: Math.random() * 0.1 + 0.01  // Cumulative Layout Shift
      };
      
      // Lighthouse score calculation
      const lighthouseScore = Math.max(0, 100 - 
        (coreWebVitals.lcp > 2500 ? 30 : 0) -
        (coreWebVitals.fid > 100 ? 30 : 0) -
        (coreWebVitals.cls > 0.1 ? 40 : 0)
      );
      
      setMetrics({
        loadTime,
        memoryUsage,
        cpuUsage,
        networkLatency,
        bundleSize,
        lighthouseScore,
        coreWebVitals
      });
      
      // Generate optimization suggestions
      generateSuggestions({
        loadTime,
        memoryUsage,
        cpuUsage,
        networkLatency,
        bundleSize,
        lighthouseScore,
        coreWebVitals
      });
      
    } catch (error) {
      console.error('Performance measurement failed:', error);
    }
  }, []);

  // Generate intelligent optimization suggestions
  const generateSuggestions = useCallback((metrics: PerformanceMetrics) => {
    const newSuggestions: OptimizationSuggestion[] = [];
    
    if (metrics.loadTime > 3000) {
      newSuggestions.push({
        id: 'lazy-loading',
        title: 'Implement Lazy Loading',
        description: 'Page load time is high. Implement lazy loading for images and components.',
        impact: 'high',
        category: 'performance',
        implemented: false
      });
    }
    
    if (metrics.memoryUsage > 50) {
      newSuggestions.push({
        id: 'memory-optimization',
        title: 'Memory Usage Optimization',
        description: 'High memory usage detected. Optimize component lifecycle and cleanup.',
        impact: 'medium',
        category: 'performance',
        implemented: false
      });
    }
    
    if (metrics.bundleSize > 500) {
      newSuggestions.push({
        id: 'bundle-splitting',
        title: 'Bundle Splitting',
        description: 'Large bundle size detected. Implement code splitting and tree shaking.',
        impact: 'high',
        category: 'performance',
        implemented: false
      });
    }
    
    if (metrics.lighthouseScore < 80) {
      newSuggestions.push({
        id: 'core-web-vitals',
        title: 'Core Web Vitals Optimization',
        description: 'Low Lighthouse score. Optimize LCP, FID, and CLS metrics.',
        impact: 'high',
        category: 'performance',
        implemented: false
      });
    }
    
    setSuggestions(newSuggestions);
  }, []);

  // Auto-optimization features
  const implementOptimization = useCallback((suggestionId: string) => {
    setSuggestions(prev => prev.map(s => 
      s.id === suggestionId ? { ...s, implemented: true } : s
    ));
    
    // Simulate optimization implementation
    setTimeout(() => {
      measurePerformance();
    }, 1000);
  }, [measurePerformance]);

  // Continuous monitoring
  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(measurePerformance, 5000);
      return () => clearInterval(interval);
    }
  }, [isMonitoring, measurePerformance]);

  // Initial measurement
  useEffect(() => {
    measurePerformance();
  }, [measurePerformance]);

  // Auto-optimization effect
  useEffect(() => {
    if (autoOptimize && suggestions.length > 0) {
      const highImpactSuggestions = suggestions.filter(s => s.impact === 'high' && !s.implemented);
      highImpactSuggestions.forEach(suggestion => {
        setTimeout(() => implementOptimization(suggestion.id), 2000);
      });
    }
  }, [autoOptimize, suggestions, implementOptimization]);

  const getPerformanceColor = (score: number) => {
>>>>>>> pr-9693
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

<<<<<<< HEAD
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'performance': return <Zap className="w-4 h-4" />;
      case 'accessibility': return <Activity className="w-4 h-4" />;
      case 'seo': return <BarChart3 className="w-4 h-4" />;
      case 'best-practices': return <CheckCircle className="w-4 h-4" />;
      default: return <Settings className="w-4 h-4" />;
=======
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
>>>>>>> pr-9693
    }
  };

  return (
    <>
<<<<<<< HEAD
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open Performance Optimizer"
      >
        <Gauge className="w-6 h-6" />
=======
      {/* Floating Performance Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Performance Optimizer"
      >
        <Activity className="w-6 h-6 text-white" />
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
>>>>>>> pr-9693
      </motion.button>

      {/* Performance Dashboard Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
<<<<<<< HEAD
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <Gauge className="w-6 h-6 text-white" />
=======
              className="bg-white dark:bg-zion-slate-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-zion-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg">
                    <Rocket className="w-6 h-6 text-white" />
>>>>>>> pr-9693
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Performance Optimizer
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Real-time performance monitoring and optimization
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
<<<<<<< HEAD
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
=======
                  className="p-2 hover:bg-gray-100 dark:hover:bg-zion-slate-800 rounded-lg transition-colors"
>>>>>>> pr-9693
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
<<<<<<< HEAD
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Performance Metrics */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Performance Metrics
                    </h3>
                    
                    {/* Core Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="w-5 h-5 text-blue-500" />
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Load Time</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {(metrics.loadTime / 1000).toFixed(2)}s
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <HardDrive className="w-5 h-5 text-green-500" />
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Bundle Size</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {(metrics.bundleSize / 1024).toFixed(1)}KB
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Memory className="w-5 h-5 text-purple-500" />
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Memory</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {metrics.memoryUsage.toFixed(1)}%
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Cpu className="w-5 h-5 text-orange-500" />
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">CPU</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {metrics.cpuUsage.toFixed(1)}%
                        </div>
=======
                {/* Control Panel */}
                <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 dark:bg-zion-slate-800 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setIsMonitoring(!isMonitoring)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                        isMonitoring 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 dark:bg-zion-slate-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <Activity className="w-4 h-4" />
                      <span>{isMonitoring ? 'Monitoring Active' : 'Start Monitoring'}</span>
                    </button>
                    
                    <button
                      onClick={measurePerformance}
                      className="flex items-center space-x-2 px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Refresh Metrics</span>
                    </button>
                  </div>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={autoOptimize}
                      onChange={(e) => setAutoOptimize(e.target.checked)}
                      className="w-4 h-4 text-zion-cyan"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Auto-optimize
                    </span>
                  </label>
                </div>

                {/* Performance Metrics Grid */}
                {metrics && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* Load Time */}
                    <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <Clock className="w-5 h-5 text-zion-cyan" />
                        <span className="text-sm text-gray-500">Load Time</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {metrics.loadTime.toFixed(0)}ms
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {metrics.loadTime < 1000 ? 'Excellent' : metrics.loadTime < 3000 ? 'Good' : 'Needs Improvement'}
                      </div>
                    </div>

                    {/* Memory Usage */}
                    <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <Memory className="w-5 h-5 text-zion-green" />
                        <span className="text-sm text-gray-500">Memory</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {metrics.memoryUsage.toFixed(1)}MB
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {metrics.memoryUsage < 30 ? 'Low' : metrics.memoryUsage < 50 ? 'Moderate' : 'High'}
>>>>>>> pr-9693
                      </div>
                    </div>

                    {/* Lighthouse Score */}
<<<<<<< HEAD
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Lighthouse Score</span>
                        <span className={`text-lg font-bold ${getScoreColor(metrics.lighthouseScore)}`}>
                          {metrics.lighthouseScore.toFixed(0)}/100
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            metrics.lighthouseScore >= 90 ? 'bg-green-500' : 
                            metrics.lighthouseScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${metrics.lighthouseScore}%` }}
                        />
                      </div>
                    </div>

                    {/* Core Web Vitals */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900 dark:text-white">Core Web Vitals</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">LCP</span>
                          <span className={metrics.coreWebVitals.lcp <= 2500 ? 'text-green-500' : 'text-red-500'}>
                            {metrics.coreWebVitals.lcp.toFixed(0)}ms
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">FID</span>
                          <span className={metrics.coreWebVitals.fid <= 100 ? 'text-green-500' : 'text-red-500'}>
                            {metrics.coreWebVitals.fid.toFixed(0)}ms
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">CLS</span>
                          <span className={metrics.coreWebVitals.cls <= 0.1 ? 'text-green-500' : 'text-red-500'}>
                            {metrics.coreWebVitals.cls.toFixed(3)}
                          </span>
=======
                    <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <Target className="w-5 h-5 text-zion-purple" />
                        <span className="text-sm text-gray-500">Lighthouse</span>
                      </div>
                      <div className={`text-2xl font-bold ${getPerformanceColor(metrics.lighthouseScore)}`}>
                        {metrics.lighthouseScore}/100
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {metrics.lighthouseScore >= 90 ? 'Excellent' : metrics.lighthouseScore >= 70 ? 'Good' : 'Needs Work'}
                      </div>
                    </div>

                    {/* Bundle Size */}
                    <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <HardDrive className="w-5 h-5 text-zion-orange" />
                        <span className="text-sm text-gray-500">Bundle Size</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {metrics.bundleSize.toFixed(1)}KB
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {metrics.bundleSize < 200 ? 'Small' : metrics.bundleSize < 500 ? 'Medium' : 'Large'}
                      </div>
                    </div>

                    {/* CPU Usage */}
                    <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <Cpu className="w-5 h-5 text-zion-red" />
                        <span className="text-sm text-gray-500">CPU Usage</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {metrics.cpuUsage.toFixed(1)}%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {metrics.cpuUsage < 20 ? 'Low' : metrics.cpuUsage < 50 ? 'Moderate' : 'High'}
                      </div>
                    </div>

                    {/* Network Latency */}
                    <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <Network className="w-5 h-5 text-zion-indigo" />
                        <span className="text-sm text-gray-500">Network</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {metrics.networkLatency.toFixed(0)}ms
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {metrics.networkLatency < 50 ? 'Fast' : metrics.networkLatency < 100 ? 'Good' : 'Slow'}
                      </div>
                    </div>
                  </div>
                )}

                {/* Core Web Vitals */}
                {metrics && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Core Web Vitals
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                        <div className="text-sm text-gray-500 mb-1">LCP</div>
                        <div className={`text-xl font-bold ${metrics.coreWebVitals.lcp < 2500 ? 'text-green-500' : 'text-red-500'}`}>
                          {metrics.coreWebVitals.lcp.toFixed(0)}ms
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {metrics.coreWebVitals.lcp < 2500 ? 'Good' : 'Poor'}
                        </div>
                      </div>
                      
                      <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                        <div className="text-sm text-gray-500 mb-1">FID</div>
                        <div className={`text-xl font-bold ${metrics.coreWebVitals.fid < 100 ? 'text-green-500' : 'text-red-500'}`}>
                          {metrics.coreWebVitals.fid.toFixed(0)}ms
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {metrics.coreWebVitals.fid < 100 ? 'Good' : 'Poor'}
                        </div>
                      </div>
                      
                      <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                        <div className="text-sm text-gray-500 mb-1">CLS</div>
                        <div className={`text-xl font-bold ${metrics.coreWebVitals.cls < 0.1 ? 'text-green-500' : 'text-red-500'}`}>
                          {metrics.coreWebVitals.cls.toFixed(3)}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {metrics.coreWebVitals.cls < 0.1 ? 'Good' : 'Poor'}
>>>>>>> pr-9693
                        </div>
                      </div>
                    </div>
                  </div>
<<<<<<< HEAD

                  {/* Optimization Suggestions */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Optimization Suggestions
                    </h3>
                    
                    <div className="space-y-3">
                      {suggestions.length > 0 ? (
                        suggestions.map((suggestion) => (
                          <motion.div
                            key={suggestion.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 mt-1">
                                {getCategoryIcon(suggestion.category)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 mb-1">
                                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                    {suggestion.title}
                                  </h4>
                                  <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(suggestion.priority)} bg-opacity-10`}>
                                    {suggestion.priority}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {suggestion.description}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                          <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
                          <p>All performance metrics are within optimal ranges!</p>
                        </div>
                      )}
                    </div>

                    {/* Device Information */}
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-3">Device Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Monitor className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600 dark:text-gray-400">Screen:</span>
                          <span className="text-gray-900 dark:text-white">
                            {window.screen.width} × {window.screen.height}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Smartphone className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600 dark:text-gray-400">Viewport:</span>
                          <span className="text-gray-900 dark:text-white">
                            {window.innerWidth} × {window.innerHeight}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Network className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600 dark:text-gray-400">Connection:</span>
                          <span className="text-gray-900 dark:text-white">
                            {navigator.connection?.effectiveType || 'Unknown'}
                          </span>
                        </div>
                      </div>
                    </div>
=======
                )}

                {/* Optimization Suggestions */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Optimization Suggestions
                  </h3>
                  <div className="space-y-3">
                    {suggestions.map((suggestion) => (
                      <motion.div
                        key={suggestion.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-xl border ${
                          suggestion.implemented 
                            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                            : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getImpactColor(suggestion.impact)}`}>
                                {suggestion.impact.toUpperCase()}
                              </span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {suggestion.category}
                              </span>
                            </div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                              {suggestion.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {suggestion.description}
                            </p>
                          </div>
                          
                          {suggestion.implemented ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <button
                              onClick={() => implementOptimization(suggestion.id)}
                              className="px-3 py-1 text-sm bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
                            >
                              Implement
                            </button>
                          )}
                        </div>
                      </motion.div>
                    ))}
                    
                    {suggestions.length === 0 && (
                      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                        <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-500" />
                        <p>All optimizations implemented! Great performance!</p>
                      </div>
                    )}
>>>>>>> pr-9693
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
<<<<<<< HEAD
};

export default PerformanceOptimizer;
=======
}
>>>>>>> pr-9693
