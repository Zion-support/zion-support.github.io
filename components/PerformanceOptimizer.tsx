import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  autoOptimize?: boolean;
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  showMetrics = false,
  autoOptimize = true,
  children
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [showOptimizationPanel, setShowOptimizationPanel] = useState(false);

  // Performance monitoring with throttling
  const measurePerformance = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        // Measure FCP
        const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0] as PerformanceEntry;
        const fcp = fcpEntry ? fcpEntry.startTime : 0;
        
        // Measure LCP
        const lcpEntry = performance.getEntriesByName('largest-contentful-paint')[0] as PerformanceEntry;
        const lcp = lcpEntry ? lcpEntry.startTime : 0;
        
        // Measure CLS
        let cls = 0;
        if ('PerformanceObserver' in window) {
          // CLS measurement would go here in a real implementation
          cls = 0.05; // Placeholder
        }
        
        // Measure FID
        let fid = 0;
        if ('PerformanceObserver' in window) {
          // FID measurement would go here in a real implementation
          fid = 50; // Placeholder
        }
        
        // Measure TTFB
        const ttfb = navigation.responseStart - navigation.requestStart;
        
        const { score, grade } = calculateScore(fcp, lcp, cls, fid, ttfb);
        
        setMetrics({
          fcp,
          lcp,
          cls,
          fid,
          ttfb,
          score,
          grade
        });
        
        setOptimizations(generateOptimizations({ fcp, lcp, cls, fid, ttfb, score, grade }));
      }
    }
  }, [calculateScore, generateOptimizations]);

  // Auto-optimize performance
  const autoOptimize = useCallback(async () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Apply optimizations
    if (metrics.score < 90) {
      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/css/critical.css'
      ];
      
      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'font';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
      
      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) img.loading = 'lazy';
        if (!img.decoding) img.decoding = 'async';
      });
    }
    
    setIsOptimizing(false);
    measurePerformance(); // Re-measure after optimization
  }, [metrics.score, measurePerformance]);

  useEffect(() => {
    // Initial measurement
    const timer = setTimeout(() => {
      measurePerformance();
      setIsVisible(true);
    }, 1000);
    
    // Set up performance observer for real-time monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            measurePerformance();
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('PerformanceObserver not supported');
      }
      
      return () => observer.disconnect();
    }
    
    return () => clearTimeout(timer);
  }, [measurePerformance]);

  // Get color based on grade
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-400';
      case 'A-': return 'text-green-400';
      case 'B': return 'text-yellow-400';
      case 'C': return 'text-orange-400';
      case 'D': return 'text-red-400';
      case 'F': return 'text-red-500';
      default: return 'text-gray-400';
    }
  };

  // Get background color based on grade
  const getGradeBgColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'bg-green-400/20';
      case 'A-': return 'bg-green-400/20';
      case 'B': return 'bg-yellow-400/20';
      case 'C': return 'bg-orange-400/20';
      case 'D': return 'bg-red-400/20';
      case 'F': return 'bg-red-500/20';
      default: return 'bg-gray-400/20';
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-black/80 backdrop-blur-xl rounded-xl border border-cyan-500/20 p-4 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-medium text-white">Performance Monitor</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`text-lg font-bold ${getGradeColor(metrics.grade)}`}>
            {metrics.grade}
          </span>
          <div className={`w-3 h-3 rounded-full ${getGradeBgColor(metrics.grade)}`} />
        </div>
      </div>

      {/* Score Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Score</span>
          <span>{metrics.score}/100</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <motion.div
            className={`h-2 rounded-full ${
              metrics.score >= 90 ? 'bg-green-500' :
              metrics.score >= 70 ? 'bg-yellow-500' :
              metrics.score >= 50 ? 'bg-orange-500' : 'bg-red-500'
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${metrics.score}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Quick Metrics */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="text-center">
          <div className="text-xs text-gray-400">FCP</div>
          <div className={`text-sm font-medium ${
            metrics.fcp <= 1500 ? 'text-green-400' :
            metrics.fcp <= 2500 ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {metrics.fcp.toFixed(0)}ms
          </div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-400">LCP</div>
          <div className={`text-sm font-medium ${
            metrics.lcp <= 2500 ? 'text-green-400' :
            metrics.lcp <= 4000 ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {metrics.lcp.toFixed(0)}ms
          </div>
        </div>
      </div>

      {/* Optimize Button */}
      <motion.button
        onClick={autoOptimize}
        disabled={isOptimizing || metrics.score >= 90}
        className={`w-full py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
          metrics.score >= 90
            ? 'bg-green-500/20 text-green-400 cursor-not-allowed'
            : 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
        }`}
        whileHover={metrics.score < 90 ? { scale: 1.02 } : {}}
        whileTap={metrics.score < 90 ? { scale: 0.98 } : {}}
      >
        {isOptimizing ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            <span>Optimizing...</span>
          </div>
        ) : metrics.score >= 90 ? (
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="w-4 h-4" />
            <span>Optimized</span>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <Zap className="w-4 h-4" />
            <span>Auto-Optimize</span>
          </div>
        )}
      </motion.button>

      {/* Detailed Metrics (Conditional) */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-gray-700"
          >
            <h4 className="text-sm font-medium text-white mb-3">Detailed Metrics</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">CLS:</span>
                <span className={metrics.cls <= 0.1 ? 'text-green-400' : 'text-red-400'}>
                  {metrics.cls.toFixed(3)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">FID:</span>
                <span className={metrics.fid <= 100 ? 'text-green-400' : 'text-red-400'}>
                  {metrics.fid}ms
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">TTFB:</span>
                <span className={metrics.ttfb <= 600 ? 'text-green-400' : 'text-red-400'}>
                  {metrics.ttfb}ms
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

            {/* Optimization Suggestions */}
            <div className="mt-4">
              <h4 className="text-sm font-medium text-white mb-2">Suggestions</h4>
              <div className="space-y-1">
                {optimizations.map((suggestion, index) => (
                  <div key={index} className="flex items-start space-x-2 text-xs">
                    <AlertTriangle className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{suggestion}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          <button
            onClick={applyOptimizations}
            disabled={isOptimizing}
            className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isOptimizing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Optimizing...
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Apply Optimizations
              </>
            )}
          </button>
        </motion.div>
      )}
    </>
  );
};

export default PerformanceOptimizer;