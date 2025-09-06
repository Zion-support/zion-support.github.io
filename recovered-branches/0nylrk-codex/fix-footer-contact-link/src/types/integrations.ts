
<<<<<<< HEAD
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
=======
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

export type IntegrationStatus = "connected" | "warning" | "disconnected",

<<<<<<< HEAD
export interface Integration {;
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  status: IntegrationStatus;
=======
export interface Integration {
  id: string,
  name: string,
  description: string,
  logoUrl: string,
  status: IntegrationStatus,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  lastSync?: string,
  type: IntegrationType
}

<<<<<<< HEAD
export interface SyncLog {;
  id: string;
  integration: string;
  event: string;
  status: "success" | "error" | "warning";
=======
export interface SyncLog {
  id: string,
  integration: string,
  event: string,
  status: "success" | "error" | "warning",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  timestamp: string,
  details: string
}

export type CrmIntegrationEvents = 
  | "contact_synced"
  | "deal_created"
  | "deal_updated"
<<<<<<< HEAD
  | "note_added";
  | "job_synced";
=======
  | "note_added"
  | "job_synced",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

export type AtsIntegrationEvents = 
  | "applicant_created"
  | "candidate_status_changed"
  | "interview_scheduled"
<<<<<<< HEAD
=======
  | "resume_uploaded"
  | "job_posted",
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",;
export type IntegrationStatus = "connected" | "warning" | "disconnected",;
export interface Integration {;
  id: string,;
  name: string,;
  description: string,;
  logoUrl: string,;
  status: IntegrationStatus,;
  lastSync?: string,;
  type: IntegrationType;
}
;
export interface SyncLog {;
  id: string,;
  integration: string,;
  event: string,;
  status: "success" | "error" | "warning",;
  timestamp: string,;
  details: string;
}
;
export type CrmIntegrationEvents =;
  | "contact_synced";
  | "deal_created";
  | "deal_updated";
  | "note_added";
  | "job_synced",;
export type AtsIntegrationEvents =;
  | "applicant_created";
  | "candidate_status_changed";
  | "interview_scheduled";
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  | "resume_uploaded";
  | "job_posted";
