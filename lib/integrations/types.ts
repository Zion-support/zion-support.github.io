export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationProviderId =
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

ursor/fix-website-loading-errors-and-merge-6662

export type IntegrationCategory = 'crm' | 'ats';



export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationCategory = 'crm' | 'ats';

<<<<<<< HEAD
=======
'
>>>>>>> origin/chore/fix-lint-and-merge
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export type IntegrationCategory = 'crm' | 'ats';

export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type IntegrationProviderId =;'
  | 'salesforce';'
  | 'hubspot';'
  | 'zoho';'
  | 'pipedrive';'
  | 'greenhouse';'
  | 'lever';
<<<<<<< HEAD
=======

export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationProviderId =
>>>>>>> merged-prs-20250907-203621
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
<<<<<<< HEAD
=======
  | 'lever'
  | 'workable';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export type IntegrationCategory = 'crm' | 'ats';

export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
<<<<<<< HEAD
export type IntegrationProviderId =
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
<<<<<<< HEAD
  | 'lever'
  | 'workable'
  | 'bamboohr',
=======
>>>>>>> merged-prs-20250907-203621
  | 'lever'
  | 'workable'
  | 'bamboohr',

<<<<<<< HEAD
=======
=======
export type IntegrationProviderId ='
  | 'salesforce''
  | 'hubspot''
  | 'zoho''
  | 'pipedrive''
  | 'greenhouse''
>>>>>>> origin/chore/fix-lint-and-merge
  | 'lever'

  | 'workable';
'
  | 'bamboohr';
'
  | 'workable';'
  | 'bamboohr';

  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string;
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: IntegrationProviderId, name: string,;
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
export type IntegrationCategory = any;
  events: ZapierEvent[]
}
origin/cursor/automate-test-improve-and-merge-code-2533

=======



<<<<<<< HEAD
  | 'bamboohr';
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string
  id: IntegrationProviderId, name: string,;
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export interface SyncRules {

  // CRM rules;
  autoCreateContacts?: boolean;'
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules;
  autoSyncApplicants?: boolean;

<<<<<<< HEAD
=======

<<<<<<< HEAD
  autoUploadResumes?: boolean
}
export interface ProviderConnection {
  providerId: IntegrationProviderId, status: SyncStatus,
  accessToken?: string;
  refreshToken?: string;
  autoUploadResumes?: boolean;
export interface ProviderConnection {

export interface ProviderConnection {;
  providerId: IntegrationProviderId;
  status: SyncStatus;  accessToken?: string;  refreshToken?: string;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;
<<<<<<< HEAD
=======

<<<<<<< HEAD
lastError?: string | null;
origin/cursor/automate-test-improve-and-merge-code-2533

export interface SyncLogEntry {
<<<<<<< HEAD
  lastError?: string | null;
export interface SyncLogEntry {;

origin/cursor/expand-services-advertise-and-build-project-c28b


export interface SyncLogEntry {

  lastError?: string | null;
export interface SyncLogEntry {;


=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  lastError?: string | null;
export interface SyncLogEntry {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;


origin/cursor/expand-services-advertise-and-build-project-c28b
=======
  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;'
  level: 'info' | 'warn' | 'error';
  action: string;
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
  details?: Record < string, any>;
;
  details?: Record<string, any>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface ManualOverride {

  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
<<<<<<< HEAD
;
=======

<<<<<<< HEAD
=======
;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface ZapierEvent {

export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {;
  id: string;
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched';
  timestamp: number;
<<<<<<< HEAD
=======

  payload: Record < string, any>;
;

export interface IntegrationsState {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
<<<<<<< HEAD
  disableAtsSync?: boolean;export interface ZapierEvent  {id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];  events: ZapierEvent[];
}}
}
}
}
}export interface IntegrationsState  {ursor/fix-website-loading-errors-and-merge-6662;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];lastError?: string | null;
}export interface SyncLogEntry  {id: string, timestamp: number,providerId: IntegrationProviderId, level: 'info' | 'warn' | 'error',action: string,details?: Record<string, any>;
}
export interface ManualOverride  {jobId: string, disableCrmSync?: boolean,disableAtsSync?: boolean;
  events: ZapierEvent[];  events: ZapierEvent[]
}


