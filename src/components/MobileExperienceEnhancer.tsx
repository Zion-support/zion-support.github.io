
<<<<<<< HEAD
=======
import {
  Smartphone, 
  Tablet, 
  Monitor, 

>>>>>>> main
  Smartphone,
  Tablet,
  Monitor,
  Touch,
  Gesture,
  Swipe,
  Pinch,
  Rotate,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Settings,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight'
} from 'lucide-react';

interface TouchGesture {

  type: 'swipe' | 'pinch' | 'rotate' | 'tap' | 'longpress';
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number}

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  showControls?: boolean}
export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({

  enabled = true,
  showGestures = false,
  enableSwipeNavigation = true}) => {

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [deviceOrientation, setDeviceOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [touchStart, setTouchStart] = useState<{ x: number; y: number; time: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number; time: number } | null>(null);
  const [gestureHistory, setGestureHistory] = useState<TouchGesture[]>([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showGestureGuide, setShowGestureGuide] = useState(false);

  // Detect device type and orientation
  useEffect ( () => {
    
      
      
      setIsMobile (isMobileDevice) ;
      setIsTablet (isTabletDevice) ;

      // Set orientation
      if (window.innerHeight > window.innerWidth) {

        setDeviceOrientation('portrait')} else {

        setDeviceOrientation('landscape')}
    }} else {
        setOrientation('landscape')}
    }} else {

          setDeviceOrientation('landscape')}
      }, 100) };
<<<<<<< HEAD

    checkDevice();
    window.addEventListener('resize', handleResize);
=======
    checkDevice();'
    window.addEventListener('resize', handleResize);'
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {

      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange)}}, []) ;
  // Touch gesture handling
  useEffect(() => {
    if (!enabled || !enableSwipeNavigation) return;

    const handleTouchStart = (e: TouchEvent) => {

      const touch = e.touches[0];      setTouchStart({

        x: touch.clientX,
        y: touch.clientY,
        time: Date.now () ,
      }) }};

    
      
      
      setTouchEnd (touchEndData) ;

      // Calculate gesture
      
      
      
      
      // Minimum distance and time for gesture recognition
      if (distance > 50 && deltaTime < 500) {

        let gesture: TouchGesture = {

          type: 'swipe',
          distance,
          duration: deltaTime,
        };

        if (Math.abs(deltaX) > Math.abs(deltaY)) {

          // Horizontal swipe'
          gesture.direction = deltaX > 0 ? 'right' : 'left';
          
          // Handle horizontal navigation'
          if (gesture.direction === 'left') {

            // Swipe left - go forward
            if (window.history.length > 1) {

              window.history.forward();
<<<<<<< HEAD
            }
          } else if (gesture.direction === 'right') {
=======
            }'          } else if (gesture.direction === 'right') {
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954

            // Swipe right - go back
            if (window.history.length > 1) {

              window.history.back()}          }
        } else {

          // Vertical swipe'
          gesture.direction = deltaY > 0 ? 'down' : 'up';
          
          // Handle vertical gestures'
          if (gesture.direction === 'up' && distance > 100) {

            // Swipe up - scroll to top'
            window.scrollTo({ top: 0, behavior: 'smooth' })} else if (gesture.direction === 'down' && distance > 100) {

            // Swipe down - scroll to bottom'
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}        }

        // Add to gesture history
        setGestureHistory(prev => [gesture, ...prev.slice(0, 9)]);
        
        // Log gesture for debugging'
        // console.log('Touch Gesture:', gesture)}
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {

      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd)}}, [enabled, enableSwipeNavigation, touchStart]) ;

  // Enhanced mobile navigation
  
        break;
      case 'search':
        // Trigger search functionality'
        
        if (searchInput) {

          searchInput.focus()}
<<<<<<< HEAD
        break;
      case 'menu':
