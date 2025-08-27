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
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  enableTouchGestures?: boolean;
  enableResponsiveOptimization?: boolean;
  enableMobileNavigation?: boolean;
}

interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  orientation: 'portrait' | 'landscape';
  screenSize: { width: number; height: number };
  pixelRatio: number;
  touchSupport: boolean;
  batteryLevel?: number;
  connectionType?: string;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  showControls = true,
  enableTouchGestures = true,
  enableResponsiveOptimization = true,
  enableMobileNavigation = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    type: 'desktop',
    orientation: 'portrait',
    screenSize: { width: 0, height: 0 },
    pixelRatio: 1,
    touchSupport: false
  });
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentViewport, setCurrentViewport] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  
  const touchRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Detect device type and capabilities
  const detectDevice = useCallback(() => {
    const userAgent = navigator.userAgent;
    const screen = window.screen;
    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    
    if (touchSupport) {
      if (screen.width <= 768) {
        deviceType = 'mobile';
      } else if (screen.width <= 1024) {
        deviceType = 'tablet';
      }
    }

    const orientation = screen.width > screen.height ? 'landscape' : 'portrait';
    
    setDeviceInfo({
      type: deviceType,
      orientation,
      screenSize: { width: screen.width, height: screen.height },
      pixelRatio: window.devicePixelRatio || 1,
      touchSupport,
      batteryLevel: (navigator as any).getBattery?.()?.then((battery: any) => battery.level),
      connectionType: (navigator as any).connection?.effectiveType
    });

    setCurrentViewport(deviceType);
  }, []);

  // Handle viewport changes
  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    let viewport: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    
    if (width <= 768) {
      viewport = 'mobile';
    } else if (width <= 1024) {
      viewport = 'tablet';
    }
    
    setCurrentViewport(viewport);
    detectDevice();
  }, [detectDevice]);

  // Touch gesture handling
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!enableTouchGestures) return;
    
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  }, [enableTouchGestures]);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!enableTouchGestures || !touchStart) return;
    
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    const minSwipeDistance = 50;

    // Swipe left/right for navigation
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        // Swipe right - go back
        if (window.history.length > 1) {
          window.history.back();
        }
      } else {
        // Swipe left - go forward
        if (window.history.length > 1) {
          window.history.forward();
        }
      }
    }

    // Swipe up/down for menu
    if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > minSwipeDistance) {
      if (deltaY < 0) {
        // Swipe up - open mobile menu
        setIsMobileMenuOpen(true);
      } else {
        // Swipe down - close mobile menu
        setIsMobileMenuOpen(false);
      }
    }

    setTouchStart(null);
  }, [enableTouchGestures, touchStart]);

  // Mobile navigation enhancements
  const setupMobileNavigation = useCallback(() => {
    if (!enableMobileNavigation) return;

    // Add mobile menu button if not exists
    let mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (!mobileMenuBtn) {
      mobileMenuBtn = document.createElement('button');
      mobileMenuBtn.className = 'mobile-menu-btn fixed top-4 left-4 z-40 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg lg:hidden';
      mobileMenuBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
      mobileMenuBtn.addEventListener('click', () => setIsMobileMenuOpen(!isMobileMenuOpen));
      document.body.appendChild(mobileMenuBtn);
    }

    // Add mobile navigation menu
    let mobileNav = document.querySelector('.mobile-nav');
    if (!mobileNav) {
      mobileNav = document.createElement('div');
      mobileNav.className = 'mobile-nav fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:hidden';
      mobileNav.innerHTML = `
        <div class="flex flex-col h-full">
          <div class="flex justify-between items-center p-6 border-b border-gray-700">
            <h2 class="text-xl font-bold text-white">Navigation</h2>
            <button class="mobile-nav-close p-2 text-white hover:bg-white/10 rounded-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <nav class="flex-1 p-6">
            <ul class="space-y-4">
              <li><a href="/" class="block text-white hover:text-cyan-400 py-2">Home</a></li>
              <li><a href="/services" class="block text-white hover:text-cyan-400 py-2">Services</a></li>
              <li><a href="/about" class="block text-white hover:text-cyan-400 py-2">About</a></li>
              <li><a href="/contact" class="block text-white hover:text-cyan-400 py-2">Contact</a></li>
            </ul>
          </nav>
        </div>
      `;
      
      // Add close functionality
      const closeBtn = mobileNav.querySelector('.mobile-nav-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => setIsMobileMenuOpen(false));
      }
      
      document.body.appendChild(mobileNav);
    }

    // Show/hide mobile navigation
    if (mobileNav) {
      if (isMobileMenuOpen) {
        mobileNav.classList.remove('hidden');
      } else {
        mobileNav.classList.add('hidden');
      }
    }
  }, [enableMobileNavigation, isMobileMenuOpen]);

  // Responsive optimization
  const optimizeForViewport = useCallback(() => {
    if (!enableResponsiveOptimization) return;

    const root = document.documentElement;
    
    // Apply viewport-specific optimizations
    switch (currentViewport) {
      case 'mobile':
        root.style.setProperty('--mobile-optimized', 'true');
        root.style.setProperty('--touch-target-size', '44px');
        root.style.setProperty('--font-size-scale', '0.9');
        break;
      case 'tablet':
        root.style.setProperty('--tablet-optimized', 'true');
        root.style.setProperty('--touch-target-size', '40px');
        root.style.setProperty('--font-size-scale', '0.95');
        break;
      default:
        root.style.setProperty('--desktop-optimized', 'true');
        root.style.setProperty('--touch-target-size', '32px');
        root.style.setProperty('--font-size-scale', '1');
        break;
    }

    // Optimize images for current viewport
    const images = document.querySelectorAll('img[data-srcset]');
    images.forEach((img) => {
      const imgElement = img as HTMLImageElement;
      if (imgElement.dataset.srcset) {
        const srcset = imgElement.dataset.srcset;
        const sizes = currentViewport === 'mobile' ? '100vw' : 
                     currentViewport === 'tablet' ? '50vw' : '33vw';
        
        imgElement.sizes = sizes;
        imgElement.srcset = srcset;
      }
    });

    // Optimize touch targets
    const touchTargets = document.querySelectorAll('button, a, input, select, textarea');
    touchTargets.forEach((target) => {
      const element = target as HTMLElement;
      const computedStyle = window.getComputedStyle(element);
      const minSize = currentViewport === 'mobile' ? '44px' : '40px';
      
      if (parseInt(computedStyle.minHeight) < parseInt(minSize)) {
        element.style.minHeight = minSize;
        element.style.minWidth = minSize;
      }
    });
  }, [enableResponsiveOptimization, currentViewport]);

  // Initialize mobile experience enhancer
  useEffect(() => {
    if (!enabled) return;

    detectDevice();
    setupMobileNavigation();
    optimizeForViewport();

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', detectDevice);
    
    if (enableTouchGestures) {
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    // Battery and connection monitoring
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        battery.addEventListener('levelchange', () => {
          setDeviceInfo(prev => ({ ...prev, batteryLevel: battery.level }));
        });
      });
    }

    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      connection.addEventListener('change', () => {
        setDeviceInfo(prev => ({ ...prev, connectionType: connection.effectiveType }));
      });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', detectDevice);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enabled, detectDevice, setupMobileNavigation, optimizeForViewport, handleResize, handleTouchStart, handleTouchEnd]);

  // Update when mobile menu state changes
  useEffect(() => {
    setupMobileNavigation();
  }, [setupMobileNavigation]);

  if (!enabled) return null;

  return (
    <>
      {/* Mobile Experience Toggle Button */}
      {showControls && (
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-400/50 lg:hidden"
          aria-label="Mobile experience settings"
          aria-expanded={isOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Smartphone className="w-6 h-6" />
        </motion.button>
      )}

      {/* Mobile Experience Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="absolute top-20 left-4 w-80 max-h-[80vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              initial={{ opacity: 0, x: -100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Mobile Experience
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label="Close mobile experience panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                {/* Device Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Device Info</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Device Type:</span>
                      <span className="font-medium text-gray-900 dark:text-white capitalize">{deviceInfo.type}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Orientation:</span>
                      <span className="font-medium text-gray-900 dark:text-white capitalize">{deviceInfo.orientation}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Screen:</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {deviceInfo.screenSize.width} × {deviceInfo.screenSize.height}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Pixel Ratio:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{deviceInfo.pixelRatio}x</span>
                    </div>
                    
                    {deviceInfo.batteryLevel !== undefined && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Battery:</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {Math.round(deviceInfo.batteryLevel * 100)}%
                        </span>
                      </div>
                    )}
                    
                    {deviceInfo.connectionType && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Connection:</span>
                        <span className="font-medium text-gray-900 dark:text-white capitalize">{deviceInfo.connectionType}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Touch Gestures */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Touch Gestures</h3>
                  
                  <div className="space-y-3">
                                         <div className="flex items-center space-x-3">
                       <Hand className="w-4 h-4 text-purple-500" />
                       <span className="text-sm text-gray-600 dark:text-gray-400">
                         Swipe left/right to navigate
                       </span>
                     </div>
                     
                     <div className="flex items-center space-x-3">
                       <Hand className="w-4 h-4 text-purple-500" />
                       <span className="text-sm text-gray-600 dark:text-gray-400">
                         Swipe up to open menu
                       </span>
                     </div>
                     
                     <div className="flex items-center space-x-3">
                       <Hand className="w-4 h-4 text-purple-500" />
                       <span className="text-sm text-gray-600 dark:text-gray-400">
                         Swipe down to close menu
                       </span>
                     </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      <Menu className="w-5 h-5 mx-auto mb-2" />
                      <span className="text-sm">Toggle Menu</span>
                    </button>
                    
                    <button
                      onClick={() => window.location.reload()}
                      className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      <RotateCcw className="w-5 h-5 mx-auto mb-2" />
                      <span className="text-sm">Refresh</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Touch Gesture Area */}
      <div
        ref={touchRef}
        className="fixed inset-0 pointer-events-none z-30 lg:hidden"
        aria-hidden="true"
      />
    </>
  );
};