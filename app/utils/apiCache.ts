// apiCache utility functions

export interface ApiCacheConfig {
  enabled: boolean;
}

export class ApiCache {
  private config: ApiCacheConfig;

  constructor(config: Partial<ApiCacheConfig> = {}) {
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

export const apiCache = new ApiCache();
export default apiCache;