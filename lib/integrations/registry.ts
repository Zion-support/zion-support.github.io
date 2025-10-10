export const PROVIDERS: IntegrationProviderMeta[] = [
,
export const PROVIDERS: IntegrationProviderMeta[] = [,
export const PROVIDERS: IntegrationProviderMeta[] = [,
,
export const PROVIDERS: IntegrationProviderMeta[] = [,
  { id: 'salesforce', name: 'Salesforce', category: 'crm', description: 'Enterprise CRM' },
  { id: 'hubspot', name: 'HubSpot', category: 'crm', description: 'Marketing & Sales CRM' },
  { id: 'zoho', name: 'Zoho CRM', category: 'crm', description: 'All-in-one CRM' },
  { id: 'pipedrive', name: 'PipeDrive', category: 'crm', description: 'Sales pipeline CRM' },
  { id: 'greenhouse', name: 'Greenhouse', category: 'ats', description: 'ATS & recruiting' },
  { id: 'lever', name: 'Lever', category: 'ats', description: 'ATS & CRM' },
  { id: 'workable', name: 'Workable', category: 'ats', description: 'Recruiting software' },
import type { IntegrationProviderMeta } from './types';
];
  {/* TODO: Fix JSX expression */};
  n: 'HRIS & ATS' };
];
export function getProviderById(id: string): IntegrationProviderMeta | undefined {,
    description: 'HRIS & ATS'}];

export function getProviderById(id: string,)): IntegrationProviderMeta | undefined {,  return PROVIDERS.find(p => p.id === id);
export function getProviderById(i)
  d: string): IntegrationProviderMeta | undefined {/* TODO: Fix JSX expression */};
  }];
export function getProviderById(i,
  d: string,)
): IntegrationProviderMeta | undefined {/* TODO: Fix JSX expression */}
}

}