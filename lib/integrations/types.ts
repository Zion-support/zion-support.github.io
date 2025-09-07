<<<<<<< HEAD

export type IntegrationCategory = 'crm' | 'ats';''
export type IntegrationCategory = 'crm' | 'ats';''
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';'
export type IntegrationProviderId =;'
  | 'salesforce';''
  | 'hubspot';''
  | 'zoho';''
  | 'pipedrive';''
  | 'greenhouse';''
  | 'lever';''
export type IntegrationCategory = 'crm' | 'ats';''
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';'
export type IntegrationProviderId ='
  | 'salesforce'''
  | 'hubspot'''
  | 'zoho'''
  | 'pipedrive'''
  | 'greenhouse'''
  | 'lever'''
  | 'workable';''
  | 'bamboohr';''
  | 'workable';''
  | 'bamboohr';'
export interface IntegrationProviderMeta {
  // TODO: Implement
}
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string;
}



;
export interface IntegrationProviderMeta {
  // TODO: Implement
}
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
  id: IntegrationProviderId, name: string;,
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string;
}
export interface SyncRules {
  // TODO: Implement
}
  // CRM rules;
  autoCreateContacts?: boolean;'
  pushNotesMode?: 'auto' | 'manual';'
  // ATS rules;
=======
export type IntegrationCategory = 'crm' | 'ats';

export type IntegrationProviderId =
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'lever'
  | 'workable'
  | 'bamboohr';

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: IntegrationCategory;
  description?: string;
  oauthScopes?: string[];
  icon?: string;
}

export interface SyncRules {
  // CRM rules
  autoCreateContacts?: boolean;
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules
>>>>>>> a2c6a2cc86d6e83a9083c45bfcf5a35f741b3208
  autoSyncApplicants?: boolean;
}

export interface ProviderConnection {
  id: string;
  providerId: IntegrationProviderId;
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;
<<<<<<< HEAD
  id: string;,
  timestamp: number;
  provider_id: IntegrationProviderId;,'
  level: 'info' | 'warn' | 'error';'
=======
}

export interface SyncLogEntry {
  id: string;
  timestamp: number;
  providerId: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
>>>>>>> a2c6a2cc86d6e83a9083c45bfcf5a35f741b3208
  action: string;
  details?: Record<string, any>;
}

export interface ManualOverride {
<<<<<<< HEAD
  // TODO: Implement
}
  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ManualOverride {;
=======
>>>>>>> a2c6a2cc86d6e83a9083c45bfcf5a35f741b3208
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
}

<<<<<<< HEAD
export interface ZapierEvent {;
  id: string;,'
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched';'
  timestamp: number;,
  payload: Record < string, any>;
;

export interface IntegrationsState {
  // TODO: Implement
}
export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {;
  id: string;,'
  type: 'zion.job.posted' | 'zion.talent.matched';'
  timestamp: number;,
  payload: Record<string, any>;
</string>
  details?: Record<string, any>
</string>
  payload: Record<string, any>
</string>'
=======
export interface ZapierEvent {
  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;
}

export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
}
>>>>>>> a2c6a2cc86d6e83a9083c45bfcf5a35f741b3208
