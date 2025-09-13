// @ts-nocheck
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  componentCount: number;
  bundleSize: number;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    componentCount: 0,
    bundleSize: 0
  });

  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    
    // Measure load time
    const measureLoadTime = () => {
      const loadTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, loadTime }));
    };

    // Measure memory usage
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
        }));
      }
    };

    // Count components
    const countComponents = () => {
      const components = document.querySelectorAll('[data-component]');
      setMetrics(prev => ({ ...prev, componentCount: components.length }));
    };

    // Measure bundle size (approximate)
    const measureBundleSize = () => {
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && src.includes('js')) {
          // This is a rough estimate
          totalSize += 100; // KB per script
        }
      });
      setMetrics(prev => ({ ...prev, bundleSize: totalSize }));
    };

    // Run measurements
    measureLoadTime();
    measureMemory();
    countComponents();
    measureBundleSize();

    // Check if performance is optimized
    const checkOptimization = () => {
      const optimized = 
        metrics.loadTime < 2000 && // Less than 2 seconds
        metrics.memoryUsage < 100 && // Less than 100MB
        metrics.componentCount < 50 && // Less than 50 components
        metrics.bundleSize < 500; // Less than 500KB

      setIsOptimized(optimized);
    };

    // Run optimization check after a delay
    setTimeout(checkOptimization, 1000);

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  // Performance recommendations
  const getRecommendations = () => {
    const recommendations = [];

    if (metrics.loadTime > 2000) {
      recommendations.push('Consider lazy loading components');
    }

    if (metrics.memoryUsage > 100) {
      recommendations.push('Optimize memory usage with cleanup');
    }

    if (metrics.componentCount > 50) {
      recommendations.push('Reduce component count or use virtualization');
    }

    if (metrics.bundleSize > 500) {
      recommendations.push('Split bundle into smaller chunks');
    }

    return recommendations;
  };

  const recommendations = getRecommendations();

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Performance Monitor
        </h3>
        <div className={`w-3 h-3 rounded-full ${isOptimized ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
      </div>
      
      <div className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={metrics.loadTime > 2000 ? 'text-red-500' : 'text-green-500'}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className={metrics.memoryUsage > 100 ? 'text-red-500' : 'text-green-500'}>
            {metrics.memoryUsage}MB
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Components:</span>
          <span className={metrics.componentCount > 50 ? 'text-red-500' : 'text-green-500'}>
            {metrics.componentCount}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Bundle Size:</span>
          <span className={metrics.bundleSize > 500 ? 'text-red-500' : 'text-green-500'}>
            {metrics.bundleSize}KB
          </span>
        </div>
      </div>

      {recommendations.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
          <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1">
            Recommendations:
          </h4>
          <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
            {recommendations.map((rec, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mr-1">•</span>
                {rec}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Status: {isOptimized ? 'Optimized' : 'Needs Attention'}
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;