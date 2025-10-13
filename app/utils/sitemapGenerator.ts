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

  // Utility methods can be added here
  public isEnabled(): boolean {
    return this.config.enabled;
  }
}

// Export default instance
export const sitemapGenerator = new SitemapGenerator();
