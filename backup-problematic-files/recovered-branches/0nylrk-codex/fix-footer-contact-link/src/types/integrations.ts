
export type IntegrationType = "crm" | "ats" | "webhook" | "zapier"
export type IntegrationStatus = "connected" | "warning" | "disconnected"
  status: any
  | "job_posted",; export type CrmIntegrationEvents = | "contact synced" | "deal created" | "deal updated" | "note added" | "job synced"
export type AtsIntegrationEvents = | "applicant created" | "candidate status changed" | "interview scheduled" | "resume uploaded" | "job posted"