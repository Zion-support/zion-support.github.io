import React, { useEffect, useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  RotateCw, 
  Touch, 
  Hand, 
  Wifi, 
  Battery, 
  Settings, 
  X, 
  CheckCircle, 
  AlertTriangle, 
  Info,
  Zap,
  Shield,
  Target,
  Award,
  BarChart3,
  Palette,
  RotateCcw,
  Save,
  Loader2,
  Smartphone as PhoneIcon,
  Wifi as WifiIcon,
  Battery as BatteryIcon,
  Signal,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Eye,
  EyeOff,
  Fingerprint,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Pinch,
  RotateCw as Rotate,
  Shake,
  MousePointer,
  Clock,
  DoubleArrow,
  Move
} from 'lucide-react';

interface MobileExperienceEnhancerProps {
  enabled: boolean;
  enableTouchOptimization?: boolean;
  enableResponsiveDesign?: boolean;
  enableMobileGestures?: boolean;
  enableMobilePerformance?: boolean;
  enableMobileAccessibility?: boolean;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled,
  enableTouchOptimization = true,
  enableResponsiveDesign = true,
  enableMobileGestures = true,
  enableMobilePerformance = true,
  enableMobileAccessibility = true
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [touchSupported, setTouchSupported] = useState(false);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const gestureRef = useRef<{ type: string; data: any } | null>(null);

  // Detect mobile device and capabilities
  const detectMobileCapabilities = useCallback(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const tablet = /ipad|android(?=.*\b(?:tablet|tab)\b)/i.test(userAgent);
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    setIsMobile(mobile);
    setIsTablet(tablet);
    setTouchSupported(touch);
    
    // Set viewport size
    setViewportSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    // Set orientation
    setOrientation(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');
  }, []);

