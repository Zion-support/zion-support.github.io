import React, { useEffect, useCallback, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  const [isOptimized, setIsOptimized] = useState(false);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.png'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
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

    images.forEach(img => imageObserver.observe(img));
  }, []);

  // Optimize fonts
  const optimizeFonts = useCallback(() => {
    // Preload critical fonts
    const fontPreloads = [
      { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { href: '/fonts/inter-var.woff', as: 'font', type: 'font/woff', crossOrigin: 'anonymous' }
    ];

    fontPreloads.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font.href;
      link.as = font.as;
      link.type = font.type;
      link.crossOrigin = font.crossOrigin;
      document.head.appendChild(link);
    });

    // Add font-display: swap to existing font faces
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 100 900;
        font-display: swap;
        src: url('/fonts/inter-var.woff2') format('woff2');
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Optimize CSS
  const optimizeCSS = useCallback(() => {
    // Remove unused CSS
    const unusedCSS = [
      '.unused-class',
      '.deprecated-style',
      '.old-component'
    ];

    unusedCSS.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => el.remove());
    });

    // Add critical CSS inline
    const criticalCSS = `
      .hero-section { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
      .nav-link { transition: color 0.2s ease; }
      .btn-primary { background: #3b82f6; color: white; }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.appendChild(style);
  }, []);

  // Optimize JavaScript
  const optimizeJavaScript = useCallback(() => {
    // Defer non-critical JavaScript
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach(script => {
      script.setAttribute('defer', '');
    });

    // Add service worker for caching
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

  // Monitor performance metrics
  const monitorPerformance = useCallback(() => {
    // Use Web Vitals API if available
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => setMetrics(prev => ({ ...prev, cls: metric.value })));
        getFID((metric) => setMetrics(prev => ({ ...prev, fid: metric.value })));
        getFCP((metric) => setMetrics(prev => ({ ...prev, fcp: metric.value })));
        getLCP((metric) => setMetrics(prev => ({ ...prev, lcp: metric.value })));
        getTTFB((metric) => setMetrics(prev => ({ ...prev, ttfb: metric.value })));
      });
    }

    // Fallback to Performance API
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        }
        if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        }
        if (entry.entryType === 'layout-shift') {
          setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
        }
      });
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
  }, []);

  // Check if optimizations are effective
  const checkOptimizationStatus = useCallback(() => {
    const thresholds = {
      fcp: 1800, // 1.8s
      lcp: 2500, // 2.5s
      fid: 100,  // 100ms
      cls: 0.1,  // 0.1
      ttfb: 600  // 600ms
    };

    const isGood = Object.entries(metrics).every(([key, value]) => {
      if (value === null) return true;
      return value <= thresholds[key as keyof typeof thresholds];
    });

    setIsOptimized(isGood);
  }, [metrics]);

  // Apply optimizations
  useEffect(() => {
    preloadCriticalResources();
    optimizeImages();
    optimizeFonts();
    optimizeCSS();
    optimizeJavaScript();
    monitorPerformance();
  }, [preloadCriticalResources, optimizeImages, optimizeFonts, optimizeCSS, optimizeJavaScript, monitorPerformance]);

  // Check optimization status when metrics change
  useEffect(() => {
    checkOptimizationStatus();
  }, [metrics, checkOptimizationStatus]);

  // Report performance metrics
  useEffect(() => {
    if (Object.values(metrics).some(value => value !== null)) {
      console.log('Performance Metrics:', metrics);
      
      // Send to analytics if available
      if (typeof gtag !== 'undefined') {
        Object.entries(metrics).forEach(([key, value]) => {
          if (value !== null) {
            gtag('event', 'performance_metric', {
              metric_name: key,
              metric_value: value,
              metric_rating: value <= (key === 'cls' ? 0.1 : 2000) ? 'good' : 'needs-improvement'
            });
          }
        });
      }
    }
  }, [metrics]);

  return (
    <div className="performance-optimizer">
      {/* Performance indicator */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg text-xs">
          <div className="font-semibold mb-2">Performance Metrics</div>
          <div className="space-y-1">
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="capitalize">{key}:</span>
                <span className={value && value <= (key === 'cls' ? 0.1 : 2000) ? 'text-green-600' : 'text-red-600'}>
                  {value ? `${value.toFixed(2)}${key === 'cls' ? '' : 'ms'}` : 'N/A'}
                </span>
              </div>
            ))}
          </div>
          <div className={`mt-2 text-center font-semibold ${isOptimized ? 'text-green-600' : 'text-yellow-600'}`}>
            {isOptimized ? '✓ Optimized' : '⚠ Needs Improvement'}
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;