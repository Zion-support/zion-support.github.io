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
<<<<<<< HEAD
            lastElement?.focus();
=======
            lastElement.focus();
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
<<<<<<< HEAD
            firstElement?.focus();
=======
            firstElement.focus();
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
            e.preventDefault();
          }
        }
      }
    };

    element.addEventListener('keydown', handleTabKey);
<<<<<<< HEAD
=======
    firstElement?.focus();
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56

    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  },

<<<<<<< HEAD
  // Move focus to first focusable element
  focusFirst: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    (focusableElements[0] as HTMLElement)?.focus();
  },

  // Move focus to last focusable element
  focusLast: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    lastElement?.focus();
=======
  // Move focus to next focusable element
  moveToNext: (currentElement: HTMLElement) => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const nextElement = focusableElements[currentIndex + 1] as HTMLElement;
    nextElement?.focus();
  },

  // Move focus to previous focusable element
  moveToPrevious: (currentElement: HTMLElement) => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const previousElement = focusableElements[currentIndex - 1] as HTMLElement;
    previousElement?.focus();
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
  }
};

// ARIA utilities
export const ariaUtils = {
<<<<<<< HEAD
  // Generate unique ID for ARIA attributes
  generateId: (prefix = 'aria') => `${prefix}-${Math.random().toString(36).substr(2, 9)}`,

  // Set ARIA attributes
  setAriaAttributes: (element: HTMLElement, attributes: Record<string, string>) => {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  },

  // Announce message to screen readers
=======
  // Announce to screen readers
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
<<<<<<< HEAD
=======
  },

  // Generate unique ID
  generateId: (prefix: string) => `${prefix}-${Math.random().toString(36).substr(2, 9)}`,

  // Check if element is visible
  isVisible: (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
  }
};

// Keyboard navigation utilities
<<<<<<< HEAD
export const keyboardNavigation = {
  // Handle arrow key navigation
  handleArrowKeys: (e: KeyboardEvent, items: HTMLElement[], currentIndex: number) => {
    let newIndex = currentIndex;
    
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        newIndex = (currentIndex + 1) % items.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        break;
      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        newIndex = items.length - 1;
        break;
    }
    
    if (newIndex !== currentIndex) {
      items[newIndex]?.focus();
      return newIndex;
    }
    
    return currentIndex;
  },

  // Handle Enter and Space key activation
  handleActivation: (e: KeyboardEvent, callback: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
=======
export const keyboardUtils = {
  // Handle arrow key navigation
  handleArrowKeys: (event: KeyboardEvent, items: HTMLElement[], currentIndex: number) => {
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight': {
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % items.length;
        items[nextIndex]?.focus();
        return nextIndex;
      }
      case 'ArrowUp':
      case 'ArrowLeft': {
        event.preventDefault();
        const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        items[prevIndex]?.focus();
        return prevIndex;
      }
      case 'Home':
        event.preventDefault();
        items[0]?.focus();
        return 0;
      case 'End':
        event.preventDefault();
        items[items.length - 1]?.focus();
        return items.length - 1;
      default:
        return currentIndex;
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
    }
  }
};