
export type IntegrationCategory = 'crm' | 'ats';

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type IntegrationProviderId =;
  | 'salesforce';
  | 'hubspot';
  | 'zoho';
  | 'pipedrive';
  | 'greenhouse';
  | 'lever';
  | 'workable';

  | 'bamboohr';

  | 'workable';
  | 'bamboohr';
export interface IntegrationProviderMeta {
<<<<<<< HEAD
  id: IntegrationProviderId, name: string
=======
  id: IntegrationProviderId, name: string,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}



=======
;
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface SyncRules {
  // CRM rules;
  autoCreateContacts?: boolean;
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules;
  autoSyncApplicants?: boolean;
  autoUploadResumes?: boolean;
<<<<<<< HEAD
export interface ProviderConnection {
=======

export interface ProviderConnection {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  providerId: IntegrationProviderId;
  status: SyncStatus;  accessToken?: string;  refreshToken?: string;
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;


export interface SyncLogEntry {
  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;
  details?: Record<string, any>;
<<<<<<< HEAD
export interface ManualOverride {
  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

;

export interface ZapierEvent {
  id: string;
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched';
  timestamp: number;

  payload: Record < string, any>;
;

export interface IntegrationsState {
=======

export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;
<<<<<<< HEAD
export interface IntegrationsState {
=======

export interface IntegrationsState {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
}
}
}
}
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
