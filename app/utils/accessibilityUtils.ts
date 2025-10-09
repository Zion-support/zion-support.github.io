// Accessibility utilities for improving user experience and compliance

export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

export const createAriaLabel = (text: string, context?: string): string => {
  return context ? `${text}, ${context}` : text;
};

export const announceToScreenReader = (message: string): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export const trapFocus = (element: HTMLElement): (() => void) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  };
  
  element.addEventListener('keydown', handleTabKey);
  firstElement?.focus();
  
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
  
  return skipLink;
};

export const validateColorContrast = (foreground: string, background: string): boolean => {
  // Simple contrast ratio calculation
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g)?.map(Number) || [0, 0, 0];
    const [r, g, b] = rgb.map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  
  const fgLuminance = getLuminance(foreground);
  const bgLuminance = getLuminance(background);
  
  const contrast = (Math.max(fgLuminance, bgLuminance) + 0.05) / (Math.min(fgLuminance, bgLuminance) + 0.05);
  
  return contrast >= 4.5; // WCAG AA standard
};

export const createHighContrastMode = (): void => {
  const style = document.createElement('style');
  style.id = 'high-contrast-mode';
  style.textContent = `
    .high-contrast {
      filter: contrast(150%) brightness(120%);
    }
    .high-contrast * {
      border-color: currentColor !important;
    }
  `;
  document.head.appendChild(style);
};

export const enableHighContrastMode = (): void => {
  document.body.classList.add('high-contrast');
  createHighContrastMode();
};

export const disableHighContrastMode = (): void => {
  document.body.classList.remove('high-contrast');
  const style = document.getElementById('high-contrast-mode');
  if (style) {
    style.remove();
  }
};

export const createFocusIndicator = (): void => {
  const style = document.createElement('style');
  style.id = 'focus-indicator';
  style.textContent = `
    *:focus {
      outline: 2px solid #3b82f6 !important;
      outline-offset: 2px !important;
    }
    *:focus:not(:focus-visible) {
      outline: none !important;
    }
    *:focus-visible {
      outline: 2px solid #3b82f6 !important;
      outline-offset: 2px !important;
    }
  `;
  document.head.appendChild(style);
};

export const createReducedMotionMode = (): void => {
  const style = document.createElement('style');
  style.id = 'reduced-motion-mode';
  style.textContent = `
    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
  `;
  document.head.appendChild(style);
};

export const setupKeyboardNavigation = (): void => {
  // Add keyboard navigation support
  document.addEventListener('keydown', (e) => {
    // Escape key to close modals/dropdowns
    if (e.key === 'Escape') {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && activeElement.blur) {
        activeElement.blur();
      }
    }
    
    // Enter key to activate buttons
    if (e.key === 'Enter' && e.target instanceof HTMLElement) {
      if (e.target.getAttribute('role') === 'button' || e.target.tagName === 'BUTTON') {
        e.target.click();
      }
    }
  });
};

export const createScreenReaderOnly = (): void => {
  const style = document.createElement('style');
  style.id = 'screen-reader-only';
  style.textContent = `
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
    .sr-only:focus {
      position: static;
      width: auto;
      height: auto;
      padding: inherit;
      margin: inherit;
      overflow: visible;
      clip: auto;
      white-space: normal;
    }
  `;
  document.head.appendChild(style);
};

export const setupAccessibility = (): void => {
  createFocusIndicator();
  createReducedMotionMode();
  createScreenReaderOnly();
  setupKeyboardNavigation();
};

export const createARIALiveRegion = (): HTMLElement => {
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  liveRegion.id = 'aria-live-region';
  document.body.appendChild(liveRegion);
  return liveRegion;
};

export const updateLiveRegion = (message: string): void => {
  let liveRegion = document.getElementById('aria-live-region');
  if (!liveRegion) {
    liveRegion = createARIALiveRegion();
  }
  liveRegion.textContent = message;
};

export const createLandmarkNavigation = (): void => {
  const landmarks = document.querySelectorAll('main, nav, aside, header, footer, section[aria-labelledby]');
  
  landmarks.forEach((landmark, index) => {
    const role = landmark.getAttribute('role') || landmark.tagName.toLowerCase();
    const label = landmark.getAttribute('aria-label') || landmark.getAttribute('aria-labelledby') || `${role} ${index + 1}`;
    
    landmark.setAttribute('tabindex', '-1');
    landmark.setAttribute('aria-label', label);
  });
};

export const setupLandmarkNavigation = (): void => {
  createLandmarkNavigation();
  
  // Update landmarks when content changes
  const observer = new MutationObserver(() => {
    createLandmarkNavigation();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};
