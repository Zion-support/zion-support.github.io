/**
 * Accessibility utilities for improved user experience
 */

export const ARIA_LABELS = {
  // Navigation
  MAIN_NAV: 'Main navigation',
  MOBILE_MENU: 'Mobile menu',
  CLOSE_MENU: 'Close menu',
  OPEN_MENU: 'Open menu',
  
  // Buttons
  CALL_PHONE: 'Call phone number',
  SEND_EMAIL: 'Send email',
  GET_QUOTE: 'Get a quote',
  LEARN_MORE: 'Learn more about this service',
  VIEW_DEMO: 'View product demo',
  
  // Forms
  CONTACT_FORM: 'Contact form',
  NEWSLETTER_SIGNUP: 'Newsletter signup form',
  SEARCH_FORM: 'Search form',
  
  // Content
  LOADING: 'Content is loading',
  ERROR: 'An error occurred',
  SUCCESS: 'Operation completed successfully',
  
  // Interactive elements
  CAROUSEL: 'Content carousel',
  MODAL: 'Modal dialog',
  DROPDOWN: 'Dropdown menu',
  ACCORDION: 'Accordion section',
  
  // Media
  PLAY_VIDEO: 'Play video',
  PAUSE_VIDEO: 'Pause video',
  MUTE_AUDIO: 'Mute audio',
  UNMUTE_AUDIO: 'Unmute audio',
  
  // Social
  FACEBOOK: 'Visit our Facebook page',
  TWITTER: 'Visit our Twitter page',
  LINKEDIN: 'Visit our LinkedIn page',
  INSTAGRAM: 'Visit our Instagram page',
  YOUTUBE: 'Visit our YouTube channel',
  GITHUB: 'Visit our GitHub repository'
} as const;

export const FOCUS_MANAGEMENT = {
  /**
   * Trap focus within an element
   */
  trapFocus: (element: HTMLElement): (() => void) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    const handleKeyDown = (e: KeyboardEvent) => {
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
    
    element.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();
    
    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  },
  
  /**
   * Move focus to next focusable element
   */
  moveToNext: (currentElement: HTMLElement): void => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;
    
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const nextElement = focusableElements[currentIndex + 1];
    
    if (nextElement) {
      nextElement.focus();
    }
  },
  
  /**
   * Move focus to previous focusable element
   */
  moveToPrevious: (currentElement: HTMLElement): void => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;
    
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const previousElement = focusableElements[currentIndex - 1];
    
    if (previousElement) {
      previousElement.focus();
    }
  }
};

export const KEYBOARD_NAVIGATION = {
  /**
   * Handle arrow key navigation for lists
   */
  handleArrowKeys: (
    event: KeyboardEvent,
    currentIndex: number,
    totalItems: number,
    onSelect: (index: number) => void
  ): void => {
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % totalItems;
        onSelect(nextIndex);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        const prevIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
        onSelect(prevIndex);
        break;
      case 'Home':
        event.preventDefault();
        onSelect(0);
        break;
      case 'End':
        event.preventDefault();
        onSelect(totalItems - 1);
        break;
    }
  },
  
  /**
   * Handle Enter and Space key activation
   */
  handleActivation: (
    event: KeyboardEvent,
    onActivate: () => void
  ): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onActivate();
    }
  }
};

export const SCREEN_READER = {
  /**
   * Announce text to screen readers
   */
  announce: (text: string, priority: 'polite' | 'assertive' = 'polite'): void => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = text;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },
  
  /**
   * Create screen reader only text
   */
  srOnly: (text: string): string => `<span class="sr-only">${text}</span>`,
  
  /**
   * Create visually hidden but accessible text
   */
  visuallyHidden: (text: string): string => 
    `<span class="visually-hidden">${text}</span>`
};

export const COLOR_CONTRAST = {
  /**
   * Check if color combination meets WCAG AA standards
   */
  checkContrast: (foreground: string, background: string): boolean => {
    // This is a simplified version - in production, use a proper contrast checker
    const getLuminance = (color: string): number => {
      const rgb = color.match(/\d+/g);
      if (!rgb) return 0;
      
      const [r, g, b] = rgb.map(c => {
        const val = parseInt(c) / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    
    const fgLuminance = getLuminance(foreground);
    const bgLuminance = getLuminance(background);
    
    const contrast = (Math.max(fgLuminance, bgLuminance) + 0.05) / 
                    (Math.min(fgLuminance, bgLuminance) + 0.05);
    
    return contrast >= 4.5; // WCAG AA standard
  }
};

export const MOTION_PREFERENCES = {
  /**
   * Check if user prefers reduced motion
   */
  prefersReducedMotion: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },
  
  /**
   * Get appropriate animation duration based on user preferences
   */
  getAnimationDuration: (defaultDuration: number): number => {
    return MOTION_PREFERENCES.prefersReducedMotion() ? 0 : defaultDuration;
  }
};

export const FOCUS_INDICATORS = {
  /**
   * Add visible focus indicators
   */
  addFocusRing: (element: HTMLElement): void => {
    element.classList.add('focus-visible');
  },
  
  /**
   * Remove focus indicators
   */
  removeFocusRing: (element: HTMLElement): void => {
    element.classList.remove('focus-visible');
  }
};

export const LANDMARK_ROLES = {
  MAIN: 'main',
  NAVIGATION: 'navigation',
  BANNER: 'banner',
  CONTENTINFO: 'contentinfo',
  COMPLEMENTARY: 'complementary',
  SEARCH: 'search',
  FORM: 'form',
  REGION: 'region',
  ARTICLE: 'article',
  SECTION: 'section',
  ASIDE: 'aside'
} as const;

export const HEADING_LEVELS = {
  H1: 1,
  H2: 2,
  H3: 3,
  H4: 4,
  H5: 5,
  H6: 6
} as const;

export const LIVE_REGIONS = {
  POLITE: 'polite',
  ASSERTIVE: 'assertive',
  OFF: 'off'
} as const;