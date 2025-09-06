// Integration registry

import { IntegrationConfig } from './types';
import { BaseConnector, SlackConnector, WebhookConnector } from './connectors';

export class IntegrationRegistry {
  private connectors: Map<string, BaseConnector> = new Map();

  registerConnector(type: string, connector: BaseConnector): void {
    this.connectors.set(type, connector);
  }

  getConnector(type: string): BaseConnector | undefined {
    return this.connectors.get(type);
  }

  createConnector(config: IntegrationConfig): BaseConnector {
    switch (config.type) {
      case 'slack':
        return new SlackConnector(config);
      case 'webhook':
        return new WebhookConnector(config);
      default:
        throw new Error(`Unknown connector type: ${config.type}`);
    }
  }

  listConnectors(): string[] {
    return Array.from(this.connectors.keys());
  }
}

// Global registry instance
export const integrationRegistry = new IntegrationRegistry();

// Register default connectors
integrationRegistry.registerConnector('slack', new SlackConnector({
  id: 'default-slack',
  name: 'Default Slack',
  type: 'slack',
  enabled: false,
  credentials: {},
  settings: {},
}));

integrationRegistry.registerConnector('webhook', new WebhookConnector({
  id: 'default-webhook',
  name: 'Default Webhook',
  type: 'webhook',
  enabled: false,
  credentials: {},
  settings: {},
}));