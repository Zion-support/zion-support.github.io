import { IntegrationProviderMeta } from "./types";

import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [

  {
    id: "salesforce"
    name: "Salesforce"
    category: "crm"
    description: "Enterprise CRM"
  }
  {
    id: "hubspot"
    name: "HubSpot"
    category: "crm"
    description: "Marketing & Sales CRM"
  }
  {

    id: "zoho",
    name: "Zoho CRM",
    category: "crm",
    description: "All - in - one CRM",
  },

  {
    id: "pipedrive"
    name: "PipeDrive"
    category: "crm"
    description: "Sales pipeline CRM"
  }
  {
    id: "greenhouse"
    name: "Greenhouse"
    category: "ats"
    description: "ATS & recruiting"
  }
  { id: "lever", name: "Lever", category: "ats", description: "ATS & CRM" }
  {
    id: "workable"
    name: "Workable"
    category: "ats"
    description: "Recruiting software"
  }
  {
<<<<<<< HEAD


];
export function getProviderById(

  id: string,


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

}
import { IntegrationProviderMeta } from './types';
export const PROVIDERS: IntegrationProviderMeta[] = [
  { id: 'salesforce', name: 'Salesforce', category: 'crm', description: 'Enterprise CRM' },
  { id: 'hubspot', name: 'HubSpot', category: 'crm', description: 'Marketing & Sales CRM' },
  { id: 'zoho', name: 'Zoho CRM', category: 'crm', description: 'All-in-one CRM' },
  { id: 'pipedrive', name: 'PipeDrive', category: 'crm', description: 'Sales pipeline CRM' },
  { id: 'greenhouse', name: 'Greenhouse', category: 'ats', description: 'ATS & recruiting' },
  { id: 'lever', name: 'Lever', category: 'ats', description: 'ATS & CRM' },
  { id: 'workable', name: 'Workable', category: 'ats', description: 'Recruiting software' },
  { id: 'bamboohr', name: 'BambooHR', category: 'ats', description: 'HRIS & ATS' }
];

<<<<<<< HEAD




=======
=======
;
export function getProviderById (
  id: string,
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find ((p) => p.id === id);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
  id: string,

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
