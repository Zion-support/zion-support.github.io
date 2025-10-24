// lazyLoading - Placeholder file
export interface lazyLoadingConfig {
  enabled: boolean;
  options?: Record<string, unknown>;
}

export const defaultlazyLoadingConfig: lazyLoadingConfig = {
  enabled: true,
  options: {}
};
