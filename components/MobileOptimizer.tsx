import React, { useEffect, useState } from 'react';

interface MobileState {
  isMobile: boolean;
  isTablet: boolean;
  orientation: 'portrait' | 'landscape';
  touchDevice: boolean;
  viewportWidth: number;
  viewportHeight: number;
}

export default function MobileOptimizer() {
  const [mobileState, setMobileState] = useState<MobileState>({
    isMobile: false,
    isTablet: false,
    orientation: 'portrait',
    touchDevice: false,
    viewportWidth: 0,
    viewportHeight: 0
  });

  useEffect(() => {
    const detectMobile = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const orientation = height > width ? 'portrait' : 'landscape';
      const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      setMobileState({
        isMobile,
        isTablet,
        orientation,
        touchDevice,
        viewportWidth: width,
        viewportHeight: height
      });
    };

    // Initial detection
    detectMobile();

    // Listen for resize events
    window.addEventListener('resize', detectMobile);
    window.addEventListener('orientationchange', detectMobile);

    // Apply mobile optimizations
    const applyMobileOptimizations = () => {
      const root = document.documentElement;
      
      // Add mobile class
      if (mobileState.isMobile) {
        root.classList.add('mobile');
      } else {
        root.classList.remove('mobile');
      }

      // Add tablet class
      if (mobileState.isTablet) {
        root.classList.add('tablet');
      } else {
        root.classList.remove('tablet');
      }

      // Add orientation class
      root.classList.remove('portrait', 'landscape');
      root.classList.add(mobileState.orientation);

      // Add touch class
      if (mobileState.touchDevice) {
        root.classList.add('touch');
      } else {
        root.classList.remove('touch');
      }

      // Optimize images for mobile
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (mobileState.isMobile) {
          // Use smaller images on mobile
          const src = img.src;
          if (src.includes('w_800') || src.includes('w_1200')) {
            img.src = src.replace(/w_\d+/, 'w_400');
          }
        }
      });

      // Optimize fonts for mobile
      const style = document.createElement('style');
      style.textContent = `
        @media (max-width: 767px) {
          body {
            font-size: 14px;
            line-height: 1.5;
          }
          
          h1 { font-size: 2rem; }
          h2 { font-size: 1.75rem; }
          h3 { font-size: 1.5rem; }
          h4 { font-size: 1.25rem; }
          h5 { font-size: 1.125rem; }
          h6 { font-size: 1rem; }
          
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .flex {
            flex-direction: column;
          }
        }
        
        @media (max-width: 1023px) and (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `;
      
      // Remove existing mobile styles
      const existingStyle = document.getElementById('mobile-optimizations');
      if (existingStyle) {
        existingStyle.remove();
      }
      
      style.id = 'mobile-optimizations';
      document.head.appendChild(style);
    };

    // Apply optimizations
    applyMobileOptimizations();

    // Add touch event optimizations
    const optimizeTouchEvents = () => {
      // Add touch feedback
      const touchElements = document.querySelectorAll('button, a, [role="button"]');
      touchElements.forEach(element => {
        element.addEventListener('touchstart', () => {
          element.classList.add('touch-active');
        });
        
        element.addEventListener('touchend', () => {
          setTimeout(() => {
            element.classList.remove('touch-active');
          }, 150);
        });
      });

      // Prevent zoom on double tap
      let lastTouchEnd = 0;
      document.addEventListener('touchend', (event) => {
        const now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      }, false);

      // Optimize scroll performance
      let ticking = false;
      const optimizeScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Add scroll optimizations here
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', optimizeScroll, { passive: true });
    };

    // Apply touch optimizations
    optimizeTouchEvents();

    // Add viewport meta tag if not present
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
      document.head.appendChild(meta);
    }

    return () => {
      window.removeEventListener('resize', detectMobile);
      window.removeEventListener('orientationchange', detectMobile);
    };
  }, [mobileState]);

  // Add mobile-specific CSS
  useEffect(() => {
    const mobileCSS = `
      .mobile .container {
        padding-left: 1rem;
        padding-right: 1rem;
      }
      
      .mobile .grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      
      .mobile .flex {
        flex-direction: column;
      }
      
      .mobile .text-center {
        text-align: left;
      }
      
      .mobile .hidden-mobile {
        display: none !important;
      }
      
      .mobile .block-mobile {
        display: block !important;
      }
      
      .touch .touch-active {
        transform: scale(0.95);
        opacity: 0.8;
        transition: all 0.1s ease;
      }
      
      .touch button,
      .touch a,
      .touch [role="button"] {
        min-height: 44px;
        min-width: 44px;
      }
      
      .portrait .landscape-only {
        display: none !important;
      }
      
      .landscape .portrait-only {
        display: none !important;
      }
      
      @media (max-width: 767px) {
        .mobile-hidden {
          display: none !important;
        }
        
        .mobile-visible {
          display: block !important;
        }
        
        .mobile-text-sm {
          font-size: 0.875rem;
        }
        
        .mobile-text-lg {
          font-size: 1.125rem;
        }
        
        .mobile-p-2 {
          padding: 0.5rem;
        }
        
        .mobile-p-4 {
          padding: 1rem;
        }
        
        .mobile-mb-2 {
          margin-bottom: 0.5rem;
        }
        
        .mobile-mb-4 {
          margin-bottom: 1rem;
        }
      }
    `;

    const style = document.createElement('style');
    style.textContent = mobileCSS;
    style.id = 'mobile-optimizer-styles';
    
    // Remove existing styles
    const existingStyle = document.getElementById('mobile-optimizer-styles');
    if (existingStyle) {
      existingStyle.remove();
    }
    
    document.head.appendChild(style);
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-3 rounded-lg text-xs z-50">
      <div className="font-bold mb-1">Mobile Status</div>
      <div>Device: {mobileState.isMobile ? 'Mobile' : mobileState.isTablet ? 'Tablet' : 'Desktop'}</div>
      <div>Orientation: {mobileState.orientation}</div>
      <div>Touch: {mobileState.touchDevice ? 'Yes' : 'No'}</div>
      <div>Viewport: {mobileState.viewportWidth}×{mobileState.viewportHeight}</div>
    </div>
  );
}