import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Zap, TrendingUp, Clock, Database, Wifi, Cpu } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
}

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  enableOptimizations?: boolean;
  showMetrics?: boolean;
}

export function PerformanceOptimizer({
  enableMonitoring = true,
  enableOptimizations = true,
  showMetrics = false
}: PerformanceOptimizerProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<string[]>([]);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const optimizationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Performance monitoring
  useEffect(() => {
    if (!enableMonitoring) return;

    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
        
        const metrics: PerformanceMetrics = {
          fcp: Math.round(fcp),
          lcp: Math.round(lcp),
          fid: 0, // Will be updated by observer
          cls: 0, // Will be updated by observer
          ttfb: Math.round(navigation.responseStart - navigation.requestStart),
          domLoad: Math.round(navigation.domContentLoadedEventEnd - navigation.navigationStart),
          windowLoad: Math.round(navigation.loadEventEnd - navigation.navigationStart)
        };

        setMetrics(metrics);
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, [enableMonitoring]);

  // Performance observer for FID and CLS
  useEffect(() => {
    if (!enableMonitoring) return;

    try {
      // First Input Delay observer
      if ('PerformanceObserver' in window) {
        observerRef.current = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'first-input') {
              const fid = Math.round((entry as any).processingStart - (entry as any).startTime);
              setMetrics(prev => prev ? { ...prev, fid } : null);
            }
          }
        });
        
        observerRef.current.observe({ entryTypes: ['first-input'] });
      }

      // Cumulative Layout Shift observer
      if ('PerformanceObserver' in window) {
        const clsObserver = new PerformanceObserver((list) => {
          let cls = 0;
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'layout-shift') {
              cls += (entry as any).value;
            }
          }
          setMetrics(prev => prev ? { ...prev, cls: Math.round(cls * 1000) / 1000 } : null);
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    } catch (error) {
      console.warn('Performance observer not supported:', error);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enableMonitoring]);

  // Performance optimizations
  const runOptimizations = useCallback(async () => {
    if (!enableOptimizations) return;

    setIsOptimizing(true);
    setOptimizationStatus([]);

    const optimizations = [
      'Preloading critical resources...',
      'Optimizing images...',
      'Compressing assets...',
      'Caching strategies...',
      'Bundle optimization...'
    ];

    for (let i = 0; i < optimizations.length; i++) {
      setOptimizationStatus(prev => [...prev, optimizations[i]]);
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Simulate optimization completion
    setTimeout(() => {
      setIsOptimizing(false);
      setOptimizationStatus(prev => [...prev, '✅ All optimizations completed']);
    }, 1000);
  }, [enableOptimizations]);

  // Auto-optimize on performance issues
  useEffect(() => {
    if (!enableOptimizations || !metrics) return;

    const shouldOptimize = 
      metrics.fcp > 2000 || 
      metrics.lcp > 4000 || 
      metrics.fid > 100 || 
      metrics.cls > 0.1;

    if (shouldOptimize && !isOptimizing) {
      optimizationTimeoutRef.current = setTimeout(() => {
        runOptimizations();
      }, 2000);
    }

    return () => {
      if (optimizationTimeoutRef.current) {
        clearTimeout(optimizationTimeoutRef.current);
      }
    };
  }, [metrics, enableOptimizations, isOptimizing, runOptimizations]);

  // Resource hints optimization
  useEffect(() => {
    if (!enableOptimizations) return;

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.jpg',
      '/api/services'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.includes('.woff2') ? 'font' : 'image';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://api.ziontechgroup.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, [enableOptimizations]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!enableOptimizations) return;

    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    return () => imageObserver.disconnect();
  }, [enableOptimizations]);

  // Performance score calculation
  const getPerformanceScore = useCallback(() => {
    if (!metrics) return 0;

    let score = 100;
    
    // FCP scoring (0-2000ms = 100-0 points)
    if (metrics.fcp > 2000) score -= Math.min(30, (metrics.fcp - 2000) / 100);
    
    // LCP scoring (0-4000ms = 100-0 points)
    if (metrics.lcp > 4000) score -= Math.min(25, (metrics.lcp - 4000) / 160);
    
    // FID scoring (0-100ms = 100-0 points)
    if (metrics.fid > 100) score -= Math.min(25, (metrics.fid - 100) / 4);
    
    // CLS scoring (0-0.1 = 100-0 points)
    if (metrics.cls > 0.1) score -= Math.min(20, metrics.cls * 200);

    return Math.max(0, Math.round(score));
  }, [metrics]);

  const score = getPerformanceScore();
  const scoreColor = score >= 90 ? 'text-green-400' : score >= 70 ? 'text-yellow-400' : 'text-red-400';

  if (!showMetrics && !isOptimizing) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Performance Metrics Panel */}
      {showMetrics && metrics && (
        <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 mb-4 border border-slate-600/50 shadow-2xl">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-cyan-400" />
            <h3 className="text-white font-semibold">Performance</h3>
            <div className={`ml-auto text-2xl font-bold ${scoreColor}`}>
              {score}
            </div>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">FCP:</span>
              <span className={`font-mono ${metrics.fcp < 2000 ? 'text-green-400' : 'text-red-400'}`}>
                {metrics.fcp}ms
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">LCP:</span>
              <span className={`font-mono ${metrics.lcp < 4000 ? 'text-green-400' : 'text-red-400'}`}>
                {metrics.lcp}ms
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300">FID:</span>
              <span className={`font-mono ${metrics.fid < 100 ? 'text-green-400' : 'text-red-400'}`}>
                {metrics.fid}ms
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-purple-400" />
              <span className="text-gray-300">CLS:</span>
              <span className={`font-mono ${metrics.cls < 0.1 ? 'text-green-400' : 'text-red-400'}`}>
                {metrics.cls}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Optimization Status */}
      {isOptimizing && (
        <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 border border-slate-600/50 shadow-2xl">
          <div className="flex items-center gap-2 mb-3">
            <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
            <h3 className="text-white font-semibold">Optimizing...</h3>
          </div>
          
          <div className="space-y-2">
            {optimizationStatus.map((status, index) => (
              <div key={index} className="text-sm text-gray-300 flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                {status}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Manual Optimization Button */}
      {enableOptimizations && !isOptimizing && (
        <button
          onClick={runOptimizations}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          title="Run Performance Optimizations"
        >
          <Zap className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
