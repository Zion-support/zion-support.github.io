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
  X
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

export function MobileExperienceEnhancer({ 
  enabled = true 
}: { 
  enabled?: boolean; 
}) {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Detect device information
  const detectDevice = useCallback((): DeviceInfo => {
    const userAgent = navigator.userAgent;
    const screen = window.screen;
    const connection = (navigator as any).connection;
    
    let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      type = screen.width <= 768 ? 'mobile' : 'tablet';
    }

    const orientation = screen.width > screen.height ? 'landscape' : 'portrait';
    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    return {
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
  }, []);

  // Optimize for mobile devices
  const optimizeForMobile = useCallback(() => {
    if (!deviceInfo || deviceInfo.type === 'desktop') return;

    setIsOptimizing(true);

    // Add mobile-specific CSS classes
    document.documentElement.classList.add(`device-${deviceInfo.type}`);
    document.documentElement.classList.add(`orientation-${deviceInfo.orientation}`);

    // Optimize images for mobile
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (deviceInfo.type === 'mobile' && deviceInfo.pixelRatio > 1) {
        // Use high-DPI images for mobile
        const src = img.src;
        if (src && !src.includes('@2x') && !src.includes('@3x')) {
          const highDpiSrc = src.replace(/\.(jpg|jpeg|png|webp)/, '@2x.$1');
          img.srcset = `${src} 1x, ${highDpiSrc} 2x`;
        }
      }
    });

    // Optimize touch targets
    const touchTargets = document.querySelectorAll('button, a, input, select, textarea');
    touchTargets.forEach(target => {
      const element = target as HTMLElement;
      const rect = element.getBoundingClientRect();
      if (rect.height < 44 || rect.width < 44) {
        element.style.minHeight = '44px';
        element.style.minWidth = '44px';
      }
    });

    // Add mobile-specific event listeners
    if (deviceInfo.touchSupport) {
      // Swipe gestures for navigation
      let startX = 0;
      let startY = 0;
      let endX = 0;
      let endY = 0;

      const handleTouchStart = (e: TouchEvent) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      };

      const handleTouchEnd = (e: TouchEvent) => {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;
        handleSwipe();
      };

      const handleSwipe = () => {
        const diffX = startX - endX;
        const diffY = startY - endY;
        const minSwipeDistance = 50;

        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
          if (diffX > 0) {
            // Swipe left - next page
            console.log('Swipe left detected');
          } else {
            // Swipe right - previous page
            console.log('Swipe right detected');
          }
        }
      };

      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });

      // Cleanup function
      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }

    setIsOptimizing(false);
  }, [deviceInfo]);

  // Add mobile-specific CSS
  const addMobileCSS = useCallback(() => {
    if (!deviceInfo || deviceInfo.type === 'desktop') return;

    const style = document.createElement('style');
    style.textContent = `
      /* Mobile-specific optimizations */
      .device-mobile {
        --touch-target-size: 44px;
        --mobile-spacing: 16px;
        --mobile-font-size: 16px;
      }

      .device-tablet {
        --touch-target-size: 48px;
        --mobile-spacing: 20px;
        --mobile-font-size: 18px;
      }

      /* Ensure touch targets are large enough */
      .device-mobile button,
      .device-mobile a,
      .device-mobile input,
      .device-mobile select,
      .device-mobile textarea {
        min-height: var(--touch-target-size);
        min-width: var(--touch-target-size);
      }

      /* Mobile-friendly spacing */
      .device-mobile .container {
        padding-left: var(--mobile-spacing);
        padding-right: var(--mobile-spacing);
      }

      /* Mobile typography */
      .device-mobile body {
        font-size: var(--mobile-font-size);
        line-height: 1.5;
      }

      /* Mobile navigation */
      .device-mobile .mobile-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        z-index: 1000;
      }

      /* Mobile menu button */
      .mobile-menu-toggle {
        display: none;
      }

      .device-mobile .mobile-menu-toggle {
        display: block;
      }

      /* Hide desktop navigation on mobile */
      .device-mobile .desktop-nav {
        display: none;
      }

      /* Mobile-friendly forms */
      .device-mobile input,
      .device-mobile textarea,
      .device-mobile select {
        font-size: 16px; /* Prevents zoom on iOS */
        padding: 12px;
        border-radius: 8px;
      }

      /* Mobile-friendly buttons */
      .device-mobile .btn {
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 16px;
      }

      /* Mobile-friendly cards */
      .device-mobile .card {
        margin-bottom: var(--mobile-spacing);
        border-radius: 12px;
      }

      /* Mobile-friendly modals */
      .device-mobile .modal {
        margin: 16px;
        border-radius: 16px;
      }

      /* Mobile-friendly tables */
      .device-mobile table {
        font-size: 14px;
      }

      .device-mobile th,
      .device-mobile td {
        padding: 8px 4px;
      }

      /* Mobile-friendly images */
      .device-mobile img {
        max-width: 100%;
        height: auto;
      }

      /* Mobile-friendly videos */
      .device-mobile video {
        max-width: 100%;
        height: auto;
      }

      /* Mobile-friendly iframes */
      .device-mobile iframe {
        max-width: 100%;
        height: auto;
      }

      /* Mobile-friendly charts */
      .device-mobile .recharts-wrapper {
        max-width: 100%;
        overflow-x: auto;
      }

      /* Mobile-friendly tooltips */
      .device-mobile .tooltip {
        max-width: 200px;
        font-size: 14px;
      }

      /* Mobile-friendly dropdowns */
      .device-mobile .dropdown-menu {
        max-width: calc(100vw - 32px);
        left: 16px !important;
        right: 16px !important;
      }

      /* Mobile-friendly notifications */
      .device-mobile .notification {
        margin: 8px 16px;
        border-radius: 8px;
      }

      /* Mobile-friendly loading states */
      .device-mobile .loading {
        padding: 32px 16px;
      }

      /* Mobile-friendly error states */
      .device-mobile .error {
        padding: 32px 16px;
        text-align: center;
      }

      /* Mobile-friendly empty states */
      .device-mobile .empty-state {
        padding: 64px 16px;
        text-align: center;
      }

      /* Mobile-friendly search */
      .device-mobile .search-input {
        width: 100%;
        margin-bottom: 16px;
      }

      /* Mobile-friendly filters */
      .device-mobile .filters {
        flex-direction: column;
        gap: 12px;
      }

      /* Mobile-friendly pagination */
      .device-mobile .pagination {
        justify-content: center;
        gap: 8px;
      }

      /* Mobile-friendly breadcrumbs */
      .device-mobile .breadcrumbs {
        font-size: 14px;
        margin-bottom: 16px;
      }

      /* Mobile-friendly tabs */
      .device-mobile .tabs {
        overflow-x: auto;
        white-space: nowrap;
      }

      /* Mobile-friendly accordion */
      .device-mobile .accordion-item {
        border-radius: 8px;
        margin-bottom: 8px;
      }

      /* Mobile-friendly carousel */
      .device-mobile .carousel {
        border-radius: 12px;
        overflow: hidden;
      }

      /* Mobile-friendly gallery */
      .device-mobile .gallery {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 8px;
      }

      /* Mobile-friendly sidebar */
      .device-mobile .sidebar {
        position: fixed;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100vh;
        transition: left 0.3s ease;
        z-index: 1001;
      }

      .device-mobile .sidebar.open {
        left: 0;
      }

      /* Mobile-friendly overlay */
      .device-mobile .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
      }

      /* Mobile-friendly animations */
      .device-mobile * {
        transition: all 0.2s ease;
      }

      /* Mobile-friendly focus states */
      .device-mobile *:focus {
        outline: 2px solid #06b6d4;
        outline-offset: 2px;
      }

      /* Mobile-friendly hover states */
      .device-mobile *:hover {
        transform: none;
      }

      /* Mobile-friendly active states */
      .device-mobile *:active {
        transform: scale(0.98);
      }

      /* Mobile-friendly disabled states */
      .device-mobile *:disabled {
        opacity: 0.6;
        pointer-events: none;
      }

      /* Mobile-friendly loading animations */
      .device-mobile .loading-spinner {
        width: 32px;
        height: 32px;
      }

      /* Mobile-friendly progress bars */
      .device-mobile .progress-bar {
        height: 8px;
        border-radius: 4px;
      }

      /* Mobile-friendly sliders */
      .device-mobile .slider {
        height: 24px;
      }

      .device-mobile .slider-thumb {
        width: 24px;
        height: 24px;
      }

      /* Mobile-friendly switches */
      .device-mobile .switch {
        width: 48px;
        height: 24px;
      }

      .device-mobile .switch-thumb {
        width: 20px;
        height: 20px;
      }

      /* Mobile-friendly checkboxes */
      .device-mobile .checkbox {
        width: 20px;
        height: 20px;
      }

      /* Mobile-friendly radio buttons */
      .device-mobile .radio {
        width: 20px;
        height: 20px;
      }

      /* Mobile-friendly text areas */
      .device-mobile .textarea {
        min-height: 100px;
        resize: vertical;
      }

      /* Mobile-friendly selects */
      .device-mobile .select {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
        background-position: right 8px center;
        background-repeat: no-repeat;
        background-size: 16px;
        padding-right: 40px;
      }

      /* Mobile-friendly file inputs */
      .device-mobile .file-input {
        padding: 12px;
        border: 2px dashed #d1d5db;
        border-radius: 8px;
        text-align: center;
      }

      /* Mobile-friendly color inputs */
      .device-mobile .color-input {
        width: 48px;
        height: 48px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
      }

      /* Mobile-friendly date inputs */
      .device-mobile .date-input {
        padding: 12px;
        border-radius: 8px;
      }

      /* Mobile-friendly time inputs */
      .device-mobile .time-input {
        padding: 12px;
        border-radius: 8px;
      }

      /* Mobile-friendly number inputs */
      .device-mobile .number-input {
        padding: 12px;
        border-radius: 8px;
      }

      /* Mobile-friendly range inputs */
      .device-mobile .range-input {
        width: 100%;
        height: 8px;
        border-radius: 4px;
      }

      /* Mobile-friendly search inputs */
      .device-mobile .search-input {
        padding: 12px 16px;
        border-radius: 24px;
        background: #f9fafb;
      }

      /* Mobile-friendly password inputs */
      .device-mobile .password-input {
        padding: 12px;
        border-radius: 8px;
      }

      /* Mobile-friendly email inputs */
      .device-mobile .email-input {
        padding: 12px;
        border-radius: 8px;
      }

      /* Mobile-friendly tel inputs */
      .device-mobile .tel-input {
        padding: 12px;
        border-radius: 8px;
      }

      /* Mobile-friendly url inputs */
      .device-mobile .url-input {
        padding: 12px;
        border-radius: 8px;
      }

      /* Mobile-friendly week inputs */
      .device-mobile .week-input {
        padding: 12px;
        border-radius: 8px;
      }

      /* Mobile-friendly month inputs */
      .device-mobile .month-input {
        padding: 12px;
        border-radius: 8px;
      }

      /* Mobile-friendly datetime-local inputs */
      .device-mobile .datetime-local-input {
        padding: 12px;
        border-radius: 8px;
      }

      /* Mobile-friendly hidden inputs */
      .device-mobile .hidden-input {
        position: absolute;
        left: -9999px;
      }

      /* Mobile-friendly readonly inputs */
      .device-mobile .readonly-input {
        background-color: #f9fafb;
        color: #6b7280;
      }

      /* Mobile-friendly disabled inputs */
      .device-mobile .disabled-input {
        background-color: #f3f4f6;
        color: #9ca3af;
        cursor: not-allowed;
      }

      /* Mobile-friendly required inputs */
      .device-mobile .required-input {
        border-color: #ef4444;
      }

      /* Mobile-friendly invalid inputs */
      .device-mobile .invalid-input {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
      }

      /* Mobile-friendly valid inputs */
      .device-mobile .valid-input {
        border-color: #10b981;
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
      }

      /* Mobile-friendly placeholder text */
      .device-mobile .placeholder {
        color: #9ca3af;
      }

      /* Mobile-friendly autofill styles */
      .device-mobile input:-webkit-autofill,
      .device-mobile input:-webkit-autofill:hover,
      .device-mobile input:-webkit-autofill:focus,
      .device-mobile input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
        -webkit-text-fill-color: #374151 !important;
      }

      /* Mobile-friendly dark mode autofill */
      .device-mobile.dark input:-webkit-autofill,
      .device-mobile.dark input:-webkit-autofill:hover,
      .device-mobile.dark input:-webkit-autofill:focus,
      .device-mobile.dark input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px #1f2937 inset !important;
        -webkit-text-fill-color: #f9fafb !important;
      }
    `;

    document.head.appendChild(style);

    // Cleanup function
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [deviceInfo]);

  // Handle orientation change
  const handleOrientationChange = useCallback(() => {
    if (deviceInfo) {
      const newDeviceInfo = detectDevice();
      setDeviceInfo(newDeviceInfo);
    }
  }, [deviceInfo, detectDevice]);

  // Handle resize
  const handleResize = useCallback(() => {
    if (deviceInfo) {
      const newDeviceInfo = detectDevice();
      setDeviceInfo(newDeviceInfo);
    }
  }, [deviceInfo, detectDevice]);

  // Initialize
  useEffect(() => {
    if (!enabled) return;

    const info = detectDevice();
    setDeviceInfo(info);

    // Add event listeners
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleResize);
    };
  }, [enabled, detectDevice, handleOrientationChange, handleResize]);

  // Apply optimizations when device info changes
  useEffect(() => {
    if (deviceInfo) {
      optimizeForMobile();
      addMobileCSS();
    }
  }, [deviceInfo, optimizeForMobile, addMobileCSS]);

  if (!enabled || !deviceInfo) return null;

  return (
    <>
      {/* Mobile Menu Toggle */}
      {deviceInfo.type !== 'desktop' && (
        <motion.button
          className="fixed top-4 right-4 z-50 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle mobile menu"
        >
          <PhoneIcon className="w-6 h-6" />
        </motion.button>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && deviceInfo.type !== 'desktop' && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMobileMenu(false)}
          >
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Mobile Menu
                  </h2>
                  <button
                    onClick={() => setShowMobileMenu(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Device Info */}
                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                    Device Information
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      {deviceInfo.type === 'mobile' ? (
                        <Smartphone className="w-4 h-4" />
                      ) : deviceInfo.type === 'tablet' ? (
                        <Tablet className="w-4 h-4" />
                      ) : (
                        <Monitor className="w-4 h-4" />
                      )}
                      <span>Type: {deviceInfo.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RotateCcw className="w-4 h-4" />
                      <span>Orientation: {deviceInfo.orientation}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Maximize className="w-4 h-4" />
                      <span>Screen: {deviceInfo.screenSize.width} × {deviceInfo.screenSize.height}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Hand className="w-4 h-4" />
                      <span>Touch: {deviceInfo.touchSupport ? 'Yes' : 'No'}</span>
                    </div>
                    {deviceInfo.connection && (
                      <div className="flex items-center space-x-2">
                        <Wifi className="w-4 h-4" />
                        <span>Connection: {deviceInfo.connection.effectiveType}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-cyan-50 hover:bg-cyan-100 dark:bg-cyan-900/20 dark:hover:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      <Hand className="w-5 h-5" />
                      <span>Touch Gestures</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      <Maximize className="w-5 h-5" />
                      <span>Fullscreen Mode</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/40 text-green-700 dark:text-green-300 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      <Battery className="w-5 h-5" />
                      <span>Battery Saver</span>
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Status Bar */}
      {deviceInfo.type !== 'desktop' && (
        <div className="fixed top-0 left-0 right-0 z-30 bg-black text-white text-xs px-4 py-1 flex justify-between items-center md:hidden">
          <div className="flex items-center space-x-2">
            <Signal className="w-3 h-3" />
            <span>Zion Tech</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wifi className="w-3 h-3" />
            <Battery className="w-3 h-3" />
            <span>{new Date().toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit',
              hour12: false 
            })}</span>
          </div>
        </div>
      )}
    </>
  );
}