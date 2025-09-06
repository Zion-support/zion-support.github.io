export type ServiceType = "service" | "talent" | "equipment" | "";
export type ServiceCategory = string;
export type TimelineType = "fixed" | "flexible";
export type BudgetType = "fixed" | "hourly" | "range";
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface ListingItem {
  id: string;
  title: string;
  category: string
  image?: string
}
<<<<<<< HEAD
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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export interface ListingItem {;

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
export interface Budget {
  amount: number;
  maxAmount?: number;
  type: BudgetType;
}


export interface QuoteFormData {;

<<<<<<< HEAD
<<<<<<< HEAD
=======
export interface QuoteFormData {

export interface QuoteFormData {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  serviceType: ServiceType;
  serviceCategory: ServiceCategory;
  specificItem: ListingItem | null;
  projectName: string;
  projectDescription: string;
  startDate?: Date;
  endDate?: Date;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


export interface QuoteRequest {;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  timeline: TimelineType;
export interface QuoteRequest {
<<<<<<< HEAD

export interface QuoteRequest {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  created_at: string;
  updated_at: string;
}
