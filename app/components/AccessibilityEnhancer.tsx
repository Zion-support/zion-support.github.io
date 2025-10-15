import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add keyboard navigation enhancements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          event.preventDefault();
        }
      }
      
      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    // Add focus management
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target) {
        // Add focus ring for keyboard navigation
        target.classList.add('focus-visible');
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target) {
        target.classList.remove('focus-visible');
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
          
          // Add proper labels if missing
          if (!inputElement.labels || inputElement.labels.length === 0) {
            const label = document.createElement('label');
            label.setAttribute('for', inputElement.id || `input-${index}`);
            label.textContent = inputElement.placeholder || 'Input field';
            inputElement.parentNode?.insertBefore(label, inputElement);
          }
          
          // Add ARIA attributes
          if (inputElement.required && !inputElement.getAttribute('aria-required')) {
            inputElement.setAttribute('aria-required', 'true');
          }
          
          if (inputElement.hasAttribute('aria-invalid')) {
            inputElement.setAttribute('aria-describedby', `${inputElement.id}-error`);
          }
        });
      });
    };

    // Add skip links
    const addSkipLinks = () => {
      if (!document.getElementById('skip-links')) {
        const skipLinks = document.createElement('div');
        skipLinks.id = 'skip-links';
        skipLinks.className = 'sr-only focus-within:not-sr-only';
        
        const skipToMain = document.createElement('a');
        skipToMain.href = '#main-content';
        skipToMain.textContent = 'Skip to main content';
        skipToMain.className = 'block p-2 bg-blue-600 text-white focus:bg-blue-700';
        
        skipLinks.appendChild(skipToMain);
        document.body.insertBefore(skipLinks, document.body.firstChild);
      }
    };

    // Initialize accessibility enhancements
    addLiveRegion();
    addSkipLinks();
    enhanceForms();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    // Re-enhance forms when DOM changes
    const observer = new MutationObserver(() => {
      enhanceForms();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
