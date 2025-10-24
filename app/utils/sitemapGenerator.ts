// SitemapGenerator utilities
export interface SitemapGeneratorConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultSitemapGeneratorConfig: SitemapGeneratorConfig = {
  enabled: true,
  options: {}
};
