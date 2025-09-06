import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add keyboard navigation improvements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Tab key
      if (event.key === 'Tab' && !event.shiftKey && document.activeElement === document.body) {
        const mainContent = document.querySelector('main');
        if (mainContent) {
          mainContent.focus();
          event.preventDefault();
        }
      }
      
      // Escape key to close any open modals or dropdowns
      if (event.key === 'Escape') {
        const activeDropdown = document.querySelector('[aria-expanded="true"]');
        if (activeDropdown) {
          (activeDropdown as HTMLElement).click();
        }
      }
    };

    // Add focus management for better keyboard navigation
    const addFocusManagement = () => {
      // Add skip to main content link
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
      
      // Add main content ID
      const mainContent = document.querySelector('main');
      if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
      }
    };

    // Add ARIA labels to interactive elements
    const enhanceAriaLabels = () => {
      // Add ARIA labels to buttons without text
      const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      iconButtons.forEach((button, index) => {
        const icon = button.querySelector('svg');
        if (icon && !button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });
      
      // Add ARIA labels to links without text
      const iconLinks = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      iconLinks.forEach((link, index) => {
        const icon = link.querySelector('svg');
        if (icon && !link.textContent?.trim()) {
          link.setAttribute('aria-label', `Link ${index + 1}`);
        }
      });
    };

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          .bg-gradient-to-br {
            background: #000 !important;
            color: #fff !important;
          }
          .text-gray-600 {
            color: #ccc !important;
          }
          .border-gray-200 {
            border-color: #666 !important;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Initialize accessibility enhancements
    addFocusManagement();
    enhanceAriaLabels();
    addHighContrastSupport();

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);

    // Re-enhance on route changes
    const observer = new MutationObserver(() => {
      enhanceAriaLabels();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;