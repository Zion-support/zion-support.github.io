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
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
export interface ProviderConnection {
  id: string;
  providerId: IntegrationProviderId;
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
  status: SyncStatus;
  lastSync?: number;
>>>>>>> b0d6dda8406c2e54af3529a18b3e8c5f6ab37739
  status: SyncStatus;
  lastSync?: number;
  createdAt: number;
  updatedAt: number;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
  expiresAt?: number;
  status: SyncStatus;
  lastSync?: number;
  createdAt: number;
  updatedAt: number;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
}
export interface SyncLogEntry {
  id: string;
  timestamp: number;
  providerId: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;
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
  payload: Record<string, any>;
}
export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: 'crm' | 'ats';
  description: string;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
  lastError?: string | null;
}