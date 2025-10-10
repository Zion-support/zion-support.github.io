'use client';
import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    // Add focus management
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && target.scrollIntoView) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    // Add ARIA live region for announcements
    const addLiveRegion = () => {
      if (!document.getElementById('aria-live-region')) {
        const liveRegion = document.createElement('div');
        liveRegion.id = 'aria-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
      }
    };

    // Enhance form accessibility
    const enhanceForms = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach((form) => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach((input, index) => {
          const inputElement = input as HTMLInputElement;
          if (!inputElement.id) {
            inputElement.id = `input-${index}`;
          }
          if (!inputElement.getAttribute('aria-describedby')) {
            const label = form.querySelector(`label[for="${inputElement.id}"]`);
            if (label) {
              inputElement.setAttribute('aria-describedby', `${inputElement.id}-description`);
            }
          }
        });
      });
    };

    // Add skip links
    const addSkipLinks = () => {
      if (!document.getElementById('skip-links')) {
        const skipLinks = document.createElement('div');
        skipLinks.id = 'skip-links';
        skipLinks.innerHTML = `
          <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold z-50">
            Skip to main content
          </a>
          <a href="#navigation" class="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold z-50">
            Skip to navigation
          </a>
        `;
        document.body.insertBefore(skipLinks, document.body.firstChild);
      }
    };

    // Initialize accessibility enhancements
    addLiveRegion();
    addSkipLinks();
    enhanceForms();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('focusin', handleFocusIn);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;