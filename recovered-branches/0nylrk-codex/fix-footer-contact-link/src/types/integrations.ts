
export type IntegrationType = $2;
export type IntegrationStatus = $2;
export interface Integration {
  id: string,
  name: string,
  description: string,
  logoUrl: string,
  status: IntegrationStatus,
  lastSync?: string,
  type: IntegrationType}

export type IntegrationStatus = "connected" | "warning" | "disconnected",

export interface Integration {;
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  status: IntegrationStatus;
  lastSync?: string,
  type: IntegrationType
}
export interface SyncLog {
  id: string,
  integration: string,
  event: string,
  status: "success" | "error" | "warning",
  timestamp: string,
  details: string}

export type CrmIntegrationEvents = $2;
export type AtsIntegrationEvents = $2;