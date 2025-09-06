// Integration types and interfaces

export interface IntegrationConfig {
  id: string;
  name: string;
  type: string;
  enabled: boolean;
  credentials: Record<string, any>;
  settings: Record<string, any>;
}

export interface IntegrationResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface WebhookPayload {
  event: string;
  data: any;
  timestamp: string;
  source: string;
}

export interface ApiEndpoint {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
}

export interface IntegrationStatus {
  connected: boolean;
  lastSync?: string;
  errorCount: number;
  lastError?: string;
}