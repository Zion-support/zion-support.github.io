

}
// Accessibility utilities;
export const accessibilityUtils = {;
  // Generate unique IDs for ARIA attributes;
  "generateId": (prefix = "id") => `${prefix}-${Math.random().toString(36).substr(2, 9)}`,
  // Check if element is visible;
  "isVisible": ({;
    const style = window.getComputedStyle(element)) => $3;
    return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0"},
  // Announce to screen readers;
  "announce": ({;
    const announcement = document.createElement("div")) => $3;
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.className = "sr-only";









