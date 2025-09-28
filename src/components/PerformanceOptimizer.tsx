import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { performanceOptimizer } from '../utils/performanceOptimizations';
import { 
  getMemoryUsage, 
  collectPerformanceMetrics, 
  checkPerformanceBudget,
  debounce,
  throttle
} from '../utils/performanceHelpers';

interface PerformanceMetrics {
  memory: {
    used: number;
    total: number;
    limit: number;
  } | null;
  loadTime: number;
  domContentLoaded: number;
  domInteractive: number;
  violations: string[];
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableMonitoring?: boolean;
  enableOptimizations?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableMonitoring = true,
  enableOptimizations = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    memory: null,
    loadTime: 0,
    domContentLoaded: 0,
    domInteractive: 0,
    violations: []
  });


  // Debounced metrics collection
  const updateMetrics = useCallback(() => {
    const memory = getMemoryUsage();
    const performanceMetrics = collectPerformanceMetrics();
    const violations = checkPerformanceBudget(performanceMetrics);

    setMetrics(prev => ({
      ...prev,
      memory,
      loadTime: performanceMetrics.loadTime || 0,
      domContentLoaded: performanceMetrics.domContentLoaded || 0,
      domInteractive: performanceMetrics.domInteractive || 0,
      violations: [...prev.violations, ...violations]
    }));
  }, []);

  const debouncedUpdateMetrics = useMemo(
    () => debounce(updateMetrics, 1000),
    [updateMetrics]
  );

  // Throttled scroll handler
  const handleScrollCallback = useCallback(() => {
    // Track scroll performance
    const scrollDepth = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollDepth > 0 && scrollDepth % 25 === 0) {
      console.debug('Scroll depth:', scrollDepth);
    }
  }, []);

  const handleScroll = useMemo(
    () => throttle(handleScrollCallback, 100),
    [handleScrollCallback]
  );

  // Performance optimizations
  const applyOptimizations = useCallback(() => {
    if (!enableOptimizations) return;

    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });

    // Optimize fonts
    const fontLinks = document.querySelectorAll('link[href*="font"]');
    fontLinks.forEach(link => {
      link.setAttribute('rel', 'preload');
      link.setAttribute('as', 'font');
      link.setAttribute('crossorigin', 'anonymous');
    });

    // Optimize CSS
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach(link => {
      if (!link.hasAttribute('media')) {
        link.setAttribute('media', 'all');
      }
    });

    console.debug('Performance optimizations applied');
  }, [enableOptimizations]);

  // Memory cleanup
  const cleanup = useCallback(() => {
    // Clean up unused event listeners
    const unusedElements = document.querySelectorAll('[data-unused]');
    unusedElements.forEach(el => el.remove());

    // Clean up unused styles
    const unusedStyles = document.querySelectorAll('style[data-unused]');
    unusedStyles.forEach(style => style.remove());

    // Force garbage collection if available
    if (window.gc) {
      window.gc();
    }
  }, []);

  // Performance monitoring
  useEffect(() => {
    if (!enableMonitoring) return;

    // Initial metrics collection
    debouncedUpdateMetrics();

    // Set up performance observer
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.entryType === 'measure' && entry.duration > 100) {
          console.debug('Slow operation detected:', entry.name, entry.duration);
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });
    } catch (error) {
      console.debug('Performance Observer not supported:', error);
    }

    // Set up scroll monitoring
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Set up resize monitoring
    const handleResize = throttle(() => {
      debouncedUpdateMetrics();
    }, 500);

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [enableMonitoring, debouncedUpdateMetrics, handleScroll]);

  // Apply optimizations on mount
  useEffect(() => {
    applyOptimizations();
  }, [applyOptimizations]);

  // Periodic cleanup
  useEffect(() => {
    const cleanupInterval = setInterval(cleanup, 30000); // Every 30 seconds
    return () => clearInterval(cleanupInterval);
  }, [cleanup]);

  // Performance status
  const performanceStatus = useMemo(() => {
    const { memory, loadTime, violations } = metrics;
    
    if (violations.length > 0) {
      return { status: 'warning', message: `${violations.length} performance issues detected` };
    }
    
    if (memory && memory.used > 100) {
      return { status: 'warning', message: `High memory usage: ${memory.used}MB` };
    }
    
    if (loadTime > 3000) {
      return { status: 'warning', message: `Slow load time: ${loadTime}ms` };
    }
    
    return { status: 'good', message: 'Performance is optimal' };
  }, [metrics]);

  // Render performance indicator in development
  if (process.env.NODE_ENV === 'development' && enableMonitoring) {
    return (
      <div className="relative">
        {children}
        <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs z-50">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${
              performanceStatus.status === 'good' ? 'bg-green-500' : 'bg-yellow-500'
            }`} />
            <span>{performanceStatus.message}</span>
          </div>
          {metrics.memory && (
            <div className="text-xs opacity-75 mt-1">
              Memory: {metrics.memory.used}MB / {metrics.memory.limit}MB
            </div>
          )}
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

// Hook for performance monitoring
export const usePerformanceMonitoring = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    memory: null,
    loadTime: 0,
    domContentLoaded: 0,
    domInteractive: 0,
    violations: []
  });

  const updateMetrics = useCallback(() => {
    const memory = getMemoryUsage();
    const performanceMetrics = collectPerformanceMetrics();
    const violations = checkPerformanceBudget(performanceMetrics);

    setMetrics({
      memory,
      loadTime: performanceMetrics.loadTime || 0,
      domContentLoaded: performanceMetrics.domContentLoaded || 0,
      domInteractive: performanceMetrics.domInteractive || 0,
      violations
    });
  }, []);

  useEffect(() => {
    updateMetrics();
    const interval = setInterval(updateMetrics, 5000);
    return () => clearInterval(interval);
  }, [updateMetrics]);

  return { metrics, updateMetrics };
};

// Performance budget component
export const PerformanceBudget: React.FC<{
  budget: {
    maxBundleSize: number;
    maxLoadTime: number;
    maxMemoryUsage: number;
  };
}> = ({ budget }) => {
  const { metrics } = usePerformanceMonitoring();

  const violations = useMemo(() => {
    const violations: string[] = [];
    
    if (metrics.memory && metrics.memory.used > budget.maxMemoryUsage) {
      violations.push(`Memory usage ${metrics.memory.used}MB exceeds budget ${budget.maxMemoryUsage}MB`);
    }
    
    if (metrics.loadTime > budget.maxLoadTime) {
      violations.push(`Load time ${metrics.loadTime}ms exceeds budget ${budget.maxLoadTime}ms`);
    }

    return violations;
  }, [metrics, budget]);

  if (violations.length === 0) {
    return null;
  }

  return (
    <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
      <h3 className="font-bold">Performance Budget Violations</h3>
      <ul className="list-disc list-inside">
        {violations.map((violation, index) => (
          <li key={index}>{violation}</li>
        ))}
      </ul>
    </div>
  );
};