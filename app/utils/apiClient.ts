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

// apiClient utility
export const apiClient = {
  // Utility implementation,
    init: () => {
    console.log('apiClient initialized');
  }

  init(): void {
    if (this.config.enabled) {
      console.log('apiClient initialized');
    }
  }
}

export const apiclient = new apiClient();
export default apiclient;
// apiClient
export const apiClient = () => {
  // Utility function implementation
  return null;
};
