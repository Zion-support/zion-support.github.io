<<<<<<< HEAD
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
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
  | 'bamboohr';
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
;
export interface IntegrationProviderMeta {
<<<<<<< HEAD
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
=======
<<<<<<< HEAD
  id: IntegrationProviderId, name: string
=======
  id: IntegrationProviderId, name: string,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  autoUploadResumes?: boolean
}
export interface ProviderConnection {
  providerId: IntegrationProviderId, status: SyncStatus,
  accessToken?: string;
  refreshToken?: string;
=======
  autoUploadResumes?: boolean;
<<<<<<< HEAD
export interface ProviderConnection {
=======

export interface ProviderConnection {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  providerId: IntegrationProviderId;
  status: SyncStatus;  accessToken?: string;  refreshToken?: string;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;
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
  details?: Record < string, any>;
;
=======
  details?: Record<string, any>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export interface ManualOverride {
  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
;
export interface ZapierEvent {
=======

export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched';
  timestamp: number;
<<<<<<< HEAD
  payload: Record < string, any>;
;
=======
  payload: Record<string, any>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export interface IntegrationsState {
=======

export interface IntegrationsState {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
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
  events: ZapierEvent[];  events: ZapierEvent[];
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
}
}
}
}
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
