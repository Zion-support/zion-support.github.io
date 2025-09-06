<<<<<<< HEAD

<<<<<<< HEAD
=======

export type IntegrationStatus = "connected" | "warning" | "disconnected",

  lastSync?: string,

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
;
export type IntegrationStatus = "connected" | "warning" | "disconnected";
;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface Integration {
  id: string;
  name: string;
  description: string;
  logo_url: string;
  status: IntegrationStatus;
<<<<<<< HEAD

export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",
=======
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
=======
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",



export type IntegrationStatus = "connected" | "warning" | "disconnected",


=======
  logoUrl: string;
  status: IntegrationStatus;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  type: IntegrationType
  last_sync?: string,
  type: IntegrationType;
<<<<<<< HEAD
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
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface SyncLog {
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======





>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  details: string
}
export type CrmIntegrationEvents =
  | "contact_synced"
  | "deal_created"
  | "deal_updated"
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
  details: string;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type CrmIntegrationEvents =;
  | "contact_synced";
  | "deal_created";
  | "deal_updated";
  | "note_added";
<<<<<<< HEAD
<<<<<<< HEAD
  | "job_synced";
;
=======
  | "job_synced",;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type AtsIntegrationEvents =;
  | "applicant_created";
  | "candidate_status_changed";
  | "interview_scheduled";
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
