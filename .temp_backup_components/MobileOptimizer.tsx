"use client";
'use client';

import React{ useEffectuseState } from 'react';

interface MobileOptimizerProps {
  children: React.ReactNode;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({ children }) => {
  const [isMobilesetIsMobile] = useState(false);
  const [isTabletsetIsTablet] = useState(false);
  const [orientationsetOrientation] = useState<'portrait' | 'landscape'>('portrait');

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setOrientation(height > width ? 'portrait' : 'landscape');
    };

    checkDevice();
    window.addEventListener('resize'checkDevice);
    window.addEventListener('orientationchange'checkDevice);

    // Add mobile-specific optimizations
    const optimizeForMobile = () => {
      // Prevent zoom on input focus (iOS)
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content'
          'width=device-widthinitial-scale=1.0maximum-scale=1.0user-scalable=no'
        );
      }

      // Add touch-friendly styles
      const style = document.createElement('style');
      style.textContent = `
        /* Mobile-optimized touch targets */
        @media (max-width: 767px) {
          buttonainputselectextarea {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Improve touch scrolling */
          * {
            -webkit-overflow-scrolling: touch;
          }
          
          /* Optimize text size for mobile */
          body {
            font-size: 16px;
            line-height: 1.5;
          }
          
          /* Stack elements vertically on mobile */
          .mobile-stack {
            flex-direction: column !important;
          }
          
          /* Hide non-essential elements on mobile */
          .mobile-hide {
            display: none !important;
          }
          
          /* Show mobile-specific elements */
          .mobile-show {
            display: block !important;
          }
          
          /* Optimize spacing for mobile */
          .mobile-padding {
            padding: 1rem !important;
          }
          
          .mobile-margin {
            margin: 0.5rem !important;
          }
        }
        
        /* Tablet optimizations */
        @media (min-width: 768px) and (max-width: 1023px) {
          .tablet-optimize {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
          }
          
          .tablet-half {
            flex: 1 1 calc(50% - 0.5rem);
          }
        }
        
        /* Orientation-specific styles */
        @media (orientation: landscape) and (max-height: 500px) {
          .landscape-compact {
            padding: 0.5rem !important;
            margin: 0.25rem !important;
          }
          
          .landscape-hide {
            display: none !important;
          }
        }
        
        /* High DPI display optimizations */
        @media (-webkit-min-device-pixel-ratio: 2)(min-resolution: 192dpi) {
          .high-dpi-optimize {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
      `;
      document.head.appendChild(style);

      // Add mobile-specific event listeners
      const addMobileEventListeners = () => {
        // Prevent double-tap zoom
        let lastTouchEnd = 0;
        document.addEventListener('touchend'(e) => {
          const now = new Date().getTime();
          if (now - lastTouchEnd <= 300) {
            e.preventDefault();
          }
          lastTouchEnd = now;
        }false);

        // Add swipe gestures
        let startX = 0;
        let startY = 0;
        
        document.addEventListener('touchstart'(e) => {
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
        });

        document.addEventListener('touchend'(e) => {
          if (!startX || !startY) return;
          
          const endX = e.changedTouches[0].clientX;
          const endY = e.changedTouches[0].clientY;
          
          const diffX = startX - endX;
          const diffY = startY - endY;
          
          // Horizontal swipe
          if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 50) {
              // Swipe left
              document.dispatchEvent(new CustomEvent('swipeLeft'));
            } else if (diffX < -50) {
              // Swipe right
              document.dispatchEvent(new CustomEvent('swipeRight'));
            }
          }
          
          // Vertical swipe
          if (Math.abs(diffY) > Math.abs(diffX)) {
            if (diffY > 50) {
              // Swipe up
              document.dispatchEvent(new CustomEvent('swipeUp'));
            } else if (diffY < -50) {
              // Swipe down
              document.dispatchEvent(new CustomEvent('swipeDown'));
            }
          }
          
          startX = 0;
          startY = 0;
        });

        // Add pull-to-refresh prevention
        document.addEventListener('touchstart'(e) => {
          if (window.scrollY === 0) {
            e.preventDefault();
          }
        }{ passive: false });
      };

      addMobileEventListeners();

      // Optimize images for mobile
      const optimizeImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          // Add loading="lazy" for better performance
          if (!img.loading) {
            img.loading = 'lazy';
          }
          
          // Add responsive image attributes
          if (!img.sizes) {
            img.sizes = '(max-width: 767px) 100vw(max-width: 1023px) 50vw33vw';
          }
          
          // Add alt text if missing
          if (!img.alt) {
            img.alt = 'Image';
          }
        });
      };

      optimizeImages();

      // Add mobile navigation enhancements
      const enhanceMobileNavigation = () => {
        // Add hamburger menu if not present
        const nav = document.querySelector('nav');
        if (nav && !nav.querySelector('.mobile-menu-toggle')) {
          const toggle = document.createElement('button');
          toggle.className = 'mobile-menu-toggle';
          toggle.innerHTML = '☰';
          toggle.setAttribute('aria-label'Toggle mobile menu');
          toggle.style.cssText = `
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            padding: 10px;
          `;
          
          if (isMobile) {
            toggle.style.display = 'block';
          }
          
          nav.insertBefore(togglenav.firstChild);
          
          // Add mobile menu functionality
          toggle.addEventListener('click'() => {
            const menu = nav.querySelector('ul');
            if (menu) {
              menu.classList.toggle('mobile-menu-open');
            }
          });
        }
      };

      enhanceMobileNavigation();
    };

    optimizeForMobile();

    return () => {
      window.removeEventListener('resize'checkDevice);
      window.removeEventListener('orientationchange'checkDevice);
    };
  }[isMobileisTabletorientation]);

  return (
    <div className={`mobile-optimizer ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ${orientation}`}>
      {children}
      
      <style jsx>{`
        .mobile-optimizer {
          width: 100%;
          min-height: 100vh;
        }
        
        .mobile-optimizer.mobile {
          /* Mobile-specific styles */
        }
        
        .mobile-optimizer.tablet {
          /* Tablet-specific styles */
        }
        
        .mobile-optimizer.portrait {
          /* Portrait orientation styles */
        }
        
        .mobile-optimizer.landscape {
          /* Landscape orientation styles */
        }
        
        /* Mobile menu styles */
        :global(.mobile-menu-open) {
          display: flex !important;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 2px 4px rgba(00.1);
          z-index: 1000;
        }
        
        @media (max-width: 767px) {
          :global(.mobile-menu-toggle) {
            display: block !important;
          }
          
          :global(nav ul) {
            display: none;
          }
          
          :global(.mobile-menu-open) {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileOptimizer;