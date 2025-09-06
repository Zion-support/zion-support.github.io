<<<<<<< HEAD
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
  last_sync?: string,
  type: IntegrationType;
}
export interface SyncLog {
  id: string;
  integration: string;
  event: string;
  status: "success" | "error" | "warning";
  timestamp: string,
  details: string;
}
export type CrmIntegrationEvents =;
=======

export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",;
;
export type IntegrationStatus = "connected" | "warning" | "disconnected",;
;
export interface Integration {;
  id:string,;
  name:string,;
  description:string,;
  logoUrl:string,;
  status:IntegrationStatus,;
  lastSync?:string,;
  type:IntegrationType;}
;
export interface SyncLog {;
  id:string,;
  integration:string,;
  event:string,;
  status:"success" | "error" | "warning",;
  timestamp:string,;
  details:string;
}
;
export type CrmIntegrationEvents = ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  | "contact_synced";
  | "deal_created";
  | "deal_updated";
  | "note_added";
<<<<<<< HEAD
  | "job_synced";
;
export type AtsIntegrationEvents =;
=======
  | "job_synced",;
;
export type AtsIntegrationEvents = ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  | "applicant_created";
  | "candidate_status_changed";
  | "interview_scheduled";
  | "resume_uploaded";
<<<<<<< HEAD
  | "job_posted";
;
=======
  | "job_posted",; export type CrmIntegrationEvents = | "contact synced" | "deal created" | "deal updated" | "note added" | "job synced";
export type AtsIntegrationEvents = | "applicant created" | "candidate status changed" | "interview scheduled" | "resume uploaded" | "job posted";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
