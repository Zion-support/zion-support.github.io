import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Wifi, 
  Battery, 
  Hand, 
  Move,
  RotateCw,
  ZoomIn,
  ZoomOut,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Settings,
  Smartphone as MobileIcon
} from 'lucide-react';

interface MobileSettings {
  touchOptimization: boolean;
  gestureSupport: boolean;
  mobileOptimized: boolean;
  responsiveImages: boolean;
  touchFeedback: boolean;
  swipeNavigation: boolean;
  mobileMenu: boolean;
  autoRotate: boolean;
}

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
}

const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  showControls = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [settings, setSettings] = useState<MobileSettings>({
    touchOptimization: true,
    gestureSupport: true,
    mobileOptimized: true,
    responsiveImages: true,
    touchFeedback: true,
    swipeNavigation: true,
    mobileMenu: true,
    autoRotate: false
  });

  const [mobileIssues, setMobileIssues] = useState<string[]>([]);
  const [mobileScore, setMobileScore] = useState(0);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  // Detect device type and orientation
  useEffect(() => {
    if (!enabled) return;

    const detectDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);
      const isTablet = /tablet|ipad/i.test(userAgent);
      
      if (isMobile && !isTablet) {
        setDeviceType('mobile');
      } else if (isTablet) {
        setDeviceType('tablet');
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
  }, [enabled]);

  // Apply mobile settings
  const applySettings = useCallback((newSettings: MobileSettings) => {
    const root = document.documentElement;
    
    // Touch optimization
    if (newSettings.touchOptimization) {
      root.classList.add('touch-optimized');
      root.style.setProperty('--touch-target-size', '44px');
    } else {
      root.classList.remove('touch-optimized');
      root.style.removeProperty('--touch-target-size');
    }

    // Gesture support
    if (newSettings.gestureSupport) {
      root.classList.add('gesture-enabled');
    } else {
      root.classList.remove('gesture-enabled');
    }

    // Mobile optimization
    if (newSettings.mobileOptimized) {
      root.classList.add('mobile-optimized');
    } else {
      root.classList.remove('mobile-optimized');
    }

    // Responsive images
    if (newSettings.responsiveImages) {
      root.classList.add('responsive-images');
    } else {
      root.classList.remove('responsive-images');
    }

    // Touch feedback
    if (newSettings.touchFeedback) {
      root.classList.add('touch-feedback');
    } else {
      root.classList.remove('touch-feedback');
    }

    // Swipe navigation
    if (newSettings.swipeNavigation) {
      root.classList.add('swipe-navigation');
    } else {
      root.classList.remove('swipe-navigation');
    }

    // Mobile menu
    if (newSettings.mobileMenu) {
      root.classList.add('mobile-menu-enabled');
    } else {
      root.classList.remove('mobile-menu-enabled');
    }

    setSettings(newSettings);
    localStorage.setItem('zion-mobile-settings', JSON.stringify(newSettings));
  }, []);

  // Load saved settings
  useEffect(() => {
    if (!enabled) return;

    const savedSettings = localStorage.getItem('zion-mobile-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        applySettings({ ...settings, ...parsed });
      } catch (error) {
        console.warn('Failed to load mobile settings:', error);
      }
    }
  }, [enabled, applySettings]);

  // Mobile experience audit
  const runMobileAudit = useCallback(() => {
    const issues: string[] = [];
    let score = 100;

    // Check viewport meta tag
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      issues.push('Missing viewport meta tag');
      score -= 15;
    }

    // Check for responsive images
    const images = document.querySelectorAll('img');
    let responsiveImageCount = 0;
    images.forEach((img) => {
      if (img.srcset || img.sizes || img.classList.contains('responsive')) {
        responsiveImageCount++;
      }
    });
    if (responsiveImageCount < images.length * 0.5) {
      issues.push('Many images lack responsive attributes');
      score -= 10;
    }

    // Check touch target sizes
    const touchTargets = document.querySelectorAll('button, a, input, select, textarea');
    let smallTouchTargets = 0;
    touchTargets.forEach((target) => {
      const rect = target.getBoundingClientRect();
      if (rect.width < 44 || rect.height < 44) {
        smallTouchTargets++;
      }
    });
    if (smallTouchTargets > touchTargets.length * 0.3) {
      issues.push('Many touch targets are too small');
      score -= 10;
    }

    // Check for mobile-friendly navigation
    const nav = document.querySelector('nav');
    if (!nav || !nav.classList.contains('mobile-friendly')) {
      issues.push('Navigation may not be mobile-friendly');
      score -= 8;
    }

    // Check for proper spacing on mobile
    const body = document.body;
    const computedStyle = window.getComputedStyle(body);
    const fontSize = parseFloat(computedStyle.fontSize);
    if (fontSize < 16) {
      issues.push('Font size may be too small on mobile');
      score -= 5;
    }

    // Check for touch-friendly forms
    const formInputs = document.querySelectorAll('input, select, textarea');
    let touchUnfriendlyInputs = 0;
    formInputs.forEach((input) => {
      if (input.type === 'file' && !input.classList.contains('touch-friendly')) {
        touchUnfriendlyInputs++;
      }
    });
    if (touchUnfriendlyInputs > 0) {
      issues.push('Some form inputs may not be touch-friendly');
      score -= 5;
    }

    setMobileIssues(issues);
    setMobileScore(Math.max(0, score));
  }, []);

  // Run audit on mount and when settings change
  useEffect(() => {
    if (!enabled) return;
    
    const timer = setTimeout(runMobileAudit, 2000);
    return () => clearTimeout(timer);
  }, [enabled, runMobileAudit, settings]);

  // Touch gesture handlers
  useEffect(() => {
    if (!enabled || !settings.gestureSupport || deviceType === 'desktop') return;

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
      
      // Detect swipe gestures
      if (deltaTime < 500 && Math.abs(deltaX) > 50 && Math.abs(deltaY) < 100) {
        if (deltaX > 0) {
          // Swipe right - go back
          if (settings.swipeNavigation) {
            window.history.back();
          }
        } else {
          // Swipe left - go forward
          if (settings.swipeNavigation) {
            window.history.forward();
          }
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enabled, settings.gestureSupport, settings.swipeNavigation, deviceType]);

  // Auto-rotate handling
  useEffect(() => {
    if (!enabled || !settings.autoRotate || deviceType === 'desktop') return;

    const handleOrientationChange = () => {
      if (window.screen && window.screen.orientation) {
        const currentOrientation = window.screen.orientation.type;
        if (currentOrientation.includes('portrait')) {
          // Suggest landscape for better experience
          console.log('Consider rotating to landscape for better experience');
        }
      }
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, [enabled, settings.autoRotate, deviceType]);

  if (!enabled || !showControls) return null;

  return (
    <>
      {/* Floating Mobile Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 left-24 z-50 p-3 bg-gradient-to-r from-zion-matrix to-zion-cyber rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
        aria-label="Mobile Experience Settings"
      >
        <MobileIcon className="w-6 h-6 text-white" />
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-zion-neon rounded-full animate-pulse"></div>
      </motion.button>

      {/* Mobile Experience Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-24 left-24 z-40 w-80 bg-zion-slate-dark/95 backdrop-blur-md rounded-2xl shadow-2xl border border-zion-matrix/20"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            role="dialog"
            aria-labelledby="mobile-panel-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zion-matrix/20">
              <div className="flex items-center space-x-2">
                <MobileIcon className="w-5 h-5 text-zion-matrix" />
                <h3 id="mobile-panel-title" className="text-white font-semibold">
                  Mobile Experience
                </h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-zion-matrix/60 hover:text-zion-matrix transition-colors"
                aria-label="Close mobile experience panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Device Info */}
            <div className="p-4 border-b border-zion-matrix/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-zion-matrix text-sm font-medium">Device Type</span>
                <div className="flex items-center space-x-2">
                  {deviceType === 'mobile' && <Smartphone className="w-4 h-4 text-zion-matrix" />}
                  {deviceType === 'tablet' && <Tablet className="w-4 h-4 text-zion-matrix" />}
                  {deviceType === 'desktop' && <Monitor className="w-4 h-4 text-zion-matrix" />}
                  <span className="text-white text-sm capitalize">{deviceType}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-zion-matrix text-sm font-medium">Orientation</span>
                <span className="text-white text-sm capitalize">{orientation}</span>
              </div>
            </div>

            {/* Settings */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Touch Settings */}
              <div className="space-y-3">
                <h4 className="text-zion-matrix text-sm font-medium">Touch & Gestures</h4>
                
                {/* Touch Optimization */}
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.touchOptimization}
                    onChange={(e) => applySettings({ ...settings, touchOptimization: e.target.checked })}
                    className="w-4 h-4 text-zion-matrix bg-zion-slate border-zion-matrix/30 rounded focus:ring-zion-matrix focus:ring-2"
                  />
                  <Hand className="w-4 h-4 text-zion-matrix/60" />
                  <span className="text-white text-sm">Touch Optimization</span>
                </label>

                {/* Gesture Support */}
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.gestureSupport}
                    onChange={(e) => applySettings({ ...settings, gestureSupport: e.target.checked })}
                    className="w-4 h-4 text-zion-matrix bg-zion-slate border-zion-matrix/30 rounded focus:ring-zion-matrix focus:ring-2"
                  />
                  <Move className="w-4 h-4 text-zion-matrix/60" />
                  <span className="text-white text-sm">Gesture Support</span>
                </label>

                {/* Touch Feedback */}
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.touchFeedback}
                    onChange={(e) => applySettings({ ...settings, touchFeedback: e.target.checked })}
                    className="w-4 h-4 text-zion-matrix bg-zion-slate border-zion-matrix/30 rounded focus:ring-zion-matrix focus:ring-2"
                  />
                  <Hand className="w-4 h-4 text-zion-matrix/60" />
                  <span className="text-white text-sm">Touch Feedback</span>
                </label>

                {/* Swipe Navigation */}
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.swipeNavigation}
                    onChange={(e) => applySettings({ ...settings, swipeNavigation: e.target.checked })}
                    className="w-4 h-4 text-zion-matrix bg-zion-slate border-zion-matrix/30 rounded focus:ring-zion-matrix focus:ring-2"
                  />
                  <Move className="w-4 h-4 text-zion-matrix/60" />
                  <span className="text-white text-sm">Swipe Navigation</span>
                </label>
              </div>

              {/* Mobile Optimization */}
              <div className="space-y-3">
                <h4 className="text-zion-matrix text-sm font-medium">Optimization</h4>
                
                {/* Mobile Optimized */}
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.mobileOptimized}
                    onChange={(e) => applySettings({ ...settings, mobileOptimized: e.target.checked })}
                    className="w-4 h-4 text-zion-matrix bg-zion-slate border-zion-matrix/30 rounded focus:ring-zion-matrix focus:ring-2"
                  />
                  <MobileIcon className="w-4 h-4 text-zion-matrix/60" />
                  <span className="text-white text-sm">Mobile Optimized</span>
                </label>

                {/* Responsive Images */}
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.responsiveImages}
                    onChange={(e) => applySettings({ ...settings, responsiveImages: e.target.checked })}
                    className="w-4 h-4 text-zion-matrix bg-zion-slate border-zion-matrix/30 rounded focus:ring-zion-matrix focus:ring-2"
                  />
                  <ZoomIn className="w-4 h-4 text-zion-matrix/60" />
                  <span className="text-white text-sm">Responsive Images</span>
                </label>

                {/* Mobile Menu */}
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.mobileMenu}
                    onChange={(e) => applySettings({ ...settings, mobileMenu: e.target.checked })}
                    className="w-4 h-4 text-zion-matrix bg-zion-slate border-zion-matrix/30 rounded focus:ring-zion-matrix focus:ring-2"
                  />
                  <Settings className="w-4 h-4 text-zion-matrix/60" />
                  <span className="text-white text-sm">Mobile Menu</span>
                </label>

                {/* Auto Rotate */}
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.autoRotate}
                    onChange={(e) => applySettings({ ...settings, autoRotate: e.target.checked })}
                    className="w-4 h-4 text-zion-matrix bg-zion-slate border-zion-matrix/30 rounded focus:ring-zion-matrix focus:ring-2"
                  />
                  <RotateCw className="w-4 h-4 text-zion-matrix/60" />
                  <span className="text-white text-sm">Auto Rotate</span>
                </label>
              </div>

              {/* Mobile Experience Score */}
              <div className="space-y-3 pt-3 border-t border-zion-matrix/20">
                <div className="flex items-center justify-between">
                  <h4 className="text-zion-matrix text-sm font-medium">Mobile Experience Score</h4>
                  <span className={`text-sm font-bold ${
                    mobileScore >= 90 ? 'text-green-500' : 
                    mobileScore >= 70 ? 'text-yellow-500' : 'text-red-500'
                  }`}>
                    {mobileScore}/100
                  </span>
                </div>
                
                {mobileIssues.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="text-zion-matrix/80 text-xs font-medium">Issues Found:</h5>
                    <div className="space-y-1">
                      {mobileIssues.slice(0, 3).map((issue, index) => (
                        <div key={index} className="text-white/80 text-xs bg-zion-slate/30 p-2 rounded-lg flex items-start space-x-2">
                          <AlertTriangle className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span>{issue}</span>
                        </div>
                      ))}
                      {mobileIssues.length > 3 && (
                        <div className="text-white/60 text-xs text-center">
                          +{mobileIssues.length - 3} more issues
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <button
                  onClick={runMobileAudit}
                  className="w-full bg-zion-matrix/20 hover:bg-zion-matrix/30 text-zion-matrix text-sm py-2 rounded-lg transition-colors"
                >
                  Run Mobile Audit
                </button>
              </div>

              {/* Mobile Tips */}
              <div className="space-y-3 pt-3 border-t border-zion-matrix/20">
                <h4 className="text-zion-matrix text-sm font-medium">Mobile Tips</h4>
                <div className="space-y-2 text-xs">
                  <div className="text-white/80 bg-zion-slate/30 p-2 rounded-lg">
                    <strong>Touch Targets:</strong> Ensure buttons are at least 44x44px
                  </div>
                  <div className="text-white/80 bg-zion-slate/30 p-2 rounded-lg">
                    <strong>Responsive Images:</strong> Use srcset and sizes for optimal loading
                  </div>
                  <div className="text-white/80 bg-zion-slate/30 p-2 rounded-lg">
                    <strong>Viewport:</strong> Include proper viewport meta tag
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-zion-slate/30 rounded-b-2xl">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white/60">Settings saved automatically</span>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CSS for mobile features */}
      <style jsx global>{`
        .touch-optimized button,
        .touch-optimized a,
        .touch-optimized input,
        .touch-optimized select,
        .touch-optimized textarea {
          min-height: var(--touch-target-size, 44px);
          min-width: var(--touch-target-size, 44px);
        }
        
        .gesture-enabled {
          touch-action: pan-x pan-y;
        }
        
        .mobile-optimized {
          --mobile-spacing: 1rem;
          --mobile-font-size: 16px;
        }
        
        .mobile-optimized * {
          font-size: var(--mobile-font-size, 16px);
        }
        
        .mobile-optimized .container {
          padding-left: var(--mobile-spacing, 1rem);
          padding-right: var(--mobile-spacing, 1rem);
        }
        
        .responsive-images img {
          max-width: 100%;
          height: auto;
        }
        
        .touch-feedback *:active {
          transform: scale(0.98);
          transition: transform 0.1s ease;
        }
        
        .swipe-navigation {
          overflow-x: hidden;
        }
        
        .mobile-menu-enabled .mobile-menu {
          display: block;
        }
        
        @media (max-width: 768px) {
          .mobile-optimized {
            --mobile-spacing: 0.75rem;
            --mobile-font-size: 14px;
          }
        }
        
        @media (max-width: 480px) {
          .mobile-optimized {
            --mobile-spacing: 0.5rem;
            --mobile-font-size: 13px;
          }
        }
      `}</style>
    </>
  );
};

export default MobileExperienceEnhancer;