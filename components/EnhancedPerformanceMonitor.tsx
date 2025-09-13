import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
  userInteractions: number;
  conversionRate: number;
  bounceRate: number;
  averageSessionDuration: number;
}

export default function EnhancedPerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
    userInteractions: 0,
    conversionRate: 0,
    bounceRate: 0,
    averageSessionDuration: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate real-time performance monitoring
    const interval = setInterval(() => {
      setMetrics(prev => ({
        loadTime: Math.random() * 2000 + 500,
        renderTime: Math.random() * 100 + 50,
        memoryUsage: Math.random() * 100,
        networkLatency: Math.random() * 200 + 50,
        userInteractions: prev.userInteractions + Math.floor(Math.random() * 3),
        conversionRate: Math.random() * 15 + 5,
        bounceRate: Math.random() * 30 + 20,
        averageSessionDuration: Math.random() * 300 + 120,
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms: number) => `${ms.toFixed(0)}ms`;
  const formatPercentage = (value: number) => `${value.toFixed(1)}%`;
  const formatMemory = (mb: number) => `${mb.toFixed(1)}MB`;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200"
      >
        {isVisible ? 'Hide' : 'Show'} Performance
      </button>

      {isVisible && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-80 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Real-time Performance Metrics
          </h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Page Load Time</span>
              <span className="text-sm font-mono text-blue-600 dark:text-blue-400">
                {formatTime(metrics.loadTime)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Render Time</span>
              <span className="text-sm font-mono text-green-600 dark:text-green-400">
                {formatTime(metrics.renderTime)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Memory Usage</span>
              <span className="text-sm font-mono text-purple-600 dark:text-purple-400">
                {formatMemory(metrics.memoryUsage)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Network Latency</span>
              <span className="text-sm font-mono text-orange-600 dark:text-orange-400">
                {formatTime(metrics.networkLatency)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">User Interactions</span>
              <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400">
                {metrics.userInteractions}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Conversion Rate</span>
              <span className="text-sm font-mono text-emerald-600 dark:text-emerald-400">
                {formatPercentage(metrics.conversionRate)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Bounce Rate</span>
              <span className="text-sm font-mono text-red-600 dark:text-red-400">
                {formatPercentage(metrics.bounceRate)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Avg Session Duration</span>
              <span className="text-sm font-mono text-cyan-600 dark:text-cyan-400">
                {Math.floor(metrics.averageSessionDuration / 60)}m {Math.floor(metrics.averageSessionDuration % 60)}s
              </span>
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Status: Optimal</span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Live
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}