// Utility file: accessibilityUtils
export const accessibilityUtils = {}
  // Utility functions will be implemented here
};

export const focusWithAnnouncement = (element: HTMLElement, announceText?: string) => {
  accessibilityUtils.focusElement(element, announceText);
};

export const trapFocusInContainer = (container: HTMLElement) => {
  return accessibilityUtils.trapFocusInContainer(container);
};