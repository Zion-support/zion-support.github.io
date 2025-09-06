
=======
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
  type:IntegrationType;}
;
export interface SyncLog {;
  id:string,;
  integration:string,;
  event:string,;
  status:"success" | "error" | "warning",;
  timestamp:string,;
  details:string;
}
;
export type CrmIntegrationEvents = ;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  | "contact_synced";
  | "deal_created";
  | "deal_updated";
  | "note_added";
<<<<<<< HEAD

  | "applicant_created";
  | "candidate_status_changed";
  | "interview_scheduled";
  | "resume_uploaded";

