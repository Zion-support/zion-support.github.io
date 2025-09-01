import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {

  Smartphone, 
  Tablet, 
  Monitor, 
  MousePointer, 
  Hand, 
  Wifi, 
  Battery, 
  Settings,
  X,
  Check,
  AlertTriangle,
  Info,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Smartphone as PhoneIcon,
  Tablet as TabletIcon,
  Monitor as DesktopIcon,
  Activity
} from 'lucide-react';

interface MobileSettings {

  touchOptimization: boolean;
  gestureNavigation: boolean;
  mobileFirst: boolean;
  responsiveImages: boolean;
  touchFeedback: boolean;
  mobileMenu: boolean;
  swipeGestures: boolean;
  mobileNotifications: boolean;
  batteryOptimization: boolean;
  networkOptimization: boolean;
  viewportMode: 'mobile' | 'tablet' | 'desktop' | 'auto';
  touchSensitivity: 'low' | 'medium' | 'high';
  mobileAnimations: boolean;
}

interface MobileExperienceProps {

  enabled?: boolean;
  showControls?: boolean;
  onSettingsChange?: (settings: MobileSettings) => void;
}

export const EnhancedMobileExperience: React.FC<MobileExperienceProps> = ({

  enabled = true,
  showControls = true,
  onSettingsChange
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<MobileSettings>({

    touchOptimization: true,
    gestureNavigation: true,
    mobileFirst: true,
    responsiveImages: true,
    touchFeedback: true,
    mobileMenu: true,
    swipeGestures: true,
    mobileNotifications: true,
    batteryOptimization: true,
    networkOptimization: true,
    viewportMode: 'auto',
    touchSensitivity: 'medium',
    mobileAnimations: true
  });

  const [deviceInfo, setDeviceInfo] = useState({

    isMobile: false,
    isTablet: false,
    isDesktop: false,
    screenWidth: 0,
    screenHeight: 0,
    pixelRatio: 1,
    touchSupport: false,
    orientation: 'portrait' as 'portrait' | 'landscape'
  });

  const [performanceMetrics, setPerformanceMetrics] = useState({

    touchLatency: 0,
    scrollPerformance: 0,
    imageLoadTime: 0,
    networkSpeed: 'unknown' as 'slow' | 'medium' | 'fast' | 'unknown'
  });

  // Detect device and capabilities
  useEffect(() => {

    const detectDevice = () => {

      const userAgent = navigator.userAgent;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isTablet = /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/i.test(userAgent);
      const isDesktop = !isMobile && !isTablet;
      
      const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const pixelRatio = window.devicePixelRatio || 1;
      
      setDeviceInfo({

        isMobile,
        isTablet,
        isDesktop,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        pixelRatio,
        touchSupport,
        orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
      });
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    window.addEventListener('orientationchange', detectDevice);

    return () => {

      window.removeEventListener('resize', detectDevice);
      window.removeEventListener('orientationchange', detectDevice);
    };
  }, []);

  // Measure mobile performance
  useEffect(() => {

    if (!enabled || !deviceInfo.isMobile) return;

    const measurePerformance = async () => {

      // Measure touch latency
      let touchStartTime = 0;
      let touchEndTime = 0;
      
      const touchStartHandler = () => {

        touchStartTime = performance.now();
      };
      
      const touchEndHandler = () => {

        touchEndTime = performance.now();
        const latency = touchEndTime - touchStartTime;
        setPerformanceMetrics(prev => ({ ...prev, touchLatency: Math.round(latency) }));
      };

      document.addEventListener('touchstart', touchStartHandler);
      document.addEventListener('touchend', touchEndHandler);

      // Measure scroll performance
      let scrollStartTime = 0;
      let scrollEndTime = 0;
      let scrollCount = 0;
      
      const scrollHandler = () => {

        if (scrollCount === 0) {

          scrollStartTime = performance.now();
        }
        scrollCount++;
        
        if (scrollCount >= 10) {

          scrollEndTime = performance.now();
          const duration = scrollEndTime - scrollStartTime;
          setPerformanceMetrics(prev => ({ ...prev, scrollPerformance: Math.round(duration) }));
          scrollCount = 0;
        }
      };

      document.addEventListener('scroll', scrollHandler);

      // Measure network speed (simplified)
      const startTime = performance.now();
      try {

        await fetch('/favicon.ico', { cache: 'no-cache' });
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        let networkSpeed: 'slow' | 'medium' | 'fast' = 'medium';
        if (duration < 100) networkSpeed = 'fast';
        else if (duration > 500) networkSpeed = 'slow';
        
        setPerformanceMetrics(prev => ({ ...prev, networkSpeed }));
      } catch (error) {

        // // console.warn('Network speed measurement failed:', error);
      }

      return () => {

        document.removeEventListener('touchstart', touchStartHandler);
        document.removeEventListener('touchend', touchEndHandler);
        document.removeEventListener('scroll', scrollHandler);
      };
    };

    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, [enabled, deviceInfo.isMobile]);

  // Apply mobile optimizations
  const applyMobileOptimizations = useCallback((newSettings: MobileSettings) => {

    const root = document.documentElement;
    const body = document.body;

    // Touch optimization
    if (newSettings.touchOptimization) {

      root.style.setProperty('--touch-action', 'manipulation');
      root.style.setProperty('--user-select', 'none');
      root.style.setProperty('--webkit-tap-highlight-color', 'rgba(0,0,0,0.1)');
    } else {

      root.style.removeProperty('--touch-action');
      root.style.removeProperty('--user-select');
      root.style.removeProperty('--webkit-tap-highlight-color');
    }

    // Touch feedback
    if (newSettings.touchFeedback) {

      root.classList.add('touch-feedback');
    } else {

      root.classList.remove('touch-feedback');
    }

    // Mobile animations
    if (newSettings.mobileAnimations && deviceInfo.isMobile) {

      root.style.setProperty('--animation-duration', '0.3s');
      root.style.setProperty('--transition-duration', '0.2s');
    } else {

      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Touch sensitivity
    const sensitivityValues = { low: 0.5, medium: 1, high: 1.5 };
    root.style.setProperty('--touch-sensitivity', sensitivityValues[newSettings.touchSensitivity].toString());

    // Store settings
    localStorage.setItem('mobile-experience-settings', JSON.stringify(newSettings));
  }, [deviceInfo.isMobile]);

  // Load settings from localStorage
  useEffect(() => {

    const savedSettings = localStorage.getItem('mobile-experience-settings');
    if (savedSettings) {

      try {

        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applyMobileOptimizations(parsed);
      } catch (error) {

        // // console.warn('Failed to load mobile experience settings:', error);
      }
    }
  }, [applyMobileOptimizations]);

  // Apply settings when they change
  useEffect(() => {

    applyMobileOptimizations(settings);
    onSettingsChange?.(settings);
  }, [settings, applyMobileOptimizations, onSettingsChange]);

  // Handle viewport mode change
  const handleViewportModeChange = useCallback((mode: MobileSettings['viewportMode']) => {

    setSettings(prev => ({ ...prev, viewportMode: mode }));
    
    // Apply viewport changes
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {

      switch (mode) {

        case 'mobile':
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
          break;
        case 'tablet':
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=2.0');
          break;
        case 'desktop':
          viewport.setAttribute('content', 'width=1200, initial-scale=1.0');
          break;
        case 'auto':
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
          break;
      }
    }
  }, []);

  // Optimize images for mobile
  const optimizeImages = useCallback(() => {

    if (!settings.responsiveImages) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {

      if (!img.loading) {

        img.loading = 'lazy';
      }
      
      // Add responsive image attributes
      if (deviceInfo.isMobile && !img.hasAttribute('data-mobile-src')) {

        img.setAttribute('data-mobile-src', img.src);
        img.setAttribute('data-tablet-src', img.src);
        img.setAttribute('data-desktop-src', img.src);
      }
    });
  }, [settings.responsiveImages, deviceInfo.isMobile]);

  // Apply image optimizations
  useEffect(() => {

    optimizeImages();
  }, [optimizeImages]);

  // Keyboard shortcuts
  useEffect(() => {

    const handleKeyDown = (event: KeyboardEvent) => {

      // Alt + M to toggle mobile experience panel
      if (event.altKey && event.key === 'm') {

        event.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!enabled) return null;

  const getPerformanceColor = (value: number, threshold: number) => {

    if (value <= threshold) return 'text-green-500';
    if (value <= threshold * 1.5) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getNetworkIcon = (speed: string) => {

    switch (speed) {

      case 'fast': return <Wifi className="w-4 h-4 text-green-500" />;
      case 'medium': return <Wifi className="w-4 h-4 text-yellow-500" />;
      case 'slow': return <Wifi className="w-4 h-4 text-red-500" />;
      default: return <Wifi className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <>
      {/* Floating Mobile Experience Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-32 z-50 p-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Mobile Experience Settings"
        title="Mobile Experience Settings (Alt + M)"
      >
        <Smartphone className="w-6 h-6" />
      </motion.button>

      {/* Mobile Experience Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -400 }}
            className="fixed bottom-6 left-44 z-40 w-96 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-green-400/30 rounded-2xl shadow-2xl"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <Smartphone className="w-5 h-5 mr-2 text-green-500" />
                  Mobile Experience
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label="Close mobile experience panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Device Info */}
              <div className="mb-6 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                  <Info className="w-4 h-4 mr-2" />
                  Device Information
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    {deviceInfo.isMobile && <PhoneIcon className="w-3 h-3 mr-1" />}
                    {deviceInfo.isTablet && <TabletIcon className="w-3 h-3 mr-1" />}
                    {deviceInfo.isDesktop && <DesktopIcon className="w-3 h-3 mr-1" />}
                    {deviceInfo.isMobile ? 'Mobile' : deviceInfo.isTablet ? 'Tablet' : 'Desktop'}
                  </div>
                  <div>{deviceInfo.screenWidth} × {deviceInfo.screenHeight}</div>
                  <div>Pixel Ratio: {deviceInfo.pixelRatio}x</div>
                  <div>{deviceInfo.touchSupport ? 'Touch' : 'No Touch'}</div>
                  <div className="capitalize">{deviceInfo.orientation}</div>
                  <div>{deviceInfo.touchSupport ? 'Touch Enabled' : 'Touch Disabled'}</div>
                </div>
              </div>

              {/* Performance Metrics */}
              {deviceInfo.isMobile && (
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-3 flex items-center">
                    <Activity className="w-4 h-4 mr-2" />
                    Performance Metrics
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Touch Latency:</span>
                      <span className={getPerformanceColor(performanceMetrics.touchLatency, 16)}>
                        {performanceMetrics.touchLatency}ms
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Scroll Performance:</span>
                      <span className={getPerformanceColor(performanceMetrics.scrollPerformance, 100)}>
                        {performanceMetrics.scrollPerformance}ms
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Network:</span>
                      <span className="flex items-center">
                        {getNetworkIcon(performanceMetrics.networkSpeed)}
                        <span className="ml-1 capitalize">{performanceMetrics.networkSpeed}</span>
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Settings */}
              <div className="space-y-4">
                {/* Touch Optimization */}
                <div className="flex items-center justify-between">
                                      <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                      <MousePointer className="w-4 h-4 mr-2" />
                      Touch Optimization
                    </label>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, touchOptimization: !prev.touchOptimization }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${

                      settings.touchOptimization ? 'bg-green-600' : 'bg-gray-200'
                    }`}
                    aria-label="Toggle touch optimization"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${

                        settings.touchOptimization ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Gesture Navigation */}
                <div className="flex items-center justify-between">
                                      <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Hand className="w-4 h-4 mr-2" />
                      Gesture Navigation
                    </label>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, gestureNavigation: !prev.gestureNavigation }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${

                      settings.gestureNavigation ? 'bg-green-600' : 'bg-gray-200'
                    }`}
                    aria-label="Toggle gesture navigation"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${

                        settings.gestureNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Touch Feedback */}
                <div className="flex items-center justify-between">
                                      <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                      <MousePointer className="w-4 h-4 mr-2" />
                      Touch Feedback
                    </label>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, touchFeedback: !prev.touchFeedback }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${

                      settings.touchFeedback ? 'bg-green-600' : 'bg-gray-200'
                    }`}
                    aria-label="Toggle touch feedback"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${

                        settings.touchFeedback ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Responsive Images */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDNINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNSAxNGMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6bTAtOGMtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgMyAzLTEuMzQgMy0zLTEuMzQtMy0zLTM6bTAgN2MtMi4yMSAwLTQtMS43OS00LTRzMS43OS00IDQtNCA0IDEuNzkgNCA0LTEuNzkgNC00IDR6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+" className="w-4 h-4 mr-2" />
                    Responsive Images
                  </label>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, responsiveImages: !prev.responsiveImages }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${

                      settings.responsiveImages ? 'bg-green-600' : 'bg-gray-200'
                    }`}
                    aria-label="Toggle responsive images"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${

                        settings.responsiveImages ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Viewport Mode */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Viewport Mode
                  </label>
                  <select
                    value={settings.viewportMode}
                    onChange={(e) => handleViewportModeChange(e.target.value as MobileSettings['viewportMode'])}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white text-sm"
                  >
                    <option value="auto">Auto (Responsive)</option>
                    <option value="mobile">Mobile</option>
                    <option value="tablet">Tablet</option>
                    <option value="desktop">Desktop</option>
                  </select>
                </div>

                {/* Touch Sensitivity */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Touch Sensitivity: {settings.touchSensitivity}
                  </label>
                  <div className="flex space-x-2">
                    {(['low', 'medium', 'high'] as const).map((sensitivity) => (
                      <button
                        key={sensitivity}
                        onClick={() => setSettings(prev => ({ ...prev, touchSensitivity: sensitivity }))}
                        className={`flex-1 px-3 py-2 text-xs rounded-lg transition-colors ${

                          settings.touchSensitivity === sensitivity
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-500'
                        }`}
                      >
                        {sensitivity.charAt(0).toUpperCase() + sensitivity.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Animations */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Maximize className="w-4 h-4 mr-2" />
                    Mobile Animations
                  </label>
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, mobileAnimations: !prev.mobileAnimations }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${

                      settings.mobileAnimations ? 'bg-green-600' : 'bg-gray-200'
                    }`}
                    aria-label="Toggle mobile animations"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${

                        settings.mobileAnimations ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex space-x-2">
                <button
                  onClick={() => {

                    const defaultSettings: MobileSettings = {

                      touchOptimization: true,
                      gestureNavigation: true,
                      mobileFirst: true,
                      responsiveImages: true,
                      touchFeedback: true,
                      mobileMenu: true,
                      swipeGestures: true,
                      mobileNotifications: true,
                      batteryOptimization: true,
                      networkOptimization: true,
                      viewportMode: 'auto',
                      touchSensitivity: 'medium',
                      mobileAnimations: true
                    };
                    setSettings(defaultSettings);
                  }}
                  className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-200 dark:bg-slate-600 hover:bg-gray-300 dark:hover:bg-slate-500 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </button>
                <button
                  onClick={optimizeImages}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Optimize Now
                </button>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-slate-600">
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Press Alt + M to quickly toggle this panel
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedMobileExperience;