// Accessibility utility functions for improving app accessibility

export interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableFocusManagement: boolean;
}

// Default accessibility configuration
export const defaultAccessibilityConfig: AccessibilityConfig = {
  enableKeyboardNavigation: true,
  enableScreenReaderSupport: true,
  enableHighContrast: true,
  enableReducedMotion: true,
  enableFocusManagement: true,
};

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Check if user prefers high contrast
export const prefersHighContrast = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-contrast: high)').matches;
};

// Check if user prefers dark color scheme
export const prefersDarkColorScheme = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// Get system accessibility preferences
export const getAccessibilityPreferences = () => ({
  reducedMotion: prefersReducedMotion(),
  highContrast: prefersHighContrast(),
  darkMode: prefersDarkColorScheme(),
});

// Apply accessibility classes based on user preferences
export const applyAccessibilityClasses = (): void => {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  const preferences = getAccessibilityPreferences();

  if (preferences.reducedMotion) {
    root.classList.add('reduced-motion');
  }

  if (preferences.highContrast) {
    root.classList.add('high-contrast');
  }

  if (preferences.darkMode) {
    root.classList.add('dark');
  }
};

// Focus management utilities
export const focusElement = (element: HTMLElement | null): void => {
  if (element && typeof element.focus === 'function') {
    element.focus();
  }
};

// Trap focus within an element
export const trapFocus = (container: HTMLElement): (() => void) => {
  const focusableElements = container.querySelectorAll(
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

  container.addEventListener('keydown', handleTabKey);
  firstElement?.focus();

  return () => {
    container.removeEventListener('keydown', handleTabKey);
  };
};

// Announce to screen readers
export const announceToScreenReader = (message: string): void => {
  if (typeof document === 'undefined') return;

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

// Skip to main content link
export const createSkipLink = (): HTMLElement => {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
  
  return skipLink;
};

// Add skip link to page
export const addSkipLink = (): void => {
  if (typeof document === 'undefined') return;

  const existingSkipLink = document.querySelector('.skip-link');
  if (existingSkipLink) return;

  const skipLink = createSkipLink();
  skipLink.className += ' skip-link';
  document.body.insertBefore(skipLink, document.body.firstChild);
};

// Keyboard navigation helpers
export const handleKeyboardNavigation = (e: KeyboardEvent, elements: HTMLElement[]): void => {
  const currentIndex = elements.indexOf(document.activeElement as HTMLElement);
  
  switch (e.key) {
    case 'ArrowDown':
    case 'ArrowRight': {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % elements.length;
      focusElement(elements[nextIndex]);
      break;
    }
    case 'ArrowUp':
    case 'ArrowLeft': {
      e.preventDefault();
      const prevIndex = currentIndex === 0 ? elements.length - 1 : currentIndex - 1;
      focusElement(elements[prevIndex]);
      break;
    }
    case 'Home': {
      e.preventDefault();
      focusElement(elements[0]);
      break;
    }
    case 'End': {
      e.preventDefault();
      focusElement(elements[elements.length - 1]);
      break;
    }
  }
};

// ARIA live region for dynamic content
export const createLiveRegion = (): HTMLElement => {
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  liveRegion.id = 'live-region';
  
  return liveRegion;
};

// Update live region content
export const updateLiveRegion = (message: string): void => {
  if (typeof document === 'undefined') return;

  let liveRegion = document.getElementById('live-region');
  if (!liveRegion) {
    liveRegion = createLiveRegion();
    document.body.appendChild(liveRegion);
  }
  
  liveRegion.textContent = message;
};

// Check color contrast ratio
export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g);
    if (!rgb) return 0;
    
    const [r, g, b] = rgb.map(Number).map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
};

// Validate color contrast
export const isValidContrast = (foreground: string, background: string, level: 'AA' | 'AAA' = 'AA'): boolean => {
  const ratio = getContrastRatio(foreground, background);
  return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
};

// Initialize accessibility features
export const initializeAccessibility = (): void => {
  if (typeof document === 'undefined') return;

  applyAccessibilityClasses();
  addSkipLink();
  
  // Add main content landmark
  const main = document.querySelector('main');
  if (main && !main.id) {
    main.id = 'main-content';
  }
  
  // Add heading hierarchy validation
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1));
    if (index === 0 && level !== 1) {
      console.warn('First heading should be h1');
    }
  });
};

// Screen reader only text
export const srOnly = (text: string): string => `<span class="sr-only">${text}</span>`;

// Enhanced button with accessibility
export const createAccessibleButton = (
  text: string,
  onClick: () => void,
  options: {
    ariaLabel?: string;
    ariaDescribedBy?: string;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'danger';
  } = {}
): HTMLElement => {
  const button = document.createElement('button');
  button.textContent = text;
  button.type = 'button';
  button.disabled = options.disabled || false;
  
  if (options.ariaLabel) {
    button.setAttribute('aria-label', options.ariaLabel);
  }
  
  if (options.ariaDescribedBy) {
    button.setAttribute('aria-describedby', options.ariaDescribedBy);
  }
  
  const baseClasses = 'px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-100',
    danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400',
  };
  
  button.className = `${baseClasses} ${variantClasses[options.variant || 'primary']}`;
  button.addEventListener('click', onClick);
  
  return button;
};
