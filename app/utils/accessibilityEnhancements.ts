// Accessibility enhancements
export const accessibilityEnhancements = {
  // Add skip links
  addSkipLinks: () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  },

  // Add ARIA labels to interactive elements
  enhanceInteractiveElements: () => {
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach(link => {
      if (!link.getAttribute('aria-label') && !link.textContent.trim()) {
        link.setAttribute('aria-label', 'Link');
      }
    });
  },

  // Add focus management
  manageFocus: () => {
    const focusableElements = document.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    document.addEventListener('keydown', (e) => {
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
    });
  },

  // Add high contrast mode support
  addHighContrastSupport: () => {
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
      }
    `;
    document.head.appendChild(style);
  },

  // Initialize all enhancements
  init: () => {
    if (typeof window !== 'undefined') {
      this.addSkipLinks();
      this.enhanceInteractiveElements();
      this.manageFocus();
      this.addHighContrastSupport();
    }
  }
};