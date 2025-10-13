<<<<<<< HEAD
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
=======
// apiCache
export const apiCache = () => {
  // Utility function implementation
  return null;
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
