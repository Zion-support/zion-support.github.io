export type IntegrationProviderId = 
  | 'salesforce' 
  | 'hubspot' 
  | 'zoho' 
  | 'pipedrive' 
  | 'greenhouse' 
  | 'lever' 
  | 'workable' 
  | 'bamboohr';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
=======

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: 'crm' | 'ats';
  description: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
export interface ProviderConnection {
  id: string;
  providerId: IntegrationProviderId;
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  status: SyncStatus;
  lastSync?: number;
<<<<<<< HEAD
  createdAt: number;
  updatedAt: number;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-bcb8
=======
=======
=======
  config?: Record<string, any>;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
}
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======
  expiresAt?: number;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
}

export interface ProviderConnection {
  id: string;
  providerId: IntegrationProviderId;
  name: string;
  status: SyncStatus;
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
  lastSyncAt?: number;
  createdAt: number;
<<<<<<< HEAD
=======
  updatedAt: number;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
  status: SyncStatus;
  lastSync?: number;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
  status: SyncStatus;
  lastSync?: number;
  createdAt: number;
  updatedAt: number;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
  status: SyncStatus;
  lastSync?: number;
  config?: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
export interface SyncLogEntry {
  id: string;
  timestamp: number;
  providerId: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  details?: Record<string, unknown>;
}
=======
  details?: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
  details?: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
  details?: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
  details?: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
  details?: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
  details?: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
export interface ManualOverride {
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
export interface ZapierEvent {
  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  payload: Record<string, unknown>;
}
=======
  payload: Record<string, any>;
}
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-bcb8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
export interface IntegrationProviderMeta {
  id: string;
  name: string;
  category: 'crm' | 'ats' | 'hr';
  description: string;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
=======
  payload: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
  payload: Record<string, any>;
=======
  payload: Record<string, any>;
}

export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
}
=======
  payload: Record<string, any>;
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58

export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: 'crm' | 'ats';
  description: string;
<<<<<<< HEAD
<<<<<<< HEAD
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
  payload: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
  payload: Record<string, any>;
}

export interface IntegrationProviderMeta {
  id: string;
  name: string;
  category: 'crm' | 'ats';
  description: string;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
  lastError?: string | null;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
}
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
