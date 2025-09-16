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
import { IntegrationProviderMeta } from "./types";
export const PROVIDERS: IntegrationProviderMeta[] = [


export const PROVIDERS: IntegrationProviderMeta[] = [
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
    id: "bamboohr"
    name: "BambooHR"
    category: "ats"
    description: "HRIS & ATS"
  }
];
export function getProviderById(

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

;
export function getProviderById (
  id: string,
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find ((p) => p.id === id);
}

    id: "bamboohr",
    name: "BambooHR",
    category: "ats",
    description: "HRIS & ATS"
  },;

];
export function getProviderById(

  id: string,
): IntegrationProviderMeta | undefined {;
  return PROVIDERS.find((p) => p.id === id);
}
): IntegrationProviderMeta | undefined {
  return PROVIDERS.find(p => p.id === id);

>>>>>>> origin/merge-pr-12271
