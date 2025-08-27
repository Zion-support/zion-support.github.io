import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Wifi, 
  WifiOff, 
  Battery, 
  BatteryCharging, 
  Settings, 
  ArrowRight, 
  ArrowLeft, 
  ArrowDown, 
  Touchpad,
  Zap,
  Globe,
  Download,
  Upload,
  RotateCcw,
  SmartphoneCharging,
  SmartphoneNfc,
  WifiOff as WifiOffIcon
} from 'lucide-react';

interface MobileSettings {
  enableTouchGestures: boolean;
  enableSwipeNavigation: boolean;
  enablePinchZoom: boolean;
  enableHapticFeedback: boolean;
  enableMobileOptimizations: boolean;
  enableProgressiveWebApp: boolean;
  enableOfflineMode: boolean;
  enableMobileAnalytics: boolean;
}

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  onSettingsChange?: (settings: MobileSettings) => void;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  showControls = true,
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<MobileSettings>({
    enableTouchGestures: true,
    enableSwipeNavigation: true,
    enablePinchZoom: true,
    enableHapticFeedback: true,
    enableMobileOptimizations: true,
    enableProgressiveWebApp: true,
    enableOfflineMode: true,
    enableMobileAnalytics: true
  });

  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [touchCapabilities, setTouchCapabilities] = useState({
    hasTouch: false,
    hasPointer: false,
    maxTouchPoints: 0
  });
  const [networkStatus, setNetworkStatus] = useState({
    online: true,
    effectiveType: '4g',
    downlink: 10,
    rtt: 50
  });

  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const gestureRef = useRef<{ scale: number; rotation: number }>({ scale: 1, rotation: 0 });
  const swipeThreshold = 50;
  const longPressThreshold = 500;

  // Detect device type and capabilities
  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Detect device type
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        if (screenWidth >= 768 && screenWidth <= 1024) {
          setDeviceType('tablet');
        } else {
          setDeviceType('mobile');
        }
      } else {
        setDeviceType('desktop');
      }

      // Detect orientation
      setOrientation(screenWidth > screenHeight ? 'landscape' : 'portrait');

      // Detect touch capabilities
      setTouchCapabilities({
        hasTouch: 'ontouchstart' in window,
        hasPointer: 'onpointerdown' in window,
        maxTouchPoints: navigator.maxTouchPoints || 0
      });
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    window.addEventListener('orientationchange', detectDevice);

    return () => {
      window.removeEventListener('resize', detectDevice);
      window.removeEventListener('orientationchange', detectDevice);
    };
  }, []);

  // Monitor network status
  useEffect(() => {
    const updateNetworkStatus = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setNetworkStatus({
          online: navigator.onLine,
          effectiveType: connection.effectiveType || 'unknown',
          downlink: connection.downlink || 0,
          rtt: connection.rtt || 0
        });
      } else {
        setNetworkStatus({
          online: navigator.onLine,
          effectiveType: 'unknown',
          downlink: 0,
          rtt: 0
        });
      }
    };

    updateNetworkStatus();
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
    };
  }, []);

  // Enhanced touch gesture handling
  const handleTouchStart = useCallback((event: TouchEvent) => {
    if (!settings.enableTouchGestures) return;

    const touch = event.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };

    // Reset gesture state
    gestureRef.current = { scale: 1, rotation: 0 };
  }, [settings.enableTouchGestures]);

  const handleTouchMove = useCallback((event: TouchEvent) => {
    if (!settings.enableTouchGestures || !touchStartRef.current) return;

    event.preventDefault();

    if (event.touches.length === 2 && settings.enablePinchZoom) {
      // Handle pinch zoom
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      
      const currentDistance = Math.hypot(
        touch1.clientX - touch2.clientX,
        touch1.clientY - touch2.clientY
      );
      
      const initialDistance = Math.hypot(
        touchStartRef.current.x - touch2.clientX,
        touchStartRef.current.y - touch2.clientY
      );
      
      if (initialDistance > 0) {
        const scale = currentDistance / initialDistance;
        gestureRef.current.scale = Math.max(0.5, Math.min(3, scale));
        
        // Apply zoom to viewport
        document.body.style.transform = `scale(${gestureRef.current.scale})`;
        document.body.style.transformOrigin = 'center center';
      }
    }
  }, [settings.enableTouchGestures, settings.enablePinchZoom]);

  const handleTouchEnd = useCallback((event: TouchEvent) => {
    if (!settings.enableTouchGestures || !touchStartRef.current) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const deltaTime = Date.now() - touchStartRef.current.time;
    const distance = Math.hypot(deltaX, deltaY);

    // Detect swipe gestures
    if (distance > swipeThreshold && deltaTime < 300) {
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (deltaX > 0 && settings.enableSwipeNavigation) {
          // Swipe right - go back
          if (window.history.length > 1) {
            window.history.back();
            if (settings.enableHapticFeedback) {
              navigator.vibrate?.(50);
            }
          }
        } else if (deltaX < 0 && settings.enableSwipeNavigation) {
          // Swipe left - go forward
          if (window.history.length > 1) {
            window.history.forward();
            if (settings.enableHapticFeedback) {
              navigator.vibrate?.(50);
            }
          }
        }
      } else {
        // Vertical swipe
        if (deltaY > 0) {
          // Swipe down - refresh
          window.location.reload();
          if (settings.enableHapticFeedback) {
            navigator.vibrate?.(100);
          }
        }
      }
    }

    // Detect long press
    if (distance < 10 && deltaTime > longPressThreshold) {
      // Long press - show context menu
      if (settings.enableHapticFeedback) {
        navigator.vibrate?.(200);
      }
    }

    // Reset touch state
    touchStartRef.current = null;
    
    // Reset zoom
    if (gestureRef.current.scale !== 1) {
      document.body.style.transform = '';
      document.body.style.transformOrigin = '';
      gestureRef.current.scale = 1;
    }
  }, [settings.enableTouchGestures, settings.enableSwipeNavigation, settings.enableHapticFeedback]);

  // Apply mobile optimizations
  const applyMobileOptimizations = useCallback(() => {
    if (!settings.enableMobileOptimizations) return;

    const root = document.documentElement;
    const body = document.body;

    // Add mobile-specific classes
    root.classList.add(`device-${deviceType}`);
    root.classList.add(`orientation-${orientation}`);

    // Optimize viewport for mobile
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 
        'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover'
      );
    }

    // Add mobile-specific styles
    if (deviceType === 'mobile') {
      body.style.setProperty('--mobile-padding', '16px');
      body.style.setProperty('--mobile-font-size', '16px');
      body.style.setProperty('--mobile-line-height', '1.5');
    } else if (deviceType === 'tablet') {
      body.style.setProperty('--mobile-padding', '24px');
      body.style.setProperty('--mobile-font-size', '18px');
      body.style.setProperty('--mobile-line-height', '1.6');
    }

    // Enable touch-action CSS property
    body.style.setProperty('touch-action', 'manipulation');
  }, [settings.enableMobileOptimizations, deviceType, orientation]);

  // Progressive Web App features
  const enablePWAFeatures = useCallback(() => {
    if (!settings.enableProgressiveWebApp) return;

    // Add PWA manifest
    if (!document.querySelector('link[rel="manifest"]')) {
      const manifestLink = document.createElement('link');
      manifestLink.rel = 'manifest';
      manifestLink.href = '/manifest.json';
      document.head.appendChild(manifestLink);
    }

    // Add theme color
    if (!document.querySelector('meta[name="theme-color"]')) {
      const themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      themeColor.content = '#06b6d4';
      document.head.appendChild(themeColor);
    }

    // Add apple-touch-icon
    if (!document.querySelector('link[rel="apple-touch-icon"]')) {
      const appleIcon = document.createElement('link');
      appleIcon.rel = 'apple-touch-icon';
      appleIcon.href = '/apple-touch-icon.png';
      document.head.appendChild(appleIcon);
    }

    // Add mobile web app capable meta
    if (!document.querySelector('meta[name="mobile-web-app-capable"]')) {
      const mobileWebApp = document.createElement('meta');
      mobileWebApp.name = 'mobile-web-app-capable';
      mobileWebApp.content = 'yes';
      document.head.appendChild(mobileWebApp);
    }
  }, [settings.enableProgressiveWebApp]);

  // Offline mode support
  const enableOfflineMode = useCallback(() => {
    if (!settings.enableOfflineMode) return;

    // Add offline indicator
    const offlineIndicator = document.createElement('div');
    offlineIndicator.id = 'offline-indicator';
    offlineIndicator.className = 'offline-indicator';
    offlineIndicator.innerHTML = `
      <div class="offline-content">
        <Wifi size={20} />
        <span>You're offline. Some features may be limited.</span>
      </div>
    `;
    document.body.appendChild(offlineIndicator);

    // Show/hide based on network status
    const updateOfflineIndicator = () => {
      const indicator = document.getElementById('offline-indicator');
      if (indicator) {
        indicator.style.display = navigator.onLine ? 'none' : 'flex';
      }
    };

    updateOfflineIndicator();
    window.addEventListener('online', updateOfflineIndicator);
    window.addEventListener('offline', updateOfflineIndicator);

    return () => {
      window.removeEventListener('online', updateOfflineIndicator);
      window.removeEventListener('offline', updateOfflineIndicator);
      document.getElementById('offline-indicator')?.remove();
    };
  }, [settings.enableOfflineMode]);

  // Mobile analytics
  const enableMobileAnalytics = useCallback(() => {
    if (!settings.enableMobileAnalytics) return;

    // Track mobile-specific metrics
    const trackMobileMetrics = () => {
      const metrics = {
        deviceType,
        orientation,
        touchCapabilities,
        networkStatus,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
          pixelRatio: window.devicePixelRatio
        },
        timestamp: Date.now()
      };

      // Send to analytics (replace with your analytics service)
      console.log('Mobile Metrics:', metrics);
      
      // Store in localStorage for debugging
      localStorage.setItem('mobile-metrics', JSON.stringify(metrics));
    };

    trackMobileMetrics();
    window.addEventListener('resize', trackMobileMetrics);
    window.addEventListener('orientationchange', trackMobileMetrics);

    return () => {
      window.removeEventListener('resize', trackMobileMetrics);
      window.removeEventListener('orientationchange', trackMobileMetrics);
    };
  }, [settings.enableMobileAnalytics, deviceType, orientation, touchCapabilities, networkStatus]);

  // Apply all mobile enhancements
  useEffect(() => {
    if (!enabled) return;

    applyMobileOptimizations();
    enablePWAFeatures();
    const offlineCleanup = enableOfflineMode();
    const analyticsCleanup = enableMobileAnalytics();

    // Add touch event listeners
    if (touchCapabilities.hasTouch) {
      document.addEventListener('touchstart', handleTouchStart, { passive: false });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd, { passive: false });
    }

    return () => {
      if (touchCapabilities.hasTouch) {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      }
      offlineCleanup?.();
      analyticsCleanup?.();
    };
  }, [
    enabled,
    applyMobileOptimizations,
    enablePWAFeatures,
    enableOfflineMode,
    enableMobileAnalytics,
    touchCapabilities.hasTouch,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  ]);

  // Update settings
  const updateSetting = useCallback((key: keyof MobileSettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    onSettingsChange?.(newSettings);
    localStorage.setItem('mobile-settings', JSON.stringify(newSettings));
  }, [settings, onSettingsChange]);

  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('mobile-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
      } catch (error) {
        console.warn('Failed to parse saved mobile settings:', error);
      }
    }
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Mobile Controls */}
      {showControls && (
        <div className="mobile-controls">
          {/* Quick Actions Bar */}
          <div className="mobile-quick-actions">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-toggle-btn"
              aria-label="Mobile settings"
              aria-expanded={isOpen}
            >
              <Smartphone size={24} />
            </button>
          </div>

          {/* Mobile Settings Panel */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="mobile-panel"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                role="dialog"
                aria-label="Mobile Settings"
                aria-modal="true"
              >
                <div className="panel-header">
                  <h3>Mobile Settings</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="close-btn"
                    aria-label="Close mobile settings"
                  >
                    <Settings size={20} />
                  </button>
                </div>

                <div className="panel-content">
                  {/* Device Information */}
                  <div className="device-info">
                    <h4>Device Information</h4>
                    <div className="info-grid">
                      <div className="info-item">
                        <span className="label">Device:</span>
                        <span className="value">{deviceType}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Orientation:</span>
                        <span className="value">{orientation}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Touch:</span>
                        <span className="value">{touchCapabilities.hasTouch ? 'Yes' : 'No'}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Network:</span>
                        <span className="value">{networkStatus.online ? 'Online' : 'Offline'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Touch Gestures */}
                  <div className="setting-group">
                    <h4>Touch & Gestures</h4>
                    <label className="setting-item">
                      <input
                        type="checkbox"
                        checked={settings.enableTouchGestures}
                        onChange={(e) => updateSetting('enableTouchGestures', e.target.checked)}
                      />
                      <span>Enable Touch Gestures</span>
                    </label>
                    <label className="setting-item">
                      <input
                        type="checkbox"
                        checked={settings.enableSwipeNavigation}
                        onChange={(e) => updateSetting('enableSwipeNavigation', e.target.checked)}
                      />
                      <span>Swipe Navigation</span>
                    </label>
                    <label className="setting-item">
                      <input
                        type="checkbox"
                        checked={settings.enablePinchZoom}
                        onChange={(e) => updateSetting('enablePinchZoom', e.target.checked)}
                      />
                      <span>Pinch to Zoom</span>
                    </label>
                    <label className="setting-item">
                      <input
                        type="checkbox"
                        checked={settings.enableHapticFeedback}
                        onChange={(e) => updateSetting('enableHapticFeedback', e.target.checked)}
                      />
                      <span>Haptic Feedback</span>
                    </label>
                  </div>

                  {/* Mobile Optimizations */}
                  <div className="setting-group">
                    <h4>Optimizations</h4>
                    <label className="setting-item">
                      <input
                        type="checkbox"
                        checked={settings.enableMobileOptimizations}
                        onChange={(e) => updateSetting('enableMobileOptimizations', e.target.checked)}
                      />
                      <span>Mobile Optimizations</span>
                    </label>
                    <label className="setting-item">
                      <input
                        type="checkbox"
                        checked={settings.enableProgressiveWebApp}
                        onChange={(e) => updateSetting('enableProgressiveWebApp', e.target.checked)}
                      />
                      <span>Progressive Web App</span>
                    </label>
                    <label className="setting-item">
                      <input
                        type="checkbox"
                        checked={settings.enableOfflineMode}
                        onChange={(e) => updateSetting('enableOfflineMode', e.target.checked)}
                      />
                      <span>Offline Mode</span>
                    </label>
                    <label className="setting-item">
                      <input
                        type="checkbox"
                        checked={settings.enableMobileAnalytics}
                        onChange={(e) => updateSetting('enableMobileAnalytics', e.target.checked)}
                      />
                      <span>Mobile Analytics</span>
                    </label>
                  </div>

                  {/* Gesture Guide */}
                  <div className="gesture-guide">
                    <h4>Gesture Guide</h4>
                    <div className="gesture-list">
                      <div className="gesture-item">
                        <ArrowRight size={20} />
                        <span>Swipe right: Go back</span>
                      </div>
                      <div className="gesture-item">
                        <ArrowLeft size={20} />
                        <span>Swipe left: Go forward</span>
                      </div>
                      <div className="gesture-item">
                        <ArrowDown size={20} />
                        <span>Swipe down: Refresh</span>
                      </div>
                      <div className="gesture-item">
                        <Touchpad size={20} />
                        <span>Pinch: Zoom in/out</span>
                      </div>
                      <div className="gesture-item">
                        <Touchpad size={20} />
                        <span>Long press: Context menu</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Offline Indicator */}
      {settings.enableOfflineMode && !navigator.onLine && (
        <div className="offline-indicator">
          <div className="offline-content">
            <WifiOff size={20} />
            <span>You're offline. Some features may be limited.</span>
          </div>
        </div>
      )}

      {/* Mobile-specific styles */}
      <style jsx>{`
        .mobile-controls {
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 1000;
        }

        .mobile-quick-actions {
          display: flex;
          gap: 8px;
        }

        .mobile-toggle-btn {
          background: #06b6d4;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .mobile-toggle-btn:hover,
        .mobile-toggle-btn:focus {
          background: #0891b2;
          transform: scale(1.05);
        }

        .mobile-panel {
          position: absolute;
          top: 100%;
          left: 0;
          width: 350px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          overflow: hidden;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: #f8fafc;
          border-bottom: 1px solid #e5e7eb;
        }

        .panel-header h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          color: #6b7280;
        }

        .close-btn:hover {
          background: #f3f4f6;
          color: #374151;
        }

        .panel-content {
          padding: 20px;
          max-height: 500px;
          overflow-y: auto;
        }

        .device-info {
          margin-bottom: 24px;
          padding: 16px;
          background: #f8fafc;
          border-radius: 8px;
        }

        .device-info h4 {
          margin: 0 0 12px 0;
          font-size: 16px;
          font-weight: 600;
          color: #374151;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
        }

        .info-item .label {
          color: #6b7280;
        }

        .info-item .value {
          font-weight: 500;
          color: #374151;
        }

        .setting-group {
          margin-bottom: 24px;
        }

        .setting-group h4 {
          margin: 0 0 12px 0;
          font-size: 16px;
          font-weight: 600;
          color: #374151;
        }

        .setting-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          cursor: pointer;
        }

        .setting-item input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: #06b6d4;
        }

        .gesture-guide {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
        }

        .gesture-list {
          display: grid;
          gap: 12px;
        }

        .gesture-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: #6b7280;
        }

        .offline-indicator {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #dc2626;
          color: white;
          padding: 12px 20px;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .offline-content {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }

        /* Mobile-specific responsive styles */
        .device-mobile {
          --mobile-padding: 16px;
          --mobile-font-size: 16px;
          --mobile-line-height: 1.5;
        }

        .device-tablet {
          --mobile-padding: 24px;
          --mobile-font-size: 18px;
          --mobile-line-height: 1.6;
        }

        .device-mobile .container,
        .device-tablet .container {
          padding-left: var(--mobile-padding);
          padding-right: var(--mobile-padding);
        }

        .device-mobile body,
        .device-tablet body {
          font-size: var(--mobile-font-size);
          line-height: var(--mobile-line-height);
        }

        .orientation-landscape .mobile-panel {
          width: 400px;
        }

        /* Touch action optimizations */
        [data-touch-optimized] {
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        /* Mobile-first responsive design */
        @media (max-width: 768px) {
          .mobile-panel {
            width: calc(100vw - 40px);
            left: 20px;
            right: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default MobileExperienceEnhancer;