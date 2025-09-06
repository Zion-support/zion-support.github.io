


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export type ServiceType = "service" | "talent" | "equipment" | "";
export type ServiceCategory = string;
export type TimelineType = "fixed" | "flexible";
export type BudgetType = "fixed" | "hourly" | "range";
<<<<<<< HEAD

=======
export interface ListingItem {
  id: string;
  title: string;
  category: string
  image?: string
}
export interface ContactInfo {

export interface ListingItem {;
  id: string;
  title: string;
  category: string,
  image?: string
}

export interface ContactInfo {;
  name: string;
  email: string;
  phone: string
  company: string
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
export interface ListingItem {


export interface ListingItem {;

  id: string;
  title: string;
  category: string,
  image?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}


export interface ContactInfo {;


  name: string;
  email: string;

  phone: string,
  company: string;
}
export interface Budget {
  amount: number;
  max_amount?: number,
  type: BudgetType;

}
export interface QuoteFormData {
  service_type: ServiceType;
  service_category: ServiceCategory;
  specific_item: ListingItem | null;
  project_name: string;
  project_description: string;
  start_date?: Date;
  end_date?: Date;
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


export interface Budget {;

<<<<<<< HEAD
=======
export interface Budget {

export interface Budget {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  amount: number;
  maxAmount?: number
  type: BudgetType
}


export interface QuoteFormData {;

<<<<<<< HEAD
=======
export interface QuoteFormData {

export interface QuoteFormData {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  serviceType: ServiceType;
  serviceCategory: ServiceCategory;
  specificItem: ListingItem | null;
  projectName: string;
  projectDescription: string;
  startDate?: Date;
  endDate?: Date;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  timeline: TimelineType;

  budget: Budget,
  contact_info: ContactInfo;
}
export type QuoteStatus = 'new' | 'in_review' | 'accepted' | 'responded' | 'closed' | 'archived';
;

export interface QuoteRequest {
=======
=======
;

export interface QuoteRequest {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


export interface QuoteRequest {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  timeline: TimelineType;
  budget: Budget
  contactInfo: ContactInfo
}
export type QuoteStatus = 'new' | 'in_review' | 'accepted' | 'responded' | 'closed' | 'archived';
export interface QuoteRequest {

export interface QuoteRequest {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  id: string;
  talent_id: string;
  talent_name?: string;
  requester_id?: string;
  requester_name: string;
  requester_email: string;
  project_name: string;
  project_summary: string;
  project_description?: string;
  budget_min?: number;
  budget_max?: number;
  budget_display?: string;
  timeline: string;
  start_date?: string;
  status: QuoteStatus;
  is_archived: boolean;
  viewed_at?: string;
  replied_at?: string;
<<<<<<< HEAD

  created_at: string,
  updated_at: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  created_at: string

  updated_at: string
}
export type ServiceType = "service" | "talent" | "equipment" | "",
export type ServiceCategory = string,
export type TimelineType = "fixed" | "flexible",
export type BudgetType = "fixed" | "hourly" | "range",

export interface ListingItem {
  id: string,
  title: string,
  category: string,
  image?: string
export type ServiceType = "service" | "talent" | "equipment" | "",;
export type ServiceCategory = string,;
export type TimelineType = "fixed" | "flexible",;
export type BudgetType = "fixed" | "hourly" | "range",;
export interface ListingItem {;
  id: string,;
  title: string,;
  category: string,;
  image?: string;
}
;
export interface ContactInfo {;
  name: string,;
  email: string,;
  phone: string,;
  company: string;
}
;
export interface Budget {;
  amount: number,;
  maxAmount?: number,;
  type: BudgetType;
}
;
export interface QuoteFormData {;
  serviceType: ServiceType,;
  serviceCategory: ServiceCategory,;
  specificItem: ListingItem | null,;
  projectName: string,;
  projectDescription: string,;
  startDate?: Date,;
  endDate?: Date,;
  timeline: TimelineType,;
  budget: Budget,;
  contactInfo: ContactInfo;
}
;
export type QuoteStatus = 'new' | 'in_review' | 'accepted' | 'responded' | 'closed' | 'archived',;
export interface QuoteRequest {;
  id: string,;
  talent_id: string,;
  talent_name?: string,;
  requester_id?: string,;
  requester_name: string,;
  requester_email: string,;
  project_name: string,;
  project_summary: string,;
  project_description?: string,;
  budget_min?: number,;
  budget_max?: number,;
  budget_display?: string,;
  timeline: string,;
  start_date?: string,;
  status: QuoteStatus,;
  is_archived: boolean,;
  viewed_at?: string,;
  replied_at?: string,;
  created_at: string;
  updated_at: string;
}
;
  created_at: string,
  updated_at: string;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
