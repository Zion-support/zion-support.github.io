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

  init(): void {
    if (this.config.enabled) {
      console.log('apiClient initialized');
    }
  }
}

export const apiClient = new ApiClient();
export default apiClient;
