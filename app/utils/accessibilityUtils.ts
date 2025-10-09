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
<<<<<<< HEAD
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    announcement.remove();
  }, 1000);
};

export const trapFocus = (element: HTMLElement): (() => void) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
  );
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
=======
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export const focusElement = (element: HTMLElement | null): void => {
  if (element) {
    element.focus();
  }
};

export const trapFocus = (container: HTMLElement): (() => void) => {
  const focusableElements = container.querySelectorAll(
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
>>>>>>> main
      }
    }
  };
  
  container.addEventListener('keydown', handleTabKey);
  
  return () => {
<<<<<<< HEAD
    element.removeEventListener('keydown', handleTabKey);
  };
};

=======
    container.removeEventListener('keydown', handleTabKey);
  };
};

export const validateAriaAttributes = (element: HTMLElement): string[] => {
  const errors: string[] = [];
  
  // Check for required ARIA attributes
  if (element.getAttribute('role') === 'button' && !element.getAttribute('aria-label') && !element.textContent?.trim()) {
    errors.push('Button with role="button" must have aria-label or accessible text');
  }
  
  if (element.getAttribute('aria-expanded') !== null && !element.getAttribute('aria-controls')) {
    errors.push('Element with aria-expanded must have aria-controls');
  }
  
  const ariaLabelledBy = element.getAttribute('aria-labelledby');
  if (ariaLabelledBy && !document.getElementById(ariaLabelledBy)) {
    errors.push('Element with aria-labelledby references non-existent element');
  }
  
  return errors;
};

export const enhanceKeyboardNavigation = (element: HTMLElement): void => {
  element.setAttribute('tabindex', '0');
  
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      element.click();
    }
  });
};

>>>>>>> main
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
<<<<<<< HEAD
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
=======
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
>>>>>>> main
  
  return skipLink;
};

