export const accessibilityUtils = {
  // Accessibility utility functions
  focusElement: (element: HTMLElement) => {
    element.focus();
  },
  announceToScreenReader: (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  }
};