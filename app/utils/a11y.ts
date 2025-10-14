export const accessibilityUtils = {
  focusElement: (element: HTMLElement) => {
    element.focus();
  },
  announceTo Screen Reader: (message: string) => {
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
  getFocusable Elements: (container: HTMLElement) => {
    return container.querySelector All(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
  }
};