// Accessibility utilities for the application;
export interface AccessibilityConfig {
    enableHighContrast: boolean;,
      enableScreenReader: boolean;,
      enableKeyboardNavigation: boolean;,
      fontSize: 'small' | 'medium' | 'large',
  colorScheme: 'light' | 'dark' | 'auto'
  }
}
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
export class AccessibilityManager {
    private config: AccessibilityConfig,
constructor(config: AccessibilityConfig = defaultAccessibilityConfig) 
    this.config = config;
  }
  }
public updateConfig(newConfig: Partial<AccessibilityConfig>): void {}
    this.config = { ...this.config, ...newConfig }
    this.applyConfig();
  }
public getConfig(): AccessibilityConfig {}
    return { ...this.config }
  }
private applyConfig(): void {
    if (typeof document === 'undefined') return;
const root = document.documentElement;
// Apply high contrast;
    if (this.config.enableHighContrast) 
      root.classList.add('high-contrast')
  }
    } else {
    root.classList.remove('high-contrast')
  }
    }
// Apply font size;
    root.setAttribute('data-font-size', this.config.fontSize);
// Apply color scheme;
    root.setAttribute('data-color-scheme', this.config.colorScheme);
  }
public announceToScreenReader(message: string): void {
