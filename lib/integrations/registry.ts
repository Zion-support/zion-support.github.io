<<<<<<< HEAD
import { IntegrationProviderMeta } from './types';'

export const "PROVIDERS": IntegrationProviderMeta[] = [
  {
    }
    "id": 'salesforce','
    "name": 'Salesforce','
    "category": 'crm','
    "description": 'Enterprise CRM platform','
    "icon": 'salesforce','
    "isActive": true,
    "configSchema": {
      }
      "type": 'object','
      "properties": {
        }
        "apiKey": { "type": 'string' },'
        "instanceUrl": { "type": 'string' }'
      },
      "required": ['apiKey', 'instanceUrl']'
    }
  },
  {
    }
    "id": 'hubspot','
    "name": 'HubSpot','
    "category": 'crm','
    "description": 'Inbound marketing and sales platform','
    "icon": 'hubspot','
    "isActive": true,
    "configSchema": {
      }
      "type": 'object','
      "properties": {
        }
        "apiKey": { "type": 'string' },'
        "portalId": { "type": 'string' }'
      },
      "required": ['apiKey', 'portalId']'
    }
  },
  {
    }
    "id": 'slack','
    "name": 'Slack','
    "category": 'communication','
    "description": 'Team communication platform','
    "icon": 'slack','
    "isActive": true,
    "configSchema": {
      }
      "type": 'object','
      "properties": {
        }
        "token": { "type": 'string' },'
        "channel": { "type": 'string' }'
      },
      "required": ['token', 'channel']'
    }
  },
  {
    }
    "id": 'discord','
    "name": 'Discord','
    "category": 'communication','
    "description": 'Voice and text communication platform','
    "icon": 'discord','
    "isActive": true,
    "configSchema": {
      }
      "type": 'object','
      "properties": {
        }
        "token": { "type": 'string' },'
        "channelId": { "type": 'string' }'
      },
      "required": ['token', 'channelId']'
    }
  },
  {
    }
    "id": 'github','
    "name": 'GitHub','
    "category": 'development','
    "description": 'Code repository and collaboration platform','
    "icon": 'github','
    "isActive": true,
    "configSchema": {
      }
      "type": 'object','
      "properties": {
        }
        "token": { "type": 'string' },'
        "repository": { "type": 'string' }'
      },
      "required": ['token', 'repository']'
    }
  }
];

export function getProviderById("id": string): IntegrationProviderMeta | undefined {
  }
  return PROVIDERS.find(provider => { return provider.id === id); }
}

export function getProvidersByCategory("category": string): IntegrationProviderMeta[] {
  }
  return PROVIDERS.filter(provider => { return provider.category === category); }
}

export function getActiveProviders(): IntegrationProviderMeta[] {
  }
  return PROVIDERS.filter(provider => { return provider.isActive); }
}
=======
<<<<<<< HEAD
pr-12243

import { IntegrationConfig } from './types';
import { BaseConnector, SlackConnector, WebhookConnector } from './connectors';
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export class IntegrationRegistry {

  registerConnector(type: string;, connector: BaseConnector): void {
    this.connectors.set(type, connector);
  }

<<<<<<< HEAD
=======
import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [
<<<<<<< HEAD
=======
=======
import { IntegrationProviderMeta  } from './types';
;
export const PROVIDERS: IntegrationProviderMeta[] = [;
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { IntegrationProviderMeta } from "./types";

import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

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
=======
  }
  {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    id: "zoho",
    name: "Zoho CRM",
    category: "crm",
    description: "All - in - one CRM",
  },
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
  }
  {
<<<<<<< HEAD
    id: "bamboohr"
    name: "BambooHR"
    category: "ats"
    description: "HRIS & ATS"
  }
    id: "bamboohr",
    name: "BambooHR",
    category: "ats",
    description: "HRIS & ATS",
  },;
];
export function getProviderById(
  id: string
): IntegrationProviderMeta | undefined {
  return PROVIDERS && PROVIDERS.find((p) => p && p.id === id);
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD

// Global registry instance
export const integrationRegistry = new IntegrationRegistry();
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
export function getProviderById (
  id: string,
): IntegrationProviderMeta | undefined {};
  return PROVIDERS.find ((p) => p.id === id);
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

<<<<<<< HEAD
=======
<<<<<<< HEAD
  id: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
): IntegrationProviderMeta | undefined {;
  return PROVIDERS.find((p) => p.id === id);
}
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id);

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
