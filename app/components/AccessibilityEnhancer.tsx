import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Add skip links
    const addSkipLinks = () => {
      const existingSkipLink = document.querySelector('.skip-link');
      if (!existingSkipLink) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    };

    // Enhance interactive elements with ARIA labels
    const enhanceInteractiveElements = () => {
      const buttons = document.querySelectorAll('button:not([aria-label])');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      const links = document.querySelectorAll('a:not([aria-label])');
      links.forEach(link => {
        if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
          link.setAttribute('aria-label', 'Link');
        }
      });

      // Add role attributes where needed
      const cards = document.querySelectorAll('.quantum-card, .cyber-card');
      cards.forEach(card => {
        if (!card.getAttribute('role')) {
          card.setAttribute('role', 'article');
        }
      });

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.id) {
          const text = heading.textContent?.toLowerCase().replace(/\s+/g, '-') || `heading-${index}`;
          heading.id = text;
        }
      });
    };

    // Add focus management
    const manageFocus = () => {
      const focusableElements = document.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleKeyDown = (e: KeyboardEvent) => {
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

        // Escape key handling
        if (e.key === 'Escape') {
          const modals = document.querySelectorAll('[role="dialog"]');
          modals.forEach(modal => {
            const closeButton = modal.querySelector('[aria-label="Close"], [data-close]') as HTMLElement;
            if (closeButton) {
              closeButton.focus();
            }
          });
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    };

    // Add high contrast mode support
    const addHighContrastSupport = () => {
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-contrast: high) {
          .quantum-card {
            border: 2px solid var(--neon-cyan) !important;
          }
          .neon-text {
            text-shadow: 0 0 3px currentColor !important;
          }
          button, a {
            border: 1px solid currentColor !important;
          }
          .cyber-button {
            border: 2px solid var(--neon-cyan) !important;
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
          .neon-text,
          .cyber-scan-line::before,
          .energy-pulse,
          .hologram-card,
          .data-stream {
            animation: none !important;
          }
          .quantum-card:hover {
            transform: none !important;
          }
          * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Add screen reader announcements
    const addScreenReaderSupport = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.id = 'announcements';
      document.body.appendChild(announcement);

      // Function to announce messages
      (window as any).announceToScreenReader = (message: string) => {
        announcement.textContent = message;
        setTimeout(() => {
          announcement.textContent = '';
        }, 1000);
      };
    };

    // Add keyboard navigation indicators
    const addKeyboardNavigationIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid var(--neon-cyan) !important;
          outline-offset: 2px !important;
        }
        .keyboard-navigation button:focus,
        .keyboard-navigation a:focus {
          outline: 2px solid var(--neon-cyan) !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Initialize all accessibility enhancements
    addSkipLinks();
    enhanceInteractiveElements();
    const cleanupFocus = manageFocus();
    addHighContrastSupport();
    addReducedMotionSupport();
    addScreenReaderSupport();
    addKeyboardNavigationIndicators();

    // Re-run enhancements when DOM changes
    const observer = new MutationObserver(() => {
      enhanceInteractiveElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      cleanupFocus();
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;