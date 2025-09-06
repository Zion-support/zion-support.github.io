
export type IntegrationCategory = 'crm' | 'ats';
<<<<<<< HEAD

export type IntegrationCategory = 'crm' | 'ats';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

export type IntegrationCategory = 'crm' | 'ats';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type IntegrationProviderId =;
  | 'salesforce';
  | 'hubspot';
  | 'zoho';
  | 'pipedrive';
  | 'greenhouse';
  | 'lever';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationProviderId =
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'lever'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  | 'workable';

  | 'bamboohr';

  | 'workable';
  | 'bamboohr';
export interface IntegrationProviderMeta {
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}



<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
;
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
<<<<<<< HEAD
=======
=======
=======
;
export interface IntegrationProviderMeta {
<<<<<<< HEAD
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
=======
<<<<<<< HEAD
  id: IntegrationProviderId, name: string
=======
  id: IntegrationProviderId, name: string,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export interface SyncRules {
  // CRM rules;
  autoCreateContacts?: boolean;
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules;
  autoSyncApplicants?: boolean;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


export interface SyncLogEntry {
=======
  lastError?: string | null;
export interface SyncLogEntry {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

  details?: Record < string, any>;
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export interface ManualOverride {
  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
;

export interface ZapierEvent {
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  id: string;
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched';
  timestamp: number;

  payload: Record < string, any>;
;

export interface IntegrationsState {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======
  lastError?: string | null
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
