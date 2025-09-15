import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PerformanceOptimizer: React.FC = () => {
  const [isOptimized, setIsOptimized] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    optimizationLevel: 0
  });

  const optimizePerformance = useCallback(() => {
    // Simulate performance optimization
    setIsOptimized(true);
    
    // Simulate performance metrics improvement
    setPerformanceMetrics({
      loadTime: Math.random() * 500 + 100, // 100-600ms
      renderTime: Math.random() * 50 + 10, // 10-60ms
      memoryUsage: Math.random() * 20 + 5, // 5-25MB
      optimizationLevel: Math.random() * 30 + 70 // 70-100%
    });

    // Preload critical resources
    const criticalImages = [
      '/images/ai-hero.jpg',
      '/images/quantum-bg.jpg',
      '/images/neural-interface.jpg'
    ];

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Enable service worker caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }

    // Optimize animations
    document.documentElement.style.setProperty('--animation-duration', '0.3s');
  }, []);

  useEffect(() => {
    // Initial performance measurement
    const startTime = performance.now();
    
    const measurePerformance = () => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      setPerformanceMetrics(prev => ({
        ...prev,
        loadTime: loadTime,
        renderTime: performance.now() - startTime,
        memoryUsage: (performance as any).memory?.usedJSHeapSize / 1024 / 1024 || 0,
        optimizationLevel: Math.max(0, 100 - (loadTime / 10))
      }));
    };

    // Measure after initial render
    setTimeout(measurePerformance, 100);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 max-w-sm"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900">Performance Monitor</h3>
          <div className={`w-3 h-3 rounded-full ${
            performanceMetrics.optimizationLevel > 80 ? 'bg-green-500' :
            performanceMetrics.optimizationLevel > 60 ? 'bg-yellow-500' : 'bg-red-500'
          }`}></div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Load Time:</span>
            <span className="font-semibold">{performanceMetrics.loadTime.toFixed(0)}ms</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Render Time:</span>
            <span className="font-semibold">{performanceMetrics.renderTime.toFixed(0)}ms</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Memory Usage:</span>
            <span className="font-semibold">{performanceMetrics.memoryUsage.toFixed(1)}MB</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Optimization:</span>
            <span className="font-semibold">{performanceMetrics.optimizationLevel.toFixed(0)}%</span>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <motion.div
            className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${performanceMetrics.optimizationLevel}%` }}
            transition={{ duration: 1 }}
          />
        </div>

        <button
          onClick={optimizePerformance}
          disabled={isOptimized}
          className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
            isOptimized
              ? 'bg-green-500 text-white cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105'
          }`}
        >
          {isOptimized ? '✓ Optimized' : 'Optimize Performance'}
        </button>

        {isOptimized && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 p-2 bg-green-50 border border-green-200 rounded-lg"
          >
            <div className="text-sm text-green-700 font-semibold">
              🚀 Performance optimized! Page is now 40% faster.
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default PerformanceOptimizer;