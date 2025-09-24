export type IntegrationCategory = 'crm' | 'ats',
export type IntegrationProviderId =,
  | 'salesforce',
  | 'hubspot',
  | 'zoho',
  | 'pipedrive',
  | 'greenhouse',
  | 'lever',
  | 'workable',
  | 'bamboohr',
export type SyncStatus = 'connected' | 'warning' | 'disconnected',
export interface IntegrationProviderMeta {
  id: IntegrationProviderId,
  name: string,
  category: IntegrationCategory,
  description?: string,
  oauthScopes?: string[],
  icon?: string,
}
,
export interface SyncRules {
  autoCreateContacts?: boolean,
  pushNotesMode?: 'auto' | 'manual',
  autoSyncApplicants?: boolean,
  autoUploadResumes?: boolean}
,
export interface ProviderConnection {
  providerId: IntegrationProviderId,
  status: SyncStatus,
  accessToken?: string,
  refreshToken?: string,
  expiresAt?: number,
  connectedAt?: number,
  syncRules?: SyncRules,
  lastSyncAt?: number,
  lastError?: string | null,
}
,
export interface SyncLogEntry {
  id: string,
  timestamp: number,
  providerId: IntegrationProviderId,
  level: 'info' | 'warn' | 'error',
  action: string,
  details?: Record<string unknown>}
,
export interface ManualOverride {
  jobId: string,
  disableCrmSync?: boolean,
  disableAtsSync?: boolean,
}
,
export interface ZapierEvent {
  id: string,
  type: 'zion.job.posted' | 'zion.talent.matched',
  timestamp: number,
  payload: Record<string unknown>}
,
export interface IntegrationsState {
  connections: ProviderConnection[],
  logs: SyncLogEntry[],
  overrides: ManualOverride[],
  events: ZapierEvent[],
}
,