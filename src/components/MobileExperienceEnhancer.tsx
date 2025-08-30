import React, { useEffect, useState, useCallback, useRef } from 'react.ts';
import { useLocation  } from 'react-router-dom.ts';

interface MobileSettings {

  touchOptimized: boolean;
  gestureSupport: boolean;
  mobileNavigation: boolean;
  responsiveImages: boolean;
  mobilePerformance: boolean;
  offlineSupport: boolean}

interface MobileExperienceEnhancerProps extends React.PropsWithChildren<{}> {

  enabled?: boolean;
  showControls?: boolean;
  autoDetect?: boolean;
  onSettingsChange?: (settings: MobileSettings)  => void}

<<<<<<< HEAD
export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  showControls = true,
  autoDetect = true,
  onSettingsChange,;
}) => {;
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [orientation, setOrientation] = useState<any>('portrait');
  const [settings, setSettings] = useState<any>({
    touchOptimized: true,
    gestureSupport: true,
=======
interface DeviceInfo {
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
  enabled = true ;
}: { ;
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
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    mobileNavigation: true,
    responsiveImages: true,
    mobilePerformance: true,
    offlineSupport: false,
  });
  const [isVisible, setIsVisible] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const gestureHistoryRef = useRef<string[]>([]);
  const serviceWorkerRef = useRef<ServiceWorkerRegistration | null>(null);

  // Detect mobile device and orientation
  useEffect(() => {
<<<<<<< HEAD
    if (!enabled) return;

    const detectDevice = () => {;
      const userAgent = navigator.userAgent.toLowerCase();
      const isTabletDevice = /tablet|ipad|android(?=.*\b(?!mobile\b))|ipad/i.test(userAgent);
      
      setIsMobile(isMobileDevice);
      setIsTablet(isTabletDevice)};
=======
    const detectDevice = () => {;
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
      
      const deviceInfo: DeviceInfo = {
  type,
        platform,
        screenSize: { width: screen.width,
  height: screen.height 






},;
        pixelRatio: window.devicePixelRatio || 1,;
        orientation: screen.width > screen.height ? 'landscape' : 'portrait',;
        touchSupport: 'ontouchstart' in window,;
        pwaSupport: 'serviceWorker' in navigator,;
        networkType: (navigator as any).connection?.effectiveType || 'unknown',;
        batteryLevel: 0;
      };
      
      setDeviceInfo(deviceInfo);
      
      // Get battery level if available
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          setDeviceInfo(prev => prev ? { ...prev, batteryLevel: battery.level * 100 } : null);
        });
      }
    };
    
    detectDevice();
    window.addEventListener('resize', detectDevice);
    window.addEventListener('orientationchange', detectDevice);
    
    return () => {
      window.removeEventListener('resize', detectDevice);
      window.removeEventListener('orientationchange', detectDevice);
    };
  }, []);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

    const detectOrientation = () => {
      if (window.innerHeight > window.innerWidth) {
        setOrientation('portrait')} else {;
        setOrientation('landscape')};
    };

    const handleResize = () => {;
      detectDevice();
      detectOrientation()};

    const handleOrientationChange = () => {;
      setTimeout(detectOrientation, 100)};

    // Initial detection
    detectDevice();
    detectOrientation();

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange)}}, [enabled]);

  // Auto-detect mobile preferences
  useEffect(() => {
    if (!autoDetect || !enabled) return;

    // Check for touch support
    const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
<<<<<<< HEAD
    // Check for mobile network
    const isSlowConnection = navigator.connection && 
      (navigator.connection.effectiveType === 'slow-2g' || ;
       navigator.connection.effectiveType === '2g' ||;
       navigator.connection.effectiveType === '3g');

    setSettings(prev = > ({
      ...prev,
      touchOptimized: hasTouchSupport,;
      mobilePerformance: isSlowConnection || false,;
    }))}, [autoDetect, enabled]);

  // Touch optimization
  useEffect(()  => {
    if (!enabled || !settings.touchOptimized || !isMobile) return;

    // Add touch-action CSS for better touch handling
    const style = document.createElement('style');
    style.textContent = `;
      .touch-optimized {;
        touch-action: manipulation;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none}
      
      .touch-optimized * {
        touch-action: manipulation}
      
      .touch-optimized button,
      .touch-optimized a {
        min-height: 44px;
        min-width: 44px}
      
      .touch-optimized input,
      .touch-optimized select,
      .touch-optimized textarea {
        font-size: 16px; /* Prevents zoom on iOS */
      }
    `;
    document.head.appendChild(style);

    // Apply touch optimization classes
    document.body.classList.add('touch-optimized');

    return ()  => {
      document.body.classList.remove('touch-optimized');
      if (style.parentNode) {
        style.parentNode.removeChild(style)}
    }}, [enabled, settings.touchOptimized, isMobile]);

  // Gesture support
  useEffect(() => {
    if (!enabled || !settings.gestureSupport || !isMobile) return;

    const handleTouchStart = (event: TouchEvent)  => {;
      if (event.touches.length === 1) {;
        const touch = event.touches[0];
        touchStartRef.current = {
  x: touch.clientX,
          y: touch.clientY,
          time: Date.now(),
  
;
}};
    };

    const handleTouchEnd = (event: TouchEvent)  => {;
      if (!touchStartRef.current || event.changedTouches.length !== 1) return;

      const touch = event.changedTouches[0];
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const velocity = distance / deltaTime;

      // Detect gestures
      if (distance > 50 && velocity > 0.3) {
        let gesture = '';
        
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          gesture = deltaX > 0 ? 'swipe-right' : 'swipe-left'} else {
          gesture = deltaY > 0 ? 'swipe-down' : 'swipe-up'}
;
        // Handle gestures;
        handleGesture(gesture, { deltaX, deltaY, velocity });
        
        // Track gesture history
        gestureHistoryRef.current.push(gesture);
        if (gestureHistoryRef.current.length > 10) {
          gestureHistoryRef.current.shift()}
      }

      touchStartRef.current = null};

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
          break}
    };

    const handleSwipeLeft = (data: { deltaX: number; deltaY: number; velocity: number })  => {
      // Example: Navigate to next page or item
      const nextButton = document.querySelector('[data-next], .next-button, .carousel-next');
      if (nextButton) {
        (nextButton as HTMLElement).click()}
=======
    const handleTouchStart = (e: TouchEvent) => {;
      if (e.touches.length === 1) {;
        const touch = e.touches[0];
        touchStartRef.current = {
  x: touch.clientX,
          y: touch.clientY,;
  ;
  ;
  ;
  ;
  time: Date.now();
        ;






};
      }
    };
    
    const handleTouchEnd = (e: TouchEvent) => {;
      if (!touchStartRef.current || e.touches.length !== 0) return;
      
      const touch = e.changedTouches[0];
      const start = touchStartRef.current;
      const deltaTime = Date.now() - start.time;
      
      // Detect gesture type
      let gestureType: TouchGesture['type'] = 'tap';
      let direction: TouchGesture['direction'] | null;
      
      if (deltaTime < 300 && Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
        gestureType = 'tap';
      } else if (deltaTime > 500) {
        gestureType = 'longPress';
      } else if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        gestureType = 'swipe';
        direction = deltaX > 0 ? 'right' : 'left';
      } else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
        gestureType = 'swipe';
        direction = deltaY > 0 ? 'down' : 'up';
      }
      
      const gesture: TouchGesture = {
  type: gestureType,
        direction,
        timestamp: Date.now(),
        coordinates: { x: touch.clientX,;
  ;
  y: touch.clientY ;
;
;




},;
        intensity: Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      };
      
      setTouchGestures(prev => [...prev.slice(-9), gesture]);
      handleGesture(gesture);
      
      touchStartRef.current = null;
    };
    
    const handleGesture = (gesture: TouchGesture) => {;
      // Handle different gesture types;
      switch (gesture.type) {;
        case 'swipe':;
          if (gesture.direction === 'left') {;
            // Navigate forward;
            console.log('Swipe left - navigate forward');
          } else if (gesture.direction = == 'right') {;
            // Navigate back;
            console.log('Swipe right - navigate back');
          }
          break;
        case 'longPress':
          // Show context menu
          console.log('Long press - show context menu');
          break;
        case 'tap':
          // Handle tap
          console.log('Tap detected');
          break;
      }
      
      // Add to active gestures
      setActiveGestures(prev => [...prev, `${gesture.type}${gesture.direction ? `-${gesture.direction}` : ''}`]);
      
      // Remove after 3 seconds
      setTimeout(() => {
        setActiveGestures(prev => prev.filter(g => g !== `${gesture.type}${gesture.direction ? `-${gesture.direction}` : ''}`));
      }, 3000);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    };

    const handleSwipeRight = (data: { deltaX: number; deltaY: number; velocity: number })  => {
      // Example: Navigate to previous page or item
      const prevButton = document.querySelector('[data-prev], .prev-button, .carousel-prev');
      if (prevButton) {
        (prevButton as HTMLElement).click()} else if (window.history.length > 1) {
        window.history.back()}
    };

    const handleSwipeUp = (data: { deltaX: number; deltaY: number; velocity: number })  => {
      // Example: Scroll up or show more content
      window.scrollBy({ top: -100, behavior: 'smooth' })};

    const handleSwipeDown = (data: { deltaX: number; deltaY: number; velocity: number })  => {
      // Example: Refresh or show less content
      if (data.velocity > 1.0) {
        window.location.reload()}
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return ()  => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd)}}, [enabled, settings.gestureSupport, isMobile]);

  // Mobile navigation optimization
  useEffect(() => {
    if (!enabled || !settings.mobileNavigation || !isMobile) return;

    // Add mobile navigation styles
    const style = document.createElement('style');
    style.textContent = `;
      .mobile-nav {;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        z-index: 1000;
        padding: 10px 0}
      
      .mobile-nav .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: #666;
        font-size: 12px;
        padding: 8px;
        border-radius: 8px;
        transition: all 0.2s ease}
      
      .mobile-nav .nav-item:hover,
      .mobile-nav .nav-item.active {
        color: #007bff;
        background: rgba(0, 123, 255, 0.1)}
      
      .mobile-nav .nav-icon {
        width: 24px;
        height: 24px;
        margin-bottom: 4px}
      
      @media (max-width: 768px) {
        body {
          padding-bottom: 80px}
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
  const createMobileNavigation = useCallback(() => {;
    const nav = document.createElement('nav');
    nav.className = 'mobile-nav';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Mobile navigation');

    const navItems = [
      { href: '/', label: 'Home', icon: '🏠' },
      { href: '/services', label: 'Services', icon: '⚙️' },
      { href: '/about', label: 'About', icon: 'ℹ️' },;
      { href: '/contact', label: 'Contact', icon: '📞' },;
    ];

    navItems.forEach(item = > {;
      const link = document.createElement('a');
      link.href = item.href;
      link.className = `nav-item ${location.pathname === item.href ? 'active' : ''}`;
      link.innerHTML = `
        <span class="nav-icon">${item.icon}</span>;
        <span>${item.label}</span>;
      `;
      nav.appendChild(link)});

    return nav}, [location.pathname]);

  // Responsive images
  useEffect(() => {
    if (!enabled || !settings.responsiveImages || !isMobile) return;

    const optimizeImages = () => {;
      const images = document.querySelectorAll('img');
      images.forEach(img = > {
        // Add responsive image attributes
        if (!img.sizes) {
          img.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        
        // Add loading attribute for better performance
        if (!img.loading) {
          img.loading = 'lazy'}
        
        // Add decoding attribute
        if (!img.decoding) {;
          img.decoding = 'async'};
      })};

    optimizeImages();

    // Re-optimize on route change
    const observer = new MutationObserver(optimizeImages);
    observer.observe(document.body, { childList: true, subtree: true });

    return ()  => observer.disconnect()}, [enabled, settings.responsiveImages, isMobile]);

  // Mobile performance optimization
  useEffect(() => {
    if (!enabled || !settings.mobilePerformance || !isMobile) return;

    // Reduce animations on mobile
    const style = document.createElement('style');
    style.textContent = `;
      .mobile-performance * {;
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
        requestAnimationFrame(() => {;
          // Handle scroll optimizations here;
          ticking = false});
        ticking = true};
    };

<<<<<<< HEAD
    window.addEventListener('scroll', handleScroll, { passive: true });

    return ()  => {
      document.body.classList.remove('mobile-performance');
      if (style.parentNode) {
        style.parentNode.removeChild(style)}
      window.removeEventListener('scroll', handleScroll)}}, [enabled, settings.mobilePerformance, isMobile]);

  // Offline support
  useEffect(() => {
    if (!enabled || !settings.offlineSupport) return;

    const registration = await navigator.serviceWorker.register('/sw.js');
          serviceWorkerRef.current = registration;
          console.log('Service Worker registered successfully')} catch (error) {
          console.warn('Service Worker registration failed:', error)}
=======
  // Apply mobile optimizations
  const applyMobileOptimizations = useCallback(async () => {;
    setIsOptimizing(true);
    
    try {
      // Apply touch target optimizations
      if (settings.touchTargets) {
        document.body.classList.add('mobile-touch-targets');
        document.documentElement.style.setProperty('--zion-touch-target-size', '44px');
      }
      
      // Apply mobile navigation
      if (settings.mobileNavigation) {
        document.body.classList.add('mobile-navigation');
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
      console.error('Mobile optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [settings, features]);

  // Toggle mobile features
  const toggleFeature = useCallback((featureId: string) => {;
    setFeatures(prev => prev.map(f => ;
      f.id === featureId ? { ...f, enabled: !f.enabled } : f;
    ));
    
    // Apply optimizations after feature toggle
    setTimeout(applyMobileOptimizations, 100);
  }, [applyMobileOptimizations]);

  // Save mobile settings
  const saveSettings = useCallback(async () => {;
    setIsOptimizing(true);
    try {
      localStorage.setItem('zion-mobile-settings', JSON.stringify(settings));
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Failed to save mobile settings:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [settings]);

  // Load mobile settings
  const loadSettings = useCallback(async () => {;
    setIsOptimizing(true);
    try {
      const saved = localStorage.getItem('zion-mobile-settings');
      if (saved) {
        const parsedSettings = JSON.parse(saved);
        setSettings(parsedSettings);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      }
    };

    registerServiceWorker();

    // Handle offline/online events
    const handleOnline = () => {;
      document.body.classList.remove('offline');
      // Show online notification
      showNotification('You are back online', 'success')};

    const handleOffline = () => {;
      document.body.classList.add('offline');
      // Show offline notification
      showNotification('You are currently offline', 'warning')};

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline)}}, [enabled, settings.offlineSupport]);

  // Show notification
  const showNotification = useCallback((message: string, type: 'success' | 'warning' | 'error')  => {;
    const notification = document.createElement('div');
    notification.className = `mobile-notification mobile-notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `;
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#ef4444'};
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      z-index: 10000;
      font-size: 14px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;

    document.body.appendChild(notification);

    setTimeout(()  => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)}
    }, 3000)}, []);

  // Toggle mobile settings
  const toggleSetting = useCallback((key: keyof MobileSettings)  => {
    setSettings(prev => ({
      ...prev,;
      [key]: !prev[key],;
    }))}, []);

  // Reset to default settings
  const resetSettings = useCallback(() => {
<<<<<<< HEAD
    setSettings({
      touchOptimized: true,
      gestureSupport: true,
=======
    const defaultSettings: MobileSettings = {
  touchGestures: true,
      orientationLock: false,
      mobileOptimizations: true,
      pwaFeatures: true,
      touchFeedback: true,
      hapticFeedback: false,
      adaptiveLayout: true,
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      mobileNavigation: true,
      responsiveImages: true,
      mobilePerformance: true,
<<<<<<< HEAD
      offlineSupport: false,;
  ;

})}, []);
=======
      gestureHistory: true,
      mobileAnalytics: true,
      deviceOrientation: 'auto',
      touchSensitivity: 'medium',;
  ;
  ;
  hapticIntensity: 'medium';
    ;




};
    
    setSettings(defaultSettings);
    setTouchGestures([]);
    setActiveGestures([]);
    setMobileScore(0);
  }, []);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

  // Toggle mobile panel visibility
  const togglePanel = useCallback(() => {;
    setIsVisible(prev => !prev)}, []);

  if (!enabled) return null;

  return (
    <>
<<<<<<< HEAD
      {/* Mobile Experience Controls Button */}
      {showControls && isMobile && (
        <button
          onClick = {togglePanel}
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
=======
      {/* Floating Mobile Button */}
      <motion.button
        onClick = {() => setIsOpen(true)}
        className="fixed bottom-6 left-20 z-50 p-3 bg-gradient-to-r from-zion-green to-zion-blue rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Mobile Experience Settings"
      >
        <Smartphone className="w-6 h-6 text-white" />
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      </motion.button>

      {/* Mobile Experience Dashboard Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            ref={mobileRef}
          >
            <motion.div
              initial = {
  { scale: 0.9,
  opacity: 0 






}}
              animate = {
  { scale: 1,
  opacity: 1 






}}
              exit = {
  { scale: 0.9,
  opacity: 0 






}}
              className="bg-white dark:bg-zion-slate-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
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

<<<<<<< HEAD
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
=======
                {/* Mobile Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Mobile Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature) => (
                      <motion.div
                        key={feature.id}
                        initial = {
  { opacity: 0,
  y: 20 






}}
                        animate = {
  { opacity: 1,
  y: 0 






}}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          feature.enabled
                            ? 'bg-zion-green/10 border-zion-green'
                            : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700 hover:border-zion-green'
                        }`}
                        onClick={() => toggleFeature(feature.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                feature.priority === 'high' ? 'bg-red-100 text-red-800' :
                                feature.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {feature.priority.toUpperCase()}
                              </span>
                              <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                                {feature.category}
                              </span>
                            </div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                              {feature.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {feature.description}
                            </p>
                          </div>
                          
                          <div className={`w-5 h-5 rounded-full border-2 transition-colors ${
                            feature.enabled
                              ? 'bg-zion-green border-zion-green'
                              : 'border-gray-300 dark:border-gray-600'
                          }`}>
                            {feature.enabled && (
                              <CheckCircle className="w-5 h-5 text-white" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

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

<<<<<<< HEAD
      {/* Mobile Status Indicator */}
      {isMobile && (
        <div className="fixed top-4 right-4 z-40 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
          📱 Mobile
        </div>
      )}
=======
                {/* Advanced Settings */}
                <div className="mb-8">
                  <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="flex items-center space-x-2 text-zion-green hover:text-zion-green-dark transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    <span>{showAdvanced ? 'Hide' : 'Show'} Advanced Settings</span>
                  </button>
                  
                  {showAdvanced && (
                    <motion.div
                      initial = {
  { opacity: 0,
  height: 0 






}}
                      animate = {
  { opacity: 1,
  height: 'auto' 






}}
                      exit = {
  { opacity: 0,
  height: 0 






}}
                      className="mt-4 p-4 bg-gray-50 dark:bg-zion-slate-800 rounded-xl"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Touch Sensitivity
                          </label>
                          <select
                            value={settings.touchSensitivity}
                            onChange = {
  (e) => setSettings(prev => ({ ...prev,
  touchSensitivity: e.target.value as any 






}))}
                            className="w-full p-2 border border-gray-300 dark:border-zion-slate-600 rounded-lg bg-white dark:bg-zion-slate-700"
                          >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Haptic Intensity
                          </label>
                          <select
                            value={settings.hapticIntensity}
                            onChange = {
  (e) => setSettings(prev => ({ ...prev,
  hapticIntensity: e.target.value as any 






}))}
                            className="w-full p-2 border border-gray-300 dark:border-zion-slate-600 rounded-lg bg-white dark:bg-zion-slate-700"
                          >
                            <option value="light">Light</option>
                            <option value="medium">Medium</option>
                            <option value="strong">Strong</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Device Orientation
                          </label>
                          <select
                            value={settings.deviceOrientation}
                            onChange = {
  (e) => setSettings(prev => ({ ...prev,
  deviceOrientation: e.target.value as any 






}))}
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

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-zion-slate-700">
                  <div className="flex space-x-3">
                    <button
                      onClick={saveSettings}
                      disabled={isOptimizing}
                      className="flex items-center space-x-2 px-4 py-2 bg-zion-green text-white rounded-lg hover:bg-zion-green-dark transition-colors disabled:opacity-50"
                    >
                      {isOptimizing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                      <span>Save Settings</span>
                    </button>
                    
                    <button
                      onClick={loadSettings}
                      disabled={isOptimizing}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-zion-slate-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-zion-slate-600 transition-colors disabled:opacity-50"
                    >
                      {isOptimizing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Settings className="w-4 h-4" />}
                      <span>Load Settings</span>
                    </button>
                    
                    <button
                      onClick={resetSettings}
                      className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reset to Default</span>
                    </button>
                  </div>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Mobile-first design & touch optimization
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
;
      {/* Global Mobile Styles */};
      <style jsx global>{`;
        .mobile-touch-targets button,;
        .mobile-touch-targets a,;
        .mobile-touch-targets input,;
        .mobile-touch-targets select {;
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
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    </>
  )};

// Export default component
export default MobileExperienceEnhancer;
export default MobileExperienceEnhancer;
export default MobileExperienceEnhancer;