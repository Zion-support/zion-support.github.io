export type IntegrationCategory = 'crm' | 'ats';

export type IntegrationProviderId =
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'lever'
  | 'workable'
  | 'bamboohr';

export interface IntegrationProviderMeta {_id: IntegrationProviderId;
  name: string;
  category: IntegrationCategory;
  description?: string;
  oauthScopes?: string[];
  icon?: string;}

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

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