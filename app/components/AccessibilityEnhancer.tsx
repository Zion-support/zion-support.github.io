import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  skipToContent?: boolean;
  focusManagement?: boolean;
  reducedMotion?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children,
  skipToContent = true,
  focusManagement = true,
  reducedMotion = true
}) => {
  useEffect(() => {
    // Skip to content functionality
    if (skipToContent) {
      const handleSkipToContent = (e: KeyboardEvent) => {
        if (e.key === 'Tab' && !e.shiftKey) {
          const skipLink = document.getElementById('skip-to-content');
          if (skipLink) {
            skipLink.focus();
          }
        }
      };

      document.addEventListener('keydown', handleSkipToContent);
      return () => document.removeEventListener('keydown', handleSkipToContent);
    }
    return undefined;
  }, [skipToContent]);

  useEffect(() => {
    // Focus management for modals and dynamic content
    if (focusManagement) {
      const handleFocusTrap = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }
      };

      document.addEventListener('keydown', handleFocusTrap);
      return () => document.removeEventListener('keydown', handleFocusTrap);
    }
    return undefined;
  }, [focusManagement]);

  useEffect(() => {
    // Respect user's motion preferences
    if (reducedMotion) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.style.setProperty('--animation-duration', '0.01ms');
          document.documentElement.style.setProperty('--animation-iteration-count', '1');
        } else {
          document.documentElement.style.removeProperty('--animation-duration');
          document.documentElement.style.removeProperty('--animation-iteration-count');
        }
      };

      // Initial check
      if (mediaQuery.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--animation-iteration-count', '1');
      }
      
      mediaQuery.addEventListener('change', handleMotionChange);
      
      return () => mediaQuery.removeEventListener('change', handleMotionChange);
    }
    return undefined;
  }, [reducedMotion]);

  useEffect(() => {
    // Improve focus management
    const improveFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
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
          border: 0;
        }
        
        .focus:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `;
      document.head.appendChild(style);
    };

    improveFocusManagement();

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, []);

  return (
    <>
      {skipToContent && (
        <a
          id="skip-to-content"
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
          tabIndex={1}
        >
          Skip to main content
        </a>
      )}
      {children}
    </>
  );
};

export default AccessibilityEnhancer;