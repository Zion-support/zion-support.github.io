'use client';

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  interactionToNextPaint: number;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Performance monitoring
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
        
        const newMetrics: PerformanceMetrics = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: fcp ? fcp.startTime : 0,
          largestContentfulPaint: lcp ? lcp.startTime : 0,
          cumulativeLayoutShift: 0, // Would need to be measured with observer
          firstInputDelay: 0, // Would need to be measured with observer
          interactionToNextPaint: 0, // Would need to be measured with observer
        };

        setMetrics(newMetrics);
        
        // Check if performance is optimized
        const isGoodPerformance = 
          newMetrics.loadTime < 3000 && 
          newMetrics.firstContentfulPaint < 2000 && 
          newMetrics.largestContentfulPaint < 4000;
        
        setIsOptimized(isGoodPerformance);
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.jpg',
        '/images/logo.svg'
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
    };

    preloadCriticalResources();

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    optimizeImages();

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Performance optimization suggestions
  const getOptimizationSuggestions = () => {
    if (!metrics) return [];

    const suggestions = [];
    
    if (metrics.loadTime > 3000) {
      suggestions.push('Consider code splitting and lazy loading');
    }
    if (metrics.firstContentfulPaint > 2000) {
      suggestions.push('Optimize critical rendering path');
    }
    if (metrics.largestContentfulPaint > 4000) {
      suggestions.push('Optimize images and fonts');
    }

    return suggestions;
  };

  if (typeof window === 'undefined') return null;

  return (
    <div className="performance-optimizer">
      {metrics && (
        <div className="performance-metrics">
          <div className="metric">
            <span className="label">Load Time:</span>
            <span className={`value ${metrics.loadTime < 3000 ? 'good' : 'warning'}`}>
              {metrics.loadTime.toFixed(0)}ms
            </span>
          </div>
          <div className="metric">
            <span className="label">FCP:</span>
            <span className={`value ${metrics.firstContentfulPaint < 2000 ? 'good' : 'warning'}`}>
              {metrics.firstContentfulPaint.toFixed(0)}ms
            </span>
          </div>
          <div className="metric">
            <span className="label">LCP:</span>
            <span className={`value ${metrics.largestContentfulPaint < 4000 ? 'good' : 'warning'}`}>
              {metrics.largestContentfulPaint.toFixed(0)}ms
            </span>
          </div>
          <div className="status">
            <span className={`status-indicator ${isOptimized ? 'optimized' : 'needs-optimization'}`}>
              {isOptimized ? '✓ Optimized' : '⚠ Needs Optimization'}
            </span>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .performance-optimizer {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 15px;
          border-radius: 8px;
          font-family: monospace;
          font-size: 12px;
          z-index: 1000;
          max-width: 300px;
          display: none; /* Hidden by default, can be enabled for debugging */
        }
        
        .performance-metrics {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        
        .metric {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .label {
          color: #ccc;
        }
        
        .value {
          font-weight: bold;
        }
        
        .value.good {
          color: #4ade80;
        }
        
        .value.warning {
          color: #fbbf24;
        }
        
        .status {
          margin-top: 10px;
          text-align: center;
        }
        
        .status-indicator {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: bold;
        }
        
        .status-indicator.optimized {
          background: #10b981;
          color: white;
        }
        
        .status-indicator.needs-optimization {
          background: #f59e0b;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default PerformanceOptimizer;