import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Tab key
      if (event.key === 'Tab' && !event.shiftKey) {
        const skipLink = document.querySelector('[data-skip-to-main]') as HTMLElement;
        if (skipLink && document.activeElement === document.body) {
          skipLink.focus();
        }
      }
      
      // Close mobile menu with Escape key
      if (event.key === 'Escape') {
        const mobileMenu = document.querySelector('[data-mobile-menu]') as HTMLElement;
        if (mobileMenu && mobileMenu.getAttribute('aria-expanded') === 'true') {
          mobileMenu.click();
        }
      }
    };

    // Add focus management
    const addFocusManagement = () => {
      // Add skip to main content link
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded z-50';
      skipLink.setAttribute('data-skip-to-main', 'true');
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Add main content landmark
      const mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
      if (mainContent) {
        mainContent.id = 'main-content';
        mainContent.setAttribute('tabindex', '-1');
      }

      // Add ARIA landmarks
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

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.id) {
          const text = heading.textContent?.toLowerCase().replace(/[^a-z0-9]/g, '-') || `heading-${index}`;
          heading.id = text;
        }
      });

      // Add alt text to images without it
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img) => {
        img.setAttribute('alt', '');
      });

      // Add button labels
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button) => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      // Add form labels
      const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
      inputs.forEach((input) => {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (!label && !input.getAttribute('aria-label')) {
          input.setAttribute('aria-label', input.getAttribute('placeholder') || 'Input field');
        }
      });
    };

    // Add screen reader only class
    const style = document.createElement('style');
    style.textContent = `
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
        padding: 0.5rem 1rem;
        margin: 0;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }
      
      .focus-visible {
        outline: 2px solid #06b6d4;
        outline-offset: 2px;
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

    // Initialize accessibility features
    addFocusManagement();

    // Re-run on route changes
    const observer = new MutationObserver(() => {
      addFocusManagement();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;