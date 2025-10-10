'use client';
import React, { useEffect, ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Keyboard navigation support
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Add focus styles
    if (enableFocusManagement) {
      const addFocusStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
          .keyboard-navigation *:focus {
            outline: 2px solid #3b82f6 !important;
            outline-offset: 2px !important;
          }
          
          .keyboard-navigation button:focus,
          .keyboard-navigation a:focus,
          .keyboard-navigation input:focus,
          .keyboard-navigation textarea:focus,
          .keyboard-navigation select:focus {
            outline: 2px solid #3b82f6 !important;
            outline-offset: 2px !important;
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1) !important;
          }
          
          .sr-only {
            position: absolute !important;
            width: 1px !important;
            height: 1px !important;
            padding: 0 !important;
            margin: -1px !important;
            overflow: hidden !important;
            clip: rect(0, 0, 0, 0) !important;
            white-space: nowrap !important;
            border: 0 !important;
          }
          
          .sr-only:focus {
            position: static !important;
            width: auto !important;
            height: auto !important;
            padding: 0.5rem !important;
            margin: 0 !important;
            overflow: visible !important;
            clip: auto !important;
            white-space: normal !important;
          }
        `;
        document.head.appendChild(style);
      };

      addFocusStyles();
    }
  }, [enableFocusManagement]);

  useEffect(() => {
    // Screen reader support
    if (enableScreenReaderSupport) {
      // Add ARIA landmarks
      const addAriaLandmarks = () => {
        const main = document.querySelector('main');
        if (main && !main.getAttribute('role')) {
          main.setAttribute('role', 'main');
        }

        const nav = document.querySelector('nav');
        if (nav && !nav.getAttribute('role')) {
          nav.setAttribute('role', 'navigation');
        }

        const footer = document.querySelector('footer');
        if (footer && !footer.getAttribute('role')) {
          footer.setAttribute('role', 'contentinfo');
        }
      };

      addAriaLandmarks();
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // High contrast mode
    if (enableHighContrast) {
      const addHighContrastStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
          .high-contrast {
            filter: contrast(150%) brightness(110%);
          }
          
          .high-contrast * {
            border-color: currentColor !important;
          }
        `;
        document.head.appendChild(style);
      };

      addHighContrastStyles();
    }
  }, [enableHighContrast]);

  return <>{children}</>;
};

AccessibilityEnhancer.displayName = 'AccessibilityEnhancer';

export default AccessibilityEnhancer;