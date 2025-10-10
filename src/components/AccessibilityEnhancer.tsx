
import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';


interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {

  const location = useLocation();

  // Focus management
  const manageFocus = useCallback(() => {
    // Skip to main content functionality
    const skipLink = document.querySelector('.skip-link') as HTMLAnchorElement;
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(skipLink.getAttribute('href') || '#main-content') as HTMLElement;
        if (target) {
          target.focus();
          target.scrollIntoView({ behavior: 'smooth' });

        }
      });
    }


  useEffect(() => {
    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.querySelector('[data-skip-to-main]') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
        }
      }
      
      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
          activeElement.click();
        }
      }
    };

    // Add focus management
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Add focus ring for keyboard navigation
      if (target.matches('button, a, input, textarea, select, [tabindex]')) {
        target.classList.add('focus-visible');
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.classList.remove('focus-visible');
    };

    // Add ARIA live region for announcements
    const addLiveRegion = () => {
      const existingLiveRegion = document.getElementById('aria-live-region');
      if (!existingLiveRegion) {
        const liveRegion = document.createElement('div');
        liveRegion.id = 'aria-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
      }
    };

    // Add skip to main content link
    const addSkipLink = () => {
      const existingSkipLink = document.querySelector('[data-skip-to-main]');
      if (!existingSkipLink) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
        skipLink.setAttribute('data-skip-to-main', 'true');
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    };

    // Add main content ID
    const addMainContentId = () => {
      const main = document.querySelector('main');
      if (main && !main.id) {
        main.id = 'main-content';
      }
    };

    // Initialize accessibility features
    addLiveRegion();
    addSkipLink();
    addMainContentId();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);

    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;

