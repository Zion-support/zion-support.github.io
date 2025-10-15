import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Skip to main content functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Focus management for modals and dropdowns
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // Close any open modals or dropdowns
        const openElements = document.querySelectorAll('[aria-expanded="true"]');
        openElements.forEach(element => {
          if (element instanceof HTMLElement) {
            element.setAttribute('aria-expanded', 'false');
            element.blur();
          }
        });
      }
    };

    // Add keyboard navigation for custom elements
    const addKeyboardNavigation = () => {
      const customButtons = document.querySelectorAll('[role="button"]:not(button)');
      customButtons.forEach(button => {
        button.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            (button as HTMLElement).click();
          }
        });
      });
    };

    // Improve focus indicators
    const improveFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        .focus\:ring-2:focus {
          box-shadow: 0 0 0 2px #3b82f6 !important;
        }
      `;
      document.head.appendChild(style);
    };

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

    // Initialize accessibility enhancements
    improveFocusIndicators();
    addKeyboardNavigation();
    addAriaLandmarks();

    // Re-run on navigation changes
    const observer = new MutationObserver(() => {
      addKeyboardNavigation();
      addAriaLandmarks();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;