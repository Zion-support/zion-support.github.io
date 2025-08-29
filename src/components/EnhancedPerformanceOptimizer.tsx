import React, { useEffect, useCallback, useRef, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  tti: number;
  tbt: number;
}

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  enableOptimizations?: boolean;
  logMetrics?: boolean;
  enableBundleAnalysis?: boolean;
}

export const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableMonitoring = true,
  enableOptimizations = true,
  logMetrics = false,
  enableBundleAnalysis = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    tti: 0,
    tbt: 0
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const metricsRef = useRef<PerformanceMetrics>(metrics);
  const observerRef = useRef<PerformanceObserver | null>(null);

  // Advanced image optimization with WebP support
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
            const webpSrc = src.replace(/\.(jpg|jpeg|png)$/, '.webp');
            
            // Create WebP image element
            const webpImg = new Image();
            webpImg.onload = () => {
              img.src = webpSrc;
            };
            webpImg.onerror = () => {
              img.src = src; // Fallback to original
            };
            webpImg.src = webpSrc;
            
            img.removeAttribute('data-src');
            img.classList.remove('lazy');
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

  // Enhanced critical CSS optimization
  const optimizeCriticalCSS = useCallback(() => {
    if (!enableOptimizations) return;

    const criticalCSS = `
      /* Critical above-the-fold CSS */
      .bg-futuristic { 
        background: linear-gradient(180deg, rgba(2,6,23,1) 0%, rgba(2,6,23,0.95) 100%);
        min-height: 100vh;
      }
      .animate-fade-in { 
        animation: fadeIn 220ms ease-out both;
        opacity: 0;
        animation-fill-mode: forwards;
      }
      .btn-futuristic { 
        background: linear-gradient(135deg, #22ddd2 0%, #2e73ea 100%);
        transition: all 0.3s ease;
      }
      .btn-futuristic:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(34, 221, 210, 0.3);
      }
      .hero-section {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .loading-spinner {
        animation: spin 1s linear infinite;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;

    // Remove existing critical CSS
    const existingCritical = document.querySelector('style[data-critical="true"]');
    if (existingCritical) {
      existingCritical.remove();
    }

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.appendChild(style);
  }, [enableOptimizations]);

  // Advanced font optimization
  const optimizeFonts = useCallback(() => {
    if (!enableOptimizations) return;

    // Preload critical fonts with display=swap
    const criticalFonts = [
      'Orbitron:wght@400;500;600;700;800;900&display=swap',
      'Rajdhani:wght@300;400;500;600;700&display=swap',
      'Inter:wght@300;400;500;600;700&display=swap'
    ];

    criticalFonts.forEach((font) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = `https://fonts.googleapis.com/css2?family=${font}`;
      link.as = 'style';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Font loading optimization
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
      });
    }
  }, [enableOptimizations]);

  // Bundle analysis and optimization
  const analyzeBundle = useCallback(() => {
    if (!enableBundleAnalysis) return;

    const scriptTags = document.querySelectorAll('script[src]');
    const totalSize = Array.from(scriptTags).reduce((acc, script) => {
      const src = script.getAttribute('src');
      if (src && src.includes('/js/')) {
        // Estimate size based on chunk naming
        if (src.includes('main-')) return acc + 200; // Main bundle
        if (src.includes('chunk-')) return acc + 50; // Chunks
        return acc + 100; // Other scripts
      }
      return acc;
    }, 0);

    if (logMetrics) {
      console.log(`Estimated bundle size: ${totalSize}KB`);
    }
  }, [enableBundleAnalysis, logMetrics]);

  // Enhanced Core Web Vitals monitoring
  const monitorCoreWebVitals = useCallback(() => {
    if (!enableMonitoring) return;

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        const newMetrics = { ...metricsRef.current, fcp: fcpEntry.startTime };
        setMetrics(newMetrics);
        metricsRef.current = newMetrics;
        
        if (logMetrics) {
          console.log('FCP:', fcpEntry.startTime);
        }
      }
    });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1] as PerformanceEntry;
      if (lcpEntry) {
        const newMetrics = { ...metricsRef.current, lcp: lcpEntry.startTime };
        setMetrics(newMetrics);
        metricsRef.current = newMetrics;
        
        if (logMetrics) {
          console.log('LCP:', lcpEntry.startTime);
        }
      }
    });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const newMetrics = { ...metricsRef.current, fid: entry.processingStart - entry.startTime };
        setMetrics(newMetrics);
        metricsRef.current = newMetrics;
        
        if (logMetrics) {
          console.log('FID:', entry.processingStart - entry.startTime);
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
      
      const newMetrics = { ...metricsRef.current, cls: clsValue };
      setMetrics(newMetrics);
      metricsRef.current = newMetrics;
      
      if (logMetrics) {
        console.log('CLS:', clsValue);
      }
    });

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [enableMonitoring, logMetrics]);

  // Resource hints optimization
  const optimizeResourceHints = useCallback(() => {
    if (!enableOptimizations) return;

    // DNS prefetch for external domains
    const externalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'cdn.jsdelivr.net'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Preconnect to critical domains
    const criticalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    criticalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [enableOptimizations]);

  // Service Worker optimization
  const optimizeServiceWorker = useCallback(() => {
    if (!enableOptimizations) return;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          if (logMetrics) {
            console.log('Service Worker registered:', registration);
          }
        })
        .catch((error) => {
          if (logMetrics) {
            console.warn('Service Worker registration failed:', error);
          }
        });
    }
  }, [enableOptimizations, logMetrics]);

  // Main optimization function
  const runOptimizations = useCallback(async () => {
    if (!enableOptimizations) return;

    setIsOptimizing(true);
    
    try {
      // Run optimizations in parallel
      await Promise.all([
        optimizeImages(),
        optimizeCriticalCSS(),
        optimizeFonts(),
        optimizeResourceHints(),
        optimizeServiceWorker()
      ]);

      if (enableBundleAnalysis) {
        analyzeBundle();
      }
    } catch (error) {
      if (logMetrics) {
        console.error('Optimization error:', error);
      }
    } finally {
      setIsOptimizing(false);
    }
  }, [
    enableOptimizations,
    optimizeImages,
    optimizeCriticalCSS,
    optimizeFonts,
    optimizeResourceHints,
    optimizeServiceWorker,
    enableBundleAnalysis,
    analyzeBundle,
    logMetrics
  ]);

  useEffect(() => {
    if (enableOptimizations) {
      runOptimizations();
    }

    if (enableMonitoring) {
      const cleanup = monitorCoreWebVitals();
      return cleanup;
    }
  }, [enableOptimizations, enableMonitoring, runOptimizations, monitorCoreWebVitals]);

  // Performance score calculation
  const calculatePerformanceScore = useCallback(() => {
    const { fcp, lcp, fid, cls } = metricsRef.current;
    
    let score = 100;
    
    // FCP scoring (0-100)
    if (fcp > 0) {
      if (fcp <= 1800) score -= 0;
      else if (fcp <= 3000) score -= 10;
      else score -= 20;
    }
    
    // LCP scoring (0-100)
    if (lcp > 0) {
      if (lcp <= 2500) score -= 0;
      else if (lcp <= 4000) score -= 10;
      else score -= 20;
    }
    
    // FID scoring (0-100)
    if (fid > 0) {
      if (fid <= 100) score -= 0;
      else if (fid <= 300) score -= 10;
      else score -= 20;
    }
    
    // CLS scoring (0-100)
    if (cls > 0) {
      if (cls <= 0.1) score -= 0;
      else if (cls <= 0.25) score -= 10;
      else score -= 20;
    }
    
    return Math.max(0, score);
  }, []);

  if (!enableOptimizations && !enableMonitoring) {
    return null;
  }

  return (
    <div className="performance-optimizer" style={{ display: 'none' }}>
      {isOptimizing && (
        <div className="optimization-indicator">
          <div className="loading-spinner"></div>
          <span>Optimizing performance...</span>
        </div>
      )}
      
      {logMetrics && (
        <div className="performance-metrics">
          <h3>Performance Metrics</h3>
          <p>FCP: {metrics.fcp.toFixed(2)}ms</p>
          <p>LCP: {metrics.lcp.toFixed(2)}ms</p>
          <p>FID: {metrics.fid.toFixed(2)}ms</p>
          <p>CLS: {metrics.cls.toFixed(3)}</p>
          <p>Performance Score: {calculatePerformanceScore()}/100</p>
        </div>
      )}
    </div>
  );
};