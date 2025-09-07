export type IntegrationProviderId = 
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'workable';

export type IntegrationCategory = 'crm' | 'ats' | 'email' | 'calendar';

export interface IntegrationConfig {
  id: IntegrationProviderId;
  type: string;
  name: string;
  category: IntegrationCategory;
  description?: string;
  oauthScopes?: string[];
  icon?: string;
}

export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
}

export interface ProviderConnection {
  id: string;
  provider_id: IntegrationProviderId;
  name: string;
  status: 'active' | 'inactive' | 'error';
  lastSync?: string;
  autoCreateContacts?: boolean;
}

export interface ManualOverride {
  id: string;
  connectionId: string;
  field: string;
  value: any;
  reason: string;
}

export interface ZapierEvent {
  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  event_type: string;
  data: Record<string, any>;
}

export interface SyncLogEntry {
  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;
  details: Record<string, any>;
}

export interface BaseConnector {
  connect(config: any): Promise<boolean>;
  disconnect(): Promise<boolean>;
  sync(data: any): Promise<any>;
}
