import React, { useEffect, useState, useCallback, useRef } from 'react';
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
  WifiOff,
  MousePointer,
  Touch,
  Move,
  X,
  Settings,
  Smartphone as PhoneIcon
} from 'lucide-react';

interface MobileSettings {
  enableTouchGestures: boolean;
  enableSwipeNavigation: boolean;
  enablePinchZoom: boolean;
  enableHapticFeedback: boolean;
  enableMobileOptimizations: boolean;
  enableProgressiveWebApp: boolean;
  enableOfflineMode: boolean;
  enableMobileAnalytics: boolean;
}

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  onSettingsChange?: (settings: MobileSettings) => void;
}

interface TouchGesture {
  type: 'swipe' | 'pinch' | 'rotate' | 'longpress' | 'doubletap';
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number;
  timestamp: number;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  showControls = true,
  onSettingsChange
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [touchSupported, setTouchSupported] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [gestureHistory, setGestureHistory] = useState<TouchGesture[]>([]);
  const [mobileSettings, setMobileSettings] = useState({
    enableGestures: true,
    enableHapticFeedback: true,
    enableOrientationLock: false,
    enableTouchOptimization: true
  });

  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const gestureTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const longPressTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Enhanced mobile detection
  const checkMobile = useCallback(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice = /mobile|android|iphone|ipad|phone/i.test(userAgent);
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    
    setIsMobile(isMobileDevice || isTouchDevice || isSmallScreen);
    setTouchSupported(isTouchDevice);
  }, []);

  // Orientation handling with lock capability
  const checkOrientation = useCallback(() => {
    const isLandscapeMode = window.innerWidth > window.innerHeight;
    setIsLandscape(isLandscapeMode);
    
    // Apply orientation-specific optimizations
    if (mobileSettings.enableOrientationLock && isLandscapeMode) {
      document.body.classList.add('landscape-optimized');
    } else {
      document.body.classList.remove('landscape-optimized');
    }
  }, [mobileSettings.enableOrientationLock]);

  // Enhanced touch gesture handling
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!mobileSettings.enableGestures) return;
    
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };

    // Long press detection
    longPressTimeoutRef.current = setTimeout(() => {
      if (touchStartRef.current) {
        const gesture: TouchGesture = {
          type: 'longpress',
          timestamp: Date.now()
        };
        setGestureHistory(prev => [...prev.slice(-9), gesture]);
        
        // Haptic feedback
        if (mobileSettings.enableHapticFeedback && 'vibrate' in navigator) {
          navigator.vibrate(50);
        }
      }
    }, 500);
  }, [mobileSettings.enableGestures, mobileSettings.enableHapticFeedback]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!touchStartRef.current || !mobileSettings.enableGestures) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const deltaTime = Date.now() - touchStartRef.current.time;

    // Clear long press timeout if moving
    if (longPressTimeoutRef.current) {
      clearTimeout(longPressTimeoutRef.current);
      longPressTimeoutRef.current = null;
    }

    // Detect scroll vs gesture
    if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 10) {
      return; // This is scrolling, not a gesture
    }

    // Prevent default for horizontal gestures
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      e.preventDefault();
    }
  }, [mobileSettings.enableGestures]);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!touchStartRef.current || !mobileSettings.enableGestures) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const deltaTime = Date.now() - touchStartRef.current.time;

    // Clear timeouts
    if (longPressTimeoutRef.current) {
      clearTimeout(longPressTimeoutRef.current);
      longPressTimeoutRef.current = null;
    }

    // Detect swipe gestures
    if (deltaTime < 300 && Math.abs(deltaX) > 50) {
      const direction = deltaX > 0 ? 'right' : 'left';
      const gesture: TouchGesture = {
        type: 'swipe',
        direction,
        distance: Math.abs(deltaX),
        timestamp: Date.now()
      };
      
      setGestureHistory(prev => [...prev.slice(-9), gesture]);
      
      // Handle swipe actions
      if (direction === 'right') {
        // Navigate back or show sidebar
        window.history.back();
      } else if (direction === 'left') {
        // Navigate forward or hide sidebar
        // Could be used for navigation
      }

      // Haptic feedback
      if (mobileSettings.enableHapticFeedback && 'vibrate' in navigator) {
        navigator.vibrate(25);
      }
    }

    // Detect vertical swipes
    if (deltaTime < 300 && Math.abs(deltaY) > 50) {
      const direction = deltaY > 0 ? 'down' : 'up';
      const gesture: TouchGesture = {
        type: 'swipe',
        direction,
        distance: Math.abs(deltaY),
        timestamp: Date.now()
      };
      
      setGestureHistory(prev => [...prev.slice(-9), gesture]);
      
      // Handle vertical swipes
      if (direction === 'down') {
        // Could trigger pull-to-refresh or show top navigation
      } else if (direction === 'up') {
        // Could hide bottom navigation or trigger actions
      }
    }

    touchStartRef.current = null;
  }, [mobileSettings.enableGestures, mobileSettings.enableHapticFeedback]);

  // Pinch and rotate gesture handling
  const handleMultiTouch = useCallback((e: TouchEvent) => {
    if (!mobileSettings.enableGestures || e.touches.length !== 2) return;

    const touch1 = e.touches[0];
    const touch2 = e.touches[1];
    
    const distance = Math.sqrt(
      Math.pow(touch2.clientX - touch1.clientX, 2) +
      Math.pow(touch2.clientY - touch1.clientY, 2)
    );

    // Store initial distance for pinch detection
    if (!gestureTimeoutRef.current) {
      gestureTimeoutRef.current = setTimeout(() => {
        // Pinch gesture detected
        const gesture: TouchGesture = {
          type: 'pinch',
          distance: Math.round(distance),
          timestamp: Date.now()
        };
        setGestureHistory(prev => [...prev.slice(-9), gesture]);
      }, 100);
    }
  }, [mobileSettings.enableGestures]);

  // Touch optimization for mobile
  const applyTouchOptimizations = useCallback(() => {
    if (!mobileSettings.enableTouchOptimization) return;

    // Add touch-specific CSS classes
    document.body.classList.add('touch-optimized');
    
    // Optimize touch targets
    const touchTargets = document.querySelectorAll('button, a, input, select, textarea');
    touchTargets.forEach(target => {
      const element = target as HTMLElement;
      const rect = element.getBoundingClientRect();
      
      // Ensure minimum touch target size (44px)
      if (rect.width < 44 || rect.height < 44) {
        element.classList.add('touch-target-optimized');
      }
    });

    // Add touch feedback classes
    document.addEventListener('touchstart', () => {
      document.body.classList.add('touch-active');
    }, { passive: true });

    document.addEventListener('touchend', () => {
      setTimeout(() => {
        document.body.classList.remove('touch-active');
      }, 150);
    }, { passive: true });
  }, [mobileSettings.enableTouchOptimization]);

  // Initialize mobile experience
  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

    checkMobile();
    checkOrientation();
    applyTouchOptimizations();

    // Event listeners
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    
    if (touchSupported) {
      document.addEventListener('touchstart', handleTouchStart, { passive: false });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });
      document.addEventListener('touchstart', handleMultiTouch, { passive: true });
    }

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
      
      if (touchSupported) {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
        document.removeEventListener('touchstart', handleMultiTouch);
      }
    };
  }, [
    enabled, 
    touchSupported, 
    checkMobile, 
    checkOrientation, 
    applyTouchOptimizations,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMultiTouch
  ]);

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (gestureTimeoutRef.current) {
        clearTimeout(gestureTimeoutRef.current);
      }
      if (longPressTimeoutRef.current) {
        clearTimeout(longPressTimeoutRef.current);
      }
    };
  }, []);

  if (!enabled || !isMobile) return null;

  return (
    <>
      {/* Mobile Control Panel */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-2xl z-50 p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mobile Controls</h3>
              <button
                onClick={() => setShowControls(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Settings */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Enable Gestures</span>
                <input
                  type="checkbox"
                  checked={mobileSettings.enableGestures}
                  onChange={(e) => setMobileSettings(prev => ({ ...prev, enableGestures: e.target.checked }))}
                  className="toggle toggle-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Haptic Feedback</span>
                <input
                  type="checkbox"
                  checked={mobileSettings.enableHapticFeedback}
                  onChange={(e) => setMobileSettings(prev => ({ ...prev, enableHapticFeedback: e.target.checked }))}
                  className="toggle toggle-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Orientation Lock</span>
                <input
                  type="checkbox"
                  checked={mobileSettings.enableOrientationLock}
                  onChange={(e) => setMobileSettings(prev => ({ ...prev, enableOrientationLock: e.target.checked }))}
                  className="toggle toggle-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">Touch Optimization</span>
                <input
                  type="checkbox"
                  checked={mobileSettings.enableTouchOptimization}
                  onChange={(e) => setMobileSettings(prev => ({ ...prev, enableTouchOptimization: e.target.checked }))}
                  className="toggle toggle-primary"
                />
              </div>
            </div>

            {/* Gesture History */}
            {gestureHistory.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Recent Gestures</h4>
                <div className="space-y-2">
                  {gestureHistory.slice(-5).reverse().map((gesture, index) => (
                    <div key={index} className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-2">
                        <MousePointer size={14} />
                        {gesture.type}
                        {gesture.direction && ` (${gesture.direction})`}
                      </span>
                      <span>{new Date(gesture.timestamp).toLocaleTimeString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-blue-700 dark:text-blue-300 text-sm">
                  <RotateCcw size={16} className="mx-auto mb-1" />
                  Reset
                </button>
                <button className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg text-green-700 dark:text-green-300 text-sm">
                  <Settings size={16} className="mx-auto mb-1" />
                  Settings
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Control Button */}
      <motion.button
        onClick={() => setShowControls(!showControls)}
        className="fixed bottom-4 left-4 z-40 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Mobile Controls"
      >
        <PhoneIcon size={20} />
      </motion.button>

      {/* Mobile Status Indicator */}
      <div className="fixed top-4 left-4 z-40 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
        <div className="flex items-center gap-2">
          <Smartphone size={14} />
          {isLandscape ? 'Landscape' : 'Portrait'}
        </div>
      </div>
    </>
  );
};

export default MobileExperienceEnhancer;
