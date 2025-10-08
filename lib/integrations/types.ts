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

export interface IntegrationConfig {
  providerId: IntegrationProviderId;
  enabled: boolean;
  settings: Record<string, unknown>;
}

export interface SyncResult {
  success: boolean;
  recordsProcessed: number;
  errors?: string[];
  timestamp: number;
}

export interface IntegrationData {
  [key: string]: unknown;
}

export interface IntegrationAuth {
  type: 'oauth2' | 'apiKey' | 'basic';
  credentials: Record<string, string>;
}

export interface IntegrationWebhook {
  url: string;
  events: string[];
  secret?: string;
}

export interface IntegrationMetrics {
  totalSyncs: number;
  successfulSyncs: number;
  failedSyncs: number;
  lastSyncDuration?: number;
  averageSyncDuration?: number;
}