import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  MousePointer, 
  Hand, 
  ZoomIn, 
  ZoomOut,
  RotateCcw,
  Settings,
  X,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

interface MobileSettings {
  touchOptimization: boolean;
  gestureSupport: boolean;
  zoomControl: boolean;
  orientationLock: boolean;
  mobileNavigation: boolean;
  touchFeedback: boolean;
}

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  onSettingsChange?: (settings: MobileSettings) => void;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [settings, setSettings] = useState<MobileSettings>({
    touchOptimization: true,
    gestureSupport: true,
    zoomControl: true,
    orientationLock: false,
    mobileNavigation: true,
    touchFeedback: true
  });

  // Detect device type
  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /mobile|android|iphone|ipad|phone/i.test(userAgent);
      const isTablet = /ipad|android(?!.*mobile)/i.test(userAgent);
      
      if (isMobileDevice) {
        setIsMobile(true);
        setDeviceType(isTablet ? 'tablet' : 'mobile');
      } else {
        setIsMobile(false);
        setDeviceType('desktop');
      }
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    
    return () => window.removeEventListener('resize', detectDevice);
  }, []);

  // Apply mobile settings
  const applySettings = useCallback((newSettings: MobileSettings) => {
    const root = document.documentElement;
    
    // Touch optimization
    if (newSettings.touchOptimization) {
      root.classList.add('touch-optimized');
      root.style.setProperty('--touch-target-size', '44px');
      root.style.setProperty('--touch-spacing', '8px');
    } else {
      root.classList.remove('touch-optimized');
      root.style.removeProperty('--touch-target-size');
      root.style.removeProperty('--touch-spacing');
    }
    
    // Gesture support
    if (newSettings.gestureSupport) {
      root.classList.add('gesture-enabled');
      enableGestureSupport();
    } else {
      root.classList.remove('gesture-enabled');
      disableGestureSupport();
    }
    
    // Zoom control
    if (newSettings.zoomControl) {
      root.classList.add('zoom-controlled');
      enableZoomControl();
    } else {
      root.classList.remove('zoom-controlled');
      disableZoomControl();
    }
    
    // Orientation lock
    if (newSettings.orientationLock && isMobile) {
      lockOrientation();
    } else {
      unlockOrientation();
    }
    
    // Mobile navigation
    if (newSettings.mobileNavigation) {
      root.classList.add('mobile-nav-enabled');
      enhanceMobileNavigation();
    } else {
      root.classList.remove('mobile-nav-enabled');
      disableMobileNavigation();
    }
    
    // Touch feedback
    if (newSettings.touchFeedback) {
      root.classList.add('touch-feedback-enabled');
      enableTouchFeedback();
    } else {
      root.classList.remove('touch-feedback-enabled');
      disableTouchFeedback();
    }
    
    // Save to localStorage
    localStorage.setItem('mobile-settings', JSON.stringify(newSettings));
    
    // Notify parent component
    onSettingsChange?.(newSettings);
  }, [isMobile, onSettingsChange]);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('mobile-settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
        applySettings(parsedSettings);
      } catch (error) {
        console.error('Failed to parse mobile settings:', error);
      }
    }
  }, [applySettings]);

  // Handle setting changes
  const handleSettingChange = useCallback((key: keyof MobileSettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  }, [settings, applySettings]);

  // Enable gesture support
  const enableGestureSupport = () => {
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
      
      const deltaX = endX - startX;
      const deltaY = endY - startY;
      const deltaTime = endTime - startTime;
      
      // Swipe detection
      if (deltaTime < 300 && Math.abs(deltaX) > 50) {
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
      
      // Pull to refresh (top of page)
      if (window.scrollY === 0 && deltaY > 100 && deltaTime < 500) {
        window.location.reload();
      }
    };
    
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  };

  // Disable gesture support
  const disableGestureSupport = () => {
    // Cleanup will be handled by the return function from enableGestureSupport
  };

  // Enable zoom control
  const enableZoomControl = () => {
    const meta = document.querySelector('meta[name="viewport"]');
    if (meta) {
      meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
    }
  };

  // Disable zoom control
  const disableZoomControl = () => {
    const meta = document.querySelector('meta[name="viewport"]');
    if (meta) {
      meta.setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=no');
    }
  };

  // Lock orientation
  const lockOrientation = () => {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('portrait').catch(() => {
        console.log('Orientation lock not supported');
      });
    }
  };

  // Unlock orientation
  const unlockOrientation = () => {
    if (screen.orientation && screen.orientation.unlock) {
      screen.orientation.unlock();
    }
  };

  // Enhance mobile navigation
  const enhanceMobileNavigation = () => {
    // Add mobile-specific navigation enhancements
    const nav = document.querySelector('nav');
    if (nav) {
      nav.classList.add('mobile-enhanced');
    }
    
    // Add touch-friendly scroll indicators
    addScrollIndicators();
  };

  // Disable mobile navigation
  const disableMobileNavigation = () => {
    const nav = document.querySelector('nav');
    if (nav) {
      nav.classList.remove('mobile-enhanced');
    }
    
    removeScrollIndicators();
  };

  // Add scroll indicators
  const addScrollIndicators = () => {
    if (document.getElementById('scroll-indicators')) return;
    
    const indicators = document.createElement('div');
    indicators.id = 'scroll-indicators';
    indicators.className = 'fixed top-0 left-0 right-0 z-50 pointer-events-none';
    indicators.innerHTML = `
      <div class="scroll-indicator scroll-indicator-left"></div>
      <div class="scroll-indicator scroll-indicator-right"></div>
    `;
    
    document.body.appendChild(indicators);
    
    // Update indicators on scroll
    const updateIndicators = () => {
      const leftIndicator = document.querySelector('.scroll-indicator-left');
      const rightIndicator = document.querySelector('.scroll-indicator-right');
      
      if (leftIndicator && rightIndicator) {
        leftIndicator.classList.toggle('active', window.scrollX > 0);
        rightIndicator.classList.toggle('active', 
          window.scrollX < document.documentElement.scrollWidth - window.innerWidth
        );
      }
    };
    
    window.addEventListener('scroll', updateIndicators);
    window.addEventListener('resize', updateIndicators);
    
    return () => {
      window.removeEventListener('scroll', updateIndicators);
      window.removeEventListener('resize', updateIndicators);
    };
  };

  // Remove scroll indicators
  const removeScrollIndicators = () => {
    const indicators = document.getElementById('scroll-indicators');
    if (indicators) {
      indicators.remove();
    }
  };

  // Enable touch feedback
  const enableTouchFeedback = () => {
    // Add touch feedback styles
    const style = document.createElement('style');
    style.textContent = `
      .touch-feedback-enabled button:active,
      .touch-feedback-enabled a:active {
        transform: scale(0.95);
        transition: transform 0.1s ease;
      }
      
      .touch-feedback-enabled .touch-ripple {
        position: relative;
        overflow: hidden;
      }
      
      .touch-feedback-enabled .touch-ripple::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: translate(-50%, -50%);
        transition: width 0.3s, height 0.3s;
      }
      
      .touch-feedback-enabled .touch-ripple:active::after {
        width: 200px;
        height: 200px;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  };

  // Disable touch feedback
  const disableTouchFeedback = () => {
    // Styles will be removed by the cleanup function from enableTouchFeedback
  };

  // Add mobile-specific CSS
  useEffect(() => {
    if (!isMobile) return;
    
    const style = document.createElement('style');
    style.textContent = `
      /* Mobile-specific styles */
      .touch-optimized button,
      .touch-optimized a,
      .touch-optimized input,
      .touch-optimized select {
        min-height: var(--touch-target-size, 44px);
        min-width: var(--touch-target-size, 44px);
        padding: var(--touch-spacing, 8px);
      }
      
      .touch-optimized .nav-item {
        padding: 12px 16px;
        margin: 4px 0;
      }
      
      /* Mobile navigation enhancements */
      .mobile-nav-enabled .mobile-menu {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        z-index: 1000;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }
      
      .mobile-nav-enabled .mobile-menu.open {
        transform: translateX(0);
      }
      
      /* Scroll indicators */
      .scroll-indicator {
        position: absolute;
        top: 0;
        width: 4px;
        height: 100vh;
        background: rgba(6, 182, 212, 0.3);
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .scroll-indicator.scroll-indicator-left {
        left: 0;
      }
      
      .scroll-indicator.scroll-indicator-right {
        right: 0;
      }
      
      .scroll-indicator.active {
        opacity: 1;
      }
      
      /* Mobile-specific animations */
      @media (max-width: 768px) {
        .mobile-enhanced * {
          transition: all 0.2s ease;
        }
        
        .mobile-enhanced .fade-in {
          animation: fadeInMobile 0.3s ease;
        }
        
        @keyframes fadeInMobile {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [isMobile]);

  if (!enabled || !isMobile) return null;

  return (
    <>
      {/* Mobile Experience Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-20 z-50 w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-pink rounded-full shadow-2xl shadow-zion-purple/25 flex items-center justify-center text-white hover:from-zion-purple/90 hover:to-zion-pink/90 transition-all duration-300"
        aria-label="Mobile experience settings"
        aria-expanded={isOpen}
        aria-controls="mobile-panel"
      >
        <Smartphone className="w-6 h-6" />
      </motion.button>

      {/* Mobile Experience Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-20 right-4 z-50 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-zion-purple/20 overflow-hidden"
            id="mobile-panel"
            role="dialog"
            aria-labelledby="mobile-title"
            aria-describedby="mobile-description"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-zion-purple to-zion-pink p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 id="mobile-title" className="text-lg font-semibold">Mobile Experience</h2>
                  <p id="mobile-description" className="text-sm text-white/80">
                    Optimize for {deviceType}
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Close mobile experience panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Settings */}
            <div className="p-4 space-y-4">
              {/* Touch Optimization */}
              <div className="flex items-center justify-between">
                               <div className="flex items-center space-x-3">
                 <MousePointer className="w-5 h-5 text-zion-slate" />
                 <div>
                   <label htmlFor="touch-optimization" className="text-sm font-medium text-zion-slate-dark">
                     Touch Optimization
                   </label>
                   <p className="text-xs text-zion-slate/60">Larger touch targets</p>
                 </div>
               </div>
                <button
                  id="touch-optimization"
                  onClick={() => handleSettingChange('touchOptimization', !settings.touchOptimization)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.touchOptimization ? 'bg-zion-purple' : 'bg-zion-slate/30'
                  }`}
                  role="switch"
                  aria-checked={settings.touchOptimization}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.touchOptimization ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Gesture Support */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Hand className="w-5 h-5 text-zion-slate" />
                  <div>
                    <label htmlFor="gesture-support" className="text-sm font-medium text-zion-slate-dark">
                      Gesture Support
                    </label>
                    <p className="text-xs text-zion-slate/60">Swipe navigation</p>
                  </div>
                </div>
                <button
                  id="gesture-support"
                  onClick={() => handleSettingChange('gestureSupport', !settings.gestureSupport)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.gestureSupport ? 'bg-zion-purple' : 'bg-zion-slate/30'
                  }`}
                  role="switch"
                  aria-checked={settings.gestureSupport}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.gestureSupport ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Zoom Control */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <ZoomIn className="w-5 h-5 text-zion-slate" />
                  <div>
                    <label htmlFor="zoom-control" className="text-sm font-medium text-zion-slate-dark">
                      Zoom Control
                    </label>
                    <p className="text-xs text-zion-slate/60">Pinch to zoom</p>
                  </div>
                </div>
                <button
                  id="zoom-control"
                  onClick={() => handleSettingChange('zoomControl', !settings.zoomControl)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.zoomControl ? 'bg-zion-purple' : 'bg-zion-slate/30'
                  }`}
                  role="switch"
                  aria-checked={settings.zoomControl}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.zoomControl ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Orientation Lock */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-5 h-5 text-zion-slate" />
                  <div>
                    <label htmlFor="orientation-lock" className="text-sm font-medium text-zion-slate-dark">
                      Orientation Lock
                    </label>
                    <p className="text-xs text-zion-slate/60">Lock to portrait</p>
                  </div>
                </div>
                <button
                  id="orientation-lock"
                  onClick={() => handleSettingChange('orientationLock', !settings.orientationLock)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.orientationLock ? 'bg-zion-purple' : 'bg-zion-slate/30'
                  }`}
                  role="switch"
                  aria-checked={settings.orientationLock}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.orientationLock ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-zion-slate" />
                  <div>
                    <label htmlFor="mobile-navigation" className="text-sm font-medium text-zion-slate-dark">
                      Mobile Navigation
                    </label>
                    <p className="text-xs text-zion-slate/60">Enhanced mobile menu</p>
                  </div>
                </div>
                <button
                  id="mobile-navigation"
                  onClick={() => handleSettingChange('mobileNavigation', !settings.mobileNavigation)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.mobileNavigation ? 'bg-zion-purple' : 'bg-zion-slate/30'
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

              {/* Touch Feedback */}
              <div className="flex items-center justify-between">
                               <div className="flex items-center space-x-3">
                 <MousePointer className="w-5 h-5 text-zion-slate" />
                 <div>
                   <label htmlFor="touch-feedback" className="text-sm font-medium text-zion-slate-dark">
                     Touch Feedback
                   </label>
                   <p className="text-xs text-zion-slate/60">Visual touch response</p>
                 </div>
               </div>
                <button
                  id="touch-feedback"
                  onClick={() => handleSettingChange('touchFeedback', !settings.touchFeedback)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.touchFeedback ? 'bg-zion-purple' : 'bg-zion-slate/30'
                  }`}
                  role="switch"
                  aria-checked={settings.touchFeedback}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.touchFeedback ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Status */}
            <div className="px-4 pb-4">
              <div className="bg-zion-slate/5 rounded-lg p-3">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-zion-slate-dark">
                    {Object.values(settings).filter(Boolean).length} mobile features enabled
                  </span>
                </div>
                <div className="mt-2 text-xs text-zion-slate/60">
                  Device: {deviceType.charAt(0).toUpperCase() + deviceType.slice(1)}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};