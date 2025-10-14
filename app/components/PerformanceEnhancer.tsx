<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  loadTime: number;
}

const PerformanceEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry;
      
      const metrics: PerformanceMetrics = {
        fcp: fcp ? fcp.startTime : 0,
        lcp: lcp ? lcp.startTime : 0,
        fid: 0, // Would need PerformanceObserver
        cls: 0, // Would need PerformanceObserver
        ttfb: navigation.responseStart - navigation.requestStart,
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      };

      setMetrics(metrics);

      // Log performance metrics
      };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/critical.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = '/fonts/inter-var.woff2';
      fontPreload.as = 'font';
      fontPreload.type = 'font/woff2';
      fontPreload.crossOrigin = 'anonymous';
      document.head.appendChild(fontPreload);
    };

    preloadCriticalResources();
  }, []);

  // Optimize images
  useEffect(() => {
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    optimizeImages();
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !metrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-purple-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-label="Toggle performance metrics"
      >
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64">
          <h3 className="font-semibold text-gray-900 mb-3">Performance Metrics</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">FCP:</span>
              <span className="font-mono">{metrics.fcp.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">LCP:</span>
              <span className="font-mono">{metrics.lcp.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">TTFB:</span>
              <span className="font-mono">{metrics.ttfb.toFixed(2)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Load Time:</span>
              <span className="font-mono">{metrics.loadTime.toFixed(2)}ms</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
=======
'use client';
import React, { useEffect, useCallback } from 'react';

interface PerformanceEnhancerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePrefetching?: boolean;
  enableResourceHints?: boolean;
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePrefetching = true,
  enableResourceHints = true,
}) => {
  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (enableLazyLoading && !img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add fetchpriority="high" for above-the-fold images
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight && !img.hasAttribute('fetchpriority')) {
        img.setAttribute('fetchpriority', 'high');
      }
    });
  }, [enableImageOptimization, enableLazyLoading]);

  // Prefetch critical resources
  const prefetchResources = useCallback(() => {
    if (!enablePrefetching || typeof window === 'undefined') return;

    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });
  }, [enablePrefetching]);

  // Add resource hints
  const addResourceHints = useCallback(() => {
    if (!enableResourceHints || typeof window === 'undefined') return;

    // DNS prefetch for external domains
    const externalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'www.googletagmanager.com',
    ];

    externalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Preconnect to critical external resources
    const criticalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
    ];

    criticalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = `https://${domain}`;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [enableResourceHints]);

  // Optimize third-party scripts
  const optimizeThirdPartyScripts = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script) => {
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
      }
    });
  }, []);

  // Monitor Core Web Vitals
  const monitorWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // LCP (Largest Contentful Paint)
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      if (lastEntry) {
        console.log('LCP:', lastEntry.startTime);
        // Send to analytics
        if ('gtag' in window) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime),
          });
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    // CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      
      console.log('CLS:', clsValue);
      if ('gtag' in window) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'CLS',
          value: Math.round(clsValue * 1000),
        });
      }
    });

    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fid = (entry as any).processingStart - entry.startTime;
        console.log('FID:', fid);
        
        if ('gtag' in window) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'FID',
            value: Math.round(fid),
          });
        }
      }
    });

    fidObserver.observe({ entryTypes: ['first-input'] });
  }, []);

  useEffect(() => {
    // Run optimizations after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        optimizeImages();
        prefetchResources();
        addResourceHints();
        optimizeThirdPartyScripts();
        monitorWebVitals();
      });
    } else {
      optimizeImages();
      prefetchResources();
      addResourceHints();
      optimizeThirdPartyScripts();
      monitorWebVitals();
    }
  }, [optimizeImages, prefetchResources, addResourceHints, optimizeThirdPartyScripts, monitorWebVitals]);

  return null; // This component doesn't render anything
>>>>>>> 2e5e52a4eac9cfecef52ec8f7193a2474fdee36e
};

export default PerformanceEnhancer;