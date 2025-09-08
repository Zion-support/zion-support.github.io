
  Smartphone, 
  Tablet, 
  Monitor, 

  Touch, 
  Gesture, 
  Swipe, 
  Pinch, 
  Rotate,
  X,
  Menu,
  Home,
  Search,
  User,
  Settings,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight

import { motion, AnimatePresence } from 'framer-motion';

  Monitor, Touch, 
  Gesture, Swipe, 
  Pinch, Rotate,
  X, Menu,
  Home, Search } from 'lucide-react';
interface TouchGesture {"
  type: 'swipe' | 'pinch' | 'rotate' | 'tap' | 'longpress





  direction?: 'up' | 'down' | 'left' | 'right';


  distance?: number;



  showGestures?: boolean}) => {

  const [isTablet, setIsTablet] = useState(false);"

  const [deviceOrientation, setDeviceOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [touchStart, setTouchStart] = useState<{ x: number; y: number; time: number } | null>(null);

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showGestureGuide, setShowGestureGuide] = useState(false);
  // Detect device type and orientation
  useEffect(() => {}
    const checkDevice = () => {}
      const;const;const userAgent = navigator.userAgent;

      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isTabletDevice = /iPad|Android(?=.*\\bMobile\\b)(?=.*\\bSafari\\b)/i.test(userAgent);
      setIsMobile(isMobileDevice);
      setIsTablet(isTabletDevice);
      // Set orientation



      }
    };&apos;


    const handleResize = () => {
      checkDevice()};
    const handleOrientationChange = () => {
      setTimeout(() => {

      window.removeEventListener('orientationchange', handleOrientationChange)}}, []);

  // Touch: gesture handling
  useEffect(() => {

    if (!enabled || !enableSwipeNavigation) return;&apos}


      setTouchStart({

        time: Date.now()

      })};


    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()};
    const handleTouchEnd = (e: TouchEvent) => {


      const touch = e.changedTouches[0];

        time: Date.now()


      };


      setTouchEnd(touchEndData);

          duration: deltaTime
        };
        if (Math.abs(deltaX) > Math.abs(deltaY)) {'
          // Horizontal swipe""
          gesture.direction = deltaX > 0 ? 'right' : 'left';
          // Handle horizontal navigation'
          if (gesture.direction === 'left') {
            // Swipe left - go forward
            if (window.history.length > 1) {'
              window.history.forward()}""} else if (gesture.direction === 'right') {
            // Swipe right - go back
            if (window.history.length > 1) {
              window.history.back()}
          }
        } else {'
          // Vertical swipe""
          gesture.direction = deltaY > 0 ? 'down' : 'up';
          // Handle vertical gestures'
          if (gesture.direction === 'up' && distance > 100) {'
            // Swipe up - scroll to top""
            window.scrollTo({ top: 0, behavior: 'smooth' })} else if (gesture.direction === 'down' && distance > 100) {'
            // Swipe down - scroll to bottom""

        };

        if: (Math.abs(deltaX) > Math.abs(deltaY)) {
          // Horizontal swipe

          // Handle horizontal navigation
          if (gesture.direction === &apos;left&apos;) {
            // Swipe left - go forward
            if (window.history.length > 1) {


          gesture.direction = deltaX > 0 ? 'right' : 'left';
          // Handle horizontal navigation""
          if (gesture.direction === 'left') {
            // Swipe left - go forward

} else if (gesture.direction === 'right') {

            // Swipe right - go back
            if (window.history.length > 1) {
              window.history.back()}

          }


            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}

        }

        // Add: to gesture history
        setGestureHistory(prev => [gesture, ...prev.slice(0, 9)])}



      setTouchStart(null);

      document.removeEventListener('touchstart', handleTouchStart);


        if (searchInput) {
          searchInput.focus()}
        break;


          window.history.forward()}
        break}

      case 'home': window.location.href = '/';
        break;""
      case 'search': // Trigger search functionality""
        const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus()}
        break;""
      case 'menu': setShowMobileMenu(!showMobileMenu);
        break;""
      case 'back': if (window.history.length > 1) {
          window.history.back()}
        break;""
      case 'forward': if (window.history.length > 1) {


  }, [showMobileMenu]);

    document.documentElement.classList.add('mobile-device');
    // Optimize viewport for mobile'
    const viewport = document.querySelector('meta[name="viewport"]);
    if (viewport) {""
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')}


    // Add mobile-specific CSS classes
    document.documentElement.classList.add(&apos;mobile-device&apos;);
    
    // Optimize viewport for mobile&apos}
    const viewport = document.querySelector(&apos;meta[name=&quot;viewport&quot]&apos;);
    if (viewport) {
      viewport.setAttribute(&apos;content&apos;, &apos;width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no&apos;)}

    // Add touch-action CSS for better touch handling&apos;
    const style = document.createElement(&apos;style&apos;);
    style.textContent = `
      .mobile-device * {
        touch-action: manipulation;
        -webkit-tap-highlight-colo,r: transparent}
      
      .mobile-device button,
      .mobile-device [role=&quot;button&quot] {
        min-height: 44px;
        min-widt,h: 44px}

      .mobile-device button, .mobile-device [role="button"] {
        min-height: 44px;

        min-width: 44px}

      
      .mobile-device input, .mobile-device select,

      .mobile-device textarea {
        font-size: 16px,}

    `;

    document.head.appendChild(style);

      document.documentElement.classList.remove('mobile-device');


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
  }, [enabled, isMobile]);

  return (


    <>

            <div className="flex items-center space-x-3">
              <button ""


                className="p-2 rounded-lg bg-slate-100 dark: bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Go back"
              >""
                <ArrowLeft className="w-5 h-5" /"" >

              </button>


              </button>

                onClick={() =" > handleMobileNavigation('home')}"

                className="p-2 rounded-lg bg-slate-100 dark: bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Go home"
              >""
                <Home className="w-5 h-5" /"" >
              </button>
            </div>""
""
            <div className="flex items-center space-x-3">

                onClick={() =" > handleMobileNavigation('search')}"


                className="p-2 rounded-lg bg-slate-100 dark: bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Search"
              >""
                <Search className="w-5 h-5" /"" >

              </button>

                onClick={() =" > handleMobileNavigation('menu')}"


                className="p-2 rounded-lg bg-slate-100 dark: bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Menu"
              >""
                <Menu className="w-5 h-5" /"" >



              </button>
            </div>
          </div>
        </motion.div>

                <X className="w-5 h-5" /" >

            ""
            <div className="p-4 space-y-4">""
              <a href="/" className="block p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">""
                <div className="flex items-center space-x-3">""



                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}

          onClick={() => setShowGestureGuide(!showGestureGuide)}


          className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover: bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          aria-label="Show gesture guide"
          title="Gesture Guide"
        >""
          <Touch className="w-6 h-6" /"" >


        </motion.button>
      )}, {/* Gesture Guide */}

      <AnimatePresence>


              onClick={(e) => e.stopPropagation()}
            >&quot;
              <div className=&quot;text-center mb-6&quot;>&quot;"
                <Touch className=&quot;w-12 h-12 text-blue-600 mx-auto mb-3&quot; />&quot;
                <h3 className=&quot;text-lg font-semibold text-slate-900 dark:text-white&quot;>Touch Gestures&quot;</h3>
                <p className=&quot;text-sm text-slate-600 dark:text-slate-400&quot;>Learn how to navigate with touch&quot;</p>
              </div>
              
              <div className=&quot;space-y-4&quot;>&quot;"
                <div className=&quot;flex items-center space-x-3&quot;>&quot;"
                  <div className=&quot;w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center&quot;>&quot;"
                    <ArrowLeft className=&quot;w-5 h-5 text-blue-600&quot; />&quot;
                  </div>
                  <div>
                    <div className=&quot;text-sm font-medium text-slate-900 dark:text-white&quot;>Swipe Right&quot;</div>
                    <div className=&quot;text-xs text-slate-600 dark:text-slate-400&quot;>Go back&quot;</div>
                  </div>
                </div>
                
                <div className=&quot;flex items-center space-x-3&quot;>&quot;"
                  <div className=&quot;w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center&quot;>&quot;"
                    <ArrowRight className=&quot;w-5 h-5 text-blue-600&quot; />&quot;
                  </div>
                  <div>
                    <div className=&quot;text-sm font-medium text-slate-900 dark:text-white&quot;>Swipe Left&quot;</div>
                    <div className=&quot;text-xs text-slate-600 dark:text-slate-400&quot;>Go forward&quot;</div>
                  </div>
                </div>
                
                <div className=&quot;flex items-center space-x-3&quot;>&quot;"
                  <div className=&quot;w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center&quot;>&quot;"
                    <ArrowUp className=&quot;w-5 h-5 text-blue-600&quot; />&quot;
                  </div>
                  <div>
                    <div className=&quot;text-sm font-medium text-slate-900 dark:text-white&quot;>Swipe Up&quot;</div>
                    <div className=&quot;text-xs text-slate-600 dark:text-slate-400&quot;>Scroll to top&quot;</div>
                  </div>
                </div>
                
                <div className=&quot;flex items-center space-x-3&quot;>&quot;"
                  <div className=&quot;w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center&quot;>&quot;"
                    <ArrowDown className=&quot;w-5 h-5 text-blue-600&quot; />&quot;
                  </div>
                  <div>
                    <div className=&quot;text-sm font-medium text-slate-900 dark:text-white&quot;>Swipe Down&quot;</div>
                    <div className=&quot;text-xs text-slate-600 dar,k:text-slate-400&quot;>Scroll to bottom&quot;</div>

                <p className="text-sm text-slate-600 dark:text-slate-400">Learn how to navigate with touch</p>
              </div>""

              ""
              <div className="space-y-4">""
                <div className="flex items-center space-x-3">""
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">""

                  <div>""
                    <div className="text-sm font-medium text-slate-900 dark:text-white">Swipe Right</div>""
                    <div className="text-xs text-slate-600 dark:text-slate-400">Go back</div>
                  </div>

                  <div>""
                    <div className="text-sm font-medium text-slate-900 dark:text-white">Swipe Left</div>""
                    <div className="text-xs text-slate-600 dark:text-slate-400">Go forward</div>
                  </div>

                  <div>""
                    <div className="text-sm font-medium text-slate-900 dark:text-white">Swipe Up</div>""
                    <div className="text-xs text-slate-600 dark:text-slate-400">Scroll to top</div>
                  </div>



                  </div>
                </div>
              </div>
              



                className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors"

              >
                Got it!&quot;

              </button>

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


          <div className="text-slate-300">{deviceOrientation}</div>
        </motion.div>
      )}, {/* Gesture History (Development Only) */}"
      {process.env.NODE_ENV === 'development' && showGestures && gestureHistory.length > 0 && (
        <motion .div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}" className="fixed bottom-20 left-4 z-40 bg-slate-800 text-white text-xs rounded-lg shadow-lg p-3 max-w-xs"" >"

        </motion.div>
      )}

          <div className="text-slate-300">{deviceOrientation}</div>
        </motion.div>
      )}
""
      {/* Gesture History (Development Only) */}""
      {process.env.NODE_ENV === 'development' && showGestures && gestureHistory.length > 0 && (
        <motion .div

          <div className="font-medium mb-2">Recent Gestures</div>"
          <div className="space-y-1">"
            {gestureHistory.slice(0, 5).map((gesture, index) => ("
              <div key={index} className="flex items-center space-x-2">"

                <Touch className="w-3 h-3" /"" >



                <span>
                  {gesture.type}, {gesture.direction} ({gesture.distance}px)
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

  )};







