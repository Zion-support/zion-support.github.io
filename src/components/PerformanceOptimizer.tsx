import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    // Performance monitoring
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[0] as PerformanceEntry;
        setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1] as PerformanceEntry;
        setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[0] as PerformanceEntry;
        setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }
    }

    // Preload critical resources
    preloadCriticalResources();
    
    // Optimize images
    optimizeImages();
    
    // Enable service worker for caching
    enableServiceWorker();

    return () => {
      fcpObserver?.disconnect();
      lcpObserver?.disconnect();
      fidObserver?.disconnect();
      clsObserver?.disconnect();
    };
  }, []);

  const preloadCriticalResources = () => {
    const criticalResources = [
      '/fonts/Orbitron-Bold.woff2',
      '/fonts/Rajdhani-Medium.woff2',
      '/images/hero-ai-solutions.jpg',
      '/images/hero-quantum.jpg',
      '/images/hero-autonomous.jpg'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.includes('.woff2') ? 'font' : 'image';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  };

  const optimizeImages = () => {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  };

  const enableServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);
      } catch (error) {
        console.log('Service Worker registration failed:', error);
      }
    }
  };

  const runOptimizations = async () => {
    setIsOptimizing(true);
    
    // Compress images
    await compressImages();
    
    // Minify CSS/JS
    await minifyAssets();
    
    // Optimize fonts
    await optimizeFonts();
    
    setIsOptimizing(false);
  };

  const compressImages = async () => {
    // Simulate image compression
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const minifyAssets = async () => {
    // Simulate asset minification
    await new Promise(resolve => setTimeout(resolve, 800));
  };

  const optimizeFonts = async () => {
    // Simulate font optimization
    await new Promise(resolve => setTimeout(resolve, 600));
  };

  const getPerformanceScore = (): number => {
    if (!metrics) return 0;
    
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1200) score -= 10;
    
    // LCP scoring (0-100)
    if (metrics.lcp > 4000) score -= 20;
    else if (metrics.lcp > 2500) score -= 10;
    
    // FID scoring (0-100)
    if (metrics.fid > 300) score -= 20;
    else if (metrics.fid > 100) score -= 10;
    
    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;
    
    return Math.max(0, score);
  };

  const performanceScore = getPerformanceScore();
  const scoreColor = performanceScore >= 90 ? 'text-green-400' : 
                     performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400';

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        className="bg-slate-900/90 backdrop-blur-md border border-cyan-400/30 rounded-xl p-4 shadow-2xl shadow-cyan-500/20"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
          <div className={`text-lg font-bold ${scoreColor}`}>
            {performanceScore}
          </div>
        </div>
        
        {metrics && (
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-400">FCP:</span>
              <span className="text-white">{metrics.fcp?.toFixed(0)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">LCP:</span>
              <span className="text-white">{metrics.lcp?.toFixed(0)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">FID:</span>
              <span className="text-white">{metrics.fid?.toFixed(0)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">CLS:</span>
              <span className="text-white">{metrics.cls?.toFixed(3)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">TTFB:</span>
              <span className="text-white">{metrics.ttfb?.toFixed(0)}ms</span>
            </div>
          </div>
        )}
        
        <button
          onClick={runOptimizations}
          disabled={isOptimizing}
          className="mt-3 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs px-3 py-2 rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isOptimizing ? 'Optimizing...' : 'Run Optimizations'}
        </button>
      </motion.div>
    </div>
  );
}
