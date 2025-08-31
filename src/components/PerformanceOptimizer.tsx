import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  targetFCP?: number;
  targetLCP?: number;
  targetFID?: number;
  targetCLS?: number;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  targetFCP = 1800,
  targetLCP = 2500,
  targetFID = 100,
  targetCLS = 0.1
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  // Calculate performance score based on Core Web Vitals
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;

    // FCP scoring (0-100)
    if (metrics.fcp > targetFCP) {
      score -= Math.min(25, ((metrics.fcp - targetFCP) / targetFCP) * 25);
    }

    // LCP scoring (0-100)
    if (metrics.lcp > targetLCP) {
      score -= Math.min(25, ((metrics.lcp - targetLCP) / targetLCP) * 25);
    }

    // FID scoring (0-100)
    if (metrics.fid > targetFID) {
      score -= Math.min(25, ((metrics.fid - targetFID) / targetFID) * 25);
    }

    // CLS scoring (0-100)
    if (metrics.cls > targetCLS) {
      score -= Math.min(25, ((metrics.cls / targetCLS) * 25));
    }

    return Math.max(0, Math.round(score));
  }, [targetFCP, targetLCP, targetFID, targetCLS]);

  // Generate optimization recommendations
  const generateOptimizations = useCallback((metrics: PerformanceMetrics): string[] => {
    const recommendations: string[] = [];

    if (metrics.fcp > targetFCP) {
      recommendations.push('Optimize First Contentful Paint: Consider reducing render-blocking resources');
    }

    if (metrics.lcp > targetLCP) {
      recommendations.push('Optimize Largest Contentful Paint: Optimize images and critical resources');
    }

    if (metrics.fid > targetFID) {
      recommendations.push('Reduce First Input Delay: Minimize main thread blocking');
    }

    if (metrics.cls > targetCLS) {
      recommendations.push('Improve Cumulative Layout Shift: Set explicit dimensions for images and media');
    }

    if (metrics.ttfb > 600) {
      recommendations.push('Optimize Time to First Byte: Improve server response time');
    }

    return recommendations;
  }, [targetFCP, targetLCP, targetFID, targetCLS]);

  // Monitor Core Web Vitals
  useEffect(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => prev ? { ...prev, fcp: entry.startTime } : null);
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
        }
        
        if (entry.entryType === 'first-input') {
          setMetrics(prev => prev ? { ...prev, fid: entry.processingStart - entry.startTime } : null);
        }
        
        if (entry.entryType === 'layout-shift') {
          const layoutShift = entry as any;
          setMetrics(prev => prev ? { ...prev, cls: (prev.cls || 0) + layoutShift.value } : null);
        }
      });
    });

    // Observe different performance entry types
    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Get TTFB from navigation timing
    if ('navigation' in performance) {
      const navEntry = performance.getEntriesByType('navigation')[0] as any;
      if (navEntry) {
        setMetrics(prev => prev ? { ...prev, ttfb: navEntry.responseStart - navEntry.requestStart } : null);
      }
    }

    return () => observer.disconnect();
  }, [enabled]);

  // Calculate performance score and optimizations when metrics change
  useEffect(() => {
    if (metrics && Object.values(metrics).every(val => val !== null && val !== undefined)) {
      const score = calculatePerformanceScore(metrics);
      setPerformanceScore(score);
      
      const recommendations = generateOptimizations(metrics);
      setOptimizations(recommendations);
    }
  }, [metrics, calculatePerformanceScore, generateOptimizations]);

  // Performance optimization functions
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/fonts/main-font.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'style';
      link.crossOrigin = resource.endsWith('.woff2') ? 'anonymous' : undefined;
      document.head.appendChild(link);
    });
  }, []);

  const enableServiceWorker = useCallback(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, []);

  // Apply optimizations on mount
  useEffect(() => {
    if (enabled) {
      optimizeImages();
      preloadCriticalResources();
      enableServiceWorker();
    }
  }, [enabled, optimizeImages, preloadCriticalResources, enableServiceWorker]);

  if (!enabled) return null;

  return (
    <>
      {showMetrics && metrics && (
        <div className="fixed bottom-4 right-4 bg-slate-900/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-sm max-w-xs z-50">
          <h3 className="font-semibold mb-2">Performance Metrics</h3>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={metrics.fcp > targetFCP ? 'text-red-400' : 'text-green-400'}>
                {Math.round(metrics.fcp)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={metrics.lcp > targetLCP ? 'text-red-400' : 'text-green-400'}>
                {Math.round(metrics.lcp)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>FID:</span>
              <span className={metrics.fid > targetFID ? 'text-red-400' : 'text-green-400'}>
                {Math.round(metrics.fid)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className={metrics.cls > targetCLS ? 'text-red-400' : 'text-green-400'}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>TTFB:</span>
              <span className={metrics.ttfb > 600 ? 'text-red-400' : 'text-green-400'}>
                {Math.round(metrics.ttfb)}ms
              </span>
            </div>
          </div>
          
          <div className="mt-3 pt-2 border-t border-white/20">
            <div className="flex justify-between items-center">
              <span>Score:</span>
              <span className={`font-bold ${
                performanceScore >= 90 ? 'text-green-400' :
                performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {performanceScore}/100
              </span>
            </div>
          </div>

          {optimizations.length > 0 && (
            <div className="mt-3 pt-2 border-t border-white/20">
              <h4 className="font-semibold mb-2">Optimizations:</h4>
              <ul className="text-xs space-y-1">
                {optimizations.map((opt, index) => (
                  <li key={index} className="text-yellow-300">• {opt}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};
