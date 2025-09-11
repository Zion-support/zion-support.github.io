import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  RotateCw, 
  Touch, 
  Hand, 
  Wifi, 
  Battery, 
  Settings, 
  X, 
  CheckCircle, 
  AlertTriangle, 
  Info,
  Zap,
  Shield,
  Target,
  Award,
  BarChart3,
  Palette,
  RotateCcw,
  Save,
  Loader2,
  Smartphone as PhoneIcon,
  Wifi as WifiIcon,
  Battery as BatteryIcon,
  Signal,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Eye,
  EyeOff,
  Fingerprint,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Pinch,
  RotateCw as Rotate,
  Shake,
  MousePointer,
  Clock,
  DoubleArrow,
  Move
} from 'lucide-react';

interface MobileSettings {
  touchGestures: boolean;
  orientationLock: boolean;
  mobileOptimizations: boolean;
  pwaFeatures: boolean;
  touchFeedback: boolean;
  hapticFeedback: boolean;
  adaptiveLayout: boolean;
  mobileNavigation: boolean;
  touchTargets: boolean;
  mobilePerformance: boolean;
  gestureHistory: boolean;
  mobileAnalytics: boolean;
  deviceOrientation: 'portrait' | 'landscape' | 'auto';
  touchSensitivity: 'low' | 'medium' | 'high';
  hapticIntensity: 'light' | 'medium' | 'strong';
}

interface MobileFeature {
  id: string;
  name: string;
  description: string;
  category: 'touch' | 'performance' | 'navigation' | 'accessibility' | 'pwa';
  enabled: boolean;
  priority: 'high' | 'medium' | 'low';
  impact: 'high' | 'medium' | 'low';
}

interface TouchGesture {
  type: 'swipe' | 'pinch' | 'rotate' | 'longPress' | 'doubleTap' | 'shake';
  direction?: 'left' | 'right' | 'up' | 'down';
  timestamp: number;
  coordinates: { x: number; y: number };
  intensity?: number;
}

interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  platform: 'ios' | 'android' | 'web' | 'unknown';
  screenSize: { width: number; height: number };
  pixelRatio: number;
  orientation: 'portrait' | 'landscape';
  touchSupport: boolean;
  pwaSupport: boolean;
  networkType: string;
  batteryLevel: number;
}

