<<<<<<< HEAD
import { IntegrationProviderMeta } from "./types";

import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [
=======
import { IntegrationProviderMeta  } from './types';
;
export const PROVIDERS: IntegrationProviderMeta[] = [;
=======
<<<<<<< HEAD
=======
import { IntegrationProviderMeta } from "./types";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======

>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    id: "bamboohr"
    name: "BambooHR"
    category: "ats"
    description: "HRIS & ATS"
  }
=======
    id: "bamboohr",
    name: "BambooHR",
    category: "ats",
    description: "HRIS & ATS",
  },;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
];
export function getProviderById(
<<<<<<< HEAD
  id: string
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find((p) => p.id === id);
}
=======
  id: string,
<<<<<<< HEAD
): IntegrationProviderMeta | undefined {;
  return PROVIDERS.find((p) => p.id === id);
}
=======
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id);
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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

=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
;
export function getProviderById (
  id: string,
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find ((p) => p.id === id);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

    id: "bamboohr",
    name: "BambooHR",
    category: "ats",
    description: "HRIS & ATS",
  },;
<<<<<<< HEAD
];
export function getProviderById(
  id: string
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find((p) => p.id === id);
}
=======

];
export function getProviderById(

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  id: string,
): IntegrationProviderMeta | undefined {;
  return PROVIDERS.find((p) => p.id === id);
}
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id);

<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
