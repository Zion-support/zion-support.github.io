import React, { useEffect, useState } from 'react';
import { AdvancedCaching, ServiceWorkerCache, ImageCache } from '../utils/advancedCaching';

interface PerformanceMetrics {
  bundleSize: number;
  loadTime: number;
  cacheHitRate: number;
  memoryUsage: number;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    bundleSize: 0,
    loadTime: 0,
    cacheHitRate: 0,
    memoryUsage: 0
  });

  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    // Initialize performance monitoring
    const startTime = performance.now();
    
    // Monitor bundle size
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src) {
        // Estimate size based on URL (simplified)
        totalSize += src.length * 100; // Rough estimate
      }
    });

    // Monitor memory usage
    const memoryInfo = (performance as any).memory;
    const memoryUsage = memoryInfo ? memoryInfo.usedJSHeapSize / 1024 / 1024 : 0;

    // Calculate load time
    const loadTime = performance.now() - startTime;

    // Calculate cache hit rate
    const cacheSize = AdvancedCaching.size();
    const cacheHitRate = cacheSize > 0 ? (cacheSize / (cacheSize + 10)) * 100 : 0;

    setMetrics({
      bundleSize: totalSize,
      loadTime,
      cacheHitRate,
      memoryUsage
    });

    // Clean up expired cache entries periodically
    const cleanupInterval = setInterval(() => {
      AdvancedCaching.cleanup();
    }, 60000); // Every minute

    return () => clearInterval(cleanupInterval);
  }, []);

  const optimizePerformance = async () => {
    setIsOptimizing(true);
    
    try {
      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png',
        '/images/pattern.svg'
      ];
      
      await ImageCache.preloadImages(criticalImages);
      
      // Cache static assets
      const staticAssets = [
        '/',
        '/manifest.json',
        '/sw.js'
      ];
      
      await ServiceWorkerCache.cacheAssets(staticAssets);
      
      // Optimize images
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        const src = img.getAttribute('data-src');
        if (src) {
          img.setAttribute('src', src);
          img.removeAttribute('data-src');
        }
      });
      
      console.log('Performance optimization completed');
    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  };

  const clearCache = () => {
    AdvancedCaching.clear();
    ServiceWorkerCache.clearCache();
    setMetrics(prev => ({ ...prev, cacheHitRate: 0 }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Performance Optimizer</h2>
      
      {/* Metrics Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">Bundle Size</h3>
          <p className="text-2xl font-bold text-blue-600">
            {(metrics.bundleSize / 1024).toFixed(1)} KB
          </p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Load Time</h3>
          <p className="text-2xl font-bold text-green-600">
            {metrics.loadTime.toFixed(0)} ms
          </p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-800">Cache Hit Rate</h3>
          <p className="text-2xl font-bold text-purple-600">
            {metrics.cacheHitRate.toFixed(1)}%
          </p>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold text-orange-800">Memory Usage</h3>
          <p className="text-2xl font-bold text-orange-600">
            {metrics.memoryUsage.toFixed(1)} MB
          </p>
        </div>
      </div>

      {/* Optimization Controls */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4">
          <button
            onClick={optimizePerformance}
            disabled={isOptimizing}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            {isOptimizing ? 'Optimizing...' : 'Optimize Performance'}
          </button>
          
          <button
            onClick={clearCache}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Clear Cache
          </button>
        </div>

        {/* Performance Tips */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Performance Tips:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Enable gzip compression on your server</li>
            <li>• Use a CDN for static assets</li>
            <li>• Implement lazy loading for images</li>
            <li>• Minimize third-party scripts</li>
            <li>• Use browser caching headers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;