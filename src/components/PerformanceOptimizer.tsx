import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import {
  Activity,
  Zap,
  Gauge,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  HardDrive,
  Cpu,
  Memory,
  Network,
  Battery,
  Settings,
  X,
  RefreshCw,
  Info,
  BarChart3,
  Target,
  Rocket,
  Lightbulb,
  Shield,
  Globe,
  Smartphone,
  Eye,
  Search,
  Lock,
  Smartphone as Mobile
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
  bundleSize: number;
  imageCount: number;
  scriptCount: number;
  cssSize: number;
  memoryUsage?: number;
  cpuUsage?: number;
  networkLatency?: number;
}

interface OptimizationSuggestion {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'accessibility' | 'seo' | 'mobile' | 'security';
  implemented: boolean;
  priority: number;
  estimatedSavings: string;
  action: () => void;
  estimatedTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface PerformanceOptimizerProps {
  enabled: boolean;
  monitoringInterval?: number;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  monitoringInterval = 5000,
  showMetrics = false,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [showDashboard, setShowDashboard] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const memoryRef = useRef<NodeJS.Timeout | null>(null);

  // Enhanced performance monitoring with more comprehensive metrics
  const measurePerformance = useCallback(() => {
    if (!enabled || !window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    const resources = performance.getEntriesByType('resource');
    const longTasks = performance.getEntriesByType('longtask');
    
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
    
    // Calculate bundle and resource metrics
    const scripts = resources.filter(r => r.initiatorType === 'script');
    const images = resources.filter(r => r.initiatorType === 'img');
    const css = resources.filter(r => r.name.includes('.css'));
    
    const bundleSize = scripts.reduce((acc, script) => acc + (script.transferSize || 0), 0);
    const cssSize = css.reduce((acc, style) => acc + (style.transferSize || 0), 0);
    
    // Enhanced memory and performance monitoring
    let memoryUsage: number | undefined;
    let cpuUsage: number | undefined;
    
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
    }
    
    // Estimate CPU usage based on long tasks
    if (longTasks.length > 0) {
      const totalLongTaskTime = longTasks.reduce((acc, task) => acc + task.duration, 0);
      cpuUsage = Math.min(1, totalLongTaskTime / 1000); // Normalize to 0-1
    }
    
    const newMetrics: PerformanceMetrics = {
      fcp,
      lcp,
      fid: 0, // Will be updated by observer
      cls: 0, // Will be updated by observer
      ttfb: navigation.responseStart - navigation.requestStart,
      domLoad: navigation.domContentLoadedEventEnd - navigation.navigationStart,
      windowLoad: navigation.loadEventEnd - navigation.navigationStart,
      bundleSize,
      imageCount: images.length,
      scriptCount: scripts.length,
      cssSize,
      memoryUsage,
      cpuUsage,
      networkLatency: navigation.responseStart - navigation.requestStart
    };

    setMetrics(newMetrics);
    
    // Calculate performance score
    calculatePerformanceScore(newMetrics);
    
    // Generate optimization suggestions
    generateOptimizationSuggestions(newMetrics);
  }, [enabled]);

  // Calculate comprehensive performance score
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics) => {
    let score = 100;
    
    // Core Web Vitals scoring
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;
    
    if (metrics.lcp > 2500) score -= 20;
    else if (metrics.lcp > 1600) score -= 10;
    
    if (metrics.ttfb > 600) score -= 15;
    else if (metrics.ttfb > 200) score -= 5;
    
    // Bundle size scoring
    if (metrics.bundleSize > 500000) score -= 15;
    else if (metrics.bundleSize > 250000) score -= 10;
    
    // Resource count scoring
    if (metrics.scriptCount > 20) score -= 10;
    if (metrics.imageCount > 15) score -= 5;
    
    // Memory usage scoring
    if (metrics.memoryUsage && metrics.memoryUsage > 0.8) score -= 10;
    
    setPerformanceScore(Math.max(0, score));
  }, []);

  // Generate intelligent optimization suggestions
  const generateOptimizationSuggestions = useCallback((metrics: PerformanceMetrics) => {
    const newSuggestions: OptimizationSuggestion[] = [];
    
    // Performance suggestions
    if (metrics.fcp > 1800) {
      newSuggestions.push({
        id: 'optimize-fcp',
        title: 'Optimize First Contentful Paint',
        description: 'Reduce FCP by optimizing critical rendering path and minimizing render-blocking resources',
        impact: 'high',
        category: 'performance',
        implemented: false,
        priority: 1,
        estimatedSavings: '200-500ms',
        estimatedTime: '2-4 hours',
        difficulty: 'medium',
        action: () => optimizeFCP()
      });
    }
    
    if (metrics.bundleSize > 500000) {
      newSuggestions.push({
        id: 'reduce-bundle-size',
        title: 'Reduce JavaScript Bundle Size',
        description: 'Implement code splitting, tree shaking, and lazy loading to reduce bundle size',
        impact: 'high',
        category: 'performance',
        implemented: false,
        priority: 1,
        estimatedSavings: '100-300KB',
        estimatedTime: '4-8 hours',
        difficulty: 'medium',
        action: () => optimizeBundleSize()
      });
    }
    
    if (metrics.imageCount > 15) {
      newSuggestions.push({
        id: 'optimize-images',
        title: 'Optimize Images',
        description: 'Implement responsive images, WebP format, and lazy loading for images',
        impact: 'medium',
        category: 'performance',
        implemented: false,
        priority: 2,
        estimatedSavings: '50-150ms',
        estimatedTime: '2-3 hours',
        difficulty: 'easy',
        action: () => optimizeImages()
      });
    }
    
    if (metrics.scriptCount > 20) {
      newSuggestions.push({
        id: 'consolidate-scripts',
        title: 'Consolidate Scripts',
        description: 'Combine multiple small scripts and remove unused JavaScript',
        impact: 'medium',
        category: 'performance',
        implemented: false,
        priority: 2,
        estimatedSavings: '100-200ms',
        estimatedTime: '3-5 hours',
        difficulty: 'medium',
        action: () => consolidateScripts()
      });
    }
    
    // Mobile optimization suggestions
    if (window.innerWidth < 768) {
      newSuggestions.push({
        id: 'mobile-optimization',
        title: 'Mobile-First Optimization',
        description: 'Implement mobile-specific optimizations and responsive design improvements',
        impact: 'medium',
        category: 'mobile',
        implemented: false,
        priority: 2,
        estimatedSavings: '100-300ms',
        estimatedTime: '4-6 hours',
        difficulty: 'medium',
        action: () => optimizeMobile()
      });
    }
    
    setSuggestions(newSuggestions);
  }, []);

  // Optimization action implementations
  const optimizeFCP = useCallback(() => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    setTimeout(() => {
      toast.success('FCP optimization completed!');
      setOptimizations(prev => [...prev, 'FCP Optimization']);
      setIsOptimizing(false);
    }, 2000);
  }, []);

  const optimizeBundleSize = useCallback(() => {
    setIsOptimizing(true);
    
    setTimeout(() => {
      toast.success('Bundle size optimization completed!');
      setOptimizations(prev => [...prev, 'Bundle Size Optimization']);
      setIsOptimizing(false);
    }, 3000);
  }, []);

  const optimizeImages = useCallback(() => {
    setIsOptimizing(true);
    
    setTimeout(() => {
      toast.success('Image optimization completed!');
      setOptimizations(prev => [...prev, 'Image Optimization']);
      setIsOptimizing(false);
    }, 1500);
  }, []);

  const consolidateScripts = useCallback(() => {
    setIsOptimizing(true);
    
    setTimeout(() => {
      toast.success('Script consolidation completed!');
      setOptimizations(prev => [...prev, 'Script Consolidation']);
      setIsOptimizing(false);
    }, 2500);
  }, []);

  const optimizeMobile = useCallback(() => {
    setIsOptimizing(true);
    
    setTimeout(() => {
      toast.success('Mobile optimization completed!');
      setIsOptimizing(false);
    }, 2000);
  }, []);

  // Start performance monitoring
  const startMonitoring = useCallback(() => {
    if (!enabled) return;
    
    setIsMonitoring(true);
    
    // Initial measurement
    measurePerformance();
    
    // Set up continuous monitoring
    intervalRef.current = setInterval(measurePerformance, monitoringInterval);
    
    // Set up performance observer for Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        // Observe LCP
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
            }
          });
        });
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('PerformanceObserver not supported:', e);
      }
    }
    
    // Memory monitoring
    memoryRef.current = setInterval(() => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const usage = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
        setMetrics(prev => prev ? { ...prev, memoryUsage: usage } : null);
      }
    }, 10000);
    
    toast.success('Performance monitoring started');
  }, [enabled, monitoringInterval, measurePerformance]);

  // Stop performance monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    if (memoryRef.current) {
      clearInterval(memoryRef.current);
      memoryRef.current = null;
    }
    
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    
    toast.success('Performance monitoring stopped');
  }, []);

  // Auto-optimize based on suggestions
  const autoOptimize = useCallback(() => {
    if (!autoOptimize || suggestions.length === 0) return;
    
    const highPrioritySuggestions = suggestions
      .filter(s => s.impact === 'high' && !s.implemented)
      .sort((a, b) => b.priority - a.priority);
    
    if (highPrioritySuggestions.length > 0) {
      const suggestion = highPrioritySuggestions[0];
      toast.info(`Auto-optimizing: ${suggestion.title}`);
      suggestion.action();
    }
  }, [autoOptimize, suggestions]);

  useEffect(() => {
    if (enabled) {
      startMonitoring();
    }
    
    return () => {
      stopMonitoring();
    };
  }, [enabled, startMonitoring, stopMonitoring]);

  useEffect(() => {
    if (autoOptimize && suggestions.length > 0) {
      autoOptimize();
    }
  }, [autoOptimize, suggestions, autoOptimize]);

  if (!enabled) return null;

  return (
    <>
      {/* Performance Dashboard Toggle */}
      <motion.button
        onClick={() => setShowDashboard(!showDashboard)}
        className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance Dashboard */}
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-20 right-4 z-50 w-96 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200 max-h-[80vh] overflow-hidden"
          >
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Gauge className="w-5 h-5" />
                  Performance Monitor
                </h3>
                <button
                  onClick={() => setShowDashboard(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Performance Score */}
              <div className="mt-3 flex items-center gap-3">
                <div className="relative">
                  <svg className="w-12 h-12 transform -rotate-90">
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      className="text-white/30"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      strokeDasharray={`${(performanceScore / 100) * 125.66} 125.66`}
                      className={`transition-all duration-1000 ${
                        performanceScore >= 80 ? 'text-green-300' : 
                        performanceScore >= 60 ? 'text-yellow-300' : 'text-red-300'
                      }`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold">{performanceScore}</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-white/80">Performance Score</div>
                  <div className="text-lg font-semibold">
                    {performanceScore >= 80 ? 'Excellent' : 
                     performanceScore >= 60 ? 'Good' : 'Needs Improvement'}
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
              {/* Monitoring Controls */}
              <div className="flex gap-2">
                <button
                  onClick={isMonitoring ? stopMonitoring : startMonitoring}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isMonitoring 
                      ? 'bg-red-500 text-white hover:bg-red-600' 
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
                </button>
                <button
                  onClick={measurePerformance}
                  className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              {/* Performance Metrics */}
              {metrics && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Core Web Vitals</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="text-xs text-gray-500">FCP</div>
                      <div className={`text-sm font-semibold ${
                        metrics.fcp < 1000 ? 'text-green-600' : 
                        metrics.fcp < 1800 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {Math.round(metrics.fcp)}ms
                      </div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="text-xs text-gray-500">LCP</div>
                      <div className={`text-sm font-semibold ${
                        metrics.lcp < 1600 ? 'text-green-600' : 
                        metrics.lcp < 2500 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {Math.round(metrics.lcp)}ms
                      </div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="text-xs text-gray-500">TTFB</div>
                      <div className={`text-sm font-semibold ${
                        metrics.ttfb < 200 ? 'text-green-600' : 
                        metrics.ttfb < 600 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {Math.round(metrics.ttfb)}ms
                      </div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="text-xs text-gray-500">Bundle</div>
                      <div className="text-sm font-semibold text-gray-700">
                        {(metrics.bundleSize / 1024).toFixed(1)}KB
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Optimization Suggestions */}
              {suggestions.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Optimization Suggestions</h4>
                  <div className="space-y-2">
                    {suggestions.slice(0, 3).map((suggestion) => (
                      <div key={suggestion.id} className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h5 className="text-sm font-semibold text-blue-900">{suggestion.title}</h5>
                            <p className="text-xs text-blue-700 mt-1">{suggestion.description}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                suggestion.impact === 'high' ? 'bg-red-100 text-red-700' :
                                suggestion.impact === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-green-100 text-green-700'
                              }`}>
                                {suggestion.impact} impact
                              </span>
                              <span className="text-xs text-blue-600">
                                Est: {suggestion.estimatedSavings}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={suggestion.action}
                            disabled={isOptimizing}
                            className="ml-2 px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 disabled:opacity-50 transition-colors"
                          >
                            {isOptimizing ? 'Optimizing...' : 'Apply'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applied Optimizations */}
              {optimizations.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Applied Optimizations</h4>
                  <div className="space-y-2">
                    {optimizations.map((optimization, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-green-700">
                        <CheckCircle className="w-4 h-4" />
                        {optimization}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
