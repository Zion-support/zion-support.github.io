import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Touch, 
  Wifi, 
  WifiOff,
  Battery,
  BatteryCharging,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

interface MobileMetrics {
  screenSize: string;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  touchSupport: boolean;
  networkType: string;
  batteryLevel: number;
  batteryCharging: boolean;
  connectionSpeed: string;
  isOnline: boolean;
  viewportHeight: number;
  viewportWidth: number;
  pixelRatio: number;
  orientation: 'portrait' | 'landscape';
  memoryUsage?: number;
  cpuCores?: number;
}

interface MobileOptimization {
  id: string;
  title: string;
  description: string;
  status: 'enabled' | 'disabled' | 'recommended';
  impact: 'high' | 'medium' | 'low';
  action: string;
}

const MobileExperienceEnhancer: React.FC<{ enabled?: boolean }> = ({ enabled = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<MobileMetrics | null>(null);
  const [optimizations, setOptimizations] = useState<MobileOptimization[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [touchGestures, setTouchGestures] = useState({
    swipeEnabled: true,
    pinchEnabled: true,
    longPressEnabled: true
  });

  // Detect device type and capabilities
  const detectDeviceCapabilities = useCallback((): MobileMetrics => {
    const userAgent = navigator.userAgent;
    const screen = window.screen;
    const connection = (navigator as any).connection;
    const battery = (navigator as any).getBattery?.();
    
    // Device type detection
    let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      deviceType = /iPad|Android.*Tablet|Tablet.*Android/i.test(userAgent) ? 'tablet' : 'mobile';
    }

    // Screen size classification
    let screenSize = 'Unknown';
    if (screen.width < 768) screenSize = 'Small Mobile';
    else if (screen.width < 1024) screenSize = 'Large Mobile/Tablet';
    else if (screen.width < 1440) screenSize = 'Desktop';
    else screenSize = 'Large Desktop';

    // Touch support detection
    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Network information
    let networkType = 'Unknown';
    let connectionSpeed = 'Unknown';
    if (connection) {
      networkType = connection.effectiveType || connection.type || 'Unknown';
      connectionSpeed = connection.downlink ? `${connection.downlink} Mbps` : 'Unknown';
    }

    // Battery information
    let batteryLevel = 0;
    let batteryCharging = false;
    if (battery) {
      battery.then((batteryInfo: any) => {
        batteryLevel = Math.round(batteryInfo.level * 100);
        batteryCharging = batteryInfo.charging;
      });
    }

    // Viewport information
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const pixelRatio = window.devicePixelRatio || 1;
    const orientation = viewportHeight > viewportWidth ? 'portrait' : 'landscape';

    // Memory and CPU information (if available)
    const memory = (performance as any).memory;
    const memoryUsage = memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : undefined;
    const cpuCores = (navigator as any).hardwareConcurrency;

    return {
      screenSize,
      deviceType,
      touchSupport,
      networkType,
      batteryLevel,
      batteryCharging,
      connectionSpeed,
      isOnline: navigator.onLine,
      viewportHeight,
      viewportWidth,
      pixelRatio,
      orientation,
      memoryUsage,
      cpuCores
    };
  }, []);

  // Generate mobile optimizations
  const generateOptimizations = useCallback((currentMetrics: MobileMetrics) => {
    const opts: MobileOptimization[] = [];

    // Touch optimization
    if (currentMetrics.touchSupport) {
      opts.push({
        id: 'touch-optimization',
        title: 'Touch Gesture Optimization',
        description: 'Enable advanced touch gestures for better mobile experience',
        status: 'enabled',
        impact: 'high',
        action: 'Touch gestures are optimized for mobile devices'
      });
    }

    // Network optimization
    if (currentMetrics.networkType === 'slow-2g' || currentMetrics.networkType === '2g') {
      opts.push({
        id: 'network-optimization',
        title: 'Network Performance Optimization',
        description: 'Optimize for slow network connections',
        status: 'recommended',
        impact: 'high',
        action: 'Enable data compression and lazy loading'
      });
    }

    // Battery optimization
    if (currentMetrics.batteryLevel < 20) {
      opts.push({
        id: 'battery-optimization',
        title: 'Battery Optimization',
        description: 'Low battery detected, enable power-saving features',
        status: 'recommended',
        impact: 'medium',
        action: 'Reduce animations and background processes'
      });
    }

    // Memory optimization
    if (currentMetrics.memoryUsage && currentMetrics.memoryUsage > 100) {
      opts.push({
        id: 'memory-optimization',
        title: 'Memory Usage Optimization',
        description: 'High memory usage detected',
        status: 'recommended',
        impact: 'medium',
        action: 'Implement memory cleanup and optimization'
      });
    }

    // Viewport optimization
    if (currentMetrics.deviceType === 'mobile' && currentMetrics.orientation === 'landscape') {
      opts.push({
        id: 'viewport-optimization',
        title: 'Landscape Mode Optimization',
        description: 'Optimize layout for landscape orientation',
        status: 'enabled',
        impact: 'low',
        action: 'Layout automatically adjusts for landscape mode'
      });
    }

    setOptimizations(opts);
  }, []);

  // Apply mobile optimizations
  const applyOptimization = useCallback((optimizationId: string) => {
    switch (optimizationId) {
      case 'touch-optimization':
        // Enable touch gestures
        document.body.classList.add('touch-optimized');
        break;
      case 'network-optimization':
        // Enable network optimizations
        document.body.classList.add('network-optimized');
        break;
      case 'battery-optimization':
        // Enable battery optimizations
        document.body.classList.add('battery-optimized');
        break;
      case 'memory-optimization':
        // Enable memory optimizations
        document.body.classList.add('memory-optimized');
        break;
    }
  }, []);

  // Touch gesture handlers
  useEffect(() => {
    if (!enabled || !touchGestures.swipeEnabled) return;

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
          console.log('Swipe right detected');
        } else {
          // Swipe left
          console.log('Swipe left detected');
        }
      }

      // Swipe up/down detection
      if (duration < 300 && distanceY > 50 && distanceX < 100) {
        if (endY > startY) {
          // Swipe down
          console.log('Swipe down detected');
        } else {
          // Swipe up
          console.log('Swipe up detected');
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enabled, touchGestures.swipeEnabled]);

  // Update metrics periodically
  useEffect(() => {
    if (!enabled) return;

    const updateMetrics = () => {
      const newMetrics = detectDeviceCapabilities();
      setMetrics(newMetrics);
      generateOptimizations(newMetrics);
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 10000);

    return () => clearInterval(interval);
  }, [enabled, detectDeviceCapabilities, generateOptimizations]);

  // Network status monitoring
  useEffect(() => {
    if (!enabled) return;

    const handleOnline = () => {
      setMetrics(prev => prev ? { ...prev, isOnline: true } : null);
    };

    const handleOffline = () => {
      setMetrics(prev => prev ? { ...prev, isOnline: false } : null);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 left-4 z-50"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 max-w-sm">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5 text-green-500" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Mobile Experience</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <Settings className="w-4 h-4 text-gray-500" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Device Info */}
            <div className="p-4">
              {metrics && (
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Device</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                      {metrics.deviceType}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Screen</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {metrics.screenSize}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Network</span>
                    <div className="flex items-center space-x-1">
                      {metrics.isOnline ? (
                        <Wifi className="w-4 h-4 text-green-500" />
                      ) : (
                        <WifiOff className="w-4 h-4 text-red-500" />
                      )}
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {metrics.networkType}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Battery</span>
                    <div className="flex items-center space-x-1">
                      {metrics.batteryCharging ? (
                        <BatteryCharging className="w-4 h-4 text-green-500" />
                      ) : (
                        <Battery className="w-4 h-4 text-gray-500" />
                      )}
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {metrics.batteryLevel}%
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Touch Gestures */}
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Touch Gestures</h4>
                <div className="space-y-2">
                  {Object.entries(touchGestures).map(([gesture, enabled]) => (
                    <div key={gesture} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                        {gesture.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <button
                        onClick={() => setTouchGestures(prev => ({ ...prev, [gesture]: !enabled }))}
                        className={`w-10 h-6 rounded-full transition-colors ${
                          enabled ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          enabled ? 'translate-x-4' : 'translate-x-0'
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optimizations */}
              {isExpanded && optimizations.length > 0 && (
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Optimizations</h4>
                  <div className="space-y-3">
                    {optimizations.slice(0, 3).map((opt) => (
                      <div key={opt.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-start space-x-2">
                          {opt.status === 'enabled' ? (
                            <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" />
                          ) : opt.status === 'recommended' ? (
                            <AlertTriangle className="w-4 h-4 mt-0.5 text-yellow-500" />
                          ) : (
                            <Info className="w-4 h-4 mt-0.5 text-blue-500" />
                          )}
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {opt.title}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              {opt.description}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              Impact: {opt.impact}
                            </div>
                          </div>
                        </div>
                        {opt.status === 'recommended' && (
                          <button
                            onClick={() => applyOptimization(opt.id)}
                            className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white text-xs py-1 px-2 rounded transition-colors"
                          >
                            Apply
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => {
                    const newMetrics = detectDeviceCapabilities();
                    setMetrics(newMetrics);
                    generateOptimizations(newMetrics);
                  }}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm py-2 px-3 rounded-lg transition-colors"
                >
                  Refresh
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {isExpanded ? 'Less' : 'More'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Toggle Button */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 left-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          title="Show Mobile Experience Monitor"
        >
          <Smartphone className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default MobileExperienceEnhancer;