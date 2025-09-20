// Accessibility utilities and helpers

// ARIA label generator for common elements
export const generateAriaLabel = (element: string, context?: string): string => {
  const labels: { [key: string]: string } = {
    button: 'Button',
    link: 'Link',
    image: 'Image',
    heading: 'Heading',
    navigation: 'Navigation',
    main: 'Main content',
    banner: 'Banner',
    contentinfo: 'Footer',
    complementary: 'Complementary content',
    search: 'Search',
    form: 'Form',
    textbox: 'Text input',
    checkbox: 'Checkbox',
    radio: 'Radio button',
    select: 'Select dropdown',
    slider: 'Slider',
    progressbar: 'Progress bar',
    status: 'Status message',
    alert: 'Alert message',
    dialog: 'Dialog',
    menu: 'Menu',
    menuitem: 'Menu item',
    tab: 'Tab',
    tabpanel: 'Tab panel',
    list: 'List',
    listitem: 'List item',
    table: 'Table',
    row: 'Table row',
    cell: 'Table cell',
    columnheader: 'Column header',
    rowheader: 'Row header'
  };

  const baseLabel = labels[element] || element;
  return context ? `${baseLabel}: ${context}` : baseLabel;
};

// Color contrast checker
export const checkColorContrast = (foreground: string, background: string): {
  ratio: number;
  level: 'AA' | 'AAA' | 'FAIL';
  largeText: boolean;
} => {
  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  // Calculate relative luminance
  const getLuminance = (r: number, g: number, b: number) => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const fg = hexToRgb(foreground);
  const bg = hexToRgb(background);

  if (!fg || !bg) {
    return { ratio: 0, level: 'FAIL', largeText: false };
  }

  const fgLuminance = getLuminance(fg.r, fg.g, fg.b);
  const bgLuminance = getLuminance(bg.r, bg.g, bg.b);

  const lighter = Math.max(fgLuminance, bgLuminance);
  const darker = Math.min(fgLuminance, bgLuminance);

  const ratio = (lighter + 0.05) / (darker + 0.05);

  let level: 'AA' | 'AAA' | 'FAIL' = 'FAIL';
  if (ratio >= 7) {
    level = 'AAA';
  } else if (ratio >= 4.5) {
    level = 'AA';
  }

  return {
    ratio: Math.round(ratio * 100) / 100,
    level,
    largeText: ratio >= 3 // Large text threshold
  };
};

// Focus management utilities
export class FocusManager {
  private focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  getFocusableElements(container: HTMLElement): HTMLElement[] {
    return Array.from(container.querySelectorAll(this.focusableElements)) as HTMLElement[];
  }

  trapFocus(container: HTMLElement): () => void {
    const focusableElements = this.getFocusableElements(container);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

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

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  }

  restoreFocus(element: HTMLElement): void {
    element.focus();
  }
}

// Screen reader utilities
export const announceToScreenReader = (message: string): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Keyboard navigation helpers
export const handleKeyboardNavigation = (
  event: KeyboardEvent,
  onEnter?: () => void,
  onEscape?: () => void,
  onArrowUp?: () => void,
  onArrowDown?: () => void,
  onArrowLeft?: () => void,
  onArrowRight?: () => void
): void => {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault();
      onEnter?.();
      break;
    case 'Escape':
      event.preventDefault();
      onEscape?.();
      break;
    case 'ArrowUp':
      event.preventDefault();
      onArrowUp?.();
      break;
    case 'ArrowDown':
      event.preventDefault();
      onArrowDown?.();
      break;
    case 'ArrowLeft':
      event.preventDefault();
      onArrowLeft?.();
      break;
    case 'ArrowRight':
      event.preventDefault();
      onArrowRight?.();
      break;
  }
};

// Skip link generator
export const generateSkipLink = (targetId: string, text: string = 'Skip to main content'): string => {
  return `<a href="#${targetId}" class="skip-link">${text}</a>`;
};

// High contrast mode detection
export const isHighContrastMode = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const mediaQuery = window.matchMedia('(prefers-contrast: high)');
  return mediaQuery.matches;
};

// Reduced motion detection
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
};

// Focus visible detection
export const supportsFocusVisible = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return CSS.supports('selector(:focus-visible)');
};

// Accessibility testing utilities
export const runAccessibilityChecks = (element: HTMLElement): {
  issues: string[];
  score: number;
} => {
  const issues: string[] = [];
  let score = 100;

  // Check for missing alt text on images
  const images = element.querySelectorAll('img');
  images.forEach((img, index) => {
    if (!img.alt && !img.getAttribute('aria-label')) {
      issues.push(`Image ${index + 1} is missing alt text`);
      score -= 5;
    }
  });

  // Check for missing labels on form inputs
  const inputs = element.querySelectorAll('input, select, textarea');
  inputs.forEach((input, index) => {
    const id = input.getAttribute('id');
    const label = id ? element.querySelector(`label[for="${id}"]`) : null;
    const ariaLabel = input.getAttribute('aria-label');
    const ariaLabelledBy = input.getAttribute('aria-labelledby');
    
    if (!label && !ariaLabel && !ariaLabelledBy) {
      issues.push(`Form input ${index + 1} is missing a label`);
      score -= 5;
    }
  });

  // Check for proper heading hierarchy
  const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let lastLevel = 0;
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1));
    if (level > lastLevel + 1) {
      issues.push(`Heading ${index + 1} (${heading.tagName}) skips levels`);
      score -= 3;
    }
    lastLevel = level;
  });

  // Check for proper ARIA attributes
  const elementsWithAria = element.querySelectorAll('[aria-expanded], [aria-hidden], [aria-selected]');
  elementsWithAria.forEach((el, index) => {
    const role = el.getAttribute('role');
    if (!role && !el.getAttribute('aria-label')) {
      issues.push(`Element ${index + 1} with ARIA attributes is missing role or aria-label`);
      score -= 2;
    }
  });

  return { issues, score: Math.max(0, score) };
};