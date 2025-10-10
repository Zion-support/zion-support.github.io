'use client';

import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalImages.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    // Initialize optimizations
    preloadResources();
    optimizeImages();

    // Re-optimize on route changes
    const observer = new MutationObserver(optimizeImages);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

<<<<<<< HEAD
  return <>{children}</>;
  useEffect(() => {
    const interval = setInterval(optimizeMemory, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [optimizeMemory]);

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Settings className="h-5 w-5 mr-2 text-blue-600" />
          Performance Optimizer
        </h3>
        <button
          onClick={runOptimizations}
          disabled={isOptimizing}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          <Zap className="h-4 w-4 mr-2" />
          {isOptimizing ? 'Optimizing...' : 'Optimize'}
        </button>
      </div>

      {optimizations.length > 0 && (
        <div className="space-y-2 mb-4">
          {optimizations.map((optimization, index) => (
            <div key={index} className="flex items-center text-sm text-green-600">
              <CheckCircle className="h-4 w-4 mr-2" />
              {optimization}
            </div>
          ))}
        </div>
      )}

      {performanceScore && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Performance Score</span>
            <span className="text-sm font-bold text-gray-900">{performanceScore}/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-500 ${
                performanceScore >= 90 ? 'bg-green-500' : 
                performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${performanceScore}%` }}
            /></div>
          {performanceScore < 90 && (
            <div className="mt-2 flex items-center">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <span className="text-sm text-yellow-800 ml-2">
                Performance can be improved. Consider additional optimizations.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
};

export default PerformanceOptimizer;