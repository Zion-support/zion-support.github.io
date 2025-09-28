import { useCallback, useEffect, useRef, useState } from 'react';

interface AccessibilityPreferences {
  reducedMotion: boolean;
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large';
  colorScheme: 'light' | 'dark' | 'auto';
  screenReader: boolean;
  keyboardNavigation: boolean;
}

interface AccessibilityAnnouncement {
  message: string;
  priority: 'polite' | 'assertive';
  timeout?: number;
}

interface UseAccessibilityEnhancementsOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrastMode?: boolean;
  enableReducedMotion?: boolean;
  enableFocusIndicators?: boolean;
  enableAriaLabels?: boolean;
  announceChanges?: boolean;
  enableSkipLinks?: boolean;
  enableFocusTrap?: boolean;
  enableAnnouncements?: boolean;
}

export function useAccessibilityEnhancements(options: UseAccessibilityEnhancementsOptions = {}) {
  const {
    enableKeyboardNavigation = true,
    enableScreenReaderSupport = true,
    enableHighContrastMode = true, // eslint-disable-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    enableReducedMotion = true,
    enableFocusIndicators = true,
    enableAriaLabels = true,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    announceChanges = true,
    enableSkipLinks = true,
    enableFocusTrap = true,
    enableAnnouncements = true
  } = options;

  const [preferences, setPreferences] = useState<AccessibilityPreferences>({
    reducedMotion: false,
    highContrast: false,
    fontSize: 'medium',
    colorScheme: 'auto',
    screenReader: false,
    keyboardNavigation: false
  });

  const [announcements, setAnnouncements] = useState<AccessibilityAnnouncement[]>([]);
  const [isFocusTrapped, setIsFocusTrapped] = useState(false);
  const [currentFocusIndex, setCurrentFocusIndex] = useState(0);
  const [focusableElements, setFocusableElements] = useState<HTMLElement[]>([]);

  const liveRegionRef = useRef<HTMLElement | null>(null);
  const focusTrapRef = useRef<HTMLElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Detect accessibility preferences
  useEffect(() => {
    const detectPreferences = () => {
      const newPreferences: AccessibilityPreferences = {
        reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        highContrast: window.matchMedia('(prefers-contrast: high)').matches,
        fontSize: 'medium',
        colorScheme: 'auto',
        screenReader: false,
        keyboardNavigation: false
      };

      // Detect screen reader
      if (typeof window !== 'undefined') {
        const hasScreenReader = 
          window.speechSynthesis ||
          window.navigator.userAgent.includes('NVDA') ||
          window.navigator.userAgent.includes('JAWS') ||
          window.navigator.userAgent.includes('VoiceOver');
        
        newPreferences.screenReader = !!hasScreenReader;
      }

      // Detect keyboard navigation
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          newPreferences.keyboardNavigation = true;
          document.removeEventListener('keydown', handleKeyDown);
        }
      };
      document.addEventListener('keydown', handleKeyDown);

      setPreferences(newPreferences);
    };

    detectPreferences();

    // Listen for preference changes
    const mediaQueries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(prefers-contrast: high)'),
      window.matchMedia('(prefers-color-scheme: dark)')
    ];

    const handleMediaChange = () => detectPreferences();
    mediaQueries.forEach(mq => mq.addEventListener('change', handleMediaChange));

    return () => {
      mediaQueries.forEach(mq => mq.removeEventListener('change', handleMediaChange));
    };
  }, []);

  // Create live region for announcements
  useEffect(() => {
    if (!enableScreenReaderSupport || !enableAnnouncements) return;

    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.style.cssText = `
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    document.body.appendChild(liveRegion);
    liveRegionRef.current = liveRegion;

    return () => {
      if (liveRegionRef.current) {
        document.body.removeChild(liveRegionRef.current);
        liveRegionRef.current = null;
      }
    };
  }, [enableScreenReaderSupport, enableAnnouncements]);

  // Announce messages to screen reader
  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (!enableAnnouncements || !liveRegionRef.current) return;

    const announcement: AccessibilityAnnouncement = {
      message,
      priority,
      timeout: priority === 'assertive' ? 5000 : 3000
    };

    setAnnouncements(prev => [...prev, announcement]);

    // Update live region
    liveRegionRef.current.setAttribute('aria-live', priority);
    liveRegionRef.current.textContent = message;

    // Clear after timeout
    setTimeout(() => {
      if (liveRegionRef.current) {
        liveRegionRef.current.textContent = '';
      }
      setAnnouncements(prev => prev.filter(a => a !== announcement));
    }, announcement.timeout);
  }, [enableAnnouncements]);

  // Focus management
  const focusElement = useCallback((element: HTMLElement | null) => {
    if (!element) return;

    element.focus();
    previousFocusRef.current = element;
  }, []);

  const focusNext = useCallback(() => {
    if (focusableElements.length === 0) return;

    const nextIndex = (currentFocusIndex + 1) % focusableElements.length;
    setCurrentFocusIndex(nextIndex);
    focusElement(focusableElements[nextIndex]);
  }, [focusableElements, currentFocusIndex, focusElement]);

  const focusPrevious = useCallback(() => {
    if (focusableElements.length === 0) return;

    const prevIndex = currentFocusIndex === 0 ? focusableElements.length - 1 : currentFocusIndex - 1;
    setCurrentFocusIndex(prevIndex);
    focusElement(focusableElements[prevIndex]);
  }, [focusableElements, currentFocusIndex, focusElement]);

  // Focus trap
  const trapFocus = useCallback((container: HTMLElement) => {
    if (!enableFocusTrap) return;

    focusTrapRef.current = container;
    setIsFocusTrapped(true);

    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])'
    ].join(', ');

    const elements = Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[];
    setFocusableElements(elements);
    setCurrentFocusIndex(0);

    if (elements.length > 0) {
      focusElement(elements[0]);
    }
  }, [enableFocusTrap, focusElement]);

  const releaseFocus = useCallback(() => {
    setIsFocusTrapped(false);
    setFocusableElements([]);
    setCurrentFocusIndex(0);
    focusTrapRef.current = null;

    // Return focus to previously focused element
    if (previousFocusRef.current) {
      focusElement(previousFocusRef.current);
    }
  }, [focusElement]);

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isFocusTrapped) return;

      switch (event.key) {
        case 'Tab':
          event.preventDefault();
          if (event.shiftKey) {
            focusPrevious();
          } else {
            focusNext();
          }
          break;
        case 'Escape':
          releaseFocus();
          break;
        case 'Home':
          event.preventDefault();
          setCurrentFocusIndex(0);
          focusElement(focusableElements[0]);
          break;
        case 'End': {
          event.preventDefault();
          const lastIndex = focusableElements.length - 1;
          setCurrentFocusIndex(lastIndex);
          focusElement(focusableElements[lastIndex]);
          break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation, isFocusTrapped, focusNext, focusPrevious, releaseFocus, focusableElements, focusElement]);

  // Skip links
  useEffect(() => {
    if (!enableSkipLinks) return;

    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
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

    return () => {
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, [enableSkipLinks]);

  // Apply accessibility styles
  useEffect(() => {
    if (!enableFocusIndicators) return;

    const style = document.createElement('style');
    style.textContent = `
      .focus-visible {
        outline: 2px solid #0066cc;
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
      
      ${preferences.highContrast ? `
        * {
          filter: contrast(1.2);
        }
      ` : ''}
      
      ${preferences.reducedMotion ? `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      ` : ''}
    `;

    document.head.appendChild(style);

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [enableFocusIndicators, preferences.highContrast, preferences.reducedMotion]);

  // Update ARIA labels
  const updateAriaLabel = useCallback((element: HTMLElement, label: string) => {
    if (!enableAriaLabels) return;

    element.setAttribute('aria-label', label);
  }, [enableAriaLabels]);

  // Check if element is focusable
  const isFocusable = useCallback((element: HTMLElement): boolean => {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])'
    ];

    return focusableSelectors.some(selector => element.matches(selector));
  }, []);

  return {
    preferences,
    announcements,
    isFocusTrapped,
    currentFocusIndex,
    focusableElements,
    announce,
    focusElement,
    focusNext,
    focusPrevious,
    trapFocus,
    releaseFocus,
    updateAriaLabel,
    isFocusable
  };
}