import React, { useEffect, useState } from 'react';

const PerformanceOptimizer = ({ children }) => {
  const [isOptimized, setIsOptimized] = useState(false);
  const [connectionSpeed, setConnectionSpeed] = useState('4g');

  useEffect(() => {
    // Detect connection speed
    if (navigator.connection) {
      const connection = navigator.connection;
      setConnectionSpeed(connection.effectiveType || '4g');
      
      // Adjust loading strategy based on connection
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        // For slow connections, defer non-critical resources
        document.documentElement.classList.add('slow-connection');
      }
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = ['/favicon.ico', '/logo.png'];
      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });

      setIsOptimized(true);
    };

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Implement service worker for caching
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered:', registration);
        } catch (error) {
          console.log('Service Worker registration failed:', error);
        }
      }
    };

    // Execute optimizations
    preloadCriticalResources();
    optimizeImages();
    registerServiceWorker();

    // Cleanup
    return () => {
      // Remove slow connection class if added
      document.documentElement.classList.remove('slow-connection');
    };
  }, []);

  // Monitor Core Web Vitals
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          console.log('LCP:', entry.startTime);
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            console.log('CLS:', entry.value);
          }
        }
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  // Resource hints based on connection speed
  useEffect(() => {
    if (connectionSpeed === 'slow-2g' || connectionSpeed === '2g') {
      // For slow connections, prioritize critical resources
      const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      ];
      
      criticalResources.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = 'style';
        document.head.appendChild(link);
      });
    }
  }, [connectionSpeed]);

  return (
    <div className={`performance-optimizer ${isOptimized ? 'optimized' : 'loading'}`}>
      {children}
      
      {/* Performance indicator for development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-black/80 text-white p-2 rounded text-xs font-mono">
          <div>Connection: {connectionSpeed}</div>
          <div>Optimized: {isOptimized ? 'Yes' : 'No'}</div>
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;