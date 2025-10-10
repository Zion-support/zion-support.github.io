'use client';

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

interface AdvancedPerformanceOptimizerProps {
  enableMonitoring?: boolean;
  enableOptimization?: boolean;
  enableCaching?: boolean;
  enableLazyLoading?: boolean;
}

const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({
  enableMonitoring = true,
  enableOptimization = true,
  enableCaching = true,
  enableLazyLoading = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });

  useEffect(() => {
    if (enableMonitoring) {
      // Monitor performance metrics
      const measurePerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        
        // Measure render time
        const renderStart = performance.now();
        requestAnimationFrame(() => {
          const renderTime = performance.now() - renderStart;
          
          // Get memory usage if available
          const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
          
          // Estimate FPS
          let fps = 0;
          let lastTime = performance.now();
          const countFPS = () => {
            const currentTime = performance.now();
            fps = 1000 / (currentTime - lastTime);
            lastTime = currentTime;
            requestAnimationFrame(countFPS);
          };
          countFPS();
          
          setMetrics({
            loadTime,
            renderTime,
            memoryUsage: memoryUsage / 1024 / 1024, // Convert to MB
            fps: Math.round(fps)
          });
        });
      };

      measurePerformance();
    }
  }, [enableMonitoring]);

  useEffect(() => {
    if (enableOptimization) {
      // Optimize images
      const optimizeImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
          if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
          }
          if (!img.hasAttribute('decoding')) {
            img.setAttribute('decoding', 'async');
          }
        });
      };

      optimizeImages();
    }
  }, [enableOptimization]);

  useEffect(() => {
    if (enableCaching) {
      // Implement service worker for caching
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered:', registration);
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error);
          });
      }
    }
  }, [enableCaching]);

  useEffect(() => {
    if (enableLazyLoading) {
      // Implement lazy loading for images and components
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (target.dataset.src) {
              target.setAttribute('src', target.dataset.src);
              target.removeAttribute('data-src');
            }
            observer.unobserve(target);
          }
        });
      });

      const lazyElements = document.querySelectorAll('[data-src]');
      lazyElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [enableLazyLoading]);

  const optimizeBundle = () => {
    // Implement bundle optimization
    console.log('Optimizing bundle...');
    // Add bundle optimization logic here
  };

  const clearCache = () => {
    // Clear browser cache
    if ('caches' in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
      });
    }
  };

  return (
    <div className="performance-optimizer">
      <style jsx>{`
        .performance-optimizer {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.8);
          padding: 15px;
          border-radius: 8px;
          color: white;
          font-family: monospace;
          font-size: 12px;
        }
        
        .metrics {
          margin-bottom: 10px;
        }
        
        .metric {
          display: flex;
          justify-content: space-between;
          margin: 2px 0;
        }
        
        .controls button {
          margin: 2px;
          padding: 4px 8px;
          background: #0066cc;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 10px;
        }
        
        .controls button:hover {
          background: #0052a3;
        }
      `}</style>
      
      {enableMonitoring && (
        <div className="metrics">
          <div className="metric">
            <span>Load Time:</span>
            <span>{metrics.loadTime.toFixed(2)}ms</span>
          </div>
          <div className="metric">
            <span>Render Time:</span>
            <span>{metrics.renderTime.toFixed(2)}ms</span>
          </div>
          <div className="metric">
            <span>Memory:</span>
            <span>{metrics.memoryUsage.toFixed(2)}MB</span>
          </div>
          <div className="metric">
            <span>FPS:</span>
            <span>{metrics.fps}</span>
          </div>
        </div>
      )}
      
      <div className="controls">
        <button onClick={optimizeBundle}>Optimize</button>
        <button onClick={clearCache}>Clear Cache</button>
      </div>
    </div>
  );
};

export default AdvancedPerformanceOptimizer;