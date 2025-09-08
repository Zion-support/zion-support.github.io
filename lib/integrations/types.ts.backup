export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationProviderId =
<<<<<<< HEAD


ursor/fix-website-loading-errors-and-merge-6662

export type IntegrationCategory = 'crm' | 'ats';



export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationCategory = 'crm' | 'ats';


=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
export type IntegrationCategory = 'crm' | 'ats';

export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export type IntegrationProviderId =;'
  | 'salesforce';'
  | 'hubspot';'
  | 'zoho';'
  | 'pipedrive';'
  | 'greenhouse';'
  | 'lever';
<<<<<<< HEAD


export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationProviderId =

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
<<<<<<< HEAD

  | 'lever'
  | 'workable';

  id: IntegrationProviderId, name: string,;
  category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string
}





export interface SyncRules {

  // CRM rules;
  autoCreateContacts?: boolean;'
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules;
  autoSyncApplicants?: boolean;




  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;


=======

export type IntegrationCategory = 'crm' | 'ats';

export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationProviderId =
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
>>>>>>> origin/cursor/delete-old-data-records-6bba

  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;


origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD




=======
  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;'
  level: 'info' | 'warn' | 'error';
  action: string;

  details?: Record < string, any>;
;
  details?: Record<string, any>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
export interface ManualOverride {

  job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;
<<<<<<< HEAD



=======
;
export interface ZapierEvent {

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

export interface IntegrationsState {


>>>>>>> origin/cursor/delete-old-data-records-6bba
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

export interface ManualOverride {;
  jobId: string;
  disableCrmSync?: boolean;
<<<<<<< HEAD


  disableAtsSync?: boolean;

export interface ZapierEvent {;
  id: string;'
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;

  | 'salesforce
  | hubspot'
  | 'zoho
  | pipedrive'
  | 'greenhouse

  id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: info' | 'warn | error';
  action: string;





=======
  disableAtsSync?: boolean;export interface ZapierEvent  {id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];
  events: ZapierEvent[];  events: ZapierEvent[];
}}
}
}
}
}export interface IntegrationsState  {ursor/fix-website-loading-errors-and-merge-6662;
  connections: ProviderConnection[];
  logs: SyncLogEntry[];
  overrides: ManualOverride[];lastError?: string | null;
}export interface SyncLogEntry  {id: string, timestamp: number,providerId: IntegrationProviderId, level: 'info' | 'warn' | 'error',action: string,details?: Record<string, any>;
}
export interface ManualOverride  {jobId: string, disableCrmSync?: boolean,disableAtsSync?: boolean;
  events: ZapierEvent[];  events: ZapierEvent[]
}


  lastError?: string | null
}
  lastError?: string | null
}
origin/cursor/expand-services-advertise-and-build-project-c28b


  lastError?: string | null
}
export interface SyncLogEntry {
  id: string, timestamp: number,

  providerId: IntegrationProviderId, level: 'info' | 'warn' | 'error',
  action: string,
  details?: Record<string, any>
}
export interface ManualOverride {}
  jobId: string, disableCrmSync?: boolean,;
  disableAtsSync?: boolean;
}
export interface ZapierEvent {'
  id: string, type: 'zion.job.posted' | 'zion.talent.matched',
  timestamp: number,
  payload: Record<string, any>
}
export interface IntegrationsState {}
  connections: ProviderConnection[], logs: SyncLogEntry[],
  overrides: ManualOverride[],
  events: ZapierEvent[]
}
}
  events: ZapierEvent[];  events: ZapierEvent[];
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
