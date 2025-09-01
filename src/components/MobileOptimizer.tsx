import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {

  Smartphone,
  Tablet,
  Monitor,
  Hand,
  MousePointer,
  ArrowUpDown,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  RotateCw,
  Maximize,
  Minimize,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Smartphone as PhoneIcon,
  Wifi,
  Battery,
  Signal,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Eye,
  EyeOff
} from 'lucide-react';

interface MobileSettings {

  touchOptimization: boolean;
  gestureSupport: boolean;
  pinchZoom: boolean;
  rotationSupport: boolean;
  hapticFeedback: boolean;
  adaptiveLayout: boolean;
  mobileNavigation: boolean;
  touchTargets: boolean;
  swipeGestures: boolean;
  orientationLock: 'auto' | 'portrait' | 'landscape';
  fontSize: 'small' | 'medium' | 'large';
  contrast: 'normal' | 'high' | 'inverted';
  brightness: 'auto' | 'low' | 'normal' | 'high';
}

interface MobileOptimizerProps {

  enabled?: boolean;
  showPanel?: boolean;
  autoDetect?: boolean;
}

export const MobileOptimizer: React.FC<MobileOptimizerProps> = ({

  enabled = true,
  showPanel = false,
  autoDetect = true;
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'touch' | 'display' | 'performance' | 'help'>('general');
  const [settings, setSettings] = useState<MobileSettings>({

    touchOptimization: true,
    gestureSupport: true,
    pinchZoom: true,
    rotationSupport: true,
    hapticFeedback: true,
    adaptiveLayout: true,
    mobileNavigation: true,
    touchTargets: true,
    swipeGestures: true,
    orientationLock: 'auto',
    fontSize: 'medium',
    contrast: 'normal',
    brightness: 'auto'
  });
  
  const [deviceInfo, setDeviceInfo] = useState({

    isMobile: false,
    isTablet: false,
    isDesktop: false,
    orientation: 'portrait',
    screenSize: { width: 0, height: 0 },
    pixelRatio: 1,
    touchSupport: false,
    batteryLevel: 0,
    connectionType: 'unknown'
  });
  
  const [gestureHistory, setGestureHistory] = useState<Array<{

    type: string;
    timestamp: Date;
    details: string;
  }>>([]);
  
  const [isOptimizing, setIsOptimizing] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const gestureRef = useRef<HTMLDivElement>(null);

  // Auto-detect device capabilities
  useEffect(() => {

    if (!autoDetect) return;

    const detectDevice = () => {

      const userAgent = navigator.userAgent;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent);
      const isDesktop = !isMobile && !isTablet;
      
      const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const pixelRatio = window.devicePixelRatio || 1;
      
      setDeviceInfo(prev => ({

        ...prev,
        isMobile,
        isTablet,
        isDesktop,
        touchSupport,
        pixelRatio,
        screenSize: {

          width: window.innerWidth,
          height: window.innerHeight
        }
      }));
    };

    const handleOrientationChange = () => {

      const orientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
      setDeviceInfo(prev => ({ ...prev, orientation }));
    };

    const handleResize = () => {

      setDeviceInfo(prev => ({

        ...prev,
        screenSize: {

          width: window.innerWidth,
          height: window.innerHeight
        }
      }));
    };

    // Battery API
    const getBatteryInfo = async () => {

      if ('getBattery' in navigator) {

        try {

          const battery = await (navigator as any).getBattery();
          setDeviceInfo(prev => ({ ...prev, batteryLevel: battery.level * 100 }));
          
          battery.addEventListener('levelchange', () => {

            setDeviceInfo(prev => ({ ...prev, batteryLevel: battery.level * 100 }));
          });
        } catch (error) {

          // // console.log('Battery API not supported');
        }
      }
    };

    // Network Information API
    const getNetworkInfo = () => {

      if ('connection' in navigator) {

        const connection = (navigator as any).connection;
        setDeviceInfo(prev => ({ ...prev, connectionType: connection.effectiveType || 'unknown' }));
        
        connection.addEventListener('change', () => {

          setDeviceInfo(prev => ({ ...prev, connectionType: connection.effectiveType || 'unknown' }));
        });
      }
    };

    detectDevice();
    handleOrientationChange();
    getBatteryInfo();
    getNetworkInfo();
    
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleResize);
    
    return () => {

      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleResize);
    };
  }, [autoDetect]);

  // Apply mobile optimizations
  useEffect(() => {

    if (!enabled) return;

    const root = document.documentElement;
    const body = document.body;

    // Touch optimization
    if (settings.touchOptimization) {

      root.classList.add('touch-optimized');
      body.style.setProperty('--touch-target-size', '44px');
      body.style.setProperty('--touch-feedback-opacity', '0.3');
    } else {

      root.classList.remove('touch-optimized');
      body.style.removeProperty('--touch-target-size');
      body.style.removeProperty('--touch-feedback-opacity');
    }

    // Gesture support
    if (settings.gestureSupport) {

      root.classList.add('gesture-enabled');
    } else {

      root.classList.remove('gesture-enabled');
    }

    // Pinch zoom
    if (settings.pinchZoom) {

      root.classList.add('pinch-zoom-enabled');
    } else {

      root.classList.remove('pinch-zoom-enabled');
    }

    // Adaptive layout
    if (settings.adaptiveLayout) {

      root.classList.add('adaptive-layout');
    } else {

      root.classList.remove('adaptive-layout');
    }

    // Touch targets
    if (settings.touchTargets) {

      root.classList.add('large-touch-targets');
    } else {

      root.classList.remove('large-touch-targets');
    }

    // Orientation lock
    if (settings.orientationLock !== 'auto') {

      root.classList.add(`orientation-${settings.orientationLock}`);
    } else {

      root.classList.remove('orientation-portrait', 'orientation-landscape');
    }

    // Font size
    const fontSizeMap = {

      small: '14px',
      medium: '16px',
      large: '18px'
    };
    root.style.fontSize = fontSizeMap[settings.fontSize];

    // Contrast
    if (settings.contrast === 'high') {

      root.classList.add('high-contrast');
    } else if (settings.contrast === 'inverted') {

      root.classList.add('inverted-colors');
    } else {

      root.classList.remove('high-contrast', 'inverted-colors');
    }

    // Brightness
    if (settings.brightness === 'low') {

      root.classList.add('low-brightness');
    } else if (settings.brightness === 'high') {

      root.classList.add('high-brightness');
    } else {

      root.classList.remove('low-brightness', 'high-brightness');
    }

  }, [settings, enabled]);

  // Touch gesture handling
  const handleTouchStart = useCallback((event: TouchEvent) => {

    if (!settings.gestureSupport) return;
    
    const touch = event.touches[0];
    touchStartRef.current = {

      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };
  }, [settings.gestureSupport]);

  const handleTouchEnd = useCallback((event: TouchEvent) => {

    if (!settings.gestureSupport || !touchStartRef.current) return;
    
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const deltaTime = Date.now() - touchStartRef.current.time;
    
    // Detect swipe gestures
    if (deltaTime < 300 && Math.abs(deltaX) > 50) {

      const direction = deltaX > 0 ? 'right' : 'left';
      handleSwipe(direction);
    }
    
    if (deltaTime < 300 && Math.abs(deltaY) > 50) {

      const direction = deltaY > 0 ? 'down' : 'up';
      handleSwipe(direction);
    }
    
    touchStartRef.current = null;
  }, [settings.gestureSupport]);

  const handleSwipe = useCallback((direction: string) => {

    if (!settings.swipeGestures) return;
    
    // Add gesture to history
    setGestureHistory(prev => [...prev.slice(-9), {

      type: 'swipe',
      timestamp: new Date(),
      details: `Swipe ${direction}`
    }]);
    
    // Handle navigation based on swipe direction
    switch (direction) {

      case 'left':
        // Navigate forward/next
        // // console.log('Swipe left - navigate forward');
        break;
      case 'right':
        // Navigate back
        // // console.log('Swipe right - navigate back');
        break;
      case 'up':
        // Scroll up or show menu
        // // console.log('Swipe up - scroll up');
        break;
      case 'down':
        // Scroll down or hide menu
        // // console.log('Swipe down - scroll down');
        break;
    }
  }, [settings.swipeGestures]);

  // Haptic feedback
  const triggerHapticFeedback = useCallback(() => {

    if (!settings.hapticFeedback) return;
    
    if ('vibrate' in navigator) {

      navigator.vibrate(50);
    }
  }, [settings.hapticFeedback]);

  // Auto-optimization
  const performAutoOptimization = useCallback(async () => {

    if (!enabled) return;
    
    setIsOptimizing(true);
    
    try {

      // Optimize images for mobile
      const images = document.querySelectorAll('img');
      images.forEach(img => {

        if (!img.hasAttribute('loading')) {

          img.setAttribute('loading', 'lazy');
        }
        if (!img.hasAttribute('decoding')) {

          img.setAttribute('decoding', 'async');
        }
      });
      
      // Add mobile-specific CSS classes
      if (deviceInfo.isMobile) {

        document.body.classList.add('mobile-device');
      }
      
      // Optimize touch targets
      const touchTargets = document.querySelectorAll('button, a, input, select, textarea');
      touchTargets.forEach(target => {

        if (target instanceof HTMLElement) {

          const rect = target.getBoundingClientRect();
          if (rect.width < 44 || rect.height < 44) {

            target.classList.add('small-touch-target');
          }
        }
      });
      
      // Add mobile navigation enhancements
      if (settings.mobileNavigation) {

        const nav = document.querySelector('nav');
        if (nav) {

          nav.classList.add('mobile-optimized-nav');
        }
      }
      
      // Record optimization
      setGestureHistory(prev => [...prev.slice(-9), {

        type: 'optimization',
        timestamp: new Date(),
        details: 'Mobile optimization applied'
      }]);
      
    } catch (error) {

      // // console.error('Mobile optimization failed:', error);
    } finally {

      setIsOptimizing(false);
    }
  }, [enabled, deviceInfo.isMobile, settings.mobileNavigation]);

  // Touch event listeners
  useEffect(() => {

    if (!enabled || !settings.gestureSupport) return;

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {

      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enabled, settings.gestureSupport, handleTouchStart, handleTouchEnd]);

  // Auto-optimization effect
  useEffect(() => {

    if (!enabled) return;
    
    performAutoOptimization();
  }, [enabled, performAutoOptimization]);

  if (!enabled) return null;

  return (
    <>
      {/* Floating Mobile Optimization Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-24 z-50 p-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Mobile Optimization"
        aria-expanded={isOpen}
        aria-controls="mobile-optimization-panel"
      >
        <Smartphone className="w-6 h-6" />
      </motion.button>

      {/* Mobile Optimization Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-optimization-panel"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed bottom-24 left-24 z-40 w-96 max-h-[80vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            role="dialog"
            aria-labelledby="mobile-optimization-panel-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-600 to-teal-600 text-white">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5" />
                <h3 id="mobile-optimization-panel-title" className="font-semibold">Mobile Optimization</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close mobile optimization panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {[
                { key: 'general', label: 'General', icon: Settings },
                { key: 'touch', label: 'Touch', icon: Touch },
                { key: 'display', label: 'Display', icon: Monitor },
                { key: 'performance', label: 'Performance', icon: Smartphone },
                { key: 'help', label: 'Help', icon: Info }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 text-sm font-medium transition-colors ${

                    activeTab === key
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  aria-selected={activeTab === key}
                  role="tab"
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-[calc(80vh-140px)] overflow-y-auto">
              {/* General Tab */}
              {activeTab === 'general' && (
                <div className="space-y-4">
                  {/* Device Information */}
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-medium mb-2">Device Information</h4>
                    <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex justify-between">
                        <span>Device Type:</span>
                        <span className="font-medium">
                          {deviceInfo.isMobile ? 'Mobile' : deviceInfo.isTablet ? 'Tablet' : 'Desktop'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Orientation:</span>
                        <span className="font-medium capitalize">{deviceInfo.orientation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Screen:</span>
                        <span className="font-medium">
                          {deviceInfo.screenSize.width} × {deviceInfo.screenSize.height}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pixel Ratio:</span>
                        <span className="font-medium">{deviceInfo.pixelRatio}x</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Touch Support:</span>
                        <span className="font-medium">{deviceInfo.touchSupport ? 'Yes' : 'No'}</span>
                      </div>
                      {deviceInfo.batteryLevel > 0 && (
                        <div className="flex justify-between">
                          <span>Battery:</span>
                          <span className="font-medium">{deviceInfo.batteryLevel.toFixed(0)}%</span>
                        </div>
                      )}
                      {deviceInfo.connectionType !== 'unknown' && (
                        <div className="flex justify-between">
                          <span>Connection:</span>
                          <span className="font-medium capitalize">{deviceInfo.connectionType}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-2">
                    <button
                      onClick={performAutoOptimization}
                      disabled={isOptimizing}
                      className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center justify-center space-x-2"
                    >
                      {isOptimizing ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Optimizing...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>Auto-Optimize</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Touch Tab */}
              {activeTab === 'touch' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={settings.touchOptimization}
                        onChange={(e) => setSettings(prev => ({ ...prev, touchOptimization: e.target.checked }))}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span>Touch Optimization</span>
                    </label>
                    <Hand className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={settings.gestureSupport}
                        onChange={(e) => setSettings(prev => ({ ...prev, gestureSupport: e.target.checked }))}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span>Gesture Support</span>
                    </label>
                    <MousePointer className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={settings.swipeGestures}
                        onChange={(e) => setSettings(prev => ({ ...prev, swipeGestures: e.target.checked }))}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span>Swipe Gestures</span>
                    </label>
                    <ArrowUpDown className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={settings.hapticFeedback}
                        onChange={(e) => setSettings(prev => ({ ...prev, hapticFeedback: e.target.checked }))}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span>Haptic Feedback</span>
                    </label>
                    <AlertTriangle className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Orientation Lock</label>
                    <select
                      value={settings.orientationLock}
                      onChange={(e) => setSettings(prev => ({ ...prev, orientationLock: e.target.value as any }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="auto">Auto</option>
                      <option value="portrait">Portrait Only</option>
                      <option value="landscape">Landscape Only</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Display Tab */}
              {activeTab === 'display' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={settings.adaptiveLayout}
                        onChange={(e) => setSettings(prev => ({ ...prev, adaptiveLayout: e.target.checked }))}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span>Adaptive Layout</span>
                    </label>
                    <Monitor className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={settings.touchTargets}
                        onChange={(e) => setSettings(prev => ({ ...prev, touchTargets: e.target.checked }))}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span>Large Touch Targets</span>
                    </label>
                    <Hand className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Font Size</label>
                    <select
                      value={settings.fontSize}
                      onChange={(e) => setSettings(prev => ({ ...prev, fontSize: e.target.value as any }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Contrast</label>
                    <select
                      value={settings.contrast}
                      onChange={(e) => setSettings(prev => ({ ...prev, contrast: e.target.value as any }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="normal">Normal</option>
                      <option value="high">High</option>
                      <option value="inverted">Inverted</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Brightness</label>
                    <select
                      value={settings.brightness}
                      onChange={(e) => setSettings(prev => ({ ...prev, brightness: e.target.value as any }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="auto">Auto</option>
                      <option value="low">Low</option>
                      <option value="normal">Normal</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Performance Tab */}
              {activeTab === 'performance' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={settings.mobileNavigation}
                        onChange={(e) => setSettings(prev => ({ ...prev, mobileNavigation: e.target.checked }))}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span>Mobile Navigation</span>
                    </label>
                    <PhoneIcon className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="font-medium mb-2 text-blue-900 dark:text-blue-100">Performance Tips</h4>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                      <li>• Enable touch optimization for better responsiveness</li>
                      <li>• Use adaptive layout for different screen sizes</li>
                      <li>• Enable haptic feedback for better user experience</li>
                      <li>• Use large touch targets for easier interaction</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Help Tab */}
              {activeTab === 'help' && (
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="font-medium mb-2 text-green-900 dark:text-green-100">Mobile Optimization</h4>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      This panel helps optimize your experience for mobile devices. Enable features that work best for your device and preferences.
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <h4 className="font-medium mb-2 text-yellow-900 dark:text-yellow-100">Touch Gestures</h4>
                    <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                      <li>• Swipe left/right to navigate</li>
                      <li>• Swipe up/down to scroll</li>
                      <li>• Pinch to zoom (if enabled)</li>
                      <li>• Long press for context menus</li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={() => {

                        // Reset to defaults
                        setSettings({

                          touchOptimization: true,
                          gestureSupport: true,
                          pinchZoom: true,
                          rotationSupport: true,
                          hapticFeedback: true,
                          adaptiveLayout: true,
                          mobileNavigation: true,
                          touchTargets: true,
                          swipeGestures: true,
                          orientationLock: 'auto',
                          fontSize: 'medium',
                          contrast: 'normal',
                          brightness: 'auto'
                        });
                      }}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Reset to Defaults
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gesture History Indicator */}
      {gestureHistory.length > 0 && (
        <div className="fixed top-4 left-4 z-50 p-2 bg-green-600 text-white rounded text-xs max-w-xs">
          <div className="font-medium mb-1">Recent Gestures:</div>
          <div className="space-y-1">
            {gestureHistory.slice(-3).map((gesture, index) => (
              <div key={index} className="text-xs">
                {gesture.type}: {gesture.details}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};