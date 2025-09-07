<<<<<<< HEAD

export type IntegrationCategory = 'crm' | 'ats';

export type IntegrationCategory = 'crm' | 'ats';

=======

export type IntegrationCategory = 'crm' | 'ats';export type IntegrationCategory = 'crm' | 'ats';export type IntegrationCategory = 'crm' | 'ats';ursor/fix-website-loading-errors-and-merge-6662;
export type IntegrationCategory = 'crm' | 'ats';export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';export type IntegrationProviderId =;
  | 'salesforce';
  | 'hubspot';
  | 'zoho';
  | 'pipedrive';
  | 'greenhouse';
  | 'lever';export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationCategory = 'crm' | 'ats';

export type IntegrationCategory = 'crm' | 'ats';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationProviderId =;
  | 'salesforce';
  | 'hubspot';
  | 'zoho';
  | 'pipedrive';
  | 'greenhouse';
  | 'lever';
<<<<<<< HEAD


=======
  | 'workable';| 'bamboohr';| 'workable';
  | 'bamboohr';
export interface IntegrationProviderMeta  {id: IntegrationProviderId, name: string,category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string;
}category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string;
}export interface IntegrationProviderMeta  {id: IntegrationProviderId, name: string,category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;export interface IntegrationProviderMeta  {id: IntegrationProviderId, name: string,category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
  id: IntegrationProviderId, name: string;
  id: IntegrationProviderId, name: string,category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string;
}export type IntegrationCategory = any;
  events: ZapierEvent[];
}export interface SyncRules  {// CRM rules;
  autoCreateContacts?: boolean;
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules;
  autoSyncApplicants?: boolean;autoUploadResumes?: boolean;export interface ProviderConnection  {providerId: IntegrationProviderId;
  status: SyncStatus;
  accessToken?: string;
  refreshToken?: string;expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;export interface SyncLogEntry  {lastError?: string | null;export interface SyncLogEntry  {lastError?: string | null;
export interface SyncLogEntry  {id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;details?: Record < string, any>;;
export interface ManualOverride  {job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;;export interface ZapierEvent  {export interface ZapierEvent  {export interface ManualOverride  {jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;export interface ZapierEvent  {id: string;
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched';
  timestamp: number;payload: Record < string, any>;;
export interface IntegrationsState  {export interface ManualOverride  {jobId: string;

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationProviderId =
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'lever'
<<<<<<< HEAD



=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  | 'workable';

  | 'bamboohr';

  | 'workable';
  | 'bamboohr';
export interface IntegrationProviderMeta {
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}



<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
;
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
<<<<<<< HEAD
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}



export type IntegrationCategory = any;
  events: ZapierEvent[]
}

=======
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
  id: IntegrationProviderId, name: string
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
export interface SyncRules {
  // CRM rules;
  autoCreateContacts?: boolean;
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules;
  autoSyncApplicants?: boolean;
<<<<<<< HEAD


autoUploadResumes?: boolean;

export interface ProviderConnection {
  providerId: IntegrationProviderId;
  status: SyncStatus;
  accessToken?: string;
  refreshToken?: string;
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;
<<<<<<< HEAD

export interface SyncLogEntry {

  lastError?: string | null;
export interface SyncLogEntry {;


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
export interface ManualOverride {
  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

<<<<<<< HEAD



=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {;
<<<<<<< HEAD



=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  id: string;
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched';
  timestamp: number;

  payload: Record < string, any>;
;

export interface IntegrationsState {
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5

export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;export interface ZapierEvent  {id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
<<<<<<< HEAD
=======
  events: ZapierEvent[];  events: ZapierEvent[];
}}
}
}
}
}export interface IntegrationsState  {ursor/fix-website-loading-errors-and-merge-6662;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];lastError?: string | null;
}export interface SyncLogEntry  {id: string, timestamp: number,providerId: IntegrationProviderId, level: 'info' | 'warn' | 'error',action: string,details?: Record<string, any>;
}
export interface ManualOverride  {jobId: string, disableCrmSync?: boolean,disableAtsSync?: boolean;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  events: ZapierEvent[];  events: ZapierEvent[]
}

}
}
}
}
}

export interface IntegrationsState {;

  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];

<<<<<<< HEAD

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
export interface SyncLogEntry {
  id: string, timestamp: number,
  providerId: IntegrationProviderId, level: 'info' | 'warn' | 'error',
  action: string,
  details?: Record<string, any>
}
export interface ZapierEvent  {id: string, type: 'zion.job.posted' | 'zion.talent.matched',timestamp: number,payload: Record<string, any>;
}
export interface IntegrationsState  {connections: ProviderConnection[], logs: SyncLogEntry[],overrides: ManualOverride[],events: ZapierEvent[];
}
}events: ZapierEvent[];
export interface IntegrationsState {
  connections: ProviderConnection[], logs: SyncLogEntry[],
  overrides: ManualOverride[],
  events: ZapierEvent[]
}
}
<<<<<<< HEAD




  events: ZapierEvent[];

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
