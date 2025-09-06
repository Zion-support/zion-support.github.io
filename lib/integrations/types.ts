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

export interface IntegrationProviderMeta {

  oauthScopes?: string[],
  icon?: string
}


export type SyncStatus = 'connected' | 'warning' | 'disconnected',

export interface SyncRules {
  // CRM rules
  autoCreateContacts?: boolean,
  pushNotesMode?: 'auto' | 'manual',
  // ATS rules
  autoSyncApplicants?: boolean;


export interface ProviderConnection {
  providerId: IntegrationProviderId,
  status: SyncStatus,
=======
  autoUploadResumes?: boolean
}

export interface ProviderConnection {
  providerId: IntegrationProviderId, status: SyncStatus,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;


export interface SyncLogEntry {
  id: string,
  timestamp: number,
  providerId: IntegrationProviderId,
  level: 'info' | 'warn' | 'error',
  action: string,
  details?: Record<string, any>
}

export interface ManualOverride {
  jobId: string,
  disableCrmSync?: boolean;
  disableAtsSync?: boolean
}

export interface ZapierEvent {
  id: string,
  type: 'zion.job.posted' | 'zion.talent.matched',
  timestamp: number,
  payload: Record<string, any>
}

export interface IntegrationsState {
  connections: ProviderConnection[],
  logs: SyncLogEntry[],
  overrides: ManualOverride[],

=======
  events: ZapierEvent[]
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
