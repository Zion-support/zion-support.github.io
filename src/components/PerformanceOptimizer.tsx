import React, { useEffect, useRef, useCallback, useState, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  renderTime: number;
  timeToInteractive: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

interface LazyLoadConfig {
  threshold: number;
  rootMargin: string;
  triggerOnce: boolean;
}

interface PerformanceReport {
  timestamp: number;
  metrics: PerformanceMetrics;
  recommendations: string[];
  score: number;
}

export function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0,
    timeToInteractive: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0
  });
  
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [performanceHistory, setPerformanceHistory] = useState<PerformanceReport[]>([]);
  const [optimizationMode, setOptimizationMode] = useState<'auto' | 'manual'>('auto');
  const [showMetrics, setShowMetrics] = useState(false);
  
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const animationFrameRef = useRef<number>();
  const observerRef = useRef<PerformanceObserver | null>(null);
  const optimizationIntervalRef = useRef<NodeJS.Timeout>();

  // Enhanced performance monitoring with modern APIs
  const measurePerformance = useCallback(() => {
    if ('performance' in window) {
      // Navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const timeToInteractive = navigation.domInteractive - navigation.fetchStart;
      
      // Paint timing
      const paintEntries = performance.getEntriesByType('paint');
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      setMetrics(prev => ({
        ...prev,
        loadTime,
        timeToInteractive,
        firstContentfulPaint,
        renderTime: performance.now() - lastTimeRef.current
      }));
    }

    // Memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
      }));
    }
  }, []);

  // Web Vitals monitoring
  const setupWebVitalsObserver = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({
              ...prev,
              largestContentfulPaint: lastEntry.startTime
            }));
          }
        });
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });

        // Layout shifts
        const layoutShiftObserver = new PerformanceObserver((list) => {
          let cumulativeLayoutShift = 0;
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              cumulativeLayoutShift += (entry as any).value;
            }
          }
          setMetrics(prev => ({
            ...prev,
            cumulativeLayoutShift
          }));
        });
        layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });

        // First input delay
        const firstInputObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            setMetrics(prev => ({
              ...prev,
              firstInputDelay: (entry as any).processingStart - (entry as any).startTime
            }));
            break;
          }
        });
        firstInputObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.warn('Web Vitals observer setup failed:', error);
      }
    }
  }, []);

  // FPS monitoring with improved accuracy
  const measureFPS = useCallback(() => {
    frameCountRef.current++;
    const currentTime = performance.now();
    
    if (currentTime - lastTimeRef.current >= 1000) {
      const fps = Math.round((frameCountRef.current * 1000) / (currentTime - lastTimeRef.current));
      setMetrics(prev => ({ ...prev, fps }));
      frameCountRef.current = 0;
      lastTimeRef.current = currentTime;
    }
    
    animationFrameRef.current = requestAnimationFrame(measureFPS);
  }, []);

  // Performance score calculation
  const calculatePerformanceScore = useMemo(() => {
    let score = 100;
    
    // FPS scoring
    if (metrics.fps < 30) score -= 20;
    else if (metrics.fps < 50) score -= 10;
    
    // Memory usage scoring
    if (metrics.memoryUsage > 100) score -= 15;
    else if (metrics.memoryUsage > 50) score -= 5;
    
    // Load time scoring
    if (metrics.loadTime > 3000) score -= 20;
    else if (metrics.loadTime > 1000) score -= 10;
    
    // Web Vitals scoring
    if (metrics.largestContentfulPaint > 2500) score -= 15;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
    if (metrics.firstInputDelay > 100) score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  // Generate performance recommendations
  const generateRecommendations = useCallback(() => {
    const recommendations: string[] = [];
    
    if (metrics.fps < 30) {
      recommendations.push('Consider reducing animations or optimizing rendering');
    }
    
    if (metrics.memoryUsage > 100) {
      recommendations.push('Memory usage is high - check for memory leaks');
    }
    
    if (metrics.loadTime > 3000) {
      recommendations.push('Page load time is slow - optimize assets and reduce bundle size');
    }
    
    if (metrics.largestContentfulPaint > 2500) {
      recommendations.push('LCP is slow - optimize images and critical resources');
    }
    
    if (metrics.cumulativeLayoutShift > 0.1) {
      recommendations.push('Layout shifts detected - fix dynamic content sizing');
    }
    
    if (metrics.firstInputDelay > 100) {
      recommendations.push('First input delay is high - reduce main thread blocking');
    }
    
    return recommendations;
  }, [metrics]);

  // Enhanced auto-optimization
  const autoOptimize = useCallback(() => {
    if (optimizationMode === 'auto' && (metrics.fps < 30 || metrics.memoryUsage > 100)) {
      setIsOptimizing(true);
      
      // Implement automatic optimizations
      setTimeout(() => {
        // Clear unnecessary caches
        if ('caches' in window) {
          caches.keys().then(names => {
            names.forEach(name => {
              if (name.includes('temp') || name.includes('cache')) {
                caches.delete(name);
              }
            });
          });
        }
        
        // Force garbage collection if available
        if ('gc' in window) {
          (window as any).gc();
        }
        
        // Reduce animation complexity if FPS is low
        if (metrics.fps < 30) {
          document.documentElement.classList.add('reduced-animations');
        }
        
        // Create performance report
        const report: PerformanceReport = {
          timestamp: Date.now(),
          metrics: { ...metrics },
          recommendations: generateRecommendations(),
          score: calculatePerformanceScore
        };
        
        setPerformanceHistory(prev => [...prev.slice(-9), report]);
        setIsOptimizing(false);
      }, 1000);
    }
  }, [metrics, optimizationMode, generateRecommendations, calculatePerformanceScore]);

  // Manual optimization trigger
  const triggerManualOptimization = useCallback(() => {
    setIsOptimizing(true);
    
    // Implement manual optimizations
    setTimeout(() => {
      // Clear all caches
      if ('caches' in window) {
        caches.keys().then(names => {
          names.forEach(name => caches.delete(name));
        });
      }
      
      // Force garbage collection
      if ('gc' in window) {
        (window as any).gc();
      }
      
      // Reset performance metrics
      setMetrics({
        fps: 0,
        memoryUsage: 0,
        loadTime: 0,
        renderTime: 0,
        timeToInteractive: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0
      });
      
      setIsOptimizing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    measurePerformance();
    setupWebVitalsObserver();
    measureFPS();
    
    // Set up performance monitoring interval
    const interval = setInterval(() => {
      measurePerformance();
      autoOptimize();
    }, 5000);
    
    optimizationIntervalRef.current = interval;
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (optimizationIntervalRef.current) {
        clearInterval(optimizationIntervalRef.current);
      }
    };
  }, [measurePerformance, setupWebVitalsObserver, measureFPS, autoOptimize]);

  // Performance metrics display
  const renderMetrics = () => (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg shadow-lg max-w-sm z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setShowMetrics(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span>FPS:</span>
          <span className={metrics.fps < 30 ? 'text-red-400' : metrics.fps < 50 ? 'text-yellow-400' : 'text-green-400'}>
            {metrics.fps}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className={metrics.memoryUsage > 100 ? 'text-red-400' : metrics.memoryUsage > 50 ? 'text-yellow-400' : 'text-green-400'}>
            {metrics.memoryUsage.toFixed(1)} MB
          </span>
        </div>
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={metrics.loadTime > 3000 ? 'text-red-400' : metrics.loadTime > 1000 ? 'text-yellow-400' : 'text-green-400'}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>Score:</span>
          <span className={calculatePerformanceScore < 50 ? 'text-red-400' : calculatePerformanceScore < 80 ? 'text-yellow-400' : 'text-green-400'}>
            {calculatePerformanceScore}/100
          </span>
        </div>
      </div>
      
      <div className="mt-3 space-y-2">
        <button
          onClick={triggerManualOptimization}
          disabled={isOptimizing}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white text-xs py-1 px-2 rounded"
        >
          {isOptimizing ? 'Optimizing...' : 'Optimize Now'}
        </button>
        
        <div className="flex space-x-2">
          <button
            onClick={() => setOptimizationMode(optimizationMode === 'auto' ? 'manual' : 'auto')}
            className={`flex-1 text-xs py-1 px-2 rounded ${
              optimizationMode === 'auto' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-600 text-white'
            }`}
          >
            {optimizationMode === 'auto' ? 'Auto' : 'Manual'}
          </button>
          
          <button
            onClick={() => setPerformanceHistory([])}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-xs py-1 px-2 rounded"
          >
            Clear History
          </button>
        </div>
      </div>
    </div>
  );

  // Floating performance indicator
  return (
    <>
      {!showMetrics && (
        <button
          onClick={() => setShowMetrics(true)}
          className="fixed bottom-4 right-4 bg-black/90 text-white p-2 rounded-full shadow-lg z-50 hover:bg-black/80 transition-colors"
          title="Performance Monitor"
        >
          <div className="w-4 h-4 flex items-center justify-center">
            <div className={`w-2 h-2 rounded-full ${
              calculatePerformanceScore < 50 ? 'bg-red-400' : 
              calculatePerformanceScore < 80 ? 'bg-yellow-400' : 'bg-green-400'
            }`} />
          </div>
        </button>
      )}
      
      {showMetrics && renderMetrics()}
    </>
  );
}

// Enhanced Lazy Loading Hook
export function useLazyLoad<T>(config: LazyLoadConfig = { threshold: 0.1, rootMargin: '50px', triggerOnce: true }) {
  const { ref, inView } = useInView(config);
  
  return {
    ref,
    inView,
    shouldLoad: inView
  };
}

// Virtual Scrolling Hook
export function useVirtualScroll<T>(
  items: T[],
  itemHeight: number,
  containerHeight: number,
  overscan: number = 5
) {
  const [scrollTop, setScrollTop] = useState(0);
  
  const visibleItems = useMemo(() => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight) + overscan,
      items.length
    );
    
    return items.slice(startIndex, endIndex);
  }, [items, itemHeight, containerHeight, overscan, scrollTop]);
  
  const totalHeight = items.length * itemHeight;
  const offsetY = Math.floor(scrollTop / itemHeight) * itemHeight;
  
  return {
    visibleItems,
    totalHeight,
    offsetY,
    setScrollTop
  };
}

// Performance Monitoring Hook
export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0
  });
  
  useEffect(() => {
    const measure = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        setMetrics(prev => ({
          ...prev,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          renderTime: performance.now()
        }));
      }
    };
    
    const interval = setInterval(measure, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return metrics;
}
