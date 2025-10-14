export type IntegrationCategory = 'crm' | 'ats'
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected'
export type IntegrationProviderId =
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'lever'
export type IntegrationCategory = 'crm' | 'ats'
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected'
export type IntegrationCategory = 'crm' | 'ats'
export type IntegrationProviderId =
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'lever'
  | 'workable'
  | 'bamboohr'
  | 'workable'
  | 'bamboohr'
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauthScopes?: string[]
  icon?: string
export interface IntegrationProviderMeta {
  id: IntegrationProviderId, name: string,
  category: IntegrationCategory, description?: string,  oauthScopes?: string[]
  icon?: string
}
export interface SyncRules {
  // CRM rules
  autoCreateContacts?: boolean
  pushNotesMode?: 'auto' | 'manual'
  // ATS rules
  autoSyncApplicants?: boolean
  autoUploadResumes?: boolean
export interface ProviderConnection {
export interface ProviderConnection {
  providerId: IntegrationProviderId
  status: SyncStatus;  accessToken?: string;  refreshToken?: string
  | 'workable'
  | 'bamboohr'
export interface IntegrationProviderMeta {
  id: IntegrationProviderId
  name: string
  category: IntegrationCategory
  description?: string
  oauthScopes?: string[]
  icon?: string
}
export type SyncStatus = 'connected' | 'warning' | 'disconnected'
export interface SyncRules {
  // CRM rules
  autoCreateContacts?: boolean
  pushNotesMode?: 'auto' | 'manual'
  // ATS rules
  autoSyncApplicants?: boolean
  autoUploadResumes?: boolean
export type SyncStatus = 'connected' | 'warning' | 'disconnected'
export type SyncStatus = 'connected' | 'warning' | 'disconnected'
export type SyncStatus = 'connected' | 'warning' | 'disconnected'
}

export type SyncStatus = 'connected' | 'warning' | 'disconnected'
export interface IntegrationProviderMeta {
    id: string
  name: string
  category: 'crm' | 'ats' | 'hr',
  description: string
  }
}

export type SyncStatus = 'connected' | 'warning' | 'disconnected'
export interface ProviderConnection {
  id: string
  providerId: IntegrationProviderId
  accessToken: string
  refreshToken?: string
  expiresAt?: number,
  config?: Record<string></string>
}
  category: 'crm' | 'ats' | 'hr'
  description: string
  logoUrl?: string
  websiteUrl?: string
  apiDocsUrl?: string,
  id: string
  providerId: IntegrationProviderId
  accessToken: string
  refreshToken?: string
  expiresAt?: number
  config?: Record<string, any></string,>
}
  category: 'crm' | 'ats' | 'hr'
  description: string
  logoUrl?: string
  websiteUrl?: string
  apiDocsUrl?: string
}
export interface ProviderConnection {
  id: string
  providerId: IntegrationProviderId
  name: string
  status: SyncStatus
  accessToken?: string
  refreshToken?: string
  expiresAt?: number
  lastSyncAt?: number
export interface SyncLogEntry {
  lastError?: string | null
export interface SyncLogEntry {
  id: string
  timestamp: number
  provider_id: IntegrationProviderId
  level: 'info' | 'warn' | 'error'
  action: string
  details?: Record<string, any></string,>
export interface ManualOverride {
  job_id: string
  disableCrmSync?: boolean
  disableAtsSync?: boolean
export interface ZapierEvent {
export interface ManualOverride {
  jobId: string
  disableCrmSync?: boolean
  disableAtsSync?: boolean
export interface ZapierEvent {
  id: string
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched'
  timestamp: number
  payload: Record < string, any></>
export interface IntegrationsState {
export interface ManualOverride {
  jobId: string
  disableCrmSync?: boolean
  disableAtsSync?: boolean
export interface ZapierEvent {
  lastError?: string | null
}
export interface SyncLogEntry {
  id: string
  providerId: IntegrationProviderId
  name: string
  status: SyncStatus
}

  status: SyncStatus
  lastSync?: number
}

