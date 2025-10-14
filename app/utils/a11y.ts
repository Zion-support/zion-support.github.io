export const accessibility Utils = {
  focus Element: (element: HTMLElement) => {
    element.focus();
  },
  announce To Screen Reader: (message: string) => {
    const announcement = document.create Element('div');
    announcement.set Attribute('aria-live', 'polite');
    announcement.set Attribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.text Content = message;
    document.body.append Child(announcement);
    set Timeout(() => {
      document.body.remove Child(announcement);
    }, 1000);
  },
  get Focusable Elements: (container: HTMLElement) => {
    return container.query Selector All(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
  }
};