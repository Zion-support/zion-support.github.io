import { Link } from 'react-router-dom';

'use client';
import { useEffect } from 'react';

export default function AccessibilityEnhancer() {
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

    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #8b5cf6 !important;
          outline-offset: 2px !important;
        }
        
        .focus-visible {
          outline: 2px solid #8b5cf6 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA labels to interactive elements
    const addAriaLabels = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach((button) => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach((link) => {
        if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link');
        }
      });
    };

    // Add skip links
    const addSkipLinks = () => {
      const skipLinks = document.createElement('div');
      skipLinks.innerHTML = `
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>
        <a href="nav" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-blue-600 text-white px-4 py-2 rounded z-50">
          Skip to navigation
        </a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    };

    // Initialize accessibility enhancements
    addKeyboardNavigation();
    addFocusIndicators();
    addAriaLabels();
    addSkipLinks();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
}
