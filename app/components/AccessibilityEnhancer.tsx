import React, { useEffect, useRef } from 'react';

<<<<<<< HEAD
=======
<<<<<<< HEAD
const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip link functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Focus management for keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Alt + M
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
=======
>>>>>>> 7c52cf7e22c3997c956e17b376b01941cad4bdd4
interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const focusTrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add keyboard navigation enhancements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.querySelector('[data-skip-link]') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
          event.preventDefault();
        }
      }

      // Escape key handling
      if (event.key === 'Escape') {
        const modal = document.querySelector('[role="dialog"]') as HTMLElement;
        if (modal) {
          const closeButton = modal.querySelector('[aria-label="Close"]') as HTMLElement;
          if (closeButton) {
            closeButton.focus();
          }
<<<<<<< HEAD
=======
>>>>>>> 0030dc29551cef3d712867a05efd73f15c1feb05
>>>>>>> 7c52cf7e22c3997c956e17b376b01941cad4bdd4
        }
      }
    };

<<<<<<< HEAD
=======
<<<<<<< HEAD
    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    // Add focus styles
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #3b82f6 !important;
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
          border: 0;
        }
        .focus\\:not-sr-only:focus {
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

    // Initialize accessibility features
    addSkipLink();
    addFocusStyles();
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Add keyboard navigation class on first tab
    const handleFirstTab = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
        document.removeEventListener('keydown', handleFirstTab);
      }
    };
    document.addEventListener('keydown', handleFirstTab);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleFirstTab);
    };
  }, []);

  return null;
=======
>>>>>>> 7c52cf7e22c3997c956e17b376b01941cad4bdd4
    // Add focus management
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Ensure focus is visible
      if (target && target.style) {
        target.style.outline = '2px solid #06b6d4';
        target.style.outlineOffset = '2px';
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Remove focus outline
      if (target && target.style) {
        target.style.outline = '';
        target.style.outlineOffset = '';
      }
    };

    // Add ARIA live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
      
      const existingLiveRegion = document.getElementById('live-region');
      if (existingLiveRegion) {
        existingLiveRegion.remove();
      }
    };
  }, []);

  return (
    <div ref={focusTrapRef} className="accessibility-enhanced">
      {children}
    </div>
  );
<<<<<<< HEAD
=======
>>>>>>> 0030dc29551cef3d712867a05efd73f15c1feb05
>>>>>>> 7c52cf7e22c3997c956e17b376b01941cad4bdd4
};

export default AccessibilityEnhancer;
