<<<<<<< HEAD
// Integration registry

import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [

pr-12243

import { IntegrationConfig } from './types';
import { BaseConnector, SlackConnector, WebhookConnector } from './connectors';

export class IntegrationRegistry {
  private connectors: Map<string, BaseConnector> = new Map();

  registerConnector(type: string, connector: BaseConnector): void {
    this.connectors.set(type, connector);
  }


import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [
import { IntegrationProviderMeta  } from './types';
;
export const PROVIDERS: IntegrationProviderMeta[] = [;
import { IntegrationProviderMeta } from "./types";

import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [
origin/cursor/expand-services-advertise-and-build-project-c28b
  {
    id: "salesforce"
    name: "Salesforce"
    category: "crm"
=======


import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = []
  {"
    id: "salesforce""
    name: "Salesforce""
    category: "crm""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    description: "Enterprise CRM"
  }
  {"
    id: "hubspot""
    name: "HubSpot""
    category: "crm""
    description: "Marketing & Sales CRM"
  }
<<<<<<< HEAD
  {
pr-12243

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
origin/cursor/expand-services-advertise-and-build-project-c28b
  {
    id: "pipedrive"
    name: "PipeDrive"
    category: "crm"
=======
  {}
  {"
    id: "pipedrive""
    name: "PipeDrive""
    category: "crm""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
  {
    id: "bamboohr"
    name: "BambooHR"
    category: "ats"
    description: "HRIS & ATS"
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
import { IntegrationProviderMeta  } from './types';
origin/cursor/automate-test-improve-and-merge-code-2533
export const PROVIDERS: IntegrationProviderMeta[] = [
  { id: 'salesforce', name: 'Salesforce', category: 'crm', description: 'Enterprise CRM' },
  { id: 'hubspot', name: 'HubSpot', category: 'crm', description: 'Marketing & Sales CRM' },
  { id: 'zoho', name: 'Zoho CRM', category: 'crm', description: 'All-in-one CRM' },
  { id: 'pipedrive', name: 'PipeDrive', category: 'crm', description: 'Sales pipeline CRM' },
  { id: 'greenhouse', name: 'Greenhouse', category: 'ats', description: 'ATS & recruiting' },
  { id: 'lever', name: 'Lever', category: 'ats', description: 'ATS & CRM' },
  { id: 'workable', name: 'Workable', category: 'ats', description: 'Recruiting software' },
  { id: 'bamboohr', name: 'BambooHR', category: 'ats', description: 'HRIS & ATS' }
];

origin/cursor/expand-services-advertise-and-build-project-c28b
=======
  {}
};
import { IntegrationProviderMeta } from './types';
export const PROVIDERS: IntegrationProviderMeta[] = ['
  { id: 'salesforce', name: 'Salesforce', category: 'crm', description: 'Enterprise CRM' },'
  { id: 'hubspot', name: 'HubSpot', category: 'crm', description: 'Marketing & Sales CRM' },'
  { id: 'zoho', name: 'Zoho CRM', category: 'crm', description: 'All-in-one CRM' },'
  { id: 'pipedrive', name: 'PipeDrive', category: 'crm', description: 'Sales pipeline CRM' },'
  { id: 'greenhouse', name: 'Greenhouse', category: 'ats', description: 'ATS & recruiting' },'
  { id: 'lever', name: 'Lever', category: 'ats', description: 'ATS & CRM' },'
  { id: 'workable', name: 'Workable', category: 'ats', description: 'Recruiting software' },'
  { id: 'bamboohr', name: 'BambooHR', category: 'ats', description: 'HRIS & ATS' };
];


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  id: 'default-slack',
  name: 'Default Slack',
  type: 'slack',
  enabled: false,
  credentials: {},
  settings: {},
}));
=======



"
    id: "bamboohr","
    name: "BambooHR","
    category: "ats","
    description: "HRIS & ATS",
  },;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

integrationRegistry.registerConnector('webhook', new WebhookConnector({
  id: 'default-webhook',
  name: 'Default Webhook',
  type: 'webhook',
  enabled: false,
  credentials: {},
  settings: {},
}));
];
export function getProviderById(

  id: string,
<<<<<<< HEAD
): IntegrationProviderMeta | undefined {;
  return PROVIDERS.find((p) => p.id === id);
}
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id);


ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
  { id: 'bamboohr', name: 'BambooHR', category: 'ats', description: 'HRIS & ATS' }];
export function getProviderById(id: string): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id)
}
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
=======



'";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
