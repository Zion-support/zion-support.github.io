// SeoEnhancer utilities
export interface SeoEnhancerConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultSeoEnhancerConfig: SeoEnhancerConfig = {
  enabled: true,
  options: {}
};
