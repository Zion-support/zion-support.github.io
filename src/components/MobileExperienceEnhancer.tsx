import React, { useEffect, useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  children?: React.ReactNode;
}

interface MobileSettings {
  touchOptimization: boolean;
  gestureNavigation: boolean;
  mobileMenu: boolean;
  responsiveImages: boolean;
  mobilePerformance: boolean;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  children
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileSettings, setMobileSettings] = useState<MobileSettings>({
    touchOptimization: true,
    gestureNavigation: true,
    mobileMenu: true,
    responsiveImages: true,
    mobilePerformance: true
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Detect mobile device
  const detectMobile = useCallback(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    
    setIsMobile(isMobileDevice || isTouchDevice || isSmallScreen);
  }, []);

  // Apply mobile optimizations
  const applyMobileOptimizations = useCallback(() => {
    if (!enabled || !isMobile) return;

    // Touch optimization
    if (mobileSettings.touchOptimization) {
      // Add touch-action CSS for better touch scrolling
      const scrollableElements = document.querySelectorAll('.scrollable, [data-scrollable]');
      scrollableElements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.touchAction = 'pan-y';
          element.style.webkitOverflowScrolling = 'touch';
        }
      });

      // Optimize button sizes for touch
      const buttons = document.querySelectorAll('button, .btn, [role="button"]');
      buttons.forEach(button => {
        if (button instanceof HTMLElement) {
          button.style.minHeight = '44px';
          button.style.minWidth = '44px';
        }
      });
    }

    // Gesture navigation
    if (mobileSettings.gestureNavigation) {
      let startX = 0;
      let startY = 0;
      let isSwiping = false;

      const handleTouchStart = (e: TouchEvent) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isSwiping = false;
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (!isSwiping) {
          const deltaX = Math.abs(e.touches[0].clientX - startX);
          const deltaY = Math.abs(e.touches[0].clientY - startY);
          
          if (deltaX > deltaY && deltaX > 50) {
            isSwiping = true;
            e.preventDefault();
          }
        }
      };

      const handleTouchEnd = (e: TouchEvent) => {
        if (isSwiping) {
          const deltaX = e.changedTouches[0].clientX - startX;
          const threshold = 100;

          if (Math.abs(deltaX) > threshold) {
            // Handle swipe navigation
            if (deltaX > 0) {
              // Swipe right - go back
              if (window.history.length > 1) {
                window.history.back();
              }
            } else {
              // Swipe left - go forward
              if (window.history.length > 1) {
                window.history.forward();
              }
            }
          }
        }
      };

      document.addEventListener('touchstart', handleTouchStart, { passive: false });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd, { passive: false });

      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }

    // Mobile menu optimization
    if (mobileSettings.mobileMenu) {
      const mobileMenus = document.querySelectorAll('[data-mobile-menu]');
      mobileMenus.forEach(menu => {
        if (menu instanceof HTMLElement) {
          // Add mobile-specific classes
          menu.classList.add('mobile-menu');
          
          // Add backdrop for mobile menus
          const backdrop = document.createElement('div');
          backdrop.className = 'mobile-menu-backdrop';
          backdrop.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          `;
          
          document.body.appendChild(backdrop);
          
          // Handle backdrop clicks
          backdrop.addEventListener('click', () => {
            menu.classList.remove('open');
            backdrop.style.opacity = '0';
            backdrop.style.visibility = 'hidden';
          });
        }
      });
    }

    // Responsive images
    if (mobileSettings.responsiveImages) {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        if (img instanceof HTMLImageElement) {
          // Add responsive image attributes
          img.setAttribute('loading', 'lazy');
          img.setAttribute('decoding', 'async');
          
          // Add srcset for different screen sizes
          const src = img.getAttribute('data-src');
          if (src) {
            img.srcset = `
              ${src.replace('.jpg', '-small.jpg')} 480w,
              ${src.replace('.jpg', '-medium.jpg')} 768w,
              ${src} 1200w
            `;
            img.sizes = '(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw';
          }
        }
      });
    }

    // Mobile performance optimization
    if (mobileSettings.mobilePerformance) {
      // Reduce animations on mobile
      const animatedElements = document.querySelectorAll('[data-animate], .animate');
      animatedElements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.animationDuration = '0.3s';
          element.style.transitionDuration = '0.2s';
        }
      });

      // Optimize scroll performance
      const scrollContainers = document.querySelectorAll('.scroll-container, [data-scroll]');
      scrollContainers.forEach(container => {
        if (container instanceof HTMLElement) {
          container.style.willChange = 'transform';
          container.style.transform = 'translateZ(0)';
        }
      });
    }
  }, [enabled, isMobile, mobileSettings]);

  // Handle resize events
  useEffect(() => {
    detectMobile();
    
    const handleResize = () => {
      detectMobile();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [detectMobile]);

  // Apply optimizations when mobile state changes
  useEffect(() => {
    if (isMobile) {
      applyMobileOptimizations();
    }
  }, [isMobile, applyMobileOptimizations]);

  // Enhanced mobile viewport handling
  useEffect(() => {
    if (!enabled || !isMobile) return;

    // Set viewport meta tag for mobile
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      document.head.appendChild(viewportMeta);
    }
    
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover');

    // Handle safe area insets for notched devices
    const root = document.documentElement;
    const safeAreaTop = getComputedStyle(root).getPropertyValue('--sat') || 'env(safe-area-inset-top)';
    const safeAreaBottom = getComputedStyle(root).getPropertyValue('--sab') || 'env(safe-area-inset-bottom)';
    
    root.style.setProperty('--safe-area-top', safeAreaTop);
    root.style.setProperty('--safe-area-bottom', safeAreaBottom);
  }, [enabled, isMobile]);

  // Mobile-specific event handlers
  useEffect(() => {
    if (!enabled || !isMobile) return;

    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    const handleTouchEnd = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    document.addEventListener('touchend', handleTouchEnd, false);

    // Handle orientation changes
    const handleOrientationChange = () => {
      // Adjust layout for orientation change
      const isPortrait = window.innerHeight > window.innerWidth;
      document.body.classList.toggle('portrait', isPortrait);
      document.body.classList.toggle('landscape', !isPortrait);
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    handleOrientationChange(); // Initial call

    return () => {
      document.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [enabled, isMobile]);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Mobile Settings Panel */}
      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-800 z-50 p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Mobile Experience Settings
            </h2>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Close mobile settings panel"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            {/* Touch Optimization */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Touch Optimization
              </label>
              <input
                type="checkbox"
                checked={mobileSettings.touchOptimization}
                onChange={(e) => setMobileSettings(prev => ({ ...prev, touchOptimization: e.target.checked }))}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>

            {/* Gesture Navigation */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Gesture Navigation
              </label>
              <input
                type="checkbox"
                checked={mobileSettings.gestureNavigation}
                onChange={(e) => setMobileSettings(prev => ({ ...prev, gestureNavigation: e.target.checked }))}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>

            {/* Mobile Menu */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Mobile Menu
              </label>
              <input
                type="checkbox"
                checked={mobileSettings.mobileMenu}
                onChange={(e) => setMobileSettings(prev => ({ ...prev, mobileMenu: e.target.checked }))}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>

            {/* Responsive Images */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Responsive Images
              </label>
              <input
                type="checkbox"
                checked={mobileSettings.responsiveImages}
                onChange={(e) => setMobileSettings(prev => ({ ...prev, responsiveImages: e.target.checked }))}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>

            {/* Mobile Performance */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Mobile Performance
              </label>
              <input
                type="checkbox"
                checked={mobileSettings.mobilePerformance}
                onChange={(e) => setMobileSettings(prev => ({ ...prev, mobilePerformance: e.target.checked }))}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Mobile status */}
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
              Mobile Status
            </h3>
            <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <div>Device: {isMobile ? 'Mobile' : 'Desktop'}</div>
              <div>Screen: {window.innerWidth} × {window.innerHeight}</div>
              <div>Orientation: {window.innerHeight > window.innerWidth ? 'Portrait' : 'Landscape'}</div>
              <div>Touch: {'ontouchstart' in window ? 'Supported' : 'Not Supported'}</div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Experience Toggle Button */}
      {isMobile && (
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="fixed bottom-4 right-4 z-40 w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2"
          aria-label="Open mobile experience settings"
          aria-expanded={isVisible}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </button>
      )}

      {/* Intersection observer target */}
      <div ref={ref} className="w-full" />

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            z-index: 1000;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
          }
          
          .mobile-menu.open {
            transform: translateX(0);
          }
          
          .mobile-menu-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
          }
          
          /* Safe area handling */
          .safe-area-top {
            padding-top: var(--safe-area-top, 0);
          }
          
          .safe-area-bottom {
            padding-bottom: var(--safe-area-bottom, 0);
          }
          
          /* Touch-friendly sizing */
          button, .btn, [role="button"] {
            min-height: 44px !important;
            min-width: 44px !important;
          }
          
          /* Optimize scrolling */
          .scrollable, [data-scrollable] {
            -webkit-overflow-scrolling: touch;
            touch-action: pan-y;
          }
        }
        
        /* Portrait vs Landscape */
        .portrait .landscape-only {
          display: none !important;
        }
        
        .landscape .portrait-only {
          display: none !important;
        }
      `}</style>

      {children}
    </>
  );
};

export default MobileExperienceEnhancer;