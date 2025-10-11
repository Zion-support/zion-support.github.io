  fontSize: 'small', | 'medium' | 'large',
  colorScheme: 'light', | 'dark' | 'auto',}}
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
    const hasAriaLabel = element.hasAttribute('aria-label') || element.hasAttribute('aria-labelledby')
  const hasTextContent = element.textContent?.trim().length > 0;
  const isInteractive = element.tagName === 'BUTTON' || element.tagName === 'A' || element.hasAttribute('tabindex'),
