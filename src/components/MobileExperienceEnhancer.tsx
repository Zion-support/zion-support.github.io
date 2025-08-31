import React, { useEffect, useCallback, useState } from 'react';

interface MobileFeatures {
  touchOptimized: boolean;
  gestureSupport: boolean;
  mobileNavigation: boolean;
  performanceMode: boolean;
  offlineSupport: boolean;
}

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  showControls = false
}) => {
  const [features, setFeatures] = useState<MobileFeatures>({
    touchOptimized: true,
    gestureSupport: true,
    mobileNavigation: true,
    performanceMode: false,
    offlineSupport: true
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Detect mobile device
  const detectMobile = useCallback(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice = /mobile|android|iphone|ipad|phone|blackberry|opera mini|windows phone/i.test(userAgent);
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    setIsMobile(isMobileDevice || isTouchDevice);
  }, []);

  // Touch gesture support
  const enableGestureSupport = useCallback(() => {
    if (!features.gestureSupport) return;

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
          // Swipe right - go back
          if (window.history.length > 1) {
            window.history.back();
          }
        } else {
          // Swipe left - go forward
          window.history.forward();
        }
      }
      
      // Pull to refresh (simplified)
      if (deltaY > 100 && deltaTime < 500 && window.scrollY === 0) {
        window.location.reload();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [features.gestureSupport]);

  // Touch optimization
  const optimizeTouchInteractions = useCallback(() => {
    if (!features.touchOptimized) return;

    // Add touch-action CSS to prevent unwanted behaviors
    const style = document.createElement('style');
    style.textContent = `
      .touch-optimized {
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
      }
      
      .touch-optimized button,
      .touch-optimized a {
        min-height: 44px;
        min-width: 44px;
      }
      
      .touch-optimized input,
      .touch-optimized textarea {
        font-size: 16px; /* Prevents zoom on iOS */
      }
      
      .mobile-navigation {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: white;
        border-top: 1px solid #e5e7eb;
        z-index: 1000;
        padding: 0.5rem;
        display: none;
      }
      
      .mobile-navigation.show {
        display: block;
      }
      
      .mobile-navigation .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem;
        text-decoration: none;
        color: #6b7280;
        font-size: 0.75rem;
        transition: color 0.2s;
      }
      
      .mobile-navigation .nav-item.active {
        color: #3b82f6;
      }
      
      .mobile-navigation .nav-item svg {
        width: 1.5rem;
        height: 1.5rem;
        margin-bottom: 0.25rem;
      }
      
      @media (max-width: 768px) {
        .mobile-navigation {
          display: block;
        }
        
        .desktop-navigation {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);

    // Apply touch optimization classes
    document.body.classList.add('touch-optimized');

    return () => {
      document.head.removeChild(style);
      document.body.classList.remove('touch-optimized');
    };
  }, [features.touchOptimized]);

  // Mobile navigation
  const createMobileNavigation = useCallback(() => {
    if (!features.mobileNavigation || !isMobile) return;

    const mobileNav = document.createElement('nav');
    mobileNav.className = 'mobile-navigation';
    mobileNav.innerHTML = `
      <div class="flex justify-around">
        <a href="/" class="nav-item active" aria-label="Home">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          <span>Home</span>
        </a>
        <a href="/services" class="nav-item" aria-label="Services">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
          </svg>
          <span>Services</span>
        </a>
        <a href="/about" class="nav-item" aria-label="About">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>About</span>
        </a>
        <a href="/contact" class="nav-item" aria-label="Contact">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span>Contact</span>
        </a>
      </div>
    `;

    // Add click handlers
    const navItems = mobileNav.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
      });
    });

    document.body.appendChild(mobileNav);

    return () => {
      if (mobileNav.parentNode) {
        mobileNav.parentNode.removeChild(mobileNav);
      }
    };
  }, [features.mobileNavigation, isMobile]);

  // Performance mode for mobile
  const enablePerformanceMode = useCallback(() => {
    if (!features.performanceMode) return;

    // Reduce animations and effects on mobile
    const style = document.createElement('style');
    style.textContent = `
      .performance-mode * {
        animation-duration: 0.1s !important;
        transition-duration: 0.1s !important;
      }
      
      .performance-mode .futuristic-background {
        display: none;
      }
      
      .performance-mode .particle {
        display: none;
      }
    `;
    document.head.appendChild(style);

    document.body.classList.add('performance-mode');

    return () => {
      document.head.removeChild(style);
      document.body.classList.remove('performance-mode');
    };
  }, [features.performanceMode]);

  // Offline support
  const enableOfflineSupport = useCallback(() => {
    if (!features.offlineSupport) return;

    // Service Worker registration
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    }

    // Offline detection
    const handleOnline = () => {
      document.body.classList.remove('offline');
      // Show online notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50';
      notification.textContent = 'You are back online';
      document.body.appendChild(notification);
      setTimeout(() => notification.remove(), 3000);
    };

    const handleOffline = () => {
      document.body.classList.add('offline');
      // Show offline notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-50';
      notification.textContent = 'You are offline';
      document.body.appendChild(notification);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [features.offlineSupport]);

  // Toggle mobile features
  const toggleFeature = useCallback((feature: keyof MobileFeatures) => {
    setFeatures(prev => {
      const newFeatures = { ...prev, [feature]: !prev[feature] };
      localStorage.setItem('mobileFeatures', JSON.stringify(newFeatures));
      return newFeatures;
    });
  }, []);

  // Initialize mobile features
  useEffect(() => {
    if (!enabled) return;

    detectMobile();
    
    // Load saved preferences
    const savedFeatures = localStorage.getItem('mobileFeatures');
    if (savedFeatures) {
      const parsed = JSON.parse(savedFeatures);
      setFeatures(parsed);
    }

    // Enable features based on preferences
    const cleanupFunctions: (() => void)[] = [];

    if (features.gestureSupport) {
      cleanupFunctions.push(enableGestureSupport());
    }
    
    if (features.touchOptimized) {
      cleanupFunctions.push(optimizeTouchInteractions());
    }
    
    if (features.mobileNavigation) {
      cleanupFunctions.push(createMobileNavigation());
    }
    
    if (features.performanceMode) {
      cleanupFunctions.push(enablePerformanceMode());
    }
    
    if (features.offlineSupport) {
      cleanupFunctions.push(enableOfflineSupport());
    }

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup?.());
    };
  }, [
    enabled,
    features.gestureSupport,
    features.touchOptimized,
    features.mobileNavigation,
    features.performanceMode,
    features.offlineSupport,
    detectMobile,
    enableGestureSupport,
    optimizeTouchInteractions,
    createMobileNavigation,
    enablePerformanceMode,
    enableOfflineSupport
  ]);

  if (!enabled) return null;

  return (
    <>
      {/* Mobile Controls */}
      {showControls && isMobile && (
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Mobile experience controls"
            aria-expanded={isVisible}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </button>

          {isVisible && (
            <div className="absolute top-12 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border border-gray-200 dark:border-gray-700 min-w-64">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Mobile Experience
              </h3>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={features.touchOptimized}
                    onChange={() => toggleFeature('touchOptimized')}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Touch Optimized</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={features.gestureSupport}
                    onChange={() => toggleFeature('gestureSupport')}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Gesture Support</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={features.mobileNavigation}
                    onChange={() => toggleFeature('mobileNavigation')}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Mobile Navigation</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={features.performanceMode}
                    onChange={() => toggleFeature('performanceMode')}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Performance Mode</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={features.offlineSupport}
                    onChange={() => toggleFeature('offlineSupport')}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Offline Support</span>
                </label>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Device: {isMobile ? 'Mobile' : 'Desktop'}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Touch: {'ontouchstart' in window ? 'Supported' : 'Not Supported'}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};