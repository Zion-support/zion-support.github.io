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
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
export interface ProviderConnection {
  id: string;
  providerId: IntegrationProviderId;
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
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
export interface SyncLogEntry {
  id: string;
  timestamp: number;
  providerId: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;
<<<<<<< HEAD
  details?: Record<string, unknown>;
}
=======
  details?: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
export interface ManualOverride {
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
export interface ZapierEvent {
  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
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
export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
  lastError?: string | null;
}