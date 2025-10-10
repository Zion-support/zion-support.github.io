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

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type SyncStatus = 'connected' | 'warning' | 'disconnected';
=======
export type SyncStatus = 'connected' | 'warning' | 'disconnected';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174

export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
<<<<<<< HEAD
  category: 'crm' | 'ats';
  description: string;

export type SyncStatus = 'connected' | 'warning' | 'disconnected';
,
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
,
}

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

}

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export interface IntegrationProviderMeta {
  id: string;
  name: string;
  category: 'crm' | 'ats' | 'hr';
  description: string;
}
}

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export interface ProviderConnection {
  id: string;
  providerId: IntegrationProviderId;
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
  config?: Record<string, any>;
}
=======
  category: 'crm' | 'ats' | 'hr';
  description: string;
  logoUrl?: string;
  websiteUrl?: string;
  apiDocsUrl?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
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
<<<<<<< HEAD
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

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

  status: SyncStatus;
  lastSync?: number;
  createdAt: number;
  expiresAt?: number;
}

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

}

  status: SyncStatus;
  lastSync?: number;
  createdAt: number;
}

}

  lastSync?: Date;
  config: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
}

export interface SyncLogEntry {
  id: string;
  connectionId: string;
  action: string;
  details?: Record<string, any>;
<<<<<<< HEAD
}

  details?: Record<string, any>;
}

  details?: Record<string, any>;
}

  details?: Record<string, any>;
}

  details?: Record<string, any>;
}

  details?: Record<string, any>;
}

  details?: Record<string, any>;
}

  details?: Record<string, any>;
}

  details?: Record<string, any>;
}

  details?: Record<string, any>;
}

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
export interface IntegrationProviderMeta {,
=======
  timestamp: number;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  status: 'success' | 'error' | 'warning';
  message: string;

}

export interface ManualOverride {/* TODO: Fix JSX expression */}
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

export interface IntegrationEvent {/* TODO: Fix JSX expression */}
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
  lastError?: string | null;,
}


<<<<<<< HEAD
export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
}
  payload: Record<string, any>;
}

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
}
  logoUrl?: string;
  websiteUrl?: string;
  apiDocsUrl?: string;
}
  payload: Record<string, any>;
}
}

export interface IntegrationsState {
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
  lastError?: string | null;,
}
}
}
  overrides: IntegrationOverride[];
  events: IntegrationEvent[];
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
