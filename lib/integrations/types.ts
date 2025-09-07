// Integration types and interfaces

export interface IntegrationConfig {
  id: string;
  name: string;
  type: string;
  enabled: boolean;
  credentials: Record<string, any>;
  settings: Record<string, any>;

export type IntegrationCategory = 'crm' | 'ats';

export type IntegrationCategory = 'crm' | 'ats';


ursor/fix-website-loading-errors-and-merge-6662

export type IntegrationCategory = 'crm' | 'ats';
origin/cursor/expand-services-advertise-and-build-project-c28b
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type IntegrationProviderId =;
  | 'salesforce';
  | 'hubspot';
  | 'zoho';
  | 'pipedrive';
  | 'greenhouse';
  | 'lever';

origin/cursor/expand-services-advertise-and-build-project-c28b
export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationProviderId =
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'lever'
  | 'workable';

  | 'bamboohr';

  | 'workable';
  | 'bamboohr';
export interface IntegrationProviderMeta {

  id: IntegrationProviderId, name: string,;


origin/cursor/expand-services-advertise-and-build-project-c28b
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}



;
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
;
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
  id: IntegrationProviderId, name: string
  id: IntegrationProviderId, name: string,;
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}
origin/cursor/expand-services-advertise-and-build-project-c28b
export type IntegrationCategory = any;
  events: ZapierEvent[]
}
origin/cursor/automate-test-improve-and-merge-code-2533
export interface SyncRules {
  // CRM rules;
  autoCreateContacts?: boolean;
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules;
  autoSyncApplicants?: boolean;


origin/cursor/expand-services-advertise-and-build-project-c28b
autoUploadResumes?: boolean;

export interface ProviderConnection {
  providerId: IntegrationProviderId;
  status: SyncStatus;
  accessToken?: string;
  refreshToken?: string;
origin/cursor/automate-test-improve-and-merge-code-2533
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;

lastError?: string | null;
origin/cursor/automate-test-improve-and-merge-code-2533

export interface SyncLogEntry {
  lastError?: string | null;
export interface SyncLogEntry {;
origin/cursor/expand-services-advertise-and-build-project-c28b
  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;

  details?: Record < string, any>;
;

origin/cursor/expand-services-advertise-and-build-project-c28b
export interface ManualOverride {
  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

;

export interface ZapierEvent {
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
  disableAtsSync?: boolean;

export interface ZapierEvent {;
  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];  events: ZapierEvent[]
pr-12243
}

export interface IntegrationResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface WebhookPayload {
  event: string;
  data: any;
  timestamp: string;
  source: string;
}

  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];

  lastError?: string | null
}
export interface ApiEndpoint {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
}

export interface IntegrationStatus {
  connected: boolean;
  lastSync?: string;
  errorCount: number;
  lastError?: string;
}

  lastError?: string | null
}
origin/cursor/expand-services-advertise-and-build-project-c28b
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
}
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b
  events: ZapierEvent[];
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
export type IntegrationCategory = 'crm' | 'ats' | 'email' | 'analytics';
export type IntegrationProviderId = 
  | 'salesforce' 
  | 'hubspot' 
  | 'zoho' 
  | 'pipedrive' 
  | 'greenhouse' 
  | 'lever' 
  | 'workable' 
  | 'bamboohr
  | 'mailchimp
  | 'sendgrid
  | 'google_analytics
  | 'mixpanel';

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: IntegrationCategory;
  description?: string;
  icon?: string;
  oauthScopes?: string[];
}

export interface ProviderConnection {
  id: string;
  providerId: IntegrationProviderId;
  status: SyncStatus;
  lastSync?: string;
  config: Record<string, any>;
  createdAt: string;
  updatedAt: string;

export interface SyncLogEntry {
  timestamp: string;
  connectionId: string;
  action: string;
  status: 'success' | 'error' | 'warning';
  details?: string;
  result?: string;
  error?: string;

export interface IntegrationsState {
  connections: ProviderConnection[];
  syncLogs: SyncLogEntry[];
  lastSync: string | null;

export interface SyncResult {
  success: boolean;
  logs: SyncLogEntry[];

export interface IntegrationConfig {
  apiKey?: string;
  secretKey?: string;
  webhookUrl?: string;
  customFields?: Record<string, any>;
pr-12325
