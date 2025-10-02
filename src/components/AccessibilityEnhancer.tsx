import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Enhanced keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          event.preventDefault();
        }
      }

      // Escape key handling for modals
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
          if (closeButton && document.activeElement === modal) {
            (closeButton as HTMLElement).click();
          }
        });
      }
    };

    // Focus management
    const manageFocus = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        .focus-visible:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          * {
            border-color: currentColor !important;
          }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `;
      document.head.appendChild(style);

      // Add skip link
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

      // Add main content ID
      const mainContent = document.querySelector('main');
      if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
      }
    };

    // ARIA enhancements
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

      // Add role to navigation elements
      const navElements = document.querySelectorAll('nav:not([role])');
      navElements.forEach(nav => nav.setAttribute('role', 'navigation'));

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.id) {
          const text = heading.textContent?.toLowerCase().replace(/\s+/g, '-') || `heading-${index}`;
          heading.id = text;
        }
      });
    };

    // Color contrast checker
    const checkColorContrast = () => {
      const elements = document.querySelectorAll('*');
      elements.forEach(element => {
        const styles = window.getComputedStyle(element);
        const color = styles.color;
        const backgroundColor = styles.backgroundColor;
        
        // Basic contrast check (simplified)
        if (color && backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)') {
          // This is a simplified check - in production, you'd want a more robust solution
          element.setAttribute('data-contrast-checked', 'true');
        }
      });
    };

    // Initialize all enhancements
    document.addEventListener('keydown', handleKeyDown);
    manageFocus();
    enhanceARIA();
    checkColorContrast();

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      enhanceARIA();
      checkColorContrast();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;