  status: SyncStatus
  lastSync?: number
  createdAt: number
  updatedAt: number
  status: SyncStatus
  lastSync?: number
  config?: Record<string, any></string,>
  expiresAt?: number
  status: SyncStatus
  lastSync?: number
  createdAt: number
  updatedAt: number
  expiresAt?: number
  status: SyncStatus
  lastSync?: number,
  config?: Record<string></string>
}

export type SyncStatus = 'connected' | 'warning' | 'disconnected'
  status: SyncStatus
  lastSync?: number
  createdAt: number
  expiresAt?: number,
  id: string
  providerId: IntegrationProviderId
  name: string
  status: SyncStatus
  accessToken?: string
  refreshToken?: string
  expiresAt?: number
  lastSyncAt?: number
  createdAt: number
  updatedAt: number
  config?: Record<string, any></string,>
  expiresAt?: number
  status: SyncStatus
  lastSync?: number
  createdAt: number
  updatedAt: number
  expiresAt?: number
  status: SyncStatus
  lastSync?: number
  config?: Record<string, any></string,>
}

export type SyncStatus = 'connected' | 'warning' | 'disconnected'
  status: SyncStatus
  lastSync?: number
  createdAt: number
  expiresAt?: number
}

export type SyncStatus = 'connected' | 'warning' | 'disconnected'
}

  status: SyncStatus
  lastSync?: number
  createdAt: number,
}

}

  lastSync?: Date
  config: Record<string></string>createdAt</string>: Date
  updatedAt: Date,
}

export interface SyncLogEntry {
    id: string
  connectionId: string
  action: string,
  details?: Record<string, any></string,>
  }

  details?: Record<string></string>
}
}

export interface ManualOverride {
    jobId: string
  disableCrmSync?: boolean,
  disableAtsSync?: boolean
  }
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
  id: string
  type: 'zion.job.posted' | 'zion.talent.matched'
  timestamp: number
export interface IntegrationProviderMeta {,
  timestamp: number
  status: 'success' | 'error' | 'warning'
  message: string
}

export interface IntegrationOverride {
    id: string
  connectionId: string
  field: string
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
  payload: Record<string, any></string,>
  }

export interface IntegrationsState {
    connections: ProviderConnection[]
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
  connections: ProviderConnection[]
  logs: SyncLogEntry[]
  overrides: ManualOverride[]
  events: ZapierEvent[]
  lastError?: string | null
}
}
}
}
}
  payload: Record<string, any></string,>
  id: string
  type: 'zion.job.posted' | 'zion.talent.matched'
  timestamp: number
  payload: Record<string, any></string,>
}
export interface ManualOverride {
  jobId: string, disableCrmSync?: boolean,
  disableAtsSync?: boolean
}
export interface ZapierEvent {
  id: string, type: 'zion.job.posted' | 'zion.talent.matched',
  timestamp: number,
  payload: Record<string, any></string,>
}
export interface IntegrationsState {
  connections: ProviderConnection[], logs: SyncLogEntry[],
  overrides: ManualOverride[],
  events: ZapierEvent[]
}
}

export interface IntegrationProviderMeta {
  id: IntegrationProviderId
  name: string
  category: 'crm' | 'ats'
  description: string
  payload: Record<string, any></string,>
}
export interface IntegrationsState {
  connections: ProviderConnection[]
  logs: SyncLogEntry[]
  overrides: ManualOverride[]
  events: ZapierEvent[]
}
}

export interface ProviderConnection {
    id: string
  providerId: IntegrationProviderId
  accessToken: string
  refreshToken?: string
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
  logoUrl?: string
  websiteUrl?: string
  apiDocsUrl?: string
}
  payload: Record<string></string>
}
}

export interface IntegrationsState {
    connections: ProviderConnection[]
  logs: SyncLogEntry[]
  overrides: ManualOverride[]
  events: ZapierEvent[],
  lastError?: string | null
  }
  id: IntegrationProviderId
  name: string
  category: 'crm' | 'ats' | 'hr'
  description: string
}
  logoUrl?: string
  websiteUrl?: string
  apiDocsUrl?: string
}
  payload: Record<string, any></string,>
}
}

export interface IntegrationsState {
  connections: ProviderConnection[]
  logs: SyncLogEntry[]
  overrides: ManualOverride[]
  events: ZapierEvent[]
  lastError?: string | null;}
}
}
  overrides: IntegrationOverride[]
  events: IntegrationEvent[]
}
}
  overrides: IntegrationOverride[]
  events: IntegrationEvent[],
}
