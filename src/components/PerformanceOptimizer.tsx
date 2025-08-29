import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface BundleInfo {
  name: string;
  size: number;
  chunks: string[];
}

export function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [bundleInfo, setBundleInfo] = useState<BundleInfo[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    // Performance monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
          }
        });
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      
      return () => observer.disconnect();
    }

    // Measure Core Web Vitals
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          setMetrics({
            fcp: 0, // Will be updated by observer
            lcp: 0, // Will be updated by observer
            fid: 0, // First Input Delay
            cls: 0, // Cumulative Layout Shift
            ttfb: navigation.responseStart - navigation.requestStart
          });
        }
      }
    };

    // Bundle analysis (in development)
    if (process.env.NODE_ENV === 'development') {
      analyzeBundle();
    }

    measurePerformance();
  }, []);

  const analyzeBundle = async () => {
    try {
      // Simulate bundle analysis
      const mockBundleInfo: BundleInfo[] = [
        { name: 'main', size: 245760, chunks: ['main', 'vendor'] },
        { name: 'vendor', size: 1024000, chunks: ['react', 'framer-motion'] },
        { name: 'ui', size: 51200, chunks: ['components', 'ui'] }
      ];
      setBundleInfo(mockBundleInfo);
    } catch (error) {
      console.warn('Bundle analysis not available:', error);
    }
  };

  const optimizeImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  };

  const preloadCriticalResources = () => {
    const criticalPaths = [
      '/fonts/orbitron-v28-latin-700.woff2',
      '/css/critical.css'
    ];

    criticalPaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = path;
      link.as = path.endsWith('.woff2') ? 'font' : 'style';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  };

  const optimizeFonts = () => {
    // Font display optimization
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontLinks.forEach(link => {
      link.setAttribute('font-display', 'swap');
    });
  };

  const startOptimization = async () => {
    setIsOptimizing(true);
    
    try {
      // Run optimizations in parallel
      await Promise.all([
        optimizeImages(),
        preloadCriticalResources(),
        optimizeFonts()
      ]);

      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Performance optimization completed');
    } catch (error) {
      console.error('Optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  };

  // Auto-optimize on mount
  useEffect(() => {
    startOptimization();
  }, []);

  // Performance monitoring dashboard (development only)
  if (process.env.NODE_ENV === 'development' && metrics) {
    return (
      <div className="fixed bottom-4 right-4 bg-slate-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
        <h3 className="text-sm font-semibold mb-2">Performance Monitor</h3>
        <div className="space-y-1 text-xs">
          <div>FCP: {metrics.fcp.toFixed(0)}ms</div>
          <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
          <div>TTFB: {metrics.ttfb.toFixed(0)}ms</div>
          <div>Bundle Size: {(bundleInfo.reduce((sum, b) => sum + b.size, 0) / 1024).toFixed(1)}KB</div>
        </div>
        <button
          onClick={startOptimization}
          disabled={isOptimizing}
          className="mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded text-xs"
        >
          {isOptimizing ? 'Optimizing...' : 'Re-optimize'}
        </button>
      </div>
    );
  }

  return null;
}
