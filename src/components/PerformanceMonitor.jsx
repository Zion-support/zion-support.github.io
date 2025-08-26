import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || localStorage.getItem('showPerformanceMetrics') === 'true') {
      setIsVisible(true);
    }

    // Core Web Vitals
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0];
        setMetrics(prev => ({ ...prev, fcp: firstEntry.startTime }));
      });
      fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
      };
    }
  }, []);

  // Performance marks
  useEffect(() => {
    const measurePageLoad = () => {
      if (performance.getEntriesByType('navigation').length > 0) {
        const navigationEntry = performance.getEntriesByType('navigation')[0];
        const loadTime = navigationEntry.loadEventEnd - navigationEntry.loadEventStart;
        const domContentLoaded = navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart;
        
        setMetrics(prev => ({
          ...prev,
          pageLoad: loadTime,
          domContentLoaded: domContentLoaded
        }));
      }
    };

    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
      return () => window.removeEventListener('load', measurePageLoad);
    }
  }, []);

  const getMetricColor = (metric, value) => {
    if (!value) return 'text-gray-400';
    
    switch (metric) {
      case 'lcp':
        return value < 2500 ? 'text-green-400' : value < 4000 ? 'text-yellow-400' : 'text-red-400';
      case 'fid':
        return value < 100 ? 'text-green-400' : value < 300 ? 'text-yellow-400' : 'text-red-400';
      case 'cls':
        return value < 0.1 ? 'text-green-400' : value < 0.25 ? 'text-yellow-400' : 'text-red-400';
      case 'fcp':
        return value < 1800 ? 'text-green-400' : value < 3000 ? 'text-yellow-400' : 'text-red-400';
      default:
        return 'text-white';
    }
  };

  const getMetricLabel = (metric) => {
    switch (metric) {
      case 'lcp': return 'LCP';
      case 'fid': return 'FID';
      case 'cls': return 'CLS';
      case 'fcp': return 'FCP';
      case 'pageLoad': return 'Page Load';
      case 'domContentLoaded': return 'DOM Ready';
      default: return metric;
    }
  };

  const formatMetric = (metric, value) => {
    if (!value) return 'N/A';
    
    switch (metric) {
      case 'lcp':
      case 'fcp':
      case 'pageLoad':
      case 'domContentLoaded':
        return `${Math.round(value)}ms`;
      case 'fid':
        return `${Math.round(value)}ms`;
      case 'cls':
        return value.toFixed(3);
      default:
        return value;
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg p-4 shadow-xl max-w-xs"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-zion-slate-light hover:text-zion-cyan transition-colors"
          aria-label="Close performance monitor"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="space-y-2">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center text-xs">
            <span className="text-zion-slate-light">{getMetricLabel(key)}:</span>
            <span className={`font-mono ${getMetricColor(key, value)}`}>
              {formatMetric(key, value)}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-3 pt-3 border-t border-zion-cyan/20">
        <button
          onClick={() => {
            setMetrics({});
            performance.clearMarks();
            performance.clearMeasures();
          }}
          className="w-full px-3 py-1 text-xs bg-zion-cyan/20 text-zion-cyan rounded hover:bg-zion-cyan/30 transition-colors"
        >
          Reset Metrics
        </button>
      </div>
    </motion.div>
  );
}

// Performance optimization utilities
export const performanceUtils = {
  // Debounce function calls
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function calls
  throttle: (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Lazy load images
  lazyLoadImage: (imgElement) => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });
      
      imageObserver.observe(imgElement);
    } else {
      // Fallback for older browsers
      imgElement.src = imgElement.dataset.src;
    }
  },

  // Preload critical resources
  preloadResource: (href, as = 'style') => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  }
};