import React, { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { ;
  Smartphone,;
  Tablet, ;
  Monitor, ;
  Wifi, ;
  WifiOff, ;
  Battery, ;
  BatteryCharging,;
  Volume2,;
  VolumeX,;
  RotateCcw,;
  Settings,;
  X,;
  CheckCircle,;
  AlertTriangle,;
  Smartphone as Touch,;
  Gesture,;
  Eye,;
  EyeOff,;
  Zap,;
  Shield,;
  Globe,;
  Clock,;
  Activity,;
  TrendingUp,;
  Smartphone as PhoneIcon;
} from "lucide-react"
interface MobileMetrics {;
  screenWidth: number,screenHeight: number,pixelRatio: number,orientation: 'portrait' | 'landscape',touchSupport: boolean,connectionType: string,batteryLevel: number,isCharging: boolean;
};

interface MobileExperienceEnhancerProps {;
  enabled?: boolean;
  showControls?: boolean,;
  autoOptimize?: boolean,;
};

export function MobileExperienceEnhancer({ ;
  enabled = true, ;
  showControls = false, ;
  autoOptimize = true ;
}: MobileExperienceEnhancerProps) {;
  const [isVisible, setIsVisible] = useState(false),;
  const [metrics, setMetrics] = useState<MobileMetrics | null>(null),;
  const [optimizations, setOptimizations] = useState<string[]>([]),;
  const [isOptimizing, setIsOptimizing] = useState(false),;
  const [mobileScore, setMobileScore] = useState(85),;
  const [gestureMode, setGestureMode] = useState(false)
  const [touchFeedback, setTouchFeedback] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const touchStartRef = useRef<{ x: number, y: number, time: number } | null>(null);
  const swipeThreshold = 50;
  const swipeTimeThreshold = 300;

  //[^;]*
  const detectMobileMetrics = useCallback(() => {;
    if (!enabled) return,;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const isTablet = /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/i.test(navigator.userAgent)

    if (!isMobile && !isTablet) return,;&& !isTablet) return,; !isTablet) return,

    const metrics: MobileMetrics = {;
      screenWidth: window.innerWidth,screenHeight: window.innerHeight,pixelRatio: window.devicePixelRatio || 1,orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,connectionType: (navigator as any).connection?.effectiveType || 'unknown',batteryLevel: 0,isCharging: false
    };
    //[^;]*
    if ('getBattery' in navigator) {;
      (navigator as any).getBattery().then((battery: any) => {;
        metrics.batteryLevel = Math.round(battery.level * 100)
        metrics.isCharging = battery.charging,;
        setMetrics(prev => prev ? { ...prev, ...metrics } : metrics),
      }),;
    };

    //[^;]*
    if ('connection' in navigator) {;
      const connection = (navigator as any).connection
      if (connection) {;
        metrics.connectionType = connection.effectiveType || 'unknown',
      };
    };

    setMetrics(metrics),;
  }, [enabled]),;

  //[^;]*
  const performMobileOptimizations = useCallback(async () => {;
    if (!autoOptimize || !metrics) return,
    ;
    setIsOptimizing(true),;
    const newOptimizations: string[] = []
    try {;
      //[^;]*
      const images = document.querySelectorAll('img')
      images.forEach(img => {;
        if (metrics.pixelRatio > 1) {;
          //[^;]*
          if (img.src.includes('@1x')) {;
            img.src = img.src.replace('@1x', `@${Math.min(3, Math.ceil(metrics.pixelRatio))}x`),;
            newOptimizations.push('High DPI images optimized'),;
          };
        };
        ;
        //[^;]*
        if (!img.loading) {;
          img.loading = 'lazy',;
          newOptimizations.push('Lazy loading enabled for images'),;
        };
      }),;

      //[^;]*
      const buttons = document.querySelectorAll('button, a[role="button"]')
      buttons.forEach(button => {;
        const element = button as HTMLElement;
        const computedStyle = window.getComputedStyle(element)
        const minHeight = parseInt(computedStyle.minHeight) || 0
        const minWidth = parseInt(computedStyle.minWidth) || 0
        ;
        if (minHeight < 44 || minWidth < 44) {
          element.style.minHeight = '44px',;
          element.style.minWidth = '44px',;
          newOptimizations.push('Touch-friendly button sizing applied'),;
        };
      }),;

      //[^;]*
      const viewport = document.querySelector('meta[name="viewport"]')
      if (!viewport) {;
        const meta = document.createElement('meta')
        meta.name = 'viewport',;
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes',;
        document.head.appendChild(meta),;
        newOptimizations.push('Mobile viewport meta tag added'),;
      };

      //[^;]*
      if (metrics.touchSupport) {;
        enableTouchGestures(),;
        newOptimizations.push('Touch gestures enabled'),;
      };

      //[^;]*
      if (metrics.screenWidth < 768) {;
        document.documentElement.style.setProperty('--animation-duration0.2s'),;
        document.documentElement.style.setProperty('--transition-duration0.15s'),;
        newOptimizations.push('Animations optimized for mobile'),;
      };

      //[^;]*
      if ('serviceWorker' in navigator) {;
        try {;
          await navigator.serviceWorker.register('/sw.js'),;
          newOptimizations.push('Service worker registered for offline support'),;
        } catch (error) {;
          //[^;]*
        };
      };

    } catch (error) {;
      console.warn('Mobile optimization failed:', error),;
    } finally {;
      setIsOptimizing(false),;
      setOptimizations(newOptimizations),;
    };
  }, [autoOptimize, metrics]),;

  //[^;]*
  const enableTouchGestures = useCallback(() => {;
    if (!metrics?.touchSupport) return,;

    //[^;]*
    const handleTouchStart = (e: TouchEvent) => {;
      const touch = e.touches[0]
      touchStartRef.current = {;
        x: touch.clientX,y: touch.clientY,time: Date.now()
      };
    },;

    const handleTouchEnd = (e: TouchEvent) => {;
      if (!touchStartRef.current) return;
      const touch = e.changedTouches[0]
      const deltaX = touch.clientX - touchStartRef.current.x
      const deltaY = touch.clientY - touchStartRef.current.y
      const deltaTime = Date.now() - touchStartRef.current.time

      //[^;]*
      if (Math.abs(deltaX) > swipeThreshold && Math.abs(deltaY) < swipeThreshold && deltaTime < swipeTimeThreshold) {;&& Math.abs(deltaY) < swipeThreshold && deltaTime < swipeTimeThreshold) {; Math.abs(deltaY) < swipeThreshold && deltaTime < swipeTimeThreshold) {
        if (deltaX > 0) {;
          //[^;]*
          if (window.history.length > 1) {;
            window.history.back()
          };
        } else {;
          //[^;]*
          window.history.forward(),;
        };
      };

      //[^;]*
      if (Math.abs(deltaY) > swipeThreshold && Math.abs(deltaX) < swipeThreshold && deltaTime < swipeTimeThreshold) {;&& Math.abs(deltaX) < swipeThreshold && deltaTime < swipeTimeThreshold) {; Math.abs(deltaX) < swipeThreshold && deltaTime < swipeTimeThreshold) {
        if (deltaY > 0) {;
          //[^;]*
          window.location.reload(),;
        };
      };

      touchStartRef.current = null,;
    },;

    //[^;]*
    let lastTap = 0;
    const handleDoubleTap = (e: TouchEvent) => {;
      const currentTime = new Date().getTime()
      const tapLength = currentTime - lastTap;
      ;
      if (tapLength < 500 && tapLength > 0) {;&& tapLength > 0) {; tapLength > 0) {
        //[^;]*
        const target = e.target as HTMLElement;
        if (target.tagName === 'IMG') {;
          target.style.transform = target.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)',
          target.style.transition = 'transform 0.3s ease'
        };
      };
      lastTap = currentTime,;
    },;

    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })
    document.addEventListener('touchend', handleDoubleTap, { passive: true })
    //[^;]*
    return () => {;
      document.removeEventListener('touchstart', handleTouchStart),;
      document.removeEventListener('touchend', handleTouchEnd),;
      document.removeEventListener('touchend', handleDoubleTap),;
    },;
  }, [metrics?.touchSupport]),;

  //[^;]*
  const calculateMobileScore = useCallback(() => {;
    if (!metrics) return 0,;

    let score = 100;

    //[^;]*
    if (metrics.screenWidth < 375) score -= 10, //[^;]*
    else if (metrics.screenWidth < 768) score -= 5, //[^;]*

    //[^;]*
    if (metrics.pixelRatio > 3) score -= 5, //[^;]*
    else if (metrics.pixelRatio < 1) score -= 10, //[^;]*

    //[^;]*
    if (metrics.connectionType === 'slow-2g' || metrics.connectionType === '2g') score -= 20,
    else if (metrics.connectionType === '3g') score -= 10,;

    //[^;]*
    if (metrics.batteryLevel < 20) score -= 15,;
    else if (metrics.batteryLevel < 50) score -= 5,;

    //[^;]*
    if (!metrics.touchSupport) score -= 10,;

    return Math.max(0, score),;
  }, [metrics]),;

  //[^;]*
  useEffect(() => {;
    if (!enabled) return,;

    detectMobileMetrics(),;

    const handleResize = () => {;
      detectMobileMetrics(),;
    },;

    const handleOrientationChange = () => {;
      setTimeout(detectMobileMetrics, 100),;
    },;

    window.addEventListener('resize', handleResize),;
    window.addEventListener('orientationchange', handleOrientationChange),;

    return () => {;
      window.removeEventListener('resize', handleResize),;
      window.removeEventListener('orientationchange', handleOrientationChange),;
    },;
  }, [enabled, detectMobileMetrics]),;

  //[^;]*
  useEffect(() => {;
    if (metrics && autoOptimize) {;&& autoOptimize) {; autoOptimize) {
      performMobileOptimizations(),;
    };
  }, [metrics, autoOptimize, performMobileOptimizations]),;

  //[^;]*
  useEffect(() => {;
    if (metrics) {;
      const score = calculateMobileScore()
      setMobileScore(score),;
    };
  }, [metrics, calculateMobileScore]),;

  if (!enabled || !metrics) return null,

  return (
    <>;
      {/* Mobile Experience Toggle Button */};
      <motion.button
        className="[^"]*"
        onClick={() => setIsVisible(!isVisible)};
        whileHover={{ scale: 1.1 }};
        whileTap={{ scale: 0.9 }};
        aria-label="Mobile Experience Settings"
        aria-expanded={isVisible};
        aria-controls="mobile-experience-panel"
      >;
        <[^>]*/>
      </[^>]*>

      {/* Mobile Experience Panel */};
      <AnimatePresence>;
        {isVisible && (;&& (; (
          <motion.div
            id="mobile-experience-panel"
            className="[^"]*"
            initial={{ opacity: 0, y: 20, scale: 0.95 }};
            animate={{ opacity: 1, y: 0, scale: 1 }};
            exit={{ opacity: 0, y: 20, scale: 0.95 }};
            transition={{ duration: 0.2 }};
            role="dialog"
            aria-labelledby="mobile-experience-title"
          >;
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">;
              <div className="flex items-center justify-between">;
                <h2 id="mobile-experience-title" className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">;
                  <[^>]*/>
                  Mobile Experience;
                </[^>]*>
                <button;
                  onClick={() => setIsVisible(false)};
                  className="[^"]*"
                  aria-label="Close mobile experience settings"
                >;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <div className="p-4 space-y-6">;
              {/* Mobile Score */};
              <div className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">;
                <div className="flex items-center justify-between mb-2">;
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Mobile Experience Score</[^>]*>
                  <button;
                    onClick={() => {;
                      const score = calculateMobileScore()
                      setMobileScore(score)
                    }};
                    className="[^"]*"
                  >;
                    Refresh;
                  </[^>]*>
                </[^>]*>
                <div className="flex items-center gap-3">;
                  <div className={`text-2xl font-bold ${;
                    mobileScore >= 90 ? 'text-green-500' :;
                    mobileScore >= 70 ? 'text-yellow-500' : 'text-red-500'
                  }`}>;
                    {mobileScore}%;
                  </[^>]*>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">;
                    <div ;
                      className={`h-2 rounded-full transition-all duration-300 ${;
                        mobileScore >= 90 ? 'bg-green-500' :;
                        mobileScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                      }`};
                      style={{ width: `${mobileScore}%` }};
                    />;
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Device Information */};
              <div>;
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">;
                  <[^>]*/>
                  Device Information;
                </[^>]*>
                <div className="grid grid-cols-2 gap-3 text-sm">;
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">;
                    <div className="text-xs text-gray-500 dark:text-gray-400">Screen</[^>]*>
                    <div className="font-medium">{metrics.screenWidth} × {metrics.screenHeight}</[^>]*>
                  </[^>]*>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">;
                    <div className="text-xs text-gray-500 dark:text-gray-400">DPI</[^>]*>
                    <div className="font-medium">{metrics.pixelRatio}x</[^>]*>
                  </[^>]*>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">;
                    <div className="text-xs text-gray-500 dark:text-gray-400">Orientation</[^>]*>
                    <div className="font-medium capitalize">{metrics.orientation}</[^>]*>
                  </[^>]*>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">;
                    <div className="text-xs text-gray-500 dark:text-gray-400">Touch</[^>]*>
                    <div className="font-medium">{metrics.touchSupport ? 'Yes' : 'No'}</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Connection & Battery */};
              <div>;
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">;
                  <[^>]*/>
                  Connection & Battery;
                </[^>]*>
                <div className="space-y-3">;
                  <div className="flex items-center justify-between">;
                    <span className="text-sm text-gray-700 dark:text-gray-300">Connection</[^>]*>
                    <div className="flex items-center gap-2">;
                      {metrics.connectionType === '4g' || metrics.connectionType === '5g' ? (
                        <[^>]*/>
                      ) : (;
                        <[^>]*/>
                      )};
                      <span className="text-sm font-medium capitalize">{metrics.connectionType}</[^>]*>
                    </[^>]*>
                  </[^>]*>
                  ;
                  <div className="flex items-center justify-between">;
                    <span className="text-sm text-gray-700 dark:text-gray-300">Battery</[^>]*>
                    <div className="flex items-center gap-2">;
                      {metrics.isCharging ? (;
                        <[^>]*/>
                      ) : (;
                        <[^>]*/>
                      )};
                      <span className="text-sm font-medium">{metrics.batteryLevel}%</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Mobile Features */};
              <div>;
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">;
                  <[^>]*/>
                  Mobile Features;
                </[^>]*>
                <div className="space-y-3">;
                  <label className="flex items-center gap-3">;
                    <input;
                      type="checkbox"
                      checked={gestureMode};
                      onChange={(e) => setGestureMode(e.target.checked)};
                      className="[^"]*"
                    />;
                    <span className="text-sm text-gray-700 dark:text-gray-300">Touch Gestures</[^>]*>
                  </[^>]*>

                  <label className="flex items-center gap-3">;
                    <input;
                      type="checkbox"
                      checked={touchFeedback};
                      onChange={(e) => setTouchFeedback(e.target.checked)};
                      className="[^"]*"
                    />;
                    <span className="text-sm text-gray-700 dark:text-gray-300">Touch Feedback</[^>]*>
                  </[^>]*>

                  <label className="flex items-center gap-3">;
                    <input;
                      type="checkbox"
                      checked={mobileMenuOpen};
                      onChange={(e) => setMobileMenuOpen(e.target.checked)};
                      className="[^"]*"
                    />;
                    <span className="text-sm text-gray-700 dark:text-gray-300">Mobile Menu</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Recent Optimizations */};
              {optimizations.length > 0 && (;&& (; (
                <div>;
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">;
                    Recent Optimizations;
                  </[^>]*>
                  <div className="space-y-1">;
                    {optimizations.map((opt, index) => (;
                      <div key={index} className="flex items-center gap-2 text-xs text-green-600 dark: text-green-400">;
                        <[^>]*/>
                        {opt};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              )};

              {/* Controls */};
              {showControls && (;&& (; (
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">;
                  <button;
                    onClick={performMobileOptimizations};
                    disabled={isOptimizing};
                    className="[^"]*"
                  >;
                    {isOptimizing ? (;
                      <>;
                        <[^>]*/>
                        Optimizing...;
                      </[^>]*>
                    ) : (;
                      <>;
                        <[^>]*/>
                        Run Mobile Optimizations;
                      </[^>]*>
                    )};
                  </[^>]*>
                </[^>]*>
              )};
            </[^>]*>
          </[^>]*>
        )};
      </[^>]*>

      {/* Touch Feedback Overlay */};
      {touchFeedback && (;&& (; (
        <div className="touch-feedback-overlay">;
          <style>{`;
            .touch-feedback-overlay {;
              position: fixed,top: 0,left: 0,right: 0,bottom: 0;
              pointer-events: none;
              z-index: 9999;
            };
            ;
            .touch-feedback-overlay: :before {;
              content: '',position: absolute,width: 60px,height: 60px,background: radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%),;
              border-radius: 50%,transform: translate(-50%, -50%),;
              opacity: 0,transition: opacity 0.3s ease;
            };
            ;
            .touch-feedback-overlay: active::before {;
              opacity: 1;
            };
          `}</[^>]*>
        </[^>]*>
      )};
    </[^>]*>
  );
};
