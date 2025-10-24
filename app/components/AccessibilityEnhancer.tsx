'use client';
import React, { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

const AccessibilityEnhancer: React.FC<Props> = ({ children }) => {
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

    // Initialize all enhancements
    addSkipLinks();
    enhanceFocusManagement();
    enhanceARIA();

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      enhanceARIA();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;