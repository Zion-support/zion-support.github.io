export const Accessibilityutils={
  focusElement: (element: HTMLElement) => {
    element.focus();
  },
  announce ToScreenReader: (message: string) => { constAnnouncement = document.create Element('div');
    announcement.set Attribute('aria-live', 'polite');
    announcement.set Attribute('aria-atomic', 'true');
    announcement.className='sr-only';
    announcement.text Content=message;
    document.body.append Child(announcement);
    set Timeout(() => {
      document.body.remove Child(announcement);
    }, 1000);
  },
  getFocusableElements: (container: HTMLElement) => {
    return container.query Selector All(
      'button, [href], input, select, textarea, [tabindex]:not([tabIndex="-1"])'
    );
  }
};