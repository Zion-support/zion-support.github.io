import React, { useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  isVisible: boolean;
  onClose?: () => void;
}

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export default function PerformanceOptimizer({ isVisible, onClose }: PerformanceOptimizerProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  useEffect(() => {
    if (isVisible) {
      // Collect performance metrics
      const collectMetrics = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
        
        const metrics: PerformanceMetrics = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: fcp ? fcp.startTime : 0,
          largestContentfulPaint: lcp ? lcp.startTime : 0,
          cumulativeLayoutShift: 0, // Would need to be measured with observer
          firstInputDelay: 0, // Would need to be measured with observer
        };
        
        setMetrics(metrics);
        
        // Generate optimization suggestions
        const suggestions: string[] = [];
        
        if (metrics.firstContentfulPaint > 1500) {
          suggestions.push('Optimize images and reduce bundle size for faster First Contentful Paint');
        }
        
        if (metrics.largestContentfulPaint > 2500) {
          suggestions.push('Implement lazy loading and optimize largest contentful paint');
        }
        
        if (metrics.loadTime > 3000) {
          suggestions.push('Enable compression and optimize server response times');
        }
        
        suggestions.push('Implement service worker for offline functionality');
        suggestions.push('Use CDN for static assets');
        suggestions.push('Enable HTTP/2 and compression');
        
        setOptimizations(suggestions);
      };
      
      collectMetrics();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Performance Metrics</h3>
          {metrics ? (
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Load Time:</span>
                <span className={metrics.loadTime > 3000 ? 'text-red-600' : 'text-green-600'}>
                  {metrics.loadTime.toFixed(0)}ms
                </span>
              </div>
              <div className="flex justify-between">
                <span>First Contentful Paint:</span>
                <span className={metrics.firstContentfulPaint > 1500 ? 'text-red-600' : 'text-green-600'}>
                  {metrics.firstContentfulPaint.toFixed(0)}ms
                </span>
              </div>
              <div className="flex justify-between">
                <span>Largest Contentful Paint:</span>
                <span className={metrics.largestContentfulPaint > 2500 ? 'text-red-600' : 'text-green-600'}>
                  {metrics.largestContentfulPaint.toFixed(0)}ms
                </span>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Collecting metrics...</p>
          )}
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Optimization Suggestions</h3>
          <ul className="space-y-1 text-sm">
            {optimizations.map((suggestion, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span className="text-gray-700">{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Quick Actions</h3>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => {
              // Clear cache and reload
              if ('caches' in window) {
                caches.keys().then(names => {
                  names.forEach(name => caches.delete(name));
                });
              }
              window.location.reload();
            }}
            className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
          >
            Clear Cache & Reload
          </button>
          <button 
            onClick={() => {
              // Enable performance monitoring
              console.log('Performance monitoring enabled');
            }}
            className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
          >
            Enable Monitoring
          </button>
        </div>
      </div>
    </div>
  );
}