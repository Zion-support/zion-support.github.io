

ursor/fix-website-loading-errors-and-merge-6662

export type IntegrationCategory = 'crm' | 'ats';



export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationCategory = 'crm' | 'ats';




export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationProviderId =


  | 'lever'
  | 'workable';

  id: IntegrationProviderId, name: string,;
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}





export interface SyncRules {

  // CRM rules;
  autoCreateContacts?: boolean;'
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules;
  autoSyncApplicants?: boolean;




  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;











  disableAtsSync?: boolean;

export interface ZapierEvent {;
  id: string;'
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;

  | 'salesforce
  | hubspot'
  | 'zoho
  | pipedrive'
  | 'greenhouse

  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: info' | 'warn | error';
  action: string;





