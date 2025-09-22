'use client';

import React, { useState, useEffect } from 'react';

interface MobileResponsiveLayoutProps {
  children: React.ReactNode;
  enableMobileOptimization?: boolean;
  enableTouchGestures?: boolean;
  enableSwipeNavigation?: boolean;
}

const MobileResponsiveLayout: React.FC<MobileResponsiveLayoutProps> = ({
  children,
  enableMobileOptimization = true,
  enableTouchGestures = true,
  enableSwipeNavigation = true
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);

  // Detect device type
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Touch gesture handling
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!enableTouchGestures) return;
    setTouchEnd(null);
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!enableTouchGestures) return;
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const handleTouchEnd = () => {
    if (!enableTouchGestures || !touchStart || !touchEnd) return;
    
    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = touchStart.y - touchEnd.y;
    const isLeftSwipe = deltaX > 50;
    const isRightSwipe = deltaX < -50;
    const isUpSwipe = deltaY > 50;
    const isDownSwipe = deltaY < -50;

    if (enableSwipeNavigation) {
      if (isLeftSwipe) {
        // Navigate to next content
        console.log('Swipe left - next content');
      }
      if (isRightSwipe) {
        // Navigate to previous content
        console.log('Swipe right - previous content');
      }
    }

    if (isUpSwipe) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (isDownSwipe) {
      // Scroll to bottom
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  // Mobile-specific optimizations
  const mobileOptimizations = {
    // Prevent zoom on input focus
    preventZoom: () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      }
    },
    
    // Optimize images for mobile
    optimizeImages: () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (isMobile) {
          img.setAttribute('loading', 'lazy');
          img.setAttribute('decoding', 'async');
        }
      });
    },

    // Optimize fonts for mobile
    optimizeFonts: () => {
      const style = document.createElement('style');
      style.textContent = `
        @media (max-width: 768px) {
          body {
            font-size: 16px;
            line-height: 1.5;
          }
          h1 { font-size: 2rem; }
          h2 { font-size: 1.75rem; }
          h3 { font-size: 1.5rem; }
          h4 { font-size: 1.25rem; }
          h5 { font-size: 1.125rem; }
          h6 { font-size: 1rem; }
        }
      `;
      document.head.appendChild(style);
    }
  };

  useEffect(() => {
    if (enableMobileOptimization && isMobile) {
      mobileOptimizations.preventZoom();
      mobileOptimizations.optimizeImages();
      mobileOptimizations.optimizeFonts();
    }
  }, [isMobile, enableMobileOptimization]);

  // Mobile-specific CSS classes
  const getResponsiveClasses = (baseClasses: string) => {
    if (!enableMobileOptimization) return baseClasses;
    
    return `${baseClasses} ${
      isMobile 
        ? 'px-4 py-2 text-sm' 
        : isTablet 
        ? 'px-6 py-3 text-base' 
        : 'px-8 py-4 text-lg'
    }`;
  };

  return (
    <div
      className={`min-h-screen ${
        isMobile ? 'mobile-optimized' : isTablet ? 'tablet-optimized' : 'desktop-optimized'
      }`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Mobile-specific styles */}
      <style jsx>{`
        .mobile-optimized {
          /* Mobile-specific optimizations */
          -webkit-text-size-adjust: 100%;
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .mobile-optimized * {
          /* Improve touch targets */
          min-height: 44px;
          min-width: 44px;
        }

        .mobile-optimized input,
        .mobile-optimized textarea,
        .mobile-optimized select {
          /* Prevent zoom on input focus */
          font-size: 16px;
          -webkit-user-select: text;
          -khtml-user-select: text;
          -moz-user-select: text;
          -ms-user-select: text;
          user-select: text;
        }

        .mobile-optimized button {
          /* Improve button touch targets */
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
        }

        .mobile-optimized .grid {
          /* Optimize grid for mobile */
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .mobile-optimized .flex {
          /* Optimize flex for mobile */
          flex-direction: column;
          gap: 12px;
        }

        /* Tablet optimizations */
        .tablet-optimized .grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .tablet-optimized .flex {
          flex-direction: row;
          gap: 16px;
        }

        /* Desktop optimizations */
        .desktop-optimized .grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .desktop-optimized .flex {
          flex-direction: row;
          gap: 20px;
        }

        /* Responsive typography */
        @media (max-width: 640px) {
          .mobile-optimized h1 { font-size: 1.875rem; }
          .mobile-optimized h2 { font-size: 1.5rem; }
          .mobile-optimized h3 { font-size: 1.25rem; }
          .mobile-optimized p { font-size: 0.875rem; }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .tablet-optimized h1 { font-size: 2.25rem; }
          .tablet-optimized h2 { font-size: 1.875rem; }
          .tablet-optimized h3 { font-size: 1.5rem; }
        }

        @media (min-width: 1025px) {
          .desktop-optimized h1 { font-size: 3rem; }
          .desktop-optimized h2 { font-size: 2.25rem; }
          .desktop-optimized h3 { font-size: 1.875rem; }
        }

        /* Touch gesture indicators */
        .swipe-indicator {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          z-index: 1000;
          animation: fadeInOut 3s ease-in-out;
        }

        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        /* Mobile navigation improvements */
        .mobile-optimized nav {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
        }

        .mobile-optimized .nav-item {
          padding: 12px 16px;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .mobile-optimized .nav-item:active {
          background-color: rgba(59, 130, 246, 0.1);
          transform: scale(0.95);
        }

        /* Mobile content cards */
        .mobile-optimized .content-card {
          margin-bottom: 16px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .mobile-optimized .content-card:active {
          transform: scale(0.98);
          transition: transform 0.1s ease;
        }

        /* Mobile forms */
        .mobile-optimized input,
        .mobile-optimized textarea,
        .mobile-optimized select {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.2s ease;
        }

        .mobile-optimized input:focus,
        .mobile-optimized textarea:focus,
        .mobile-optimized select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        /* Mobile buttons */
        .mobile-optimized .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          padding: 14px 24px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          border: none;
          width: 100%;
          transition: all 0.2s ease;
        }

        .mobile-optimized .btn-primary:active {
          transform: scale(0.98);
          background: linear-gradient(135deg, #1d4ed8, #1e40af);
        }

        /* Mobile modals */
        .mobile-optimized .modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          z-index: 1000;
        }

        .mobile-optimized .modal-content {
          background: white;
          border-radius: 16px 16px 0 0;
          width: 100%;
          max-height: 80vh;
          overflow-y: auto;
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Touch gesture indicator */}
      {isMobile && enableTouchGestures && (
        <div className="swipe-indicator">
          Swipe up for navigation, left/right for content
        </div>
      )}

      {/* Content */}
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

export default MobileResponsiveLayout;