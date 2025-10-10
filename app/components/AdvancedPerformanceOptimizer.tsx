'use client';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle, Loader } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  bundleSize: number;
  imageCount: number;
  scriptCount: number;
}

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  enableServiceWorker?: boolean;
  enableResourceHints?: boolean;
  enableCompression?: boolean;
}

const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  enableServiceWorker = true,
  enableResourceHints = true,
  enableCompression = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => prev ? { ...prev, fcp: entry.startTime } : null);
          }
        }
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
        }
        if (entry.entryType === 'first-input') {
          setMetrics(prev => prev ? { ...prev, fid: entry.processingStart - entry.startTime } : null);
        }
        if (entry.entryType === 'layout-shift') {
          setMetrics(prev => prev ? { ...prev, cls: (prev.cls || 0) + (entry as any).value } : null);
        }
      });
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Measure TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => prev ? { 
        ...prev, 
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
      } : null);
    }

    return () => observer.disconnect();
  }, []);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    let optimizedCount = 0;

    images.forEach((img) => {
      // Add loading="lazy" for non-critical images
      if (enableLazyLoading && !img.hasAttribute('loading')) {
        img.loading = 'lazy';
        optimizedCount++;
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.decoding = 'async';
        optimizedCount++;
      }

      // Add proper alt text if missing
      if (!img.alt) {
        img.alt = 'Image';
        optimizedCount++;
      }

      // Optimize srcset for responsive images
      if (!img.srcset && img.src) {
        const src = img.src;
        const baseName = src.substring(0, src.lastIndexOf('.'));
        const extension = src.substring(src.lastIndexOf('.'));
        
        img.srcset = `
          ${baseName}-320w${extension} 320w,
          ${baseName}-640w${extension} 640w,
          ${baseName}-1024w${extension} 1024w,
          ${baseName}-1920w${extension} 1920w
        `;
        img.sizes = '(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px';
        optimizedCount++;
      }
    });

    if (optimizedCount > 0) {
      setOptimizations(prev => [...prev, `Optimized ${optimizedCount} images`]);
    }
  }, [enableImageOptimization, enableLazyLoading]);

  // Resource hints
  const addResourceHints = useCallback(() => {
    if (!enableResourceHints || typeof window === 'undefined') return;

    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      Object.assign(link, hint);
      document.head.appendChild(link);
    });

    setOptimizations(prev => [...prev, 'Added resource hints']);
  }, [enableResourceHints]);

  // Service Worker registration
  const registerServiceWorker = useCallback(async () => {
    if (!enableServiceWorker || typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered:', registration);
      setOptimizations(prev => [...prev, 'Service Worker registered']);
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }, [enableServiceWorker]);

  // Critical resource preloading
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading || typeof window === 'undefined') return;

    const criticalResources = [
      { href: '/css/critical.css', as: 'style' },
      { href: '/js/critical.js', as: 'script' },
      { href: '/images/hero-bg.webp', as: 'image' },
      { href: '/images/logo.svg', as: 'image' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      document.head.appendChild(link);
    });

    setOptimizations(prev => [...prev, 'Preloaded critical resources']);
  }, [enablePreloading]);

  // Bundle analysis
  const analyzeBundle = useCallback(() => {
    if (typeof window === 'undefined') return;

    const scripts = document.querySelectorAll('script[src]');
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    const images = document.querySelectorAll('img[src]');

    let totalSize = 0;
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src) {
        // Estimate size based on common patterns
        if (src.includes('vendor')) totalSize += 200000; // ~200KB
        if (src.includes('chunk')) totalSize += 50000;  // ~50KB
        if (src.includes('main')) totalSize += 100000;  // ~100KB
      }
    });

    setMetrics(prev => prev ? {
      ...prev,
      bundleSize: totalSize,
      imageCount: images.length,
      scriptCount: scripts.length
    } : null);
  }, []);

  // Main optimization function
  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    setOptimizations([]);

    try {
      // Run optimizations in parallel
      await Promise.all([
        optimizeImages(),
        addResourceHints(),
        preloadCriticalResources(),
        registerServiceWorker(),
        analyzeBundle()
      ]);

      // Measure performance after optimizations
      measurePerformance();
    } catch (error) {
      console.error('Optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [optimizeImages, addResourceHints, preloadCriticalResources, registerServiceWorker, analyzeBundle, measurePerformance]);

  // Auto-run optimizations on mount
  useEffect(() => {
    runOptimizations();
  }, [runOptimizations]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    if (!metrics) return 0;

    let score = 100;
    
    // FCP scoring (0-2.5s is good)
    if (metrics.fcp > 2500) score -= 20;
    else if (metrics.fcp > 1800) score -= 10;
    
    // LCP scoring (0-2.5s is good)
    if (metrics.lcp > 4000) score -= 25;
    else if (metrics.lcp > 2500) score -= 15;
    
    // FID scoring (0-100ms is good)
    if (metrics.fid > 300) score -= 20;
    else if (metrics.fid > 100) score -= 10;
    
    // CLS scoring (0-0.1 is good)
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;
    
    // TTFB scoring (0-600ms is good)
    if (metrics.ttfb > 1500) score -= 15;
    else if (metrics.ttfb > 600) score -= 10;

    return Math.max(0, score);
  }, [metrics]);

  return (
    <div className="performance-optimizer">
      {/* Performance metrics display (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg max-w-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold">Performance</h3>
            {isOptimizing && <Loader className="w-4 h-4 animate-spin" />}
          </div>
          
          {metrics && (
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span>Score:</span>
                <span className={performanceScore >= 90 ? 'text-green-400' : performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400'}>
                  {performanceScore}/100
                </span>
              </div>
              <div className="flex justify-between">
                <span>FCP:</span>
                <span>{metrics.fcp?.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between">
                <span>LCP:</span>
                <span>{metrics.lcp?.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between">
                <span>FID:</span>
                <span>{metrics.fid?.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between">
                <span>CLS:</span>
                <span>{metrics.cls?.toFixed(3)}</span>
              </div>
              <div className="flex justify-between">
                <span>TTFB:</span>
                <span>{metrics.ttfb?.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between">
                <span>Bundle:</span>
                <span>{(metrics.bundleSize / 1024).toFixed(0)}KB</span>
              </div>
            </div>
          )}
          
          {optimizations.length > 0 && (
            <div className="mt-2 pt-2 border-t border-slate-600">
              <div className="text-xs text-gray-300 mb-1">Optimizations:</div>
              {optimizations.map((opt, index) => (
                <div key={index} className="flex items-center text-xs text-green-400">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceOptimizer;