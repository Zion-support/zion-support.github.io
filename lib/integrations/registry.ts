<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [
<<<<<<< HEAD
=======
import { IntegrationProviderMeta  } from './types';
;
export const PROVIDERS: IntegrationProviderMeta[] = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
import { IntegrationProviderMeta } from "./types";

import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    id: "zoho",
    name: "Zoho CRM",
    category: "crm",
    description: "All - in - one CRM",
  },
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

}

=======
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
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
export function getProviderById (
  id: string,
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find ((p) => p.id === id);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    id: "bamboohr",
    name: "BambooHR",
    category: "ats",
    description: "HRIS & ATS",
  },;

];
export function getProviderById(

  id: string,

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  id: string,
): IntegrationProviderMeta | undefined {;
  return PROVIDERS.find((p) => p.id === id);
}
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id);

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
