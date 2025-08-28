import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Wifi, 
  Battery, 
  Hand, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut,
  Settings,
  X,
  Settings,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

interface MobileOptimizations {
  touchOptimized: boolean;
  gestureSupport: boolean;
  responsiveImages: boolean;
  mobileNavigation: boolean;
  performanceMode: boolean;
  offlineSupport: boolean;
  pushNotifications: boolean;
}

interface MobileExperienceEnhancerProps {
  enabled: boolean;
}

export function MobileExperienceEnhancer({ enabled }: MobileExperienceEnhancerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [optimizations, setOptimizations] = useState<MobileOptimizations>({
    touchOptimized: false,
    gestureSupport: false,
    responsiveImages: false,
    mobileNavigation: false,
    performanceMode: false,
    offlineSupport: false,
    pushNotifications: false
  });

  const [deviceInfo, setDeviceInfo] = useState({
    userAgent: '',
    screenSize: '',
    touchSupport: false,
    batteryLevel: 0,
    connectionType: '',
    memoryInfo: null as any
  });

  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const gestureAreaRef = useRef<HTMLDivElement>(null);

  // Detect device type and capabilities
  const detectDeviceCapabilities = useCallback(() => {
    const userAgent = navigator.userAgent;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    
    // Determine device type
    let detectedType: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    if (screenWidth <= 768) {
      detectedType = 'mobile';
    } else if (screenWidth <= 1024) {
      detectedType = 'tablet';
    }
    
    setDeviceType(detectedType);

    // Check touch support
    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Get battery information
    let batteryLevel = 0;
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        batteryLevel = Math.round(battery.level * 100);
        setDeviceInfo(prev => ({ ...prev, batteryLevel }));
      });
    }

    // Get connection information
    let connectionType = 'unknown';
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      connectionType = connection.effectiveType || connection.type || 'unknown';
    }

    // Get memory information
    let memoryInfo = null;
    if ('memory' in performance) {
      memoryInfo = (performance as any).memory;
    }

    setDeviceInfo({
      userAgent: userAgent.substring(0, 100) + '...',
      screenSize: `${screenWidth}x${screenHeight}`,
      touchSupport,
      batteryLevel,
      connectionType,
      memoryInfo
    });
  }, []);

  // Apply mobile optimizations
  const applyMobileOptimizations = useCallback((newOptimizations: MobileOptimizations) => {
    const root = document.documentElement;
    const body = document.body;

    // Touch optimization
    if (newOptimizations.touchOptimized) {
      root.classList.add('touch-optimized');
      body.style.setProperty('--touch-target-size', '44px');
      body.style.setProperty('--touch-spacing', '8px');
    } else {
      root.classList.remove('touch-optimized');
      body.style.removeProperty('--touch-target-size');
      body.style.removeProperty('--touch-spacing');
    }

    // Performance mode
    if (newOptimizations.performanceMode) {
      root.classList.add('performance-mode');
      body.style.setProperty('--animation-duration', '0.2s');
      body.style.setProperty('--transition-duration', '0.2s');
    } else {
      root.classList.remove('performance-mode');
      body.style.removeProperty('--animation-duration');
      body.style.removeProperty('--transition-duration');
    }

    // Save optimizations
    localStorage.setItem('mobile-optimizations', JSON.stringify(newOptimizations));
  }, []);

  // Setup touch gestures
  const setupTouchGestures = useCallback(() => {
    if (!optimizations.gestureSupport || !gestureAreaRef.current) return;

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
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;
      const deltaTime = Date.now() - touchStartRef.current.time;

      // Swipe detection
      if (deltaTime < 300) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX > 50) {
            // Swipe right - go back
            if (window.history.length > 1) {
              window.history.back();
            }
          } else if (deltaX < -50) {
            // Swipe left - go forward
            window.history.forward();
          }
        } else {
          if (deltaY > 50) {
            // Swipe down - refresh
            window.location.reload();
          }
        }
      }

      touchStartRef.current = null;
    };

    const gestureArea = gestureAreaRef.current;
    gestureArea.addEventListener('touchstart', handleTouchStart);
    gestureArea.addEventListener('touchend', handleTouchEnd);

    return () => {
      gestureArea.removeEventListener('touchstart', handleTouchStart);
      gestureArea.removeEventListener('touchend', handleTouchEnd);
    };
  }, [optimizations.gestureSupport]);

  // Setup responsive images
  const setupResponsiveImages = useCallback(() => {
    if (!optimizations.responsiveImages) return;

    const images = document.querySelectorAll('img[data-srcset]');
    images.forEach(img => {
      const imgElement = img as HTMLImageElement;
      if (imgElement.dataset.srcset) {
        imgElement.srcset = imgElement.dataset.srcset;
      }
    });
  }, [optimizations.responsiveImages]);

  // Setup mobile navigation
  const setupMobileNavigation = useCallback(() => {
    if (!optimizations.mobileNavigation) return;

    // Add mobile-specific navigation enhancements
    const nav = document.querySelector('nav, [role="navigation"]');
    if (nav) {
      nav.classList.add('mobile-optimized');
    }

    // Add mobile menu toggle functionality
    const menuToggle = document.querySelector('[data-mobile-menu-toggle]');
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        const mobileMenu = document.querySelector('[data-mobile-menu]');
        if (mobileMenu) {
          mobileMenu.classList.toggle('open');
        }
      });
    }
  }, [optimizations.mobileNavigation]);

  // Setup offline support
  const setupOfflineSupport = useCallback(() => {
    if (!optimizations.offlineSupport) return;

    // Register service worker for offline functionality
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log('ServiceWorker registration failed:', error);
      });
    }

    // Add offline/online event listeners
    const handleOnline = () => {
      document.body.classList.remove('offline');
      // Show online notification
      if (window.showNotification) {
        window.showNotification('Back online!', 'success');
      }
    };

    const handleOffline = () => {
      document.body.classList.add('offline');
      // Show offline notification
      if (window.showNotification) {
        window.showNotification('You are offline', 'warning');
      }
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [optimizations.offlineSupport]);

  // Setup push notifications
  const setupPushNotifications = useCallback(() => {
    if (!optimizations.pushNotifications) return;

    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Notification permission granted');
        }
      });
    }
  }, [optimizations.pushNotifications]);

  // Load saved optimizations
  useEffect(() => {
    const savedOptimizations = localStorage.getItem('mobile-optimizations');
    if (savedOptimizations) {
      try {
        const parsed = JSON.parse(savedOptimizations);
        setOptimizations(parsed);
        applyMobileOptimizations(parsed);
      } catch (error) {
        console.warn('Failed to parse saved mobile optimizations');
      }
    }
  }, [applyMobileOptimizations]);

  // Apply optimizations when they change
  useEffect(() => {
    applyMobileOptimizations(optimizations);
  }, [optimizations, applyMobileOptimizations]);

  // Setup device detection and optimizations
  useEffect(() => {
    detectDeviceCapabilities();
    
    const cleanupGestures = setupTouchGestures();
    const cleanupOffline = setupOfflineSupport();
    
    setupResponsiveImages();
    setupMobileNavigation();
    setupPushNotifications();

    return () => {
      cleanupGestures?.();
      cleanupOffline?.();
    };
  }, [
    detectDeviceCapabilities,
    setupTouchGestures,
    setupOfflineSupport,
    setupResponsiveImages,
    setupMobileNavigation,
    setupPushNotifications
  ]);

  // Add CSS for mobile optimizations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --touch-target-size: 44px;
        --touch-spacing: 8px;
      }
      
      .touch-optimized button,
      .touch-optimized a,
      .touch-optimized [role="button"] {
        min-height: var(--touch-target-size);
        min-width: var(--touch-target-size);
        padding: var(--touch-spacing);
      }
      
      .touch-optimized input,
      .touch-optimized select,
      .touch-optimized textarea {
        min-height: var(--touch-target-size);
        font-size: 16px; /* Prevents zoom on iOS */
      }
      
      .performance-mode * {
        animation-duration: 0.2s !important;
        transition-duration: 0.2s !important;
      }
      
      .mobile-optimized {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        z-index: 1000;
      }
      
      .offline {
        opacity: 0.7;
      }
      
      .offline::before {
        content: "Offline";
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #f59e0b;
        color: white;
        text-align: center;
        padding: 8px;
        z-index: 9999;
      }
      
      @media (max-width: 768px) {
        .mobile-hidden {
          display: none !important;
        }
        
        .mobile-visible {
          display: block !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Mobile Experience Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Mobile Experience Settings"
        aria-expanded={isOpen}
        aria-controls="mobile-experience-panel"
      >
        <Smartphone className="w-6 h-6" />
      </motion.button>

      {/* Gesture Area for Touch Gestures */}
      <div
        ref={gestureAreaRef}
        className="fixed inset-0 pointer-events-none z-30"
        aria-hidden="true"
      />

      {/* Mobile Experience Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 right-4 z-50 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 p-6"
            id="mobile-experience-panel"
            role="dialog"
            aria-labelledby="mobile-experience-title"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 id="mobile-experience-title" className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-green-500" />
                Mobile Experience
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close mobile experience settings"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Device Information */}
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                {deviceType === 'mobile' && <Smartphone className="w-4 h-4 text-blue-500" />}
                {deviceType === 'tablet' && <Tablet className="w-4 h-4 text-purple-500" />}
                {deviceType === 'desktop' && <Monitor className="w-4 h-4 text-gray-500" />}
                <span className="text-sm font-medium text-gray-700 capitalize">{deviceType}</span>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <div>Screen: {deviceInfo.screenSize}</div>
                <div>Touch: {deviceInfo.touchSupport ? 'Yes' : 'No'}</div>
                <div>Connection: {deviceInfo.connectionType}</div>
                {deviceInfo.batteryLevel > 0 && <div>Battery: {deviceInfo.batteryLevel}%</div>}
              </div>
            </div>

            {/* Optimizations */}
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={optimizations.touchOptimized}
                  onChange={(e) => setOptimizations(prev => ({ ...prev, touchOptimized: e.target.checked }))}
                  className="w-4 h-4 text-green-500 rounded focus:ring-green-500"
                />
                <Hand className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Touch Optimized</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={optimizations.gestureSupport}
                  onChange={(e) => setOptimizations(prev => ({ ...prev, gestureSupport: e.target.checked }))}
                  className="w-4 h-4 text-green-500 rounded focus:ring-green-500"
                />
                <RotateCcw className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Gesture Support</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={optimizations.responsiveImages}
                  onChange={(e) => setOptimizations(prev => ({ ...prev, responsiveImages: e.target.checked }))}
                  className="w-4 h-4 text-green-500 rounded focus:ring-green-500"
                />
                <ZoomIn className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Responsive Images</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={optimizations.mobileNavigation}
                  onChange={(e) => setOptimizations(prev => ({ ...prev, mobileNavigation: e.target.checked }))}
                  className="w-4 h-4 text-green-500 rounded focus:ring-green-500"
                />
                <Settings className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Mobile Navigation</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={optimizations.performanceMode}
                  onChange={(e) => setOptimizations(prev => ({ ...prev, performanceMode: e.target.checked }))}
                  className="w-4 h-4 text-green-500 rounded focus:ring-green-500"
                />
                <Battery className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Performance Mode</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={optimizations.offlineSupport}
                  onChange={(e) => setOptimizations(prev => ({ ...prev, offlineSupport: e.target.checked }))}
                  className="w-4 h-4 text-green-500 rounded focus:ring-green-500"
                />
                <Wifi className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Offline Support</span>
              </label>
            </div>

            {/* Status Indicators */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Optimizations applied</span>
              </div>
              {deviceType === 'mobile' && (
                <div className="flex items-center gap-2 text-sm text-blue-600 mt-1">
                  <Info className="w-4 h-4" />
                  <span>Mobile-optimized experience</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
