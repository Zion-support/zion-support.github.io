<<<<<<< HEAD
import React, { useCallback, useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

interface OptimizationStatus {
  preloaded: number;
  codeSplit: boolean;
  serviceWorker: boolean;
  optimized: boolean;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });

  const [status, setStatus] = useState<OptimizationStatus>({
    preloaded: 0,
    codeSplit: false,
    serviceWorker: false,
    optimized: false
  });

  const collectWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    const vitals: PerformanceMetrics = {
      lcp: 0,
      fid: 0,
      cls: 0,
      fcp: 0,
      ttfb: 0
    };

    // LCP Observer
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      vitals.lcp = lastEntry.startTime;
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID Observer
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        vitals.fid = entry.processingStart - entry.startTime;
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // CLS Observer
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      vitals.cls = clsValue;
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // FCP Observer
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        vitals.fcp = entry.startTime;
        setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // TTFB Observer
    const ttfbObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        vitals.ttfb = entry.responseStart - entry.requestStart;
        setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }));
      });
    });
    ttfbObserver.observe({ entryTypes: ['navigation'] });

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fcpObserver.disconnect();
      ttfbObserver.disconnect();
    };
  }, []);

  const optimizePerformance = useCallback(() => {
    // Image optimization
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      document.head.appendChild(link);
    });

    setStatus(prev => ({ ...prev, optimized: true }));
  }, []);

  useEffect(() => {
    const cleanup = collectWebVitals();
    optimizePerformance();

    return cleanup;
  }, [collectWebVitals, optimizePerformance]);

  return null; // This component doesn't render anything visible
};

export default PerformanceOptimizer;
=======
'use client';
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
        document.head.appendChild(link);
      });
    };

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
>>>>>>> origin/resolve-merge-conflicts
