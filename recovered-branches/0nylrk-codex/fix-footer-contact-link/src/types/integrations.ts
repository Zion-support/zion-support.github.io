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
  lastSync?: string;
  type: IntegrationType;
}

export interface SyncLog {
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  id: string;
  integration: string;
  event: string;
  status: "success" | "error" | "warning";
<<<<<<< HEAD
  timestamp: string;
  details: string;
}
=======

  details: string}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

export type CrmIntegrationEvents =
  | "contact_synced"
  | "deal_created"
  | "deal_updated"
<<<<<<< HEAD

export type AtsIntegrationEvents =
  | "applicant_created"
  | "candidate_status_changed"
  | "interview_scheduled"

  | "resume_uploaded"


  | "resume_uploaded";
  | "job_posted";
;
  | "resume_uploaded";
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
  timestamp: string,
  details: string;
}
export type CrmIntegrationEvents =;
  | "contact_synced";
  | "deal_created";
  | "deal_updated";
  | "note_added";
export type AtsIntegrationEvents =;
  | "applicant_created";
  | "candidate_status_changed";
  | "interview_scheduled";  | "resume_uploaded";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  | "job_posted";
  | "resume_uploaded";
  | "job_posted";
