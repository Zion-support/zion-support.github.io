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
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries[entries.length - 1];
          if (fcp) {
            setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcp = entries[entries.length - 1];
          if (lcp) {
            setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fid = entries[entries.length - 1];
          if (fid) {
            setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
          }
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

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }
  }, []);

  const getPerformanceScore = (): number => {
    if (!metrics) return 0;
    
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;
    
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

  const getPerformanceGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  const getGradeColor = (grade: string): string => {
    switch (grade) {
      case 'A': return 'text-green-400';
      case 'B': return 'text-blue-400';
      case 'C': return 'text-yellow-400';
      case 'D': return 'text-orange-400';
      case 'F': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const optimizePerformance = async () => {
    setIsOptimizing(true);
    
    try {
      // Preload critical resources
      const criticalResources = [
        '/images/hero-ai-solutions.jpg',
        '/images/hero-quantum.jpg',
        '/images/hero-autonomous.jpg'
      ];
      
      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = resource;
        document.head.appendChild(link);
      });

      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });

      // Optimize fonts
      const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
      fontLinks.forEach(link => {
        link.setAttribute('crossorigin', 'anonymous');
      });

      // Wait a bit to show optimization effect
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  };

  const score = getPerformanceScore();
  const grade = getPerformanceGrade(score);

  if (!metrics) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-4 z-40 bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-lg shadow-2xl shadow-cyan-400/10 p-4 max-w-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
        <div className={`text-lg font-bold ${getGradeColor(grade)}`}>
          {grade}
        </div>
      </div>
      
      <div className="space-y-2 mb-3">
        <div className="flex justify-between text-xs">
          <span className="text-gray-400">FCP:</span>
          <span className={metrics.fcp > 1800 ? 'text-red-400' : metrics.fcp > 1000 ? 'text-yellow-400' : 'text-green-400'}>
            {metrics.fcp.toFixed(0)}ms
          </span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-400">LCP:</span>
          <span className={metrics.lcp > 4000 ? 'text-red-400' : metrics.lcp > 2500 ? 'text-yellow-400' : 'text-green-400'}>
            {metrics.lcp.toFixed(0)}ms
          </span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-400">FID:</span>
          <span className={metrics.fid > 300 ? 'text-red-400' : metrics.fid > 100 ? 'text-yellow-400' : 'text-green-400'}>
            {metrics.fid.toFixed(0)}ms
          </span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-400">CLS:</span>
          <span className={metrics.cls > 0.25 ? 'text-red-400' : metrics.cls > 0.1 ? 'text-yellow-400' : 'text-green-400'}>
            {metrics.cls.toFixed(3)}
          </span>
        </div>
      </div>
      
      <div className="w-full bg-slate-700 rounded-full h-2 mb-3">
        <motion.div
          className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <button
        onClick={optimizePerformance}
        disabled={isOptimizing}
        className="w-full px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded-md hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 disabled:opacity-50"
      >
        {isOptimizing ? 'Optimizing...' : 'Optimize Performance'}
      </button>
    </motion.div>
  );
}
