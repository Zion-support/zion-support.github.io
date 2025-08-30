import React, { useEffect, useState, useCallback, useRef } from 'react';
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

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  showControls = true,
  autoDetect = true,
  onSettingsChange,
}) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [orientation, setOrientation] = useState<any>('portrait');
  const [settings, setSettings] = useState<any>({
    touchOptimized: true,
    gestureSupport: true,
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
    if (!enabled) return;

    const detectDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /mobile|android|iphone|ipad|phone|blackberry|opera mini|iemobile/i.test(userAgent);
      const isTabletDevice = /tablet|ipad|android(?=.*\b(?!mobile\b))|ipad/i.test(userAgent);
      
      setIsMobile(isMobileDevice);
      setIsTablet(isTabletDevice)};

    const detectOrientation = () => {
      if (window.innerHeight > window.innerWidth) {
        setOrientation('portrait')} else {
        setOrientation('landscape')}
    };

    const handleResize = () => {
      detectDevice();
      detectOrientation()};

    const handleOrientationChange = () => {
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
    
    // Check for mobile network
    const isSlowConnection = navigator.connection && 
      (navigator.connection.effectiveType === 'slow-2g' || 
       navigator.connection.effectiveType === '2g' ||
       navigator.connection.effectiveType === '3g');

    setSettings(prev => ({
      ...prev,
      touchOptimized: hasTouchSupport,
      mobilePerformance: isSlowConnection || false,
    }))}, [autoDetect, enabled]);

  // Touch optimization
  useEffect(()  => {
    if (!enabled || !settings.touchOptimized || !isMobile) return;

    // Add touch-action CSS for better touch handling
    const style = document.createElement('style');
    style.textContent = `
      .touch-optimized {
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

    const handleTouchStart = (event: TouchEvent)  => {
      if (event.touches.length === 1) {
        const touch = event.touches[0];
        touchStartRef.current = {
          x: touch.clientX,
          y: touch.clientY,
          time: Date.now(),
        }}
    };

    const handleTouchEnd = (event: TouchEvent)  => {
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
          gesture = deltaX > 0 ? 'swipe-right' : 'swipe-left'} else {
          gesture = deltaY > 0 ? 'swipe-down' : 'swipe-up'}

        // Handle gestures
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

    navItems.forEach(item  => {
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

    return ()  => observer.disconnect()}, [enabled, settings.responsiveImages, isMobile]);

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

    return ()  => {
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
          console.log('Service Worker registered successfully')} catch (error) {
          console.warn('Service Worker registration failed:', error)}
      }
    };

    registerServiceWorker();

    // Handle offline/online events
    const handleOnline = () => {
      document.body.classList.remove('offline');
      // Show online notification
      showNotification('You are back online', 'success')};

    const handleOffline = () => {
      document.body.classList.add('offline');
      // Show offline notification
      showNotification('You are currently offline', 'warning')};

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline)}}, [enabled, settings.offlineSupport]);

  // Show notification
  const showNotification = useCallback((message: string, type: 'success' | 'warning' | 'error')  => {
    const notification = document.createElement('div');
    notification.className = `mobile-notification mobile-notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
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
      ...prev,
      [key]: !prev[key],
    }))}, []);

  // Reset to default settings
  const resetSettings = useCallback(() => {
    setSettings({
      touchOptimized: true,
      gestureSupport: true,
      mobileNavigation: true,
      responsiveImages: true,
      mobilePerformance: true,
      offlineSupport: false,
    })}, []);

  // Toggle mobile panel visibility
  const togglePanel = useCallback(() => {
    setIsVisible(prev => !prev)}, []);

  if (!enabled) return null;

  return (
    <>
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

      {/* Mobile Status Indicator */}
      {isMobile && (
        <div className="fixed top-4 right-4 z-40 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
          📱 Mobile
        </div>
      )}
    </>
  )};

// Export default component
export default MobileExperienceEnhancer;