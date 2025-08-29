import React, { useEffect, useCallback, useRef, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fmp: number;
  tti: number;
  tbt: number;
}

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  enableOptimizations?: boolean;
  logMetrics?: boolean;
  showMetrics?: boolean;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableMonitoring = true,
  enableOptimizations = true,
  logMetrics = false,
  showMetrics = false,
  threshold = {
    fcp: 1800,
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    ttfb: 800
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fmp: 0,
    tti: 0,
    tbt: 0
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationResults, setOptimizationResults] = useState<string[]>([]);

  const metricsRef = useRef<PerformanceMetrics>(metrics);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const lcpObserverRef = useRef<PerformanceObserver | null>(null);
  const clsObserverRef = useRef<PerformanceObserver | null>(null);
  const fidObserverRef = useRef<PerformanceObserver | null>(null);

  // Enhanced image optimization with WebP support and lazy loading
  const optimizeImages = useCallback(() => {
    if (!enableOptimizations) return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          if (src) {
            // Check WebP support
            const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
            
            // Create a new image to test WebP support
            const testImg = new Image();
            testImg.onload = () => {
              img.src = webpSrc;
            };
            testImg.onerror = () => {
              img.src = src;
            };
            testImg.src = webpSrc;
            
            img.removeAttribute('data-src');
            img.classList.remove('lazy');
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });

    images.forEach((img) => imageObserver.observe(img));
  }, [enableOptimizations]);

  // Enhanced font optimization with font-display: swap
  const optimizeFonts = useCallback(() => {
    if (!enableOptimizations) return;

    // Preload critical fonts with font-display: swap
    const criticalFonts = [
      'Orbitron:wght@400;500;600;700;800;900&display=swap',
      'Rajdhani:wght@300;400;500;600;700&display=swap'
    ];

    criticalFonts.forEach((font) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = `https://fonts.googleapis.com/css2?family=${font}`;
      link.as = 'style';
      link.setAttribute('font-display', 'swap');
      document.head.appendChild(link);
    });

    // Add font-display: swap to existing font links
    const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
    fontLinks.forEach((link) => {
      if (!link.getAttribute('font-display')) {
        link.setAttribute('font-display', 'swap');
      }
    });
  }, [enableOptimizations]);

  // Enhanced critical CSS optimization
  const optimizeCriticalCSS = useCallback(() => {
    if (!enableOptimizations) return;

    // Inline critical CSS for above-the-fold content
    const criticalCSS = `
      .bg-futuristic { 
        background: linear-gradient(180deg, rgba(2,6,23,1) 0%, rgba(2,6,23,0.95) 100%);
        position: relative;
        overflow: hidden;
      }
      .animate-fade-in { 
        animation: fadeIn 220ms ease-out both;
      }
      .btn-futuristic { 
        background: linear-gradient(135deg, #22ddd2 0%, #2e73ea 100%);
        border: none;
        color: white;
        padding: 12px 24px;
        border-radius: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .container-responsive {
        margin: 0 auto;
        padding: 0 1rem;
        max-width: 80rem;
      }
      @media (min-width: 640px) {
        .container-responsive { padding: 0 1.5rem; }
      }
      @media (min-width: 1024px) {
        .container-responsive { padding: 0 2rem; }
      }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.appendChild(style);
  }, [enableOptimizations]);

  // Enhanced resource hints and preloading
  const optimizeResourceHints = useCallback(() => {
    if (!enableOptimizations) return;

    // Add resource hints for external domains
    const resourceHints = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'dns-prefetch', href: '//cdn.jsdelivr.net' },
      { rel: 'dns-prefetch', href: '//unpkg.com' }
    ];

    resourceHints.forEach((hint) => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossOrigin) {
        link.crossOrigin = hint.crossOrigin;
      }
      document.head.appendChild(link);
    });

    // Preload critical resources
    const criticalResources = [
      { href: '/images/zion-tech-group-logo.png', as: 'image' },
      { href: '/images/hero-background.jpg', as: 'image' }
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      document.head.appendChild(link);
    });
  }, [enableOptimizations]);

  // Enhanced JavaScript optimization
  const optimizeJavaScript = useCallback(() => {
    if (!enableOptimizations) return;

    // Defer non-critical JavaScript
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach((script) => {
      script.setAttribute('defer', '');
      script.removeAttribute('data-defer');
    });

    // Add loading="lazy" to non-critical images
    const images = document.querySelectorAll('img:not([data-src])');
    images.forEach((img, index) => {
      if (index > 5) { // Skip first 5 images (above the fold)
        img.loading = 'lazy';
      }
    });
  }, [enableOptimizations]);

  // Enhanced Core Web Vitals monitoring
  const monitorCoreWebVitals = useCallback(() => {
    if (!enableMonitoring) return;

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        const fcp = fcpEntry.startTime;
        setMetrics(prev => ({ ...prev, fcp }));
        if (logMetrics) {
          console.log('FCP:', fcp, 'ms');
        }
      }
    });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        const lcp = lcpEntry.startTime;
        setMetrics(prev => ({ ...prev, lcp }));
        if (logMetrics) {
          console.log('LCP:', lcp, 'ms');
        }
      }
    });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fid = entry.processingStart - entry.startTime;
        setMetrics(prev => ({ ...prev, fid }));
        if (logMetrics) {
          console.log('FID:', fid, 'ms');
        }
      });
    });

    // Cumulative Layout Shift (CLS)
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      list.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsValue }));
      if (logMetrics) {
        console.log('CLS:', clsValue);
      }
    });

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      setMetrics(prev => ({ ...prev, ttfb }));
      if (logMetrics) {
        console.log('TTFB:', ttfb, 'ms');
      }
    }

    // Start observing
    fcpObserver.observe({ entryTypes: ['paint'] });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    fidObserver.observe({ entryTypes: ['first-input'] });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Store observers for cleanup
    observerRef.current = fcpObserver;
    lcpObserverRef.current = lcpObserver;
    fidObserverRef.current = fidObserver;
    clsObserverRef.current = clsObserver;
  }, [enableMonitoring, logMetrics]);

  // Performance score calculation
  const calculatePerformanceScore = useCallback((metrics: PerformanceMetrics) => {
    let score = 100;

    // FCP scoring (0-100)
    if (metrics.fcp > threshold.fcp) {
      score -= Math.min(20, ((metrics.fcp - threshold.fcp) / threshold.fcp) * 20);
    }

    // LCP scoring (0-100)
    if (metrics.lcp > threshold.lcp) {
      score -= Math.min(25, ((metrics.lcp - threshold.lcp) / threshold.lcp) * 25);
    }

    // FID scoring (0-100)
    if (metrics.fid > threshold.fid) {
      score -= Math.min(25, ((metrics.fid - threshold.fid) / threshold.fid) * 25);
    }

    // CLS scoring (0-100)
    if (metrics.cls > threshold.cls) {
      score -= Math.min(30, ((metrics.cls / threshold.cls) * 30));
    }

    return Math.max(0, Math.round(score));
  }, [threshold]);

  // Run all optimizations
  const runOptimizations = useCallback(async () => {
    if (!enableOptimizations) return;

    setIsOptimizing(true);
    const results: string[] = [];

    try {
      // Run optimizations in parallel
      await Promise.all([
        optimizeImages(),
        optimizeFonts(),
        optimizeCriticalCSS(),
        optimizeResourceHints(),
        optimizeJavaScript()
      ]);

      results.push('✅ Image optimization completed');
      results.push('✅ Font optimization completed');
      results.push('✅ Critical CSS optimization completed');
      results.push('✅ Resource hints optimization completed');
      results.push('✅ JavaScript optimization completed');

      setOptimizationResults(results);
    } catch (error) {
      results.push('❌ Optimization failed: ' + error);
      setOptimizationResults(results);
    } finally {
      setIsOptimizing(false);
    }
  }, [
    enableOptimizations,
    optimizeImages,
    optimizeFonts,
    optimizeCriticalCSS,
    optimizeResourceHints,
    optimizeJavaScript
  ]);

  // Initialize optimizations and monitoring
  useEffect(() => {
    if (enableOptimizations) {
      runOptimizations();
    }

    if (enableMonitoring) {
      monitorCoreWebVitals();
    }

    return () => {
      // Cleanup observers
      if (observerRef.current) observerRef.current.disconnect();
      if (lcpObserverRef.current) lcpObserverRef.current.disconnect();
      if (clsObserverRef.current) clsObserverRef.current.disconnect();
      if (fidObserverRef.current) fidObserverRef.current.disconnect();
    };
  }, [enableOptimizations, enableMonitoring, runOptimizations, monitorCoreWebVitals]);

  // Performance score
  const performanceScore = calculatePerformanceScore(metrics);

  // Get performance grade
  const getPerformanceGrade = (score: number) => {
    if (score >= 90) return { grade: 'A', color: 'text-green-500' };
    if (score >= 80) return { grade: 'B', color: 'text-yellow-500' };
    if (score >= 70) return { grade: 'C', color: 'text-orange-500' };
    if (score >= 60) return { grade: 'D', color: 'text-red-500' };
    return { grade: 'F', color: 'text-red-600' };
  };

  const gradeInfo = getPerformanceGrade(performanceScore);

  if (!showMetrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Performance Monitor
        </h3>
        <div className={`text-lg font-bold ${gradeInfo.color}`}>
          {gradeInfo.grade}
        </div>
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FCP:</span>
          <span className={metrics.fcp > threshold.fcp ? 'text-red-500' : 'text-green-500'}>
            {metrics.fcp}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">LCP:</span>
          <span className={metrics.lcp > threshold.lcp ? 'text-red-500' : 'text-green-500'}>
            {metrics.lcp}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FID:</span>
          <span className={metrics.fid > threshold.fid ? 'text-red-500' : 'text-green-500'}>
            {metrics.fid}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">CLS:</span>
          <span className={metrics.cls > threshold.cls ? 'text-red-500' : 'text-green-500'}>
            {metrics.cls.toFixed(3)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
          <span className={metrics.ttfb > threshold.ttfb ? 'text-red-500' : 'text-green-500'}>
            {metrics.ttfb}ms
          </span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600 dark:text-gray-400">Score:</span>
          <span className={`text-sm font-semibold ${gradeInfo.color}`}>
            {performanceScore}/100
          </span>
        </div>
      </div>

      {isOptimizing && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-blue-600 dark:text-blue-400">
            🔄 Optimizing...
          </div>
        </div>
      )}

      {optimizationResults.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
            Recent optimizations:
          </div>
          <div className="space-y-1">
            {optimizationResults.slice(-3).map((result, index) => (
              <div key={index} className="text-xs text-gray-500 dark:text-gray-500">
                {result}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
