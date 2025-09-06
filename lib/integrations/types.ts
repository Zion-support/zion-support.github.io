export type IntegrationCategory = 'crm' | 'ats',

export type IntegrationProviderId =
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'lever'
  | 'workable'
  | 'bamboohr',

export interface IntegrationProviderMeta {
  id: IntegrationProviderId,
  name: string,
  category: IntegrationCategory,
  description?: string,
  oauthScopes?: string[],
  icon?: string
}

export type SyncStatus = 'connected' | 'warning' | 'disconnected',

export interface SyncRules {
  // CRM rules
  autoCreateContacts?: boolean,
  pushNotesMode?: 'auto' | 'manual',
