'use client';
import { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add keyboard navigation support
    const addKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        // Skip to main content with Alt + M
        if (e.altKey && e.key === 'm') {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
          }
        }

        // Skip to navigation with Alt + N
        if (e.altKey && e.key === 'n') {
          e.preventDefault();
          const navigation = document.querySelector('nav');
          if (navigation) {
            const firstLink = navigation.querySelector('a') as HTMLElement;
            if (firstLink) {
              firstLink.focus();
            }
          }
        }
      });
    };

    // Add focus management
    const addFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible {
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
      `;
      document.head.appendChild(style);
    };

    // Add ARIA labels to interactive elements
    const addARIALabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button) => {
        if (!button.getAttribute('aria-label')) {
          button.setAttribute('aria-label', button.textContent || 'Button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach((link) => {
        if (!link.getAttribute('aria-label')) {
          link.setAttribute('aria-label', link.textContent || 'Link');
        }
      });
    };

    // Initialize accessibility features
    addKeyboardNavigation();
    addFocusManagement();
    addARIALabels();

    // Cleanup function
    return () => {
      // Remove event listeners if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancer;