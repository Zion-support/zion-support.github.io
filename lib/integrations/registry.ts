import { IntegrationProviderMeta } from './types';

export const PROVIDERS: IntegrationProviderMeta[] = [
  {
    id: 'salesforce',

    name: 'Salesforce',
    category: 'crm',
    description: 'Enterprise CRM',
    icon: 'salesforce',
    oauthScopes: ['api', 'refresh_token']
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'crm',
    description: 'Marketing & Sales CRM',
    icon: 'hubspot',
    oauthScopes: ['contacts', 'content']
  },
  {
    id: 'pipedrive',
    name: 'PipeDrive',
    category: 'crm',
    description: 'Sales pipeline CRM',
    icon: 'pipedrive',
    oauthScopes: ['read', 'write']
  },
  {
    id: 'greenhouse',
    name: 'Greenhouse',
    category: 'ats',
    description: 'Applicant Tracking System',
    icon: 'greenhouse',
    oauthScopes: ['candidates', 'jobs']
  },
  {
    id: 'lever',
    name: 'Lever',
    category: 'ats',
    description: 'Modern ATS platform',
    icon: 'lever',
    oauthScopes: ['read', 'write']
  },
  {
    id: 'workable',
    name: 'Workable',
    category: 'ats',
    description: 'Recruiting software',
    icon: 'workable',
    oauthScopes: ['candidates', 'jobs']
  },
  {
    id: 'bamboohr',
    name: 'BambooHR',
    category: 'ats',
    description: 'HR management system',
    icon: 'bamboohr',
    oauthScopes: ['employees', 'time_off']
  }
];

export function getProviderById(id: string): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(provider => provider.id === id);
}

export function getProvidersByCategory(category: string): IntegrationProviderMeta[] {
  return PROVIDERS.filter(provider => provider.category === category);

}