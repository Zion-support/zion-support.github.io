
import React, { useEffect, useState, useCallback } from &apos;
import { motion } from &apos;framer-motion';;react';

import { motion, AnimatePresence } from &apos;framer-motion';
import { 
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
} from &apos;lucide-react';

interface TouchGesture {
  type: &apos;swipe&apos; | &apos;pinch&apos; | &apos;rotate&apos; | &apos;tap&apos; | &apos;longpress';
  direction?: &apos;up&apos; | &apos;down&apos; | &apos;left&apos; | &apos;right';
  distance?: number;
  duration?: number;
}

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  showGestures?: boolean;
  enableSwipeNavigation?: boolean;
}&apos;&apos;

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  showGestures = false,
  enableSwipeNavigation = true
}) => {}
  const;const;const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [deviceOrientation, setDeviceOrientation] = useState<;<;<&apos;portrait&apos; | &apos;landscape&apos;>(&apos;portrait&apos;);&apos;
  const [touchStart, setTouchStart] = useState<;<;<{ x: number; y: number; tim,e: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<;<;<{ x: number; y: number; tim,e: number } | null>(null);
  const [gestureHistory, setGestureHistory] = useState<;<;<TouchGesture[]>([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showGestureGuide, setShowGestureGuide] = useState(false);

  // Detect device type and orientation
  useEffect(() => {}
    const checkDevice = () => {}
      const;const;const userAgent = navigator.userAgent;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isTabletDevice = /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/i.test(userAgent);
      
      setIsMobile(isMobileDevice);
      setIsTablet(isTabletDevice);
      
      // Set orientation
      if (window.innerHeight > window.innerWidth) {
        setDeviceOrientation(&apos;portrait&apos;);
      } else {
        setDeviceOrientation(&apos;landscape&apos;);
      }
    };&apos;

    const handleResize = () => {
      checkDevice();
    };

    const handleOrientationChange = () => {
      setTimeout(() => {
        if (window.innerHeight > window.innerWidth) {
          setDeviceOrientation(&apos;portrait&apos;);
        } else {
          setDeviceOrientation(&apos;landscape&apos;);
        }
      }, 100);
    };

    checkDevice();
    window.addEventListener(&apos;resize&apos;, handleResize);
    window.addEventListener(&apos;orientationchange&apos;, handleOrientationChange);

    return () => {
      window.removeEventListener(&apos;resize&apos;, handleResize);
      window.removeEventListener(&apos;orientationchange&apos;, handleOrientationChange);

    };
  }, []);

  // Touch gesture handling
  useEffect(() => {

    if (!enabled || !enableSwipeNavigation) return;&apos;}

    const handleTouchStart = (e: TouchEvent) => {}
      const;const;const touch = e.touches[0];
      setTouchStart({
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStart) return;}

      const touch = e.changedTouches[0];
      const touchEndData = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      };
      setTouchEnd(touchEndData);

      // Calculate gesture
      const deltaX = touchEndData.x - touchStart.x;
      const deltaY = touchEndData.y - touchStart.y;
      const deltaTime = touchEndData.time - touchStart.time;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Minimum distance and time for gesture recognition
      if (distance > 50 && deltaTime < 500) {}
        const gesture: TouchGesture = {
          typ,e: &apos;swipe&apos;,
          distance,
          duration: deltaTime
        };

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          // Horizontal swipe
          gesture.direction = deltaX > 0 ? &apos;right&apos; : &apos;left';
          
          // Handle horizontal navigation
          if (gesture.direction === &apos;left&apos;) {
            // Swipe left - go forward
            if (window.history.length > 1) {
              window.history.forward();
            }
          } else if (gesture.direction === &apos;right&apos;) {
            // Swipe right - go back
            if (window.history.length > 1) {
              window.history.back();
            }
          }
        } else {
          // Vertical swipe
          gesture.direction = deltaY > 0 ? &apos;down&apos; : &apos;up';
          
          // Handle vertical gestures
          if (gesture.direction === &apos;up&apos; && distance > 100) {
            // Swipe up - scroll to top
            window.scrollTo({ top: 0, behavior: &apos;smooth&apos; });
          } else if (gesture.direction === &apos;down&apos; && distance > 100) {
            // Swipe down - scroll to bottom
            window.scrollTo({ top: document.body.scrollHeight, behavior: &apos;smooth&apos; });
          }
        }

        // Add to gesture history
        setGestureHistory(prev => [gesture, ...prev.slice(0, 9)]);
        
        // Log gesture for debugging
        console.log(&apos;Touch Gesture:&apos;, gesture);
      }

      setTouchStart(null);
      setTouchEnd(null);
    };

    document.addEventListener(&apos;touchstart&apos;, handleTouchStart, { passive: false });
    document.addEventListener(&apos;touchmove&apos;, handleTouchMove, { passive: false });
    document.addEventListener(&apos;touchend&apos;, handleTouchEnd, { passive: false });

    return () => {
      document.removeEventListener(&apos;touchstart&apos;, handleTouchStart);
      document.removeEventListener(&apos;touchmove&apos;, handleTouchMove);
      document.removeEventListener(&apos;touchend&apos;, handleTouchEnd);
    };
  }, [enabled, enableSwipeNavigation, touchStart]);

  // Enhanced mobile navigation&apos;&apos;
  const handleMobileNavigation = useCallback((action: string) => {
    switch (action) {
      case &apos;home&apos;:
        window.location.href = &apos;/';
        break;
      case &apos;search&apos;:
        // Trigger search&apos;}}&apos; functionality
        const searchInput = document.querySelector(&apos;input[type=&quot;search&quot;]&apos;) as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
        break;
      case &apos;menu&apos;:
        setShowMobileMenu(!showMobileMenu);
        break;
      case &apos;back&apos;:
        if (window.history.length > 1) {
          window.history.back();
        }
        break;
      case &apos;forward&apos;:
        if (window.history.length > 1) {
          window.history.forward();
        }
        break;
    }
  }, [showMobileMenu]);

  // Mobile-specific optimizations
  useEffect(() => {
    if (!enabled || !isMobile) return;

    // Add mobile-specific CSS classes
    document.documentElement.classList.add(&apos;mobile-device&apos;);
    
    // Optimize viewport for mobile&apos;}
    const viewport = document.querySelector(&apos;meta[name=&quot;viewport&quot;]&apos;);
    if (viewport) {
      viewport.setAttribute(&apos;content&apos;, &apos;width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no&apos;);
    }

    // Add touch-action CSS for better touch handling&apos;
    const style = document.createElement(&apos;style&apos;);
    style.textContent = `
      .mobile-device * {
        touch-action: manipulation;
        -webkit-tap-highlight-colo,r: transparent;
      }
      
      .mobile-device button,
      .mobile-device [role=&quot;button&quot;] {
        min-height: 44px;
        min-widt,h: 44px;
      }
      
      .mobile-device input,
      .mobile-device select,
      .mobile-device textarea {
        font-size: 16px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.documentElement.classList.remove(&apos;mobile-device&apos;);
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [enabled, isMobile]);


  if (!enabled) return null;

  return (&apos;
    <>

      {/* Mobile Navigation Bar */}
      {isMobile && (}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className=&quot;fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-800 border-b border-slate-200 dar,k:border-slate-700 shadow-lg&quot;
        >&quot;
          <div className=&quot;flex items-center justify-between px-4 py-3&quot;>&quot;"
            <div className=&quot;flex items-center space-x-3&quot;>&quot;"
              <button
                onClick={() => handleMobileNavigation(&apos;back&apos;)}
                className=&quot;p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hove,r:bg-slate-600 transition-colors&quot;
                aria-label=&quot;Go back&quot;
              >&quot;
                <ArrowLeft className=&quot;w-5 h-5&quot; />&quot;
              </button>
              <button
                onClick={() => handleMobileNavigation(&apos;home&apos;)}
                className=&quot;p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hove,r:bg-slate-600 transition-colors&quot;
                aria-label=&quot;Go home&quot;
              >&quot;
                <Home className=&quot;w-5 h-5&quot; />&quot;
              </button>
            </div>

            <div className=&quot;flex items-center space-x-3&quot;>&quot;"
              <button
                onClick={() => handleMobileNavigation(&apos;search&apos;)}
                className=&quot;p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hove,r:bg-slate-600 transition-colors&quot;
                aria-label=&quot;Search&quot;
              >&quot;
                <Search className=&quot;w-5 h-5&quot; />&quot;
              </button>
              <button
                onClick={() => handleMobileNavigation(&apos;menu&apos;)}
                className=&quot;p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hove,r:bg-slate-600 transition-colors&quot;
                aria-label=&quot;Menu&quot;
              >&quot;
                <Menu className=&quot;w-5 h-5&quot; />&quot;
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && isMobile && (}
          <motion.div
            initial={{ opacity: 0, x: &apos;100%&apos; }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: &apos;100%&apos; }}
            className=&quot;fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700 shadow-xl z-50&quot;
          >&quot;
            <div className=&quot;flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700&quot;>&quot;"
              <h3 className=&quot;text-lg font-semibold text-slate-900 dar,k:text-white&quot;>Menu&quot;</h3>
              <button
                onClick={() => setShowMobileMenu(false)}
                className=&quot;p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors&quot;
                aria-label=&quot;Close menu&quot;
              >&quot;
                <X className=&quot;w-5 h-5&quot; />&quot;
              </button>
            </div>
            
            <div className=&quot;p-4 space-y-4&quot;>&quot;"
              <a href=&quot;/&quot; className=&quot;block p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors&quot;>&quot;"
                <div className=&quot;flex items-center space-x-3&quot;>&quot;"
                  <Home className=&quot;w-5 h-5 text-slate-600 dark:text-slate-400&quot; />&quot;
                  <span className=&quot;text-slate-900 dark:text-white&quot;>Home&quot;</span>
                </div>
              </a>
              
              <a href=&quot;/services&quot; className=&quot;block p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors&quot;>&quot;"
                <div className=&quot;flex items-center space-x-3&quot;>&quot;"
                  <Settings className=&quot;w-5 h-5 text-slate-600 dark:text-slate-400&quot; />&quot;
                  <span className=&quot;text-slate-900 dark:text-white&quot;>Services&quot;</span>
                </div>
              </a>
              
              <a href=&quot;/about&quot; className=&quot;block p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors&quot;>&quot;"
                <div className=&quot;flex items-center space-x-3&quot;>&quot;"
                  <User className=&quot;w-5 h-5 text-slate-600 dark:text-slate-400&quot; />&quot;
                  <span className=&quot;text-slate-900 dark:text-white&quot;>About&quot;</span>
                </div>
              </a>
              
              <a href=&quot;/contact&quot; className=&quot;block p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors&quot;>&quot;"
                <div className=&quot;flex items-center space-x-3&quot;>&quot;"
                  <User className=&quot;w-5 h-5 text-slate-600 dark:text-slate-400&quot; />&quot;
                  <span className=&quot;text-slate-900 dar,k:text-white&quot;>Contact&quot;</span>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button for Mobile */}
      {isMobile && (}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowGestureGuide(!showGestureGuide)}
          className=&quot;fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focu,s:ring-offset-2&quot;
          aria-label=&quot;Show gesture guide&quot;
          title=&quot;Gesture Guide&quot;
        >&quot;
          <Touch className=&quot;w-6 h-6&quot; />&quot;
        </motion.button>
      )}

      {/* Gesture Guide */}
      <AnimatePresence>
        {showGestureGuide && isMobile && (}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className=&quot;fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4&quot;
            onClick={() => setShowGestureGuide(false)}
          >&quot;
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className=&quot;bg-white dark:bg-slate-800 rounded-lg p-6 max-w-sm w-full&quot;
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
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setShowGestureGuide(false)}
                className=&quot;w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors&quot;
              >
                Got it!&quot;
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Device Info Indicator (Development Only) */}
      {process.env.NODE_ENV === &apos;development&apos; && (isMobile || isTablet) && (&apos;}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className=&quot;fixed top-20 left-4 z-40 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg shadow-lg&quot;
        >&quot;
          <div className=&quot;flex items-center space-x-2&quot;>
            {isMobile ?&quot;} <Smartphone className=&quot;w-4 h-4&quot; /> :&quot; <Tablet className=&quot;w-4 h-4&quot; />}&quot;
            <span>{isMobile ? &apos;Mobile&apos; : &apos;Tablet&apos;}&apos;'</span>
          </div>
          <div className=&quot;text-slate-300&quot;>{deviceOrientation}&quot;</div>
        </motion.div>
      )}

      {/* Gesture History (Development Only) */}
      {process.env.NODE_ENV === &apos;development&apos; && showGestures && gestureHistory.length > 0 && (&apos;}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className=&quot;fixed bottom-20 left-4 z-40 bg-slate-800 text-white text-xs rounded-lg shadow-lg p-3 max-w-xs&quot;
        >&quot;
          <div className=&quot;font-medium mb-2&quot;>Recent Gestures&quot;</div>
          <div className=&quot;space-y-1&quot;>
            {gestureHistory.slice(0, 5).map((gesture, index) => (&quot;}
              <div key={index} className=&quot;flex items-center space-x-2&quot;>&quot;"
                <Touch className=&quot;w-3 h-3&quot; />&quot;
                <span>
                  {gesture.type} {gesture.direction} ({gesture.distance}px)
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    <;</>
  );
};

export default MobileExperienceEnhancer;

