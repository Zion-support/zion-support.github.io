export type IntegrationProviderId = 
  | 'salesforce' 
  | 'hubspot' 
  | 'zoho' 
  | 'pipedrive' 
  | 'greenhouse' 
  | 'lever' 
  | 'workable' 
  | 'bamboohr';
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

=======

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: 'crm' | 'ats';
  description: string;
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
=======

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
export interface IntegrationProviderMeta {
  id: string;
  name: string;
  category: 'crm' | 'ats' | 'hr';
  description: string;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
=======
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
export interface ProviderConnection {
  id: string;
  providerId: IntegrationProviderId;
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
  status: SyncStatus;
  lastSync?: number;
}

=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
  status: SyncStatus;
  lastSync?: number;
  createdAt: number;
  updatedAt: number;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
  status: SyncStatus;
  lastSync?: number;
  config?: Record<string, any>;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
  expiresAt?: number;
  status: SyncStatus;
  lastSync?: number;
  createdAt: number;
  updatedAt: number;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
  expiresAt?: number;
  status: SyncStatus;
  lastSync?: number;
  config?: Record<string, any>;
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
  status: SyncStatus;
  lastSync?: number;
  createdAt: number;
=======
  expiresAt?: number;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
  status: SyncStatus;
  lastSync?: number;
  createdAt: number;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
export interface SyncLogEntry {
  id: string;
  timestamp: number;
  providerId: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;
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
=======
  details?: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
  details?: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
  details?: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
  details?: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
  details?: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
  details?: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
  details?: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
export interface ManualOverride {
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
}
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
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
export interface ZapierEvent {
  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
  payload: Record<string, any>;
}

export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
}
=======
  payload: Record<string, any>;
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: 'crm' | 'ats';
  description: string;
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
=======
  payload: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
  payload: Record<string, any>;
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
  lastError?: string | null;
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
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
}
=======
  payload: Record<string, any>;
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f

export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: 'crm' | 'ats';
  description: string;
=======
  payload: Record<string, any>;
}

export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
}
=======
  payload: Record<string, any>;
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9

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
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
  logoUrl?: string;
  websiteUrl?: string;
  apiDocsUrl?: string;
}
=======
  payload: Record<string, any>;
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f

export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
  lastError?: string | null;
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
