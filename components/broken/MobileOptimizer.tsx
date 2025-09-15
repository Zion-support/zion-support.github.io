<<<<<<< HEAD
"use client";
import React{ useStateuseEffectuseRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SmartphoneTabletMonitorRotateCcw
  WifiOffSignalHigh
  MouseHand
=======
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, Tablet, Monitor, RotateCcw, 
  Wifi, WifiOff, Signal, SignalHigh, 
  Mouse, Hand
>>>>>>> origin/auto/autonomy-17186719616
} from 'lucide-react';

// TouchEvent types are already defined in DOM

interface MobileOptimizerProps {
  children: React.ReactNode;
  showDebugInfo?: boolean;
  enableTouchGestures?: boolean;
  enableMobileLayout?: boolean;
  enablePerformanceMode?: boolean;
}

interface TouchGesture {
  type: 'swipe' | 'pinch' | 'rotate' | 'longPress';
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({
  children,
  showDebugInfo = false,
  enableTouchGestures = true,
  enableMobileLayout = true,
  enablePerformanceMode = true
}) => {
<<<<<<< HEAD
  const [isMobilesetIsMobile] = useState(false);
  const [isTabletsetIsTablet] = useState(false);
  const [orientationsetOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [touchGesturesetTouchGestures] = useState<TouchGesture[]>([]);
  const [performanceMetricsetPerformanceMetrics] = useState({
=======
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [touchGestures, setTouchGestures] = useState<TouchGesture[]>([]);
  const [performanceMetrics, setPerformanceMetrics] = useState({
>>>>>>> origin/auto/autonomy-17186719616
    fps: 0,
    memoryUsage: 0,
    batteryLevel: 0,
    networkSpeed: 'unknown'
  });
<<<<<<< HEAD
  const [showMobilePanelsetShowMobilePanel] = useState(false);
=======
  const [showMobilePanel, setShowMobilePanel] = useState(false);
>>>>>>> origin/auto/autonomy-17186719616
  
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const touchMoveRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const fpsRef = useRef<number>(0);
  const frameCountRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // Detect mobile device
  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /mobile|android|iphone|ipad|ipod|blackberry|windows phone/g.test(userAgent);
      const isTabletDevice = /ipad|android(?!.*mobile)|tablet/g.test(userAgent);
      
      setIsMobile(isMobileDevice);
      setIsTablet(isTabletDevice);
      
      // Apply mobile-specific optimizations
      if (isMobileDevice && enableMobileLayout) {
        applyMobileLayout();
      }
      
      if (isMobileDevice && enablePerformanceMode) {
        enableMobilePerformanceMode();
      }
    };

    checkDevice();
<<<<<<< HEAD
    window.addEventListener(', 'resize', 'checkDevice);
    return () => window.removeEventListener(', 'resize', 'checkDevice);
  }[enableMobileLayoutenablePerformanceMode]);
=======
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, [enableMobileLayout, enablePerformanceMode]);
>>>>>>> origin/auto/autonomy-17186719616

  // Detect orientation changes
  useEffect(() => {
    const checkOrientation = () => {
      const newOrientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
      setOrientation(newOrientation);
      
      // Apply orientation-specific optimizations
      if (newOrientation === 'landscape') {
        applyLandscapeOptimizations();
      } else {
        applyPortraitOptimizations();
      }
    };

    checkOrientation();
<<<<<<< HEAD
    window.addEventListener(', 'orientationchange', 'checkOrientation);
    window.addEventListener(', 'resize', 'checkOrientation);
    
    return () => {
      window.removeEventListener(', 'orientationchange', 'checkOrientation);
      window.removeEventListener(', 'resize', 'checkOrientation);
    };
  }[]);
=======
    window.addEventListener('orientationchange', checkOrientation);
    window.addEventListener('resize', checkOrientation);
    
