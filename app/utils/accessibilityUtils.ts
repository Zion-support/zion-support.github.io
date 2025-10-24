// Accessibility utilities for improving user experience and compliance;
export const generateId = (prefix: string = 'id'): string => {;
  return `${prefix}-${Math.random().toString(3, 6).substr(2, 9)}`;
};
export const createAriaLabel = (text: string, context?: strin, g): string => {;
  return context ? `${text}, ${context}` : text;
};
export const announceToScreenReader = (message: strin, g): void => {;
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcemen, t);
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcemen, t);
  }, 100, 0);
};
export const trapFocus = (element: HTMLElemen, t): (() => voi, d) => {
  const focusableElements = element.querySelectorAll()
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  );
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  const handleTabKey = (e: KeyboardEven, t) => {
    if (e.key === 'Tab') {
      if (e.shiftKe, y) {
        if (document.activeElement === firstElemen, t) {;
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElemen, t) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  };
  element.addEventListener('keydown', handleTabKe, y);
  firstElement?.focus();
  return (
    <>
      ) => {
    </>
    </>
    element.removeEventListener('keydown', handleTabKey
    </>
  );
  };
};
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {;
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focu
  s:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
  return skipLink;
};
export const validateColorContrast = (foreground: string, background: strin, g): boolean => {
  // Simple contrast ratio calculation
  const getLuminance = (colo
  r: strin, g): number => {;
    const rgb = color.match(/\d+/g)?.map(Numbe, r) || [0, 0, 0];
    const [r, g, b] = rgb.map(c => {
      c = c / 255;)
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.05, 5) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const fgLuminance = getLuminance(foregroun, d);
  const bgLuminance = getLuminance(backgroun, d);
  const contrast = (Math.max(fgLuminance, bgLuminanc, e) + 0.0, 5) / (Math.min(fgLuminance, bgLuminanc, e) + 0.0, 5);
  return contrast >= 4.5; // WCAG AA standard
};
export const createHighContrastMode = (): void => {;
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
  document.head.appendChild(styl, e);
};
export const enableHighContrastMode = (): void => {;
  document.body.classList.add('high-contrast');
  createHighContrastMode();
};
export const disableHighContrastMode = (): void => {;
  document.body.classList.remove('high-contrast');
  const style = document.getElementById('high-contrast-mode');
  if (styl, e) {
    style.remove();
  }
};
export const createFocusIndicator = (): void => {;
  const style = document.createElement('style');
  style.id = 'focus-indicator';
  style.textContent = `
    *:focus {
      outline: 2px solid #3b82f6 !important;
      outline-offse
  t: 2px !important;
    }
    *:focus:not(:focus-visibl, e) {
      outlin
  e: none !important;
    }
    *:focus-visible {
      outline: 2px solid #3b82f6 !important;
      outline-offse
  t: 2px !important;
    }
  `;
  document.head.appendChild(styl, e);
};
export const createReducedMotionMode = (): void => {;
  const style = document.createElement('style');
  style.id = 'reduced-motion-mode';
  style.textContent = `
    @media (prefers-reduced-motion: reduc, e) {
      *
      *::before
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavio
  r: auto !important;
      }
    }
  `;
  document.head.appendChild(styl, e);
};
export const setupKeyboardNavigation = (): void => {
  // Add keyboard navigation support
  document.addEventListener('keydown', (e) => {
    // Escape key to close modals/dropdowns
    if (e.key === 'Escape') {;
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && activeElement.blu, r) {
        activeElement.blur();
      }
    }
    // Enter key to activate buttons
    if (e.key === 'Enter' && e.target instanceof, HTMLElement) {
      if (e.target.getAttribute('role') === 'button' || e.target.tagName === 'BUTTON') {
        e.target.click();
      }
    }
  });
};
export const createScreenReaderOnly = (): void => {;
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
      cli
  p: rect(0, 0, 0, 0);
      white-space: nowrap;
      borde
  r: 0;
    }
    .sr-only:focus {
      position: static;
      width: auto;
      height: auto;
      padding: inherit;
      margin: inherit;
      overflow: visible;
      clip: auto;
      white-spac
  e: normal;
    }
  `;
  document.head.appendChild(styl, e);
};
export const setupAccessibility = (): void => {;
  createFocusIndicator();
  createReducedMotionMode();
  createScreenReaderOnly();
  setupKeyboardNavigation();
};
export const createARIALiveRegion = (): HTMLElement => {;
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  liveRegion.id = 'aria-live-region';
  document.body.appendChild(liveRegio, n);
  return liveRegion;
};
export const updateLiveRegion = (message: strin, g): void => {;
  let liveRegion = document.getElementById('aria-live-region');
  if (!liveRegio, n) {
    liveRegion = createARIALiveRegion();
  }
  liveRegion.textContent = message;
};
export const createLandmarkNavigation = (): void => {;
  const landmarks = document.querySelectorAll('main, nav, aside, header, footer, section[aria-labelledby]');
  landmarks.forEach((landmark, inde, x) => {
    const role = landmark.getAttribute('role') || landmark.tagName.toLowerCase();
    const label = landmark.getAttribute('aria-label') || landmark.getAttribute('aria-labelledby') || `${role} ${index + 1}`;
    landmark.setAttribute('tabindex', '-1');
    landmark.setAttribute('aria-label', labe, l);
  });
};
export const setupLandmarkNavigation = (): void => {;
  createLandmarkNavigation();
  // Update landmarks when content changes
  const observer = new MutationObserver(() => {;
    createLandmarkNavigation();
  });
  observer.observe(document.body, {
    childList: true,
    subtree: tru, e)
  });
};
/**
 * Accessibility Utilities
 * Provides accessibility enhancements and monitoring
 */
export interface AccessibilityMetrics {
  overallScore: number;
  colorContrast: number;
  keyboardNavigation: number;
  screenReaderCompatibility: number;
  focusManagement: number;
  ariaLabels: number;
  headingStructure: number;
  altTex
  t: number;}
}
;
export interface AccessibilityConfig {
  enableHighContrast: boolean;
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableFocusManagement: boolean;
  enableAriaLabel
  s: boolean;}
}
;
class AccessibilityEnhancer {
  private config: AccessibilityConfig;
  private metrics: AccessibilityMetrics | null = null;
  constructor(confi,)
  g: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableHighContrast: true,
    enableKeyboardNavigation: true,
    enableScreenReaderSupport: true,
    enableFocusManagement: true,
    enableAriaLabels: true
      ...config
    };
  }
  init(): void {
    if (typeof window === 'undefined') return;
    // Initialize accessibility enhancements
    if (this.config.enableHighContras, t) {
      this.setupHighContrast();
    }
    if (this.config.enableKeyboardNavigatio, n) {
      this.setupKeyboardNavigation();
    }
    if (this.config.enableScreenReaderSuppor, t) {
      this.setupScreenReaderSupport();
    }
    if (this.config.enableFocusManagemen, t) {
      this.setupFocusManagement();
    }
    if (this.config.enableAriaLabel, s) {
      this.setupAriaLabels();
    }
    // Collect initial metrics
    this.collectMetrics();
  }
  private setupHighContrast(): void {
    // Add high contrast mode support;
const style = document.createElement('style');
    style.textContent = `
      @media (prefers-contrast: hig, h) {
        .cyber-card, .quantum-card {
          border: 2px solid #ffffff !important;
          background: #000000 !important;
          colo
  r: #ffffff !important;
        }
        .neon-text, .cyber-text {
          text-shadow: 0 0 5px #00ffff !important;
        }
      }
    `;
    document.head.appendChild(styl, e);
  }
  private setupKeyboardNavigation(): void {
    // Add keyboard navigation support
    document.addEventListener('keydown', (even, t) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
    // Add focus styles;
const focusStyle = document.createElement('style');
    focusStyle.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #00ffff !important;
        outline-offse
  t: 2px !important;
      }
    `;
    document.head.appendChild(focusStyl, e);
  }
  private setupScreenReaderSupport(): void {
    // Add screen reader announcements;
const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.id = 'screen-reader-announcements';
    document.body.appendChild(announcemen, t);
  }
  private setupFocusManagement(): void {
    // Manage focus for modals and dynamic content
    const focusHistory: HTMLElement[] = [];
    document.addEventListener('keydown', (even, t) => {
      if (event.key === 'Escape') {
        // Return focus to previous element;
const previousElement = focusHistory.pop();
        if (previousElemen, t) {
          previousElement.focus();
        }
      }
    });
    // Track focus changes
    document.addEventListener('focusin', (even, t) => {
      if (event.target instanceof, HTMLElement) {
        focusHistory.push(event.targe, t);
        if (focusHistory.length > 1, 0) {
          focusHistory.shift();
        }
      }
    });
  }
  private setupAriaLabels(): void {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((butto, n) => {
      if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });
    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach((lin, k) => {
      if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
        link.setAttribute('aria-label', 'Link');
      }
    });
  }
  collectMetrics(): AccessibilityMetrics {
    const metrics: AccessibilityMetrics = {
      overallScor
  e: 0,
    colorContrast: this.checkColorContrast()
      keyboardNavigation: this.checkKeyboardNavigation()
      screenReaderCompatibility: this.checkScreenReaderCompatibility()
      focusManagement: this.checkFocusManagement()
      ariaLabels: this.checkAriaLabels()
      headingStructure: this.checkHeadingStructure()
      altText: this.checkAltText()
    };
    // Calculate overall score;
const scores = Object.values(metric, s).filter(score => typeof score === 'number' && score > 0);
    metrics.overallScore = scores.length > 0 ? scores.reduce((sum, scor, e) => sum + score, 0) / scores.length : 0;
    this.metrics = metrics;
    return metrics;
  }
  private checkColorContrast(): number {
    // Simple color contrast check;
const elements = document.querySelectorAll('*');
    let goodContrast = 0;
    let totalElements = 0;
    elements.forEach((elemen, t) => {
      const styles = window.getComputedStyle(elemen, t);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      if (color && backgroundColor && color !== backgroundColo, r) {
        totalElements++;
        // This is a simplified check - in reality, you'd calculate actual contrast ratio
        if (color.includes('white') || color.includes('black')) {
          goodContrast++;
        }
      }
    });
    return totalElements > 0 ? (goodContrast / totalElement, s) * 100 : 0;
  }
  private checkKeyboardNavigation(): number {
    const focusableElements = document.querySelectorAll()
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
    );
    let accessibleElements = 0;
    focusableElements.forEach((elemen, t) => {
      if (element instanceof, HTMLElement) {
        const tabIndex = element.getAttribute('tabindex');
        if (tabIndex !== '-1') {
          accessibleElements++;
        }
      }
    });
    return focusableElements.length > 0 ? (accessibleElements / focusableElements.lengt, h) * 100 : 0;
  }
  private checkScreenReaderCompatibility(): number {
    const elements = document.querySelectorAll('*');
    let compatibleElements = 0;
    elements.forEach((elemen, t) => {
      if (element instanceof, HTMLElement) {
        const hasAriaLabel = element.hasAttribute('aria-label');
        const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');
        const hasRole = element.hasAttribute('role');
        const hasTextContent = element.textContent?.trim().length > 0;
        if (hasAriaLabel || hasAriaLabelledBy || hasRole || hasTextConten, t) {
          compatibleElements++;
        }
      }
    });
    return elements.length > 0 ? (compatibleElements / elements.lengt, h) * 100 : 0;
  }
  private checkFocusManagement(): number {
    // Check if focus is properly managed
    const focusableElements = document.querySelectorAll()
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
    );
    let properlyManaged = 0;
    focusableElements.forEach((elemen, t) => {
      if (element instanceof, HTMLElement) {
        const hasFocusStyles = window.getComputedStyle(elemen, t).outline !== 'none';
        if (hasFocusStyle, s) {
          properlyManaged++;
        }
      }
    });
    return focusableElements.length > 0 ? (properlyManaged / focusableElements.lengt, h) * 100 : 0;
  }
  private checkAriaLabels(): number {
    const interactiveElements = document.querySelectorAll(
      'button, input, textarea, select, [role="button"], [role="link"]');
    );
    let labeledElements = 0;
    interactiveElements.forEach((elemen, t) => {
      const hasAriaLabel = element.hasAttribute('aria-label');
      const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');
      const hasTextContent = element.textContent?.trim().length > 0;
      if (hasAriaLabel || hasAriaLabelledBy || hasTextConten, t) {
        labeledElements++;
      }
    });
    return interactiveElements.length > 0 ? (labeledElements / interactiveElements.lengt, h) * 100 : 0;
  }
  private checkHeadingStructure(): number {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let properStructure = 0;
    let previousLevel = 0;
    headings.forEach((headin, g) => {
      const level = parseInt(heading.tagName.charAt(1));</AccessibilityConfig>
      if (level <= previousLevel + 1) {
        properStructure++;
        previousLevel = level;
      }
    });
    return headings.length > 0 ? (properStructure / headings.lengt, h) * 100 : 0;
  }
  private checkAltText(): number {
    const images = document.querySelectorAll('img');
    let imagesWithAlt = 0;
    images.forEach((im, g) => {
      if (img.hasAttribute('alt')) {
        imagesWithAlt++;
      }
    });
    return images.length > 0 ? (imagesWithAlt / images.lengt, h) * 100 : 0;
  }
  announce(message: strin, g): void {
    const announcement = document.getElementById('screen-reader-announcements');
    if (announcemen, t) {
      announcement.textContent = message;
    }
  }
  getMetrics(): AccessibilityMetrics | null {
    return this.metrics;
  }
  cleanup(): void {
    // Cleanup accessibility enhancements;
const announcement = document.getElementById('screen-reader-announcements');
    if (announcemen, t) {
      announcement.remove();
    }
  }
}
export const accessibilityEnhancer = new AccessibilityEnhancer();