<<<<<<< HEAD
=======

export type IntegrationCategory = 'crm' | 'ats';export type IntegrationCategory = 'crm' | 'ats';export type IntegrationCategory = 'crm' | 'ats';ursor/fix-website-loading-errors-and-merge-6662;
export type IntegrationCategory = 'crm' | 'ats';export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';export type IntegrationProviderId =;
  | 'salesforce';
  | 'hubspot';
  | 'zoho';
  | 'pipedrive';
  | 'greenhouse';
  | 'lever';export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationCategory = 'crm' | 'ats';

export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
export type IntegrationProviderId =;
  | 'salesforce';
  | 'hubspot';
  | 'zoho';
  | 'pipedrive';
  | 'greenhouse';
  | 'lever';
  | 'workable';| 'bamboohr';| 'workable';
  | 'bamboohr';
export interface IntegrationProviderMeta  {id: IntegrationProviderId, name: string,category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string;
}category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string;
}export interface IntegrationProviderMeta  {id: IntegrationProviderId, name: string,category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;export interface IntegrationProviderMeta  {id: IntegrationProviderId, name: string,category: IntegrationCategory, description?: string,  oauth_scopes?: string[];
  icon?: string;
  id: IntegrationProviderId, name: string;
  id: IntegrationProviderId, name: string,category: IntegrationCategory, description?: string,  oauthScopes?: string[];
  icon?: string;
}export type IntegrationCategory = any;
  events: ZapierEvent[];
}export interface SyncRules  {// CRM rules;
  autoCreateContacts?: boolean;
  pushNotesMode?: 'auto' | 'manual';
  // ATS rules;
  autoSyncApplicants?: boolean;autoUploadResumes?: boolean;export interface ProviderConnection  {providerId: IntegrationProviderId;
  status: SyncStatus;
  accessToken?: string;
  refreshToken?: string;expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;export interface SyncLogEntry  {lastError?: string | null;export interface SyncLogEntry  {lastError?: string | null;
export interface SyncLogEntry  {id: string;
  timestamp: number;
  provider_id: IntegrationProviderId;
  level: 'info' | 'warn' | 'error';
  action: string;details?: Record < string, any>;;
export interface ManualOverride  {job_id: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;;export interface ZapierEvent  {export interface ZapierEvent  {export interface ManualOverride  {jobId: string;
  disableCrmSync?: boolean;
  disableAtsSync?: boolean;export interface ZapierEvent  {id: string;
  type: 'zion && zion.job.posted' | 'zion && zion.talent.matched';
  timestamp: number;payload: Record < string, any>;;
export interface IntegrationsState  {export interface ManualOverride  {jobId: string;

export type IntegrationCategory = 'crm' | 'ats';
export type IntegrationProviderId = | 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'greenhouse' | 'lever' | 'workable' | 'bamboohr';export type SyncStatus = 'connected' | 'warning' | 'disconnected';
>>>>>>> origin/merge-pr-12271
export type IntegrationProviderId =
  | 'salesforce'
  | 'hubspot'
  | 'zoho'
  | 'pipedrive'
  | 'greenhouse'
  | 'lever'
  expiresAt?: number;
  connectedAt?: number;
  syncRules?: SyncRules;
  lastSyncAt?: number;
  id: string;
  type: 'zion.job.posted' | 'zion.talent.matched';
  timestamp: number;
  payload: Record<string, any>;
