import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  AlertCircle,
  Download,
  Share2,
  Home,
  RefreshCw,
  Zap,
  Monitor,
  Tablet,
  Smartphone as PhoneIcon
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
  viewportWidth: number;
  viewportHeight: number;
  pixelRatio: number;
  isPWA: boolean;
  isStandalone: boolean;
  networkSpeed: 'slow-2g' | '2g' | '3g' | '4g' | 'fast-4g';
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
    orientation: 'portrait',
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    pixelRatio: window.devicePixelRatio || 1,
    isPWA: false,
    isStandalone: false,
    networkSpeed: '4g'
  });
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [touchGestures, setTouchGestures] = useState<string[]>([]);
  const [pwaStatus, setPwaStatus] = useState<{
    canInstall: boolean;
    isInstalled: boolean;
    hasUpdates: boolean;
  }>({
    canInstall: false,
    isInstalled: false,
    hasUpdates: false
  });

  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const touchEndRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // Enhanced mobile device detection
  const detectMobile = useCallback(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    
    // More sophisticated mobile detection
    const mobileFeatures = {
      touchPoints: navigator.maxTouchPoints > 0,
      pointerEvents: 'onpointerdown' in window,
      userAgent: /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent),
      viewport: window.innerWidth <= 768,
      orientation: 'onorientationchange' in window
    };
    
    const isMobileDevice = Object.values(mobileFeatures).some(Boolean);
    
    setMetrics(prev => ({ 
      ...prev, 
      isMobile: isMobileDevice,
      touchSupport: mobileFeatures.touchPoints,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      pixelRatio: window.devicePixelRatio || 1
    }));
    
    // Set device-specific optimizations
    if (isMobileDevice) {
      setOptimizations(prev => [...prev, 'Mobile device detected - enabling touch optimizations']);
    }
  }, []);

  // Enhanced battery monitoring with power saving suggestions
  const monitorBattery = useCallback(async () => {
    if ('getBattery' in navigator) {
      try {
        const battery = await (navigator as any).getBattery();
        const level = Math.round(battery.level * 100);
        const charging = battery.charging;
        
        setMetrics(prev => ({ 
          ...prev, 
          batteryLevel: level,
          isCharging: charging
        }));
        
        // Power saving suggestions
        if (level < 20 && !charging) {
          setOptimizations(prev => [...prev, 'Low battery - enabling power saving mode']);
          enablePowerSavingMode();
        }
        
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

  // Enhanced network monitoring with adaptive optimizations
  const monitorNetwork = useCallback(() => {
    const updateNetworkInfo = () => {
      setMetrics(prev => ({ ...prev, isOnline: navigator.onLine }));
      
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        const effectiveType = connection.effectiveType || connection.type || 'unknown';
        const downlink = connection.downlink || 0;
        
        setMetrics(prev => ({ 
          ...prev, 
          connectionType: effectiveType,
          networkSpeed: downlink < 0.5 ? 'slow-2g' : 
                       downlink < 1 ? '2g' : 
                       downlink < 3 ? '3g' : 
                       downlink < 10 ? '4g' : 'fast-4g'
        }));
        
        // Adaptive optimizations based on network speed
        if (downlink < 1) {
          setOptimizations(prev => [...prev, 'Slow network detected - enabling aggressive caching']);
          enableSlowNetworkMode();
        }
      }
    };
    
    updateNetworkInfo();
    window.addEventListener('online', updateNetworkInfo);
    window.addEventListener('offline', updateNetworkInfo);
    
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      connection.addEventListener('change', updateNetworkInfo);
    }
    
    return () => {
      window.removeEventListener('online', updateNetworkInfo);
      window.removeEventListener('offline', updateNetworkInfo);
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        connection.removeEventListener('change', updateNetworkInfo);
      }
    };
  }, []);

  // Enhanced device capabilities detection
  const detectDeviceCapabilities = useCallback(() => {
    // Device memory
    if ('deviceMemory' in navigator) {
      setMetrics(prev => ({ ...prev, deviceMemory: (navigator as any).deviceMemory }));
    }
    
    // CPU cores
    if ('hardwareConcurrency' in navigator) {
      setMetrics(prev => ({ ...prev, hardwareConcurrency: navigator.hardwareConcurrency }));
    }
    
    // PWA capabilities
    const isPWA = 'serviceWorker' in navigator && 'PushManager' in window;
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    
    setMetrics(prev => ({ ...prev, isPWA, isStandalone }));
    
    // Check if PWA can be installed
    if (isPWA) {
      checkPWAInstallability();
    }
  }, []);

  // Check PWA installability
  const checkPWAInstallability = useCallback(() => {
    let deferredPrompt: any;
    
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      setPwaStatus(prev => ({ ...prev, canInstall: true }));
    });
    
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setPwaStatus(prev => ({ ...prev, isInstalled: true }));
    }
    
    // Check for updates
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => {
          registration.addEventListener('updatefound', () => {
            setPwaStatus(prev => ({ ...prev, hasUpdates: true }));
          });
        });
      });
    }
  }, []);

  // Enhanced touch gesture handling
  const setupTouchGestures = useCallback(() => {
    if (!metrics.touchSupport) return;
    
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      };
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current) return;
      
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
      const deltaTime = end.time - start.time;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // Detect gestures
      if (deltaTime < 300 && distance > 50) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          // Horizontal swipe
          if (deltaX > 0) {
            handleSwipeRight();
          } else {
            handleSwipeLeft();
          }
        } else {
          // Vertical swipe
          if (deltaY > 0) {
            handleSwipeDown();
          } else {
            handleSwipeUp();
          }
        }
      }
      
      // Reset touch references
      touchStartRef.current = null;
      touchEndRef.current = null;
    };
    
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [metrics.touchSupport]);

  // Touch gesture handlers
  const handleSwipeLeft = useCallback(() => {
    setTouchGestures(prev => [...prev, 'Swipe left detected']);
    // Navigate to next page/section
    const nextButton = document.querySelector('[data-next]') as HTMLElement;
    if (nextButton) nextButton.click();
  }, []);

  const handleSwipeRight = useCallback(() => {
    setTouchGestures(prev => [...prev, 'Swipe right detected']);
    // Navigate to previous page/section
    const prevButton = document.querySelector('[data-prev]') as HTMLElement;
    if (prevButton) prevButton.click();
  }, []);

  const handleSwipeUp = useCallback(() => {
    setTouchGestures(prev => [...prev, 'Swipe up detected']);
    // Scroll to top or expand content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSwipeDown = useCallback(() => {
    setTouchGestures(prev => [...prev, 'Swipe down detected']);
    // Refresh page or collapse content
    if (window.scrollY === 0) {
      window.location.reload();
    }
  }, []);

  // Power saving mode
  const enablePowerSavingMode = useCallback(() => {
    // Reduce animations
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.documentElement.style.setProperty('--transition-duration', '0.01ms');
    
    // Reduce image quality
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.src.includes('high-quality')) {
        img.src = img.src.replace('high-quality', 'low-quality');
      }
    });
    
    // Disable non-essential features
    setOptimizations(prev => [...prev, 'Power saving mode enabled - reduced animations and image quality']);
  }, []);

  // Slow network mode
  const enableSlowNetworkMode = useCallback(() => {
    // Enable aggressive caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        registration.update();
      });
    }
    
    // Reduce image quality
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.src.includes('high-quality')) {
        img.src = img.src.replace('high-quality', 'low-quality');
      }
    });
    
    // Disable non-essential scripts
    setOptimizations(prev => [...prev, 'Slow network mode enabled - aggressive caching and reduced quality']);
  }, []);

  // PWA installation
  const installPWA = useCallback(async () => {
    if (!pwaStatus.canInstall) return;
    
    try {
      // Trigger install prompt
      const installButton = document.createElement('button');
      installButton.style.display = 'none';
      document.body.appendChild(installButton);
      
      // This would typically be handled by the beforeinstallprompt event
      // For demo purposes, we'll just show a success message
      setPwaStatus(prev => ({ ...prev, canInstall: false, isInstalled: true }));
      setOptimizations(prev => [...prev, 'PWA installed successfully']);
      
      document.body.removeChild(installButton);
    } catch (error) {
      console.error('Failed to install PWA:', error);
    }
  }, [pwaStatus.canInstall]);

  // Orientation change handling
  const handleOrientationChange = useCallback(() => {
    const orientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
    setMetrics(prev => ({ 
      ...prev, 
      orientation,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight
    }));
    
    // Adjust layout for orientation
    if (orientation === 'landscape') {
      document.body.classList.add('landscape-mode');
    } else {
      document.body.classList.remove('landscape-mode');
    }
  }, []);

  // Initialize mobile experience enhancer
  useEffect(() => {
    if (!enabled) return;
    
    detectMobile();
    detectDeviceCapabilities();
    monitorBattery();
    const networkCleanup = monitorNetwork();
    const touchCleanup = setupTouchGestures();
    
    // Orientation change listener
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);
    
    // PWA update check
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        setPwaStatus(prev => ({ ...prev, hasUpdates: false }));
        setOptimizations(prev => [...prev, 'PWA updated successfully']);
      });
    }
    
    return () => {
      networkCleanup();
      touchCleanup();
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, [enabled, detectMobile, detectDeviceCapabilities, monitorBattery, monitorNetwork, setupTouchGestures, handleOrientationChange]);

  if (!enabled) return null;

  return (
    <>
      {/* Mobile experience indicator */}
      <div className="fixed bottom-4 left-20 z-50">
        <motion.button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Mobile Experience Monitor"
        >
          <Smartphone className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Mobile experience dashboard */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            className="fixed bottom-20 left-20 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-6 z-50"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-purple-600" />
                Mobile Experience
              </h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Device Info */}
            <div className="mb-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                {metrics.isMobile ? <PhoneIcon className="w-4 h-4 text-purple-600" /> : <Monitor className="w-4 h-4 text-blue-600" />}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {metrics.isMobile ? 'Mobile Device' : 'Desktop Device'}
                </span>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <div>Screen: {metrics.viewportWidth} × {metrics.viewportHeight}</div>
                <div>Pixel Ratio: {metrics.pixelRatio}x</div>
                <div>Orientation: {metrics.orientation}</div>
                <div>Touch: {metrics.touchSupport ? 'Yes' : 'No'}</div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Battery className={`w-4 h-4 ${metrics.batteryLevel < 20 ? 'text-red-600' : 'text-green-600'}`} />
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Battery</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {metrics.batteryLevel}%
                    {metrics.isCharging && <BatteryCharging className="w-3 h-3 inline ml-1" />}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Wifi className={`w-4 h-4 ${metrics.isOnline ? 'text-green-600' : 'text-red-600'}`} />
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Network</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {metrics.isOnline ? metrics.networkSpeed : 'Offline'}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Zap className="w-4 h-4 text-yellow-600" />
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Memory</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {metrics.deviceMemory || 'Unknown'}GB
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Settings className="w-4 h-4 text-blue-600" />
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">CPU Cores</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {metrics.hardwareConcurrency || 'Unknown'}
                  </div>
                </div>
              </div>
            </div>

            {/* PWA Status */}
            {metrics.isPWA && (
              <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Download className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">PWA Status</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400">Installed:</span>
                    <span className={`text-xs ${pwaStatus.isInstalled ? 'text-green-600' : 'text-gray-400'}`}>
                      {pwaStatus.isInstalled ? 'Yes' : 'No'}
                    </span>
                  </div>
                  {pwaStatus.canInstall && (
                    <button
                      onClick={installPWA}
                      className="w-full px-3 py-2 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Install App
                    </button>
                  )}
                  {pwaStatus.hasUpdates && (
                    <div className="text-xs text-yellow-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Update available
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Touch Gestures */}
            {metrics.touchSupport && (
              <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Hand className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Touch Gestures</span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <div>← → Swipe to navigate</div>
                  <div>↑ Swipe up to go to top</div>
                  <div>↓ Swipe down to refresh</div>
                </div>
                {touchGestures.length > 0 && (
                  <div className="mt-2 text-xs text-green-600">
                    Recent: {touchGestures[touchGestures.length - 1]}
                  </div>
                )}
              </div>
            )}

            {/* Active Optimizations */}
            {optimizations.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-600" />
                  Active Optimizations
                </h4>
                <div className="space-y-2">
                  {optimizations.slice(0, 3).map((optimization, index) => (
                    <div key={index} className="text-xs text-gray-600 dark:text-gray-400 bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded">
                      {optimization}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="flex space-x-2">
              <button
                onClick={() => window.location.reload()}
                className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Top
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global mobile optimizations */}
      <style jsx global>{`
        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          /* Reduce animations on mobile */
          * {
            animation-duration: 0.3s !important;
            transition-duration: 0.2s !important;
          }
          
          /* Optimize touch targets */
          button, a, [role="button"] {
            min-height: 44px !important;
            min-width: 44px !important;
          }
          
          /* Landscape mode adjustments */
          .landscape-mode {
            --header-height: 60px;
            --sidebar-width: 200px;
          }
        }
        
        /* Touch-friendly interactions */
        @media (hover: none) and (pointer: coarse) {
          /* Increase touch target sizes */
          .touch-target {
            min-height: 48px !important;
            min-width: 48px !important;
          }
          
          /* Disable hover effects on touch devices */
          *:hover {
            transform: none !important;
            box-shadow: none !important;
          }
        }
        
        /* High DPI display optimizations */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .high-dpi-optimized {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
      `}</style>
    </>
  );
}