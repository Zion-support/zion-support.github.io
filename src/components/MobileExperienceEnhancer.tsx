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

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  autoOptimize?: boolean;
}

export function MobileExperienceEnhancer({ 
  enabled = true, 
  showControls = false, 
  autoOptimize = true 
}: MobileExperienceEnhancerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<MobileMetrics | null>(null);
  const [optimizations, setOptimizations] = useState<string[]>([]);
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
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      pixelRatio: window.devicePixelRatio || 1,
      orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
      touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
      connectionType: (navigator as any).connection?.effectiveType || 'unknown',
      batteryLevel: 0,
      isCharging: false
    };

    // Get battery information if available
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        metrics.batteryLevel = Math.round(battery.level * 100);
        metrics.isCharging = battery.charging;
        setMetrics(prev => prev ? { ...prev, ...metrics } : metrics);
      });
    }

    // Get connection information if available
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
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
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      };
    };

    const handleTouchEnd = (e: TouchEvent) => {
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
    const handleDoubleTap = (e: TouchEvent) => {
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

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    document.addEventListener('touchend', handleDoubleTap, { passive: true });

    // Cleanup function
    return () => {
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
      </motion.button>

      {/* Mobile Experience Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
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
                </button>
              </div>
            </div>

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
        </div>
      )}
    </>
  );
}
