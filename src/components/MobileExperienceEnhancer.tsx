<<<<<<< HEAD
import React, { useState, useEffect, useCallback, useRef } from 'react';
=======
import React, { useEffect, useState, useCallback, useMemo } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bfa2
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
<<<<<<< HEAD
  RotateCcw, 
  Wifi, 
  Battery, 
  Zap, 
=======
  Touch, 
  Wifi, 
  WifiOff,
  Battery,
  BatteryCharging,
  Volume2,
  VolumeX,
  Sun,
  Moon,
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bfa2
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
<<<<<<< HEAD
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
  Hand,
  RotateCw, 
  Touch, 
  Shield,
  Target,
  Award,
  BarChart3,
  Palette,
  Save,
  Loader2,
  Signal,
  Fingerprint,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Pinch,
  Shake,
  MousePointer,
  Clock,
  DoubleArrow,
  Move
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
  // New features from PR
  touchGestures: boolean;
  mobileOptimizations: boolean;
  pwaFeatures: boolean;
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

interface TouchGesture {
  type: 'swipe' | 'pinch' | 'rotate' | 'longPress' | 'doubleTap' | 'shake';
  direction?: 'left' | 'right' | 'up' | 'down';
  timestamp: number;
  coordinates: { x: number; y: number };
  intensity?: number;
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
    hapticFeedback: false,
    // New features from PR
    touchGestures: true,
    mobileOptimizations: true,
    pwaFeatures: true,
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
  const [gestureHistory, setGestureHistory] = useState<string[]>([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchGestures, setTouchGestures] = useState<TouchGesture[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [mobileScore, setMobileScore] = useState(0);
  const [activeGestures, setActiveGestures] = useState<string[]>([]);

  const mobileRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const gestureTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

=======
  Info
} from 'lucide-react';

interface MobileMetrics {
  screenSize: string;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  touchSupport: boolean;
  networkType: string;
  batteryLevel: number;
  batteryCharging: boolean;
  connectionSpeed: string;
  isOnline: boolean;
  viewportHeight: number;
  viewportWidth: number;
  pixelRatio: number;
  orientation: 'portrait' | 'landscape';
  memoryUsage?: number;
  cpuCores?: number;
}

interface MobileOptimization {
  id: string;
  title: string;
  description: string;
  status: 'enabled' | 'disabled' | 'recommended';
  impact: 'high' | 'medium' | 'low';
  action: string;
}

const MobileExperienceEnhancer: React.FC<{ enabled?: boolean }> = ({ enabled = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<MobileMetrics | null>(null);
  const [optimizations, setOptimizations] = useState<MobileOptimization[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [touchGestures, setTouchGestures] = useState({
    swipeEnabled: true,
    pinchEnabled: true,
    longPressEnabled: true
  });

  // Detect device type and capabilities
  const detectDeviceCapabilities = useCallback((): MobileMetrics => {
    const userAgent = navigator.userAgent;
    const screen = window.screen;
    const connection = (navigator as any).connection;
    const battery = (navigator as any).getBattery?.();
    
    // Device type detection
    let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      deviceType = /iPad|Android.*Tablet|Tablet.*Android/i.test(userAgent) ? 'tablet' : 'mobile';
    }

    // Screen size classification
    let screenSize = 'Unknown';
    if (screen.width < 768) screenSize = 'Small Mobile';
    else if (screen.width < 1024) screenSize = 'Large Mobile/Tablet';
    else if (screen.width < 1440) screenSize = 'Desktop';
    else screenSize = 'Large Desktop';

    // Touch support detection
    const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Network information
    let networkType = 'Unknown';
    let connectionSpeed = 'Unknown';
    if (connection) {
      networkType = connection.effectiveType || connection.type || 'Unknown';
      connectionSpeed = connection.downlink ? `${connection.downlink} Mbps` : 'Unknown';
    }

    // Battery information
    let batteryLevel = 0;
    let batteryCharging = false;
    if (battery) {
      battery.then((batteryInfo: any) => {
        batteryLevel = Math.round(batteryInfo.level * 100);
        batteryCharging = batteryInfo.charging;
      });
    }

    // Viewport information
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const pixelRatio = window.devicePixelRatio || 1;
    const orientation = viewportHeight > viewportWidth ? 'portrait' : 'landscape';

    // Memory and CPU information (if available)
    const memory = (performance as any).memory;
    const memoryUsage = memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : undefined;
    const cpuCores = (navigator as any).hardwareConcurrency;

    return {
      screenSize,
      deviceType,
      touchSupport,
      networkType,
      batteryLevel,
      batteryCharging,
      connectionSpeed,
      isOnline: navigator.onLine,
      viewportHeight,
      viewportWidth,
      pixelRatio,
      orientation,
      memoryUsage,
      cpuCores
    };
  }, []);

  // Generate mobile optimizations
  const generateOptimizations = useCallback((currentMetrics: MobileMetrics) => {
    const opts: MobileOptimization[] = [];

    // Touch optimization
    if (currentMetrics.touchSupport) {
      opts.push({
        id: 'touch-optimization',
        title: 'Touch Gesture Optimization',
        description: 'Enable advanced touch gestures for better mobile experience',
        status: 'enabled',
        impact: 'high',
        action: 'Touch gestures are optimized for mobile devices'
      });
    }

    // Network optimization
    if (currentMetrics.networkType === 'slow-2g' || currentMetrics.networkType === '2g') {
      opts.push({
        id: 'network-optimization',
        title: 'Network Performance Optimization',
        description: 'Optimize for slow network connections',
        status: 'recommended',
        impact: 'high',
        action: 'Enable data compression and lazy loading'
      });
    }

    // Battery optimization
    if (currentMetrics.batteryLevel < 20) {
      opts.push({
        id: 'battery-optimization',
        title: 'Battery Optimization',
        description: 'Low battery detected, enable power-saving features',
        status: 'recommended',
        impact: 'medium',
        action: 'Reduce animations and background processes'
      });
    }

    // Memory optimization
    if (currentMetrics.memoryUsage && currentMetrics.memoryUsage > 100) {
      opts.push({
        id: 'memory-optimization',
        title: 'Memory Usage Optimization',
        description: 'High memory usage detected',
        status: 'recommended',
        impact: 'medium',
        action: 'Implement memory cleanup and optimization'
      });
    }

    // Viewport optimization
    if (currentMetrics.deviceType === 'mobile' && currentMetrics.orientation === 'landscape') {
      opts.push({
        id: 'viewport-optimization',
        title: 'Landscape Mode Optimization',
        description: 'Optimize layout for landscape orientation',
        status: 'enabled',
        impact: 'low',
        action: 'Layout automatically adjusts for landscape mode'
      });
    }

    setOptimizations(opts);
  }, []);

  // Apply mobile optimizations
  const applyOptimization = useCallback((optimizationId: string) => {
    switch (optimizationId) {
      case 'touch-optimization':
        // Enable touch gestures
        document.body.classList.add('touch-optimized');
        break;
      case 'network-optimization':
        // Enable network optimizations
        document.body.classList.add('network-optimized');
        break;
      case 'battery-optimization':
        // Enable battery optimizations
        document.body.classList.add('battery-optimized');
        break;
      case 'memory-optimization':
        // Enable memory optimizations
        document.body.classList.add('memory-optimized');
        break;
    }
  }, []);

  // Touch gesture handlers
  useEffect(() => {
    if (!enabled || !touchGestures.swipeEnabled) return;

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bfa2
    let startX = 0;
    let startY = 0;
    let startTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startTime = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const endTime = Date.now();
<<<<<<< HEAD
      
      const deltaX = endX - startX;
      const deltaY = endY - startY;
      const duration = endTime - startTime;
      
      // Detect swipe gestures
      if (duration < 500 && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          handleSwipeRight();
        } else {
          handleSwipeLeft();
=======
      const duration = endTime - startTime;
      const distanceX = Math.abs(endX - startX);
      const distanceY = Math.abs(endY - startY);

      // Swipe detection
      if (duration < 300 && distanceX > 50 && distanceY < 100) {
        if (endX > startX) {
          // Swipe right
          console.log('Swipe right detected');
        } else {
          // Swipe left
          console.log('Swipe left detected');
        }
      }

      // Swipe up/down detection
      if (duration < 300 && distanceY > 50 && distanceX < 100) {
        if (endY > startY) {
          // Swipe down
          console.log('Swipe down detected');
        } else {
          // Swipe up
          console.log('Swipe up detected');
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bfa2
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

<<<<<<< HEAD
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
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bfa2

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
<<<<<<< HEAD
  }, [settings.gestureSupport, metrics.touchSupport]);

  // Apply mobile optimizations
  const applyMobileOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
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

      // New optimizations from PR
      if (settings.touchTargets) {
        document.body.classList.add('mobile-touch-targets');
        document.documentElement.style.setProperty('--zion-touch-target-size', '44px');
      }
      
      if (settings.mobileNavigation) {
        document.body.classList.add('mobile-navigation');
      }
      
      if (settings.adaptiveLayout) {
        document.body.classList.add('mobile-adaptive-layout');
      }
      
      if (settings.touchFeedback) {
        document.body.classList.add('mobile-touch-feedback');
      }
      
      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Calculate mobile score
      const enabledFeatures = Object.entries(settings).filter(([key, value]) => 
        typeof value === 'boolean' && value && key !== 'fullscreen'
      ).length;
      const totalFeatures = Object.entries(settings).filter(([key, value]) => 
        typeof value === 'boolean' && key !== 'fullscreen'
      ).length;
      const score = Math.round((enabledFeatures / totalFeatures) * 100);
      setMobileScore(score);
      
    } catch (error) {
      console.error('Mobile optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [settings, isFullscreen]);

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
      touchOptimization: true,
      gestureSupport: true,
      orientationLock: false,
      batteryOptimization: true,
      dataOptimization: true,
      performanceMode: false,
      darkMode: false,
      fullscreen: false,
      touchFeedback: true,
      hapticFeedback: false,
      touchGestures: true,
      mobileOptimizations: true,
      pwaFeatures: true,
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
    setGestureHistory([]);
    setTouchGestures([]);
    setActiveGestures([]);
    setMobileScore(0);
  }, []);

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

  // Calculate mobile score on mount and when settings change
  useEffect(() => {
    const enabledFeatures = Object.entries(settings).filter(([key, value]) => 
      typeof value === 'boolean' && value && key !== 'fullscreen'
    ).length;
    const totalFeatures = Object.entries(settings).filter(([key, value]) => 
      typeof value === 'boolean' && key !== 'fullscreen'
    ).length;
    const score = Math.round((enabledFeatures / totalFeatures) * 100);
    setMobileScore(score);
  }, [settings]);
=======
  }, [enabled, touchGestures.swipeEnabled]);

  // Update metrics periodically
  useEffect(() => {
    if (!enabled) return;

    const updateMetrics = () => {
      const newMetrics = detectDeviceCapabilities();
      setMetrics(newMetrics);
      generateOptimizations(newMetrics);
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 10000);

    return () => clearInterval(interval);
  }, [enabled, detectDeviceCapabilities, generateOptimizations]);

  // Network status monitoring
  useEffect(() => {
    if (!enabled) return;

    const handleOnline = () => {
      setMetrics(prev => prev ? { ...prev, isOnline: true } : null);
    };

    const handleOffline = () => {
      setMetrics(prev => prev ? { ...prev, isOnline: false } : null);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [enabled]);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bfa2

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
<<<<<<< HEAD
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
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                    <MobileIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Mobile Experience Center
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Mobile optimization and touch controls
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <X className="w-6 h-6" />
=======
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 left-4 z-50"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 max-w-sm">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5 text-green-500" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Mobile Experience</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <Settings className="w-4 h-4 text-gray-500" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <X className="w-4 h-4 text-gray-500" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bfa2
                </button>
              </div>
            </div>

<<<<<<< HEAD
              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* Mobile Score */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Mobile Experience Score
                  </h3>
                  <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl text-white">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">{mobileScore}/100</div>
                      <div className="text-lg opacity-90">
                        {mobileScore >= 90 ? 'Excellent' : 
                         mobileScore >= 70 ? 'Good' : 
                         mobileScore >= 50 ? 'Fair' : 'Needs Improvement'}
                      </div>
                      <div className="text-sm opacity-75 mt-2">
                        Mobile optimizations enabled
                      </div>
=======
            {/* Device Info */}
            <div className="p-4">
              {metrics && (
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Device</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                      {metrics.deviceType}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Screen</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {metrics.screenSize}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Network</span>
                    <div className="flex items-center space-x-1">
                      {metrics.isOnline ? (
                        <Wifi className="w-4 h-4 text-green-500" />
                      ) : (
                        <WifiOff className="w-4 h-4 text-red-500" />
                      )}
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {metrics.networkType}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Battery</span>
                    <div className="flex items-center space-x-1">
                      {metrics.batteryCharging ? (
                        <BatteryCharging className="w-4 h-4 text-green-500" />
                      ) : (
                        <Battery className="w-4 h-4 text-gray-500" />
                      )}
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {metrics.batteryLevel}%
                      </span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bfa2
                    </div>
                  </div>
                </div>

<<<<<<< HEAD
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
                              <Hand className="w-4 h-4 text-blue-500" />
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

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex space-x-3">
                        <button
                          onClick={saveSettings}
                          disabled={isOptimizing}
                          className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50"
                        >
                          {isOptimizing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                          <span>Save Settings</span>
                        </button>
                        
                        <button
                          onClick={loadSettings}
                          disabled={isOptimizing}
                          className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
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
                    </div>
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
};

export default MobileExperienceEnhancer;
=======
              {/* Touch Gestures */}
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Touch Gestures</h4>
                <div className="space-y-2">
                  {Object.entries(touchGestures).map(([gesture, enabled]) => (
                    <div key={gesture} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                        {gesture.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <button
                        onClick={() => setTouchGestures(prev => ({ ...prev, [gesture]: !enabled }))}
                        className={`w-10 h-6 rounded-full transition-colors ${
                          enabled ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          enabled ? 'translate-x-4' : 'translate-x-0'
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optimizations */}
              {isExpanded && optimizations.length > 0 && (
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Optimizations</h4>
                  <div className="space-y-3">
                    {optimizations.slice(0, 3).map((opt) => (
                      <div key={opt.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-start space-x-2">
                          {opt.status === 'enabled' ? (
                            <CheckCircle className="w-4 h-4 mt-0.5 text-green-500" />
                          ) : opt.status === 'recommended' ? (
                            <AlertTriangle className="w-4 h-4 mt-0.5 text-yellow-500" />
                          ) : (
                            <Info className="w-4 h-4 mt-0.5 text-blue-500" />
                          )}
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {opt.title}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              {opt.description}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              Impact: {opt.impact}
                            </div>
                          </div>
                        </div>
                        {opt.status === 'recommended' && (
                          <button
                            onClick={() => applyOptimization(opt.id)}
                            className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white text-xs py-1 px-2 rounded transition-colors"
                          >
                            Apply
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => {
                    const newMetrics = detectDeviceCapabilities();
                    setMetrics(newMetrics);
                    generateOptimizations(newMetrics);
                  }}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm py-2 px-3 rounded-lg transition-colors"
                >
                  Refresh
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {isExpanded ? 'Less' : 'More'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Toggle Button */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 left-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          title="Show Mobile Experience Monitor"
        >
          <Smartphone className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default MobileExperienceEnhancer;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bfa2
