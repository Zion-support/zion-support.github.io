/**
 * Accessibility Enhancement Utilities
 * Provides various accessibility improvement functions
 */

// Focus management
export const trapFocus = (element: HTMLElement): (() => void) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusableElement = focusableElements[0] as HTMLElement;
  const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);
  firstFocusableElement?.focus();

  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

// Skip link functionality
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
  
  skipLink.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.focus();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  return skipLink;
};

// ARIA live region for announcements
export const createLiveRegion = (): HTMLElement => {
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  liveRegion.id = 'live-region';
  return liveRegion;
};

// Announce to screen readers
export const announce = (message: string): void => {
  let liveRegion = document.getElementById('live-region') as HTMLElement;
  if (!liveRegion) {
    liveRegion = createLiveRegion();
    document.body.appendChild(liveRegion);
  }
  liveRegion.textContent = message;
};

// High contrast mode detection
export const isHighContrastMode = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-contrast: high)').matches ||
         window.matchMedia('(prefers-contrast: more)').matches;
};

// Reduced motion detection
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Color scheme detection
export const getColorScheme = (): 'light' | 'dark' | 'no-preference' => {
  if (typeof window === 'undefined') return 'no-preference';
  
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  
  return 'no-preference';
};

// Keyboard navigation enhancement
export const enhanceKeyboardNavigation = (): void => {
  if (typeof document === 'undefined') return;
  
  // Add visible focus indicators
  const style = document.createElement('style');
  style.textContent = `
    *:focus {
      outline: 2px solid #4f46e5 !important;
      outline-offset: 2px !important;
    }
    
    .sr-only {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }
    
    .sr-only:focus {
      position: static !important;
      width: auto !important;
      height: auto !important;
      padding: 0.5rem !important;
      margin: 0 !important;
      overflow: visible !important;
      clip: auto !important;
      white-space: normal !important;
    }
  `;
  document.head.appendChild(style);
};

// Form accessibility enhancement
export const enhanceFormAccessibility = (form: HTMLFormElement): void => {
  // Add required field indicators
  const requiredFields = form.querySelectorAll('[required]');
  requiredFields.forEach((field) => {
    const label = form.querySelector(`label[for="${field.id}"]`);
    if (label && !label.textContent?.includes('*')) {
      label.textContent += ' *';
    }
  });
  
  // Add error handling
  form.addEventListener('invalid', (e) => {
    const target = e.target as HTMLInputElement;
    if (target.validationMessage) {
      announce(`Error: ${target.validationMessage}`);
    }
  });
};

// Image accessibility enhancement
export const enhanceImageAccessibility = (img: HTMLImageElement): void => {
  if (!img.alt && !img.getAttribute('aria-label')) {
    img.setAttribute('alt', '');
    img.setAttribute('aria-hidden', 'true');
  }
  
  // Add loading="lazy" for performance
  if (!img.hasAttribute('loading')) {
    img.setAttribute('loading', 'lazy');
  }
};

// Link accessibility enhancement
export const enhanceLinkAccessibility = (link: HTMLAnchorElement): void => {
  // Add external link indicators
  if (link.hostname !== window.location.hostname) {
    link.setAttribute('rel', 'noopener noreferrer');
    link.setAttribute('aria-label', `${link.textContent} (opens in new tab)`);
  }
  
  // Ensure links have descriptive text
  if (!link.textContent?.trim() && !link.getAttribute('aria-label')) {
    link.setAttribute('aria-label', 'Link');
  }
};

// Button accessibility enhancement
export const enhanceButtonAccessibility = (button: HTMLButtonElement): void => {
  // Ensure buttons have accessible names
  if (!button.textContent?.trim() && !button.getAttribute('aria-label')) {
    button.setAttribute('aria-label', 'Button');
  }
  
  // Add loading state support
  if (button.hasAttribute('data-loading')) {
    button.setAttribute('aria-busy', 'true');
  }
};

// Table accessibility enhancement
export const enhanceTableAccessibility = (table: HTMLTableElement): void => {
  // Add caption if missing
  if (!table.querySelector('caption')) {
    const caption = document.createElement('caption');
    caption.textContent = 'Data table';
    table.insertBefore(caption, table.firstChild);
  }
  
  // Add scope attributes to headers
  const headers = table.querySelectorAll('th');
  headers.forEach((header) => {
    if (!header.getAttribute('scope')) {
      const row = header.closest('tr');
      const headerIndex = Array.from(row?.children || []).indexOf(header);
      header.setAttribute('scope', headerIndex === 0 ? 'row' : 'col');
    }
  });
};

// Initialize accessibility enhancements
export const initializeAccessibility = (): void => {
  if (typeof document === 'undefined') return;
  
  // Enhance keyboard navigation
  enhanceKeyboardNavigation();
  
  // Enhance all forms
  const forms = document.querySelectorAll('form');
  forms.forEach(enhanceFormAccessibility);
  
  // Enhance all images
  const images = document.querySelectorAll('img');
  images.forEach(enhanceImageAccessibility);
  
  // Enhance all links
  const links = document.querySelectorAll('a');
  links.forEach(enhanceLinkAccessibility);
  
  // Enhance all buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(enhanceButtonAccessibility);
  
  // Enhance all tables
  const tables = document.querySelectorAll('table');
  tables.forEach(enhanceTableAccessibility);
  
  // Create live region for announcements
  if (!document.getElementById('live-region')) {
    document.body.appendChild(createLiveRegion());
  }
};

// Screen reader only text
export const srOnly = (text: string): HTMLElement => {
  const element = document.createElement('span');
  element.textContent = text;
  element.className = 'sr-only';
  return element;
};

// Focus management for modals
export const manageModalFocus = (modal: HTMLElement, isOpen: boolean): void => {
  if (isOpen) {
    // Store the previously focused element
    const previouslyFocusedElement = document.activeElement as HTMLElement;
    modal.setAttribute('data-previously-focused', previouslyFocusedElement?.id || '');
    
    // Trap focus in the modal
    trapFocus(modal);
  } else {
    // Restore focus to the previously focused element
    const previouslyFocusedId = modal.getAttribute('data-previously-focused');
    if (previouslyFocusedId) {
      const previouslyFocusedElement = document.getElementById(previouslyFocusedId);
      previouslyFocusedElement?.focus();
    }
  }
};