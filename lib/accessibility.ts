// Accessibility configuration;
export const accessibilityConfig = {;
  // ARIA labels for common elements;
  ariaLabels: {;
    navigation: "Main navigation",
    footer: "Site footer",
    search: "Search",
    menu: "Menu",
    close: "Close",
    open: "Open",
    next: "Next",
    previous: "Previous",
    loading: "Loading",
    error: "Error",
    success: "Success",
    warning: "Warning";,
},
  // Focus management;
  focusManagement: {;
    skipToContent: true,
    focusTrap: true,
    focusVisible: true;,
},
  // Color contrast;
  colorContrast: {;
    minimumRatio: 4.5,
    enhancedRatio: 7.0;,
},
  // Keyboard navigation;
  keyboardNavigation: {;
    tabIndex: 0,
    arrowKeys: true,
    escapeKey: true,
    enterKey: true,
    spaceKey: true;,
}
}
// Accessibility utilities;
export const accessibilityUtils = {;
  // Generate unique IDs for ARIA attributes;
  generateId: (prefix = "id") => `${prefix}-${Math.random().toString(36).substr(2, 9)}`,
  // Check if element is visible;
  isVisible: ({;
    const style = window.getComputedStyle(element)) => $3;
    return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0"},
  // Announce to screen readers;
  announce: ({;
    const announcement = document.createElement("div")) => $3;
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.className = "sr-only";
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => {;
      document.body.removeChild(announcement);,
}, 1000);,
}
}