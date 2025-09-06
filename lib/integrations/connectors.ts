// Integration connectors

import { IntegrationConfig, IntegrationResponse, ApiEndpoint } from './types';

export class BaseConnector {
  protected config: IntegrationConfig;

  constructor(config: IntegrationConfig) {
    this.config = config;
  }

  async connect(): Promise<IntegrationResponse> {
    throw new Error('Connect method must be implemented');
  }

  async disconnect(): Promise<IntegrationResponse> {
    throw new Error('Disconnect method must be implemented');
  }

  async test(): Promise<IntegrationResponse> {
    throw new Error('Test method must be implemented');
  }

  protected async makeRequest(endpoint: ApiEndpoint): Promise<any> {
    const response = await fetch(endpoint.url, {
      method: endpoint.method,
      headers: {
        'Content-Type': 'application/json',
        ...endpoint.headers,
      },
      body: endpoint.body ? JSON.stringify(endpoint.body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}

export class SlackConnector extends BaseConnector {
  async connect(): Promise<IntegrationResponse> {
    try {
      // Test Slack API connection
      const response = await this.makeRequest({
        url: 'https://slack.com/api/auth.test',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.config.credentials.token}`,
        },
      });

      return {
        success: response.ok,
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async disconnect(): Promise<IntegrationResponse> {
    return { success: true };
  }

  async test(): Promise<IntegrationResponse> {
    return this.connect();
  }
}

export class WebhookConnector extends BaseConnector {
  async connect(): Promise<IntegrationResponse> {
    return { success: true };
  }

  async disconnect(): Promise<IntegrationResponse> {
    return { success: true };
  }

  async test(): Promise<IntegrationResponse> {
    return { success: true };
  }
}