  lastError?: string | null
}
  lastError?: string | null
}
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD

export type IntegrationCategory = $2;
export type IntegrationProviderId = $2;
>>>>>>> merged-prs-20250907-203621
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}


export interface SyncRules {
  // CRM rules
  autoCreateContacts?: boolean,
  pushNotesMode?: 'auto' | 'manual',
  // ATS rules
  autoSyncApplicants?: boolean;
  autoUploadResumes?: boolean;

export interface ProviderConnection {
  providerId: IntegrationProviderId;
  status: SyncStatus;  accessToken?: string;  refreshToken?: string;
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
=======
>>>>>>> origin/chore/fix-lint-and-merge
  disableAtsSync?: boolean;

export interface ZapierEvent {;
  id: string;'
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;
<<<<<<< HEAD

export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];  events: ZapierEvent[]
<<<<<<< HEAD
=======
  | 'salesforce
  | hubspot'
  | 'zoho
  | pipedrive'
  | 'greenhouse
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;

<<<<<<< HEAD

origin/cursor/expand-services-advertise-and-build-project-c28b

export interface ManualOverride {
  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

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
  disableAtsSync?: boolean;export interface ZapierEvent  {id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];  events: ZapierEvent[];
}}
}
}export interface IntegrationsState  {ursor/fix-website-loading-errors-and-merge-6662;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];lastError?: string | null;
}export interface SyncLogEntry  {id: string, timestamp: number,providerId: IntegrationProviderId, level: 'info' | 'warn' | 'error',action: string,details?: Record<string, any>;
}
export interface ManualOverride  {jobId: string, disableCrmSync?: boolean,disableAtsSync?: boolean;
  events: ZapierEvent[];  events: ZapierEvent[]
}


  lastError?: string | null
}
  lastError?: string | null
}
origin/cursor/expand-services-advertise-and-build-project-c28b


export type IntegrationCategory = $2;
export type IntegrationProviderId = $2;
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}


export interface SyncRules {
  // CRM rules
  autoCreateContacts?: boolean,
  pushNotesMode?: 'auto' | 'manual',
  // ATS rules
  autoSyncApplicants?: boolean;
  autoUploadResumes?: boolean;

export interface ProviderConnection {
  providerId: IntegrationProviderId;
  status: SyncStatus;  accessToken?: string;  refreshToken?: string;
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
  events: ZapierEvent[];  events: ZapierEvent[]
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];

<<<<<<< HEAD
=======

<<<<<<< HEAD
  payload: Record<string, any>;
export interface IntegrationsState {

export interface IntegrationsState {;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  lastError?: string | null
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
origin/cursor/expand-services-advertise-and-build-project-c28b


  events: ZapierEvent[];  events: ZapierEvent[];
}
  events: ZapierEvent[];  events: ZapierEvent[];
}

}
}
}
}
}
=======
=======
  lastError?: string | null
}
export interface SyncLogEntry {
  id: string, timestamp: number,

  providerId: IntegrationProviderId, level: 'info' | 'warn' | 'error',
  action: string,
  details?: Record<string, any>
}
<<<<<<< HEAD
export interface ManualOverride {}
  jobId: string, disableCrmSync?: boolean,;
  disableAtsSync?: boolean;
>>>>>>> origin/chore/fix-lint-and-merge
}
export interface ZapierEvent {'
=======
export interface ManualOverride {
  jobId: string, disableCrmSync?: boolean,
  disableAtsSync?: boolean
}
export interface ZapierEvent {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id: string, type: 'zion.job.posted' | 'zion.talent.matched',
  timestamp: number,
  payload: Record<string, any>
}
<<<<<<< HEAD
export interface IntegrationsState {}
=======
export interface IntegrationsState {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  connections: ProviderConnection[], logs: SyncLogEntry[],
  overrides: ManualOverride[],
  events: ZapierEvent[]
}
<<<<<<< HEAD
}
=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  events: ZapierEvent[];  events: ZapierEvent[];
>>>>>>> merged-prs-20250907-203621
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
