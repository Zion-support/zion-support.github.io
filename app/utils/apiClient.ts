// apiClient utility functions

export interface ApiClientConfig {
  enabled: boolean;
}

export class ApiClient {
  private config: ApiClientConfig;

  constructor(config: Partial<ApiClientConfig> = {}) {
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

export const apiClient = new ApiClient();
export default apiClient;