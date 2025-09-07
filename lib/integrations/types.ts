'
export type IntegrationCategory = 'crm' | 'ats';

export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type IntegrationProviderId =;'
  | 'salesforce';'
  | 'hubspot';'
  | 'zoho';'
  | 'pipedrive';'
  | 'greenhouse';'
  | 'lever';

export type IntegrationCategory = 'crm' | 'ats';

export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationProviderId ='
  | 'salesforce''
  | 'hubspot''
  | 'zoho''
  | 'pipedrive''
  | 'greenhouse''
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
  autoCreateContacts?: boolean;'
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules;
  autoSyncApplicants?: boolean;

  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;

  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;'
  level: 'info' | 'warn' | 'error';
  action: string;

export interface ManualOverride {

  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

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
  disableAtsSync?: boolean;

export interface ZapierEvent {;
  id: string;'
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];

  lastError?: string | null
}
origin/cursor/expand-services-advertise-and-build-project-c28b

export interface SyncLogEntry {
  id: string, timestamp: number,

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