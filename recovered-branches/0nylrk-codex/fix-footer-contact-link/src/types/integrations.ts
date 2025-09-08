<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export type IntegrationStatus = "connected" | "warning" | "disconnected",

  lastSync?: string,

<<<<<<< HEAD

=======
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
;"
export type IntegrationStatus = "connected" | "warning" | "disconnected";
;


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
export interface Integration {

  id: string;
  name: string;
  description: string;
  logo_url: string;
  status: IntegrationStatus;

  lastSync?: string
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",

export type IntegrationStatus = "connected" | "warning" | "disconnected",

export interface Integration {;
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  status: IntegrationStatus;

export interface Integration {
  id: string,
  name: string,
  description: string,
  logoUrl: string,
  status: IntegrationStatus,
  id: string,
  integration: string,
  event: string,
  status: "success" | "error" | "warning",
  timestamp: string,
  details: string}

export type CrmIntegrationEvents = $2;
export type AtsIntegrationEvents = $2;

  type: IntegrationType
  last_sync?: string,

  type: IntegrationType;
}

export interface SyncLog {;

  id: string;
  integration: string;
  event: string;"
  status: "success" | "error" | "warning";

export interface SyncLog {

  id: string;
  integration: string;
  event: string;
  status: "success" | "error" | "warning";

  details: string

}

  id: string;
  integration: string;
  event: string;
  status: "success" | "error" | "warning";

export type CrmIntegrationEvents ="
  | "contact_synced""
  | "deal_created""
  | "deal_updated"

  | "job_posted";

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

;
export interface SyncLog {;
  id: string,;
  integration: string,;
  event: string,;
  status: "success" | "error" | "warning",;
  timestamp: string,;

>>>>>>> origin/cursor/delete-old-data-records-6bba
export type CrmIntegrationEvents =;
  | "contact_synced";
  | "deal_created";
  | "deal_updated";
  | "note_added";


export type AtsIntegrationEvents =;
  | "applicant_created";
  | "candidate_status_changed";
  | "interview_scheduled";

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  | "note_added"

  | "applicant_created"
  | "candidate_status_changed"
  | "interview_scheduled"

  | "resume_uploaded"

  | "resume_uploaded";

  | "job_posted";

export type AtsIntegrationEvents =
  | "applicant_created"
  | "candidate_status_changed"
  | "interview_scheduled"

  | "resume_uploaded"

  | "resume_uploaded";
  | "job_posted";
;
<<<<<<< HEAD




=======
  | "resume_uploaded";
  | "job_posted";
  | "resume_uploaded";
  | "job_posted";
  | "resume_uploaded";
  | "job_posted";
  | "resume_uploaded";
  | "job_posted";
>>>>>>> origin/cursor/delete-old-data-records-6bba
