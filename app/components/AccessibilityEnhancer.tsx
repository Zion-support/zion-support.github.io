'use client';

import { useEffect, useCallback } from 'react';

export default function AccessibilityEnhancer() {
  // Add keyboard navigation enhancements
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
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

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Add focus management
  useEffect(() => {
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
          border-radius: 4px;
        }
        
        .skip-link:focus {
          top: 6px;
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

    addFocusStyles();
  }, []);

  // Add skip link
  useEffect(() => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.setAttribute('tabIndex', '1');
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  // Add ARIA labels to interactive elements
  useEffect(() => {
    const addAriaLabels = () => {
      // Add ARIA labels to buttons without text
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button, index) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });

      // Add ARIA labels to links without text
      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach((link, index) => {
        if (!link.textContent?.trim()) {
          link.setAttribute('aria-label', `Link ${index + 1}`);
        }
      });

      // Add role attributes to custom elements
      const customElements = document.querySelectorAll('[data-role]');
      customElements.forEach(element => {
        const role = element.getAttribute('data-role');
        if (role) {
          element.setAttribute('role', role);
        }
      });
    };

    // Run immediately and on DOM changes
    addAriaLabels();
    
    const observer = new MutationObserver(addAriaLabels);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  // Add high contrast mode support
  useEffect(() => {
    const addHighContrastSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };

      handleContrastChange(mediaQuery);
      mediaQuery.addEventListener('change', handleContrastChange);

      return () => mediaQuery.removeEventListener('change', handleContrastChange);
    };

    const cleanup = addHighContrastSupport();
    return cleanup;
  }, []);

  // Add screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Expose announcement function globally for use by other components
  useEffect(() => {
    (window as any).announceToScreenReader = announceToScreenReader;
    return () => {
      delete (window as any).announceToScreenReader;
    };
  }, [announceToScreenReader]);

  return null;
}