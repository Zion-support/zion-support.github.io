import React, { useState, useEffect, useCallback, useRef } from 'react.ts';
<<<<<<< HEAD
import { motion, AnimatePresence             } from 'framer-motion.ts';
import { Smartphone,
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
=======
import { motion, AnimatePresence, PanInfo             } from 'framer-motion.ts';
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
<<<<<<< HEAD
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
interface MobileOptimization {












  id: string;
  name: string;
  description: string;
  enabled: boolean;
  category: 'performance' | 'touch' | 'visual' | 'layout';
  impact: 'high' | 'medium' | 'low';

interface TouchGesture {
  id: string;
  name: string;
  description: string;
  gesture: string;
  action: string;
  enabled: boolean;

export function MobileExperienceEnhancer(...args: any[]): any {;
  const [isOpen, setIsOpen] = useState(false);
  const [deviceType, setDeviceType] = useState<any>('desktop');
  const [touchGestures, setTouchGestures] = useState<Set<string>>(new Set());
  const [mobileOptimizations, setMobileOptimizations] = useState<Set<string>>(new Set());
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Touch gesture handlers
  const [touchStart, setTouchStart] = useState<any>(null);
  const [touchEnd, setTouchEnd] = useState<any>(null);
  const [pinchDistance, setPinchDistance] = useState<any>(0);
  const [rotationAngle, setRotationAngle] = useState<any>(0);

  // Mobile-specific settings
  const [mobileFontSize, setMobileFontSize] = useState(16);
  const [mobileSpacing, setMobileSpacing] = useState(1);
  const [mobileLayout, setMobileLayout] = useState<any>('grid');
  const [mobileTheme, setMobileTheme] = useState<any>('auto');
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

  ];

  // Touch event handlers
  const handleTouchStart = useCallback((e: anyanyanyanyanyanyanyanyanyanyanyanyReact.TouchEvent)             => {
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

  }, [mobileGestures]);

  const handleTouchMove = useCallback((e: anyanyanyanyanyanyanyanyanyanyanyanyReact.TouchEvent)             => {
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
<<<<<<< HEAD
=======
      }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

      // Handle rotation
      const angle = Math.atan2(
        touch2.clientY - touch1.clientY,
        touch2.clientX - touch1.clientX
      ) * 180 / Math.PI;
      setRotationAngle(angle);

  }, [mobileGestures, pinchDistance]);

  const handleTouchEnd = useCallback((e: anyanyanyanyanyanyanyanyanyanyanyanyReact.TouchEvent)             => {
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

    } else {
      if (diffY > 50) {
        handleSwipe('up');
      } else if (diffY < -50) {
        handleSwipe('down');
<<<<<<< HEAD

=======
      }
    }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

    setTouchStart(null);
    setTouchEnd(null);
    setPinchDistance(0);
    setRotationAngle(0);
  }, [mobileGestures, touchStart]);

  // Handle swipe gestures
  const handleSwipe = useCallback((direction: anyanyanyanyanyanyanyanyanyanyanyany'left' | 'right' | 'up' | 'down')             => {
    const gestureId = `swipe-${direction}`;
    if (touchGestures.has(gestureId)) {
      // Execute gesture action
      switch (direction) {
        case 'left':
          // Navigate next
<<<<<<< HEAD
          // // console.log('Swipe left - Next');
          break;
        case 'right':
          // Navigate previous
          // // console.log('Swipe right - Previous');
          break;
        case 'up':
          // Expand
          // // console.log('Swipe up - Expand');
          break;
        case 'down':
          // Refresh
          // // console.log('Swipe down - Refresh');
=======
          // // // // // // console.log('Swipe left - Next');
          break;
        case 'right':
          // Navigate previous
          // // // // // // console.log('Swipe right - Previous');
          break;
        case 'up':
          // Expand
          // // // // // // console.log('Swipe up - Expand');
          break;
        case 'down':
          // Refresh
          // // // // // // console.log('Swipe down - Refresh');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
          break;


  }, [touchGestures]);

  // Apply mobile optimizations
  const applyMobileOptimization = useCallback((optimizationId: anyanyanyanyanyanyanyanyanyanyanyanystring, enabled: boolean)             => {
    setMobileOptimizations(prev => {
      const newSet = new Set(prev);
      if (enabled) {
        newSet.add(optimizationId);
      } else {
        newSet.delete(optimizationId);

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

        break;

      case 'gesture-support':
        setMobileGestures(enabled);
        break;

      case 'mobile-layout':
        if (enabled) {
          document.documentElement.classList.add('mobile-layout');
        } else {
          document.documentElement.classList.remove('mobile-layout');

        break;

      case 'performance-optimization':
        setMobileAnimations(!enabled);
        if (enabled) {
          document.documentElement.classList.add('mobile-performance');
        } else {
          document.documentElement.classList.remove('mobile-performance');

        break;

      case 'visual-optimization':
        if (enabled) {
          document.documentElement.classList.add('mobile-visual');
        } else {
          document.documentElement.classList.remove('mobile-visual');

        break;

  }, []);

  // Toggle touch gesture
  const toggleTouchGesture = useCallback((gestureId: anyanyanyanyanyanyanyanyanyanyanyanystring, enabled: boolean)             => {
    setTouchGestures(prev => {
      const newSet = new Set(prev);
      if (enabled) {
        newSet.add(gestureId);
      } else {
        newSet.delete(gestureId);

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

        <Smartphone className="w-6 h-6 text-white" />
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
=======
  Smartphone as Touch,
  Gesture,
  Eye,
  EyeOff,
  Zap,
  Shield,
  Globe,
  Clock,
  Activity,
  TrendingUp,
  Smartphone as PhoneIcon
} from 'lucide-react';

interface MobileMetrics {












  screenWidth: number;
  screenHeight: number;
  pixelRatio: number;
  orientation: 'portrait' | 'landscape';
  touchSupport: boolean;
  connectionType: string;
  batteryLevel: number;
  isCharging: boolean;












}

interface MobileExperienceEnhancerProps extends React.PropsWithChildren<{}> {

  enabled?: boolean;
  showControls?: boolean;
  autoOptimize?: boolean;

}

export function MobileExperienceEnhancer(...args: any[]): any {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<any>(null);
  const [optimizations, setOptimizations] = useState<any>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [mobileScore, setMobileScore] = useState(85);
  const [gestureMode, setGestureMode] = useState(false);
  const [touchFeedback, setTouchFeedback] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const swipeThreshold = 50;
  const swipeTimeThreshold = 300;

  // Detect mobile device and gather metrics
  const detectMobileMetrics = useCallback(() => {
    if (!enabled) return;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTablet = /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/i.test(navigator.userAgent);

    if (!isMobile && !isTablet) return;

    const metrics: MobileMetrics = {
      screenWidth: anyanyanyanyanyanyanyanyanyanyanyanywindow.innerWidth,
      screenHeight: window.innerHeight,
      pixelRatio: window.devicePixelRatio || 1,
      orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
      touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
      connectionType: (navigator as ).connection?.effectiveType || 'unknown',
      batteryLevel: 0,
      isCharging: false
    };

    // Get battery information if available
    if ('getBattery' in navigator) {
      (navigator as ).getBattery().then((battery: )             => {
        metrics.batteryLevel = Math.round(battery.level * 100);
        metrics.isCharging = battery.charging;
        setMetrics(prev => prev ? { ...prev, ...metrics } : metrics);
      });
    }

    // Get connection information if available
    if ('connection' in navigator) {
      const connection = (navigator as ).connection;
      if (connection) {
        metrics.connectionType = connection.effectiveType || 'unknown';
      }
    }

    setMetrics(metrics);
  }, [enabled]);

  // Mobile-specific optimizations
  const performMobileOptimizations = useCallback(async () => {
    if (!autoOptimize || !metrics) return;
    
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    try {
      // Optimize images for mobile
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (metrics.pixelRatio > 1) {
          // High DPI display optimization
          if (img.src.includes('@1x')) {
            img.src = img.src.replace('@1x', `@${Math.min(3, Math.ceil(metrics.pixelRatio))}x`);
            newOptimizations.push('High DPI images optimized');
          }
        }
        
        // Lazy loading for mobile
        if (!img.loading) {
          img.loading = 'lazy';
          newOptimizations.push('Lazy loading enabled for images');
        }
      });

      // Touch-friendly button sizing
      const buttons = document.querySelectorAll('button, a[role="button"]');
      buttons.forEach(button => {
        const element = button as HTMLElement;
        const computedStyle = window.getComputedStyle(element);
        const minHeight = parseInt(computedStyle.minHeight) || 0;
        const minWidth = parseInt(computedStyle.minWidth) || 0;
        
        if (minHeight < 44 || minWidth < 44) {
          element.style.minHeight = '44px';
          element.style.minWidth = '44px';
          newOptimizations.push('Touch-friendly button sizing applied');
        }
      });

      // Optimize viewport for mobile
      const viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
        document.head.appendChild(meta);
        newOptimizations.push('Mobile viewport meta tag added');
      }

      // Enable touch gestures
      if (metrics.touchSupport) {
        enableTouchGestures();
        newOptimizations.push('Touch gestures enabled');
      }

      // Optimize animations for mobile
      if (metrics.screenWidth < 768) {
        document.documentElement.style.setProperty('--animation-duration', '0.2s');
        document.documentElement.style.setProperty('--transition-duration', '0.15s');
        newOptimizations.push('Animations optimized for mobile');
      }

      // Enable service worker for offline support
      if ('serviceWorker' in navigator) {
        try {
          await navigator.serviceWorker.register('/sw.js');
          newOptimizations.push('Service worker registered for offline support');
        } catch (error) {
          // Service worker not available
        }
      }

    } catch (error) {
      console.warn('Mobile optimization failed:', error);
    } finally {
      setIsOptimizing(false);
      setOptimizations(newOptimizations);
    }
  }, [autoOptimize, metrics]);

  // Enable touch gestures
  const enableTouchGestures = useCallback(() => {
    if (!metrics?.touchSupport) return;

    // Swipe navigation
    const handleTouchStart = (e: anyanyanyanyanyanyanyanyanyanyanyanyTouchEvent)             => {
      const touch = e.touches[0];
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      };
    };

    const handleTouchEnd = (e: anyanyanyanyanyanyanyanyanyanyanyanyTouchEvent)             => {
      if (!touchStartRef.current) return;

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;
      const deltaTime = Date.now() - touchStartRef.current.time;

      // Horizontal swipe
      if (Math.abs(deltaX) > swipeThreshold && Math.abs(deltaY) < swipeThreshold && deltaTime < swipeTimeThreshold) {
        if (deltaX > 0) {
          // Swipe right - go back
          if (window.history.length > 1) {
            window.history.back();
          }
        } else {
          // Swipe left - go forward
          window.history.forward();
        }
      }

      // Vertical swipe
      if (Math.abs(deltaY) > swipeThreshold && Math.abs(deltaX) < swipeThreshold && deltaTime < swipeTimeThreshold) {
        if (deltaY > 0) {
          // Swipe down - refresh
          window.location.reload();
        }
      }

      touchStartRef.current = null;
    };

    // Double tap to zoom
    let lastTap = 0;
    const handleDoubleTap = (e: anyanyanyanyanyanyanyanyanyanyanyanyTouchEvent)             => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
      
      if (tapLength < 500 && tapLength > 0) {
        // Double tap detected
        const target = e.target as HTMLElement;
        if (target.tagName === 'IMG') {
          target.style.transform = target.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
          target.style.transition = 'transform 0.3s ease';
        }
      }
      lastTap = currentTime;
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: anyanyanyanyanyanyanyanyanyanyanyanytrue });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    document.addEventListener('touchend', handleDoubleTap, { passive: true });

    // Cleanup function
    return ()             => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchend', handleDoubleTap);
    };
  }, [metrics?.touchSupport]);

  // Mobile performance scoring
  const calculateMobileScore = useCallback(() => {
    if (!metrics) return 0;

    let score = 100;

    // Screen size scoring
    if (metrics.screenWidth < 375) score -= 10; // Very small screens
    else if (metrics.screenWidth < 768) score -= 5; // Small screens

    // Pixel ratio scoring
    if (metrics.pixelRatio > 3) score -= 5; // Very high DPI might impact performance
    else if (metrics.pixelRatio < 1) score -= 10; // Low DPI screens

    // Connection scoring
    if (metrics.connectionType === 'slow-2g' || metrics.connectionType === '2g') score -= 20;
    else if (metrics.connectionType === '3g') score -= 10;

    // Battery scoring
    if (metrics.batteryLevel < 20) score -= 15;
    else if (metrics.batteryLevel < 50) score -= 5;

    // Touch support scoring
    if (!metrics.touchSupport) score -= 10;

    return Math.max(0, score);
  }, [metrics]);

  // Initialize mobile detection
  useEffect(() => {
<<<<<<< HEAD
    if (!enabled) return;

    detectMobileMetrics();

    const handleResize = () => {
      detectMobileMetrics();
    };

    const handleOrientationChange = () => {
      setTimeout(detectMobileMetrics, 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [enabled, detectMobileMetrics]);

  // Apply optimizations when metrics change
  useEffect(() => {
    if (metrics && autoOptimize) {
      performMobileOptimizations();
    }
  }, [metrics, autoOptimize, performMobileOptimizations]);

  // Update mobile score
  useEffect(() => {
    if (metrics) {
      const score = calculateMobileScore();
      setMobileScore(score);
    }
  }, [metrics, calculateMobileScore]);

  if (!enabled || !metrics) return null;

  return (
    <>
      {/* Mobile Experience Toggle Button */}
      <motion.button
        className="fixed bottom-4 left-20 z-50 p-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all duration-200"
        onClick={() => setIsVisible(!isVisible)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Mobile Experience Settings"
        aria-expanded={isVisible}
        aria-controls="mobile-experience-panel"
      >
        <PhoneIcon className="w-5 h-5" />
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      </motion.button>

      {/* Mobile Experience Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zion-slate-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"

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

                  <X className="w-6 h-6" />
=======
            id="mobile-experience-panel"
            className="fixed bottom-20 left-4 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 z-50 max-h-[80vh] overflow-y-auto"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-labelledby="mobile-experience-title"
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h2 id="mobile-experience-title" className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5 text-green-500" />
                  Mobile Experience
                </h2>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  aria-label="Close mobile experience settings"
                >
                  <X className="w-4 h-4" />
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </button>
              </div>
            </div>

<<<<<<< HEAD
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
=======
            <div className="p-4 space-y-6">
              {/* Mobile Score */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Mobile Experience Score</span>
                  <button
                    onClick={() => {
                      const score = calculateMobileScore();
                      setMobileScore(score);
                    }}
                    className="text-xs text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                  >
                    Refresh
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`text-2xl font-bold ${
                    mobileScore >= 90 ? 'text-green-500' :
                    mobileScore >= 70 ? 'text-yellow-500' : 'text-red-500'
                  }`}>
                    {mobileScore}%
                  </div>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        mobileScore >= 90 ? 'bg-green-500' :
                        mobileScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${mobileScore}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Device Information */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  Device Information
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 dark:text-gray-400">Screen</div>
                    <div className="font-medium">{metrics.screenWidth} × {metrics.screenHeight}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 dark:text-gray-400">DPI</div>
                    <div className="font-medium">{metrics.pixelRatio}x</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 dark:text-gray-400">Orientation</div>
                    <div className="font-medium capitalize">{metrics.orientation}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-xs text-gray-500 dark:text-gray-400">Touch</div>
                    <div className="font-medium">{metrics.touchSupport ? 'Yes' : 'No'}</div>
                  </div>
                </div>
              </div>

              {/* Connection & Battery */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Connection & Battery
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Connection</span>
                    <div className="flex items-center gap-2">
                      {metrics.connectionType === '4g' || metrics.connectionType === '5g' ? (
                        <Wifi className="w-4 h-4 text-green-500" />
                      ) : (
                        <WifiOff className="w-4 h-4 text-red-500" />
                      )}
                      <span className="text-sm font-medium capitalize">{metrics.connectionType}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Battery</span>
                    <div className="flex items-center gap-2">
                      {metrics.isCharging ? (
                        <BatteryCharging className="w-4 h-4 text-green-500" />
                      ) : (
                        <Battery className="w-4 h-4 text-gray-500" />
                      )}
                      <span className="text-sm font-medium">{metrics.batteryLevel}%</span>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                    </div>
                  </div>
                </div>
              </div>

<<<<<<< HEAD
                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <button
                    onClick={() => setMobileFontSize(prev => Math.min(prev + 2, 24))}
                    className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all"

                    <ZoomIn className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">Increase Text</span>
                  </button>

                  <button
                    onClick={() => setMobileFontSize(prev => Math.max(prev - 2, 12))}
                    className="p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all"

                    <ZoomOut className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">Decrease Text</span>
                  </button>

                  <button
                    onClick={() => setMobileSpacing(prev => prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1)}
                    className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all"

                    <Layout className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">
                      Spacing: {mobileSpacing === 1 ? 'Normal' : mobileSpacing === 1.5 ? 'Wide' : 'Extra Wide'}
                    </span>
                  </button>

                  <button
                    onClick={() => setMobileLayout(prev => prev === 'grid' ? 'list' : prev === 'list' ? 'compact' : 'grid')}
                    className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all"

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
=======
              {/* Mobile Features */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Touch className="w-4 h-4" />
                  Mobile Features
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={gestureMode}
                      onChange={(e) => setGestureMode(e.target.checked)}
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Touch Gestures</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={touchFeedback}
                      onChange={(e) => setTouchFeedback(e.target.checked)}
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Touch Feedback</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={mobileMenuOpen}
                      onChange={(e) => setMobileMenuOpen(e.target.checked)}
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Mobile Menu</span>
                  </label>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </div>
              </div>

<<<<<<< HEAD
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

                      {isOptimizing ? 'Optimizing...' : 'Auto-Optimize'}
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-4">
                    {mobileOptimizationFeatures.map((optimization)             => (
                      <div
                        key={optimization.id}
                        className={`p-4 rounded-xl border transition-all ${
                          mobileOptimizations.has(optimization.id)
                            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                            : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700'
                        }`}

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
=======
              {/* Recent Optimizations */}
              {optimizations.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Recent Optimizations
                  </h4>
                  <div className="space-y-1">
                    {optimizations.map((opt, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400">
                        <CheckCircle className="w-3 h-3" />
                        {opt}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                      </div>
                    ))}
                  </div>
                </div>
              )}

<<<<<<< HEAD
                {/* Touch Gestures */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Touch Gestures
                  </h3>
                  <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-4">
                    {availableTouchGestures.map((gesture)             => (
                      <div
                        key={gesture.id}
                        className={`p-4 rounded-xl border transition-all ${
                          touchGestures.has(gesture.id)
                            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                            : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700'
                        }`}

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

                    <Settings className="w-4 h-4" />
                    <span>{showAdvanced ? 'Hide' : 'Show'} Advanced Settings</span>
                  </button>

                  {showAdvanced && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 dark:bg-zion-slate-800 rounded-xl"

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
</div>}}}}}}}}}}}}}}}}}}}}}}}
=======
              {/* Controls */}
              {showControls && (
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={performMobileOptimizations}
                    disabled={isOptimizing}
                    className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white text-sm py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    {isOptimizing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Optimizing...
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4" />
                        Run Mobile Optimizations
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Touch Feedback Overlay */}
      {touchFeedback && (
        <div className="touch-feedback-overlay">
          <style>{`
            .touch-feedback-overlay {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              pointer-events: none;
              z-index: 9999;
            }
            
            .touch-feedback-overlay::before {
              content: '';
              position: absolute;
              width: 60px;
              height: 60px;
              background: radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%);
              border-radius: 50%;
              transform: translate(-50%, -50%);
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            
            .touch-feedback-overlay:active::before {
              opacity: 1;
            }
          `}</style>
        </div>
      )}
    </>
  );
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
