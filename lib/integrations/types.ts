
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
  autoSyncApplicants?: boolean;
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;
  id: string;,
  timestamp: number;
  provider_id: IntegrationProviderId;,'
  level: 'info' | 'warn' | 'error';'
  action: string;
export interface ManualOverride {
  // TODO: Implement
}
  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

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