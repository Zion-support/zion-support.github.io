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
  Sun,
  Moon,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

interface MobileExperienceEnhancerProps {
  enabled: boolean;
  enableTouchGestures?: boolean;
  enableOrientationDetection?: boolean;
  enableNetworkOptimization?: boolean;
  enableBatteryOptimization?: boolean;
}

interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  orientation: 'portrait' | 'landscape';
  screenSize: { width: number; height: number };
  pixelRatio: number;
  touchSupport: boolean;
  networkType?: string;
  batteryLevel?: number;
  isLowPowerMode?: boolean;
}

interface TouchGesture {
  type: 'swipe' | 'pinch' | 'rotate' | 'longPress';
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  enableTouchGestures = true,
  enableOrientationDetection = true,
  enableNetworkOptimization = true,
  enableBatteryOptimization = true
}) => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [showControls, setShowControls] = useState(false);
  const [gestures, setGestures] = useState<TouchGesture[]>([]);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const touchEndRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const gestureTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect device information
  const detectDevice = useCallback(() => {
    const userAgent = navigator.userAgent;
    const screen = window.screen;
    const orientation = window.screen.orientation || { type: 'portrait' };
    
    let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      deviceType = screen.width <= 768 ? 'mobile' : 'tablet';
    }

    const deviceInfo: DeviceInfo = {
      type: deviceType,
      orientation: orientation.type.includes('landscape') ? 'landscape' : 'portrait',
      screenSize: { width: screen.width, height: screen.height },
      pixelRatio: window.devicePixelRatio || 1,
      touchSupport: 'ontouchstart' in window,
      networkType: (navigator as any).connection?.effectiveType,
      batteryLevel: undefined,
      isLowPowerMode: false
    };

    setDeviceInfo(deviceInfo);
    return deviceInfo;
  }, []);

  // Battery information
  const getBatteryInfo = useCallback(async () => {
    if ('getBattery' in navigator) {
      try {
        const battery = await (navigator as any).getBattery();
        setDeviceInfo(prev => prev ? {
          ...prev,
          batteryLevel: battery.level * 100,
          isLowPowerMode: battery.level < 0.2
        } : null);
      } catch (error) {
        console.warn('Battery API not supported:', error);
      }
    }
  }, []);

  // Network information
  const getNetworkInfo = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      setDeviceInfo(prev => prev ? {
        ...prev,
        networkType: connection.effectiveType || 'unknown'
      } : null);
    }
  }, []);

  // Touch gesture detection
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!enableTouchGestures) return;
    
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };
  }, [enableTouchGestures]);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!enableTouchGestures || !touchStartRef.current) return;
    
    const touch = e.changedTouches[0];
    touchEndRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };

    const start = touchStartRef.current;
    const end = touchEndRef.current;
    
    const deltaX = end.x - start.x;
    const deltaY = end.y - start.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const duration = end.time - start.time;
    
    if (distance > 50 && duration < 500) {
      let direction: 'up' | 'down' | 'left' | 'right' | undefined;
      
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        direction = deltaX > 0 ? 'right' : 'left';
      } else {
        direction = deltaY > 0 ? 'down' : 'up';
      }

      const gesture: TouchGesture = {
        type: 'swipe',
        direction,
        distance,
        duration
      };

      setGestures(prev => [...prev.slice(-4), gesture]);
      
      // Handle swipe gestures
      handleSwipeGesture(gesture);
    }

    touchStartRef.current = null;
    touchEndRef.current = null;
  }, [enableTouchGestures]);

  // Handle swipe gestures
  const handleSwipeGesture = useCallback((gesture: TouchGesture) => {
    if (gesture.type === 'swipe') {
      switch (gesture.direction) {
        case 'left':
          // Navigate forward
          if (window.history.length > 1) {
            window.history.forward();
          }
          break;
        case 'right':
          // Navigate back
          if (window.history.length > 1) {
            window.history.back();
          }
          break;
        case 'up':
          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'down':
          // Scroll to bottom
          window.scrollTo({ 
            top: document.documentElement.scrollHeight, 
            behavior: 'smooth' 
          });
          break;
      }
    }
  }, []);

  // Orientation change handling
  const handleOrientationChange = useCallback(() => {
    if (!enableOrientationDetection) return;
    
    const orientation = window.screen.orientation || { type: 'portrait' };
    setDeviceInfo(prev => prev ? {
      ...prev,
      orientation: orientation.type.includes('landscape') ? 'landscape' : 'portrait'
    } : null);

    // Optimize layout for orientation
    if (orientation.type.includes('landscape')) {
      document.body.classList.add('landscape-mode');
    } else {
      document.body.classList.remove('landscape-mode');
    }
  }, [enableOrientationDetection]);

  // Mobile optimizations
  const applyMobileOptimizations = useCallback(async () => {
    if (!deviceInfo || deviceInfo.type === 'desktop') return;
    
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    try {
      // Touch-friendly optimizations
      if (deviceInfo.touchSupport) {
        // Increase touch target sizes
        const touchTargets = document.querySelectorAll('button, a, input, select, textarea');
        touchTargets.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.width < 44 || rect.height < 44) {
            element.classList.add('touch-friendly');
            newOptimizations.push('Touch targets optimized');
          }
        });

        // Add touch feedback
        document.body.classList.add('touch-enabled');
        newOptimizations.push('Touch feedback enabled');
      }

      // Performance optimizations for mobile
      if (deviceInfo.type === 'mobile') {
        // Reduce animations on low-end devices
        if (deviceInfo.pixelRatio < 2) {
          document.body.classList.add('reduced-motion');
          newOptimizations.push('Reduced motion for performance');
        }

        // Optimize images for mobile
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          if (!img.classList.contains('mobile-optimized')) {
            img.classList.add('mobile-optimized');
            newOptimizations.push('Images optimized for mobile');
          }
        });
      }

      // Network optimizations
      if (enableNetworkOptimization && deviceInfo.networkType === 'slow-2g') {
        // Disable non-critical features on slow networks
        document.body.classList.add('slow-network');
        newOptimizations.push('Optimized for slow network');
      }

      // Battery optimizations
      if (enableBatteryOptimization && deviceInfo.isLowPowerMode) {
        // Reduce background processes
        document.body.classList.add('low-power-mode');
        newOptimizations.push('Low power mode enabled');
      }

      setOptimizations(newOptimizations);
    } catch (error) {
      console.error('Mobile optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [deviceInfo, enableNetworkOptimization, enableBatteryOptimization]);

  // Initialize
  useEffect(() => {
    if (!enabled) return;

    const device = detectDevice();
    getBatteryInfo();
    getNetworkInfo();

    // Event listeners
    if (enableTouchGestures) {
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    if (enableOrientationDetection) {
      window.addEventListener('orientationchange', handleOrientationChange);
      window.addEventListener('resize', handleOrientationChange);
    }

    // Apply optimizations after a short delay
    const timer = setTimeout(() => {
      applyMobileOptimizations();
    }, 1000);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
      clearTimeout(timer);
    };
  }, [
    enabled, 
    enableTouchGestures, 
    enableOrientationDetection, 
    detectDevice, 
    getBatteryInfo, 
    getNetworkInfo, 
    handleTouchStart, 
    handleTouchEnd, 
    handleOrientationChange, 
    applyMobileOptimizations
  ]);

  // Auto-optimize on device info changes
  useEffect(() => {
    if (deviceInfo) {
      applyMobileOptimizations();
    }
  }, [deviceInfo, applyMobileOptimizations]);

  if (!enabled || !deviceInfo) return null;

  return (
    <>
      {/* Mobile Controls Toggle */}
      <button
        onClick={() => setShowControls(!showControls)}
        className="fixed bottom-6 left-6 z-40 p-3 bg-slate-800/90 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-400 hover:bg-slate-700/90 transition-all duration-300 shadow-lg"
        title="Mobile Experience Controls"
      >
        <Smartphone className="w-6 h-6" />
      </button>

      {/* Mobile Controls Panel */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-20 left-6 z-50 bg-slate-800/95 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-4 text-white shadow-2xl max-w-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-cyan-400">Mobile Experience</h3>
              <button
                onClick={() => setShowControls(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Device Info */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2 text-sm">
                {deviceInfo.type === 'mobile' ? (
                  <Smartphone className="w-4 h-4 text-blue-400" />
                ) : deviceInfo.type === 'tablet' ? (
                  <Tablet className="w-4 h-4 text-purple-400" />
                ) : (
                  <Monitor className="w-4 h-4 text-green-400" />
                )}
                <span className="capitalize">{deviceInfo.type}</span>
                <span className="text-gray-400">•</span>
                <span className="capitalize">{deviceInfo.orientation}</span>
              </div>

              {deviceInfo.networkType && (
                <div className="flex items-center space-x-2 text-sm">
                  <Wifi className="w-4 h-4 text-green-400" />
                  <span>{deviceInfo.networkType}</span>
                </div>
              )}

              {deviceInfo.batteryLevel !== undefined && (
                <div className="flex items-center space-x-2 text-sm">
                  <Battery className="w-4 h-4 text-yellow-400" />
                  <span>{deviceInfo.batteryLevel.toFixed(0)}%</span>
                  {deviceInfo.isLowPowerMode && (
                    <span className="text-orange-400 text-xs">Low Power</span>
                  )}
                </div>
              )}
            </div>

            {/* Optimizations Status */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Applied Optimizations</h4>
              <div className="space-y-1">
                {optimizations.length > 0 ? (
                  optimizations.map((opt, index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs text-green-400">
                      <CheckCircle className="w-3 h-3" />
                      <span>{opt}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-xs text-gray-400">No optimizations applied yet</div>
                )}
              </div>
            </div>

            {/* Recent Gestures */}
            {gestures.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Recent Gestures</h4>
                <div className="space-y-1">
                  {gestures.slice(-3).map((gesture, index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs text-cyan-400">
                      <span className="capitalize">{gesture.type}</span>
                      {gesture.direction && (
                        <>
                          <span className="text-gray-400">•</span>
                          <span className="capitalize">{gesture.direction}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex space-x-2">
              <button
                onClick={applyMobileOptimizations}
                disabled={isOptimizing}
                className="flex-1 px-3 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white text-sm rounded-lg transition-colors"
              >
                {isOptimizing ? 'Optimizing...' : 'Re-optimize'}
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-3 py-2 bg-slate-600 hover:bg-slate-700 text-white text-sm rounded-lg transition-colors"
                title="Refresh Page"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile-specific CSS classes */}
      <style jsx>{`
        .touch-friendly {
          min-width: 44px !important;
          min-height: 44px !important;
        }
        
        .touch-enabled button:hover,
        .touch-enabled a:hover {
          transform: scale(1.05);
          transition: transform 0.2s ease;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .mobile-optimized {
          max-width: 100%;
          height: auto;
        }
        
        .slow-network .non-critical {
          display: none !important;
        }
        
        .low-power-mode .background-animations {
          animation-play-state: paused !important;
        }
        
        .landscape-mode .mobile-layout {
          flex-direction: row !important;
        }
        
        @media (max-width: 768px) {
          .mobile-layout {
            flex-direction: column !important;
          }
        }
      `}</style>
    </>
  );
};