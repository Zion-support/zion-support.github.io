import React, { useEffect, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  // Add skip navigation link
  const addSkipNavigation = useCallback(() => {
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
      padding: 8px 16px;
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
  }, []);

  // Enhance focus management
  const enhanceFocusManagement = useCallback(() => {
    // Add focus indicators for keyboard navigation
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible:focus {
        outline: 2px solid #06b6d4;
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
      
      .focus\:not-sr-only:focus {
        position: static;
        width: auto;
        height: auto;
        padding: 8px 16px;
        margin: 0;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Add ARIA landmarks
  const addAriaLandmarks = useCallback(() => {
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('aria-label')) {
      nav.setAttribute('aria-label', 'Main navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, []);

  // Enhance form accessibility
  const enhanceFormAccessibility = useCallback(() => {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach((input) => {
        const inputElement = input as HTMLInputElement;
        
        // Add required attribute if not present
        if (inputElement.required && !inputElement.getAttribute('aria-required')) {
          inputElement.setAttribute('aria-required', 'true');
        }
        
        // Add aria-describedby for error messages
        const errorElement = inputElement.parentElement?.querySelector('.error-message');
        if (errorElement && !inputElement.getAttribute('aria-describedby')) {
          const errorId = errorElement.id || `error-${Math.random().toString(36).substr(2, 9)}`;
          errorElement.id = errorId;
          inputElement.setAttribute('aria-describedby', errorId);
        }
      });
    });
  }, []);

  // Add keyboard navigation support
  const addKeyboardNavigation = useCallback(() => {
    // Handle escape key for modals and dropdowns
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        // Close any open modals or dropdowns
        const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
        openDropdowns.forEach((dropdown) => {
          dropdown.setAttribute('aria-expanded', 'false');
        });
      }
    });

    // Handle arrow keys for menu navigation
    const menus = document.querySelectorAll('[role="menu"]');
    menus.forEach((menu) => {
      menu.addEventListener('keydown', (e) => {
        const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]'));
        const currentIndex = menuItems.indexOf(document.activeElement as Element);
        
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % menuItems.length;
            (menuItems[nextIndex] as HTMLElement).focus();
            break;
          case 'ArrowUp':
            e.preventDefault();
            const prevIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
            (menuItems[prevIndex] as HTMLElement).focus();
            break;
          case 'Home':
            e.preventDefault();
            (menuItems[0] as HTMLElement).focus();
            break;
          case 'End':
            e.preventDefault();
            (menuItems[menuItems.length - 1] as HTMLElement).focus();
            break;
        }
      });
    });
  }, []);

  // Add screen reader announcements
  const addScreenReaderAnnouncements = useCallback(() => {
    const announcementDiv = document.createElement('div');
    announcementDiv.setAttribute('aria-live', 'polite');
    announcementDiv.setAttribute('aria-atomic', 'true');
    announcementDiv.className = 'sr-only';
    announcementDiv.id = 'announcements';
    document.body.appendChild(announcementDiv);

    // Function to announce messages
    (window as any).announceToScreenReader = (message: string) => {
      announcementDiv.textContent = message;
      setTimeout(() => {
        announcementDiv.textContent = '';
      }, 1000);
    };
  }, []);

  // Enhance color contrast and readability
  const enhanceColorContrast = useCallback(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Ensure sufficient color contrast */
      .text-gray-300 {
        color: #d1d5db !important; /* Better contrast than default */
      }
      
      .text-gray-400 {
        color: #9ca3af !important; /* Better contrast than default */
      }
      
      /* High contrast mode support */
      @media (prefers-contrast: high) {
        .bg-gradient-to-r {
          background: #000 !important;
          color: #fff !important;
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
  }, []);

  useEffect(() => {
    addSkipNavigation();
    enhanceFocusManagement();
    addAriaLandmarks();
    enhanceFormAccessibility();
    addKeyboardNavigation();
    addScreenReaderAnnouncements();
    enhanceColorContrast();

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      addAriaLandmarks();
      enhanceFormAccessibility();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [
    addSkipNavigation,
    enhanceFocusManagement,
    addAriaLandmarks,
    enhanceFormAccessibility,
    addKeyboardNavigation,
    addScreenReaderAnnouncements,
    enhanceColorContrast,
  ]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;