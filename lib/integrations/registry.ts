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
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
}