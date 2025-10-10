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
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
<<<<<<< HEAD

export interface IntegrationProviderMeta {
    id: IntegrationProviderId;
  name: string;
  category: 'crm' | 'ats'
  description: string
export type SyncStatus = 'connected' | 'warning' | 'disconnected',
,
export type SyncStatus = 'connected' | 'warning' | 'disconnected'
  }

=======
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export interface IntegrationProviderMeta {
}
  id: IntegrationProviderId;
  name: string;
  category: 'crm' | 'ats';
  description: string;
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
,
export type SyncStatus = 'connected' | 'warning' | 'disconnected'};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
<<<<<<< HEAD

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

}

=======
export type SyncStatus = 'connected' | 'warning' | 'disconnected'};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export interface IntegrationProviderMeta {
<<<<<<< HEAD
    id: string
  name: string
  category: 'crm' | 'ats' | 'hr',
  description: string
  }
}

=======
}
  id: string;
  name: string;
  category: 'crm' | 'ats' | 'hr';
  description: string};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export interface ProviderConnection {
}
  id: string;
  providerId: IntegrationProviderId;
<<<<<<< HEAD
  accessToken: string
  refreshToken?: string
  expiresAt?: number,
  config?: Record<string></string>
}
  category: 'crm' | 'ats' | 'hr';
  description: string;
  logoUrl?: string
  websiteUrl?: string
  apiDocsUrl?: string,
}

=======
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
  config?: Record<string, any>;</string>
};
  category: 'crm' | 'ats' | 'hr';
  description: string;
  logoUrl?: string;
  websiteUrl?: string;
  apiDocsUrl?: string};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export interface ProviderConnection {
}
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
  config?: Record<string>
  expiresAt?: number;
  status: SyncStatus;
  lastSync?: number;
  createdAt: number;
  updatedAt: number;
<<<<<<< HEAD
  expiresAt?: number
  status: SyncStatus
  lastSync?: number,
  config?: Record<string></string>
}

=======
  expiresAt?: number;
  status: SyncStatus;
  lastSync?: number;
  config?: Record<string, any>;</string>
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export type SyncStatus = 'connected' | 'warning' | 'disconnected';
  status: SyncStatus;
<<<<<<< HEAD
  lastSync?: number
  createdAt: number
  expiresAt?: number,
}

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

}

  status: SyncStatus
  lastSync?: number
  createdAt: number,
}

}

  lastSync?: Date;
  config: Record<string></string>createdAt</string>: Date
  updatedAt: Date,
}

export interface SyncLogEntry {
    id: string
  connectionId: string
  action: string,
  details?: Record<string, any>
  }

  details?: Record<string></string>
}

  details?: Record<string></string>
}

  details?: Record<string></string>
}

  details?: Record<string></string>
}

  details?: Record<string></string>
}

  details?: Record<string></string>
}

  details?: Record<string></string>
}

  details?: Record<string></string>
}

  details?: Record<string></string>
}

  details?: Record<string></string>
}

export interface ManualOverride {
    jobId: string
  disableCrmSync?: boolean,
  disableAtsSync?: boolean
  }

export interface ZapierEvent {
    id: string
  type: 'zion.job.posted' | 'zion.talent.matched'
  timestamp: number,
export interface IntegrationProviderMeta {,
  timestamp: number
  status: 'success' | 'error' | 'warning',
  message: string
  }

export interface ManualOverride {/* TODO: Fix JSX expression */}
}

export interface IntegrationOverride {
    id: string;
  connectionId: string;
  field: string;
  value: unknown
  reason: string
  createdAt: Date,
  updatedAt: Date
  }

export interface IntegrationEvent {/* TODO: Fix JSX expression */}
}

export interface ZapierEvent {
    id: string
  type: 'zion.job.posted' | 'zion.talent.matched'
  timestamp: number,
  payload: Record<string, any>
  }

export interface IntegrationsState {
    connections: ProviderConnection[];
  logs: SyncLogEntry[]
  overrides: ManualOverride[]
  events: ZapierEvent[],
  lastError?: string | null
  }

export interface IntegrationsState {
    connections: ProviderConnection[]
  logs: SyncLogEntry[]
  overrides: ManualOverride[],
  events: ZapierEvent[]
  }
  payload: Record<string></string>
}

export interface ProviderConnection {
    id: string;
  providerId: IntegrationProviderId;
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number
  status: SyncStatus
  lastSync?: number,
  createdAt: number
  }

export interface IntegrationProviderMeta {
    id: IntegrationProviderId
  name: string
  category: 'crm' | 'ats' | 'hr',
  description: string
  }
  logoUrl?: string;
  websiteUrl?: string;
  apiDocsUrl?: string;
}
  payload: Record<string></string>
}
}

export interface IntegrationsState {
    connections: ProviderConnection[];
  logs: SyncLogEntry[]
  overrides: ManualOverride[]
  events: ZapierEvent[],
  lastError?: string | null
  }
}
}
  overrides: IntegrationOverride[]
  events: IntegrationEvent[],
}
=======
  lastSync?: number;
  createdAt: number;
  expiresAt?: number};
export type SyncStatus = 'connected' | 'warning' | 'disconnected'};
  status: SyncStatus;
  lastSync?: number;
  createdAt: number};
};
  lastSync?: Date;
  config: Record<string, unknown>;</string>createdAt</string>: Date;
  updatedAt: Date};
export interface SyncLogEntry {
}
  id: string;
  connectionId: string;
  action: string;
  details?: Record<string, any>};
  details?: Record<string, any>;</string>
};
  details?: Record<string, any>;</string>
};
  details?: Record<string, any>;</string>
};
  details?: Record<string, any>;</string>
};
  details?: Record<string, any>;</string>
};
  details?: Record<string, any>;</string>
};
  details?: Record<string, any>;</string>
};
  details?: Record<string, any>;</string>
};
  details?: Record<string, any>;</string>
};
  details?: Record<string, any>;</string>
};
export interface ManualOverride {
}
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean};
export interface ZapierEvent {
}
  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
export interface IntegrationProviderMeta {
,
}
  timestamp: number;
  status: 'success' | 'error' | 'warning';
  message: string};
export interface ManualOverride {/* TODO: Fix JSX expression */};
};
export interface IntegrationOverride {
}
  id: string;
  connectionId: string;
  field: string;
  value: unknown;
  reason: string;
  createdAt: Date;
  updatedAt: Date};
export interface IntegrationEvent {/* TODO: Fix JSX expression */};
};
export interface ZapierEvent {
}
  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>};
export interface IntegrationsState {
}
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
  lastError?: string | null};
export interface IntegrationsState {
}
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[]};
  payload: Record<string, any>;</string>
};
export interface ProviderConnection {
}
  id: string;
  providerId: IntegrationProviderId;
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
  status: SyncStatus;
  lastSync?: number;
  createdAt: number};
export interface IntegrationProviderMeta {
}
  id: IntegrationProviderId;
  name: string;
  category: 'crm' | 'ats' | 'hr';
  description: string};
  logoUrl?: string;
  websiteUrl?: string;
  apiDocsUrl?: string};
  payload: Record<string, any>;</string>
};
};
export interface IntegrationsState {
}
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];
  lastError?: string | null};
};
};
  overrides: IntegrationOverride[];
  events: IntegrationEvent[]};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
