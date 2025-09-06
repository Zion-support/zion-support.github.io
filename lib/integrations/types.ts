export type IntegrationCategory = 'crm' | 'ats';
<<<<<<< HEAD
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
=======
<<<<<<< HEAD
<<<<<<< HEAD
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export type IntegrationProviderId =
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'lever'
  | 'workable'
  | 'bamboohr';

export interface IntegrationProviderMeta {
<<<<<<< HEAD
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,
=======
  id: IntegrationProviderId;
  name: string;
  category: IntegrationCategory;
  description?: string;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  oauthScopes?: string[];
  icon?: string
}

<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export interface SyncRules {
  // CRM rules
  autoCreateContacts?: boolean;
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules
  autoSyncApplicants?: boolean;
<<<<<<< HEAD
  autoUploadResumes?: boolean;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  autoUploadResumes?: boolean;
=======
  autoUploadResumes?: boolean
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export interface ProviderConnection {
  providerId: IntegrationProviderId;
  status: SyncStatus;  accessToken?: string;
  refreshToken?: string;
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;
<<<<<<< HEAD
  lastError?: string | null;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  lastError?: string | null;
=======
  lastError?: string | null
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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
<<<<<<< HEAD
  events: ZapierEvent[];
=======
<<<<<<< HEAD
  events: ZapierEvent[];
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  events: ZapierEvent[]
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
