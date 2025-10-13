import React, { useEffect, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  // Add skip links
  const addSkipLinks = useCallback(() => {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'sr-only focus:not-sr-only';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    document.body.insertBefore(skipLinks, document.body.firstChild);
  }, []);

  // Enhance focus management
  const enhanceFocusManagement = useCallback(() => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible:focus {
        outline: 2px solid #06b6d4;
        outline-offset: 2px;
      }
      
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #06b6d4;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
      }
      
      .skip-link:focus {
        top: 6px;
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
      
      .sr-only.focus:not-sr-only:focus {
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
  }, []);

  // Add ARIA landmarks
  const addAriaLandmarks = useCallback(() => {
    // Add navigation landmark
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Main navigation');
    }

    // Add main landmark
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    // Add footer landmark
    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, []);

  // Enhance keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    // Add keyboard navigation for dropdowns
    const dropdowns = document.querySelectorAll('[data-dropdown]');
    dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector('[data-dropdown-trigger]');
      const menu = dropdown.querySelector('[data-dropdown-menu]');
      
      if (trigger && menu) {
        trigger.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            menu.classList.toggle('hidden');
          }
          if (e.key === 'Escape') {
            menu.classList.add('hidden');
            trigger.focus();
          }
        });
      }
    });

    // Add keyboard navigation for modals
    const modals = document.querySelectorAll('[data-modal]');
    modals.forEach(modal => {
      const closeButton = modal.querySelector('[data-modal-close]');
      if (closeButton) {
        closeButton.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            modal.classList.add('hidden');
          }
        });
      }
    });
  }, []);

  // Add high contrast mode support
  const addHighContrastSupport = useCallback(() => {
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
        
        .border-cyan-500 {
          border-color: #00ffff !important;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Add reduced motion support
  const addReducedMotionSupport = useCallback(() => {
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
  }, []);

  // Add screen reader announcements
  const addScreenReaderAnnouncements = useCallback(() => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.id = 'announcements';
    document.body.appendChild(announcement);
  }, []);

  // Announce page changes
  const announcePageChange = useCallback((pageTitle: string) => {
    const announcement = document.getElementById('announcements');
    if (announcement) {
      announcement.textContent = `Navigated to ${pageTitle}`;
    }
  }, []);

  // Monitor route changes for announcements
  useEffect(() => {
    const handleRouteChange = () => {
      const pageTitle = document.title;
      announcePageChange(pageTitle);
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    // Override pushState to catch programmatic navigation
    const originalPushState = history.pushState;
    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      setTimeout(handleRouteChange, 0);
    };

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      history.pushState = originalPushState;
    };
  }, [announcePageChange]);

  useEffect(() => {
    addSkipLinks();
    enhanceFocusManagement();
    addAriaLandmarks();
    enhanceKeyboardNavigation();
    addHighContrastSupport();
    addReducedMotionSupport();
    addScreenReaderAnnouncements();
  }, [
    addSkipLinks,
    enhanceFocusManagement,
    addAriaLandmarks,
    enhanceKeyboardNavigation,
    addHighContrastSupport,
    addReducedMotionSupport,
    addScreenReaderAnnouncements
  ]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;