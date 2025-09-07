<<<<<<< HEAD

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
=======
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
>>>>>>> merged-prs-20250907-203621

export type IntegrationStatus = "connected" | "warning" | "disconnected",

export interface Integration {;
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  status: IntegrationStatus;
<<<<<<< HEAD
  lastSync?: string,
  type: IntegrationType
}
export interface SyncLog {
=======
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
>>>>>>> merged-prs-20250907-203621
  id: string,
  integration: string,
  event: string,
  status: "success" | "error" | "warning",
  timestamp: string,
<<<<<<< HEAD
  details: string}

export type CrmIntegrationEvents = $2;
export type AtsIntegrationEvents = $2;
=======
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
<<<<<<< HEAD
;
export interface SyncLog {;
  id: string,;
  integration: string,;
  event: string,;
  status: "success" | "error" | "warning",;
  timestamp: string,;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export type CrmIntegrationEvents =;
  | "contact_synced";
  | "deal_created";
  | "deal_updated";
  | "note_added";
<<<<<<< HEAD

=======
<<<<<<< HEAD
  | "job_synced",;
=======
  | "job_synced";
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export type AtsIntegrationEvents =;
  | "applicant_created";
  | "candidate_status_changed";
  | "interview_scheduled";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
  | "resume_uploaded";
  | "job_posted";
  | "resume_uploaded";
  | "job_posted";
=======
<<<<<<< HEAD
  | "resume_uploaded";
  | "job_posted";
  | "resume_uploaded";
  | "job_posted";
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
