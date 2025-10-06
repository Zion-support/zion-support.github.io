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
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
export interface ProviderConnection {
  id: string;
  providerId: IntegrationProviderId;
  accessToken: string;
  refreshToken?: string;
<<<<<<< HEAD
  status: SyncStatus;
  lastSync?: number;
  createdAt: number;
  updatedAt: number;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
  expiresAt?: number;
  status: SyncStatus;
  lastSync?: number;
  createdAt: number;
<<<<<<< HEAD
=======
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

<<<<<<< HEAD
export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: 'crm' | 'ats';
  description: string;
}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
  lastError?: string | null;
}