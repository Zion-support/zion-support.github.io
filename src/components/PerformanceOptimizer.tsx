import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  showMetrics = false,
  enableLazyLoading = true,
  enablePreloading = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Performance monitoring
  useEffect(() => {
    if ('PerformanceObserver' in window) {
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

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (enableLazyLoading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              if (target.dataset.src) {
                target.src = target.dataset.src;
                target.removeAttribute('data-src');
                observer.unobserve(target);
              }
            }
          });
        },
        { rootMargin: '50px' }
      );

      // Observe all lazy images
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => observer.observe(img));

      return () => observer.disconnect();
    }
  }, [enableLazyLoading]);

  // Preload critical resources
  useEffect(() => {
    if (enablePreloading) {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.as = 'style';
      criticalCSS.href = '/src/index.css';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.as = 'font';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
      fontPreload.crossOrigin = 'anonymous';
      document.head.appendChild(fontPreload);

      return () => {
        document.head.removeChild(criticalCSS);
        document.head.removeChild(fontPreload);
      };
    }
  }, [enablePreloading]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    if (!metrics) return null;
    
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;
    
    // LCP scoring (0-100)
    if (metrics.lcp > 2500) score -= 25;
    else if (metrics.lcp > 1500) score -= 15;
    
    // FID scoring (0-100)
    if (metrics.fid > 100) score -= 20;
    else if (metrics.fid > 50) score -= 10;
    
    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 25;
    else if (metrics.cls > 0.1) score -= 15;
    
    return Math.max(0, score);
  }, [metrics]);

  // Performance recommendations
  const recommendations = useMemo(() => {
    if (!metrics) return [];
    
    const recs = [];
    
    if (metrics.fcp > 1800) {
      recs.push('Optimize First Contentful Paint by reducing render-blocking resources');
    }
    
    if (metrics.lcp > 2500) {
      recs.push('Improve Largest Contentful Paint by optimizing images and critical resources');
    }
    
    if (metrics.fid > 100) {
      recs.push('Reduce First Input Delay by optimizing JavaScript execution');
    }
    
    if (metrics.cls > 0.25) {
      recs.push('Minimize Cumulative Layout Shift by setting explicit dimensions');
    }
    
    return recs;
  }, [metrics]);

  if (!showMetrics) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-slate-900/90 backdrop-blur-lg border border-cyan-400/30 rounded-xl p-4 max-w-sm z-50"
    >
      <h3 className="text-sm font-semibold text-cyan-400 mb-3">Performance Metrics</h3>
      
      {metrics && (
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-300">FCP:</span>
            <span className={metrics.fcp > 1800 ? 'text-red-400' : metrics.fcp > 1000 ? 'text-yellow-400' : 'text-green-400'}>
              {metrics.fcp.toFixed(0)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-300">LCP:</span>
            <span className={metrics.lcp > 2500 ? 'text-red-400' : metrics.lcp > 1500 ? 'text-yellow-400' : 'text-green-400'}>
              {metrics.lcp.toFixed(0)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-300">FID:</span>
            <span className={metrics.fid > 100 ? 'text-red-400' : metrics.fid > 50 ? 'text-yellow-400' : 'text-green-400'}>
              {metrics.fid.toFixed(0)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-300">CLS:</span>
            <span className={metrics.cls > 0.25 ? 'text-red-400' : metrics.cls > 0.1 ? 'text-yellow-400' : 'text-green-400'}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
          
          {performanceScore !== null && (
            <div className="pt-2 border-t border-slate-700">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Score:</span>
                <span className={`text-lg font-bold ${
                  performanceScore >= 90 ? 'text-green-400' :
                  performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {performanceScore}/100
                </span>
              </div>
            </div>
          )}
        </div>
      )}
      
      {recommendations.length > 0 && (
        <div className="mt-3 pt-3 border-t border-slate-700">
          <h4 className="text-xs font-semibold text-slate-300 mb-2">Recommendations:</h4>
          <ul className="space-y-1">
            {recommendations.map((rec, index) => (
              <li key={index} className="text-xs text-slate-400">• {rec}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};
