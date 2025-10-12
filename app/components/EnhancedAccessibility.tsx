'use client';
import React, { useEffect, useState } from 'react';

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);
    
    // Check for reduced motion preference
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(reducedMotionQuery.matches);
    
    // Listen for changes
    const handleHighContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
    const handleReducedMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    
    highContrastQuery.addEventListener('change', handleHighContrastChange);
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);
    
    return () => {
      highContrastQuery.removeEventListener('change', handleHighContrastChange);
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility styles
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Set font size
    root.style.fontSize = `${fontSize}px`;
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
        }
      }
      
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus management
  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.classList.add('focus-visible');
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.classList.remove('focus-visible');
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        /* High contrast mode */
        .high-contrast {
          --text-primary: #ffffff;
          --text-secondary: #e5e7eb;
          --bg-primary: #000000;
          --bg-secondary: #1f2937;
          --accent: #ffff00;
          --border: #ffffff;
        }
        
        .high-contrast * {
          color: var(--text-primary) !important;
          background-color: var(--bg-primary) !important;
          border-color: var(--border) !important;
        }
        
        .high-contrast .text-gradient {
          color: var(--accent) !important;
          background: none !important;
          -webkit-background-clip: unset !important;
          -webkit-text-fill-color: unset !important;
        }
        
        /* Reduced motion */
        .reduced-motion *,
        .reduced-motion *::before,
        .reduced-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
        
        /* Focus indicators */
        .focus-visible {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        /* Skip link */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
          border-radius: 4px;
        }
        
        .skip-link:focus {
          top: 6px;
        }
        
        /* Screen reader only content */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        /* Improved button accessibility */
        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        /* Form accessibility */
        input:invalid {
          border-color: #ef4444;
        }
        
        input:invalid:focus {
          outline-color: #ef4444;
        }
        
        /* Link accessibility */
        a:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        
        /* Image accessibility */
        img {
          max-width: 100%;
          height: auto;
        }
        
        img[alt=""] {
          border: 2px dashed #6b7280;
        }
        
        /* Table accessibility */
        table {
          border-collapse: collapse;
        }
        
        th, td {
          border: 1px solid #374151;
          padding: 8px;
        }
        
        th {
          background-color: #1f2937;
          font-weight: 600;
        }
        
        /* List accessibility */
        ul, ol {
          padding-left: 1.5rem;
        }
        
        li {
          margin-bottom: 0.25rem;
        }
        
        /* Heading hierarchy */
        h1, h2, h3, h4, h5, h6 {
          font-weight: 600;
          line-height: 1.25;
        }
        
        /* Color contrast improvements */
        .text-gray-300 {
          color: #d1d5db !important;
        }
        
        .text-gray-400 {
          color: #9ca3af !important;
        }
        
        .bg-gray-800 {
          background-color: #1f2937 !important;
        }
        
        .bg-gray-900 {
          background-color: #111827 !important;
        }
        
        /* Interactive elements */
        button, a, input, select, textarea {
          min-height: 44px;
          min-width: 44px;
        }
        
        /* Loading states */
        .loading {
          position: relative;
          overflow: hidden;
        }
        
        .loading::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        /* Responsive text sizing */
        @media (max-width: 640px) {
          html {
            font-size: 14px;
          }
        }
        
        @media (min-width: 1024px) {
          html {
            font-size: 16px;
          }
        }
      `}</style>
      {children}
    </>
  );
};

export default EnhancedAccessibility;