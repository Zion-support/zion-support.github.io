<<<<<<< HEAD
// Integration types and interfaces

export interface IntegrationConfig {
  id: string;
  name: string;
  type: string;
  enabled: boolean;
  credentials: Record<string, any>;
  settings: Record<string, any>;

export type IntegrationCategory = 'crm' | 'ats';
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
<<<<<<< HEAD


ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

'
export type IntegrationCategory = 'crm' | 'ats';
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

=======

export type IntegrationCategory = 'crm' | 'ats';

export type IntegrationCategory = 'crm' | 'ats';
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type IntegrationProviderId =;'
  | 'salesforce';'
  | 'hubspot';'
  | 'zoho';'
  | 'pipedrive';'
  | 'greenhouse';'
  | 'lever';

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export type IntegrationCategory = 'crm' | 'ats';
=======
'
export type IntegrationCategory = 'crm' | 'ats';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationProviderId ='
  | 'salesforce''
  | 'hubspot''
  | 'zoho''
  | 'pipedrive''
  | 'greenhouse''
  | 'lever'
<<<<<<< HEAD
<<<<<<< HEAD
=======
';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  | 'workable';
'
  | 'bamboohr';
'
  | 'workable';'
  | 'bamboohr';
<<<<<<< HEAD
export interface IntegrationProviderMeta {
<<<<<<< HEAD

  id: IntegrationProviderId, name: string,;


origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
export interface IntegrationProviderMeta {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string;
}



<<<<<<< HEAD
;
export interface IntegrationProviderMeta {
<<<<<<< HEAD
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
;
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
  id: IntegrationProviderId, name: string
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: IntegrationProviderId, name: string,;
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}
origin/cursor/expand-services-advertise-and-build-project-c28b
export type IntegrationCategory = any;
  events: ZapierEvent[]
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
  id: IntegrationProviderId, name: string
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
export interface SyncRules {
=======

  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string;
}

export interface SyncRules {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  // CRM rules;
  autoCreateContacts?: boolean;'
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules;
  autoSyncApplicants?: boolean;
<<<<<<< HEAD

<<<<<<< HEAD

origin/cursor/expand-services-advertise-and-build-project-c28b
autoUploadResumes?: boolean;

export interface ProviderConnection {
  providerId: IntegrationProviderId;
  status: SyncStatus;
  accessToken?: string;
  refreshToken?: string;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;
<<<<<<< HEAD

lastError?: string | null;
origin/cursor/automate-test-improve-and-merge-code-2533

<<<<<<< HEAD
export interface SyncLogEntry {
  lastError?: string | null;
export interface SyncLogEntry {;
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;'
  level: 'info' | 'warn' | 'error';
  action: string;
<<<<<<< HEAD

<<<<<<< HEAD
  details?: Record < string, any>;
;

origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface ManualOverride {
=======
export interface ManualOverride {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

<<<<<<< HEAD
;

export interface ZapierEvent {
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {;
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
=======

  id: string;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched';
  timestamp: number;

  payload: Record < string, any>;
;

<<<<<<< HEAD
export interface IntegrationsState {
<<<<<<< HEAD

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
<<<<<<< HEAD
export interface IntegrationsState {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {;
  id: string;'
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
<<<<<<< HEAD
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

<<<<<<< HEAD
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
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  lastError?: string | null
}
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
=======
  events: ZapierEvent[];  events: ZapierEvent[]
}

}
}
}
}
}

export interface IntegrationsState {;

  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface SyncLogEntry {
  id: string, timestamp: number,
=======

  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];


export interface SyncLogEntry {}
  id: string, timestamp: number,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  providerId: IntegrationProviderId, level: 'info' | 'warn' | 'error',
  action: string,
  details?: Record<string, any>
}
export interface ManualOverride {}
  jobId: string, disableCrmSync?: boolean,;
  disableAtsSync?: boolean;
}
export interface ZapierEvent {'
  id: string, type: 'zion.job.posted' | 'zion.talent.matched',
  timestamp: number,
  payload: Record<string, any>
}
export interface IntegrationsState {}
  connections: ProviderConnection[], logs: SyncLogEntry[],
  overrides: ManualOverride[],
  events: ZapierEvent[]
}
}
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b
  events: ZapierEvent[];
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
pr-12243
=======



';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
