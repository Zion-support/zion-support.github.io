import { IntegrationProviderMeta } from './types';
>>>>>>> b0d6dda8406c2e54af3529a18b3e8c5f6ab37739
import type { IntegrationProviderMeta } from './types';
export const PROVIDERS: IntegrationProviderMeta[] = [
  { id: 'salesforce', name: 'Salesforce', category: 'crm', description: 'Enterprise CRM' },
  { id: 'hubspot', name: 'HubSpot', category: 'crm', description: 'Marketing & Sales CRM' },
  { id: 'zoho', name: 'Zoho CRM', category: 'crm', description: 'All-in-one CRM' },
  { id: 'pipedrive', name: 'PipeDrive', category: 'crm', description: 'Sales pipeline CRM' },
  { id: 'greenhouse', name: 'Greenhouse', category: 'ats', description: 'ATS & recruiting' },
  { id: 'lever', name: 'Lever', category: 'ats', description: 'ATS & CRM' },
  { id: 'workable', name: 'Workable', category: 'ats', description: 'Recruiting software' },
  { id: 'bamboohr', name: 'BambooHR', category: 'ats', description: 'HRIS & ATS' }
import { IntegrationProviderMeta } from './types';
export const PROVIDERS: IntegrationProviderMeta[] = [
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
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
export function getProviderById(id: string): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id);
}