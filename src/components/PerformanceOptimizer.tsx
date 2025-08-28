<<<<<<< HEAD
import React, { useEffect, useCallback, useRef } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}
=======
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
>>>>>>> origin/clean-merge-website-fixes

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  enableOptimizations?: boolean;
  logMetrics?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableMonitoring = true,
  enableOptimizations = true,
  logMetrics = false
}) => {
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

<<<<<<< HEAD
  const observerRef = useRef<PerformanceObserver | null>(null);
  const lcpObserverRef = useRef<PerformanceObserver | null>(null);
  const clsObserverRef = useRef<PerformanceObserver | null>(null);

  // Optimize images with lazy loading and WebP support
  const optimizeImages = useCallback(() => {
    if (!enableOptimizations) return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }, [enableOptimizations]);

  // Optimize fonts loading
  const optimizeFonts = useCallback(() => {
    if (!enableOptimizations) return;

    // Preload critical fonts
    const criticalFonts = [
      'Orbitron:wght@400;500;600;700;800;900',
      'Rajdhani:wght@300;400;500;600;700'
    ];

    criticalFonts.forEach((font) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = `https://fonts.googleapis.com/css2?family=${font}&display=swap`;
      link.as = 'style';
      document.head.appendChild(link);
    });
  }, [enableOptimizations]);

  // Optimize critical CSS
  const optimizeCriticalCSS = useCallback(() => {
    if (!enableOptimizations) return;

    // Inline critical CSS for above-the-fold content
    const criticalCSS = `
      .bg-futuristic { background: linear-gradient(180deg, rgba(2,6,23,1) 0%, rgba(2,6,23,0.95) 100%); }
      .animate-fade-in { animation: fadeIn 220ms ease-out both; }
      .btn-futuristic { background: linear-gradient(135deg, #22ddd2 0%, #2e73ea 100%); }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.appendChild(style);
  }, [enableOptimizations]);

  // Monitor Core Web Vitals
  const monitorCoreWebVitals = useCallback(() => {
    if (!enableMonitoring) return;

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        metricsRef.current.fcp = fcpEntry.startTime;
        if (logMetrics) {
          console.log('FCP:', fcpEntry.startTime);
        }
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint (LCP)
    lcpObserverRef.current = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        metricsRef.current.lcp = lastEntry.startTime;
        if (logMetrics) {
          console.log('LCP:', lastEntry.startTime);
        }
      }
    });
    lcpObserverRef.current.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    observerRef.current = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'first-input') {
          metricsRef.current.fid = entry.processingStart - entry.startTime;
          if (logMetrics) {
            console.log('FID:', metricsRef.current.fid);
          }
        }
      });
    });
    observerRef.current.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    clsObserverRef.current = new PerformanceObserver((list) => {
      let clsValue = 0;
      list.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      metricsRef.current.cls = clsValue;
      if (logMetrics) {
        console.log('CLS:', clsValue);
      }
    });
    clsObserverRef.current.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metricsRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      if (logMetrics) {
        console.log('TTFB:', metricsRef.current.ttfb);
      }
    }
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
=======
  useEffect(() => {
    // Monitor First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries[0];
      setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
    });

    // Monitor Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcp = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
    });

    // Monitor First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fid = entries[0];
      setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
    });

    // Monitor Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let cls = 0;
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      }
      setMetrics(prev => ({ ...prev, cls }));
    });

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-zion-slate-dark/90 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-4 text-white text-xs font-mono z-50">
      <div className="mb-2 font-semibold text-zion-cyan">Performance Metrics</div>
      <div>FCP: {metrics.fcp.toFixed(0)}ms</div>
      <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
      <div>FID: {metrics.fid.toFixed(0)}ms</div>
      <div>CLS: {metrics.cls.toFixed(3)}</div>
    </div>
  );
};
>>>>>>> origin/clean-merge-website-fixes

    externalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Preconnect to critical domains
    const criticalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com'
    ];

    criticalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = `https://${domain}`;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [enableOptimizations]);

  // Service Worker optimization
  const optimizeServiceWorker = useCallback(() => {
    if (!enableOptimizations) return;

<<<<<<< HEAD
    if ('serviceWorker' in navigator) {
      // Register service worker with optimized caching strategy
      navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'none'
      }).then((registration) => {
        if (logMetrics) {
          console.log('Service Worker registered:', registration);
        }
      }).catch((error) => {
        if (logMetrics) {
          console.warn('Service Worker registration failed:', error);
        }
      });
    }
  }, [enableOptimizations, logMetrics]);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    if (!enableOptimizations) return;

    // Clean up event listeners and observers
    const cleanup = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (lcpObserverRef.current) {
        lcpObserverRef.current.disconnect();
      }
      if (clsObserverRef.current) {
        clsObserverRef.current.disconnect();
      }
    };

    // Cleanup on page unload
    window.addEventListener('beforeunload', cleanup);
    
    return cleanup;
  }, [enableOptimizations]);

  // Performance budget monitoring
  const checkPerformanceBudget = useCallback(() => {
    const { fcp, lcp, fid, cls, ttfb } = metricsRef.current;
    
    const budget = {
      fcp: 1800, // 1.8s
      lcp: 2500, // 2.5s
      fid: 100,  // 100ms
      cls: 0.1,  // 0.1
      ttfb: 600  // 600ms
    };

    const violations = [];
    if (fcp > budget.fcp) violations.push(`FCP: ${fcp}ms (budget: ${budget.fcp}ms)`);
    if (lcp > budget.lcp) violations.push(`LCP: ${lcp}ms (budget: ${budget.lcp}ms)`);
    if (fid > budget.fid) violations.push(`FID: ${fid}ms (budget: ${budget.fid}ms)`);
    if (cls > budget.cls) violations.push(`CLS: ${cls} (budget: ${budget.cls})`);
    if (ttfb > budget.ttfb) violations.push(`TTFB: ${ttfb}ms (budget: ${budget.ttfb}ms)`);

    if (violations.length > 0 && logMetrics) {
      console.warn('Performance budget violations:', violations);
    }

    return violations.length === 0;
  }, [logMetrics]);

  useEffect(() => {
    // Initialize optimizations
    optimizeImages();
    optimizeFonts();
    optimizeCriticalCSS();
    optimizeResourceHints();
    optimizeServiceWorker();

    // Start monitoring
    monitorCoreWebVitals();

    // Check performance budget after metrics are collected
    const budgetCheckTimer = setTimeout(() => {
      checkPerformanceBudget();
    }, 5000);

    // Cleanup function
    const cleanup = optimizeMemory();

    return () => {
      cleanup();
      clearTimeout(budgetCheckTimer);
    };
  }, [
    optimizeImages,
    optimizeFonts,
    optimizeCriticalCSS,
    optimizeResourceHints,
    optimizeServiceWorker,
    monitorCoreWebVitals,
    optimizeMemory,
    checkPerformanceBudget
  ]);

  // Expose metrics for external monitoring
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).zionPerformanceMetrics = metricsRef.current;
    }
  }, []);

  return null; // This component doesn't render anything
};
=======
  return (
    <div
      ref={containerRef}
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {items.slice(startIndex, endIndex).map((item, index) => (
            <div key={startIndex + index} style={{ height: itemHeight }}>
              {renderItem(item, startIndex + index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Debounced input component
export const DebouncedInput: React.FC<{
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  delay?: number;
}> = ({ value, onChange, placeholder = '', className = '', delay = 300 }) => {
  const [inputValue, setInputValue] = useState(value);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      onChange(inputValue);
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [inputValue, onChange, delay]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder={placeholder}
      className={`px-3 py-2 border border-zion-cyan/20 bg-zion-blue-dark/50 text-white placeholder-zion-slate-light rounded-md focus:outline-none focus:border-zion-cyan/40 transition-colors ${className}`}
    />
  );
};

// Memoized component wrapper
export const MemoizedComponent: React.FC<{
  children: React.ReactNode;
  dependencies?: any[];
}> = React.memo(({ children }) => <>{children}</>);

// Error boundary component
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
          <h3 className="font-semibold mb-2">Something went wrong</h3>
          <p className="text-sm">{this.state.error?.message}</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-2 px-3 py-1 bg-red-500/20 hover:bg-red-500/30 rounded text-sm transition-colors"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
>>>>>>> origin/clean-merge-website-fixes
