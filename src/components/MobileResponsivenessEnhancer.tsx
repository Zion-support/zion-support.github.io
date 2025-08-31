import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface MobileResponsivenessEnhancerProps {
  enabled?: boolean;
  showMobileIndicator?: boolean;
  enableTouchGestures?: boolean;
  enableMobileOptimizations?: boolean;
}

export const MobileResponsivenessEnhancer: React.FC<MobileResponsivenessEnhancerProps> = ({
  enabled = true,
  showMobileIndicator = false,
  enableTouchGestures = true,
  enableMobileOptimizations = true
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [touchSupported, setTouchSupported] = useState(false);
  const [isEnhancing, setIsEnhancing] = useState(false);

  // Detect mobile device
  const detectMobile = useCallback(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice = /mobile|android|iphone|ipad|phone|blackberry|opera mini|windows phone/i.test(userAgent);
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    setIsMobile(isMobileDevice || isTouchDevice);
    setTouchSupported(isTouchDevice);
  }, []);

  // Detect orientation changes
  const detectOrientation = useCallback(() => {
    if (window.innerHeight > window.innerWidth) {
      setOrientation('portrait');
    } else {
      setOrientation('landscape');
    }
  }, []);

  // Mobile-specific optimizations
  const applyMobileOptimizations = useCallback(() => {
    if (!enableMobileOptimizations || !isMobile) return;

    // Add mobile-specific CSS classes
    document.body.classList.add('mobile-device');
    if (orientation === 'portrait') {
      document.body.classList.add('mobile-portrait');
    } else {
      document.body.classList.add('mobile-landscape');
    }

    // Optimize images for mobile
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img instanceof HTMLImageElement) {
        // Add mobile-specific image sizes
        if (orientation === 'portrait') {
          img.style.maxWidth = '100%';
          img.style.height = 'auto';
        }
        
        // Add lazy loading for mobile
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
      }
    });

    // Optimize fonts for mobile
    const root = document.documentElement;
    if (isMobile) {
      root.style.setProperty('--font-size-base', '16px');
      root.style.setProperty('--line-height-base', '1.5');
    }

    // Add mobile-specific spacing
    const containers = document.querySelectorAll('.container, .section, .card');
    containers.forEach(container => {
      if (container instanceof HTMLElement) {
        if (isMobile) {
          container.style.padding = '1rem';
          container.style.margin = '0.5rem 0';
        }
      }
    });
  }, [enableMobileOptimizations, isMobile, orientation]);

  // Touch gesture enhancements
  const enhanceTouchGestures = useCallback(() => {
    if (!enableTouchGestures || !touchSupported) return;

    let startX = 0;
    let startY = 0;
    let startTime = 0;

    // Swipe detection
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
      
      // Minimum swipe distance and time
      const minDistance = 50;
      const maxTime = 500;
      
      if (deltaTime < maxTime) {
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minDistance) {
          // Horizontal swipe
          if (deltaX > 0) {
            handleSwipeRight();
          } else {
            handleSwipeLeft();
          }
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > minDistance) {
          // Vertical swipe
          if (deltaY > 0) {
            handleSwipeDown();
          } else {
            handleSwipeUp();
          }
        }
      }
    };

    // Swipe handlers
    const handleSwipeRight = () => {
      // Navigate back or previous
      if (window.history.length > 1) {
        window.history.back();
      }
    };

    const handleSwipeLeft = () => {
      // Navigate forward or next
      // This could open a menu or navigate to next section
      const nextButton = document.querySelector('[data-next-section]') as HTMLElement;
      if (nextButton) {
        nextButton.click();
      }
    };

    const handleSwipeUp = () => {
      // Scroll to top or expand content
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSwipeDown = () => {
      // Refresh or collapse content
      const refreshButton = document.querySelector('[data-refresh]') as HTMLElement;
      if (refreshButton) {
        refreshButton.click();
      }
    };

    // Add touch event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enableTouchGestures, touchSupported]);

  // Mobile navigation enhancements
  const enhanceMobileNavigation = useCallback(() => {
    if (!isMobile) return;

    // Add mobile menu toggle
    const header = document.querySelector('header');
    if (header) {
      const mobileMenuToggle = document.createElement('button');
      mobileMenuToggle.className = 'mobile-menu-toggle md:hidden';
      mobileMenuToggle.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      `;
      mobileMenuToggle.setAttribute('aria-label', 'Toggle mobile menu');
      
      // Add mobile menu styles
      const style = document.createElement('style');
      style.textContent = `
        .mobile-menu-toggle {
          display: none;
          padding: 0.5rem;
          background: transparent;
          border: none;
          color: inherit;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block;
          }
          
          .mobile-nav {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            z-index: 1000;
            padding: 2rem;
          }
          
          .mobile-nav.open {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          
          .mobile-nav a {
            color: white;
            text-decoration: none;
            padding: 1rem;
            font-size: 1.25rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            width: 100%;
            text-align: center;
          }
        }
      `;
      
      document.head.appendChild(style);
      
      // Add mobile navigation
      const mobileNav = document.createElement('nav');
      mobileNav.className = 'mobile-nav';
      mobileNav.innerHTML = `
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <button class="mobile-menu-close text-white text-2xl mt-4">×</button>
      `;
      
      document.body.appendChild(mobileNav);
      
      // Toggle mobile menu
      let isMenuOpen = false;
      mobileMenuToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileNav.classList.toggle('open', isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
      });
      
      // Close menu when clicking close button or links
      const closeMenu = () => {
        isMenuOpen = false;
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      };
      
      mobileNav.querySelector('.mobile-menu-close')?.addEventListener('click', closeMenu);
      mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
      });
    }
  }, [isMobile]);

  // Mobile performance optimizations
  const optimizeMobilePerformance = useCallback(() => {
    if (!isMobile) return;

    // Reduce animations on mobile for better performance
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isMobile) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--transition-duration', '0.1s');
    }

    // Optimize scroll performance
    const smoothScrollElements = document.querySelectorAll('[data-smooth-scroll]');
    smoothScrollElements.forEach(element => {
      if (element instanceof HTMLElement) {
        element.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = element.getAttribute('href')?.substring(1);
          if (targetId) {
            const target = document.getElementById(targetId);
            if (target) {
              target.scrollIntoView({ 
                behavior: isMobile ? 'auto' : 'smooth',
                block: 'start'
              });
            }
          }
        });
      }
    });

    // Add mobile-specific CSS variables
    const root = document.documentElement;
    root.style.setProperty('--mobile-padding', '1rem');
    root.style.setProperty('--mobile-margin', '0.5rem');
    root.style.setProperty('--mobile-border-radius', '0.5rem');
  }, [isMobile]);

  // Main enhancement function
  const runEnhancements = useCallback(async () => {
    if (!enabled) return;
    
    setIsEnhancing(true);
    
    try {
      // Run enhancements in parallel
      await Promise.all([
        applyMobileOptimizations(),
        enhanceTouchGestures(),
        enhanceMobileNavigation(),
        optimizeMobilePerformance()
      ]);
      
    } catch (error) {
      console.warn('Mobile responsiveness enhancement failed:', error);
    } finally {
      setIsEnhancing(false);
    }
  }, [
    enabled,
    applyMobileOptimizations,
    enhanceTouchGestures,
    enhanceMobileNavigation,
    optimizeMobilePerformance
  ]);

  // Initialize on mount
  useEffect(() => {
    detectMobile();
    detectOrientation();
    
    // Listen for orientation changes
    window.addEventListener('orientationchange', detectOrientation);
    window.addEventListener('resize', detectOrientation);
    
    return () => {
      window.removeEventListener('orientationchange', detectOrientation);
      window.removeEventListener('resize', detectOrientation);
    };
  }, [detectMobile, detectOrientation]);

  // Run enhancements when mobile state changes
  useEffect(() => {
    if (enabled) {
      runEnhancements();
    }
  }, [enabled, isMobile, orientation, runEnhancements]);

  if (!enabled) return null;

  return (
    <>
      {/* Mobile indicator */}
      {showMobileIndicator && isMobile && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 bg-blue-500 text-white px-3 py-2 rounded-lg z-50 text-sm"
        >
          <div className="flex items-center space-x-2">
            <span>📱</span>
            <span>{orientation === 'portrait' ? 'Portrait' : 'Landscape'}</span>
          </div>
        </motion.div>
      )}

      {/* Enhancement status indicator */}
      {isEnhancing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-4 right-4 bg-green-500 text-white px-3 py-2 rounded-lg z-50"
        >
          Optimizing for mobile...
        </motion.div>
      )}


    </>
  );
};