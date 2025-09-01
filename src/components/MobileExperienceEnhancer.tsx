
import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Hand, 
  Gesture, 
  Swipe, 
  Pinch, 
  Rotate, 
  X, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Settings, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  ArrowRight 
} from 'lucide-react';

interface TouchGesture {
  type: 'swipe' | 'pinch' | 'rotate' | 'tap' | 'longpress';
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
}

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  showGestures?: boolean;
  enableSwipeNavigation?: boolean;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  showGestures = false,
  enableSwipeNavigation = true
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [deviceOrientation, setDeviceOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [touchStart, setTouchStart] = useState<{ x: number; y: number; time: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number; time: number } | null>(null);
  const [gestureHistory, setGestureHistory] = useState<TouchGesture[]>([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showGestureGuide, setShowGestureGuide] = useState(false);

  // Device detection utilities
  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const isTabletDevice = () => {
    return /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent) || 
           (window.innerWidth >= 768 && window.innerWidth <= 1024);
  };

  // Detect device type and orientation
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(isMobileDevice());
      setIsTablet(isTabletDevice());

      // Set orientation
      if (window.innerHeight > window.innerWidth) {
        setDeviceOrientation('portrait');
      } else {
        setDeviceOrientation('landscape');
      }
    };

    const handleResize = () => {
      setTimeout(checkDevice, 100);
    };

    const handleOrientationChange = () => {
      setTimeout(checkDevice, 100);
    };

    checkDevice();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  // Touch gesture handling
  useEffect(() => {
    if (!enabled || !enableSwipeNavigation) return;

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      setTouchStart({
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStart) return;

      const touch = e.changedTouches[0];
      const touchEndData = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
      };

      setTouchEnd(touchEndData);

      // Calculate gesture
      const deltaX = touchEndData.x - touchStart.x;
      const deltaY = touchEndData.y - touchStart.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const deltaTime = touchEndData.time - touchStart.time;

      // Minimum distance and time for gesture recognition
      if (distance > 50 && deltaTime < 500) {
        let gesture: TouchGesture = {
          type: 'swipe',
          distance,
          duration: deltaTime,
        };

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          // Horizontal swipe
          gesture.direction = deltaX > 0 ? 'right' : 'left';

          // Handle horizontal navigation
          if (gesture.direction === 'left') {
            // Swipe left - go forward
            if (window.history.length > 1) {
              window.history.forward();
            }
          } else if (gesture.direction === 'right') {
            // Swipe right - go back
            if (window.history.length > 1) {
              window.history.back();
            }
          }
        } else {
          // Vertical swipe
          gesture.direction = deltaY > 0 ? 'down' : 'up';

          // Handle vertical gestures
          if (gesture.direction === 'up' && distance > 100) {
            // Swipe up - scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (gesture.direction === 'down' && distance > 100) {
            // Swipe down - scroll to bottom
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          }
        }

        // Add to gesture history
        setGestureHistory(prev => [gesture, ...prev.slice(0, 9)]);
      }

      setTouchStart(null);
      setTouchEnd(null);
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enabled, enableSwipeNavigation, touchStart]);

  // Mobile-specific optimizations
  useEffect(() => {
    if (!enabled || !isMobile) return;

    // Optimize viewport for mobile
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }

    // Add mobile-specific CSS classes
    document.body.classList.add('mobile-device');
    if (isTablet) {
      document.body.classList.add('tablet-device');
    }

    return () => {
      document.body.classList.remove('mobile-device', 'tablet-device');
    };
  }, [enabled, isMobile, isTablet]);

  if (!enabled) return null;

  return (
    <>
      {/* Mobile Menu Toggle */}
      {isMobile && (
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="fixed top-4 right-4 z-50 md:hidden bg-blue-600 text-white p-2 rounded-lg shadow-lg"
          aria-label="Toggle mobile menu"
        >
          {showMobileMenu ? <X className="w-6 h-6" /> : <Smartphone className="w-6 h-6" />}
        </button>
      )}

      {/* Mobile Menu */}
      {showMobileMenu && isMobile && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden">
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">Mobile Menu</h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                  <span>Mobile Optimized</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Touch className="w-5 h-5 text-green-600" />
                  <span>Touch Gestures Enabled</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-gray-600" />
                  <span>Settings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gesture Guide */}
      {showGestures && isMobile && (
        <div className="fixed bottom-4 left-4 z-30 bg-white rounded-lg shadow-lg p-4 max-w-xs">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-sm">Touch Gestures</h4>
            <button
              onClick={() => setShowGestureGuide(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2 text-xs text-gray-600">
            <div className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Swipe right: Go back</span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowRight className="w-4 h-4" />
              <span>Swipe left: Go forward</span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowUp className="w-4 h-4" />
              <span>Swipe up: Scroll to top</span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowDown className="w-4 h-4" />
              <span>Swipe down: Scroll to bottom</span>
            </div>
          </div>
        </div>
      )}

      {/* Device Info Display (Development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 z-20 bg-black bg-opacity-75 text-white text-xs p-2 rounded">
          <div>Device: {isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'}</div>
          <div>Orientation: {deviceOrientation}</div>
          <div>Gestures: {gestureHistory.length}</div>
        </div>
      )}
    </>
  );
};

export default MobileExperienceEnhancer;