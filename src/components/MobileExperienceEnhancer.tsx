import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Wifi, 
  Battery, 
  Signal,
  Hand,
  MousePointer,
  ArrowLeftRight
} from 'lucide-react';

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState({
    userAgent: '',
    screenSize: '',
    touchSupport: false,
    orientation: 'portrait'
  });

  useEffect(() => {
    if (!enabled) return;

    const detectDevice = () => {
      const userAgent = navigator.userAgent;
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Device detection
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const tablet = /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)|Android(?=.*\bTablet\b)/i.test(userAgent);
      
      setIsMobile(mobile && !tablet);
      setIsTablet(tablet);
      setIsDesktop(!mobile && !tablet);
      
      setDeviceInfo({
        userAgent: userAgent,
        screenSize: `${screenWidth}x${screenHeight}`,
        touchSupport,
        orientation: screenWidth > screenHeight ? 'landscape' : 'portrait'
      });
    };

    const handleResize = () => {
      detectDevice();
    };

    const handleOrientationChange = () => {
      setTimeout(() => {
        detectDevice();
      }, 100);
    };

    // Initial detection
    detectDevice();

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    // Mobile-specific optimizations
    if (isMobile || isTablet) {
      // Add mobile-specific CSS classes
      document.documentElement.classList.add('mobile-device');
      
      // Optimize touch interactions
      const optimizeTouchInteractions = () => {
        // Increase touch target sizes
        const touchTargets = document.querySelectorAll('button, a, input, select, textarea');
        touchTargets.forEach(target => {
          if (target instanceof HTMLElement) {
            const rect = target.getBoundingClientRect();
            if (rect.width < 44 || rect.height < 44) {
              target.style.minHeight = '44px';
              target.style.minWidth = '44px';
            }
          }
        });

        // Add touch feedback
        const addTouchFeedback = () => {
          const elements = document.querySelectorAll('button, a, .touch-target');
          elements.forEach(element => {
            element.addEventListener('touchstart', () => {
              element.classList.add('touch-active');
            });
            element.addEventListener('touchend', () => {
              setTimeout(() => {
                element.classList.remove('touch-active');
              }, 150);
            });
          });
        };

        addTouchFeedback();
      };

      // Optimize images for mobile
      const optimizeImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          if (img instanceof HTMLImageElement) {
            // Add lazy loading
            img.loading = 'lazy';
            
            // Optimize for mobile screens
            if (isMobile && img.src.includes('hero')) {
              img.style.maxWidth = '100%';
              img.style.height = 'auto';
            }
          }
        });
      };

      // Add mobile-specific styles
      const addMobileStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
          .mobile-device {
            --touch-target-size: 44px;
            --mobile-spacing: 1rem;
            --mobile-font-size: 16px;
          }
          
          .mobile-device button,
          .mobile-device a,
          .mobile-device .touch-target {
            min-height: var(--touch-target-size);
            min-width: var(--touch-target-size);
            font-size: var(--mobile-font-size);
          }
          
          .mobile-device .touch-active {
            transform: scale(0.95);
            opacity: 0.8;
            transition: all 0.15s ease;
          }
          
          .mobile-device .mobile-optimized {
            padding: var(--mobile-spacing);
            margin: var(--mobile-spacing) 0;
          }
          
          .mobile-device .mobile-hidden {
            display: none !important;
          }
          
          .mobile-device .mobile-visible {
            display: block !important;
          }
          
          @media (max-width: 768px) {
            .mobile-device .mobile-responsive {
              flex-direction: column;
              gap: 1rem;
            }
            
            .mobile-device .mobile-text {
              font-size: 1rem;
              line-height: 1.5;
            }
          }
        `;
        document.head.appendChild(style);
      };

      // Apply optimizations
      optimizeTouchInteractions();
      optimizeImages();
      addMobileStyles();

      // Add swipe gestures for mobile
      const addSwipeGestures = () => {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;

        const handleTouchStart = (e: TouchEvent) => {
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
          endX = e.changedTouches[0].clientX;
          endY = e.changedTouches[0].clientY;
          handleSwipe();
        };

        const handleSwipe = () => {
          const diffX = startX - endX;
          const diffY = startY - endY;
          const minSwipeDistance = 50;

          if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
            // Horizontal swipe
            if (diffX > 0) {
              // Swipe left
              console.log('Swipe left detected');
            } else {
              // Swipe right
              console.log('Swipe right detected');
            }
          } else if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > minSwipeDistance) {
            // Vertical swipe
            if (diffY > 0) {
              // Swipe up
              console.log('Swipe up detected');
            } else {
              // Swipe down
              console.log('Swipe down detected');
            }
          }
        };

        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchend', handleTouchEnd);

        return () => {
          document.removeEventListener('touchstart', handleTouchStart);
          document.removeEventListener('touchend', handleTouchEnd);
        };
      };

      addSwipeGestures();
    }

    // Desktop-specific optimizations
    if (isDesktop) {
      document.documentElement.classList.add('desktop-device');
      
      // Add hover effects
      const addHoverEffects = () => {
        const hoverElements = document.querySelectorAll('.hover-effect');
        hoverElements.forEach(element => {
          element.addEventListener('mouseenter', () => {
            element.classList.add('hover-active');
          });
          element.addEventListener('mouseleave', () => {
            element.classList.remove('hover-active');
          });
        });
      };

      addHoverEffects();
    }

    // Cleanup function
    return () => {
      document.documentElement.classList.remove('mobile-device', 'desktop-device');
    };
  }, [enabled, isMobile, isTablet, isDesktop]);

  // Performance monitoring for mobile
  useEffect(() => {
    if (!enabled || !isMobile) return;

    // Monitor mobile performance
    const monitorPerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.navigationStart;
          const domLoadTime = navigation.domContentLoadedEventEnd - navigation.navigationStart;
          
          // Log performance metrics for mobile
          console.log('Mobile Performance Metrics:', {
            totalLoadTime: `${loadTime}ms`,
            domLoadTime: `${domLoadTime}ms`,
            deviceInfo
          });
        }
      }
    };

    // Monitor after page load
    const timer = setTimeout(monitorPerformance, 2000);
    return () => clearTimeout(timer);
  }, [enabled, isMobile, deviceInfo]);

  if (!enabled) return null;

  return (
    <div className="mobile-experience-enhancer">
      {/* Device detection indicator (hidden in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 left-4 z-50 bg-black/80 text-white p-2 rounded text-xs">
          <div className="flex items-center gap-2">
            {isMobile && <Smartphone className="w-4 h-4" />}
            {isTablet && <Tablet className="w-4 h-4" />}
            {isDesktop && <Monitor className="w-4 h-4" />}
            <span>
              {isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'}
            </span>
          </div>
          <div className="text-gray-300">
            {deviceInfo.screenSize} • {deviceInfo.orientation}
          </div>
          <div className="text-gray-300">
            Touch: {deviceInfo.touchSupport ? 'Yes' : 'No'}
          </div>
        </div>
      )}

      {/* Mobile-specific UI enhancements */}
      {isMobile && (
        <div className="mobile-ui-enhancements">
          {/* Floating action button for mobile */}
          <motion.button
            className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg z-40 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Hand className="w-6 h-6 text-white" />
          </motion.button>

          {/* Mobile navigation hints */}
          <div className="mobile-navigation-hints">
            <div className="swipe-hint">
              <ArrowLeftRight className="w-5 h-5" />
              <span>Swipe to navigate</span>
            </div>
            <div className="gesture-hint">
              <MousePointer className="w-5 h-5" />
              <span>Use gestures</span>
            </div>
          </div>
        </div>
      )}

      {/* Global mobile styles */}
      <style jsx global>{`
        .mobile-device {
          --safe-area-inset-top: env(safe-area-inset-top);
          --safe-area-inset-bottom: env(safe-area-inset-bottom);
          --safe-area-inset-left: env(safe-area-inset-left);
          --safe-area-inset-right: env(safe-area-inset-right);
        }
        
        .mobile-device body {
          padding-top: var(--safe-area-inset-top);
          padding-bottom: var(--safe-area-inset-bottom);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
        }
        
        .mobile-device .mobile-optimized {
          padding: 1rem;
          margin: 1rem 0;
        }
        
        .mobile-device .mobile-responsive {
          flex-direction: column;
          gap: 1rem;
        }
        
        .mobile-device .mobile-text {
          font-size: 1rem;
          line-height: 1.5;
        }
        
        .mobile-device .mobile-hidden {
          display: none !important;
        }
        
        .mobile-device .mobile-visible {
          display: block !important;
        }
        
        .desktop-device .hover-effect:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .mobile-navigation-hints {
          position: fixed;
          bottom: 100px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          z-index: 30;
        }
        
        .swipe-hint,
        .gesture-hint {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
        }
        
        @media (max-width: 768px) {
          .mobile-device .mobile-responsive {
            flex-direction: column;
            gap: 1rem;
          }
          
          .mobile-device .mobile-text {
            font-size: 1rem;
            line-height: 1.5;
          }
        }
      `}</style>
    </div>
  );
};
