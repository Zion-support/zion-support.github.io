import React, { useEffect, useState } from 'react';

interface MobileOptimizerProps {
  children: React.ReactNode;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [touchDevice, setTouchDevice] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setOrientation(height > width ? 'portrait' : 'landscape');
      setTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, []);

  useEffect(() => {
    // Apply mobile-specific optimizations
    if (isMobile) {
      // Prevent zoom on input focus
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      }

      // Add touch-friendly classes
      document.body.classList.add('touch-device');
    } else {
      document.body.classList.remove('touch-device');
    }

    // Apply orientation-specific styles
    document.body.classList.toggle('portrait', orientation === 'portrait');
    document.body.classList.toggle('landscape', orientation === 'landscape');

    // Apply device-specific classes
    document.body.classList.toggle('mobile', isMobile);
    document.body.classList.toggle('tablet', isTablet);
    document.body.classList.toggle('desktop', !isMobile && !isTablet);
  }, [isMobile, isTablet, orientation]);

  // Add touch event optimizations
  useEffect(() => {
    if (touchDevice) {
      // Add passive event listeners for better performance
      const addPassiveListener = (element: HTMLElement, event: string, handler: EventListener) => {
        element.addEventListener(event, handler, { passive: true });
      };

      // Optimize scroll performance
      const handleTouchMove = (e: TouchEvent) => {
        // Prevent default on touch move to avoid scrolling issues
        if (e.target instanceof HTMLElement && e.target.closest('.no-scroll')) {
          e.preventDefault();
        }
      };

      document.addEventListener('touchmove', handleTouchMove, { passive: false });

      return () => {
        document.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [touchDevice]);

  // Add mobile-specific CSS
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .touch-device * {
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      .touch-device input,
      .touch-device textarea,
      .touch-device [contenteditable] {
        -webkit-user-select: text;
        -khtml-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
      }
      
      .mobile .mobile-optimized {
        font-size: 16px; /* Prevent zoom on iOS */
      }
      
      .mobile .touch-target {
        min-height: 44px;
        min-width: 44px;
      }
      
      .mobile .swipeable {
        touch-action: pan-x;
      }
      
      .mobile .scrollable {
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
      }
      
      .portrait .portrait-only {
        display: block;
      }
      
      .portrait .landscape-only {
        display: none;
      }
      
      .landscape .portrait-only {
        display: none;
      }
      
      .landscape .landscape-only {
        display: block;
      }
      
      @media (max-width: 767px) {
        .mobile-hidden {
          display: none !important;
        }
        
        .mobile-full {
          width: 100% !important;
        }
        
        .mobile-center {
          text-align: center !important;
        }
      }
      
      @media (min-width: 768px) and (max-width: 1023px) {
        .tablet-hidden {
          display: none !important;
        }
      }
      
      @media (min-width: 1024px) {
        .desktop-hidden {
          display: none !important;
        }
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      className={`
        mobile-optimizer
        ${isMobile ? 'mobile' : ''}
        ${isTablet ? 'tablet' : ''}
        ${orientation}
        ${touchDevice ? 'touch-device' : ''}
      `}
    >
      {children}
    </div>
  );
};

export default MobileOptimizer;