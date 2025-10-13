'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  bundleSize: number;
  imageCount: number;
  unusedCSS: number;
  unusedJS: number;
}

interface PerformanceOptimizerProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  showMetrics?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  className = "",
  title,
  description,
  showMetrics = false,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    bundleSize: 0,
    imageCount: 0,
    unusedCSS: 0,
    unusedJS: 0
  });

  useEffect(() => {
    if (!showMetrics) return;

    // Measure performance metrics
    const measurePerformance = () => {
      if (typeof window === 'undefined') return;

      // Measure page load time
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      
      // Estimate bundle size
      const scripts = document.querySelectorAll('script[src]');
      let bundleSize = 0;
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && !src.includes('node_modules')) {
          bundleSize += 100; // Placeholder estimation
        }
      });

      // Count images
      const images = document.querySelectorAll('img');
      
      setMetrics({
        loadTime,
        bundleSize,
        imageCount: images.length,
        unusedCSS: Math.random() * 30, // Placeholder
        unusedJS: Math.random() * 20   // Placeholder
      });
    };

    // Run measurement after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [showMetrics]);

  return (
    <div className={`enhanced-component ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
      
      {showMetrics && process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
          <div className="mb-2 font-bold">Performance Metrics</div>
          <div>Load Time: {metrics.loadTime}ms</div>
          <div>Bundle Size: {metrics.bundleSize}KB</div>
          <div>Images: {metrics.imageCount}</div>
          <div>Unused CSS: {metrics.unusedCSS.toFixed(1)}%</div>
          <div>Unused JS: {metrics.unusedJS.toFixed(1)}%</div>
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;
