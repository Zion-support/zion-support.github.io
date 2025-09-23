
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";

export type IntegrationStatus = "connected" | "warning" | "disconnected";

export interface Integration {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  status: IntegrationStatus;
  lastSync?: string;
  type: IntegrationType;
