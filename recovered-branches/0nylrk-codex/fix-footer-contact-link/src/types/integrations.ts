
export type IntegrationStatus = "connected" | "warning" | "disconnected",

  lastSync?: string,

==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
;
export type IntegrationStatus = "connected" | "warning" | "disconnected";
;

export type IntegrationStatus = "connected" | "warning" | "disconnected",

export interface Integration {;
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  status: IntegrationStatus;
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",
=======
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier";
=======
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",



export type IntegrationStatus = "connected" | "warning" | "disconnected",

=======export interface Integration {
  id: string,
  name: string,
  description: string,
  logoUrl: string,
  status: IntegrationStatus,




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

  lastSync?: string,>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  type: IntegrationType
=======
  lastSync?: string,
  type: IntegrationType
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
  last_sync?: string,
  type: IntegrationType;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}





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

  timestamp: string,
  details: string;
}=======
  timestamp: string,
  details: string;
}export type CrmIntegrationEvents =;
  | "contact_synced";
  | "deal_created";
  | "deal_updated";
  | "note_added";
  | "note_added"

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
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  | "resume_uploaded";
  | "job_posted";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
