import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Wifi, 
  WifiOff, 
  Battery, 
  BatteryCharging,
  Volume2,
  VolumeX,
  RotateCcw,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Zap,
  Shield,
  Eye,
  EyeOff,
  Smartphone as MobileIcon,
  Tablet as TabletIcon,
  Monitor as DesktopIcon,
  Wifi as WifiIcon,
  Battery as BatteryIcon,
  Volume2 as VolumeIcon,
  RotateCcw as RotateIcon,
  Settings as SettingsIcon,
  X as CloseIcon,
  CheckCircle as CheckIcon,
  AlertTriangle as AlertIcon,
  Info as InfoIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon
} from 'lucide-react';

interface MobileOptimization {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  category: 'touch' | 'layout' | 'performance' | 'accessibility';
  impact: 'low' | 'medium' | 'high';
}

interface TouchGesture {
  type: string;
  direction?: string;
  distance?: number;
  duration?: number;
}

export function MobileExperienceEnhancer() {
  const [isOpen, setIsOpen] = useState(false);
  const [deviceType, setDeviceType] = useState('desktop');
  const [touchGestures, setTouchGestures] = useState<Set<string>>(new Set());
  const [mobileOptimizations, setMobileOptimizations] = useState<Set<string>>(new Set());
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Touch gesture handlers
  const [touchStart, setTouchStart] = useState<Touch | null>(null);
  const [touchEnd, setTouchEnd] = useState<Touch | null>(null);
  const [pinchDistance, setPinchDistance] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);

  // Mobile-specific settings
  const [mobileFontSize, setMobileFontSize] = useState(16);
  const [mobileSpacing, setMobileSpacing] = useState(1);
  const [mobileLayout, setMobileLayout] = useState('grid');
  const [mobileTheme, setMobileTheme] = useState('auto');
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
      description: 'Optimize performance for mobile devices',
      enabled: false,
      category: 'performance',
      impact: 'medium'
    },
    {
      id: 'accessibility-enhancement',
      name: 'Accessibility Enhancement',
      description: 'Enhance accessibility for mobile users',
      enabled: false,
      category: 'accessibility',
      impact: 'medium'
    }
  ];

  // Touch event handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setTouchStart(e.touches[0]);
    } else if (e.touches.length === 2) {
      // Handle pinch and rotate
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      setPinchDistance(distance);
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      setPinchDistance(distance);
    }
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStart && touchEnd) {
      const deltaX = touchEnd.clientX - touchStart.clientX;
      const deltaY = touchEnd.clientY - touchStart.clientY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      if (distance > 50) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX > 0) {
            setTouchGestures(prev => new Set([...prev, 'swipe-right']));
          } else {
            setTouchGestures(prev => new Set([...prev, 'swipe-left']));
          }
        } else {
          if (deltaY > 0) {
            setTouchGestures(prev => new Set([...prev, 'swipe-down']));
          } else {
            setTouchGestures(prev => new Set([...prev, 'swipe-up']));
          }
        }
      }
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd]);

  // Apply mobile optimizations
  const applyMobileOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      // Simulate optimization process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Apply optimizations
      setMobileOptimizations(new Set(['touch-optimization', 'gesture-support', 'mobile-layout']));
      
      // Update CSS variables for mobile
      document.documentElement.style.setProperty('--mobile-font-size', `${mobileFontSize}px`);
      document.documentElement.style.setProperty('--mobile-spacing', mobileSpacing.toString());
      document.documentElement.style.setProperty('--mobile-layout', mobileLayout);
      
      // Apply theme
      if (mobileTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else if (mobileTheme === 'light') {
        document.documentElement.classList.remove('dark');
      }
      
      // Apply animations
      if (!mobileAnimations) {
        document.documentElement.style.setProperty('--animation-duration', '0s');
      }
      
    } catch (error) {
      console.error('Failed to apply mobile optimizations:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [mobileFontSize, mobileSpacing, mobileLayout, mobileTheme, mobileAnimations]);

  // Get device icon
  const getDeviceIcon = () => {
    switch (deviceType) {
      case 'mobile':
        return <MobileIcon className="w-6 h-6" />;
      case 'tablet':
        return <TabletIcon className="w-6 h-6" />;
      default:
        return <DesktopIcon className="w-6 h-6" />;
    }
  };

  if (deviceType === 'desktop') {
    return null; // Don't show on desktop
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Mobile Experience Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg border-2 border-white/20 flex items-center justify-center hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Smartphone className="w-6 h-6" />
      </motion.button>

      {/* Mobile Experience Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 left-0 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-700 max-h-96 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center space-x-3">
                {getDeviceIcon()}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Mobile Experience
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 capitalize">
                    {deviceType} optimizations
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Device Info */}
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Device Type:</span>
                  <span className="font-medium text-slate-900 dark:text-white capitalize">{deviceType}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-slate-600 dark:text-slate-400">Screen Width:</span>
                  <span className="font-medium text-slate-900 dark:text-white">{window.innerWidth}px</span>
                </div>
              </div>

              {/* Touch Gestures */}
              <div>
                <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">Touch Gestures</h4>
                <div className="grid grid-cols-2 gap-2">
                  {Array.from(touchGestures).map((gesture) => (
                    <div
                      key={gesture}
                      className="flex items-center space-x-2 px-3 py-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 rounded-lg text-sm"
                    >
                      <CheckIcon className="w-4 h-4" />
                      <span className="capitalize">{gesture.replace('-', ' ')}</span>
                    </div>
                  ))}
                  {touchGestures.size === 0 && (
                    <div className="col-span-2 text-center text-slate-500 dark:text-slate-400 text-sm py-4">
                      No gestures detected yet
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Settings */}
              <div>
                <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">Mobile Settings</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-slate-600 dark:text-slate-400">Font Size</label>
                    <input
                      type="range"
                      min="12"
                      max="24"
                      value={mobileFontSize}
                      onChange={(e) => setMobileFontSize(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <span className="text-xs text-slate-500">{mobileFontSize}px</span>
                  </div>
                  
                  <div>
                    <label className="text-xs text-slate-600 dark:text-slate-400">Spacing</label>
                    <input
                      type="range"
                      min="0.5"
                      max="2"
                      step="0.1"
                      value={mobileSpacing}
                      onChange={(e) => setMobileSpacing(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <span className="text-xs text-slate-500">{mobileSpacing}x</span>
                  </div>
                </div>
              </div>

              {/* Optimize Button */}
              <button
                onClick={applyMobileOptimizations}
                disabled={isOptimizing}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isOptimizing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Optimizing...</span>
                  </>
                ) : (
                  <>
                    <ZapIcon className="w-4 h-4" />
                    <span>Optimize Mobile Experience</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}