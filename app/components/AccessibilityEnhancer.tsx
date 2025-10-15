import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
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
    // Skip to main content functionality
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-cyan-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add focus indicators for keyboard navigation
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }
        .sr-only:focus {
          position: absolute;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
          z-index: 1000;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA labels to interactive elements
    const enhanceInteractiveElements = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button, index) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });

      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach((link, index) => {
        if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
          link.setAttribute('aria-label', `Link ${index + 1}`);
        }
      });
    };

    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        // Escape key to close modals/dropdowns
        if (e.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }
      });
    };

    // Initialize accessibility enhancements
    addSkipLink();
    addFocusStyles();
    enhanceInteractiveElements();
    addKeyboardNavigation();

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      enhanceInteractiveElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;