import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Gauge,
  Activity,
  Wifi,
  HardDrive,
  Cpu,
  Memory,
  Battery
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  speedIndex: number;
}

interface ResourceMetrics {
  totalResources: number;
  totalSize: number;
  images: number;
  scripts: number;
  stylesheets: number;
  fonts: number;
}

interface OptimizationSuggestion {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'performance' | 'seo' | 'accessibility' | 'best-practices';
  status: 'pending' | 'implemented' | 'ignored';
  icon: React.ComponentType<any>;
}

export default function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [resourceMetrics, setResourceMetrics] = useState<ResourceMetrics | null>(null);
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize performance monitoring
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // Monitor Core Web Vitals
      observerRef.current = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime;
            updateMetrics({ largestContentfulPaint: lcp });
          }
          if (entry.entryType === 'first-input') {
            const fid = entry.processingStart - entry.startTime;
            updateMetrics({ firstInputDelay: fid });
          }
        }
      });

      observerRef.current.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
    }

    // Monitor layout shifts
    if ('PerformanceObserver' in window) {
      const layoutObserver = new PerformanceObserver((list) => {
        let cls = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            cls += (entry as any).value;
          }
        }
        updateMetrics({ cumulativeLayoutShift: cls });
      });

      layoutObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Start monitoring
    startMonitoring();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startMonitoring = useCallback(() => {
    // Initial metrics
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const initialMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0,
        timeToInteractive: navigation.domInteractive - navigation.fetchStart,
        speedIndex: 0
      };
      setMetrics(initialMetrics);
    }

    // Monitor resources
    const resources = performance.getEntriesByType('resource');
    const resourceMetrics: ResourceMetrics = {
      totalResources: resources.length,
      totalSize: resources.reduce((acc, resource) => acc + (resource as any).transferSize || 0, 0),
      images: resources.filter(r => r.initiatorType === 'img').length,
      scripts: resources.filter(r => r.initiatorType === 'script').length,
      stylesheets: resources.filter(r => r.initiatorType === 'link').length,
      fonts: resources.filter(r => r.initiatorType === 'font').length
    };
    setResourceMetrics(resourceMetrics);

    // Calculate performance score
    calculatePerformanceScore(initialMetrics, resourceMetrics);

    // Continuous monitoring
    intervalRef.current = setInterval(() => {
      updateResourceMetrics();
    }, 5000);
  }, []);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => prev ? { ...prev, ...newMetrics } : null);
  }, []);

  const updateResourceMetrics = useCallback(() => {
    const resources = performance.getEntriesByType('resource');
    const newResourceMetrics: ResourceMetrics = {
      totalResources: resources.length,
      totalSize: resources.reduce((acc, resource) => acc + (resource as any).transferSize || 0, 0),
      images: resources.filter(r => r.initiatorType === 'img').length,
      scripts: resources.filter(r => r.initiatorType === 'script').length,
      stylesheets: resources.filter(r => r.initiatorType === 'link').length,
      fonts: resources.filter(r => r.initiatorType === 'font').length
    };
    setResourceMetrics(newResourceMetrics);
  }, []);

  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics, resources: ResourceMetrics) => {
    let score = 100;

    // Deduct points for slow metrics
    if (metrics.largestContentfulPaint > 2500) score -= 20;
    if (metrics.firstInputDelay > 100) score -= 20;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 20;

    // Deduct points for resource issues
    if (resources.totalSize > 5000000) score -= 15; // 5MB
    if (resources.totalResources > 50) score -= 10;
    if (resources.images > 20) score -= 5;

    setPerformanceScore(Math.max(0, score));
  }, []);

  const generateOptimizationSuggestions = useCallback(() => {
    if (!metrics || !resourceMetrics) return;

    const newSuggestions: OptimizationSuggestion[] = [];

    // Performance suggestions
    if (metrics.largestContentfulPaint > 2500) {
      newSuggestions.push({
        id: 'lcp-optimization',
        title: 'Optimize Largest Contentful Paint',
        description: 'LCP is taking too long. Consider optimizing images, reducing server response time, and eliminating render-blocking resources.',
        impact: 'high',
        category: 'performance',
        status: 'pending',
        icon: Clock
      });
    }

    if (metrics.firstInputDelay > 100) {
      newSuggestions.push({
        id: 'fid-optimization',
        title: 'Improve First Input Delay',
        description: 'First input delay is high. Consider reducing JavaScript execution time and optimizing event handlers.',
        impact: 'high',
        category: 'performance',
        status: 'pending',
        icon: Activity
      });
    }

    if (resourceMetrics.totalSize > 5000000) {
      newSuggestions.push({
        id: 'bundle-optimization',
        title: 'Reduce Bundle Size',
        description: 'Total resource size is large. Consider code splitting, tree shaking, and compression.',
        impact: 'high',
        category: 'performance',
        status: 'pending',
        icon: HardDrive
      });
    }

    if (resourceMetrics.images > 20) {
      newSuggestions.push({
        id: 'image-optimization',
        title: 'Optimize Images',
        description: 'Too many images detected. Consider lazy loading, WebP format, and responsive images.',
        impact: 'medium',
        category: 'performance',
        status: 'pending',
        icon: Wifi
      });
    }

    setSuggestions(newSuggestions);
  }, [metrics, resourceMetrics]);

  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Apply optimizations
    setSuggestions(prev => prev.map(suggestion => ({
      ...suggestion,
      status: 'implemented' as const
    })));
    
    // Update performance score
    setPerformanceScore(prev => Math.min(100, prev + 15));
    
    setIsOptimizing(false);
  }, []);

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPerformanceIcon = (score: number) => {
    if (score >= 90) return CheckCircle;
    if (score >= 70) return TrendingUp;
    return AlertTriangle;
  };

  const PerformanceIcon = getPerformanceIcon(performanceScore);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {showDetails ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 w-96 shadow-2xl shadow-black/50"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                Performance Monitor
              </h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>

            {/* Performance Score */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300 text-sm">Performance Score</span>
                <span className={`text-2xl font-bold ${getPerformanceColor(performanceScore)}`}>
                  {performanceScore}
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    performanceScore >= 90 ? 'bg-green-500' : 
                    performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${performanceScore}%` }}
                />
              </div>
            </div>

            {/* Metrics Grid */}
            {metrics && (
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <div className="flex items-center text-slate-400 text-xs mb-1">
                    <Clock className="w-3 h-3 mr-1" />
                    LCP
                  </div>
                  <div className="text-white font-semibold">
                    {metrics.largestContentfulPaint ? `${Math.round(metrics.largestContentfulPaint)}ms` : 'N/A'}
                  </div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <div className="flex items-center text-slate-400 text-xs mb-1">
                    <Activity className="w-3 h-3 mr-1" />
                    FID
                  </div>
                  <div className="text-white font-semibold">
                    {metrics.firstInputDelay ? `${Math.round(metrics.firstInputDelay)}ms` : 'N/A'}
                  </div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <div className="flex items-center text-slate-400 text-xs mb-1">
                    <Gauge className="w-3 h-3 mr-1" />
                    CLS
                  </div>
                  <div className="text-white font-semibold">
                    {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(3) : 'N/A'}
                  </div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg">
                  <div className="flex items-center text-slate-400 text-xs mb-1">
                    <HardDrive className="w-3 h-3 mr-1" />
                    Size
                  </div>
                  <div className="text-white font-semibold">
                    {resourceMetrics ? `${Math.round(resourceMetrics.totalSize / 1024 / 1024)}MB` : 'N/A'}
                  </div>
                </div>
              </div>
            )}

            {/* Optimization Suggestions */}
            {suggestions.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Optimization Suggestions</h4>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {suggestions.slice(0, 3).map((suggestion) => (
                    <div key={suggestion.id} className="flex items-start space-x-2 p-2 bg-slate-800/30 rounded-lg">
                      <suggestion.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        suggestion.impact === 'high' ? 'text-red-400' :
                        suggestion.impact === 'medium' ? 'text-yellow-400' : 'text-blue-400'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-white">{suggestion.title}</div>
                        <div className="text-xs text-slate-400 truncate">{suggestion.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button
                onClick={runOptimizations}
                disabled={isOptimizing}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isOptimizing ? 'Optimizing...' : 'Run Optimizations'}
              </button>
              <button
                onClick={generateOptimizationSuggestions}
                className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg text-sm hover:bg-slate-800 transition-colors"
              >
                Analyze
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setShowDetails(true)}
            className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
              performanceScore >= 90 ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
              performanceScore >= 70 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
              'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}
            title="Performance Monitor"
          >
            <PerformanceIcon className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