export function MobileExperienceEnhancer({ 
  enabled = true 
}: { 
  enabled?: boolean; 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<MobileSettings>({
    touchGestures: true,
    orientationLock: false,
    mobileOptimizations: true,
    pwaFeatures: true,
    touchFeedback: true,
    hapticFeedback: false,
    adaptiveLayout: true,
    mobileNavigation: true,
    touchTargets: true,
    mobilePerformance: true,
    gestureHistory: true,
    mobileAnalytics: true,
    deviceOrientation: 'auto',
    touchSensitivity: 'medium',
    hapticIntensity: 'medium'
  });

  const [features, setFeatures] = useState<MobileFeature[]>([
    {
      id: 'touch-gestures',
      name: 'Touch Gestures',
      description: 'Advanced touch gesture recognition and handling',
      category: 'touch',
      enabled: true,
      priority: 'high',
      impact: 'high'
    },
    {
      id: 'mobile-optimizations',
      name: 'Mobile Optimizations',
      description: 'Performance and layout optimizations for mobile devices',
      category: 'performance',
      enabled: true,
      priority: 'high',
      impact: 'high'
    },
    {
      id: 'pwa-features',
      name: 'PWA Features',
      description: 'Progressive Web App capabilities and offline support',
      category: 'pwa',
      enabled: true,
      priority: 'medium',
      impact: 'medium'
    },
    {
      id: 'adaptive-layout',
      name: 'Adaptive Layout',
      description: 'Responsive design that adapts to different screen sizes',
      category: 'navigation',
      enabled: true,
      priority: 'high',
      impact: 'high'
    },
    {
      id: 'mobile-navigation',
      name: 'Mobile Navigation',
      description: 'Touch-optimized navigation and menu systems',
      category: 'navigation',
      enabled: true,
      priority: 'high',
      impact: 'high'
    },
    {
      id: 'touch-targets',
      name: 'Touch Targets',
      description: 'Properly sized touch targets for mobile interaction',
      category: 'accessibility',
      enabled: true,
      priority: 'medium',
      impact: 'medium'
    },
    {
      id: 'mobile-performance',
      name: 'Mobile Performance',
      description: 'Performance monitoring and optimization for mobile',
      category: 'performance',
      enabled: true,
      priority: 'high',
      impact: 'high'
    },
    {
      id: 'gesture-history',
      name: 'Gesture History',
      description: 'Track and analyze user gesture patterns',
      category: 'touch',
      enabled: false,
      priority: 'low',
      impact: 'low'
    }
  ]);

  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [touchGestures, setTouchGestures] = useState<TouchGesture[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [mobileScore, setMobileScore] = useState(0);
  const [activeGestures, setActiveGestures] = useState<string[]>([]);

  const mobileRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const gestureTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect device information
  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent;
      const screen = window.screen;
      
      let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';
      let platform: 'ios' | 'android' | 'web' | 'unknown' = 'unknown';
      
      // Detect platform
      if (/iPad|iPhone|iPod/.test(userAgent)) {
        platform = 'ios';
        type = /iPad/.test(userAgent) ? 'tablet' : 'mobile';
      } else if (/Android/.test(userAgent)) {
        platform = 'android';
        type = screen.width >= 768 ? 'tablet' : 'mobile';
      } else if (/Windows|Mac|Linux/.test(userAgent)) {
        platform = 'web';
        type = 'desktop';
      }
      
      // Detect mobile by screen size
      if (screen.width <= 768) {
        type = screen.width <= 480 ? 'mobile' : 'tablet';
      }
      
      const deviceInfo: DeviceInfo = {
        type,
        platform,
        screenSize: { width: screen.width, height: screen.height },
        pixelRatio: window.devicePixelRatio || 1,
        orientation: screen.width > screen.height ? 'landscape' : 'portrait',
        touchSupport: 'ontouchstart' in window,
        pwaSupport: 'serviceWorker' in navigator,
        networkType: (navigator as any).connection?.effectiveType || 'unknown',
        batteryLevel: 0
      };
      
      setDeviceInfo(deviceInfo);
      
      // Get battery level if available
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          setDeviceInfo(prev => prev ? { ...prev, batteryLevel: battery.level * 100 } : null);
        });
      }
    };
    
    detectDevice();
    window.addEventListener('resize', detectDevice);
    window.addEventListener('orientationchange', detectDevice);
    
    return () => {
      window.removeEventListener('resize', detectDevice);
      window.removeEventListener('orientationchange', detectDevice);
    };
  }, []);

  // Touch gesture handling
  useEffect(() => {
    if (!settings.touchGestures) return;
    
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        touchStartRef.current = {
          x: touch.clientX,
          y: touch.clientY,
          time: Date.now()
        };
      }
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current || e.touches.length !== 0) return;
      
      const touch = e.changedTouches[0];
      const start = touchStartRef.current;
      const deltaX = touch.clientX - start.x;
      const deltaY = touch.clientY - start.y;
      const deltaTime = Date.now() - start.time;
      
      // Detect gesture type
      let gestureType: TouchGesture['type'] = 'tap';
      let direction: TouchGesture['direction'] | undefined;
      
      if (deltaTime < 300 && Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
        gestureType = 'tap';
      } else if (deltaTime > 500) {
        gestureType = 'longPress';
      } else if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        gestureType = 'swipe';
        direction = deltaX > 0 ? 'right' : 'left';
      } else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
        gestureType = 'swipe';
        direction = deltaY > 0 ? 'down' : 'up';
      }
      
      const gesture: TouchGesture = {
        type: gestureType,
        direction,
        timestamp: Date.now(),
        coordinates: { x: touch.clientX, y: touch.clientY },
        intensity: Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      };
      
      setTouchGestures(prev => [...prev.slice(-9), gesture]);
      handleGesture(gesture);
      
      touchStartRef.current = null;
    };
    
    const handleGesture = (gesture: TouchGesture) => {
      // Handle different gesture types
      switch (gesture.type) {
        case 'swipe':
          if (gesture.direction === 'left') {
            // Navigate forward
            console.log('Swipe left - navigate forward');
          } else if (gesture.direction === 'right') {
            // Navigate back
            console.log('Swipe right - navigate back');
          }
          break;
        case 'longPress':
          // Show context menu
          console.log('Long press - show context menu');
          break;
        case 'tap':
          // Handle tap
          console.log('Tap detected');
          break;
      }
      
      // Add to active gestures
      setActiveGestures(prev => [...prev, `${gesture.type}${gesture.direction ? `-${gesture.direction}` : ''}`]);
      
      // Remove after 3 seconds
      setTimeout(() => {
        setActiveGestures(prev => prev.filter(g => g !== `${gesture.type}${gesture.direction ? `-${gesture.direction}` : ''}`));
      }, 3000);
    };
    
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [settings.touchGestures]);

  // Apply mobile optimizations
  const applyMobileOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      // Apply touch target optimizations
      if (settings.touchTargets) {
        document.body.classList.add('mobile-touch-targets');
        document.documentElement.style.setProperty('--zion-touch-target-size', '44px');
      }
      
      // Apply mobile navigation
      if (settings.mobileNavigation) {
        document.body.classList.add('mobile-navigation');
      }
      
      // Apply adaptive layout
      if (settings.adaptiveLayout) {
        document.body.classList.add('mobile-adaptive-layout');
      }
      
      // Apply touch feedback
      if (settings.touchFeedback) {
        document.body.classList.add('mobile-touch-feedback');
      }
      
      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Calculate mobile score
      const enabledFeatures = features.filter(f => f.enabled).length;
      const totalFeatures = features.length;
      const score = Math.round((enabledFeatures / totalFeatures) * 100);
      setMobileScore(score);
      
    } catch (error) {
      console.error('Mobile optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [settings, features]);

  // Toggle mobile features
  const toggleFeature = useCallback((featureId: string) => {
    setFeatures(prev => prev.map(f => 
      f.id === featureId ? { ...f, enabled: !f.enabled } : f
    ));
    
    // Apply optimizations after feature toggle
    setTimeout(applyMobileOptimizations, 100);
  }, [applyMobileOptimizations]);

  // Save mobile settings
  const saveSettings = useCallback(async () => {
    setIsOptimizing(true);
    try {
      localStorage.setItem('zion-mobile-settings', JSON.stringify(settings));
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Failed to save mobile settings:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [settings]);

  // Load mobile settings
  const loadSettings = useCallback(async () => {
    setIsOptimizing(true);
    try {
      const saved = localStorage.getItem('zion-mobile-settings');
      if (saved) {
        const parsedSettings = JSON.parse(saved);
        setSettings(parsedSettings);
      }
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error('Failed to load mobile settings:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, []);

  // Reset to default settings
  const resetSettings = useCallback(() => {
    const defaultSettings: MobileSettings = {
      touchGestures: true,
      orientationLock: false,
      mobileOptimizations: true,
      pwaFeatures: true,
      touchFeedback: true,
      hapticFeedback: false,
      adaptiveLayout: true,
      mobileNavigation: true,
      touchTargets: true,
      mobilePerformance: true,
      gestureHistory: true,
      mobileAnalytics: true,
      deviceOrientation: 'auto',
      touchSensitivity: 'medium',
      hapticIntensity: 'medium'
    };
    
    setSettings(defaultSettings);
    setTouchGestures([]);
    setActiveGestures([]);
    setMobileScore(0);
  }, []);

  // Calculate mobile score on mount and when features change
  useEffect(() => {
    const enabledFeatures = features.filter(f => f.enabled).length;
    const totalFeatures = features.length;
    const score = Math.round((enabledFeatures / totalFeatures) * 100);
    setMobileScore(score);
  }, [features]);

  if (!enabled) return null;

  return (
    <>
      {/* Floating Mobile Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-20 z-50 p-3 bg-gradient-to-r from-zion-green to-zion-blue rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Mobile Experience Settings"
      >
        <Smartphone className="w-6 h-6 text-white" />
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      </motion.button>

      {/* Mobile Experience Dashboard Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            ref={mobileRef}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zion-slate-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-zion-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-zion-green to-zion-blue rounded-lg">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Mobile Experience Center
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Advanced mobile optimizations and touch gestures
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-zion-slate-800 rounded-lg transition-colors"
                  aria-label="Close mobile experience settings"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* Device Information */}
                {deviceInfo && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Device Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                        <div className="flex items-center justify-between mb-2">
                          <PhoneIcon className="w-5 h-5 text-zion-green" />
                          <span className="text-sm text-gray-500">Device Type</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white capitalize">
                          {deviceInfo.type}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {deviceInfo.platform}
                        </div>
                      </div>
                      
                      <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                        <div className="flex items-center justify-between mb-2">
                          <Monitor className="w-5 h-5 text-zion-blue" />
                          <span className="text-sm text-gray-500">Screen</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {deviceInfo.screenSize.width} × {deviceInfo.screenSize.height}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {deviceInfo.pixelRatio}x density
                        </div>
                      </div>
                      
                      <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                        <div className="flex items-center justify-between mb-2">
                          <WifiIcon className="w-5 h-5 text-zion-purple" />
                          <span className="text-sm text-gray-500">Network</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white capitalize">
                          {deviceInfo.networkType}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {deviceInfo.touchSupport ? 'Touch Enabled' : 'Touch Disabled'}
                        </div>
                      </div>
                      
                      <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                        <div className="flex items-center justify-between mb-2">
                          <BatteryIcon className="w-5 h-5 text-zion-orange" />
                          <span className="text-sm text-gray-500">Battery</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {deviceInfo.batteryLevel.toFixed(0)}%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {deviceInfo.orientation}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mobile Score */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Mobile Experience Score
                  </h3>
                  <div className="p-6 bg-gradient-to-r from-zion-green to-zion-blue rounded-xl text-white">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">{mobileScore}/100</div>
                      <div className="text-lg opacity-90">
                        {mobileScore >= 90 ? 'Excellent' : 
                         mobileScore >= 70 ? 'Good' : 
                         mobileScore >= 50 ? 'Fair' : 'Needs Improvement'}
                      </div>
                      <div className="text-sm opacity-75 mt-2">
                        {features.filter(f => f.enabled).length} of {features.length} features enabled
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <button
                    onClick={() => toggleFeature('touch-gestures')}
                    className={`p-4 rounded-xl border transition-all ${
                      settings.touchGestures
                        ? 'bg-zion-green text-white border-zion-green'
                        : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700 hover:border-zion-green'
                    }`}
                  >
                    <Hand className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">Touch Gestures</span>
                  </button>

                  <button
                    onClick={() => toggleFeature('mobile-optimizations')}
                    className={`p-4 rounded-xl border transition-all ${
                      settings.mobileOptimizations
                        ? 'bg-zion-green text-white border-zion-green'
                        : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700 hover:border-zion-green'
                    }`}
                  >
                    <Zap className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">Optimizations</span>
                  </button>

                  <button
                    onClick={() => toggleFeature('pwa-features')}
                    className={`p-4 rounded-xl border transition-all ${
                      settings.pwaFeatures
                        ? 'bg-zion-green text-white border-zion-green'
                        : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700 hover:border-zion-green'
                    }`}
                  >
                    <Shield className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">PWA Features</span>
                  </button>

                  <button
                    onClick={() => toggleFeature('adaptive-layout')}
                    className={`p-4 rounded-xl border transition-all ${
                      settings.adaptiveLayout
                        ? 'bg-zion-green text-white border-zion-green'
                        : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700 hover:border-zion-green'
                    }`}
                  >
                    <Target className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">Adaptive Layout</span>
                  </button>
                </div>

                {/* Mobile Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Mobile Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature) => (
                      <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          feature.enabled
                            ? 'bg-zion-green/10 border-zion-green'
                            : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700 hover:border-zion-green'
                        }`}
                        onClick={() => toggleFeature(feature.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                feature.priority === 'high' ? 'bg-red-100 text-red-800' :
                                feature.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {feature.priority.toUpperCase()}
                              </span>
                              <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                                {feature.category}
                              </span>
                            </div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                              {feature.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {feature.description}
                            </p>
                          </div>
                          
                          <div className={`w-5 h-5 rounded-full border-2 transition-colors ${
                            feature.enabled
                              ? 'bg-zion-green border-zion-green'
                              : 'border-gray-300 dark:border-gray-600'
                          }`}>
                            {feature.enabled && (
                              <CheckCircle className="w-5 h-5 text-white" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Touch Gesture History */}
                {settings.gestureHistory && touchGestures.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Recent Touch Gestures
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {touchGestures.slice(-6).reverse().map((gesture, index) => (
                        <div
                          key={index}
                          className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700"
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            {gesture.type === 'swipe' && <ArrowLeft className="w-4 h-4 text-zion-blue" />}
                            {gesture.type === 'tap' && <MousePointer className="w-4 h-4 text-zion-green" />}
                            {gesture.type === 'longPress' && <Clock className="w-4 h-4 text-zion-purple" />}
                            <span className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                              {gesture.type}
                              {gesture.direction && ` ${gesture.direction}`}
                            </span>
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {new Date(gesture.timestamp).toLocaleTimeString()}
                          </div>
                          {gesture.intensity && (
                            <div className="text-xs text-gray-500">
                              Intensity: {gesture.intensity.toFixed(0)}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Active Gestures */}
                {activeGestures.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Active Gestures
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {activeGestures.map((gesture, index) => (
                        <motion.span
                          key={index}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="px-3 py-1 bg-zion-green text-white rounded-full text-sm font-medium"
                        >
                          {gesture}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Advanced Settings */}
                <div className="mb-8">
                  <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="flex items-center space-x-2 text-zion-green hover:text-zion-green-dark transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    <span>{showAdvanced ? 'Hide' : 'Show'} Advanced Settings</span>
                  </button>
                  
                  {showAdvanced && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 p-4 bg-gray-50 dark:bg-zion-slate-800 rounded-xl"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Touch Sensitivity
                          </label>
                          <select
                            value={settings.touchSensitivity}
                            onChange={(e) => setSettings(prev => ({ ...prev, touchSensitivity: e.target.value as any }))}
                            className="w-full p-2 border border-gray-300 dark:border-zion-slate-600 rounded-lg bg-white dark:bg-zion-slate-700"
                          >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Haptic Intensity
                          </label>
                          <select
                            value={settings.hapticIntensity}
                            onChange={(e) => setSettings(prev => ({ ...prev, hapticIntensity: e.target.value as any }))}
                            className="w-full p-2 border border-gray-300 dark:border-zion-slate-600 rounded-lg bg-white dark:bg-zion-slate-700"
                          >
                            <option value="light">Light</option>
                            <option value="medium">Medium</option>
                            <option value="strong">Strong</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Device Orientation
                          </label>
                          <select
                            value={settings.deviceOrientation}
                            onChange={(e) => setSettings(prev => ({ ...prev, deviceOrientation: e.target.value as any }))}
                            className="w-full p-2 border border-gray-300 dark:border-zion-slate-600 rounded-lg bg-white dark:bg-zion-slate-700"
                          >
                            <option value="auto">Auto</option>
                            <option value="portrait">Portrait</option>
                            <option value="landscape">Landscape</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-zion-slate-700">
                  <div className="flex space-x-3">
                    <button
                      onClick={saveSettings}
                      disabled={isOptimizing}
                      className="flex items-center space-x-2 px-4 py-2 bg-zion-green text-white rounded-lg hover:bg-zion-green-dark transition-colors disabled:opacity-50"
                    >
                      {isOptimizing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                      <span>Save Settings</span>
                    </button>
                    
                    <button
                      onClick={loadSettings}
                      disabled={isOptimizing}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-zion-slate-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-zion-slate-600 transition-colors disabled:opacity-50"
                    >
                      {isOptimizing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Settings className="w-4 h-4" />}
                      <span>Load Settings</span>
                    </button>
                    
                    <button
                      onClick={resetSettings}
                      className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reset to Default</span>
                    </button>
                  </div>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Mobile-first design & touch optimization
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Mobile Styles */}
      <style jsx global>{`
        .mobile-touch-targets button,
        .mobile-touch-targets a,
        .mobile-touch-targets input,
        .mobile-touch-targets select {
          min-height: 44px !important;
          min-width: 44px !important;
        }
        
        .mobile-navigation .nav-item {
          padding: 12px 16px !important;
          margin: 4px 0 !important;
        }
        
        .mobile-adaptive-layout {
          --zion-mobile-padding: 16px !important;
          --zion-mobile-margin: 8px !important;
        }
        
        .mobile-touch-feedback *:active {
          transform: scale(0.98) !important;
          transition: transform 0.1s ease !important;
        }
        
        @media (max-width: 768px) {
          .mobile-adaptive-layout {
            --zion-container-padding: 16px !important;
            --zion-section-margin: 24px !important;
          }
        }
      `}</style>
    </>
  );
}