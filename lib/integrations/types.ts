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
  category: 'crm' | 'ats' | 'hr';
  description: string;
  logoUrl?: string;
  websiteUrl?: string;
  apiDocsUrl?: string;
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
  config?: Record<string, any>;
}

export interface SyncLogEntry {
  id: string;
  connectionId: string;
  action: string;
  details?: Record<string, any>;
  timestamp: number;
  status: 'success' | 'error' | 'warning';
  message: string;
}

export interface ManualOverride {
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
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
  lastError?: string | null;
}