// Accessibility utilities for the applicationexport interface AccessibilityConfig {
  enableHighContrast: boolean
  enableScreenReader: boolean
  enableKeyboardNavigation: boolean
  fontSize: 'small' | 'medium' | 'large'
  colorScheme: 'light' | 'dark' | 'auto'}
}
export const defaultAccessibilityConfig: AccessibilityConfig;

export const removeElementFocus = (element: HTMLElement): void => {
  element.setAttribute('tabindex', '-1')}
}