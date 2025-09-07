export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";"
;"
export type IntegrationStatus = "connected" | "warning" | "disconnected";"
;

export interface Integration {
  // TODO: Implement
}
  id: string;,
  name: string;
  description: string;,
  logo_url: string;
  status: IntegrationStatus;
  lastSync?: string;
  type: IntegrationType;

export interface SyncLog {
  // TODO: Implement
  integration: string;
  event: string;,"
  status: "success" | "error" | "warning";"
  timestamp: string;,
  details: string;

export type CrmIntegrationEvents ="
  | "contact_synced"""
  | "deal_created"""
  | "deal_updated""
export type AtsIntegrationEvents ="
  | "applicant_created"""
  | "candidate_status_changed"""
  | "interview_scheduled"""
  | "resume_uploaded"""
  | "resume_uploaded";""
  | "job_posted";"
  | "job_posted";""