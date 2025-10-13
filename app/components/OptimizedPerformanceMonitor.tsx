import React, { useEffect, useCallback, useMemo } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  INP: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

interface OptimizedPerformanceMonitorProps {
  children: React.ReactNode;
  showDetails?: boolean;
}

const OptimizedPerformanceMonitor: React.FC<OptimizedPerformanceMonitorProps> = ({ 
  children, 
  showDetails = false 
}) => {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics>({
    CLS: null,
    INP: null,
    FCP: null,
    LCP: null,
    TTFB: null,
  });

  const [isVisible, setIsVisible] = React.useState(false);

  // Memoized performance data collection
  const collectMetrics = useCallback(() => {
    const newMetrics: PerformanceMetrics = { ...metrics };

    // Collect Core Web Vitals
    onCLS((metric) => {
      newMetrics.CLS = metric.value;
      setMetrics(prev => ({ ...prev, CLS: metric.value }));
    }, { reportAllChanges: true });

    onINP((metric) => {
      newMetrics.INP = metric.value;
      setMetrics(prev => ({ ...prev, INP: metric.value }));
    });

    onFCP((metric) => {
      newMetrics.FCP = metric.value;
      setMetrics(prev => ({ ...prev, FCP: metric.value }));
    });

    onLCP((metric) => {
      newMetrics.LCP = metric.value;
      setMetrics(prev => ({ ...prev, LCP: metric.value }));
    });

    onTTFB((metric) => {
      newMetrics.TTFB = metric.value;
      setMetrics(prev => ({ ...prev, TTFB: metric.value }));
    });
  }, [metrics]);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Performance optimizations based on scroll
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll percentage
      const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
      
      // Only update if significant change
      if (Math.abs(scrollPercentage - (window as any).lastScrollPercentage || 0) > 5) {
        (window as any).lastScrollPercentage = scrollPercentage;
        
        // Trigger performance optimizations
        if (scrollPercentage > 50) {
          // Lazy load non-critical resources
          const lazyImages = document.querySelectorAll('img[data-lazy]');
          lazyImages.forEach((img) => {
            const rect = img.getBoundingClientRect();
            if (rect.top < windowHeight + 200) {
              const imgElement = img as HTMLImageElement;
              imgElement.src = imgElement.dataset.lazy || '';
              imgElement.removeAttribute('data-lazy');
            }
          });
        }
      }
      
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  }, []);

  // Optimized resize handler
  const handleResize = useCallback(() => {
    let ticking = false;
    
    const updateLayout = () => {
      // Debounced resize handling
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Update viewport meta tag for mobile optimization
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport && width < 768) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      }
      
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateLayout);
      ticking = true;
    }
  }, []);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    fontLink.as = 'style';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);

    // Preload critical images
    const criticalImages = [
      '/logo.svg',
      '/og-image.svg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });

    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = '/assets/index.css';
    criticalCSS.as = 'style';
    document.head.appendChild(criticalCSS);
  }, []);

  // Performance monitoring setup
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Collect initial metrics
    collectMetrics();

    // Set up event listeners with passive options for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Preload critical resources
    preloadCriticalResources();

    // Set up intersection observer for performance monitoring
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is visible, can trigger lazy loading
            const element = entry.target as HTMLElement;
            if (element.dataset.lazy) {
              element.style.opacity = '1';
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe lazy elements
    const lazyElements = document.querySelectorAll('[data-lazy]');
    lazyElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [collectMetrics, handleScroll, handleResize, preloadCriticalResources]);

  // Memoized performance score calculation
  const performanceScore = useMemo(() => {
    const scores = Object.values(metrics).filter(score => score !== null) as number[];
    if (scores.length === 0) return null;
    
    // Calculate average performance score
    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    return Math.round(100 - (average / 10)); // Convert to 0-100 scale
  }, [metrics]);

  // Performance monitoring panel (only in development)
  if (showDetails && process.env.NODE_ENV === 'development') {
    return (
      <>
        {children}
        <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 text-white text-xs max-w-xs z-50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-cyan-400">Performance Monitor</h3>
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="text-gray-400 hover:text-white"
            >
              {isVisible ? '−' : '+'}
            </button>
          </div>
          {isVisible && (
            <div className="space-y-1">
              <div>CLS: {metrics.CLS?.toFixed(3) || 'N/A'}</div>
              <div>INP: {metrics.INP?.toFixed(1) || 'N/A'}ms</div>
              <div>FCP: {metrics.FCP?.toFixed(1) || 'N/A'}ms</div>
              <div>LCP: {metrics.LCP?.toFixed(1) || 'N/A'}ms</div>
              <div>TTFB: {metrics.TTFB?.toFixed(1) || 'N/A'}ms</div>
              {performanceScore && (
                <div className="pt-2 border-t border-cyan-500/20">
                  <div>Score: {performanceScore}/100</div>
                </div>
              )}
            </div>
          )}
        </div>
      </>
    );
  }

  return <>{children}</>;
};

export default OptimizedPerformanceMonitor;