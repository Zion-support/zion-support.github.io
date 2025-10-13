<<<<<<< HEAD
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
=======

// apiCache utility
export const apiCache = {
  // Utility implementation,
    init: () => {
    console.log('apiCache initialized');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
