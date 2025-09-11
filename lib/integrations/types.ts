
export type IntegrationCategory = 'crm' | 'ats';


export type IntegrationCategory = 'crm' | 'ats';
=======export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type IntegrationProviderId =;
  | 'salesforce';
  | 'hubspot';
  | 'zoho';
  | 'pipedrive';
  | 'greenhouse';
  | 'lever';
  | 'bamboohr';

  | 'workable';
  | 'bamboohr';
export interface IntegrationProviderMeta {


  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}




=======

export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;

export interface ZapierEvent {;

  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;


export interface IntegrationsState {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];


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
=======
=======
  lastError?: string | null
}
=======
=======
  lastError?: string | null
}
export interface SyncLogEntry {
  id: string, timestamp: number,
  providerId: IntegrationProviderId, level: 'info' | 'warn' | 'error',
  action: string,
  details?: Record<string, any>
}
export interface ManualOverride {
  jobId: string, disableCrmSync?: boolean,
  disableAtsSync?: boolean
}
export interface ZapierEvent {
  id: string, type: 'zion.job.posted' | 'zion.talent.matched',
  timestamp: number,
  payload: Record<string, any>
}
export interface IntegrationsState {
  connections: ProviderConnection[], logs: SyncLogEntry[],
  overrides: ManualOverride[],
  events: ZapierEvent[]
}
=======
  events: ZapierEvent[];  events: ZapierEvent[];
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
