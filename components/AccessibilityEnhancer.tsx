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

        /* Ensure minimum contrast ratios */
        .text-gray-600 {
          color: #4b5563 !important;
        }
        
        .text-gray-700 {
          color: #374151 !important;
        }
        
        .bg-gray-100 {
          background-color: #f3f4f6 !important;
        }
        
        .bg-gray-200 {
          background-color: #e5e7eb !important;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .text-gray-600 {
            color: #000000 !important;
          }
          
          .text-gray-700 {
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

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      // Add ARIA labels to buttons without text
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button, index) => {
        if (!button.textContent?.trim()) {
          const icon = button.querySelector('svg');
          if (icon) {
            const iconName = icon.getAttribute('data-icon') || 'button';
            button.setAttribute('aria-label', iconName);
          } else {
            button.setAttribute('aria-label', `Button ${index + 1}`);
          }
        }
      });

      // Add ARIA labels to images without alt text
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        img.setAttribute('alt', `Image ${index + 1}`);
      });

      // Add ARIA labels to links without text
      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach((link, index) => {
        if (!link.textContent?.trim()) {
          const href = link.getAttribute('href');
          if (href) {
            link.setAttribute('aria-label', `Navigate to ${href}`);
          } else {
            link.setAttribute('aria-label', `Link ${index + 1}`);
          }
        }
      });
    };

    // Add semantic HTML structure
    const enhanceSemanticStructure = () => {
      // Add main landmark if missing
      if (!document.querySelector('main')) {
        const main = document.createElement('main');
        main.id = 'main-content';
        main.setAttribute('role', 'main');
        
        // Find the main content area and wrap it
        const content = document.querySelector('#__next') || document.body;
        if (content) {
          const children = Array.from(content.children);
          children.forEach(child => {
            if (!['header', 'nav', 'footer'].includes(child.tagName.toLowerCase())) {
              main.appendChild(child);
            }
          });
          content.appendChild(main);
        }
      }

      // Add navigation landmarks
      const navElements = document.querySelectorAll('nav:not([aria-label]):not([aria-labelledby])');
      navElements.forEach((nav, index) => {
        nav.setAttribute('aria-label', `Navigation ${index + 1}`);
      });

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.id) {
          const text = heading.textContent?.toLowerCase().replace(/\s+/g, '-') || `heading-${index}`;
          heading.id = text;
        }
      });
    };

    // Add keyboard navigation support
    const enhanceKeyboardNavigation = () => {
      // Add keyboard event listeners for better navigation
      document.addEventListener('keydown', (e) => {
        // Skip to main content with Alt + M
        if (e.altKey && e.key === 'm') {
          e.preventDefault();
          const main = document.querySelector('main, #main-content');
          if (main) {
            main.focus();
            main.scrollIntoView({ behavior: 'smooth' });
          }
        }

        // Skip to navigation with Alt + N
        if (e.altKey && e.key === 'n') {
          e.preventDefault();
          const nav = document.querySelector('nav');
          if (nav) {
            nav.focus();
            nav.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    };

    // Initialize accessibility enhancements
    addSkipLink();
    enhanceFocusManagement();
    addAriaLabels();
    enhanceSemanticStructure();
    enhanceKeyboardNavigation();

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      addAriaLabels();
      enhanceSemanticStructure();
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