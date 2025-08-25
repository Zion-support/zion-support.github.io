import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, AlertTriangle, CheckCircle, X, Settings, BarChart3, Cpu, HardDrive, Clock, Download } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  bundleSize: number;
  lighthouseScore: number;
  optimizationSuggestions: string[];
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  onOptimize?: (metrics: PerformanceMetrics) => void;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  showMetrics = false,
  onOptimize,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    lighthouseScore: 0,
    optimizationSuggestions: []
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<PerformanceMetrics[]>([]);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    const startTime = performance.now();
    
    // Measure page load time
    const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
    
    // Estimate memory usage (if available)
    const memoryUsage = (performance as any).memory ? 
      Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024) : 0;
    
    // Estimate bundle size based on loaded scripts
    const scripts = document.querySelectorAll('script[src]');
    const bundleSize = Array.from(scripts).reduce((total, script) => {
      const src = script.getAttribute('src');
      if (src && src.includes('js/')) {
        return total + 100; // Rough estimate
      }
      return total;
    }, 0);
    
    // Calculate Lighthouse-like score
    let lighthouseScore = 100;
    if (loadTime > 3000) lighthouseScore -= 30;
    if (loadTime > 5000) lighthouseScore -= 20;
    if (memoryUsage > 50) lighthouseScore -= 20;
    if (bundleSize > 500) lighthouseScore -= 15;
    
    // Generate optimization suggestions
    const suggestions: string[] = [];
    if (loadTime > 2000) suggestions.push('Consider implementing lazy loading for images and components');
    if (memoryUsage > 50) suggestions.push('Optimize memory usage by cleaning up event listeners and references');
    if (bundleSize > 500) suggestions.push('Implement code splitting and tree shaking to reduce bundle size');
    if (lighthouseScore < 80) suggestions.push('Run Lighthouse audit for detailed performance insights');
    
    const newMetrics: PerformanceMetrics = {
      loadTime,
      memoryUsage,
      bundleSize,
      lighthouseScore,
      optimizationSuggestions: suggestions
    };
    
    setMetrics(newMetrics);
    setOptimizationHistory(prev => [...prev.slice(-4), newMetrics]);
    
    if (onOptimize) {
      onOptimize(newMetrics);
    }
    
    return newMetrics;
  }, [onOptimize]);

  // Auto-optimization
  const performAutoOptimization = useCallback(() => {
    const currentMetrics = measurePerformance();
    
    if (currentMetrics.lighthouseScore < 70) {
      // Implement automatic optimizations
      if (currentMetrics.loadTime > 3000) {
        // Preload critical resources
        const criticalLinks = document.querySelectorAll('link[rel="preload"]');
        criticalLinks.forEach(link => link.setAttribute('rel', 'preload'));
      }
      
      if (currentMetrics.memoryUsage > 50) {
        // Suggest garbage collection
        if ('gc' in window) {
          (window as any).gc();
        }
      }
    }
  }, [measurePerformance]);

  // Continuous monitoring
  useEffect(() => {
    if (!showMetrics) return;
    
    // Initial measurement
    measurePerformance();
    
    // Set up continuous monitoring
    const interval = setInterval(() => {
      measurePerformance();
    }, 30000); // Every 30 seconds
    
    // Auto-optimization interval
    const optimizationInterval = setInterval(() => {
      if (autoOptimize) {
        performAutoOptimization();
      }
    }, 60000); // Every minute
    
    return () => {
      clearInterval(interval);
      clearInterval(optimizationInterval);
    };
  }, [showMetrics, measurePerformance, autoOptimize]);

  // Performance tips
  const performanceTips = [
    'Use lazy loading for images and components',
    'Implement code splitting to reduce initial bundle size',
    'Optimize images and use modern formats (WebP, AVIF)',
    'Minimize third-party scripts and load them asynchronously',
    'Use service workers for caching and offline support',
    'Implement critical CSS inlining',
    'Use resource hints (preload, prefetch, preconnect)',
    'Optimize fonts with font-display: swap'
  ];

  if (!showMetrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl max-w-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-semibold">Performance Monitor</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <BarChart3 className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Metrics */}
            <div className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{metrics.loadTime}ms</div>
                  <div className="text-xs text-gray-400">Load Time</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <HardDrive className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{metrics.memoryUsage}MB</div>
                  <div className="text-xs text-gray-400">Memory</div>
                </div>
              </div>
              
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <Cpu className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-white font-semibold">{metrics.lighthouseScore}/100</div>
                <div className="text-xs text-gray-400">Performance Score</div>
              </div>
            </div>

            {/* Optimization Suggestions */}
            {metrics.optimizationSuggestions.length > 0 && (
              <div className="p-4 border-t border-white/20">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <AlertTriangle className="w-4 h-4 text-yellow-400 mr-2" />
                  Optimization Tips
                </h4>
                <ul className="space-y-2">
                  {metrics.optimizationSuggestions.map((suggestion, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Expanded View */}
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-white/20"
              >
                <div className="p-4 space-y-4">
                  {/* Performance History */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Performance History</h4>
                    <div className="space-y-2">
                      {optimizationHistory.map((metric, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">#{optimizationHistory.length - index}</span>
                          <span className={`font-semibold ${
                            metric.lighthouseScore > 80 ? 'text-green-400' : 
                            metric.lighthouseScore > 60 ? 'text-yellow-400' : 'text-red-400'
                          }`}>
                            {metric.lighthouseScore}/100
                          </span>
                          <span className="text-gray-400">{metric.loadTime}ms</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Tips */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Quick Tips</h4>
                    <div className="space-y-2">
                      {performanceTips.slice(0, 4).map((tip, index) => (
                        <div key={index} className="text-sm text-gray-300 flex items-start">
                          <span className="text-cyan-400 mr-2">💡</span>
                          {tip}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Actions */}
            <div className="p-4 border-t border-white/20">
              <div className="flex space-x-2">
                <button
                  onClick={measurePerformance}
                  className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Measure
                </button>
                <button
                  onClick={performAutoOptimization}
                  className="flex-1 bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Optimize
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsVisible(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          title="Performance Monitor"
        >
          <Zap className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

// Image Optimization Component
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  lazy?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzFlMjYzYiIvPjwvc3ZnPg==',
  lazy = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div
        className={`bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-zion-slate-light text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Placeholder */}
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width, height }}
        />
      )}
      
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={lazy ? 'lazy' : 'eager'}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

// Performance Monitoring Hook
export const usePerformanceMonitor = (componentName: string) => {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      if (duration > 16) { // 60fps threshold
        console.warn(`${componentName} took ${duration.toFixed(2)}ms to render`);
      }
    };
  }, [componentName]);
};

// Debounce Hook
export const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Throttle Hook
export const useThrottle = <T,>(value: T, limit: number): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRan = useRef<number>(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
};