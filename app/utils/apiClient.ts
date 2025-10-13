// ApiClient utility functions

export class ApiClient {
  private config: any;

  constructor(config: any = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('ApiClient initialized');
    }
  }

  // Add your utility methods here
  public process(data: any): any {
    return data;
  }
}

export const apiclientInstance = new ApiClient();
export default apiclientInstance;
