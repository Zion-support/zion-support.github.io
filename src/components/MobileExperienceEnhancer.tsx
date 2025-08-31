import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Wifi, 
  Battery, 
  Signal, 
  Touch, 
  Gesture,
  RotateCcw,
  Maximize,
  Minimize,
  Settings,
  X,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  orientation: 'portrait' | 'landscape';
  screenSize: { width: number; height: number };
  pixelRatio: number;
  touchSupport: boolean;
  connection: 'slow-2g' | '2g' | '3g' | '4g' | '5g' | 'wifi' | 'ethernet';
  batteryLevel?: number;
  isOnline: boolean;
}

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  showDeviceInfo?: boolean;
  autoOptimize?: boolean;
  enableGestures?: boolean;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  showDeviceInfo = false,
  autoOptimize = true,
  enableGestures = true
}) => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<string[]>([]);
  const [showOptimizer, setShowOptimizer] = useState(false);
  const [gestureHistory, setGestureHistory] = useState<string[]>([]);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGestureGuide, setShowGestureGuide] = useState(false);
  
  const touchRef = useRef<HTMLDivElement>(null);
  const gestureTimeoutRef = useRef<NodeJS.Timeout>();

  // Detect device information
  const detectDevice = useCallback(() => {
    if (!enabled) return;

    const userAgent = navigator.userAgent;
    const screen = window.screen;
    const connection = (navigator as any).connection;
    
    let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      deviceType = screen.width < 768 ? 'mobile' : 'tablet';
    }

    const orientation = screen.width > screen.height ? 'landscape' : 'portrait';
    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    let connectionType: DeviceInfo['connection'] = 'wifi';
    if (connection) {
      if (connection.effectiveType) {
        connectionType = connection.effectiveType as any;
      } else if (connection.type) {
        connectionType = connection.type as any;
      }
    }

    const deviceData: DeviceInfo = {
      type: deviceType,
      orientation,
      screenSize: { width: screen.width, height: screen.height },
      pixelRatio: window.devicePixelRatio || 1,
      touchSupport: touchSupport,
      connection: connectionType,
      isOnline: navigator.onLine
    };

    setDeviceInfo(deviceData);
  }, [enabled]);

  // Monitor device changes
  useEffect(() => {
    if (!enabled) return;

    detectDevice();

    const handleResize = () => detectDevice();
    const handleOrientationChange = () => detectDevice();
    const handleOnline = () => setDeviceInfo(prev => prev ? { ...prev, isOnline: true } : null);
    const handleOffline = () => setDeviceInfo(prev => prev ? { ...prev, isOnline: false } : null);

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [enabled, detectDevice]);

  // Auto-optimize for mobile
  const autoOptimize = useCallback(async () => {
    if (!autoOptimize || !enabled || !deviceInfo) return;

    setIsOptimizing(true);
    const status: string[] = [];

    try {
      // 1. Optimize images for mobile
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (deviceInfo.type === 'mobile') {
          // Use smaller images on mobile
          if (img.src.includes('large') || img.src.includes('desktop')) {
            const mobileSrc = img.src.replace(/large|desktop/g, 'mobile');
            img.src = mobileSrc;
            status.push('Optimized images for mobile');
          }
          
          // Add lazy loading
          if (!img.loading) {
            img.loading = 'lazy';
            status.push('Added lazy loading to images');
          }
        }
      });

      // 2. Optimize fonts for mobile
      if (deviceInfo.type === 'mobile') {
        const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
        fontLinks.forEach(link => {
          link.setAttribute('media', '(max-width: 768px)');
          status.push('Optimized font loading for mobile');
        });
      }

      // 3. Add mobile-specific CSS classes
      document.body.classList.add(`device-${deviceInfo.type}`);
      document.body.classList.add(`orientation-${deviceInfo.orientation}`);
      status.push(`Added device-specific classes: ${deviceInfo.type}, ${deviceInfo.orientation}`);

      // 4. Optimize for slow connections
      if (['slow-2g', '2g', '3g'].includes(deviceInfo.connection)) {
        // Disable non-critical animations
        document.body.classList.add('slow-connection');
        status.push('Optimized for slow connection');
      }

      // 5. Add viewport meta tag if missing
      if (!document.querySelector('meta[name="viewport"]')) {
        const viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
        document.head.appendChild(viewport);
        status.push('Added viewport meta tag');
      }

      // 6. Optimize touch targets
      const touchTargets = document.querySelectorAll('button, a, input, select, textarea');
      touchTargets.forEach(target => {
        const element = target as HTMLElement;
        const rect = element.getBoundingClientRect();
        if (rect.width < 44 || rect.height < 44) {
          element.style.minHeight = '44px';
          element.style.minWidth = '44px';
          status.push('Optimized touch target sizes');
        }
      });

      setOptimizationStatus(status);
    } catch (error) {
      status.push(`Optimization failed: ${error}`);
      setOptimizationStatus(status);
    } finally {
      setIsOptimizing(false);
    }
  }, [autoOptimize, enabled, deviceInfo]);

  // Touch gesture handling
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!enableGestures || !enabled) return;

    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  }, [enableGestures, enabled]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!enableGestures || !enabled || !touchStart) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance > 50) { // Minimum swipe distance
      let gesture = '';
      
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (deltaX > 0) {
          gesture = 'Swipe Right';
          handleSwipeRight();
        } else {
          gesture = 'Swipe Left';
          handleSwipeLeft();
        }
      } else {
        // Vertical swipe
        if (deltaY > 0) {
          gesture = 'Swipe Down';
          handleSwipeDown();
        } else {
          gesture = 'Swipe Up';
          handleSwipeUp();
        }
      }

      setGestureHistory(prev => [...prev.slice(-4), gesture]);
    }

    setTouchStart(null);
  }, [enableGestures, enabled, touchStart]);

  // Gesture handlers
  const handleSwipeRight = useCallback(() => {
    // Navigate back or show previous content
    if (window.history.length > 1) {
      window.history.back();
    }
  }, []);

  const handleSwipeLeft = useCallback(() => {
    // Navigate forward or show next content
    if (window.history.length > 1) {
      window.history.forward();
    }
  }, []);

  const handleSwipeUp = useCallback(() => {
    // Scroll to top or show navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSwipeDown = useCallback(() => {
    // Refresh or show pull-to-refresh
    if (window.scrollY === 0) {
      window.location.reload();
    }
  }, []);

  // Fullscreen handling
  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.warn('Fullscreen not supported:', error);
    }
  }, []);

  // Reset optimizations
  const resetOptimizations = useCallback(() => {
    document.body.classList.remove('device-mobile', 'device-tablet', 'device-desktop');
    document.body.classList.remove('orientation-portrait', 'orientation-landscape');
    document.body.classList.remove('slow-connection');
    
    // Reset image sources
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.dataset.originalSrc) {
        img.src = img.dataset.originalSrc;
      }
    });

    setOptimizationStatus([]);
  }, []);

  // Auto-optimize when device info changes
  useEffect(() => {
    if (deviceInfo && autoOptimize) {
      autoOptimize();
    }
  }, [deviceInfo, autoOptimize]);

  if (!enabled) return null;

  return (
    <>
      {/* Mobile Experience Toggle Button */}
      <motion.button
        onClick={() => setShowOptimizer(!showOptimizer)}
        className="fixed bottom-36 right-4 z-50 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Mobile Experience Optimizer"
        aria-label="Open mobile experience settings"
      >
        <Smartphone className="w-6 h-6" />
      </motion.button>

      {/* Mobile Experience Panel */}
      <AnimatePresence>
        {showOptimizer && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-44 right-4 z-50 w-80 bg-zion-slate-dark border border-white/20 rounded-xl shadow-2xl backdrop-blur-lg max-h-[80vh] overflow-hidden"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <Smartphone className="w-5 h-5 mr-2 text-purple-400" />
                  Mobile Experience
                </h3>
                <button
                  onClick={() => setShowOptimizer(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Device Information */}
              {deviceInfo && (
                <div className="mb-4 p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Device Type</span>
                    <span className="text-sm font-medium text-white capitalize">
                      {deviceInfo.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Orientation</span>
                    <span className="text-sm font-medium text-white capitalize">
                      {deviceInfo.orientation}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Connection</span>
                    <span className="text-sm font-medium text-white capitalize">
                      {deviceInfo.connection}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Touch Support</span>
                    <span className="text-sm font-medium text-white">
                      {deviceInfo.touchSupport ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              )}

              {/* Quick Actions */}
              <div className="space-y-2 mb-4">
                <button
                  onClick={toggleFullscreen}
                  className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
                >
                  {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                  <span>{isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}</span>
                </button>

                <button
                  onClick={() => setShowGestureGuide(!showGestureGuide)}
                  className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors"
                >
                  <Gesture className="w-4 h-4" />
                  <span>Gesture Guide</span>
                </button>
              </div>

              {/* Optimization Status */}
              {optimizationStatus.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Optimizations Applied:</h4>
                  <div className="max-h-32 overflow-y-auto space-y-1">
                    {optimizationStatus.map((status, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 mr-2 text-green-400" />
                        {status}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gesture History */}
              {gestureHistory.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Recent Gestures:</h4>
                  <div className="space-y-1">
                    {gestureHistory.map((gesture, index) => (
                      <div key={index} className="text-xs text-gray-400 flex items-center">
                        <Touch className="w-3 h-3 mr-2 text-purple-400" />
                        {gesture}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={autoOptimize}
                  disabled={isOptimizing}
                  className="flex-1 flex items-center justify-center px-3 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white text-sm rounded-lg transition-colors"
                >
                  {isOptimizing ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : (
                    <Settings className="w-4 h-4 mr-2" />
                  )}
                  {isOptimizing ? 'Optimizing...' : 'Optimize Now'}
                </button>
                <button
                  onClick={resetOptimizations}
                  className="px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gesture Guide Overlay */}
      <AnimatePresence>
        {showGestureGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setShowGestureGuide(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-zion-slate-dark border border-white/20 rounded-xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Touch Gestures</h3>
                <div className="space-y-4 text-sm text-gray-300">
                  <div className="flex items-center justify-between">
                    <span>Swipe Right</span>
                    <span>Go Back</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Swipe Left</span>
                    <span>Go Forward</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Swipe Up</span>
                    <span>Scroll to Top</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Swipe Down</span>
                    <span>Refresh</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowGestureGuide(false)}
                  className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Got it!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Touch Gesture Area */}
      {enableGestures && (
        <div
          ref={touchRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 pointer-events-none z-10"
          aria-hidden="true"
        />
      )}

      {/* Connection Status Indicator */}
      {deviceInfo && !deviceInfo.isOnline && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 left-4 z-50 px-3 py-2 bg-red-600 text-white text-sm rounded-lg shadow-lg flex items-center space-x-2"
        >
          <AlertCircle className="w-4 h-4" />
          <span>Offline</span>
        </motion.div>
      )}

      {/* Slow Connection Warning */}
      {deviceInfo && ['slow-2g', '2g', '3g'].includes(deviceInfo.connection) && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 z-50 px-3 py-2 bg-yellow-600 text-white text-sm rounded-lg shadow-lg flex items-center space-x-2"
        >
          <Wifi className="w-4 h-4" />
          <span>Slow Connection</span>
        </motion.div>
      )}
    </>
  );
};