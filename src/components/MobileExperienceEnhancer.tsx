import React, { useEffect, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Hand, 
  MousePointer, 
  ArrowLeftRight, 
  ZoomIn, 
  RotateCcw,
  Settings,
  X,
  Settings,
  CheckCircle,
  AlertTriangle,
  Info,
  RefreshCw
} from 'lucide-react';

interface MobileExperienceEnhancerProps {
  enabled: boolean;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({ enabled }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [touchSupported, setTouchSupported] = useState(false);

  // Detect device type and capabilities
  const detectDeviceCapabilities = useCallback(() => {
    if (!enabled) return;

    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isTabletDevice = /ipad|android(?!.*mobile)/i.test(userAgent);
    
    setIsMobile(isMobileDevice);
    setIsTablet(isTabletDevice);
    setTouchSupported('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    // Set device-specific classes
    document.documentElement.classList.toggle('mobile-device', isMobileDevice);
    document.documentElement.classList.toggle('tablet-device', isTabletDevice);
    document.documentElement.classList.toggle('touch-device', touchSupported);
  }, [enabled, touchSupported]);

  // Handle orientation changes
  const handleOrientationChange = useCallback(() => {
    if (!enabled) return;

    const newOrientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    setOrientation(newOrientation);
    
    document.documentElement.classList.toggle('portrait', newOrientation === 'portrait');
    document.documentElement.classList.toggle('landscape', newOrientation === 'landscape');
    
    // Adjust viewport for mobile browsers
    if (isMobile) {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        if (newOrientation === 'landscape') {
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        } else {
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
        }
      }
    }
  }, [enabled, isMobile]);

  // Enhance touch interactions
  const enhanceTouchInteractions = useCallback(() => {
    if (!enabled || !touchSupported) return;

    // Add touch feedback to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], [role="link"], input, select, textarea');
    
    interactiveElements.forEach(element => {
      const el = element as HTMLElement;
      
      // Add touch feedback styles
      el.classList.add('touch-feedback');
      
      // Handle touch events for better feedback
      const handleTouchStart = () => {
        el.classList.add('touch-active');
      };
      
      const handleTouchEnd = () => {
        el.classList.remove('touch-active');
      };
      
      el.addEventListener('touchstart', handleTouchStart, { passive: true });
      el.addEventListener('touchend', handleTouchEnd, { passive: true });
      el.addEventListener('touchcancel', handleTouchEnd, { passive: true });
    });

    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    const handleTouchEnd = (event: TouchEvent) => {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    };

    document.addEventListener('touchend', handleTouchEnd, false);
  }, [enabled, touchSupported]);

  // Optimize scrolling for mobile
  const optimizeMobileScrolling = useCallback(() => {
    if (!enabled || !isMobile) return;

    // Add smooth scrolling for mobile
    const style = document.createElement('style');
    style.textContent = `
      .mobile-device {
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
      }
      
      .mobile-device .scroll-container {
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
      }
      
      .touch-feedback {
        transition: transform 0.1s ease, opacity 0.1s ease;
      }
      
      .touch-feedback.touch-active {
        transform: scale(0.95);
        opacity: 0.8;
      }
      
      .mobile-device .nav-menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.9);
        z-index: 1000;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }
      
      .mobile-device .nav-menu.open {
        transform: translateX(0);
      }
      
      .mobile-device .hamburger-menu {
        display: block;
      }
      
      .mobile-device .desktop-nav {
        display: none;
      }
      
      .tablet-device .tablet-optimized {
        display: block;
      }
      
      .mobile-device .mobile-optimized {
        display: block;
      }
      
      .desktop-only {
        display: none;
      }
      
      @media (max-width: 768px) {
        .desktop-only {
          display: none !important;
        }
        
        .mobile-optimized {
          display: block !important;
        }
      }
      
      @media (min-width: 769px) and (max-width: 1024px) {
        .tablet-optimized {
          display: block !important;
        }
      }
    `;
    
    document.head.appendChild(style);
  }, [enabled, isMobile]);

  // Add mobile-specific navigation
  const addMobileNavigation = useCallback(() => {
    if (!enabled || !isMobile) return;

    // Create mobile navigation menu
    const mobileNav = document.createElement('nav');
    mobileNav.className = 'mobile-nav';
    mobileNav.setAttribute('role', 'navigation');
    mobileNav.setAttribute('aria-label', 'Mobile navigation');
    
    mobileNav.innerHTML = `
      <div class="mobile-nav-header">
        <h2 class="mobile-nav-title">Menu</h2>
        <button class="mobile-nav-close" aria-label="Close navigation">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <ul class="mobile-nav-menu">
        <li><a href="/" class="mobile-nav-link">Home</a></li>
        <li><a href="/about" class="mobile-nav-link">About</a></li>
        <li><a href="/services" class="mobile-nav-link">Services</a></li>
        <li><a href="/contact" class="mobile-nav-link">Contact</a></li>
        <li><a href="/blog" class="mobile-nav-link">Blog</a></li>
      </ul>
    `;
    
    document.body.appendChild(mobileNav);
    
    // Add mobile navigation toggle button
    const navToggle = document.createElement('button');
    navToggle.className = 'mobile-nav-toggle fixed top-4 left-4 z-50 p-3 bg-white rounded-lg shadow-lg md:hidden';
    navToggle.setAttribute('aria-label', 'Open navigation menu');
    navToggle.innerHTML = `
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    `;
    
    document.body.appendChild(navToggle);
    
    // Handle mobile navigation toggle
    const toggleMobileNav = () => {
      mobileNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', mobileNav.classList.contains('open').toString());
    };
    
    navToggle.addEventListener('click', toggleMobileNav);
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', (event) => {
      if (!mobileNav.contains(event.target as Node) && !navToggle.contains(event.target as Node)) {
        mobileNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }, [enabled, isMobile]);

  // Optimize images for mobile
  const optimizeImagesForMobile = useCallback(() => {
    if (!enabled || !isMobile) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const imgElement = img as HTMLImageElement;
      
      // Add loading="lazy" for better performance
      if (!imgElement.loading) {
        imgElement.loading = 'lazy';
      }
      
      // Add responsive image support
      if (imgElement.srcset) {
        imgElement.sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw';
      }
      
      // Add touch-friendly image viewer
      imgElement.addEventListener('click', () => {
        if (isMobile) {
          const viewer = document.createElement('div');
          viewer.className = 'mobile-image-viewer fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center';
          viewer.innerHTML = `
            <img src="${imgElement.src}" alt="${imgElement.alt || 'Image'}" class="max-w-full max-h-full object-contain" />
            <button class="absolute top-4 right-4 text-white text-2xl" onclick="this.parentElement.remove()">×</button>
          `;
          document.body.appendChild(viewer);
        }
      });
    });
  }, [enabled, isMobile]);

