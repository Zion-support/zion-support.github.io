// Accessibility utility functions

export const getAriaLabel = (element: HTMLElement): string => {
  return element.getAttribute('aria-label') || element.textContent || '';
};

export const isElementVisible = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
};

export const focusElement = (element: HTMLElement): void => {
  if (element && typeof element.focus === 'function') {
    element.focus();
  }
};

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

export const validateAriaAttributes = (element: HTMLElement): string[] => {
  const errors: string[] = [];
  
  if (element.hasAttribute('aria-labelledby') && !element.getAttribute('aria-labelledby')) {
    errors.push('aria-labelledby should not be empty');
  }
  
  if (element.hasAttribute('aria-describedby') && !element.getAttribute('aria-describedby')) {
    errors.push('aria-describedby should not be empty');
  }
  
  return errors;
};