import React, { useEffect, useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Hand, 
  Wifi, 
  Battery, 
  WifiOff, 
  BatteryCharging,
  Volume2,
  VolumeX,
  RotateCcw,
  Settings,
  X,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

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
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const touchEndRef = useRef<{ x: number; y: number } | null>(null);
  const lastTapRef = useRef(0);

  // Detect device type and screen size
  const detectDevice = useCallback(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isTabletDevice = /ipad|android(?=.*\b(?!.*mobile))/i.test(userAgent);
    
    setIsMobile(isMobileDevice);
    setIsTablet(isTabletDevice);
    
    // Add device-specific classes to body
    document.body.classList.toggle('mobile-device', isMobileDevice);
    document.body.classList.toggle('tablet-device', isTabletDevice);
    document.body.classList.toggle('desktop-device', !isMobileDevice && !isTabletDevice);
  }, []);

  // Detect screen orientation
  const detectOrientation = useCallback(() => {
    const newOrientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    setOrientation(newOrientation);
    document.body.classList.toggle('portrait', newOrientation === 'portrait');
    document.body.classList.toggle('landscape', newOrientation === 'landscape');
  }, []);

  // Touch optimization for better mobile performance
  const optimizeTouchEvents = useCallback(() => {
    if (!enableTouchOptimization) return;

    // Prevent double-tap zoom on mobile
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (event) => {
      const now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    }, false);

    // Add touch-action CSS property to prevent unwanted gestures
    const style = document.createElement('style');
    style.textContent = `
      * {
        touch-action: manipulation;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      input, textarea {
        touch-action: auto;
        -webkit-user-select: text;
        -khtml-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
      }
      
      .touchable {
        touch-action: pan-x pan-y;
        cursor: pointer;
      }
      
      .touchable:active {
        transform: scale(0.98);
        transition: transform 0.1s ease;
      }
    `;
    document.head.appendChild(style);
  }, [enableTouchOptimization]);

  // Responsive design enhancements
  const enhanceResponsiveDesign = useCallback(() => {
    if (!enableResponsiveDesign) return;

    // Add responsive breakpoint classes
    const addResponsiveClasses = () => {
      const width = window.innerWidth;
      document.body.classList.remove('xs', 'sm', 'md', 'lg', 'xl', '2xl');
      
      if (width < 640) document.body.classList.add('xs');
      else if (width < 768) document.body.classList.add('sm');
      else if (width < 1024) document.body.classList.add('md');
      else if (width < 1280) document.body.classList.add('lg');
      else if (width < 1536) document.body.classList.add('xl');
      else document.body.classList.add('2xl');
    };

    addResponsiveClasses();
    window.addEventListener('resize', addResponsiveClasses);
    
    return () => window.removeEventListener('resize', addResponsiveClasses);
  }, [enableResponsiveDesign]);

  // Mobile navigation enhancements
  const enhanceMobileNavigation = useCallback(() => {
    if (!enableMobileNavigation) return;

    // Add mobile navigation classes
    const addMobileNavClasses = () => {
      const header = document.querySelector('header');
      const nav = document.querySelector('nav');
      
      if (header) header.classList.add('mobile-header');
      if (nav) nav.classList.add('mobile-nav');
    };

    // Add mobile-specific navigation styles
    const style = document.createElement('style');
    style.textContent = `
      .mobile-header {
        position: sticky;
        top: 0;
        z-index: 50;
        backdrop-filter: blur(10px);
        background: rgba(23, 7, 43, 0.95);
      }
      
      .mobile-nav {
        transition: all 0.3s ease;
      }
      
      .mobile-nav .nav-link {
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        margin: 0.25rem 0;
        transition: all 0.2s ease;
      }
      
      .mobile-nav .nav-link:hover {
        background: rgba(34, 221, 210, 0.1);
        transform: translateX(4px);
      }
      
      @media (max-width: 768px) {
        .mobile-nav {
          position: fixed;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100vh;
          background: rgba(23, 7, 43, 0.98);
          backdrop-filter: blur(20px);
          transition: left 0.3s ease;
          z-index: 40;
        }
        
        .mobile-nav.open {
          left: 0;
        }
      }
    `;
    document.head.appendChild(style);

    addMobileNavClasses();
  }, [enableMobileNavigation]);

  // Gesture support for mobile
  const setupGestureSupport = useCallback(() => {
    if (!enableGestureSupport) return;

    // Swipe detection
    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartRef.current) return;
      
      touchEndRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    const handleTouchEnd = () => {
      if (!touchStartRef.current || !touchEndRef.current) return;

      const start = touchStartRef.current;
      const end = touchEndRef.current;
      const deltaX = end.x - start.x;
      const deltaY = end.y - start.y;
      const minSwipeDistance = 50;

      // Determine swipe direction
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          // Swipe right - could open navigation
          document.dispatchEvent(new CustomEvent('swipeRight'));
        } else {
          // Swipe left - could close navigation
          document.dispatchEvent(new CustomEvent('swipeLeft'));
        }
      } else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > minSwipeDistance) {
        if (deltaY > 0) {
          // Swipe down - could refresh or show notifications
          document.dispatchEvent(new CustomEvent('swipeDown'));
        } else {
          // Swipe up - could hide navigation or show search
          document.dispatchEvent(new CustomEvent('swipeUp'));
        }
      }

      // Reset touch references
      touchStartRef.current = null;
      touchEndRef.current = null;
    };

    // Double tap detection
    const handleDoubleTap = (e: TouchEvent) => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTapRef.current;
      
      if (tapLength < 500 && tapLength > 0) {
        // Double tap detected
        document.dispatchEvent(new CustomEvent('doubleTap', { detail: { target: e.target } }));
      }
      
      lastTapRef.current = currentTime;
    };

    // Add touch event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    document.addEventListener('touchend', handleDoubleTap, { passive: true });

    // Add gesture event listeners for iOS
    if ('ongesturestart' in window) {
      document.addEventListener('gesturestart', (e) => e.preventDefault());
      document.addEventListener('gesturechange', (e) => e.preventDefault());
      document.addEventListener('gestureend', (e) => e.preventDefault());
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchend', handleDoubleTap);
    };
  }, [enableGestureSupport]);

  // Add mobile-specific CSS variables
  const addMobileCSSVariables = useCallback(() => {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --mobile-safe-area-top: env(safe-area-inset-top, 0px);
        --mobile-safe-area-bottom: env(safe-area-inset-bottom, 0px);
        --mobile-safe-area-left: env(safe-area-inset-left, 0px);
        --mobile-safe-area-right: env(safe-area-inset-right, 0px);
        --mobile-touch-target-size: 44px;
        --mobile-spacing: 1rem;
        --mobile-border-radius: 0.75rem;
        --mobile-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      
      .mobile-safe-area {
        padding-top: var(--mobile-safe-area-top);
        padding-bottom: var(--mobile-safe-area-bottom);
        padding-left: var(--mobile-safe-area-left);
        padding-right: var(--mobile-safe-area-right);
      }
      
      .mobile-touch-target {
        min-height: var(--mobile-touch-target-size);
        min-width: var(--mobile-touch-target-size);
      }
      
      @media (max-width: 768px) {
        .mobile-only {
          display: block !important;
        }
        
        .desktop-only {
          display: none !important;
        }
        
        .mobile-spacing {
          padding: var(--mobile-spacing);
          margin: var(--mobile-spacing);
        }
        
        .mobile-rounded {
          border-radius: var(--mobile-border-radius);
        }
        
        .mobile-shadow {
          box-shadow: var(--mobile-shadow);
        }
      }
      
      @media (min-width: 769px) {
        .mobile-only {
          display: none !important;
        }
        
        .desktop-only {
          display: block !important;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Initialize mobile enhancements
    detectDevice();
    detectOrientation();
    optimizeTouchEvents();
    enhanceMobileNavigation();
    setupGestureSupport();
    addMobileCSSVariables();

    // Add event listeners
    window.addEventListener('resize', detectOrientation);
    window.addEventListener('orientationchange', detectOrientation);

    // Cleanup
    return () => {
      window.removeEventListener('resize', detectOrientation);
      window.removeEventListener('orientationchange', detectOrientation);
      
      // Remove device classes
      document.body.classList.remove('mobile-device', 'tablet-device', 'desktop-device');
      document.body.classList.remove('portrait', 'landscape');
    };
  }, [enabled, detectDevice, detectOrientation, optimizeTouchEvents, enhanceMobileNavigation, setupGestureSupport, addMobileCSSVariables]);

  // Enhanced responsive design effect
  useEffect(() => {
    if (!enabled || !enableResponsiveDesign) return;
    return enhanceResponsiveDesign();
  }, [enabled, enableResponsiveDesign, enhanceResponsiveDesign]);

  // Add mobile-specific meta tags
  useEffect(() => {
    if (!enabled || !isMobile) return;

    // Add mobile-specific viewport meta tag
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      document.head.appendChild(viewportMeta);
    }
    
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover');
    
    // Add mobile app meta tags
    const mobileMetaTags = [
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
      { name: 'format-detection', content: 'telephone=no' },
    ];

    mobileMetaTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });
  }, [enabled, isMobile]);

  return null;
};