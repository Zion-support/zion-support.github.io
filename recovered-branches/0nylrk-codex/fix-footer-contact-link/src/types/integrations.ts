
<<<<<<< HEAD
<<<<<<< HEAD
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",

export type IntegrationStatus = "connected" | "warning" | "disconnected",
=======
export type IntegrationType = &quot;crm&quot; | &quot;ats&quot; | &quot;webhook&quot; | &quot;zapier&quot;;

export type IntegrationStatus = &quot;connected&quot; | &quot;warning&quot; | &quot;disconnected&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export interface Integration {
  id: string,
  name: string,
  description: string,
  logoUrl: string,
  status: IntegrationStatus,
  lastSync?: string,
  type: IntegrationType
}

export interface SyncLog {
<<<<<<< HEAD
  id: string,
  integration: string,
  event: string,
  status: "success" | "error" | "warning",
  timestamp: string,
  details: string
}

export type CrmIntegrationEvents = 
  | "contact_synced"
  | "deal_created"
  | "deal_updated"
  | "note_added"
  | "job_synced",

export type AtsIntegrationEvents = 
  | "applicant_created"
  | "candidate_status_changed"
  | "interview_scheduled"
  | "resume_uploaded"
  | "job_posted",
=======
  id: string;
  integration: string;
  event: string;
  status: &quot;success&quot; | &quot;error&quot; | &quot;warning&quot;;
  timestamp: string;
  details: string;
}

export type CrmIntegrationEvents = 
  | &quot;contact_synced&quot;
  | &quot;deal_created&quot;
  | &quot;deal_updated&quot;
  | &quot;note_added&quot;
  | &quot;job_synced&quot;;

export type AtsIntegrationEvents = 
  | &quot;applicant_created&quot;
  | &quot;candidate_status_changed&quot;
  | &quot;interview_scheduled&quot;
  | &quot;resume_uploaded&quot;
  | &quot;job_posted&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
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
  details: string;
}
;
export type CrmIntegrationEvents =;
  | "contact_synced";
  | "deal_created";
  | "deal_updated";
  | "note_added";
  | "job_synced",;
export type AtsIntegrationEvents =;
  | "applicant_created";
  | "candidate_status_changed";
  | "interview_scheduled";
  | "resume_uploaded";
  | "job_posted";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
