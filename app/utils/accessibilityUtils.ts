// accessibilityUtils utility functions

export interface AccessibilityUtilsConfig {
  enabled: boolean;
}

export class AccessibilityUtils {
  private config: AccessibilityUtilsConfig;

  constructor(config: Partial<AccessibilityUtilsConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  // Utility methods can be added here
  public isEnabled(): boolean {
    return this.config.enabled;
  }
export const accessibilityUtils = new AccessibilityUtils();
export default accessibilityUtils;