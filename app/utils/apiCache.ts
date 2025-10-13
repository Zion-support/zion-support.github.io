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

  // Utility methods can be added here
  public isEnabled(): boolean {
    return this.config.enabled;
  }
}

export const apiCache = new ApiCache();
export default apiCache;