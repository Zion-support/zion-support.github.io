'use client';
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  children
}) => {
  useEffect(() => {
    // Add accessibility enhancements
    if (enableKeyboardNavigation) {
      // Add keyboard navigation support
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content with Tab key
        if (event.key === 'Tab' && event.target === document.body) {
          const skipLink = document.querySelector('[href="#main-content"]') as HTMLElement;
          if (skipLink) {
            skipLink.focus();
          }
        }
        
        // Close modals with Escape key
        if (event.key === 'Escape') {
          const modals = document.querySelectorAll('[role="dialog"]');
          modals.forEach(modal => {
            const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
            if (closeButton) {
              closeButton.click();
            }
          });
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Add screen reader support
    if (enableScreenReaderSupport) {
      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      // Add navigation landmarks
      const navs = document.querySelectorAll('nav');
      navs.forEach(nav => {
        if (!nav.getAttribute('role')) {
          nav.setAttribute('role', 'navigation');
        }
        if (!nav.getAttribute('aria-label')) {
          nav.setAttribute('aria-label', 'Main navigation');
        }
      });

      // Add footer landmarks
      const footers = document.querySelectorAll('footer');
      footers.forEach(footer => {
        if (!footer.getAttribute('role')) {
          footer.setAttribute('role', 'contentinfo');
        }
      });

      // Add section landmarks
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        if (!section.getAttribute('role')) {
          section.setAttribute('role', 'region');
        }
      });

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.getAttribute('id')) {
          const text = heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
          if (text) {
            heading.setAttribute('id', `${text}-${index}`);
          }
        }
      });

      // Add alt text to images
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach(img => {
        img.setAttribute('alt', '');
      });

      // Add button labels
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach(button => {
        if (!button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      // Add link descriptions
      const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      links.forEach(link => {
        if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
          const href = link.getAttribute('href');
          if (href) {
            link.setAttribute('aria-label', `Link to ${href}`);
          }
        }
      });
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // Add high contrast support
    if (enableHighContrast) {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          .cyber-card, .hologram-card, .quantum-card {
            border: 2px solid currentColor !important;
            background: rgba(0, 0, 0, 0.8) !important;
          }
          
          .neon-text, .cyber-text {
            text-shadow: 0 0 5px currentColor !important;
          }
          
          button, a {
            border: 1px solid currentColor !important;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, [enableHighContrast]);

  useEffect(() => {
    // Add focus management
    if (enableFocusManagement) {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #00ffff !important;
          outline-offset: 2px !important;
        }
        
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }
        
        .sr-only:focus {
          position: static !important;
          width: auto !important;
          height: auto !important;
          padding: inherit !important;
          margin: inherit !important;
          overflow: visible !important;
          clip: auto !important;
          white-space: normal !important;
        }
      `;
      document.head.appendChild(style);

      // Manage focus for modals and dropdowns
      const manageFocus = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        const modal = target.closest('[role="dialog"]');
        
        if (modal) {
          const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (event.shiftKey && target === firstElement) {
            event.preventDefault();
            lastElement?.focus();
          } else if (!event.shiftKey && target === lastElement) {
            event.preventDefault();
            firstElement?.focus();
          }
        }
      };

      document.addEventListener('keydown', manageFocus);

      return () => {
        document.removeEventListener('keydown', manageFocus);
        document.head.removeChild(style);
      };
    }
  }, [enableFocusManagement]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;