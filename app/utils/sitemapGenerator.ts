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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
