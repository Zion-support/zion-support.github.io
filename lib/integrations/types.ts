export type IntegrationCategory = 'crm' | 'ats',

export type IntegrationProviderId =
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'lever'
  | 'workable'
  | 'bamboohr',

<<<<<<< HEAD
export interface IntegrationProviderMeta {
  id: IntegrationProviderId,
  name: string,
  category: IntegrationCategory,
  description?: string,
  oauthScopes?: string[],
  icon?: string
}
=======
export interface IntegrationProviderMeta {_id: IntegrationProviderId;
  name: string;
  category: IntegrationCategory;
  description?: string;
  oauthScopes?: string[];
  icon?: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type SyncStatus = 'connected' | 'warning' | 'disconnected',

<<<<<<< HEAD
export interface SyncRules {
  // CRM rules
  autoCreateContacts?: boolean,
  pushNotesMode?: 'auto' | 'manual',
  // ATS rules
  autoSyncApplicants?: boolean,
  autoUploadResumes?: boolean
}

export interface ProviderConnection {
  providerId: IntegrationProviderId,
  status: SyncStatus,
  accessToken?: string,
  refreshToken?: string,
  expiresAt?: number,
  connectedAt?: number,
  syncRules?: SyncRules,
  lastSyncAt?: number,
  lastError?: string | null
}

export interface SyncLogEntry {
  id: string,
  timestamp: number,
  providerId: IntegrationProviderId,
  level: 'info' | 'warn' | 'error',
  action: string,
  details?: Record<string any>
}

export interface ManualOverride {
  jobId: string,
  disableCrmSync?: boolean,
  disableAtsSync?: boolean
}

export interface ZapierEvent {
  id: string,
  type: 'zion.job.posted' | 'zion.talent.matched',
  timestamp: number,
  payload: Record<string any>
}

export interface IntegrationsState {
  connections: ProviderConnection[],
  logs: SyncLogEntry[],
  overrides: ManualOverride[],
  events: ZapierEvent[]
}
=======
export interface SyncRules {_// CRM rules
  autoCreateContacts?: boolean;
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules
  autoSyncApplicants?: boolean;
  autoUploadResumes?: boolean;}

export interface ProviderConnection {_providerId: IntegrationProviderId;
  status: SyncStatus;
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;
  lastError?: string | null;}

export interface SyncLogEntry {_id: string;
  timestamp: number;
  providerId: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;
  details?: Record<string, _any>;}

export interface ManualOverride {_jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;}

export interface ZapierEvent {_id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, _any>;}

export interface IntegrationsState {_connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
