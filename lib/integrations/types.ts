<<<<<<< HEAD
export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationProviderId =;
  | 'salesforce';
  | 'hubspot';
  | 'zoho';
  | 'pipedrive';
  | 'greenhouse';
  | 'lever';
export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationCategory = 'crm' | 'ats';
=======
>>>>>>> main
export type IntegrationProviderId =
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'lever'
<<<<<<< HEAD
  | 'workable';
  | 'bamboohr';
  | 'workable';
  | 'bamboohr';
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string
  id: IntegrationProviderId, name: string,;
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
;
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string,;
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}
export interface SyncRules {
  // CRM rules;
  autoCreateContacts?: boolean;
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules;
  autoSyncApplicants?: boolean;
  autoUploadResumes?: boolean;
export interface ProviderConnection {
export interface ProviderConnection {;
  providerId: IntegrationProviderId;
  status: SyncStatus;  accessToken?: string;  refreshToken?: string;
  | 'workable'
  | 'bamboohr';
export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: IntegrationCategory;
  description?: string;
  oauthScopes?: string[];
  icon?: string;
}
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export interface SyncRules {
  // CRM rules
  autoCreateContacts?: boolean;
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules
  autoSyncApplicants?: boolean;
  autoUploadResumes?: boolean;
=======
  | 'workable'
  | 'bamboohr';




export type SyncStatus = 'connected' | 'warning' | 'disconnected';


export type SyncStatus = 'connected' | 'warning' | 'disconnected';


export type SyncStatus = 'connected' | 'warning' | 'disconnected';


export type SyncStatus = 'connected' | 'warning' | 'disconnected';


export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: 'crm' | 'ats';
  description: string;

export type SyncStatus = 'connected' | 'warning' | 'disconnected';


export type SyncStatus = 'connected' | 'warning' | 'disconnected';

}


export type SyncStatus = 'connected' | 'warning' | 'disconnected';


export type SyncStatus = 'connected' | 'warning' | 'disconnected';


export type SyncStatus = 'connected' | 'warning' | 'disconnected';

}


export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export interface IntegrationProviderMeta {
  id: string;
  name: string;
  category: 'crm' | 'ats' | 'hr';
  description: string;
}
}


export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export interface ProviderConnection {
  id: string;
  providerId: IntegrationProviderId;
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
  config?: Record<string, any>;
}
>>>>>>> main
}
export interface ProviderConnection {
  id: string;
  providerId: IntegrationProviderId;
  name: string;
  status: SyncStatus;
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: number;
  lastSyncAt?: number;
<<<<<<< HEAD
export interface SyncLogEntry {
  lastError?: string | null;
export interface SyncLogEntry {;
  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;
  details?: Record<string, any>;
export interface ManualOverride {
  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
export interface ZapierEvent {
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
export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
export interface ZapierEvent {;
  lastError?: string | null;
}
export interface SyncLogEntry {
=======
  createdAt: number;
  updatedAt: number;
}
  expiresAt?: number;
}

export interface ProviderConnection {
>>>>>>> main
  id: string;
  providerId: IntegrationProviderId;
  name: string;
  status: SyncStatus;
}

  status: SyncStatus;
  lastSync?: number;
}

  status: SyncStatus;
  lastSync?: number;
  createdAt: number;
  updatedAt: number;
  status: SyncStatus;
  lastSync?: number;
  config?: Record<string, any>;
  expiresAt?: number;
  status: SyncStatus;
  lastSync?: number;
  createdAt: number;
  updatedAt: number;
  expiresAt?: number;
  status: SyncStatus;
  lastSync?: number;
  config?: Record<string, any>;
}


export type SyncStatus = 'connected' | 'warning' | 'disconnected';

  status: SyncStatus;
  lastSync?: number;
  createdAt: number;
  expiresAt?: number;
}


export type SyncStatus = 'connected' | 'warning' | 'disconnected';

}

  status: SyncStatus;
  lastSync?: number;
  createdAt: number;
}

}

  lastSync?: Date;
  config: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export interface SyncLogEntry {
  id: string;
  connectionId: string;
  action: string;
  details?: Record<string, any>;
}
<<<<<<< HEAD
=======

  details?: Record<string, any>;
}

  details?: Record<string, any>;
}

  details?: Record<string, any>;
}

  details?: Record<string, any>;
}

  details?: Record<string, any>;
}

  details?: Record<string, any>;
}

  details?: Record<string, any>;
}

  details?: Record<string, any>;
}

  details?: Record<string, any>;
}

  details?: Record<string, any>;
}

>>>>>>> main
export interface ManualOverride {
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
}
<<<<<<< HEAD
=======












>>>>>>> main
export interface ZapierEvent {
  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
<<<<<<< HEAD
  payload: Record<string, any>;
export interface IntegrationsState {
export interface IntegrationsState {;
=======
export interface IntegrationProviderMeta {
  status: 'success' | 'error' | 'warning';
  message: string;
  details?: Record<string, unknown>;
  timestamp: Date;
}

export interface IntegrationOverride {
  id: string;
  connectionId: string;
  field: string;
  value: unknown;
  reason: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IntegrationEvent {
  id: string;
  type: 'sync' | 'error' | 'warning' | 'connection';
  connectionId?: string;
  message: string;
  details?: Record<string, unknown>;
  timestamp: Date;
}

export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];

export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: 'crm' | 'ats';
  description: string;
  payload: Record<string, any>;
}

  payload: Record<string, any>;
}

export interface IntegrationProviderMeta {
  id: string;
  name: string;
  category: 'crm' | 'ats';
  description: string;
}

}

  payload: Record<string, any>;
}

  payload: Record<string, any>;
}

export interface IntegrationsState {
>>>>>>> main
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
  lastError?: string | null;
}
}
}
}
}
  payload: Record<string, any>;
}
<<<<<<< HEAD
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
=======

export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: 'crm' | 'ats';
  description: string;
  payload: Record<string, any>;
>>>>>>> main
}
export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
}
<<<<<<< HEAD
=======
  payload: Record<string, any>;
}

export interface ProviderConnection {
  id: string;
  providerId: IntegrationProviderId;
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
  status: SyncStatus;
  lastSync?: number;
  createdAt: number;
}

export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: 'crm' | 'ats' | 'hr';
  description: string;
}
  logoUrl?: string;
  websiteUrl?: string;
  apiDocsUrl?: string;
}
  payload: Record<string, any>;
}
}

export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
  lastError?: string | null;
}
}
}
  overrides: IntegrationOverride[];
  events: IntegrationEvent[];
}
>>>>>>> main
