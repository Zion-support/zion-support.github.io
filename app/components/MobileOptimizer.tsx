<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect } from 'react';

=======
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
export default function MobileOptimizer() {
  useEffect(() => {
    // Add viewport meta tag if not present
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
      document.head.appendChild(viewport);
    }

    // Add touch-friendly classes
    const addTouchClasses = () => {
      const buttons = document.querySelectorAll('button, a[role="button"]');
      buttons.forEach(button => {
        if (!button.classList.contains('touch-friendly')) {
          button.classList.add('touch-friendly', 'min-h-[44px]', 'min-w-[44px]');
        }
      });
    };

    // Initial setup
    addTouchClasses();

    // Re-run on DOM changes
    const observer = new MutationObserver(addTouchClasses);
    observer.observe(document.body, { childList: true, subtree: true });

    // Handle orientation changes
    const handleOrientationChange = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return null;
}
=======
import React, { useEffect, useState } from 'react';

interface MobileOptimizerProps {
  children: React.ReactNode;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    // Detect touch capability
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    // Initial check
    checkMobile();
    checkTouch();

    // Listen for resize events
    const handleResize = () => {
      checkMobile();
    };

    window.addEventListener('resize', handleResize);

    // Add mobile-specific optimizations
    const addMobileOptimizations = () => {
      // Add viewport meta tag if not present
      let viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        viewport = document.createElement('meta');
        viewport.setAttribute('name', 'viewport');
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
        document.head.appendChild(viewport);
      }

      // Add mobile-specific CSS
      const mobileStyles = document.createElement('style');
      mobileStyles.textContent = `
        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          /* Improve touch targets */
          button, a, input, select, textarea {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Optimize text size */
          body {
            -webkit-text-size-adjust: 100%;
            text-size-adjust: 100%;
          }
          
          /* Improve scrolling */
          * {
            -webkit-overflow-scrolling: touch;
          }
          
          /* Optimize images */
          img {
            max-width: 100%;
            height: auto;
          }
          
          /* Improve form inputs */
          input, textarea, select {
            font-size: 16px; /* Prevents zoom on iOS */
          }
          
          /* Optimize animations for mobile */
          .animate-pulse {
            animation-duration: 2s;
          }
          
          /* Improve button spacing */
          .flex.gap-4 > * + * {
            margin-left: 0.5rem;
          }
          
          /* Optimize grid layouts */
          .grid-cols-3 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
          
          .grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        
        /* Touch-specific optimizations */
        @media (hover: none) and (pointer: coarse) {
          /* Remove hover effects on touch devices */
          .hover\\:scale-105:hover {
            transform: none;
          }
          
          .hover\\:bg-white\\/20:hover {
            background-color: transparent;
          }
          
          /* Add touch feedback */
          button:active, a:active {
            transform: scale(0.95);
            transition: transform 0.1s;
          }
        }
        
        /* High DPI display optimizations */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          /* Optimize for retina displays */
          .bg-gradient-to-r {
            background-image: linear-gradient(to right, var(--tw-gradient-stops));
          }
        }
        
        /* Landscape mobile optimizations */
        @media (max-width: 768px) and (orientation: landscape) {
          .pt-20 {
            padding-top: 2rem;
          }
          
          .pb-16 {
            padding-bottom: 2rem;
          }
        }
        
        /* iOS specific fixes */
        @supports (-webkit-touch-callout: none) {
          /* Fix iOS Safari viewport issues */
          .min-h-screen {
            min-height: -webkit-fill-available;
          }
          
          /* Fix iOS input zoom */
          input[type="text"],
          input[type="email"],
          input[type="tel"],
          input[type="password"],
          textarea,
          select {
            font-size: 16px;
          }
        }
      `;
      document.head.appendChild(mobileStyles);

      // Add mobile-specific JavaScript optimizations
      if (isMobile) {
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

        // Optimize touch events
        const optimizeTouch = (e: TouchEvent) => {
          // Prevent default touch behaviors that might interfere
          if (e.touches.length > 1) {
            e.preventDefault();
          }
        };

        document.addEventListener('touchstart', optimizeTouch, { passive: false });
        document.addEventListener('touchmove', optimizeTouch, { passive: false });

        // Add mobile-specific event listeners
        const handleOrientationChange = () => {
          // Recalculate layouts on orientation change
          setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
          }, 100);
        };

        window.addEventListener('orientationchange', handleOrientationChange);

        // Cleanup
        return () => {
          window.removeEventListener('scroll', optimizeScroll);
          document.removeEventListener('touchstart', optimizeTouch);
          document.removeEventListener('touchmove', optimizeTouch);
          window.removeEventListener('orientationchange', handleOrientationChange);
        };
      }
    };

    // Apply optimizations
    const cleanup = addMobileOptimizations();

    return () => {
      if (cleanup) cleanup();
    };
  }, [isMobile, isTouch]);

  // Add mobile-specific classes to body
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile-device');
    } else {
      document.body.classList.remove('mobile-device');
    }

    if (isTouch) {
      document.body.classList.add('touch-device');
    } else {
      document.body.classList.remove('touch-device');
    }
  }, [isMobile, isTouch]);

  return <>{children}</>;
};

export default MobileOptimizer;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
