import { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add keyboard navigation support
    addKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        // Skip to main content with Alt + M
        if (e.altKey && e.key === 'm') {
          e.preventDefault();
          mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
          }
        }

        // Skip to navigation with Alt + N
        if (e.altKey && e.key === 'n') {
          e.preventDefault();
          navigation = document.querySelector('nav');
          if (navigation) {
            firstLink = navigation.querySelector('a') as HTMLElement;
            if (firstLink) {
              firstLink.focus();
            }
          }
        }
      });
    };

    // Add focus indicators
    addFocusIndicators = () => {
      style = document.createElement('style');
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
    addAriaLabels = () => {
      buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      links = document.querySelectorAll('a:not([aria-label])');
      links.forEach(link => {
        if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link');
        }
      });
    };

    // Add skip links
    addSkipLinks = () => {
      skipLinks = document.createElement('div');
      skipLinks.innerHTML = `
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50">
          Skip to main content
        </a>
        <a href="#navigation" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-48 bg-purple-600 text-white px-4 py-2 rounded-lg z-50">
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
};

export default AccessibilityEnhancer;