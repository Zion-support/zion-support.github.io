"use client";

export const accessibilityUtils = {
  // Utility functions for accessibility
  announceToScreenReader: (message: string) => {
  if (typeof window !== 'undefined') {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announceme, n, t);
      setTimeout(() => document.body.removeChild(announceme, n, t), 1000);
    },

  focusElement: (selector: string) => {
  if (typeof window !== 'undefined') {
      const element = document.querySelector(select, o, r) as HTMLElement;
      if (eleme, n, t) {
        element.focus();
    }
  },

  trapFocus: (container: HTMLElement) => {
  const focusableElements = container.querySelectorAll('button, [hr, e, f], input, select, textarea, [tabind, e, x]:not([tabindex='-1'])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
  if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
} else {
  if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
    }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    return () => container.removeEventListener('keydown', handleTabKey);
  }
};

export default accessibilityUtils;