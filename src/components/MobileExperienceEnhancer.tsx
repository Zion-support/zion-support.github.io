import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Hand, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff
} from 'lucide-react';

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [touchSupported, setTouchSupported] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [gestureHistory, setGestureHistory] = useState<string[]>([]);

  // Detect mobile device and capabilities
  useEffect(() => {
    if (!enabled) return;

    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /mobile|android|iphone|ipad|phone/i.test(userAgent);
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      setIsMobile(isMobileDevice);
      setTouchSupported(isTouchDevice);
    };

    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    checkMobile();
    checkOrientation();

    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, [enabled]);

  // Touch gesture handling
  useEffect(() => {
    if (!enabled || !isMobile || !touchSupported) return;

    let startX = 0;
    let startY = 0;
    let startTime = 0;
    let isScrolling = false;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startTime = Date.now();
      isScrolling = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!startX || !startY) return;

      const deltaX = e.touches[0].clientX - startX;
      const deltaY = e.touches[0].clientY - startY;
      const deltaTime = Date.now() - startTime;

      // Detect scroll vs swipe
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 10) {
        isScrolling = true;
      }

      // Prevent default only for horizontal swipes when not scrolling
      if (Math.abs(deltaX) > Math.abs(deltaY) && !isScrolling && Math.abs(deltaX) > 50) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!startX || !startY || isScrolling) return;

      const deltaX = e.changedTouches[0].clientX - startX;
      const deltaY = e.changedTouches[0].clientY - startY;
      const deltaTime = Date.now() - startTime;

      // Detect swipe gestures
      if (deltaTime < 300 && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          handleSwipeRight();
        } else {
          handleSwipeLeft();
        }
      }

      if (deltaTime < 300 && Math.abs(deltaY) > 50) {
        if (deltaY > 0) {
          handleSwipeDown();
        } else {
          handleSwipeUp();
        }
      }

      // Reset
      startX = 0;
      startY = 0;
      startTime = 0;
    };

    const handleSwipeRight = () => {
      setGestureHistory(prev => [...prev.slice(-4), 'Swipe Right']);
      // Navigate back or show previous content
      if (window.history.length > 1) {
        window.history.back();
      }
    };

    const handleSwipeLeft = () => {
      setGestureHistory(prev => [...prev.slice(-4), 'Swipe Left']);
      // Navigate forward or show next content
      const nextButton = document.querySelector('[data-next]') as HTMLElement;
      if (nextButton) {
        nextButton.click();
      }
    };

    const handleSwipeUp = () => {
      setGestureHistory(prev => [...prev.slice(-4), 'Swipe Up']);
      // Scroll to top or show navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSwipeDown = () => {
      setGestureHistory(prev => [...prev.slice(-4), 'Swipe Down']);
      // Refresh or show more content
      const refreshButton = document.querySelector('[data-refresh]') as HTMLElement;
      if (refreshButton) {
        refreshButton.click();
      }
    };

    // Add touch event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enabled, isMobile, touchSupported]);

  // Mobile-specific optimizations
  useEffect(() => {
    if (!enabled || !isMobile) return;

    // Optimize viewport for mobile
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
    }

    // Add mobile-specific CSS classes
    document.body.classList.add('mobile-device');
    if (isLandscape) {
      document.body.classList.add('landscape');
    } else {
      document.body.classList.add('portrait');
    }

    // Optimize images for mobile
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });

    // Add mobile-specific event listeners
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden, pause animations/videos
        document.body.classList.add('page-hidden');
      } else {
        // Page is visible, resume animations/videos
        document.body.classList.remove('page-hidden');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.body.classList.remove('mobile-device', 'landscape', 'portrait');
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [enabled, isMobile, isLandscape]);

  // Mobile controls overlay
  if (!enabled || !isMobile) return null;

  return (
    <>
      {/* Mobile Controls Button */}
      <motion.button
        onClick={() => setShowControls(!showControls)}
        className="fixed bottom-4 left-4 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Mobile Controls"
      >
        <Smartphone size={20} />
      </motion.button>

      {/* Mobile Controls Panel */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            className="fixed bottom-20 left-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl p-4 w-72 z-50"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
              Mobile Controls
            </h3>

            {/* Gesture History */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Recent Gestures
              </h4>
              <div className="space-y-1">
                {gestureHistory.map((gesture, index) => (
                  <div key={index} className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded">
                    {gesture}
                  </div>
                ))}
                {gestureHistory.length === 0 && (
                  <div className="text-xs text-gray-500 dark:text-gray-500 italic">
                    No gestures yet
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-3 rounded-lg transition-colors duration-200"
              >
                <RotateCcw size={16} />
                <span className="text-sm">Scroll to Top</span>
              </button>

              <button
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="w-full flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-3 rounded-lg transition-colors duration-200"
              >
                <Hand size={16} />
                <span className="text-sm">Scroll to Bottom</span>
              </button>

              <button
                onClick={() => window.location.reload()}
                className="w-full flex items-center justify-center space-x-2 bg-cyan-100 hover:bg-cyan-200 dark:bg-cyan-800 dark:hover:bg-cyan-700 text-cyan-700 dark:text-cyan-300 py-2 px-3 rounded-lg transition-colors duration-200"
              >
                <RotateCcw size={16} />
                <span className="text-sm">Refresh Page</span>
              </button>
            </div>

            {/* Device Info */}
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
              <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <div>Device: {isMobile ? 'Mobile' : 'Desktop'}</div>
                <div>Orientation: {isLandscape ? 'Landscape' : 'Portrait'}</div>
                <div>Touch: {touchSupported ? 'Supported' : 'Not Supported'}</div>
                <div>Screen: {window.innerWidth} × {window.innerHeight}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile-specific CSS */}
      <style jsx>{`
        .mobile-device {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }
        
        .mobile-device * {
          -webkit-tap-highlight-color: transparent;
        }
        
        .landscape .hero-section {
          min-height: 60vh;
        }
        
        .portrait .hero-section {
          min-height: 100vh;
        }
        
        .page-hidden * {
          animation-play-state: paused !important;
        }
        
        .page-hidden video {
          pause();
        }
        
        /* Mobile-specific touch targets */
        .mobile-device button,
        .mobile-device a,
        .mobile-device [role="button"] {
          min-height: 44px;
          min-width: 44px;
        }
        
        /* Mobile scrollbar */
        .mobile-device ::-webkit-scrollbar {
          width: 6px;
        }
        
        .mobile-device ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .mobile-device ::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.3);
          border-radius: 3px;
        }
        
        /* Mobile focus styles */
        .mobile-device *:focus {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
};