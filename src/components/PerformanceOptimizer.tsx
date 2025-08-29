import React, { useEffect, useState, useCallback } from 'react';
import { useInView } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '50px'
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);
  const [enableOptimizations, setEnableOptimizations] = useState(true);

  // Performance monitoring
  useEffect(() => {
    if (!enableOptimizations) return;

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
  }, [enableOptimizations]);

  // Resource optimization
  useEffect(() => {
    if (!enableOptimizations) return;

    // DNS prefetch for external domains
    const externalDomains = [
      'api.ziontechgroup.com',
      'cdn.ziontechgroup.com'
    ];

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

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, [enableOptimizations]);

  useEffect(() => {
    optimizeServiceWorker();
  }, [optimizeServiceWorker]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableOptimizations) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
      }
    });
  }, [enableOptimizations]);

  useEffect(() => {
    optimizeImages();
  }, [optimizeImages]);

  return (
    <>
      {children}
      {metrics && (
        <div className="fixed bottom-4 right-4 bg-zion-slate-dark/90 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-4 text-white text-xs font-mono z-50">
          <div className="mb-2 font-semibold text-zion-cyan">Performance Metrics</div>
          <div>FCP: {metrics.fcp?.toFixed(0) || 'N/A'}ms</div>
          <div>LCP: {metrics.lcp?.toFixed(0) || 'N/A'}ms</div>
          <div>FID: {metrics.fid?.toFixed(0) || 'N/A'}ms</div>
          <div>CLS: {metrics.cls?.toFixed(3) || 'N/A'}</div>
        </div>
      )}
    </>
  );
};

// Intersection Observer Hook for lazy loading
export const useLazyLoad = (threshold = 0.1, rootMargin = '50px') => {
  const [ref, inView] = useInView({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  return [ref, inView];
};

// Resource preloader
export const ResourcePreloader: React.FC<{ resources: string[] }> = ({ resources }) => {
  useEffect(() => {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 
                resource.endsWith('.jpg') || resource.endsWith('.png') || resource.endsWith('.webp') ? 'image' : 
                resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }, [resources]);

  return null;
};

// Performance budget component
export const PerformanceBudget: React.FC<{ budget: Partial<PerformanceMetrics> }> = ({ budget }) => {
  const [currentMetrics, setCurrentMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      // Update metrics based on entries
      // This is a simplified version - you'd want more sophisticated logic
    });

    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

    return () => observer.disconnect();
  }, []);

  if (!currentMetrics) return null;

  return (
    <div className="performance-budget">
      {/* Budget visualization */}
    </div>
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
