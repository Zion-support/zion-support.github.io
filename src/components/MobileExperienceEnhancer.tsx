import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Wifi, 
  WifiOff, 
  Battery, 
  BatteryCharging,
  Volume2,
  VolumeX,
  RotateCcw,
  Maximize2,
  Minimize2,
  Touch,
  Gesture,
  X,
  Settings,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
}

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  orientation: 'portrait' | 'landscape';
  screenSize: {
    width: number;
    height: number;
  };
  touchSupport: boolean;
  connection: 'fast' | 'slow' | 'offline';
  batteryLevel: number;
  isCharging: boolean;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  showControls = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    orientation: 'portrait',
    screenSize: { width: 0, height: 0 },
    touchSupport: false,
    connection: 'fast',
    batteryLevel: 100,
    isCharging: false
  });
  const [isVisible, setIsVisible] = useState(false);
  const [mobileOptimizations, setMobileOptimizations] = useState<string[]>([]);
  const [gestureHistory, setGestureHistory] = useState<string[]>([]);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // Detect device type and capabilities
  const detectDevice = useCallback(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/i.test(userAgent);
    const isDesktop = !isMobile && !isTablet;
    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    setDeviceInfo(prev => ({
      ...prev,
      isMobile,
      isTablet,
      isDesktop,
      touchSupport,
      screenSize: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }));
  }, []);

  // Detect orientation changes
  const detectOrientation = useCallback(() => {
    const orientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
    setDeviceInfo(prev => ({
      ...prev,
      orientation,
      screenSize: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }));
  }, []);

  // Detect network status
  const detectNetworkStatus = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const effectiveType = connection.effectiveType;
      const connectionType = effectiveType === '4g' || effectiveType === '5g' ? 'fast' : 'slow';
      setDeviceInfo(prev => ({ ...prev, connection: connectionType }));
    }
  }, []);

  // Detect battery status
  const detectBatteryStatus = useCallback(async () => {
    if ('getBattery' in navigator) {
      try {
        const battery = await (navigator as any).getBattery();
        setDeviceInfo(prev => ({
          ...prev,
          batteryLevel: Math.round(battery.level * 100),
          isCharging: battery.charging
        }));

        battery.addEventListener('levelchange', () => {
          setDeviceInfo(prev => ({ ...prev, batteryLevel: Math.round(battery.level * 100) }));
        });

        battery.addEventListener('chargingchange', () => {
          setDeviceInfo(prev => ({ ...prev, isCharging: battery.charging }));
        });
      } catch (error) {
        console.log('Battery API not supported');
      }
    }
  }, []);

  // Generate mobile optimization suggestions
  const generateOptimizations = useCallback(() => {
    const suggestions: string[] = [];
    
    if (deviceInfo.isMobile) {
      if (deviceInfo.orientation === 'landscape') {
        suggestions.push('Consider portrait mode for better mobile experience');
      }
      
      if (deviceInfo.connection === 'slow') {
        suggestions.push('Enable data saving mode for slower connections');
        suggestions.push('Reduce image quality for better performance');
      }
      
      if (deviceInfo.batteryLevel < 20) {
        suggestions.push('Enable battery saver mode');
        suggestions.push('Reduce animations for better battery life');
      }
      
      if (!deviceInfo.touchSupport) {
        suggestions.push('Touch gestures not supported on this device');
      }
    }
    
    setMobileOptimizations(suggestions);
  }, [deviceInfo]);

  // Handle touch gestures
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      };
    }
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!touchStartRef.current) return;
    
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const deltaTime = Date.now() - touchStartRef.current.time;
    
    // Detect swipe gestures
    if (deltaTime < 300) {
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 50) {
          setGestureHistory(prev => [...prev.slice(-4), 'Swipe Right']);
        } else if (deltaX < -50) {
          setGestureHistory(prev => [...prev.slice(-4), 'Swipe Left']);
        }
      } else {
        if (deltaY > 50) {
          setGestureHistory(prev => [...prev.slice(-4), 'Swipe Down']);
        } else if (deltaY < -50) {
          setGestureHistory(prev => [...prev.slice(-4), 'Swipe Up']);
        }
      }
    }
    
    touchStartRef.current = null;
  }, []);

  // Apply mobile-specific optimizations
  const applyMobileOptimizations = useCallback(() => {
    const root = document.documentElement;
    
    if (deviceInfo.isMobile) {
      // Add mobile-specific classes
      root.classList.add('mobile-device');
      
      // Optimize for touch
      if (deviceInfo.touchSupport) {
        root.classList.add('touch-device');
        document.body.style.cursor = 'default';
      }
      
      // Optimize for orientation
      if (deviceInfo.orientation === 'landscape') {
        root.classList.add('landscape');
      } else {
        root.classList.add('portrait');
      }
      
      // Optimize for connection speed
      if (deviceInfo.connection === 'slow') {
        root.classList.add('slow-connection');
      }
      
      // Optimize for battery
      if (deviceInfo.batteryLevel < 20) {
        root.classList.add('low-battery');
      }
    } else {
      // Remove mobile classes on desktop
      root.classList.remove('mobile-device', 'touch-device', 'landscape', 'portrait', 'slow-connection', 'low-battery');
    }
  }, [deviceInfo]);

  // Initialize device detection
  useEffect(() => {
    if (!enabled) return;
    
    detectDevice();
    detectOrientation();
    detectNetworkStatus();
    detectBatteryStatus();
    
    // Add event listeners
    window.addEventListener('resize', detectOrientation);
    window.addEventListener('orientationchange', detectOrientation);
    
    if (deviceInfo.touchSupport) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchend', handleTouchEnd);
    }
    
    // Show component after delay
    const timer = setTimeout(() => setIsVisible(true), 3000);
    
    return () => {
      window.removeEventListener('resize', detectOrientation);
      window.removeEventListener('orientationchange', detectOrientation);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      clearTimeout(timer);
    };
  }, [enabled, detectDevice, detectOrientation, detectNetworkStatus, detectBatteryStatus, handleTouchStart, handleTouchEnd, deviceInfo.touchSupport]);

  // Apply optimizations when device info changes
  useEffect(() => {
    applyMobileOptimizations();
    generateOptimizations();
  }, [applyMobileOptimizations, generateOptimizations]);

  if (!enabled || !isVisible) return null;

  return (
    <>
      {/* Floating Mobile Experience Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-colors focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Open mobile experience settings"
        title="Mobile Experience Settings"
      >
        <Smartphone className="w-6 h-6" />
      </motion.button>

      {/* Mobile Experience Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                    <Smartphone className="w-6 h-6 text-green-600" />
                    <span>Mobile Experience</span>
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    aria-label="Close mobile experience panel"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Device Information */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Device Information
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      {deviceInfo.isMobile ? (
                        <Smartphone className="w-4 h-4 text-blue-500" />
                      ) : deviceInfo.isTablet ? (
                        <Tablet className="w-4 h-4 text-green-500" />
                      ) : (
                        <Monitor className="w-4 h-4 text-gray-500" />
                      )}
                      <span className="text-gray-600 dark:text-gray-400">
                        {deviceInfo.isMobile ? 'Mobile' : deviceInfo.isTablet ? 'Tablet' : 'Desktop'}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <RotateCcw className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-600 dark:text-gray-400 capitalize">
                        {deviceInfo.orientation}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {deviceInfo.touchSupport ? (
                        <Touch className="w-4 h-4 text-green-500" />
                      ) : (
                        <Gesture className="w-4 h-4 text-red-500" />
                      )}
                      <span className="text-gray-600 dark:text-gray-400">
                        {deviceInfo.touchSupport ? 'Touch' : 'No Touch'}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {deviceInfo.connection === 'offline' ? (
                        <WifiOff className="w-4 h-4 text-red-500" />
                      ) : (
                        <Wifi className="w-4 h-4 text-green-500" />
                      )}
                      <span className="text-gray-600 dark:text-gray-400 capitalize">
                        {deviceInfo.connection}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Screen Size */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Screen Size
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-mono text-gray-900 dark:text-white">
                        {deviceInfo.screenSize.width} × {deviceInfo.screenSize.height}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {deviceInfo.screenSize.width > deviceInfo.screenSize.height ? 'Landscape' : 'Portrait'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Battery Status */}
                {deviceInfo.batteryLevel > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                      Battery Status
                    </h3>
                    <div className="flex items-center space-x-3">
                      {deviceInfo.isCharging ? (
                        <BatteryCharging className="w-6 h-6 text-green-500" />
                      ) : (
                        <Battery className="w-6 h-6 text-blue-500" />
                      )}
                      <div className="flex-1">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${
                              deviceInfo.batteryLevel > 50 ? 'bg-green-500' : 
                              deviceInfo.batteryLevel > 20 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${deviceInfo.batteryLevel}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {deviceInfo.batteryLevel}%
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {deviceInfo.isCharging ? 'Charging' : 'Not charging'}
                    </div>
                  </div>
                )}

                {/* Mobile Optimizations */}
                {mobileOptimizations.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                      <Settings className="w-5 h-5 text-blue-500" />
                      <span>Optimization Suggestions</span>
                    </h3>
                    <div className="space-y-2">
                      {mobileOptimizations.map((suggestion, index) => (
                        <div key={index} className="flex items-start space-x-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{suggestion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Gesture History */}
                {gestureHistory.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                      <Gesture className="w-5 h-5 text-purple-500" />
                      <span>Recent Gestures</span>
                    </h3>
                    <div className="space-y-1">
                      {gestureHistory.map((gesture, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-600 dark:text-gray-400">{gesture}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="space-y-2">
                  <button
                    onClick={() => window.location.reload()}
                    className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Refresh Page</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen();
                      }
                    }}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>Fullscreen</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen reader only content */}
      <div className="sr-only">
        <p>Mobile experience panel. Use Tab to navigate options and Enter to activate controls.</p>
      </div>
    </>
  );
};