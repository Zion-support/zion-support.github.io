'use client'
import Navigation from './Navigation';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add keyboard navigation support
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {;
          const mainContent = document.querySelector('main, [role=&quot;main&quot;]');
          if (mainContent) {
            (mainContent as HTMLElement).focus();
            event.preventDefault();
          }
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  useEffect(() => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {;
        outline: 2px solid #8b5cf6 !important;
        outline-offset: 2px !important;
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // Add high contrast support
    if (enableHighContrast) {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          * {;
            border-color: currentColor !important;
          }
          button, a {
            border: 2px solid currentColor !important;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Add focus management
    if (enableFocusManagement) {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex=&quot;-1&quot;])';
      
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
      
      .high-contrast {
        filter: contrast(150%);
      }
      
      .reduce-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    }
  }, []);

      // Apply focus trapping to modals
      const modals = document.querySelectorAll('[role=&quot;dialog&quot;]');
      modals.forEach(trapFocus);
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, []);

  return <>{children}</>
}
export default AccessibilityEnhancer;