<<<<<<< HEAD
import { IntegrationProviderMeta } from './types',
export const PROVIDERS: IntegrationProviderMeta[] = [
  { id: 'salesforce', name: 'Salesforce', category: 'crm', description: 'Enterprise CRM' },
  { id: 'hubspot', name: 'HubSpot', category: 'crm', description: 'Marketing & Sales CRM' },
  { id: 'zoho', name: 'Zoho CRM', category: 'crm', description: 'All-in-one CRM' },
  { id: 'pipedrive', name: 'PipeDrive', category: 'crm', description: 'Sales pipeline CRM' },
  { id: 'greenhouse', name: 'Greenhouse', category: 'ats', description: 'ATS & recruiting' },
  { id: 'lever', name: 'Lever', category: 'ats', description: 'ATS & CRM' },
  { id: 'workable', name: 'Workable', category: 'ats', description: 'Recruiting software' },
  { id: 'bamboohr', name: 'BambooHR', category: 'ats', description: 'HRIS & ATS' }],

export function getProviderById(id: string): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id)
}
=======

export const PROVIDERS: IntegrationProviderMeta[] = [
  {_id: 'salesforce', _name: 'Salesforce', _category: 'crm', _description: 'Enterprise CRM'},
  {_id: 'hubspot', _name: 'HubSpot', _category: 'crm', _description: 'Marketing & Sales CRM'},
  {_id: 'zoho', _name: 'Zoho CRM', _category: 'crm', _description: 'All-in-one CRM'},
  {_id: 'pipedrive', _name: 'PipeDrive', _category: 'crm', _description: 'Sales pipeline CRM'},
  {_id: 'greenhouse', _name: 'Greenhouse', _category: 'ats', _description: 'ATS & recruiting'},
  {_id: 'lever', _name: 'Lever', _category: 'ats', _description: 'ATS & CRM'},
  {_id: 'workable', _name: 'Workable', _category: 'ats', _description: 'Recruiting software'},
  {_id: 'bamboohr', _name: 'BambooHR', _category: 'ats', _description: 'HRIS & ATS'}];

export function getProviderById(_id: string): IntegrationProviderMeta | undefined {_return PROVIDERS.find(p => p.id === id);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
