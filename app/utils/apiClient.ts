// apiClient utility functions

export interface apiClientConfig {
  enabled: boolean;
}

export class apiClient {
  private config: apiClientConfig;

  constructor(config: Partial<apiClientConfig> = {}) {
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

export const apiclient = new apiClient();
export default apiclient;
