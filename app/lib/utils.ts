// utils utility functions

export interface utilsConfig {
  enabled: boolean;
}

export class utils {
  private config: utilsConfig;

  constructor(config: Partial<utilsConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('utils initialized');
    }
  }
}

export const utilsInstance = new utils();
export default utilsInstance;
