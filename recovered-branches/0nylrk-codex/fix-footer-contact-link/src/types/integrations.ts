<<<<<<< HEAD
export type IntegrationStatus = "connected" | "warning" | "disconnected",

  lastSync?: string,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
;"
export type IntegrationStatus = "connected" | "warning" | "disconnected";
;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface Integration {
=======
export interface Integration {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
  name: string;
  description: string;
  logo_url: string;
  status: IntegrationStatus;
<<<<<<< HEAD

export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export interface Integration {
  id: string,
  name: string,
  description: string,
  logoUrl: string,
  status: IntegrationStatus,
<<<<<<< HEAD

  lastSync?: string,
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  type: IntegrationType
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  type: IntegrationType
  last_sync?: string,
=======
  lastSync?: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  type: IntegrationType;
}

<<<<<<< HEAD

export interface SyncLog {;
  id: string;
  integration: string;
  event: string;"
  status: "success" | "error" | "warning";
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export interface SyncLog {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  id: string;
  integration: string;
  event: string;
  status: "success" | "error" | "warning";
<<<<<<< HEAD
  timestamp: string
  id: string,
  integration: string,
  event: string,
  status: "success" | "error" | "warning",
  timestamp: string,
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  details: string
=======
  timestamp: string;
  details: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
=======

  details: string}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
  lastSync?: string;
  type: IntegrationType;
}

export interface SyncLog {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
  integration: string;
  event: string;
  status: "success" | "error" | "warning";
details: string}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export type CrmIntegrationEvents ="
  | "contact_synced""
  | "deal_created""
  | "deal_updated"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export type AtsIntegrationEvents =
<<<<<<< HEAD
  | "job_synced",

<<<<<<< HEAD
export type AtsIntegrationEvents =

  | "applicant_created"
  | "candidate_status_changed"
  | "interview_scheduled"
  | "job_posted";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type CrmIntegrationEvents =;
  | "contact_synced";
  | "deal_created";
  | "deal_updated";
  | "note_added";
| "job_synced";
;
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  | "job_posted";
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
