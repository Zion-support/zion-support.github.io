<<<<<<< HEAD
<<<<<<< HEAD
export type IntegrationCategory = any;
  events: ZapierEvent[]
}
=======
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
  | 'bamboohr';
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}
=======
export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';
export type SyncStatus = 'connected' | 'warning' | 'disconnected';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export interface SyncRules {
  // CRM rules
  autoCreateContacts?: boolean;
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules
  autoSyncApplicants?: boolean;
  autoUploadResumes?: boolean;
export interface ProviderConnection {
  providerId: IntegrationProviderId;
<<<<<<< HEAD
  status: SyncStatus;  accessToken?: string;  refreshToken?: string;
=======
  status: SyncStatus;
  accessToken?: string;
  refreshToken?: string;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
  events: ZapierEvent[];  events: ZapierEvent[]
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  events: ZapierEvent[];
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
