import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Skip to main content functionality
    const addSkipToMainContent = () => {
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
    };

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector('main');
      if (main && !main.getAttribute('id')) {
        main.id = 'main-content';
        main.setAttribute('role', 'main');
        main.setAttribute('aria-label', 'Main content');
      }

      const header = document.querySelector('header');
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators for keyboard navigation
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }
        
        .focus-visible:focus {
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
        
        .sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `;
      document.head.appendChild(style);
    };

    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      // Handle escape key for modals and dropdowns
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }
      });

      // Handle tab navigation for custom components
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          const focusableElements = document.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
          );
          const focusableArray = Array.from(focusableElements) as HTMLElement[];
          const currentIndex = focusableArray.indexOf(document.activeElement as HTMLElement);
          
          if (e.shiftKey) {
            // Shift + Tab (backwards)
            if (currentIndex > 0) {
              focusableArray[currentIndex - 1].focus();
            } else {
              focusableArray[focusableArray.length - 1].focus();
            }
          } else {
            // Tab (forwards)
            if (currentIndex < focusableArray.length - 1) {
              focusableArray[currentIndex + 1].focus();
            } else {
              focusableArray[0].focus();
            }
          }
        }
      });
    };

    // Add screen reader announcements
    const addScreenReaderAnnouncements = () => {
      const announcementDiv = document.createElement('div');
      announcementDiv.setAttribute('aria-live', 'polite');
      announcementDiv.setAttribute('aria-atomic', 'true');
      announcementDiv.className = 'sr-only';
      announcementDiv.id = 'screen-reader-announcements';
      document.body.appendChild(announcementDiv);

      // Function to announce messages to screen readers
      (window as any).announceToScreenReader = (message: string) => {
        announcementDiv.textContent = message;
        setTimeout(() => {
          announcementDiv.textContent = '';
        }, 1000);
      };
    };

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          * {
            background-color: white !important;
            color: black !important;
            border-color: black !important;
          }
          
          a {
            text-decoration: underline !important;
          }
          
          button {
            border: 2px solid black !important;
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
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Initialize all accessibility enhancements
    addSkipToMainContent();
    addAriaLandmarks();
    enhanceFocusManagement();
    addKeyboardNavigation();
    addScreenReaderAnnouncements();
    addHighContrastSupport();
    addReducedMotionSupport();

    // Add loading state announcements
    const announceLoadingState = () => {
      if ((window as any).announceToScreenReader) {
        (window as any).announceToScreenReader('Page loaded successfully');
      }
    };

    // Announce when page is fully loaded
    if (document.readyState === 'complete') {
      announceLoadingState();
    } else {
      window.addEventListener('load', announceLoadingState);
    }

    return () => {
      window.removeEventListener('load', announceLoadingState);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancer;