
// Ultimate Accessibility Configuration
export const ultimateAccessibilityConfig = {
  // ARIA labels and roles
  aria: {
    navigation: 'Main navigation',
    content: 'Main content',
    sidebar: 'Sidebar navigation',
    footer: 'Site footer',
    search: 'Search functionality',
    banner: 'Site header',
    complementary: 'Additional information',
    form: 'Contact form',
    button: 'Action button',
    link: 'Navigation link'
  },

  // Focus management
  focus: {
    trapFocus: true,
    restoreFocus: true,
    focusVisible: true,
    focusOrder: 'logical',
    skipLinks: true,
    focusOutline: '2px solid #3b82f6',
    focusOffset: '2px'
  },

  // Screen reader support
  screenReader: {
    announceChanges: true,
    liveRegions: true,
    hiddenText: false,
    descriptiveText: true,
    contextInformation: true,
    statusUpdates: true
  },

  // Keyboard navigation
  keyboard: {
    tabOrder: 'logical',
    escapeKey: true,
    arrowKeys: true,
    enterKey: true,
    spaceKey: true,
    shortcuts: {
      'Alt+1': 'Go to main content',
      'Alt+2': 'Go to navigation',
      'Alt+3': 'Go to search',
      'Alt+4': 'Go to footer'
    }
  },

  // Color and contrast
  color: {
    minimumRatio: 4.5,
    enhancedRatio: 7.0,
    validateColors: true,
    colorBlindSupport: true,
    highContrastMode: true,
    darkMode: true
  },

  // Text and typography
  typography: {
    minimumSize: 16,
    lineHeight: 1.5,
    letterSpacing: '0.025em',
    fontWeight: {
      normal: 400,
      bold: 700
    },
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },

  // Motion and animation
  motion: {
    respectPrefersReducedMotion: true,
    maxDuration: 300,
    easing: 'ease-in-out',
    pauseOnHover: true,
    pauseOnFocus: true
  },

  // Language support
  language: {
    primary: 'en-US',
    direction: 'ltr',
    langAttribute: true,
    spellCheck: true,
    grammarCheck: false
  }
};
