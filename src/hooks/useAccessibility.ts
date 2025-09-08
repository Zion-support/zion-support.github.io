import { useState, useEffect, useCallback } from 'react';

export interface UseAccessibilityOptions {

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  colorScheme: 'default' | 'high-contrast' | 'dark' | 'light';
  motionPreference: 'reduce' | 'no-preference';
  focusStyle: 'default' | 'high-visibility' | 'minimal';
}

export interface AccessibilityFeatures {

  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'medium',
    colorScheme: 'default',
    motionPreference: 'no-preference',
    focusStyle: 'default'
  });

  // Load preferences from localStorage
  useEffect(() => {
    const savedPreferences = localStorage.getItem('zion-accessibility-preferences');
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    
    if (savedPreferences) {
      try {
        setPreferences(JSON.parse(savedPreferences));
      } catch (error) {
        console.warn('Failed to parse accessibility preferences:', error);
      }
    }
    
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Save preferences to localStorage
  const savePreferences = useCallback((newPreferences: Partial<AccessibilityPreferences>) => {
    const updatedPreferences = { ...preferences, ...newPreferences };
    setPreferences(updatedPreferences);
    localStorage.setItem('zion-accessibility-preferences', JSON.stringify(updatedPreferences));
  }, [preferences]);

  const saveSettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(updatedSettings));
  }, [settings]);

  // Apply accessibility features
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (preferences.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--contrast-multiplier', '1.5');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--contrast-multiplier');
    }
    
    // Apply large text
    if (preferences.largeText) {
      root.classList.add('large-text');
      root.style.setProperty('--font-size-multiplier', '1.2');
    } else {
      root.classList.remove('large-text');
      root.style.removeProperty('--font-size-multiplier');
    }
    
    // Apply reduced motion
    if (preferences.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--motion-reduction', '0.5');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--motion-reduction');
    }
    
    // Apply focus indicator
    if (preferences.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [preferences]);

  // Keyboard navigation support
  useEffect(() => {
    if (!preferences.keyboardNavigation) return;
    
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }
      
      // Toggle accessibility menu
      if (event.key === 'Escape') {
        // Close any open modals or menus
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          if (modal instanceof HTMLElement) {
            modal.style.display = 'none';
          }
        });
      }
    };
    
    // Remove focus indicator after animation
    setTimeout(() => {
      element.classList.remove('focus-visible');
    }, 2000);
  }, [enableFocusManagement]);

  // Focus trap for modals
  const createFocusTrap = useCallback((container: HTMLElement) => {
    if (!enableFocusManagement) return;

    focusTrapRef.current = container;
    const focusableElements = getFocusableElements(container);
    
    if (focusableElements.length > 0) {
      focusableElements[0]?.focus();
    }

    // Store focusable elements
    focusableElementsRef.current = focusableElements;
  }, [enableFocusManagement]);

  // Remove focus trap
  const removeFocusTrap = useCallback(() => {
    if (focusTrapRef.current && lastFocusedElementRef.current) {
      lastFocusedElementRef.current.focus();
      focusTrapRef.current = null;
      focusableElementsRef.current = [];
    }
  }, []);

  // Get all focusable elements
  const getFocusableElements = useCallback((container: HTMLElement): HTMLElement[] => {
    const selector = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', ');

    return Array.from(container.querySelectorAll(selector)) as HTMLElement[];
  }, []);

  // Navigate focus
  const navigateFocus = useCallback((direction: 'forward' | 'backward', currentElement: HTMLElement) => {
    const container = focusTrapRef.current || document.body;
    const focusableElements = getFocusableElements(container);
    
    if (focusableElements.length === 0) return;

    const currentIndex = focusableElements.indexOf(currentElement);
    let nextIndex: number;

    if (direction === 'forward') {
      nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
    } else {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
    }

    manageFocus(focusableElements[nextIndex]);
  }, [getFocusableElements, manageFocus]);

  // Vertical navigation
  const navigateVertical = useCallback((direction: 'up' | 'down', currentElement: HTMLElement) => {
    // Implementation for vertical navigation (e.g., in dropdowns, lists)
    const container = currentElement.closest('[role="listbox"], [role="menu"], .dropdown, .list');
    if (!container) return;

    const items = Array.from(container.querySelectorAll('[role="option"], [role="menuitem"], .item, li'));
    const currentIndex = items.indexOf(currentElement);
    
    if (currentIndex === -1) return;

    let nextIndex: number;
    if (direction === 'up') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    } else {
      nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    }

    const nextElement = items[nextIndex] as HTMLElement;
    if (nextElement) {
      manageFocus(nextElement);
    }
  }, [manageFocus]);

  // Horizontal navigation
  const navigateHorizontal = useCallback((direction: 'left' | 'right', currentElement: HTMLElement) => {
    // Implementation for horizontal navigation (e.g., in tabs, carousels)
    const container = currentElement.closest('[role="tablist"], .tabs, .carousel');
    if (!container) return;

    const items = Array.from(container.querySelectorAll('[role="tab"], .tab, .slide'));
    const currentIndex = items.indexOf(currentElement);
    
    if (currentIndex === -1) return;

    let nextIndex: number;
    if (direction === 'left') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    } else {
      nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    }

    const nextElement = items[nextIndex] as HTMLElement;
    if (nextElement) {
      manageFocus(nextElement);
    }
  }, [manageFocus]);

  // Close active elements
  const closeActiveElements = useCallback(() => {
    // Close modals, dropdowns, etc.
    const activeElements = document.querySelectorAll('.modal.active, .dropdown.active, .popup.active');
    activeElements.forEach(element => {
      element.classList.remove('active');
    });

    // Remove focus trap
    removeFocusTrap();
  }, [removeFocusTrap]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (preferences.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }, [preferences.screenReader]);

  // Focus management
  const focusFirstInteractive = useCallback((container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    }
  }, []);

  const trapFocus = useCallback((container: HTMLElement) => {
    const focusableElements = Array.from(
      container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(el => {
      const element = el as HTMLElement;
      return !(element as HTMLButtonElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).disabled;
    }) as HTMLElement[];
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };
    
    container.addEventListener('keydown', handleTabKey);
    return () => container.removeEventListener('keydown', handleTabKey);
  }, []);

  return {
    preferences,
    settings,
    savePreferences,
    saveSettings,
    announceToScreenReader,
    focusFirstInteractive,
    trapFocus
  };
};