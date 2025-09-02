import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip to main content link
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators for keyboard navigation
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible {
          outline: 2px solid #2563eb;
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

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      // Add ARIA labels to buttons without text
      const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      iconButtons.forEach(button => {
        const icon = button.querySelector('svg');
        if (icon && !button.textContent?.trim()) {
          const iconName = icon.getAttribute('data-icon') || 'button';
          button.setAttribute('aria-label', iconName);
        }
      });

      // Add ARIA labels to links
      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach(link => {
        if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
          const href = link.getAttribute('href');
          if (href) {
            link.setAttribute('aria-label', `Navigate to ${href}`);
          }
        }
      });
    };

    // Enhance color contrast
    const enhanceColorContrast = () => {
      const style = document.createElement('style');
      style.textContent = `
        /* Ensure minimum contrast ratios */
        .text-gray-600 {
          color: #4b5563 !important;
        }
        
        .text-gray-700 {
          color: #374151 !important;
        }
        
        .text-gray-800 {
          color: #1f2937 !important;
        }
        
        .text-gray-900 {
          color: #111827 !important;
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .bg-white {
            background-color: #ffffff !important;
            border: 1px solid #000000 !important;
          }
          
          .text-gray-600 {
            color: #000000 !important;
          }
        }
        
        /* Reduced motion support */
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
    addSkipLink();
    enhanceFocusManagement();
    addAriaLabels();
    enhanceColorContrast();

    // Re-run ARIA label addition when DOM changes
    const observer = new MutationObserver(() => {
      addAriaLabels();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;