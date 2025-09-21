import React, { useEffect, useState } from 'react';

interface MobileOptimizerProps {
  children: React.ReactNode;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      const mobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      setIsMobile(mobile);
    };

    // Detect touch capability
    const checkTouch = () => {
      const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouch(touch);
    };

    // Add mobile-specific optimizations
    const optimizeForMobile = () => {
      if (isMobile) {
        // Prevent zoom on input focus
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }

        // Add touch-friendly classes
        document.body.classList.add('touch-device');
        
        // Optimize images for mobile
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          img.style.maxWidth = '100%';
          img.style.height = 'auto';
        });

        // Add mobile navigation
        const nav = document.querySelector('nav');
        if (nav) {
          nav.classList.add('mobile-optimized');
        }
      }
    };

    // Initialize
    checkMobile();
    checkTouch();
    optimizeForMobile();

    // Handle resize
    const handleResize = () => {
      checkMobile();
      optimizeForMobile();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  // Add mobile-specific styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .touch-device button, .touch-device a {
        min-height: 44px;
        min-width: 44px;
      }
      
      .mobile-optimized {
        padding: 0.5rem;
      }
      
      .mobile-optimized .container {
        padding-left: 1rem;
        padding-right: 1rem;
      }
      
      @media (max-width: 768px) {
        .mobile-optimized .hidden.md\\:flex {
          display: none !important;
        }
        
        .mobile-optimized .text-4xl {
          font-size: 2rem;
        }
        
        .mobile-optimized .text-6xl {
          font-size: 3rem;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className={`mobile-optimizer ${isMobile ? 'mobile-device' : 'desktop-device'} ${isTouch ? 'touch-device' : 'no-touch'}`}>
      {children}
    </div>
  );
};

export default MobileOptimizer;