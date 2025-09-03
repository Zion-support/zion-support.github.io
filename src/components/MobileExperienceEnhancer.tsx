
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';""
=======
import React, { useEffect, useState, useCallback } from 'react
>>>>>>> main
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, Tablet, 
  Monitor, Touch, 
  Gesture, Swipe, 
  Pinch, Rotate,
  X, Menu,
  Home, Search,
  User, Settings,
  ArrowUp, ArrowDown,
<<<<<<< HEAD
  ArrowLeft, ArrowRight;", "
} from 'lucide-react';
interface TouchGesture {""
  type: 'swipe' | 'pinch' | 'rotate' | 'tap' | 'longpress';""
=======
<<<<<<< HEAD
  ArrowLeft, ArrowRight
=======
  ArrowLeft, ArrowRight;",
>>>>>>> main
} from 'lucide-react';
interface TouchGesture {"
  type: 'swipe' | 'pinch' | 'rotate' | 'tap' | 'longpress
>>>>>>> main
  direction?: 'up' | 'down' | 'left' | 'right';
>>>>>>> main
  distance?: number;
  duration?: number}

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  showGestures?: boolean;
<<<<<<< HEAD
  enableSwipeNavigation?: boolean;
}&apos;&apos;
=======
  enableSwipeNavigation?: boolean}
>>>>>>> main

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true, showGestures = false,
<<<<<<< HEAD
  enableSwipeNavigation = true, }) => {
  const [isMobile, setIsMobile] = useState(false);""
  const [isTablet, setIsTablet] = useState(false);""
=======
<<<<<<< HEAD
  enableSwipeNavigation = true
<<<<<<< HEAD
}) => {}
  const;const;const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [deviceOrientation, setDeviceOrientation] = useState<;<;<&apos;portrait&apos; | &apos;landscape&apos;>(&apos;portrait&apos;);&apos;
  const [touchStart, setTouchStart] = useState<;<;<{ x: number; y: number; tim,e: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<;<;<{ x: number; y: number; tim,e: number } | null>(null);
  const [gestureHistory, setGestureHistory] = useState<;<;<TouchGesture[]>([]);
=======
=======
  enableSwipeNavigation = true,
>>>>>>> main
}) => {
  const [isMobile, setIsMobile] = useState(false);"
  const [isTablet, setIsTablet] = useState(false);"
>>>>>>> main
  const [deviceOrientation, setDeviceOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [touchStart, setTouchStart] = useState<{ x: number; y: number; time: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number; time: number } | null>(null);""
  const [gestureHistory, setGestureHistory] = useState<TouchGesture []"" >([]);
>>>>>>> main
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
<<<<<<< HEAD
      if (window.innerHeight > window.innerWidth) {
        setDeviceOrientation(&apos;portrait&apos;);
      } else {
        setDeviceOrientation(&apos;landscape&apos;);
      }
    };&apos;

=======
      if (window.innerHeight > window.innerWidth) {""
        setDeviceOrientation('portrait');, } else {""
        setDeviceOrientation('landscape');, }
    };
>>>>>>> main
    const handleResize = () => {
      checkDevice();, };
    const handleOrientationChange = () => {
      setTimeout(() => {
<<<<<<< HEAD
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
=======
        if (window.innerHeight > window.innerWidth) {""
          setDeviceOrientation('portrait');, } else {""
          setDeviceOrientation('landscape');, }
      }, 100);, };
    checkDevice();""
    window.addEventListener('resize', handleResize);""
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => {""
      window.removeEventListener('resize', handleResize);""
      window.removeEventListener('orientationchange', handleOrientationChange);, };, }, []);
  // Touch gesture handling
  useEffect(() => {

    if (!enabled || !enableSwipeNavigation) return;
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
>>>>>>> main
      setTouchStart({
        x: touch.clientX, y: touch.clientY,
<<<<<<< HEAD
        time: Date.now(), });, };
=======
<<<<<<< HEAD
        time: Date.now()
      });
    };

