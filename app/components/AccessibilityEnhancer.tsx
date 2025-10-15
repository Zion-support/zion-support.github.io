import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableSkipLinks?: boolean;
  enableKeyboardNav?: boolean;
  enableFocusIndicators?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Focus management for keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    // Apply accessibility settings
    const root = document.documentElement;
    
    // High contrast mode
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion mode
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size adjustment
    root.style.setProperty('--font-size-multiplier', 
      fontSize === 'large' ? '1.2' : 
      fontSize === 'extra-large' ? '1.4' : 
      fontSize === 'small' ? '0.9' : '1'
    );

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }
    };

    // Add skip links
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Initialize accessibility features
    addFocusStyles();
    addAriaLabels();
    addSkipLinks();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [enableKeyboardNav]);

  // Focus management
  const handleFocusIn = useCallback((event: FocusEvent) => {
    const target = event.target as HTMLElement;
    
    // Add focus ring for keyboard navigation
    if (target.matches('button, a, input, textarea, select, [tabindex]')) {
      target.classList.add('keyboard-focus');
    }
  }, []);

  const handleFocusOut = useCallback((event: FocusEvent) => {
    const target = event.target as HTMLElement;
    target.classList.remove('keyboard-focus');
  }, []);

  useEffect(() => {
    if (!enableFocusIndicators) return;

    // Add custom focus styles
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 3px solid #3B82F6 !important;
        outline-offset: 2px !important;
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }

      .sr-only-focusable:focus,
      .sr-only-focusable:active {
        position: static;
        width: auto;
        height: auto;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }

      /* Skip link styles */
      .skip-link {
        position: absolute;
        top: -40px;
        left: 0;
        background: #3B82F6;
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        z-index: 100;
        font-weight: 600;
        border-radius: 0 0 4px 0;
      }

      .skip-link:focus {
        top: 0;
      }

      /* High contrast mode support */
      @media (prefers-contrast: high) {
        * {
          border-width: 2px !important;
        }
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }

      /* Focus visible polyfill */
      *:focus:not(:focus-visible) {
        outline: none;
      }

      *:focus-visible {
        outline: 3px solid #3B82F6;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      if (announcement.parentNode) {
        announcement.parentNode.removeChild(announcement);
      }
    }, 1000);
  }, []);

  return (
    <div id="main-content">
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;