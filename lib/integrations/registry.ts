import { BaseConnector, IntegrationConfig } from './types';

export class ConnectorRegistry {
  private connectors = new Map<string, BaseConnector>();

  registerConnector(type: string, connector: BaseConnector): void {
    this.connectors.set(type, connector);
  }

  getConnector(type: string): BaseConnector | undefined {
    return this.connectors.get(type);
  }

  createConnector(config: IntegrationConfig): BaseConnector {
    const connector = this.getConnector(config.type);
    if (!connector) {
      throw new Error(`Unknown connector type: ${config.type}`);
    }
    return connector;
  }
}

export const defaultConnectors = [
  {
    id: "hubspot",
    name: "HubSpot",
    category: "crm",
    description: "HubSpot CRM integration",
    icon: "hubspot-icon"
  }
];
