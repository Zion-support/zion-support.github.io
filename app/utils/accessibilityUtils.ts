// Accessibility utilities for improving user experience and compliance

export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

export const createAriaLabel = (text: string, context?: string): string => {
  return context ? `${text}, ${context}` : text;
};

export const announceToScreenReader = (message: string): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export const trapFocus = (element: HTMLElement): (() => void) => {
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

  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

export const isElementVisible = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  const style = window.getComputedStyle(element);
  
  return (
    rect.width > 0 &&
    rect.height > 0 &&
    style.visibility !== 'hidden' &&
    style.display !== 'none' &&
    style.opacity !== '0'
  );
};

export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g);
    if (!rgb) return 0;
    
    const [r, g, b] = rgb.map(c => {
      const val = parseInt(c) / 255;
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

export const validateColorContrast = (foreground: string, background: string): boolean => {
  const ratio = getContrastRatio(foreground, background);
  return ratio >= 4.5; // WCAG AA standard
};

export const addSkipLink = (targetId: string, text: string = 'Skip to main content'): void => {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded';
  
  document.body.insertBefore(skipLink, document.body.firstChild);
};

export const enhanceFormAccessibility = (form: HTMLFormElement): void => {
  const inputs = form.querySelectorAll('input, select, textarea');
  
  inputs.forEach((input, index) => {
    const element = input as HTMLElement;
    
    if (!element.id) {
      element.id = `input-${index}`;
    }
    
    const label = form.querySelector(`label[for="${element.id}"]`);
    if (!label && element.getAttribute('aria-label') === null) {
      element.setAttribute('aria-label', element.getAttribute('placeholder') || `Input ${index + 1}`);
    }
  });
};

export const createLiveRegion = (id: string = 'live-region'): HTMLElement => {
  let region = document.getElementById(id);
  
  if (!region) {
    region = document.createElement('div');
    region.id = id;
    region.setAttribute('aria-live', 'polite');
    region.setAttribute('aria-atomic', 'true');
    region.className = 'sr-only';
    document.body.appendChild(region);
  }
  
  return region;
};

export const announceToLiveRegion = (message: string, regionId: string = 'live-region'): void => {
  const region = createLiveRegion(regionId);
  region.textContent = message;
};

export const setupKeyboardNavigation = (container: HTMLElement): void => {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  focusableElements.forEach((element, index) => {
    element.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (index + 1) % focusableElements.length;
        (focusableElements[nextIndex] as HTMLElement).focus();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = index === 0 ? focusableElements.length - 1 : index - 1;
        (focusableElements[prevIndex] as HTMLElement).focus();
      }
    });
  });
};

export const checkAccessibility = (element: HTMLElement): string[] => {
  const issues: string[] = [];
  
  // Check for missing alt text on images
  const images = element.querySelectorAll('img');
  images.forEach((img, index) => {
    if (!img.alt && !img.getAttribute('aria-label')) {
      issues.push(`Image ${index + 1} is missing alt text`);
    }
  });
  
  // Check for missing labels on form inputs
  const inputs = element.querySelectorAll('input, select, textarea');
  inputs.forEach((input, index) => {
    const element = input as HTMLElement;
    const hasLabel = element.getAttribute('aria-label') || 
                    element.getAttribute('aria-labelledby') ||
                    element.closest('label');
    
    if (!hasLabel) {
      issues.push(`Form input ${index + 1} is missing a label`);
    }
  });
  
  // Check for proper heading hierarchy
  const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let lastLevel = 0;
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1));
    if (level > lastLevel + 1) {
      issues.push(`Heading ${heading.tagName} at position ${index + 1} skips level(s)`);
    }
    lastLevel = level;
  });
  
  return issues;
};

export const enhanceButtonAccessibility = (button: HTMLButtonElement): void => {
  if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
    button.setAttribute('aria-label', 'Button');
  }
  
  if (button.disabled) {
    button.setAttribute('aria-disabled', 'true');
  }
};

export const createAccessibleModal = (content: string, title: string): HTMLElement => {
  const modal = document.createElement('div');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'modal-title');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  
  const modalContent = document.createElement('div');
  modalContent.className = 'bg-white rounded-lg p-6 max-w-md w-full mx-4';
  
  const titleElement = document.createElement('h2');
  titleElement.id = 'modal-title';
  titleElement.textContent = title;
  titleElement.className = 'text-xl font-bold mb-4';
  
  const contentElement = document.createElement('div');
  contentElement.innerHTML = content;
  
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.className = 'mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  
  modalContent.appendChild(titleElement);
  modalContent.appendChild(contentElement);
  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  
  // Focus management
  const focusableElements = modalContent.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length > 0) {
    (focusableElements[0] as HTMLElement).focus();
  }
  
  // Trap focus
  const trapFocusCleanup = trapFocus(modalContent);
  
  // Close on escape
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      document.body.removeChild(modal);
      trapFocusCleanup();
    }
  };
  
  modal.addEventListener('keydown', handleEscape);
  
  return modal;
};