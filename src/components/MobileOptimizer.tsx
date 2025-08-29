import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Tablet, Monitor, Wifi, Battery, Signal } from 'lucide-react';

interface MobileOptimizerProps {
  enableTouchOptimization?: boolean;
  enableMobileGestures?: boolean;
  enableResponsiveImages?: boolean;
  enableMobileNavigation?: boolean;
}

export const MobileOptimizer: React.FC<MobileOptimizerProps> = ({
  enableTouchOptimization = true,
  enableMobileGestures = true,
  enableResponsiveImages = true,
  enableMobileNavigation = true
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [touchSupported, setTouchSupported] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Detect device type and capabilities
  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /mobile|android|iphone|ipad|phone|blackberry|opera mini|windows phone/i.test(userAgent);
      const isTabletDevice = /tablet|ipad/i.test(userAgent);
      
      setIsMobile(isMobileDevice && !isTabletDevice);
      setIsTablet(isTabletDevice);
      setTouchSupported('ontouchstart' in window || navigator.maxTouchPoints > 0);
      
      // Add device-specific classes to body
      document.body.classList.toggle('mobile-device', isMobileDevice);
      document.body.classList.toggle('tablet-device', isTabletDevice);
      document.body.classList.toggle('touch-device', touchSupported);
    };

    const checkOrientation = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
      document.body.classList.toggle('portrait', window.innerHeight > window.innerWidth);
      document.body.classList.toggle('landscape', window.innerWidth > window.innerHeight);
    };

    checkDevice();
    checkOrientation();

    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, [touchSupported]);

  // Touch optimization
  useEffect(() => {
    if (!enableTouchOptimization || !touchSupported) return;

    // Add touch-action CSS properties
    const style = document.createElement('style');
    style.textContent = `
      .touch-optimized {
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
      }
      
      .touch-optimized:active {
        transform: scale(0.98);
      }
      
      .touch-scroll {
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);

    // Apply touch optimization to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach(el => {
      el.classList.add('touch-optimized');
    });

    return () => {
      document.head.removeChild(style);
      interactiveElements.forEach(el => {
        el.classList.remove('touch-optimized');
      });
    };
  }, [enableTouchOptimization, touchSupported]);

  // Mobile gestures
  useEffect(() => {
    if (!enableMobileGestures || !touchSupported) return;

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
      if (deltaTime < 300 && Math.abs(deltaX) > 50 && Math.abs(deltaY) < 100) {
        if (deltaX > 0) {
          // Swipe right - could trigger back navigation
          console.log('Swipe right detected');
        } else {
          // Swipe left - could trigger forward navigation
          console.log('Swipe left detected');
        }
      }
      
      // Pull to refresh detection
      if (deltaY > 100 && deltaTime > 500 && window.scrollY === 0) {
        console.log('Pull to refresh detected');
        // Implement pull to refresh logic here
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enableMobileGestures, touchSupported]);

  // Responsive images
  useEffect(() => {
    if (!enableResponsiveImages) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add responsive image classes
      if (isMobile) {
        img.classList.add('mobile-optimized');
      } else if (isTablet) {
        img.classList.add('tablet-optimized');
      } else {
        img.classList.add('desktop-optimized');
      }
    });

    // Add responsive image CSS
    const style = document.createElement('style');
    style.textContent = `
      .mobile-optimized {
        max-width: 100%;
        height: auto;
        object-fit: cover;
      }
      
      .tablet-optimized {
        max-width: 100%;
        height: auto;
      }
      
      .desktop-optimized {
        max-width: 100%;
        height: auto;
      }
      
      @media (max-width: 768px) {
        img {
          max-width: 100% !important;
          height: auto !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [enableResponsiveImages, isMobile, isTablet]);

  // Mobile navigation
  useEffect(() => {
    if (!enableMobileNavigation) return;

    // Create mobile navigation toggle
    const navToggle = document.createElement('button');
    navToggle.className = 'mobile-nav-toggle fixed top-4 left-4 z-50 p-3 bg-cyan-600 text-white rounded-lg shadow-lg md:hidden';
    navToggle.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
    navToggle.setAttribute('aria-label', 'Toggle mobile navigation');
    
    navToggle.addEventListener('click', () => {
      setShowMobileMenu(!showMobileMenu);
    });

    document.body.appendChild(navToggle);

    return () => {
      if (document.body.contains(navToggle)) {
        document.body.removeChild(navToggle);
      }
    };
  }, [enableMobileNavigation, showMobileMenu]);

  // Device status indicator (for development)
  const DeviceStatus = () => (
    <div className="fixed bottom-4 left-4 z-50 bg-slate-900/90 backdrop-blur-lg border border-cyan-400/30 rounded-lg p-3 text-xs text-white">
      <div className="flex items-center gap-2 mb-2">
        {isMobile ? <Smartphone className="w-4 h-4" /> : isTablet ? <Tablet className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
        <span className="font-medium">
          {isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'}
        </span>
      </div>
      <div className="space-y-1 text-slate-300">
        <div className="flex items-center gap-2">
          <Signal className="w-3 h-3" />
          <span>{orientation}</span>
        </div>
        <div className="flex items-center gap-2">
          <Wifi className="w-3 h-3" />
          <span>{touchSupported ? 'Touch' : 'No Touch'}</span>
        </div>
        <div className="flex items-center gap-2">
          <Battery className="w-3 h-3" />
          <span>{window.innerWidth}×{window.innerHeight}</span>
        </div>
      </div>
    </div>
  );

  // Mobile menu overlay
  const MobileMenu = () => (
    <AnimatePresence>
      {showMobileMenu && (
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowMobileMenu(false)}
          />
          
          {/* Menu */}
          <motion.div 
            className="absolute left-0 top-0 h-full w-80 bg-slate-900 border-r border-cyan-400/30"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-cyan-400">Menu</h2>
                <button
                  onClick={() => setShowMobileMenu(false)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              
              <nav className="space-y-4">
                <a href="/" className="block text-slate-300 hover:text-cyan-400 transition-colors">Home</a>
                <a href="/services" className="block text-slate-300 hover:text-cyan-400 transition-colors">Services</a>
                <a href="/about" className="block text-slate-300 hover:text-cyan-400 transition-colors">About</a>
                <a href="/contact" className="block text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
              </nav>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Mobile Menu */}
      <MobileMenu />
      
      {/* Device Status (development only) */}
      {process.env.NODE_ENV === 'development' && <DeviceStatus />}
      
      {/* Mobile-specific CSS variables */}
      <style>
        {`
          :root {
            --mobile-safe-area-top: ${isMobile ? 'env(safe-area-inset-top)' : '0px'};
            --mobile-safe-area-bottom: ${isMobile ? 'env(safe-area-inset-bottom)' : '0px'};
            --mobile-safe-area-left: ${isMobile ? 'env(safe-area-inset-left)' : '0px'};
            --mobile-safe-area-right: ${isMobile ? 'env(safe-area-inset-right)' : '0px'};
          }
          
          .mobile-device {
            padding-top: var(--mobile-safe-area-top);
            padding-bottom: var(--mobile-safe-area-bottom);
            padding-left: var(--mobile-safe-area-left);
            padding-right: var(--mobile-safe-area-right);
          }
          
          @media (max-width: 768px) {
            .mobile-optimized-layout {
              padding: 1rem;
              margin: 0;
            }
            
            .mobile-optimized-text {
              font-size: 1rem;
              line-height: 1.5;
            }
            
            .mobile-optimized-button {
              min-height: 44px;
              padding: 0.75rem 1rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default MobileOptimizer;