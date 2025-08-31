import React, { useState, useEffect, useCallback, useRef } from 'react.ts';
import { motion, AnimatePresence, PanInfo               } from 'framer-motion.ts';
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
  const handleTouchStart = useCallback((e: anyanyanyanyanyanyanyanyanyanyanyanyanyanyReact.TouchEvent)               => {
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

  const handleTouchMove = useCallback((e: anyanyanyanyanyanyanyanyanyanyanyanyanyanyReact.TouchEvent)               => {
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
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

      // Handle rotation
      const angle = Math.atan2(
        touch2.clientY - touch1.clientY,
        touch2.clientX - touch1.clientX
      ) * 180 / Math.PI;
      setRotationAngle(angle);

  }, [mobileGestures, pinchDistance]);

  const handleTouchEnd = useCallback((e: anyanyanyanyanyanyanyanyanyanyanyanyanyanyReact.TouchEvent)               => {
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
      }
    }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

    setTouchStart(null);
    setTouchEnd(null);
    setPinchDistance(0);
    setRotationAngle(0);
  }, [mobileGestures, touchStart]);

  // Handle swipe gestures
  const handleSwipe = useCallback((direction: anyanyanyanyanyanyanyanyanyanyanyanyanyany'left' | 'right' | 'up' | 'down')               => {
    const gestureId = `swipe-${direction}`;
    if (touchGestures.has(gestureId)) {
      // Execute gesture action
      switch (direction) {
        case 'left':
          // Navigate next
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
  const applyMobileOptimization = useCallback((optimizationId: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring, enabled: boolean)               => {
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
  const toggleTouchGesture = useCallback((gestureId: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring, enabled: boolean)               => {
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














>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
  
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const gestureHistoryRef = useRef<string[]>([]);
  const serviceWorkerRef = useRef<ServiceWorkerRegistration | null>(null);

  // Detect mobile device and gather metrics
  const detectMobileMetrics = useCallback(() => {
    if (!enabled) return;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTablet = /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/i.test(navigator.userAgent);

    if (!isMobile && !isTablet) return;

    const metrics: MobileMetrics = {
      screenWidth: anyanyanyanyanyanyanyanyanyanyanyanyanyanywindow.innerWidth,
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
      (navigator as ).getBattery().then((battery: )               => {
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
    const handleTouchStart = (e: anyanyanyanyanyanyanyanyanyanyanyanyanyanyTouchEvent)               => {
      const touch = e.touches[0];
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      };
    };

    const handleTouchEnd = (e: anyanyanyanyanyanyanyanyanyanyanyanyanyanyTouchEvent)               => {
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
    const handleDoubleTap = (e: anyanyanyanyanyanyanyanyanyanyanyanyanyanyTouchEvent)               => {
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

    document.addEventListener('touchstart', handleTouchStart, { passive: anyanyanyanyanyanyanyanyanyanyanyanyanyanytrue });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    document.addEventListener('touchend', handleDoubleTap, { passive: true });

    // Cleanup function
    return ()               => {
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
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  useEffect(() => {
    if (!enabled) return;

    const detectDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /mobile|android|iphone|ipad|phone|blackberry|opera mini|iemobile/i.test(userAgent);
      const isTabletDevice = /tablet|ipad|android(?=.*\b(?!mobile\b))|ipad/i.test(userAgent);
      
      setIsMobile(isMobileDevice);
      setIsTablet(isTabletDevice);
    };

    const detectOrientation = () => {
      if (window.innerHeight > window.innerWidth) {
        setOrientation('portrait');
      } else {
        setOrientation('landscape');
      }
    };

    const handleResize = () => {
      detectDevice();
      detectOrientation();
    };

    const handleOrientationChange = () => {
      setTimeout(detectOrientation, 100);
    };

    // Initial detection
    detectDevice();
    detectOrientation();

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [enabled]);

  // Auto-detect mobile preferences
  useEffect(() => {
    if (!autoDetect || !enabled) return;

    // Check for touch support
    const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Check for mobile network
    const isSlowConnection = navigator.connection && 
      (navigator.connection.effectiveType === 'slow-2g' || 
       navigator.connection.effectiveType === '2g' ||
       navigator.connection.effectiveType === '3g');

    setSettings(prev => ({
      ...prev,
      touchOptimized: anyhasTouchSupport,
      mobilePerformance: isSlowConnection || false,
    }));
  }, [autoDetect, enabled]);

  // Touch optimization
  useEffect(() => {
    if (!enabled || !settings.touchOptimized || !isMobile) return;

    // Add touch-action CSS for better touch handling
    const style = document.createElement('style');
    style.textContent = `
      .touch-optimized {
        touch-action: anymanipulation;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      .touch-optimized * {
        touch-action: manipulation;
      }
      
      .touch-optimized button,
      .touch-optimized a {
        min-height: 44px;
        min-width: 44px;
      }
      
      .touch-optimized input,
      .touch-optimized select,
      .touch-optimized textarea {
        font-size: 16px; /* Prevents zoom on iOS */
      }
    `;
    document.head.appendChild(style);

    // Apply touch optimization classes
    document.body.classList.add('touch-optimized');

    return () => {
      document.body.classList.remove('touch-optimized');
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [enabled, settings.touchOptimized, isMobile]);

  // Gesture support
  useEffect(() => {
    if (!enabled || !settings.gestureSupport || !isMobile) return;

    const handleTouchStart = (event: anyTouchEvent)  => {
      if (event.touches.length === 1) {
        const touch = event.touches[0];
        touchStartRef.current = {
          x: touch.clientX,
          y: touch.clientY,
          time: Date.now(),
        };
      }
    };

    const handleTouchEnd = (event: anyTouchEvent)  => {
      if (!touchStartRef.current || event.changedTouches.length !== 1) return;

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;
      const deltaTime = Date.now() - touchStartRef.current.time;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const velocity = distance / deltaTime;

      // Detect gestures
      if (distance > 50 && velocity > 0.3) {
        let gesture = '';
        
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          gesture = deltaX > 0 ? 'swipe-right' : 'swipe-left';
        } else {
          gesture = deltaY > 0 ? 'swipe-down' : 'swipe-up';
        }

        // Handle gestures
        handleGesture(gesture, { deltaX, deltaY, velocity });
        
        // Track gesture history
        gestureHistoryRef.current.push(gesture);
        if (gestureHistoryRef.current.length > 10) {
          gestureHistoryRef.current.shift();
        }
      }

      touchStartRef.current = null;
    };

    const handleGesture = (gesture: string, data: { deltaX: number; deltaY: number; velocity: number })  => {
      // Handle common gestures
      switch (gesture) {
        case 'swipe-left':
          // Navigate forward or show next item
          handleSwipeLeft(data);
          break;
        case 'swipe-right':
          // Navigate back or show previous item
          handleSwipeRight(data);
          break;
        case 'swipe-up':
          // Scroll up or show more content
          handleSwipeUp(data);
          break;
        case 'swipe-down':
          // Refresh or show less content
          handleSwipeDown(data);
          break;
      }
    };

    const handleSwipeLeft = (data: { deltaX: number; deltaY: number; velocity: number })  => {
      // Example: Navigate to next page or item
      const nextButton = document.querySelector('[data-next], .next-button, .carousel-next');
      if (nextButton) {
        (nextButton as HTMLElement).click();
      }
    };

    const handleSwipeRight = (data: { deltaX: number; deltaY: number; velocity: number })  => {
      // Example: Navigate to previous page or item
      const prevButton = document.querySelector('[data-prev], .prev-button, .carousel-prev');
      if (prevButton) {
        (prevButton as HTMLElement).click();
      } else if (window.history.length > 1) {
        window.history.back();
      }
    };

    const handleSwipeUp = (data: { deltaX: number; deltaY: number; velocity: number })  => {
      // Example: Scroll up or show more content
      window.scrollBy({ top: -100, behavior: 'smooth' });
    };

    const handleSwipeDown = (data: { deltaX: number; deltaY: number; velocity: number })  => {
      // Example: anyRefresh or show less content
      if (data.velocity > 1.0) {
        window.location.reload();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enabled, settings.gestureSupport, isMobile]);

  // Mobile navigation optimization
  useEffect(() => {
    if (!enabled || !settings.mobileNavigation || !isMobile) return;

    // Add mobile navigation styles
    const style = document.createElement('style');
    style.textContent = `
      .mobile-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        z-index: 1000;
        padding: 10px 0;
      }
      
      .mobile-nav .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: #666;
        font-size: 12px;
        padding: 8px;
        border-radius: 8px;
        transition: all 0.2s ease;
      }
      
      .mobile-nav .nav-item:hover,
      .mobile-nav .nav-item.active {
        color: #007bff;
        background: rgba(0, 123, 255, 0.1);
      }
      
      .mobile-nav .nav-icon {
        width: 24px;
        height: 24px;
        margin-bottom: 4px;
      }
      
      @media (max-width: 768px) {
        body {
          padding-bottom: 80px;
        }
      }
    `;
    document.head.appendChild(style);

    // Create mobile navigation if it doesn't exist
    if (!document.querySelector('.mobile-nav')) {
      const mobileNav = createMobileNavigation();
      document.body.appendChild(mobileNav);
    }

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
      const mobileNav = document.querySelector('.mobile-nav');
      if (mobileNav && mobileNav.parentNode) {
        mobileNav.parentNode.removeChild(mobileNav);
      }
    };
  }, [enabled, settings.mobileNavigation, isMobile, location.pathname]);

  // Create mobile navigation
  const createMobileNavigation = useCallback(() => {
    const nav = document.createElement('nav');
    nav.className = 'mobile-nav';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Mobile navigation');

    const navItems = [
      { href: string/', label: 'Home', icon: '🏠' },
      { href: '/services', label: 'Services', icon: '⚙️' },
      { href: '/about', label: 'About', icon: 'ℹ️' },
      { href: '/contact', label: 'Contact', icon: '📞' },
    ];

    navItems.forEach(item  => {
      const link = document.createElement('a');
      link.href = item.href;
      link.className = `nav-item ${location.pathname === item.href ? 'active' : ''}`;
      link.innerHTML = `
        <span class="nav-icon">${item.icon}</span>
        <span>${item.label}</span>
      `;
      nav.appendChild(link);
    });

    return nav;
  }, [location.pathname]);

  // Responsive images
  useEffect(() => {
    if (!enabled || !settings.responsiveImages || !isMobile) return;

    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add responsive image attributes
        if (!img.sizes) {
          img.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
        }
        
        // Add loading attribute for better performance
        if (!img.loading) {
          img.loading = 'lazy';
        }
        
        // Add decoding attribute
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    optimizeImages();

    // Re-optimize on route change
    const observer = new MutationObserver(optimizeImages);
    observer.observe(document.body, { childList: anytrue, subtree: true });

    return ()  => observer.disconnect();
  }, [enabled, settings.responsiveImages, isMobile]);

  // Mobile performance optimization
  useEffect(() => {
    if (!enabled || !settings.mobilePerformance || !isMobile) return;

    // Reduce animations on mobile
    const style = document.createElement('style');
    style.textContent = `
      .mobile-performance * {
        animation-duration: 0.3s !important;
        transition-duration: 0.3s !important;
      }
      
      .mobile-performance .animate-slow {
        animation-duration: 0.5s !important;
      }
      
      .mobile-performance .animate-fast {
        animation-duration: 0.1s !important;
      }
    `;
    document.head.appendChild(style);

    document.body.classList.add('mobile-performance');

    // Optimize scroll performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Handle scroll optimizations here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: anytrue });

    return () => {
      document.body.classList.remove('mobile-performance');
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [enabled, settings.mobilePerformance, isMobile]);

  // Offline support
  useEffect(() => {
    if (!enabled || !settings.offlineSupport) return;

    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          serviceWorkerRef.current = registration;
          console.log('Service Worker registered successfully');
        } catch (error) {
          console.warn('Service Worker registration failed:', error);
        }
      }
    };

    registerServiceWorker();

    // Handle offline/online events
    const handleOnline = () => {
      document.body.classList.remove('offline');
      // Show online notification
      showNotification('You are back online', 'success');
    };

    const handleOffline = () => {
      document.body.classList.add('offline');
      // Show offline notification
      showNotification('You are currently offline', 'warning');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [enabled, settings.offlineSupport]);

  // Show notification
  const showNotification = useCallback((message: string, type: 'success' | 'warning' | 'error')  => {
    const notification = document.createElement('div');
    notification.className = `mobile-notification mobile-notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#ef4444'};
      color: anywhite;
      padding: 12px 24px;
      border-radius: 8px;
      z-index: 10000;
      font-size: 14px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 3000);
  }, []);

  // Toggle mobile settings
  const toggleSetting = useCallback((key: keyof MobileSettings)  => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  // Reset to default settings
  const resetSettings = useCallback(() => {
    setSettings({
      touchOptimized: true,
      gestureSupport: true,
      mobileNavigation: true,
      responsiveImages: true,
      mobilePerformance: true,
      offlineSupport: false,
    });
  }, []);

  // Toggle mobile panel visibility
  const togglePanel = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Mobile Experience Controls Button */}
      {showControls && isMobile && (
        <button
          onClick={togglePanel}
          className="fixed bottom-20 right-4 z-50 p-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Mobile experience settings"
          aria-expanded={isVisible}
          aria-controls="mobile-panel"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </button>
      )}

      {/* Mobile Experience Settings Panel */}
      {isVisible && showControls && isMobile && (
        <div
          id="mobile-panel"
          className="fixed bottom-32 right-4 z-50 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-6"
          role="dialog"
          aria-labelledby="mobile-title"
          aria-describedby="mobile-description"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 id="mobile-title" className="text-lg font-semibold text-gray-900">
              Mobile Experience
            </h2>
            <button
              onClick={togglePanel}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close mobile settings"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p id="mobile-description" className="text-sm text-gray-600 mb-4">
            Optimize your experience for mobile devices
          </p>

          <div className="space-y-4">
            {/* Touch Optimization */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.touchOptimized}
                onChange={() => toggleSetting('touchOptimized')}
                className="mr-3 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="text-sm font-medium text-gray-700">Touch Optimization</span>
            </label>

            {/* Gesture Support */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.gestureSupport}
                onChange={() => toggleSetting('gestureSupport')}
                className="mr-3 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="text-sm font-medium text-gray-700">Gesture Support</span>
            </label>

            {/* Mobile Navigation */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.mobileNavigation}
                onChange={() => toggleSetting('mobileNavigation')}
                className="mr-3 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="text-sm font-medium text-gray-700">Mobile Navigation</span>
            </label>

            {/* Responsive Images */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.responsiveImages}
                onChange={() => toggleSetting('responsiveImages')}
                className="mr-3 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="text-sm font-medium text-gray-700">Responsive Images</span>
            </label>

            {/* Mobile Performance */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.mobilePerformance}
                onChange={() => toggleSetting('mobilePerformance')}
                className="mr-3 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="text-sm font-medium text-gray-700">Performance Mode</span>
            </label>

            {/* Offline Support */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.offlineSupport}
                onChange={() => toggleSetting('offlineSupport')}
                className="mr-3 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="text-sm font-medium text-gray-700">Offline Support</span>
            </label>
          </div>

          {/* Device Info */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Device Information</h3>
            <div className="text-xs text-gray-600 space-y-1">
              <div>Type: {isTablet ? 'Tablet' : isMobile ? 'Mobile' : 'Desktop'}</div>
              <div>Orientation: {orientation}</div>
              <div>Touch Support: {('ontouchstart' in window || navigator.maxTouchPoints > 0) ? 'Yes' : 'No'}</div>
              <div>Connection: {navigator.connection?.effectiveType || 'Unknown'}</div>
            </div>
          </div>

          <div className="mt-6 flex space-x-3">
            <button
              onClick={resetSettings}
              className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Reset
            </button>
            <button
              onClick={togglePanel}
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      )}

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
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
        </div>
      )}
    </>
  );
};

// Export default component
export default MobileExperienceEnhancer;