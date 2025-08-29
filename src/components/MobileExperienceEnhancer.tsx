import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Hand, 
  Gesture, 
  ArrowLeft, 
  ArrowRight, 
  ArrowUp, 
  ArrowDown,
  ZoomIn,
  ZoomOut,
  RotateCw,
  RotateCcw,
  Move,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Wifi,
  Battery,
  Signal,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Palette,
  Type,
  Layout,
  Grid,
  List,
  Maximize,
  Minimize,
  Smartphone as PhoneIcon,
  Tablet as TabletIcon,
  Monitor as DesktopIcon
} from 'lucide-react';

interface MobileOptimization {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  category: 'performance' | 'touch' | 'visual' | 'layout';
  impact: 'high' | 'medium' | 'low';
}

interface TouchGesture {
  id: string;
  name: string;
  description: string;
  gesture: string;
  action: string;
  enabled: boolean;
}

export function MobileExperienceEnhancer() {
  const [isOpen, setIsOpen] = useState(false);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [touchGestures, setTouchGestures] = useState<Set<string>>(new Set());
  const [mobileOptimizations, setMobileOptimizations] = useState<Set<string>>(new Set());
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  // Touch gesture handlers
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);
  const [pinchDistance, setPinchDistance] = useState<number>(0);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  
  // Mobile-specific settings
  const [mobileFontSize, setMobileFontSize] = useState(16);
  const [mobileSpacing, setMobileSpacing] = useState(1);
  const [mobileLayout, setMobileLayout] = useState<'grid' | 'list' | 'compact'>('grid');
  const [mobileTheme, setMobileTheme] = useState<'light' | 'dark' | 'auto'>('auto');
  const [mobileAnimations, setMobileAnimations] = useState(true);
  const [mobileGestures, setMobileGestures] = useState(true);

  // Detect device type
  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    return () => window.removeEventListener('resize', detectDevice);
  }, []);

  // Mobile optimizations
  const mobileOptimizationFeatures: MobileOptimization[] = [
    {
      id: 'touch-optimization',
      name: 'Touch Optimization',
      description: 'Optimize touch targets and interactions for mobile devices',
      enabled: false,
      category: 'touch',
      impact: 'high'
    },
    {
      id: 'gesture-support',
      name: 'Gesture Support',
      description: 'Enable swipe, pinch, and rotate gestures',
      enabled: false,
      category: 'touch',
      impact: 'high'
    },
    {
      id: 'mobile-layout',
      name: 'Mobile Layout',
      description: 'Optimize layout for mobile screens',
      enabled: false,
      category: 'layout',
      impact: 'high'
    },
    {
      id: 'performance-optimization',
      name: 'Performance Optimization',
      description: 'Reduce animations and optimize for mobile performance',
      enabled: false,
      category: 'performance',
      impact: 'medium'
    },
    {
      id: 'visual-optimization',
      name: 'Visual Optimization',
      description: 'Adjust colors, fonts, and spacing for mobile',
      enabled: false,
      category: 'visual',
      impact: 'medium'
    }
  ];

  // Touch gestures
  const availableTouchGestures: TouchGesture[] = [
    {
      id: 'swipe-left',
      name: 'Swipe Left',
      description: 'Navigate to next page or item',
      gesture: 'Swipe left →',
      action: 'Next',
      enabled: false
    },
    {
      id: 'swipe-right',
      name: 'Swipe Right',
      description: 'Navigate to previous page or item',
      gesture: 'Swipe right ←',
      action: 'Previous',
      enabled: false
    },
    {
      id: 'swipe-up',
      name: 'Swipe Up',
      description: 'Show additional options or expand content',
      gesture: 'Swipe up ↑',
      action: 'Expand',
      enabled: false
    },
    {
      id: 'swipe-down',
      name: 'Swipe Down',
      description: 'Refresh content or collapse options',
      gesture: 'Swipe down ↓',
      action: 'Refresh',
      enabled: false
    },
    {
      id: 'pinch-zoom',
      name: 'Pinch Zoom',
      description: 'Zoom in/out on content',
      gesture: 'Pinch in/out',
      action: 'Zoom',
      enabled: false
    },
    {
      id: 'rotate',
      name: 'Rotate',
      description: 'Rotate content or view',
      gesture: 'Two finger rotate',
      action: 'Rotate',
      enabled: false
    },
    {
      id: 'double-tap',
      name: 'Double Tap',
      description: 'Quick action or zoom',
      gesture: 'Double tap',
      action: 'Quick Action',
      enabled: false
    },
    {
      id: 'long-press',
      name: 'Long Press',
      description: 'Context menu or additional options',
      gesture: 'Long press',
      action: 'Context Menu',
      enabled: false
    }
  ];

  // Touch event handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!mobileGestures) return;
    
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
    
    // Handle pinch start
    if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      setPinchDistance(distance);
    }
  }, [mobileGestures]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!mobileGestures) return;
    
    // Handle pinch zoom
    if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      
      if (pinchDistance > 0) {
        const scale = distance / pinchDistance;
        document.documentElement.style.setProperty('--mobile-zoom', scale.toString());
      }
      
      // Handle rotation
      const angle = Math.atan2(
        touch2.clientY - touch1.clientY,
        touch2.clientX - touch1.clientX
      ) * 180 / Math.PI;
      setRotationAngle(angle);
    }
  }, [mobileGestures, pinchDistance]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!mobileGestures || !touchStart) return;
    
    const touch = e.changedTouches[0];
    const endX = touch.clientX;
    const endY = touch.clientY;
    
    const diffX = touchStart.x - endX;
    const diffY = touchStart.y - endY;
    
    // Determine swipe direction
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 50) {
        handleSwipe('left');
      } else if (diffX < -50) {
        handleSwipe('right');
      }
    } else {
      if (diffY > 50) {
        handleSwipe('up');
      } else if (diffY < -50) {
        handleSwipe('down');
      }
    }
    
    setTouchStart(null);
    setTouchEnd(null);
    setPinchDistance(0);
    setRotationAngle(0);
  }, [mobileGestures, touchStart]);

  // Handle swipe gestures
  const handleSwipe = useCallback((direction: 'left' | 'right' | 'up' | 'down') => {
    const gestureId = `swipe-${direction}`;
    if (touchGestures.has(gestureId)) {
      // Execute gesture action
      switch (direction) {
        case 'left':
          // Navigate next
          console.log('Swipe left - Next');
          break;
        case 'right':
          // Navigate previous
          console.log('Swipe right - Previous');
          break;
        case 'up':
          // Expand
          console.log('Swipe up - Expand');
          break;
        case 'down':
          // Refresh
          console.log('Swipe down - Refresh');
          break;
      }
    }
  }, [touchGestures]);

  // Apply mobile optimizations
  const applyMobileOptimization = useCallback((optimizationId: string, enabled: boolean) => {
    setMobileOptimizations(prev => {
      const newSet = new Set(prev);
      if (enabled) {
        newSet.add(optimizationId);
      } else {
        newSet.delete(optimizationId);
      }
      return newSet;
    });

    // Apply specific optimization
    switch (optimizationId) {
      case 'touch-optimization':
        if (enabled) {
          document.documentElement.classList.add('touch-optimized');
          // Increase touch target sizes
          document.documentElement.style.setProperty('--touch-target-size', '44px');
        } else {
          document.documentElement.classList.remove('touch-optimized');
          document.documentElement.style.removeProperty('--touch-target-size');
        }
        break;
      
      case 'gesture-support':
        setMobileGestures(enabled);
        break;
      
      case 'mobile-layout':
        if (enabled) {
          document.documentElement.classList.add('mobile-layout');
        } else {
          document.documentElement.classList.remove('mobile-layout');
        }
        break;
      
      case 'performance-optimization':
        setMobileAnimations(!enabled);
        if (enabled) {
          document.documentElement.classList.add('mobile-performance');
        } else {
          document.documentElement.classList.remove('mobile-performance');
        }
        break;
      
      case 'visual-optimization':
        if (enabled) {
          document.documentElement.classList.add('mobile-visual');
        } else {
          document.documentElement.classList.remove('mobile-visual');
        }
        break;
    }
  }, []);

  // Toggle touch gesture
  const toggleTouchGesture = useCallback((gestureId: string, enabled: boolean) => {
    setTouchGestures(prev => {
      const newSet = new Set(prev);
      if (enabled) {
        newSet.add(gestureId);
      } else {
        newSet.delete(gestureId);
      }
      return newSet;
    });
  }, []);

  // Apply mobile settings
  useEffect(() => {
    document.documentElement.style.setProperty('--mobile-font-size', `${mobileFontSize}px`);
  }, [mobileFontSize]);

  useEffect(() => {
    document.documentElement.style.setProperty('--mobile-spacing', mobileSpacing.toString());
  }, [mobileSpacing]);

  useEffect(() => {
    document.documentElement.classList.remove('layout-grid', 'layout-list', 'layout-compact');
    document.documentElement.classList.add(`layout-${mobileLayout}`);
  }, [mobileLayout]);

  useEffect(() => {
    if (mobileTheme === 'auto') {
      document.documentElement.classList.remove('theme-light', 'theme-dark');
      document.documentElement.classList.add('theme-auto');
    } else {
      document.documentElement.classList.remove('theme-auto');
      document.documentElement.classList.add(`theme-${mobileTheme}`);
    }
  }, [mobileTheme]);

  // Auto-optimize for mobile
  const autoOptimizeMobile = useCallback(async () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Enable all mobile optimizations
    mobileOptimizationFeatures.forEach(optimization => {
      applyMobileOptimization(optimization.id, true);
    });
    
    // Enable common touch gestures
    ['swipe-left', 'swipe-right', 'double-tap', 'long-press'].forEach(gestureId => {
      toggleTouchGesture(gestureId, true);
    });
    
    setIsOptimizing(false);
  }, [mobileOptimizationFeatures, applyMobileOptimization, toggleTouchGesture]);

  return (
    <>
      {/* Floating Mobile Experience Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-24 z-50 p-3 bg-gradient-to-r from-zion-green to-zion-cyan rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
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
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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
                  <div className="p-2 bg-gradient-to-r from-zion-green to-zion-cyan rounded-lg">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Mobile Experience Center
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Optimize for {deviceType} devices
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-zion-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* Device Detection */}
                <div className="mb-8 p-4 bg-gradient-to-r from-zion-green/10 to-zion-cyan/10 rounded-xl border border-zion-green/20">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Device Detection
                  </h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      {deviceType === 'mobile' ? (
                        <PhoneIcon className="w-8 h-8 text-zion-green" />
                      ) : deviceType === 'tablet' ? (
                        <TabletIcon className="w-8 h-8 text-zion-cyan" />
                      ) : (
                        <DesktopIcon className="w-8 h-8 text-zion-purple" />
                      )}
                      <span className="text-lg font-medium text-gray-900 dark:text-white">
                        {deviceType.charAt(0).toUpperCase() + deviceType.slice(1)}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {window.innerWidth} × {window.innerHeight}px
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <button
                    onClick={() => setMobileFontSize(prev => Math.min(prev + 2, 24))}
                    className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all"
                  >
                    <ZoomIn className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">Increase Text</span>
                  </button>
                  
                  <button
                    onClick={() => setMobileFontSize(prev => Math.max(prev - 2, 12))}
                    className="p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all"
                  >
                    <ZoomOut className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">Decrease Text</span>
                  </button>
                  
                  <button
                    onClick={() => setMobileSpacing(prev => prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1)}
                    className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all"
                  >
                    <Layout className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">
                      Spacing: {mobileSpacing === 1 ? 'Normal' : mobileSpacing === 1.5 ? 'Wide' : 'Extra Wide'}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => setMobileLayout(prev => prev === 'grid' ? 'list' : prev === 'list' ? 'compact' : 'grid')}
                    className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all"
                  >
                    {mobileLayout === 'grid' ? (
                      <Grid className="w-6 h-6 mx-auto mb-2" />
                    ) : mobileLayout === 'list' ? (
                      <List className="w-6 h-6 mx-auto mb-2" />
                    ) : (
                      <Minimize className="w-6 h-6 mx-auto mb-2" />
                    )}
                    <span className="text-sm font-medium">
                      Layout: {mobileLayout.charAt(0).toUpperCase() + mobileLayout.slice(1)}
                    </span>
                  </button>
                </div>

                {/* Mobile Optimizations */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Mobile Optimizations
                    </h3>
                    <button
                      onClick={autoOptimizeMobile}
                      disabled={isOptimizing}
                      className="px-4 py-2 bg-zion-green text-white rounded-lg hover:bg-zion-green-dark disabled:opacity-50 transition-colors"
                    >
                      {isOptimizing ? 'Optimizing...' : 'Auto-Optimize'}
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mobileOptimizationFeatures.map((optimization) => (
                      <div
                        key={optimization.id}
                        className={`p-4 rounded-xl border transition-all ${
                          mobileOptimizations.has(optimization.id)
                            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                            : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                optimization.category === 'performance' ? 'bg-red-100 text-red-800' :
                                optimization.category === 'touch' ? 'bg-green-100 text-green-800' :
                                optimization.category === 'visual' ? 'bg-blue-100 text-blue-800' :
                                'bg-purple-100 text-purple-800'
                              }`}>
                                {optimization.category}
                              </span>
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                optimization.impact === 'high' ? 'bg-red-100 text-red-800' :
                                optimization.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {optimization.impact.toUpperCase()}
                              </span>
                            </div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                              {optimization.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {optimization.description}
                            </p>
                          </div>
                          
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              checked={mobileOptimizations.has(optimization.id)}
                              onChange={(e) => applyMobileOptimization(optimization.id, e.target.checked)}
                              className="w-5 h-5 text-zion-green rounded focus:ring-zion-green"
                            />
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Touch Gestures */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Touch Gestures
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {availableTouchGestures.map((gesture) => (
                      <div
                        key={gesture.id}
                        className={`p-4 rounded-xl border transition-all ${
                          touchGestures.has(gesture.id)
                            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                            : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Hand className="w-4 h-4 text-zion-cyan" />
                              <span className="text-xs text-gray-500">
                                {gesture.gesture}
                              </span>
                            </div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                              {gesture.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                              {gesture.description}
                            </p>
                            <div className="text-xs text-zion-cyan font-medium">
                              Action: {gesture.action}
                            </div>
                          </div>
                          
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              checked={touchGestures.has(gesture.id)}
                              onChange={(e) => toggleTouchGesture(gesture.id, e.target.checked)}
                              className="w-5 h-5 text-zion-cyan rounded focus:ring-zion-cyan"
                            />
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advanced Settings */}
                <div className="mb-8">
                  <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="flex items-center space-x-2 text-zion-green hover:text-zion-green-dark transition-colors mb-4"
                  >
                    <Settings className="w-4 h-4" />
                    <span>{showAdvanced ? 'Hide' : 'Show'} Advanced Settings</span>
                  </button>
                  
                  {showAdvanced && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 dark:bg-zion-slate-800 rounded-xl"
                    >
                      {/* Theme Settings */}
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Theme</h4>
                        <div className="space-y-2">
                          {(['light', 'dark', 'auto'] as const).map((theme) => (
                            <label key={theme} className="flex items-center space-x-2">
                              <input
                                type="radio"
                                name="theme"
                                value={theme}
                                checked={mobileTheme === theme}
                                onChange={(e) => setMobileTheme(e.target.value as 'light' | 'dark' | 'auto')}
                                className="w-4 h-4 text-zion-green"
                              />
                              <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">
                                {theme}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Animation Settings */}
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Animations</h4>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={mobileAnimations}
                              onChange={(e) => setMobileAnimations(e.target.checked)}
                              className="w-4 h-4 text-zion-green rounded focus:ring-zion-green"
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              Enable animations
                            </span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={mobileGestures}
                              onChange={(e) => setMobileGestures(e.target.checked)}
                              className="w-4 h-4 text-zion-green rounded focus:ring-zion-green"
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              Enable touch gestures
                            </span>
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Touch Gesture Demo */}
                {mobileGestures && (
                  <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-green/10 p-6 rounded-xl border border-zion-cyan/20">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Touch Gesture Demo
                    </h3>
                    <div className="text-center p-8 bg-white dark:bg-zion-slate-800 rounded-xl border-2 border-dashed border-zion-cyan/50">
                      <Touch className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Try these gestures on this area:
                      </p>
                                             <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                         <div className="p-2 bg-zion-cyan/10 rounded">
                           <ArrowLeft className="w-4 h-4 mx-auto mb-1" />
                           <span>Swipe</span>
                         </div>
                         <div className="p-2 bg-zion-green/10 rounded">
                           <ZoomIn className="w-4 h-4 mx-auto mb-1" />
                           <span>Pinch</span>
                         </div>
                         <div className="p-2 bg-zion-purple/10 rounded">
                           <RotateCw className="w-4 h-4 mx-auto mb-1" />
                           <span>Rotate</span>
                         </div>
                         <div className="p-2 bg-zion-orange/10 rounded">
                           <Hand className="w-4 h-4 mx-auto mb-1" />
                           <span>Tap</span>
                         </div>
                       </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}