<<<<<<< HEAD
export const validateColorContrast = (foreground: string, background: string): boolean => {
  const getLuminance = (color: string): number => {
    const rgb = hexToRgb(color);
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
=======
export const checkColorContrast = (foreground: string, background: string): boolean => {
  // Simple contrast ratio calculation (simplified)
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g);
    if (!rgb) return 0;
    
    const [r, g, b] = rgb.map(Number).map(c => {
>>>>>>> main
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  
  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  
  const contrast = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  
  return contrast >= 4.5; // WCAG AA standard
};

<<<<<<< HEAD
export const createHighContrastMode = (): void => {
  const style = document.createElement('style');
  style.textContent = `
    .high-contrast * {
      background: #000 !important;
      color: #fff !important;
      border-color: #fff !important;
    }
  `;
  document.head.appendChild(style);
};

export const enableHighContrastMode = (): void => {
  document.body.classList.add('high-contrast');
};

export const disableHighContrastMode = (): void => {
  document.body.classList.remove('high-contrast');
};

export const createFocusIndicator = (): void => {
  const style = document.createElement('style');
  style.textContent = `
    *:focus:not(:focus-visible) {
      outline: none;
    }
    *:focus-visible {
      outline: 2px solid #4f46e5;
      outline-offset: 2px;
    }
  `;
  document.head.appendChild(style);
};

export const createReducedMotionMode = (): void => {
  const style = document.createElement('style');
  style.textContent = `
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;
  document.head.appendChild(style);
};

export const setupKeyboardNavigation = (): void => {
  document.addEventListener('keydown', (e) => {
    // Tab key to show focus indicators
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
    
    // Enter key to activate buttons
    if (e.key === 'Enter' && e.target instanceof HTMLElement) {
      if (e.target.getAttribute('role') === 'button') {
        e.target.click();
      }
    }
  });
  
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });
};

export const createScreenReaderOnly = (): void => {
  const style = document.createElement('style');
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
  createScreenReaderOnly();
  createFocusIndicator();
  createReducedMotionMode();
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
  const liveRegion = document.getElementById('aria-live-region');
  if (liveRegion) {
    liveRegion.textContent = message;
  }
};

export const createLandmarkNavigation = (): void => {
  const landmarks = document.querySelectorAll('[role="banner"], [role="main"], [role="complementary"], [role="contentinfo"], [role="navigation"], [role="search"], [role="form"]');
  landmarks.forEach((landmark, index) => {
    const role = landmark.getAttribute('role');
    const label = landmark.getAttribute('aria-label') || landmark.getAttribute('aria-labelledby') || `${role} ${index + 1}`;
    
    landmark.setAttribute('tabindex', '-1');
    landmark.setAttribute('aria-label', label);
  });
};

export const setupLandmarkNavigation = (): void => {
  createLandmarkNavigation();
  
  const observer = new MutationObserver(() => {
    createLandmarkNavigation();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
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
  altText: number;
}

export interface AccessibilityConfig {
  enableHighContrast: boolean;
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableFocusManagement: boolean;
  enableAriaLabels: boolean;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;
  private metrics: AccessibilityMetrics | null = null;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableHighContrast: true,
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableFocusManagement: true,
      enableAriaLabels: true,
      ...config,
    };
  }

  init(): void {
    if (typeof window === 'undefined') return;

    // Initialize accessibility enhancements
    if (this.config.enableHighContrast) {
      this.setupHighContrast();
    }

    if (this.config.enableKeyboardNavigation) {
      this.setupKeyboardNavigation();
    }

    if (this.config.enableScreenReaderSupport) {
      this.setupScreenReaderSupport();
    }

    if (this.config.enableFocusManagement) {
      this.setupFocusManagement();
    }

    if (this.config.enableAriaLabels) {
      this.setupAriaLabels();
    }

    // Collect initial metrics
    this.collectMetrics();
  }

  private setupHighContrast(): void {
    // Add high contrast mode support
    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-contrast: high) {
        .cyber-card, .quantum-card {
          border: 2px solid #ffffff !important;
          background: #000000 !important;
          color: #ffffff !important;
        }
        
        .neon-text, .cyber-text {
          text-shadow: 0 0 5px #00ffff !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  private setupKeyboardNavigation(): void {
    // Add keyboard navigation support
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });

    // Add focus styles
    const focusStyle = document.createElement('style');
    focusStyle.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #00ffff !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(focusStyle);
  }

  private setupScreenReaderSupport(): void {
    // Add screen reader announcements
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.id = 'screen-reader-announcements';
    document.body.appendChild(announcement);
  }

  private setupFocusManagement(): void {
    // Manage focus for modals and dynamic content
    let focusHistory: HTMLElement[] = [];

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        // Return focus to previous element
        const previousElement = focusHistory.pop();
        if (previousElement) {
          previousElement.focus();
        }
      }
    });

    // Track focus changes
    document.addEventListener('focusin', (event) => {
      if (event.target instanceof HTMLElement) {
        focusHistory.push(event.target);
        if (focusHistory.length > 10) {
          focusHistory.shift();
        }
      }
    });
  }

  private setupAriaLabels(): void {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach((link) => {
      if (!link.getAttribute('aria-label') && !link.textContent?.trim()) {
        link.setAttribute('aria-label', 'Link');
      }
    });
  }

  collectMetrics(): AccessibilityMetrics {
    const metrics: AccessibilityMetrics = {
      overallScore: 0,
      colorContrast: this.checkColorContrast(),
      keyboardNavigation: this.checkKeyboardNavigation(),
      screenReaderCompatibility: this.checkScreenReaderCompatibility(),
      focusManagement: this.checkFocusManagement(),
      ariaLabels: this.checkAriaLabels(),
      headingStructure: this.checkHeadingStructure(),
      altText: this.checkAltText(),
    };

    // Calculate overall score
    const scores = Object.values(metrics).filter(score => typeof score === 'number' && score > 0);
    metrics.overallScore = scores.length > 0 ? scores.reduce((sum, score) => sum + score, 0) / scores.length : 0;

    this.metrics = metrics;
    return metrics;
  }

  private checkColorContrast(): number {
    // Simple color contrast check
    const elements = document.querySelectorAll('*');
    let goodContrast = 0;
    let totalElements = 0;

    elements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color && backgroundColor && color !== backgroundColor) {
        totalElements++;
        // This is a simplified check - in reality, you'd calculate actual contrast ratio
        if (color.includes('white') || color.includes('black')) {
          goodContrast++;
        }
      }
    });

    return totalElements > 0 ? (goodContrast / totalElements) * 100 : 0;
  }

  private checkKeyboardNavigation(): number {
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    let accessibleElements = 0;

    focusableElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        const tabIndex = element.getAttribute('tabindex');
        if (tabIndex !== '-1') {
          accessibleElements++;
        }
      }
    });

    return focusableElements.length > 0 ? (accessibleElements / focusableElements.length) * 100 : 0;
  }

  private checkScreenReaderCompatibility(): number {
    const elements = document.querySelectorAll('*');
    let compatibleElements = 0;

    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        const hasAriaLabel = element.hasAttribute('aria-label');
        const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');
        const hasRole = element.hasAttribute('role');
        const hasTextContent = element.textContent?.trim().length > 0;
        
        if (hasAriaLabel || hasAriaLabelledBy || hasRole || hasTextContent) {
          compatibleElements++;
        }
      }
    });

    return elements.length > 0 ? (compatibleElements / elements.length) * 100 : 0;
  }

  private checkFocusManagement(): number {
    // Check if focus is properly managed
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    let properlyManaged = 0;
    focusableElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        const hasFocusStyles = window.getComputedStyle(element).outline !== 'none';
        if (hasFocusStyles) {
          properlyManaged++;
        }
      }
    });

    return focusableElements.length > 0 ? (properlyManaged / focusableElements.length) * 100 : 0;
  }

  private checkAriaLabels(): number {
    const interactiveElements = document.querySelectorAll(
      'button, input, textarea, select, [role="button"], [role="link"]'
    );
    
    let labeledElements = 0;
    interactiveElements.forEach((element) => {
      const hasAriaLabel = element.hasAttribute('aria-label');
      const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');
      const hasTextContent = element.textContent?.trim().length > 0;
      
      if (hasAriaLabel || hasAriaLabelledBy || hasTextContent) {
        labeledElements++;
      }
    });

    return interactiveElements.length > 0 ? (labeledElements / interactiveElements.length) * 100 : 0;
  }

  private checkHeadingStructure(): number {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let properStructure = 0;
    let previousLevel = 0;

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level <= previousLevel + 1) {
        properStructure++;
        previousLevel = level;
      }
    });

    return headings.length > 0 ? (properStructure / headings.length) * 100 : 0;
  }

  private checkAltText(): number {
    const images = document.querySelectorAll('img');
    let imagesWithAlt = 0;

    images.forEach((img) => {
      if (img.hasAttribute('alt')) {
        imagesWithAlt++;
      }
    });

    return images.length > 0 ? (imagesWithAlt / images.length) * 100 : 0;
  }

  announce(message: string): void {
    const announcement = document.getElementById('screen-reader-announcements');
    if (announcement) {
      announcement.textContent = message;
    }
  }

  getMetrics(): AccessibilityMetrics | null {
    return this.metrics;
  }

  cleanup(): void {
    // Cleanup accessibility enhancements
    const announcement = document.getElementById('screen-reader-announcements');
    if (announcement) {
      announcement.remove();
    }
  }
}

export const accessibilityEnhancer = new AccessibilityEnhancer();

// Helper function to convert hex to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : { r: 0, g: 0, b: 0 };
}
=======
export const addFocusIndicators = (): void => {
  const style = document.createElement('style');
  style.textContent = `
    *:focus {
      outline: 2px solid #3b82f6;
      outline-offset: 2px;
    }
    
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
    
    .focus\\:not-sr-only:focus {
      position: static;
      width: auto;
      height: auto;
      padding: 0.5rem 1rem;
      margin: 0;
      overflow: visible;
      clip: auto;
      white-space: normal;
    }
  `;
  
  document.head.appendChild(style);
};

export const initializeAccessibility = (): void => {
  addFocusIndicators();
  
  // Add skip link to main content
  const mainContent = document.querySelector('main');
  if (mainContent && !mainContent.id) {
    mainContent.id = 'main-content';
    const skipLink = createSkipLink('main-content');
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
  
  // Enhance all interactive elements
  const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
  interactiveElements.forEach((element) => {
    enhanceKeyboardNavigation(element as HTMLElement);
  });
};
>>>>>>> main
