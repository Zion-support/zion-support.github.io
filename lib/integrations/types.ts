
export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
  | 'bamboohr';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;
  lastError?: string | null;
=======
;
export interface ProviderConnection {
  provider_id: IntegrationProviderId;
  status: SyncStatus;  access_token?: string;  refresh_token?: string;
  expires_at?: number;
  connected_at?: number;
  sync_rules?: SyncRules;
  lastSyncAt?: number;
  last_error?: string | null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface SyncLogEntry {
  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;
export interface ManualOverride {
  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
export interface ZapierEvent {
  id: string;
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched';
  timestamp: number;
export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
=======
  events: ZapierEvent[];  events: ZapierEvent[];
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
