export type IntegrationCategory = 'crm' | 'ats' | 'email' | 'analytics';
export type IntegrationProviderId = 
  | 'salesforce' 
  | 'hubspot' 
  | 'zoho' 
  | 'pipedrive' 
  | 'greenhouse' 
  | 'lever' 
  | 'workable' 
  | 'bamboohr
  | 'mailchimp
  | 'sendgrid
  | 'google_analytics
  | 'mixpanel';

export type SyncStatus = 'connected' | 'warning' | 'disconnected';

export interface IntegrationProviderMeta {
  id: IntegrationProviderId;
  name: string;
  category: IntegrationCategory;
  description?: string;
  icon?: string;
  oauthScopes?: string[];
}

export interface ProviderConnection {
  id: string;
  providerId: IntegrationProviderId;
  status: SyncStatus;
  lastSync?: string;
  config: Record<string, any>;
  createdAt: string;
  updatedAt: string;

export interface SyncLogEntry {
  timestamp: string;
  connectionId: string;
  action: string;
  status: 'success' | 'error' | 'warning';
  details?: string;
  result?: string;
  error?: string;

export interface IntegrationsState {
  connections: ProviderConnection[];
  syncLogs: SyncLogEntry[];
  lastSync: string | null;

export interface SyncResult {
  success: boolean;
  logs: SyncLogEntry[];

export interface IntegrationConfig {
  apiKey?: string;
  secretKey?: string;
  webhookUrl?: string;
  customFields?: Record<string, any>;