
<<<<<<< HEAD
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",;
;
export type IntegrationStatus = "connected" | "warning" | "disconnected",;
;
export interface Integration {;
  id:string,;
  name:string,;
  description:string,;
  logoUrl:string,;
  status:IntegrationStatus,;
  lastSync?:string,;
  type:IntegrationType;
=======
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier",

export type IntegrationStatus = "connected" | "warning" | "disconnected",
export interface Integration {
  id: string,
  name: string,
  description: string,
  logoUrl: string,
  status: IntegrationStatus,
  lastSync?: string,
  type: IntegrationType
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export interface SyncLog {;
  id:string,;
  integration:string,;
  event:string,;
  status:"success" | "error" | "warning",;
  timestamp:string,;
  details:string;
}
<<<<<<< HEAD
;
export type CrmIntegrationEvents = ;
  | "contact_synced";
  | "deal_created";
  | "deal_updated";
  | "note_added";
  | "job_synced",;
;
export type AtsIntegrationEvents = ;
  | "applicant_created";
  | "candidate_status_changed";
  | "interview_scheduled";
  | "resume_uploaded";
  | "job_posted",;
=======
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
