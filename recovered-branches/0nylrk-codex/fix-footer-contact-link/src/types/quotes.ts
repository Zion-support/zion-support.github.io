
<<<<<<< HEAD
export type ServiceType = "service" | "talent" | "equipment" | "",
export type ServiceCategory = string,
export type TimelineType = "fixed" | "flexible",
export type BudgetType = "fixed" | "hourly" | "range",
=======
export type ServiceType = &quot;service&quot; | &quot;talent&quot; | &quot;equipment&quot; | "&quot;;
export type ServiceCategory = string;
export type TimelineType = &quot;fixed&quot; | &quot;flexible&quot;;
export type BudgetType = &quot;fixed&quot; | &quot;hourly&quot; | &quot;range";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
export interface ListingItem {
  id: string,
  title: string,
  category: string,
  image?: string
}

export interface ContactInfo {
  name: string,
  email: string,
  phone: string,
  company: string
}

export interface Budget {
  amount: number,
  maxAmount?: number,
  type: BudgetType
}

export interface QuoteFormData {
  serviceType: ServiceType,
  serviceCategory: ServiceCategory,
  specificItem: ListingItem | null,
  projectName: string,
  projectDescription: string,
  startDate?: Date,
  endDate?: Date,
  timeline: TimelineType,
  budget: Budget,
  contactInfo: ContactInfo
}
=======
export interface ListingItem {_id: string;
  title: string;
  category: string;
  image?: string;}

export interface ContactInfo {_name: string;
  email: string;
  phone: string;
  company: string;}

export interface Budget {_amount: number;
  maxAmount?: number;
  type: BudgetType;}

export interface QuoteFormData {_serviceType: ServiceType;
  serviceCategory: ServiceCategory;
  specificItem: ListingItem | null;
  projectName: string;
  projectDescription: string;
  startDate?: Date;
  endDate?: Date;
  timeline: TimelineType;
  budget: Budget;
  contactInfo: ContactInfo;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type QuoteStatus = 'new' | 'in_review' | 'accepted' | 'responded' | 'closed' | 'archived',

<<<<<<< HEAD
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
=======
export interface QuoteRequest {_id: string;
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
  updated_at: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
