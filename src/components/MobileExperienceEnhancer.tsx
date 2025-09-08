import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useLocation    } from 'react-router-dom';

interface MobileSettings {



  touchOptimized: anyboolean;
  gestureSupport: boolean;
  mobileNavigation: boolean;
  responsiveImages: boolean;
  mobilePerformance: boolean;
  offlineSupport: boolean;



}

interface MobileExperienceEnhancerProps extends React.PropsWithChildren<{}> {

  enabled?: boolean;
  showControls?: boolean;
  autoDetect?: boolean;
  onSettingsChange?: (settings: MobileSettings)    => void;

}

interface SmartphoneInfo {
  type: 'mobile' | 'tablet' | 'desktop';
  platform: 'ios' | 'android' | 'web' | 'unknown';
  screenSize: { width: number; height: number };
  pixelRatio: number;
  orientation: 'portrait' | 'landscape';
  touchSupport: boolean;
  pwaSupport: boolean;
  networkType: string;
  batteryLevel: number;
}

export function MobileExperienceEnhancer({ 
  enabled = true 
}: { 
  enabled?: boolean; 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<MobileSettings>({
    touchGestures: true,
    orientationLock: false,
    mobileOptimizations: true,
    pwaFeatures: true,
    touchFeedback: true,
    hapticFeedback: false,
    adaptiveLayout: true,
    mobileNavigation: true,
    touchTargets: true,
    mobilePerformance: true,
    gestureHistory: true,
    mobileAnalytics: true,
    deviceOrientation: 'auto',
    touchSensitivity: 'medium',
    hapticIntensity: 'medium'
  });

  const [features, setFeatures] = useState<MobileFeature[]>([
    {
      id: 'touch-gestures',
      name: 'Touch Gestures',
      description: 'Advanced touch gesture recognition and handling',
      category: 'touch',
      enabled: true,
      priority: 'high',
      impact: 'high'
    },
    {
      id: 'mobile-optimizations',
      name: 'Mobile Optimizations',
      description: 'Performance and layout optimizations for mobile devices',
      category: 'performance',
      enabled: true,
      priority: 'high',
      impact: 'high'
    },
    {
      id: 'pwa-features',
      name: 'PWA Features',
      description: 'Progressive Web App capabilities and offline support',
      category: 'pwa',
      enabled: true,
      priority: 'medium',
      impact: 'medium'
    },
    {
      id: 'adaptive-layout',
      name: 'Adaptive Layout',
      description: 'Responsive design that adapts to different screen sizes',
      category: 'navigation',
      enabled: true,
      priority: 'high',
      impact: 'high'
    },
    {
      id: 'mobile-navigation',
      name: 'Mobile Navigation',
      description: 'Touch-optimized navigation and menu systems',
      category: 'navigation',
      enabled: true,
      priority: 'high',
      impact: 'high'
    },
    {
      id: 'touch-targets',
      name: 'Touch Targets',
      description: 'Properly sized touch targets for mobile interaction',
      category: 'accessibility',
      enabled: true,
      priority: 'medium',
      impact: 'medium'
    },
    {
      id: 'mobile-performance',
      name: 'Mobile Performance',
      description: 'Performance monitoring and optimization for mobile',
      category: 'performance',
      enabled: true,
      priority: 'high',
      impact: 'high'
    },
    {
      id: 'gesture-history',
      name: 'Gesture History',
      description: 'Track and analyze user gesture patterns',
      category: 'touch',
      enabled: false,
      priority: 'low',
      impact: 'low'
    }
  ]);

  const [deviceInfo, setSmartphoneInfo] = useState<SmartphoneInfo | null>(null);
  const [touchGestures, setTouchGestures] = useState<TouchGesture[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const mobileRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
// Removed unused:   const gestureTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mobile-specific settings
  const [mobileFontSize, setMobileFontSize] = useState(16);
  const [mobileSpacing, setMobileSpacing] = useState(1);
  const [mobileLayout, setMobileLayout] = useState<'grid' | 'list' | 'compact'>('grid');
  const [mobileTheme, setMobileTheme] = useState<'light' | 'dark' | 'auto'>('auto');
  const [mobileAnimations, setMobileAnimations] = useState(true);
  const [mobileGestures, setMobileGestures] = useState(true);

  // Detect device type
  useEffect(() => {
    const detectSmartphone = () => {
      const userAgent = navigator.userAgent;
      const screen = window.screen;
      
      let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';
      let platform: 'ios' | 'android' | 'web' | 'unknown' = 'unknown';
      
      // Detect platform
      if (/iPad|iPhone|iPod/.test(userAgent)) {
        platform = 'ios';
        type = /iPad/.test(userAgent) ? 'tablet' : 'mobile';
      } else if (/Android/.test(userAgent)) {
        platform = 'android';
        type = screen.width >= 768 ? 'tablet' : 'mobile';
      } else if (/Windows|Mac|Linux/.test(userAgent)) {
        platform = 'web';
        type = 'desktop';
      }
      
      // Detect mobile by screen size
      if (screen.width <= 768) {
        type = screen.width <= 480 ? 'mobile' : 'tablet';
      }
      
      const deviceInfo: SmartphoneInfo = {
        type,
        platform,
        screenSize: { width: screen.width, height: screen.height },
        pixelRatio: window.devicePixelRatio || 1,
        orientation: screen.width > screen.height ? 'landscape' : 'portrait',
        touchSupport: 'ontouchstart' in window,
        pwaSupport: 'serviceWorker' in navigator,
        networkType: (navigator as ).connection?.effectiveType || 'unknown',
        batteryLevel: 0
      };
      
      setSmartphoneInfo(deviceInfo);
      
      // Get battery level if available
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: unknown) => {
          setSmartphoneInfo(prev => prev ? { ...prev, batteryLevel: battery.level * 100 } : null);
        });
      }
    };
    
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
  useEffect(()    => {
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

    return ()    => {
      document.body.classList.remove('touch-optimized');
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  // Touch gesture handling
  useEffect(() => {
    if (!enabled || !settings.gestureSupport || !isMobile) return;

    const handleTouchStart = (event: anyTouchEvent)    => {
      if (event.touches.length === 1) {
        const touch = event.touches[0];
        touchStartRef.current = {
          x: touch?.clientX,
          y: touch?.clientY,
          time: Date.now()
        };
      }
    };

    const handleTouchEnd = (event: anyTouchEvent)    => {
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
      
      const gesture: TouchGesture = {
        type: gestureType,
        direction,
        timestamp: Date.now(),
        coordinates: { x: touch??.clientX, y: touch??.clientY },
        intensity: Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      };
      
      setTouchGestures(prev => [...prev.slice(-9), gesture]);
      handleGesture(gesture);
      
      touchStartRef.current = null;
    };

    const handleGesture = (gesture: string, data: { deltaX: number; deltaY: number; velocity: number })    => {
      // Handle common gestures
      switch (gesture) {
        case 'swipe-left':
          // Navigate forward or show next item
          handleSwipeLeft(data);
          break;
        case 'longPress':
          // Show context menu
          // console.log('Long press - show context menu');
          break;
        case 'tap':
          // Handle tap
          // console.log('Tap detected');
          break;
      }
    };

    const handleSwipeLeft = (data: any{ deltaX: number; deltaY: number; velocity: number })    => {
      // Example: Navigate to next page or item
      const nextButton = document.querySelector('[data-next], .next-button, .carousel-next');
      if (nextButton) {
        (nextButton as HTMLElement).click();
      }
    };

    const handleSwipeRight = (data: any{ deltaX: number; deltaY: number; velocity: number })    => {
      // Example: Navigate to previous page or item
      const prevButton = document.querySelector('[data-prev], .prev-button, .carousel-prev');
      if (prevButton) {
        (prevButton as HTMLElement).click();
      } else if (window.history.length > 1) {
        window.history.back();
      }
    };

    const handleSwipeUp = (data: any{ deltaX: number; deltaY: number; velocity: number })    => {
      // Example: Scroll up or show more content
      window.scrollBy({ top: -100, behavior: 'smooth' });
    };

    const handleSwipeDown = (data: any{ deltaX: number; deltaY: number; velocity: number })    => {
      // Example: anyRefresh or show less content
      if (data.velocity > 1.0) {
        window.location.reload();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return ()    => {
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
      document.body.appendChild(mobileNav)}

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style)}
      const mobileNav = document.querySelector('.mobile-nav');
      if (mobileNav && mobileNav.parentNode) {
        mobileNav.parentNode.removeChild(mobileNav)}
    }}, [enabled, settings.mobileNavigation, isMobile, location.pathname]);

  // Create mobile navigation
  const createMobileNavigation = useCallback(() => {
    const nav = document.createElement('nav');
    nav.className = 'mobile-nav';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Mobile navigation');

    const navItems = [
      { href: '/', label: 'Home', icon: '🏠' },
      { href: '/services', label: 'Services', icon: '⚙️' },
      { href: '/about', label: 'About', icon: 'ℹ️' },
      { href: '/contact', label: 'Contact', icon: '📞' },
    ];

    navItems.forEach(item    => {
      const link = document.createElement('a');
      link.href = item.href;
      link.className = `nav-item ${location.pathname === item.href ? 'active' : ''}`;
      link.innerHTML = `
        <span class="nav-icon">${item.icon}</span>
        <span>${item.label}</span>
      `;
      nav.appendChild(link)});

    return nav}, [location.pathname]);

  // Responsive images
  useEffect(() => {
    if (!enabled || !settings.responsiveImages || !isMobile) return;

    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add responsive image attributes
        if (!img.sizes) {
          img.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        
        // Add loading attribute for better performance
        if (!img.loading) {
          img.loading = 'lazy'}
        
        // Add decoding attribute
        if (!img.decoding) {
          img.decoding = 'async'}
      })};

    optimizeImages();

    // Re-optimize on route change
    const observer = new MutationObserver(optimizeImages);
    observer.observe(document.body, { childList: true, subtree: true });

    return ()    => observer.disconnect();
  }, [enabled, settings.responsiveImages, isMobile]);

  // Mobile performance optimization
  useEffect(() => {
    if (!enabled || !settings.mobilePerformance || !isMobile) return;

    // Reduce animations on mobile
    const style = document.createElement('style');
    style.textContent = `
      .mobile-performance * {
        animation-duration: 0.3s !important;
        transition-duration: 0.3s !important}
      
      .mobile-performance .animate-slow {
        animation-duration: 0.5s !important}
      
      .mobile-performance .animate-fast {
        animation-duration: 0.1s !important}
    `;
    document.head.appendChild(style);

    document.body.classList.add('mobile-performance');

    // Optimize scroll performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Handle scroll optimizations here
          ticking = false});
        ticking = true}
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return ()    => {
      document.body.classList.remove('mobile-performance');
      if (style.parentNode) {
        style.parentNode.removeChild(style)}
      window.removeEventListener('scroll', handleScroll)}}, [enabled, settings.mobilePerformance, isMobile]);

  // Offline support
  useEffect(() => {
    if (!enabled || !settings.offlineSupport) return;

    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          serviceWorkerRef.current = registration;
          // // // console.log('Service Worker registered successfully');
        } catch (error) {
          // // // console.warn('Service Worker registration failed:', error);
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
  const showNotification = useCallback((message: string, type: 'success' | 'warning' | 'error')    => {
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

    setTimeout(()    => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
      
      // Apply adaptive layout
      if (settings.adaptiveLayout) {
        document.body.classList.add('mobile-adaptive-layout');
      }
      
      // Apply touch feedback
      if (settings.touchFeedback) {
        document.body.classList.add('mobile-touch-feedback');
      }
      
      // Simulate optimization delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Calculate mobile score
      const enabledFeatures = features.filter(f => f.enabled).length;
      const totalFeatures = features.length;
      const score = Math.round((enabledFeatures / totalFeatures) * 100);
      setMobileScore(score);
      
    } catch (error) {
      // console.error('Mobile optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [settings, features]);

  // Toggle mobile settings
  const toggleSetting = useCallback((key: anykeyof MobileSettings)    => {
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

  // Save mobile settings
  const saveSettings = useCallback(async () => {
    setIsOptimizing(true);
    try {
      localStorage.setItem('zion-mobile-settings', JSON.stringify(settings));
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      // console.error('Failed to save mobile settings:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [settings]);

        break;

      case 'gesture-support':
        setMobileGestures(enabled);
        break;

      case 'mobile-layout':
        if (enabled) {
          document.documentElement.classList.add('mobile-layout');
        } else {
          document.documentElement.classList.remove('mobile-layout');
        }

        break;

      case 'performance-optimization':
        setMobileAnimations(!enabled);
        if (enabled) {
          document.documentElement.classList.add('mobile-performance');
        } else {
          document.documentElement.classList.remove('mobile-performance');
        }

        break;

      case 'visual-optimization':
        if (enabled) {
          document.documentElement.classList.add('mobile-visual');
        } else {
          document.documentElement.classList.remove('mobile-visual');
        }

        break;
      }
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      // console.error('Failed to load mobile settings:', error);
    } finally {
      setIsOptimizing(false);
    }
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
    }
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
  {/* Empty JSX fragment */}
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

      {/* Mobile Experience Dashboard Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zion-slate-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
            >
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
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* Smartphone Information */}
                {deviceInfo && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Smartphone Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                        <div className="flex items-center justify-between mb-2">
                          <PhoneIcon className="w-5 h-5 text-zion-green" />
                          <span className="text-sm text-gray-500">Smartphone Type</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white capitalize">
                          {deviceInfo.type}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {deviceInfo.platform}
                        </div>
                      </div>
                      
                      <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                        <div className="flex items-center justify-between mb-2">
                          <Monitor className="w-5 h-5 text-zion-blue" />
                          <span className="text-sm text-gray-500">Screen</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {deviceInfo.screenSize.width} × {deviceInfo.screenSize.height}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {deviceInfo.pixelRatio}x density
                        </div>
                      </div>
                      
                      <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                        <div className="flex items-center justify-between mb-2">
                          <WifiIcon className="w-5 h-5 text-zion-purple" />
                          <span className="text-sm text-gray-500">Network</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white capitalize">
                          {deviceInfo.networkType}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {deviceInfo.touchSupport ? 'Touch Enabled' : 'Touch Disabled'}
                        </div>
                      </div>
                      
                      <div className="p-4 bg-white dark:bg-zion-slate-800 rounded-xl border border-gray-200 dark:border-zion-slate-700">
                        <div className="flex items-center justify-between mb-2">
                          <BatteryIcon className="w-5 h-5 text-zion-orange" />
                          <span className="text-sm text-gray-500">Battery</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {deviceInfo.batteryLevel.toFixed(0)}%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {deviceInfo.orientation}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mobile Score */}
                <div className="mb-8">
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
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <button
                    onClick={() => setMobileFontSize(prev => Math.min(prev + 2, 24))}
                    className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all"
                  >
                    <ZoomIn className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">Increase Text</span>
                  </button>

                  <button
                    onClick={() => setMobileFontSize(prev => Math.max(prev - 2, 12))}
                    className="p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-blue-700 transition-all"
                  >
                    <ZoomOut className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">Decrease Text</span>
                  </button>

                  <button
                    onClick={() => setMobileSpacing(prev => prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1)}
                    className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all"
                  >
                    <Layout className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">
                      Spacing: {mobileSpacing === 1 ? 'Normal' : mobileSpacing === 1.5 ? 'Wide' : 'Extra Wide'}
                    </span>
                  </button>

                  <button
                    onClick={() => setMobileLayout(prev => prev === 'grid' ? 'list' : prev === 'list' ? 'compact' : 'grid')}
                    className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all"
                  >
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
                </div>

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
                    >
                      {isOptimizing ? 'Optimizing...' : 'Auto-Optimize'}
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mobileOptimizationFeatures.map((optimization) => (
                      <div
                        key={optimization.id}
                        className={`p-4 rounded-xl border transition-all ${
                          mobileOptimizations.has(optimization.id)
                            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                            : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700'
                        }`}
                      >
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
                      </div>
                    ))}
                  </div>
                </div>

                {/* Touch Gestures */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Touch Gestures
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {availableTouchGestures.map((gesture) => (
                      <div
                        key={gesture.id}
                        className={`p-4 rounded-xl border transition-all ${
                          touchGestures.has(gesture.id)
                            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                            : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700'
                        }`}
                      >
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

      {/* Mobile Status Indicator */}
      {isMobile && (
        <div className="fixed top-4 right-4 z-40 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
          📱 Mobile
        </div>
      )}
    </React.Fragment>
  )};

                {/* Advanced Settings */}
                <div className="mb-8">
                  <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="flex items-center space-x-2 text-zion-green hover:text-zion-green-dark transition-colors mb-4"
                  >
                    <Settings className="w-4 h-4" />
                    <span>{showAdvanced ? 'Hide' : 'Show'} Advanced Settings</span>
                  </button>

                  {showAdvanced && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 dark:bg-zion-slate-800 rounded-xl"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Touch Sensitivity
                          </label>
                          <select
                            value={settings.touchSensitivity}
                            onChange={(e) => setSettings(prev => ({ ...prev, touchSensitivity: e.target.value as  }))}
                            className="w-full p-2 border border-gray-300 dark:border-zion-slate-600 rounded-lg bg-white dark:bg-zion-slate-700"
                          >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                          </select>
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
                          <select
                            value={settings.hapticIntensity}
                            onChange={(e) => setSettings(prev => ({ ...prev, hapticIntensity: e.target.value as  }))}
                            className="w-full p-2 border border-gray-300 dark:border-zion-slate-600 rounded-lg bg-white dark:bg-zion-slate-700"
                          >
                            <option value="light">Light</option>
                            <option value="medium">Medium</option>
                            <option value="strong">Strong</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Smartphone Orientation
                          </label>
                          <select
                            value={settings.deviceOrientation}
                            onChange={(e) => setSettings(prev => ({ ...prev, deviceOrientation: e.target.value as  }))}
                            className="w-full p-2 border border-gray-300 dark:border-zion-slate-600 rounded-lg bg-white dark:bg-zion-slate-700"
                          >
                            <option value="auto">Auto</option>
                            <option value="portrait">Portrait</option>
                            <option value="landscape">Landscape</option>
                          </select>
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

      {/* Global Mobile Styles */}
      <style jsx global>{`
        .mobile-touch-targets button,
        .mobile-touch-targets a,
        .mobile-touch-targets input,
        .mobile-touch-targets select {
          min-height: 44px !important;
          min-width: 44px !important;
        }
        
        .mobile-navigation .nav-item {
          padding: 12px 16px !important;
          margin: 4px 0 !important;
        }
        
        .mobile-adaptive-layout {
          --zion-mobile-padding: 16px !important;
          --zion-mobile-margin: 8px !important;
        }
        
        .mobile-touch-feedback *:active {
          transform: scale(0.98) !important;
          transition: transform 0.1s ease !important;
        }
        
        @media (max-width: 768px) {
          .mobile-adaptive-layout {
            --zion-container-padding: 16px !important;
            --zion-section-margin: 24px !important;
          }
        }
      `}</style>
    </
  );
}>