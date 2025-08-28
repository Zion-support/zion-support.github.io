import React, { useEffect, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Wifi, 
  Battery, 
  Signal, 
  Hand, 
  RotateCcw,
  Maximize,
  Minimize,
  Smartphone as PhoneIcon,
  X,
  Hand as TouchIcon,
  Zap,
  Settings,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  orientation: 'portrait' | 'landscape';
  screenSize: { width: number; height: number };
  pixelRatio: number;
  touchSupport: boolean;
  connection?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  };
}

interface MobileOptimizations {
  touchGestures: boolean;
  responsiveImages: boolean;
  lazyLoading: boolean;
  serviceWorker: boolean;
  offlineSupport: boolean;
  pushNotifications: boolean;
  appInstallPrompt: boolean;
}

export function MobileExperienceEnhancer({ 
  enabled = true 
}: { 
  enabled?: boolean; 
}) {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [optimizations, setOptimizations] = useState<MobileOptimizations>({
    touchGestures: true,
    responsiveImages: true,
    lazyLoading: true,
    serviceWorker: false,
    offlineSupport: false,
    pushNotifications: false,
    appInstallPrompt: false
  });
  const [showPanel, setShowPanel] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<string>('good');

  // Detect device information
  const detectDevice = useCallback(() => {
    const userAgent = navigator.userAgent;
    const screen = window.screen;
    const connection = (navigator as any).connection;
    
    // Determine device type
    let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    if (/Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      type = screen.width <= 768 ? 'mobile' : 'tablet';
    }
    
    // Get orientation
    const orientation = screen.width > screen.height ? 'landscape' : 'portrait';
    
    // Get connection info
    const connectionInfo = connection ? {
      effectiveType: connection.effectiveType || 'unknown',
      downlink: connection.downlink || 0,
      rtt: connection.rtt || 0
    } : undefined;
    
    const device: DeviceInfo = {
      type,
      orientation,
      screenSize: { width: screen.width, height: screen.height },
      pixelRatio: window.devicePixelRatio || 1,
      touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
      connection: connectionInfo
    };
    
    setDeviceInfo(device);
    return device;
  }, []);

  // Apply mobile-specific optimizations
  const applyMobileOptimizations = useCallback((device: DeviceInfo) => {
    const newOptimizations: MobileOptimizations = { ...optimizations };
    
    if (device.type === 'mobile') {
      newOptimizations.touchGestures = true;
      newOptimizations.responsiveImages = true;
      newOptimizations.lazyLoading = true;
      
      // Enable service worker for offline support on mobile
      if ('serviceWorker' in navigator) {
        newOptimizations.serviceWorker = true;
        newOptimizations.offlineSupport = true;
      }
      
      // Enable push notifications if supported
      if ('Notification' in window && Notification.permission !== 'denied') {
        newOptimizations.pushNotifications = true;
      }
    }
    
    setOptimizations(newOptimizations);
  }, [optimizations]);

  // Enable touch gestures
  const enableTouchGestures = useCallback(() => {
    if (!optimizations.touchGestures) return;
    
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientX;
      startTime = Date.now();
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const endTime = Date.now();
      
      const deltaX = endX - startX;
      const deltaY = endY - startY;
      const deltaTime = endTime - startTime;
      
      // Detect swipe gestures
      if (deltaTime < 300) {
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
          // Horizontal swipe
          if (deltaX > 0) {
            console.log('Swipe right detected');
          } else {
            console.log('Swipe left detected');
          }
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
          // Vertical swipe
          if (deltaY > 0) {
            console.log('Swipe down detected');
          } else {
            console.log('Swipe up detected');
          }
        }
      }
    };
    
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [optimizations.touchGestures]);

  // Register service worker for offline support
  const registerServiceWorker = useCallback(async () => {
    if (!optimizations.serviceWorker || !('serviceWorker' in navigator)) return;
    
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered:', registration);
      
      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content available
              setOptimizations(prev => ({ ...prev, hasUpdates: true }));
            }
          });
        }
      });
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }, [optimizations.serviceWorker]);

  // Optimize for connection speed
  const optimizeForConnection = useCallback((connection: DeviceInfo['connection']) => {
    if (!connection) return;
    
    let status = 'good';
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      status = 'slow';
      // Disable heavy features on slow connections
      setOptimizations(prev => ({
        ...prev,
        responsiveImages: false,
        lazyLoading: true
      }));
    } else if (connection.effectiveType === '3g') {
      status = 'moderate';
    }
    
    setConnectionStatus(status);
  }, []);

  // Show app install prompt
  const showAppInstallPrompt = useCallback(() => {
    if (!optimizations.appInstallPrompt) return;
    
    let deferredPrompt: any;
    
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      
      // Show custom install button or prompt
      console.log('App install prompt available');
    });
    
    window.addEventListener('appinstalled', () => {
      console.log('App installed successfully');
      setOptimizations(prev => ({ ...prev, appInstallPrompt: false }));
    });
  }, [optimizations.appInstallPrompt]);

  // Initialize optimizations
  useEffect(() => {
    if (!enabled) return;
    
    const device = detectDevice();
    applyMobileOptimizations(device);
    const cleanup = enableTouchGestures();
    registerServiceWorker();
    showAppInstallPrompt();
    
    if (device.connection) {
      optimizeForConnection(device.connection);
    }
    
    return cleanup;
  }, [enabled, detectDevice, applyMobileOptimizations, enableTouchGestures, registerServiceWorker, showAppInstallPrompt, optimizeForConnection]);

  // Monitor connection changes
  useEffect(() => {
    if (!deviceInfo?.connection) return;
    
    const handleConnectionChange = () => {
      const connection = (navigator as any).connection;
      if (connection) {
        const newConnection = {
          effectiveType: connection.effectiveType || 'unknown',
          downlink: connection.downlink || 0,
          rtt: connection.rtt || 0
        };
        optimizeForConnection(newConnection);
      }
    };
    
    if ((navigator as any).connection) {
      (navigator as any).connection.addEventListener('change', handleConnectionChange);
      return () => {
        (navigator as any).connection.removeEventListener('change', handleConnectionChange);
      };
    }
  }, [deviceInfo?.connection, optimizeForConnection]);

  if (!enabled) return null;

  return (
    <>
      {/* Floating action button to show device info */}
      <motion.button
        onClick={() => setShowPanel(true)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Mobile Experience Info"
      >
        <TouchIcon size={24} />
      </motion.button>

      {/* Device info panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setShowPanel(false)}
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Mobile Experience</h3>
                <button
                  onClick={() => setShowPanel(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>

              {deviceInfo && (
                <div className="space-y-4">
                  {/* Device Info */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Device Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span className="capitalize">{deviceInfo.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Orientation:</span>
                        <span className="capitalize">{deviceInfo.orientation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Screen:</span>
                        <span>{deviceInfo.screenSize.width} × {deviceInfo.screenSize.height}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pixel Ratio:</span>
                        <span>{deviceInfo.pixelRatio}x</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Touch Support:</span>
                        <span>{deviceInfo.touchSupport ? 'Yes' : 'No'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Connection Info */}
                  {deviceInfo.connection && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Connection</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Type:</span>
                          <span className="capitalize">{deviceInfo.connection.effectiveType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Speed:</span>
                          <span>{deviceInfo.connection.downlink} Mbps</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Latency:</span>
                          <span>{deviceInfo.connection.rtt}ms</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Status:</span>
                          <span className={`capitalize ${
                            connectionStatus === 'good' ? 'text-green-600' : 
                            connectionStatus === 'moderate' ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {connectionStatus}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Active Optimizations */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Active Optimizations</h4>
                    <div className="space-y-2">
                      {Object.entries(optimizations).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-sm capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <div className="flex items-center">
                            {value ? (
                              <CheckCircle size={16} className="text-green-600" />
                            ) : (
                              <AlertCircle size={16} className="text-gray-400" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowPanel(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}