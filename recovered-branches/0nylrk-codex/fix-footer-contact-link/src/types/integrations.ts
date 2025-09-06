

export type IntegrationStatus = "connected" | "warning" | "disconnected",

  lastSync?: string,

=======
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
;
export type IntegrationStatus = "connected" | "warning" | "disconnected";
;

=======
<<<<<<< HEAD

export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
export type IntegrationStatus = "connected" | "warning" | "disconnected";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export interface Integration {
  id: string;
  name: string;
  description: string;
<<<<<<< HEAD
  logo_url: string;
  status: IntegrationStatus;

=======
  logoUrl: string;
  status: IntegrationStatus;
  lastSync?: string
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",
<<<<<<< HEAD
<<<<<<< HEAD



export type IntegrationStatus = "connected" | "warning" | "disconnected",


=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

export type IntegrationStatus = "connected" | "warning" | "disconnected",

export interface Integration {;
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  status: IntegrationStatus;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export interface Integration {
  id: string,
  name: string,
  description: string,
  logoUrl: string,
  status: IntegrationStatus,
<<<<<<< HEAD
<<<<<<< HEAD

  lastSync?: string,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  type: IntegrationType
=======
  last_sync?: string,
  type: IntegrationType;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}

<<<<<<< HEAD
export interface SyncLog {

  timestamp: string,
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  details: string
}
export type CrmIntegrationEvents =
  | "contact_synced"
  | "deal_created"
  | "deal_updated"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
export type AtsIntegrationEvents = 

  | "applicant_created"
  | "candidate_status_changed"
  | "interview_scheduled"

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
  timestamp: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  details: string;
}
=======
  details: string;
}
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export type CrmIntegrationEvents =;
  | "contact_synced";
  | "deal_created";
  | "deal_updated";
  | "note_added";
<<<<<<< HEAD
  | "job_synced";
;
=======
  | "job_synced",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export type AtsIntegrationEvents =;
  | "applicant_created";
  | "candidate_status_changed";
  | "interview_scheduled";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  | "resume_uploaded";
  | "job_posted";

=======
=======

  | "note_added"

  | "applicant_created"
  | "candidate_status_changed"
  | "interview_scheduled"

  | "resume_uploaded"


  | "resume_uploaded";
  | "job_posted";
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  | "resume_uploaded";
  | "job_posted";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  | "resume_uploaded";
  | "job_posted";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
