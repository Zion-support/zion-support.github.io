

ursor/fix-website-loading-errors-and-merge-6662

export type IntegrationCategory = 'crm' | 'ats';
origin/cursor/expand-services-advertise-and-build-project-c28b

export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type IntegrationProviderId =;
  | 'salesforce';
  | 'hubspot';
  | 'zoho';
  | 'pipedrive';
  | 'greenhouse';
  | 'lever';

origin/cursor/expand-services-advertise-and-build-project-c28b

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

  | 'bamboohr';

  | 'workable';
  | 'bamboohr';
export interface IntegrationProviderMeta {

  id: IntegrationProviderId, name: string,;


origin/cursor/expand-services-advertise-and-build-project-c28b
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}



;
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string,;

  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string

}
origin/cursor/expand-services-advertise-and-build-project-c28b

export type IntegrationCategory = any;
  events: ZapierEvent[]
}
origin/cursor/automate-test-improve-and-merge-code-2533
export interface SyncRules {
  // CRM rules;
  autoCreateContacts?: boolean;
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules;
  autoSyncApplicants?: boolean;


origin/cursor/expand-services-advertise-and-build-project-c28b

autoUploadResumes?: boolean;

export interface ProviderConnection {
  providerId: IntegrationProviderId;
  status: SyncStatus;
  accessToken?: string;
  refreshToken?: string;
origin/cursor/automate-test-improve-and-merge-code-2533
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;

lastError?: string | null;
origin/cursor/automate-test-improve-and-merge-code-2533

export interface SyncLogEntry {
  lastError?: string | null;
export interface SyncLogEntry {;

origin/cursor/expand-services-advertise-and-build-project-c28b

  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;

  details?: Record < string, any>;
;

origin/cursor/expand-services-advertise-and-build-project-c28b

export interface ManualOverride {
  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

;

export interface ZapierEvent {
origin/cursor/expand-services-advertise-and-build-project-c28b


export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {;


  id: string;
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched';
  timestamp: number;

  payload: Record < string, any>;
;

export interface IntegrationsState {

origin/cursor/expand-services-advertise-and-build-project-c28b


export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {;
  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];

  lastError?: string | null
}
origin/cursor/expand-services-advertise-and-build-project-c28b

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
}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

  events: ZapierEvent[];
origin/cursor/automate-test-improve-and-merge-code-2533
