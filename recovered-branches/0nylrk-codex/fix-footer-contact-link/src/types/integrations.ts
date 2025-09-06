


export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
;
export type IntegrationStatus = "connected" | "warning" | "disconnected";
;



export interface Integration {
  id: string;
  name: string;
  description: string;
  logo_url: string;
  status: IntegrationStatus;

export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";

export interface SyncLog {
  id: string;
  integration: string;
  event: string;
  status: "success" | "error" | "warning";


  details: string
}

export type CrmIntegrationEvents =
  | "contact_synced"
  | "deal_created"
  | "deal_updated"

  | "note_added";
  | "job_synced";
  | "note_added"
  | "job_synced";
export type AtsIntegrationEvents =
  | "job_synced",

export type AtsIntegrationEvents =
  | "applicant_created"
  | "candidate_status_changed"
  | "interview_scheduled"
  | "resume_uploaded"

export type AtsIntegrationEvents =;
  | "applicant_created";
  | "candidate_status_changed";
  | "interview_scheduled";


