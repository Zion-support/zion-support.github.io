<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD


=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export type ServiceType = "service" | "talent" | "equipment" | "";
export type ServiceCategory = string;"
export type TimelineType = "fixed" | "flexible";"
export type BudgetType = "fixed" | "hourly" | "range";
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export interface ListingItem {
  id: string;
  title: string;
  category: string
  image?: string
}
export interface ContactInfo {

export interface ListingItem {;
<<<<<<< HEAD

  id: string;
  title: string;
  category: string;
  image?: string;

}

export interface ContactInfo {;

  name: string;
  email: string;
  phone: string;
  company: string;
}

  phone: string,
  company: string;
}

export interface Budget {;

  name: string;
  email: string;
  phone: string
  company: string
}

export interface Budget {

export interface Budget {;

  amount: number;
  maxAmount?: number;
  type: BudgetType;
}

=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export interface ListingItem {
<<<<<<< HEAD
  id: string;
  title: string;
  category: string
  image?: string
}
export interface ContactInfo {
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export interface ListingItem {;

  id: string;
  title: string;
  category: string;
  image?: string;
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}

export interface ContactInfo {;

  name: string;
  email: string;
  phone: string;
  company: string;
}

  phone: string,
  company: string;
}

export interface Budget {;

  name: string;
  email: string;
  phone: string
  company: string
}
<<<<<<< HEAD
=======
export interface QuoteFormData {
  service_type: ServiceType;
  service_category: ServiceCategory;
  specific_item: ListingItem | null;
  project_name: string;
  project_description: string;
  start_date?: Date;
  end_date?: Date;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export interface Budget {

export interface Budget {;

<<<<<<< HEAD
export interface Budget {

export interface Budget {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  amount: number;
  maxAmount?: number;
  type: BudgetType;
}

<<<<<<< HEAD
=======

export interface QuoteFormData {;

<<<<<<< HEAD
export interface QuoteFormData {

export interface QuoteFormData {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  serviceType: ServiceType;
  serviceCategory: ServiceCategory;
  specificItem: ListingItem | null;
  projectName: string;
  projectDescription: string;
  startDate?: Date;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  endDate?: Date;
<<<<<<< HEAD
;

export interface QuoteRequest {
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  timeline: TimelineType;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  timeline: TimelineType;
  budget: Budget;
  contactInfo: ContactInfo;
}

export type QuoteStatus =
  | "new"
  | "in_review"
  | "accepted"
  | "responded"
  | "closed"

  | "archived";

export interface QuoteRequest {
<<<<<<< HEAD

export interface QuoteRequest {;

=======
<<<<<<< HEAD

export interface QuoteRequest {;

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


export interface QuoteRequest {;

<<<<<<< HEAD
  timeline: TimelineType;
  budget: Budget
  contactInfo: ContactInfo
}
export type QuoteStatus = 'new' | 'in_review' | 'accepted' | 'responded' | 'closed' | 'archived';
export interface QuoteRequest {

export interface QuoteRequest {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
  created_at: string

  updated_at: string
}
export type ServiceType = "service" | "talent" | "equipment" | "",
export type ServiceCategory = string,
export type TimelineType = "fixed" | "flexible",
export type BudgetType = "fixed" | "hourly" | "range",
>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
  updated_at: string
}
=======
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

=======

<<<<<<< HEAD
  updated_at: string
}
=======
  created_at: string,
  updated_at: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
