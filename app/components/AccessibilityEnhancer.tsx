import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip to main content link
    const addSkipLink = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      skipLink.style.position = 'absolute';
      skipLink.style.left = '-9999px';
      skipLink.style.top = 'auto';
      skipLink.style.width = '1px';
      skipLink.style.height = '1px';
      skipLink.style.overflow = 'hidden';
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.left = '16px';
        skipLink.style.top = '16px';
        skipLink.style.width = 'auto';
        skipLink.style.height = 'auto';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.left = '-9999px';
        skipLink.style.top = 'auto';
        skipLink.style.width = '1px';
        skipLink.style.height = '1px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators to interactive elements
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
      
      interactiveElements.forEach(element => {
        element.addEventListener('focus', (e) => {
          e.target.style.outline = '2px solid #3b82f6';
          e.target.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', (e) => {
          e.target.style.outline = '';
          e.target.style.outlineOffset = '';
        });
      });
    };

    // Add ARIA labels to images without alt text
    const addAriaLabels = () => {
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        img.setAttribute('alt', `Image ${index + 1}`);
        img.setAttribute('aria-label', `Decorative image ${index + 1}`);
      });
    };

    // Enhance keyboard navigation
    const enhanceKeyboardNavigation = () => {
      // Add keyboard support for custom elements
      const customButtons = document.querySelectorAll('[role="button"]:not(button)');
      
      customButtons.forEach(button => {
        button.setAttribute('tabindex', '0');
        
        button.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            button.click();
          }
        });
      });
    };

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          .bg-gradient-to-r {
            background: #000 !important;
            color: #fff !important;
          }
          .text-gray-300 {
            color: #fff !important;
          }
          .border-slate-700 {
            border-color: #fff !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Add reduced motion support
    const addReducedMotionSupport = () => {
      const style = document.createElement('style');
      style.textContent = `
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

    // Add screen reader announcements
    const addScreenReaderSupport = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.id = 'screen-reader-announcements';
      document.body.appendChild(announcement);
    };

    // Initialize all accessibility enhancements
    addSkipLink();
    enhanceFocusManagement();
    addAriaLabels();
    enhanceKeyboardNavigation();
    addHighContrastSupport();
    addReducedMotionSupport();
    addScreenReaderSupport();

    // Add main content landmark
    const mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
    if (mainContent) {
      mainContent.id = 'main-content';
    } else {
      // Create main content landmark if it doesn't exist
      const firstSection = document.querySelector('section');
      if (firstSection) {
        firstSection.id = 'main-content';
        firstSection.setAttribute('role', 'main');
      }
    }

    // Announce page load to screen readers
    const announcement = document.getElementById('screen-reader-announcements');
    if (announcement) {
      announcement.textContent = 'Zion Tech Group website loaded successfully. Use Tab to navigate through the page.';
    }

  }, []);

  return null;
};

export default AccessibilityEnhancer;