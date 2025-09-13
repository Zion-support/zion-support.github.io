'use client';

import React, { useEffect, useState } from 'react';

interface MobileOptimizerProps {
  children: React.ReactNode;
}

export default function MobileOptimizer({ children }: MobileOptimizerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsDesktop(width >= 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    // Add mobile-specific optimizations
    if (isMobile) {
      // Prevent zoom on input focus
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      }

      // Add touch-friendly styles
      document.body.style.touchAction = 'manipulation';
      
      // Optimize for mobile performance
      document.body.style.webkitFontSmoothing = 'antialiased';
      document.body.style.mozOsxFontSmoothing = 'grayscale';
    } else {
      // Reset for desktop
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
      }
      
      document.body.style.touchAction = 'auto';
    }
  }, [isMobile]);

  return (
    <div 
      className={`
        ${isMobile ? 'mobile-optimized' : ''}
        ${isTablet ? 'tablet-optimized' : ''}
        ${isDesktop ? 'desktop-optimized' : ''}
      `}
      style={{
        // Mobile-specific optimizations
        ...(isMobile && {
          fontSize: '16px', // Prevent zoom on iOS
          lineHeight: '1.5',
          letterSpacing: '0.01em'
        })
      }}
    >
      {children}
      
      {/* Mobile-specific enhancements */}
      {isMobile && (
        <style jsx global>{`
          /* Mobile-specific styles */
          .mobile-optimized {
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          
          .mobile-optimized input,
          .mobile-optimized textarea,
          .mobile-optimized select {
            -webkit-user-select: text;
            -khtml-user-select: text;
            -moz-user-select: text;
            -ms-user-select: text;
            user-select: text;
          }
          
          /* Improve touch targets */
          .mobile-optimized button,
          .mobile-optimized a,
          .mobile-optimized [role="button"] {
            min-height: 44px;
            min-width: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          /* Optimize scrolling */
          .mobile-optimized {
            -webkit-overflow-scrolling: touch;
            overflow-scrolling: touch;
          }
          
          /* Prevent horizontal scroll */
          .mobile-optimized body {
            overflow-x: hidden;
          }
          
          /* Optimize images for mobile */
          .mobile-optimized img {
            max-width: 100%;
            height: auto;
            display: block;
          }
          
          /* Improve form inputs */
          .mobile-optimized input[type="text"],
          .mobile-optimized input[type="email"],
          .mobile-optimized input[type="tel"],
          .mobile-optimized textarea {
            font-size: 16px; /* Prevent zoom on iOS */
            border-radius: 8px;
            padding: 12px;
            border: 1px solid #d1d5db;
          }
          
          /* Improve button styles */
          .mobile-optimized button {
            border-radius: 8px;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: 600;
          }
          
          /* Optimize text readability */
          .mobile-optimized p,
          .mobile-optimized span,
          .mobile-optimized div {
            line-height: 1.6;
          }
          
          /* Improve navigation */
          .mobile-optimized nav {
            position: sticky;
            top: 0;
            z-index: 50;
            background: white;
            border-bottom: 1px solid #e5e7eb;
          }
          
          /* Optimize cards and containers */
          .mobile-optimized .card,
          .mobile-optimized .container {
            margin: 8px;
            padding: 16px;
            border-radius: 12px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      )}
      
      {/* Tablet-specific enhancements */}
      {isTablet && (
        <style jsx global>{`
          .tablet-optimized {
            /* Tablet-specific optimizations */
          }
          
          .tablet-optimized .container {
            max-width: 768px;
            margin: 0 auto;
            padding: 0 24px;
          }
          
          .tablet-optimized .grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        `}</style>
      )}
      
      {/* Desktop-specific enhancements */}
      {isDesktop && (
        <style jsx global>{`
          .desktop-optimized {
            /* Desktop-specific optimizations */
          }
          
          .desktop-optimized .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 32px;
          }
          
          .desktop-optimized .grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }
          
          .desktop-optimized .hover\:scale-105:hover {
            transform: scale(1.05);
            transition: transform 0.2s ease-in-out;
          }
        `}</style>
      )}
    </div>
  );
}