<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
export type IntegrationCategory = 'crm' | 'ats';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export type IntegrationCategory = 'crm' | 'ats';

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type IntegrationProviderId =;
  | 'salesforce';
  | 'hubspot';
  | 'zoho';
  | 'pipedrive';
  | 'greenhouse';
  | 'lever';
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationProviderId =
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'lever'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  | 'workable';
<<<<<<< HEAD

  | 'bamboohr';

  | 'workable';
  | 'bamboohr';
export interface IntegrationProviderMeta {
<<<<<<< HEAD

<<<<<<< HEAD
=======
  id: IntegrationProviderId, name: string,;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}



=======
=======
  | 'bamboohr';
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
export interface IntegrationProviderMeta {
<<<<<<< HEAD
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: IntegrationProviderId, name: string
  id: IntegrationProviderId, name: string,;
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
export interface SyncRules {
  // CRM rules;
  autoCreateContacts?: boolean;
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules;
  autoSyncApplicants?: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
  autoUploadResumes?: boolean;

  providerId: IntegrationProviderId;
  status: SyncStatus;  accessToken?: string;  refreshToken?: string;
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  autoUploadResumes?: boolean
}
export interface ProviderConnection {
  providerId: IntegrationProviderId, status: SyncStatus,
  accessToken?: string;
  refreshToken?: string;
=======
  autoUploadResumes?: boolean;
export interface ProviderConnection {

export interface ProviderConnection {;
  providerId: IntegrationProviderId;
  status: SyncStatus;  accessToken?: string;  refreshToken?: string;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;
<<<<<<< HEAD


=======
<<<<<<< HEAD
;
export interface ProviderConnection {
  provider_id: IntegrationProviderId;
  status: SyncStatus;  access_token?: string;  refresh_token?: string;
  expires_at?: number;
  connected_at?: number;
  sync_rules?: SyncRules;
  lastSyncAt?: number;
  last_error?: string | null;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export interface SyncLogEntry {
=======
  lastError?: string | null;
export interface SyncLogEntry {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;
<<<<<<< HEAD
<<<<<<< HEAD
  details?: Record<string, any>;

=======

  details?: Record < string, any>;
;

=======
  details?: Record < string, any>;
;
=======
  details?: Record<string, any>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export interface ManualOverride {
  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
<<<<<<< HEAD

;

=======
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export interface ZapierEvent {

export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {;
  id: string;
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched';
  timestamp: number;
<<<<<<< HEAD

  payload: Record < string, any>;
;

export interface IntegrationsState {
=======


export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;
<<<<<<< HEAD
<<<<<<< HEAD

  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];  events: ZapierEvent[]
}

}
}
}
}
}

=======


export interface IntegrationsState {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];


=======
=======
<<<<<<< HEAD
  payload: Record < string, any>;
;
=======
  payload: Record<string, any>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export interface IntegrationsState {

export interface IntegrationsState {;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  lastError?: string | null
}
<<<<<<< HEAD
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
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  events: ZapierEvent[];  events: ZapierEvent[];
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  events: ZapierEvent[];  events: ZapierEvent[];
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

}
}
}
}
}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
