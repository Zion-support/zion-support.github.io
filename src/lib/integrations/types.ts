export type IntegrationCategory = $2;
export type IntegrationProviderId = $2;
export interface IntegrationProviderMeta {
  id: IntegrationProviderId,
  name: string,
  category: IntegrationCategory,
  description?: string,
  oauthScopes?: string[],
  icon?: string
}

export type SyncStatus = $2;
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
  details?: Record<string, any>
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
  payload: Record<string, any>
}

export interface IntegrationsState {
  connections: ProviderConnection[],
  logs: SyncLogEntry[],
  overrides: ManualOverride[],
  events: ZapierEvent[]
}