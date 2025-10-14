'use client';

export const accessibilityEnhancer = {
  // Add ARIA labels to elements
  addAriaLabels: (elements: NodeListOf<Element>) => {
    elements.forEach((element) => {
      if (!element.getAttribute('aria-label')) {
        const text = element.textContent?.trim();
        if (text) {
          element.setAttribute('aria-label', text);
        }
      }
    });
  },

  // Enhance keyboard navigation
  enhanceKeyboardNavigation: () => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach((element) => {
      element.setAttribute('tabindex', '0');
    });
  },

  // Add skip links
  addSkipLinks: () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
};