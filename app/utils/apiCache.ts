// apiCache utility functions

export interface apiCacheConfig {
  enabled: boolean;
}

export class apiCache {
  private config: apiCacheConfig;

  constructor(config: Partial<apiCacheConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('apiCache initialized');
    }
  }
}

export const apicache = new apiCache();
export default apicache;
