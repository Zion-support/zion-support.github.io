import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcpScore: string;
  lcpScore: string;
  fidScore: string;
  clsScore: string;
  ttfbScore: string;
  overallScore: string;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  autoOptimize = true,
  threshold = {
    fcp: 1800,
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    ttfb: 600
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const metricsRef = useRef<PerformanceMetrics | null>(null);

  // Calculate performance scores
  const calculateScore = (value: number, threshold: number, metric: string): string => {
    if (metric === 'cls') {
      // CLS is better when lower
      if (value <= threshold * 0.5) return '🟢 Excellent';
      if (value <= threshold) return '🟡 Good';
      if (value <= threshold * 1.5) return '🟠 Needs Improvement';
      return '🔴 Poor';
    } else {
      // Other metrics are better when lower
      if (value <= threshold * 0.5) return '🟢 Excellent';
      if (value <= threshold) return '🟡 Good';
      if (value <= threshold * 1.5) return '🟠 Needs Improvement';
      return '🔴 Poor';
    }
  };

  // Calculate overall performance score
  const calculateOverallScore = (metrics: PerformanceMetrics): string => {
    const scores = [
      metrics.fcpScore,
      metrics.lcpScore,
      metrics.fidScore,
      metrics.clsScore,
      metrics.ttfbScore
    ];
    
    const excellentCount = scores.filter(score => score.includes('🟢')).length;
    const goodCount = scores.filter(score => score.includes('🟡')).length;
    const needsImprovementCount = scores.filter(score => score.includes('🟠')).length;
    const poorCount = scores.filter(score => score.includes('🔴')).length;

    if (excellentCount >= 4) return '🟢 Excellent';
    if (excellentCount + goodCount >= 4) return '🟡 Good';
    if (needsImprovementCount + poorCount <= 2) return '🟠 Needs Improvement';
    return '🔴 Poor';
  };

  // Measure Core Web Vitals
  const measureCoreWebVitals = () => {
    if (!('PerformanceObserver' in window)) return;

    try {
      // First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      const fcp = fcpEntry ? fcpEntry.startTime : 0;

      // Largest Contentful Paint
      const lcpEntry = performance.getEntriesByName('largest-contentful-paint')[0];
      const lcp = lcpEntry ? lcpEntry.startTime : 0;

      // First Input Delay (approximation)
      const fid = performance.now() - performance.timeOrigin;

      // Cumulative Layout Shift
      let cls = 0;
      if ('PerformanceObserver' in window) {
        const clsEntries = performance.getEntriesByType('layout-shift');
        cls = clsEntries.reduce((sum, entry: any) => sum + entry.value, 0);
      }

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : 0;

      const performanceMetrics: PerformanceMetrics = {
        fcp,
        lcp,
        fid,
        cls,
        ttfb,
        fcpScore: calculateScore(fcp, threshold.fcp, 'fcp'),
        lcpScore: calculateScore(lcp, threshold.lcp, 'lcp'),
        fidScore: calculateScore(fid, threshold.fid, 'fid'),
        clsScore: calculateScore(cls, threshold.cls, 'cls'),
        ttfbScore: calculateScore(ttfb, threshold.ttfb, 'ttfb'),
        overallScore: ''
      };

      performanceMetrics.overallScore = calculateOverallScore(performanceMetrics);
      setMetrics(performanceMetrics);
      metricsRef.current = performanceMetrics;

      // Auto-optimize if enabled
      if (autoOptimize) {
        autoOptimizePerformance(performanceMetrics);
      }
    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }
  };

  // Auto-optimize performance based on metrics
  const autoOptimizePerformance = (currentMetrics: PerformanceMetrics) => {
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    // Check FCP
    if (currentMetrics.fcp > threshold.fcp) {
      newOptimizations.push('Optimizing First Contentful Paint - enabling resource preloading');
      preloadCriticalResources();
    }

    // Check LCP
    if (currentMetrics.lcp > threshold.lcp) {
      newOptimizations.push('Optimizing Largest Contentful Paint - prioritizing above-the-fold content');
      optimizeLCP();
    }

    // Check CLS
    if (currentMetrics.cls > threshold.cls) {
      newOptimizations.push('Optimizing Cumulative Layout Shift - fixing layout stability');
      optimizeCLS();
    }

    // Check TTFB
    if (currentMetrics.ttfb > threshold.ttfb) {
      newOptimizations.push('Optimizing Time to First Byte - improving server response');
      optimizeTTFB();
    }

    setOptimizations(newOptimizations);
    
    setTimeout(() => {
      setIsOptimizing(false);
      setOptimizations([]);
    }, 3000);
  };

  // Preload critical resources
  const preloadCriticalResources = () => {
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css',
      '/js/critical.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  };

  // Optimize LCP
  const optimizeLCP = () => {
    // Prioritize above-the-fold images
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach((img, index) => {
      if (index < 3) { // First 3 images
        (img as HTMLImageElement).loading = 'eager';
        (img as HTMLImageElement).fetchPriority = 'high';
      }
    });
  };

  // Optimize CLS
  const optimizeCLS = () => {
    // Set explicit dimensions for images and videos
    const mediaElements = document.querySelectorAll('img, video');
    mediaElements.forEach(element => {
      if (!element.hasAttribute('width') || !element.hasAttribute('height')) {
        element.setAttribute('width', '100%');
        element.setAttribute('height', 'auto');
      }
    });
  };

  // Optimize TTFB
  const optimizeTTFB = () => {
    // Enable HTTP/2 Server Push hints
    const pushHints = [
      { resource: '/css/main.css', as: 'style' },
      { resource: '/js/main.js', as: 'script' }
    ];

    pushHints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = hint.resource;
      link.as = hint.as as any;
      document.head.appendChild(link);
    });
  };

  // Manual optimization trigger
  const triggerOptimization = () => {
    if (metricsRef.current) {
      autoOptimizePerformance(metricsRef.current);
    }
  };

  useEffect(() => {
    if (!enabled) return;

    // Measure performance after page load
    const measurePerformance = () => {
      setTimeout(measureCoreWebVitals, 1000);
    };

    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Set up Performance Observer for real-time monitoring
    if ('PerformanceObserver' in window) {
      try {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'largest-contentful-paint') {
              // Re-measure when LCP changes
              setTimeout(measureCoreWebVitals, 100);
            }
          });
        });

        observerRef.current.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift'] });
      } catch (error) {
        console.warn('PerformanceObserver setup failed:', error);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('load', measurePerformance);
    };
  }, [enabled, autoOptimize]);

  if (!enabled || !showMetrics) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Performance Monitor
          </h3>
          <button
            onClick={triggerOptimization}
            disabled={isOptimizing}
            className="text-xs px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {isOptimizing ? 'Optimizing...' : 'Optimize'}
          </button>
        </div>

        {metrics && (
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={metrics.fcpScore.includes('🟢') ? 'text-green-600' : 
                           metrics.fcpScore.includes('🟡') ? 'text-yellow-600' : 
                           metrics.fcpScore.includes('🟠') ? 'text-orange-600' : 'text-red-600'}>
                {metrics.fcpScore} ({Math.round(metrics.fcp)}ms)
              </span>
            </div>
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={metrics.lcpScore.includes('🟢') ? 'text-green-600' : 
                           metrics.lcpScore.includes('🟡') ? 'text-yellow-600' : 
                           metrics.lcpScore.includes('🟠') ? 'text-orange-600' : 'text-red-600'}>
                {metrics.lcpScore} ({Math.round(metrics.lcp)}ms)
              </span>
            </div>
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className={metrics.clsScore.includes('🟢') ? 'text-green-600' : 
                           metrics.clsScore.includes('🟡') ? 'text-yellow-600' : 
                           metrics.clsScore.includes('🟠') ? 'text-orange-600' : 'text-red-600'}>
                {metrics.clsScore} ({metrics.cls.toFixed(3)})
              </span>
            </div>
            <div className="flex justify-between">
              <span>TTFB:</span>
              <span className={metrics.ttfbScore.includes('🟢') ? 'text-green-600' : 
                           metrics.ttfbScore.includes('🟡') ? 'text-yellow-600' : 
                           metrics.ttfbScore.includes('🟠') ? 'text-orange-600' : 'text-red-600'}>
                {metrics.ttfbScore} ({Math.round(metrics.ttfb)}ms)
              </span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold">
              <span>Overall:</span>
              <span className={metrics.overallScore.includes('🟢') ? 'text-green-600' : 
                           metrics.overallScore.includes('🟡') ? 'text-yellow-600' : 
                           metrics.overallScore.includes('🟠') ? 'text-orange-600' : 'text-red-600'}>
                {metrics.overallScore}
              </span>
            </div>
          </div>
        )}

        {optimizations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700"
          >
            <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Recent Optimizations:
            </h4>
            <ul className="space-y-1">
              {optimizations.map((optimization, index) => (
                <li key={index} className="text-xs text-gray-600 dark:text-gray-400">
                  • {optimization}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
