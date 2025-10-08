export type IntegrationProviderId =
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'lever'
  | 'workable'
  | 'bamboohr';
export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: 'crm' | 'ats';
  description: string;
export interface ProviderConnection {
  id: string;
  providerId: IntegrationProviderId;
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
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

}

export interface SyncLogEntry {
  id: string;
  connectionId: string;
  action: string;
export interface ManualOverride {
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
}
export interface ZapierEvent {
  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
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
export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
  lastError?: string | null;
}
}

export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: 'crm' | 'ats';
  description: string;

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

export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
  lastError?: string | null;
