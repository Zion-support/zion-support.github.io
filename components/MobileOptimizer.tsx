'use client';

import { useEffect, useState } from 'react';

const MobileOptimizer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      setIsMobile(isMobileDevice);
      setIsTouch(isTouchDevice);
    };

    // Optimize for mobile
    const optimizeForMobile = () => {
      if (isMobile || isTouch) {
        // Add mobile-specific classes
        document.body.classList.add('mobile-optimized');
        
        // Optimize touch interactions
        const touchElements = document.querySelectorAll('button, a, [role="button"]');
        touchElements.forEach(element => {
          element.classList.add('touch-optimized');
        });

        // Optimize images for mobile
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          if (img.width > 400) {
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
          }
        });

        // Optimize text for mobile reading
        const textElements = document.querySelectorAll('p, span, div');
        textElements.forEach(element => {
          if (element.textContent && element.textContent.length > 100) {
            element.classList.add('mobile-text-optimized');
          }
        });
      }
    };

    // Handle viewport changes
    const handleResize = () => {
      checkMobile();
      optimizeForMobile();
    };

    // Initialize
    checkMobile();
    optimizeForMobile();

    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [isMobile, isTouch]);

  // Add mobile-specific styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .mobile-optimized {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        text-size-adjust: 100%;
      }
      
      .touch-optimized {
        min-height: 44px;
        min-width: 44px;
        padding: 12px 16px;
        touch-action: manipulation;
      }
      
      .mobile-text-optimized {
        line-height: 1.6;
        font-size: 16px;
        word-spacing: 0.1em;
      }
      
      @media (max-width: 768px) {
        .mobile-optimized h1 {
          font-size: 2rem;
          line-height: 1.2;
        }
        
        .mobile-optimized h2 {
          font-size: 1.5rem;
          line-height: 1.3;
        }
        
        .mobile-optimized h3 {
          font-size: 1.25rem;
          line-height: 1.4;
        }
        
        .mobile-optimized p {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .mobile-optimized .container {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        .mobile-optimized .grid {
          gap: 1rem;
        }
        
        .mobile-optimized .card {
          padding: 1rem;
          margin-bottom: 1rem;
        }
      }
      
      @media (max-width: 480px) {
        .mobile-optimized h1 {
          font-size: 1.75rem;
        }
        
        .mobile-optimized h2 {
          font-size: 1.25rem;
        }
        
        .mobile-optimized .container {
          padding-left: 0.75rem;
          padding-right: 0.75rem;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default MobileOptimizer;