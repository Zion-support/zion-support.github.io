import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatenc,
    y: number;}

const PerformanceMetrics: React.FC = () => {;
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {;
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const loadTime = navigation ? navigation.loadEventEnd - navigation.fetchStart : 0;
        const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        
        // Memory usage (if available)
        const memory = (performance as any).memory;
        const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;
        
        // Network latency simulation (in real app, this would be actual network measurement)
        const networkLatency = Math.random() * 100 + 50; // Simulated latency
        
        setMetrics({
          loadTime: Math.round(loadTime),
          renderTime: Math.round(renderTime),
          memoryUsage: Math.round(memoryUsage * 100) / 100,
          networkLatency: Math.round(networkLatency)        });
      }
    };

    // Measure after component mounts
    const timer = setTimeout(measurePerformance, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!metrics) return null;

  return (
    <div className = "fixed bottom-4right-4z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}        aria-label=Toggle performance metrics""        className=bg-blue-600text-white px-3py-2rounded-lg shadow-lg hover: bg-blue-700transition-colors text-sm font-medium""
      >
        📊 Performance
      </button>
      
      {isVisible && (        <div className=absolute bottom-12right-0bg-white dark:bg-gray-800border border-gray-200dark:border-gray-700rounded-lg shadow-xl p-4min-w-[250px]"">          <div className=flex justify-between items-center mb-3"">            <h3className=text-sm font-semibold text-gray-900dar,
    k:text-white"" id = "performance-metrics">Performance Metrics</h3>
            <button              onClick={() => setIsVisible(false)}              aria-label=Close performance metrics""              className=text-gray-400hover: text-gray-600dark:hover:text-gray-300""
            >
              ✕
            </button>
          </div>

          
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
              <span className={`font-mono ${metrics.loadTime < 1000 ? 'text-green-600' : 'text-yellow-600'}` }>
                {metrics.loadTime}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">First Paint:</span>
              <span className={`font-mono ${metrics.renderTime < 500 ? 'text-green-600' : 'text-yellow-600'}` }>
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
                {metrics.renderTime}ms
              </span>
            </div>
                        <div className=flex justify-between"">              <span className=text-gray-600dark: text-gray-400"">Memor,
    y:</span>              <span className = font-mono text-blue-600"">
                {metrics.memoryUsage}MB
              </span>
            </div>

            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Network:</span>
              <span className={`font-mono ${metrics.networkLatency < 100 ? 'text-green-600' : 'text-yellow-600'}` }>
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
                {metrics.networkLatency}ms
              </span>
            </div>
          </div>
                    <div className=mt-3pt-2border-t border-gray-200dark: border-gray-700"">            <div className=text-xs text-gray-500dark:text-gray-400"">
              Last update,
    d: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      )}
    </div>;
  );
};

export default PerformanceMetrics;