<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { IntegrationProviderMeta  } from './types';
;
export const PROVIDERS: IntegrationProviderMeta[] = [;
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { IntegrationProviderMeta } from "./types";

import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    id: "zoho",
    name: "Zoho CRM",
    category: "crm",
    description: "All - in - one CRM",
  },
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
];
export function getProviderById(

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    id: "bamboohr"
    name: "BambooHR"
    category: "ats"
    description: "HRIS & ATS"
  }
    id: "bamboohr",
    name: "BambooHR",
    category: "ats",
    description: "HRIS & ATS",
  },;
];
export function getProviderById(
  id: string
): IntegrationProviderMeta | undefined {
  return PROVIDERS && PROVIDERS.find((p) => p && p.id === id);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

];
export function getProviderById(

  id: string,

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: string,
): IntegrationProviderMeta | undefined {;
  return PROVIDERS.find((p) => p.id === id);
}
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id);

}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
