/**
 * Accessibility utilities for improving website accessibility
 */

export interface AccessibilityConfig {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  announcePageChanges?: boolean;
}

export class AccessibilityManager {
  private config: AccessibilityConfig;
  private announcementElement: HTMLElement | null = null;

  constructor(config: AccessibilityConfig = {}) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: false,
      enableReducedMotion: false,
      announcePageChanges: true,
      ...config,
    };

    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.createAnnouncementElement();
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrastMode();
    this.setupReducedMotion();
  }

  private createAnnouncementElement(): void {
    if (!this.config.announcePageChanges) return;

    this.announcementElement = document.createElement('div');
    this.announcementElement.setAttribute('aria-live', 'polite');
    this.announcementElement.setAttribute('aria-atomic', 'true');
    this.announcementElement.className = 'sr-only';
    this.announcementElement.style.cssText = `
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    document.body.appendChild(this.announcementElement);
  }

  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (event) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        this.focusMainContent();
      }

      // Skip to navigation
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        this.focusNavigation();
      }
    });
  }

  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReaderSupport) return;

    // Add skip links
    this.addSkipLinks();
    
    // Ensure proper heading hierarchy
    this.validateHeadingHierarchy();
    
    // Add ARIA labels where needed
    this.addAriaLabels();
  }

  private setupHighContrastMode(): void {
    if (!this.config.enableHighContrast) return;

    // Check for system preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.documentElement.classList.add('high-contrast');
    }
  }

  private setupReducedMotion(): void {
    if (!this.config.enableReducedMotion) return;

    // Check for system preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduced-motion');
    }
  }

  private addSkipLinks(): void {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
    `;
    skipLinks.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      z-index: 1000;
    `;
    document.body.insertBefore(skipLinks, document.body.firstChild);
  }

  private validateHeadingHierarchy(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        console.warn(`Heading hierarchy issue: ${heading.tagName} follows h${previousLevel}`);
      }
      previousLevel = level;
    });
  }

  private addAriaLabels(): void {
    // Add ARIA labels to interactive elements without visible labels
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Add ARIA labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach((input) => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (!label) {
        input.setAttribute('aria-label', input.getAttribute('placeholder') || 'Input field');
      }
    });
  }

  public announce(message: string): void {
    if (this.announcementElement) {
      this.announcementElement.textContent = message;
    }
  }

  public focusMainContent(): void {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  }

  public focusNavigation(): void {
    const navigation = document.getElementById('navigation');
    if (navigation) {
      navigation.focus();
      navigation.scrollIntoView();
    }
  }

  public updateConfig(newConfig: Partial<AccessibilityConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.initialize();
  }
}

// Create global instance
export const accessibilityManager = new AccessibilityManager();

// Utility functions
export const announcePageChange = (pageName: string): void => {
  accessibilityManager.announce(`Navigated to ${pageName}`);
};

export const focusElement = (selector: string): void => {
  const element = document.querySelector(selector) as HTMLElement;
  if (element) {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const addAriaLabel = (selector: string, label: string): void => {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute('aria-label', label);
  }
};

export const toggleAriaExpanded = (selector: string): void => {
  const element = document.querySelector(selector);
  if (element) {
    const current = element.getAttribute('aria-expanded');
    element.setAttribute('aria-expanded', current === 'true' ? 'false' : 'true');
  }
};

export default accessibilityManager;
// Accessibility utilities for the application;
export interface AccessibilityConfig {enableHighContrast: boolean;,}
  enableScreenReader: boolean;,
  enableKeyboardNavigation: boolean;,
  fontSize: 'small' | 'medium' | 'large',
  colorScheme: 'light' | 'dark' | 'auto',}}
export const defaultAccessibilityConfig: AccessibilityConfig = {,
    enableHighContrast: false,
  enableScreenReader: true,
  enableKeyboardNavigation: true,
  fontSize: 'medium',
  colorScheme: 'auto',}}
export class AccessibilityManager {private config: AccessibilityConfig,}
constructor(config: AccessibilityConfig = defaultAccessibilityConfig) {,
    this.config = config;}}
public updateConfig(newConfig: Partial<AccessibilityConfig>): void {,}}this.config = {...this.config, ...newConfig}this.applyConfig();
  }
public getConfig(): AccessibilityConfig {}}return {...this.config}}}
private applyConfig(): void {if (typeof document === 'undefined') return;}
const root = document.documentElement;
// Apply high contrast;
    if (this.config.enableHighContrast) {
      root.classList.add('high-contrast')}} else {root.classList.remove('high-contrast')}}}
// Apply font size;
    root.setAttribute('data-font-size', this.config.fontSize);
// Apply color scheme;
    root.setAttribute('data-color-scheme', this.config.colorScheme);
  }
public announceToScreenReader(message: string): void {,}
    if (typeof document === 'undefined' || !this.config.enableScreenReader) return;
const announcement = document.createElement('div'),
    announcement.setAttribute('aria-live', 'polite')
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message
document.body.appendChild(announcement)
setTimeout(() => {
      document.body.removeChild(announcement)}}, 1000);
  }
public focusElement(selector: string): boolean {,}
    if (typeof document === 'undefined') return false;
const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      element.focus(),
      return true;}}
    return false;
  }
public trapFocus(container: HTMLElement): () => void {,}
    const focusableElements = container.querySelectorAll(,)
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    ) as NodeListOf<HTMLElement>
const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
const handleTabKey = (;
      if (e.key !== 'Tab') return;
if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();) => {
  return($3;)
  )}e.preventDefault();}
        }
      } else {if (document.activeElement === lastElement) {}
          firstElement.focus();
          e.preventDefault()}}
      }
    }
container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();
return () => {container.removeEventListener('keydown', handleTabKey)}}
  }
}
export const accessibilityManager = new AccessibilityManager();
// Utility functions;
export const isAccessible = (element: HTMLElement): boolean => {,
    const hasAriaLabel = element.hasAttribute('aria-label') || element.hasAttribute('aria-labelledby')
  const hasTextContent = element.textContent?.trim().length > 0;
  const isInteractive = element.tagName === 'BUTTON' || element.tagName === 'A' || element.hasAttribute('tabindex'),
return isInteractive && (hasAriaLabel || hasTextContent)}}
export const addAriaLabel = (element: HTMLElement, label: string): void => {,
    element.setAttribute('aria-label', label)}}
export const addAriaDescribedBy = (element: HTMLElement, descriptionId: string): void => {,
    element.setAttribute('aria-describedby', descriptionId)}}
export const makeElementFocusable = (element: HTMLElement, tabIndex: number = 0): void => {,
    element.setAttribute('tabindex', tabIndex.toString())}}
export const removeElementFocus = (element: HTMLElement): void => {,
    element.setAttribute('tabindex', '-1')}}
