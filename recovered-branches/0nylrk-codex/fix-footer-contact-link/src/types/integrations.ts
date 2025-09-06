
<<<<<<< HEAD
=======

export type IntegrationStatus = "connected" | "warning" | "disconnected",

  lastSync?: string,

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
;
export type IntegrationStatus = "connected" | "warning" | "disconnected";
;

<<<<<<< HEAD
export interface Integration {
  id: string;
  name: string;
  description: string;
  logo_url: string;
  status: IntegrationStatus;

export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",
=======
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
=======
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",



export type IntegrationStatus = "connected" | "warning" | "disconnected",


=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
  type: IntegrationType
=======
  last_sync?: string,
  type: IntegrationType;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  last_sync?: string,
  type: IntegrationType;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}





<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  details: string
}
export type CrmIntegrationEvents =
  | "contact_synced"
  | "deal_created"
  | "deal_updated"
<<<<<<< HEAD

  timestamp: string,
  details: string;
}
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export type AtsIntegrationEvents =;
  | "applicant_created";
  | "candidate_status_changed";
  | "interview_scheduled";
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  | "note_added"

  | "applicant_created"
  | "candidate_status_changed"
  | "interview_scheduled"

  | "resume_uploaded"


  | "resume_uploaded";
  | "job_posted";
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  | "resume_uploaded";
  | "job_posted";
  | "resume_uploaded";
  | "job_posted";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
