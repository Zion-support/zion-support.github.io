import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Skip to main content functionality
    const addSkipToMainContent = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #2563eb;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // High contrast mode detection
    const addHighContrastSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };
      
      mediaQuery.addEventListener('change', handleContrastChange);
      handleContrastChange(mediaQuery);
    };

    // Reduced motion support
    const addReducedMotionSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion');
        } else {
          document.documentElement.classList.remove('reduce-motion');
        }
      };
      
      mediaQuery.addEventListener('change', handleMotionChange);
      handleMotionChange(mediaQuery);
    };

    // Focus management
    const addFocusManagement = () => {
      let focusableElements: HTMLElement[] = [];
      
      const updateFocusableElements = () => {
        focusableElements = Array.from(
          document.querySelectorAll(
            'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
          )
        ) as HTMLElement[];
      };
      
      const trapFocus = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      };
      
      document.addEventListener('keydown', trapFocus);
      updateFocusableElements();
      
      // Update focusable elements when DOM changes
      const observer = new MutationObserver(updateFocusableElements);
      observer.observe(document.body, { childList: true, subtree: true });
      
      return () => {
        document.removeEventListener('keydown', trapFocus);
        observer.disconnect();
      };
    };

    // Initialize all accessibility features
    addSkipToMainContent();
    addHighContrastSupport();
    addReducedMotionSupport();
    const cleanup = addFocusManagement();
    
    return cleanup;
  }, []);

  return null;
};

export default AccessibilityEnhancer;