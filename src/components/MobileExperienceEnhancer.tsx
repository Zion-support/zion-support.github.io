import React, { useEffect, useCallback, useRef, useState } from 'react';

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  enableTouchOptimization?: boolean;
  enableResponsiveDesign?: boolean;
  enableMobileNavigation?: boolean;
  enableGestureSupport?: boolean;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  enableTouchOptimization = true,
  enableResponsiveDesign = true,
  enableMobileNavigation = true,
  enableGestureSupport = true,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const gestureHistoryRef = useRef<Array<{ x: number; y: number; time: number }>>([]);

  // Detect device type
  const detectDevice = useCallback(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice = /mobile|android|iphone|ipad|phone/i.test(userAgent);
    const isTabletDevice = /tablet|ipad/i.test(userAgent);
    
    setIsMobile(isMobileDevice);
    setIsTablet(isTabletDevice);
    
    // Add device-specific classes to body
    document.body.classList.toggle('mobile-device', isMobileDevice);
    document.body.classList.toggle('tablet-device', isTabletDevice);
  }, []);

  // Detect orientation
  const detectOrientation = useCallback(() => {
    const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    setOrientation(orientation);
    document.body.classList.toggle('portrait', orientation === 'portrait');
    document.body.classList.toggle('landscape', orientation === 'landscape');
  }, []);

  // Touch event optimization
  const optimizeTouchEvents = useCallback(() => {
    if (!enableTouchOptimization) return;

    // Prevent double-tap zoom on mobile
    let lastTouchEnd = 0;
    const preventDoubleTap = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    document.addEventListener('touchend', preventDoubleTap, false);

    // Add passive event listeners for better performance
    const addPassiveListeners = () => {
      const elements = document.querySelectorAll('[data-touch-optimize]');
      elements.forEach(element => {
        element.addEventListener('touchstart', () => {}, { passive: true });
        element.addEventListener('touchmove', () => {}, { passive: true });
        element.addEventListener('touchend', () => {}, { passive: true });
      });
    };

    addPassiveListeners();

    return () => {
      document.removeEventListener('touchend', preventDoubleTap);
    };
  }, [enableTouchOptimization]);

  // Enhanced mobile navigation
  const enhanceMobileNavigation = useCallback(() => {
    if (!enableMobileNavigation) return;

    // Add mobile-specific navigation enhancements
    const mobileNav = document.querySelector('[data-mobile-nav]');
    if (mobileNav) {
      // Add swipe to close functionality
      let startX = 0;
      let currentX = 0;

      const handleTouchStart = (e: TouchEvent) => {
        startX = e.touches[0].clientX;
      };

      const handleTouchMove = (e: TouchEvent) => {
        currentX = e.touches[0].clientX;
        const diff = startX - currentX;
        
        if (diff > 50) { // Swipe left to close
          mobileNav.classList.add('swipe-out');
        }
      };

      const handleTouchEnd = () => {
        if (mobileNav.classList.contains('swipe-out')) {
          mobileNav.classList.remove('swipe-out');
          // Trigger close action
          const closeEvent = new CustomEvent('mobileNavClose');
          document.dispatchEvent(closeEvent);
        }
      };

      mobileNav.addEventListener('touchstart', handleTouchStart, { passive: true });
      mobileNav.addEventListener('touchmove', handleTouchMove, { passive: true });
      mobileNav.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
  }, [enableMobileNavigation]);

  // Gesture support for mobile
  const setupGestureSupport = useCallback(() => {
    if (!enableGestureSupport) return;

    // Swipe gestures
    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now(),
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartRef.current) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      
      gestureHistoryRef.current.push({
        x: currentX,
        y: currentY,
        time: Date.now(),
      });

      // Keep only last 10 points for performance
      if (gestureHistoryRef.current.length > 10) {
        gestureHistoryRef.current.shift();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current) return;

      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const deltaX = endX - touchStartRef.current.x;
      const deltaY = endY - touchStartRef.current.y;
      const deltaTime = Date.now() - touchStartRef.current.time;

      // Detect swipe gestures
      if (deltaTime < 500) { // Quick gesture
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX > 50) {
            // Swipe right
            document.dispatchEvent(new CustomEvent('swipeRight'));
          } else if (deltaX < -50) {
            // Swipe left
            document.dispatchEvent(new CustomEvent('swipeLeft'));
          }
        } else {
          if (deltaY > 50) {
            // Swipe down
            document.dispatchEvent(new CustomEvent('swipeDown'));
          } else if (deltaY < -50) {
            // Swipe up
            document.dispatchEvent(new CustomEvent('swipeUp'));
          }
        }
      }

      // Reset
      touchStartRef.current = null;
      gestureHistoryRef.current = [];
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enableGestureSupport]);

  // Add mobile-specific CSS variables
  const addMobileCSSVariables = useCallback(() => {
    const root = document.documentElement;
    
    // Add viewport-based CSS variables
    const updateCSSVariables = () => {
      const vh = window.innerHeight * 0.01;
      const vw = window.innerWidth * 0.01;
      
      root.style.setProperty('--vh', `${vh}px`);
      root.style.setProperty('--vw', `${vw}px`);
      root.style.setProperty('--mobile-safe-top', 'env(safe-area-inset-top, 0px)');
      root.style.setProperty('--mobile-safe-bottom', 'env(safe-area-inset-bottom, 0px)');
      root.style.setProperty('--mobile-safe-left', 'env(safe-area-inset-left, 0px)');
      root.style.setProperty('--mobile-safe-right', 'env(safe-area-inset-right, 0px)');
    };

    updateCSSVariables();
    window.addEventListener('resize', updateCSSVariables);
    window.addEventListener('orientationchange', updateCSSVariables);

    return () => {
      window.removeEventListener('resize', updateCSSVariables);
      window.removeEventListener('orientationchange', updateCSSVariables);
    };
  }, []);

  // Responsive design enhancements
  const enhanceResponsiveDesign = useCallback(() => {
    if (!enableResponsiveDesign) return;

    // Add responsive breakpoint classes
    const updateBreakpointClasses = () => {
      const width = window.innerWidth;
      document.body.classList.remove('breakpoint-xs', 'breakpoint-sm', 'breakpoint-md', 'breakpoint-lg', 'breakpoint-xl');
      
      if (width < 640) document.body.classList.add('breakpoint-xs');
      else if (width < 768) document.body.classList.add('breakpoint-sm');
      else if (width < 1024) document.body.classList.add('breakpoint-md');
      else if (width < 1280) document.body.classList.add('breakpoint-lg');
      else document.body.classList.add('breakpoint-xl');
    };

    updateBreakpointClasses();
    window.addEventListener('resize', updateBreakpointClasses);

    return () => {
      window.removeEventListener('resize', updateBreakpointClasses);
    };
  }, [enableResponsiveDesign]);

  // Initialize mobile enhancements
  useEffect(() => {
    if (!enabled) return;

    detectDevice();
    detectOrientation();
    optimizeTouchEvents();
    enhanceMobileNavigation();
    setupGestureSupport();
    addMobileCSSVariables();
    enhanceResponsiveDesign();

    // Handle orientation change
    const handleOrientationChange = () => {
      setTimeout(detectOrientation, 100); // Delay to ensure proper detection
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', detectOrientation);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', detectOrientation);
    };
  }, [
    enabled,
    detectDevice,
    detectOrientation,
    optimizeTouchEvents,
    enhanceMobileNavigation,
    setupGestureSupport,
    addMobileCSSVariables,
    enhanceResponsiveDesign,
  ]);

  // Add mobile-specific meta tags
  useEffect(() => {
    if (!enabled || !isMobile) return;

    // Ensure proper mobile meta tags
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
      document.head.appendChild(viewport);
    }

    // Add mobile-specific meta tags
    const mobileMetaTags = [
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'format-detection', content: 'telephone=no' },
    ];

    mobileMetaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!existingTag) {
        const meta = document.createElement('meta');
        meta.name = tag.name;
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
  }, [enabled, isMobile]);

  return null; // This component doesn't render anything
};