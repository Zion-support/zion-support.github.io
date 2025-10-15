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

  }
};

// ARIA utilities
export const ariaUtils = {

  // Announce to screen readers

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

  },

  // Generate unique ID
  generateId: (prefix: string) => `${prefix}-${Math.random().toString(36).substr(2, 9)}`,

  // Check if element is visible
  isVisible: (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;

  }
};

// Keyboard navigation utilities

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

    }
  }
};