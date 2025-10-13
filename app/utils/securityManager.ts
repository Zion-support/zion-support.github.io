// securityManager utility functions

export interface SecurityManagerConfig {
  enabled: boolean;
}

export class SecurityManager {
  private config: SecurityManagerConfig;

  constructor(config: Partial<SecurityManagerConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  // Utility methods can be added here
  public isEnabled(): boolean {
    return this.config.enabled;
  }
}

export const securityManager = new SecurityManager();
export default securityManager;