    return () => {
      window.removeEventListener('orientationchange', checkOrientation);
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  // Touch gesture handling
  useEffect(() => {
    if (!enableTouchGestures || !isMobile) return;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          time: Date.now()
        };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1 && touchStartRef.current) {
        touchMoveRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          time: Date.now()
        };
      }
    });
    
<<<<<<< HEAD
    setTimeout(() => setIsOptimizing(false)2000);
  }[]);
=======
    setTimeout(() => setIsOptimizing(false), 2000);
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  // Touch gesture optimization
  const optimizeTouchGestures = useCallback(() => {
    if (typeof window === 'undefined') return;

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartRef.current && touchMoveRef.current) {
<<<<<<< HEAD
        const gesture = detectTouchGesture(touchStartRef.currentouchMoveRef.current);
        if (gesture) {
          setTouchGestures(prev => [...prev.slice(-4)gesture]);
=======
        const gesture = detectTouchGesture(touchStartRef.current, touchMoveRef.current);
        if (gesture) {
          setTouchGestures(prev => [...prev.slice(-4), gesture]);
>>>>>>> origin/auto/autonomy-17186719616
          handleGestureAction(gesture);
        }
        
        touchStartRef.current = null;
        touchMoveRef.current = null;
      }
    });
    
    // Optimize fonts for high DPI
    const fonts = document.querySelectorAll('link[rel="preload"][as="font"]');
    fonts.forEach(font => {
<<<<<<< HEAD
      font.setAttribute(', 'crossorigin', 'anonymous');
    });
  }[]);
=======
      font.setAttribute('crossorigin', 'anonymous');
    });
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

    const handleLongPress = (e: TouchEvent) => {
      const longPressTimer = setTimeout(() => {
        const gesture: TouchGesture = {
          type: 'longPress',
          duration: 1000
        };
<<<<<<< HEAD
        setTouchGestures(prev => [...prev.slice(-4)gesture]);
        handleGestureAction(gesture);
      }1000);

      const clearLongPress = () => clearTimeout(longPressTimer);
      
      e.target?.addEventListener(', 'touchend', 'clearLongPress{ once: true });
      e.target?.addEventListener(', 'touchmove', 'clearLongPress{ once: true });
    };

    document.addEventListener(', 'touchstart', 'handleTouchStart{ passive: true });
    document.addEventListener(', 'touchmove', 'handleTouchMove{ passive: true });
    document.addEventListener(', 'touchend', 'handleTouchEnd{ passive: true });
    document.addEventListener(', 'touchstart', 'handleLongPress{ passive: true });

    return () => {
      document.removeEventListener(', 'touchstart', 'handleTouchStart);
      document.removeEventListener(', 'touchmove', 'handleTouchMove);
      document.removeEventListener(', 'touchend', 'handleTouchEnd);
      document.removeEventListener(', 'touchstart', 'handleLongPress);
    };
  }[enableTouchGesturesisMobile]);
=======
        setTouchGestures(prev => [...prev.slice(-4), gesture]);
        handleGestureAction(gesture);
      }, 1000);

      const clearLongPress = () => clearTimeout(longPressTimer);
      
      e.target?.addEventListener('touchend', clearLongPress, { once: true });
      e.target?.addEventListener('touchmove', clearLongPress, { once: true });
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    document.addEventListener('touchstart', handleLongPress, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchstart', handleLongPress);
    };
  }, [enableTouchGestures, isMobile]);
>>>>>>> origin/auto/autonomy-17186719616

  // Performance monitoring
  useEffect(() => {
    if (!enablePerformanceMode) return;

    let animationFrameId: number;
    
    const measurePerformance = (currentTime: number) => {
      frameCountRef.current++;
      
      if (currentTime - lastTimeRef.current >= 1000) {
        fpsRef.current = frameCountRef.current;
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
        
        // Update performance metrics
        setPerformanceMetrics(prev => ({
          ...prev,
          fps: fpsRef.current
        }));
      }
      
      animationFrameId = requestAnimationFrame(measurePerformance);
    };

    animationFrameId = requestAnimationFrame(measurePerformance);

    // Monitor memory usage
    const memoryInterval = setInterval(() => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setPerformanceMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) // MB
        }));
      }
