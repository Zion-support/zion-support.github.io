'use client';

export const accessibilityEnhancer = {
  // Add ARIA labels to interactive elements
  addAriaLabels: () => {
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });
  },

  // Ensure proper heading hierarchy
  validateHeadingHierarchy: () => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        console.warn(`Heading hierarchy issue: ${heading.tagName} follows h${previousLevel}`);
      }
      previousLevel = level;
    });
  },

  // Add skip links
  addSkipLinks: () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  },

  // Initialize accessibility enhancements
  init: () => {
    accessibilityEnhancer.addAriaLabels();
    accessibilityEnhancer.validateHeadingHierarchy();
    accessibilityEnhancer.addSkipLinks();
  }
};

export default accessibilityEnhancer;
