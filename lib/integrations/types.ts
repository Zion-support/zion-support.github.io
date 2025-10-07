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
  lastSync?: Date;
  config: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export interface SyncLogEntry {
  id: string;
  connectionId: string;
  action: string;
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
  overrides: IntegrationOverride[];
  events: IntegrationEvent[];
}