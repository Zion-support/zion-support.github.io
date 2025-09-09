import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [score, setScore] = useState(0);

  const calculateScore = () => {
    const scores = [];
    
    if (metrics.lcp) scores.push(metrics.lcp < 2500 ? 100 : metrics.lcp < 4000 ? 50 : 0);
    if (metrics.fid) scores.push(metrics.fid < 100 ? 100 : metrics.fid < 300 ? 50 : 0);
    if (metrics.cls) scores.push(metrics.cls < 0.1 ? 100 : metrics.cls < 0.25 ? 50 : 0);
    if (metrics.fcp) scores.push(metrics.fcp < 1800 ? 100 : metrics.fcp < 3000 ? 50 : 0);
    
    const validMetrics = scores.length;
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    
    return validMetrics > 0 ? Math.round(totalScore / validMetrics) : 0;
  };

  useEffect(() => {
    const newScore = calculateScore();
    setScore(newScore);

    // Show component after score calculation
    if (newScore > 0) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, [metrics]);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Performance Observer for Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const firstEntry = entries[0];
          setMetrics(prev => ({ ...prev, fcp: Math.round(firstEntry.startTime) }));
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        // console.warn('FCP observer failed:', e);
      }

      // Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: Math.round(lastEntry.startTime) }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // console.warn('LCP observer failed:', e);
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fid = entry.processingStart - entry.startTime;
            setMetrics(prev => ({ ...prev, fid: Math.round(fid) }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        // console.warn('FID observer failed:', e);
      }

      // Cumulative Layout Shift
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: Math.round(clsValue * 1000) / 1000 }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // console.warn('CLS observer failed:', e);
      }
    }

    // Time to First Byte (from navigation timing)
    const navigationEntry = performance.getEntriesByType('navigation')[0];
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      setMetrics(prev => ({ ...prev, ttfb: Math.round(ttfb) }));
    }
  }, []);

  if (!isVisible) return null;

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreLabel = (score) => {
    if (score >= 90) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-zinc-700 rounded-lg p-4 text-white text-sm max-w-xs z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-zion-cyan">Performance</h3>
        <div className={`text-lg font-bold ${getScoreColor(score)}`}>
          {score}
        </div>
      </div>

      <div className="space-y-2">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center text-xs">
            <span className="text-gray-300">{key.toUpperCase()}:</span>
            <span className="text-white font-mono">
              {typeof value === 'number' ? `${value}ms` : value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-gray-600">
        <div className="text-xs text-gray-400 text-center">
          {getScoreLabel(score)}
        </div>
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