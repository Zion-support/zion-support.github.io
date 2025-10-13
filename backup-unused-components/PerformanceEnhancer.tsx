import React from 'react';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  loadTime: number;
}

const PerformanceEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');

      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry;

      const metrics: PerformanceMetrics = {
//         fcp: fcp ? fcp.startTime : 0,
//         lcp: lcp ? lcp.startTime : 0,
        fid: 0, // Would need PerformanceObserver
        cls: 0, // Would need PerformanceObserver
//         ttfb: navigation.responseStart - navigation.requestStart,
//         loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      };

      setMetrics(metrics);

      // Log performance metrics
      };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/critical.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = '/fonts/inter-var.woff2';
      fontPreload.as = 'font';
      fontPreload.type = 'font/woff2';
      fontPreload.crossOrigin = 'anonymous';
      document.head.appendChild(fontPreload);
    };

    preloadCriticalResources();
  }, []);

  // Optimize images
  useEffect(() => {
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    optimizeImages();
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !metrics) {
    return null;
  }

interface PerformanceEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PerformanceEnhancer({ className = '', children }: PerformanceEnhancerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
    <div className="fixed bottom-4 right-4 z-50"
        aria-label="Toggle performance metrics"absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64"font-semibold text-gray-900 mb-3"space-y-2 text-sm"flex justify-between"text-gray-600"font-mono"flex justify-between"text-gray-600"font-mono"flex justify-between"text-gray-600"font-mono"flex justify-between"text-gray-600"font-mono">{metrics.loadTime.toFixed(2)}ms</span>
</div>
</div>
</div>
      )}
</div>
  );
