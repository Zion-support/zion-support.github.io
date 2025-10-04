<<<<<<< HEAD
// Advanced Accessibility Configuration
export const accessibilityConfig = {
  // ARIA labels
  ariaLabels: {
    navigation: 'Main navigation',
    content: 'Main content',
    sidebar: 'Sidebar navigation',
    footer: 'Site footer',
  },

  // Focus management
  focusManagement: {
    trapFocus: true,
    restoreFocus: true,
    focusVisible: true,
  },

  // Screen reader support
  screenReader: {
    announceChanges: true,
    liveRegions: true,
    hiddenText: false,
  },

  // Keyboard navigation
  keyboardNavigation: {
    skipLinks: true,
    tabOrder: 'logical',
    escapeKey: true,
    arrowKeys: true,
  },

  // Color contrast
  colorContrast: {
    minimumRatio: 4.5,
    enhancedRatio: 7.0,
    validateColors: true,
  },
};
=======
// Advanced Accessibility Configuration export const accessibilityConfig = { // ARIA labels ariaLabels: { navigation: 'Main navigation',' content: 'Main content',' sidebar: 'Sidebar navigation',' footer: 'Site footer' }, // Focus management focusManagement: { trapFocus: true, restoreFocus: true, focusVisible: true }, // Screen reader support screenReader: { announceChanges: true, liveRegions: true, hiddenText: false }, // Keyboard navigation keyboardNavigation: { skipLinks: true,' tabOrder: 'logical', escapeKey: true, arrowKeys: true }, // Color contrast colorContrast: { minimumRatio: 4.5, enhancedRatio: 7.0, validateColors: true } }; '
>>>>>>> b64650e00461d09eaf1ec492cc713ff355215146
