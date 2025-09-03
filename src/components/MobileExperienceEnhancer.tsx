
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