=======
        time: Date.now(),
});,
};
>>>>>>> main
>>>>>>> main
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();, };
    const handleTouchEnd = (e: TouchEvent) => {
<<<<<<< HEAD
      if (!touchStart) return;}

=======
      if (!touchStart) return;
>>>>>>> main
      const touch = e.changedTouches[0];
      const touchEndData = {
        x: touch.clientX, y: touch.clientY,
<<<<<<< HEAD
        time: Date.now(), };
=======
<<<<<<< HEAD
        time: Date.now()
      };
=======
        time: Date.now(),
};
>>>>>>> main
>>>>>>> main
      setTouchEnd(touchEndData);
      // Calculate gesture
      const deltaX = touchEndData.x - touchStart.x;
      const deltaY = touchEndData.y - touchStart.y;
      const deltaTime = touchEndData.time - touchStart.time;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      // Minimum distance and time for gesture recognition
<<<<<<< HEAD
      if (distance > 50 && deltaTime < 500) {}
        const gesture: TouchGesture = {
          typ,e: &apos;swipe&apos;,
          distance,
=======
      if (distance > 50 && deltaTime < 500) {
<<<<<<< HEAD
        const gesture: TouchGesture = {""
          type: 'swipe', distance,
          duration: deltaTime, };
        if (Math.abs(deltaX) > Math.abs(deltaY)) {""
          // Horizontal swipe""
=======
<<<<<<< HEAD
        const gesture: TouchGesture = {
          type: 'swipe', distance,
>>>>>>> main
          duration: deltaTime
        };

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          // Horizontal swipe
<<<<<<< HEAD
          gesture.direction = deltaX > 0 ? &apos;right&apos; : &apos;left';
          
          // Handle horizontal navigation
          if (gesture.direction === &apos;left&apos;) {
            // Swipe left - go forward
            if (window.history.length > 1) {
              window.history.forward();
            }
          } else if (gesture.direction === &apos;right&apos;) {
=======
=======
        const gesture: TouchGesture = {"
          type: 'swipe', distance,
          duration: deltaTime,
};
        if (Math.abs(deltaX) > Math.abs(deltaY)) {"
          // Horizontal swipe"
>>>>>>> main
>>>>>>> main
          gesture.direction = deltaX > 0 ? 'right' : 'left';
          // Handle horizontal navigation""
          if (gesture.direction === 'left') {
            // Swipe left - go forward
<<<<<<< HEAD
            if (window.history.length > 1) {""
              window.history.forward()}", ",
=======
            if (window.history.length > 1) {"
              window.history.forward()},,
>>>>>>> main
} else if (gesture.direction === 'right') {
>>>>>>> main
            // Swipe right - go back
            if (window.history.length > 1) {
              window.history.back()}
          }
<<<<<<< HEAD
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
=======
        } else {""
          // Vertical swipe""
          gesture.direction = deltaY > 0 ? 'down' : 'up';
          // Handle vertical gestures""
          if (gesture.direction === 'up' && distance > 100) {""
            // Swipe up - scroll to top""
            window.scrollTo({ top: 0, behavior: 'smooth' })} else if (gesture.direction === 'down' && distance > 100) {""
            // Swipe down - scroll to bottom""
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
>>>>>>> main
        }

        // Add to gesture history
        setGestureHistory(prev => [gesture, ...prev.slice(0, 9)]);
<<<<<<< HEAD
        // Log gesture for debugging, }
=======
<<<<<<< HEAD
        
<<<<<<< HEAD
        // Log gesture for debugging
        console.log(&apos;Touch Gesture:&apos;, gesture);
=======
        // Log gesture for debugging (removed console.log for production)
>>>>>>> main
      }
=======
        // Log gesture for debugging,
}
>>>>>>> main
>>>>>>> main

      setTouchStart(null);
<<<<<<< HEAD
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
=======
      setTouchEnd(null);, };""
    document.addEventListener('touchstart', handleTouchStart, { passive: false });""
    document.addEventListener('touchmove', handleTouchMove, { passive: false });""
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
    return () => {""
      document.removeEventListener('touchstart', handleTouchStart);""
      document.removeEventListener('touchmove', handleTouchMove);""
      document.removeEventListener('touchend', handleTouchEnd);, };, }, [enabled, enableSwipeNavigation, touchStart]);
  // Enhanced mobile navigation
