import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Hand, 
  MousePointer, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Settings, 
  X, 
  CheckCircle, 
  AlertTriangle, 
  Info,
  Wifi,
  Battery,
  Signal,
  Eye,
  EyeOff
} from 'lucide-react';

interface MobileOptimization {
  id: string;
  type: 'performance' | 'usability' | 'accessibility';
  title: string;
  description: string;
  applied: boolean;
  impact: 'high' | 'medium' | 'low';
}

interface MobileResponsivenessEnhancerProps {
  enabled?: boolean;
  showMobileIndicator?: boolean;
  enableTouchGestures?: boolean;
  enableMobileOptimizations?: boolean;
  autoOptimize?: boolean;
  performanceMode?: boolean;
}

export const MobileResponsivenessEnhancer: React.FC<MobileResponsivenessEnhancerProps> = ({
  enabled = true,
  showMobileIndicator = false,
  enableTouchGestures = true,
  enableMobileOptimizations = true,
  autoOptimize = true,
  performanceMode = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [touchCapable, setTouchCapable] = useState(false);
  const [optimizations, setOptimizations] = useState<MobileOptimization[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [mobileMetrics, setMobileMetrics] = useState({
    viewportWidth: 0,
    devicePixelRatio: 1,
    orientation: 'portrait' as 'portrait' | 'landscape',
    touchPoints: 0,
    batteryLevel: 0,
    connectionType: 'unknown'
  });
  const [gestureHistory, setGestureHistory] = useState<Array<{ type: string; timestamp: number }>>([]);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const lastTapRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // Detect device type and capabilities
  const detectDevice = useCallback(() => {
    const userAgent = navigator.userAgent;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Device type detection
    let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      type = width <= 768 ? 'mobile' : 'tablet';
    }

    // Touch capability
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Screen size
    setScreenSize({ width, height });
    setDeviceType(type);
    setTouchCapable(touch);

    // Mobile metrics
    setMobileMetrics(prev => ({
      ...prev,
      viewportWidth: width,
      devicePixelRatio: window.devicePixelRatio || 1,
      orientation: width > height ? 'landscape' : 'portrait',
      touchPoints: navigator.maxTouchPoints || 0
    }));

    // Battery information
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        setMobileMetrics(prev => ({
          ...prev,
          batteryLevel: battery.level * 100
        }));
      });
    }

    // Connection information
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      setMobileMetrics(prev => ({
        ...prev,
        connectionType: connection.effectiveType || 'unknown'
      }));
    }
  }, []);

  // Mobile optimizations
  const applyMobileOptimizations = useCallback(async () => {
    if (!enableMobileOptimizations) return;

    setIsOptimizing(true);
    const newOptimizations: MobileOptimization[] = [];

    try {
      // Performance optimizations
      if (deviceType === 'mobile' || deviceType === 'tablet') {
        // Reduce animations for mobile
        if (performanceMode) {
          document.documentElement.style.setProperty('--animation-duration', '0.1s');
          document.documentElement.style.setProperty('--transition-duration', '0.1s');
          newOptimizations.push({
            id: 'reduce-animations',
            type: 'performance',
            title: 'Reduced Animations',
            description: 'Optimized animations for mobile performance',
            applied: true,
            impact: 'high'
          });
        }

        // Optimize images for mobile
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          if (!img.loading) {
            img.loading = 'lazy';
          }
          if (!img.decoding) {
            img.decoding = 'async';
          }
        });
        newOptimizations.push({
          id: 'image-optimization',
          type: 'performance',
          title: 'Image Optimization',
          description: 'Added lazy loading and async decoding to images',
          applied: true,
          impact: 'medium'
        });

        // Add mobile-specific CSS classes
        document.documentElement.classList.add(`device-${deviceType}`);
        document.documentElement.classList.add(`orientation-${mobileMetrics.orientation}`);
        newOptimizations.push({
          id: 'mobile-css-classes',
          type: 'usability',
          title: 'Mobile CSS Classes',
          description: 'Added device-specific CSS classes for responsive design',
          applied: true,
          impact: 'medium'
        });

        // Optimize touch targets
        const touchElements = document.querySelectorAll('button, a, input, select, textarea');
        touchElements.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.width < 44 || rect.height < 44) {
            element.classList.add('touch-target-optimized');
            (element as HTMLElement).style.minHeight = '44px';
            (element as HTMLElement).style.minWidth = '44px';
          }
        });
        newOptimizations.push({
          id: 'touch-targets',
          type: 'usability',
          title: 'Touch Target Optimization',
          description: 'Ensured minimum 44px touch targets for mobile usability',
          applied: true,
          impact: 'high'
        });

        // Add mobile viewport meta tag if missing
        let viewportMeta = document.querySelector('meta[name="viewport"]');
        if (!viewportMeta) {
          viewportMeta = document.createElement('meta');
          viewportMeta.setAttribute('name', 'viewport');
          viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes');
          document.head.appendChild(viewportMeta);
          newOptimizations.push({
            id: 'viewport-meta',
            type: 'usability',
            title: 'Viewport Meta Tag',
            description: 'Added responsive viewport meta tag',
            applied: true,
            impact: 'high'
          });
        }

        // Optimize fonts for mobile
        const style = document.createElement('style');
        style.textContent = `
          @media (max-width: 768px) {
            body { font-size: 16px; }
            h1 { font-size: 1.75rem; }
            h2 { font-size: 1.5rem; }
            h3 { font-size: 1.25rem; }
            p { line-height: 1.6; }
          }
        `;
        document.head.appendChild(style);
        newOptimizations.push({
          id: 'mobile-typography',
          type: 'usability',
          title: 'Mobile Typography',
          description: 'Optimized font sizes and line heights for mobile reading',
          applied: true,
          impact: 'medium'
        });

        // Add mobile-specific navigation
        const nav = document.querySelector('nav');
        if (nav && !nav.querySelector('.mobile-nav-toggle')) {
          const mobileToggle = document.createElement('button');
          mobileToggle.className = 'mobile-nav-toggle lg:hidden';
          mobileToggle.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
          mobileToggle.setAttribute('aria-label', 'Toggle mobile navigation');
          nav.insertBefore(mobileToggle, nav.firstChild);
          newOptimizations.push({
            id: 'mobile-navigation',
            type: 'usability',
            title: 'Mobile Navigation',
            description: 'Added mobile navigation toggle button',
            applied: true,
            impact: 'high'
          });
        }
      }

      // Accessibility optimizations for mobile
      if (touchCapable) {
        // Add touch feedback
        const touchElements = document.querySelectorAll('button, a, input, select, textarea');
        touchElements.forEach(element => {
          element.classList.add('touch-feedback');
        });
        newOptimizations.push({
          id: 'touch-feedback',
          type: 'accessibility',
          title: 'Touch Feedback',
          description: 'Added visual feedback for touch interactions',
          applied: true,
          impact: 'medium'
        });

        // Optimize focus for touch
        document.documentElement.classList.add('touch-optimized');
        newOptimizations.push({
          id: 'touch-focus',
          type: 'accessibility',
          title: 'Touch Focus Optimization',
          description: 'Optimized focus behavior for touch devices',
          applied: true,
          impact: 'medium'
        });
      }

    } catch (error) {
      console.error('Mobile optimization failed:', error);
    }

    setOptimizations(newOptimizations);
    setIsOptimizing(false);
  }, [enableMobileOptimizations, deviceType, performanceMode, touchCapable, mobileMetrics.orientation]);

  // Touch gesture handling
  const setupTouchGestures = useCallback(() => {
    if (!enableTouchGestures || !touchCapable) return;

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      };
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (!touchStartRef.current) return;

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;
      const deltaTime = Date.now() - touchStartRef.current.time;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Swipe detection
      if (distance > 50 && deltaTime < 300) {
        let gesture = '';
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          gesture = deltaX > 0 ? 'swipe-right' : 'swipe-left';
        } else {
          gesture = deltaY > 0 ? 'swipe-down' : 'swipe-up';
        }

        setGestureHistory(prev => [...prev, { type: gesture, timestamp: Date.now() }]);

        // Handle swipe gestures
        switch (gesture) {
          case 'swipe-left':
            // Navigate forward
            if (window.history.length > 1) {
              window.history.forward();
            }
            break;
          case 'swipe-right':
            // Navigate back
            if (window.history.length > 1) {
              window.history.back();
            }
            break;
          case 'swipe-up':
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
          case 'swipe-down':
            // Refresh page
            window.location.reload();
            break;
        }
      }

      // Double tap detection
      if (lastTapRef.current) {
        const timeDiff = Date.now() - lastTapRef.current.time;
        const distanceDiff = Math.abs(touch.clientX - lastTapRef.current.x) + Math.abs(touch.clientY - lastTapRef.current.y);
        
        if (timeDiff < 300 && distanceDiff < 50) {
          // Double tap - zoom in/out
          const currentZoom = window.visualViewport?.scale || 1;
          if (currentZoom > 1) {
            window.visualViewport?.scale(1);
          } else {
            window.visualViewport?.scale(1.5);
          }
          
          setGestureHistory(prev => [...prev, { type: 'double-tap', timestamp: Date.now() }]);
        }
      }

      lastTapRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      };

      touchStartRef.current = null;
    };

    // Pinch to zoom
    let initialDistance = 0;
    let initialScale = 1;

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 2) {
        event.preventDefault();
        
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];
        const distance = Math.sqrt(
          Math.pow(touch2.clientX - touch1.clientX, 2) +
          Math.pow(touch2.clientY - touch1.clientY, 2)
        );

        if (initialDistance === 0) {
          initialDistance = distance;
          initialScale = window.visualViewport?.scale || 1;
        } else {
          const scale = initialScale * (distance / initialDistance);
          window.visualViewport?.scale(Math.max(0.5, Math.min(3, scale)));
        }
      }
    };

    const handleTouchEndMulti = () => {
      initialDistance = 0;
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEndMulti, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEndMulti);
    };
  }, [enableTouchGestures, touchCapable]);

  // Initialize mobile enhancements
  useEffect(() => {
    if (!enabled) return;

    detectDevice();
    applyMobileOptimizations();

    const handleResize = () => {
      detectDevice();
    };

    const handleOrientationChange = () => {
      setTimeout(detectDevice, 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [enabled, detectDevice, applyMobileOptimizations]);

  // Touch gestures setup
  useEffect(() => {
    if (!enabled) return;
    return setupTouchGestures();
  }, [enabled, setupTouchGestures]);

  // Auto-optimize effect
  useEffect(() => {
    if (autoOptimize && deviceType !== 'desktop') {
      const timer = setTimeout(applyMobileOptimizations, 1000);
      return () => clearTimeout(timer);
    }
  }, [autoOptimize, deviceType, applyMobileOptimizations]);

  if (!enabled) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 left-4 z-50 max-w-sm w-full bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-blue-500" />
                  Mobile Optimizer
                </h3>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  aria-label="Close mobile optimizer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Device Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  {deviceType === 'mobile' && <Smartphone className="w-5 h-5 text-blue-500" />}
                  {deviceType === 'tablet' && <Tablet className="w-5 h-5 text-green-500" />}
                  {deviceType === 'desktop' && <Monitor className="w-5 h-5 text-gray-500" />}
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                      {deviceType} Device
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {screenSize.width} × {screenSize.height}px
                    </div>
                  </div>
                </div>

                {/* Mobile Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {mobileMetrics.devicePixelRatio}x
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Pixel Ratio</div>
                  </div>

                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white capitalize">
                      {mobileMetrics.orientation}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Orientation</div>
                  </div>

                  {touchCapable && (
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {mobileMetrics.touchPoints}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Touch Points</div>
                    </div>
                  )}

                  {mobileMetrics.batteryLevel > 0 && (
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {Math.round(mobileMetrics.batteryLevel)}%
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Battery</div>
                    </div>
                  )}
                </div>

                {/* Touch Capabilities */}
                {touchCapable && (
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                      <Hand className="w-4 h-4" />
                      <span className="text-sm font-medium">Touch Enabled</span>
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-300 mt-1">
                      Gestures: Swipe, Pinch, Double-tap
                    </div>
                  </div>
                )}

                {/* Optimizations Applied */}
                {optimizations.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Optimizations Applied</h4>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {optimizations.map((opt) => (
                        <div key={opt.id} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700 rounded">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <div className="flex-1">
                            <div className="text-xs font-medium text-gray-900 dark:text-white">{opt.title}</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">{opt.description}</div>
                          </div>
                          <div className={`text-xs px-2 py-1 rounded ${
                            opt.impact === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200' :
                            opt.impact === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200' :
                            'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200'
                          }`}>
                            {opt.impact}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Gesture History */}
                {gestureHistory.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <MousePointer className="w-4 h-4" />
                      Recent Gestures
                    </h4>
                    <div className="space-y-1 max-h-24 overflow-y-auto">
                      {gestureHistory.slice(-5).map((gesture, index) => (
                        <div key={index} className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-2 rounded">
                          {gesture.type} - {new Date(gesture.timestamp).toLocaleTimeString()}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={applyMobileOptimizations}
                    disabled={isOptimizing}
                    className="flex-1 px-3 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    aria-label="Apply mobile optimizations"
                  >
                    {isOptimizing ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Settings className="w-4 h-4" />
                    )}
                    {isOptimizing ? 'Optimizing...' : 'Optimize'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Indicator */}
      {showMobileIndicator && deviceType !== 'desktop' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed top-4 left-4 z-40 px-3 py-1 bg-blue-500 text-white text-xs rounded-full shadow-lg flex items-center gap-2"
        >
          {deviceType === 'mobile' && <Smartphone className="w-3 h-3" />}
          {deviceType === 'tablet' && <Tablet className="w-3 h-3" />}
          {deviceType.toUpperCase()}
        </motion.div>
      )}

      {/* Floating Mobile Button */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 left-4 z-40 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          title="Mobile Optimizer"
        >
          <Smartphone className="w-6 h-6" />
        </motion.button>
      )}
    </>
  );
};