  // Enhanced touch optimization
  const setupTouchOptimization = useCallback(() => {
    if (!enableTouchOptimization || !touchSupported) return;

    // Prevent double-tap zoom on mobile
    let lastTouchEnd = 0;
    const preventDoubleTapZoom = (event: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    };

    document.addEventListener('touchend', preventDoubleTapZoom, false);

    // Optimize touch targets (minimum 44x44px)
    const optimizeTouchTargets = () => {
      const touchElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"], [role="link"]');
      touchElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.width < 44 || rect.height < 44) {
          element.classList.add('touch-target-optimized');
        }
      });
    };

    optimizeTouchTargets();

    // Add touch feedback
    const addTouchFeedback = (event: TouchEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('touch-target-optimized')) {
        target.classList.add('touch-active');
        setTimeout(() => {
          target.classList.remove('touch-active');
        }, 150);
      }
    };

    document.addEventListener('touchstart', addTouchFeedback);

    return () => {
      document.removeEventListener('touchend', preventDoubleTapZoom, false);
      document.removeEventListener('touchstart', addTouchFeedback);
    };
  }, [enableTouchOptimization, touchSupported]);

  // Enhanced responsive design
  const setupResponsiveDesign = useCallback(() => {
    if (!enableResponsiveDesign) return;

    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      setOrientation(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');
      
      // Update CSS custom properties for responsive design
      document.documentElement.style.setProperty('--viewport-width', `${window.innerWidth}px`);
      document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
      document.documentElement.style.setProperty('--is-mobile', isMobile ? '1' : '0');
      document.documentElement.style.setProperty('--is-tablet', isTablet ? '1' : '0');
      document.documentElement.style.setProperty('--is-portrait', orientation === 'portrait' ? '1' : '0');
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    // Initial setup
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [enableResponsiveDesign, isMobile, isTablet, orientation]);

  // Enhanced mobile gestures
  const setupMobileGestures = useCallback(() => {
    if (!enableMobileGestures || !touchSupported) return;

    // Swipe detection
    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      };
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (!touchStartRef.current) return;

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;
      const deltaTime = Date.now() - touchStartRef.current.time;
      
      // Minimum swipe distance and time
      const minDistance = 50;
      const maxTime = 300;

      if (deltaTime < maxTime) {
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minDistance) {
          // Horizontal swipe
          if (deltaX > 0) {
            handleSwipeRight();
          } else {
            handleSwipeLeft();
          }
        } else if (Math.abs(deltaY) > minDistance) {
          // Vertical swipe
          if (deltaY > 0) {
            handleSwipeDown();
          } else {
            handleSwipeUp();
          }
        }
      }

      touchStartRef.current = null;
    };

    // Swipe handlers
    const handleSwipeLeft = () => {
      // Navigate to next page/section
      const nextButton = document.querySelector('[data-swipe-next]');
      if (nextButton) {
        (nextButton as HTMLElement).click();
      }
    };

    const handleSwipeRight = () => {
      // Navigate to previous page/section
      const prevButton = document.querySelector('[data-swipe-prev]');
      if (prevButton) {
        (prevButton as HTMLElement).click();
      }
    };

    const handleSwipeUp = () => {
      // Scroll to top or expand content
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSwipeDown = () => {
      // Refresh or collapse content
      const refreshButton = document.querySelector('[data-swipe-refresh]');
      if (refreshButton) {
        (refreshButton as HTMLElement).click();
      }
    };

    // Pinch to zoom prevention for specific elements
    const preventPinchZoom = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        const target = event.target as HTMLElement;
        if (target.classList.contains('prevent-zoom')) {
          event.preventDefault();
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    document.addEventListener('touchmove', preventPinchZoom, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchmove', preventPinchZoom);
    };
  }, [enableMobileGestures, touchSupported]);

  // Enhanced mobile performance
  const setupMobilePerformance = useCallback(() => {
    if (!enableMobilePerformance) return;

    // Optimize images for mobile
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-mobile-src]');
      images.forEach((img) => {
        const imageElement = img as HTMLImageElement;
        if (isMobile && imageElement.dataset.mobileSrc) {
          imageElement.src = imageElement.dataset.mobileSrc;
        }
      });
    };

    // Lazy load images for mobile
    const setupLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
              }
            }
          });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach((img) => imageObserver.observe(img));
      }
    };

    // Optimize animations for mobile
    const optimizeAnimations = () => {
      if (isMobile) {
        document.documentElement.classList.add('mobile-optimized');
        
        // Reduce animation complexity on mobile
        const animatedElements = document.querySelectorAll('[data-animate]');
        animatedElements.forEach((element) => {
          element.classList.add('mobile-animation');
        });
      }
    };

    optimizeImages();
    setupLazyLoading();
    optimizeAnimations();

    // Performance monitoring for mobile
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            if (navEntry.loadEventEnd - navEntry.loadEventStart > 1000) {
              console.warn('Slow page load detected on mobile');
            }
          }
        });
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  }, [enableMobilePerformance, isMobile]);

  // Enhanced mobile accessibility
  const setupMobileAccessibility = useCallback(() => {
    if (!enableMobileAccessibility) return;

    // Add mobile-specific ARIA labels
    const enhanceMobileARIA = () => {
      if (isMobile) {
        // Add swipe instructions
        const swipeableElements = document.querySelectorAll('[data-swipeable]');
        swipeableElements.forEach((element) => {
          element.setAttribute('aria-label', `${element.getAttribute('aria-label') || ''} Swipe left or right to navigate`);
        });

        // Add touch target indicators
        const touchTargets = document.querySelectorAll('.touch-target-optimized');
        touchTargets.forEach((element) => {
          element.setAttribute('aria-describedby', 'touch-target-info');
        });
      }
    };

    // Create touch target information
    const createTouchTargetInfo = () => {
      if (isMobile) {
        const info = document.createElement('div');
        info.id = 'touch-target-info';
        info.className = 'sr-only';
        info.textContent = 'This element has been optimized for touch interaction';
        document.body.appendChild(info);
      }
    };

    enhanceMobileARIA();
    createTouchTargetInfo();

    // Mobile-specific keyboard shortcuts
    const handleMobileKeyboard = (event: KeyboardEvent) => {
      if (isMobile) {
        // Volume buttons for navigation (if supported)
        if (event.key === 'AudioVolumeUp') {
          event.preventDefault();
          const nextButton = document.querySelector('[data-swipe-next]');
          if (nextButton) {
            (nextButton as HTMLElement).click();
          }
        } else if (event.key === 'AudioVolumeDown') {
          event.preventDefault();
          const prevButton = document.querySelector('[data-swipe-prev]');
          if (prevButton) {
            (prevButton as HTMLElement).click();
          }
        }
      }
    };

    document.addEventListener('keydown', handleMobileKeyboard);

    return () => {
      document.removeEventListener('keydown', handleMobileKeyboard);
      const info = document.getElementById('touch-target-info');
      if (info && info.parentNode) {
        info.parentNode.removeChild(info);
      }
    };
  }, [enableMobileAccessibility, isMobile]);

  // Setup all mobile enhancements
  useEffect(() => {
    if (!enabled) return;

    // Initial detection
    detectMobileCapabilities();

    const cleanupFunctions: (() => void)[] = [];

    // Setup touch optimization
    if (enableTouchOptimization) {
      const touchCleanup = setupTouchOptimization();
      cleanupFunctions.push(touchCleanup);
    }

    // Setup responsive design
    if (enableResponsiveDesign) {
      const responsiveCleanup = setupResponsiveDesign();
      cleanupFunctions.push(responsiveCleanup);
    }

    // Setup mobile gestures
    if (enableMobileGestures) {
      const gestureCleanup = setupMobileGestures();
      cleanupFunctions.push(gestureCleanup);
    }

    // Setup mobile performance
    if (enableMobilePerformance) {
      const performanceCleanup = setupMobilePerformance();
      cleanupFunctions.push(performanceCleanup);
    }

    // Setup mobile accessibility
    if (enableMobileAccessibility) {
      const accessibilityCleanup = setupMobileAccessibility();
      cleanupFunctions.push(accessibilityCleanup);
    }

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [
    enabled,
    enableTouchOptimization,
    enableResponsiveDesign,
    enableMobileGestures,
    enableMobilePerformance,
    enableMobileAccessibility,
    detectMobileCapabilities,
    setupTouchOptimization,
    setupResponsiveDesign,
    setupMobileGestures,
    setupMobilePerformance,
    setupMobileAccessibility
  ]);

  // Add mobile-specific CSS
  useEffect(() => {
    if (!enabled || !isMobile) return;

    const style = document.createElement('style');
    style.textContent = `
      .touch-target-optimized {
        min-width: 44px !important;
        min-height: 44px !important;
        padding: 8px !important;
      }
      
      .touch-active {
        background-color: rgba(6, 182, 212, 0.1) !important;
        transform: scale(0.95) !important;
      }
      
      .mobile-optimized * {
        will-change: auto !important;
      }
      
      .mobile-animation {
        animation-duration: 0.3s !important;
        transition-duration: 0.2s !important;
      }
      
      @media (max-width: 768px) {
        .mobile-hidden {
          display: none !important;
        }
        
        .mobile-full-width {
          width: 100% !important;
          margin: 0 !important;
          padding: 0 16px !important;
        }
      }
      
      @media (max-width: 480px) {
        .mobile-compact {
          padding: 8px !important;
          margin: 4px !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [enabled, isMobile]);

  if (!enabled) return null;

  return (
    <div className="mobile-experience-enhancer" style={{ display: 'none' }}>
      {/* Hidden component for mobile enhancements */}
      <div 
        data-mobile-device={isMobile}
        data-tablet-device={isTablet}
        data-touch-supported={touchSupported}
        data-orientation={orientation}
        data-viewport-width={viewportSize.width}
        data-viewport-height={viewportSize.height}
      />
    </div>
  );
};