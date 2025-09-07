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
}