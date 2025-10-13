import React, { useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.svg',
        '/images/ai-icon.svg'
      ];

      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });

      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/styles/critical.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);
    };

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

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (!script.defer && !script.async) {
          script.defer = true;
        }
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    optimizeThirdPartyScripts();
    
    setIsOptimized(true);
  }, []);

  return (
    <div className="performance-optimized">
      {children}
    </div>
  );
};

export default PerformanceOptimizer;