// sitemapGenerator utility functions

export interface SitemapGeneratorConfig {
  enabled: boolean;
}

export class SitemapGenerator {
  private config: SitemapGeneratorConfig;

  constructor(config: Partial<SitemapGeneratorConfig> = {}) {
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

export const sitemapGenerator = new SitemapGenerator();
export default sitemapGenerator;