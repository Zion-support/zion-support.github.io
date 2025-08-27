import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Wifi, 
  Battery, 
  Volume2, 
  VolumeX,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Hand,
  MoveHorizontal,
  SmartphoneIcon,
  TabletIcon,
  MonitorIcon
} from 'lucide-react';

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  enableTouchGestures?: boolean;
  enableMobileOptimizations?: boolean;
  enableResponsiveDesign?: boolean;
}

interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  orientation: 'portrait' | 'landscape';
  screenSize: { width: number; height: number };
  pixelRatio: number;
  touchSupport: boolean;
  connection?: string;
  batteryLevel?: number;
}

interface TouchGesture {
  type: 'swipe' | 'pinch' | 'rotate' | 'longPress';
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  showControls = true,
  enableTouchGestures = true,
  enableMobileOptimizations = true,
  enableResponsiveDesign = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    type: 'desktop',
    orientation: 'portrait',
    screenSize: { width: 0, height: 0 },
    pixelRatio: 1,
    touchSupport: false
  });

  const [touchGestures, setTouchGestures] = useState<TouchGesture[]>([]);
  const [mobileOptimizations, setMobileOptimizations] = useState({
    reducedAnimations: false,
    simplifiedLayout: false,
    touchFriendly: true,
    highContrast: false,
    largeTouchTargets: true
  });

  const [gestureHistory, setGestureHistory] = useState<TouchGesture[]>([]);
  const [isGestureMode, setIsGestureMode] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const gestureTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect device type and capabilities
  const detectDevice = useCallback(() => {
    const userAgent = navigator.userAgent;
    const screen = window.screen;
    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    
    if (touchSupport) {
      if (screen.width <= 768) {
        deviceType = 'mobile';
      } else if (screen.width <= 1024) {
        deviceType = 'tablet';
      }
    }

    const orientation = screen.width > screen.height ? 'landscape' : 'portrait';
    
    setDeviceInfo({
      type: deviceType,
      orientation,
      screenSize: { width: screen.width, height: screen.height },
      pixelRatio: window.devicePixelRatio || 1,
      touchSupport,
      connection: (navigator as any).connection?.effectiveType,
      batteryLevel: (navigator as any).getBattery?.()?.then((battery: any) => battery.level)
    });
  }, []);

  // Apply mobile optimizations
  const applyMobileOptimizations = useCallback(() => {
    if (!enabled || !enableMobileOptimizations) return;

    const root = document.documentElement;
    const body = document.body;

    // Add mobile-specific classes
    if (deviceInfo.type === 'mobile') {
      root.classList.add('mobile-device');
      body.classList.add('mobile-optimized');
    } else if (deviceInfo.type === 'tablet') {
      root.classList.add('tablet-device');
      body.classList.add('tablet-optimized');
    }

    // Apply orientation-specific optimizations
    if (deviceInfo.orientation === 'landscape') {
      root.classList.add('landscape-mode');
    } else {
      root.classList.add('portrait-mode');
    }

    // Apply touch-friendly optimizations
    if (mobileOptimizations.touchFriendly) {
      root.classList.add('touch-friendly');
      root.style.setProperty('--touch-target-size', '44px');
      root.style.setProperty('--touch-spacing', '8px');
    }

    // Apply large touch targets
    if (mobileOptimizations.largeTouchTargets) {
      root.style.setProperty('--button-min-height', '48px');
      root.style.setProperty('--input-min-height', '48px');
    }

    // Apply reduced animations for performance
    if (mobileOptimizations.reducedAnimations) {
      root.classList.add('reduced-animations');
      root.style.setProperty('--animation-duration', '0.2s');
    }

    // Apply simplified layout
    if (mobileOptimizations.simplifiedLayout) {
      root.classList.add('simplified-layout');
    }

    // Apply high contrast for mobile
    if (mobileOptimizations.highContrast) {
      root.classList.add('mobile-high-contrast');
    }

    // Save mobile preferences
    localStorage.setItem('zion-mobile-preferences', JSON.stringify(mobileOptimizations));
  }, [
    enabled,
    enableMobileOptimizations,
    deviceInfo,
    mobileOptimizations
  ]);

  // Touch gesture handling
  const handleTouchStart = useCallback((event: TouchEvent) => {
    if (!enabled || !enableTouchGestures) return;

    const touch = event.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };

    // Long press detection
    gestureTimeoutRef.current = setTimeout(() => {
      if (touchStartRef.current) {
        const gesture: TouchGesture = {
          type: 'longPress',
          duration: Date.now() - touchStartRef.current.time
        };
        
        setGestureHistory(prev => [...prev, gesture]);
        handleGesture(gesture);
      }
    }, 500);
  }, [enabled, enableTouchGestures]);

  const handleTouchMove = useCallback((event: TouchEvent) => {
    if (!enabled || !enableTouchGestures || !touchStartRef.current) return;

    const touch = event.touches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Cancel long press if movement detected
    if (gestureTimeoutRef.current && distance > 10) {
      clearTimeout(gestureTimeoutRef.current);
      gestureTimeoutRef.current = null;
    }
  }, [enabled, enableTouchGestures]);

  const handleTouchEnd = useCallback((event: TouchEvent) => {
    if (!enabled || !enableTouchGestures || !touchStartRef.current) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const duration = Date.now() - touchStartRef.current.time;

    // Clear long press timeout
    if (gestureTimeoutRef.current) {
      clearTimeout(gestureTimeoutRef.current);
      gestureTimeoutRef.current = null;
    }

    // Detect swipe gestures
    if (distance > 50 && duration < 300) {
      let direction: 'up' | 'down' | 'left' | 'right';
      
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        direction = deltaX > 0 ? 'right' : 'left';
      } else {
        direction = deltaY > 0 ? 'down' : 'up';
      }

      const gesture: TouchGesture = {
        type: 'swipe',
        direction,
        distance: Math.round(distance),
        duration
      };

      setGestureHistory(prev => [...prev, gesture]);
      handleGesture(gesture);
    }

    touchStartRef.current = null;
  }, [enabled, enableTouchGestures]);

  // Handle detected gestures
  const handleGesture = useCallback((gesture: TouchGesture) => {
    if (!enabled) return;

    // Add to recent gestures
    setTouchGestures(prev => [...prev.slice(-4), gesture]);

    // Execute gesture actions
    switch (gesture.type) {
      case 'swipe':
        if (gesture.direction === 'left') {
          // Navigate forward
          if (window.history && window.history.forward) {
            window.history.forward();
          }
        } else if (gesture.direction === 'right') {
          // Navigate back
          if (window.history && window.history.back) {
            window.history.back();
          }
        } else if (gesture.direction === 'up') {
          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (gesture.direction === 'down') {
          // Scroll to bottom
          window.scrollTo({ 
            top: document.body.scrollHeight, 
            behavior: 'smooth' 
          });
        }
        break;

      case 'longPress':
        // Toggle gesture mode
        setIsGestureMode(prev => !prev);
        break;
    }

    // Announce gesture to screen readers
    if (deviceInfo.touchSupport) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.className = 'sr-only';
      announcement.textContent = `Gesture detected: ${gesture.type} ${gesture.direction || ''}`;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        if (document.body.contains(announcement)) {
          document.body.removeChild(announcement);
        }
      }, 1000);
    }
  }, [enabled, deviceInfo.touchSupport]);

  // Responsive design enhancements
  const enhanceResponsiveDesign = useCallback(() => {
    if (!enabled || !enableResponsiveDesign) return;

    const root = document.documentElement;
    
    // Add responsive breakpoint classes
    const addBreakpointClasses = () => {
      const width = window.innerWidth;
      
      root.classList.remove('breakpoint-xs', 'breakpoint-sm', 'breakpoint-md', 'breakpoint-lg', 'breakpoint-xl');
      
      if (width < 640) {
        root.classList.add('breakpoint-xs');
      } else if (width < 768) {
        root.classList.add('breakpoint-sm');
      } else if (width < 1024) {
        root.classList.add('breakpoint-md');
      } else if (width < 1280) {
        root.classList.add('breakpoint-lg');
      } else {
        root.classList.add('breakpoint-xl');
      }
    };

    // Add viewport size classes
    const addViewportClasses = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      root.style.setProperty('--viewport-width', `${width}px`);
      root.style.setProperty('--viewport-height', `${height}px`);
      root.style.setProperty('--safe-area-inset-top', 'env(safe-area-inset-top)');
      root.style.setProperty('--safe-area-inset-bottom', 'env(safe-area-inset-bottom)');
      root.style.setProperty('--safe-area-inset-left', 'env(safe-area-inset-left)');
      root.style.setProperty('--safe-area-inset-right', 'env(safe-area-inset-right)');
    };

    addBreakpointClasses();
    addViewportClasses();

    // Update on resize
    const handleResize = () => {
      addBreakpointClasses();
      addViewportClasses();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [enabled, enableResponsiveDesign]);

  // Load saved mobile preferences
  useEffect(() => {
    if (!enabled) return;

    try {
      const savedPreferences = localStorage.getItem('zion-mobile-preferences');
      if (savedPreferences) {
        const parsed = JSON.parse(savedPreferences);
        setMobileOptimizations(parsed);
      }
    } catch (error) {
      console.warn('Failed to load mobile preferences:', error);
    }
  }, [enabled]);

  // Initialize device detection and optimizations
  useEffect(() => {
    if (!enabled) return;

    detectDevice();
    applyMobileOptimizations();
    enhanceResponsiveDesign();

    // Add touch event listeners
    if (enableTouchGestures && deviceInfo.touchSupport) {
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchmove', handleTouchMove, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [
    enabled,
    detectDevice,
    applyMobileOptimizations,
    enhanceResponsiveDesign,
    enableTouchGestures,
    deviceInfo.touchSupport,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  ]);

  // Update optimizations when settings change
  useEffect(() => {
    if (enabled) {
      applyMobileOptimizations();
    }
  }, [enabled, applyMobileOptimizations]);

  // Handle mobile preference changes
  const handleMobilePreferenceChange = useCallback((key: keyof typeof mobileOptimizations, value: boolean) => {
    setMobileOptimizations(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  // Reset mobile preferences
  const resetMobilePreferences = useCallback(() => {
    const defaultPreferences = {
      reducedAnimations: false,
      simplifiedLayout: false,
      touchFriendly: true,
      highContrast: false,
      largeTouchTargets: true
    };

    setMobileOptimizations(defaultPreferences);
    localStorage.setItem('zion-mobile-preferences', JSON.stringify(defaultPreferences));
  }, []);

  if (!enabled || !showControls) {
    return null;
  }

  return (
    <>
      {/* Floating Mobile Controls Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-zion-purple to-zion-cyan text-white p-4 rounded-full shadow-2xl hover:shadow-zion-purple/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-purple/50"
        aria-label="Open mobile experience settings"
        aria-expanded={isOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Smartphone className="w-6 h-6" />
      </motion.button>

      {/* Mobile Experience Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={containerRef}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsOpen(false);
              }
            }}
          >
            <motion.div
              className="bg-zion-slate-900 border border-zion-purple/30 rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Smartphone className="w-6 h-6 mr-3 text-zion-purple" />
                  Mobile Experience
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zion-slate-light hover:text-white transition-colors"
                  aria-label="Close mobile experience settings"
                >
                  <Monitor className="w-6 h-6" />
                </button>
              </div>

              {/* Device Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-zion-purple mb-4 flex items-center">
                  <SmartphoneIcon className="w-5 h-5 mr-2" />
                  Device Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-zion-slate-800 rounded-lg p-4">
                  <div className="text-sm">
                    <div className="text-zion-slate-light">Device Type:</div>
                    <div className="text-white font-medium capitalize">{deviceInfo.type}</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-zion-slate-light">Orientation:</div>
                    <div className="text-white font-medium capitalize">{deviceInfo.orientation}</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-zion-slate-light">Screen:</div>
                    <div className="text-white font-medium">{deviceInfo.screenSize.width} × {deviceInfo.screenSize.height}</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-zion-slate-light">Pixel Ratio:</div>
                    <div className="text-white font-medium">{deviceInfo.pixelRatio}x</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-zion-slate-light">Touch Support:</div>
                    <div className="text-white font-medium">{deviceInfo.touchSupport ? 'Yes' : 'No'}</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-zion-slate-light">Connection:</div>
                    <div className="text-white font-medium">{deviceInfo.connection || 'Unknown'}</div>
                  </div>
                </div>
              </div>

              {/* Mobile Optimizations */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-zion-purple mb-4 flex items-center">
                  <Hand className="w-5 h-5 mr-2" />
                  Mobile Optimizations
                </h3>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={mobileOptimizations.touchFriendly}
                      onChange={(e) => handleMobilePreferenceChange('touchFriendly', e.target.checked)}
                      className="w-4 h-4 text-zion-purple bg-zion-slate-800 border-zion-purple/30 rounded focus:ring-zion-purple/50"
                    />
                    <span className="text-white">Touch-Friendly Interface</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={mobileOptimizations.largeTouchTargets}
                      onChange={(e) => handleMobilePreferenceChange('largeTouchTargets', e.target.checked)}
                      className="w-4 h-4 text-zion-purple bg-zion-slate-800 border-zion-purple/30 rounded focus:ring-zion-purple/50"
                    />
                    <span className="text-white">Large Touch Targets</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={mobileOptimizations.reducedAnimations}
                      onChange={(e) => handleMobilePreferenceChange('reducedAnimations', e.target.checked)}
                      className="w-4 h-4 text-zion-purple bg-zion-slate-800 border-zion-purple/30 rounded focus:ring-zion-purple/50"
                    />
                    <span className="text-white">Reduced Animations</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={mobileOptimizations.simplifiedLayout}
                      onChange={(e) => handleMobilePreferenceChange('simplifiedLayout', e.target.checked)}
                      className="w-4 h-4 text-zion-purple bg-zion-slate-800 border-zion-purple/30 rounded focus:ring-zion-purple/50"
                    />
                    <span className="text-white">Simplified Layout</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={mobileOptimizations.highContrast}
                      onChange={(e) => handleMobilePreferenceChange('highContrast', e.target.checked)}
                      className="w-4 h-4 text-zion-purple bg-zion-slate-800 border-zion-purple/30 rounded focus:ring-zion-purple/50"
                    />
                    <span className="text-white">High Contrast Mode</span>
                  </label>
                </div>
              </div>

              {/* Touch Gestures */}
              {enableTouchGestures && deviceInfo.touchSupport && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-zion-purple mb-4 flex items-center">
                    <MoveHorizontal className="w-5 h-5 mr-2" />
                    Touch Gestures
                  </h3>
                  <div className="bg-zion-slate-800 rounded-lg p-4 space-y-3">
                    <div className="text-sm text-zion-slate-light">
                      <div className="font-medium text-white mb-2">Available Gestures:</div>
                      <div className="space-y-1">
                        <div>• Swipe Left: Navigate Forward</div>
                        <div>• Swipe Right: Navigate Back</div>
                        <div>• Swipe Up: Scroll to Top</div>
                        <div>• Swipe Down: Scroll to Bottom</div>
                        <div>• Long Press: Toggle Gesture Mode</div>
                      </div>
                    </div>
                    
                    {gestureHistory.length > 0 && (
                      <div className="text-sm">
                        <div className="text-zion-slate-light mb-2">Recent Gestures:</div>
                        <div className="space-y-1">
                          {gestureHistory.slice(-3).map((gesture, index) => (
                            <div key={index} className="text-white">
                              {gesture.type} {gesture.direction || ''} 
                              {gesture.distance && ` (${gesture.distance}px)`}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-zion-slate-700">
                <button
                  onClick={resetMobilePreferences}
                  className="px-6 py-3 bg-zion-slate-800 text-white rounded-lg hover:bg-zion-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-zion-purple/50"
                >
                  Reset to Defaults
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white rounded-lg hover:from-zion-purple/90 hover:to-zion-cyan/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zion-purple/50"
                >
                  Apply & Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen reader only content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Mobile experience panel is {isOpen ? 'open' : 'closed'}
      </div>
    </>
  );
};

export default MobileExperienceEnhancer;