=======
        break;'      case 'menu':
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
        setShowMobileMenu(!showMobileMenu);
        break;
      case 'back':
        if (window.history.length > 1) {

          window.history.back()}
        break;
      case 'forward':
        if (window.history.length > 1) {

          window.history.forward()}
        break}  }, [showMobileMenu]);

  // Mobile - specific optimizations
  useEffect ( () => {
    if (!enabled || !isMobile) return;

    // Add mobile-specific CSS classes'
    document.documentElement.classList.add('mobile-device');
    
    // Optimize viewport for mobile'"
    
    if (viewport) {

<<<<<<< HEAD
    // Add touch - action CSS for better touch handling
    const style = document.createElement ('style') ;
    style.textContent = `
      .mobile - device * {
        touch - action: manipulation;
        -webkit - tap - highlight - color: transparent;
      }

      .mobile - device button,
      .mobile - device [role="button"] {
        min - height: 44px;
        min - width: 44px;
      }

      .mobile - device input,
      .mobile - device select,
      .mobile - device textarea {
        font - size: 16px;
      }
    `;
=======
      viewport.setAttribute('content',width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')}

    // Add touch-action CSS for better touch handling'
    const style = document.createElement('style');    style.textContent = `
      .mobile-device * {

        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent}
      
      .mobile-device button,"
      .mobile-device [role="button"] {

        min-height: 44px;
        min-width: 44px}
      
      .mobile-device input,
      .mobile-device select,
      .mobile-device textarea {

        font-size: 16px}`    `;
>>>>>>> main
    document.head.appendChild (style) ;

    return () => {

      document.documentElement.classList.remove('mobile-device');
      if (style.parentNode) {

        style.parentNode.removeChild(style)}
    }}, [enabled, isMobile]) ;
  if (!enabled) return null;

  return()
    <>

      {/* Mobile Navigation Bar */}
      {isMobile && (<motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}"
          className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-lg"
        >"
          <div className="flex items-center justify-between px-4 py-3">"
            <div className="flex items-center space-x-3">
              <button'
                onClick={() => handleMobileNavigation('back')}"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Go back"
              >"
                <ArrowLeft className="w-5 h-5"  />              </button>
              <button'
                onClick={() => handleMobileNavigation('home')}"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Go home"
              >"
                <Home className="w-5 h-5"  />              </button>
            </div>
"
            <div className="flex items-center space-x-3">
              <button'
                onClick={() => handleMobileNavigation('search')}"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Search"
              >"
                <Search className="w-5 h-5"  />              </button>
              <button'
                onClick={() => handleMobileNavigation('menu')}"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Menu"
              >"
                <Menu className="w-5 h-5"  />              </button>
            </div>
          </div>
        </motion.div>) }

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && isMobile && (
          <motion.div'
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}"
            className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700 shadow-xl z-50"
          >"
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">"
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Menu</h3>
              <button
                onClick={() => setShowMobileMenu(false)}"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Close menu"
              >"
                <X className="w-5 h-5"  />
              </button>
            </div>
            "
            <div className="p-4 space-y-4">"
              <a href="/" className="block p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">"
                <div className="flex items-center space-x-3">"
                  <Home className="w-5 h-5 text-slate-600 dark:text-slate-400"  />"
                  <span className="text-slate-900 dark:text-white">Home</span>
                </div>
              </a>
              "
              <a href="/services" className="block p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">"
                <div className="flex items-center space-x-3">"
                  <Settings className="w-5 h-5 text-slate-600 dark:text-slate-400"  />"
                  <span className="text-slate-900 dark:text-white">Services</span>
                </div>
              </a>
              "
              <a href="/about" className="block p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">"
                <div className="flex items-center space-x-3">"
                  <User className="w-5 h-5 text-slate-600 dark:text-slate-400"  />"
                  <span className="text-slate-900 dark:text-white">About</span>
                </div>
              </a>
              "
              <a href="/contact" className="block p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">"
                <div className="flex items-center space-x-3">"
                  <User className="w-5 h-5 text-slate-600 dark:text-slate-400"  />"                  <span className="text-slate-900 dark:text-white">Contact</span>
                </div>
              </a>
            </div>

      {/* Floating Action Button for Mobile */}
      {isMobile && (<motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowGestureGuide(!showGestureGuide)}"
          className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          aria-label="Show gesture guide"
          title="Gesture Guide"
        >"
          <Touch className="w-6 h-6"  />        </motion.button>
      )}

      {/* Gesture Guide */}
      <AnimatePresence>
        {showGestureGuide && isMobile && (<motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}"
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setShowGestureGuide(false)}
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}"
              className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >"
              <div className="text-center mb-6">"
                <Touch className="w-12 h-12 text-blue-600 mx-auto mb-3"  />"
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Touch Gestures</h3>"
                <p className="text-sm text-slate-600 dark:text-slate-400">Learn how to navigate with touch</p>
              </div>
              "
              <div className="space-y-4">"
                <div className="flex items-center space-x-3">"
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">"
                    <ArrowLeft className="w-5 h-5 text-blue-600"  />                  </div>
                  <div>"
                    <div className="text-sm font-medium text-slate-900 dark:text-white">Swipe Right</div>"
                    <div className="text-xs text-slate-600 dark:text-slate-400">Go back</div>
                  </div>
                </div>
                "
                <div className="flex items-center space-x-3">"
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">"
                    <ArrowRight className="w-5 h-5 text-blue-600"  />                  </div>
                  <div>"
                    <div className="text-sm font-medium text-slate-900 dark:text-white">Swipe Left</div>"
                    <div className="text-xs text-slate-600 dark:text-slate-400">Go forward</div>
                  </div>
                </div>
                "
                <div className="flex items-center space-x-3">"
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">"
                    <ArrowUp className="w-5 h-5 text-blue-600"  />                  </div>
                  <div>"
                    <div className="text-sm font-medium text-slate-900 dark:text-white">Swipe Up</div>"
                    <div className="text-xs text-slate-600 dark:text-slate-400">Scroll to top</div>
                  </div>
                </div>
                "
                <div className="flex items-center space-x-3">"
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">"
                    <ArrowDown className="w-5 h-5 text-blue-600"  />                  </div>
                  <div>"
                    <div className="text-sm font-medium text-slate-900 dark:text-white">Swipe Down</div>"
                    <div className="text-xs text-slate-600 dark:text-slate-400">Scroll to bottom</div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setShowGestureGuide(false)}"
                className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Got it!
              </button>
            </motion.div>
          </motion.div>) }
      </AnimatePresence>


      {/* Device Info Indicator (Development Only) */}
      {process.env.NODE_ENV === 'development' && (isMobile || isTablet) && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}"
          className="fixed top-20 left-4 z-40 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg shadow-lg"
        >"
          <div className="flex items-center space-x-2">"
<<<<<<< HEAD
            {isMobile ? <Smartphone className="w-4 h-4"  /> : <Tablet className="w-4 h-4"  />}
            <span>{isMobile ? 'Mobile' : 'Tablet'}</span>
=======
            {isMobile ? <Smartphone className="w-4 h-4"  /> : <Tablet className="w-4 h-4"  />}'            <span>{isMobile ? 'Mobile' : 'Tablet'}</span>
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
          </div>"
          <div className="text-slate-300">{deviceOrientation}</div>
        </motion.div>
      )}

      {/* Gesture History (Development Only) */}
      {process.env.NODE_ENV === 'development' && showGestures && gestureHistory.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}"
          className="fixed bottom-20 left-4 z-40 bg-slate-800 text-white text-xs rounded-lg shadow-lg p-3 max-w-xs"
        >"
          <div className="font-medium mb-2">Recent Gestures</div>"
          <div className="space-y-1">
            {gestureHistory.slice(0, 5).map((gesture, index) => ("
              <div key={index} className="flex items-center space-x-2">"
                <Touch className="w-3 h-3"  />                <span>
                  {gesture.type} {gesture.direction} ({gesture.distance}px)
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  )};

export default MobileExperienceEnhancer;

'"`