<<<<<<< HEAD
    }2000);
=======
    }, 2000);
>>>>>>> origin/auto/autonomy-17186719616

    // Monitor battery level
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        const updateBatteryLevel = () => {
          setPerformanceMetrics(prev => ({
            ...prev,
            batteryLevel: Math.round(battery.level * 100)
          }));
        };
        
        updateBatteryLevel();
<<<<<<< HEAD
        battery.addEventListener(', 'levelchange', 'updateBatteryLevel);
        
        return () => battery.removeEventListener(', 'levelchange', 'updateBatteryLevel);
=======
        battery.addEventListener('levelchange', updateBatteryLevel);
        
        return () => battery.removeEventListener('levelchange', updateBatteryLevel);
>>>>>>> origin/auto/autonomy-17186719616
      });
    }

    // Monitor network speed
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const updateNetworkSpeed = () => {
        let speed = 'unknown';
        if (connection.effectiveType) {
          speed = connection.effectiveType;
        } else if (connection.downlink) {
          speed = `${connection.downlink} Mbps`;
        }
        
        setPerformanceMetrics(prev => ({
          ...prev,
          networkSpeed: speed
        }));
      };
      
      updateNetworkSpeed();
<<<<<<< HEAD
      connection.addEventListener(', 'change', 'updateNetworkSpeed);
      
      return () => connection.removeEventListener(', 'change', 'updateNetworkSpeed);
=======
      connection.addEventListener('change', updateNetworkSpeed);
      
      return () => connection.removeEventListener('change', updateNetworkSpeed);
>>>>>>> origin/auto/autonomy-17186719616
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(memoryInterval);
    };
