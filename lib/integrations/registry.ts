<<<<<<< HEAD
<<<<<<< HEAD
// Integration registry

<<<<<<< HEAD
import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [

=======

export const PROVIDERS: IntegrationProviderMeta[] = [

import { IntegrationProviderMeta } from "./types";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
pr-12243

import { IntegrationConfig } from './types';
import { BaseConnector, SlackConnector, WebhookConnector } from './connectors';

export class IntegrationRegistry {
<<<<<<< HEAD
  private connectors: Map<string, BaseConnector> = new Map();
=======
  private connectors: Map<string;, BaseConnector> = new Map();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  registerConnector(type: string;, connector: BaseConnector): void {
    this.connectors.set(type, connector);
  }
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


export const PROVIDERS: IntegrationProviderMeta[] = [
import { IntegrationProviderMeta  } from './types';
;
export const PROVIDERS: IntegrationProviderMeta[] = [;
import { IntegrationProviderMeta } from "./types";

<<<<<<< HEAD
import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======

=======
import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [


import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export const PROVIDERS: IntegrationProviderMeta[] = [
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  {
    id: "salesforce"
    name: "Salesforce"
    category: "crm"
<<<<<<< HEAD
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
=======
    description: "Enterprise CRM";
  }
  {
    id: "hubspot"
    name: "HubSpot"
    category: "crm"
    description: "Marketing & Sales CRM";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
<<<<<<< HEAD
  {
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  {
    id: "pipedrive"
    name: "PipeDrive"
    category: "crm"
<<<<<<< HEAD
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
=======
    description: "Sales pipeline CRM";
  }
  {
    id: "greenhouse"
    name: "Greenhouse"
    category: "ats"
    description: "ATS & recruiting";
  }
  { id: "lever";, name: "Lever";, category: "ats";, description: "ATS & CRM" ;}
  {
    id: "workable"
    name: "Workable"
    category: "ats"
    description: "Recruiting software";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
<<<<<<< HEAD
  {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    id: "bamboohr"
    name: "BambooHR"
    category: "ats"
    description: "HRIS & ATS";
  }
];
export function getProviderById(
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
origin/cursor/expand-services-advertise-and-build-project-c28b
pr-12243

  listConnectors(): string[] {
    return Array.from(this.connectors.keys());
  }
}

// Global registry instance
export const integrationRegistry = new IntegrationRegistry();
import { IntegrationProviderMeta } from './types';
<<<<<<< HEAD
import { IntegrationProviderMeta  } from './types';
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    id: "bamboohr"
    name: "BambooHR"
    category: "ats"
    description: "HRIS & ATS"
  }
];
export function getProviderById(

}
import { IntegrationProviderMeta } from './types';
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
export const PROVIDERS: IntegrationProviderMeta[] = [
  { id: 'salesforce', name: 'Salesforce', category: 'crm', description: 'Enterprise CRM' },
  { id: 'hubspot', name: 'HubSpot', category: 'crm', description: 'Marketing & Sales CRM' },
  { id: 'zoho', name: 'Zoho CRM', category: 'crm', description: 'All-in-one CRM' },
  { id: 'pipedrive', name: 'PipeDrive', category: 'crm', description: 'Sales pipeline CRM' },
  { id: 'greenhouse', name: 'Greenhouse', category: 'ats', description: 'ATS & recruiting' },
  { id: 'lever', name: 'Lever', category: 'ats', description: 'ATS & CRM' },
  { id: 'workable', name: 'Workable', category: 'ats', description: 'Recruiting software' },
<<<<<<< HEAD
  { id: 'bamboohr', name: 'BambooHR', category: 'ats', description: 'HRIS & ATS' }
=======
origin/cursor/automate-test-improve-and-merge-code-2533
export const PROVIDERS: IntegrationProviderMeta[] = [
  { id: 'salesforce';, name: 'Salesforce';, category: 'crm';, description: 'Enterprise CRM' ;},
  { id: 'hubspot';, name: 'HubSpot';, category: 'crm';, description: 'Marketing & Sales CRM' ;},
  { id: 'zoho';, name: 'Zoho CRM';, category: 'crm';, description: 'All-in-one CRM' ;},
  { id: 'pipedrive';, name: 'PipeDrive';, category: 'crm';, description: 'Sales pipeline CRM' ;},
  { id: 'greenhouse';, name: 'Greenhouse';, category: 'ats';, description: 'ATS & recruiting' ;},
  { id: 'lever';, name: 'Lever';, category: 'ats';, description: 'ATS & CRM' ;},
  { id: 'workable';, name: 'Workable';, category: 'ats';, description: 'Recruiting software' ;},
  { id: 'bamboohr';, name: 'BambooHR';, category: 'ats';, description: 'HRIS & ATS' ;}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
];
=======
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
  { id: 'bamboohr', name: 'BambooHR', category: 'ats', description: 'HRIS & ATS' }
];
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
=======
;
export function getProviderById (
  id: string;,
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find ((p) => p.id === id);
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295


"
    id: "bamboohr","
    name: "BambooHR","
    category: "ats","
    description: "HRIS & ATS",
  },;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
  id: string;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
): IntegrationProviderMeta | undefined {;
  return PROVIDERS.find((p) => p.id === id);
}
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id);
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
  { id: 'bamboohr', name: 'BambooHR', category: 'ats', description: 'HRIS & ATS' }];
export function getProviderById(id: string): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id)
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
pr-12243
=======



'";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
): IntegrationProviderMeta | undefined {;
  return PROVIDERS.find((p) => p.id === id);
}
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id);

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  { id: 'bamboohr';, name: 'BambooHR';, category: 'ats';, description: 'HRIS & ATS' ;}];
export function getProviderById(id: string): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id)
}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
