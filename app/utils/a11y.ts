export const accessibilityUtils = {
  focusElement: (element: HTMLElement) => {
    element.focus();
  },
  announceToScreenReader: (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },
  getFocusableElements: (container: HTMLElement) => {
    return container.querySelectorAll(
      'button,[href], input, select, textarea,[tabindex]:not([tabindex="-1"])'
    );
  }
};