<<<<<<< HEAD
  }[enablePerformanceMode]);

  const detectTouchGesture = (start: { x: number; y: number; time: number }end: { x: number; y: number; time: number }): TouchGesture | null => {
=======
  }, [enablePerformanceMode]);

  const detectTouchGesture = (start: { x: number; y: number; time: number }, end: { x: number; y: number; time: number }): TouchGesture | null => {
>>>>>>> origin/auto/autonomy-17186719616
    const deltaX = end.x - start.x;
    const deltaY = end.y - start.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const duration = end.time - start.time;
    
    // Minimum distance and duration thresholds
    if (distance < 50 || duration < 100) return null;
    
    // Determine direction
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      return {
        type: 'swipe',
        direction: deltaX > 0 ? 'right' : 'left',
        distance: Math.abs(deltaX),
        duration
      };
    } else {
      return {
        type: 'swipe',
        direction: deltaY > 0 ? 'down' : 'up',
        distance: Math.abs(deltaY),
        duration
      };
    }
  };

  const handleGestureAction = (gesture: TouchGesture) => {
    switch (gesture.type) {
      case 'swipe':
        if (gesture.direction === 'left') {
          // Navigate forward
          if (window.history.length > 1) {
            window.history.forward();
          }
        } else if (gesture.direction === 'right') {
          // Navigate back
          if (window.history.length > 1) {
            window.history.back();
          }
        } else if (gesture.direction === 'up') {
          // Scroll to top
<<<<<<< HEAD
          window.scrollTo({ top: 0behavior: 'smooth' });
        } else if (gesture.direction === 'down') {
          // Scroll to bottom
          window.scrollTo({ top: document.body.scrollHeightbehavior: 'smooth' });
=======
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (gesture.direction === 'down') {
          // Scroll to bottom
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
>>>>>>> origin/auto/autonomy-17186719616
        }
        break;
      case 'longPress':
        // Show context menu or additional options
        console.log('Long press detected');
        break;
    }
  };

  const applyMobileLayout = () => {
    // Add mobile-specific CSS classes
    document.documentElement.classList.add('mobile-optimized');
    
    // Optimize viewport
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
<<<<<<< HEAD
      viewport.setAttribute(', 'content', 'width=device-widthinitial-scale=1.0maximum-scale=1.0user-scalable=no');
=======
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
>>>>>>> origin/auto/autonomy-17186719616
    }
    
    // Add touch-action CSS
    const style = document.createElement('style');
    style.textContent = `
      .mobile-optimized * {
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
      }
      
      .mobile-optimized button,
      .mobile-optimized a {
        min-height: 44px;
        min-width: 44px;
      }
      
      .mobile-optimized input,
      .mobile-optimized select,
      .mobile-optimized textarea {
        font-size: 16px; /* Prevents zoom on iOS */
      }
    `;
    document.head.appendChild(style);
  };

  const enableMobilePerformanceMode = () => {
    // Reduce animations on mobile
    document.documentElement.classList.add('mobile-performance-mode');
    
    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.loading = 'lazy';
      img.decoding = 'async';
    });
    
    // Reduce motion for better performance
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduced-motion');
    }
  };

  const applyLandscapeOptimizations = () => {
    // Landscape-specific optimizations
    document.documentElement.classList.add('landscape-mode');
    
    // Adjust layout for landscape
    const style = document.createElement('style');
    style.textContent = `
      .landscape-mode .mobile-panel {
        width: 300px;
        height: 100vh;
      }
    `;
    document.head.appendChild(style);
  };

  const applyPortraitOptimizations = () => {
    // Portrait-specific optimizations
    document.documentElement.classList.remove('landscape-mode');
  };

  const optimizeForMobile = useCallback(() => {
    if (!isMobile) return;

    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) img.loading = 'lazy';
      if (!img.decoding) img.decoding = 'async';
    });

    // Optimize fonts
    const fonts = document.querySelectorAll('link[rel="preload"][as="font"]');
    fonts.forEach(font => {
<<<<<<< HEAD
      font.setAttribute(', 'crossorigin', 'anonymous');
    });

    // Add mobile-specific event listeners
    document.addEventListener('touchstart'() => {}{ passive: true });
    document.addEventListener('touchmove'() => {}{ passive: true });
  }[isMobile]);

  useEffect(() => {
    optimizeForMobile();
  }[optimizeForMobile]);
=======
      font.setAttribute('crossorigin', 'anonymous');
    });

    // Add mobile-specific event listeners
    document.addEventListener('touchstart', () => {}, { passive: true });
    document.addEventListener('touchmove', () => {}, { passive: true });
  }, [isMobile]);

  useEffect(() => {
    optimizeForMobile();
  }, [optimizeForMobile]);
>>>>>>> origin/auto/autonomy-17186719616

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Set up event listeners
<<<<<<< HEAD
    window.addEventListener(', 'orientationchange', 'handleOrientationChange);
    window.addEventListener(', 'resize', 'handleResize);
=======
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleResize);
>>>>>>> origin/auto/autonomy-17186719616
    
    // Set up orientation change detection
    const mediaQuery = window.matchMedia('(orientation: portrait)');
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setCurrentOrientation(e.matches ? 'portrait' : 'landscape');
    };
    
<<<<<<< HEAD
    mediaQuery.addEventListener(', 'change', 'handleMediaQueryChange);
    
    return () => {
      window.removeEventListener(', 'orientationchange', 'handleOrientationChange);
      window.removeEventListener(', 'resize', 'handleResize);
      mediaQuery.removeEventListener(', 'change', 'handleMediaQueryChange);
    };
  }[handleOrientationChangehandleResize]);