>>>>>>> main
  const handleMobileNavigation = useCallback((action: string) => {
<<<<<<< HEAD
    switch (action) {""
=======
<<<<<<< HEAD
    switch (action) {
<<<<<<< HEAD
      case &apos;home&apos;:
        window.location.href = &apos;/';
        break;
      case &apos;search&apos;:
        // Trigger search&apos;}}&apos; functionality
        const searchInput = document.querySelector(&apos;input[type=&quot;search&quot;]&apos;) as HTMLInputElement;
=======
      case 'home': window.location.href = '/';
        break;
      case 'search': // Trigger search functionality
        const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
>>>>>>> main
        if (searchInput) {
          searchInput.focus();
        }
        break;
<<<<<<< HEAD
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
=======
      case 'menu': setShowMobileMenu(!showMobileMenu);
        break;
      case 'back': if (window.history.length > 1) {
          window.history.back();
        }
        break;
      case 'forward': if (window.history.length > 1) {
>>>>>>> main
          window.history.forward();
        }
        break;
    }
=======
    switch (action) {"
>>>>>>> main
      case 'home': window.location.href = '/';
        break;""
      case 'search': // Trigger search functionality""
        const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();, }
        break;""
      case 'menu': setShowMobileMenu(!showMobileMenu);
        break;""
      case 'back': if (window.history.length > 1) {
          window.history.back();, }
        break;""
      case 'forward': if (window.history.length > 1) {
<<<<<<< HEAD
          window.history.forward();, }
        break;, }
=======
          window.history.forward();,
}
        break;,
}
>>>>>>> main
>>>>>>> main
  }, [showMobileMenu]);
  // Mobile-specific optimizations
  useEffect(() => {
    if (!enabled || !isMobile) return;
<<<<<<< HEAD

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
=======
    // Add mobile-specific CSS classes""
    document.documentElement.classList.add('mobile-device');
<<<<<<< HEAD
    // Optimize viewport for mobile""
    const viewport = document.querySelector('meta[name="viewport"]');""
    if (viewport) {""
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')}
""
    // Add touch-action CSS for better touch handling""
=======
    // Optimize viewport for mobile"
    const viewport = document.querySelector('meta[name="viewport"]');"
    if (viewport) {"
      viewport.setAttribute('content,width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')}
"
    // Add touch-action CSS for better touch handling"
>>>>>>> main
    const style = document.createElement('style');
    style.textContent = `
      .mobile-device * {
        touch-action: manipulation;
<<<<<<< HEAD
        -webkit-tap-highlight-color: transparent;
      }
      
=======
        -webkit-tap-highlight-color: transparent}
<<<<<<< HEAD
      ""
=======
      "
>>>>>>> main
>>>>>>> main
      .mobile-device button, .mobile-device [role="button"] {
        min-height: 44px;
        min-width: 44px}
>>>>>>> main
      
      .mobile-device input, .mobile-device select,
<<<<<<< HEAD
      .mobile-device textarea {
        font-size: 16px;
      }
=======
      .mobile-device textarea {`
        font-size: 16px}`
>>>>>>> main
    `;
    document.head.appendChild(style);
<<<<<<< HEAD

    return () => {
      document.documentElement.classList.remove(&apos;mobile-device&apos;);
=======
    return () => {""
      document.documentElement.classList.remove('mobile-device');
>>>>>>> main
      if (style.parentNode) {
        style.parentNode.removeChild(style)}
    }
  }, [enabled, isMobile]);
  if (!enabled) return null;
<<<<<<< HEAD

  return (&apos;
=======
  return (
>>>>>>> main
    <>
      {/* Mobile Navigation Bar */}
<<<<<<< HEAD
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
=======
      {isMobile && (
        <motion .div
<<<<<<< HEAD
          initial={{ y: -100 }}""
          animate={{ y: 0 }}""
          className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-lg""" >""
          <div className="flex items-center justify-between px-4 py-3">""
            <div className="flex items-center space-x-3">
              <button ""
=======
          initial={{ y: -100 }}"
          animate={{ y: 0 }}"
          className='fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-lg' >"
          <div className="flex items-center justify-between px-4 py-3">"
            <div className="flex items-center space-x-3">
<<<<<<< HEAD
              <button
                onClick={() => handleMobileNavigation('back')}
=======
              <button "
>>>>>>> main
                onClick={() =" > handleMobileNavigation('back')}"
>>>>>>> main
                className="p-2 rounded-lg bg-slate-100 dark: bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Go back"
              >""
                <ArrowLeft className="w-5 h-5" /"" >
>>>>>>> main
              </button>
<<<<<<< HEAD
              <button ""
=======
<<<<<<< HEAD
              <button
<<<<<<< HEAD
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
=======
                onClick={() => handleMobileNavigation('home')}
=======
              <button "
>>>>>>> main
                onClick={() =" > handleMobileNavigation('home')}"
>>>>>>> main
                className="p-2 rounded-lg bg-slate-100 dark: bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Go home"
              >""
                <Home className="w-5 h-5" /"" >
              </button>
            </div>""
""
            <div className="flex items-center space-x-3">
<<<<<<< HEAD
              <button ""
=======
<<<<<<< HEAD
              <button
                onClick={() => handleMobileNavigation('search')}
=======
              <button "
>>>>>>> main
                onClick={() =" > handleMobileNavigation('search')}"
>>>>>>> main
                className="p-2 rounded-lg bg-slate-100 dark: bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Search"
              >""
                <Search className="w-5 h-5" /"" >
>>>>>>> main
              </button>
<<<<<<< HEAD
              <button ""
=======
<<<<<<< HEAD
              <button
<<<<<<< HEAD
                onClick={() => handleMobileNavigation(&apos;menu&apos;)}
                className=&quot;p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hove,r:bg-slate-600 transition-colors&quot;
                aria-label=&quot;Menu&quot;
              >&quot;
                <Menu className=&quot;w-5 h-5&quot; />&quot;
=======
                onClick={() => handleMobileNavigation('menu')}
=======
              <button "
>>>>>>> main
                onClick={() =" > handleMobileNavigation('menu')}"
>>>>>>> main
                className="p-2 rounded-lg bg-slate-100 dark: bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Menu"
              >""
                <Menu className="w-5 h-5" /"" >
>>>>>>> main
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        {showMobileMenu && isMobile && (""
          <motion .div""
            initial={{ opacity: 0, x: '100%' }}""
            animate={{ opacity: 1, x: 0 }}""
            exit={{ opacity: 0, x: '100%' }}""
            className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700 shadow-xl z-50""" >""
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">""
=======
        {showMobileMenu && isMobile && ("
          <motion .div"
            initial={{ opacity: 0, x: '100%' }}"
            animate={{ opacity: 1, x: 0 }}"
            exit={{ opacity: 0, x: '100%' }}"
            className='fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700 shadow-xl z-50' >"
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">"
>>>>>>> main
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Menu</h3>
<<<<<<< HEAD
              <button
                onClick={() => setShowMobileMenu(false)}
=======
              <button onClick={() =" > setShowMobileMenu(false)}"
>>>>>>> main
                className="p-2 rounded-lg bg-slate-100 dark: bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label="Close menu"
              >""
                <X className="w-5 h-5" /"" >
              </button>
            </div>""
            ""
            <div className="p-4 space-y-4">""
              <a href="/" className="block p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">""
                <div className="flex items-center space-x-3">""
                  <Home className="w-5 h-5 text-slate-600 dark:text-slate-400" /"" >""
                  <span className="text-slate-900 dark:text-white">Home</span>
                </div>
              </a>""
              ""
              <a href="/services" className="block p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">""
                <div className="flex items-center space-x-3">""
                  <Settings className="w-5 h-5 text-slate-600 dark:text-slate-400" /"" >""
                  <span className="text-slate-900 dark:text-white">Services</span>
                </div>
              </a>""
              ""
              <a href="/about" className="block p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">""
                <div className="flex items-center space-x-3">""
                  <User className="w-5 h-5 text-slate-600 dark:text-slate-400" /"" >""
                  <span className="text-slate-900 dark:text-white">About</span>
                </div>
              </a>""
              ""
              <a href="/contact" className="block p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">""
                <div className="flex items-center space-x-3">""
                  <User className="w-5 h-5 text-slate-600 dark:text-slate-400" /"" >""
                  <span className="text-slate-900 dark:text-white">Contact</span>
>>>>>>> main
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button for Mobile */}
<<<<<<< HEAD
      {isMobile && (}
        <motion.button
=======
      {isMobile && (
        <motion .button
>>>>>>> main
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
<<<<<<< HEAD
          onClick={() => setShowGestureGuide(!showGestureGuide)}
<<<<<<< HEAD
          className=&quot;fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focu,s:ring-offset-2&quot;
          aria-label=&quot;Show gesture guide&quot;
          title=&quot;Gesture Guide&quot;
        >&quot;
          <Touch className=&quot;w-6 h-6&quot; />&quot;
=======
=======
          onClick={() =" > setShowGestureGuide(!showGestureGuide)}"
>>>>>>> main
          className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover: bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          aria-label="Show gesture guide"
          title="Gesture Guide"
        >""
          <Touch className="w-6 h-6" /"" >
>>>>>>> main
        </motion.button>
      )}

      {/* Gesture Guide */}
      <AnimatePresence>
<<<<<<< HEAD
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
=======
        {showGestureGuide && isMobile && (
          <motion .div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}""
            exit={{ opacity: 0, scale: 0.9 }}""
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() ="" > setShowGestureGuide(false)}
          >
            <motion .div
              initial={{ y: 20 }}""
              animate={{ y: 0 }}""
              className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-sm w-full"
<<<<<<< HEAD
              onClick={(e) =" > e.stopPropagation()}"
            >""
              <div className="text-center mb-6">""
                <Touch className="w-12 h-12 text-blue-600 mx-auto mb-3" /" >"
                <h3 className="text-lg font-semibold text-slate-900 dark: text-white">Touch Gestures</h3>""
=======
<<<<<<< HEAD
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <Touch className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-slate-900 dark: text-white">Touch Gestures</h3>
=======
              onClick={(e) =" > e.stopPropagation()}
            >"
              <div className="text-center mb-6">"
                <Touch className="w-12 h-12 text-blue-600 mx-auto mb-3" /" >"
                <h3 className="text-lg font-semibold text-slate-900 dark: text-white">Touch Gestures</h3>"
>>>>>>> main
>>>>>>> main
                <p className="text-sm text-slate-600 dark:text-slate-400">Learn how to navigate with touch</p>
              </div>""
              ""
              <div className="space-y-4">""
                <div className="flex items-center space-x-3">""
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">""
                    <ArrowLeft className="w-5 h-5 text-blue-600" /"" >
                  </div>""
                  <div>""
                    <div className="text-sm font-medium text-slate-900 dark:text-white">Swipe Right</div>""
                    <div className="text-xs text-slate-600 dark:text-slate-400">Go back</div>
                  </div>
                </div>""
                ""
                <div className="flex items-center space-x-3">""
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">""
                    <ArrowRight className="w-5 h-5 text-blue-600" /"" >
                  </div>""
                  <div>""
                    <div className="text-sm font-medium text-slate-900 dark:text-white">Swipe Left</div>""
                    <div className="text-xs text-slate-600 dark:text-slate-400">Go forward</div>
                  </div>
                </div>""
                ""
                <div className="flex items-center space-x-3">""
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">""
                    <ArrowUp className="w-5 h-5 text-blue-600" /"" >
                  </div>""
                  <div>""
                    <div className="text-sm font-medium text-slate-900 dark:text-white">Swipe Up</div>""
                    <div className="text-xs text-slate-600 dark:text-slate-400">Scroll to top</div>
                  </div>
                </div>""
                ""
                <div className="flex items-center space-x-3">""
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">""
                    <ArrowDown className="w-5 h-5 text-blue-600" /"" >
                  </div>""
                  <div>""
                    <div className="text-sm font-medium text-slate-900 dark:text-white">Swipe Down</div>""
                    <div className="text-xs text-slate-600 dark:text-slate-400">Scroll to bottom</div>
>>>>>>> main
                  </div>
                </div>
              </div>
              
<<<<<<< HEAD
              <button
                onClick={() => setShowGestureGuide(false)}
<<<<<<< HEAD
                className=&quot;w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors&quot;
=======
=======
              <button onClick={() =" > setShowGestureGuide(false)}"
>>>>>>> main
                className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors"
>>>>>>> main
              >
                Got it!&quot;
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

<<<<<<< HEAD

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
=======
""
      {/* Device Info Indicator (Development Only) */}""
      {process.env.NODE_ENV === 'development' && (isMobile || isTablet) && (
        <motion .div
<<<<<<< HEAD
          initial={{ opacity: 0, x: -100 }}""
          animate={{ opacity: 1, x: 0 }}""
          className="fixed top-20 left-4 z-40 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg shadow-lg""" >""
          <div className="flex items-center space-x-2">""
            {isMobile ? <Smartphone className="w-4 h-4" /"" > : <Tablet className="w-4 h-4" /"" >}""
            <span>{isMobile ? 'Mobile' : 'Tablet'}</span>""
          </div>""
=======
          initial={{ opacity: 0, x: -100 }}"
          animate={{ opacity: 1, x: 0 }}"
          className='fixed top-20 left-4 z-40 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg shadow-lg' >"
          <div className="flex items-center space-x-2">"
            {isMobile ? <Smartphone className="w-4 h-4" /"" > : <Tablet className="w-4 h-4" /"" >}"
            <span>{isMobile ? 'Mobile' : 'Tablet'}</span>"
          </div>"
>>>>>>> main
          <div className="text-slate-300">{deviceOrientation}</div>
        </motion.div>
      )}
""
      {/* Gesture History (Development Only) */}""
      {process.env.NODE_ENV === 'development' && showGestures && gestureHistory.length > 0 && (
        <motion .div
<<<<<<< HEAD
          initial={{ opacity: 0, y: 100 }}""
          animate={{ opacity: 1, y: 0 }}""
          className="fixed bottom-20 left-4 z-40 bg-slate-800 text-white text-xs rounded-lg shadow-lg p-3 max-w-xs""" >""
          <div className="font-medium mb-2">Recent Gestures</div>""
          <div className="space-y-1">""
            {gestureHistory.slice(0, 5).map((gesture, index) => (""
              <div key={index} className="flex items-center space-x-2">""
=======
          initial={{ opacity: 0, y: 100 }}"
          animate={{ opacity: 1, y: 0 }}"
          className='fixed bottom-20 left-4 z-40 bg-slate-800 text-white text-xs rounded-lg shadow-lg p-3 max-w-xs' >"
          <div className="font-medium mb-2">Recent Gestures</div>"
          <div className="space-y-1">"
            {gestureHistory.slice(0, 5).map((gesture, index) => ("
              <div key={index} className="flex items-center space-x-2">"
>>>>>>> main
                <Touch className="w-3 h-3" /"" >
>>>>>>> main
                <span>
                  {gesture.type} {gesture.direction} ({gesture.distance}px)
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
<<<<<<< HEAD
    <;</>
=======
</>
<<<<<<< HEAD
  );, };
export default MobileExperienceEnhancer;"`"
=======
<<<<<<< HEAD
>>>>>>> main
  );
=======
  );,
>>>>>>> main
};
export default MobileExperienceEnhancer;"`
>>>>>>> main
