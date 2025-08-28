import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  RotateCcw, 
  Wifi, 
  Battery, 
  Zap, 
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Smartphone as PhoneIcon,
  Wifi as WifiIcon,
  Battery as BatteryIcon,
  RotateCcw as RotateIcon,
  Zap as ZapIcon,
  Settings as SettingsIcon,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Moon,
  Sun,
  Maximize,
  Minimize,
  Smartphone as MobileIcon,
  Hand
} from 'lucide-react';

interface MobileMetrics {
  deviceType: 'mobile' | 'tablet' | 'desktop';
  screenSize: { width: number; height: number };
  orientation: 'portrait' | 'landscape';
  touchSupport: boolean;
  batteryLevel: number;
  connectionType: string;
  memoryUsage: number;
  performanceScore: number;
}

interface MobileSettings {
  touchOptimization: boolean;
  gestureSupport: boolean;
  orientationLock: boolean;
  batteryOptimization: boolean;
  dataOptimization: boolean;
  performanceMode: boolean;
  darkMode: boolean;
  fullscreen: boolean;
  touchFeedback: boolean;
  hapticFeedback: boolean;
}

const MobileExperienceEnhancer: React.FC<{ enabled?: boolean }> = ({ enabled = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<MobileMetrics>({
    deviceType: 'desktop',
    screenSize: { width: 0, height: 0 },
    orientation: 'portrait',
    touchSupport: false,
    batteryLevel: 0,
    connectionType: 'unknown',
    memoryUsage: 0,
    performanceScore: 0
  });
  const [settings, setSettings] = useState<MobileSettings>({
    touchOptimization: true,
    gestureSupport: true,
    orientationLock: false,
    batteryOptimization: true,
    dataOptimization: true,
    performanceMode: false,
    darkMode: false,
    fullscreen: false,
    touchFeedback: true,
    hapticFeedback: false
  });
  const [gestureHistory, setGestureHistory] = useState<string[]>([]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Detect device type and capabilities
  const detectDevice = useCallback(() => {
    const userAgent = navigator.userAgent;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    
    let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      deviceType = screenWidth > 768 ? 'tablet' : 'mobile';
    }

    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const orientation = screenWidth > screenHeight ? 'landscape' : 'portrait';

    return {
      deviceType,
      screenSize: { width: screenWidth, height: screenHeight },
      orientation,
      touchSupport
    };
  }, []);

  // Get battery information
  const getBatteryInfo = useCallback(async () => {
    if ('getBattery' in navigator) {
      try {
        const battery = await (navigator as any).getBattery();
        return {
          level: battery.level * 100,
          charging: battery.charging
        };
      } catch (error) {
        console.log('Battery API not supported');
      }
    }
    return { level: 0, charging: false };
  }, []);

  // Get connection information
  const getConnectionInfo = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      return {
        type: connection.effectiveType || 'unknown',
        downlink: connection.downlink || 0,
        rtt: connection.rtt || 0
      };
    }
    return { type: 'unknown', downlink: 0, rtt: 0 };
  }, []);

  // Calculate performance score
  const calculatePerformanceScore = useCallback(() => {
    let score = 100;
    
    // Deduct points for poor performance indicators
    if (metrics.memoryUsage > 80) score -= 20;
    if (metrics.connectionType === 'slow-2g' || metrics.connectionType === '2g') score -= 30;
    if (metrics.batteryLevel < 20) score -= 15;
    if (!metrics.touchSupport && metrics.deviceType === 'mobile') score -= 10;
    
    return Math.max(0, score);
  }, [metrics]);

  // Update metrics
  const updateMetrics = useCallback(async () => {
    const deviceInfo = detectDevice();
    const batteryInfo = await getBatteryInfo();
    const connectionInfo = getConnectionInfo();
    
    const newMetrics: MobileMetrics = {
      ...deviceInfo,
      batteryLevel: batteryInfo.level,
      connectionType: connectionInfo.type,
      memoryUsage: Math.random() * 100, // Simulated for demo
      performanceScore: 0 // Will be calculated after setting metrics
    };
    
    setMetrics(newMetrics);
    
    // Calculate performance score after metrics are set
    setTimeout(() => {
      setMetrics(prev => ({ ...prev, performanceScore: calculatePerformanceScore() }));
    }, 100);
  }, [detectDevice, getBatteryInfo, getConnectionInfo, calculatePerformanceScore]);

  // Touch gesture handling
  const setupTouchGestures = useCallback(() => {
    if (!settings.gestureSupport || !metrics.touchSupport) return;

    let startX = 0;
    let startY = 0;
    let startTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startTime = Date.now();
=======
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
>>>>>>> pr-9693
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
<<<<<<< HEAD
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const endTime = Date.now();
      
      const deltaX = endX - startX;
      const deltaY = endY - startY;
      const duration = endTime - startTime;
      
      // Detect swipe gestures
      if (duration < 500 && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          handleSwipeRight();
        } else {
          handleSwipeLeft();
        }
      }
      
      if (duration < 500 && Math.abs(deltaY) > 50) {
        if (deltaY > 0) {
          handleSwipeDown();
        } else {
          handleSwipeUp();
        }
      }
      
      // Detect tap gestures
      if (duration < 200 && Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
        handleTap();
      }
    };

    const handleSwipeRight = () => {
      const gesture = 'Swipe Right - Navigate Back';
      setGestureHistory(prev => [gesture, ...prev.slice(0, 4)]);
      if (window.history.length > 1) {
        window.history.back();
      }
    };

    const handleSwipeLeft = () => {
      const gesture = 'Swipe Left - Navigate Forward';
      setGestureHistory(prev => [gesture, ...prev.slice(0, 4)]);
      if (window.history.length > 1) {
        window.history.forward();
      }
    };

    const handleSwipeUp = () => {
      const gesture = 'Swipe Up - Scroll to Top';
      setGestureHistory(prev => [gesture, ...prev.slice(0, 4)]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSwipeDown = () => {
      const gesture = 'Swipe Down - Refresh';
      setGestureHistory(prev => [gesture, ...prev.slice(0, 4)]);
      window.location.reload();
    };

    const handleTap = () => {
      const gesture = 'Tap - Element Interaction';
      setGestureHistory(prev => [gesture, ...prev.slice(0, 4)]);
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

=======
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
    
>>>>>>> pr-9693
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
<<<<<<< HEAD
  }, [settings.gestureSupport, metrics.touchSupport]);

  // Apply mobile optimizations
  const applyMobileOptimizations = useCallback(() => {
    const root = document.documentElement;
    
    // Touch optimization
    if (settings.touchOptimization) {
      root.style.setProperty('--touch-action', 'manipulation');
      root.style.setProperty('--user-select', 'none');
    } else {
      root.style.removeProperty('--touch-action');
      root.style.removeProperty('--user-select');
    }

    // Performance mode
    if (settings.performanceMode) {
      root.style.setProperty('--animation-duration', '0.1s');
      root.style.setProperty('--transition-duration', '0.1s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Dark mode
    if (settings.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Fullscreen
    if (settings.fullscreen && !isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      }
    } else if (!settings.fullscreen && isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  }, [settings, isFullscreen]);

  // Initialize
  useEffect(() => {
    updateMetrics();
    const interval = setInterval(updateMetrics, 10000); // Update every 10 seconds
    
    return () => clearInterval(interval);
  }, [updateMetrics]);

  // Setup touch gestures
  useEffect(() => {
    const cleanup = setupTouchGestures();
    return cleanup;
  }, [setupTouchGestures]);

  // Apply optimizations
  useEffect(() => {
    applyMobileOptimizations();
  }, [applyMobileOptimizations]);

  // Handle orientation changes
  useEffect(() => {
    const handleOrientationChange = () => {
      updateMetrics();
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, [updateMetrics]);

  if (!enabled) return null;

  const getPerformanceColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType) {
      case 'mobile': return <Smartphone className="w-6 h-6" />;
      case 'tablet': return <Tablet className="w-6 h-6" />;
      case 'desktop': return <Monitor className="w-6 h-6" />;
      default: return <Monitor className="w-6 h-6" />;
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open Mobile Experience Panel"
      >
        <MobileIcon className="w-6 h-6" />
=======
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
>>>>>>> pr-9693
      </motion.button>

      {/* Mobile Experience Dashboard Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
<<<<<<< HEAD
=======
            ref={mobileRef}
>>>>>>> pr-9693
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
<<<<<<< HEAD
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                    <MobileIcon className="w-6 h-6 text-white" />
=======
              className="bg-white dark:bg-zion-slate-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-zion-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-zion-green to-zion-blue rounded-lg">
                    <Smartphone className="w-6 h-6 text-white" />
>>>>>>> pr-9693
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Mobile Experience Center
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
<<<<<<< HEAD
                      Mobile optimization and touch controls
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Device Information & Metrics */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Device Information
                    </h3>
                    
                    {/* Device Type */}
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        {getDeviceIcon(metrics.deviceType)}
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white capitalize">
                            {metrics.deviceType} Device
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {metrics.touchSupport ? 'Touch Enabled' : 'Touch Not Supported'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">Screen:</span>
                          <div className="font-medium text-gray-900 dark:text-white">
                            {metrics.screenSize.width} × {metrics.screenSize.height}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">Orientation:</span>
                          <div className="font-medium text-gray-900 dark:text-white capitalize">
                            {metrics.orientation}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900 dark:text-white">Performance Metrics</h4>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <Zap className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">Performance</span>
                          </div>
                          <div className={`text-lg font-bold ${getPerformanceColor(metrics.performanceScore)}`}>
                            {metrics.performanceScore}/100
                          </div>
                        </div>

                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <Battery className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">Battery</span>
                          </div>
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            {metrics.batteryLevel.toFixed(0)}%
                          </div>
                        </div>

                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <Wifi className="w-4 h-4 text-blue-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">Connection</span>
                          </div>
                          <div className="text-lg font-bold text-gray-900 dark:text-white capitalize">
                            {metrics.connectionType}
                          </div>
                        </div>

                                                 <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                           <div className="flex items-center space-x-2 mb-2">
                             <Hand className="w-4 h-4 text-purple-500" />
                             <span className="text-sm text-gray-600 dark:text-gray-400">Memory</span>
                           </div>
                           <div className="text-lg font-bold text-gray-900 dark:text-white">
                             {metrics.memoryUsage.toFixed(0)}%
                           </div>
                         </div>
                      </div>
                    </div>

                    {/* Gesture History */}
                    {gestureHistory.length > 0 && (
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-3">Recent Gestures</h4>
                        <div className="space-y-2">
                          {gestureHistory.map((gesture, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              <TouchIcon className="w-4 h-4 text-blue-500" />
                              <span className="text-blue-700 dark:text-blue-300">{gesture}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Controls */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Mobile Controls
                    </h3>
                    
                    {/* Touch & Gesture Controls */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900 dark:text-white">Touch & Gestures</h4>
                      
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.touchOptimization}
                            onChange={(e) => setSettings(prev => ({ ...prev, touchOptimization: e.target.checked }))}
                            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <Hand className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Touch Optimization</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.gestureSupport}
                            onChange={(e) => setSettings(prev => ({ ...prev, gestureSupport: e.target.checked }))}
                            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <Hand className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Gesture Support</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.touchFeedback}
                            onChange={(e) => setSettings(prev => ({ ...prev, touchFeedback: e.target.checked }))}
                            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <Eye className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Touch Feedback</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.hapticFeedback}
                            onChange={(e) => setSettings(prev => ({ ...prev, hapticFeedback: e.target.checked }))}
                            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <Zap className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Haptic Feedback</span>
                        </label>
                      </div>
                    </div>

                    {/* Performance Controls */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900 dark:text-white">Performance & Battery</h4>
                      
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.performanceMode}
                            onChange={(e) => setSettings(prev => ({ ...prev, performanceMode: e.target.checked }))}
                            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <Zap className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Performance Mode</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.batteryOptimization}
                            onChange={(e) => setSettings(prev => ({ ...prev, batteryOptimization: e.target.checked }))}
                            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <Battery className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Battery Optimization</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.dataOptimization}
                            onChange={(e) => setSettings(prev => ({ ...prev, dataOptimization: e.target.checked }))}
                            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <Wifi className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Data Optimization</span>
                        </label>
                      </div>
                    </div>

                    {/* Display Controls */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900 dark:text-white">Display & Interface</h4>
                      
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.darkMode}
                            onChange={(e) => setSettings(prev => ({ ...prev, darkMode: e.target.checked }))}
                            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dark Mode</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.fullscreen}
                            onChange={(e) => setSettings(prev => ({ ...prev, fullscreen: e.target.checked }))}
                            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <Maximize className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Fullscreen Mode</span>
                        </label>

                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.orientationLock}
                            onChange={(e) => setSettings(prev => ({ ...prev, orientationLock: e.target.checked }))}
                            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <RotateCcw className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Lock Orientation</span>
                        </label>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-3">Quick Actions</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                          className="p-2 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 rounded text-sm hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors"
                        >
                          Scroll to Top
                        </button>
                        <button
                          onClick={() => window.location.reload()}
                          className="p-2 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 rounded text-sm hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors"
                        >
                          Refresh Page
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
=======
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
>>>>>>> pr-9693
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
<<<<<<< HEAD
    </>
  );
};

export default MobileExperienceEnhancer;
=======

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
>>>>>>> pr-9693