=======
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [handleOrientationChange, handleResize]);
>>>>>>> origin/auto/autonomy-17186719616

  if (!showPanel || !isVisible) return null;

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'mobile': return <Smartphone className="w-5 h-5" />;
      case 'tablet': return <Tablet className="w-5 h-5" />;
      default: return <Monitor className="w-5 h-5" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default: return <CheckCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <>
      {children}
      
      {/* Mobile Optimization Panel */}
      <AnimatePresence>
        {showMobilePanel && (
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0x: 300 }}
            animate={{ opacity: 1x: 0 }}
            exit={{ opacity: 0x: 300 }}
=======
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
>>>>>>> origin/auto/autonomy-17186719616
            className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-md border-l border-cyan-500/30 z-40 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Mobile Optimizer</h2>
                <button
                  onClick={() => setShowMobilePanel(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Device Information */}
              <div className="mb-6 p-4 bg-cyan-500/20 border border-cyan-500/30 rounded-lg">
                <h3 className="text-sm font-medium text-cyan-400 mb-2">Device Info</h3>
                <div className="space-y-1 text-xs text-gray-300">
                  <div>Type: {isMobile ? (isTablet ? 'Tablet' : 'Mobile') : 'Desktop'}</div>
                  <div>Orientation: {orientation}</div>
<<<<<<< HEAD
                  <div>User Agent: {navigator.userAgent.substring(050)}...</div>
=======
                  <div>User Agent: {navigator.userAgent.substring(0, 50)}...</div>
>>>>>>> origin/auto/autonomy-17186719616
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <h3 className="text-sm font-medium text-green-400 mb-2">Performance</h3>
                <div className="space-y-1 text-xs text-gray-300">
                  <div>FPS: {performanceMetrics.fps}</div>
                  <div>Memory: {performanceMetrics.memoryUsage}MB</div>
                  <div>Battery: {performanceMetrics.batteryLevel}%</div>
                  <div>Network: {performanceMetrics.networkSpeed}</div>
                </div>
              </div>

              {/* Touch Support */}
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    {touchSupport ? <Hand className="w-4 h-4 text-white" /> : <Mouse className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Input Method</div>
                    <div className="text-gray-400 text-xs">
                      {touchSupport ? 'Touch Enabled' : 'Mouse/Keyboard'}
                    </div>
                  ))}
                </div>
              </div>

              {/* Optimization Controls */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-white">Optimizations</h3>
                
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-300">Touch Gestures</label>
                  <div className={`w-3 h-3 rounded-full ${enableTouchGestures ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-300">Mobile Layout</label>
                  <div className={`w-3 h-3 rounded-full ${enableMobileLayout ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-300">Performance Mode</label>
                  <div className={`w-3 h-3 rounded-full ${enablePerformanceMode ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-sm font-medium text-white mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <button
<<<<<<< HEAD
                    onClick={() => window.scrollTo({ top: 0behavior: 'smooth' })}
=======
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>>>>>>> origin/auto/autonomy-17186719616
                    className="w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded transition-colors"
                  >
                    Scroll to Top
                  </button>
                  <button
<<<<<<< HEAD
                    onClick={() => window.scrollTo({ top: document.body.scrollHeightbehavior: 'smooth' })}
=======
                    onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
>>>>>>> origin/auto/autonomy-17186719616
                    className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded transition-colors"
                  >
                    Scroll to Bottom
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setShowMobilePanel(!showMobilePanel)}
        className="fixed top-4 right-4 z-50 p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
        aria-label="Mobile optimization panel"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </button>

      {/* Global Mobile Styles */}
      <style jsx global>{`
        .mobile-optimized * {
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        .mobile-performance-mode * {
          animation-duration: 0.3s !important;
          transition-duration: 0.3s !important;
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .landscape-mode .mobile-panel {
          width: 300px;
        }

        @media (max-width: 768px) {
          .mobile-optimized button,
          .mobile-optimized a {
            min-height: 44px;
            min-width: 44px;
          }
          
          .mobile-optimized input,
          .mobile-optimized select,
          .mobile-optimized textarea {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default MobileOptimizer;