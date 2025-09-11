
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type ServiceType = "service" | "talent" | "equipment" | "";
export type ServiceCategory = string;
export type TimelineType = "fixed" | "flexible";
export type BudgetType = "fixed" | "hourly" | "range";
<<<<<<< HEAD
<<<<<<< HEAD
=======

;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export interface ListingItem {
  id: string;
  title: string;
  category: string
  image?: string
}
export interface ContactInfo {

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

;
export interface ListingItem {

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export interface ListingItem {;

  id: string;
  title: string;
  category: string,
  image?: string;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


export interface Budget {;

<<<<<<< HEAD
export interface Budget {

export interface Budget {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
  name: string;
  email: string;
  phone: string
  company: string
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  amount: number;
  maxAmount?: number
  type: BudgetType
}


export interface QuoteFormData {;

<<<<<<< HEAD
<<<<<<< HEAD
export interface QuoteFormData {

export interface QuoteFormData {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  serviceType: ServiceType;
  serviceCategory: ServiceCategory;
  specificItem: ListingItem | null;
  projectName: string;
  projectDescription: string;
  startDate?: Date;
  endDate?: Date;
<<<<<<< HEAD
<<<<<<< HEAD
;

export interface QuoteRequest {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  timeline: TimelineType;

  budget: Budget,
  contact_info: ContactInfo;
}
export type QuoteStatus = 'new' | 'in_review' | 'accepted' | 'responded' | 'closed' | 'archived';
;

export interface QuoteRequest {
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export interface QuoteRequest {;

<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  created_at: string,
  updated_at: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
