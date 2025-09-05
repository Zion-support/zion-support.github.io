
<<<<<<< HEAD
export type ServiceType = "service" | "talent" | "equipment" | "",;
export type ServiceCategory = string,;
export type TimelineType = "fixed" | "flexible",;
export type BudgetType = "fixed" | "hourly" | "range",;
;
export interface ListingItem {;
  id:string,;
  title:string,;
  category:string,;
  image?:string;
=======
export type ServiceType = "service" | "talent" | "equipment" | "",
export type ServiceCategory = string,
export type TimelineType = "fixed" | "flexible",
export type BudgetType = "fixed" | "hourly" | "range",
export interface ListingItem {
  id: string,
  title: string,
  category: string,
  image?: string
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export interface ContactInfo {;
  name:string,;
  email:string,;
  phone:string,;
  company:string;
}
;
export interface Budget {;
  amount:number,;
  maxAmount?:number,;
  type:BudgetType;
}
;
export interface QuoteFormData {;
  serviceType:ServiceType,;
  serviceCategory:ServiceCategory,;
  specificItem:ListingItem | null,;
  projectName:string,;
  projectDescription:string,;
  startDate?:Date,;
  endDate?:Date,;
  timeline:TimelineType,;
  budget:Budget,;
  contactInfo:ContactInfo;
}
<<<<<<< HEAD
;
export type QuoteStatus = 'new' | 'in_review' | 'accepted' | 'responded' | 'closed' | 'archived',;
;
export interface QuoteRequest {;
  id:string,;
  talent_id:string,;
  talent_name?:string,;
  requester_id?:string,;
  requester_name:string,;
  requester_email:string,;
  project_name:string,;
  project_summary:string,;
  project_description?:string,;
  budget_min?:number,;
  budget_max?:number,;
  budget_display?:string,;
  timeline:string,;
  start_date?:string,;
  status:QuoteStatus,;
  is_archived:boolean,;
  viewed_at?:string,;
  replied_at?:string,;
  created_at:string,;
  updated_at:string;
}
=======
export type QuoteStatus = 'new' | 'in_review' | 'accepted' | 'responded' | 'closed' | 'archived',

export interface QuoteRequest {
  id: string,
  talent_id: string,
  talent_name?: string,
  requester_id?: string,
  requester_name: string,
  requester_email: string,
  project_name: string,
  project_summary: string,
  project_description?: string,
  budget_min?: number,
  budget_max?: number,
  budget_display?: string,
  timeline: string,
  start_date?: string,
  status: QuoteStatus,
  is_archived: boolean,
  viewed_at?: string,
  replied_at?: string,
  created_at: string,
  updated_at: string
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