  // Add mobile-specific gestures
  const addMobileGestures = useCallback(() => {
    if (!enabled || !touchSupported) return;

    let startX = 0;
    let startY = 0;
    let startTime = 0;
    
    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      startTime = Date.now();
    };
    
    const handleTouchEnd = (event: TouchEvent) => {
      const touch = event.changedTouches[0];
      const endX = touch.clientX;
      const endY = touch.clientY;
      const endTime = Date.now();
      
      const deltaX = endX - startX;
      const deltaY = endY - startY;
      const deltaTime = endTime - startTime;
      
      // Swipe detection
      if (deltaTime < 500 && Math.abs(deltaX) > 50 && Math.abs(deltaY) < 100) {
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
    };
    
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
  }, [enabled, touchSupported]);

  // Add mobile-specific CSS
  const addMobileCSS = useCallback(() => {
    if (!enabled) return;

    const style = document.createElement('style');
    style.textContent = `
      .mobile-nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(10px);
        z-index: 1000;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        display: flex;
        flex-direction: column;
        padding: 2rem;
      }
      
      .mobile-nav.open {
        transform: translateX(0);
      }
      
      .mobile-nav-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
      }
      
      .mobile-nav-title {
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
      }
      
      .mobile-nav-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.5rem;
      }
      
      .mobile-nav-menu {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .mobile-nav-link {
        display: block;
        color: white;
        text-decoration: none;
        padding: 1rem 0;
        font-size: 1.2rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        transition: color 0.2s ease;
      }
      
      .mobile-nav-link:hover {
        color: #0ea5e9;
      }
      
      .mobile-image-viewer {
        cursor: pointer;
      }
      
      .mobile-image-viewer img {
        max-width: 90vw;
        max-height: 90vh;
        object-fit: contain;
      }
      
      @media (max-width: 768px) {
        .container {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        .text-7xl {
          font-size: 3rem;
        }
        
        .text-5xl {
          font-size: 2.5rem;
        }
        
        .p-12 {
          padding: 2rem;
        }
        
        .p-8 {
          padding: 1.5rem;
        }
      }
    `;
    
    document.head.appendChild(style);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    detectDeviceCapabilities();
    handleOrientationChange();
    enhanceTouchInteractions();
    optimizeMobileScrolling();
    addMobileNavigation();
    optimizeImagesForMobile();
    addMobileGestures();
    addMobileCSS();

    // Event listeners
    window.addEventListener('resize', handleOrientationChange);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
      window.removeEventListener('orientationchange', handleOrientationChange);
      
      // Cleanup
      document.documentElement.classList.remove('mobile-device', 'tablet-device', 'touch-device', 'portrait', 'landscape');
    };
  }, [enabled, detectDeviceCapabilities, handleOrientationChange, enhanceTouchInteractions, optimizeMobileScrolling, addMobileNavigation, optimizeImagesForMobile, addMobileGestures, addMobileCSS]);

  return null;
};
