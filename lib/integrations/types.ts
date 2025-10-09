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
  category: 'crm' | 'ats';
  description: string;
}


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
  createdAt: number;
  updatedAt: number;
}
  expiresAt?: number;
}

export interface ProviderConnection {
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

export interface ManualOverride {
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
}












export interface ZapierEvent {
  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
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

export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: 'crm' | 'ats';
  description: string;
  payload: Record<string, any>;
}

export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
}
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
