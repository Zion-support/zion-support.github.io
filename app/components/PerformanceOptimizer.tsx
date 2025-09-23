import React, { useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadTime, setLoadTime] = useState<number>(0);

  useEffect(() => {
    const startTime = performance.now();
    
    // Simulate loading time measurement
    const timer = setTimeout(() => {
      const endTime = performance.now();
      setLoadTime(endTime - startTime);
      setIsVisible(true);
    }, 100);

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical images
      const criticalImages = [
        '/images/zion-tech-group-logo.png',
        '/images/hero-background.jpg',
        '/images/ai-automation-icon.svg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.href = '/fonts/inter-var.woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    preloadCriticalResources();

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, []);

  if (!isVisible) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Optimizing performance...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {children}
      {/* Performance metrics overlay (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs z-50">
          <div>Load Time: {loadTime.toFixed(2)}ms</div>
          <div>Components: {React.Children.count(children)}</div>
        </div>
      )}
    </>
  );
};

export default PerformanceOptimizer;