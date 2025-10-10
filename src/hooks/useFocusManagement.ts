import { useEffect, useRef } from 'react';

export const useFocusManagement = () => {
  const focusableElements = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const updateFocusableElements = () => {
      focusableElements.current = Array.from(
        document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ) as HTMLElement[];
    };

    updateFocusableElements();
    document.addEventListener('DOMContentLoaded', updateFocusableElements);
    
    return () => {
      document.removeEventListener('DOMContentLoaded', updateFocusableElements);
    };
  }, []);

  const trapFocus = (container: HTMLElement) => {
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

  return { trapFocus };
};