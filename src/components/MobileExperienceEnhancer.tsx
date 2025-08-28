import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  MousePointer, 
  Hand, 
  ArrowUpDown, 
  ZoomIn, 
  RotateCw,
  X,
  Settings,
  CheckCircle,
  AlertTriangle,
  Info,
  Wifi,
  Battery,
  Signal
} from 'lucide-react';

interface MobileSettings {
  touchOptimization: boolean;
  gestureSupport: boolean;
  hapticFeedback: boolean;
  mobileNavigation: boolean;
  responsiveImages: boolean;
  touchTargets: boolean;
  mobilePerformance: boolean;
}

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  className?: string;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [settings, setSettings] = useState<MobileSettings>({
    touchOptimization: true,
    gestureSupport: true,
    hapticFeedback: false,
    mobileNavigation: true,
    responsiveImages: true,
    touchTargets: true,
    mobilePerformance: true
  });

  const [touchEvents, setTouchEvents] = useState<Array<{ type: string; timestamp: number }>>([]);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    fps: 0,
    memory: 0,
    battery: 0,
    network: 'unknown'
  });

  // Detect device type and orientation
  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isTablet = /iPad|Android(?=.*\bMobile)/i.test(userAgent);
      
      if (isMobile && isTablet) {
        setDeviceType('tablet');
      } else if (isMobile) {
        setDeviceType('mobile');
      } else {
        setDeviceType('desktop');
      }
    };

    const detectOrientation = () => {
      if (window.innerHeight > window.innerWidth) {
        setOrientation('portrait');
      } else {
        setOrientation('landscape');
      }
    };

    detectDevice();
    detectOrientation();

    window.addEventListener('resize', detectOrientation);
    window.addEventListener('orientationchange', detectOrientation);

    return () => {
      window.removeEventListener('resize', detectOrientation);
      window.removeEventListener('orientationchange', detectOrientation);
    };
  }, []);

  // Touch event handling
  useEffect(() => {
    if (!settings.touchOptimization) return;

    const handleTouchStart = (event: TouchEvent) => {
      setTouchEvents(prev => [...prev, { type: 'touchstart', timestamp: Date.now() }].slice(-10));
      
      // Add touch feedback
      if (settings.hapticFeedback && 'vibrate' in navigator) {
        navigator.vibrate(10);
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      setTouchEvents(prev => [...prev, { type: 'touchmove', timestamp: Date.now() }].slice(-10));
    };

    const handleTouchEnd = (event: TouchEvent) => {
      setTouchEvents(prev => [...prev, { type: 'touchend', timestamp: Date.now() }].slice(-10));
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [settings.touchOptimization, settings.hapticFeedback]);

  // Gesture support
  useEffect(() => {
    if (!settings.gestureSupport) return;

    let startX = 0;
    let startY = 0;
    let startDistance = 0;
    let startAngle = 0;

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
      } else if (event.touches.length === 2) {
        startDistance = Math.hypot(
          event.touches[0].clientX - event.touches[1].clientX,
          event.touches[0].clientY - event.touches[1].clientY
        );
        startAngle = Math.atan2(
          event.touches[1].clientY - event.touches[0].clientY,
          event.touches[1].clientX - event.touches[0].clientX
        );
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        const deltaX = event.touches[0].clientX - startX;
        const deltaY = event.touches[0].clientY - startY;
        
        // Swipe detection
        if (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50) {
          const direction = Math.abs(deltaX) > Math.abs(deltaY) 
            ? (deltaX > 0 ? 'right' : 'left')
            : (deltaY > 0 ? 'down' : 'up');
          
          // Handle swipe gestures
          handleSwipe(direction, event);
        }
      } else if (event.touches.length === 2) {
        const currentDistance = Math.hypot(
          event.touches[0].clientX - event.touches[1].clientX,
          event.touches[0].clientY - event.touches[1].clientY
        );
        const currentAngle = Math.atan2(
          event.touches[1].clientY - event.touches[0].clientY,
          event.touches[1].clientX - event.touches[0].clientX
        );
        
        const scale = currentDistance / startDistance;
        const rotation = currentAngle - startAngle;
        
        // Handle pinch and rotate gestures
        handlePinchRotate(scale, rotation, event);
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [settings.gestureSupport]);

  // Performance monitoring
  useEffect(() => {
    if (!settings.mobilePerformance) return;

    let frameCount = 0;
    let lastTime = performance.now();

    const measurePerformance = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setPerformanceMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }

      // Memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setPerformanceMetrics(prev => ({ 
          ...prev, 
          memory: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
        }));
      }

      // Battery status
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          setPerformanceMetrics(prev => ({ 
            ...prev, 
            battery: Math.round(battery.level * 100) 
          }));
        });
      }

      // Network status
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setPerformanceMetrics(prev => ({ 
          ...prev, 
          network: connection.effectiveType || 'unknown' 
        }));
      }

      requestAnimationFrame(measurePerformance);
    };

    requestAnimationFrame(measurePerformance);
  }, [settings.mobilePerformance]);

  // Touch target optimization
  useEffect(() => {
    if (!settings.touchTargets) return;

    const optimizeTouchTargets = () => {
      const touchTargets = document.querySelectorAll('button, a, input, select, textarea, [role="button"], [role="link"]');
      
      touchTargets.forEach((target) => {
        const element = target as HTMLElement;
        const rect = element.getBoundingClientRect();
        
        // Ensure minimum touch target size (44x44px for iOS, 48x48px for Android)
        const minSize = deviceType === 'mobile' ? 48 : 44;
        
        if (rect.width < minSize || rect.height < minSize) {
          element.style.minWidth = `${minSize}px`;
          element.style.minHeight = `${minSize}px`;
          element.style.padding = '12px';
        }
      });
    };

    optimizeTouchTargets();
    
    // Re-optimize on resize
    const resizeObserver = new ResizeObserver(optimizeTouchTargets);
    resizeObserver.observe(document.body);
    
    return () => resizeObserver.disconnect();
  }, [settings.touchTargets, deviceType]);

  // Responsive images
  useEffect(() => {
    if (!settings.responsiveImages) return;

    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      
      images.forEach((img) => {
        const element = img as HTMLImageElement;
        
        // Add loading="lazy" for better performance
        if (!element.loading) {
          element.loading = 'lazy';
        }
        
        // Add srcset for responsive images
        if (!element.srcset && element.src) {
          const src = element.src;
          const baseName = src.substring(0, src.lastIndexOf('.'));
          const extension = src.substring(src.lastIndexOf('.'));
          
          element.srcset = `
            ${baseName}-320w${extension} 320w,
            ${baseName}-480w${extension} 480w,
            ${baseName}-768w${extension} 768w,
            ${baseName}-1024w${extension} 1024w,
            ${baseName}-1440w${extension} 1440w
          `.trim();
          
          element.sizes = `
            (max-width: 320px) 320px,
            (max-width: 480px) 480px,
            (max-width: 768px) 768px,
            (max-width: 1024px) 1024px,
            (max-width: 1440px) 1440px,
            100vw
          `.trim();
        }
      });
    };

    optimizeImages();
    
    // Re-optimize when new images are added
    const observer = new MutationObserver(optimizeImages);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, [settings.responsiveImages]);

  const handleSwipe = (direction: string, event: TouchEvent) => {
    // Custom swipe handling logic
    console.log(`Swipe ${direction} detected`);
    
    // Example: Navigate between pages on swipe
    if (direction === 'left' && window.location.pathname !== '/') {
      window.history.forward();
    } else if (direction === 'right' && window.location.pathname !== '/') {
      window.history.back();
    }
  };

  const handlePinchRotate = (scale: number, rotation: number, event: TouchEvent) => {
    // Custom pinch and rotate handling logic
    console.log(`Pinch scale: ${scale.toFixed(2)}, rotation: ${(rotation * 180 / Math.PI).toFixed(1)}°`);
  };

  const toggleSetting = useCallback((key: keyof MobileSettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    localStorage.setItem('zion-mobile-settings', JSON.stringify(settings));
  }, [settings]);

  if (!enabled || deviceType === 'desktop') return null;

  return (
    <>
      {/* Mobile Experience Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsVisible(!isVisible)}
        className={`fixed bottom-4 left-20 z-50 p-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 ${className}`}
        aria-label="Mobile experience settings"
        aria-expanded={isVisible}
      >
        <Smartphone className="w-6 h-6" />
      </motion.button>

      {/* Mobile Experience Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed bottom-20 left-4 z-50 w-80 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">Mobile Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                  aria-label={isExpanded ? 'Collapse settings' : 'Expand settings'}
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close mobile experience panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Device Info */}
            <div className="p-4 bg-slate-800/50">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  {deviceType === 'mobile' && <Smartphone className="w-4 h-4 text-purple-400" />}
                  {deviceType === 'tablet' && <Tablet className="w-4 h-4 text-blue-400" />}
                  <span className="text-slate-400 capitalize">{deviceType}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-400 capitalize">{orientation}</span>
                </div>
              </div>
            </div>

            {/* Quick Toggles */}
            <div className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => toggleSetting('touchOptimization')}
                  className={`p-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                    settings.touchOptimization 
                      ? 'bg-purple-500/20 border-purple-400 text-purple-400' 
                      : 'bg-slate-800/50 border-slate-600 text-slate-300 hover:border-slate-500'
                  }`}
                  aria-pressed={settings.touchOptimization}
                >
                  <MousePointer className="w-5 h-5 mx-auto mb-2" />
                  <span className="text-xs font-medium">Touch Opt</span>
                </button>

                <button
                  onClick={() => toggleSetting('gestureSupport')}
                  className={`p-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                    settings.gestureSupport 
                      ? 'bg-purple-500/20 border-purple-400 text-purple-400' 
                      : 'bg-slate-800/50 border-slate-600 text-slate-300 hover:border-slate-500'
                  }`}
                  aria-pressed={settings.gestureSupport}
                >
                  <Hand className="w-5 h-5 mx-auto mb-2" />
                  <span className="text-xs font-medium">Gestures</span>
                </button>

                <button
                  onClick={() => toggleSetting('touchTargets')}
                  className={`p-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                    settings.touchTargets 
                      ? 'bg-purple-500/20 border-purple-400 text-purple-400' 
                      : 'bg-slate-800/50 border-slate-600 text-slate-300 hover:border-slate-500'
                  }`}
                  aria-pressed={settings.touchTargets}
                >
                  <MousePointer className="w-5 h-5 mx-auto mb-2" />
                  <span className="text-xs font-medium">Touch Targets</span>
                </button>

                <button
                  onClick={() => toggleSetting('responsiveImages')}
                  className={`p-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                    settings.responsiveImages 
                      ? 'bg-purple-500/20 border-purple-400 text-purple-400' 
                      : 'bg-slate-800/50 border-slate-600 text-slate-300 hover:border-slate-500'
                  }`}
                  aria-pressed={settings.responsiveImages}
                >
                  <Monitor className="w-5 h-5 mx-auto mb-2" />
                  <span className="text-xs font-medium">Responsive</span>
                </button>
              </div>
            </div>

            {/* Expanded Settings */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-slate-700/50"
                >
                  <div className="p-4 space-y-4">
                    {/* Haptic Feedback */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <MousePointer className="w-5 h-5 text-slate-400" />
                        <div>
                          <div className="text-white font-medium">Haptic Feedback</div>
                          <div className="text-slate-400 text-sm">Touch vibrations</div>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleSetting('hapticFeedback')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                          settings.hapticFeedback ? 'bg-purple-500' : 'bg-slate-600'
                        }`}
                        role="switch"
                        aria-checked={settings.hapticFeedback}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.hapticFeedback ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Smartphone className="w-5 h-5 text-slate-400" />
                        <div>
                          <div className="text-white font-medium">Mobile Navigation</div>
                          <div className="text-slate-400 text-sm">Touch-friendly nav</div>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleSetting('mobileNavigation')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                          settings.mobileNavigation ? 'bg-purple-500' : 'bg-slate-600'
                        }`}
                        role="switch"
                        aria-checked={settings.mobileNavigation}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.mobileNavigation ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Mobile Performance */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-slate-400" />
                        <div>
                          <div className="text-white font-medium">Performance Monitor</div>
                          <div className="text-slate-400 text-sm">FPS & memory tracking</div>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleSetting('mobilePerformance')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                          settings.mobilePerformance ? 'bg-purple-500' : 'bg-slate-600'
                        }`}
                        role="switch"
                        aria-checked={settings.mobilePerformance}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.mobilePerformance ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Performance Metrics */}
            {settings.mobilePerformance && (
              <div className="p-4 bg-slate-800/50 border-t border-slate-700/50">
                <div className="grid grid-cols-2 gap-4 text-center text-sm">
                  <div>
                    <div className="text-2xl font-bold text-purple-400">
                      {performanceMetrics.fps || '--'}
                    </div>
                    <div className="text-xs text-slate-400">FPS</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">
                      {performanceMetrics.memory || '--'}
                    </div>
                    <div className="text-xs text-slate-400">MB</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">
                      {performanceMetrics.battery || '--'}
                    </div>
                    <div className="text-xs text-slate-400">%</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">
                      {performanceMetrics.network}
                    </div>
                    <div className="text-xs text-slate-400">Network</div>
                  </div>
                </div>
              </div>
            )}

            {/* Touch Events Log */}
            {touchEvents.length > 0 && (
              <div className="p-4 bg-slate-800/50 border-t border-slate-700/50">
                <div className="text-sm text-slate-400 mb-2">Recent Touch Events</div>
                <div className="space-y-1">
                  {touchEvents.slice(-5).map((event, index) => (
                    <div key={index} className="text-xs text-slate-500">
                      {event.type} - {new Date(event.timestamp).toLocaleTimeString()}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};