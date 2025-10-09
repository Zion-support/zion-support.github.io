// Advanced accessibility utilities

export interface AccessibilityOptions {
  enableSkipLinks?: boolean;
  enableKeyboardNavigation?: boolean;
  enableFocusManagement?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

export const setupAccessibilityFeatures = (options: AccessibilityOptions = {}) => {
  const {
    enableSkipLinks = true,
    enableKeyboardNavigation = true,
    enableFocusManagement = true,
    enableScreenReaderSupport = true,
    enableHighContrast = true,
    enableReducedMotion = true,
  } = options;

  if (typeof window === 'undefined') return;

  // Add skip links
  if (enableSkipLinks) {
    addSkipLinks();
  }

  // Setup keyboard navigation
  if (enableKeyboardNavigation) {
    setupKeyboardNavigation();
  }

  // Setup focus management
  if (enableFocusManagement) {
    setupFocusManagement();
  }

  // Setup screen reader support
  if (enableScreenReaderSupport) {
    setupScreenReaderSupport();
  }

  // Setup high contrast mode
  if (enableHighContrast) {
    setupHighContrastMode();
  }

  // Setup reduced motion
  if (enableReducedMotion) {
    setupReducedMotion();
  }
};

const addSkipLinks = () => {
  const skipLinks = [
    { href: '#main-content', text: 'Skip to main content' },
    { href: '#navigation', text: 'Skip to navigation' },
    { href: '#footer', text: 'Skip to footer' },
  ];

  skipLinks.forEach(link => {
    const skipLink = document.createElement('a');
    skipLink.href = link.href;
    skipLink.textContent = link.text;
    skipLink.className = 'sr-only focus:not-sr-only';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #4f46e5;
      color: white;
      padding: 8px 16px;
      text-decoration: none;
      border-radius: 4px;
      z-index: 1000;
      transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
  });
};

const setupKeyboardNavigation = () => {
  document.addEventListener('keydown', (event) => {
    // Skip to main content with Alt + M
    if (event.altKey && event.key === 'm') {
      event.preventDefault();
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Skip to navigation with Alt + N
    if (event.altKey && event.key === 'n') {
      event.preventDefault();
      const navigation = document.querySelector('nav');
      if (navigation) {
        const firstLink = navigation.querySelector('a') as HTMLAnchorElement;
        if (firstLink) {
          firstLink.focus();
          firstLink.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

    // Close modals with Escape
    if (event.key === 'Escape') {
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => {
        const closeButton = modal.querySelector('[aria-label="Close"]') as HTMLButtonElement;
        if (closeButton) {
          closeButton.click();
        }
      });
    }
  });
};

const setupFocusManagement = () => {
  // Add focus indicators
  const style = document.createElement('style');
  style.textContent = `
    *:focus {
      outline: 2px solid #4f46e5 !important;
      outline-offset: 2px !important;
    }
    
    *:focus:not(:focus-visible) {
      outline: none !important;
    }
    
    *:focus-visible {
      outline: 2px solid #4f46e5 !important;
      outline-offset: 2px !important;
    }
    
    button:focus,
    a:focus,
    input:focus,
    textarea:focus,
    select:focus {
      box-shadow: 0 0 0 2px #4f46e5 !important;
    }
  `;
  document.head.appendChild(style);
};

const setupScreenReaderSupport = () => {
  // Add ARIA labels to interactive elements
  const buttons = document.querySelectorAll('button:not([aria-label])');
  buttons.forEach(button => {
    if (!button.textContent?.trim()) {
      button.setAttribute('aria-label', 'Button');
    }
  });

  // Add role attributes where needed
  const main = document.querySelector('main');
  if (main && !main.getAttribute('role')) {
    main.setAttribute('role', 'main');
  }

  const nav = document.querySelector('nav');
  if (nav && !nav.getAttribute('role')) {
    nav.setAttribute('role', 'navigation');
  }

  const footer = document.querySelector('footer');
  if (footer && !footer.getAttribute('role')) {
    footer.setAttribute('role', 'contentinfo');
  }
};

const setupHighContrastMode = () => {
  const mediaQuery = window.matchMedia('(prefers-contrast: high)');
  
  const handleContrastChange = (e: MediaQueryListEvent) => {
    if (e.matches) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  mediaQuery.addEventListener('change', handleContrastChange);
  handleContrastChange(mediaQuery);
};

const setupReducedMotion = () => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  const handleMotionChange = (e: MediaQueryListEvent) => {
    if (e.matches) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  };

  mediaQuery.addEventListener('change', handleMotionChange);
  handleMotionChange(mediaQuery);
};

export const announceToScreenReader = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
  );
  
  const firstFocusableElement = focusableElements[0] as HTMLElement;
  const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);
  
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};