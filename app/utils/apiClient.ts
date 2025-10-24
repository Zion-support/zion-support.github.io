// ApiClient utilities
export interface ApiClientConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultApiClientConfig: ApiClientConfig = {
  enabled: true,
  options: {}
};
