/**
 * Accessibility Enhancement Utilities
 * Tools to improve accessibility and user experience
 */

// Check if element is visible to screen readers
export const isVisibleToScreenReader = (element: HTMLElement): boolean => {
  const style = window.getComputedStyle(element);
  return (
    style.display !== 'none' &&
    style.visibility !== 'hidden' &&
    element.getAttribute('aria-hidden') !== 'true' &&
    element.offsetWidth > 0 &&
    element.offsetHeight > 0
  );
};

// Add skip navigation link
export const addSkipNavigationLink = () => {
  if (typeof document === 'undefined') return;

  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded';
  skipLink.setAttribute('tabindex', '1');
  
  document.body.insertBefore(skipLink, document.body.firstChild);
};

// Focus management utilities
export const focusManagement = {
  // Trap focus within an element
  trapFocus: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
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
    };

    element.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  },

  // Restore focus to previously focused element
  restoreFocus: (element: HTMLElement) => {
    element.focus();
  },
};

// Announce to screen readers
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  if (typeof document === 'undefined') return;

  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Color contrast checker
export const getColorContrast = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g);
    if (!rgb || rgb.length !== 3) return 0;

    const [r, g, b] = rgb.map((c) => {
      const val = parseInt(c, 10) / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
};

// Accessibility validation
export const validateAccessibility = () => {
  if (typeof document === 'undefined') return [];

  const issues: string[] = [];

  // Check for missing alt text
  const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
  imagesWithoutAlt.forEach((img) => {
    issues.push(`Image missing alt text: ${img.getAttribute('src')}`);
  });

  // Check for missing labels
  const inputsWithoutLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
  inputsWithoutLabels.forEach((input) => {
    const id = input.getAttribute('id');
    const hasLabel = id && document.querySelector(`label[for="${id}"]`);
    if (!hasLabel) {
      issues.push(`Input missing label: ${input.getAttribute('name') || input.getAttribute('type')}`);
    }
  });

  // Check heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let previousLevel = 0;
  headings.forEach((heading) => {
    const level = parseInt(heading.tagName.charAt(1), 10);
    if (level > previousLevel + 1) {
      issues.push(`Heading hierarchy skipped: ${heading.tagName} after h${previousLevel}`);
    }
    previousLevel = level;
  });

  return issues;
};

// Keyboard navigation enhancement
export const addKeyboardNavigation = () => {
  if (typeof document === 'undefined') return;

  // Add keyboard navigation for custom elements
  const customElements = document.querySelectorAll('[data-keyboard-navigation]');
  customElements.forEach((element) => {
    element.setAttribute('tabindex', '0');
    element.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        (element as HTMLElement).click();
      }
    });
  });
};

// Initialize accessibility enhancements
export const initializeAccessibilityEnhancements = () => {
  if (typeof document === 'undefined') return;

  // Add skip navigation
  addSkipNavigationLink();

  // Add keyboard navigation
  addKeyboardNavigation();

  // Validate accessibility
  const issues = validateAccessibility();
  if (issues.length > 0 && process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn('Accessibility issues found:', issues);
  }
};