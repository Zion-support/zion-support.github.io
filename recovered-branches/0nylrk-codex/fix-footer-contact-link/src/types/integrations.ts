
<<<<<<< HEAD
<<<<<<< HEAD

export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
export type IntegrationStatus = "connected" | "warning" | "disconnected";
export interface Integration {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  status: IntegrationStatus;
  lastSync?: string
=======
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",
=======
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
=======
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  type: IntegrationType
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export interface SyncLog {;
  id: string;
  integration: string;
  event: string;
  status: "success" | "error" | "warning";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export interface SyncLog {
<<<<<<< HEAD
  id: string;
  integration: string;
  event: string;
  status: "success" | "error" | "warning";
  timestamp: string
=======
  id: string,
  integration: string,
  event: string,
  status: "success" | "error" | "warning",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  timestamp: string,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
  | "job_synced";
export type AtsIntegrationEvents =
=======
  | "job_synced",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

export type AtsIntegrationEvents = 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  | "applicant_created"
  | "candidate_status_changed"
  | "interview_scheduled"
<<<<<<< HEAD
=======
  | "resume_uploaded"
<<<<<<< HEAD
<<<<<<< HEAD
  | "job_posted";

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
