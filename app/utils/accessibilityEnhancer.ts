interface AccessibilityConfig {
  enabled: boolean;
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enabled: true,
      highContrast: false,
      fontSize: 'medium',
      screenReader: false,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('Accessibility enhancer initialized');
      this.applyAccessibilityFeatures();
    }
  }

  private applyAccessibilityFeatures(): void {
    if (this.config.highContrast) {
      document.body.classList.add('high-contrast');
    }
    
    if (this.config.fontSize !== 'medium') {
      document.body.classList.add(`font-size-${this.config.fontSize}`);
    }
  }
}

export const accessibilityEnhancer = new AccessibilityEnhancer();
export default accessibilityEnhancer;
