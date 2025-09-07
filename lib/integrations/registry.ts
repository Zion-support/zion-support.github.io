<<<<<<< HEAD
pr-12243

import { IntegrationConfig } from './types';
import { BaseConnector, SlackConnector, WebhookConnector } from './connectors';

export class IntegrationRegistry {

  registerConnector(type: string;, connector: BaseConnector): void {
    this.connectors.set(type, connector);
  }
=======
<<<<<<< HEAD
export interface IntegrationProvider {
  id: string;
  name: string;
  description: string;
  icon: string;
  authUrl: string;
  scopes: string[];
}

export const providers: IntegrationProvider[] = [
  {
    id: 'github',
    name: 'GitHub',
    description: 'Connect your GitHub repositories',
    icon: 'github',
    authUrl: 'https://github.com/login/oauth/authorize',
    scopes: ['repo', 'user']
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Connect your Slack workspace',
    icon: 'slack',
    authUrl: 'https://slack.com/oauth/authorize',
    scopes: ['channels:read', 'chat:write']
  }
];

export function getProviderById(id: string): IntegrationProvider | undefined {
  return providers.find(p => p.id === id);
}

export function getAllProviders(): IntegrationProvider[] {
  return providers;
=======
import { IntegrationProviderMeta } from './types';'
>>>>>>> origin/improvements-and-fixes

  {
    id: "salesforce"
    name: "Salesforce"
    category: "crm"

    description: "Enterprise CRM"
  }
  {"
    id: "hubspot""
    name: "HubSpot""
    category: "crm""
    description: "Marketing & Sales CRM"

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
      default: throw new Error(`Unknown connector type: ${config.type;}`);
    }
  }
origin/cursor/expand-services-advertise-and-build-project-c28b

  {
    id: "pipedrive"
    name: "PipeDrive"
    category: "crm"

    description: "Sales pipeline CRM"
  }
  {"
    id: "greenhouse""
    name: "Greenhouse""
    category: "ats""
    description: "ATS & recruiting"
  }"
  { id: "lever", name: "Lever", category: "ats", description: "ATS & CRM" }
  {"
    id: "workable""
    name: "Workable""
    category: "ats""
    description: "Recruiting software"

  }

    id: "bamboohr"
    name: "BambooHR"
    category: "ats"
    description: "HRIS & ATS";
  }
];
export function getProviderById(

origin/cursor/expand-services-advertise-and-build-project-c28b
pr-12243

  listConnectors(): string[] {
    return Array.from(this.connectors.keys());
  }
}

// Global registry instance
export const integrationRegistry = new IntegrationRegistry();
import { IntegrationProviderMeta } from './types';

export const PROVIDERS: IntegrationProviderMeta[] = [
  { id: 'salesforce', name: 'Salesforce', category: 'crm', description: 'Enterprise CRM' },
  { id: 'hubspot', name: 'HubSpot', category: 'crm', description: 'Marketing & Sales CRM' },
  { id: 'zoho', name: 'Zoho CRM', category: 'crm', description: 'All-in-one CRM' },
  { id: 'pipedrive', name: 'PipeDrive', category: 'crm', description: 'Sales pipeline CRM' },
  { id: 'greenhouse', name: 'Greenhouse', category: 'ats', description: 'ATS & recruiting' },
  { id: 'lever', name: 'Lever', category: 'ats', description: 'ATS & CRM' },
  { id: 'workable', name: 'Workable', category: 'ats', description: 'Recruiting software' },

];

origin/cursor/expand-services-advertise-and-build-project-c28b

;
export function getProviderById (
  id: string,
): IntegrationProviderMeta | undefined {};
  return PROVIDERS.find ((p) => p.id === id);
}

<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b
pr-12243

// Register default connectors
integrationRegistry.registerConnector('slack', new SlackConnector({
  id: 'default-slack';,
  name: 'Default Slack';,
  type: 'slack';,
  enabled: false;,
  credentials: {;},
  settings: {;},
}));

"
    id: "bamboohr","
    name: "BambooHR","
    category: "ats","
    description: "HRIS & ATS",
  },;

integrationRegistry.registerConnector('webhook', new WebhookConnector({
  id: 'default-webhook';,
  name: 'Default Webhook';,
  type: 'webhook';,
  enabled: false;,
  credentials: {;},
  settings: {;},
}));
];
export function getProviderById(

  id: string,

): IntegrationProviderMeta | undefined {;
  return PROVIDERS.find((p) => p.id === id);
}
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id);

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
export function getActiveProviders(): IntegrationProviderMeta[] {
  }
  return PROVIDERS.filter(provider => { return provider.isActive); }
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
}
>>>>>>> origin/improvements-and-fixes
