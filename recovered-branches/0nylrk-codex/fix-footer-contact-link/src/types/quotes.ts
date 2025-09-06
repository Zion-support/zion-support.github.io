
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export type ServiceType = "service" | "talent" | "equipment" | "";
export type ServiceCategory = string;
export type TimelineType = "fixed" | "flexible";
export type BudgetType = "fixed" | "hourly" | "range";
<<<<<<< HEAD
export interface ListingItem {
=======
<<<<<<< HEAD
export interface ListingItem {
=======

export interface ListingItem {;

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  id: string;
  title: string;
  category: string
  image?: string
}
<<<<<<< HEAD
export interface ContactInfo {
=======


export interface ContactInfo {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  name: string;
  email: string;
  phone: string
  company: string
}
<<<<<<< HEAD
export interface Budget {
  amount: number;
  maxAmount?: number
  type: BudgetType
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


export interface Budget {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  amount: number;
  maxAmount?: number
  type: BudgetType
}
<<<<<<< HEAD
export interface QuoteFormData {
=======

export interface QuoteFormData {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  serviceType: ServiceType;
  serviceCategory: ServiceCategory;
  specificItem: ListingItem | null;
  projectName: string;
  projectDescription: string;
  startDate?: Date;
  endDate?: Date;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  timeline: TimelineType;
  budget: Budget
  contactInfo: ContactInfo
}
export type QuoteStatus = 'new' | 'in_review' | 'accepted' | 'responded' | 'closed' | 'archived';
<<<<<<< HEAD
export interface QuoteRequest {
=======
<<<<<<< HEAD
export interface QuoteRequest {
=======


export interface QuoteRequest {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
  created_at: string

<<<<<<< HEAD
  updated_at: string
}
=======
  created_at: string,
  updated_at: string;
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
