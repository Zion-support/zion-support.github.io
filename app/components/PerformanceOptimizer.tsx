'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  className?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children, className = '' }) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [performanceScore, setPerformanceScore] = useState<number | null>(null);

  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  const optimizeScripts = useCallback(() => {
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script) => {
      if (!script.async && !script.defer) {
        script.defer = true;
      }
    });
  }, []);

  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'style';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, []);

  const calculatePerformanceScore = useCallback(() => {
    if (typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return;

    const loadTime = navigation.loadEventEnd - navigation.fetchStart;
    const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
    const firstPaint = performance.getEntriesByName('first-paint')[0]?.startTime || 0;
    const firstContentfulPaint = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;

    let score = 100;
    
    // Deduct points based on performance metrics
    if (loadTime > 3000) score -= 20;
    if (loadTime > 5000) score -= 20;
    if (domContentLoaded > 2000) score -= 15;
    if (firstContentfulPaint > 1500) score -= 15;
    if (firstPaint > 1000) score -= 10;

    setPerformanceScore(Math.max(0, score));
  }, []);

  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    try {
      // Image optimization
      optimizeImages();
      newOptimizations.push('Images optimized for lazy loading');

      // Script optimization
      optimizeScripts();
      newOptimizations.push('Scripts optimized for async loading');

      // Preload critical resources
      preloadCriticalResources();
      newOptimizations.push('Critical resources preloaded');

      // Calculate performance score
      setTimeout(() => {
        calculatePerformanceScore();
        newOptimizations.push('Performance score calculated');
      }, 1000);

      setOptimizations(newOptimizations);
    } catch (error) {
      console.error('Performance optimization error:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [optimizeImages, optimizeScripts, preloadCriticalResources, calculatePerformanceScore]);

  useEffect(() => {
    // Run initial optimizations
    runOptimizations();

    // Set up performance monitoring
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          calculatePerformanceScore();
        }
      });
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => {
      observer.disconnect();
    };
  }, [runOptimizations, calculatePerformanceScore]);

  return (
    <div className={`performance-optimizer ${className}`}>
      {children}
      
      {/* Performance Indicator */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
          <div className="flex items-center mb-2">
            <Settings className="w-4 h-4 mr-2" />
            <span className="font-semibold">Performance Optimizer</span>
          </div>
          
          {isOptimizing && (
            <div className="flex items-center text-yellow-400 mb-2">
              <Zap className="w-4 h-4 mr-2 animate-pulse" />
              Optimizing...
            </div>
          )}
          
          {performanceScore !== null && (
            <div className="mb-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">Performance Score:</span>
                <span className={`font-bold ${
                  performanceScore >= 80 ? 'text-green-400' :
                  performanceScore >= 60 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {performanceScore}/100
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    performanceScore >= 80 ? 'bg-green-400' :
                    performanceScore >= 60 ? 'bg-yellow-400' : 'bg-red-400'
                  }`}
                  style={{ width: `${performanceScore}%` }}
                />
              </div>
            </div>
          )}
          
          {optimizations.length > 0 && (
            <div className="space-y-1">
              <span className="text-sm font-medium">Optimizations Applied:</span>
              <ul className="text-xs space-y-1">
                {optimizations.map((optimization, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-400 mr-1" />
                    {optimization}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;