
export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationCategory = 'crm' | 'ats';



export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type IntegrationProviderId =;
  | 'salesforce';
  | 'hubspot';
  | 'zoho';
  | 'pipedrive';
  | 'greenhouse';
  | 'lever';
<<<<<<< HEAD
  | 'workable';

  | 'bamboohr';

  | 'workable';
  | 'bamboohr';
export interface IntegrationProviderMeta {

=======

export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationProviderId =
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'lever'
  | 'workable';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  id: IntegrationProviderId, name: string,;


  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}



<<<<<<< HEAD
=======
;
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
=======
  | 'bamboohr';
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
;
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string
  id: IntegrationProviderId, name: string,;
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface SyncRules {
  // CRM rules;
  autoCreateContacts?: boolean;
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules;
  autoSyncApplicants?: boolean;


<<<<<<< HEAD
=======
  autoUploadResumes?: boolean
}
export interface ProviderConnection {
  providerId: IntegrationProviderId, status: SyncStatus,
  accessToken?: string;
  refreshToken?: string;
  autoUploadResumes?: boolean;
export interface ProviderConnection {

export interface ProviderConnection {;
  providerId: IntegrationProviderId;
  status: SyncStatus;  accessToken?: string;  refreshToken?: string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;
<<<<<<< HEAD


export interface SyncLogEntry {
=======
  lastError?: string | null;
export interface SyncLogEntry {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;

  details?: Record < string, any>;
;

<<<<<<< HEAD
=======
  details?: Record < string, any>;
;
  details?: Record<string, any>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export interface ManualOverride {
  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
<<<<<<< HEAD

;

export interface ZapierEvent {
  id: string;
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched';
  timestamp: number;

  payload: Record < string, any>;
;

export interface IntegrationsState {
=======
=======
;
export interface ZapierEvent {

export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {;
  id: string;
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched';
  timestamp: number;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {;

  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;


export interface IntegrationsState {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];


<<<<<<< HEAD
=======
  lastError?: string | null
}

export interface SyncLogEntry {
  id: string, timestamp: number,
  providerId: IntegrationProviderId, level: 'info' | 'warn' | 'error',
  action: string,
  details?: Record<string, any>
}

export interface ManualOverride {
  jobId: string, disableCrmSync?: boolean,
  disableAtsSync?: boolean
}

export interface ZapierEvent {
  id: string, type: 'zion.job.posted' | 'zion.talent.matched',
  timestamp: number,
  payload: Record<string, any>
}

export interface IntegrationsState {
  connections: ProviderConnection[], logs: SyncLogEntry[],
  overrides: ManualOverride[],
  events: ZapierEvent[]
}

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  events: ZapierEvent[];  events: ZapierEvent[];
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  payload: Record<string, any>;
export interface IntegrationsState {

export interface IntegrationsState {;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  lastError?: string | null
}


  events: ZapierEvent[];  events: ZapierEvent[];
}
  events: ZapierEvent[];  events: ZapierEvent[];
}

}
}
}
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
