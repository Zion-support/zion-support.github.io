import { IntegrationProviderMeta } from './types';
<<<<<<< HEAD

=======
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export const PROVIDERS: IntegrationProviderMeta[] = [
  {
    id: 'salesforce',
    name: 'Salesforce',
    category: 'crm',
    description: 'Enterprise CRM',
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'crm',
    description: 'Marketing & Sales CRM',
  },
  {
    id: 'zoho',
    name: 'Zoho CRM',
    category: 'crm',
    description: 'All-in-one CRM',
  },
  {
    id: 'pipedrive',
    name: 'PipeDrive',
    category: 'crm',
    description: 'Sales pipeline CRM',
  },
  {
    id: 'greenhouse',
    name: 'Greenhouse',
    category: 'ats',
    description: 'ATS & recruiting',
  },
  { id: 'lever', name: 'Lever', category: 'ats', description: 'ATS & CRM' },
  {
    id: 'workable',
    name: 'Workable',
    category: 'ats',
    description: 'Recruiting software',
  },
  {
    id: 'bamboohr',
    name: 'BambooHR',
    category: 'ats',
    description: 'HRIS & ATS',
  },
];
<<<<<<< HEAD

export function getProviderById(
  id: string
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id);
=======
export function getProviderById(id: string): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id);
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
