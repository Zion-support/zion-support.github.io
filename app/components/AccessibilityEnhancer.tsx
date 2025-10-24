'use client';
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children?: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children,
  enableKeyboardNavigation: _enableKeyboardNavigation = true,
  enableScreenReaderSupport: _enableScreenReaderSupport = true,
  enableHighContrast: _enableHighContrast = false,
  enableFocusManagement: _enableFocusManagement = true
}) => {
  useEffect(() => {
    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = document.createElement('div');
      skipLinks.innerHTML = `
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>
        <a href="#navigation" class="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
          Skip to navigation
        </a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators
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
      `;
      document.head.appendChild(style);

      // Trap focus in modals
      const trapFocus = (element: HTMLElement) => {
        const focusableElements = element.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
              }
            }
          }
        };

        element.addEventListener('keydown', handleTabKey);
        firstElement?.focus();

        return () => {
          element.removeEventListener('keydown', handleTabKey);
        };
      };

      // Apply focus trap to modals
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => {
        trapFocus(modal as HTMLElement);
      });
    };

    // Add ARIA labels and roles
    const enhanceARIA = () => {
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
      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach(link => {
        if (!link.textContent?.trim()) {
          const href = link.getAttribute('href');
          if (href) {
            link.setAttribute('aria-label', `Link to ${href}`);
          }
        }
      });

      // Add role="banner" to header
      const header = document.querySelector('header');
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner');
      }

      // Add role="main" to main content
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
        main.setAttribute('id', 'main-content');
      }

      // Add role="navigation" to nav elements
      const navs = document.querySelectorAll('nav:not([role])');
      navs.forEach(nav => {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('id', 'navigation');
      });

      // Add role="contentinfo" to footer
      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    // Enhance keyboard navigation
    const enhanceKeyboardNavigation = () => {
      // Add keyboard support for dropdowns
      const dropdowns = document.querySelectorAll('[data-dropdown]');
      dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('[data-dropdown-trigger]') as HTMLElement;
        const menu = dropdown.querySelector('[data-dropdown-menu]') as HTMLElement;

        if (trigger && menu) {
          const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              menu.classList.toggle('hidden');
            } else if (e.key === 'Escape') {
              menu.classList.add('hidden');
              trigger.focus();
            }
          };

          trigger.addEventListener('keydown', handleKeyDown);
        }
      });
    };

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          * {
            border-color: currentColor !important;
          }
          .bg-gray-100 {
            background-color: #000 !important;
            color: #fff !important;
          }
          .text-gray-600 {
            color: #fff !important;
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

    // Initialize all enhancements
    addSkipLinks();
    enhanceFocusManagement();
    enhanceARIA();
    enhanceKeyboardNavigation();
    addHighContrastSupport();
    addReducedMotionSupport();

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      enhanceARIA();
      enhanceKeyboardNavigation();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return children ? <>{children}</> : null;
};

export default AccessibilityEnhancer;
