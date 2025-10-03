export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type IntegrationProviderId =;
  | 'salesforce';
  | 'hubspot';
  | 'zoho';
  | 'pipedrive';
  | 'greenhouse';
  | 'lever';
  | 'workable';
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
export interface SyncLogEntry {/* content */}
  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;

  details?: Record < string, any>;
;

export interface ManualOverride {/* content */}
  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

;

export interface ZapierEvent {/* content */}
  id: string;
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched';
  timestamp: number;

  payload: Record < string, any>;
;

export interface IntegrationsState {/* content */}
export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {;
  id: string;
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched';
  timestamp: number;


  payload: Record < string, any>;
;

export interface IntegrationsState {/* content */}
export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];  events: ZapierEvent[]
}

}
}
}
}
}

export interface IntegrationsState {;

  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];


export interface SyncLogEntry {/* content */}
  id: string, timestamp: number,
  providerId: IntegrationProviderId, level: 'info' | 'warn' | 'error',
  action: string,
  details?: Record<string, any>
}

export interface ManualOverride {/* content */}
  jobId: string, disableCrmSync?: boolean,
  disableAtsSync?: boolean
}

export interface ZapierEvent {/* content */}
  id: string, type: 'zion.job.posted' | 'zion.talent.matched',
  timestamp: number,
  payload: Record<string, any>
}

export interface IntegrationsState {/* content */}
  connections: ProviderConnection[], logs: SyncLogEntry[],
  overrides: ManualOverride[],
  events: ZapierEvent[]
}
}
  payload: Record<string, any>;
export interface IntegrationsState {/* content */}
export interface IntegrationsState {;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  lastError?: string | null
}


  events: ZapierEvent[];  events: ZapierEvent[];
}
  events: ZapierEvent[];  events: ZapierEvent[];
}

}
}
}
}
}
