export type IntegrationStatus = "connected" | "warning" | "disconnected",

  lastSync?: string,

<<<<<<< HEAD

export type IntegrationStatus = "connected" | "warning" | "disconnected",

  lastSync?: string,

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
;"
export type IntegrationStatus = "connected" | "warning" | "disconnected";
;

<<<<<<< HEAD
  logoUrl: string;
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
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface Integration {
  id: string,
  name: string,
  description: string,
  logoUrl: string,
  status: IntegrationStatus,
<<<<<<< HEAD
  last_sync?: string,
  type: IntegrationType;
}





  lastSync?: string,
  type: IntegrationType
}

export interface SyncLog {;
  id: string;
  integration: string;
  event: string;
  status: "success" | "error" | "warning";
export interface SyncLog {
  id: string;
  integration: string;
  event: string;
  status: "success" | "error" | "warning";
  timestamp: string
  id: string,
  integration: string,
  event: string,
  status: "success" | "error" | "warning",
  timestamp: string,
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
  timestamp: string,
  details: string;
}
  details: string;
}
;
=======

  | "job_posted";

  | "job_posted",
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",;
export type IntegrationStatus = "connected" | "warning" | "disconnected",;
export interface Integration {;
  id: string,;
  name: string,,
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

export type CrmIntegrationEvents =;
  | "contact_synced";
  | "deal_created";
  | "deal_updated";
  | "note_added";

export type AtsIntegrationEvents =;
  | "applicant_created";
  | "candidate_status_changed";
  | "interview_scheduled";

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
  | "resume_uploaded";
  | "job_posted";
  | "resume_uploaded";
  | "job_posted";