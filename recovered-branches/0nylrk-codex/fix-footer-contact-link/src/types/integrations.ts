export type IntegrationType = "crm"ats" | " | "zapier";";
export type IntegrationStatus = " | "warning"disconnected";";
export interface Integration {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  name: string
  description: string
  logoUrl: string
  status: IntegrationStatus
  lastSync?: string
  type: IntegrationType
}
export interface SyncLog {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  integration: string
  event: string
  status: "success"error" | ""
  timestamp: string
  details: string
}
export type CrmIntegrationEvents =;
  | ""
  | ""
  | ""
  | ""
  | ";";
export type AtsIntegrationEvents =;
  | ""
  | ""
  | ""
  | ""
  | "