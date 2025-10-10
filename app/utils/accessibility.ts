'use client';

/**
 * Accessibility utilities for enhanced user experience
 */

export interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
}

/**
 * Default accessibility settings
 */
export const defaultAccessibilitySettings: AccessibilitySettings = {
  highContrast: false,
  reducedMotion: false,
  fontSize: 'medium',
  screenReader: false,
};

/**
 * Apply accessibility settings to the document
 */
export function applyAccessibilitySettings(settings: AccessibilitySettings): void {
  const root = document.documentElement;
  
  // High contrast mode
  if (settings.highContrast) {
    root.classList.add('high-contrast');
  } else {
    root.classList.remove('high-contrast');
  }
  
  // Reduced motion
  if (settings.reducedMotion) {
    root.classList.add('reduced-motion');
  } else {
    root.classList.remove('reduced-motion');
  }
  
  // Font size
  root.classList.remove('font-small', 'font-medium', 'font-large');
  root.classList.add(`font-${settings.fontSize}`);
  
  // Screen reader optimizations
  if (settings.screenReader) {
    root.classList.add('screen-reader-optimized');
  } else {
    root.classList.remove('screen-reader-optimized');
  }
}

/**
 * Detect user's accessibility preferences
 */
export function detectAccessibilityPreferences(): Partial<AccessibilitySettings> {
  const preferences: Partial<AccessibilitySettings> = {};
  
  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    preferences.reducedMotion = true;
  }
  
  // Check for high contrast preference
  if (window.matchMedia('(prefers-contrast: high)').matches) {
    preferences.highContrast = true;
  }
  
  return preferences;
}

/**
 * Save accessibility settings to localStorage
 */
export function saveAccessibilitySettings(settings: AccessibilitySettings): void {
  try {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  } catch (error) {
    console.warn('Failed to save accessibility settings:', error);
  }
}

/**
 * Load accessibility settings from localStorage
 */
export function loadAccessibilitySettings(): AccessibilitySettings {
  try {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      return { ...defaultAccessibilitySettings, ...JSON.parse(saved) };
    }
  } catch (error) {
    console.warn('Failed to load accessibility settings:', error);
  }
  
  return defaultAccessibilitySettings;
}

/**
 * Initialize accessibility features
 */
export function initializeAccessibility(): void {
  const savedSettings = loadAccessibilitySettings();
  const detectedPreferences = detectAccessibilityPreferences();
  const finalSettings = { ...savedSettings, ...detectedPreferences };
  
  applyAccessibilitySettings(finalSettings);
}

/**
 * Announce page changes to screen readers
 */
export function announcePageChange(pageTitle: string): void {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.style.position = 'absolute';
  announcement.style.left = '-10000px';
  announcement.style.width = '1px';
  announcement.style.height = '1px';
  announcement.style.overflow = 'hidden';
  
  document.body.appendChild(announcement);
  announcement.textContent = `Navigated to ${pageTitle}`;
  
  setTimeout(() => {
    if (document.body.contains(announcement)) {
      document.body.removeChild(announcement);
    }
  }, 1000);
}

/**
 * Skip to main content functionality
 */
export function setupSkipToMainContent(): void {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'skip-to-main';
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
}

/**
 * Focus management for modals and overlays
 */
export function manageFocus(element: HTMLElement): () => void {
  const focusableElements = element.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
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
}