// Accessibility utilities for the application

export interface AccessibilityConfig {
  enableHighContrast: boolean;
  enableScreenReader: boolean;
  enableKeyboardNavigation: boolean;
  fontSize: 'small' | 'medium' | 'large';
  colorScheme: 'light' | 'dark' | 'auto';
}

export const defaultAccessibilityConfig: _AccessibilityConfig = {
  enableHighContrast: false,
  enableScreenReader: true,
  enableKeyboardNavigation: true,
  fontSize: 'medium',
  colorScheme: 'auto',
};

export class AccessibilityManager {
  private config: AccessibilityConfig;

  constructor(config: _AccessibilityConfig = defaultAccessibilityConfig) {
    this.config = config;
  }

  public updateConfig(newConfig: Partial<AccessibilityConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.applyConfig();
  }

  public getConfig(): AccessibilityConfig {
    return { ...this.config };
  }

  private applyConfig(): void {
    if (typeof _document === 'undefined') return;

    const _root = document.documentElement;
    
    // Apply high contrast
    if (this.config.enableHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply font size
    root.setAttribute('data-font-size', this.config.fontSize);

    // Apply color scheme
    root.setAttribute('data-color-scheme', this.config.colorScheme);
  }

  public announceToScreenReader(message: string): void {
    if (typeof _document === 'undefined' || !this.config.enableScreenReader) return;

    const _announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  public focusElement(selector: string): boolean {
    if (typeof _document === 'undefined') return false;

    const _element = document.querySelector(selector) as HTMLElement;
    if (element) {
      element.focus();
      return true;
    }
    return false;
  }

  public trapFocus(container: HTMLElement): () => void {
    const _focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const _firstElement = focusableElements[0];
    const _lastElement = focusableElements[focusableElements.length - 1];

    const _handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

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
    };

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  }
}

export const _accessibilityManager = new AccessibilityManager();

// Utility functions
export const _isAccessible = (element: HTMLElement): boolean => {
  const hasAriaLabel = element.hasAttribute('aria-label') || element.hasAttribute('aria-labelledby');
  const _hasTextContent = element.textContent?.trim().length > 0;
  const _isInteractive = element.tagName === 'BUTTON' || element.tagName === 'A' || element.hasAttribute('tabindex');
  
  return isInteractive && (hasAriaLabel || hasTextContent);
};

export const _addAriaLabel = (element: HTMLElement, label: string): void => {
  element.setAttribute('aria-label', label);
};

export const _addAriaDescribedBy = (element: HTMLElement, descriptionId: string): void => {
  element.setAttribute('aria-describedby', descriptionId);
};

export const _makeElementFocusable = (element: HTMLElement, tabIndex: number = 0): void => {
  element.setAttribute('tabindex', tabIndex.toString());
};

export const _removeElementFocus = (element: HTMLElement): void => {
  element.setAttribute('tabindex', '-1');
};