// AccessibilityUtils utilities
export interface AccessibilityUtilsConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultAccessibilityUtilsConfig: AccessibilityUtilsConfig = {
  enabled: true,
  options: {}
};
