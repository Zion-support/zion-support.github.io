import { cn } from '../../utils/cn';

export interface AccessibilityConfig {
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableScreenReader: boolean;
  fontSize: 'small' | 'medium' | 'large';
}

export const defaultAccessibilityConfig: AccessibilityConfig = {
  enableHighContrast: false,
  enableReducedMotion: false,
  enableScreenReader: false,
  fontSize: 'medium'
};

export function enhanceAccessibility(config: Partial<AccessibilityConfig> = {}) {
  const mergedConfig = { ...defaultAccessibilityConfig, ...config };
  
  // Apply accessibility enhancements based on configuration
  if (mergedConfig.enableHighContrast) {
    document.documentElement.classList.add('high-contrast');
  }
  
  if (mergedConfig.enableReducedMotion) {
    document.documentElement.classList.add('reduced-motion');
  }
  
  if (mergedConfig.enableScreenReader) {
    document.documentElement.classList.add('screen-reader-optimized');
  }
  
  // Apply font size
  document.documentElement.setAttribute('data-font-size', mergedConfig.fontSize);
  
  return mergedConfig;
}

export function getAccessibilityClasses(config: AccessibilityConfig) {
  return cn(
    {
      'high-contrast': config.enableHighContrast,
      'reduced-motion': config.enableReducedMotion,
      'screen-reader-optimized': config.enableScreenReader,
      'text-sm': config.fontSize === 'small',
      'text-base': config.fontSize === 'medium',
      'text-lg': config.fontSize === 'large'
    }
  );
}