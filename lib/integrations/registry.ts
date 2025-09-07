
<<<<<<< HEAD
=======
;
import { IntegrationProviderMeta  } from './types';
export const PROVIDERS: IntegrationProviderMeta[] = [;
export const PROVIDERS: IntegrationProviderMeta[] = [;
export const PROVIDERS: IntegrationProviderMeta[] = [;
export const PROVIDERS: IntegrationProviderMeta[] = [;
import { IntegrationProviderMeta    } from './types';export const PROVIDERS: IntegrationProviderMeta[]  = [;export const PROVIDERS: IntegrationProviderMeta[] = [;
  {id: "salesforce";
    name: "Salesforce";
    category: "crm";
    description: "Enterprise CRM";
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [


<<<<<<< HEAD
import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [


=======
export const PROVIDERS: IntegrationProviderMeta[] = [
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  {
    id: "salesforce"
    name: "Salesforce"
    category: "crm"
    description: "Enterprise CRM"
  }
  {id: "hubspot";
    name: "HubSpot";
    category: "crm";
    description: "Marketing & Sales CRM";
  }
  {id: "zoho",name: "Zoho CRM",category: "crm",description: "All - in - one CRM";
  },description: "All - in - one CRM";
  },{id: "pipedrive";
    name: "PipeDrive";
    category: "crm";
    description: "Sales pipeline CRM";
  {
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  {
    id: "pipedrive"
    name: "PipeDrive"
    category: "crm"
    description: "Sales pipeline CRM"
  }
  {id: "greenhouse";
    name: "Greenhouse";
    category: "ats";
    description: "ATS & recruiting";
  }
  { id: "lever", name: "Lever", category: "ats", description: "ATS & CRM" }
  {id: "workable";
    name: "Workable";
    category: "ats";
    description: "Recruiting software";
  }
  {}
  {}
  {id: "bamboohr";
    name: "BambooHR";
    category: "ats";
    description: "HRIS & ATS";
  }
];
export function getProviderById(}export const PROVIDERS: IntegrationProviderMeta[] = [;
  { id: 'salesforce', name: 'Salesforce', category: 'crm', description: 'Enterprise CRM' },{ id: 'hubspot', name: 'HubSpot', category: 'crm', description: 'Marketing & Sales CRM' },{ id: 'zoho', name: 'Zoho CRM', category: 'crm', description: 'All-in-one CRM' },{ id: 'pipedrive', name: 'PipeDrive', category: 'crm', description: 'Sales pipeline CRM' },{ id: 'greenhouse', name: 'Greenhouse', category: 'ats', description: 'ATS & recruiting' },{ id: 'lever', name: 'Lever', category: 'ats', description: 'ATS & CRM' },{ id: 'workable', name: 'Workable', category: 'ats', description: 'Recruiting software' },{ id: 'bamboohr', name: 'BambooHR', category: 'ats', description: 'HRIS & ATS' }
];{ id: 'bamboohr', name: 'BambooHR', category: 'ats', description: 'HRIS & ATS' }
];;
export function getProviderById (id: string,): IntegrationProviderMeta | undefined {return PROVIDERS.find ((p) => p.id === id)}id: "bamboohr",name: "BambooHR",category: "ats",description: "HRIS & ATS";
    description: "HRIS & ATS";
    description: "HRIS & ATS";
  }];
export function getProviderById(id: string,): IntegrationProviderMeta | undefined {return PROVIDERS.find((p) => p.id === id)}
): IntegrationProviderMeta | undefined {return PROVIDERS.find(p => p.id === id)ursor/fix-website-loading-errors-and-merge-6662;
  { id: 'bamboohr', name: 'BambooHR', category: 'ats', description: 'HRIS & ATS' }];
export function getProviderById(id: string): IntegrationProviderMeta | undefined {return PROVIDERS.find(p => p.id === id)}
  {
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
    id: "bamboohr"
    name: "BambooHR"
    category: "ats"
    description: "HRIS & ATS"
  }
];
export function getProviderById(
<<<<<<< HEAD


}
import { IntegrationProviderMeta } from './types';

import { IntegrationProviderMeta  } from './types';
=======

}
import { IntegrationProviderMeta } from './types';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
;
export function getProviderById (
  id: string,
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find ((p) => p.id === id);
}
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5

    id: "bamboohr",
    name: "BambooHR",
    category: "ats",
    description: "HRIS & ATS"
  },;

];
export function getProviderById(

  id: string,
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
): IntegrationProviderMeta | undefined {;
  return PROVIDERS.find((p) => p.id === id);
}
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id);

<<<<<<< HEAD




  { id: 'bamboohr', name: 'BambooHR', category: 'ats', description: 'HRIS & ATS' }];
export function getProviderById(id: string): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id)
}

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
