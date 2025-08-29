import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Hand, 
  Wifi, 
  Battery, 
  WifiOff, 
  BatteryCharging,
  Volume2,
  VolumeX,
  RotateCcw,
  Settings,
  X,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface MobileMetrics {
  isMobile: boolean;
  isOnline: boolean;
  batteryLevel: number;
  isCharging: boolean;
  connectionType: string;
  deviceMemory: number;
  hardwareConcurrency: number;
  touchSupport: boolean;
  orientation: 'portrait' | 'landscape';
}

interface Props {
  enabled?: boolean;
}

export function MobileExperienceEnhancer({ enabled = true }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<MobileMetrics>({
    isMobile: false,
    isOnline: navigator.onLine,
    batteryLevel: 0,
    isCharging: false,
    connectionType: 'unknown',
    deviceMemory: 0,
    hardwareConcurrency: 0,
    touchSupport: false,
    orientation: 'portrait'
  });
  const [optimizations, setOptimizations] = useState<string[]>([]);

  // Detect mobile device
  const detectMobile = useCallback(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    
    setMetrics(prev => ({ ...prev, isMobile }));
    
    // Set touch support
    setMetrics(prev => ({ 
      ...prev, 
      touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0 
    }));
  }, []);

  // Monitor battery status
  const monitorBattery = useCallback(async () => {
    if ('getBattery' in navigator) {
      try {
        const battery = await (navigator as any).getBattery();
        setMetrics(prev => ({ 
          ...prev, 
          batteryLevel: Math.round(battery.level * 100),
          isCharging: battery.charging
        }));
        
        battery.addEventListener('levelchange', () => {
          setMetrics(prev => ({ ...prev, batteryLevel: Math.round(battery.level * 100) }));
        });
        
        battery.addEventListener('chargingchange', () => {
          setMetrics(prev => ({ ...prev, isCharging: battery.charging }));
        });
      } catch (error) {
        console.log('Battery API not supported');
      }
    }
  }, []);

  // Monitor network status
  const monitorNetwork = useCallback(() => {
    const updateNetworkInfo = () => {
      setMetrics(prev => ({ ...prev, isOnline: navigator.onLine }));
      
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setMetrics(prev => ({ 
          ...prev, 
          connectionType: connection.effectiveType || connection.type || 'unknown'
        }));
      }
    };

    window.addEventListener('online', updateNetworkInfo);
    window.addEventListener('offline', updateNetworkInfo);
    
    // Initial check
    updateNetworkInfo();
    
    return () => {
      window.removeEventListener('online', updateNetworkInfo);
      window.removeEventListener('offline', updateNetworkInfo);
    };
  }, []);

  // Monitor device capabilities
  const monitorDeviceCapabilities = useCallback(() => {
    setMetrics(prev => ({
      ...prev,
      deviceMemory: (navigator as any).deviceMemory || 0,
      hardwareConcurrency: navigator.hardwareConcurrency || 0
    }));
  }, []);

  // Monitor orientation
  const monitorOrientation = useCallback(() => {
    const updateOrientation = () => {
      const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
      setMetrics(prev => ({ ...prev, orientation }));
    };

    window.addEventListener('resize', updateOrientation);
    window.addEventListener('orientationchange', updateOrientation);
    
    // Initial check
    updateOrientation();
    
    return () => {
      window.removeEventListener('resize', updateOrientation);
      window.removeEventListener('orientationchange', updateOrientation);
    };
  }, []);

  // Apply mobile optimizations
  const applyOptimizations = useCallback(() => {
    const newOptimizations: string[] = [];
    
    // Touch optimization
    if (metrics.touchSupport) {
      newOptimizations.push('Touch gestures enabled');
      document.body.classList.add('touch-device');
    }
    
    // Battery optimization
    if (metrics.batteryLevel < 20) {
      newOptimizations.push('Low power mode enabled');
      document.body.classList.add('low-power-mode');
    }
    
    // Network optimization
    if (!metrics.isOnline) {
      newOptimizations.push('Offline mode enabled');
      document.body.classList.add('offline-mode');
    }
    
    // Memory optimization
    if (metrics.deviceMemory < 4) {
      newOptimizations.push('Memory optimization enabled');
      document.body.classList.add('memory-optimized');
    }
    
    setOptimizations(newOptimizations);
  }, [metrics]);

  // Initialize monitoring
  useEffect(() => {
    if (!enabled) return;
    
    detectMobile();
    monitorBattery();
    const networkCleanup = monitorNetwork();
    monitorDeviceCapabilities();
    const orientationCleanup = monitorOrientation();
    
    return () => {
      networkCleanup();
      orientationCleanup();
    };
  }, [enabled, detectMobile, monitorBattery, monitorNetwork, monitorDeviceCapabilities, monitorOrientation]);

  // Apply optimizations when metrics change
  useEffect(() => {
    if (enabled) {
      applyOptimizations();
    }
  }, [enabled, metrics, applyOptimizations]);

  // Add mobile-specific CSS classes
  useEffect(() => {
    if (enabled && metrics.isMobile) {
      document.body.classList.add('mobile-device');
      
      // Add orientation class
      document.body.classList.remove('portrait', 'landscape');
      document.body.classList.add(metrics.orientation);
      
      // Add touch class
      if (metrics.touchSupport) {
        document.body.classList.add('touch-device');
      }
    }
    
    return () => {
      document.body.classList.remove('mobile-device', 'portrait', 'landscape', 'touch-device', 'low-power-mode', 'offline-mode', 'memory-optimized');
    };
  }, [enabled, metrics.isMobile, metrics.orientation, metrics.touchSupport]);

  if (!enabled || !metrics.isMobile) return null;

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-32 right-4 z-50 p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Mobile Experience Monitor"
        aria-label="Open mobile experience monitor"
      >
        <Smartphone className="w-6 h-6 text-white" />
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed top-4 right-4 z-50 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 p-6 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-green-500" />
            Mobile Experience
          </h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Close mobile experience monitor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Device Status */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3">Device Status</h4>
            
            <div className="space-y-3">
              {/* Battery */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  {metrics.isCharging ? (
                    <BatteryCharging className="w-5 h-5 text-green-500" />
                  ) : (
                    <Battery className="w-5 h-5 text-gray-500" />
                  )}
                  <span className="text-sm text-gray-700">Battery</span>
                </div>
                <span className={`font-mono text-sm ${
                  metrics.batteryLevel > 50 ? 'text-green-600' : 
                  metrics.batteryLevel > 20 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {metrics.batteryLevel}%
                </span>
              </div>

              {/* Network */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  {metrics.isOnline ? (
                    <Wifi className="w-5 h-5 text-green-500" />
                  ) : (
                    <WifiOff className="w-5 h-5 text-red-500" />
                  )}
                  <span className="text-sm text-gray-700">Network</span>
                </div>
                <span className={`text-sm ${
                  metrics.isOnline ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metrics.isOnline ? metrics.connectionType : 'Offline'}
                </span>
              </div>

              {/* Orientation */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-gray-700">Orientation</span>
                </div>
                <span className="text-sm text-gray-600 capitalize">
                  {metrics.orientation}
                </span>
              </div>
            </div>
          </div>

          {/* Device Capabilities */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3">Capabilities</h4>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Hand className="w-5 h-5 text-purple-500" />
                  <span className="text-sm text-gray-700">Touch Support</span>
                </div>
                <span className={`text-sm ${metrics.touchSupport ? 'text-green-600' : 'text-gray-600'}`}>
                  {metrics.touchSupport ? 'Yes' : 'No'}
                </span>
              </div>

              {metrics.deviceMemory > 0 && (
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">Device Memory</span>
                  <span className="text-sm text-gray-600">{metrics.deviceMemory} GB</span>
                </div>
              )}

              {metrics.hardwareConcurrency > 0 && (
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">CPU Cores</span>
                  <span className="text-sm text-gray-600">{metrics.hardwareConcurrency}</span>
                </div>
              )}
            </div>
          </div>

          {/* Active Optimizations */}
          {optimizations.length > 0 && (
            <div>
              <h4 className="text-lg font-medium text-gray-700 mb-3">Active Optimizations</h4>
              
              <div className="space-y-2">
                {optimizations.map((opt, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-700">{opt}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3">Quick Actions</h4>
            
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  if (metrics.orientation === 'portrait') {
                    screen.orientation?.lock('landscape');
                  } else {
                    screen.orientation?.lock('portrait');
                  }
                }}
                className="px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                disabled={!screen.orientation}
              >
                Rotate Screen
              </button>
              
              <button
                onClick={() => {
                  if (document.body.classList.contains('low-power-mode')) {
                    document.body.classList.remove('low-power-mode');
                  } else {
                    document.body.classList.add('low-power-mode');
                  }
                }}
                className="px-3 py-2 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
              >
                Toggle Power Mode
              </button>
            </div>
          </div>

          {/* Tips */}
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Mobile Tips</h4>
            <div className="text-xs text-gray-600 space-y-1">
              <div>• Use landscape mode for better viewing</div>
              <div>• Enable low power mode when battery is low</div>
              <div>• Touch gestures are optimized for mobile</div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}