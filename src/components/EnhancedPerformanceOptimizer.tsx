import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Info,
  Settings,
  RefreshCw
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  bundleSize: number;
  loadTime: number;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [showPanel, setShowPanel] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(async () => {
    if (!enabled) return;

    try {
      // Measure Core Web Vitals
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
      
      // Estimate bundle size
      const scripts = document.querySelectorAll('script[src]');
      const totalSize = Array.from(scripts).reduce((acc, script) => {
        const src = script.getAttribute('src');
        if (src && src.includes('js/')) {
          // Estimate based on chunk naming convention
          return acc + 50; // Rough estimate in KB
        }
        return acc;
      }, 0);

      const newMetrics: PerformanceMetrics = {
        fcp: Math.round(fcp),
        lcp: Math.round(lcp),
        fid: 0, // First Input Delay - would need real user interaction
        cls: 0, // Cumulative Layout Shift - would need real user interaction
        ttfb: Math.round(navigationEntry.responseStart - navigationEntry.requestStart),
        bundleSize: totalSize,
        loadTime: Math.round(navigationEntry.loadEventEnd - navigationEntry.loadEventStart)
      };

      setMetrics(newMetrics);
      
      // Auto-optimize if enabled
      if (autoOptimize) {
        await performAutoOptimizations(newMetrics);
      }
    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }
  }, [enabled, autoOptimize]);

  // Auto-optimization logic
  const performAutoOptimizations = useCallback(async (currentMetrics: PerformanceMetrics) => {
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    try {
      // Check for performance issues and suggest optimizations
      if (currentMetrics.fcp > 2000) {
        newOptimizations.push('First Contentful Paint is slow - consider optimizing critical CSS');
      }
      
      if (currentMetrics.lcp > 4000) {
        newOptimizations.push('Largest Contentful Paint is slow - optimize images and critical resources');
      }
      
      if (currentMetrics.bundleSize > 500) {
        newOptimizations.push('Bundle size is large - consider code splitting and tree shaking');
      }
      
      if (currentMetrics.ttfb > 600) {
        newOptimizations.push('Time to First Byte is slow - optimize server response');
      }

      setOptimizations(newOptimizations);
    } finally {
      setIsOptimizing(false);
    }
  }, []);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enabled) return;

    const criticalPaths = [
      '/src/pages/Home.tsx',
      '/src/components/AppHeader.tsx',
      '/src/components/Footer.tsx'
    ];

    criticalPaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'script';
      link.href = path;
      document.head.appendChild(link);
    });
  }, [enabled]);

  // Optimize images
  const optimizeImages = useCallback(() => {
    if (!enabled) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, [enabled]);

  // Bundle analyzer simulation
  const analyzeBundle = useCallback(() => {
    if (!enabled) return;

    const chunks = document.querySelectorAll('script[src*="js/"]');
    const chunkSizes: Record<string, number> = {};
    
    chunks.forEach(chunk => {
      const src = chunk.getAttribute('src');
      if (src) {
        const chunkName = src.split('/').pop()?.split('-')[0] || 'unknown';
        chunkSizes[chunkName] = (chunkSizes[chunkName] || 0) + 50; // Estimate
      }
    });

    console.log('Bundle Analysis:', chunkSizes);
  }, [enabled]);

  useEffect(() => {
    if (enabled) {
      // Initial measurement after page load
      const timer = setTimeout(measurePerformance, 1000);
      
      // Preload critical resources
      preloadCriticalResources();
      
      // Optimize images
      optimizeImages();
      
      // Analyze bundle
      analyzeBundle();

      return () => clearTimeout(timer);
    }
  }, [enabled, measurePerformance, preloadCriticalResources, optimizeImages, analyzeBundle]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    if (!metrics) return 0;
    
    let score = 100;
    
    if (metrics.fcp > 2000) score -= 20;
    if (metrics.lcp > 4000) score -= 25;
    if (metrics.ttfb > 600) score -= 15;
    if (metrics.bundleSize > 500) score -= 20;
    
    return Math.max(0, score);
  }, [metrics]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!enabled) return null;

  return (
    <>
      {/* Floating Performance Button */}
      <motion.button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed bottom-6 right-20 z-40 w-80 bg-slate-800/95 backdrop-blur-sm border border-cyan-400/30 rounded-2xl shadow-2xl"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                  Performance Monitor
                </h3>
                <button
                  onClick={() => setShowPanel(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Performance Score */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Performance Score</span>
                  <span className={`text-lg font-bold ${getScoreColor(performanceScore)}`}>
                    {performanceScore}/100
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

              {/* Metrics Display */}
              {showMetrics && metrics && (
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">FCP</span>
                    <span className={`font-mono ${metrics.fcp > 2000 ? 'text-red-400' : 'text-green-400'}`}>
                      {metrics.fcp}ms
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">LCP</span>
                    <span className={`font-mono ${metrics.lcp > 4000 ? 'text-red-400' : 'text-green-400'}`}>
                      {metrics.lcp}ms
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">TTFB</span>
                    <span className={`font-mono ${metrics.ttfb > 600 ? 'text-red-400' : 'text-green-400'}`}>
                      {metrics.ttfb}ms
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Bundle Size</span>
                    <span className={`font-mono ${metrics.bundleSize > 500 ? 'text-red-400' : 'text-green-400'}`}>
                      ~{metrics.bundleSize}KB
                    </span>
                  </div>
                </div>
              )}

              {/* Optimizations */}
              {optimizations.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-1" />
                    Optimizations
                  </h4>
                  <div className="space-y-2">
                    {optimizations.map((opt, index) => (
                      <div key={index} className="text-xs text-gray-300 bg-slate-700/50 p-2 rounded">
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={measurePerformance}
                  disabled={isOptimizing}
                  className="flex-1 flex items-center justify-center px-3 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-600 text-white text-sm rounded-lg transition-colors"
                >
                  {isOptimizing ? (
                    <RefreshCw className="w-4 h-4 animate-spin mr-1" />
                  ) : (
                    <Activity className="w-4 h-4 mr-1" />
                  )}
                  {isOptimizing ? 'Optimizing...' : 'Refresh'}
                </button>
                <button
                  onClick={analyzeBundle}
                  className="px-3 py-2 bg-slate-600 hover:bg-slate-700 text-white text-sm rounded-lg transition-colors"
                  title="Analyze Bundle"
                >
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedPerformanceOptimizer;