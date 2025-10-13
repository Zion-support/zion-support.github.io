import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/api/placeholder/1200/630', // Hero image
        '/api/placeholder/800/600',  // Service images
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" for non-critical images
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    };

    // Optimize fonts
    const optimizeFonts = () => {
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
    };

    // Run optimizations
    preloadCriticalResources();
    optimizeImages();
    optimizeFonts();
    
    setIsOptimized(true);
  }, []);

  // Optimize scroll performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Add scroll-based optimizations here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Optimize resize performance
  useEffect(() => {
    let ticking = false;
    
    const handleResize = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Add resize-based optimizations here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Optimize animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      * {
        will-change: auto;
      }
      
      .animate-pulse {
        animation-duration: 2s;
        animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      }
      
      .animate-spin {
        animation-duration: 1s;
        animation-timing-function: linear;
      }
      
      .animate-bounce {
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {children}
      <style>{`
        * {
          will-change: auto;
        }
        
        .animate-pulse {
          animation-duration: 2s;
          animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
        }
        
        .animate-spin {
          animation-duration: 1s;
          animation-timing-function: linear;
        }
        
        .animate-bounce {
          animation-duration: 1s;
          animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default PerformanceOptimizer;