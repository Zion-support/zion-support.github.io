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
    
    let type: DeviceInfo['type'] = 'desktop';
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      type = screen.width < 768 ? 'mobile' : 'tablet';
    }

    const orientation = screen.width > screen.height ? 'landscape' : 'portrait';
    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const deviceInfo: DeviceInfo = {
      type,
      orientation,
      screenSize: { width: screen.width, height: screen.height },
      pixelRatio: window.devicePixelRatio || 1,
      touchSupport,
      connection: connection ? {
        effectiveType: connection.effectiveType || 'unknown',
        downlink: connection.downlink || 0,
        rtt: connection.rtt || 0
      } : undefined
    };

    setDeviceInfo(deviceInfo);
    return deviceInfo;
  }, []);

  // Apply mobile optimizations
  const applyMobileOptimizations = useCallback((device: DeviceInfo) => {
    const newOptimizations: MobileOptimizations = { ...optimizations };

    // Touch gestures
    if (device.touchSupport) {
      newOptimizations.touchGestures = true;
      enableTouchGestures();
    }

    // Responsive images
    if (device.type === 'mobile' || device.type === 'tablet') {
      newOptimizations.responsiveImages = true;
      optimizeImagesForDevice(device);
    }

    // Lazy loading for mobile
    if (device.type === 'mobile') {
      newOptimizations.lazyLoading = true;
      enableLazyLoading();
    }

    // Service Worker for offline support
    if ('serviceWorker' in navigator) {
      newOptimizations.serviceWorker = true;
      registerServiceWorker();
    }

    // Connection-aware optimizations
    if (device.connection) {
      optimizeForConnection(device.connection);
    }

    setOptimizations(newOptimizations);
  }, [optimizations]);

  // Enable touch gestures
  const enableTouchGestures = useCallback(() => {
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
      const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));

      // Swipe detection
      if (duration < 300 && distance > 50) {
        const direction = getSwipeDirection(startX, startY, endX, endY);
        handleSwipe(direction);
      }

      // Tap detection
      if (duration < 200 && distance < 10) {
        handleTap(endX, endY);
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Get swipe direction
  const getSwipeDirection = (startX: number, startY: number, endX: number, endY: number) => {
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    if (absDeltaX > absDeltaY) {
      return deltaX > 0 ? 'right' : 'left';
    } else {
      return deltaY > 0 ? 'down' : 'up';
    }
  };

  // Handle swipe gestures
  const handleSwipe = useCallback((direction: string) => {
    switch (direction) {
      case 'left':
        // Navigate to next page/section
        console.log('Swiped left - next');
        break;
      case 'right':
        // Navigate to previous page/section
        console.log('Swiped right - previous');
        break;
      case 'up':
        // Scroll up or show more content
        console.log('Swiped up - scroll up');
        break;
      case 'down':
        // Scroll down or hide content
        console.log('Swiped down - scroll down');
        break;
    }
  }, []);

  // Handle tap gestures
  const handleTap = useCallback((x: number, y: number) => {
    // Add tap feedback at coordinates
    const tapFeedback = document.createElement('div');
    tapFeedback.className = 'tap-feedback';
    tapFeedback.style.cssText = `
      position: fixed;
      left: ${x - 25}px;
      top: ${y - 25}px;
      width: 50px;
      height: 50px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      animation: tapRipple 0.6s ease-out;
    `;

    document.body.appendChild(tapFeedback);
    setTimeout(() => document.body.removeChild(tapFeedback), 600);
  }, []);

  // Optimize images for device
  const optimizeImagesForDevice = useCallback((device: DeviceInfo) => {
    const images = document.querySelectorAll('img[data-srcset]');
    images.forEach(img => {
      const imgElement = img as HTMLImageElement;
      if (device.pixelRatio > 1) {
        // Use high-DPI images for retina displays
        imgElement.srcset = imgElement.dataset.srcset || '';
      }
    });
  }, []);

  // Enable lazy loading
  const enableLazyLoading = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }, []);

  // Register service worker
  const registerServiceWorker = useCallback(async () => {
    try {
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content available
                showUpdateNotification();
              }
            });
          }
        });
      }
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }, []);

  // Show update notification
  const showUpdateNotification = useCallback(() => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Zion Tech Group', {
        body: 'New content available. Refresh to update.',
        icon: '/favicon.ico'
      });
    }
  }, []);

  // Optimize for connection
  const optimizeForConnection = useCallback((connection: DeviceInfo['connection']) => {
    if (!connection) return;

    const { effectiveType, downlink } = connection;
    
    if (effectiveType === 'slow-2g' || effectiveType === '2g' || downlink < 1) {
      setConnectionStatus('poor');
      // Disable heavy features
      disableHeavyFeatures();
    } else if (effectiveType === '3g' || downlink < 5) {
      setConnectionStatus('fair');
      // Enable basic optimizations
      enableBasicOptimizations();
    } else {
      setConnectionStatus('good');
      // Enable all features
      enableAllFeatures();
    }
  }, []);

  // Disable heavy features for slow connections
  const disableHeavyFeatures = useCallback(() => {
    // Disable animations
    document.documentElement.classList.add('reduced-motion');
    // Disable high-res images
    document.documentElement.classList.add('low-bandwidth');
  }, []);

  // Enable basic optimizations
  const enableBasicOptimizations = useCallback(() => {
    // Enable basic animations
    document.documentElement.classList.remove('reduced-motion');
    // Keep low-bandwidth mode
    document.documentElement.classList.add('low-bandwidth');
  }, []);

  // Enable all features
  const enableAllFeatures = useCallback(() => {
    // Enable all animations
    document.documentElement.classList.remove('reduced-motion');
    // Enable high-res content
    document.documentElement.classList.remove('low-bandwidth');
  }, []);

  // Request notification permission
  const requestNotificationPermission = useCallback(async () => {
    if ('Notification' in window && Notification.permission === 'default') {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        setOptimizations(prev => ({ ...prev, pushNotifications: true }));
      }
    }
  }, []);

  // Show app install prompt
  const showAppInstallPrompt = useCallback(() => {
    if ('BeforeInstallPromptEvent' in window) {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        setOptimizations(prev => ({ ...prev, appInstallPrompt: true }));
      });
    }
  }, []);

  // Initialize mobile experience
  useEffect(() => {
    if (!enabled) return;

    const device = detectDevice();
    applyMobileOptimizations(device);
    
    const cleanup = enableTouchGestures();
    showAppInstallPrompt();

    return cleanup;
  }, [enabled, detectDevice, applyMobileOptimizations, enableTouchGestures, showAppInstallPrompt]);

  // Add CSS for mobile optimizations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .tap-feedback {
        animation: tapRipple 0.6s ease-out;
      }
      
      @keyframes tapRipple {
        0% {
          transform: scale(0);
          opacity: 1;
        }
        100% {
          transform: scale(2);
          opacity: 0;
        }
      }
      
      .low-bandwidth img {
        max-width: 100%;
        height: auto;
      }
      
      .low-bandwidth video {
        display: none;
      }
      
      @media (max-width: 768px) {
        .mobile-optimized {
          font-size: 16px;
          line-height: 1.5;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (!enabled || !deviceInfo) return null;

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setShowPanel(true)}
        className="fixed bottom-6 left-6 z-50 p-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Mobile experience settings"
        title="Mobile Experience Settings"
      >
        <PhoneIcon className="w-6 h-6" />
      </motion.button>

      {/* Mobile Experience Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setShowPanel(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-6 h-6 text-green-600" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Mobile Experience
                  </h2>
                </div>
                <button
                  onClick={() => setShowPanel(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label="Close mobile experience panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Device Information */}
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Device Information
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {deviceInfo.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <RotateCcw className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {deviceInfo.orientation}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Maximize className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {deviceInfo.screenSize.width} × {deviceInfo.screenSize.height}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {deviceInfo.pixelRatio}x
                      </span>
                    </div>
                  </div>

                  {/* Connection Status */}
                  {deviceInfo.connection && (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Wifi className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Connection: {deviceInfo.connection.effectiveType}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Signal className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Speed: {deviceInfo.connection.downlink} Mbps
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Battery className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Latency: {deviceInfo.connection.rtt}ms
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Optimizations Status */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Active Optimizations
                  </h3>
                  
                  <div className="space-y-3">
                    {Object.entries(optimizations).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <div className="flex items-center space-x-2">
                          {value ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-yellow-500" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Touch Gestures Info */}
                {deviceInfo.touchSupport && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Touch Gestures
                    </h3>
                    
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Hand className="w-4 h-4" />
                        <span>Swipe left/right to navigate</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TouchIcon className="w-4 h-4" />
                        <span>Tap for feedback</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Actions
                  </h3>
                  
                  <div className="space-y-2">
                    <button
                      onClick={requestNotificationPermission}
                      className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Enable Push Notifications
                    </button>
                    
                    {optimizations.appInstallPrompt && (
                      <button
                        onClick={() => {/* Trigger install prompt */}}
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Install App
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Info className="w-4 h-4 text-blue-500" />
                  <span>Optimized for {deviceInfo.type} devices</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}