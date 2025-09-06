
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",
=======
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
=======
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",
<<<<<<< HEAD



export type IntegrationStatus = "connected" | "warning" | "disconnected",


=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export interface Integration {
  id: string,
  name: string,
  description: string,
  logoUrl: string,
  status: IntegrationStatus,
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  details: string
}
export type CrmIntegrationEvents =
  | "contact_synced"
  | "deal_created"
  | "deal_updated"
<<<<<<< HEAD

<<<<<<< HEAD
export type AtsIntegrationEvents = 

  | "applicant_created"
  | "candidate_status_changed"
  | "interview_scheduled"

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
