<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { IntegrationProviderMeta } from './types';
export const PROVIDERS: IntegrationProviderMeta[] = [
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import { IntegrationProviderMeta } from './types';

export const PROVIDERS: IntegrationProviderMeta[] = [
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
import { IntegrationProviderMeta } from './types';

export const PROVIDERS: IntegrationProviderMeta[] = [
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
  { id: 'salesforce', name: 'Salesforce', category: 'crm', description: 'Enterprise CRM' },
  { id: 'hubspot', name: 'HubSpot', category: 'crm', description: 'Marketing & Sales CRM' },
  { id: 'zoho', name: 'Zoho CRM', category: 'crm', description: 'All-in-one CRM' },
  { id: 'pipedrive', name: 'PipeDrive', category: 'crm', description: 'Sales pipeline CRM' },
  { id: 'greenhouse', name: 'Greenhouse', category: 'ats', description: 'ATS & recruiting' },
  { id: 'lever', name: 'Lever', category: 'ats', description: 'ATS & CRM' },
  { id: 'workable', name: 'Workable', category: 'ats', description: 'Recruiting software' },
<<<<<<< HEAD
<<<<<<< HEAD
  { id: 'bamboohr', name: 'BambooHR', category: 'ats', description: 'HRIS & ATS' },
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-bcb8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
=======
import type { IntegrationProviderMeta } from './types';

export const PROVIDERS: IntegrationProviderMeta[] = [
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
  {
    id: 'salesforce',
    name: 'Salesforce',
    category: 'crm',
    description: 'Enterprise CRM'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'crm',
    description: 'Marketing & Sales CRM'
  },
  {
    id: 'zoho',
    name: 'Zoho CRM',
    category: 'crm',
    description: 'All-in-one CRM'
  },
  {
    id: 'pipedrive',
    name: 'PipeDrive',
    category: 'crm',
    description: 'Sales pipeline CRM'
  },
  {
    id: 'greenhouse',
    name: 'Greenhouse',
    category: 'ats',
    description: 'ATS & recruiting'
  },
  {
    id: 'lever',
    name: 'Lever',
    category: 'ats',
    description: 'ATS & CRM'
  },
  {
    id: 'workable',
    name: 'Workable',
    category: 'ats',
    description: 'Recruiting software'
  },
  {
    id: 'bamboohr',
    name: 'BambooHR',
    category: 'ats',
    description: 'HRIS & ATS'
  }
];
<<<<<<< HEAD
=======
  { id: 'bamboohr', name: 'BambooHR', category: 'ats', description: 'HRIS & ATS' }
];

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
  { id: 'bamboohr', name: 'BambooHR', category: 'ats', description: 'HRIS & ATS' }
];

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
export function getProviderById(id: string): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id);
}