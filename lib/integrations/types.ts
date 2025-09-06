<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export type IntegrationCategory = 'crm' | 'ats';
<<<<<<< HEAD
<<<<<<< HEAD


export type IntegrationCategory = 'crm' | 'ats';

=======
<<<<<<< HEAD
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export type IntegrationCategory = 'crm' | 'ats';
=======


ursor/fix-website-loading-errors-and-merge-6662

export type IntegrationCategory = 'crm' | 'ats';
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type IntegrationProviderId =;
  | 'salesforce';
  | 'hubspot';
  | 'zoho';
  | 'pipedrive';
  | 'greenhouse';
<<<<<<< HEAD
<<<<<<< HEAD
  | 'lever';
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  | 'lever';

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  | 'workable';
=======
  | 'lever';  | 'workable';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

  | 'bamboohr';

  | 'workable';
  | 'bamboohr';
export interface IntegrationProviderMeta {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  id: IntegrationProviderId, name: string
  id: IntegrationProviderId, name: string,;
=======
<<<<<<< HEAD
=======

  id: IntegrationProviderId, name: string,;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  icon?: string
}

;
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
<<<<<<< HEAD
=======
=======
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  icon?: string
}
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
export type IntegrationCategory = any;
  events: ZapierEvent[]
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  id: IntegrationProviderId, name: string,;


origin/cursor/expand-services-advertise-and-build-project-c28b
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}



;
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string,;

  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string

}
origin/cursor/expand-services-advertise-and-build-project-c28b

export type IntegrationCategory = any;
  events: ZapierEvent[]
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
export interface SyncRules {
  // CRM rules;
  autoCreateContacts?: boolean;
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules;
<<<<<<< HEAD
  autoSyncApplicants?: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  autoUploadResumes?: boolean;
export interface ProviderConnection {

export interface ProviderConnection {;
  providerId: IntegrationProviderId;
  status: SyncStatus;  accessToken?: string;  refreshToken?: string;
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
autoUploadResumes?: boolean;

export interface ProviderConnection {
  providerId: IntegrationProviderId;
  status: SyncStatus;
  accessToken?: string;
  refreshToken?: string;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

<<<<<<< HEAD
=======
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
lastError?: string | null;
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export interface SyncLogEntry {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
  lastError?: string | null;
export interface SyncLogEntry {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  lastError?: string | null;
export interface SyncLogEntry {;

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  id: string;
=======
  autoSyncApplicants?: boolean;  id: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  details?: Record<string, any>;
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

  details?: Record < string, any>;
;

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
export interface ManualOverride {
  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

;

export interface ZapierEvent {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
origin/cursor/expand-services-advertise-and-build-project-c28b


export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508

  id: string;
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched';
  timestamp: number;

export interface IntegrationsState {
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

<<<<<<< HEAD
export interface ZapierEvent {;
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;
<<<<<<< HEAD
export interface IntegrationsState {

export interface IntegrationsState {;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
<<<<<<< HEAD
<<<<<<< HEAD
  events: ZapierEvent[];  events: ZapierEvent[]
}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

}
}
}
}
}

export interface IntegrationsState {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];

<<<<<<< HEAD
=======

}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

  lastError?: string | null
}
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface ZapierEvent {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  events: ZapierEvent[];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

  events: ZapierEvent[];
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
