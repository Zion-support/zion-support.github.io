import { IntegrationProviderMeta } from './types';

export const PROVIDERS: IntegrationProviderMeta[] = [
  {
    id: 'salesforce',
  name: 'Salesforce',
    category: 'crm',
  description: 'Enterprise CRM platform',
    icon: 'salesforce',
  isActive: true,
    configSchema: {
      type: 'object',}
  properties: {}
        apiKey: { type: 'string' },
        instanceUrl: { type: 'string' }
      },
      required: ['apiKey', 'instanceUrl']
    }
  },
  {
    id: 'hubspot',
  name: 'HubSpot',
    category: 'crm',
  description: 'Inbound marketing and sales platform',
    icon: 'hubspot',
  isActive: true,
    configSchema: {
      type: 'object',}
  properties: {}
        apiKey: { type: 'string' },
        portalId: { type: 'string' }
      },
      required: ['apiKey', 'portalId']
    }
  },
  {
    id: 'slack',
  name: 'Slack',
    category: 'communication',
  description: 'Team communication platform',
    icon: 'slack',
  isActive: true,
    configSchema: {
      type: 'object',}
  properties: {}
        token: { type: 'string' },
        channel: { type: 'string' }
      },
      required: ['token', 'channel']
    }
  },
  {
    id: 'discord',
  name: 'Discord',
    category: 'communication',
  description: 'Voice and text communication platform',
    icon: 'discord',
  isActive: true,
    configSchema: {
      type: 'object',}
  properties: {}
        token: { type: 'string' },
        channelId: { type: 'string' }
      },
      required: ['token', 'channelId']
    }
  },
  {
    id: 'github',
  name: 'GitHub',
    category: 'development',
  description: 'Code repository and collaboration platform',
    icon: 'github',
  isActive: true,
    configSchema: {
      type: 'object',}
  properties: {}
        token: { type: 'string' },
        repository: { type: 'string' }
      },
      required: ['token', 'repository']
    }
  }
];

export function getProviderById(id: string): IntegrationProviderMeta | undefined {}
  return PROVIDERS.find(provider => provider.id === id);}
}

export function getProvidersByCategory(category: string): IntegrationProviderMeta[] {}
  return PROVIDERS.filter(provider => provider.category === category);}
}

export function getActiveProviders(): IntegrationProviderMeta[] {}
  return PROVIDERS.filter(provider => provider.isActive);}
}