'use client';

import React, { useEffect, useState } from 'react';

const MobileOptimizations: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Touch gesture handling
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;

    // Swipe detection
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        // Swipe right - could implement navigation
        console.log('Swipe right detected');
      } else {
        // Swipe left - could implement navigation
        console.log('Swipe left detected');
      }
    }

    setTouchStart(null);
  };

  // Prevent zoom on double tap
  useEffect(() => {
    let lastTouchEnd = 0;
    
    const preventZoom = (e: TouchEvent) => {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    document.addEventListener('touchend', preventZoom, { passive: false });

    return () => {
      document.removeEventListener('touchend', preventZoom);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <>
      {/* Mobile-specific optimizations */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="mobile-optimized"
      >
        {/* Mobile navigation improvements */}
        <style jsx global>{`
          /* Mobile-specific styles */
          @media (max-width: 768px) {
            /* Improve touch targets */
            button, a, input, select, textarea {
              min-height: 44px;
              min-width: 44px;
            }

            /* Optimize text for mobile reading */
            body {
              -webkit-text-size-adjust: 100%;
              text-size-adjust: 100%;
            }

            /* Improve scrolling performance */
            * {
              -webkit-overflow-scrolling: touch;
            }

            /* Optimize images for mobile */
            img {
              max-width: 100%;
              height: auto;
            }

            /* Improve form inputs on mobile */
            input, textarea, select {
              font-size: 16px; /* Prevents zoom on iOS */
              border-radius: 8px;
            }

            /* Better spacing for mobile */
            .container {
              padding-left: 1rem;
              padding-right: 1rem;
            }

            /* Mobile-friendly cards */
            .card {
              margin-bottom: 1rem;
              border-radius: 12px;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }

            /* Mobile navigation */
            .mobile-nav {
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              background: white;
              border-top: 1px solid #e5e7eb;
              padding: 0.5rem;
              z-index: 50;
            }

            /* Mobile-friendly buttons */
            .btn-mobile {
              padding: 0.75rem 1.5rem;
              font-size: 1rem;
              border-radius: 8px;
              width: 100%;
              margin-bottom: 0.5rem;
            }

            /* Mobile-optimized modals */
            .modal-mobile {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.5);
              z-index: 100;
            }

            .modal-content-mobile {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background: white;
              border-radius: 12px 12px 0 0;
              padding: 1.5rem;
              max-height: 80vh;
              overflow-y: auto;
            }

            /* Mobile-friendly tables */
            .table-mobile {
              display: block;
              width: 100%;
              overflow-x: auto;
              white-space: nowrap;
            }

            /* Mobile-optimized lists */
            .list-mobile li {
              padding: 0.75rem;
              border-bottom: 1px solid #e5e7eb;
            }

            /* Mobile-friendly spacing */
            .space-mobile > * + * {
              margin-top: 1rem;
            }

            /* Mobile-optimized text */
            .text-mobile {
              font-size: 1rem;
              line-height: 1.6;
            }

            /* Mobile-friendly headings */
            .heading-mobile h1 {
              font-size: 2rem;
              line-height: 1.2;
            }

            .heading-mobile h2 {
              font-size: 1.5rem;
              line-height: 1.3;
            }

            .heading-mobile h3 {
              font-size: 1.25rem;
              line-height: 1.4;
            }

            /* Mobile-optimized forms */
            .form-mobile .form-group {
              margin-bottom: 1.5rem;
            }

            .form-mobile label {
              display: block;
              margin-bottom: 0.5rem;
              font-weight: 600;
            }

            .form-mobile input,
            .form-mobile textarea,
            .form-mobile select {
              width: 100%;
              padding: 0.75rem;
              border: 1px solid #d1d5db;
              border-radius: 8px;
              font-size: 16px;
            }

            /* Mobile-friendly alerts */
            .alert-mobile {
              padding: 1rem;
              border-radius: 8px;
              margin-bottom: 1rem;
            }

            /* Mobile-optimized loading states */
            .loading-mobile {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 2rem;
            }

            /* Mobile-friendly tooltips */
            .tooltip-mobile {
              position: relative;
            }

            .tooltip-mobile:hover .tooltip-content {
              display: block;
            }

            .tooltip-content {
              display: none;
              position: absolute;
              bottom: 100%;
              left: 50%;
              transform: translateX(-50%);
              background: #374151;
              color: white;
              padding: 0.5rem;
              border-radius: 4px;
              font-size: 0.875rem;
              white-space: nowrap;
              z-index: 10;
            }

            /* Mobile-optimized animations */
            @media (prefers-reduced-motion: no-preference) {
              .animate-mobile {
                transition: all 0.3s ease;
              }
            }

            /* Mobile-friendly focus states */
            .focus-mobile:focus {
              outline: 2px solid #3b82f6;
              outline-offset: 2px;
            }

            /* Mobile-optimized shadows */
            .shadow-mobile {
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            }

            /* Mobile-friendly borders */
            .border-mobile {
              border: 1px solid #e5e7eb;
              border-radius: 8px;
            }
          }

          /* Touch-specific optimizations */
          .touch-optimized {
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          /* Prevent text selection on buttons and interactive elements */
          button, .btn, .interactive {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          /* Improve scrolling on iOS */
          .scroll-optimized {
            -webkit-overflow-scrolling: touch;
            overflow-scrolling: touch;
          }

          /* Mobile-optimized viewport */
          @media (max-width: 768px) {
            html {
              font-size: 14px;
            }
          }

          @media (max-width: 480px) {
            html {
              font-size: 13px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default MobileOptimizations;