import React, { useState, useEffect } from 'react';
import { usePerformanceMonitoring } from '../hooks/usePerformanceMonitoring';
import { bundleOptimizer } from '../utils/bundleOptimizer';

interface PerformanceMetrics {
  loadTime: number;
  bundleSize: number;
  componentCount: number;
  errorCount: number;
  memoryUsage?: number;
  renderTime?: number;
}

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { measureBundleSize } = usePerformanceMonitoring();

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const updateMetrics = () => {
      const bundleAnalysis = bundleOptimizer.analyzeBundle();
      if (bundleAnalysis) {
        setMetrics({
          loadTime: bundleAnalysis.resources.reduce((total, r) => total + r.duration, 0),
          bundleSize: bundleAnalysis.totalSize,
          componentCount: document.querySelectorAll('[data-component]').length,
          errorCount: 0, // This would be tracked separately
          memoryUsage: (performance as any).memory?.usedJSHeapSize,
          renderTime: performance.now(),
        });
      }
    };

    // Update metrics on load
    updateMetrics();

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, [measureBundleSize]);

  if (process.env.NODE_ENV !== 'development' || !isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 z-50"
        title="Show Performance Dashboard"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80 z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Performance Dashboard</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      {metrics ? (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-600">Load Time:</span>
              <span className="ml-2 font-mono">
                {metrics.loadTime.toFixed(2)}ms
              </span>
            </div>
            <div>
              <span className="text-gray-600">Bundle Size:</span>
              <span className="ml-2 font-mono">
                {(metrics.bundleSize / 1024).toFixed(2)}KB
              </span>
            </div>
            <div>
              <span className="text-gray-600">Components:</span>
              <span className="ml-2 font-mono">{metrics.componentCount}</span>
            </div>
            <div>
              <span className="text-gray-600">Errors:</span>
              <span className="ml-2 font-mono text-red-600">{metrics.errorCount}</span>
            </div>
            {metrics.memoryUsage && (
              <div className="col-span-2">
                <span className="text-gray-600">Memory Usage:</span>
                <span className="ml-2 font-mono">
                  {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB
                </span>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-gray-200">
            <div className="text-xs text-gray-600">
              <div>Performance Score: {getPerformanceScore(metrics)}/100</div>
              <div className="mt-1">
                {getPerformanceRecommendations(metrics).map((rec, index) => (
                  <div key={index} className="text-yellow-600">
                    • {rec}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-200">
            <button
              onClick={() => bundleOptimizer.generateBundleReport()}
              className="w-full text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded"
            >
              Generate Bundle Report
            </button>
          </div>
        </div>
      ) : (
        <div className="text-sm text-gray-600">
          Collecting performance data...
        </div>
      )}
    </div>
  );
};

function getPerformanceScore(metrics: PerformanceMetrics): number {
  let score = 100;

  // Deduct points for slow load time
  if (metrics.loadTime > 3000) score -= 20;
  else if (metrics.loadTime > 2000) score -= 10;
  else if (metrics.loadTime > 1000) score -= 5;

  // Deduct points for large bundle size
  if (metrics.bundleSize > 1000000) score -= 30; // > 1MB
  else if (metrics.bundleSize > 500000) score -= 20; // > 500KB
  else if (metrics.bundleSize > 200000) score -= 10; // > 200KB

  // Deduct points for errors
  score -= metrics.errorCount * 10;

  // Deduct points for high memory usage
  if (metrics.memoryUsage && metrics.memoryUsage > 50000000) score -= 15; // > 50MB

  return Math.max(0, score);
}

function getPerformanceRecommendations(metrics: PerformanceMetrics): string[] {
  const recommendations: string[] = [];

  if (metrics.loadTime > 2000) {
    recommendations.push('Consider code splitting for faster initial load');
  }

  if (metrics.bundleSize > 500000) {
    recommendations.push('Bundle size is large, consider lazy loading');
  }

  if (metrics.componentCount > 100) {
    recommendations.push('Many components loaded, consider lazy loading');
  }

  if (metrics.errorCount > 0) {
    recommendations.push('Fix errors to improve performance');
  }

  if (metrics.memoryUsage && metrics.memoryUsage > 50000000) {
    recommendations.push('High memory usage, check for memory leaks');
  }

  if (recommendations.length === 0) {
    recommendations.push('Performance looks good!');
  }

  return recommendations;
}

export default PerformanceDashboard;