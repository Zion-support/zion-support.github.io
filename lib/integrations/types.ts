export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationProviderId =
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'lever'
  | 'workable'
  | 'bamboohr',

  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;


origin/cursor/expand-services-advertise-and-build-project-c28b

export interface ManualOverride {
  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

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
  disableAtsSync?: boolean;export interface ZapierEvent  {id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];  events: ZapierEvent[];
}}
}
}export interface IntegrationsState  {ursor/fix-website-loading-errors-and-merge-6662;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];lastError?: string | null;
}export interface SyncLogEntry  {id: string, timestamp: number,providerId: IntegrationProviderId, level: 'info' | 'warn' | 'error',action: string,details?: Record<string, any>;
}
export interface ManualOverride  {jobId: string, disableCrmSync?: boolean,disableAtsSync?: boolean;
  events: ZapierEvent[];  events: ZapierEvent[]
}


  lastError?: string | null
}
  lastError?: string | null
}
origin/cursor/expand-services-advertise-and-build-project-c28b


export type IntegrationCategory = $2;
export type IntegrationProviderId = $2;
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}


export interface SyncRules {
  // CRM rules
  autoCreateContacts?: boolean,
  pushNotesMode?: 'auto' | 'manual',
  // ATS rules
  autoSyncApplicants?: boolean;
  autoUploadResumes?: boolean;

export interface ProviderConnection {
  providerId: IntegrationProviderId;
  status: SyncStatus;  accessToken?: string;  refreshToken?: string;
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;
  lastError?: string | null;
export interface SyncLogEntry {
  id: string;
  timestamp: number;
  providerId: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;
  details?: Record<string, any>;

export interface ManualOverride {
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {
  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;

export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];  events: ZapierEvent[]
}
