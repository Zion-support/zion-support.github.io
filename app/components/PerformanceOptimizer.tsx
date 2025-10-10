'use client';
<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import { Zap, CheckCircle, AlertTriangle, Settings } from 'lucide-react';

interface PerformanceOptimizerProps {
  className?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  className = ''
}) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [performanceScore, setPerformanceScore] = useState<number | null>(null);

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontPreloads = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
        'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLUtHuJ_8JhLjO4.woff2'
      ];

      fontPreloads.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = font;
        link.as = 'style';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });

      // Preload critical images
      const imagePreloads = [
        '/og-image.jpg',
        '/logo.png',
        '/favicon.svg'
      ];

      imagePreloads.forEach(image => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = image;
        link.as = 'image';
=======

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
>>>>>>> origin/main
        document.head.appendChild(link);
      });
    };

<<<<<<< HEAD
    preloadCriticalResources();
  }, []);

  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizations([]);
    
    const optimizationsList = [
      'Optimizing images...',
      'Minifying CSS and JavaScript...',
      'Enabling compression...',
      'Caching static assets...',
      'Lazy loading non-critical content...',
      'Preloading critical resources...',
      'Optimizing fonts...',
      'Reducing bundle size...'
    ];

    for (let i = 0; i < optimizationsList.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setOptimizations(prev => [...prev, optimizationsList[i]]);
    }

    // Simulate performance score calculation
    const score = Math.floor(Math.random() * 20) + 80; // 80-100
    setPerformanceScore(score);
    setIsOptimizing(false);
  }, []);

  const optimizeMemory = useCallback(() => {
    // Force garbage collection if available
    if (window.gc) {
      window.gc();
    }
    
    // Clear unused caches
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          if (name.includes('old-') || name.includes('temp-')) {
            caches.delete(name);
          }
        });
      });
    }
  }, []);

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
            />
          </div>
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
};

export default PerformanceOptimizer;
=======
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

  return <>{children}</>;
};

export default PerformanceOptimizer;
>>>>>>> origin/main
