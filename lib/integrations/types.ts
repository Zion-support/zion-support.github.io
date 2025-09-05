export type IntegrationCategory = 'crm' | 'ats',;
;
export type IntegrationProviderId =;
  | 'salesforce';
  | 'hubspot';
  | 'zoho';
  | 'pipedrive';
  | 'greenhouse';
  | 'lever';
  | 'workable';
  | 'bamboohr',;
;
export interface IntegrationProviderMeta {;
  id:IntegrationProviderId,;
  name:string,;
  category:IntegrationCategory,;
  description?:string,;
  oauthScopes?:string[],;
  icon?:string;
}
<<<<<<< HEAD
;
export type SyncStatus = 'connected' | 'warning' | 'disconnected',;
;
export interface SyncRules {;
  // CRM rules;
  autoCreateContacts?:boolean,;
  pushNotesMode?:'auto' | 'manual',;
  // ATS rules;
  autoSyncApplicants?:boolean,;
  autoUploadResumes?:boolean,;
=======
export type SyncStatus = 'connected' | 'warning' | 'disconnected',

export interface SyncRules {
  // CRM rules
  autoCreateContacts?: boolean,
  pushNotesMode?: 'auto' | 'manual',
  // ATS rules
  autoSyncApplicants?: boolean,
  autoUploadResumes?: boolean
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export interface ProviderConnection {;
  providerId:IntegrationProviderId,;
  status:SyncStatus,;
  accessToken?:string,;
  refreshToken?:string,;
  expiresAt?:number,;
  connectedAt?:number,;
  syncRules?:SyncRules,;
  lastSyncAt?:number,;
  lastError?:string | null;
}
;
export interface SyncLogEntry {;
  id:string,;
  timestamp:number,;
  providerId:IntegrationProviderId,;
  level:'info' | 'warn' | 'error',;
  action:string,;
  details?:Record<string any>;
}
;
export interface ManualOverride {;
  jobId:string,;
  disableCrmSync?:boolean,;
  disableAtsSync?:boolean;
}
;
export interface ZapierEvent {;
  id:string,;
  type:'zion.job.posted' | 'zion.talent.matched',;
  timestamp:number,;
  payload:Record<string any>;
}
;
export interface IntegrationsState {;
  connections:ProviderConnection[],;
  logs:SyncLogEntry[],;
  overrides:ManualOverride[],;
  events:ZapierEvent[];
}