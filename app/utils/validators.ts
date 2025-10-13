// validators utility functions

export interface validatorsConfig {
  enabled: boolean;
}

export class validators {
  private config: validatorsConfig;

  constructor(config: Partial<validatorsConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('validators initialized');
    }
  }
}

export const validatorsInstance = new validators();
export default validatorsInstance;
