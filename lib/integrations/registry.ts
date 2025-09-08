import { IntegrationProviderMeta } from './types';
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

<<<<<<< HEAD


export class IntegrationRegistry {

  registerConnector(type: string;, connector: BaseConnector): void {
    this.connectors.set(type, connector);
  }


import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [

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
  {

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
  {

;
export function getProviderById (
  id: string,
): IntegrationProviderMeta | undefined {};
  return PROVIDERS.find ((p) => p.id === id);
}



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b
pr-12243

export function getProviderById("id": string): IntegrationProviderMeta | undefined {
  }
  return PROVIDERS.find(provider => { return provider.id === id); }
}

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


<<<<<<< HEAD



=======
export function getActiveProviders(): IntegrationProviderMeta[] {
  }
  return PROVIDERS.filter(provider => { return provider.isActive); }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
