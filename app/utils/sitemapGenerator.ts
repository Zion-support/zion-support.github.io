<<<<<<< HEAD
<<<<<<< HEAD
// sitemapGenerator utility functions

export interface sitemapGeneratorConfig {
  enabled: boolean;
}

export class sitemapGenerator {
  private config: sitemapGeneratorConfig;

  constructor(config: Partial<sitemapGeneratorConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
=======

// sitemapGenerator utility
export const sitemapGenerator = {
  // Utility implementation,
    init: () => {
    console.log('sitemapGenerator initialized');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  }

  init(): void {
    if (this.config.enabled) {
      console.log('sitemapGenerator initialized');
    }
  }
}

export const sitemapgenerator = new sitemapGenerator();
export default sitemapgenerator;
=======
// sitemapGenerator
export const sitemapGenerator = () => {
  // Utility function implementation
  return null;
};
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
