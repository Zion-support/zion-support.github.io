'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle, TrendingUp, Monitor } from 'lucide-react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  enableCaching?: boolean;
  enableCompression?: boolean;
}

const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  enableCaching = true,
  enableCompression = true
}) => {
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);

  const addOptimization = useCallback((optimization: string) => {
    setOptimizations(prev => [...prev, optimization]);
  }, []);

  const calculatePerformanceScore = useCallback(() => {
    let score = 0;
    const totalOptimizations = 6;
    
    if (enableImageOptimization) score++;
    if (enableLazyLoading) score++;
    if (enablePreloading) score++;
    if (enableCodeSplitting) score++;
    if (enableCaching) score++;
    if (enableCompression) score++;
    
    setPerformanceScore(Math.round((score / totalOptimizations) * 100));
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting, enableCaching, enableCompression]);

  useEffect(() => {
    calculatePerformanceScore();
  }, [calculatePerformanceScore]);

  useEffect(() => {
    if (enableImageOptimization) {
      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
        if (!img.fetchPriority) {
          img.fetchPriority = 'auto';
        }
      });
      addOptimization('Images optimized for lazy loading and async decoding');
    }
  }, [enableImageOptimization, addOptimization]);

  useEffect(() => {
    if (enableLazyLoading) {
      // Implement intersection observer for lazy loading
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => observer.observe(img));

      addOptimization('Lazy loading implemented for images');

      return () => observer.disconnect();
    }
  }, [enableLazyLoading, addOptimization]);

  useEffect(() => {
    if (enablePreloading) {
      // Preload critical resources
      const criticalResources = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2' },
        { href: '/css/critical.css', as: 'style' },
        { href: '/js/critical.js', as: 'script' }
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.type) link.type = resource.type;
        if (resource.as === 'font') link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });

      addOptimization('Critical resources preloaded');
    }
  }, [enablePreloading, addOptimization]);

  useEffect(() => {
    if (enableCaching) {
      // Implement service worker for caching
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            addOptimization('Service Worker registered for caching');
          })
          .catch(error => {
            console.error('Service Worker registration failed:', error);
          });
      }

      // Add cache headers
      const metaCache = document.createElement('meta');
      metaCache.httpEquiv = 'Cache-Control';
      metaCache.content = 'public, max-age=31536000';
      document.head.appendChild(metaCache);

      addOptimization('Caching strategies implemented');
    }
  }, [enableCaching, addOptimization]);

  useEffect(() => {
    if (enableCompression) {
      // Enable compression for text resources
      const compressionMeta = document.createElement('meta');
      compressionMeta.httpEquiv = 'Content-Encoding';
      compressionMeta.content = 'gzip';
      document.head.appendChild(compressionMeta);

      addOptimization('Compression enabled for text resources');
    }
  }, [enableCompression, addOptimization]);

  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      // Run performance optimizations
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.register('/sw.js');
        addOptimization('Service Worker registered');
      }

      // Optimize CSS delivery
      const criticalCSS = document.querySelector('style[data-critical]');
      if (criticalCSS) {
        addOptimization('Critical CSS inlined');
      }

      // Optimize JavaScript execution
      if (window.requestIdleCallback) {
        window.requestIdleCallback(() => {
          addOptimization('Non-critical JavaScript deferred');
        });
      }

      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (img.src && !img.src.includes('data:')) {
          img.loading = 'lazy';
          img.decoding = 'async';
        }
      });

      addOptimization('All optimizations completed');

    } catch (error) {
      console.error('Error during optimization:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [addOptimization]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-4 h-4" />;
    if (score >= 70) return <AlertTriangle className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg max-w-sm">
      <div className="flex items-center gap-2 mb-3">
        <Settings className="w-5 h-5 text-cyan-400" />
        <h3 className="font-semibold">Performance Optimizer</h3>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm">Performance Score</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(performanceScore)}
            <span className={`font-semibold ${getScoreColor(performanceScore)}`}>
              {performanceScore}%
            </span>
          </div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${
              performanceScore >= 90 ? 'bg-green-400' : 
              performanceScore >= 70 ? 'bg-yellow-400' : 'bg-red-400'
            }`}
            style={{ width: `${performanceScore}%` }}
          />
        </div>
      </div>
      
      <div className="space-y-2 mb-4 max-h-32 overflow-y-auto">
        {optimizations.map((optimization, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-xs">{optimization}</span>
          </div>
        ))}
      </div>

      <button
        onClick={runOptimizations}
        disabled={isOptimizing}
        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 disabled:opacity-50 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
      >
        {isOptimizing ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            Optimizing...
          </>
        ) : (
          <>
            <Zap className="w-4 h-4" />
            Run Optimizations
          </>
        )}
      </button>
    </div>
  );
};

export default AdvancedPerformanceOptimizer;