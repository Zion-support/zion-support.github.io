import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Hand, 
  MousePointer, 
  ArrowLeftRight, 
  ZoomIn, 
  RotateCcw,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  RefreshCw
} from 'lucide-react';

interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  orientation: 'portrait' | 'landscape';
  touchSupport: boolean;
  screenSize: { width: number; height: number };
  pixelRatio: number;
  connection: 'slow-2g' | '2g' | '3g' | '4g' | '5g' | 'wifi' | 'ethernet';
}

interface MobileSettings {
  enableTouchGestures: boolean;
  enableSwipeNavigation: boolean;
  enablePullToRefresh: boolean;
  enableHapticFeedback: boolean;
  enableMobileOptimizations: boolean;
  enableOfflineSupport: boolean;
}

export function MobileExperienceEnhancer({ enabled = true }: { enabled?: boolean }) {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    type: 'desktop',
    orientation: 'portrait',
    touchSupport: false,
    screenSize: { width: 0, height: 0 },
    pixelRatio: 1,
    connection: 'wifi'
  });

  const [settings, setSettings] = useState<MobileSettings>({
    enableTouchGestures: true,
    enableSwipeNavigation: true,
    enablePullToRefresh: true,
    enableHapticFeedback: true,
    enableMobileOptimizations: true,
    enableOfflineSupport: true
  });

  const [isOpen, setIsOpen] = useState(false);
  const [showDeviceInfo, setShowDeviceInfo] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  // Detect device information
  const detectDevice = useCallback(() => {
    const userAgent = navigator.userAgent;
    const screen = window.screen;
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;

    let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      type = screen.width < 768 ? 'mobile' : 'tablet';
    }

    const orientation = screen.width > screen.height ? 'landscape' : 'portrait';
    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const pixelRatio = window.devicePixelRatio || 1;

    let connectionType: DeviceInfo['connection'] = 'wifi';
    if (connection) {
      if (connection.effectiveType) {
        connectionType = connection.effectiveType as DeviceInfo['connection'];
      } else if (connection.type) {
        connectionType = connection.type as DeviceInfo['connection'];
      }
    }

    setDeviceInfo({
      type,
      orientation,
      touchSupport,
      screenSize: { width: screen.width, height: screen.height },
      pixelRatio,
      connection: connectionType
    });
  }, []);

  // Apply mobile optimizations
  const applyMobileOptimizations = useCallback(() => {
    if (!enabled || !settings.enableMobileOptimizations) return () => {};

    const newOptimizations: string[] = [];

    // Touch gesture support
    if (settings.enableTouchGestures && deviceInfo.touchSupport) {
      newOptimizations.push('Enhanced touch gestures enabled');
      
      // Add touch gesture listeners
      let startX = 0;
      let startY = 0;
      let startTime = 0;

      const handleTouchStart = (e: TouchEvent) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        startTime = Date.now();
      };

      const handleTouchEnd = (e: TouchEvent) => {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const endTime = Date.now();
        const duration = endTime - startTime;
        const distanceX = Math.abs(endX - startX);
        const distanceY = Math.abs(endY - startY);

        // Swipe detection
        if (duration < 300 && distanceX > 50 && distanceY < 100) {
          if (endX > startX) {
            // Swipe right
            if (settings.enableSwipeNavigation) {
              // Navigate back or show previous content
              console.log('Swipe right detected');
            }
          } else {
            // Swipe left
            if (settings.enableSwipeNavigation) {
              // Navigate forward or show next content
              console.log('Swipe left detected');
            }
          }
        }

        // Pull to refresh detection
        if (settings.enablePullToRefresh && startY > 100 && endY < startY - 100) {
          // Trigger pull to refresh
          console.log('Pull to refresh detected');
          window.location.reload();
        }
      };

      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchend', handleTouchEnd);

      // Cleanup function
      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }

    // Haptic feedback
    if (settings.enableHapticFeedback && 'vibrate' in navigator) {
      newOptimizations.push('Haptic feedback enabled');
      
      // Add haptic feedback to interactive elements
      const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
      interactiveElements.forEach(element => {
        element.addEventListener('touchstart', () => {
          navigator.vibrate(10);
        });
      });
    }

    // Mobile-specific CSS classes
    if (deviceInfo.type === 'mobile') {
      document.documentElement.classList.add('mobile-device');
      newOptimizations.push('Mobile-specific optimizations applied');
      
      // Optimize images for mobile
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (deviceInfo.pixelRatio > 1) {
          // Use high-DPI images for retina displays
          const src = img.src;
          if (src && !src.includes('@2x') && !src.includes('@3x')) {
            img.src = src.replace(/\.(jpg|jpeg|png|webp)/, '@2x.$1');
          }
        }
      });
    }

    // Offline support
    if (settings.enableOfflineSupport && 'serviceWorker' in navigator) {
      newOptimizations.push('Offline support enabled');
      
      // Register service worker for offline functionality
      navigator.serviceWorker.register('/sw-mobile.js').catch(console.error);
    }

    setOptimizations(newOptimizations);
  }, [enabled, settings, deviceInfo]);

  // Handle orientation changes
  const handleOrientationChange = useCallback(() => {
    detectDevice();
  }, [detectDevice]);

  // Handle resize events
  const handleResize = useCallback(() => {
    detectDevice();
  }, [detectDevice]);

  // Initialize device detection
  useEffect(() => {
    detectDevice();
    
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleResize);
    };
  }, [detectDevice, handleOrientationChange, handleResize]);

  // Apply optimizations when settings or device info changes
  useEffect(() => {
    const cleanup = applyMobileOptimizations();
    return cleanup;
  }, [applyMobileOptimizations]);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('zion-mobile-settings', JSON.stringify(settings));
  }, [settings]);

  // Load saved settings
  useEffect(() => {
    const saved = localStorage.getItem('zion-mobile-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.warn('Failed to parse mobile settings');
      }
    }
  }, []);

  const toggleSetting = (key: keyof MobileSettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getDeviceIcon = () => {
    switch (deviceInfo.type) {
      case 'mobile': return <Smartphone className="w-6 h-6" />;
      case 'tablet': return <Tablet className="w-6 h-6" />;
      default: return <Monitor className="w-6 h-6" />;
    }
  };

  const getConnectionColor = () => {
    switch (deviceInfo.connection) {
      case '5g':
      case 'wifi':
      case 'ethernet':
        return 'text-green-400';
      case '4g':
        return 'text-blue-400';
      case '3g':
        return 'text-yellow-400';
      default:
        return 'text-red-400';
    }
  };

  if (!enabled) return null;

  return (
    <>
      {/* Floating Mobile Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-40 z-50 p-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open mobile experience settings"
      >
        <Smartphone className="w-6 h-6" />
      </motion.button>

      {/* Mobile Experience Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-slate-dark border border-green-400/20 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Smartphone className="w-6 h-6 mr-2 text-green-400" />
                  Mobile Experience
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close mobile experience panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Device Information */}
              <div className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getDeviceIcon()}
                    <div>
                      <h3 className="text-lg font-semibold text-white capitalize">
                        {deviceInfo.type} Device
                      </h3>
                      <p className="text-sm text-gray-400">
                        {deviceInfo.orientation} orientation • {deviceInfo.screenSize.width}×{deviceInfo.screenSize.height}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${getConnectionColor()}`}>
                      {deviceInfo.connection.toUpperCase()}
                    </div>
                    <div className="text-xs text-gray-400">
                      {deviceInfo.pixelRatio}x pixel ratio
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Hand className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Touch Support:</span>
                    <span className={deviceInfo.touchSupport ? 'text-green-400' : 'text-red-400'}>
                      {deviceInfo.touchSupport ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MousePointer className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">Gestures:</span>
                    <span className="text-cyan-400">Enabled</span>
                  </div>
                </div>
              </div>

              {/* Device Info Toggle */}
              <div className="mb-6">
                <button
                  onClick={() => setShowDeviceInfo(!showDeviceInfo)}
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <Info className="w-4 h-4" />
                  <span>{showDeviceInfo ? 'Hide' : 'Show'} Detailed Device Info</span>
                </button>
              </div>

              {/* Detailed Device Information */}
              <AnimatePresence>
                {showDeviceInfo && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mb-6 p-4 bg-white/5 rounded-xl"
                  >
                    <h4 className="text-white font-medium mb-3">Device Capabilities</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">User Agent:</span>
                        <div className="text-gray-300 font-mono text-xs break-all">
                          {navigator.userAgent.substring(0, 50)}...
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-400">Platform:</span>
                        <div className="text-gray-300">{navigator.platform}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Language:</span>
                        <div className="text-gray-300">{navigator.language}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Cookies:</span>
                        <div className="text-gray-300">{navigator.cookieEnabled ? 'Enabled' : 'Disabled'}</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Optimizations */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">Mobile Optimizations</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                       <div className="flex items-center space-x-3">
                     <Hand className="w-5 h-5 text-green-400" />
                     <div>
                       <div className="text-white font-medium">Touch Gestures</div>
                       <div className="text-sm text-gray-400">Enhanced touch interactions</div>
                     </div>
                   </div>
                    <button
                      onClick={() => toggleSetting('enableTouchGestures')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.enableTouchGestures ? 'bg-green-500' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.enableTouchGestures ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                       <div className="flex items-center space-x-3">
                     <ArrowLeftRight className="w-5 h-5 text-blue-400" />
                     <div>
                       <div className="text-white font-medium">Swipe Navigation</div>
                       <div className="text-sm text-gray-400">Swipe to navigate</div>
                     </div>
                   </div>
                    <button
                      onClick={() => toggleSetting('enableSwipeNavigation')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.enableSwipeNavigation ? 'bg-green-500' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.enableSwipeNavigation ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                       <div className="flex items-center space-x-3">
                     <ZoomIn className="w-5 h-5 text-purple-400" />
                     <div>
                       <div className="text-white font-medium">Pull to Refresh</div>
                       <div className="text-sm text-gray-400">Pull down to refresh</div>
                     </div>
                   </div>
                    <button
                      onClick={() => toggleSetting('enablePullToRefresh')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.enablePullToRefresh ? 'bg-green-500' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.enablePullToRefresh ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Gesture className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-white font-medium">Haptic Feedback</div>
                        <div className="text-sm text-gray-400">Vibration feedback</div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSetting('enableHapticFeedback')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.enableHapticFeedback ? 'bg-green-500' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.enableHapticFeedback ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5 text-yellow-400" />
                      <div>
                        <div className="text-white font-medium">Mobile Optimizations</div>
                        <div className="text-sm text-gray-400">Device-specific enhancements</div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSetting('enableMobileOptimizations')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.enableMobileOptimizations ? 'bg-green-500' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.enableMobileOptimizations ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <div>
                        <div className="text-white font-medium">Offline Support</div>
                        <div className="text-sm text-gray-400">Work without internet</div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSetting('enableOfflineSupport')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.enableOfflineSupport ? 'bg-green-500' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.enableOfflineSupport ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Applied Optimizations */}
              {optimizations.length > 0 && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-400/20 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <h3 className="text-lg font-semibold text-white">Applied Optimizations</h3>
                  </div>
                  <ul className="space-y-1">
                    {optimizations.map((optimization, index) => (
                      <li key={index} className="text-sm text-green-300 flex items-center space-x-2">
                        <span>•</span>
                        <span>{optimization}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Actions */}
              <div className="mt-6 pt-6 border-t border-green-400/20 flex justify-between">
                <button
                  onClick={detectDevice}
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Refresh Device Info</span>
                </button>
                <button
                  onClick={applyMobileOptimizations}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg transition-all duration-300"
                >
                  Apply Optimizations
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}