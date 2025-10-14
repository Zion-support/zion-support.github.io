import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Skip to main content functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.zIndex = '9999';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // High contrast mode toggle
    const addHighContrastToggle = () => {
      const toggle = document.createElement('button');
      toggle.textContent = 'Toggle High Contrast';
      toggle.className = 'fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded z-50';
      toggle.onclick = () => {
        document.body.classList.toggle('high-contrast');
      };
      document.body.appendChild(toggle);
    };

    // Focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #a855f7 !important;
          outline-offset: 2px !important;
        }
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
      `;
      document.head.appendChild(style);
    };

    // Keyboard navigation enhancement
    const enhanceKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        // Escape key to close modals
        if (e.key === 'Escape') {
          const modals = document.querySelectorAll('[role="dialog"]');
          modals.forEach(modal => {
            if (modal.getAttribute('aria-hidden') === 'false') {
              modal.setAttribute('aria-hidden', 'true');
            }
          });
        }
      });
    };

    // Initialize accessibility features
    addSkipLink();
    addHighContrastToggle();
    enhanceFocusManagement();
    enhanceKeyboardNavigation();

    // Cleanup
    return () => {
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
      const contrastToggle = document.querySelector('button[onclick*="high-contrast"]');
      if (contrastToggle) {
        contrastToggle.remove();
      }
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;